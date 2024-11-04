<script lang="ts">
  // Config
  const tiltStrong = 30;
  const lightPower = 0.5;
  const size = 150;
  const linearGradient =
    'radial-gradient(circle, rgba(194,188,170,1) 30%, rgba(227,224,217,0.7931547619047619) 100%)';

  // 'radial-gradient(circle, rgba(84,66,9,1) 3%, rgba(241,164,7,0.7931547619047619) 71%)';

  let backgroundElement: HTMLDivElement;
  let foregroundElement: HTMLDivElement;
  let backgroundX: number = 0;
  let backgroundY: number = 0;
  let foregroundX: number = 0;
  let foregroundY: number = 0;

  // To simulate lighting effect
  let lightX: number = 50;
  let lightY: number = 50;
  let isHovering: boolean = false; // Track hover state

  // Function to handle mouse movement
  function handleMouseMove(event: MouseEvent): void {
    const { left, top, width, height } =
      backgroundElement.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    // Background tilts more dramatically (simulate it's further away)
    backgroundX = (mouseX / width - 0.5) * tiltStrong;
    backgroundY = (mouseY / height - 0.5) * tiltStrong;

    // Foreground tilts with a smaller value (simulate it's closer)
    foregroundX = (mouseX / width - 0.5) * tiltStrong * 1.5;
    foregroundY = (mouseY / height - 0.5) * tiltStrong * 1.5;

    // Calculate light position (convert mouse position to percentage for CSS gradient)
    lightX = (mouseX / width) * 100;
    lightY = (mouseY / height) * 100;

    // Mark that the user is hovering
    isHovering = true;

    // Apply transitions for smooth movement
    backgroundElement.style.transition = 'transform 0.1s ease-out';
    foregroundElement.style.transition = 'transform 0.1s ease-out';
  }

  // Function to reset the tilt and light position when the mouse leaves
  function handleMouseLeave(): void {
    // Smooth reset for both background and foreground
    backgroundElement.style.transition = 'transform 1s ease';
    foregroundElement.style.transition = 'transform 1s ease';

    // Reset values for both background and foreground
    backgroundX = 0;
    backgroundY = 0;
    foregroundX = 0;
    foregroundY = 0;

    // Remove the lighting effect by resetting `isHovering`
    isHovering = false;

    // Reset the background gradient (only base gradient remains)
    backgroundElement.style.background = getGradient();
  }

  // Helper function to get the gradient for the background
  function getGradient(): string {
    // A simple linear gradient as base
    return linearGradient;
  }
</script>

<!-- Tilt wrapper containing both layers -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="tilt-wrapper"
  style=" width: {size}px; height: {size}px;"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <!-- Background layer with a more exaggerated tilt -->
  <div
    bind:this={backgroundElement}
    class="tilt-background"
    style="transform: rotateX({backgroundY}deg) rotateY({-backgroundX}deg); background: {isHovering
      ? `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255, 255, 255, ${lightPower}), rgba(255, 255, 255, 0)), ${getGradient()}`
      : getGradient()};"
  ></div>

  <!-- Foreground content with a smaller tilt for depth perspective -->
  <div
    bind:this={foregroundElement}
    class="content"
    style="transform: rotateX({foregroundY}deg) rotateY({-foregroundX}deg) translateZ(50px);"
  >
    <slot />
  </div>
</div>

<style>
  /* Apply perspective to the wrapper */
  .tilt-wrapper {
    perspective: 400px;
    position: relative;
  }

  /* Background layer with exaggerated tilt and dynamic light */
  .tilt-background {
    border-radius: 10%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Background behind the content */
    transition:
      transform 0.1s ease-out,
      background 0.3s ease; /* Add background transition */
  }

  /* Foreground content with smaller tilt and translateZ for 3D effect */
  .content {
    border-radius: 10%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2; /* Foreground above the background */
    transition: transform 0.1s ease-out; /* Initial transition */
    transform: translateZ(50px); /* Pull forward for depth */
    gap: 5px;
  }
</style>

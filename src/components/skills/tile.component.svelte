<script lang="ts">
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
    backgroundX = (mouseX / width - 0.5) * 30;
    backgroundY = (mouseY / height - 0.5) * 30;

    // Foreground tilts with a smaller value (simulate it's closer)
    foregroundX = (mouseX / width - 0.5) * 45;
    foregroundY = (mouseY / height - 0.5) * 45;

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

    // Remove the lighting effect
    isHovering = false;
  }
</script>

<!-- Tilt wrapper containing both layers -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="tilt-wrapper"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <!-- Background layer with a more exaggerated tilt -->
  <div
    bind:this={backgroundElement}
    class="tilt-background"
    style="transform: rotateX({backgroundY}deg) rotateY({-backgroundX}deg); background: {isHovering
      ? `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`
      : 'lightcoral'}, lightcoral;"
  >
    <slot name="background" />
  </div>

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
    perspective: 1000px;
    position: relative;
    width: 300px;
    height: 300px;
  }

  /* Background layer with exaggerated tilt and dynamic light */
  .tilt-background {
    width: 100%;
    height: 100%;
    background-color: lightcoral; /* Base background color */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Background behind the content */
    transition: transform 0.1s ease-out; /* Add background transition */
  }

  /* Foreground content with smaller tilt and translateZ for 3D effect */
  .content {
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
  }
</style>

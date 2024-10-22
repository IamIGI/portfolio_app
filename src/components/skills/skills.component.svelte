<script lang="ts">
  import { onMount } from 'svelte';
  import Scene from './animation/scene.component.svelte';
  import Tile from './tile.component.svelte';

  let showScene = false;
  let shapesElement: HTMLDivElement | null = null;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showScene = true; // Load the Scene component when visible
          observer.disconnect(); // Stop observing after it's loaded
        }
      });
    });

    if (shapesElement) {
      observer.observe(shapesElement);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="wrapper">
  <div class="content">
    <Tile>
      <!-- <div slot="background">Background</div> -->
      <!-- <div> -->
      <img
        class="skill-icon"
        src="/svg/skills/typescript.svg"
        alt="typescript"
      />
      <p>TypeScript</p>
      <!-- </div> -->
    </Tile>
  </div>
  <div class="shapes" bind:this={shapesElement}>
    {#if showScene}
      <Scene />
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    outline: 1px solid purple;
    padding: 15px;
    height: 500px;
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  .content {
    outline: 1px solid red;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: var(--main-background-color);
      font-size: 20px;
      font-weight: 700;
    }
  }

  .skill-icon {
    $size: 150px;
    height: $size;
    width: $size;
  }

  .shapes {
    height: 700px;
    outline: 1px solid green;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

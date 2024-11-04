<script lang="ts">
  import { onMount } from 'svelte';
  import Scene from './animation/scene.component.svelte';
  import Tile from './tile.component.svelte';
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';

  let showScene = false;
  let shapesElement: HTMLDivElement | null = null;

  const skills: { iconName: string; title: string }[] = [
    { iconName: 'typescript', title: 'TypeScript' },
    { iconName: 'svelte', title: 'Svelte' },
    { iconName: 'mongodb', title: 'MongoDB' },
    { iconName: 'sql', title: 'SQL' },
    { iconName: 'nodejs', title: 'NodeJS' },
    { iconName: 'javascript', title: 'JavaScript' },
    { iconName: 'react', title: 'React' },
    { iconName: 'redux', title: 'Redux' },
    { iconName: 'git', title: 'GIT' },
    { iconName: 'jira', title: 'Jira' },
    { iconName: 'confluence', title: 'Confluence' },
    { iconName: 'scss', title: 'Sass/Scss' },
  ];

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
  <SectionTitle
    title={'Technology Stack.'}
    description={'Technologies I use to build responsive, full-featured web applications for my personal and commercial projects'}
  />
  <div class="inner-wrapper">
    <div class="content">
      {#each skills as skill}
        <Tile>
          <img
            class="skill-icon"
            src={`/svg/skills/${skill.iconName}.svg`}
            alt="typescript"
          />
          <p>{skill.title}</p>
        </Tile>
      {/each}
    </div>
    <div class="shapes" bind:this={shapesElement}>
      {#if showScene}
        <Scene />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 7%;

    @media (max-width: 1250px) {
      padding: 0 0 0 4%;
    }

    @media (max-width: 850px) {
      padding: 0 5%;
    }
  }

  .inner-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1250px) {
      gap: 0rem;
    }

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  .content {
    height: 100%;
    $width: 500px;
    min-width: $width;
    max-width: $width;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      color: var(--main-background-color);
      font-size: 20px;
      font-weight: 700;
    }

    .skill-icon {
      $size: 70px;
      height: $size;
      width: $size;
      border-radius: 10%;
    }

    @media (max-width: 1250px) {
      $width: 400px;
      min-width: $width;
      max-width: $width;
      p {
        font-size: 16px;
      }
      .skill-icon {
        $size: 50px;
        height: $size;
        width: $size;
      }
    }

    @media (max-width: 850px) {
      width: 100%;
      min-width: none;
      max-width: none;
    }
  }

  .shapes {
    z-index: 10;
    aspect-ratio: 2 / 1.5; // This fix problem with scaling the SCENE
    overflow: hidden;

    width: 100%; /* Make it responsive to container's width */
    max-width: 900px;
    max-height: 700px;

    @media (max-width: 500px) {
      display: none;
    }
  }
</style>

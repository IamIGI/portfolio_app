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
    /* outline: 1px solid purple; */
    /* padding: 15px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .inner-wrapper {
    /* outline: 1px solid purple; */
    /* padding: 15px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .content {
    height: 100%;
    width: 40%;
    max-width: 1060px;
    /* outline: 1px solid red; */
    /* flex: 1; */
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
      $size: 100px;
      height: $size;
      width: $size;
      border-radius: 10%;
    }
  }

  .shapes {
    height: 700px;
    /* outline: 1px solid green; */
    width: 60%;
    max-width: 1050px;
    /* flex: 1; // Ensure it takes up more space as defined */
  }
</style>

<script lang="ts">
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';
  import ProjectTile from './ProjectTile.component.svelte';
</script>

<div class="wrapper">
  <SectionTitle
    title={'Projects.'}
    description={'Take a look at my recent projects'}
  />
  <div class="inner-wrapper">
    <ProjectTile />
    <ProjectTile nd2={true} />
  </div>
</div>

<style lang="scss">
  .wrapper {
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
    padding: 0 7%;

    @media (max-width: 1000px) {
      padding: 0 4%;
    }
  }
</style>

<script lang="ts">
  import Welcome from '../components/welcome/welcome.component.svelte';
  import WorkExperience from '../components/workExperience/workExperience.component.svelte';
</script>

<div class="wrapper">
  <Welcome />
  <WorkExperience />
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
  }
</style>

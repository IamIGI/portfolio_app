<script lang="ts">
  import Footer from '../components/footer/footer.component.svelte';
  import NavigateTop from '../components/navigateTop/navigateTop.component.svelte';
  import Skills from '../components/skills/skills.component.svelte';
  import Welcome from '../components/welcome/welcome.component.svelte';
  import WorkExperience from '../components/workExperience/workExperience.component.svelte';
</script>

<div class="wrapper">
  <NavigateTop />
  <Welcome />
  <WorkExperience />
  <Skills />
  <Footer />
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
  }
</style>

<script lang="ts">
  export let title: string;
  export let description: string;
  //   export let imgUrl: string = '/svg/work-experience/link.svg';
</script>

<div class="title-wrapper">
  <h1>{title}</h1>
  <!-- <img src={imgUrl} alt="dot" /> -->
  <h3>
    {description}
  </h3>
</div>

<style lang="scss">
  .title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
    width: 75%;
    margin: auto;
    text-align: center;

    img {
      width: 100px;
      height: 50px;
      filter: var(--color-filter-accent);
    }
    h1 {
      border-bottom: 1px solid var(--color-accent);
      padding: 0 10%;
    }

    @media (max-width: 1050px) {
      width: 85%;
    }
    @media (max-width: 550px) {
      gap: 0.3rem;
    }
  }
</style>

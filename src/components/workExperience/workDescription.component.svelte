<script lang="ts">
  export let experience: T.WorkExperience;
</script>

<div class="work-description-content">
  <h2>{experience.title}</h2>
  <h3>{experience.company}</h3>
  {#if experience.desc}
    <p>
      {experience.desc}
    </p>
  {/if}
  <ul>
    {#if experience.list}
      {#each experience.list as item}
        <li>{item}</li>
      {/each}
    {/if}
  </ul>
</div>

<style lang="scss">
  .work-description-content {
    max-width: 600px;

    border-radius: 7px;
    padding: 20px;

    height: fit-content;
    border: 1px solid #e9ecef;
    box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    h1,
    h2,
    p {
      margin: 0;
      padding: 0;
    }

    p {
      margin-top: 5px;
    }

    ul {
      color: var(--main-second-text-color);
    }

    transition: transform 0.5s;

    &:hover {
      h2 {
        color: var(--color-accent);
      }
      $scale: 1.06;
      -ms-transform: scale($scale); /* IE 9 */
      -webkit-transform: scale($scale); /* Safari 3-8 */
      transform: scale($scale);
    }
  }
</style>

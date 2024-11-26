<script lang="ts">
  import { base } from '$app/paths';

  export let link: string;
  export let name: string;
  export let nd2: boolean;
</script>

<a
  class="link"
  class:link-nd2={nd2}
  href={link}
  target="_blank"
  rel="noopener noreferrer"
>
  <h5>{name}</h5>
  <img
    class="icon"
    class:icon-nd2={nd2}
    src={`${base}/svg/projects/enter.svg`}
    alt="link"
  />
</a>

<style lang="scss">
  .link {
    color: var(--first-font-title-color);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    img {
      $size: 30px;
      height: $size;
      width: $size;
    }
  }
  .link-nd2 {
    color: var(--second-font-title-color);
  }

  .icon {
    filter: var(--first-icon-color);
  }
  .icon-nd2 {
    filter: var(--second-icon-color);
  }

  @media (max-width: 1210px) {
    h5 {
      font-size: 15px;
    }
  }
</style>

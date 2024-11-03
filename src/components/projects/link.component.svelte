<script lang="ts">
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
    src="/svg/projects/enter.svg"
    alt="link"
  />
</a>

<style lang="scss">
  $first-font-title-color: #c3c1c0;
  $first-icon-color: invert(91%) sepia(7%) saturate(59%) hue-rotate(336deg)
    brightness(86%) contrast(91%);

  $second-font-title-color: #4f4d4c;
  $second-icon-color: invert(28%) sepia(8%) saturate(143%) hue-rotate(335deg)
    brightness(96%) contrast(86%);

  .link {
    color: $first-font-title-color;
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
    color: $second-font-title-color;
  }

  .icon {
    filter: $first-icon-color;
  }
  .icon-nd2 {
    filter: $second-icon-color;
  }

  @media (max-width: 1210px) {
    h5 {
      font-size: 15px;
    }
  }
</style>

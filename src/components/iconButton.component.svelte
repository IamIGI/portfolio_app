<script lang="ts">
  export let src: string;
  export let alt: string;
  export let isScrolled: boolean = false;
  export let navigate: string | undefined = undefined;
  export let download: string | undefined = undefined;
  export let textToCopy: string | undefined = undefined;
</script>

<button class="media-icon ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'} ">
  <img
    {src}
    {alt}
    class={` ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'}`}
  />
</button>

<style lang="scss">
  .media-icon {
    background-color: transparent;
    padding: 5px;
    border: none;

    img {
      $size: 45px;
      height: $size;
      width: $size;
    }

    &:hover {
      transition: 0.2s;
      scale: 1.2;
    }
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { handleClick } from '$lib/utils/buttonClick.utils';
  import { base } from '$app/paths';

  export let src: string;
  export let alt: string;
  export let isScrolled: boolean = false;
  export let applyColorFilter: boolean = true;
  export let navigateURL: string | undefined = undefined;
  export let download: string | undefined = undefined;
  export let textToCopy: string | undefined = undefined;
  export let langChange: boolean = false;

  const dispatch = createEventDispatcher<{ onClick: void }>();
</script>

<button
  class="media-icon"
  on:click={() =>
    handleClick(dispatch, navigateURL, download, textToCopy, langChange)}
>
  <img
    src={`${base}${src}`}
    {alt}
    class={`${
      applyColorFilter ? (isScrolled ? 'black-svg-icon' : 'white-svg-icon') : ''
    }`}
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

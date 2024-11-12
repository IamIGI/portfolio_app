<script lang="ts">
  import notificationsUtils from '$lib/utils/notifications.utils';
  import { createEventDispatcher } from 'svelte';

  export let src: string;
  export let alt: string;
  export let isScrolled: boolean = false;
  export let navigateURL: string | undefined = undefined;
  export let download: string | undefined = undefined;
  export let textToCopy: string | undefined = undefined;

  const dispatch = createEventDispatcher<{ onClick: void }>();

  function handleClick() {
    if (navigateURL !== undefined) {
      if (!/^https?:\/\//i.test(navigateURL)) {
        navigateURL = 'https://' + navigateURL;
      }
      window.open(navigateURL, '_blank'); //open in new tab
      return;
    }
    if (download !== undefined) {
      return;
    }
    if (textToCopy !== undefined) {
      navigator.clipboard.writeText(textToCopy);
      notificationsUtils.showInformation('Email skopiowany');
      return;
    }
    //Triggered only when other options are undefined
    dispatch('onClick');
  }
</script>

<button
  class="media-icon ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'} "
  on:click={handleClick}
>
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

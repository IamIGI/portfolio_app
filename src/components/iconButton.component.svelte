<script lang="ts">
  import notificationsUtils from '$lib/utils/notifications.utils';
  import { createEventDispatcher } from 'svelte';
  import languagesStore, { Lang } from '../stores/languages.store';
  import { _ as t } from 'svelte-i18n';
  import { get } from 'svelte/store';

  export let src: string;
  export let alt: string;
  export let isScrolled: boolean = false;
  export let applyColorFilter: boolean = true;
  export let navigateURL: string | undefined = undefined;
  export let download: string | undefined = undefined;
  export let textToCopy: string | undefined = undefined;
  export let langChange: boolean = false;

  const dispatch = createEventDispatcher<{ onClick: void }>();

  function handleClick() {
    dispatch('onClick');

    if (navigateURL !== undefined) {
      if (!/^https?:\/\//i.test(navigateURL)) {
        navigateURL = 'https://' + navigateURL;
      }
      window.open(navigateURL, '_blank'); // open in new tab
      return;
    }
    if (download !== undefined) {
      //Create a html element for download purpose
      const a = document.createElement('a');
      a.href = download;
      a.download = download.split('/').pop() || 'download';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      notificationsUtils.showInformation(get(t)('notifications.cv'));
      window.open(download, '_blank');
      return;
    }
    if (textToCopy !== undefined) {
      navigator.clipboard.writeText(textToCopy);
      notificationsUtils.showInformation(get(t)('notifications.email_copied'));
      return;
    }

    if (langChange) {
      languagesStore.toggleLang();
      notificationsUtils.showInformation(
        get(t)(
          `notifications.lang.${
            languagesStore.getLang() === Lang.PL ? 'pl' : 'en'
          }`
        )
      );
      return;
    }
  }
</script>

<button class="media-icon" on:click={handleClick}>
  <img
    {src}
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

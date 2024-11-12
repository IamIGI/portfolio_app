<script lang="ts">
  import { GLOBAL_VARS } from '$lib/GLOBAL_VAR';
  import IconButton from '../iconButton.component.svelte';

  export let isScrolled: boolean;
</script>

<IconButton
  src="/svg/media/linkedin.svg"
  alt="li"
  {isScrolled}
  navigateURL={GLOBAL_VARS.linkedin}
/>
<IconButton src="/svg/media/document.svg" alt="document" {isScrolled} />
<IconButton
  src="/svg/media/email.svg"
  alt="fb"
  {isScrolled}
  textToCopy={GLOBAL_VARS.email}
/>

<style lang="scss">
</style>

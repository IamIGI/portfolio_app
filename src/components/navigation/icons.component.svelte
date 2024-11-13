<script lang="ts">
  import { GLOBAL_VARS } from '$lib/GLOBAL_VAR';
  import languageStore, { Lang } from '../../stores/languages.store';
  import IconButton from '../iconButton.component.svelte';

  export let isScrolled: boolean;
</script>

<IconButton
  src="/svg/media/linkedin.svg"
  alt="li"
  {isScrolled}
  navigateURL={GLOBAL_VARS.linkedin}
/>
<IconButton
  src="/svg/media/document.svg"
  alt="document"
  {isScrolled}
  download={`./pdf/Igor_Klusek_CV_${$languageStore === Lang.PL ? 'PL' : 'ENG'}.pdf`}
/>
<IconButton
  src="/svg/media/email.svg"
  alt="email"
  {isScrolled}
  textToCopy={GLOBAL_VARS.email}
/>
<IconButton
  src={`/svg/flags/${$languageStore}.svg`}
  alt="flag"
  {isScrolled}
  applyColorFilter={false}
  langChange={true}
/>

<style lang="scss">
</style>

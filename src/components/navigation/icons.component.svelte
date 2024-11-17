<script lang="ts">
  import { GLOBAL_VARS } from '$lib/GLOBAL_VAR';
  import { createEventDispatcher } from 'svelte';
  import languageStore, { Lang } from '../../stores/languages.store';
  import IconButton from '../iconButton.component.svelte';

  export let isScrolled: boolean;

  const dispatch = createEventDispatcher<{ onClick: void }>();
</script>

<IconButton
  src="/svg/media/linkedin.svg"
  alt="li"
  {isScrolled}
  navigateURL={GLOBAL_VARS.linkedin}
  on:onClick={() => dispatch('onClick')}
/>
<IconButton
  src="/svg/media/document.svg"
  alt="document"
  {isScrolled}
  download={`./pdf/Igor_Klusek_CV_${
    $languageStore === Lang.PL ? 'PL' : 'ENG'
  }.pdf`}
  on:onClick={() => dispatch('onClick')}
/>
<IconButton
  src="/svg/media/email.svg"
  alt="email"
  {isScrolled}
  textToCopy={GLOBAL_VARS.email}
  on:onClick={() => dispatch('onClick')}
/>
<IconButton
  src={`/svg/flags/${$languageStore === Lang.PL ? Lang.ENG : Lang.PL}.svg`}
  alt="flag"
  {isScrolled}
  applyColorFilter={false}
  langChange={true}
  on:onClick={() => dispatch('onClick')}
/>

<style lang="scss">
</style>

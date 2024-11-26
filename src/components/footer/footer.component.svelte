<script lang="ts">
  import { GLOBAL_VARS } from '$lib/GLOBAL_VAR';
  import IconButton from '../iconButton.component.svelte';
  import { _ as t } from 'svelte-i18n';
  import languageStore, { Lang } from '../../stores/languages.store';
  import { base } from '$app/paths';
</script>

<div class="footer-wrapper">
  <div class="upper-wrapper">
    <h1>IGOR.</h1>
    <h2>{$t('footer.desc')}</h2>

    <div class="media">
      <IconButton
        src="/svg/media/linkedin.svg"
        alt="li"
        navigateURL={GLOBAL_VARS.linkedin}
      />
      <IconButton
        src="/svg/media/document.svg"
        alt="document"
        download={`./pdf/Igor_Klusek_CV_${
          $languageStore === Lang.PL ? 'PL' : 'ENG'
        }.pdf`}
      />
      <IconButton
        src={`/svg/media/email.svg`}
        alt="fb"
        textToCopy={GLOBAL_VARS.email}
      />
    </div>
  </div>
  <div class="bottom-wrapper">
    <p>© 2024 Igor. Own design</p>
    <img src={`${base}/svg/footer/salsa.svg`} alt="salsa" />
    <img src={`${base}/svg/footer/flamenco.svg`} alt="flamenco" />
  </div>
</div>

<style lang="scss">
  .footer-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 50px 0 30px 0;
    background-color: #3c4858;
    color: white; //TODO: night/day mode

    @media (max-width: 1275px) {
      padding: 30px 0 15px 0;
    }

    @media (max-width: 550px) {
      padding: 0px 0 0px 0;
      gap: 0rem;
    }
  }

  .upper-wrapper {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 10px 0;
    text-align: center;

    .media {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    @media (max-width: 1500px) {
      width: 90%;
    }

    @media (max-width: 1275px) {
      h1 {
        font-size: calc(var(--font-size-h1) - 10px);
      }

      h2 {
        font-size: calc(var(--font-size-h2) - 6px);
      }
    }

    @media (max-width: 1050px) {
      justify-content: center;
      gap: 2rem;
      h2 {
        display: none;
      }
    }
    @media (max-width: 550px) {
      h1 {
        font-size: calc(var(--font-size-h1) - 30px);
      }
    }
  }

  .bottom-wrapper {
    padding: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #49586b;

    img {
      $size: 45px;
      height: $size;
      width: $size;
    }

    @media (max-width: 550px) {
      p {
        font-size: calc(var(--font-size-p) - 3px);
      }

      img {
        $size: 35px;
        height: $size;
        width: $size;
      }
    }
  }
</style>

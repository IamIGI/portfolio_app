<script lang="ts">
  import { GLOBAL_VARS } from '$lib/GLOBAL_VAR';
  import languageStore, { Lang } from '../../stores/languages.store';
  import ContactButton from './contactButton.component.svelte';
  import { _ as t } from 'svelte-i18n';
</script>

<div class="wrapper" id="contact">
  <div class="desc-wrapper">
    <h2>{$t('contact.title')}</h2>
    <p>{$t('contact.desc')}</p>
    <!-- <p>Get in touch</p> -->
  </div>
  <div class="contact-wrapper">
    <ContactButton
      text="email"
      button_color={1}
      textToCopy={GLOBAL_VARS.email}
    />
    <ContactButton
      text="linkedin"
      button_color={2}
      navigateURL={GLOBAL_VARS.linkedin}
    />
    <ContactButton
      text="cv"
      button_color={1}
      download={`./pdf/Igor_Klusek_CV_${
        $languageStore === Lang.PL ? 'PL' : 'ENG'
      }.pdf`}
    />
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 4rem 0;
    /* outline: 1px solid red; */
    @media (max-width: 550px) {
      gap: 1rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }

  .desc-wrapper {
    /* outline: 1px solid blue; */
    padding: 30px 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    border-right: 1px solid gray;
    padding-right: 2rem;
    gap: 4rem;

    p {
      $fontSize: 100px;
      font-size: $fontSize;
      line-height: $fontSize;
    }

    @media (max-width: 550px) {
      width: 40%;
      padding: 20px 0;
      gap: 2rem;
      padding-right: 1rem;
      p {
        $fontSize: 60px;
        font-size: $fontSize;
        line-height: $fontSize;
      }
    }

    @media (max-width: 450px) {
      padding-right: 0.5rem;
      p {
        $fontSize: 55px;
        font-size: $fontSize;
        line-height: $fontSize;
      }
    }
    @media (max-width: 400px) {
      padding: 15px 1rem 0 0;
    }
  }

  .contact-wrapper {
    /* outline: 1px solid green; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.7rem;

    @media (max-width: 800px) {
      gap: 1.3rem;
    }
  }
</style>

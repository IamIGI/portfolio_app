<script lang="ts">
  import ContactButton from './contactButton.component.svelte';
</script>

<div class="wrapper" id="contact">
  <div class="desc-wrapper">
    <h2>CONTACT</h2>
    <p>Let's talk</p>
    <!-- <p>Get in touch</p> -->
  </div>
  <div class="contact-wrapper">
    <ContactButton text="email" button_color={1} />
    <ContactButton text="linkedin" button_color={2} />
    <ContactButton text="resume" button_color={1} />
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
    }
    @media (max-width: 400px) {
      padding: 15px 0;
      padding-right: 1rem;
      p {
        $fontSize: 55px;
        font-size: $fontSize;
        line-height: $fontSize;
      }
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

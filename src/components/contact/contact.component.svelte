<script lang="ts">
</script>

<div class="wrapper" id="contact">
  <div class="desc-wrapper">
    <h2>CONTACT</h2>
    <p>Let's talk</p>
    <!-- <p>Get in touch</p> -->
  </div>
  <div class="contact-wrapper">
    <button class="button_1">
      <span>email</span>
      <img
        src="/svg/media/email.svg"
        alt="li"
        class={`svg-icon white-svg-icon `}
      />
    </button>
    <button class="button_2"
      ><span>Linkedin</span>
      <img
        src="/svg/media/linkedin_2.svg"
        alt="li"
        class={`svg-icon white-svg-icon `}
      /></button
    >
    <button class="button_1"
      ><span>resume</span><img
        src="/svg/media/document.svg"
        alt="li"
        class={`svg-icon white-svg-icon `}
      /></button
    >
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
      gap: 0rem;
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
      button {
        scale: 0.9;
      }
    }

    @media (max-width: 550px) {
      gap: 0.7rem;
      button {
        scale: 0.8;
      }
    }

    @media (max-width: 450px) {
      gap: 0rem;
      button {
        scale: 0.75;
      }
    }

    button {
      font-size: 28px;
      padding: 8px 20px 8px 20px;
      border-radius: 8px;
      border: none;
      min-width: 230px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-transform: uppercase;
      font-weight: 700;
      span {
        text-align: left;
        /* outline: 1px solid red; */
        min-width: 155px;
      }

      .svg-icon {
        /* outline: 1px solid red; */
        $size: 45px;
        height: $size;
        width: $size;
      }
    }

    .button_1 {
      background-color: #232121;
      color: #959392;
      img {
        filter: var(--first-icon-color);
      }
    }
    .button_2 {
      background-color: #d4ccc0;
      color: #959392;
      img {
        filter: var(--second-icon-color);
      }
    }
  }
</style>

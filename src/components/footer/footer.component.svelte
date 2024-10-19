<script lang="ts">
</script>

<div class="footer-wrapper">
  <div class="upper-wrapper">
    <div class="title">IGOR.</div>
    <div class="description">FullStack software developer and salsa dancer</div>
    <div class="media">
      <div class="media-icon">
        <img src="/svg/media/linkedin.svg" alt="li" class={` white-svg-icon`} />
      </div>

      <div class="media-icon">
        <img
          src="/svg/media/document.svg"
          alt="document"
          class={` white-svg-icon`}
        />
      </div>
      <div class="media-icon">
        <img src="/svg/media/facebook.svg" alt="fb" class={` white-svg-icon`} />
      </div>
    </div>
  </div>
  <div class="bottom-wrapper">
    <p>© 2024 Igor. Own design</p>
    <img src="/svg/footer/salsa.svg" alt="salsa" />
    <img src="/svg/footer/flamenco.svg" alt="flamenco" />
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
  }

  .upper-wrapper {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding: 10px 0;

    .title {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .description {
      font-size: 30px;
      font-weight: 700;
    }

    .media {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .media-icon {
        padding: 10px;
        border: 1px solid white;
        border-radius: 7px;
        img {
          $size: 45px;
          height: $size;
          width: $size;
        }
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
  }
</style>

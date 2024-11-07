<script lang="ts">
</script>

<div class="footer-wrapper">
  <div class="upper-wrapper">
    <h1>IGOR.</h1>
    <h2>FullStack software developer and salsa dancer</h2>

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

    @media (max-width: 1275px) {
      padding: 30px 0 15px 0;
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

      .media {
        .media-icon {
          img {
            $size: 35px;
            height: $size;
            width: $size;
          }
        }
      }
    }

    @media (max-width: 1050px) {
      justify-content: center;
      gap: 2rem;
      h2 {
        display: none;
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

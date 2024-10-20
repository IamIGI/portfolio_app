<script lang="ts">
</script>

<div class="welcome-section">
  <!-- Background Video -->
  <video class="background-video" autoplay muted loop>
    <source
      src="/videos/blurred-sunset-while-raining.1920x1080.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

  <!-- Welcome Section Content -->
  <div class="content">
    <div class="desc">
      <h1>I'm <span>Igor Kłusek </span></h1>
      <h2>
        A passionate <span>software developer</span> with a strong foundation in
        software testing, <br />bridging the gap between clean code and quality
        assurance.
      </h2>
    </div>
    <div class="welcome-image">
      <img src="/images/welcome/me_2.png" alt="me" />
    </div>
  </div>
</div>

<style lang="scss">
  .welcome-section {
    position: relative;
    width: 100%;
    height: 100vh;

    // Video Background Styling
    .background-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // Ensures the video covers the entire section
      z-index: -1; // Pushes the video behind content

      // Add a filter to make the video darker
      /* filter: brightness(1) contrast(1.2); // Adjust values to your preference */
      filter: brightness(0.8); // Adjust values to your preference
    }

    // Content of the section
    .content {
      margin: auto;
      width: 90%;
      position: relative;
      z-index: 1; // Make sure the content is above the video

      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      gap: 7rem;

      .desc {
        $alignContent: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: $alignContent;
        text-align: right;
        color: white;
        span {
          color: var(--color-accent);
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 400;
          text-transform: uppercase;

          span {
            font-weight: 700;
          }
        }

        h2 {
          font-weight: 400;
        }
      }

      .welcome-image {
        $size: 600px;
        min-width: $size;
        min-height: $size;
        max-width: $size;
        max-height: $size;
        border-radius: 50%;
        border: 4px solid var(--main-background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transform: rotate(-15deg);
        }
      }
    }

    @media (max-width: 1270px) {
      .content {
        gap: 4rem;

        .desc {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 24px;
          }
        }
        .welcome-image {
          $size: 400px;
          min-width: $size;
          min-height: $size;
          max-width: $size;
          max-height: $size;
        }
      }
    }
  }

  @media (max-width: 810px) {
    .welcome-section {
      height: 70vh;

      .content {
        gap: 4rem;
        flex-direction: column;

        .desc {
          justify-content: center;
          align-items: center;
          text-align: center;

          span {
            color: white;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    .welcome-section {
      height: 700px;

      .content {
        padding-top: 100px;
        gap: 4rem;
        flex-direction: column;
        justify-content: flex-start;

        .desc {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 19px;
          }
        }

        .welcome-image {
          $size: 300px;
          min-width: $size;
          min-height: $size;
          max-width: $size;
          max-height: $size;
        }
      }
    }
  }
</style>

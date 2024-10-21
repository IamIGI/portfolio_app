<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let nameLetters = 'igor'.split('');
  let surnameLetters = 'kłusek'.split('');

  onMount(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.letter-animation',
      {
        y: -300,
        opacity: 0,
        rotate: -10,
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        ease: 'elastic.out(1,0.5)',

        duration: 2.5,
        transformOrigin: 'left top',
        delay: 0.5,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      }
    );
  });
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
      <div class="name">
        <h1>
          {#each nameLetters as letter}
            <span class="letter-animation">{letter}</span>
          {/each}
        </h1>
        <h1>
          {#each surnameLetters as letter}
            <span class="letter-animation">{letter}</span>
          {/each}
        </h1>
      </div>
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
      filter: brightness(0.75); // Adjust values to your preference
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

      .name {
        .letter-animation {
          display: inline-block;
          opacity: 0;
        }
      }

      .desc {
        $alignContent: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: $alignContent;
        text-align: right;
        color: white;
        gap: 3rem;

        span {
          color: var(--color-accent);
        }

        h1 {
          margin: 0;
          padding: 0;

          color: var(--color-accent);
          $fontSize: 6rem;
          font-size: $fontSize;
          line-height: $fontSize;
          /* font-weight: 400; */
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
            $fontSize: 3.5rem;
            font-size: $fontSize;
            line-height: $fontSize;
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

          h1 {
            color: white;
          }
          span {
            color: white;
            font-weight: 700;
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
            $fontSize: 2.5rem;
            font-size: $fontSize;
            line-height: $fontSize;
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

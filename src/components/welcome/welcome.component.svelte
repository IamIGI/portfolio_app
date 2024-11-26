<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { _ as t } from 'svelte-i18n';
  import { base } from '$app/paths';

  let nameLetters = 'igor'.split('');
  let surnameLetters = 'kłusek'.split('');
  let videoName = 'geometric-shapes.1920x1080.mp4';

  onMount(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.to('.letter-animation', { opacity: 1 });
      gsap.to('.job-animation', { opacity: 1 });
      gsap.to('.welcome-image', { opacity: 1 });
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      '.letter-animation',
      {
        y: -200,
        x: -200,
        opacity: 0,
        rotate: -40,
      },
      {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: 'back.out(3)',

        duration: 0.2,
        delay: 0.1,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      }
    );

    tl.fromTo(
      '.job-animation',
      {
        y: 20,
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale: 1,
        ease: 'elastic.out(1,0.3)',
      }
    );
    tl.fromTo(
      '.welcome-image',
      {
        y: 40,
        opacity: 0,
        scale: 1.3,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scale: 1,
        ease: 'elastic.out(1,0.3)',
      }
    );
  });

  function preventContextMenu(event: MouseEvent) {
    event.preventDefault(); // Disable right-click and context menu
  }
</script>

<div class="welcome-section" id="home">
  <!-- Background Video -->
  <video
    class="background-video"
    autoplay
    muted
    loop
    playsinline
    disablePictureInPicture
    controls={false}
    on:contextmenu={preventContextMenu}
  >
    <source src={`${base}/videos/${videoName}`} type="video/mp4" />
    Ups. Your browser does not support the video tag.
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
        {$t('welcome.desc_1')}<span class="job-animation"
          >{$t('welcome.job_title')}</span
        >
        {$t('welcome.desc_2')}
      </h2>
    </div>
    <div class="welcome-image">
      <img src={`${base}/images/welcome/me_2.png`} alt="me" />
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
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // Ensures the video covers the entire section
      z-index: -1; // Pushes the video behind content

      // Add a filter to make the video darker
      /* filter: brightness(1) contrast(1.2); // Adjust values to your preference */
      filter: brightness(1); // Adjust values to your preference

      /* Optional: Hide fullscreen button on iOS and mobile browsers */
      &::-webkit-media-controls-fullscreen-button {
        display: none;
      }

      @media (max-width: 550px) {
        filter: brightness(0.9);
      }
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
          /* Both this property are required for animations to work */
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
        max-width: 1100px;

        .job-animation {
          display: inline-block;
          opacity: 0;
          color: var(--color-accent-welcome);
        }

        h1 {
          margin: 0;
          padding: 0;

          color: var(--color-accent-welcome);
          color: var(--color-accent-welcome);
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

          span {
            padding-left: 5px;
            font-size: 40px;
            font-weight: 700;
          }
        }
      }

      .welcome-image {
        opacity: 0;
        $size: 600px;
        min-width: $size;
        min-height: $size;
        max-width: $size;
        max-height: $size;
        border-radius: 50%;
        border: 4px solid var(--color-accent-welcome);
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

  @media (max-width: 1000px) {
    .welcome-section {
      height: 900px;
      min-height: 800px;

      .content {
        gap: 2rem;
        flex-direction: column;

        .desc {
          display: block;
          align-content: center;
          text-align: center;

          h1 {
            /* color: white; */
          }
          span {
            /* color: white; */
            font-weight: 700;
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .welcome-section {
      min-height: 650px;

      .content {
        padding-top: 60px;
        gap: 1rem;

        /* justify-content: flex-start; */

        .desc {
          gap: 1rem;
          h1 {
            $fontSize: 2rem;
            font-size: $fontSize;
            line-height: $fontSize;
          }

          h2 {
            font-size: 19px;
            span {
              font-size: 30px;
            }
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

  @media (max-width: 550px) {
    .welcome-section {
      min-height: 600px;
    }
  }

  @media (max-width: 500px) {
    .welcome-section {
      height: 100vh;
    }
  }
</style>

<script lang="ts">
  import gsap from 'gsap';

  export let experience: T.WorkExperience;
  export let fromWhere: 'left' | 'right'; //From where animation should begin

  let observer: IntersectionObserver;
  let containerRef: HTMLDivElement;
  const xStartPosition = 800;

  function animateWorkExperience() {
    // const prefersReducedMotion = window.matchMedia(
    //   '(prefers-reduced-motion: reduce)'
    // ).matches;
    // if (prefersReducedMotion) {
    //   gsap.to('.work-description-content', { opacity: 1 });
    //   return;
    // }

    const tl = gsap.timeline();
    tl.fromTo(
      containerRef,
      {
        x: (fromWhere === 'right' ? 1 : -1) * xStartPosition,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 0.5,
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
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1,0.3)',
      }
    );
  }

  function observeElement(node: HTMLElement): { destroy(): void } {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio) {
            //Element is in user view;
            animateWorkExperience();
          }
        });
      },
      {
        root: null, // Uses the viewport as the container to observe
        threshold: 0.1, // Fires when at least 10% of the element is visible
      }
    );

    // Observe the provided node
    observer.observe(node);
    // Clean up observer when element is removed
    return {
      destroy() {
        observer.disconnect();
      },
    };
  }
</script>

<div
  use:observeElement
  class="work-description-content"
  bind:this={containerRef}
>
  <h2>{experience.title}</h2>
  <h3>{experience.company}</h3>
  {#if experience.desc}
    <p>
      {experience.desc}
    </p>
  {/if}
  <ul>
    {#if experience.list}
      {#each experience.list as item}
        <li>{item}</li>
      {/each}
    {/if}
  </ul>
</div>

<style lang="scss">
  .work-description-content {
    opacity: 0;

    max-width: 600px;
    border-radius: 7px;
    padding: 20px;

    height: fit-content;
    border: 1px solid #e9ecef;
    box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    h1,
    h2,
    p {
      margin: 0;
      padding: 0;
    }

    p {
      margin-top: 5px;
    }

    ul {
      color: var(--main-second-text-color);
    }

    transition: transform 0.5s;

    &:hover {
      h2 {
        color: var(--color-accent);
      }
      $scale: 1.06;
      -ms-transform: scale($scale); /* IE 9 */
      -webkit-transform: scale($scale); /* Safari 3-8 */
      transform: scale($scale);
    }
  }
</style>

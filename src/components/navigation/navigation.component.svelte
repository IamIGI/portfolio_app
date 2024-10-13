<script lang="ts">
  import { onMount } from 'svelte';

  let isScrolled = false;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  };
</script>

<nav class={isScrolled ? 'scrolled' : ''}>
  <!-- Left Section: Title -->
  <div class="title">IGOR.</div>

  <!-- Center Section: Navigation Links -->
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>

  <!-- Right Section: SVG Icons -->
  <div class="icons">
    <img
      src="/svg/media/linkedin.svg"
      alt="li"
      class={`svg-icon white-svg-icon ${isScrolled ? 'black-svg-icon' : ''}`}
    />
    <img
      src="/svg/media/document.svg"
      alt="cv"
      class={`svg-icon white-svg-icon ${isScrolled ? 'black-svg-icon' : ''}`}
    />
    <img
      src="/svg/media/facebook.svg"
      alt="fb"
      class={`svg-icon white-svg-icon ${isScrolled ? 'black-svg-icon' : ''}`}
    />
    <img src="/svg/language/flag-pl.svg" alt="flag" class="svg-icon" />
  </div>
</nav>

<style lang="scss">
  nav {
    position: fixed; // Ensures the nav is fixed at the top
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 15rem;
    background-color: transparent;
    transition: background-color 0.3s ease;
    z-index: 100; // Keep it on top of other content
    color: white;

    &.scrolled {
      background-color: white;
      color: black;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .title {
      font-size: 2.5rem;
      font-weight: bold;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 2rem;

      li a {
        text-decoration: none;

        font-size: 1.4rem;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: gray;
        }
      }
    }

    .icons {
      display: flex;
      gap: 1rem;
    }

    .svg-icon {
      $size: 45px;
      height: $size;
      width: $size;
    }
    .white-svg-icon {
      //https://codepen.io/sosuke/pen/Pjoqqp
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }

    .black-svg-icon {
      //black
      filter: invert(55%) sepia(0%) saturate(453%) hue-rotate(148deg)
        brightness(91%) contrast(82%);
    }
  }
</style>

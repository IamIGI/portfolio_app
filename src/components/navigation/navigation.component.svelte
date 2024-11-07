<script lang="ts">
  import { onMount } from 'svelte';
  import LocalLink from './localLink.component.svelte';

  let isScrolled: boolean = false;

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
  <div class="title"><img src="/svg/footer/salsa.svg" alt="salsa" /> IGOR.</div>

  <ul>
    <li>
      <LocalLink id="home" name="Home" {isScrolled} />
    </li>
    <li>
      <LocalLink id="work_experience" name="Work" {isScrolled} />
    </li>
    <li>
      <LocalLink id="skills" name="Skills" {isScrolled} />
    </li>
    <li>
      <LocalLink id="projects" name="Projects" {isScrolled} />
    </li>
    <li>
      <LocalLink id="contact" name="Contact" {isScrolled} />
    </li>
  </ul>

  <div class="icons">
    <img
      src="/svg/media/linkedin_2.svg"
      alt="li"
      class={`svg-icon ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'}`}
    />
    <img
      src="/svg/media/document.svg"
      alt="cv"
      class={`svg-icon ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'}`}
    />
    <img
      src="/svg/media/email.svg"
      alt="fb"
      class={`svg-icon ${isScrolled ? 'black-svg-icon' : 'white-svg-icon'}`}
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
      background-color: var(--main-background-color);
      color: black;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .title {
      font-size: 2.5rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      img {
        $size: 40px;
        height: $size;
        width: $size;
      }
    }

    ul {
      display: flex;
      list-style: none;
      gap: 1rem;

      li a {
        text-decoration: none;
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 500;
        transition:
          color 0.3s ease,
          font-size 0.3s ease;

        &:hover {
          color: gray;
          font-size: calc(1.4rem + 5px);
        }
      }
    }

    .icons {
      display: flex;
      gap: 1rem;
    }

    .svg-icon {
      /* outline: 1px solid red; */
      $size: 45px;
      height: $size;
      width: $size;
    }
  }
</style>

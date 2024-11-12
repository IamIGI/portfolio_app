<script lang="ts">
  import { onMount } from 'svelte';
  import IconButton from '../iconButton.component.svelte';
  import Links from './links.component.svelte';
  import Icons from './icons.component.svelte';

  let isScrolled: boolean = false;
  let isMobileMenuOpen: boolean = false;
  let mobileNav: HTMLDivElement | null = null;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  function handleScroll() {
    if (window.scrollY > 50) {
      isScrolled = true;
    } else {
      if (!isMobileMenuOpen) isScrolled = false;
    }
  }

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (mobileNav) {
      mobileNav.style.display = isMobileMenuOpen ? 'flex' : 'none';
      isScrolled = true;
    }
    if (!isMobileMenuOpen && window.scrollY < 50) {
      isScrolled = false;
    }
  }

  function handleResize() {
    if (window.innerWidth >= 1100) {
      isMobileMenuOpen = false;
      if (mobileNav) {
        mobileNav.style.display = 'none';
      }
    }
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    if (mobileNav) mobileNav.style.display = 'none';
  }
</script>

<div class="wrapper {isScrolled ? 'scrolled' : ''}">
  <nav>
    <div class="title">
      <img src="/svg/footer/salsa.svg" alt="salsa" /> IGOR.
    </div>
    <div class="hamburger-button">
      <IconButton
        src="/svg/media/hamburger.svg"
        alt="li"
        {isScrolled}
        on:onClick={toggleMenu}
      />
    </div>
    <div class="links-wrapper">
      <Links {isScrolled} />
    </div>
    <div class="icons">
      <Icons {isScrolled} />
    </div>
  </nav>
  <div class="mobile-nav" bind:this={mobileNav}>
    <Links
      {isScrolled}
      flexDirection="column"
      on:onLinkClicked={closeMobileMenu}
    />
    <div class="mobile-icons">
      <Icons {isScrolled} />
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    z-index: 100;
    transition: background-color 0.3s ease;

    &.scrolled {
      background-color: var(--main-background-color);
      color: var(--first-font-color);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

      nav {
        .title {
          color: var(--first-font-color);
        }
      }
    }
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 15rem;
    background-color: transparent;
    color: white;

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

      &.scrolled {
        color: black;
      }
    }

    .icons {
      display: flex;
      gap: 1rem;
    }

    .hamburger-button {
      display: none;
    }

    @media (max-width: 1650px) {
      padding: 1rem 5rem;
    }

    @media (max-width: 1300px) {
      padding: 1rem 3rem;

      .icons {
        gap: 0.5rem;
      }
    }

    @media (max-width: 1100px) {
      .links-wrapper,
      .icons {
        display: none;
      }
      .hamburger-button {
        display: flex;
      }
    }
  }

  .mobile-nav {
    display: none;
    width: 100%;
    transition: 0.5s;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 0 0 30px 3rem;
    overflow: hidden;

    .mobile-icons {
      display: flex;
    }

    @media (min-width: 1100px) {
      display: none;
    }

    @media (max-width: 550px) {
      height: 100vh;
      padding: 0;

      .mobile-icons {
        width: 100%;
        padding: 0 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>

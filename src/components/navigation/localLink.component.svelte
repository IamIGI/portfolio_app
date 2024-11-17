<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let name: string;
  export let id: string;
  export let isScrolled: boolean;

  const dispatch = createEventDispatcher<{ onClick: void }>();

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align to the start of the div
    });
    dispatch('onClick');
  };
</script>

<!-- svelte-ignore a11y-missing-content -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a
  class="btn-flip {isScrolled ? 'scrolled' : ''}"
  on:click={() => handleNavigate(id)}
  data-back={name}
  data-front={name}
/>

<style lang="scss">
  $speed: 0.5s;

  .btn-flip {
    opacity: 1;
    outline: 0;
    color: #fff;
    line-height: 40px;
    position: relative;
    text-align: center;
    letter-spacing: 1px;
    display: inline-block;
    text-decoration: none;
    /* font-family: 'Open Sans'; */
    text-transform: uppercase;
    font-size: 1.4rem;
    cursor: pointer;
    width: 100%;

    &:hover {
      &:after {
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }

      &:before {
        opacity: 0;
        transform: translateY(50%) rotateX(90deg);
      }
    }

    &:after {
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      color: #323237;
      display: block;
      padding: 0 15px;
      transition: $speed;
      position: absolute;
      background: transparent;
      content: attr(data-back);
      transform: translateY(-50%) rotateX(90deg);
      border-bottom: 1px solid gray;
      text-align: center;
    }

    &:before {
      /* outline: 1px solid red; */
      top: 0;
      left: 0;
      opacity: 1;
      color: white;
      display: block;
      padding: 0 15px;
      line-height: 40px;
      transition: $speed;
      position: relative;
      background: transparent;
      content: attr(data-front);
      transform: translateY(0) rotateX(0);
      border-bottom: 1px solid transparent;
      width: 100%;
      text-align: center;
    }

    &.scrolled {
      /* background-color: var(--main-background-color); */
      color: black;

      &:before {
        color: black;
      }
    }

    @media (max-width: 1400px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1200px) {
      &:before,
      &:after {
        text-align: left;
      }
    }

    @media (max-width: 550px) {
      &:before,
      &:after {
        text-align: center;
        font-size: 1.4rem;
        line-height: 50px;
      }
    }
  }
</style>

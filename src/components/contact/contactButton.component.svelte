<script lang="ts">
  import { handleClick } from '$lib/utils/buttonClick.utils';
  import { createEventDispatcher } from 'svelte';

  export let text: string;
  export let button_color: 1 | 2;
  export let navigateURL: string | undefined = undefined;
  export let download: string | undefined = undefined;
  export let textToCopy: string | undefined = undefined;
  export let langChange: boolean = false;

  const dispatch = createEventDispatcher<{ onClick: void }>();
</script>

<button
  class="button {button_color === 1 ? 'button_1' : 'button_2'}"
  on:click={() =>
    handleClick(dispatch, navigateURL, download, textToCopy, langChange)}
>
  {text}
  <div class="button__horizontal" />
  <div class="button__vertical" />
</button>

<style lang="scss">
  .button {
    --offset: 5px;
    --border-size: 2px;

    display: block;
    position: relative;
    padding: 1.5em 3em;
    appearance: none;
    border: 0;
    background: transparent;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 0 0 var(--border-size) currentcolor;
    transition: background 0.8s ease;
    font-size: 17px;

    &:hover {
      background: rgba(100, 0, 0, 0.03);
    }

    &__horizontal,
    &__vertical {
      position: absolute;
      top: var(--horizontal-offset, 0);
      right: var(--vertical-offset, 0);
      bottom: var(--horizontal-offset, 0);
      left: var(--vertical-offset, 0);
      transition: transform 0.8s ease;
      will-change: transform;

      &::before {
        content: '';
        position: absolute;
        border: inherit;
      }
    }

    &__horizontal {
      --vertical-offset: calc(var(--offset) * -1);
      border-top: var(--border-size) solid currentcolor;
      border-bottom: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--vertical-offset) - var(--border-size));
        bottom: calc(var(--vertical-offset) - var(--border-size));
        left: calc(var(--vertical-offset) * -1);
        right: calc(var(--vertical-offset) * -1);
      }
    }

    &:hover &__horizontal {
      transform: scaleX(0);
    }

    &__vertical {
      --horizontal-offset: calc(var(--offset) * -1);
      border-left: var(--border-size) solid currentcolor;
      border-right: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--horizontal-offset) * -1);
        bottom: calc(var(--horizontal-offset) * -1);
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size));
      }
    }

    &:hover &__vertical {
      transform: scaleY(0);
    }

    @media (max-width: 550px) {
      padding: 1em 2em;
    }
  }

  .button_2 {
    color: #968983;
  }
  .button_1 {
    color: #232121;
  }
</style>

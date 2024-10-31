<script lang="ts">
  function navigateTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds smooth scrolling
    });
  }
</script>

<button on:click={navigateTop}>
  <img
    src="/svg/navigationTop/arrow-up.svg"
    alt="arrowUp"
    class={`white-svg-icon`}
  />
</button>

<style lang="scss">
  button {
    position: fixed;
    bottom: 50px;
    right: 50px;

    border-radius: 8px;
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-accent);
    color: white;

    cursor: pointer;
    border: none;
    outline: none;
    z-index: 100;

    img {
      $size: 45px;
      height: $size;
      width: $size;
    }

    transition: transform 0.3s;
    &:hover {
      $scale: 0.9;
      -ms-transform: scale($scale); /* IE 9 */
      -webkit-transform: scale($scale); /* Safari 3-8 */
      transform: scale($scale);
    }
  }
</style>

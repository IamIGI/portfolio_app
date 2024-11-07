<script lang="ts">
  import Link from './link.component.svelte';

  export let title;
  export let techStack: string[];
  export let description: string;
  export let githubLink: string | undefined = undefined;
  export let projectBoardLink: string | undefined = undefined;
  export let websiteLink: string | undefined = undefined;
  export let figmaLink: string | undefined = undefined;
  export let imgUrl: string;
  export let nd2: boolean = false; //index n2 will have other style properties
</script>

<div class="wrapper" class:wrapper-nd2={nd2}>
  <div class="content-wrapper">
    <h1>{title}</h1>
    <h4>TECH: {techStack.join(', ').toUpperCase()}</h4>
    <p>{description}</p>
    <div class="links">
      {#if githubLink}
        <Link link={githubLink} name="Github" {nd2} />
      {/if}
      {#if projectBoardLink}
        <Link link={projectBoardLink} name="Project" {nd2} />
      {/if}
      {#if websiteLink}
        <Link link={websiteLink} name="Website" {nd2} />
      {/if}
    </div>
    {#if figmaLink}
      <div class="links">
        <Link link={figmaLink} name="Figma" {nd2} />
      </div>
    {/if}
  </div>
  <div class="image-wrapper">
    <div class="image-content" class:image-content-2nd={nd2}>
      <img src={imgUrl} alt="project" />
    </div>
  </div>
</div>

<style lang="scss">
  $border-radius: 20px;

  .wrapper {
    /* outline: 1px solid orange; */
    height: 100%;
    width: 100%;
    min-width: 350px;
    max-width: 1300px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 40px 4% 0 4%;
    border-radius: $border-radius;
    gap: 6rem;
    background-color: var(--first-tile-background-color);
    h1,
    h4,
    h5 {
      color: var(--first-font-title-color);
      margin-bottom: 10px;
    }
    h4 {
      line-height: 21px;
    }
    p,
    ul,
    li {
      color: var(--first-font-color);
      margin-bottom: 10px;
    }
  }
  .wrapper-nd2 {
    flex-direction: row-reverse;
    background-color: var(--second-tile-background-color);
    h1,
    h4,
    h5 {
      color: var(--second-font-title-color);
    }
    p,
    ul,
    li {
      color: var(--second-font-color);
    }
  }

  .content-wrapper {
    flex: 1;
    min-height: 100%;
    /* outline: 1px solid red; */
    padding-bottom: 25px;

    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;
      margin-bottom: 5px;
    }
  }
  .image-wrapper {
    /* outline: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    .image-content {
      /* outline: 1px solid green; */
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: $border-radius;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      -webkit-box-shadow: -11px -7px 0px 3px rgba(49, 47, 47, 1);
      -moz-box-shadow: -11px -7px 0px 3px rgba(49, 47, 47, 1);
      box-shadow: -15px -7px 0px 3px rgba(49, 47, 47, 1);

      img {
        height: 100%;
        width: 100%;
        /* width: calc($size * 1.5); */
        border-radius: $border-radius;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }
    .image-content-2nd {
      -webkit-box-shadow: 11px -7px 0px 3px rgba(214, 212, 210, 1);
      -moz-box-shadow: 11px -7px 0px 3px rgba(214, 212, 210, 1);
      box-shadow: 15px -7px 0px 3px rgba(214, 212, 210, 1);
    }
  }

  @media (max-width: 1210px) {
    .wrapper {
      gap: 3rem;
      padding: 3% 4% 0 3%;

      h1 {
        font-size: 41px;
      }
      h4 {
        font-size: 19px;

        line-height: 18px;
      }
      h5 {
        font-size: 15px;
      }
      p {
        font-size: 15px;
      }
      h1,
      h4,
      h5,
      a,
      p {
        margin-bottom: 8px;
      }
    }
  }

  @media (max-width: 850px) {
    .wrapper,
    .wrapper-nd2 {
      max-width: 620px;
      flex-direction: column-reverse;
      padding: 6% 6% 0 6%;
      gap: 2rem;

      h1 {
        font-size: 35px;
      }
    }

    .image-wrapper {
      margin: auto;
      $size: 300px;
      height: $size;
      width: calc($size * 1.5);
      .image-content {
        /* outline: 1px solid green; */
        height: 100%;
        width: 100%;

        img {
          $size: 300px;
          height: $size;
          width: calc($size * 1.5);
        }
      }
    }
  }

  @media (max-width: 580px) {
    .wrapper,
    .wrapper-nd2 {
      flex-direction: column-reverse;
      padding: 5% 8%;
      gap: 1rem;
    }

    .image-wrapper {
      margin: auto;
      height: 100%;
      width: 100%;
      .image-content {
        /* outline: 1px solid green; */
        height: 100%;
        width: 100%;
        -webkit-box-shadow: -11px -7px 0px 3px rgba(49, 47, 47, 1);
        -moz-box-shadow: -11px -7px 0px 3px rgba(49, 47, 47, 1);
        box-shadow: -10px -5px 0px 3px rgba(49, 47, 47, 1);

        img {
          height: 100%;
          width: 100%;
        }
      }
      .image-content-2nd {
        -webkit-box-shadow: 11px -7px 0px 3px rgba(214, 212, 210, 1);
        -moz-box-shadow: 11px -7px 0px 3px rgba(214, 212, 210, 1);
        box-shadow: 10px -5px 0px 3px rgba(214, 212, 210, 1);
      }
    }
  }
</style>

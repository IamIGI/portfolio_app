<script lang="ts">
  export let title: string = 'HotShot.tk';
  export let techStack: string[] = [
    'React JS',
    'Redux',
    'Typescript',
    'NodeJs',
    'MongoDB',
    'JWT',
    'Stripe',
  ];
  export let description: string =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model ";
  export let githubLink: string =
    'https://github.com/IamIGI/ComputerShop-typescript';
  export let projectBoardLink: string =
    'https://github.com/users/IamIGI/projects/1/views/1';
  export let imgUrl: string = '/images/projects/hotShoot.JPG';
  export let nd2: boolean = false; //index n2 will have other style properties
</script>

<div class="wrapper" class:wrapper-nd2={nd2}>
  <div class="content-wrapper">
    <h1>{title}</h1>
    <h4>TECH: {techStack.join(', ').toUpperCase()}</h4>
    <p>{description}</p>
    <div class="links">
      <a class="link" href={githubLink}>
        <h5>Github</h5>
        <img
          class="icon"
          class:icon-nd2={nd2}
          src="/svg/projects/enter.svg"
          alt="link"
        />
      </a>
      <a class="link" href={projectBoardLink}>
        <h5>Project Board</h5>
        <img
          class="icon"
          class:icon-nd2={nd2}
          src="/svg/projects/enter.svg"
          alt="link"
        />
      </a>
    </div>
  </div>
  <div class="image-wrapper">
    <div class="image-content" class:image-content-2nd={nd2}>
      <img src={imgUrl} alt="project" />
    </div>
  </div>
</div>

<style lang="scss">
  $first-tile-background-color: #232121;
  $first-font-color: #706e6c;
  $first-font-title-color: #c3c1c0;
  $first-icon-color: invert(91%) sepia(7%) saturate(59%) hue-rotate(336deg)
    brightness(86%) contrast(91%);

  $second-tile-background-color: #edebe8;
  $second-font-color: #959392;
  $second-font-title-color: #4f4d4c;
  $second-icon-color: invert(28%) sepia(8%) saturate(143%) hue-rotate(335deg)
    brightness(96%) contrast(86%);

  $border-radius: 20px;

  .wrapper {
    height: 100%;
    width: 100%;
    min-width: 350px;
    max-width: 1300px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 4% 6% 0 6%;
    border-radius: $border-radius;
    gap: 6rem;
    background-color: $first-tile-background-color;
    h1,
    h4,
    h5 {
      color: $first-font-title-color;
      margin-bottom: 10px;
    }
    h4 {
      line-height: 21px;
    }
    p {
      color: $first-font-color;
      margin-bottom: 10px;
    }
  }
  .wrapper-nd2 {
    flex-direction: row-reverse;
    background-color: $second-tile-background-color;
    h1,
    h4,
    h5 {
      color: $second-font-title-color;
    }
    p {
      color: $second-font-color;
    }
  }
  .icon {
    filter: $first-icon-color;
  }
  .icon-nd2 {
    filter: $second-icon-color;
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

      .link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        /* outline: 1px solid red; */
        h5 {
          padding-top: 9px;
          /* outline: 1px solid blue; */
        }

        img {
          $size: 30px;
          height: $size;
          width: $size;
          /* border-radius: 10%; */
        }
      }
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

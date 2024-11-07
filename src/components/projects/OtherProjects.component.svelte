<script lang="ts">
  import Link from './link.component.svelte';

  export let nd2: boolean = false; // index n2 will have other style properties

  let title = 'Pozostałe projekty';
  let description =
    'Zapraszam do odkrycia moich pozostałych projektów! Odwiedź mój profil na GitHubie, aby zobaczyć pełen zakres moich umiejętności oraz zrealizowanych przedsięwzięć. Przekonaj się sam, jak różnorodne są moje projekty i jakie technologie wykorzystałem w ich realizacji!';
</script>

<div class="wrapper" class:wrapper-nd2={nd2}>
  <div class="content-wrapper">
    <h1>{title}</h1>
    <p>{description}</p>
    <ul>
      <li>
        <p><span>LinkedinApp</span> (Angular, Typescript, NestJs, Socket.io)</p>
        <Link
          link="https://github.com/IamIGI/LinkedinApp"
          name="Github"
          {nd2}
        />
      </li>
      <li>
        <p><span>Countries_App</span> (React, Redux, Typescript)</p>
        <Link
          link="https://github.com/IamIGI/REST-Countries-API"
          name="Github"
          {nd2}
        />
        <Link
          link="https://iamigi.github.io/REST-Countries-API/"
          name="Website"
          {nd2}
        />
      </li>
      <li>
        <p><span>Interactive Comments Section</span> (React, Redux)</p>
        <Link
          link="https://github.com/IamIGI/Interactive-comments-section-FRONTEND"
          name="Github"
          {nd2}
        />
      </li>
      <li>
        <p><span> Multi Step Form</span> (Svelte, SCSS, RWD)</p>
        <Link
          link="https://github.com/IamIGI/Multi-step-form"
          name="Github"
          {nd2}
        />
      </li>
      <li>
        <p><span>IP Address Tracker</span> (Svelte, Leaflet-map, Sass)</p>
        <Link
          link="https://github.com/IamIGI/ip-address-tracker"
          name="Github"
          {nd2}
        />
      </li>
    </ul>

    <div class="image-wrapper">
      <div class="image-content" class:image-content-2nd={nd2}>
        <img src="/images/projects/other_projects.JPG" alt="project" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  $first-tile-background-color: #232121;
  $first-font-color: #706e6c;
  $first-font-title-color: #c3c1c0;

  $second-tile-background-color: #edebe8;
  $second-font-color: #959392;
  $second-font-title-color: #4f4d4c;

  $border-radius: 20px;

  .wrapper {
    width: 100%;
    max-width: 1300px;
    padding: 40px 6%;
    border-radius: $border-radius;
    background-color: $first-tile-background-color;
    gap: 1rem;

    h1 {
      color: $first-font-title-color;
      margin-bottom: 10px;
    }

    p {
      color: $first-font-color;
      /* margin-bottom: 10px; */
    }

    ul {
      list-style-type: circle; /* Add circle style */

      li {
        /* margin-bottom: 10px; */
        /* outline: 1px solid red; */
        /* height: 60px; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        p {
          margin-top: 0px;
          /* outline: 1px solid blue; */
          span {
            color: $first-font-title-color;
          }
        }
      }
    }
  }

  .wrapper-nd2 {
    background-color: $second-tile-background-color;

    h1 {
      color: $second-font-title-color;
    }

    p {
      color: $second-font-color;
    }
  }

  .content-wrapper {
    flex: 1;
    padding-bottom: 25px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 1rem;

    .image-content {
      width: 100%;
      border-radius: $border-radius;

      img {
        height: 100%;
        width: 100%;
        border-radius: $border-radius;
      }
    }

    .image-content-2nd {
      box-shadow: 11px -7px 0px rgba(214, 212, 210, 1);
    }
  }

  @media (max-width: 1210px) {
    .wrapper {
      padding: 3% 4%;
      h1 {
        font-size: 41px;
      }
      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 850px) {
    .wrapper {
      max-width: 620px;
      flex-direction: column-reverse;
      padding: 6% 6%;
    }

    .image-wrapper {
      height: 300px;
      width: 450px;

      .image-content {
        img {
          height: 300px;
          width: 450px;
        }
      }
    }
  }

  @media (max-width: 580px) {
    .wrapper {
      flex-direction: column-reverse;
      padding: 5% 8%;
    }

    .image-wrapper {
      width: 100%;
      .image-content {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>

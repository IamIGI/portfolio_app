<script lang="ts">
  import { base } from '$app/paths';
  import Link from './link.component.svelte';
  import { _ as t } from 'svelte-i18n';

  export let nd2: boolean = false; // index n2 will have other style properties
</script>

<div class="wrapper" class:wrapper-nd2={nd2}>
  <div class="content-wrapper">
    <h1>{$t(`projects.others.title`)}</h1>
    <p>{$t(`projects.others.desc`)}</p>
    <ul>
      <li>
        <p>
          <a
            href="https://github.com/IamIGI/LinkedinApp"
            target="_blank"
            rel="noopener noreferrer">LinkedinApp</a
          > (Angular, Typescript, NestJs, Socket.io)
        </p>
        <div class="links">
          <Link
            link="https://github.com/IamIGI/LinkedinApp"
            name="Github"
            {nd2}
          />
        </div>
      </li>
      <li>
        <p>
          <a
            href="https://iamigi.github.io/REST-Countries-API/"
            target="_blank"
            rel="noopener noreferrer">Countries_App</a
          > (React, Redux, Typescript)
        </p>
        <div class="links">
          <Link
            link="https://github.com/IamIGI/REST-Countries-API"
            name="Github"
            {nd2}
          />
          <Link
            link="https://iamigi.github.io/REST-Countries-API//"
            name={$t(`projects.tile.website`)}
            {nd2}
          />
        </div>
      </li>
      <li>
        <p>
          <a
            href="https://github.com/IamIGI/Interactive-comments-section-FRONTEND"
            target="_blank"
            rel="noopener noreferrer">Interactive Comments Section</a
          > (React, Redux)
        </p>
        <div class="links">
          <Link
            link="https://github.com/IamIGI/Interactive-comments-section-FRONTEND"
            name="Github"
            {nd2}
          />
        </div>
      </li>
      <li>
        <p>
          <a
            href="https://github.com/IamIGI/Multi-step-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multi Step Form</a
          > (Svelte, SCSS, RWD)
        </p>
        <div class="links">
          <Link
            link="https://github.com/IamIGI/Multi-step-form"
            name="Github"
            {nd2}
          />
        </div>
      </li>
      <li>
        <p>
          <a
            href="https://github.com/IamIGI/ip-address-tracker"
            target="_blank"
            rel="noopener noreferrer">IP Address Tracker</a
          > (Svelte, Leaflet-map, Sass)
        </p>
        <div class="links">
          <Link
            link="https://github.com/IamIGI/ip-address-tracker"
            name="Github"
            {nd2}
          />
        </div>
      </li>
    </ul>

    <div class="image-wrapper">
      <div class="image-content" class:image-content-2nd={nd2}>
        <img src={`${base}/images/projects/other_projects.JPG`} alt="project" />
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
      padding-bottom: 7px;
      /* margin-bottom: 10px; */
    }

    ul {
      list-style-type: circle;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        p {
          margin-top: 0px;
          /* outline: 1px solid blue; */
          a {
            color: $first-font-title-color;
            text-decoration: underline;
          }
        }
        .links {
          display: flex;
          align-items: center;
          gap: 1rem;
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
      /* height: 300px; */
      width: 450px;

      .image-content {
        img {
          /* height: 300px; */
          width: 450px;
        }
      }
    }
  }

  @media (max-width: 675px) {
    .wrapper {
      ul {
        li {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0rem;
          padding-bottom: 5px;
        }
      }
    }
    .image-wrapper {
      margin-top: 0rem;
    }
  }

  @media (max-width: 580px) {
    .wrapper {
      flex-direction: column-reverse;
      padding: 3% 4%;
      ul {
        li {
          .links {
            display: none;
          }
        }
      }
      h1 {
        font-size: calc(var(--font-size-h1) - 15px);
      }
    }

    .content-wrapper {
      padding-bottom: 10px;
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

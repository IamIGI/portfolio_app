<script lang="ts">
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';
  import OtherProjects from './OtherProjects.component.svelte';
  import ProjectTile from './ProjectTile.component.svelte';
  import { _ as t } from 'svelte-i18n';

  const projects: {
    id: string;
    techStack: string[];
    imgUrl: string;
    github?: string;
    projectBoard?: string;
    websiteLink?: string;
    figmaLink?: string;
  }[] = [
    {
      id: 'hotshot',

      techStack: [
        'React JS',
        'Redux',
        'Typescript',
        'NodeJs',
        'MongoDB',
        'JWT',
        'Stripe',
      ],
      github: 'https://github.com/IamIGI/ComputerShop-typescript',
      projectBoard: 'https://github.com/users/IamIGI/projects/1/views/1',
      imgUrl: '/images/projects/hotShoot.JPG',
    },
    //--------PALETY EURO------------
    {
      id: 'paletyEuro',

      techStack: ['React', 'NextJs', 'Typescript', 'Figma'],
      github: 'https://github.com/IamIGI/Pallet-sale-office-Company-website',
      websiteLink: 'https://pallet-sale-office-company-website.vercel.app/',
      figmaLink:
        'https://www.figma.com/design/X1W5qbyFWPfLyhtvimHjNQ/EuroKrak?node-id=113-2&node-type=canvas',
      projectBoard: 'https://github.com/users/IamIGI/projects/10/views/1',
      imgUrl: '/images/projects/PaletyEuro.JPG',
    },
    //----Translator------------
    {
      id: 'translatorApp',
      techStack: ['Svelte', 'TypeScript', 'SCSS', 'translateplus.io'],
      github: 'https://github.com/IamIGI/Translator_app',
      projectBoard: 'https://github.com/users/IamIGI/projects/12',
      websiteLink: 'https://translator-app-six-chi.vercel.app',
      imgUrl: '/images/projects/translatorApp.JPG',
    },
    //-----Countries----------
    {
      id: 'ekm',
      techStack: ['Vue', 'Pinia', 'Ionic', 'Typescript'],
      websiteLink:
        'https://www.mccomp.pl/horeca-i-wellness/elektroniczna-karta-meldunkowa/',
      imgUrl: '/images/projects/ekm.JPG',
    },
  ];
</script>

<div class="wrapper" id="projects">
  <SectionTitle
    title={$t('projects.section.title')}
    description={$t('projects.section.desc')}
  />
  <div class="inner-wrapper">
    {#each projects as p, index}
      <ProjectTile
        title={$t(`projects.${p.id}.title`)}
        techStack={p.techStack}
        description={$t(`projects.${p.id}.desc`)}
        imgUrl={p.imgUrl}
        githubLink={p.github}
        projectBoardLink={p.projectBoard}
        websiteLink={p.websiteLink}
        figmaLink={p.figmaLink}
        nd2={index % 2 !== 0}
      />
    {/each}

    <OtherProjects nd2={projects.length % 2 !== 0} />
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: var(--gap-between-sections);
  }
  .inner-wrapper {
    /* outline: 1px solid purple; */
    /* padding: 15px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
    padding: 0 7%;

    @media (max-width: 1000px) {
      padding: 0 4%;
    }

    @media (max-width: 550px) {
      gap: 2rem;
    }
  }
</style>

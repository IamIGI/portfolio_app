<script lang="ts">
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';
  import OtherProjects from './OtherProjects.component.svelte';
  import ProjectTile from './ProjectTile.component.svelte';

  const projects: {
    title: string;
    techStack: string[];
    description: string;
    imgUrl: string;
    github?: string;
    projectBoard?: string;
    websiteLink?: string;
    figmaLink?: string;
  }[] = [
    {
      title: 'HotShot.tk',
      techStack: [
        'React JS',
        'Redux',
        'Typescript',
        'NodeJs',
        'MongoDB',
        'JWT',
        'Stripe',
      ],
      description:
        'HotShoot.tk to sklep internetowy z laptopami, nad którym pracuję od 2022 roku, rozwijając zarówno frontend, jak i backend. Platforma zapewnia bezpieczną autoryzację użytkowników, rozbudowany koszyk zakupowy, obsługę promocji, filtrowanie produktów oraz sekcję zarządzania kontem i zamówieniami. Użytkownicy mogą korzystać z sekcji artykułów i zaawansowanego systemu komentarzy, a także łatwo kontaktować się poprzez formularz. Dodatkowo, sklep umożliwia generowanie dokumentów PDF, jak faktury i podsumowania zamówień. Dzięki RWD strona działa płynnie na komputerach i urządzeniach mobilnych.',
      github: 'https://github.com/IamIGI/ComputerShop-typescript',
      projectBoard: 'https://github.com/users/IamIGI/projects/1/views/1',
      imgUrl: '/images/projects/hotShoot.JPG',
    },
    //--------PALETY EURO------------
    {
      title: 'PaletyEuro s.c.',
      techStack: ['React', 'NextJs', 'Typescript', 'Figma'],
      description:
        'Strona internetowa została zaprojektowana na podstawie autorskiego projektu w Figma, przygotowanego w kilku wersjach kolorystycznych. Wyróżnia ją przemyślany, przyciągający wzrok układ, który jasno prezentuje, czym zajmuje się firma, gdzie ją znaleźć i co oferuje. Strona zawiera formularz kontaktowy oraz interaktywną mapę Google, ułatwiającą lokalizację.',
      github: 'https://github.com/IamIGI/Pallet-sale-office-Company-website',
      websiteLink: 'https://pallet-sale-office-company-website.vercel.app/',
      figmaLink:
        'https://www.figma.com/design/X1W5qbyFWPfLyhtvimHjNQ/EuroKrak?node-id=113-2&node-type=canvas',
      projectBoard: 'https://github.com/users/IamIGI/projects/10/views/1',
      imgUrl: '/images/projects/PaletyEuro.JPG',
    },
    //----Translator------------
    {
      title: 'TranslatorApp',
      techStack: ['Svelte', 'TypeScript', 'SCSS', 'translateplus.io'],
      description:
        'TranslatorApp to frontendowy projekt aplikacji do tłumaczenia języków, który korzysta z zewnętrznego serwisu, umożliwiając tłumaczenie dowolnego języka na wybrany. Kluczowe funkcje aplikacji to szeroka baza języków, historia tłumaczeń oraz możliwość zapisywania ulubionych, tryb dark mode oraz responsywny design (RWD) dostosowany do urządzeń mobilnych i desktopowych.',
      github: 'https://github.com/IamIGI/Translator_app',
      projectBoard: 'https://github.com/users/IamIGI/projects/12',
      websiteLink: 'https://translator-app-six-chi.vercel.app',
      imgUrl: '/images/projects/translatorApp.JPG',
    },
    //-----Countries----------
    {
      title: 'Elektroniczna Karta Meldunkowa',
      description:
        'Jako programista firmy McComp napisałem tę aplikację, aby umożliwić hotelom promowanie własnych usług oraz ofert partnerów, otwierając nowy kanał marketingowy. Aplikacja zapewnia pełną elastyczność konfiguracji – wygląd karty meldunkowej można dowolnie modyfikować. Dodatkowo usprawnia rejestrację gości i zwiększa efektywność pracy recepcji, digitalizując proces meldunkowy, eliminując papierowe dokumenty i upraszczając zarządzanie zgodami RODO.',
      techStack: ['Vue', 'Pinia', 'Ionic', 'Typescript'],
      websiteLink:
        'https://www.mccomp.pl/horeca-i-wellness/elektroniczna-karta-meldunkowa/',
      imgUrl: '/images/projects/ekm.JPG',
    },
  ];
</script>

<div class="wrapper" id="projects">
  <SectionTitle
    title={'Projects.'}
    description={'Take a look at my recent projects'}
  />
  <div class="inner-wrapper">
    {#each projects as p, index}
      <ProjectTile
        title={p.title}
        techStack={p.techStack}
        description={p.description}
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

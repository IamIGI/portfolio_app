<script lang="ts">
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';
  import Desktop from './desktop.component.svelte';
  import Mobile from './mobile.component.svelte';

  const workExperience: T.WorkExperience[] = [
    {
      title: 'Junior Software Developer',
      company: 'Mc COMP S.A.',
      date: { start: '2023.07' },
      list: [
        'Contributed to the development of an Electronic Registration Card Configurator, enhancing efficiency by digitizing paper registration and GDPR consent cards, accessible via Android tablets. Implemented virtual signature capabilities.',
        'Creation and modification Electronic Registration Card Configurator of cards via a user-friendly Configurator interface.',
        'Collaborated on the enhancement of a Customer Service System for gas stations, encompassing fleet services, discounts, shopping cart management, notfications and alarm system.',
        'Contributed to improving interactivity in payment processing from terminals.',
        'Utilized technologies including Vue.js, Svelte, Vitest, TypeScript, WebSockets, and API-generator to ensure seamless performance.',
      ],
    },
    {
      title: 'Junior Software Tester',
      company: 'Mc COMP S.A.',
      date: { start: '2022.01', end: '2023.06' },
      list: [
        'Testing customer service system for gas stations.',
        'Collaborated on sales system for fleet services, payments and storage system',
        'Tested interactivity in payment handling.',
        'Developed skills in software testing methodologies.',
      ],
    },
    {
      title: 'Assistant Project Manager',
      company: 'Roeslein & Associates',
      date: { start: '2021.06', end: '2021.09' },
      desc: 'I worked in the technology department as an assistant project manager. My responsibilities included:',
      list: [
        'designing elements together with their implementation ( i.a. expansion tanks, dies for hydraulic press, tanks)',
        'assisting in the preparation of production material requirements',
        'selection of European equivalents of American steel profiles',
        'quality control of manufactured elements',
        'support of the Purchasing and Logistics Department',
        'cooperation in assessing the quantity and technical condition of tools to be sent to the project (communication in English)',
      ],
    },
  ];
</script>

<div class="wrapper" id="work_experience">
  <SectionTitle
    title={'Work experience'}
    description={'Practical skills, responsibilities, and achievements gained in professional roles, showcasing career growth and expertise in a software developer field.'}
  />
  <div class="desktop">
    <Desktop {workExperience} />
  </div>
  <div class="mobile">
    <Mobile {workExperience} />
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: var(--gap-between-sections);
  }
  .desktop,
  .mobile {
    height: 100%;
    width: 95%;
    margin: auto;
  }

  .mobile {
    width: 90%;
    display: none;
  }

  @media (max-width: 850px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
</style>

<script lang="ts">
  import WorkDate from './workDate.component.svelte';
  import WorkDescription from './workDescription.component.svelte';
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';

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

  {#each workExperience as experience, index}
    <div class="item-wrapper">
      {#if index % 2 === 0}
        <div class="work-time flex-end">
          <WorkDate date={experience.date} />
        </div>
        <div class="work-line">
          <div class="work-line-relative">
            <div class="dot">
              <img src="/svg/work-experience/dot-fill.svg" alt="dot" />
            </div>
          </div>
        </div>
        <div class="work-description flex-start">
          <WorkDescription {experience} fromWhere={'right'} />
        </div>
      {:else}
        <div class="work-description flex-end">
          <WorkDescription {experience} fromWhere={'left'} />
        </div>

        <div class="work-line">
          <div class="work-line-relative">
            <div class="dot">
              <img src="/svg/work-experience/dot-fill.svg" alt="dot" />
            </div>
          </div>
        </div>
        <div class="work-time flex-start">
          <WorkDate date={experience.date} />
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    /* outline: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .item-wrapper {
    position: relative;
    /* outline: 1px solid green; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
    padding-top: 10px;
    padding-bottom: 3rem;

    min-height: 150px;

    .flex-end {
      justify-content: flex-end;
    }

    .flex-start {
      justify-content: flex-start;
    }

    .work-time {
      /* outline: 1px solid purple; */
      width: 50%;
      height: 100%;
      display: flex;
    }

    .work-description {
      /* outline: 1px solid blue; */
      width: 50%;
      height: 100%;
      display: flex;
    }
  }

  .work-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    top: 0;
    bottom: 0;
    border-left: 3px solid var(--color-accent);

    .work-line-relative {
      position: relative;
    }

    .dot {
      position: absolute;
      top: 25px;
      left: -16px;
      width: 30px;
      height: 30px;

      img {
        width: 30px;
        height: 30px;
        filter: var(--color-filter-accent);
      }
    }
  }

  @keyframes -global-from-left {
    0% {
      transform: translateX(-100vw);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: translateX(100vw);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>

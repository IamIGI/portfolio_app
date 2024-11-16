<script lang="ts">
  import SectionTitle from '../sectionDescription/sectionTitle.component.svelte';
  import Desktop from './desktop.component.svelte';
  import Mobile from './mobile.component.svelte';
  import { _ as t } from 'svelte-i18n';

  const workExperience: T.WorkExperience[] = [
    {
      title: 'work_experience.JST.title',
      company: 'Mc COMP S.A.',
      date: { start: '2023.07' },
      list: [...Array(5)].map(
        (_, index) => `work_experience.JST.list.point_${index + 1}`
      ),
    },
    {
      title: 'work_experience.JSD.title',
      company: 'Mc COMP S.A.',
      date: { start: '2022.01', end: '2023.06' },
      list: [...Array(5)].map(
        (_, index) => `work_experience.JSD.list.point_${index + 1}`
      ),
    },
    {
      title: 'work_experience.APM.title',
      company: 'Roeslein & Associates',
      date: { start: '2021.06', end: '2021.09' },
      desc: 'work_experience.APM.desc',
      list: [...Array(5)].map(
        (_, index) => `work_experience.APM.list.point_${index + 1}`
      ),
    },
  ];
</script>

<div class="wrapper" id="work_experience">
  <SectionTitle
    title={$t('work_experience.section.title')}
    description={$t('work_experience.section.desc')}
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

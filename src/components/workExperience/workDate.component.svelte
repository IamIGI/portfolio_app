<script lang="ts">
  import dateUtils from '$lib/utils/date.utils';
  import { _ as t } from 'svelte-i18n';

  export let date: T.WorkDate;

  let timeSpent = dateUtils.timeSpentOnActivity(date.start, date.end);
</script>

<div class="work-time-content">
  <h4>
    {date.start} - {date.end ?? $t('work_experience.current')}
  </h4>
  <p>
    {#if timeSpent.years > 0}
      {timeSpent.years}
      {$t(
        `${
          timeSpent.years === 1
            ? 'work_experience.year_1'
            : timeSpent.years > 1 && timeSpent.years <= 4
            ? 'work_experience.year_2_4'
            : 'work_experience.year_4'
        }`
      )}
    {/if}
    {timeSpent.months}
    {$t(
      `${
        timeSpent.months === 1
          ? 'work_experience.month_1'
          : timeSpent.months > 1 && timeSpent.months <= 4
          ? 'work_experience.month_2_4'
          : 'work_experience.month_5_12'
      }`
    )}
  </p>
</div>

<style lang="scss">
  .work-time-content {
    width: 220px;
    height: 80px;
    border: 1px solid #e9ecef;
    box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border-radius: 7px;
    padding: 15px;

    p {
      color: var(--main-second-text-color);
      /* font-size: 14px; */
    }

    transition: transform 0.5s;

    &:hover {
      $scale: 1.1;
      -ms-transform: scale($scale); /* IE 9 */
      -webkit-transform: scale($scale); /* Safari 3-8 */
      transform: scale($scale);
    }
  }
</style>

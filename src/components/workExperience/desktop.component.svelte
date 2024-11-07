<script lang="ts">
  import WorkDate from './workDate.component.svelte';
  import WorkDescription from './workDescription.component.svelte';

  export let workExperience: T.WorkExperience[];
</script>

<div class="wrapper">
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

<script lang="ts">
  import { base } from '$app/paths';
  import WorkDescription from './workDescription.component.svelte';

  export let workExperience: T.WorkExperience[];
</script>

<div class="wrapper">
  {#each workExperience as experience, index}
    <div class="item-wrapper">
      <div class="work-line">
        <div class="work-line-relative">
          <div class="dot">
            <img src={`${base}/svg/work-experience/dot-fill.svg`} alt="dot" />
          </div>
        </div>
      </div>
      <div class="work-desc-wrapper">
        <WorkDescription {experience} fromWhere={'right'} />
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .item-wrapper {
    padding-left: 10px;
    /* outline: 1px solid red; */
    width: 100%;
    display: flex;
    gap: 2rem;
    min-height: 150px;

    .work-desc-wrapper {
      padding: 0 0 40px 0;
    }

    @media (max-width: 550px) {
      gap: 1rem;
    }
  }

  .work-line {
    height: 100%;
    border-left: 3px solid var(--color-accent);

    .work-line-relative {
      position: relative;
    }

    .dot {
      position: absolute;
      top: 25px;
      left: -17px;
      width: 30px;
      height: 30px;

      img {
        width: 30px;
        height: 30px;
        filter: var(--color-filter-accent);
      }
    }
  }
</style>

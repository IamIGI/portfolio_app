<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import LocalLink from './localLink.component.svelte';
  import { _ as t } from 'svelte-i18n';

  export let isScrolled: boolean;
  export let flexDirection: 'row' | 'column' = 'row';

  const dispatch = createEventDispatcher<{ onLinkClicked: void }>();

  function handleLinkClicked() {
    dispatch('onLinkClicked');
  }
</script>

<ul class:flex-column={flexDirection === 'column'}>
  <li>
    <LocalLink
      id="home"
      name={$t('navigation.links.home')}
      {isScrolled}
      on:onClick={handleLinkClicked}
    />
  </li>
  <li>
    <LocalLink
      id="work_experience"
      name={$t('navigation.links.work')}
      {isScrolled}
      on:onClick={handleLinkClicked}
    />
  </li>
  <li>
    <LocalLink
      id="skills"
      name={$t('navigation.links.skills')}
      {isScrolled}
      on:onClick={handleLinkClicked}
    />
  </li>
  <li>
    <LocalLink
      id="projects"
      name={$t('navigation.links.projects')}
      {isScrolled}
      on:onClick={handleLinkClicked}
    />
  </li>
  <li>
    <LocalLink
      id="contact"
      name={$t('navigation.links.contacts')}
      {isScrolled}
      on:onClick={handleLinkClicked}
    />
  </li>
</ul>

<style lang="scss">
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 0;
    margin: 0;

    @media (max-width: 1300px) {
      gap: 0.5rem;
    }

    @media (max-width: 550px) {
      gap: 1rem;

      width: 100%;
      ul {
      }
      li {
        margin-left: 5%;
        width: 90%;
      }
    }
  }

  .flex-column {
    flex-direction: column;
  }
</style>

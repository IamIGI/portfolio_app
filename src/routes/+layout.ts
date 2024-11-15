import en from '$lib/locales/en';
import pl from '$lib/locales/pl';
import { addMessages, init, locale } from 'svelte-i18n';
import languagesStore from '../stores/languages.store';

languagesStore.setDefault();
languagesStore.subscribe((lang) => {
  console.log(lang);
  locale.set(lang);
});

init({
  fallbackLocale: languagesStore.getLang(),
  initialLocale: languagesStore.getLang(),
});

addMessages('en', en);
addMessages('pl', pl);

import en from '$lib/locales/en';
import pl from '$lib/locales/pl';
import { addMessages, init, locale } from 'svelte-i18n';
import languagesStore from '../stores/languages.store';
// import languagesStore from '../stores/languages.store';

// const initLang = languagesStore.getLang();

languagesStore.subscribe((lang) => locale.set(lang));
console.log('layout triggered');
init({
  fallbackLocale: 'pl',
  initialLocale: 'pl',
});

addMessages('en', en);
addMessages('pl', pl);

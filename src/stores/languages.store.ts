import { get, writable } from 'svelte/store';

export enum Lang {
  PL = 'pl',
  ENG = 'en',
}

const languageStore = () => {
  const store = writable<Lang>(Lang.PL);
  const { set, subscribe } = store;

  function getLang() {
    return get(store);
  }

  function toggleLang() {
    if (getLang() === Lang.PL) {
      set(Lang.ENG);
    } else {
      set(Lang.PL);
    }
  }

  function setDefault() {
    //Download user localization and set default language by that
    const userLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    if (userLocale === 'pl') set(Lang.PL);
  }

  return {
    setDefault,
    getLang,
    toggleLang,
    subscribe,
  };
};

export default languageStore();

import { get, writable } from 'svelte/store';

export enum Lang {
  PL = 'pl',
  ENG = 'eng',
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
    //TODO:  PA-76: Download user localization and set default language by that
    set(Lang.PL);
  }

  return {
    setDefault,
    getLang,
    toggleLang,
    subscribe,
  };
};

export default languageStore();

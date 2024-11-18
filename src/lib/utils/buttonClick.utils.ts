import type { EventDispatcher } from 'svelte';
import { _ as t } from 'svelte-i18n';
import { get } from 'svelte/store';
import languagesStore, { Lang } from '../../stores/languages.store';
import notificationsUtils from './notifications.utils';

export function handleClick(
  dispatch: EventDispatcher<{
    onClick: void;
  }>,
  navigateURL: string | undefined = undefined,
  download: string | undefined = undefined,
  textToCopy: string | undefined = undefined,
  langChange: boolean = false
) {
  dispatch('onClick');

  if (navigateURL !== undefined) {
    if (!/^https?:\/\//i.test(navigateURL)) {
      navigateURL = 'https://' + navigateURL;
    }
    window.open(navigateURL, '_blank'); // open in new tab
    return;
  }
  if (download !== undefined) {
    //Create a html element for download purpose
    const a = document.createElement('a');
    a.href = download;
    a.download = download.split('/').pop() || 'download';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    notificationsUtils.showInformation(get(t)('notifications.cv'));
    window.open(download, '_blank');
    return;
  }
  if (textToCopy !== undefined) {
    navigator.clipboard.writeText(textToCopy);
    notificationsUtils.showInformation(get(t)('notifications.email_copied'));
    return;
  }

  if (langChange) {
    languagesStore.toggleLang();
    notificationsUtils.showInformation(
      get(t)(
        `notifications.lang.${
          languagesStore.getLang() === Lang.PL ? 'pl' : 'en'
        }`
      )
    );
    return;
  }
}

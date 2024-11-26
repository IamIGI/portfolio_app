import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Specify the base path for your app (i.e., when served from /portfolio)
    paths: {
      base: '/portfolio', // This makes the app accessible under the /portfolio path
    },

    adapter: adapter({
      fallback: 'index.html', // Use index.html as the fallback for single-page apps
      assets: 'public', // Static assets are placed in the public folder
      pages: 'public', // The build output will be placed here
    }),
  },
};

export default config;

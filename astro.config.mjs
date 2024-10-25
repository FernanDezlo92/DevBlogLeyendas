// @ts-check
import { defineConfig, envField} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  integrations: [tailwind(), icon()],
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean( {context:'server', access: 'public'}),
    }
  },
});
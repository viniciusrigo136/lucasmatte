// @ts-check
import { defineConfig } from 'astro/config';

// Defina `site` quando o domínio oficial for confirmado (gera URLs absolutas de OG e canonical).
export default defineConfig({
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});

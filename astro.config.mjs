// @ts-check
import { defineConfig } from 'astro/config';

// TODO: domínio oficial pendente. Quando confirmado, troque só esta linha
// (ex.: 'https://www.lucasmatte.com.br'); canonical, OG e `site.domain` passam a usá-lo.
const SITE_URL = undefined;

export default defineConfig({
  site: SITE_URL,
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});

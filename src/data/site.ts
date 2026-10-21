/**
 * Dados do escritório usados em todo o site.
 * Campos `null` estão pendentes de confirmação e não são exibidos ao visitante.
 */
export const site = {
  name: 'Lucas Matté Arquitetura',
  title: 'Lucas Matté Arquitetura | Arquitetura e Interiores',
  description:
    'Lucas Matté Arquitetura: projetos residenciais, comerciais e de interiores que aproximam estética, funcionalidade e o jeito de viver de cada pessoa.',
  areas: 'Arquitetura residencial, comercial e interiores',

  contact: {
    instagram: {
      url: 'https://www.instagram.com/lucasmattearquitetura/',
      handle: '@lucasmattearquitetura',
    },
    /**
     * Link de mensagem do WhatsApp Business indicado no perfil do Instagram.
     * Verificado em 07/10/2026: abre a conta comercial "Lucas Matté".
     * Confirmar com o escritório se continua sendo o canal oficial.
     */
    whatsapp: 'https://wa.me/message/PWH75L6EEZ3EE1' as string | null,
    // Pendentes: não inventar.
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },

  /** Domínio oficial. Vem de `site` em astro.config.mjs (único lugar a editar). */
  domain: import.meta.env.SITE ?? null,
};

/** Caminho base do site, sem barra final (vazio quando o site fica na raiz). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const homeHref = `${base}/`;
export const sectionHref = (id: string) => `${homeHref}#${id}`;
export const projectHref = (slug: string) => `${base}/projetos/${slug}/`;

/** Destino de toda chamada para conversa: WhatsApp, com o Instagram como reserva. */
export const contactHref = site.contact.whatsapp ?? site.contact.instagram.url;

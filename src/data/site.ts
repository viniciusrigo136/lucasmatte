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
    whatsapp: 'https://wa.me/message/PWH75L6EEZ3EE1',
    // Pendentes: não inventar.
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },

  /** Domínio oficial — pendente. Quando definido, configurar também `site` em astro.config.mjs. */
  domain: null as string | null,
};

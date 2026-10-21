import type { Category } from './projetos';

/**
 * Áreas de atuação da home. `foto` aponta para uma foto de um projeto da mesma
 * categoria em projetos.ts (o componente confere no build). Sem `foto`, a área
 * aparece só com texto: hoje nenhum projeto do portfólio é Comercial.
 * Evite fotos já usadas no hero, no destaque ou na grade da home.
 */
export interface AreaAtuacao {
  categoria: Category;
  texto: string;
  foto?: { slug: string; file: string };
}

export const areas: AreaAtuacao[] = [
  {
    categoria: 'Residencial',
    texto: 'Espaços pensados para acolher a rotina e expressar a identidade de quem mora.',
    foto: { slug: 'casa-de-campo', file: 'dsc09337.jpg' },
  },
  {
    categoria: 'Comercial',
    texto: 'Ambientes que conectam funcionalidade, experiência e identidade do negócio.',
  },
  {
    categoria: 'Interiores',
    texto: 'Materiais, iluminação e composição em diálogo com a forma de usar cada ambiente.',
    foto: { slug: 'casa-nova-erechim', file: 'dsc06707.jpg' },
  },
];

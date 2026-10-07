import type { ImageMetadata } from 'astro';

/**
 * Projetos do portfólio.
 *
 * Origem das fotos: pastas do Google Drive fornecidas pelo escritório. Cada projeto
 * corresponde a uma pasta (campo `source`); nada foi agrupado por semelhança visual.
 *
 * Para adicionar um projeto:
 *   1. Coloque as fotos em src/assets/projetos/<slug>/
 *   2. Acrescente um item abaixo, listando os arquivos em `images` (a primeira de cada
 *      orientação define o ritmo da galeria; paisagens ocupam a largura toda).
 *
 * `titleConfirmed: false` indica que o título vem do nome da pasta ou é um rótulo
 * descritivo, e ainda precisa de confirmação do escritório.
 */

export type Category = 'Residencial' | 'Comercial' | 'Interiores' | 'Institucional';

export interface ProjectImageData {
  file: string;
  alt: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  titleConfirmed: boolean;
  category: Category;
  /** Apenas cidade, e somente quando consta nos materiais. */
  location?: string;
  summary: string;
  description: string[];
  cover: string;
  /** Pasta de origem no Drive (referência interna, não exibida). */
  source: string;
  images: ProjectImageData[];
}

export const projetos: ProjectData[] = [
  {
    slug: 'casa-de-campo',
    title: 'Casa de campo',
    titleConfirmed: false,
    category: 'Residencial',
    summary: 'Tijolo aparente, madeira e varandas abertas para o gramado.',
    description: [
      'Casa térrea em tijolo aparente e réguas de madeira, sob um telhado de quatro águas que se prolonga em varandas abertas para o gramado e para a paisagem de morros ao redor.',
      'Por dentro, a estrutura de madeira do telhado fica à vista e recebe iluminação quente embutida. Cozinha, bar e mesa de refeições dividem o mesmo salão, com esquadrias que trazem o verde para dentro.',
    ],
    cover: 'dsc09265.jpg',
    source: 'LUCAS MATTÉ CASA',
    images: [
      { file: 'dsc09265.jpg', alt: 'Casa térrea de tijolo aparente e madeira com telhado de quatro águas, diante de um gramado amplo e árvores.' },
      { file: 'dsc09290.jpg', alt: 'Canto da casa revestido em réguas de madeira, com porta de vidro e luminária de parede.' },
      { file: 'dsc09329.jpg', alt: 'Salão interno com forro de madeira aparente e pendentes de luz quente sobre a bancada.' },
      { file: 'dji-0021.jpg', alt: 'Vista aérea da casa entre árvores, com o gramado à frente e morros ao fundo.' },
      { file: 'dsc09274.jpg', alt: 'Varanda com guarda-corpo de madeira, canteiros floridos e esquadrias escuras.' },
      { file: 'dsc09404.jpg', alt: 'Salão integrado com bar, mesa de refeições e estrutura do telhado em madeira à vista.' },
      { file: 'dsc09337.jpg', alt: 'Detalhe da estrutura do telhado em madeira com iluminação embutida nas tesouras.' },
      { file: 'dsc09421.jpg', alt: 'Bar em madeira maciça com banquetas e janela aberta para a vegetação.' },
      { file: 'dsc09408.jpg', alt: 'Parede de tijolo com prateleira de fotografias e banco de madeira.' },
    ],
  },
  {
    slug: 'casa-erechim',
    title: 'Casa Erechim',
    titleConfirmed: false,
    category: 'Residencial',
    location: 'Erechim',
    summary: 'Volumes em cinza e pedra por fora; lareira, cortinas e luz suave por dentro.',
    description: [
      'Fachada contemporânea composta por volumes em tons de cinza, revestimento em pedra, porta pivotante ripada e esquadrias escuras. O acesso acontece por placas de concreto intercaladas com seixos e gramado.',
      'Nos interiores, a lareira revestida em pedra organiza a sala, acompanhada de cortinas de piso a teto, pendente em anéis e mesa de jantar em madeira sob um lustre de lâmpadas aparentes.',
    ],
    cover: 'dsc08618.jpg',
    source: 'CASA ERECHIM LUCAS MATTÉ',
    images: [
      { file: 'dsc08553.jpg', alt: 'Fachada com pilar revestido em pedra, porta pivotante escura e beiral com iluminação embutida.' },
      { file: 'dsc08618.jpg', alt: 'Fachada vista do jardim, com muro cinza-escuro e piso de placas intercaladas com seixos.' },
      { file: 'dsc08514.jpg', alt: 'Sala com lareira revestida em pedra clara, televisor embutido e pendente em anéis iluminados.' },
      { file: 'dsc08521.jpg', alt: 'Mesa de jantar em madeira com cadeiras estofadas e cortinas de linho ao fundo.' },
      { file: 'dsc08547.jpg', alt: 'Varanda de acesso com pano de vidro, poltronas e escada de placas sobre o gramado.' },
      { file: 'dsc08481.jpg', alt: 'Lustre de lâmpadas globo sobre a mesa de jantar, diante de cortinas claras.' },
      { file: 'dsc08523.jpg', alt: 'Cozinha com marcenaria amadeirada, bancada clara e prateleiras iluminadas.' },
      { file: 'dsc08471.jpg', alt: 'Parede com molduras e spots de luz direcionada, ao lado da porta de entrada.' },
    ],
  },
  {
    slug: 'decorare',
    title: 'Decorare',
    titleConfirmed: false,
    category: 'Interiores',
    summary: 'Banho e estar em pedra, metais dourados, vegetação e cor intensa.',
    description: [
      'Ambientes de banho e estar construídos com cubas monolíticas em pedra, espelhos suspensos por hastes, metais dourados e uma parede de pedra natural com vegetação no forro.',
      'A luz baixa e as cores intensas — como o vermelho do lavabo e o papel de parede de motivos tropicais — dão a cada espaço uma atmosfera própria.',
    ],
    cover: 'dsc08706.jpg',
    source: 'LUCAS MATTÉ DECORARE',
    images: [
      { file: 'dsc08706.jpg', alt: 'Lavabo com paredes vermelhas, cubas em pedra verde, espelhos em arco e arandelas douradas.' },
      { file: 'dsc08742.jpg', alt: 'Cubas monolíticas em pedra com espelhos redondos suspensos por hastes douradas.' },
      { file: 'dsc08668.jpg', alt: 'Duas poltronas verdes diante de uma parede de pedra natural com vegetação no forro.' },
      { file: 'dsc08716.jpg', alt: 'Detalhe das torneiras douradas e arandelas de vidro canelado refletidas nos espelhos.' },
      { file: 'dsc08622.jpg', alt: 'Espelho redondo com moldura dourada sobre cuba de pedra, com plantas ao fundo.' },
      { file: 'dsc08683.jpg', alt: 'Painéis com papel de parede de motivos tropicais iluminados por arandelas.' },
      { file: 'dsc08665.jpg', alt: 'Piso polido em pedra refletindo a luz, com vegetação e parede de pedra clara.' },
      { file: 'dsc08697.jpg', alt: 'Arandela linear acesa sobre parede escura.' },
    ],
  },
  {
    slug: 'casa-nova-erechim',
    title: 'Casa Nova Erechim',
    titleConfirmed: false,
    category: 'Interiores',
    location: 'Erechim',
    summary: 'Cozinha, jantar e adega integrados entre pedra, madeira e luz.',
    description: [
      'Cozinha integrada à sala de jantar, com ilha em pedra clara, adega de garrafas fixadas em hastes douradas sobre parede de pedra, cristaleira iluminada com vidro canelado e painéis ripados em madeira.',
      'Na sala de estar, a lareira em mármore recebe um capitel de pedra rústica; o banheiro é revestido em pedra escura com metais dourados.',
    ],
    cover: 'dsc06978.jpg',
    source: 'FOTOS CASA NOVA ERECHIM - LUCAS MATTÉ',
    images: [
      { file: 'dsc06978.jpg', alt: 'Adega com garrafas fixadas em hastes douradas sobre parede de pedra, ao lado de cristaleira iluminada.' },
      { file: 'dsc07014.jpg', alt: 'Mesa de jantar com tampo claro, cadeiras de madeira e lustre de cristal diante de janelas com cortinas.' },
      { file: 'dsc06880.jpg', alt: 'Ilha em pedra clara com cuba de inox, torneira gourmet e calha úmida.' },
      { file: 'dsc06984.jpg', alt: 'Sala de jantar integrada, com janelas amplas para o jardim e lustre de cristal.' },
      { file: 'dsc06821.jpg', alt: 'Cozinha com marcenaria cinza, bancada com banquetas de madeira e mesa de jantar à frente.' },
      { file: 'dsc06959.jpg', alt: 'Bar com adegas climatizadas sob painel ripado de madeira e orquídeas.' },
      { file: 'dsc06707.jpg', alt: 'Lareira em mármore branco com moldura de pedra rústica e velas no interior.' },
      { file: 'dsc06842.jpg', alt: 'Lustre de cristal suspenso no ambiente integrado, com painel de madeira ao fundo.' },
      { file: 'dsc06670.jpg', alt: 'Banheiro com revestimento de pedra escura, gabinete preto e metais dourados.' },
    ],
  },
  {
    slug: 'igreja',
    title: 'Igreja',
    titleConfirmed: false,
    category: 'Institucional',
    summary: 'Duas torres em pedra e uma empena marcada pela cruz, desenhadas pela luz.',
    description: [
      'Templo com duas torres revestidas em pedra e um volume central de empena marcada pela cruz. Ao anoitecer, a iluminação embutida contorna a fachada e revela o interior pela grande abertura em arco.',
      'Por dentro, o forro com sancas iluminadas conduz o olhar até o altar; nichos emoldurados recebem as imagens e as janelas em arco abrem a nave para a paisagem.',
    ],
    cover: 'dji-0049.jpg',
    source: 'IGREJA LUCAS MATTÉ',
    images: [
      { file: 'dsc09501.jpg', alt: 'Fachada da igreja ao anoitecer, com as duas torres em pedra iluminadas e a cruz em destaque na empena central.' },
      { file: 'dsc09454.jpg', alt: 'Empena central com a cruz e a abertura em arco ao entardecer.' },
      { file: 'dsc09514.jpg', alt: 'Torre revestida em pedra iluminada de baixo para cima ao anoitecer.' },
      { file: 'dji-0049.jpg', alt: 'Vista aérea noturna da igreja iluminada entre as árvores.' },
      { file: 'dsc09179.jpg', alt: 'Nave com bancos de madeira, piso claro e forro com sancas iluminadas até o altar.' },
      { file: 'dsc09128.jpg', alt: 'Nichos emoldurados em preto com imagens sacras.' },
      { file: 'dsc09144.jpg', alt: 'Janelas em arco com caixilhos escuros na lateral da nave.' },
      { file: 'dji-0950.jpg', alt: 'Vista aérea diurna com as torres de cobertura metálica e a paisagem rural ao fundo.' },
      { file: 'dsc09151.jpg', alt: 'Altar entre nichos iluminados e forro rebaixado com luz indireta.' },
      { file: 'dsc09204.jpg', alt: 'Fachada frontal durante o dia, com as torres em pedra e o volume central.' },
    ],
  },
];

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projetos/*/*.{jpg,jpeg,png}',
  { eager: true },
);

export function projectImage(slug: string, file: string): ImageMetadata {
  const mod = imageModules[`../assets/projetos/${slug}/${file}`];
  if (!mod) throw new Error(`Imagem não encontrada: ${slug}/${file}`);
  return mod.default;
}

export function getProject(slug: string) {
  return projetos.find((p) => p.slug === slug);
}

export function projectMeta(p: ProjectData) {
  return p.location ? `${p.category}, ${p.location}` : p.category;
}

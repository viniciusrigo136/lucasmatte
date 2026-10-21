# Lucas Matté Arquitetura — site institucional

Referência para todas as fases da reformulação do site. Todo o conteúdo do site é em português do Brasil.

## Stack (o que o código realmente é)

O projeto é **Astro 5** (não Vite + React): páginas e componentes `.astro`, TypeScript estrito, CSS escopado por componente, sem Tailwind e sem React. Antes de propor uma lib, confirme em `package.json` o que já está instalado (`motion`, `sharp`, `@fontsource/*`).

- Dados dos projetos: `src/data/projetos.ts`, a única fonte de verdade (título, categoria, cidade, textos, `alt` de cada foto, capa). Dados do escritório, contatos, depoimentos e etapas: `src/data/site.ts`; campos `null` ou listas vazias ficam fora da página até serem confirmados. Áreas de atuação e suas fotos: `src/data/atuacao.ts` (o build confere se a foto é de um projeto da mesma categoria).
- Fotos: `src/assets/projetos/<slug>/`, carregadas por `projectImage(slug, file)` e otimizadas pelo `astro:assets` (`<Picture>` / `getImage`). Logo: SVG em `src/assets/logo/` (fonte do desenho, usada inline pelo `LogoHero` do hero) e PNG em `src/assets/marca/` (header e rodapé), nas versões grafite e marfim.
- Página de projeto: `src/pages/projetos/[slug].astro`, gerada a partir de `projetos.ts`.
- Validação antes de cada commit: `npm run check` (`astro check`) e `npm run build`.

## Brief

**Cliente.** Lucas Matté Arquitetura: projetos residenciais, comerciais e de interiores.

**Portfólio (5 projetos).**

| Projeto | Categoria | Cidade |
|---|---|---|
| Casa de campo | Residencial | — |
| Casa Erechim | Residencial | Erechim |
| Casa Nova Erechim | Interiores | Erechim |
| Decorare | Interiores | — |
| Igreja | Institucional | — |

Nada de dado inventado: o que não consta nos materiais (cidade, área, ano, cliente) fica de fora ou marcado como pendente em `projetos.ts`.

**Objetivo do site.** Mostrar o trabalho com a força das fotos e levar o visitante a iniciar uma conversa pelo WhatsApp (`site.contact.whatsapp`). Toda página termina num caminho claro até essa conversa.

**Matéria do escritório.** Pedra, madeira, vegetação, metais dourados, luz quente. O visual nasce disso: sóbrio, editorial, com as fotografias como protagonistas. A interface recua para a foto aparecer.

**Identidade.**
- Grafite `#302D29` e marfim `#F3EFE7` (cores exatas da logo).
- Preto puro `#000` é exclusivo do destaque do Decorare.

**Pedidos do cliente.**
1. Hero com a logo no centro, animada.
2. Seção de projetos reformulada por completo.
3. Decorare com área especial: fundo preto e destaque.

**Movimento.** Exatamente dois momentos: a entrada do hero (o único momento marcante) e a transição de fundo para o preto no Decorare. O restante do site aparece já no lugar, sem fade-in por seção. Com `prefers-reduced-motion: reduce`, os dois momentos viram estado final imediato.

**Acessibilidade e responsividade.**
- Contraste AA no mínimo (4,5:1 para texto normal, 3:1 para texto grande e ícones).
- Foco visível em todo elemento interativo.
- `alt` descritivo em toda imagem de conteúdo; `alt=""` só em imagem puramente decorativa ou duplicada por um texto ao lado.
- Layout sem rolagem horizontal a partir de 360px de largura.

**Linguagem visual.** Títulos sem rótulo acima, em caixa normal. Numeração só onde há sequência real (etapas de um processo, posição numa galeria). Composições que variam com a foto em vez de grades de cards iguais com sombra. Links identificados pelo texto e pelo sublinhado. Na prática, isso exclui:
- rótulos em CAIXA ALTA acima de cada título;
- numeração 01/02/03 em conteúdo que não é sequência;
- cards todos iguais com sombra;
- setas "→" / "↗" em todo link.

**Design.** Use a skill `frontend-design` como referência de direção visual e `vercel-react-best-practices` apenas no que se aplica a Astro (carregamento de imagem, JS mínimo no cliente).

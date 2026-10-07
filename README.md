# Lucas Matte Arquitetura — Landing page (MVP)

Landing page estática (HTML + CSS + JS puro, sem build) para o escritório **Lucas Matte Arquitetura** ([@lucasmattearquitetura](https://www.instagram.com/lucasmattearquitetura)).

## Seções
Hero · Sobre (com números) · Serviços · Portfólio com filtro · Processo · Depoimentos · Contato (formulário que abre o WhatsApp com a mensagem pronta) · Botão flutuante de WhatsApp.

## Rodar localmente
```bash
python3 -m http.server 8000   # abra http://localhost:8000
```

## O que falta preencher (busque por `TODO`)
- `js/main.js` → número do WhatsApp (`WHATSAPP`).
- `index.html` → bio, números (projetos/anos/m²), nomes dos projetos, depoimentos reais, e-mail e cidade.
- `assets/img/` → fotos (veja `assets/img/README.md`).
- Cores e fontes: variáveis em `:root` no topo de `css/style.css`.

## Publicar
Qualquer hospedagem estática: GitHub Pages (Settings → Pages → branch), Netlify ou Vercel (arrastar a pasta).

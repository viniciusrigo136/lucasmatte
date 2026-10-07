# Lucas Matté Arquitetura — Landing page (MVP)

Landing page estática (HTML + CSS + JS puro, sem build) para o escritório **Lucas Matté Arquitetura** ([@lucasmattearquitetura](https://www.instagram.com/lucasmattearquitetura)).

## Seções
Hero · Sobre · Serviços · Portfólio · Decorare 2025 · Processo · Contato (formulário que abre o WhatsApp com a mensagem pronta) · Botão flutuante de WhatsApp.

## Rodar localmente
```bash
python3 -m http.server 8000   # abra http://localhost:8000
```

## O que falta preencher (busque por `TODO`)
- `js/main.js` → número do WhatsApp (`WHATSAPP`).
- `index.html` → formação/CAU na bio, e-mail e cidade.
- `assets/img/` → as fotos atuais foram recortadas de prints do Instagram (~1200px). Para o site final, troque pelos arquivos originais em alta resolução, mantendo os mesmos nomes.
- Cores e fontes: variáveis em `:root` no topo de `css/style.css`.

## Publicar
Qualquer hospedagem estática: GitHub Pages (Settings → Pages → branch), Netlify ou Vercel (arrastar a pasta).

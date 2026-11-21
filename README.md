# LeapCode · Portfólio de Design Gráfico

Portfólio da disciplina **STC0315 – Design Gráfico** (IFC Campus Camboriú, 2026/2), de **Paulo Fernando Rodrigues**.

O site começa num "sistema legado" retrô (monitor CRT, terminal verde, janela estilo Windows 95). O botão **INICIAR APRESENTAÇÃO** faz o salto para a versão moderna, com a identidade visual da LeapCode. É o mesmo conceito da marca: modernizar software legado.

## Projetos
1. LeapCode: identidade visual e painel semântico (AD2)
2. Bauhaus 1919–1933: infográfico (AD1)
3. Estética: pôster informativo A4 (AD3)
4. IFMaker: flyer A5
5. Nintendo 64: análise de cores (Fórum 3)
6. 4 produtos, 4 princípios (Fórum 1)

## Estrutura
```
index.html        página única (modo legado + modo moderno)
css/style.css     estilos
js/projetos.js    TEXTOS DOS PROJETOS: edite aqui
js/main.js        intro, transição, grid e detalhe dos projetos
assets/img        imagens dos trabalhos e o sapo
assets/pdf        PDFs originais
assets/fonts      Chakra Petch, JetBrains Mono e VT323 (embutidas)
```

## Rodar localmente
Abra o `index.html` no navegador, ou rode `npx serve .` / `python -m http.server`.

Dica: um link com `#` (ex.: `.../#projetos`) pula a intro e vai direto ao modo moderno.

## Publicar (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
O site fica em: https://sapocharmoso.github.io/portifolio-design/

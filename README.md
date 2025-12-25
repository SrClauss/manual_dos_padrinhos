# Manual dos Padrinhos - React

Projeto React (Vite) que transforma o site original em um carrossel onde cada slide é uma "página" (hash navigation). Use este projeto dentro da pasta `react`.

## Observações importantes
- Este repositório **espera** que a pasta `img/` do projeto original esteja copiada para `react/public/img`.
  Você pode copiar com:

  ```bash
  cp -r ../img ./public/
  ```

- Existem imagens referenciadas como `/img/adelle_madrinha3.jpg`, `/img/padrinho_tom_holland.jpg` etc. As imagens originais estão na pasta raiz `img/`.
- Se alguma imagem estiver faltando, um placeholder será exibido.

## Dependências
- React 18
- Vite
- Swiper (carrossel)

## Como executar
1. Entre na pasta:

   ```bash
   cd react
   ```

2. Instale dependências:

   ```bash
   npm install
   ```

3. Copie a pasta de imagens para `react/public/img` (vide Observações acima).

4. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o link mostrado no terminal (geralmente http://localhost:5173).

## Funcionalidades
- Navegação por setas e pontos do Swiper
- Navegação por hash (cada "página" tem hash na URL: `#capa`, `#agradecimento`, `#versiculo`, etc.)
- Estilos e tipografia replicam a identidade visual do `index.html` original

## Próximos passos que posso fazer por você
- Copiar automaticamente as imagens do diretório raiz para `react/public/img` (se desejar, posso fazer isso).
- Adicionar animações entre páginas
- Tornar o layout responsivo

---
Feito com carinho. Se quiser, eu posso copiar as imagens para você e rodar o `npm install` (se você autorizar).
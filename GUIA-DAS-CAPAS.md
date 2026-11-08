# Guia das Capas — A Arte de Retomar (Pensavesso)

Este documento explica, em português simples, como adicionar, verificar e atualizar as três capas originais dos materiais digitais no projeto.

---

## 1. Onde colocar as três imagens

Todas as três imagens das capas devem ser colocadas dentro da pasta:

```text
public/images/
```

---

## 2. Qual nome utilizar em cada arquivo (Nomes Obrigatórios)

Para que o site reconheça as capas automaticamente em todas as seções, renomeie os seus três arquivos PNG originais exatamente para os nomes abaixo:

1. **Capa do E-book Principal (*A Arte de Retomar*):**
   - Nome do arquivo: `capa-arte-de-retomar.png`
   - Caminho completo: `public/images/capa-arte-de-retomar.png`

2. **Capa do Bônus 01 (*O Peso das Escolhas*):**
   - Nome do arquivo: `capa-o-peso-das-escolhas.png`
   - Caminho completo: `public/images/capa-o-peso-das-escolhas.png`

3. **Capa do Bônus 02 (*Nem Todo Pensamento É um Fato*):**
   - Nome do arquivo: `capa-nem-todo-pensamento-e-um-fato.png`
   - Caminho completo: `public/images/capa-nem-todo-pensamento-e-um-fato.png`

---

## 3. Como verificar se as capas foram carregadas corretamente

1. Enquanto os arquivos PNG ainda não estiverem na pasta `public/images/`, a página exibirá automaticamente um **Placeholder Provisório Editorial** (sem mostrar ícones de imagem quebrada).
2. Assim que você copiar os arquivos `capa-arte-de-retomar.png`, `capa-o-peso-das-escolhas.png` e `capa-nem-todo-pensamento-e-um-fato.png` para `public/images/`, atualize a página no navegador (`F5` ou `Ctrl + F5`).
3. Os quadros provisórios desaparecerão sozinhos e as suas capas reais passarão a aparecer imediatamente:
   - Na **Seção 01 (Hero)**;
   - Na **Seção 03 (Apresentação do E-book Principal)**;
   - Na **Seção 05 (Bônus 01)**;
   - Na **Seção 06 (Bônus 02)**;
   - Na **Seção 07 (O Conjunto Completo)**.

---

## 4. Como substituir uma capa futuramente

Se você desejar atualizar a arte de qualquer uma das capas no futuro:

1. Salve a nova versão da imagem em formato `.png`.
2. Utilize **exatamente o mesmo nome de arquivo** da capa que deseja substituir (por exemplo, `capa-arte-de-retomar.png`).
3. Substitua o arquivo antigo dentro da pasta `public/images/`.
4. Faça o commit e envie para o GitHub (a Vercel atualizará o site automaticamente).
5. Caso o navegador ainda mostre a versão antiga por causa do cache, pressione `Ctrl + F5` (no Windows) ou `Cmd + Shift + R` (no Mac).

---

## 5. Como manter a proporção original das capas

- Os quadros de capa da página foram programados com proporção editorial vertical (`aspect-ratio: 1 / 1.414`, padrão A4/livro digital).
- Recomendamos utilizar imagens verticais com boa resolução (por exemplo, `800 x 1130 px` ou `1200 x 1700 px`) e peso otimizado (idealmente abaixo de `400 KB` por arquivo PNG) para manter o carregamento instantâneo no celular.
- Não recorte as bordas da capa de maneira desigual para que todas fiquem alinhadas na seção *O Conjunto Completo*.

---

## 6. Como evitar problemas com letras maiúsculas, acentos e espaços

Servidores de hospedagem como a **Vercel** (baseados em Linux) diferenciam letras maiúsculas de minúsculas. Um arquivo chamado `Capa-Arte-de-Retomar.PNG` funciona no Windows, mas **não carrega** quando publicado na internet se o código procurar `capa-arte-de-retomar.png`.

Para nunca ter erros:
- Use **apenas letras minúsculas** (inclusive na extensão `.png` em minúsculo);
- **Nunca use acentos ou cedilha** (`e` em vez de `é`, `bonus` se necessário, etc.);
- **Nunca deixe espaços em branco** — separe todas as palavras apenas com hífen (`-`).

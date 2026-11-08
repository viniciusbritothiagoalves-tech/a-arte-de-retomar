# Guia de Configuração e Publicação — Pensavesso (*A Arte de Retomar*)

Este guia explica a configuração do checkout oficial da Kiwify, a adição das 3 capas reais e a publicação no **GitHub** e na **Vercel**.

---

## 1. Checkout Oficial da Kiwify (Já Configurado)

Todos os botões de compra da página (`index.html`) e o arquivo central `js/config.js` já estão configurados com o endereço oficial da Kiwify:

```text
https://pay.kiwify.com.br/DcMtfh9
```

### Recursos automáticos ativos:
- **Redirecionamento direto:** Todos os CTAs (Cabeçalho, Hero, Demonstração Prática, Conjunto Completo, Oferta e Fechamento) apontam diretamente para `https://pay.kiwify.com.br/DcMtfh9`.
- **Preservação de UTMs (`PRESERVE_UTM_PARAMS: true`):** Quando um visitante chega à página por meio de um link com parâmetros de campanha (`?utm_source=...&utm_campaign=...`), o script `js/main.js` repassa esses parâmetros automaticamente para o checkout da Kiwify.

### Campos opcionais em `js/config.js`:
Caso deseje exibir um e-mail específico de suporte no rodapé ou definir o domínio final após publicar, basta preencher em `js/config.js`:

```javascript
SUPPORT_EMAIL: "seu-email@dominio.com.br",
SITE_URL: "https://seu-dominio.vercel.app",
```

---

## 2. Adição das Três Capas Reais (`public/images/`)

Para substituir automaticamente os placeholders discretos pelas capas originais, coloque os três arquivos PNG dentro da pasta `public/images/` com os nomes exatos abaixo:

1. `public/images/capa-arte-de-retomar.png`
2. `public/images/capa-o-peso-das-escolhas.png`
3. `public/images/capa-nem-todo-pensamento-e-um-fato.png`

Consulte [`GUIA-DAS-CAPAS.md`](GUIA-DAS-CAPAS.md) para mais detalhes.

---

## 3. Passo a Passo para Publicar no GitHub + Vercel

### Passo 1: Enviar os Arquivos ao GitHub
1. Acesse [github.com](https://github.com/) e crie um novo repositório (ex.: `pensavesso-arte-de-retomar`).
2. Envie todos os arquivos do projeto pela interface web do GitHub (**uploading an existing file**) ou via terminal Git:

```bash
git init
git add .
git commit -m "Página de vendas reconstruída: A Arte de Retomar (Pensavesso)"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/pensavesso-arte-de-retomar.git
git push -u origin main
```

### Passo 2: Importar na Vercel
1. Acesse [vercel.com](https://vercel.com/) com sua conta do GitHub.
2. Clique em **Add New...** → **Project** e selecione o repositório `pensavesso-arte-de-retomar`.
3. Mantenha **Framework Preset** como **Other** (site estático HTML/CSS/JS puro).
4. Clique em **Deploy**. O site estará no ar em poucos segundos com HTTPS ativo.

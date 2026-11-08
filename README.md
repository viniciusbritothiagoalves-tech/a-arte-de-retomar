# A Arte de Retomar — Caderno Prático de Reorganização Pessoal (Pensavesso)

Página de vendas estática com identidade **Dark Premium**, mobile-first e focada em conversão para o produto digital **A Arte de Retomar — Caderno Prático de Reorganização Pessoal** (material principal de 15 páginas + 2 materiais complementares em PDF de 8 páginas cada: *O Peso das Escolhas* e *Nem Todo Pensamento É um Fato*), da marca **Pensavesso**.

---

## Estrutura do Projeto

```text
pensavesso-vendas/
│
├── index.html                  # Página de vendas principal (8 seções enxutas + rodapé minimalista)
├── privacidade.html            # Política de Privacidade (identidade Dark Premium)
├── termos.html                 # Termos de Uso (identidade Dark Premium)
├── 404.html                    # Página de erro 404 personalizada
├── robots.txt                  # Diretrizes para buscadores
├── sitemap.xml                 # Mapa do site
├── favicon.svg                 # Ícone vetorial Dark Premium
├── vercel.json                 # Configuração de cabeçalhos e cache na Vercel
├── README.md                   # Documentação geral do projeto
├── GUIA-DAS-CAPAS.md           # Especificações das 3 capas reais
├── CONFIGURACAO.md             # Guia de configuração e deploy no GitHub + Vercel
│
├── css/
│   └── styles.css              # Design System Dark Premium (#080A0B, #111517, #191F21, #D2A45B)
│
├── js/
│   ├── config.js               # Configuração centralizada do checkout e produto
│   └── main.js                 # Integração dos CTAs e preservação de parâmetros UTM
│
├── scripts/
│   └── validate-deploy.js      # Auditoria automatizada de arquivos, capas, copy e CTAs
│
└── public/
    └── images/
        ├── capa-arte-de-retomar.png               # Capa original (941x1671)
        ├── capa-o-peso-das-escolhas.png           # Capa original Bônus 01 (941x1672)
        └── capa-nem-todo-pensamento-e-um-fato.png # Capa original Bônus 02 (941x1672)
```

---

## Validação e Execução Local

Para executar a auditoria completa do projeto:

```bash
node scripts/validate-deploy.js
```

Para abrir em servidor local:

```bash
npx serve .
```

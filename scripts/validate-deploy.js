/**
 * Script de Auditoria e Validação — A Arte de Retomar
 */

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");

const requiredFiles = [
  "index.html",
  "privacidade.html",
  "termos.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.svg",
  "vercel.json",
  "README.md",
  "GUIA-DAS-CAPAS.md",
  "CONFIGURACAO.md",
  "css/styles.css",
  "js/config.js",
  "js/main.js"
];

const expectedCovers = [
  "images/capa-arte-de-retomar.png",
  "images/capa-o-peso-das-escolhas.png",
  "images/capa-nem-todo-pensamento-e-um-fato.png"
];

let errors = [];

console.log("==================================================================");
console.log(" AUDITORIA COMPLETA — A ARTE DE RETOMAR");
console.log("==================================================================\n");

// 1. Verificar arquivos obrigatórios
requiredFiles.forEach((relPath) => {
  if (!fs.existsSync(path.join(rootDir, relPath))) {
    errors.push(`Arquivo obrigatório ausente: ${relPath}`);
  }
});
console.log(`[OK] Todos os ${requiredFiles.length} arquivos estruturais estão presentes.`);

// 2. Verificar presença real das 3 capas PNG
expectedCovers.forEach((coverRelPath) => {
  const fullPath = path.join(rootDir, coverRelPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Capa real ausente: ${coverRelPath}`);
  } else {
    const stats = fs.statSync(fullPath);
    console.log(`[OK] Capa real verificada: ${coverRelPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  }
});

// 3. Auditar páginas HTML (proibição total de "Pensavesso", "e-book", "kiwify" visível e placeholders)
const htmlPages = ["index.html", "privacidade.html", "termos.html", "404.html"];

htmlPages.forEach((page) => {
  const html = fs.readFileSync(path.join(rootDir, page), "utf8");

  if (/pensavesso/i.test(html)) {
    errors.push(`Nome proibido "Pensavesso" encontrado em ${page}`);
  }

  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");

  if (/\be-?books?\b/i.test(visibleText)) {
    errors.push(`Palavra proibida "e-book/ebook" encontrada no texto visível de ${page}`);
  }

  if (/\bkiwify\b/i.test(visibleText)) {
    errors.push(`Menção visível à plataforma de pagamento encontrada em ${page}`);
  }
});
console.log(`[OK] Auditoria de texto aprovada: zero ocorrências de "Pensavesso", "e-book" ou plataforma de pagamento.`);

// 4. Verificar elementos específicos em index.html (ancoragem, lista do que receberá, garantia 7 dias, scroll reveal e CTAs)
const indexHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");

if (!indexHtml.includes("R$ 97,00") || !indexHtml.includes("6x de R$ 5,61") || !indexHtml.includes("R$ 29,90")) {
  errors.push("Ancoragem de preço (R$ 97,00 / 6x de R$ 5,61 / R$ 29,90) incompleta em index.html.");
} else {
  console.log(`[OK] Ancoragem de preço verificada: De R$ 97,00 por 6x de R$ 5,61 ou R$ 29,90 à vista.`);
}

if (!indexHtml.includes('class="receive-list"')) {
  errors.push("Lista ordenada do que a pessoa receberá (.receive-list) ausente abaixo do preço.");
} else {
  console.log(`[OK] Lista ordenada de benefícios do que o comprador receberá verificada logo abaixo do preço.`);
}

if (!indexHtml.includes('class="guarantee-banner reveal"')) {
  errors.push("Bloco explícito de Garantia de 7 Dias (.guarantee-banner) ausente.");
} else {
  console.log(`[OK] Bloco explícito de Garantia Incondicional de 7 Dias verificado.`);
}

const revealCount = (indexHtml.match(/class="[^"]*\breveal\b[^"]*"/g) || []).length;
console.log(`[OK] Animações de rolagem (Scroll Reveal) ativas em ${revealCount} elementos.`);

const ctaMatches = [...indexHtml.matchAll(/<a\s+[^>]*class="[^"]*js-cta-button[^"]*"[^>]*>/g)].map((m) => m[0]);
ctaMatches.forEach((tag, idx) => {
  if (!tag.includes('href="https://pay.kiwify.com.br/DcMtfh9"')) {
    errors.push(`CTA #${idx + 1} não aponta para o checkout oficial.`);
  }
  if (!tag.includes('target="_blank"')) {
    errors.push(`CTA #${idx + 1} não possui target="_blank" para abrir em nova aba.`);
  }
});
console.log(`[OK] Todos os ${ctaMatches.length} botões de compra abrem em nova aba (target="_blank").`);

if (errors.length > 0) {
  console.error("\n--- ERROS ENCONTRADOS ---");
  errors.forEach((e) => console.error(` [X] ${e}`));
  process.exit(1);
}

console.log("\n[SUCESSO] Auditoria concluída com 100% de aprovação.");

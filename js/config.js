/**
 * Configuração Centralizada — A Arte de Retomar
 */

const SITE_CONFIG = {
  PRODUCT_NAME: "A Arte de Retomar",
  PRODUCT_SUBTITLE: "Caderno Prático de Reorganização Pessoal",
  ANCHOR_PRICE: "R$ 97,00",
  INSTALLMENT_PRICE: "6x de R$ 5,61",
  CASH_PRICE: "R$ 29,90",
  PRODUCT_PRICE_NUMBER: "29.90",
  CURRENCY: "BRL",

  // Link oficial de checkout (abre em nova aba)
  CHECKOUT_URL: "https://pay.kiwify.com.br/DcMtfh9",

  // URL do site (opcional para canonical)
  SITE_URL: "",

  // Caminhos obrigatórios das capas reais
  COVERS: {
    MAIN: "public/images/capa-arte-de-retomar.png",
    BONUS_1: "public/images/capa-o-peso-das-escolhas.png",
    BONUS_2: "public/images/capa-nem-todo-pensamento-e-um-fato.png"
  },

  PRESERVE_UTM_PARAMS: true,
  OPEN_CHECKOUT_IN_NEW_TAB: true
};

if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}

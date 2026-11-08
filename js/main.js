/**
 * Script Principal — A Arte de Retomar
 * Animações de rolagem (Scroll Reveal), interatividade suave e CTAs em nova aba.
 */

(function () {
  "use strict";

  const DEFAULT_CHECKOUT_URL = "https://pay.kiwify.com.br/DcMtfh9";
  const config = window.SITE_CONFIG || {};

  function getBaseCheckoutUrl() {
    if (
      config.CHECKOUT_URL &&
      typeof config.CHECKOUT_URL === "string" &&
      config.CHECKOUT_URL.trim().startsWith("http")
    ) {
      return config.CHECKOUT_URL.trim();
    }
    return DEFAULT_CHECKOUT_URL;
  }

  function buildCheckoutDestination() {
    const baseUrl = getBaseCheckoutUrl();
    if (config.PRESERVE_UTM_PARAMS === false || !window.location.search) {
      return baseUrl;
    }

    try {
      const targetUrl = new URL(baseUrl);
      const currentParams = new URLSearchParams(window.location.search);
      const allowedPrefixes = ["utm_", "src", "sck", "ref", "aff", "fbclid", "gclid"];

      currentParams.forEach(function (value, key) {
        const lowerKey = key.toLowerCase();
        const shouldForward = allowedPrefixes.some(function (prefix) {
          return lowerKey === prefix || lowerKey.startsWith(prefix);
        });
        if (shouldForward && !targetUrl.searchParams.has(key)) {
          targetUrl.searchParams.set(key, value);
        }
      });

      return targetUrl.toString();
    } catch (_err) {
      return baseUrl;
    }
  }

  function initCheckoutCTAs() {
    const ctaButtons = document.querySelectorAll(".js-cta-button");
    const destinationUrl = buildCheckoutDestination();

    ctaButtons.forEach(function (button) {
      button.setAttribute("href", destinationUrl);
      button.setAttribute("target", "_blank");
      button.setAttribute("rel", "noopener noreferrer");
    });
  }

  /**
   * Animações ao rolar a página (Scroll Reveal)
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) return;

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function bootstrap() {
    initCheckoutCTAs();
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();

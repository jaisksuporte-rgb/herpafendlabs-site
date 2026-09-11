/**
 * =========================================================================
 * MAIN INTERACTION & ACCESSIBILITY SCRIPT
 * =========================================================================
 * - Lógica do Accordion de FAQ
 * - Atualização e propagação dinâmica dos links e textos de CTA
 * - Barra de CTA flutuante em mobile após passar a primeira tabela de preços
 * - Rolagem suave para tabelas de oferta
 * - Desempenho ultra-otimizado (< 3KB)
 */

document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion without synchronous layout measurements.
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

        // Fecha todos os outros itens para um efeito sanfona limpo
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherBtn = otherItem.querySelector('.faq-question');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherBtn && otherAnswer) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherItem.classList.remove('active');
            }
          }
        });

        // Alterna o estado do item atual
        if (isExpanded) {
          questionBtn.setAttribute('aria-expanded', 'false');
          item.classList.remove('active');
        } else {
          questionBtn.setAttribute('aria-expanded', 'true');
          item.classList.add('active');
        }
      });
    }
  });

  // Mobile sticky CTA via IntersectionObserver (no scroll-time reflow).
  const stickyBar = document.getElementById('mobileStickyBar');
  const firstOffer = document.getElementById('pricing-top');

  if (stickyBar && firstOffer && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      stickyBar.classList.toggle('visible', !entry.isIntersecting && entry.boundingClientRect.top < 0 && window.innerWidth < 768);
    });
    observer.observe(firstOffer);
  }

  // 5. Data dinâmica de ano nos direitos autorais
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

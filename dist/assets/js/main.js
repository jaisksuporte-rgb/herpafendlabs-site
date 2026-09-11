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
  const config = window.PAGE_CONFIG || {};

  // 1. Atualizar links de checkout em todos os botões e cards de oferta
  function bindCheckoutLinks() {
    const buyButtons = document.querySelectorAll('[data-checkout-bundle]');
    buyButtons.forEach(btn => {
      const bundleType = btn.getAttribute('data-checkout-bundle');
      const targetUrl = config.checkoutUrls?.[bundleType] || config.checkoutUrls?.defaultUrl || '#';
      
      // Se o elemento for um <a>, define o href diretamente
      if (btn.tagName.toLowerCase() === 'a') {
        btn.setAttribute('href', targetUrl);
      }
      
      // Evento de clique para disparar analytics (se houver) e redirecionamento seguro
      btn.addEventListener('click', (e) => {
        if (typeof fbq === 'function') {
          fbq('track', 'InitiateCheckout', {
            content_name: bundleType,
            currency: 'USD',
            value: config.bundles?.[bundleType]?.totalPrice || 0
          });
        }
      });
    });
  }
  bindCheckoutLinks();

  // 2. Rolagem suave para a tabela de preços nos botões "Get Started" ou âncoras
  document.querySelectorAll('a[href^="#offer"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 3. Accordion Interativo de FAQ
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
              otherAnswer.style.maxHeight = null;
              otherItem.classList.remove('active');
            }
          }
        });

        // Alterna o estado do item atual
        if (isExpanded) {
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
          item.classList.remove('active');
        } else {
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          item.classList.add('active');
        }
      });
    }
  });

  // Abre o primeiro FAQ por padrão
  if (faqItems.length > 0) {
    const firstBtn = faqItems[0].querySelector('.faq-question');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstBtn && firstAns) {
      firstBtn.setAttribute('aria-expanded', 'true');
      firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
      faqItems[0].classList.add('active');
    }
  }

  // 4. Barra Sticky Flutuante Mobile
  const stickyBar = document.getElementById('mobileStickyBar');
  const firstOffer = document.getElementById('pricing-top');

  if (stickyBar && firstOffer) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = firstOffer.getBoundingClientRect();
          // Mostra a barra quando o usuário já tiver rolado além do início da primeira oferta
          if (rect.bottom < 0 && window.innerWidth < 768) {
            stickyBar.classList.add('visible');
          } else {
            stickyBar.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 5. Data dinâmica de ano nos direitos autorais
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/**
 * =========================================================================
 * LANDING PAGE CONFIGURATION FILE
 * =========================================================================
 * Altere facilmente links de checkout, preços, textos de botões e IDs de tracking.
 * Todos os botões de compra da página leem esses valores automaticamente.
 */

window.PAGE_CONFIG = {
  // Informações da Marca
  brand: {
    name: "HerpaFend",
    fullName: "HerpaFend™ Viral Bioshield Defense Complex",
    doctorName: "Dr. Robert Beck",
    guaranteeDays: 60,
    supportEmail: "support@herpafend.com",
    phone: "+1 (302) 314-0109"
  },

  // Links de Checkout (Altere aqui para atualizar todos os botões da página)
  checkoutUrls: {
    bundle6: "https://herpafend.com/b?p=herpafend_6&aff_id=153250&b=63&fid=98&pg=5568", // 6 Frascos (Best Value)
    bundle3: "https://herpafend.com/b?p=herpafend_3&aff_id=153250&b=63&fid=98&pg=5568", // 3 Frascos (90 Dias)
    bundle2: "https://herpafend.com/b?p=herpafend_2&aff_id=153250&b=63&fid=98&pg=5568", // 2 Frascos (60 Dias)
    defaultUrl: "https://herpafend.com/b?p=herpafend_6&aff_id=153250&b=63&fid=98&pg=5568"
  },

  // Textos e CTAs
  cta: {
    buttonMain: "BUY NOW",
    buttonSubtext: "ONE-TIME PAYMENT • DISCREET BILLING & SHIPPING",
    moneyBackText: "60-Day 100% Money-Back Guarantee",
    securityBadgeText: "256-Bit Bank-Grade Encryption"
  },

  // Configuração dos Pacotes e Ofertas
  bundles: {
    bundle6: {
      bottles: 6,
      days: 180,
      title: "6 BOTTLES",
      badge: "BEST VALUE",
      supplyLabel: "180 Day Supply",
      pricePerBottle: 49,
      originalTotal: 594,
      totalPrice: 294,
      savings: 300,
      bonusesCount: 2,
      bonusLabel: "2 FREE BONUSES!",
      shipping: "FREE US SHIPPING!",
      isBestValue: true
    },
    bundle3: {
      bottles: 3,
      days: 90,
      title: "3 BOTTLES",
      badge: "POPULAR PACK",
      supplyLabel: "90 Day Supply",
      pricePerBottle: 59,
      originalTotal: 297,
      totalPrice: 177,
      savings: 120,
      bonusesCount: 1,
      bonusLabel: "FREE BONUS BOOK",
      shipping: "+ $9.99 Shipping",
      isBestValue: false
    },
    bundle2: {
      bottles: 2,
      days: 60,
      title: "2 BOTTLES",
      badge: "STARTER PACK",
      supplyLabel: "60 Day Supply",
      pricePerBottle: 79,
      originalTotal: 198,
      totalPrice: 158,
      savings: 40,
      bonusesCount: 0,
      bonusLabel: "",
      shipping: "+ $9.99 Shipping",
      isBestValue: false
    }
  },

  // IDs de Rastreamento (Deixe em branco para NÃO carregar scripts desnecessários)
  // Preencha quando desejar ativar o rastreamento automaticamente.
  tracking: {
    googleTagManagerId: "",    // Ex: "GTM-XXXXXX"
    googleAnalytics4Id: "",    // Ex: "G-XXXXXXXXXX"
    googleAdsConversionId: "", // Ex: "AW-XXXXXXXXX"
    metaPixelId: ""            // Ex: "123456789012345"
  }
};

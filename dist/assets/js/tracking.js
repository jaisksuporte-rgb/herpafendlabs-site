/**
 * =========================================================================
 * TRACKING MANAGER (CARREGAMENTO CONDICIONAL & ZERO IMPACTO DE VELOCIDADE)
 * =========================================================================
 * Nenhum script de terceiro é carregado se o respectivo ID estiver vazio.
 * Carregamento assíncrono para garantir PageSpeed Mobile > 90.
 */

(function initTracking() {
  const config = window.PAGE_CONFIG?.tracking || {};

  // 1. Google Tag Manager
  if (config.googleTagManagerId && config.googleTagManagerId.trim() !== "") {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',config.googleTagManagerId.trim());
    console.log("[Tracking] GTM initialized:", config.googleTagManagerId);
  }

  // 2. Google Analytics 4 (se GTM não estiver sendo usado)
  if (config.googleAnalytics4Id && config.googleAnalytics4Id.trim() !== "") {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + config.googleAnalytics4Id.trim();
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', config.googleAnalytics4Id.trim());
    console.log("[Tracking] GA4 initialized:", config.googleAnalytics4Id);
  }

  // 3. Meta Pixel (Facebook Ads)
  if (config.metaPixelId && config.metaPixelId.trim() !== "") {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', config.metaPixelId.trim());
    fbq('track', 'PageView');
    console.log("[Tracking] Meta Pixel initialized:", config.metaPixelId);
  }

  // 4. Google Ads Conversion Tag
  if (config.googleAdsConversionId && config.googleAdsConversionId.trim() !== "") {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('config', config.googleAdsConversionId.trim());
    console.log("[Tracking] Google Ads initialized:", config.googleAdsConversionId);
  }
})();

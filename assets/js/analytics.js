/* ══════════════════════════════════════════════════════════
   MAPA Soluções Digitais — Analytics

   Um arquivo só, carregado em todas as páginas do site.
   Junta GA4 + Microsoft Clarity + Google Ads + consentimento (LGPD).

   ┌─ PARA CONFIGURAR ────────────────────────────────────┐
   │ Os IDs logo abaixo são a única coisa que precisa ser │
   │ editada neste arquivo. GA4 e Clarity já estão        │
   │ preenchidos; o do Google Ads entra quando você criar │
   │ a conversão na conta.                                │
   └──────────────────────────────────────────────────────┘
   ══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ═══════════════ CONFIGURAÇÃO ═══════════════ */

  // Measurement ID do GA4 — Admin → Fluxos de dados → seu site. Formato: G-XXXXXXXXXX
  var GA4_ID = 'G-DHM80SYC63';

  // Project ID do Microsoft Clarity — Settings → Overview. 10 caracteres, tipo 'a1b2c3d4e5'
  var CLARITY_ID = 'ym0v6xh6tq';

  // ID de conversão do Google Ads — Ferramentas → Conversões → sua conversão,
  // na caixa "Adicionar a tag ao site". Formato: AW-123456789
  var ADS_ID = 'AW-XXXXXXXXX';

  // Rótulos de conversão do Google Ads. Vêm junto do ID, no formato
  // 'AW-123456789/AbC-D_efGhIjKlMnOp' — cole aqui SÓ a parte depois da barra.
  var ADS_CONVERSOES = {
    whatsapp: 'XXXXXXXXXXXXXXXXXXXXXX',   // conversão principal: clique no WhatsApp
    email: ''                              // opcional: clique no e-mail
  };

  // true  = GA4 carrega já no modo restrito (sem cookies) e só passa a usar
  //         cookies depois do "Aceitar". É o Consent Mode v2 do Google.
  // false = GA4 não carrega nada antes do aceite. Mais conservador, menos dados.
  var GA_ANTES_DO_ACEITE = true;

  // Dias até o banner voltar a perguntar para quem já respondeu.
  var VALIDADE_DIAS = 180;

  /* ════════════════════════════════════════════ */

  // A chave carrega uma versão: o banner passou a cobrir também
  // publicidade, e quem aceitou a versão anterior concordou com outra
  // coisa. Subir a versão faz o aviso voltar para todo mundo — é o
  // que torna o novo consentimento legítimo.
  var CONSENT_KEY = 'mapa_consent_v2';
  var temGA = GA4_ID.indexOf('XXXX') === -1;
  var temClarity = CLARITY_ID.indexOf('XXXX') === -1;
  var temAds = ADS_ID.indexOf('XXXX') === -1;

  function rotuloConversao(chave) {
    var r = ADS_CONVERSOES[chave];
    if (!temAds || !r || r.indexOf('XXXX') !== -1) return null;
    return ADS_ID + '/' + r;
  }

  if (!temGA && !temClarity && !temAds) {
    if (window.console && console.info) {
      console.info('[MAPA] analytics.js carregado, mas nenhum ID foi preenchido.');
    }
    return;
  }

  /* ── dataLayer e gtag precisam existir antes de tudo ───── */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  /* ── Estado do consentimento ───────────────────────────── */

  function lerConsentimento() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var o = JSON.parse(raw);
      if (!o || !o.estado || !o.data) return null;
      var dias = (Date.now() - o.data) / 86400000;
      if (dias > VALIDADE_DIAS) return null;
      return o.estado;              // 'granted' | 'denied'
    } catch (e) { return null; }
  }

  function gravarConsentimento(estado) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ estado: estado, data: Date.now() }));
    } catch (e) { /* navegação privada: vale só para esta visita */ }
  }

  var consentimento = lerConsentimento();

  /* ── Consent Mode v2: o padrão é negar, sempre ─────────── */

  // Desde junho de 2026 o ad_storage é o ÚNICO controle do que chega
  // ao Google Ads — antes o Google Signals também servia de porta.
  // Sem conceder aqui, não há conversão medida nem remarketing.
  var CONCEDIDO = {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  };
  var NEGADO = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  };

  if (temGA || temAds) {
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });

    if (consentimento === 'granted') {
      gtag('consent', 'update', CONCEDIDO);
    }
  }

  /* ── Carregamento dos scripts ──────────────────────────── */

  var gaCarregado = false;
  var clarityCarregado = false;

  function carregarGA() {
    if (gaCarregado || (!temGA && !temAds)) return;
    gaCarregado = true;

    // Um único gtag.js serve GA4 e Google Ads; cada um recebe seu config.
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + (temGA ? GA4_ID : ADS_ID);
    document.head.appendChild(s);
    gtag('js', new Date());

    if (temGA) {
      gtag('config', GA4_ID, {
        send_page_view: true,
        // Rótulo mais legível que a URL crua nos relatórios
        page_title: document.title
      });
    }
    if (temAds) {
      gtag('config', ADS_ID);
    }
  }

  function carregarClarity() {
    if (clarityCarregado || !temClarity) return;
    clarityCarregado = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);

    // Tags para filtrar gravações no painel do Clarity
    try {
      window.clarity('set', 'idioma', idioma());
      window.clarity('set', 'pagina', document.location.pathname);
    } catch (e) {}
  }

  if (consentimento === 'granted') {
    carregarGA();
    carregarClarity();
  } else if (GA_ANTES_DO_ACEITE) {
    // Sem cookies: o GA4 manda pings anônimos que alimentam só os
    // totais estimados. Nada é gravado no navegador do visitante.
    carregarGA();
  }

  /* ── Idioma (a home tem seletor PT/EN/ES) ──────────────── */

  function idioma() {
    if (window._mapLang) return window._mapLang;
    try {
      var l = localStorage.getItem('mapa_lang');
      if (l) return l;
    } catch (e) {}
    return (document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
  }

  /* ── Disparo de eventos ────────────────────────────────── */

  function evento(nome, params) {
    var p = params || {};
    p.idioma = idioma();
    try { if (typeof window.gtag === 'function') window.gtag('event', nome, p); } catch (e) {}
    try { window.dataLayer.push(Object.assign({ event: nome }, p)); } catch (e) {}
  }
  window.mapaEvento = evento;

  /* Conversão do Google Ads. É o mesmo clique que já vira evento no GA4,
     mas o Ads precisa do disparo com o par ID/rótulo para contabilizar. */
  function conversao(chave, params) {
    var destino = rotuloConversao(chave);
    if (!destino) return;
    var p = params || {};
    p.send_to = destino;
    try { if (typeof window.gtag === 'function') window.gtag('event', 'conversion', p); } catch (e) {}
  }

  /* ── Banner de consentimento ───────────────────────────── */

  var TXT = {
    pt: {
      msg: 'Usamos cookies para entender como o site é usado (Google Analytics e Microsoft Clarity) e para medir o resultado dos nossos anúncios no Google. Não vendemos seus dados para ninguém.',
      ok: 'Aceitar',
      no: 'Só o essencial',
      link: 'Cookies',
      politica: 'Política de privacidade',
      aria: 'Aviso de cookies'
    },
    en: {
      msg: 'We use cookies to understand how the site is used (Google Analytics and Microsoft Clarity) and to measure the results of our ads on Google. We never sell your data to anyone.',
      ok: 'Accept',
      no: 'Essential only',
      link: 'Cookies',
      politica: 'Privacy policy',
      aria: 'Cookie notice'
    },
    es: {
      msg: 'Usamos cookies para entender cómo se usa el sitio (Google Analytics y Microsoft Clarity) y para medir el resultado de nuestros anuncios en Google. No vendemos tus datos a nadie.',
      ok: 'Aceptar',
      no: 'Solo lo esencial',
      link: 'Cookies',
      politica: 'Política de privacidad',
      aria: 'Aviso de cookies'
    }
  };

  function txt() { return TXT[idioma()] || TXT.pt; }

  var CSS = [
    '.mapa-cc{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:9998;',
    'max-width:640px;margin:0 auto;background:var(--card,#141e35);',
    'border:1px solid var(--bdr,rgba(255,255,255,.07));border-radius:14px;',
    'padding:1.05rem 1.15rem;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);',
    'font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;',
    'opacity:0;transform:translateY(12px);transition:opacity .28s ease,transform .28s ease}',
    '.mapa-cc.show{opacity:1;transform:none}',
    '.mapa-cc p{font-size:.84rem;line-height:1.65;color:var(--t2,#8da0bc);margin:0 0 .85rem}',
    '.mapa-cc-btns{display:flex;flex-wrap:wrap;gap:.55rem}',
    '.mapa-cc button{font-family:inherit;font-weight:700;font-size:.83rem;cursor:pointer;',
    'border-radius:9px;padding:.6rem 1.15rem;border:1px solid transparent;transition:opacity .2s,border-color .2s}',
    '.mapa-cc .mapa-cc-ok{background:var(--grad-cta,linear-gradient(135deg,#00c8f5,#2e8bff));color:var(--cta-ink,#00121f);flex:1 1 auto}',
    '.mapa-cc .mapa-cc-no{background:transparent;color:var(--t2,#8da0bc);border-color:var(--bdr,rgba(255,255,255,.14));flex:1 1 auto}',
    '.mapa-cc .mapa-cc-ok:hover{opacity:.88}',
    '.mapa-cc .mapa-cc-no:hover{border-color:var(--accent,#00c8f5);color:var(--t1,#f0f6ff)}',
    '.mapa-cc button:focus-visible{outline:2px solid var(--focus,#00c8f5);outline-offset:2px}',
    '@media(min-width:560px){.mapa-cc .mapa-cc-ok,.mapa-cc .mapa-cc-no{flex:0 0 auto}}',
    '@media(prefers-reduced-motion:reduce){.mapa-cc{transition:none}}',
    '.mapa-cc p a{color:var(--accent-txt,#00c8f5);text-decoration:underline;text-underline-offset:3px}',
    '.mapa-cc-p{text-align:center;margin-top:.5rem;display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap}',
    '.mapa-cc-p a{font-size:.76rem;color:var(--t3,#8799b2);text-decoration:underline;text-underline-offset:3px}',
    '.mapa-cc-p a:hover{color:var(--accent-txt,#00c8f5)}',
    '.mapa-cc-p .sep{font-size:.76rem;color:var(--t3,#8799b2);opacity:.5}',
    '.mapa-cc-p button{background:none;border:0;padding:0;cursor:pointer;font:inherit;',
    'font-size:.76rem;color:var(--t3,#8799b2);text-decoration:underline;text-underline-offset:3px}',
    '.mapa-cc-p button:hover{color:var(--accent-txt,#00c8f5)}'
  ].join('');

  function injetarCSS() {
    if (document.getElementById('mapa-cc-css')) return;
    var st = document.createElement('style');
    st.id = 'mapa-cc-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  var banner = null;

  function fecharBanner() {
    if (!banner) return;
    banner.classList.remove('show');
    var b = banner;
    banner = null;
    setTimeout(function () { if (b && b.parentNode) b.parentNode.removeChild(b); }, 300);
  }

  var linkCookies = null;
  var linkPolitica = null;

  /* O site é trilíngue: se o visitante trocar de idioma com o banner
     aberto, o texto acompanha em vez de ficar preso no anterior. */
  function atualizarTextos() {
    var d = txt();
    if (banner) {
      banner.setAttribute('aria-label', d.aria);
      var msg = banner.querySelector('.mapa-cc-msg');
      if (msg) msg.textContent = d.msg + ' ';
      var ok = banner.querySelector('.mapa-cc-ok');
      if (ok) ok.textContent = d.ok;
      var no = banner.querySelector('.mapa-cc-no');
      if (no) no.textContent = d.no;
      var pol = banner.querySelector('.mapa-cc-pol');
      if (pol) pol.textContent = d.politica;
    }
    if (linkCookies) linkCookies.textContent = d.link;
    if (linkPolitica) linkPolitica.textContent = d.politica;
  }

  function abrirBanner() {
    if (banner) { atualizarTextos(); return; }
    injetarCSS();
    var d = txt();

    banner = document.createElement('div');
    banner.className = 'mapa-cc';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', d.aria);

    var p = document.createElement('p');
    // O texto vive num span próprio para que trocar de idioma
    // não apague o link da política, que é irmão dele.
    var msg = document.createElement('span');
    msg.className = 'mapa-cc-msg';
    msg.textContent = d.msg + ' ';
    p.appendChild(msg);
    var pol = document.createElement('a');
    pol.className = 'mapa-cc-pol';
    pol.href = '/politica-de-privacidade/';
    pol.textContent = d.politica;
    p.appendChild(pol);

    var box = document.createElement('div');
    box.className = 'mapa-cc-btns';

    var ok = document.createElement('button');
    ok.type = 'button';
    ok.className = 'mapa-cc-ok';
    ok.textContent = d.ok;
    ok.addEventListener('click', function () { decidir('granted'); });

    var no = document.createElement('button');
    no.type = 'button';
    no.className = 'mapa-cc-no';
    no.textContent = d.no;
    no.addEventListener('click', function () { decidir('denied'); });

    box.appendChild(ok);
    box.appendChild(no);
    banner.appendChild(p);
    banner.appendChild(box);
    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { if (banner) banner.classList.add('show'); });
    });
  }

  function decidir(estado) {
    gravarConsentimento(estado);
    consentimento = estado;
    fecharBanner();

    if (estado === 'granted') {
      if (temGA || temAds) gtag('consent', 'update', CONCEDIDO);
      carregarGA();
      carregarClarity();
      evento('consentimento_cookies', { escolha: 'aceitou' });
    } else {
      if (temGA || temAds) gtag('consent', 'update', NEGADO);
      evento('consentimento_cookies', { escolha: 'recusou' });
    }
  }

  // Permite reabrir o banner depois (link no rodapé ou pelo console)
  window.mapaAbrirConsentimento = function () {
    try { localStorage.removeItem(CONSENT_KEY); } catch (e) {}
    consentimento = null;
    abrirBanner();
  };

  /* Linha discreta "Política de privacidade · Cookies" no rodapé,
     adicionada por JS para não mexer no HTML de sete páginas com
     três layouts de rodapé diferentes. */
  function linkRodape() {
    injetarCSS();
    var rodapes = document.querySelectorAll('footer');
    if (!rodapes.length) return;
    var alvo = rodapes[rodapes.length - 1];
    var destino = alvo.querySelector('.ft-bottom') || alvo.querySelector('.ft-btm') ||
                  alvo.querySelector('.wrap') || alvo;
    var d = txt();

    var p = document.createElement('p');
    p.className = 'mapa-cc-p';

    var a = document.createElement('a');
    a.href = '/politica-de-privacidade/';
    a.textContent = d.politica;

    var sep = document.createElement('span');
    sep.className = 'sep';
    sep.textContent = '·';

    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = d.link;
    b.addEventListener('click', window.mapaAbrirConsentimento);

    p.appendChild(a);
    p.appendChild(sep);
    p.appendChild(b);
    destino.appendChild(p);

    linkPolitica = a;
    linkCookies = b;
  }

  /* ── Eventos do site ───────────────────────────────────── */

  function ondeEstou(el) {
    var sec = el.closest ? el.closest('section[id]') : null;
    if (sec && sec.id) return sec.id;
    if (el.closest && el.closest('header')) return 'menu';
    if (el.closest && el.closest('footer')) return 'rodape';
    if (el.id === 'wa') return 'resultado_calculadora';
    return 'outro';
  }

  function pagina() {
    var p = document.location.pathname.replace(/\/+$/, '');
    return p === '' ? 'home' : p.replace(/^\//, '');
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target && ev.target.closest ? ev.target : null;
    if (!el) return;

    var link = el.closest('a[href]');
    if (link) {
      var href = link.getAttribute('href') || '';

      if (href.indexOf('wa.me') !== -1 || href.indexOf('api.whatsapp.com') !== -1) {
        evento('contato_whatsapp', { local: ondeEstou(link), pagina: pagina() });
        conversao('whatsapp');
        try {
          if (typeof window.clarity === 'function') {
            window.clarity('set', 'contato', 'whatsapp');
            window.clarity('upgrade', 'contato');   // prioriza essa gravação
          }
        } catch (e) {}
        return;
      }

      if (href.indexOf('mailto:') === 0) {
        evento('contato_email', { local: ondeEstou(link), pagina: pagina() });
        conversao('email');
        return;
      }

      if (link.classList.contains('calc-card')) {
        evento('clique_calculadora', { calculadora: href.replace(/\//g, '') });
        return;
      }
    }

    var card = el.closest('.pf-card[data-id]');
    if (card) {
      evento('portfolio_aberto', { projeto: card.getAttribute('data-id') });
      return;
    }

    var faq = el.closest('.faq-q');
    if (faq) {
      var pergunta = (faq.textContent || '').replace(/[▼▲]/g, '').replace(/\s+/g, ' ').trim();
      evento('faq_aberto', { pergunta: pergunta.slice(0, 70) });
      return;
    }

    var lang = el.closest('.lang-btn');
    if (lang) {
      evento('idioma_alterado', { novo_idioma: lang.getAttribute('data-lang') });
      // O site.js troca o idioma logo em seguida; acompanhamos o banner.
      setTimeout(atualizarTextos, 60);
      return;
    }

    if (el.closest('#themeBtn') || el.closest('#tgl')) {
      var atual = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      evento('tema_alterado', { novo_tema: atual === 'light' ? 'dark' : 'light' });
    }
  }, true);

  /* Uso da calculadora: dispara uma vez, no primeiro campo mexido */
  (function () {
    var form = document.getElementById('f');
    if (!form) return;
    var jaContou = false;
    form.addEventListener('input', function () {
      if (jaContou) return;
      jaContou = true;
      evento('calculadora_usada', { calculadora: pagina() });
      try { if (typeof window.clarity === 'function') window.clarity('set', 'usou_calculadora', 'sim'); } catch (e) {}
    });
  })();

  /* ── Início ────────────────────────────────────────────── */

  function iniciar() {
    linkRodape();
    if (consentimento === null) {
      // Deixa a página desenhar primeiro; o banner entra depois.
      setTimeout(abrirBanner, 900);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();

(function(){
  'use strict';

  /* ── Menu mobile ── */
  const hbg = document.getElementById('hbg');
  const nav = document.getElementById('navUl');

  hbg.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hbg.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      hbg.setAttribute('aria-expanded', false);
    });
  });

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item  = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ════════════════════════════════════════════════════════════
     PORTFÓLIO – dados dos projetos
     Para adicionar vídeos do YouTube: substitua 'SEU_ID_AQUI_N'
     pelo ID do vídeo (parte após ?v= na URL do YouTube).
  ════════════════════════════════════════════════════════════ */
  const PF_DATA = {
    imoveis: {
      badge:'Edição de Vídeo',
      title:'Vídeos para Mercado Imobiliário',
      desc:'Produção completa de vídeos de apresentação de imóveis para construtoras, corretoras e imobiliárias em todo o Brasil. Cada entrega inclui corte profissional, motion graphics de texto, narração, legendas e color grading em formatos horizontais para YouTube e verticais para Instagram e TikTok. Utilizamos também inteligência artificial na criação de vídeos, gerando conteúdo de alto impacto com agilidade e escala.',
      tags:['Motion Graphics','Color Grading','Narração','Legendas','Formato Vertical','YouTube & Reels'],
      results:[
        {v:'+40',l:'Vídeos entregues'},
        {v:'+15',l:'Clientes'},
        {v:'+10',l:'Ferramentas no processo de edição'}
      ],
      clients:[
        {
          name:'Capanema Empreendimentos',
          logo:'assets/img/clients/capanema.webp',
          videos:[
            {id:'I7nPlhnu0ek',title:'Capanema - San Pietro (21/05/26)'},
            {id:'5tzyJmwCCwE',title:'Capanema - San Pietro (28/05/26)'},
            {id:'JTLcHzLfBLI',title:'Capanema - San Pietro (AD 01 Cobertura)'},
            {id:'Betm5D8h-qE',title:'Capanema - San Pietro Lançamento Meta Ads (v5)'},
            {id:'t-f33j7eo-c',title:'Capanema - San Pietro (v1)'},
            {id:'3gjtXBO4iTA',title:'Capanema - San Pietro - JUN26 (v5)'},
            {id:'YypvYzz7nW4',title:'Capanema - San Pietro - JUN26 (v3)'},
            {id:'IyqjUlfTiLk',title:'Capanema - Pienza - 22-05-26 (v1)'},
            {id:'5dM_NuEM8cw',title:'Capanema - Pienza 29-05-26 (v4)'},
            {id:'_tjHGHbDaNU',title:'Capanema - Pienza JUN26 (v6)'},
            {id:'Trp9yoEwwPo',title:'Capanema - Pienza 04-06-26 (v5)'},
            {id:'iwvByg0QgW0',title:'Capanema - Alba Gutierrez (Pilula 01) (v2)'},
            {id:'gYgOFCcg7FY',title:'Capanema - Alba Gutierrez (Pilula 02) (v3)'},
            {id:'ogDUAhw7YD0',title:'Capanema - Alba Gutierrez (Pilula 03) (v5)'},
            {id:'k0WquiFQyPc',title:'Capanema - Alba Gutierrez (Pilula 04) (v3)'},
            {id:'28QckDDFcx4',title:'Capanema - Alba Gutierrez (Linha 4 Triade 1) (v4)'},
            {id:'w501tu5Bf2g',title:'Capanema - Alba Gutierrez (Linha 10 Triade 2) (v3)'},
            {id:'j99rkDEU84c',title:'Capanema - Alba Gutierrez (Linha 16 Triade 3) (v1)'},
            {id:'U8Y-QXOKADc',title:'Capanema - Alba Gutierrez (Linha 19 Triade 4) (v4)'}
          ]
        },
        {
          name:'Valadares Gontijo',
          logo:'assets/img/clients/valadares-gontijo.webp',
          videos:[
            {id:'lEYRHwhQoAU',title:'Valadares Gontijo - Bella Vita'},
            {id:'lL_c05qoLvY',title:'Valadares Gontijo - Avenida'}
          ]
        },
        {
          name:'MCastro',
          logo:'assets/img/clients/mcastro.webp',
          videos:[
            {id:'OwNXMlQ0h-I',title:'MCastro - SMART'},
            {id:'AElAvfrh_zk',title:'MCastro - Breeze'}
          ]
        },
        {
          name:'Copam Engenharia',
          logo:'assets/img/clients/copam.webp',
          videos:[
            {id:'KMy3e7275KQ',title:'Copam - Rio Alva'},
            {id:'iPMdsLlrngo',title:'Copam - Cosmos'}
          ]
        },
        {
          name:'Cazanga Empreendimentos',
          logo:'assets/img/clients/cazanga.webp',
          videos:[
            {id:'H7udW6OFblw',title:'Cazanga - Jardim das Aroeiras AD01 (v1)'},
            {id:'EFUpftp0v14',title:'Cazanga - Jardim das Aroeiras AD02 (v1)'},
            {id:'JeBDsv_MOoY',title:'Cazanga - Jardim das Aroeiras AD03 (v1)'}
          ]
        },
        {
          name:'Terrazzas',
          logo:'assets/img/clients/terrazzas.webp',
          videos:[
            {id:'vtmOAKZtnT0',title:'Terrazzas - Atmosfera (v2)'},
            {id:'5QmO1nsKT3o',title:'Terrazzas - Origem (v4)'},
            {id:'2FvgEntCr0E',title:'Terrazzas - Art House (v1)'}
          ]
        },
        {
          name:'UNIURB',
          logo:'assets/img/clients/uniurb.webp',
          videos:[
            {id:'SO0ngTfI8wA',title:'UNIURB - Boa Vista - Pilula 01 (v3)'},
            {id:'cd7H32JRg7U',title:'UNIURB - Boa Vista - Pilula 02 (v4)'},
            {id:'2hf20Y5Ji1c',title:'UNIURB - Boa Vista - Pilula 03 (v3)'}
          ]
        },
        {
          name:'Parcelar Urbanismo',
          logo:'assets/img/clients/parcelar-urbanismo.webp',
          videos:[
            {id:'dxnhIvLWOhk',title:'Parcelar Urbanismo - Gran Olympus (v2)'},
            {id:'Fud0rR9W3gg',title:'Parcelar Urbanismo - Gran Olympus 2 (v2)'}
          ]
        },
        {
          name:'Intter Construção & Incorporação',
          logo:'assets/img/clients/intter.webp',
          videos:[
            {id:'C1beI0tltj8',title:'Intter 207 - Garden (v2)'},
            {id:'NSVmeolHxwE',title:'Intter 207 - Garden 2 (v2)'}
          ]
        },
        {
          name:'Minas Brisa',
          logo:'assets/img/clients/minas-brisa.webp',
          videos:[
            {id:'1RMODjkDN94',title:'Minas Brisa - Brisa Savassi'}
          ]
        },
        {
          name:'PHV',
          logo:'assets/img/clients/phv.webp',
          videos:[
            {id:'FcyKtPcFlgI',title:'PHV - Maria Emília Salles'}
          ]
        },
        {
          name:'SOL Edificações',
          logo:'assets/img/clients/sol-edificacoes.webp',
          videos:[
            {id:'oL9SI24iMdo',title:'SOL Edificações - Opus'}
          ]
        },
        {
          name:'V3V CONSTRUTORA',
          logo:'assets/img/clients/v3v-construtora.webp',
          videos:[
            {id:'G9NKt-TgIOA',title:'V3V CONSTRUTORA - DOMUS'}
          ]
        },
        {
          name:'Construtora SMART',
          logo:'assets/img/clients/construtora-smart.webp',
          videos:[
            {id:'qgjzmAVFblc',title:'SMART - HARBOR'}
          ]
        }
      ]
    },
    canal:{
      badge:'Edição de Vídeo',
      title:'Canal de Games no YouTube',
      desc:'Edição profissional de vídeos para canal de games no YouTube: highlights de gameplay, animações de texto, efeitos sonoros sincronizados e cortes rítmicos que prendem o espectador do início ao fim. Conteúdo produzido em formato horizontal para YouTube e vertical para Shorts.',
      tags:['Gameplay Highlights','Animação de Texto','Corte Rítmico','Efeitos Sonoros','YouTube Shorts','Edição de Gameplay'],
      results:[
        {v:'7k',l:'Views/mês'},
        {v:'3.2k',l:'Inscritos'},
        {v:'+17k',l:'Tempo de exibição'}
      ],
      videos:[
        {id:'Lwr_1JiZyNE',title:'Por que RollerCoaster é o jogo MAIS GENIAL da história?'},
        {id:'Z822xJhs5Xk',title:'Como DOOM roda em QUALQUER COISA?'},
        {id:'2N7wS4CvIcI',title:'17 jogos que completam 30 ANOS em 2025'},
        {id:'eLLuEf6pEio',title:'Por que Phantasy Star é o melhor RPG de todos os tempos?'},
        {id:'VpMMI1PG0s0',title:'Doom rodando nos lugares mais bizarros #shorts #doom'},
        {id:'4Paac9op468',title:'Apesar disso Golvellius é um bom jogo de videogame! #shorts'}
      ]
    },
    moda:{
      badge:'E-commerce',
      title:'Loja de Calçados na Nuvemshop',
      url:'https://lojaaurenstore.com.br/',
      desc:'Loja virtual montada do zero na Nuvemshop: configuração de formas de pagamento, formas de envio, plugins, cadastro de produtos, criação de tutoriais para o cliente, adição de banners e personalização completa conforme a identidade da marca. Todo o processo é conduzido com foco em SEO e GEO, desde o nome dos arquivos e atributo alt das imagens até a descrição dos produtos, para maximizar a visibilidade orgânica.',
      tags:['Nuvemshop','SEO & GEO','Plugins','Pagamento','Frete','Banners','Cadastro de Produtos','Tutoriais'],
      results:[
        {v:'100+',l:'Produtos cadastrados'},
        {v:'15 dias',l:'Prazo de entrega médio'},
        {v:'100%',l:'Pensando em SEO e GEO'}
      ],
      videos:[]
    },
    saas:{
      badge:'SaaS',
      title:'SaaS para Confeiteiras',
      desc:'Desenvolvo sistemas SaaS totalmente personalizados para confeiteiras e outros negócios: calculadora de precificação, controle de receitas, agenda de pedidos, relatórios financeiros e muito mais. Cada projeto é único e feito à medida para resolver as dores específicas do cliente, do zero ao deploy.',
      tags:['Precificação','Controle de Receitas','Agenda de Pedidos','Dashboard','API REST'],
      results:[
        {v:'+R$10k',l:'Economizados pelo cliente'},
        {v:'100%',l:'Customizável'},
        {v:'1 mês',l:'Prazo de entrega'}
      ],
      videos:[]
    },
    advocacia:{
      badge:'Site',
      title:'Site para Escritório de Advocacia',
      desc:'Site institucional para escritório especializado em direito trabalhista e previdenciário em Belo Horizonte. Inclui SEO local com Schema.org, formulário de contato integrado ao WhatsApp, blog jurídico, página de equipe e certificado SSL.',
      tags:['SEO Local','Schema.org','Blog Jurídico','WhatsApp','SSL','Formulário de Leads'],
      results:[
        {v:'#1',l:'Google BH no nicho'},
        {v:'40+',l:'Leads/mês'},
        {v:'2s',l:'Carregamento'}
      ],
      videos:[]
    },
    lifestyle:{
      badge:'Edição de Vídeo',
      title:'Canal de Drone no YouTube',
      desc:'Edição profissional de vídeos aéreos em 4K para canal de drone no YouTube: corte, color grading cinematográfico, criação de thumbnails, animação de texto, sincronização de áudio e exportação otimizada para a plataforma.',
      tags:['Drone 4K','Color Grading','Criação de Thumbnail','Animação de Texto','Corte Rítmico','YouTube'],
      results:[
        {v:'2k',l:'Views/mês'},
        {v:'+30',l:'Minutos de conteúdo editado'},
        {v:'+10',l:'Vídeos em 4K'}
      ],
      videos:[
        {id:'AFwfYBoh7Hs',title:'Primeiro voo com o DJI Mini 2 - Belo Horizonte - Bairro Mangabeiras [4K]'},
        {id:'xDYimjkOnUk',title:'Voo de drone por Belo Horizonte - Região Hospitalar/Santa Efigênia [4K]'},
        {id:'nXLl_Ip67mE',title:'Voo de drone por Ouro Preto-MG [4K]'},
        {id:'t2rHueG3rxw',title:'Voo de drone por Tiradentes-MG [4K]'},
        {id:'jd_xeFwxXO4',title:'Casa Nengueta - Lapinha da Serra-MG [4K]'},
        {id:'dOsY9eU3DMs',title:'Clube Palmeiras | Belo Horizonte-MG [4K]'},
        {id:'9psc4QAuOus',title:'Voando e Conversando #1 | Região Leste de BH'},
        {id:'UfYYiUX9bHM',title:'Arena Independência (22/03/2026)'},
        {id:'2iCt0xl2Ej4',title:'Voo de drone por Arraial do Cabo-RJ [4K]'}
      ]
    },
    suplementos:{
      badge:'E-commerce',
      title:'Floricultura na Nuvemshop',
      url:'https://www.floriculturabh.com.br/',
      desc:'Floricultura montada do zero na Nuvemshop: configuro forma de pagamento, formas de envio e plugins, cadastro produtos, monto tutoriais para o cliente, adiciono banners e deixo o site exatamente como o cliente quer. Toda a parte de SEO e GEO é trabalhada desde o nome dos arquivos e atributo alt das imagens até a descrição de cada produto.',
      tags:['Nuvemshop','SEO','GEO','Plugins','Pagamento','Frete','Produtos'],
      results:[
        {v:'3',l:'Plugins personalizados'},
        {v:'15 dias úteis',l:'Prazo de entrega médio'},
        {v:'100%',l:'Pensando em SEO e GEO'}
      ],
      videos:[]
    },
    'calc-trabalhista':{
      badge:'SaaS',
      title:'Plataforma de Cálculo Trabalhista',
      url:'/calculadora-rescisao-trabalhista/',
      ctaKey:'openCalc',
      desc:'Calculadora pública de rescisão trabalhista construída do zero, com o motor de cálculo separado da interface e coberto por testes automatizados. Trata os quatro tipos de desligamento, aplica o aviso prévio proporcional da Lei 12.506/2011 com a projeção que empurra a data de saída na carteira, calcula 13º e férias pela regra dos avos e aplica INSS e IRRF em bases separadas — incluindo o redutor da Lei 15.270/2025, que zera o imposto de quem recebe até R$ 5.000. Verbas indenizatórias aparecem marcadas como isentas, que é o erro mais comum das calculadoras concorrentes.',
      tags:['CLT','INSS 2026','IRRF + Lei 15.270','FGTS','Aviso proporcional','SEO & GEO','Sem backend'],
      results:[
        {v:'73',l:'Testes automatizados'},
        {v:'4',l:'Tipos de desligamento'},
        {v:'2026',l:'Tabelas INSS e IRRF'}
      ],
      videos:[]
    },
    'calc-climatizacao':{
      badge:'SaaS',
      title:'Plataforma de Dimensionamento de Climatização',
      url:'/calculadora-btu-ar-condicionado/',
      ctaKey:'openCalc',
      desc:'Calculadora de carga térmica que dimensiona o aparelho de ar-condicionado a partir da metragem, do pé-direito, da insolação, do número de pessoas e dos aparelhos que esquentam o ambiente. O resultado é sempre arredondado para cima até uma capacidade que realmente existe no mercado brasileiro, e a mesma tela estima o consumo mensal em kWh e em reais, comparando inverter e convencional.',
      tags:['Carga térmica','Capacidades comerciais','Consumo em kWh','Inverter x convencional','SEO & GEO','Sem backend'],
      results:[
        {v:'11',l:'Capacidades comerciais'},
        {v:'6',l:'Variáveis no cálculo'},
        {v:'2',l:'Saídas: BTU e consumo'}
      ],
      videos:[]
    },
    'calc-reformas':{
      badge:'SaaS',
      title:'Plataforma de Estimativa de Valores de Reformas',
      url:'/calculadora-custo-de-reforma/',
      ctaKey:'openCalc',
      desc:'Estimador de custo de obra por metro quadrado ancorado no SINAPI do IBGE, com multiplicadores por profundidade da reforma, padrão de acabamento e região. Trata banheiro e cozinha como adicionais, porque não seguem a média da casa, e devolve uma faixa em vez de um número único — junto da divisão entre material e mão de obra, do prazo e da reserva para imprevisto que quase nenhum orçamento inclui.',
      tags:['SINAPI','CUB','Custo por m²','Material x mão de obra','Contingência','SEO & GEO'],
      results:[
        {v:'4',l:'Níveis de reforma'},
        {v:'3',l:'Padrões de acabamento'},
        {v:'SINAPI',l:'Base oficial de custo'}
      ],
      videos:[]
    }
  };

  /* ── Portfólio: filtro por categoria ── */
  const pfBtns  = document.querySelectorAll('.pf-btn');
  const pfCards = document.querySelectorAll('.pf-card');

  pfBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pfBtns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.f;
      pfCards.forEach(c => {
        c.style.display = (f === 'todos' || c.dataset.t === f) ? '' : 'none';
      });
    });
  });

  /* ── Portfólio: modal ── */
  const pfModal      = document.getElementById('pfModal');
  const pfModalBox   = document.getElementById('pfModalBox');
  const pfModalClose = document.getElementById('pfModalClose');
  const pmBadge      = document.getElementById('pmBadge');
  const pmTitle      = document.getElementById('pmTitle');
  const pmBody       = document.getElementById('pmBody');

  /* SVG botão play do YouTube */
  const YT_PLAY = `<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M66.5 7.6C65.7 4.8 63.5 2.6 60.7 1.8C55.4.2 34 .2 34 .2S12.6.2 7.3 1.8C4.5 2.6 2.3 4.8 1.5 7.6.0 12.9.0 24 .0 24s0 11.1 1.5 16.4c.8 2.8 3 5 5.8 5.8C12.6 47.8 34 47.8 34 47.8s21.4 0 26.7-1.6c2.8-.8 5-3 5.8-5.8C68 35.1 68 24 68 24s0-11.1-1.5-16.4z" fill="#FF0000"/>
    <path d="M27.2 34.1L44.9 24l-17.7-10.1v20.2z" fill="#fff"/>
  </svg>`;

  function makeVidCard(vid) {
    const isPlaceholder = !vid.id || vid.id.startsWith('SEU_ID');
    if (isPlaceholder) {
      return `<div class="pf-yt" style="cursor:default">
        <div class="pf-yt-ph">
          <span style="font-size:1.9rem">🎬</span>
          <span>${vid.title}</span>
          <span style="font-size:.58rem;opacity:.45">ID do vídeo não configurado</span>
        </div>
      </div>`;
    }
    const thumb = 'https://img.youtube.com/vi/' + vid.id + '/hqdefault.jpg';
    return `<button type="button" class="pf-yt" data-vid="${vid.id}" title="${vid.title}" aria-label="Reproduzir ${vid.title}">
      <img src="${thumb}" alt="${vid.title}" loading="lazy">
      <div class="pf-yt-play">${YT_PLAY}</div>
      <div class="pf-yt-label">${vid.title}</div>
    </button>`;
  }

  function makeClientSection(client) {
    const logo = client.logo
      ? `<img src="${client.logo}" alt="${client.name}" class="pf-client-logo" width="120" height="120" loading="lazy" decoding="async">`
      : `<span class="pf-client-logo-ph">${client.name[0]}</span>`;
    return `<div class="pf-client-section">
      <div class="pf-client-header">${logo}<span class="pf-client-name">${client.name}</span></div>
      <div class="pf-vgrid pf-client-videos">${client.videos.map(makeVidCard).join('')}</div>
    </div>`;
  }

  function openModal(id) {
    const d = getProjectData(id);
    if (!d) return;
    pmBadge.textContent = d.badge;
    pmTitle.textContent = d.title;
    const stats   = d.results.map(r =>
      `<div class="pf-modal-stat"><strong>${r.v}</strong><span>${r.l}</span></div>`
    ).join('');
    const tags    = d.tags.map(t => `<span class="pf-modal-tag">${t}</span>`).join('');
    const _t = I18N[window._mapLang||'pt']||I18N.pt;
    const vidSec = (() => {
      if (d.clients && d.clients.length)
        return `<p class="pf-videos-label">${_t.pf.videosLabel}</p>`
             + d.clients.map(makeClientSection).join('');
      if (d.videos && d.videos.length)
        return `<p class="pf-videos-label">${_t.pf.videosLabel}</p>
           <div class="pf-vgrid">${d.videos.map(makeVidCard).join('')}</div>`;
      return '';
    })();
    const waTxt   = encodeURIComponent(_t.pf.waMsg + d.title);
    pmBody.innerHTML = `
      <p class="pf-modal-desc">${d.desc}</p>
      <div class="pf-modal-results">${stats}</div>
      <div class="pf-modal-tags">${tags}</div>
      ${vidSec}
      ${d.url ? `<a href="${d.url}" class="pf-modal-cta-sec" target="_blank" rel="noopener noreferrer">
        ${(I18N[window._mapLang||'pt']||I18N.pt).pf[d.ctaKey||'viewSite']}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>` : ''}
      <a href="https://wa.me/5531989190373?text=${waTxt}"
         class="pf-modal-cta" target="_blank" rel="noopener noreferrer">
        ${(I18N[window._mapLang||'pt']||I18N.pt).pf.modalCta}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </a>`;

    pfModal.classList.add('open');
    pfModalBox.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    /* Clique em miniatura de vídeo → carrega iframe */
    pfModal.querySelectorAll('.pf-yt[data-vid]').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('playing')) return;
        el.classList.add('playing');
        const f = document.createElement('iframe');
        f.className        = 'pf-yt-frame';
        f.src              = 'https://www.youtube-nocookie.com/embed/' + el.dataset.vid + '?autoplay=1&rel=0';
        f.allow            = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen  = true;
        f.title = el.title || 'Vídeo do YouTube';
        el.appendChild(f);
      }, {once:false});
    });
  }

  function closeModal() {
    pfModal.classList.remove('open');
    document.body.style.overflow = '';
    pfModal.querySelectorAll('.pf-yt-frame').forEach(f => f.remove());
    pfModal.querySelectorAll('.pf-yt').forEach(el => el.classList.remove('playing'));
  }

  /* Abertura via click / teclado */
  document.querySelectorAll('.pf-card[data-id]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.id); }
    });
  });

  /* Fechamento */
  pfModalClose.addEventListener('click', closeModal);
  pfModal.addEventListener('click', e => { if (e.target === pfModal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── Count-up animation ── */
  function animateCount(el) {
    const target  = parseInt(el.dataset.target, 10);
    const prefix  = el.dataset.prefix  || '';
    const suffix  = el.dataset.suffix  || '';
    const duration = 1600; // ms
    const steps   = 60;
    const step    = duration / steps;
    let current   = 0;

    // Easing: ease-out cubic
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    const start = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      current = Math.round(easeOut(progress) * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const countEls = document.querySelectorAll('[data-countup]');
  const countObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        obs.unobserve(e.target); // roda só uma vez
      }
    });
  }, { threshold: 0.5 });

  countEls.forEach(el => countObs.observe(el));

  /* ── Nav link ativo no scroll ── */
  const secs  = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-ul a[href^="#"]');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const match = [...links].find(l => l.getAttribute('href') === '#' + e.target.id);
        if (match) match.style.color = 'var(--accent)';
      }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  secs.forEach(s => io.observe(s));

  /* ════════════════════════════════════════════════════════════════
     INTERNACIONALIZAÇÃO  –  PT / EN / ES
     Troca de idioma sem recarregar a página.
  ════════════════════════════════════════════════════════════════ */
  const I18N = {
    pt: {
      nav:{ home:'Home', sobre:'Sobre', servicos:'Serviços', portfolio:'Portfólio',
            calculadoras:'Calculadoras',
            cta:'Orçamento grátis →', menuLabel:'Abrir menu' },
      hero:{
        badge:'✦ Soluções Digitais Completas',
        h1:'Tecnologia que<br><em class="grad-text">impulsiona</em><br>o seu negócio',
        p:'Da <strong>edição de vídeo profissional</strong> à montagem do seu <strong>e-commerce do zero</strong>: a MAPA cuida de toda a camada digital da sua empresa, do planejamento à entrega.',
        btn1:'💬 Falar no WhatsApp', btn2:'Ver serviços →',
        cards:[
          {title:'Edição de Vídeo Profissional', p:'Motion graphics, color grading e legendas para YouTube, Instagram e TikTok.'},
          {title:'E-commerce do Zero', p:'Nuvemshop, Loja Integrada e Tray configurados e prontos para vender.'},
          {title:'SaaS sob Medida', p:'Sistemas, automações e APIs personalizados para sua empresa.'},
          {title:'Sites Personalizados', p:'Otimizados para SEO, GEO e com todas as boas práticas do Google.'}
        ]
      },
      stats:['Clientes satisfeitos','Projetos entregues','Compromisso com prazo','Anos de experiência'],
      sobre:{
        tag:'Quem somos',
        h2:'A equipe por trás do<br>seu crescimento digital',
        ps:[
          'A <strong>MAPA Soluções Digitais</strong> é uma agência de soluções digitais completas com sede em <strong>Belo Horizonte, Minas Gerais</strong>. Nascemos da necessidade de oferecer serviços de alta qualidade técnica com a agilidade que pequenas e médias empresas realmente precisam.',
          'Trabalhamos com <strong>criadores de conteúdo, lojistas, empreendedores e empresas</strong> que querem escalar sua presença digital, seja pela edição de vídeos que retêm audiência, pela criação de um e-commerce nas principais plataformas (Nuvemshop, Loja Integrada e Tray), pelo desenvolvimento de um SaaS personalizado ou pela criação de um site profissional otimizado para SEO.',
          'Nossa missão é simples: <strong>você foca no seu negócio, nós cuidamos da tecnologia.</strong>'
        ],
        vals:[
          {title:'Entrega Rápida', p:'Prazos cumpridos e comunicação transparente em cada etapa do projeto.'},
          {title:'Foco em Resultado', p:'Cada decisão pensada no impacto real para o seu negócio.'},
          {title:'Qualidade Garantida', p:'Revisões incluídas e suporte pós-entrega em todos os projetos.'},
          {title:'Parceria Real', p:'Atendimento próximo, sem burocracia, com atenção personalizada.'}
        ]
      },
      srv:{
        tag:'O que fazemos',
        h2:'Soluções para cada<br>fase do <em class="grad-text">seu negócio</em>',
        sub:'Do conteúdo visual ao sistema personalizado: temos o serviço certo para o momento certo da sua empresa.',
        cta:'Solicitar orçamento →',
        tabs:['🎬 Vídeo','🛒 E-commerce','⚙️ SaaS','🧭 Consultoria','🌐 Sites'],
        cards:[
          {title:'Edição de Vídeo Profissional', desc:'Você grava, a gente edita, e o mundo assiste. Produzimos vídeos que prendem atenção e aumentam o tempo de visualização nas principais plataformas. Do corte básico ao motion graphics completo, entregamos conteúdo otimizado para <strong style="color:var(--t1)">YouTube, Instagram, TikTok e LinkedIn</strong>, em formato horizontal e vertical, com mixagem de áudio, color grading e legendas.'},
          {title:'Configuração de E-commerce do Zero', desc:'Montamos sua loja virtual nas plataformas <strong style="color:var(--t1)">Nuvemshop, Loja Integrada ou Tray</strong> sem dor de cabeça. Layout, catálogo, meios de pagamento (Pix, cartão, boleto), frete, integrações e domínio. Pronto para vender.'},
          {title:'Desenvolvimento de SaaS sob Medida', desc:'Transformamos ideias em plataformas SaaS completas. Da concepção ao deploy: sistemas web, APIs, automações e dashboards personalizados para a sua operação.'},
          {title:'Consultoria Digital', desc:'Não sabe por onde começar ou qual tecnologia escolher? Mapeamos sua situação atual e entregamos um plano de ação claro, com prioridades e recomendações de ferramentas, sem enrolação.'},
          {title:'Criação de Pequenos Sites', desc:'Sites institucionais, landing pages e portfólios para pequenas empresas e profissionais autônomos: rápidos, responsivos e <strong style="color:var(--t1)">otimizados para SEO</strong> desde o primeiro dia.'}
        ]
      },
      pf:{
        tag:'Nosso trabalho', h2:'Cases &amp; Projetos',
        sub:'Uma seleção de projetos entregues: edições, e-commerces, sistemas e sites que geraram resultados reais para nossos clientes.',
        filters:['Todos','Edição de Vídeo','E-commerce','SaaS','Sites'],
        viewBtn:'Ver projeto', viewProjectPrefix:'Ver projeto: ',
        videosLabel:'Vídeos entregues neste projeto',
        viewSite:'Ver site →',
        openCalc:'Abrir calculadora →',
        modalCta:'Quero um projeto similar',
        waMsg:'Olá! Vi o portfólio da MAPA e quero um projeto parecido com: ',
        cards:[
          {title:'Vídeos para Mercado Imobiliário',     p:'Apresentações de imóveis com motion graphics, narração, color grading e criação com IA.',            badge:'Edição de Vídeo'},
          {title:'Canal de Games no YouTube',           p:'Edição de highlights e gameplay com animações e efeitos para canal de games no YouTube.',            badge:'Edição de Vídeo'},
          {title:'Loja de Calçados na Nuvemshop',           p:'Loja montada do zero: pagamento, frete, plugins, produtos, banners e SEO/GEO.',                     badge:'E-commerce'},
          {title:'SaaS para Confeiteiras',               p:'Sistema 100% personalizado que resolve as dores específicas do cliente.',                             badge:'SaaS'},
          {title:'Site Institucional para Escritório de Advocacia', p:'Landing page com SEO local, blog jurídico e formulário de captação de leads.',           badge:'Site'},
          {title:'Canal de Drone no YouTube',p:'Edição completa de vídeos aéreos em 4K com color grading, animações e thumbnails para YouTube.',               badge:'Edição de Vídeo'},
          {title:'Floricultura na Nuvemshop',             p:'Loja virtual do zero: pagamento, envio, plugins, produtos, banners, SEO e GEO.',                      badge:'E-commerce'},
          {title:'Plataforma de Cálculo Trabalhista',              p:'Calculadora de rescisão com aviso proporcional, INSS, IRRF e multa do FGTS.',                       badge:'SaaS'},
          {title:'Plataforma de Dimensionamento de Climatização',  p:'Calculadora de BTUs que dimensiona o aparelho e estima o consumo mensal.',                          badge:'SaaS'},
          {title:'Plataforma de Estimativa de Valores de Reformas',p:'Calculadora de custo de obra por m², com reserva para imprevisto e prazo.',                         badge:'SaaS'}
        ]
      },
      calc:{
        tag:'Ferramentas gratuitas',
        h2:'Calculadoras que você<br>pode usar agora',
        sub:'Três ferramentas que construímos e deixamos abertas para qualquer pessoa usar. São o mesmo tipo de calculadora que colocamos dentro do site dos nossos clientes para transformar visita em conversa no WhatsApp.',
        cta:'Abrir calculadora →',
        note:'Uso livre e sem cadastro. Os resultados são estimativas e não substituem orientação profissional.',
        cards:[
          {title:'Rescisão trabalhista', p:'Descubra quanto você tem a receber ao sair do emprego, com aviso prévio proporcional, FGTS e as tabelas de INSS e Imposto de Renda de 2026.'},
          {title:'BTU para ar-condicionado', p:'Dimensione a capacidade certa para o ambiente considerando metragem, sol, pessoas e aparelhos — e veja o custo mensal na conta de luz.'},
          {title:'Custo de reforma por m²', p:'Uma faixa realista de investimento antes do primeiro orçamento, com divisão entre material e mão de obra e reserva para imprevisto.'}
        ]
      },
      faq:{
        tag:'Dúvidas frequentes', h2:'Perguntas que todo<br>cliente faz',
        items:[
          {q:'Quem faz edição de vídeo profissional em Belo Horizonte?',
           a:'A MAPA Soluções Digitais, com sede em Belo Horizonte (MG), oferece edição de vídeo profissional para criadores de conteúdo, youtubers e empresas em todo o Brasil. Os serviços incluem cortes, motion graphics, legendas automáticas, color grading e mixagem de áudio, com entrega em formato horizontal e vertical para YouTube, Instagram, TikTok e LinkedIn.'},
          {q:'Como funciona a configuração de e-commerce na Nuvemshop, Loja Integrada ou Tray?',
           a:'A MAPA configura sua loja virtual do zero: criação e configuração da conta na plataforma escolhida, personalização do layout, cadastro de produtos, configuração de meios de pagamento (Pix, cartão, boleto), frete e demais integrações. O cliente recebe a loja pronta para vender, com suporte durante o processo.'},
          {q:'O que é SaaS sob medida e quando contratar?',
           a:'SaaS sob medida é um software desenvolvido especificamente para as necessidades da sua empresa, sem as limitações de ferramentas genéricas prontas. Você deve contratar quando precisa de automações, gestão de processos, integrações entre sistemas ou funcionalidades que nenhuma solução do mercado oferece do jeito que sua operação exige.'},
          {q:'Quanto custa criar um site para pequena empresa em BH?',
           a:'O valor varia conforme o escopo: uma landing page simples tem custo menor que um site institucional com múltiplas páginas, blog e integrações. Na MAPA, todos os sites são responsivos, rápidos e otimizados para SEO. Entre em contato pelo WhatsApp (31) 98919-0373 para receber um orçamento personalizado sem compromisso.'},
          {q:'A MAPA atende clientes fora de Belo Horizonte?',
           a:'Sim. Embora com sede em Belo Horizonte, MG, a MAPA Soluções Digitais atende clientes de todo o Brasil 100% de forma remota, com comunicação por WhatsApp, e-mail e videochamada. Nosso processo é estruturado para funcionar à distância com entregas pontuais e transparência total.'},
          {q:'Qual a diferença entre Nuvemshop, Loja Integrada e Tray?',
           a:'As três são plataformas brasileiras de e-commerce, mas com perfis diferentes: <strong>Nuvemshop</strong> é ideal para quem está começando e quer uma interface simples; <strong>Loja Integrada</strong> oferece plano gratuito e boas integrações; <strong>Tray</strong> é mais robusta, indicada para lojas com maior volume de pedidos. A MAPA avalia o seu perfil e recomenda a plataforma certa para o seu negócio.'}
        ]
      },
      cta:{ tag:'Pronto para começar?', h2:'Vamos conversar sobre<br>o seu projeto',
            p:'Resposta em até 24 horas. Sem enrolação, sem custo para o orçamento.',
            btn1:'💬 Falar no WhatsApp', btn2:'✉️ Enviar e-mail' },
      ft:{
        brandp:'Agência de soluções digitais em Belo Horizonte, MG. Edição de vídeo profissional, e-commerce (Nuvemshop, Loja Integrada, Tray), SaaS sob medida, consultoria e criação de sites para todo o Brasil.',
        nav:{ title:'Navegação', links:['Home','Sobre','Serviços','Portfólio','Calculadoras'] },
        srv:{ title:'Serviços', links:['Edição de Vídeo','E-commerce','SaaS sob Medida','Consultoria Digital','Criação de Sites'] },
        contact:{ title:'Contato', city:'Belo Horizonte, MG', remote:'Atendimento remoto para todo o Brasil' },
        copyright:'© 2026 MAPA Soluções Digitais. Todos os direitos reservados.',
        cnpj:'CNPJ: 38.295.265/0001-37 · Belo Horizonte, MG · Atendimento para todo o Brasil'
      }
    },

    en: {
      nav:{ home:'Home', sobre:'About', servicos:'Services', portfolio:'Portfolio',
            calculadoras:'Calculators',
            cta:'Free Quote →', menuLabel:'Open menu' },
      hero:{
        badge:'✦ Complete Digital Solutions',
        h1:'Technology that<br><em class="grad-text">drives</em><br>your business',
        p:'From <strong>professional video editing</strong> to launching your <strong>e-commerce from scratch</strong>: MAPA handles your entire digital layer, from planning to delivery.',
        btn1:'💬 Chat on WhatsApp', btn2:'See services →',
        cards:[
          {title:'Professional Video Editing', p:'Motion graphics, color grading and captions for YouTube, Instagram and TikTok.'},
          {title:'E-commerce from Scratch', p:'Nuvemshop, Loja Integrada and Tray set up and ready to sell.'},
          {title:'Custom SaaS', p:'Tailored systems, automations and APIs for your business.'},
          {title:'Custom Websites', p:'Optimized for SEO, GEO and all Google best practices.'}
        ]
      },
      stats:['Happy clients','Projects delivered','On-time delivery','Years of experience'],
      sobre:{
        tag:'Who we are',
        h2:'The team behind<br>your digital growth',
        ps:[
          '<strong>MAPA Soluções Digitais</strong> is a full-service digital agency based in <strong>Belo Horizonte, Minas Gerais, Brazil</strong>. We were born out of the need to deliver high-quality technical services with the agility that small and medium businesses truly need.',
          'We work with <strong>content creators, retailers, entrepreneurs and companies</strong> looking to scale their digital presence — through videos that retain audiences, e-commerce stores on major platforms (Nuvemshop, Loja Integrada and Tray), custom SaaS development, or professional SEO-optimized websites.',
          'Our mission is simple: <strong>you focus on your business, we take care of the technology.</strong>'
        ],
        vals:[
          {title:'Fast Delivery', p:'Deadlines met and transparent communication at every stage.'},
          {title:'Results-Focused', p:'Every decision made with real impact on your business in mind.'},
          {title:'Guaranteed Quality', p:'Revisions included and post-delivery support on all projects.'},
          {title:'True Partnership', p:'Close, bureaucracy-free service with personalized attention.'}
        ]
      },
      srv:{
        tag:'What we do',
        h2:'Solutions for every<br>stage of <em class="grad-text">your business</em>',
        sub:'From visual content to custom systems: we have the right service for the right moment in your company.',
        cta:'Request a quote →',
        tabs:['🎬 Video','🛒 E-commerce','⚙️ SaaS','🧭 Consulting','🌐 Websites'],
        cards:[
          {title:'Professional Video Editing', desc:'You record, we edit, and the world watches. We produce videos that capture attention and boost watch time on major platforms. From basic cuts to full motion graphics, we deliver content optimized for <strong style="color:var(--t1)">YouTube, Instagram, TikTok and LinkedIn</strong>, in horizontal and vertical formats with audio mixing, color grading and captions.'},
          {title:'E-commerce Setup from Scratch', desc:'We build your online store on <strong style="color:var(--t1)">Nuvemshop, Loja Integrada or Tray</strong> without the headache. Layout, catalog, payment methods, shipping, integrations and domain. Ready to sell.'},
          {title:'Custom SaaS Development', desc:'We turn ideas into complete SaaS platforms. From concept to deploy: web systems, APIs, automations and custom dashboards for your operation.'},
          {title:'Digital Consulting', desc:"Don't know where to start or which technology to choose? We map your current situation and deliver a clear action plan, with priorities and tool recommendations — no fluff."},
          {title:'Small Website Creation', desc:'Institutional sites, landing pages and portfolios for small businesses and freelancers: fast, responsive and <strong style="color:var(--t1)">SEO-optimized</strong> from day one.'}
        ]
      },
      pf:{
        tag:'Our work', h2:'Cases &amp; Projects',
        sub:'A selection of delivered projects: edits, e-commerces, systems and sites that generated real results for our clients.',
        filters:['All','Video Editing','E-commerce','SaaS','Sites'],
        viewBtn:'View project', viewProjectPrefix:'View project: ',
        videosLabel:'Videos delivered in this project',
        viewSite:'View site →',
        openCalc:'Open calculator →',
        modalCta:'I want a similar project',
        waMsg:'Hi! I saw the MAPA portfolio and want a project similar to: ',
        cards:[
          {title:'Real Estate Market Videos',         p:'Property presentations with motion graphics, narration, color grading and AI video creation.',       badge:'Video Editing'},
          {title:'Gaming Channel on YouTube',          p:'Gameplay highlight editing with animations and effects for a YouTube gaming channel.',              badge:'Video Editing'},
          {title:'Footwear Store on Nuvemshop',         p:'Store built from scratch: payment, shipping, plugins, products, banners and SEO/GEO.',              badge:'E-commerce'},
          {title:'SaaS for Pastry Chefs',               p:'100% custom system built to solve the client\'s specific pain points.',                          badge:'SaaS'},
          {title:'Institutional Site for a Law Firm', p:'Landing page with local SEO, legal blog and lead capture form.',                                   badge:'Site'},
          {title:'Drone YouTube Channel',p:'Complete editing of 4K aerial videos with color grading, animations and thumbnails for YouTube.',               badge:'Video Editing'},
          {title:'Flower Shop on Nuvemshop',           p:'Online store from scratch: payments, shipping, plugins, products, banners, SEO & GEO.',              badge:'E-commerce'},
          {title:'Labor Law Calculation Platform',      p:'Severance calculator with proportional notice, social security, income tax and FGTS penalty.',        badge:'SaaS'},
          {title:'HVAC Sizing Platform',                p:'BTU calculator that sizes the unit and estimates monthly running cost.',                              badge:'SaaS'},
          {title:'Renovation Cost Estimation Platform', p:'Construction cost calculator per m², with contingency reserve and timeline.',                          badge:'SaaS'}
        ]
      },
      calc:{
        tag:'Free tools',
        h2:'Calculators you can<br>use right now',
        sub:'Three tools we built and left open for anyone to use. They are the same kind of calculator we put inside our clients\' websites to turn a visit into a WhatsApp conversation.',
        cta:'Open calculator →',
        note:'Free to use, no sign-up. Results are estimates and do not replace professional advice.',
        cards:[
          {title:'Severance pay', p:'Find out what you are owed when leaving a job, with proportional notice, FGTS and the 2026 social security and income tax tables.'},
          {title:'Air conditioning BTU', p:'Size the right capacity for the room based on area, sun exposure, people and appliances — and see the monthly running cost.'},
          {title:'Renovation cost per m²', p:'A realistic investment range before the first quote, split between materials and labour, with a contingency reserve.'}
        ]
      },
      faq:{
        tag:'FAQ', h2:'Questions every<br>client asks',
        items:[
          {q:'Who does professional video editing in Belo Horizonte?',
           a:'MAPA Soluções Digitais, based in Belo Horizonte (MG), offers professional video editing for content creators, YouTubers and companies across Brazil. Services include cuts, motion graphics, automatic captions, color grading and audio mixing, delivered in horizontal and vertical formats for YouTube, Instagram, TikTok and LinkedIn.'},
          {q:'How does e-commerce setup work on Nuvemshop, Loja Integrada or Tray?',
           a:'MAPA sets up your online store from scratch: account creation on the chosen platform, layout customization, product registration, payment setup (Pix, credit card, boleto), shipping and other integrations. The client receives a store ready to sell, with support throughout the process.'},
          {q:'What is custom SaaS and when should I hire it?',
           a:"Custom SaaS is software developed specifically for your company's needs, without the limitations of off-the-shelf tools. Hire it when you need automations, process management, system integrations or features no market solution offers the way your operation requires."},
          {q:'How much does it cost to create a website for a small business?',
           a:'The price varies by scope: a simple landing page costs less than an institutional site with multiple pages, blog and integrations. At MAPA, all sites are responsive, fast and SEO-optimized. Contact us on WhatsApp +55 31 98919-0373 for a no-commitment personalized quote.'},
          {q:'Does MAPA serve clients outside Belo Horizonte?',
           a:'Yes. Although based in Belo Horizonte, MG, MAPA Soluções Digitais serves clients from all over Brazil 100% remotely, via WhatsApp, email and video calls. Our process is structured to work at a distance with on-time deliveries and full transparency.'},
          {q:'What is the difference between Nuvemshop, Loja Integrada and Tray?',
           a:'All three are Brazilian e-commerce platforms with different profiles: <strong>Nuvemshop</strong> is ideal for beginners wanting a simple interface; <strong>Loja Integrada</strong> offers a free plan and good integrations; <strong>Tray</strong> is more robust, recommended for stores with higher order volumes. MAPA evaluates your profile and recommends the right platform.'}
        ]
      },
      cta:{ tag:'Ready to start?', h2:"Let's talk about<br>your project",
            p:'Response within 24 hours. No fluff, no cost for the quote.',
            btn1:'💬 Chat on WhatsApp', btn2:'✉️ Send email' },
      ft:{
        brandp:'Digital solutions agency based in Belo Horizonte, Brazil. Professional video editing, e-commerce (Nuvemshop, Loja Integrada, Tray), custom SaaS, consulting and website creation across Brazil.',
        nav:{ title:'Navigation', links:['Home','About','Services','Portfolio','Calculators'] },
        srv:{ title:'Services', links:['Video Editing','E-commerce','Custom SaaS','Digital Consulting','Website Creation'] },
        contact:{ title:'Contact', city:'Belo Horizonte, MG – Brazil', remote:'Remote service for all of Brazil' },
        copyright:'© 2026 MAPA Soluções Digitais. All rights reserved.',
        cnpj:'CNPJ: 38.295.265/0001-37 · Belo Horizonte, MG · Remote service for all of Brazil'
      }
    },

    es: {
      nav:{ home:'Inicio', sobre:'Nosotros', servicos:'Servicios', portfolio:'Portafolio',
            calculadoras:'Calculadoras',
            cta:'Presupuesto gratis →', menuLabel:'Abrir menú' },
      hero:{
        badge:'✦ Soluciones Digitales Completas',
        h1:'Tecnología que<br><em class="grad-text">impulsa</em><br>tu negocio',
        p:'De la <strong>edición de video profesional</strong> al montaje de tu <strong>e-commerce desde cero</strong>: MAPA se encarga de toda la capa digital de tu empresa, desde la planificación hasta la entrega.',
        btn1:'💬 Chatear en WhatsApp', btn2:'Ver servicios →',
        cards:[
          {title:'Edición de Video Profesional', p:'Motion graphics, corrección de color y subtítulos para YouTube, Instagram y TikTok.'},
          {title:'E-commerce desde Cero', p:'Nuvemshop, Loja Integrada y Tray configurados y listos para vender.'},
          {title:'SaaS a Medida', p:'Sistemas, automatizaciones y APIs personalizados para tu empresa.'},
          {title:'Sitios Personalizados', p:'Optimizados para SEO, GEO y con todas las buenas prácticas de Google.'}
        ]
      },
      stats:['Clientes satisfechos','Proyectos entregados','Compromiso con plazos','Años de experiencia'],
      sobre:{
        tag:'Quiénes somos',
        h2:'El equipo detrás de<br>tu crecimiento digital',
        ps:[
          '<strong>MAPA Soluções Digitais</strong> es una agencia de soluciones digitales completas con sede en <strong>Belo Horizonte, Minas Gerais, Brasil</strong>. Nacimos de la necesidad de ofrecer servicios de alta calidad técnica con la agilidad que las pequeñas y medianas empresas realmente necesitan.',
          'Trabajamos con <strong>creadores de contenido, comerciantes, emprendedores y empresas</strong> que quieren escalar su presencia digital, ya sea mediante edición de videos que retienen audiencia, creación de una tienda en las principales plataformas (Nuvemshop, Loja Integrada y Tray), desarrollo de un SaaS personalizado o creación de un sitio web optimizado para SEO.',
          'Nuestra misión es simple: <strong>tú te enfocas en tu negocio, nosotros nos encargamos de la tecnología.</strong>'
        ],
        vals:[
          {title:'Entrega Rápida', p:'Plazos cumplidos y comunicación transparente en cada etapa del proyecto.'},
          {title:'Enfoque en Resultados', p:'Cada decisión pensada en el impacto real para tu negocio.'},
          {title:'Calidad Garantizada', p:'Revisiones incluidas y soporte post-entrega en todos los proyectos.'},
          {title:'Alianza Real', p:'Atención cercana, sin burocracia, con atención personalizada.'}
        ]
      },
      srv:{
        tag:'Lo que hacemos',
        h2:'Soluciones para cada<br>etapa de <em class="grad-text">tu negocio</em>',
        sub:'Del contenido visual al sistema personalizado: tenemos el servicio adecuado para el momento adecuado de tu empresa.',
        cta:'Solicitar presupuesto →',
        tabs:['🎬 Video','🛒 E-commerce','⚙️ SaaS','🧭 Consultoría','🌐 Sitios'],
        cards:[
          {title:'Edición de Video Profesional', desc:'Tú grabas, nosotros editamos y el mundo ve. Producimos videos que captan la atención y aumentan el tiempo de visualización en las principales plataformas. Desde cortes básicos hasta motion graphics completo, contenido optimizado para <strong style="color:var(--t1)">YouTube, Instagram, TikTok y LinkedIn</strong>, en formato horizontal y vertical con mezcla de audio, corrección de color y subtítulos.'},
          {title:'Configuración de E-commerce desde Cero', desc:'Montamos tu tienda virtual en <strong style="color:var(--t1)">Nuvemshop, Loja Integrada o Tray</strong> sin complicaciones. Layout, catálogo, medios de pago, envíos, integraciones y dominio. Listo para vender.'},
          {title:'Desarrollo de SaaS a Medida', desc:'Convertimos ideas en plataformas SaaS completas. Desde la concepción hasta el deploy: sistemas web, APIs, automatizaciones y dashboards personalizados para tu operación.'},
          {title:'Consultoría Digital', desc:'¿No sabes por dónde empezar o qué tecnología elegir? Mapeamos tu situación actual y entregamos un plan de acción claro, con prioridades y recomendaciones de herramientas — sin rodeos.'},
          {title:'Creación de Sitios Web Pequeños', desc:'Sitios institucionales, landing pages y portafolios para pequeñas empresas y autónomos: rápidos, responsivos y <strong style="color:var(--t1)">optimizados para SEO</strong> desde el primer día.'}
        ]
      },
      pf:{
        tag:'Nuestro trabajo', h2:'Cases &amp; Proyectos',
        sub:'Una selección de proyectos entregados: ediciones, e-commerces, sistemas y sitios que generaron resultados reales para nuestros clientes.',
        filters:['Todos','Edición de Video','E-commerce','SaaS','Sitios'],
        viewBtn:'Ver proyecto', viewProjectPrefix:'Ver proyecto: ',
        videosLabel:'Videos entregados en este proyecto',
        viewSite:'Ver sitio →',
        openCalc:'Abrir calculadora →',
        modalCta:'Quiero un proyecto similar',
        waMsg:'¡Hola! Vi el portafolio de MAPA y quiero un proyecto parecido a: ',
        cards:[
          {title:'Videos para Mercado Inmobiliario',     p:'Presentaciones de propiedades con motion graphics, narración, corrección de color y creación con IA.', badge:'Edición de Video'},
          {title:'Canal de Gaming en YouTube',            p:'Edición de highlights y gameplay con animaciones y efectos para canal de gaming en YouTube.',        badge:'Edición de Video'},
          {title:'Tienda de Calzado en Nuvemshop',          p:'Tienda montada desde cero: pagos, envíos, plugins, productos, banners y SEO/GEO.',                   badge:'E-commerce'},
          {title:'SaaS para Reposteras',                p:'Sistema 100% personalizado para resolver las necesidades específicas del cliente.',                badge:'SaaS'},
          {title:'Sitio Institucional para Estudio de Abogados',p:'Landing page con SEO local, blog jurídico y formulario de captación de leads.',                badge:'Sitio'},
          {title:'Canal de Drone en YouTube',p:'Edición completa de videos aéreos en 4K con color grading, animaciones y miniaturas para YouTube.',              badge:'Edición de Video'},
          {title:'Floristería en Nuvemshop',              p:'Tienda virtual desde cero: pagos, envíos, plugins, productos, banners, SEO y GEO.',                   badge:'E-commerce'},
          {title:'Plataforma de Cálculo Laboral',        p:'Calculadora de finiquito con preaviso proporcional, seguridad social, impuesto y FGTS.',            badge:'SaaS'},
          {title:'Plataforma de Dimensionamiento de Climatización',p:'Calculadora de BTU que dimensiona el equipo y estima el consumo mensual.',                 badge:'SaaS'},
          {title:'Plataforma de Estimación de Costos de Reformas',p:'Calculadora de costo de obra por m², con reserva para imprevistos y plazo.',                badge:'SaaS'}
        ]
      },
      calc:{
        tag:'Herramientas gratuitas',
        h2:'Calculadoras que puedes<br>usar ahora mismo',
        sub:'Tres herramientas que construimos y dejamos abiertas para cualquier persona. Son el mismo tipo de calculadora que colocamos dentro del sitio de nuestros clientes para convertir una visita en una conversación por WhatsApp.',
        cta:'Abrir calculadora →',
        note:'Uso libre y sin registro. Los resultados son estimaciones y no sustituyen la orientación profesional.',
        cards:[
          {title:'Finiquito laboral', p:'Descubre cuánto te corresponde al salir del empleo, con preaviso proporcional, FGTS y las tablas de seguridad social e impuesto de 2026.'},
          {title:'BTU para aire acondicionado', p:'Dimensiona la capacidad correcta según metraje, sol, personas y equipos — y mira el costo mensual de energía.'},
          {title:'Costo de reforma por m²', p:'Un rango realista de inversión antes del primer presupuesto, con división entre material y mano de obra y reserva para imprevistos.'}
        ]
      },
      faq:{
        tag:'Preguntas frecuentes', h2:'Preguntas que todo<br>cliente hace',
        items:[
          {q:'¿Quién hace edición de video profesional en Belo Horizonte?',
           a:'MAPA Soluções Digitais, con sede en Belo Horizonte (MG), ofrece edición de video profesional para creadores de contenido, youtubers y empresas en todo Brasil. Los servicios incluyen cortes, motion graphics, subtítulos automáticos, corrección de color y mezcla de audio, en formatos horizontal y vertical para YouTube, Instagram, TikTok y LinkedIn.'},
          {q:'¿Cómo funciona la configuración de e-commerce en Nuvemshop, Loja Integrada o Tray?',
           a:'MAPA configura tu tienda virtual desde cero: creación de cuenta en la plataforma elegida, personalización del layout, registro de productos, configuración de medios de pago, envíos y demás integraciones. El cliente recibe la tienda lista para vender, con soporte durante el proceso.'},
          {q:'¿Qué es SaaS a medida y cuándo contratarlo?',
           a:'El SaaS a medida es un software desarrollado específicamente para las necesidades de tu empresa, sin las limitaciones de herramientas genéricas. Contrátatelo cuando necesitas automatizaciones, gestión de procesos, integraciones entre sistemas o funcionalidades que ninguna solución del mercado ofrece como tu operación lo requiere.'},
          {q:'¿Cuánto cuesta crear un sitio web para una pequeña empresa?',
           a:'El valor varía según el alcance: una landing page simple tiene un costo menor que un sitio institucional con múltiples páginas, blog e integraciones. En MAPA, todos los sitios son responsivos, rápidos y optimizados para SEO. Contáctanos por WhatsApp +55 31 98919-0373 para un presupuesto personalizado sin compromiso.'},
          {q:'¿MAPA atiende clientes fuera de Belo Horizonte?',
           a:'Sí. Aunque con sede en Belo Horizonte, MG, MAPA Soluções Digitais atiende clientes de todo Brasil 100% de forma remota, con comunicación por WhatsApp, email y videollamada. Nuestro proceso está estructurado para funcionar a distancia con entregas puntuales y total transparencia.'},
          {q:'¿Cuál es la diferencia entre Nuvemshop, Loja Integrada y Tray?',
           a:'Las tres son plataformas brasileñas de e-commerce con perfiles diferentes: <strong>Nuvemshop</strong> es ideal para quienes comienzan y quieren una interfaz simple; <strong>Loja Integrada</strong> ofrece plan gratuito y buenas integraciones; <strong>Tray</strong> es más robusta, indicada para tiendas con mayor volumen de pedidos. MAPA evalúa tu perfil y recomienda la plataforma adecuada.'}
        ]
      },
      cta:{ tag:'¿Listo para empezar?', h2:'Hablemos sobre<br>tu proyecto',
            p:'Respuesta en hasta 24 horas. Sin rodeos, sin costo para el presupuesto.',
            btn1:'💬 Chatear en WhatsApp', btn2:'✉️ Enviar correo' },
      ft:{
        brandp:'Agencia de soluciones digitales en Belo Horizonte, Brasil. Edición de video profesional, e-commerce (Nuvemshop, Loja Integrada, Tray), SaaS a medida, consultoría y creación de sitios para todo Brasil.',
        nav:{ title:'Navegación', links:['Inicio','Nosotros','Servicios','Portafolio','Calculadoras'] },
        srv:{ title:'Servicios', links:['Edición de Video','E-commerce','SaaS a Medida','Consultoría Digital','Creación de Sitios'] },
        contact:{ title:'Contacto', city:'Belo Horizonte, MG – Brasil', remote:'Atención remota para todo Brasil' },
        copyright:'© 2026 MAPA Soluções Digitais. Todos los derechos reservados.',
        cnpj:'CNPJ: 38.295.265/0001-37 · Belo Horizonte, MG · Atención remota para todo Brasil'
      }
    }
  };

  /* ── Dados do modal traduzidos (EN / ES) ── */
  const PF_MODAL_LANG = {
    en:{
      imoveis:{badge:'Video Editing',title:'Real Estate Market Videos',
        desc:'Complete video production for properties for construction companies, brokers and real estate agencies across Brazil. Each delivery includes professional cuts, text motion graphics, narration, captions and color grading, horizontal for YouTube and vertical for Instagram and TikTok. We also use artificial intelligence in video creation, generating high-impact content with agility and scale.',
        results:[{v:'+40',l:'Videos delivered'},{v:'+15',l:'Clients'},{v:'+10',l:'Tools used in editing'}]},
      canal:{badge:'Video Editing',title:'Gaming Channel on YouTube',
        desc:'Professional video editing for a YouTube gaming channel: gameplay highlights, text animations, synced sound effects and rhythmic cuts that keep viewers hooked from start to finish. Content produced in horizontal format for YouTube and vertical for Shorts.',
        results:[{v:'7K',l:'Views/month'},{v:'3.2K',l:'Subscribers'},{v:'+17K',l:'Watch time (hrs)'}]},
      moda:{badge:'E-commerce',title:'Footwear Store on Nuvemshop',
        desc:'Online sneaker store built from scratch on Nuvemshop: payment methods, shipping options, plugins, product registration, client tutorials, banners and full brand customization. The entire process is SEO and GEO-driven, from file names and image alt attributes to product descriptions, to maximize organic visibility.',
        results:[{v:'100+',l:'Products registered'},{v:'15 days',l:'Avg delivery time'},{v:'100%',l:'SEO & GEO focused'}]},
      saas:{badge:'SaaS',title:'SaaS for Pastry Chefs',
        desc:'Fully custom SaaS systems for pastry chefs and other businesses: pricing calculator, recipe management, order scheduling, financial reports and more. Every project is unique and built from scratch to solve the client\'s specific pain points.',
        results:[{v:'+R$10k',l:'Saved by the client'},{v:'100%',l:'Customizable'},{v:'1 month',l:'Delivery time'}]},
      advocacia:{badge:'Site',title:'Website for Law Firm',
        desc:'Institutional site for a labor and social security law firm in Belo Horizonte. Includes local SEO with Schema.org, WhatsApp contact form, legal blog, team page and SSL certificate.',
        results:[{v:'#1',l:'Google BH in niche'},{v:'40+',l:'Leads/month'},{v:'2s',l:'Load time'}]},
      lifestyle:{badge:'Video Editing',title:'Drone YouTube Channel',
        desc:'Professional editing of 4K aerial drone videos for YouTube: cutting, cinematic color grading, thumbnail creation, text animation, audio sync and platform-optimized export.',
        results:[{v:'2k',l:'Views/month'},{v:'+30',l:'Minutes of edited content'},{v:'+10',l:'Videos in 4K'}]},
      suplementos:{badge:'E-commerce',title:'Flower Shop on Nuvemshop',
        desc:'Flower shop built from scratch on Nuvemshop: payment methods, shipping, plugins, product registration, client tutorials, banners and full customisation. SEO and GEO throughout — from file names and alt attributes to every product description.',
        results:[{v:'3',l:'Custom plugins'},{v:'15 business days',l:'Average delivery time'},{v:'100%',l:'SEO & GEO focused'}]},
      'calc-trabalhista':{badge:'SaaS',title:'Labor Law Calculation Platform',
        desc:'A public Brazilian severance calculator built from scratch, with the calculation engine kept separate from the interface and covered by automated tests. It handles the four types of termination, applies proportional notice under Law 12.506/2011 including the projection that pushes the official leaving date forward, counts thirteenth salary and holiday in twelfths, and applies social security and income tax on separate bases — including the 2025 rebate that zeroes tax for anyone earning up to R$5,000. Indemnity items are flagged as tax-exempt, which is the most common mistake in competing calculators.',
        results:[{v:'73',l:'Automated tests'},{v:'4',l:'Termination types'},{v:'2026',l:'Tax tables'}]},
      'calc-climatizacao':{badge:'SaaS',title:'HVAC Sizing Platform',
        desc:'A cooling load calculator that sizes an air conditioning unit from floor area, ceiling height, sun exposure, number of people and heat-producing appliances. The result always rounds up to a capacity that actually exists on the Brazilian market, and the same screen estimates monthly consumption in kWh and in reais, comparing inverter and conventional units.',
        results:[{v:'11',l:'Market capacities'},{v:'6',l:'Input variables'},{v:'2',l:'Outputs: BTU and cost'}]},
      'calc-reformas':{badge:'SaaS',title:'Renovation Cost Estimation Platform',
        desc:'A construction cost estimator per square metre anchored in SINAPI, the official Brazilian construction cost index, with multipliers for renovation depth, finishing standard and region. Bathrooms and kitchens are treated as add-ons because they do not follow the average, and the output is a range rather than a single number — alongside the material-versus-labour split, the timeline and the contingency reserve that almost no quote includes.',
        results:[{v:'4',l:'Renovation levels'},{v:'3',l:'Finishing standards'},{v:'SINAPI',l:'Official cost base'}]}
    },
    es:{
      imoveis:{badge:'Edición de Video',title:'Videos para Mercado Inmobiliario',
        desc:'Producción completa de videos de presentación de propiedades para constructoras, corredoras e inmobiliarias en todo Brasil. Incluye corte profesional, motion graphics, narración, subtítulos y corrección de color, horizontal para YouTube y vertical para Instagram y TikTok. También usamos inteligencia artificial en la creación de videos, generando contenido de alto impacto con agilidad y escala.',
        results:[{v:'+40',l:'Videos entregados'},{v:'+15',l:'Clientes'},{v:'+10',l:'Herramientas en el proceso de edición'}]},
      canal:{badge:'Edición de Video',title:'Canal de Gaming en YouTube',
        desc:'Edición profesional de videos para canal de gaming en YouTube: highlights de gameplay, animaciones de texto, efectos de sonido sincronizados y cortes rítmicos que mantienen al espectador enganchado de principio a fin. Contenido en horizontal para YouTube y vertical para Shorts.',
        results:[{v:'7K',l:'Vistas/mes'},{v:'3.2K',l:'Suscriptores'},{v:'+17K',l:'Tiempo de reproducción'}]},
      moda:{badge:'E-commerce',title:'Tienda de Calzado en Nuvemshop',
        desc:'Tienda virtual de tenis montada desde cero en Nuvemshop: métodos de pago, opciones de envío, plugins, registro de productos, tutoriales para el cliente, banners y personalización completa según la identidad de la marca. Todo el proceso se realiza con enfoque en SEO y GEO, desde el nombre de los archivos y el atributo alt de las imágenes hasta la descripción de los productos.',
        results:[{v:'100+',l:'Productos registrados'},{v:'15 días',l:'Tiempo de entrega promedio'},{v:'100%',l:'Enfoque en SEO y GEO'}]},
      saas:{badge:'SaaS',title:'SaaS para Reposteras',
        desc:'Sistemas SaaS completamente personalizados para reposteras y otros negocios: calculadora de precios, control de recetas, agenda de pedidos, informes financieros y mucho más. Cada proyecto es único y desarrollado desde cero para resolver las necesidades específicas del cliente.',
        results:[{v:'+R$10k',l:'Ahorrado por el cliente'},{v:'100%',l:'Personalizable'},{v:'1 mes',l:'Tiempo de entrega'}]},
      advocacia:{badge:'Sitio',title:'Sitio para Estudio de Abogados',
        desc:'Sitio institucional para estudio de derecho laboral y previsional en Belo Horizonte. SEO local con Schema.org, formulario de contacto con WhatsApp, blog jurídico, página de equipo y certificado SSL.',
        results:[{v:'#1',l:'Google BH en el nicho'},{v:'40+',l:'Leads/mes'},{v:'2s',l:'Tiempo de carga'}]},
      lifestyle:{badge:'Edición de Video',title:'Canal de Drone en YouTube',
        desc:'Edición profesional de videos aéreos en 4K para canal de drone en YouTube: corte, color grading cinematográfico, creación de miniaturas, animación de texto, sincronización de audio y exportación optimizada para la plataforma.',
        results:[{v:'2k',l:'Views/mes'},{v:'+30',l:'Minutos de contenido editado'},{v:'+10',l:'Videos en 4K'}]},
      suplementos:{badge:'E-commerce',title:'Floristería en Nuvemshop',
        desc:'Floristería creada desde cero en Nuvemshop: configuro medios de pago, formas de envío y plugins, registro productos, armo tutoriales para el cliente, añado banners y dejo el sitio exactamente como el cliente quiere. Todo el trabajo de SEO y GEO se realiza desde el nombre de los archivos y el atributo alt de las imágenes hasta la descripción de cada producto.',
        results:[{v:'3',l:'Plugins personalizados'},{v:'15 días hábiles',l:'Plazo de entrega promedio'},{v:'100%',l:'Enfocado en SEO y GEO'}]},
      'calc-trabalhista':{badge:'SaaS',title:'Plataforma de Cálculo Laboral',
        desc:'Calculadora pública de finiquito laboral brasileño construida desde cero, con el motor de cálculo separado de la interfaz y cubierto por pruebas automatizadas. Trata los cuatro tipos de desvinculación, aplica el preaviso proporcional de la Ley 12.506/2011 con la proyección que adelanta la fecha de salida, calcula aguinaldo y vacaciones por doceavos y aplica seguridad social e impuesto sobre bases separadas — incluido el reductor de 2025 que anula el impuesto de quien gana hasta R$5.000. Los conceptos indemnizatorios aparecen marcados como exentos, que es el error más común de las calculadoras de la competencia.',
        results:[{v:'73',l:'Pruebas automatizadas'},{v:'4',l:'Tipos de desvinculación'},{v:'2026',l:'Tablas fiscales'}]},
      'calc-climatizacao':{badge:'SaaS',title:'Plataforma de Dimensionamiento de Climatización',
        desc:'Calculadora de carga térmica que dimensiona el equipo de aire acondicionado a partir del metraje, la altura del techo, la exposición solar, el número de personas y los equipos que generan calor. El resultado siempre se redondea hacia arriba hasta una capacidad que existe en el mercado brasileño, y la misma pantalla estima el consumo mensual en kWh y en reales, comparando inverter y convencional.',
        results:[{v:'11',l:'Capacidades del mercado'},{v:'6',l:'Variables de cálculo'},{v:'2',l:'Salidas: BTU y consumo'}]},
      'calc-reformas':{badge:'SaaS',title:'Plataforma de Estimación de Costos de Reformas',
        desc:'Estimador de costo de obra por metro cuadrado anclado en el SINAPI, el índice oficial brasileño de costos de construcción, con multiplicadores por profundidad de la reforma, estándar de acabado y región. Baño y cocina se tratan como adicionales porque no siguen el promedio, y el resultado es un rango en vez de un número único — junto con la división entre material y mano de obra, el plazo y la reserva para imprevistos que casi ningún presupuesto incluye.',
        results:[{v:'4',l:'Niveles de reforma'},{v:'3',l:'Estándares de acabado'},{v:'SINAPI',l:'Base oficial de costos'}]}
    }
  };

  function getProjectData(id) {
    const lang = window._mapLang || 'pt';
    if (lang !== 'pt' && PF_MODAL_LANG[lang] && PF_MODAL_LANG[lang][id]) {
      return Object.assign({}, PF_DATA[id], PF_MODAL_LANG[lang][id]);
    }
    return PF_DATA[id];
  }


  /* ────────────────────────────────────────────────────
     SERVIÇOS ESTÁTICOS (ícone, gradiente, chips, WA)
  ──────────────────────────────────────────────────── */
  const SRV_STATIC = [
    {ico:'🎬', grad:'linear-gradient(135deg,#4f46e5,#7c3aed)',
     chips:['Cortes & Jump Cuts','Color Grading','Motion Graphics','Legendas Automáticas','Formato Vertical'],
     wa:'https://wa.me/5531989190373?text=Ol%C3%A1%2C+tenho+interesse+em+Edi%C3%A7%C3%A3o+de+V%C3%ADdeo!'},
    {ico:'🛒', grad:'linear-gradient(135deg,#0ea5e9,#2563eb)',
     chips:['Nuvemshop','Loja Integrada','Tray','Pagamento','Frete'],
     wa:'https://wa.me/5531989190373?text=Ol%C3%A1%2C+tenho+interesse+em+E-commerce!'},
    {ico:'⚙️', grad:'linear-gradient(135deg,#7c3aed,#db2777)',
     chips:['Plataformas SaaS','APIs & Integrações','Automações','Sistemas Web'],
     wa:'https://wa.me/5531989190373?text=Ol%C3%A1%2C+tenho+interesse+em+SaaS+sob+medida!'},
    {ico:'🧭', grad:'linear-gradient(135deg,#0d9488,#0891b2)',
     chips:['Diagnóstico Digital','Estratégia','Ferramentas','Mentoria'],
     wa:'https://wa.me/5531989190373?text=Ol%C3%A1%2C+tenho+interesse+em+Consultoria+Digital!'},
    {ico:'🌐', grad:'linear-gradient(135deg,#2563eb,#4f46e5)',
     chips:['Sites Institucionais','Landing Pages','SEO On-Page','Mobile First'],
     wa:'https://wa.me/5531989190373?text=Ol%C3%A1%2C+tenho+interesse+em+Cria%C3%A7%C3%A3o+de+Site!'}
  ];

  /* ────────────────────────────────────────────────────
     TAB CAROUSEL DE SERVIÇOS
  ──────────────────────────────────────────────────── */
  let _srvIdx = 0;
  let _srvTimer = null;
  let _srvT = null;

  function buildSrvTabs(t) {
    _srvT = t;
    const tabsEl = document.getElementById('srvTabs');
    const dotsEl = document.getElementById('srvDots');
    if (!tabsEl || !dotsEl) return;
    // Build tabs
    tabsEl.innerHTML = (t.srv.tabs || []).map((label, i) =>
      `<button class="srv-tab${i === _srvIdx ? ' active' : ''}" role="tab"
        aria-selected="${i === _srvIdx}" data-sidx="${i}">${label}</button>`
    ).join('');
    // Build dots
    dotsEl.innerHTML = (t.srv.tabs || []).map((_, i) =>
      `<button class="srv-dot${i === _srvIdx ? ' active' : ''}" data-sidx="${i}" aria-label="Serviço ${i+1}"></button>`
    ).join('');
    // Bind clicks
    tabsEl.querySelectorAll('.srv-tab').forEach(b => {
      b.addEventListener('click', () => { _srvIdx = +b.dataset.sidx; showSrvSlide(); resetSrvTimer(); });
    });
    dotsEl.querySelectorAll('.srv-dot').forEach(b => {
      b.addEventListener('click', () => { _srvIdx = +b.dataset.sidx; showSrvSlide(); resetSrvTimer(); });
    });
    showSrvSlide();
    resetSrvTimer();
  }

  function showSrvSlide() {
    const t = _srvT;
    if (!t) return;
    const idx = _srvIdx;
    const card = t.srv.cards[idx] || {};
    const st = SRV_STATIC[idx] || {};
    const chips = (st.chips || []).map(c => `<span class="chip">${c}</span>`).join('');
    const panelEl = document.getElementById('srvPanel');
    if (panelEl) {
      panelEl.innerHTML = `
        <div class="srv-panel-card animate-in">
          <div class="srv-panel-top">
            <div class="srv-panel-ico" style="background:${st.grad || ''}">${st.ico || ''}</div>
            <h3 class="srv-panel-h3">${card.title || ''}</h3>
          </div>
          <p class="srv-panel-desc">${card.desc || ''}</p>
          <div class="chips">${chips}</div>
          <a href="${st.wa || '#'}" class="srv-link" target="_blank" rel="noopener noreferrer"
            style="margin-top:.5rem">${t.srv.cta || 'Solicitar orçamento →'}</a>
        </div>`;
      // retrigger animation
      const c = panelEl.querySelector('.srv-panel-card');
      if (c && !matchMedia('(prefers-reduced-motion: reduce)').matches) c.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease',fill:'both'});
    }
    // Update tabs & dots active state
    document.querySelectorAll('.srv-tab').forEach((b,i)=>{
      const on=i===idx; b.classList.toggle('active',on); b.setAttribute('aria-selected',String(on));
    });
    document.querySelectorAll('.srv-dot').forEach((b,i)=>b.classList.toggle('active',i===idx));
    // Progress bar
    const bar = document.getElementById('srvBar');
    if (bar) { bar.getAnimations().forEach(a=>a.cancel()); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) bar.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:5000,easing:'linear',fill:'forwards'}); else bar.style.transform='scaleX(1)'; }
  }

  function resetSrvTimer() {
    clearInterval(_srvTimer);
    _srvTimer = setInterval(() => {
      _srvIdx = (_srvIdx + 1) % SRV_STATIC.length;
      showSrvSlide();
    }, 5000);
  }

  /* ────────────────────────────────────────────────────
     TEMA CLARO / ESCURO
  ──────────────────────────────────────────────────── */
  (function() {
    const html = document.documentElement;
    const btn  = document.getElementById('themeBtn');
    const sun  = document.getElementById('icoSun');
    const moon = document.getElementById('icoMoon');
    let dark = true;
    try { dark = localStorage.getItem('mapa_theme') !== 'light'; } catch(e){}

    function applyTheme(isDark) {
      dark = isDark;
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
      if (sun)  sun.style.display  = isDark ? 'block' : 'none';
      if (moon) moon.style.display = isDark ? 'none'  : 'block';
      try { localStorage.setItem('mapa_theme', isDark ? 'dark' : 'light'); } catch(e){}
    }

    applyTheme(dark);
    if (btn) btn.addEventListener('click', () => applyTheme(!dark));
  })();

  function setLang(lang) {
    if (!I18N[lang]) return;
    const t = I18N[lang];
    window._mapLang = lang;
    try { localStorage.setItem('mapa_lang', lang); } catch(e){}

    /* html lang + buttons */
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.querySelectorAll('.lang-btn').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });

    /* Nav links */
    const navAs = document.querySelectorAll('.nav-ul li a');
    const navKeys = ['home','sobre','servicos','portfolio','calculadoras'];
    navKeys.forEach((k, i) => {
      if (navAs[i] && t.nav[k]) navAs[i].textContent = t.nav[k];
    });
    const navCta = navAs[navKeys.length];
    if (navCta) navCta.innerHTML = t.nav.cta;
    document.getElementById('hbg').setAttribute('aria-label', t.nav.menuLabel);

    /* Hero */
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.textContent = t.hero.badge;
    const heroH1 = document.querySelector('#home h1');
    if (heroH1) heroH1.innerHTML = t.hero.h1;
    const heroP = document.querySelector('.hero-p');
    if (heroP) heroP.innerHTML = t.hero.p;
    const heroBtns = document.querySelectorAll('.hero-btns .btn');
    if (heroBtns[0]) heroBtns[0].innerHTML = t.hero.btn1;
    if (heroBtns[1]) heroBtns[1].textContent = t.hero.btn2;
    document.querySelectorAll('.hcard').forEach((c, i) => {
      if (!t.hero.cards[i]) return;
      c.querySelector('h3').textContent = t.hero.cards[i].title;
      c.querySelector('p').textContent  = t.hero.cards[i].p;
    });

    /* Stats */
    document.querySelectorAll('.stat-l').forEach((el, i) => {
      if (t.stats[i]) el.textContent = t.stats[i];
    });

    /* Sobre */
    const sobreTag = document.querySelector('#sobre .tag');
    if (sobreTag) sobreTag.textContent = t.sobre.tag;
    const sobreH2 = document.querySelector('#sobre h2');
    if (sobreH2) sobreH2.innerHTML = t.sobre.h2;
    document.querySelectorAll('.sobre-copy p').forEach((p, i) => {
      if (t.sobre.ps[i]) p.innerHTML = t.sobre.ps[i];
    });
    document.querySelectorAll('.val-card').forEach((card, i) => {
      if (!t.sobre.vals[i]) return;
      card.querySelector('h3').textContent = t.sobre.vals[i].title;
      card.querySelector('p').textContent  = t.sobre.vals[i].p;
    });

    /* Serviços */
    const srvTag = document.querySelector('#servicos .tag');
    if (srvTag) srvTag.textContent = t.srv.tag;
    const srvH2 = document.querySelector('#servicos h2');
    if (srvH2) srvH2.innerHTML = t.srv.h2;
    const srvSub = document.querySelector('#servicos .sub');
    if (srvSub) srvSub.textContent = t.srv.sub;
    buildSrvTabs(t);

    /* Portfólio */
    const pfTag = document.querySelector('#portfolio .tag');
    if (pfTag) pfTag.textContent = t.pf.tag;
    const pfH2 = document.querySelector('#portfolio h2');
    if (pfH2) pfH2.innerHTML = t.pf.h2;
    const pfSub = document.querySelector('#portfolio .sub');
    if (pfSub) pfSub.textContent = t.pf.sub;
    document.querySelectorAll('.pf-btn').forEach((b, i) => {
      if (t.pf.filters[i]) b.textContent = t.pf.filters[i];
    });
    document.querySelectorAll('.pf-thumb-cta').forEach(cta => {
      const tn = [...cta.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (tn) tn.textContent = '\n              ' + t.pf.viewBtn + '\n            ';
    });
    document.querySelectorAll('.pf-card').forEach((card, i) => {
      const ci = t.pf.cards[i];
      if (!ci) return;
      const h3 = card.querySelector('h3');
      if (h3) h3.textContent = ci.title;
      const pEl = card.querySelector('.pf-info p');
      if (pEl) pEl.textContent = ci.p;
      const badge = card.querySelector('.pf-badge');
      if (badge) badge.textContent = ci.badge;
      card.setAttribute('aria-label', t.pf.viewProjectPrefix + ci.title);
    });

    /* Calculadoras */
    if (t.calc) {
      const calcTag = document.querySelector('#calculadoras .tag');
      if (calcTag) calcTag.textContent = t.calc.tag;
      const calcH2 = document.querySelector('#calculadoras h2');
      if (calcH2) calcH2.innerHTML = t.calc.h2;
      const calcSub = document.querySelector('#calculadoras .sub');
      if (calcSub) calcSub.textContent = t.calc.sub;
      document.querySelectorAll('.calc-card').forEach((card, i) => {
        const ci = t.calc.cards[i];
        if (!ci) return;
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = ci.title;
        const pEl = card.querySelector('p');
        if (pEl) pEl.textContent = ci.p;
        const go = card.querySelector('.calc-go');
        if (go) go.textContent = t.calc.cta;
      });
      const calcNote = document.querySelector('.calc-note');
      if (calcNote) calcNote.textContent = t.calc.note;
    }

    /* FAQ */
    const faqTag = document.querySelector('#faq .tag');
    if (faqTag) faqTag.textContent = t.faq.tag;
    const faqH2 = document.querySelector('#faq h2');
    if (faqH2) faqH2.innerHTML = t.faq.h2;
    document.querySelectorAll('.faq-item').forEach((item, i) => {
      const fi = t.faq.items[i];
      if (!fi) return;
      const btn = item.querySelector('.faq-q');
      const tn  = [...btn.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (tn) tn.textContent = '\n            ' + fi.q + '\n            ';
      const aP = item.querySelector('.faq-a p');
      if (aP) aP.innerHTML = fi.a;
    });

    /* CTA */
    const ctaTag = document.querySelector('#cta .tag');
    if (ctaTag) ctaTag.textContent = t.cta.tag;
    const ctaH2 = document.querySelector('#cta h2');
    if (ctaH2) ctaH2.innerHTML = t.cta.h2;
    const ctaP = document.querySelector('.cta-box p');
    if (ctaP) ctaP.textContent = t.cta.p;
    const ctaBtns = document.querySelectorAll('.cta-btns .btn');
    if (ctaBtns[0]) ctaBtns[0].innerHTML = t.cta.btn1;
    if (ctaBtns[1]) ctaBtns[1].innerHTML = t.cta.btn2;

    /* Footer */
    const ftBrandP = document.querySelector('.ft-brand p');
    if (ftBrandP) ftBrandP.textContent = t.ft.brandp;
    const ftCols = document.querySelectorAll('.ft-col');
    if (ftCols[0]) {
      ftCols[0].querySelector('h2').textContent = t.ft.nav.title;
      ftCols[0].querySelectorAll('li a').forEach((a, i) => {
        if (t.ft.nav.links[i]) a.textContent = t.ft.nav.links[i];
      });
    }
    if (ftCols[1]) {
      ftCols[1].querySelector('h2').textContent = t.ft.srv.title;
      ftCols[1].querySelectorAll('li a').forEach((a, i) => {
        if (t.ft.srv.links[i]) a.textContent = t.ft.srv.links[i];
      });
    }
    if (ftCols[2]) {
      ftCols[2].querySelector('h2').textContent = t.ft.contact.title;
      const spns = ftCols[2].querySelectorAll('span');
      if (spns[0]) spns[0].textContent = t.ft.contact.city;
      if (spns[1]) spns[1].textContent = t.ft.contact.remote;
    }
    const ftBot = document.querySelectorAll('.ft-bottom p');
    if (ftBot[0]) ftBot[0].textContent = t.ft.copyright;
    if (ftBot[1]) ftBot[1].textContent = t.ft.cnpj;
  }

  /* ── Lang button click handlers ── */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* ── Init: load saved or browser-preferred language ── */
  (function initLang() {
    let saved;
    try { saved = localStorage.getItem('mapa_lang'); } catch(e){}
    const lang = (saved && I18N[saved]) ? saved : 'pt';
    window._mapLang = lang;
    setLang(lang);
  })();

})();

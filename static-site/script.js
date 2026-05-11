// ============================================================
// Rackyweb Global Media — single-file SPA (hash routing)
// ============================================================

const EMAIL = 'edwardzethan792@gmail.com';
const WHATSAPP = '+234 708 780 6251';
const WA_LINK = 'https://wa.me/2347087806251';

const ARTICLES = [
  { id:1, cat:'Finance',  title:'Why family offices are the new venture capital.', excerpt:'An inside look at the quiet capital reshaping early-stage rounds across three continents.', img:'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80' },
  { id:2, cat:'AI',       title:'The agentic stack: what enterprises are buying in 2026.', excerpt:'From orchestration layers to evals — the new procurement playbook for chief AI officers.', img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80' },
  { id:3, cat:'Deal',     title:'Inside the $2.4B logistics roll-up nobody saw coming.', excerpt:'How a quiet operator stitched 14 regional carriers into a single trans-African platform.', img:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80' },
  { id:4, cat:'Markets',  title:'Emerging-market IPOs are back.', excerpt:'The Lagos-Riyadh corridor leads a global rebound in listings.', img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80' },
  { id:5, cat:'Operators',title:'Inside the new COO playbook.', excerpt:'Lean ops, AI copilots and distributed teams — how operators are rewriting the rules.', img:'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80' },
  { id:6, cat:'Climate',  title:'Where climate capital is flowing.', excerpt:'A field guide to the next decade of green deals across emerging markets.', img:'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80' },
  { id:7, cat:'Finance',  title:'Private credit is eating banking.', excerpt:'Why the $1.7T private-credit market is rewriting corporate lending.', img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80' },
  { id:8, cat:'AI',       title:'Inside the AI-native enterprise.', excerpt:'How leading companies redesigned org charts around models, not headcount.', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80' },
  { id:9, cat:'Deal',     title:'The roll-up returns to fintech.', excerpt:'Two years after the bust, consolidators are quietly rebuilding the stack.', img:'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80' },
];

const LISTINGS = [
  { name:'Northwind Capital', tag:'Verified',  desc:'Boutique advisory · London',         meta:['★ 4.9','$1M–$10M deals'] },
  { name:'Atlas Logistics',   tag:'Sponsored', desc:'Cross-border freight · Lagos',       meta:['★ 4.8','40 countries'] },
  { name:'Lumen AI Labs',     tag:'Verified',  desc:'Enterprise AI · New York',           meta:['★ 5.0','Series B'] },
  { name:'Helios Energy',     tag:'Verified',  desc:'Solar EPC · Nairobi',                meta:['★ 4.7','120 MW deployed'] },
  { name:'Brava Foods',       tag:'Sponsored', desc:'CPG distribution · São Paulo',       meta:['★ 4.9','LatAm coverage'] },
  { name:'Sentinel Cyber',    tag:'Verified',  desc:'Managed security · Singapore',       meta:['★ 5.0','SOC2 / ISO'] },
];

// ---------- Page templates ----------
const Pages = {
  '/': () => `
    <section class="hero page-fade">
      <div class="hero-bg"></div>
      <div class="container hero-inner">
        <span class="eyebrow">Global Business · Startup Intelligence</span>
        <h1 class="display">Where business<br/>meets <span class="gold">innovation</span>.</h1>
        <p class="lede">A worldwide newsroom and verified marketplace for the founders, operators and investors building the next decade of business.</p>
        <div class="hero-cta">
          <a href="#/marketplace" data-link class="btn btn-gold lg">Explore the marketplace →</a>
          <a href="#/blog" data-link class="btn btn-outline lg">Read the journal</a>
        </div>
        <div class="hero-stats">
          <div><strong data-count="184">0</strong><span>Countries</span></div>
          <div><strong data-count="12400">0</strong><span>Verified businesses</span></div>
          <div><strong data-count="2600000">0</strong><span>Monthly readers</span></div>
          <div><strong data-count="98">0</strong><span>Editorial NPS</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row-head">
          <div><span class="eyebrow emerald">The Journal</span><h2 class="h2">Editorial that moves markets.</h2></div>
          <a href="#/blog" data-link class="link-arrow">All stories →</a>
        </div>
        <div class="grid-3">${ARTICLES.slice(0,3).map(articleCard).join('')}</div>
      </div>
    </section>

    <section class="section dark">
      <div class="container">
        <div class="row-head">
          <div><span class="eyebrow gold-text">Marketplace</span><h2 class="h2">Verified businesses, ready to deal.</h2></div>
          <a href="#/marketplace" data-link class="link-arrow light">Browse listings →</a>
        </div>
        <div class="grid-3">${LISTINGS.slice(0,3).map(listingCard).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="container cta">
        <h2 class="h2">Get the briefing 1.2M operators read every Monday.</h2>
        <form class="newsletter" data-newsletter>
          <input type="email" required placeholder="you@company.com" />
          <button class="btn btn-gold" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  `,

  '/blog': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">The Journal</span>
      <h1>Business journalism for a global audience.</h1>
      <p>Long-reads, deal coverage and operator playbooks from our newsrooms in Lagos, London and New York.</p>

      <div class="search-wrap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="searchInput" type="search" placeholder="Search articles, topics, companies…" autocomplete="off"/>
      </div>
      <div class="search-chips" id="searchChips">
        ${['All','Finance','AI','Deal','Markets','Operators','Climate'].map(c=>`<button class="chip${c==='All'?' active':''}" data-cat="${c}">${c}</button>`).join('')}
      </div>
    </div></section>

    <section class="section" style="padding-top:0"><div class="container">
      <div class="grid-3" id="articleGrid">${ARTICLES.map(articleCard).join('')}</div>
      <div class="empty" id="emptyState" style="display:none">No stories match your search.</div>
    </div></section>
  `,

  '/article': () => `
    <section class="page-hero page-fade"><div class="container prose">
      <span class="eyebrow">Finance</span>
      <h1>Why family offices are the new venture capital.</h1>
      <p class="meta">By Edward Zethan · 8 min read · Updated May 2026</p>
      <div class="cover" style="background-image:url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80)"></div>
      <p>Across three continents, the quietest capital in the room is increasingly the loudest at the cap table. Family offices — once content with public equities and trophy real estate — have become the most active early-stage backers of the founders rebuilding finance, logistics and AI infrastructure.</p>
      <h2>The new patient capital</h2>
      <p>Where venture funds answer to LPs on a 10-year clock, family offices answer to a single principal — and increasingly, to a next generation hungry to deploy. That patience is showing up in deal terms: longer hold periods, lower governance overhead, and a willingness to write the unglamorous Series A extensions that keep companies alive in down markets.</p>
      <h2>Where the money is going</h2>
      <p>Three sectors dominate: vertical AI, climate infrastructure and B2B fintech. The thread that ties them is durable cash flow — the kind of returns a multi-generational balance sheet can underwrite without the pressure of a fund cycle.</p>
      <p>For founders, the implication is clear: the next round may not come from Sand Hill Road. It may come from a single-family office in Geneva, Riyadh or Lagos.</p>
    </div></section>
  `,

  '/marketplace': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">Marketplace</span>
      <h1>Verified businesses, ready to deal.</h1>
      <p>Browse 12,400+ vetted companies across 184 countries. Every listing is verified by our editorial team.</p>
    </div></section>
    <section class="section dark"><div class="container">
      <div class="grid-3">${LISTINGS.map(listingCard).join('')}</div>
    </div></section>
  `,

  '/pricing': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">Pricing</span><h1>Simple plans for serious businesses.</h1>
      <p>Start free. Upgrade when you're ready to be discovered by 2.6M monthly readers.</p>
      <div class="price-grid">
        ${[
          ['Starter','$0','/mo',['Basic listing','Standard support','Public profile']],
          ['Growth','$49','/mo',['Verified badge','Priority placement','Analytics dashboard','Editorial submissions'],true],
          ['Enterprise','$299','/mo',['Sponsored slot','Newsletter feature','Dedicated manager','API access']]
        ].map(([n,p,per,feats,f])=>`
          <div class="price${f?' featured':''}">
            <h3>${n}</h3><div class="amount">${p}<span style="font-size:14px;color:var(--muted)">${per}</span></div>
            <ul>${feats.map(x=>`<li>${x}</li>`).join('')}</ul>
            <a href="#/partner" data-link class="btn ${f?'btn-gold':'btn-outline'} lg" style="width:100%;justify-content:center">Get started</a>
          </div>`).join('')}
      </div>
    </div></section>
  `,

  '/about': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">About</span>
      <h1>A global newsroom for the next decade of business.</h1>
      <p>Rackyweb Global Media is an independent business newsroom and verified marketplace, headquartered between Lagos, London and New York. We exist to give founders, operators and investors the signal — not the noise.</p>
      <div class="feature-grid">
        <div class="feature"><span class="eyebrow">Mission</span><h3>Independent journalism.</h3><p>No pay-to-play. No sponsored coverage masked as editorial. Ever.</p></div>
        <div class="feature"><span class="eyebrow">Reach</span><h3>184 countries.</h3><p>Read by 2.6M operators, founders and investors every month.</p></div>
        <div class="feature"><span class="eyebrow">Standard</span><h3>Verified marketplace.</h3><p>Every business on the platform is vetted by our editorial team.</p></div>
      </div>
    </div></section>
  `,

  '/contact': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">Contact</span><h1>Tell us what you're building.</h1>
      <p>Press, partnerships, listings or general enquiries — we read everything.</p>
      <p class="muted small">📧 ${EMAIL}<br/>💬 WhatsApp ${WHATSAPP}</p>
      <form class="form" data-form style="margin-top:32px">
        <input required placeholder="Your name" />
        <input required type="email" placeholder="Email" />
        <input placeholder="Company" />
        <textarea required placeholder="How can we help?"></textarea>
        <button class="btn btn-gold lg" type="submit">Send message</button>
      </form>
    </div></section>
  `,

  '/partner': () => `
    <section class="page-hero page-fade"><div class="container">
      <span class="eyebrow">Partner</span><h1>List your business.</h1>
      <p>Get in front of 2.6M monthly readers and 12,400 verified operators worldwide.</p>
      <form class="form" data-form style="margin-top:32px">
        <input required placeholder="Company name" />
        <input required type="email" placeholder="Work email" />
        <input placeholder="Website" />
        <select required>
          <option value="">Choose a category</option>
          <option>Finance</option><option>AI / Software</option><option>Logistics</option>
          <option>Climate</option><option>Consumer</option><option>Other</option>
        </select>
        <textarea required placeholder="Tell us about your business"></textarea>
        <button class="btn btn-gold lg" type="submit">Submit application</button>
      </form>
    </div></section>
  `,

  '/login': () => authPage('Welcome back','Sign in','#/signup',`Don't have an account?`),
  '/signup': () => authPage('Create your account','Create account','#/login','Already have one?'),
};

function authPage(title, cta, altLink, altText){
  return `
    <section class="page-hero page-fade"><div class="container" style="max-width:480px">
      <span class="eyebrow">Account</span><h1>${title}</h1>
      <form class="form" data-form style="margin-top:32px">
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button class="btn btn-gold lg" type="submit">${cta}</button>
      </form>
      <p class="muted small">${altText} <a href="${altLink}" data-link style="color:var(--emerald);font-weight:500">Continue →</a></p>
    </div></section>`;
}

function articleCard(a){
  return `<a href="#/article" data-link class="card">
    <div class="card-img" style="background-image:url('${a.img}')"></div>
    <div class="card-body"><span class="tag">${a.cat}</span><h3>${a.title}</h3><p>${a.excerpt}</p></div>
  </a>`;
}
function listingCard(l){
  return `<div class="listing">
    <div class="listing-top"><div class="logo">${l.name[0]}</div><span class="badge">${l.tag}</span></div>
    <h3>${l.name}</h3><p>${l.desc}</p>
    <div class="listing-meta">${l.meta.map(m=>`<span>${m}</span>`).join('')}</div>
  </div>`;
}

// ---------- Router ----------
function route(){
  const path = (location.hash.replace(/^#/,'') || '/').split('?')[0];
  const view = Pages[path] || Pages['/'];
  document.getElementById('app').innerHTML = view();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+path);
  });
  window.scrollTo({top:0, behavior:'instant'});
  initPage();
  document.getElementById('nav')?.classList.remove('open');
}

function initPage(){
  // counters
  const ease = t => 1 - Math.pow(1 - t, 3);
  const fmt = n => n>=1_000_000 ? (n/1_000_000).toFixed(1)+'M' : n>=1_000 ? (n/1_000).toFixed(1).replace('.0','')+'K' : n;
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, target=+el.dataset.count, start=performance.now(), dur=1600;
    const tick=now=>{const p=Math.min((now-start)/dur,1); el.textContent=fmt(Math.floor(target*ease(p))); if(p<1)requestAnimationFrame(tick);};
    requestAnimationFrame(tick); io.unobserve(el);
  }), {threshold:.4});
  document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));

  // reveal
  const rio = new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';rio.unobserve(e.target);}
  }), {threshold:.15});
  document.querySelectorAll('.card,.listing,.price,.feature').forEach(el=>{
    el.style.opacity=0; el.style.transform='translateY(24px)';
    el.style.transition='opacity .8s ease, transform .8s ease';
    rio.observe(el);
  });

  // forms
  document.querySelectorAll('[data-form],[data-newsletter]').forEach(f=>{
    f.addEventListener('submit', ev=>{
      ev.preventDefault();
      const btn = f.querySelector('button[type=submit],button');
      if(btn){ btn.textContent='Sent ✓'; btn.disabled=true; }
      f.querySelectorAll('input,textarea,select').forEach(x=>x.value='');
    });
  });

  // blog search
  const input = document.getElementById('searchInput');
  const chips = document.getElementById('searchChips');
  const grid  = document.getElementById('articleGrid');
  const empty = document.getElementById('emptyState');
  if(input && grid){
    let q='', cat='All';
    const apply=()=>{
      const filtered = ARTICLES.filter(a=>{
        const okCat = cat==='All' || a.cat===cat;
        const t = (a.title+' '+a.excerpt+' '+a.cat).toLowerCase();
        return okCat && t.includes(q.toLowerCase());
      });
      grid.innerHTML = filtered.map(articleCard).join('');
      empty.style.display = filtered.length ? 'none' : 'block';
      // re-bind reveals on new cards
      grid.querySelectorAll('.card').forEach(el=>{el.style.opacity=1;el.style.transform='none';});
    };
    input.addEventListener('input', e=>{q=e.target.value; apply();});
    chips.addEventListener('click', e=>{
      const b=e.target.closest('.chip'); if(!b) return;
      cat = b.dataset.cat;
      chips.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c===b));
      apply();
    });
  }
}

// ---------- Bootstrap ----------
document.getElementById('yr').textContent = new Date().getFullYear();
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
document.getElementById('burger').addEventListener('click', ()=>nav.classList.toggle('open'));
window.addEventListener('hashchange', route);
route();
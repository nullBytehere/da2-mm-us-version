(function () {
  'use strict';

  var C = window.SITE_CONFIG;
  var $ = function (id) { return document.getElementById(id); };
  var app = $('app'), view = $('view'), nav = $('nav'), burger = $('burger');

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function img(src, cls) {
    var i = el('img', cls);
    i.alt = '';
    i.onerror = function () { i.style.visibility = 'hidden'; };
    i.src = src;
    return i;
  }

  /* ---------- download toast ---------- */
  function showToast(name) {
    var cfg = C.toast || { text: 'Download started', duration: 3500 };
    var box = $('toasts'), t = el('div', 'toast'), tx = el('div', 'toast-text');
    tx.appendChild(el('strong', '', cfg.text));
    tx.appendChild(el('span', '', name));
    t.appendChild(el('span', 'toast-icon'));
    t.appendChild(tx);
    box.appendChild(t);
    while (box.children.length > 3) box.removeChild(box.firstChild);
    requestAnimationFrame(function () { requestAnimationFrame(function () { t.classList.add('show'); }); });
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400);
    }, cfg.duration);
  }

  /* ---------- theme ---------- */
  Object.keys(C.colors).forEach(function (k) {
    document.documentElement.style.setProperty(k, C.colors[k]);
  });
  var heroUrl = new URL(C.images.heroBg, document.baseURI).href;   /* absolute, so it works from css/ too */
  document.documentElement.style.setProperty('--hero-bg', 'url("' + heroUrl + '")');
  document.title = C.site.name;

  /* ---------- header / footer ---------- */
  $('brand-logo').src = C.images.logo;
  $('brand-logo').onerror = function () { this.style.visibility = 'hidden'; };
  $('brand-name').textContent = C.site.name;

  var navList = $('nav-list');
  C.nav.forEach(function (item) {
    var li = el('li'), a = el('a', item.pill ? 'pill' : '', item.label);
    a.href = item.href;
    if (item.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    if (item.pill) a.appendChild(img(C.images.discordAvatar, 'nav-avatar'));
    li.appendChild(a);
    navList.appendChild(li);
  });

  var f = C.footer, footer = $('footer');
  footer.appendChild(document.createTextNode(f.prefix + ' ' + f.heart + ' ('));
  var fa = el('a', '', f.authorName);
  fa.href = f.authorUrl; fa.target = '_blank'; fa.rel = 'noopener noreferrer';
  footer.appendChild(fa);
  footer.appendChild(document.createTextNode(')'));

  /* mobile menu */
  function setMenu(open) {
    app.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open);
    nav.style.maxHeight = open ? nav.scrollHeight + 'px' : '';
  }
  burger.addEventListener('click', function () { setMenu(!app.classList.contains('nav-open')); });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setMenu(false);
    else if (app.classList.contains('nav-open')) nav.style.maxHeight = nav.scrollHeight + 'px';
  });

  /* ---------- smooth scroll (same feel on every browser) ---------- */
  function smoothScrollTo(target) {
    var start = window.pageYOffset;
    var end = target.getBoundingClientRect().top + start - 16;
    var dist = end - start, dur = 900, t0 = null;
    function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      window.scrollTo(0, start + dist * ease(p));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- All Things ---------- */
  function buildItem(t, primary) {
    var item = el('article', 'item');
    var main = el('div', 'item-main'), txt = el('div');
    main.appendChild(img(t.icon, 'item-icon'));
    txt.appendChild(el('h3', 'item-title', t.title));
    txt.appendChild(el('p', 'item-sub', t.subtitle));
    main.appendChild(txt);

    var meta = el('div', 'item-meta');
    t.meta.forEach(function (m) {
      var box = el('div', 'meta');
      box.appendChild(el('span', 'meta-label', m.label));
      box.appendChild(el('span', 'meta-value', m.value));
      meta.appendChild(box);
    });

    var cls = 'btn-pill' + (primary ? ' is-primary' : '');
    var btn;
    if (t.button.url) {
      btn = el('a', cls, t.button.text);
      btn.href = t.button.url; btn.target = '_blank'; btn.rel = 'noopener noreferrer';
      btn.addEventListener('click', function () { showToast(t.title); });
    } else {
      btn = el('span', cls, t.button.text);
    }
    item.appendChild(main); item.appendChild(meta); item.appendChild(btn);
    return item;
  }

  function initHome() {
    var h = C.hero;
    $('hero-welcome').textContent = h.welcome;
    h.title.forEach(function (l) { $('hero-title').appendChild(el('span', 'c-' + l.color, l.text)); });
    var dl = $('hero-download');
    dl.textContent = h.buttonText;
    dl.addEventListener('click', function () { smoothScrollTo($('all-things')); });

    var cfg = C.allThings, things = C.things;
    var list = $('things-list'), wrap = $('things-extra'), inner = $('things-extra-list');
    var toggle = $('things-toggle'), more = toggle.parentNode;

    things.slice(0, cfg.visibleCount).forEach(function (t, i) { list.appendChild(buildItem(t, i === 0)); });
    var extra = things.slice(cfg.visibleCount);
    if (!extra.length) { wrap.remove(); more.remove(); return; }
    extra.forEach(function (t) { inner.appendChild(buildItem(t, false)); });

    var open = false;
    function label() {
      toggle.textContent = open ? cfg.hideText : cfg.showText;
      toggle.appendChild(el('i', 'chev'));
      toggle.classList.toggle('open', open);
    }
    label();
    toggle.addEventListener('click', function () {
      open = !open;
      wrap.classList.toggle('open', open);
      wrap.style.maxHeight = inner.scrollHeight + 'px';
      if (!open) { void wrap.offsetHeight; wrap.style.maxHeight = '0px'; }
      label();
    });
    wrap.addEventListener('transitionend', function (e) {
      if (e.propertyName === 'max-height' && open) wrap.style.maxHeight = 'none';
    });
  }

  /* ---------- Browse / Archive ---------- */
  function initBrowse() {
    var a = C.archive, title = $('browse-title'), root = $('archive-list');
    a.title.forEach(function (p, i) {
      if (i) title.appendChild(document.createTextNode(' '));
      title.appendChild(el('span', p.style, p.text));
    });
    a.groups.forEach(function (g) {
      var box = el('section', 'group'), list = el('div', 'group-list');
      box.appendChild(el('h3', 'group-head', g.header));
      g.items.forEach(function (t) { list.appendChild(buildItem(t, t.button.primary === true)); });
      box.appendChild(list);
      root.appendChild(box);
    });
  }

  /* ---------- router (hash based, works on GitHub Pages) ---------- */
  var routes = { '/': { tpl: 'tpl-home', init: initHome }, '/browse': { tpl: 'tpl-browse', init: initBrowse } };

  function render() {
    var path = location.hash.replace(/^#/, '') || '/';
    var r = routes[path] || routes['/'];
    view.innerHTML = '';
    view.appendChild($(r.tpl).content.cloneNode(true));
    if (r.init) r.init();

    var links = navList.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('active', links[i].getAttribute('href') === '#' + (routes[path] ? path : '/'));
    }
    setMenu(false);
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  render();

  /* ---------- loading screen ---------- */
  (function () {
    var L = C.loader || {};
    var minTime = L.minTime || 800, maxTime = L.maxTime || 10000;
    var loader = $('loader'), fill = $('loader-fill'), logo = $('loader-logo');
    if (!loader) return;
    var t0 = Date.now(), finished = false;

    $('loader-name').textContent = C.site.name;
    $('loader-text').textContent = L.text || 'Loading...';
    logo.onerror = function () { logo.style.visibility = 'hidden'; };
    logo.src = C.images.logo;

    function finish() {
      if (finished) return;
      finished = true;
      var w = fill.getBoundingClientRect().width;
      fill.style.animation = 'none';
      fill.style.width = w + 'px';
      void fill.offsetWidth;
      fill.style.width = '100%';
      setTimeout(function () {
        document.body.classList.remove('is-loading');
        loader.classList.add('done');
        setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 700);
      }, 350);
    }
    function ready() { setTimeout(finish, Math.max(0, minTime - (Date.now() - t0))); }
    function afterLoad() {
      var fr = document.fonts && document.fonts.ready;
      if (fr && fr.then) fr.then(ready, ready); else ready();
    }

    if (document.readyState === 'complete') afterLoad();
    else window.addEventListener('load', afterLoad);
    setTimeout(finish, maxTime);   /* safety: never stay forever */
  })();
})();

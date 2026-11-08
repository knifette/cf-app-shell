/* Carbon Freaks storefront v2 - the public web at every width.
 *
 * One file draws the header, footer, homepage, shop grid, product page,
 * cart and checkout styling for phones and desktops alike. app-shell.js
 * loads it for every visitor who is not inside the native app; the old
 * phone skin and cf-web.js now run only in the app or with ?cf_v2=off.
 *
 * Product photos are vendor shots on white, so every part sits on a white
 * plate with object-fit:contain - the whole part always shows, never cropped.
 */
(function () {
  'use strict';
  if (window.__cfStore) return;
  window.__cfStore = 1;

  var D = document, R = D.documentElement;
  var FREESHIP = 600; // live WooCommerce free-shipping rule
  var LOGO = '/wp-content/uploads/2026/06/cf-logo.png';
  var GENS = [
    { slug: 's1000rr-2019-2022', label: 'S1000RR 2019–2022', from: 2019, to: 2022, hero: 964 },
    { slug: 's1000rr-2023-2024', label: 'S1000RR 2023–2024', from: 2023, to: 2024, hero: 3596 },
    { slug: 's1000rr-2025', label: 'S1000RR 2025+', from: 2025, to: 0, hero: 3640 }
  ];
  var GEN_URL = '/product-category/bmw/s1000rr/';
  var AREAS = [
    ['fairings-bodywork', 'Fairings and bodywork'],
    ['tank', 'Tank'],
    ['seat-tail', 'Seat and tail'],
    ['fenders-huggers', 'Fenders and huggers'],
    ['engine-covers', 'Engine and covers'],
    ['guards-swingarm', 'Guards and swingarm'],
    ['belly-sub-frame', 'Belly and sub-frame'],
    ['winglets-aero', 'Winglets and aero'],
    ['windshields', 'Windshields'],
    ['mirrors', 'Mirrors']
  ];
  /* sets: parts for the same area of the same bike, sold together at the plain sum of their prices */
  var KITS = [
    { area: 'Front fairing', gen: 's1000rr-2019-2022', ids: [948, 952, 950, 958] },
    { area: 'Front fairing', gen: 's1000rr-2025', ids: [3626, 3629, 3632] },
    { area: 'Side panel', gen: 's1000rr-2023-2024', ids: [3596, 3549] },
    { area: 'Side panel', gen: 's1000rr-2025', ids: [3640, 3549] },
    { area: 'Tail', gen: 's1000rr-2019-2022', ids: [972, 974, 976, 3560] },
    { area: 'Tank', gen: 's1000rr-2019-2022', ids: [962, 956, 3544] },
    { area: 'Tank', gen: 's1000rr-2023-2024', ids: [3592, 3544] },
    { area: 'Belly and subframe', gen: 's1000rr-2023-2024', ids: [3603, 3605] },
    { area: 'Belly and subframe', gen: 's1000rr-2025', ids: [3603, 3605] },
    { area: 'Engine guard', gen: 's1000rr-2019-2022', ids: [986, 990, 3572, 988, 3532] }
  ];
  var FEATURED = [964, 3636, 3520, 3589, 3554, 974, 3567, 3524];

  R.classList.add('cfv2');

  /* ------------------------------------------------------------------ */
  /* helpers                                                             */
  /* ------------------------------------------------------------------ */
  function $(s, r) { return (r || D).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function h(tag, cls, html) {
    var e = D.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function decode(s) { var t = D.createElement('textarea'); t.innerHTML = s || ''; return t.value; }
  function money(n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function short(name) {
    return decode(name).replace(/^BMW\s+S1000RR\s+Carbon\s+Fib(?:er|re)\s+/i, '').replace(/\s{2,}/g, ' ').trim();
  }
  function priceOf(p) {
    var pr = p.prices || {};
    return (+pr.price || 0) / Math.pow(10, pr.currency_minor_unit || 2);
  }
  function gensOf(slugs) {
    return GENS.filter(function (g) { return slugs.indexOf(g.slug) > -1; });
  }
  function slugsOf(p) { return (p.categories || []).map(function (c) { return c.slug; }); }
  function fitLabel(gens) {
    if (!gens.length) return '';
    var a = gens[0].from, last = gens[gens.length - 1];
    var b = last.to ? String(last.to) : '';
    if (gens.length === 1) return 'Fits ' + gens[0].label;
    return 'Fits S1000RR ' + a + '–' + (b || (last.from + '+'));
  }
  /* the visitor's bike, remembered on this device once they pick a year */
  function genBySlug(sl) { return GENS.filter(function (g) { return g.slug === sl; })[0] || null; }
  function myBike() {
    try { return genBySlug(localStorage.getItem('cfv2_bike')); } catch (e) { return null; }
  }
  function setBike(sl) {
    try { if (sl) localStorage.setItem('cfv2_bike', sl); else localStorage.removeItem('cfv2_bike'); } catch (e) {}
  }
  function fitsMine(slugs) {
    var b = myBike();
    return b ? slugs.indexOf(b.slug) > -1 : null;
  }
  function payIn4(n) {
    if (!(n >= 35 && n <= 2000)) return '';
    return 'or 4 interest-free payments of ' + money(Math.ceil(n / 4 * 100) / 100) + ' with Klarna or Afterpay';
  }
  function imgOf(p, big) {
    var im = p.images && p.images[0];
    if (!im) return '';
    return big ? (im.src || im.thumbnail) : (im.thumbnail || im.src);
  }
  var ICON = {
    cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2.2l2.1 11.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6.1"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
    split: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h3"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 10 17l9-10"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  };

  /* ------------------------------------------------------------------ */
  /* store data (Store API, cached for the visit)                        */
  /* ------------------------------------------------------------------ */
  var productsP = null;
  function products() {
    if (productsP) return productsP;
    try {
      var c = JSON.parse(sessionStorage.getItem('cfv2_products') || 'null');
      if (c && Date.now() - c.t < 10 * 60 * 1000) return (productsP = Promise.resolve(c.d));
    } catch (e) {}
    productsP = fetch('/wp-json/wc/store/v1/products?per_page=100').then(function (r) { return r.json(); }).then(function (d) {
      try { sessionStorage.setItem('cfv2_products', JSON.stringify({ t: Date.now(), d: d })); } catch (e) {}
      return d;
    });
    return productsP;
  }

  var nonce = null, cartState = null;
  function api(method, path, body) {
    var hd = { 'Content-Type': 'application/json' };
    if (nonce) hd.Nonce = nonce;
    return fetch('/wp-json/wc/store/v1/' + path, {
      method: method, credentials: 'same-origin', headers: hd,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      var n = r.headers.get('Nonce');
      if (n) nonce = n;
      return r.json().then(function (j) {
        if (!r.ok) throw j;
        return j;
      });
    });
  }
  function loadCart() {
    return api('GET', 'cart').then(function (c) { setCart(c); return c; });
  }
  function cartTotal(c) {
    var t = c && c.totals;
    if (!t) return 0;
    return (+t.total_items || 0) / Math.pow(10, t.currency_minor_unit || 2);
  }
  function setCart(c) {
    cartState = c;
    var n = c ? c.items_count : 0;
    $$('.cfv2-count').forEach(function (e) { e.textContent = n; e.hidden = !n; });
    $$('.cfv2-ctotal').forEach(function (e) { e.textContent = n ? money(cartTotal(c)) : 'Cart'; });
  }
  function addToCart(id, qty) {
    return (nonce ? Promise.resolve() : loadCart()).then(function () {
      return api('POST', 'cart/add-item', { id: +id, quantity: qty || 1 });
    }).then(function (c) { setCart(c); return c; });
  }

  /* ------------------------------------------------------------------ */
  /* upsells: parts that fit the same bike, other areas first            */
  /* ------------------------------------------------------------------ */
  function suggest(all, baseSlugs, excludeIds, n) {
    var gens = gensOf(baseSlugs).map(function (g) { return g.slug; });
    var areas = AREAS.map(function (a) { return a[0]; }).filter(function (a) { return baseSlugs.indexOf(a) > -1; });
    return all.filter(function (p) {
      if (excludeIds.indexOf(p.id) > -1 || !p.is_purchasable || !p.is_in_stock) return false;
      var s = slugsOf(p);
      return !gens.length || gens.some(function (g) { return s.indexOf(g) > -1; });
    }).map(function (p) {
      var s = slugsOf(p);
      var same = areas.some(function (a) { return s.indexOf(a) > -1; });
      return { p: p, k: (same ? 1 : 0) * 10000 - Math.min(priceOf(p), 600) };
    }).sort(function (a, b) { return a.k - b.k; }).slice(0, n).map(function (x) { return x.p; });
  }

  /* one product card - used on home, the drawer, PDP and cart */
  function card(p, small) {
    var a = h('article', 'cfv2-card' + (small ? ' is-small' : ''));
    var fit = fitLabel(gensOf(slugsOf(p)));
    var mine = fitsMine(slugsOf(p));
    var buy = p.is_purchasable && p.is_in_stock && p.type === 'simple';
    a.innerHTML =
      '<a class="plate" href="' + esc(p.permalink) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(imgOf(p)) + '" alt="" loading="lazy" width="600" height="600"></a>' +
      '<div class="meta"><h3><a href="' + esc(p.permalink) + '">' + esc(short(p.name)) + '</a></h3>' +
      (fit ? '<p class="fit' + (mine ? ' is-mine' : '') + '">' + (mine ? ICON.check + 'Fits your bike' : esc(fit)) + '</p>' : '') +
      '<div class="buy"><span class="price">' + money(priceOf(p)) + '</span>' +
      (buy ? '<button type="button" class="cfv2-add" data-id="' + p.id + '">Add to cart</button>'
           : '<a class="cfv2-add" href="' + esc(p.permalink) + '">View</a>') +
      '</div></div>';
    return a;
  }

  /* ------------------------------------------------------------------ */
  /* the "added to cart" drawer                                          */
  /* ------------------------------------------------------------------ */
  var drawer, lastFocus;
  function buildDrawer() {
    drawer = h('div', 'cfv2-drawer');
    drawer.hidden = true;
    drawer.innerHTML =
      '<div class="scrim" data-close></div>' +
      '<aside class="panel" role="dialog" aria-modal="true" aria-labelledby="cfv2-dt" tabindex="-1">' +
        '<div class="dhead"><h2 id="cfv2-dt">Added to your cart</h2><button type="button" class="x" data-close aria-label="Close">' + ICON.close + '</button></div>' +
        '<div class="dbody"></div>' +
      '</aside>';
    D.body.appendChild(drawer);
    drawer.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeDrawer(); });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) closeDrawer(); });
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    R.classList.remove('cfv2-lock');
    setTimeout(function () { drawer.hidden = true; }, 220);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function shipLine(total) {
    var left = FREESHIP - total;
    var pct = Math.max(0, Math.min(100, total / FREESHIP * 100));
    return '<div class="ship"><p>' + (left > 0
      ? 'Add <b>' + money(left) + '</b> more for free shipping.'
      : '<b>Free shipping</b> is on for this order.') +
      '</p><span class="bar"><i style="width:' + pct.toFixed(1) + '%"></i></span></div>';
  }
  function openDrawer(addedId, cart) {
    lastFocus = D.activeElement;
    var body = $('.dbody', drawer);
    var added = [].concat(addedId).map(Number);
    addedId = added[0];
    var lines = (cart.items || []).filter(function (i) { return added.indexOf(i.id) > -1; });
    var item = lines[0];
    var total = cartTotal(cart);
    var html = '';
    lines.forEach(function (it) {
      var im = it.images && it.images[0];
      html += '<div class="line"><span class="thumb">' + (im ? '<img src="' + esc(im.thumbnail || im.src) + '" alt="">' : '') + '</span>' +
        '<div><p class="nm">' + esc(short(it.name)) + '</p><p class="qt">Qty ' + it.quantity + '</p></div>' +
        '<p class="pr">' + money((+it.totals.line_subtotal) / Math.pow(10, it.totals.currency_minor_unit || 2)) + '</p></div>';
    });
    var bike = myBike();
    if (item && bike && cart.__slugs && cart.__slugs.indexOf(bike.slug) < 0) {
      html += '<p class="cfv2-warn">This part is listed for ' + esc(fitLabel(gensOf(cart.__slugs)).replace(/^Fits /, '')) +
        ', not your ' + esc(bike.label) + '. Sales are final, so <a href="/contact/">ask us</a> if you are not sure.</p>';
    }
    html += '<div class="sub"><span>Cart subtotal (' + cart.items_count + (cart.items_count === 1 ? ' item' : ' items') + ')</span><b>' + money(total) + '</b></div>';
    html += shipLine(total);
    html += '<div class="acts"><a class="cfv2-btn" href="/checkout/">Check out</a><a class="cfv2-btn ghost" href="/cart/">View cart</a></div>';
    html += '<div class="more"><h3>Fits the same bike</h3><div class="mgrid" aria-busy="true"></div></div>';
    body.innerHTML = html;
    drawer.hidden = false;
    R.classList.add('cfv2-lock');
    requestAnimationFrame(function () { drawer.classList.add('open'); $('.panel', drawer).focus(); });

    products().then(function (all) {
      var base = all.filter(function (p) { return p.id === +addedId; })[0];
      var inCart = (cart.items || []).map(function (i) { return i.id; });
      var list = suggest(all, base ? slugsOf(base) : [], inCart, 3);
      if (added.length > 1) list = [];
      var g = $('.mgrid', drawer);
      if (!g) return;
      g.removeAttribute('aria-busy');
      if (!list.length) { $('.more', drawer).remove(); return; }
      list.forEach(function (p) { g.appendChild(card(p, true)); });
    });
  }

  /* every "Add to cart" on the site goes through here */
  function wireAdds() {
    D.addEventListener('click', function (e) {
      var b = e.target.closest('button.cfv2-add[data-id], a.add_to_cart_button[data-product_id]');
      if (!b) return;
      var id = b.getAttribute('data-id') || b.getAttribute('data-product_id');
      if (!id) return;
      e.preventDefault();
      e.stopPropagation();
      busy(b, true);
      addToCart(id, 1).then(withSlugs(id)).then(function (c) { busy(b, false); openDrawer(id, c); })
        .catch(function () { busy(b, false); location.href = '/?add-to-cart=' + id; });
    }, true);
  }
  function kitParts(k, byId) {
    return k.ids.map(function (id) { return byId[id]; }).filter(function (p) { return p && p.is_purchasable && p.is_in_stock; });
  }
  function kitTotal(parts) { return parts.reduce(function (t, p) { return t + priceOf(p); }, 0); }
  function kitsFor(gen, partId) {
    return KITS.filter(function (k) { return (!gen || k.gen === gen) && (!partId || k.ids.indexOf(partId) > -1); });
  }
  D.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-kit]');
    if (!b) return;
    var ids = b.getAttribute('data-kit').split(',').map(Number);
    busy(b, true);
    loadCart().then(function (c) {
      var have = (c.items || []).map(function (i) { return i.id; });
      return ids.filter(function (id) { return have.indexOf(id) < 0; }).reduce(function (pr, id) {
        return pr.then(function () { return addToCart(id, 1); });
      }, Promise.resolve(c));
    }).then(withSlugs(ids[0])).then(function (c) { busy(b, false); openDrawer(ids, c); })
      .catch(function () { busy(b, false); location.href = '/cart/'; });
  });
  function kitCard(k, parts) {
    var g = genBySlug(k.gen), t = kitTotal(parts);
    var a = h('article', 'cfv2-kit');
    a.innerHTML = '<div class="ims">' + parts.slice(0, 4).map(function (p) {
        return '<a href="' + esc(p.permalink) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(imgOf(p)) + '" alt="" loading="lazy" width="300" height="300"></a>';
      }).join('') + '</div>' +
      '<h3>' + esc(k.area) + ' set</h3><p class="kb">' + esc(g.label) + ' · ' + parts.length + ' parts</p>' +
      '<ul>' + parts.map(function (p) {
        return '<li><a href="' + esc(p.permalink) + '">' + esc(short(p.name)) + '</a><span>' + money(priceOf(p)) + '</span></li>';
      }).join('') + '</ul>' +
      '<p class="kt"><b>' + money(t) + '</b>' + (t >= FREESHIP ? '<span class="free">' + ICON.truck + 'Ships free</span>' : '') + '</p>' +
      '<button type="button" class="kadd" data-kit="' + parts.map(function (p) { return p.id; }).join(',') + '">Add all ' + parts.length + ' to cart</button>';
    return a;
  }

  /* attach the added part's categories so the drawer can check it against the visitor's bike */
  function withSlugs(id) {
    return function (c) {
      return products().then(function (all) {
        var p = all.filter(function (x) { return x.id === +id; })[0];
        c.__slugs = p ? slugsOf(p) : null;
        return c;
      }, function () { return c; });
    };
  }
  function busy(b, on) {
    if (on) { b.setAttribute('aria-busy', 'true'); b.__t = b.textContent; b.textContent = 'Adding…'; b.disabled = true; }
    else { b.removeAttribute('aria-busy'); b.textContent = b.__t || 'Add to cart'; b.disabled = false; }
  }

  /* ------------------------------------------------------------------ */
  /* header + footer (every page)                                        */
  /* ------------------------------------------------------------------ */
  function chrome() {
    var bar = h('div', 'cfv2-ann', 'Free shipping on US orders over ' + money(FREESHIP) + '<span> Pay over time with Klarna, Affirm or Afterpay</span>');
    var head = h('header', 'cfv2-head');
    head.innerHTML =
      '<div class="w">' +
        '<a class="logo" href="/" aria-label="Carbon Freaks home"><img src="' + LOGO + '" alt="Carbon Freaks" width="160" height="30"></a>' +
        '<nav class="main" aria-label="Main">' +
          '<a href="/shop/">Shop all</a>' +
          GENS.map(function (g) { return '<a href="' + GEN_URL + g.slug + '/">' + g.label.replace('S1000RR ', '') + '</a>'; }).join('') +
          '<a href="/contact/">Fitment help</a>' +
        '</nav>' +
        '<a class="cart" href="/cart/" aria-label="Cart">' + ICON.cart + '<span class="cfv2-count" hidden>0</span><span class="cfv2-ctotal">Cart</span></a>' +
        '<button type="button" class="burger" aria-label="Menu" aria-expanded="false" aria-controls="cfv2-menu">' + ICON.menu + '</button>' +
      '</div>' +
      '<div class="menu" id="cfv2-menu" hidden>' +
        '<p class="mh">Shop by bike</p>' +
        GENS.map(function (g) { return '<a class="mg" href="' + GEN_URL + g.slug + '/">' + g.label + '</a>'; }).join('') +
        '<a class="mg" href="/shop/">All parts</a>' +
        '<p class="mh">Help</p>' +
        '<a href="/contact/">Fitment help</a><a href="/shipping-policy/">Shipping</a><a href="/track-order/">Track an order</a>' +
      '</div>';
    D.body.insertBefore(head, D.body.firstChild);
    D.body.insertBefore(bar, head);

    bikeBar(head);

    var burger = $('.burger', head), menu = $('.menu', head);
    burger.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
      burger.innerHTML = open ? ICON.close : ICON.menu;
    });
    var here = location.pathname;
    $$('.main a, .menu a', head).forEach(function (a) {
      if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
    });

    var foot = h('footer', 'cfv2-foot');
    foot.innerHTML =
      '<div class="w">' +
        '<div class="fb"><img src="' + LOGO + '" alt="Carbon Freaks" width="140" height="26">' +
        '<p>Carbon fiber parts for the BMW S1000RR, shipped anywhere in the United States.</p></div>' +
        '<nav aria-label="Shop"><p>Shop</p><a href="/shop/">All parts</a>' +
          GENS.map(function (g) { return '<a href="' + GEN_URL + g.slug + '/">' + g.label + '</a>'; }).join('') + '</nav>' +
        '<nav aria-label="Help"><p>Help</p><a href="/contact/">Fitment help</a><a href="/shipping-policy/">Shipping</a><a href="/refund-returns/">Final sale policy</a><a href="/track-order/">Track an order</a><a href="/about/">About</a></nav>' +
        '<div class="pay"><p>Pay with</p><span>Visa, Mastercard, Amex, Discover, Google Pay, PayPal, Venmo, Klarna, Affirm, Afterpay</span></div>' +
      '</div>' +
      '<p class="copy">© ' + new Date().getFullYear() + ' Carbon Freaks</p>';
    D.body.appendChild(foot);
  }

  /* "Your bike" bar: shows the remembered year, or asks for it */
  function bikeBar(head) {
    var m = location.pathname.match(/\/product-category\/bmw\/s1000rr\/([\w-]+)\//);
    if (m && genBySlug(m[1])) setBike(m[1]);
    var bc = D.body.className;
    if (/woocommerce-(cart|checkout)/.test(bc)) return;
    var quiet = /(^|\s)home(\s|$)|post-type-archive-product|tax-product_cat|woocommerce-shop/.test(bc);
    var bar = h('div', 'cfv2-bike');
    function draw(picking) {
      var b = myBike();
      if (!b && quiet && !picking) { bar.hidden = true; return; }
      bar.hidden = false;
      if (b && !picking) {
        bar.innerHTML = '<div class="w one"><p>Your bike: <b>' + esc(b.label) + '</b></p>' +
          '<a href="' + GEN_URL + b.slug + '/">Shop its parts</a>' +
          '<button type="button" data-pick>Change</button></div>';
      } else {
        bar.innerHTML = '<div class="w"><p>' + (b ? 'Change your bike:' : 'Pick your bike:') + '</p><div class="opts">' +
          GENS.map(function (g) {
            return '<button type="button" data-bike="' + g.slug + '"' + (b && b.slug === g.slug ? ' aria-pressed="true"' : '') + '>' + g.label.replace('S1000RR ', '') + '</button>';
          }).join('') + (b ? '<button type="button" data-bike="">Clear</button>' : '') + '</div></div>';
      }
    }
    bar.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t) return;
      if (t.hasAttribute('data-pick')) { draw(true); return; }
      var sl = t.getAttribute('data-bike');
      setBike(sl);
      if (sl) location.href = GEN_URL + sl + '/';
      else location.reload();
    });
    draw(false);
    head.parentNode.insertBefore(bar, head.nextSibling);
  }

  /* ------------------------------------------------------------------ */
  /* homepage                                                            */
  /* ------------------------------------------------------------------ */
  function home() {
    var page = $('[data-elementor-type="wp-page"]');
    var host = $('#content') || (page && page.parentNode);
    if (!host || $('#cfv2-home')) return;
    R.classList.add('cfv2-home');
    var root = h('main', null);
    root.id = 'cfv2-home';
    root.innerHTML =
      '<section class="hero"><div class="w">' +
        '<p class="huge" aria-hidden="true">S1000RR</p>' +
        '<h1>Carbon fiber parts for the BMW S1000RR</h1>' +
        '<p class="lede">Pick your bike. You only see parts that fit it.</p>' +
        '<div class="gens">' + GENS.map(function (g) {
          return '<a class="gen" href="' + GEN_URL + g.slug + '/" data-gen="' + g.slug + '">' +
            '<span class="plate"><img alt="" width="600" height="600"></span>' +
            '<span class="gt"><b>' + g.label + '</b><span class="gs">&nbsp;</span></span>' +
            '<span class="go">Shop parts</span></a>';
        }).join('') + '</div>' +
        '<p class="ask">Not sure which year you ride? <a href="/contact/">Ask us first</a>. Every sale is final, so we confirm fit before you buy.</p>' +
      '</div></section>' +
      '<section class="sec"><div class="w"><div class="sh"><h2>Featured parts</h2><a href="/shop/">See all 53 parts</a></div><div class="grid" aria-busy="true"></div></div></section>' +
      '<section class="sec kits" hidden><div class="w"><div class="sh"><h2>Buy it as a set</h2></div><p class="kl">Parts for the same area of your bike, added to your cart in one tap. The set price is the parts added up.</p><div class="cfv2-kits"></div></div></section>' +
      '<section class="sec"><div class="w"><div class="sh"><h2>Shop by part</h2></div><div class="areas" aria-busy="true"></div></div></section>' +
      '<section class="facts"><div class="w">' +
        '<p>' + ICON.truck + '<span><b>Free US shipping over ' + money(FREESHIP) + '</b>We ship to all 50 states. Smaller orders pay shipping at checkout.</span></p>' +
        '<p>' + ICON.split + '<span><b>Pay over time</b>Klarna, Affirm and Afterpay at checkout.</span></p>' +
        '<p>' + ICON.chat + '<span><b>Fit confirmed first</b>Sales are final. <a href="/contact/">Send us your year</a> and we check it.</span></p>' +
        '<p>' + ICON.lock + '<span><b>Secure checkout</b>Cards, Google Pay and PayPal.</span></p>' +
      '</div></section>';
    if (page) page.parentNode.insertBefore(root, page);
    else host.insertBefore(root, host.firstChild);

    products().then(function (all) {
      var byId = {};
      all.forEach(function (p) { byId[p.id] = p; });

      var bike = myBike();
      $$('.gen', root).forEach(function (a) {
        var g = GENS.filter(function (x) { return x.slug === a.getAttribute('data-gen'); })[0];
        if (bike && bike.slug === g.slug) { a.classList.add('is-mine'); $('.gt', a).insertAdjacentHTML('afterbegin', '<span class="tag">Your bike</span>'); }
        var list = all.filter(function (p) { return slugsOf(p).indexOf(g.slug) > -1; });
        var low = Math.min.apply(null, list.map(priceOf));
        var hp = byId[g.hero] || list[0];
        if (hp) $('img', a).src = imgOf(hp, true);
        if (list.length) $('.gs', a).textContent = list.length + ' parts from ' + money(low).replace(/\.\d\d$/, '');
      });

      var grid = $('.grid', root);
      var picks = FEATURED.map(function (id) { return byId[id]; }).filter(Boolean);
      if (bike) {
        var fits = function (p) { return slugsOf(p).indexOf(bike.slug) > -1 && p.is_purchasable && p.is_in_stock; };
        var rest = all.filter(function (p) { return fits(p) && FEATURED.indexOf(p.id) < 0; })
          .sort(function (a, b) { return priceOf(b) - priceOf(a); });
        picks = picks.filter(fits).concat(rest).slice(0, 8);
        var sh = grid.parentNode;
        $('.sh h2', sh).textContent = 'Parts for your ' + bike.label;
        $('.sh a', sh).href = GEN_URL + bike.slug + '/';
        $('.sh a', sh).textContent = 'See all parts for your bike';
      }
      picks.forEach(function (p) { grid.appendChild(card(p)); });
      grid.removeAttribute('aria-busy');

      // sets: the visitor's bike only, or a mix across the three years
      var ks = bike ? kitsFor(bike.slug) : GENS.reduce(function (acc, g, i) {
        return acc.concat(kitsFor(g.slug).slice(0, 2));
      }, []);
      var kbox = $('.cfv2-kits', root);
      ks.slice(0, 6).forEach(function (k) {
        var parts = kitParts(k, byId);
        if (parts.length > 1) kbox.appendChild(kitCard(k, parts));
      });
      if (kbox.children.length) $('.kits', root).hidden = false;

      var box = $('.areas', root);
      AREAS.forEach(function (ar) {
        var list = all.filter(function (p) { return slugsOf(p).indexOf(ar[0]) > -1; });
        if (!list.length) return;
        var pick = list.slice().sort(function (a, b) { return priceOf(b) - priceOf(a); })[0];
        var a = h('a', 'area');
        a.href = '/product-category/' + ar[0] + '/';
        a.innerHTML = '<span class="plate"><img src="' + esc(imgOf(pick)) + '" alt="" loading="lazy" width="300" height="300"></span>' +
          '<span class="an">' + ar[1] + '</span><span class="ac">' + list.length + (list.length === 1 ? ' part' : ' parts') + '</span>';
        box.appendChild(a);
      });
      box.removeAttribute('aria-busy');
    }).catch(function () {
      $('.grid', root).innerHTML = '<p>Parts did not load. <a href="/shop/">Open the full parts list</a>.</p>';
    });
  }

  /* ------------------------------------------------------------------ */
  /* shop + category pages                                               */
  /* ------------------------------------------------------------------ */
  function shop() {
    R.classList.add('cfv2-shop');
    var path = location.pathname;
    var list = $('ul.products');
    var anchor = $('.woocommerce-products-header') || $('.woocommerce-notices-wrapper') || (list && list.parentNode.firstChild);
    if (anchor && !$('.cfv2-chips')) {
      var chips = h('nav', 'cfv2-chips');
      chips.setAttribute('aria-label', 'Filter by bike');
      chips.innerHTML = '<a href="/shop/">All bikes</a>' + GENS.map(function (g) {
        return '<a href="' + GEN_URL + g.slug + '/">' + g.label + '</a>';
      }).join('');
      var areas = h('nav', 'cfv2-chips is-area');
      areas.setAttribute('aria-label', 'Filter by part');
      areas.innerHTML = AREAS.map(function (a) { return '<a href="/product-category/' + a[0] + '/">' + a[1] + '</a>'; }).join('');
      $$('a', chips).concat($$('a', areas)).forEach(function (a) {
        if (a.getAttribute('href') === path) a.setAttribute('aria-current', 'page');
      });
      anchor.parentNode.insertBefore(areas, anchor.nextSibling);
      anchor.parentNode.insertBefore(chips, areas);
    }
    decorateCards();
  }
  function decorateCards() {
    $$('ul.products li.product').forEach(function (li) {
      if (li.__cf) return;
      li.__cf = 1;
      var t = $('.woocommerce-loop-product__title', li);
      if (t) t.textContent = short(t.textContent);
      var m = (li.className.match(/product_cat-[\w-]+/g) || []).map(function (c) { return c.slice(12); });
      var fit = fitLabel(gensOf(m));
      if (fit && t && !$('.fit', li)) {
        var f = h('p', 'fit');
        if (fitsMine(m)) { f.className = 'fit is-mine'; f.innerHTML = ICON.check + 'Fits your bike'; }
        else f.textContent = fit;
        t.parentNode.insertBefore(f, t.nextSibling);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* product page                                                        */
  /* ------------------------------------------------------------------ */
  function pdp() {
    R.classList.add('cfv2-pdp');
    var prod = $('div.product[id^="product-"]') || $('div.product');
    if (!prod) return;
    var id = +((prod.id || '').replace('product-', '')) || 0;
    var cats = (prod.className.match(/product_cat-[\w-]+/g) || []).map(function (c) { return c.slice(12); });
    var gens = gensOf(cats);

    var title = $('.product_title', prod);
    if (title) title.textContent = short(title.textContent);

    var summary = $('.summary', prod);
    var sd = summary && $('.woocommerce-product-details__short-description', summary);
    if (sd && title && sd.textContent.length < 120 && sd.textContent.toLowerCase().indexOf(title.textContent.toLowerCase()) > -1) sd.hidden = true;
    var price = summary && $('p.price', summary);
    if (price && !$('.cfv2-fit', summary)) {
      var fit = h('div', 'cfv2-fit');
      var bike = myBike(), mine = fitsMine(cats);
      if (bike && mine === false && gens.length) {
        fit.className = 'cfv2-fit is-no';
        fit.innerHTML = '<span class="ic">!</span><p><b>Not for your ' + esc(bike.label) + '</b>' +
          '<span>This part is listed for ' + esc(fitLabel(gens).replace(/^Fits /, '')) + '. <a href="' + GEN_URL + bike.slug + '/">See parts for your bike</a> or <a href="/contact/">ask us</a>.</span></p>';
      } else {
        fit.innerHTML = ICON.check + '<p><b>' + esc(mine ? 'Fits your ' + bike.label : (gens.length ? fitLabel(gens) : 'Check fitment')) + '</b>' +
          '<span>Not sure? <a href="/contact/">Ask us to confirm</a> before you buy. Sales are final.</span></p>';
      }
      price.parentNode.insertBefore(fit, price.nextSibling);
      products().then(function (all) {
        var me = all.filter(function (p) { return p.id === id; })[0];
        var line = me && payIn4(priceOf(me));
        if (line && !$('.cfv2-p4', summary)) price.insertAdjacentHTML('afterend', '<p class="cfv2-p4">' + esc(line) + '</p>');
      }).catch(function () {});
    }

    var form = summary && $('form.cart', summary);
    if (form) {
      var btn = $('button[name="add-to-cart"], button.single_add_to_car_button, button.single_add_to_cart_button', form);
      if (btn) btn.textContent = 'Add to cart';
      var pts = h('ul', 'cfv2-points');
      pts.innerHTML =
        '<li>' + ICON.truck + 'Free US shipping over ' + money(FREESHIP) + '</li>' +
        '<li>' + ICON.split + 'Pay over time with Klarna, Affirm or Afterpay</li>' +
        '<li>' + ICON.lock + 'Secure checkout</li>';
      form.parentNode.insertBefore(pts, form.nextSibling);

      form.addEventListener('submit', function (e) {
        var pid = (btn && btn.value) || id;
        if (!pid) return;
        e.preventDefault();
        var q = +(($('input.qty', form) || {}).value) || 1;
        busy(btn, true);
        addToCart(pid, q).then(withSlugs(pid)).then(function (c) { busy(btn, false); openDrawer(pid, c); })
          .catch(function () { busy(btn, false); form.submit(); });
      });

      /* phone: keep the buy button in reach once the real one scrolls away */
      if (btn && 'IntersectionObserver' in window) {
        var sticky = h('div', 'cfv2-sticky');
        sticky.innerHTML = '<div><p class="sn">' + esc(title ? title.textContent : '') + '</p><p class="sp">' + (price ? esc(price.textContent.trim()) : '') + '</p></div>' +
          '<button type="button" class="cfv2-btn">Add to cart</button>';
        D.body.appendChild(sticky);
        $('button', sticky).addEventListener('click', function () {
          if (form.requestSubmit) form.requestSubmit(btn); else btn.click();
        });
        new IntersectionObserver(function (en) {
          sticky.classList.toggle('on', !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
        }).observe(btn);
      }
    }

    /* the set this part belongs to */
    if (summary && form) products().then(function (all) {
      var byId = {};
      all.forEach(function (p) { byId[p.id] = p; });
      var bike = myBike();
      var ks = kitsFor(null, id).sort(function (a, b) { return (bike && b.gen === bike.slug) - (bike && a.gen === bike.slug); });
      var k = ks[0], parts = k && kitParts(k, byId);
      if (!parts || parts.length < 2 || $('.cfv2-kitbox', summary)) return;
      var t = kitTotal(parts), box = h('div', 'cfv2-kitbox');
      box.innerHTML = '<p class="kh"><b>Make it a set</b><span>' + esc(k.area) + ' set · ' + esc(genBySlug(k.gen).label) + '</span></p>' +
        '<ul>' + parts.map(function (p) {
          return '<li' + (p.id === id ? ' class="is-this"' : '') + '><img src="' + esc(imgOf(p)) + '" alt="" loading="lazy" width="80" height="80"><span>' + esc(short(p.name)) + (p.id === id ? ' <i>this part</i>' : '') + '</span><b>' + money(priceOf(p)) + '</b></li>';
        }).join('') + '</ul>' +
        '<p class="kt"><span>' + parts.length + ' parts</span><b>' + money(t) + '</b></p>' +
        (t >= FREESHIP ? '<p class="free">' + ICON.truck + 'The set ships free</p>' : '') +
        '<button type="button" class="kadd" data-kit="' + parts.map(function (p) { return p.id; }).join(',') + '">Add the set to cart</button>';
      form.parentNode.insertBefore(box, form.nextSibling);
    }).catch(function () {});

    /* "Complete the build": parts that fit the same bike, from other areas */
    var after = $('.woocommerce-tabs', prod) || $('.related', prod) || prod.lastElementChild;
    products().then(function (all) {
      var list = suggest(all, cats, [id], 4);
      if (!list.length || !after) return;
      var sec = h('section', 'cfv2-more');
      sec.innerHTML = '<h2>Complete the build</h2><p>More carbon for the same bike.</p><div class="grid"></div>';
      list.forEach(function (p) { $('.grid', sec).appendChild(card(p)); });
      after.parentNode.insertBefore(sec, after.nextSibling);
    });
  }

  /* ------------------------------------------------------------------ */
  /* cart                                                                */
  /* ------------------------------------------------------------------ */
  function cart() {
    R.classList.add('cfv2-cart');
    var host = $('.entry-content > .woocommerce') || $('.woocommerce');
    if (!host) return;
    loadCart().then(function (c) {
      if (!c.items_count) return;
      var head = $('.cart-collaterals', host);
      if (head && !$('.cfv2-ship', host)) {
        var s = h('div', 'cfv2-ship');
        s.innerHTML = shipLine(cartTotal(c));
        head.insertBefore(s, head.firstChild);
      }
      return products().then(function (all) {
        var ids = c.items.map(function (i) { return i.id; });
        var slugs = [];
        all.forEach(function (p) { if (ids.indexOf(p.id) > -1) slugs = slugs.concat(slugsOf(p)); });
        var list = suggest(all, slugs, ids, 4);
        if (!list.length) return;
        var sec = h('section', 'cfv2-more');
        sec.innerHTML = '<h2>Add to this order</h2><p>These fit the same bike.</p><div class="grid"></div>';
        list.forEach(function (p) { $('.grid', sec).appendChild(card(p)); });
        host.appendChild(sec);
      });
    }).catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* stylesheet                                                          */
  /* ------------------------------------------------------------------ */
  var CSS = `
html.cfv2{--ink:#141518;--mute:#565A62;--line:#D9DBDF;--ground:#EEEFF1;--plate:#FFFFFF;--night:#17181B;--night2:#212328;--night-ink:#E8E9EC;--night-mute:#A2A6AE;--red:#D0140C;--red2:#A80F08;--g:clamp(16px,4vw,48px);--r:6px;--disp:"Archivo",system-ui,sans-serif;}
html.cfv2,html.cfv2 body{background:var(--ground)!important;}
html.cfv2 body{font-family:var(--disp)!important;color:var(--ink);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased;}
html.cfv2 body *{font-family:inherit;}
/* the site's custom CSS paints #page/#content dark; take them back */
html.cfv2 #page,html.cfv2 #content,html.cfv2 .site-content,html.cfv2 #primary,html.cfv2 .ast-container,html.cfv2 .site-main,html.cfv2 article{background:transparent!important;color:var(--ink)!important;}
html.cfv2 #page{background:var(--ground)!important;}
html.cfv2 #content,html.cfv2 #content .woocommerce-Tabs-panel,html.cfv2 #content .summary{color:var(--ink)!important;}
html.cfv2 #content .price,html.cfv2 #content .price .amount,html.cfv2 #content .price bdi{color:var(--ink)!important;}
#cfv2-home .hero::before,#cfv2-home .hero::after{content:none!important;display:none!important;background:none!important;}
#cfv2-home .hero h1{color:#fff!important;}
html.cfv2 #primary,html.cfv2 #secondary{border:0!important;}
html.cfv2 #cf-filter-btn{display:none!important;}
html.cfv2-cart .cart_totals .StripeElement,html.cfv2-cart .cart_totals [id*="bnpl"],html.cfv2-cart .cart_totals [class*="bnpl"]{display:none!important;}
.cfv2-more{clear:both;}
html.cfv2 .shop_table .product-quantity{margin-left:4px;}
html.cfv2 .woocommerce-message:focus,html.cfv2 .woocommerce-info:focus,html.cfv2 .woocommerce-notices-wrapper:focus{outline:none!important;}
/* sets */
#cfv2-home .kl{margin:-6px 0 20px;color:var(--mute);font-size:15px;max-width:60ch;}
.cfv2-kits{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;}
.cfv2-kit{display:flex;flex-direction:column;gap:10px;background:#fff;border-radius:var(--r);box-shadow:0 0 0 1px var(--line);padding:16px;}
.cfv2-kit .ims{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:4px;}
.cfv2-kit .ims a{display:block;aspect-ratio:1/1;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #EEF0F2;}
html.cfv2 #ast-scroll-top{background:var(--ink)!important;color:#fff!important;border-radius:var(--r)!important;}
.cfv2-kit .ims img{width:100%;height:100%;object-fit:contain;padding:8%;box-sizing:border-box;display:block;}
.cfv2-kit h3{margin:0;font-size:21px;font-weight:800;font-style:italic;font-stretch:112%;letter-spacing:-.01em;}
.cfv2-kit .kb{margin:-6px 0 0;font-size:14px;color:var(--mute);}
.cfv2-kit ul{list-style:none;margin:0;padding:0;border-top:1px solid var(--line);}
.cfv2-kit li{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px solid #EEF0F2;font-size:14.5px;}
.cfv2-kit li a{color:var(--ink)!important;text-decoration:none;}
.cfv2-kit li a:hover{text-decoration:underline;}
.cfv2-kit li span{color:var(--mute);font-variant-numeric:tabular-nums;white-space:nowrap;}
.cfv2-kit .kt,.cfv2-kitbox .kt{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:2px 0 0;margin-top:auto;}
.cfv2-kit .kt b{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;}
.cfv2-kit .free,.cfv2-kitbox .free{display:inline-flex;align-items:center;gap:6px;color:#17803D;font-weight:650;font-size:14px;}
.cfv2-kit .free svg,.cfv2-kitbox .free svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;}
.cfv2 .kadd{min-height:48px;width:100%;border:0;border-radius:var(--r);background:var(--ink);color:#fff;font:inherit;font-size:16px;font-weight:700;cursor:pointer;}
.cfv2 .kadd:hover{background:#000;}
.cfv2 .kadd[aria-busy]{opacity:.7;}
.cfv2-kitbox{margin:18px 0;padding:16px;background:#fff;border-radius:var(--r);box-shadow:0 0 0 1px var(--line);}
.cfv2-kitbox .kh{margin:0 0 8px;display:flex;flex-direction:column;}
.cfv2-kitbox .kh b{font-size:18px;font-weight:800;font-style:italic;font-stretch:112%;}
.cfv2-kitbox .kh span{font-size:14px;color:var(--mute);}
.cfv2-kitbox ul{list-style:none;margin:0 0 10px!important;padding:0;}
.cfv2-kitbox li{display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #EEF0F2;font-size:14.5px;margin:0!important;}
.cfv2-kitbox li img{width:44px;height:44px;object-fit:contain;background:#fff;box-shadow:0 0 0 1px #EEF0F2;border-radius:4px;padding:3px;box-sizing:border-box;flex:0 0 auto;}
.cfv2-kitbox li span{flex:1;min-width:0;}
.cfv2-kitbox li i{font-style:normal;font-size:12.5px;color:var(--mute);margin-left:4px;}
.cfv2-kitbox li b{font-weight:600;font-variant-numeric:tabular-nums;}
.cfv2-kitbox .kt span{color:var(--mute);}
.cfv2-kitbox .kt b{font-size:20px;font-weight:800;font-variant-numeric:tabular-nums;}
.cfv2-kitbox .free{margin:4px 0 10px;}
.cfv2-kitbox .kadd{margin-top:8px;}
html.cfv2 .woocommerce-message .button,html.cfv2 .woocommerce-info .button{background:var(--ink)!important;color:#fff!important;border-radius:var(--r)!important;font-weight:650!important;}
html.cfv2-cart .cart_totals td{text-align:right!important;}
html.cfv2-cart .coupon .button{white-space:nowrap;}
@media (min-width:901px){
  .cfv2-chips{flex-wrap:wrap;overflow:visible;}
}
@media (max-width:900px){
  .cfv2-chips{-webkit-mask-image:linear-gradient(90deg,#000 85%,transparent);mask-image:linear-gradient(90deg,#000 85%,transparent);padding-right:32px;}
}
@media (max-width:640px){
  .cfv2-bike .one{flex-wrap:nowrap;}
  .cfv2-bike .one p{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .cfv2-bike .one > a{display:none;}
}
/* your-bike bar */
.cfv2-bike{background:#fff;box-shadow:inset 0 -1px 0 var(--line);}
.cfv2-bike .w{display:flex;align-items:center;gap:8px 16px;flex-wrap:wrap;min-height:52px;padding-top:6px;padding-bottom:6px;}
.cfv2-bike p{margin:0;font-size:15px;color:var(--mute);}
.cfv2-bike p b{color:var(--ink);}
.cfv2-bike a,.cfv2-bike button{min-height:40px;display:inline-flex;align-items:center;padding:0 14px;border-radius:999px;font:inherit;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;}
.cfv2-bike a{background:var(--ink);color:#fff!important;}
.cfv2-bike button{background:transparent;border:0;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink);}
.cfv2-bike button:hover{box-shadow:inset 0 0 0 1.5px var(--ink);}
.cfv2-bike button[aria-pressed="true"]{background:var(--ink);color:#fff;box-shadow:none;}
.cfv2-bike .opts{display:flex;gap:8px;flex-wrap:wrap;}
.cfv2 .fit.is-mine{display:flex;align-items:center;gap:4px;color:#17803D!important;font-weight:600;}
.cfv2 .fit.is-mine svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.5;flex:0 0 auto;}
#cfv2-home .gen.is-mine{box-shadow:0 0 0 3px var(--red);}
#cfv2-home .gen .tag{align-self:flex-start;margin-bottom:4px;padding:2px 8px;border-radius:999px;background:var(--red);color:#fff;font-size:12px;font-weight:700;}
html.cfv2-pdp .cfv2-p4{margin:-6px 0 14px!important;font-size:15px;color:var(--mute);}
html.cfv2-pdp .cfv2-fit.is-no{box-shadow:0 0 0 1.5px var(--red);}
html.cfv2-pdp .cfv2-fit.is-no .ic{flex:0 0 24px;width:24px;height:24px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;}
.cfv2-warn{margin:0 0 14px;padding:12px 14px;border-radius:var(--r);background:#FDECEB;color:#7A0D07!important;font-size:14px;line-height:1.45;}
.cfv2-warn a{color:inherit!important;font-weight:700;}
/* product page: one buy button; description sits under the photos */
html.cfv2-pdp .summary > .ppc-button-wrapper,html.cfv2-pdp .summary > .ppcp-messages{display:none!important;}
html.cfv2-pdp div.product > .summary{grid-row:1 / span 2;}
html.cfv2-pdp div.product > .woocommerce-tabs{grid-column:1;margin-top:8px!important;}
/* cart: free-shipping box fills the space left of the totals */
html.cfv2-cart .cart-collaterals{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;align-items:start;}
html.cfv2-cart .cart-collaterals .cart_totals{width:auto!important;float:none!important;grid-column:2;grid-row:1;}
html.cfv2-cart .cart-collaterals .cfv2-ship{grid-column:1;grid-row:1;margin:0;}
html.cfv2-cart .cart-collaterals::before,html.cfv2-cart .cart-collaterals::after{display:none!important;}
html.cfv2 #billing_company_field{display:none!important;}
/* fitment page is its own Elementor canvas: drop its header/footer, fix its colours */
body.page-template-elementor_canvas .elementor header.head,body.page-template-elementor_canvas .elementor footer.foot{display:none!important;}
body.page-template-elementor_canvas section.intro{padding-top:72px!important;padding-bottom:64px!important;min-height:0!important;}
body.page-template-elementor_canvas section.intro h1{color:#fff!important;}
body.page-template-elementor_canvas .form-card h2{color:#fff!important;}
body.page-template-elementor_canvas .cinfo .block > :first-child{color:var(--mute)!important;}
/* contact page: same type and colours as the rest of the store */
body.page-template-elementor_canvas section.intro{background:var(--night)!important;background-image:none!important;}
body.page-template-elementor_canvas section.intro .eyebrow{display:none!important;}
body.page-template-elementor_canvas section.intro h1{font-family:var(--disp)!important;font-size:clamp(40px,6vw,76px)!important;line-height:.95!important;font-weight:850!important;font-style:italic!important;font-stretch:118%;letter-spacing:-.025em!important;}
body.page-template-elementor_canvas section.intro p{color:var(--night-mute)!important;}
body.page-template-elementor_canvas .cinfo .k{font-family:var(--disp)!important;font-size:14px!important;font-weight:600!important;text-transform:none!important;letter-spacing:0!important;}
body.page-template-elementor_canvas .cinfo .v,body.page-template-elementor_canvas .cinfo .v a{font-family:var(--disp)!important;font-size:20px!important;font-weight:700!important;color:var(--ink)!important;}
body.page-template-elementor_canvas .cinfo .d{font-size:15px!important;color:var(--mute)!important;}
body.page-template-elementor_canvas .form-card{background:var(--night)!important;}
body.page-template-elementor_canvas .form-card h2{font-family:var(--disp)!important;font-style:italic;font-weight:800!important;font-stretch:112%;}
body.page-template-elementor_canvas .form-card .fsub{font-size:15px!important;color:var(--night-mute)!important;}
body.page-template-elementor_canvas .form-card label{font-size:14px!important;font-weight:600!important;text-transform:none!important;letter-spacing:0!important;color:var(--night-ink)!important;}
body.page-template-elementor_canvas .form-card input,body.page-template-elementor_canvas .form-card textarea{background:var(--night2)!important;font-size:16px!important;}
body.page-template-elementor_canvas .form-card ::placeholder{color:#8F939B!important;opacity:1;}
body.page-template-elementor_canvas .form-card .formnote{font-size:13px!important;color:var(--night-mute)!important;}
@media (max-width:640px){
  html.cfv2-cart table.cart tr.cart_item{display:grid!important;grid-template-columns:72px 1fr auto;grid-template-areas:"img name rm" "img qty sub";column-gap:14px;row-gap:8px;align-items:center;padding:14px!important;}
  html.cfv2-cart table.cart tr.cart_item td{display:block!important;padding:0!important;border:0!important;text-align:left!important;background:none!important;min-height:0!important;}
  html.cfv2-cart table.cart tr.cart_item td::before{display:none!important;}
  html.cfv2-cart table.cart td.product-thumbnail{grid-area:img;}
  html.cfv2-cart table.cart td.product-thumbnail img{width:72px!important;height:72px!important;}
  html.cfv2-cart table.cart td.product-name{grid-area:name;font-weight:650;}
  html.cfv2-cart table.cart td.product-remove{grid-area:rm;}
  html.cfv2-cart table.cart tr.cart_item td.product-price{display:none!important;}
  html.cfv2-cart table.cart td.product-quantity{grid-area:qty;}
  html.cfv2-cart table.cart td.product-quantity .quantity{margin:0!important;}
  html.cfv2-cart table.cart td.product-subtotal{grid-area:sub;font-weight:700;text-align:right!important;}
}
html.cfv2 .woocommerce-info,html.cfv2 .woocommerce-message,html.cfv2 .woocommerce-error,html.cfv2 .wc-block-components-notice-banner{background:#fff!important;color:var(--ink)!important;border:0!important;border-left:4px solid var(--ink)!important;border-radius:var(--r)!important;box-shadow:0 0 0 1px var(--line);}
html.cfv2 .woocommerce-error,html.cfv2 .wc-block-components-notice-banner.is-error{border-left-color:var(--red)!important;}
html.cfv2 .woocommerce-info::before,html.cfv2 .woocommerce-message::before{color:var(--ink)!important;}
html.cfv2 .return-to-shop .button{background:var(--red)!important;color:#fff!important;border:0!important;border-radius:var(--r)!important;min-height:48px;display:inline-flex!important;align-items:center;padding:0 24px!important;font-weight:700!important;}
html.cfv2-pdp .summary > .StripeElement,html.cfv2-pdp .summary > .single-product-category{display:none!important;}
html.cfv2 #cfv2-home .sec h2,html.cfv2 .cfv2-more h2,html.cfv2 .cfv2-drawer h2,html.cfv2 .cfv2-drawer h3{color:var(--ink)!important;}
html.cfv2 .cfv2-card,html.cfv2 .cfv2-card *{text-align:left!important;}
html.cfv2 .cfv2-card .ct,html.cfv2 .cfv2-card > div{background:#fff;}
#cfv2-home .gen .plate,.cfv2-card .plate{position:relative;overflow:hidden;}
#cfv2-home .gen .plate img,.cfv2-card .plate img{position:absolute;inset:0;margin:auto;width:84%!important;height:84%!important;max-width:none;object-fit:contain!important;}
#cfv2-home,.cfv2-drawer,.cfv2-head,.cfv2-foot,.cfv2-related,.cfv2-cartx{text-align:left;}
html.cfv2 .cfv2-drawer,html.cfv2 .cfv2-drawer h2,html.cfv2 .cfv2-drawer h3,html.cfv2 .cfv2-drawer p,html.cfv2 .cfv2-drawer b,html.cfv2 .cfv2-drawer span{color:var(--ink);}
html.cfv2-cart #secondary,html.cfv2-checkout #secondary,html.cfv2 .woocommerce-cart #secondary,html.cfv2 .woocommerce-checkout #secondary,body.woocommerce-cart #secondary,body.woocommerce-checkout #secondary,body.woocommerce-account #secondary{display:none!important;}
body.woocommerce-cart #primary,body.woocommerce-checkout #primary,body.woocommerce-account #primary{width:100%!important;float:none!important;}
html.cfv2 h1,html.cfv2 h2,html.cfv2 h3,html.cfv2 .product_title{font-family:var(--disp)!important;color:var(--ink);text-transform:none;letter-spacing:-.01em;}
html.cfv2 :focus-visible{outline:2px solid var(--red)!important;outline-offset:2px;}
html.cfv2.cfv2-lock{overflow:hidden;}
.cfv2 .w{max-width:1320px;margin:0 auto;padding:0 var(--g);}

/* hide the theme chrome this file replaces */
html.cfv2 #masthead,html.cfv2 .site-header,html.cfv2 .ast-mobile-header-wrap,html.cfv2 footer.site-footer,html.cfv2 .site-footer,html.cfv2 .ast-above-header-wrap{display:none!important;}
html.cfv2-home [data-elementor-type="wp-page"],html.cfv2-home .entry-header{display:none!important;}
html.cfv2-home #content > .ast-container{display:block!important;max-width:none!important;padding:0!important;}
html.cfv2-home #content{padding:0!important;}

/* announcement + header */
.cfv2-ann{background:var(--night2);color:#fff;text-align:center;font-size:14px;line-height:1.4;padding:9px var(--g);}
.cfv2-ann span{color:var(--night-mute);margin-left:10px;}
.cfv2-head{background:var(--night);color:var(--night-ink);position:sticky;top:0;z-index:900;border-bottom:1px solid #000;}
.cfv2-head .w{display:flex;align-items:center;gap:28px;min-height:68px;}
.cfv2-head .logo img{height:30px;width:auto;display:block;}
.cfv2-head .main{display:flex;gap:4px 26px;margin-left:auto;font-size:15px;font-weight:500;}
.cfv2-head .main a,.cfv2-head .menu a{color:var(--night-ink);text-decoration:none;min-height:44px;display:flex;align-items:center;}
.cfv2-head .main a:hover,.cfv2-head .main a[aria-current]{color:#fff;text-decoration:underline;text-underline-offset:7px;text-decoration-thickness:2px;text-decoration-color:var(--red);}
.cfv2-head .cart{display:flex;align-items:center;gap:8px;min-height:44px;padding:0 14px;border:1px solid #3A3D44;border-radius:999px;color:#fff;text-decoration:none;font-weight:600;font-size:15px;font-variant-numeric:tabular-nums;position:relative;}
.cfv2-head .cart:hover{border-color:#fff;}
.cfv2-head svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.cfv2-count{background:var(--red);color:#fff;font-size:12px;font-weight:700;min-width:20px;height:20px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;padding:0 5px;}
.cfv2-count[hidden]{display:none;}
.cfv2-head .burger{display:none;background:none;border:0;color:#fff;width:44px;height:44px;padding:0;align-items:center;justify-content:center;cursor:pointer;}
.cfv2-head .menu{background:var(--night);border-top:1px solid #2A2C31;padding:8px var(--g) 20px;}
.cfv2-head .menu[hidden]{display:none;}
.cfv2-head .menu .mh{margin:14px 0 2px;font-size:13px;color:var(--night-mute);}
.cfv2-head .menu a{font-size:17px;border-bottom:1px solid #26282D;}
.cfv2-head .menu a.mg{font-weight:600;}

/* buttons */
.cfv2-btn,.cfv2 .cfv2-add{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;background:var(--red);color:#fff!important;border:0;border-radius:var(--r);font-weight:700;font-size:16px;text-decoration:none;cursor:pointer;line-height:1.1;text-transform:none;letter-spacing:0;transition:background .15s;}
.cfv2-btn:hover,.cfv2 .cfv2-add:hover{background:var(--red2);}
.cfv2-btn.ghost{background:transparent;color:var(--ink)!important;box-shadow:inset 0 0 0 1.5px var(--ink);}
.cfv2-btn.ghost:hover{background:var(--ink);color:#fff!important;}
.cfv2 [aria-busy="true"].cfv2-add,.cfv2 button[aria-busy="true"]{opacity:.7;cursor:progress;}

/* product card - used everywhere */
.cfv2-card{display:flex;flex-direction:column;background:var(--plate);border-radius:var(--r);overflow:hidden;box-shadow:0 0 0 1px var(--line);transition:box-shadow .2s;}
.cfv2-card:hover{box-shadow:0 0 0 1px var(--ink);}
.cfv2-card .plate{display:block;aspect-ratio:1/1;background:#fff;padding:8%;}
.cfv2-card .plate img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .35s cubic-bezier(.2,.7,.2,1);}
.cfv2-card:hover .plate img{transform:scale(1.04);}
.cfv2-card .meta{display:flex;flex-direction:column;gap:4px;padding:4px 16px 16px;flex:1;border-top:1px solid #F0F1F3;}
.cfv2-card h3{margin:10px 0 0;font-size:16px;line-height:1.3;font-weight:650;}
.cfv2-card h3 a{color:var(--ink);text-decoration:none;}
.cfv2-card h3 a:hover{text-decoration:underline;}
.cfv2-card .fit{margin:0;font-size:13.5px;color:var(--mute);}
.cfv2-card .buy{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:auto;padding-top:12px;flex-wrap:wrap;}
.cfv2-card .price{font-size:19px;font-weight:750;font-variant-numeric:tabular-nums;}
.cfv2-card .cfv2-add{min-height:44px;padding:0 16px;font-size:15px;}
.cfv2-card.is-small{flex-direction:row;}
.cfv2-card.is-small .plate{width:92px;flex:0 0 92px;padding:8px;}
.cfv2-card.is-small .meta{border-top:0;border-left:1px solid #F0F1F3;padding:4px 12px 12px;}
.cfv2-card.is-small h3{font-size:15px;margin-top:8px;}
.cfv2-card.is-small .price{font-size:16px;}
.cfv2-card.is-small .cfv2-add{min-height:40px;font-size:14px;padding:0 12px;}

/* homepage */
#cfv2-home{display:block;}
#cfv2-home .hero{background:var(--night);color:#fff;overflow:hidden;position:relative;padding:56px 0 64px;}
#cfv2-home .hero .w{position:relative;}
#cfv2-home .huge{position:absolute;right:calc(var(--g) * -1);top:-34px;margin:0;font-size:clamp(120px,19vw,300px);line-height:.8;font-weight:900;font-style:italic;font-stretch:125%;letter-spacing:-.03em;color:#1F2125;pointer-events:none;user-select:none;white-space:nowrap;}
#cfv2-home h1{position:relative;margin:0;max-width:15ch;font-size:clamp(40px,6vw,84px);line-height:.95;font-weight:850;font-style:italic;font-stretch:118%;letter-spacing:-.025em;color:#fff!important;}
#cfv2-home .lede{position:relative;margin:18px 0 32px;font-size:clamp(17px,1.6vw,20px);color:#C9CCD2;}
#cfv2-home .gens{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
#cfv2-home .gen{display:flex;flex-direction:column;background:#fff;color:var(--ink);text-decoration:none;border-radius:8px;overflow:hidden;transition:transform .2s cubic-bezier(.2,.7,.2,1),box-shadow .2s;}
#cfv2-home .gen:hover{transform:translateY(-3px);box-shadow:0 0 0 3px var(--red);}
#cfv2-home .gen .plate{display:block;aspect-ratio:16/10;padding:6% 10%;background:#fff;}
#cfv2-home .gen .plate img{width:100%;height:100%;object-fit:contain;display:block;}
#cfv2-home .gt{display:flex;flex-direction:column;gap:2px;padding:14px 18px 0;border-top:1px solid #EEF0F2;}
#cfv2-home .gt b{font-size:clamp(19px,1.8vw,23px);font-weight:800;font-style:italic;font-stretch:112%;letter-spacing:-.01em;}
#cfv2-home .gs{font-size:15px;color:var(--mute);font-variant-numeric:tabular-nums;}
#cfv2-home .go{margin:14px 18px 18px;min-height:48px;display:flex;align-items:center;justify-content:center;background:var(--red);color:#fff;border-radius:var(--r);font-weight:700;}
#cfv2-home .gen:hover .go{background:var(--red2);}
#cfv2-home .ask{position:relative;margin:22px 0 0;font-size:15px;color:var(--night-mute);}
#cfv2-home .ask a{color:#fff;}
#cfv2-home .sec{padding:64px 0 0;}
#cfv2-home .sh{display:flex;justify-content:space-between;align-items:baseline;gap:8px 24px;flex-wrap:wrap;margin-bottom:20px;}
#cfv2-home h2{margin:0;font-size:clamp(28px,3.2vw,40px);line-height:1;font-weight:850;font-style:italic;font-stretch:115%;letter-spacing:-.02em;}
#cfv2-home .sh a{color:var(--ink);font-weight:650;min-height:44px;display:inline-flex;align-items:center;}
#cfv2-home .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;}
#cfv2-home .grid[aria-busy]{min-height:480px;}
#cfv2-home .areas{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;}
#cfv2-home .areas[aria-busy]{min-height:260px;}
#cfv2-home .area{display:grid;grid-template-columns:72px 1fr;grid-template-rows:auto auto;column-gap:14px;align-items:center;background:#fff;border-radius:var(--r);padding:10px 14px 10px 10px;color:var(--ink);text-decoration:none;box-shadow:0 0 0 1px var(--line);min-height:92px;}
#cfv2-home .area:hover{box-shadow:0 0 0 1px var(--ink);}
#cfv2-home .area .plate{grid-row:1 / 3;width:72px;height:72px;display:block;}
#cfv2-home .area .plate img{width:100%;height:100%;object-fit:contain;display:block;}
#cfv2-home .an{font-weight:650;font-size:15.5px;line-height:1.25;align-self:end;}
#cfv2-home .ac{font-size:14px;color:var(--mute);align-self:start;}
#cfv2-home .facts{margin-top:72px;background:#fff;border-top:1px solid var(--line);}
#cfv2-home .facts .w{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px 32px;padding-top:36px;padding-bottom:36px;}
#cfv2-home .facts p{margin:0;display:flex;gap:14px;font-size:15px;color:var(--mute);line-height:1.5;}
#cfv2-home .facts svg{flex:0 0 26px;width:26px;height:26px;fill:none;stroke:var(--red);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;margin-top:1px;}
#cfv2-home .facts b{display:block;color:var(--ink);font-size:16px;margin-bottom:2px;}
#cfv2-home .facts a{color:var(--ink);}

/* footer */
.cfv2-foot{background:var(--night);color:var(--night-mute);margin-top:0;font-size:15px;}
.cfv2-foot .w{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:32px;padding-top:48px;padding-bottom:32px;}
.cfv2-foot img{height:26px;width:auto;display:block;margin-bottom:14px;}
.cfv2-foot .fb p{margin:0;max-width:34ch;}
.cfv2-foot nav p,.cfv2-foot .pay p{margin:0 0 8px;color:#fff;font-weight:650;}
.cfv2-foot nav a{display:flex;align-items:center;min-height:36px;color:var(--night-mute);text-decoration:none;}
.cfv2-foot nav a:hover{color:#fff;text-decoration:underline;}
.cfv2-foot .copy{margin:0;padding:16px var(--g) 24px;max-width:1320px;margin-inline:auto;border-top:1px solid #2A2C31;font-size:14px;}

/* page shell for every Woo page */
html.cfv2 #content > .ast-container{max-width:1320px!important;width:100%!important;padding:0 var(--g)!important;margin:0 auto!important;}
html.cfv2 #primary{margin-top:28px!important;margin-bottom:64px!important;}
html.cfv2 .woocommerce-breadcrumb{font-size:14px!important;color:var(--mute)!important;margin-bottom:10px!important;}
html.cfv2 .woocommerce-breadcrumb a{color:var(--mute)!important;}
html.cfv2 .ast-separate-container .ast-article-single,html.cfv2 .ast-separate-container .ast-article-post,html.cfv2 .ast-separate-container #primary .ast-woocommerce-container{background:transparent!important;padding:0!important;}
html.cfv2 .entry-title,html.cfv2 .woocommerce-products-header__title{font-size:clamp(30px,4vw,48px)!important;line-height:1!important;font-weight:850!important;font-style:italic;font-stretch:115%;letter-spacing:-.02em;margin:0 0 18px!important;}
html.cfv2 .entry-content a{color:var(--ink);}

/* shop grid */
html.cfv2-shop #secondary{display:none!important;}
html.cfv2-shop #primary{width:100%!important;float:none!important;padding:0!important;}
html.cfv2-shop #content > .ast-container{display:block!important;}
.cfv2-chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px 2px 4px;margin:0 0 10px;}
.cfv2-chips::-webkit-scrollbar{display:none;}
.cfv2-chips a{flex:0 0 auto;min-height:44px;display:flex;align-items:center;padding:0 16px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink)!important;text-decoration:none;font-weight:600;font-size:15px;white-space:nowrap;}
.cfv2-chips a:hover{box-shadow:inset 0 0 0 1.5px var(--ink);}
.cfv2-chips a[aria-current]{background:var(--ink);color:#fff!important;box-shadow:none;}
.cfv2-chips.is-area a{font-weight:500;font-size:14px;min-height:40px;background:transparent;}
.cfv2-chips.is-area{margin-bottom:22px;}
html.cfv2-shop .woocommerce-result-count{font-size:14px;color:var(--mute);margin:12px 0 18px!important;}
html.cfv2-shop .woocommerce-ordering{margin:4px 0 18px!important;}
html.cfv2-shop .woocommerce-ordering select{min-height:44px;border:1px solid var(--line);border-radius:var(--r);background:#fff;padding:0 36px 0 14px;font-size:15px;color:var(--ink);}
html.cfv2 ul.products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px!important;margin:0!important;padding:0!important;}
html.cfv2 ul.products::before,html.cfv2 ul.products::after{display:none!important;}
html.cfv2 ul.products li.product{width:auto!important;margin:0!important;float:none!important;padding:0!important;background:#fff;border-radius:var(--r);overflow:hidden;box-shadow:0 0 0 1px var(--line);display:flex!important;flex-direction:column;text-align:left!important;}
html.cfv2 ul.products li.product:hover{box-shadow:0 0 0 1px var(--ink);}
html.cfv2 ul.products li.product .astra-shop-thumbnail-wrap,html.cfv2 ul.products li.product > a:first-child{display:block;aspect-ratio:1/1;background:#fff;padding:8%;margin:0!important;}
html.cfv2 ul.products li.product img{width:100%!important;height:100%!important;object-fit:contain!important;margin:0!important;aspect-ratio:1/1;}
html.cfv2 ul.products li.product .astra-shop-summary-wrap{display:flex;flex-direction:column;gap:4px;padding:12px 16px 16px!important;flex:1;border-top:1px solid #F0F1F3;}
html.cfv2 ul.products li.product .ast-woo-product-category,html.cfv2 ul.products li.product .onsale,html.cfv2 ul.products li.product .ast-shop-product-out-of-stock{display:none!important;}
html.cfv2 ul.products li.product .woocommerce-loop-product__title{font-size:16px!important;line-height:1.3!important;font-weight:650!important;color:var(--ink)!important;margin:0!important;padding:0!important;}
html.cfv2 ul.products li.product .fit{margin:0;font-size:13.5px;color:var(--mute);}
html.cfv2 ul.products li.product .price{font-size:19px!important;font-weight:750!important;color:var(--ink)!important;margin:8px 0 10px!important;font-variant-numeric:tabular-nums;}
html.cfv2 ul.products li.product .button{margin-top:auto!important;min-height:44px;display:flex!important;align-items:center;justify-content:center;background:var(--red)!important;color:#fff!important;border-radius:var(--r)!important;font-weight:700!important;font-size:15px!important;padding:0 14px!important;width:100%;text-transform:none!important;letter-spacing:0!important;}
html.cfv2 ul.products li.product .button:hover{background:var(--red2)!important;}
html.cfv2 ul.products li.product .added_to_cart{display:none!important;}
html.cfv2 .woocommerce-pagination{margin-top:32px!important;}
html.cfv2 .woocommerce-pagination ul{border:0!important;display:flex!important;gap:8px;justify-content:center;}
html.cfv2 .woocommerce-pagination ul li{border:0!important;}
html.cfv2 .woocommerce-pagination a,html.cfv2 .woocommerce-pagination span{min-width:44px;min-height:44px;display:flex!important;align-items:center;justify-content:center;border-radius:var(--r);background:#fff!important;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink)!important;font-weight:600;}
html.cfv2 .woocommerce-pagination .current{background:var(--ink)!important;color:#fff!important;box-shadow:none;}

/* product page */
html.cfv2-pdp #secondary{display:none!important;}
html.cfv2-pdp #primary{width:100%!important;float:none!important;}
html.cfv2-pdp div.product{display:grid!important;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:24px 56px;align-items:start;}
html.cfv2-pdp div.product > *{grid-column:1 / -1;}
html.cfv2-pdp div.product > .woocommerce-product-gallery{grid-column:1;width:100%!important;float:none!important;margin:0!important;}
html.cfv2-pdp div.product > .summary{grid-column:2;width:100%!important;float:none!important;margin:0!important;position:sticky;top:96px;}
html.cfv2-pdp div.product > .summary:has(.cfv2-kitbox){position:static;}
html.cfv2-pdp .woocommerce-product-gallery__wrapper{background:#fff;border-radius:8px;box-shadow:0 0 0 1px var(--line);overflow:hidden;}
html.cfv2-pdp .woocommerce-product-gallery__image img{width:100%!important;aspect-ratio:1/1;object-fit:contain!important;background:#fff;padding:6%;box-sizing:border-box;}
html.cfv2-pdp .flex-control-thumbs{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin-top:10px!important;}
html.cfv2-pdp .flex-control-thumbs li{width:auto!important;margin:0!important;float:none!important;}
html.cfv2-pdp .flex-control-thumbs img{aspect-ratio:1/1;object-fit:contain;background:#fff;border-radius:4px;box-shadow:0 0 0 1px var(--line);padding:6%;opacity:.85;}
html.cfv2-pdp .flex-control-thumbs img.flex-active,html.cfv2-pdp .flex-control-thumbs img:hover{opacity:1;box-shadow:0 0 0 2px var(--ink);}
html.cfv2-pdp .woocommerce-product-gallery__trigger{display:none!important;}
html.cfv2-pdp .summary .woocommerce-breadcrumb{margin-bottom:12px!important;}
html.cfv2-pdp .product_title{font-size:clamp(30px,3.6vw,46px)!important;line-height:1!important;font-weight:850!important;font-style:italic;font-stretch:115%;letter-spacing:-.02em;margin:0 0 14px!important;}
html.cfv2-pdp .summary p.price{font-size:30px!important;font-weight:750!important;color:var(--ink)!important;margin:0 0 16px!important;font-variant-numeric:tabular-nums;}
html.cfv2-pdp .summary .woocommerce-product-details__short-description{color:var(--mute);margin-bottom:18px;}
html.cfv2-pdp .summary .ast-single-product-category,html.cfv2-pdp .summary .ast-woo-product-category,html.cfv2-pdp .summary .product_meta,html.cfv2-pdp .summary .ast-product-subtitle{display:none!important;}
.cfv2-fit{display:flex;gap:12px;align-items:flex-start;background:#fff;border-radius:var(--r);box-shadow:0 0 0 1px var(--line);padding:14px 16px;margin:0 0 18px;}
.cfv2-fit svg{flex:0 0 24px;width:24px;height:24px;fill:none;stroke:#fff;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;background:#1F7A3D;border-radius:50%;padding:4px;}
.cfv2-fit p{margin:0;font-size:14.5px;color:var(--mute);line-height:1.45;}
.cfv2-fit b{display:block;color:var(--ink);font-size:16px;}
.cfv2-fit a{color:var(--ink);}
html.cfv2-pdp form.cart{display:flex!important;gap:10px;align-items:stretch;flex-wrap:wrap;margin:0 0 14px!important;}
html.cfv2-pdp form.cart .quantity{margin:0!important;}
html.cfv2-pdp form.cart .quantity input.qty{width:76px!important;min-height:56px;border:1px solid var(--line)!important;border-radius:var(--r)!important;background:#fff!important;color:var(--ink)!important;font-size:17px!important;text-align:center;}
html.cfv2-pdp form.cart .single_add_to_cart_button{flex:1 1 200px;min-height:56px;background:var(--red)!important;color:#fff!important;border-radius:var(--r)!important;font-size:18px!important;font-weight:750!important;text-transform:none!important;letter-spacing:0!important;padding:0 24px!important;}
html.cfv2-pdp form.cart .single_add_to_cart_button:hover{background:var(--red2)!important;}
.cfv2-points{list-style:none;margin:16px 0 0!important;padding:0!important;display:grid;gap:6px;}
.cfv2-points li{display:flex;gap:10px;align-items:center;font-size:15px;color:var(--mute);margin:0!important;}
.cfv2-points svg{width:20px;height:20px;flex:0 0 20px;fill:none;stroke:var(--ink);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;}
html.cfv2-pdp .woocommerce-tabs{margin-top:40px!important;padding-top:0!important;border:0!important;}
html.cfv2-pdp .woocommerce-tabs ul.tabs{display:none!important;}
html.cfv2-pdp .woocommerce-tabs .panel{display:block!important;max-width:72ch;margin:0!important;padding:0!important;}
html.cfv2-pdp .woocommerce-tabs #tab-reviews,html.cfv2-pdp .woocommerce-tabs .woocommerce-Tabs-panel--reviews{display:none!important;}
html.cfv2-pdp .woocommerce-tabs h2{font-size:24px!important;font-weight:800!important;font-style:italic;font-stretch:112%;margin:0 0 10px!important;}
html.cfv2-pdp .related.products,html.cfv2-pdp .upsells.products{display:none!important;}
.cfv2-more{grid-column:1 / -1;margin-top:48px;}
.cfv2-more h2{margin:0;font-size:clamp(26px,3vw,36px);font-weight:850;font-style:italic;font-stretch:115%;letter-spacing:-.02em;}
.cfv2-more > p{margin:4px 0 18px;color:var(--mute);}
.cfv2-more .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;}
.cfv2-sticky{position:fixed;left:0;right:0;bottom:0;z-index:950;background:#fff;box-shadow:0 -1px 0 var(--line),0 -8px 24px rgba(20,21,24,.08);padding:10px var(--g) calc(10px + env(safe-area-inset-bottom,0px));display:none;align-items:center;gap:14px;transform:translateY(110%);transition:transform .25s cubic-bezier(.2,.7,.2,1);}
.cfv2-sticky.on{transform:none;}
.cfv2-sticky > div{flex:1;min-width:0;}
.cfv2-sticky p{margin:0;}
.cfv2-sticky .sn{font-size:14px;color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.cfv2-sticky .sp{font-size:18px;font-weight:750;font-variant-numeric:tabular-nums;}

/* drawer */
.cfv2-drawer[hidden]{display:none;}
.cfv2-drawer .scrim{position:fixed;inset:0;background:rgba(10,10,12,.5);z-index:1000;opacity:0;transition:opacity .2s;}
.cfv2-drawer .panel{position:fixed;top:0;right:0;bottom:0;width:min(440px,100%);background:var(--ground);z-index:1001;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .25s cubic-bezier(.2,.7,.2,1);outline:none;}
.cfv2-drawer.open .scrim{opacity:1;}
.cfv2-drawer.open .panel{transform:none;}
.cfv2-drawer .dhead{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:#fff;border-bottom:1px solid var(--line);}
.cfv2-drawer h2{margin:0;font-size:20px;font-weight:800;}
.cfv2-drawer .x{width:44px;height:44px;border:0;background:none;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--ink);padding:0;}
.cfv2-drawer .x svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;}
.cfv2-drawer .dbody{overflow-y:auto;padding:18px 20px 28px;display:flex;flex-direction:column;gap:16px;}
.cfv2-drawer .line{display:grid;grid-template-columns:72px 1fr auto;gap:14px;align-items:center;background:#fff;border-radius:var(--r);padding:10px;box-shadow:0 0 0 1px var(--line);}
.cfv2-drawer .thumb{width:72px;height:72px;display:block;}
.cfv2-drawer .thumb img{width:100%;height:100%;object-fit:contain;}
.cfv2-drawer .line p{margin:0;}
.cfv2-drawer .nm{font-weight:650;line-height:1.3;}
.cfv2-drawer .qt{font-size:14px;color:var(--mute);}
.cfv2-drawer .pr{font-weight:750;font-variant-numeric:tabular-nums;}
.cfv2-drawer .sub{display:flex;justify-content:space-between;font-size:16px;}
.cfv2-drawer .sub b{font-size:19px;font-variant-numeric:tabular-nums;}
.ship p{margin:0 0 8px;font-size:14.5px;color:var(--mute);}
.ship b{color:var(--ink);}
.ship .bar{display:block;height:6px;border-radius:3px;background:#DCDEE2;overflow:hidden;}
.ship .bar i{display:block;height:100%;background:var(--red);border-radius:3px;}
.cfv2-drawer .acts{display:grid;gap:10px;}
.cfv2-drawer .acts .cfv2-btn{min-height:54px;font-size:17px;}
.cfv2-drawer .more h3{margin:8px 0 10px;font-size:17px;font-weight:800;}
.cfv2-drawer .mgrid{display:grid;gap:10px;}
.cfv2-drawer .mgrid[aria-busy]{min-height:200px;}

/* cart */
.cfv2-ship{background:#fff;border-radius:var(--r);box-shadow:0 0 0 1px var(--line);padding:16px 18px;margin-bottom:20px;}
html.cfv2-cart .woocommerce{display:block;}
html.cfv2-cart table.shop_table{background:#fff;border-radius:var(--r)!important;border:0!important;box-shadow:0 0 0 1px var(--line);overflow:hidden;border-collapse:separate!important;}
html.cfv2-cart table.shop_table th{background:#fff!important;color:var(--mute)!important;font-size:13.5px!important;font-weight:600!important;border-color:#EEF0F2!important;}
html.cfv2-cart table.shop_table td{background:#fff!important;color:var(--ink)!important;border-color:#EEF0F2!important;}
html.cfv2-cart table.shop_table td.product-name a{color:var(--ink)!important;font-weight:650;text-decoration:none;}
html.cfv2-cart table.shop_table img{width:84px!important;height:84px!important;object-fit:contain;background:#fff;}
html.cfv2-cart table.shop_table input.qty{width:70px;min-height:44px;border:1px solid var(--line)!important;border-radius:var(--r);background:#fff!important;color:var(--ink)!important;}
html.cfv2-cart .coupon input.input-text{min-height:44px!important;border:1px solid var(--line)!important;border-radius:var(--r)!important;background:#fff!important;color:var(--ink)!important;width:180px!important;}
html.cfv2-cart table.shop_table button.button,html.cfv2-cart .coupon .button{min-height:44px;background:#fff!important;color:var(--ink)!important;box-shadow:inset 0 0 0 1.5px var(--ink);border-radius:var(--r)!important;font-weight:650!important;text-transform:none!important;letter-spacing:0!important;opacity:1!important;}
html.cfv2-cart .cart-collaterals .cart_totals{background:#fff;border-radius:var(--r);box-shadow:0 0 0 1px var(--line);padding:20px!important;}
html.cfv2-cart .cart_totals h2{font-size:22px!important;font-weight:800!important;margin:0 0 8px!important;padding:0!important;background:none!important;color:var(--ink)!important;}
html.cfv2-cart .cart_totals table.shop_table{box-shadow:none;}
html.cfv2-cart .cart_totals th,html.cfv2-cart .cart_totals td{color:var(--ink)!important;}
html.cfv2-cart .wc-proceed-to-checkout .checkout-button{min-height:56px;display:flex!important;align-items:center;justify-content:center;background:var(--red)!important;color:#fff!important;font-size:18px!important;font-weight:750!important;border-radius:var(--r)!important;text-transform:none!important;letter-spacing:0!important;}
html.cfv2-cart .wc-proceed-to-checkout .checkout-button:hover{background:var(--red2)!important;}
html.cfv2-cart .cross-sells{display:none!important;}
html.cfv2-cart .woocommerce-message{background:#fff!important;color:var(--ink)!important;border-top-color:#1F7A3D!important;}
html.cfv2-cart .woocommerce-message .button{display:none!important;}

/* checkout - light, labelled, white fields */
html.cfv2 .woocommerce-checkout h3,html.cfv2 #order_review_heading{font-size:22px!important;font-weight:800!important;color:var(--ink)!important;margin:0 0 14px!important;}
html.cfv2 .woocommerce form .form-row label,html.cfv2 .woocommerce-checkout label{color:var(--ink)!important;font-size:14.5px!important;font-weight:600!important;opacity:1!important;}
html.cfv2 .woocommerce form .form-row .required{color:var(--red)!important;}
html.cfv2 .woocommerce form .form-row input.input-text,html.cfv2 .woocommerce form .form-row textarea,html.cfv2 .woocommerce form .form-row select,html.cfv2 .select2-container--default .select2-selection--single{background:#fff!important;color:var(--ink)!important;border:1px solid #C5C8CE!important;border-radius:var(--r)!important;min-height:50px!important;font-size:16px!important;box-shadow:none!important;}
html.cfv2 .woocommerce form .form-row input.input-text:focus,html.cfv2 .woocommerce form .form-row select:focus{border-color:var(--ink)!important;}
html.cfv2 .select2-container--default .select2-selection--single .select2-selection__rendered{color:var(--ink)!important;line-height:48px!important;padding-left:14px!important;}
html.cfv2 .select2-container--default .select2-selection--single .select2-selection__arrow{height:48px!important;}
html.cfv2 .woocommerce form .form-row input::placeholder{color:#8A8E96!important;opacity:1;}
html.cfv2 .woocommerce-checkout .woocommerce-additional-fields{display:none!important;}
html.cfv2 .woocommerce-checkout #customer_details{background:#fff;border-radius:8px;box-shadow:0 0 0 1px var(--line);padding:24px!important;}
html.cfv2 .woocommerce-checkout #order_review,html.cfv2 .woocommerce-checkout #order_review_heading{background:#fff!important;color:var(--ink)!important;}
html.cfv2 .woocommerce-checkout #order_review{border-radius:0 0 8px 8px;box-shadow:0 0 0 1px var(--line);padding:0 24px 24px!important;}
html.cfv2 .woocommerce-checkout #order_review_heading{border-radius:8px 8px 0 0;box-shadow:0 0 0 1px var(--line);padding:20px 24px 4px!important;margin:0!important;border:0!important;}
html.cfv2 .woocommerce-checkout-review-order-table,html.cfv2 .woocommerce-checkout-review-order-table th,html.cfv2 .woocommerce-checkout-review-order-table td{background:#fff!important;color:var(--ink)!important;border-color:#EEF0F2!important;}
html.cfv2 .woocommerce-checkout-review-order-table .order-total th,html.cfv2 .woocommerce-checkout-review-order-table .order-total td{font-size:19px!important;font-weight:800!important;}
html.cfv2 #payment{background:#fff!important;border-radius:0!important;color:var(--ink)!important;}
html.cfv2 #payment ul.payment_methods{border-color:#EEF0F2!important;padding:12px 0!important;}
html.cfv2 #payment ul.payment_methods li{color:var(--ink)!important;}
html.cfv2 #payment ul.payment_methods li label{color:var(--ink)!important;}
html.cfv2 #payment div.payment_box{background:#F5F6F8!important;color:var(--ink)!important;border-radius:var(--r);}
html.cfv2 #payment div.payment_box::before{border-bottom-color:#F5F6F8!important;}
html.cfv2 .woocommerce-privacy-policy-text,html.cfv2 .woocommerce-terms-and-conditions-wrapper,html.cfv2 .woocommerce-terms-and-conditions-wrapper *{color:var(--mute)!important;}
html.cfv2 .woocommerce-terms-and-conditions-wrapper a{color:var(--ink)!important;}
html.cfv2 #place_order{width:100%;min-height:58px;background:var(--red)!important;color:#fff!important;font-size:18px!important;font-weight:750!important;border-radius:var(--r)!important;text-transform:none!important;letter-spacing:0!important;}
html.cfv2 #place_order:hover{background:var(--red2)!important;}
html.cfv2 .woocommerce-form-coupon-toggle .woocommerce-info{background:#fff!important;color:var(--ink)!important;border-top-color:var(--ink)!important;}
html.cfv2 .woocommerce-form-coupon-toggle .woocommerce-info a{color:var(--ink)!important;}

/* --- tablet --- */
@media (max-width:1100px){
  .cfv2-head .main{gap:4px 18px;font-size:14.5px;}
  #cfv2-home .areas{grid-template-columns:repeat(3,minmax(0,1fr));}
  html.cfv2 ul.products,#cfv2-home .grid,.cfv2-more .grid{grid-template-columns:repeat(3,minmax(0,1fr));}
  #cfv2-home .facts .w{grid-template-columns:repeat(2,minmax(0,1fr));}
  .cfv2-foot .w{grid-template-columns:1fr 1fr;}
}
@media (max-width:900px){
  .cfv2-head .main{display:none;}
  .cfv2-head .cart{margin-left:auto;}
  .cfv2-head .burger{display:flex;}
  html.cfv2-pdp div.product{grid-template-columns:1fr;}
  html.cfv2-pdp div.product > .woocommerce-product-gallery,html.cfv2-pdp div.product > .summary{grid-column:1;position:static;}
  html.cfv2-pdp div.product > .summary{grid-row:auto;}
  html.cfv2-cart .cart-collaterals{grid-template-columns:1fr;}
  html.cfv2-cart .cart-collaterals .cart_totals,html.cfv2-cart .cart-collaterals .cfv2-ship{grid-column:1;grid-row:auto;}
  .cfv2-sticky{display:flex;}
}
/* --- phone --- */
@media (max-width:640px){
  html.cfv2 body{font-size:16px;}
  .cfv2-ann{font-size:13px;padding:8px 16px;}
  .cfv2-ann span{display:block;margin:2px 0 0;}
  .cfv2-head .w{min-height:60px;gap:10px;}
  .cfv2-head .logo img{height:26px;}
  .cfv2-head .cart{padding:0 12px;gap:6px;}
  .cfv2-head .cart .cfv2-ctotal{display:none;}
  #cfv2-home .hero{padding:32px 0 36px;}
  #cfv2-home .huge{top:-14px;font-size:120px;}
  #cfv2-home .lede{margin:12px 0 20px;}
  #cfv2-home .gens{grid-template-columns:1fr;gap:10px;}
  #cfv2-home .gen{display:grid;grid-template-columns:118px 1fr;grid-template-rows:auto auto;}
  #cfv2-home .gen .plate{grid-row:1 / 3;aspect-ratio:auto;height:100%;min-height:118px;padding:10px;border-right:1px solid #EEF0F2;}
  #cfv2-home .gt{border-top:0;padding:12px 14px 0;}
  #cfv2-home .gt b{font-size:19px;}
  #cfv2-home .gs{font-size:14px;}
  #cfv2-home .go{margin:10px 14px 12px;min-height:44px;font-size:15px;}
  #cfv2-home .sec{padding-top:44px;}
  #cfv2-home .sh{margin-bottom:14px;}
  html.cfv2 ul.products,#cfv2-home .grid,.cfv2-more .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px!important;}
  #cfv2-home .areas{grid-template-columns:1fr 1fr;gap:8px;}
  #cfv2-home .area{grid-template-columns:52px 1fr;column-gap:10px;padding:8px 10px 8px 8px;min-height:72px;}
  #cfv2-home .area .plate{width:52px;height:52px;}
  #cfv2-home .an{font-size:14.5px;}
  #cfv2-home .ac{font-size:13px;}
  #cfv2-home .facts{margin-top:48px;}
  #cfv2-home .facts .w{grid-template-columns:1fr;gap:18px;padding-top:28px;padding-bottom:28px;}
  .cfv2-card .meta,html.cfv2 ul.products li.product .astra-shop-summary-wrap{padding:10px 12px 12px!important;}
  .cfv2-card h3,html.cfv2 ul.products li.product .woocommerce-loop-product__title{font-size:15px!important;}
  .cfv2-card .fit,html.cfv2 ul.products li.product .fit{font-size:13px;}
  .cfv2-card .price,html.cfv2 ul.products li.product .price{font-size:17px!important;}
  .cfv2-card .buy{flex-direction:column;align-items:stretch;gap:8px;}
  .cfv2-card .cfv2-add{width:100%;}
  .cfv2-card.is-small .buy{flex-direction:row;align-items:center;}
  .cfv2-card.is-small .cfv2-add{width:auto;}
  .cfv2-foot .w{grid-template-columns:1fr;gap:24px;padding-top:36px;}
  .cfv2-drawer .panel{top:auto;height:min(88vh,760px);width:100%;border-radius:14px 14px 0 0;transform:translateY(100%);}
  html.cfv2-pdp .product_title{font-size:30px!important;}
  html.cfv2-pdp .summary p.price{font-size:26px!important;}
  html.cfv2 .woocommerce-checkout #customer_details,html.cfv2 .woocommerce-checkout #order_review{padding-left:16px!important;padding-right:16px!important;}
  html.cfv2 .woocommerce-checkout #order_review_heading{padding-left:16px!important;}
  html.cfv2-cart .coupon input.input-text{width:100%!important;}
}
@media (prefers-reduced-motion:reduce){
  .cfv2-card .plate img,#cfv2-home .gen,.cfv2-drawer .panel,.cfv2-drawer .scrim,.cfv2-sticky{transition:none!important;}
  .cfv2-card:hover .plate img{transform:none;}
  #cfv2-home .gen:hover{transform:none;}
}
`;

  function css() {
    if (D.getElementById('cfv2-css')) return;
    var f = D.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap';
    (D.head || R).appendChild(f);
    var s = D.createElement('style');
    s.id = 'cfv2-css';
    s.textContent = CSS;
    (D.head || R).appendChild(s);
    // the old dark theme in Additional CSS fights every colour here; switch it off on this page only
    var old = D.getElementById('wp-custom-css');
    if (old) old.media = 'not all';
  }

  function shortNames() {
    $$('.shop_table .product-name').forEach(function (td) {
      var t = $('a', td) || td;
      [].forEach.call(t.childNodes, function (n) {
        if (n.nodeType === 3 && /^\s*BMW\s+S1000RR\s+Carbon/i.test(n.nodeValue)) n.nodeValue = short(n.nodeValue) + ' ';
      });
    });
    $$('.woocommerce-message').forEach(function (m) {
      [].forEach.call(m.childNodes, function (n) {
        if (n.nodeType === 3) n.nodeValue = n.nodeValue.replace(/BMW\s+S1000RR\s+Carbon\s+Fib(?:er|re)\s+/gi, '');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* boot                                                                */
  /* ------------------------------------------------------------------ */
  css();
  function boot() {
    var b = D.body.className || '';
    chrome();
    buildDrawer();
    wireAdds();
    loadCart().catch(function () {});
    if (/(^|\s)home(\s|$)/.test(b)) home();
    else if (/single-product/.test(b)) pdp();
    else if (/(post-type-archive-product|tax-product_cat|woocommerce-shop)/.test(b)) shop();
    else if (/woocommerce-cart/.test(b)) cart();
    if (/woocommerce-(cart|checkout)/.test(b)) {
      shortNames();
      var ot = $('#order_review') || $('.entry-content > .woocommerce');
      if (ot && window.MutationObserver) new MutationObserver(shortNames).observe(ot, { childList: true, subtree: true });
    }

    var grid = $('ul.products');
    if (grid && window.MutationObserver) {
      new MutationObserver(decorateCards).observe(grid.parentNode, { childList: true, subtree: true });
    }
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

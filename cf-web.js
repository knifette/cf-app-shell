/* Carbon Freaks - PUBLIC WEB skin (desktop + tablet).
 *
 * Scope note: app-shell.js owns <=768px and the native app. This file owns
 * >=769px web, which was deliberately left untouched by that build. The two
 * never style the same viewport.
 *
 * Ground colour is #08080A because that is the measured background of the
 * store's own product photography (sampled rgb(5-10,5-11,5-14) across six
 * live images), so a part sits on the page with no visible image box.
 *
 * Kill switch: add ?cf_web=off to any URL.
 */
(function () {
  'use strict';

  if (window.__cfWeb) return;
  window.__cfWeb = 1;

  var D = document;
  var R = D.documentElement;

  try {
    if (location.search.indexOf('cf_web=off') > -1) return;
  } catch (e) {}

  var FREESHIP = 600; // live WooCommerce rule, confirmed on the store

  /* ------------------------------------------------------------------ */
  /* fonts                                                               */
  /* ------------------------------------------------------------------ */
  (function fonts() {
    if (D.getElementById('cf-web-fonts')) return;
    var l = D.createElement('link');
    l.id = 'cf-web-fonts';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap';
    (D.head || R).appendChild(l);
  })();

  /* ------------------------------------------------------------------ */
  /* stylesheet                                                          */
  /* ------------------------------------------------------------------ */
  var CSS = [
'html.cf-web{',
'  --cf-ground:#08080A;',
'  --cf-raise:#101014;',
'  --cf-raise2:#16161B;',
'  --cf-line:#24242A;',
'  --cf-line2:#33333B;',
'  --cf-ink:#E9EAED;',
'  --cf-mute:#9B9EA7;',
'  --cf-faint:#6B6E76;',
'  --cf-red:#E01926;',
'  --cf-red-lift:#FF4350;',
'  --cf-disp:"Chakra Petch", "Inter", system-ui, sans-serif;',
'  --cf-body:"Inter", system-ui, -apple-system, sans-serif;',
'}',

/* the weave: drawn, not photographed, so it stays crisp at any DPI */
'html.cf-web .cf-weave{',
'  background-color:#0B0B0E;',
'  background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.042) 0 2px,transparent 2px 5px),repeating-linear-gradient(-45deg,rgba(255,255,255,.030) 0 2px,transparent 2px 5px);',
'  background-size:10px 10px;',
'}',

'@media (min-width:769px){',

/* ---------- page ground ---------- */
'  html.cf-web, html.cf-web body{background:var(--cf-ground);color:var(--cf-ink);}',
'  html.cf-web body{font-family:var(--cf-body);}',
'  html.cf-web #page,html.cf-web #content,html.cf-web .site-content,html.cf-web .ast-plain-container{background:transparent;}',
'  html.cf-web h1,html.cf-web h2,html.cf-web h3,html.cf-web h4{font-family:var(--cf-disp);color:var(--cf-ink);letter-spacing:-.01em;}',
'  html.cf-web a{color:var(--cf-ink);}',
'  html.cf-web a:hover{color:var(--cf-red-lift);}',
'  html.cf-web ::selection{background:var(--cf-red);color:#fff;}',

/* ---------- announcement bar: the $600 rule, stated once, sitewide ---------- */
'  html.cf-web .cf-ann{background:var(--cf-red);color:#fff;display:flex;flex-wrap:wrap;gap:6px 28px;justify-content:center;align-items:center;padding:9px 24px;font-family:var(--cf-disp);font-size:12px;font-weight:700;letter-spacing:.16em;}',
'  html.cf-web .cf-ann em{font-style:normal;font-family:var(--cf-body);font-weight:500;font-size:12px;letter-spacing:0;color:rgba(255,255,255,.78);}',

/* ---------- header / footer ---------- */
'  html.cf-web .site-header,html.cf-web .ast-main-header-wrap,html.cf-web .main-header-bar,html.cf-web .ast-primary-header-bar{background:rgba(8,8,10,.94)!important;border-bottom:1px solid var(--cf-line);box-shadow:none!important;}',
'  html.cf-web .main-header-menu a,html.cf-web .ast-builder-menu a,html.cf-web .site-header .menu-link{color:var(--cf-ink)!important;font-weight:500;}',
'  html.cf-web .main-header-menu a:hover,html.cf-web .ast-builder-menu a:hover{color:var(--cf-red-lift)!important;}',
'  html.cf-web .site-header .sub-menu{background:var(--cf-raise)!important;border:1px solid var(--cf-line)!important;}',
'  html.cf-web footer.site-footer,html.cf-web .site-footer .ast-builder-grid-row-container{background:#0B0B0E!important;border-top:1px solid var(--cf-line);color:var(--cf-mute);}',
'  html.cf-web footer.site-footer a{color:var(--cf-mute)!important;}',
'  html.cf-web footer.site-footer a:hover{color:var(--cf-red-lift)!important;}',

/* ---------- give the catalogue room: 1009px was strangling it ---------- */
'  html.cf-web.cf-shop #content > .ast-container,',
'  html.cf-web.cf-pdp  #content > .ast-container{max-width:1320px;width:calc(100% - 48px);margin-inline:auto;}',

/* ================================================================== */
/* SHOP ARCHIVE                                                        */
/* ================================================================== */
'  html.cf-web.cf-shop #content > .ast-container{display:grid;grid-template-columns:240px minmax(0,1fr);gap:40px;align-items:start;padding-top:34px;}',
'  html.cf-web.cf-shop #secondary{width:auto!important;max-width:none!important;padding:0!important;margin:0!important;position:sticky;top:18px;}',
'  html.cf-web.cf-shop #primary{width:auto!important;max-width:none!important;padding:0!important;margin:0!important;min-width:0;}',

/* the fitment rail */
'  html.cf-web.cf-shop #secondary .widget{background:transparent;border:0;border-top:1px solid var(--cf-line);padding:20px 0 4px;margin:0;}',
'  html.cf-web.cf-shop #secondary .widget:first-child{border-top:0;padding-top:0;}',
'  html.cf-web.cf-shop #secondary .widget-title,html.cf-web.cf-shop #secondary h2{font-family:var(--cf-disp);font-size:11px;font-weight:600;letter-spacing:.18em;color:var(--cf-mute);margin:0 0 12px;text-transform:uppercase;}',
'  html.cf-web.cf-shop #secondary a{color:var(--cf-ink);font-size:14px;text-decoration:none;}',
'  html.cf-web.cf-shop #secondary a:hover{color:var(--cf-red-lift);}',
'  html.cf-web.cf-shop #secondary input[type=search],html.cf-web.cf-shop #secondary input[type=text]{width:100%;box-sizing:border-box;background:var(--cf-raise);border:1px solid var(--cf-line);color:var(--cf-ink);padding:11px 12px;border-radius:2px;font-family:var(--cf-body);font-size:14px;}',
'  html.cf-web.cf-shop #secondary input::placeholder{color:var(--cf-faint);}',
'  html.cf-web.cf-shop #secondary .cf-parttype li{border-bottom:1px solid var(--cf-line)!important;}',
'  html.cf-web.cf-shop #secondary .price_slider_wrapper .ui-slider{background:var(--cf-line);}',
'  html.cf-web.cf-shop #secondary .ui-slider .ui-slider-range{background:var(--cf-red);}',
'  html.cf-web.cf-shop #secondary .ui-slider .ui-slider-handle{background:var(--cf-ink);border:0;}',
'  html.cf-web.cf-shop #secondary .price_label{color:var(--cf-mute);font-size:13px;}',
'  html.cf-web.cf-shop #secondary .button{background:var(--cf-raise2);color:var(--cf-ink);border:1px solid var(--cf-line2);border-radius:2px;font-family:var(--cf-disp);font-size:12px;letter-spacing:.1em;font-weight:600;padding:9px 16px;}',
'  html.cf-web.cf-shop #secondary .button:hover{border-color:var(--cf-red);color:#fff;}',

/* generation filter, promoted to the top of the rail */
'  html.cf-web .cf-gen{display:flex;flex-direction:column;gap:2px;}',
'  html.cf-web .cf-gen a{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid transparent;border-radius:2px;font-size:14px;}',
'  html.cf-web .cf-gen a:hover{background:var(--cf-raise);border-color:var(--cf-line);}',
'  html.cf-web .cf-gen a.cf-on{background:var(--cf-raise);border-color:var(--cf-red);}',
'  html.cf-web .cf-gen b{font-weight:600;}',
'  html.cf-web .cf-gen span{font-size:11px;color:var(--cf-faint);font-variant-numeric:tabular-nums;}',

/* results header */
'  html.cf-web.cf-shop .cf-head{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:flex-end;padding-bottom:18px;border-bottom:1px solid var(--cf-line);margin-bottom:28px;}',
'  html.cf-web.cf-shop .cf-head h1{margin:0 0 6px;font-size:40px;line-height:1.02;font-weight:700;letter-spacing:-.02em;}',
'  html.cf-web.cf-shop .woocommerce-result-count{margin:0;color:var(--cf-mute);font-size:13px;}',
'  html.cf-web.cf-shop .woocommerce-ordering select,html.cf-web .orderby{background:var(--cf-raise);color:var(--cf-ink);border:1px solid var(--cf-line);border-radius:2px;padding:10px 12px;font-family:var(--cf-body);font-size:13px;}',
'  html.cf-web.cf-shop .woocommerce-ordering{margin:0;}',

/* the grid: no cards. The photography already carries its own black ground,
   so a card box would only draw a seam the image does not have. */
'  html.cf-web.cf-shop ul.products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:34px 26px;margin:0!important;padding:0!important;list-style:none;}',
'  html.cf-web.cf-shop ul.products::before,html.cf-web.cf-shop ul.products::after{display:none!important;}',
'  html.cf-web.cf-shop ul.products li.product{width:auto!important;margin:0!important;padding:0!important;float:none!important;clear:none!important;background:transparent;border:0;position:relative;}',
'  html.cf-web.cf-shop .astra-shop-thumbnail-wrap{position:relative;border:1px solid var(--cf-line);border-radius:2px;overflow:hidden;background:#08080A;transition:border-color .18s ease;}',
'  html.cf-web.cf-shop li.product:hover .astra-shop-thumbnail-wrap{border-color:var(--cf-line2);}',
'  html.cf-web.cf-shop ul.products li.product img{display:block;width:100%;height:auto;margin:0;border-radius:0;transition:transform .5s cubic-bezier(.2,.7,.2,1);}',
'  html.cf-web.cf-shop li.product:hover img{transform:scale(1.035);}',
'  html.cf-web.cf-shop ul.products li.product .woocommerce-loop-product__title,',
'  html.cf-web.cf-shop ul.products li.product h2{font-family:var(--cf-body)!important;font-size:14px!important;line-height:1.42;font-weight:500;color:var(--cf-ink);margin:14px 0 6px!important;padding:0!important;}',
'  html.cf-web.cf-shop ul.products li.product .price{font-family:var(--cf-disp)!important;font-size:16px!important;font-weight:600;color:var(--cf-ink)!important;display:block;margin:0;}',
'  html.cf-web.cf-shop ul.products li.product .price del{display:none;}',
'  html.cf-web .cf-from{font-family:var(--cf-body);font-size:11px;font-weight:500;letter-spacing:.08em;color:var(--cf-faint);margin-right:6px;text-transform:uppercase;}',

/* generation badge, read off the product_cat- class already on the card */
'  html.cf-web .cf-fitchip{display:inline-block;font-family:var(--cf-body);font-size:10px;font-weight:600;letter-spacing:.09em;color:var(--cf-mute);border:1px solid var(--cf-line);border-radius:2px;padding:3px 7px;margin:0 0 8px;text-transform:uppercase;}',
'  html.cf-web .cf-fitchip.cf-fitchip-on{color:#fff;background:var(--cf-red);border-color:var(--cf-red);}',

/* on-card add-to-cart: present but quiet until hover */
'  html.cf-web.cf-shop .ast-on-card-button{background:var(--cf-raise2)!important;color:var(--cf-ink)!important;border:1px solid var(--cf-line2)!important;border-radius:2px!important;font-family:var(--cf-disp)!important;font-size:11px!important;letter-spacing:.1em!important;font-weight:600!important;opacity:0;transition:opacity .18s ease,border-color .18s ease;}',
'  html.cf-web.cf-shop li.product:hover .ast-on-card-button{opacity:1;}',
'  html.cf-web.cf-shop .ast-on-card-button:hover{border-color:var(--cf-red)!important;color:#fff!important;}',

/* pagination */
'  html.cf-web .woocommerce-pagination ul{border:0!important;display:flex;gap:6px;justify-content:center;margin-top:48px;}',
'  html.cf-web .woocommerce-pagination li{border:0!important;}',
'  html.cf-web .woocommerce-pagination a,html.cf-web .woocommerce-pagination span{border:1px solid var(--cf-line)!important;border-radius:2px;background:transparent!important;color:var(--cf-mute)!important;min-width:40px;padding:10px 12px!important;font-size:13px;font-variant-numeric:tabular-nums;}',
'  html.cf-web .woocommerce-pagination a:hover{border-color:var(--cf-line2)!important;color:var(--cf-ink)!important;}',
'  html.cf-web .woocommerce-pagination .current{background:var(--cf-red)!important;border-color:var(--cf-red)!important;color:#fff!important;}',

/* ================================================================== */
/* PRODUCT PAGE                                                        */
/* ================================================================== */
'  html.cf-web.cf-pdp #secondary{display:none!important;}',
'  html.cf-web.cf-pdp #content > .ast-container{display:block;padding-top:28px;}',
'  html.cf-web.cf-pdp #primary{width:100%!important;max-width:none!important;padding:0!important;margin:0!important;}',
'  html.cf-web.cf-pdp div.product{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:56px;align-items:start;}',
'  html.cf-web.cf-pdp .woocommerce-product-gallery{width:100%!important;float:none!important;margin:0!important;}',
'  html.cf-web.cf-pdp .woocommerce-product-gallery__wrapper{border:1px solid var(--cf-line);border-radius:2px;overflow:hidden;background:#08080A;}',
'  html.cf-web.cf-pdp .summary.entry-summary{width:100%!important;float:none!important;margin:0!important;position:sticky;top:20px;}',
'  html.cf-web.cf-pdp .woocommerce-tabs,html.cf-web.cf-pdp .related,html.cf-web.cf-pdp .up-sells{grid-column:1/-1;}',

'  html.cf-web.cf-pdp .woocommerce-breadcrumb{font-size:12px;color:var(--cf-faint);margin:0 0 14px;}',
'  html.cf-web.cf-pdp .woocommerce-breadcrumb a{color:var(--cf-faint);}',
'  html.cf-web.cf-pdp .single-product-category{font-size:11px;letter-spacing:.14em;color:var(--cf-mute);text-transform:uppercase;}',
'  html.cf-web.cf-pdp h1.product_title{font-size:34px!important;line-height:1.1;font-weight:700;letter-spacing:-.015em;margin:10px 0 4px!important;}',
'  html.cf-web .cf-kw{display:block;font-family:var(--cf-body);font-size:12px;font-weight:400;letter-spacing:0;color:var(--cf-faint);margin-top:8px;}',

'  html.cf-web.cf-pdp .summary p.price{font-family:var(--cf-disp)!important;font-size:34px!important;font-weight:700!important;color:var(--cf-ink)!important;margin:18px 0 4px!important;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;}',
'  html.cf-web.cf-pdp .summary p.price .woocommerce-Price-amount{color:var(--cf-ink);}',
'  html.cf-web .cf-pricenote{font-family:var(--cf-body);font-size:12px;font-weight:400;color:var(--cf-mute);letter-spacing:0;}',

'  html.cf-web.cf-pdp .woocommerce-product-details__short-description{color:var(--cf-mute);font-size:14px;line-height:1.65;margin:14px 0 4px;max-width:58ch;}',

/* swatches replace the two "Choose an option" dropdowns */
'  html.cf-web.cf-pdp table.variations{display:block;border:0;margin:22px 0 0;}',
'  html.cf-web.cf-pdp table.variations tbody,html.cf-web.cf-pdp table.variations tr,html.cf-web.cf-pdp table.variations td,html.cf-web.cf-pdp table.variations th{display:block;border:0;padding:0;background:transparent;width:auto;}',
'  html.cf-web.cf-pdp table.variations tr{margin-bottom:18px;}',
'  html.cf-web.cf-pdp table.variations label{font-family:var(--cf-disp);font-size:11px;font-weight:600;letter-spacing:.16em;color:var(--cf-mute);text-transform:uppercase;display:block;margin-bottom:10px;}',
'  html.cf-web.cf-pdp .cf-sw-hidden{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}',
'  html.cf-web .cf-sw{display:flex;flex-wrap:wrap;gap:9px;}',
'  html.cf-web .cf-sw button{flex:0 1 112px;min-width:92px;padding:0 0 2px;background:var(--cf-raise);color:var(--cf-ink);border:1px solid var(--cf-line2);border-radius:2px;cursor:pointer;font-family:var(--cf-body);font-size:12px;text-align:center;transition:border-color .15s ease,box-shadow .15s ease;}',
'  html.cf-web .cf-sw button:hover{border-color:var(--cf-mute);}',
'  html.cf-web .cf-sw button[aria-pressed="true"]{border-color:var(--cf-red);box-shadow:inset 0 0 0 1px var(--cf-red);}',
'  html.cf-web .cf-sw button:focus-visible{outline:2px solid var(--cf-red-lift);outline-offset:2px;}',
'  html.cf-web .cf-sw i{display:block;height:34px;border-bottom:1px solid var(--cf-line);}',
'  html.cf-web .cf-sw span{display:block;padding:7px 4px;}',
'  html.cf-web .cf-sw-glossy{background:linear-gradient(135deg,#2C2C33 0%,#121214 58%,#36363E 100%);}',
'  html.cf-web .cf-sw-matt{background:linear-gradient(135deg,#1C1C20 0%,#141416 100%);}',
'  html.cf-web .cf-sw-twill{background-color:#0C0C0E;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.055) 0 2px,transparent 2px 5px),repeating-linear-gradient(-45deg,rgba(255,255,255,.04) 0 2px,transparent 2px 5px);background-size:10px 10px;}',
'  html.cf-web .cf-sw-plain{background-color:#0C0C0E;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 2px,transparent 2px 6px),repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 2px,transparent 2px 6px);background-size:12px 12px;}',
'  html.cf-web .cf-sw-forged{background:#141417;background-image:radial-gradient(circle at 28% 38%,rgba(255,255,255,.11) 0 3px,transparent 4px),radial-gradient(circle at 68% 64%,rgba(255,255,255,.085) 0 4px,transparent 5px),radial-gradient(circle at 46% 80%,rgba(255,255,255,.07) 0 3px,transparent 4px);}',
'  html.cf-web .cf-sw-honeycomb{background-color:#0E0E11;background-image:repeating-linear-gradient(60deg,rgba(255,255,255,.055) 0 1px,transparent 1px 9px),repeating-linear-gradient(-60deg,rgba(255,255,255,.055) 0 1px,transparent 1px 9px),repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 9px);}',
'  html.cf-web .cf-sw button.cf-sw-off{opacity:.38;}',
'  html.cf-web .cf-sw button.cf-sw-off i{filter:grayscale(1);}',

'  html.cf-web.cf-pdp .reset_variations{font-size:12px;color:var(--cf-faint);}',
'  html.cf-web.cf-pdp .woocommerce-variation-price{display:none;}',

/* free shipping progress, directly above the button where the decision is made */
'  html.cf-web .cf-ship{margin:20px 0 14px;}',
'  html.cf-web .cf-ship-row{display:flex;justify-content:space-between;font-size:12px;color:var(--cf-mute);margin-bottom:7px;}',
'  html.cf-web .cf-ship-row b{color:var(--cf-ink);font-weight:600;}',
'  html.cf-web .cf-ship-track{height:5px;background:var(--cf-line);border-radius:3px;overflow:hidden;}',
'  html.cf-web .cf-ship-fill{height:100%;background:var(--cf-red);width:0;transition:width .4s cubic-bezier(.2,.7,.2,1);}',
'  html.cf-web .cf-ship-done .cf-ship-fill{background:#2E9E5B;}',

/* buy button */
'  html.cf-web.cf-pdp form.cart{margin:0!important;}',
'  html.cf-web.cf-pdp .single_add_to_cart_button{width:100%;background:var(--cf-red)!important;color:#fff!important;border:0!important;border-radius:2px!important;padding:18px 20px!important;font-family:var(--cf-disp)!important;font-size:15px!important;font-weight:700!important;letter-spacing:.1em!important;text-transform:uppercase;transition:background .15s ease;}',
'  html.cf-web.cf-pdp .single_add_to_cart_button:hover{background:#F32133!important;}',
'  html.cf-web.cf-pdp .single_add_to_cart_button.disabled{background:var(--cf-raise2)!important;color:var(--cf-faint)!important;cursor:not-allowed;}',
'  html.cf-web.cf-pdp .quantity input[type=number]{background:var(--cf-raise);border:1px solid var(--cf-line);color:var(--cf-ink);padding:14px 8px;border-radius:2px;}',

/* the fitment promise, which is the whole argument for a final-sale store */
'  html.cf-web .cf-fitbox{display:flex;gap:12px;align-items:flex-start;border:1px solid var(--cf-line);border-left:2px solid var(--cf-red);background:var(--cf-raise);padding:15px 16px;margin:18px 0 0;border-radius:2px;}',
'  html.cf-web .cf-fitbox-k{flex:0 0 auto;width:20px;height:20px;border-radius:50%;background:var(--cf-red);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:700;}',
'  html.cf-web .cf-fitbox-t{font-size:14px;font-weight:600;margin-bottom:3px;}',
'  html.cf-web .cf-fitbox-s{font-size:12px;color:var(--cf-mute);line-height:1.55;margin:0;}',
'  html.cf-web .cf-fitbox-s a{color:var(--cf-red-lift);text-decoration:underline;}',

/* the app-shell already builds these rows in the DOM; desktop just never
   showed them. Reveal and restyle rather than build a second set. */
'  html.cf-web.cf-pdp .cf-trustrow{display:flex!important;flex-wrap:wrap;gap:8px;margin:18px 0 0;}',
'  html.cf-web.cf-pdp .cf-trustrow a,html.cf-web.cf-pdp .cf-trustrow span{font-size:11px;color:var(--cf-mute);border:1px solid var(--cf-line);border-radius:2px;padding:6px 10px;text-decoration:none;}',
'  html.cf-web.cf-pdp .cf-trustrow a:hover{border-color:var(--cf-line2);color:var(--cf-ink);}',
'  html.cf-web.cf-pdp .cf-paytrust-pdp{margin-top:14px;opacity:.85;}',

/* tabs */
'  html.cf-web .woocommerce-tabs{margin-top:72px;border-top:1px solid var(--cf-line);padding-top:0;}',
'  html.cf-web .woocommerce-tabs ul.tabs{padding:0!important;margin:0 0 28px!important;display:flex;gap:4px;border-bottom:1px solid var(--cf-line);}',
'  html.cf-web .woocommerce-tabs ul.tabs::before{display:none!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li{background:transparent!important;border:0!important;border-radius:0!important;margin:0!important;padding:0!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li::before,html.cf-web .woocommerce-tabs ul.tabs li::after{display:none!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li a{display:block;padding:14px 18px!important;font-family:var(--cf-disp);font-size:13px;font-weight:600;letter-spacing:.08em;color:var(--cf-mute)!important;border-bottom:2px solid transparent;text-transform:uppercase;}',
'  html.cf-web .woocommerce-tabs ul.tabs li.active a{color:var(--cf-ink)!important;border-bottom-color:var(--cf-red);}',
'  html.cf-web .woocommerce-tabs .panel{color:var(--cf-mute);font-size:14px;line-height:1.7;max-width:76ch;}',
'  html.cf-web .woocommerce-tabs .panel h2{font-size:20px;margin-bottom:12px;}',
'  html.cf-web .shop_attributes th{color:var(--cf-mute);font-weight:500;}',
'  html.cf-web .shop_attributes td,html.cf-web .shop_attributes th{border-color:var(--cf-line)!important;}',

/* related */
'  html.cf-web .related > h2,html.cf-web .up-sells > h2{font-size:22px;margin:64px 0 24px;padding-top:28px;border-top:1px solid var(--cf-line);}',
'  html.cf-web .related ul.products,html.cf-web .up-sells ul.products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:26px;}',
'  html.cf-web .related ul.products li.product,html.cf-web .up-sells ul.products li.product{width:auto!important;margin:0!important;float:none!important;}',
'  html.cf-web .related ul.products img,html.cf-web .up-sells ul.products img{border:1px solid var(--cf-line);border-radius:2px;}',
'  html.cf-web .related ul.products h2,html.cf-web .up-sells ul.products h2{font-family:var(--cf-body)!important;font-size:13px!important;font-weight:500;margin-top:12px!important;}',
'  html.cf-web .related ul.products .price,html.cf-web .up-sells ul.products .price{font-family:var(--cf-disp)!important;font-size:14px!important;color:var(--cf-ink)!important;}',

/* generic woo chrome */
'  html.cf-web .woocommerce-message,html.cf-web .woocommerce-info,html.cf-web .woocommerce-error{background:var(--cf-raise)!important;color:var(--cf-ink)!important;border-top-color:var(--cf-red)!important;}',
'  html.cf-web .woocommerce-message a,html.cf-web .woocommerce-info a{color:var(--cf-red-lift)!important;}',
'  html.cf-web select,html.cf-web input[type=text],html.cf-web input[type=email],html.cf-web input[type=search],html.cf-web textarea{background:var(--cf-raise);color:var(--cf-ink);border:1px solid var(--cf-line);border-radius:2px;}',
'  html.cf-web .star-rating span::before{color:var(--cf-red);}',

'}', /* end min-width:769px */

/* respect the setting, everywhere */
'@media (prefers-reduced-motion:reduce){',
'  html.cf-web *{transition-duration:.01ms!important;animation-duration:.01ms!important;}',
'  html.cf-web.cf-shop li.product:hover img{transform:none;}',
'}'
  ].join('\n');

  function injectCSS() {
    if (D.getElementById('cf-web-css')) return;
    var s = D.createElement('style');
    s.id = 'cf-web-css';
    s.textContent = CSS;
    (D.head || R).appendChild(s);
  }

  /* ------------------------------------------------------------------ */
  /* helpers                                                             */
  /* ------------------------------------------------------------------ */
  function $(sel, root) { return (root || D).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || D).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = D.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function money(n) {
    return '$' + Number(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /* generation taxonomy -> the label a rider actually uses */
  var GEN = {
    's1000rr-2019-2022': 'S1000RR 2019-2022',
    's1000rr-2020-2022': 'S1000RR 2020-2022',
    's1000rr-2023-2024': 'S1000RR 2023-2024',
    'm1000rr': 'M1000RR',
    's1000r': 'S1000R',
    's1000xr': 'S1000XR'
  };

  function genOf(node) {
    var hit = null;
    (node.className || '').split(/\s+/).forEach(function (c) {
      if (c.indexOf('product_cat-') !== 0) return;
      var slug = c.slice(12);
      if (GEN[slug] && !hit) hit = { slug: slug, label: GEN[slug] };
    });
    return hit;
  }

  /* the app-shell persists the visitor's bike here; read it, never write it */
  function garage() {
    try {
      var raw = localStorage.getItem('cf_garage');
      if (!raw) return null;
      var g = JSON.parse(raw);
      if (!g || typeof g !== 'object') return null;
      var model = g.model || g.bike || '';
      var year = g.year || g.yr || '';
      if (!model) return null;
      return { model: String(model), year: String(year) };
    } catch (e) { return null; }
  }

  function garageMatches(slug, g) {
    if (!g) return false;
    var m = (g.model + ' ' + g.year).toLowerCase().replace(/[^a-z0-9]/g, '');
    var s = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
    /* model must appear; if the slug carries a year span, the year must fall in it */
    var base = s.replace(/\d{8}$/, '');
    if (m.indexOf(base.slice(0, 8)) === -1) return false;
    var span = slug.match(/(\d{4})-(\d{4})$/);
    if (!span) return true;
    var y = parseInt(g.year, 10);
    if (!y) return false;
    return y >= +span[1] && y <= +span[2];
  }

  /* ------------------------------------------------------------------ */
  /* 1. announcement bar - the $600 rule, said once, on every page       */
  /* ------------------------------------------------------------------ */
  function announce() {
    if ($('.cf-ann')) return;
    var page = $('#page') || D.body;
    var bar = el('div', 'cf-ann');
    bar.appendChild(el('span', null, 'FREE SHIPPING OVER ' + money(FREESHIP)));
    bar.appendChild(el('em', null, 'Fitment confirmed before you buy \u00b7 Final sale, no returns'));
    page.insertBefore(bar, page.firstChild);
  }

  /* ------------------------------------------------------------------ */
  /* 2. shop archive                                                     */
  /* ------------------------------------------------------------------ */
  function shop() {
    var primary = $('#primary');
    if (!primary) return;
    R.classList.add('cf-shop');

    /* ---- results header: title, count and sort on one line ---- */
    (function head() {
      if ($('.cf-head')) return;
      var wrap = $('.ast-woocommerce-container') || primary;
      var count = $('.woocommerce-result-count');
      var order = $('.woocommerce-ordering');
      var title = $('h1.page-title, .woocommerce-products-header__title, .ast-archive-title');
      var head = el('div', 'cf-head');
      var left = el('div');
      var h1 = el('h1', null, (title && title.textContent.trim()) || 'All parts');
      left.appendChild(h1);
      if (count) left.appendChild(count);
      head.appendChild(left);
      if (order) head.appendChild(order);
      if (title) title.style.display = 'none';
      wrap.insertBefore(head, wrap.firstChild);
    })();

    /* ---- generation filter at the top of the rail ---- */
    (function genRail() {
      var side = $('#secondary');
      if (!side || $('.cf-gen')) return;

      /* count what is on this page, per generation, from the cards themselves */
      var counts = {};
      $$('ul.products li.product').forEach(function (li) {
        var g = genOf(li);
        if (g) counts[g.slug] = (counts[g.slug] || 0) + 1;
      });

      var here = location.pathname;
      var w = el('div', 'ast-woo-sidebar-widget widget');
      w.appendChild(el('h2', 'widget-title', 'Shop by bike'));
      var list = el('div', 'cf-gen');
      Object.keys(GEN).forEach(function (slug) {
        var a = el('a');
        a.href = '/product-category/' + slug + '/';
        if (here.indexOf('/' + slug + '/') > -1) a.className = 'cf-on';
        a.appendChild(el('b', null, GEN[slug]));
        if (counts[slug]) a.appendChild(el('span', null, String(counts[slug]) + ' here'));
        list.appendChild(a);
      });
      w.appendChild(list);
      side.insertBefore(w, side.firstChild);
    })();

    /* ---- per-card: fitment chip + a price that resolves ---- */
    var g = garage();
    $$('ul.products li.product').forEach(function (li) {
      decorateCard(li, g);
    });
  }

  function decorateCard(li, g) {
    if (li.__cf) return;
    li.__cf = 1;

    var gen = genOf(li);
    var title = $('.woocommerce-loop-product__title, h2', li);

    if (gen && title && !$('.cf-fitchip', li)) {
      var chip = el('span', 'cf-fitchip', gen.label);
      if (garageMatches(gen.slug, g)) {
        chip.className += ' cf-fitchip-on';
        chip.textContent = 'FITS YOUR BIKE';
      }
      title.parentNode.insertBefore(chip, title);
    }

    fromPrice($('.price', li));
  }

  /* A range at the moment of interest is a question, not an answer.
     Show the real low end, labelled, and let the product page resolve it.
     Every figure here is WooCommerce's own - nothing is computed. */
  function fromPrice(price) {
    if (!price || price.__cf) return;
    var amounts = $$('.woocommerce-Price-amount', price);
    if (amounts.length < 2) return;
    price.__cf = 1;
    var low = amounts[0].cloneNode(true);
    price.textContent = '';
    price.appendChild(el('span', 'cf-from', 'from'));
    price.appendChild(low);
  }

  /* ------------------------------------------------------------------ */
  /* 3. product page                                                     */
  /* ------------------------------------------------------------------ */
  function pdp() {
    var form = $('form.variations_form');
    var product = $('div.product');
    if (!product) return;
    R.classList.add('cf-pdp');

    demoteKeywords();
    fitBox();

    var price = $('.summary p.price');
    fromPrice(price);

    if (!form) {
      shipBar(currentPrice());
      return;
    }

    swatches(form);

    /* Woo fires these on its own; mirror the resolved figure into the
       headline price and move the shipping bar with it. */
    var $j = window.jQuery;
    if ($j) {
      $j(form).on('show_variation', function (e, v) {
        if (v && v.display_price != null) setHeadline(v.display_price);
        shipBar(v && v.display_price != null ? Number(v.display_price) : null);
        markAvailable(form);
      });
      $j(form).on('hide_variation reset_data', function () {
        resetHeadline();
        shipBar(null);
        markAvailable(form);
      });
    }
    shipBar(null);
  }

  function lowestVariation() {
    var form = $('form.variations_form');
    if (!form) return null;
    try {
      var v = JSON.parse(form.dataset.product_variations || form.getAttribute('data-product_variations') || 'null');
      if (!v || !v.length) return null;
      return v.reduce(function (a, b) {
        return Number(b.display_price) < Number(a.display_price) ? b : a;
      }).display_price;
    } catch (e) { return null; }
  }

  function currentPrice() {
    var low = lowestVariation();
    if (low != null) return Number(low);
    var a = $('.summary p.price .woocommerce-Price-amount');
    if (!a) return null;
    var n = parseFloat(a.textContent.replace(/[^0-9.]/g, ''));
    return isNaN(n) ? null : n;
  }

  function setHeadline(p) {
    var price = $('.summary p.price');
    if (!price) return;
    if (!price.__orig) price.__orig = price.innerHTML;
    price.innerHTML = '';
    var amt = el('span', 'woocommerce-Price-amount amount');
    amt.textContent = money(p);
    price.appendChild(amt);
  }

  function resetHeadline() {
    var price = $('.summary p.price');
    if (!price || !price.__orig) return;
    price.innerHTML = price.__orig;
    price.__cf = 0;
    fromPrice(price);
    var note = el('span', 'cf-pricenote', 'pick a finish and weave for the exact price');
    price.appendChild(note);
  }

  /* The title is written for search engines. Keep it for them, lead with
     the part a person came for. */
  function demoteKeywords() {
    var h1 = $('h1.product_title');
    if (!h1 || h1.__cf) return;
    var full = h1.textContent.trim();
    /* strip a leading run of model names: "BMW M1000RR S1000R S1000RR Carbon Fiber Aero Disc Covers" */
    var m = full.match(/^((?:BMW\s+)?(?:[MS]\d{3,4}(?:RR|R|XR)\s*)+)(?:Carbon\s*Fib(?:er|re)\s*)?(.+)$/i);
    if (!m || !m[2] || m[2].trim().length < 3) return;
    h1.__cf = 1;
    h1.textContent = m[2].trim();
    h1.appendChild(el('span', 'cf-kw', full));
  }

  function fitBox() {
    var form = $('form.variations_form') || $('form.cart');
    if (!form || $('.cf-fitbox')) return;
    var g = garage();
    var gen = genOf(D.body) || genOf($('div.product'));

    var box = el('div', 'cf-fitbox');
    box.appendChild(el('span', 'cf-fitbox-k', '\u2713'));
    var body = el('div');
    var fits = gen && garageMatches(gen.slug, g);
    body.appendChild(el('div', 'cf-fitbox-t',
      fits ? ('Fits your ' + g.model + (g.year ? ', ' + g.year : ''))
           : (gen ? ('Listed for ' + gen.label) : 'Check this fits before you buy')));
    var sub = el('p', 'cf-fitbox-s');
    sub.appendChild(D.createTextNode(fits ? 'Different bike? ' : 'Not sure? '));
    var a = el('a', null, 'Have us confirm it');
    a.href = '/fitment/';
    sub.appendChild(a);
    sub.appendChild(D.createTextNode(' \u2014 sales are final, so you should have it in writing first.'));
    body.appendChild(sub);
    box.appendChild(body);
    form.parentNode.insertBefore(box, form);
  }

  /* ---- swatches: the dropdowns stay (Woo reads them), they just stop
     being the interface. Finish and weave swing the price, so they belong
     on the surface, not inside a <select>. ---- */
  var SW = {
    'glossy': 'cf-sw-glossy', 'matt': 'cf-sw-matt', 'matte': 'cf-sw-matt',
    'twill': 'cf-sw-twill', 'plain': 'cf-sw-plain',
    'forgedcarbon': 'cf-sw-forged', 'forged': 'cf-sw-forged',
    'honeycomb': 'cf-sw-honeycomb'
  };

  function swatches(form) {
    $$('table.variations tr', form).forEach(function (row) {
      var sel = $('select', row);
      if (!sel || sel.__cf) return;
      sel.__cf = 1;

      var bank = el('div', 'cf-sw');
      Array.prototype.slice.call(sel.options).forEach(function (opt) {
        if (!opt.value) return; /* the "Choose an option" row */
        var b = el('button');
        b.type = 'button';
        b.setAttribute('aria-pressed', 'false');
        b.dataset.v = opt.value;
        var key = opt.textContent.toLowerCase().replace(/[^a-z]/g, '');
        var sw = el('i', SW[key] || 'cf-sw-twill');
        b.appendChild(sw);
        b.appendChild(el('span', null, opt.textContent.trim()));
        b.addEventListener('click', function () {
          var on = sel.value === opt.value;
          sel.value = on ? '' : opt.value;
          if (window.jQuery) window.jQuery(sel).trigger('change');
          else sel.dispatchEvent(new Event('change', { bubbles: true }));
          sync(sel, bank);
        });
        bank.appendChild(b);
      });
      if (!bank.children.length) return;

      sel.classList.add('cf-sw-hidden');
      sel.parentNode.insertBefore(bank, sel.nextSibling);
      sel.addEventListener('change', function () { sync(sel, bank); });
      sync(sel, bank);
    });
  }

  function sync(sel, bank) {
    $$('button', bank).forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.v === sel.value && !!sel.value));
    });
  }

  /* Woo marks impossible combinations by removing options from the other
     select. Mirror that onto the swatches instead of silently doing nothing. */
  function markAvailable(form) {
    $$('table.variations tr', form).forEach(function (row) {
      var sel = $('select', row);
      var bank = $('.cf-sw', row);
      if (!sel || !bank) return;
      var live = {};
      Array.prototype.slice.call(sel.options).forEach(function (o) { if (o.value) live[o.value] = 1; });
      $$('button', bank).forEach(function (b) {
        b.classList.toggle('cf-sw-off', !live[b.dataset.v]);
      });
    });
  }

  /* ---- free shipping, shown where the money decision happens ---- */
  function shipBar(price) {
    var form = $('form.cart');
    if (!form) return;
    var box = $('.cf-ship');
    if (!box) {
      box = el('div', 'cf-ship');
      box.innerHTML = '<div class="cf-ship-row"><span class="cf-ship-msg"></span><b></b></div>' +
                      '<div class="cf-ship-track"><div class="cf-ship-fill"></div></div>';
      var btn = $('.single_add_to_cart_button', form);
      if (btn && btn.parentNode) btn.parentNode.insertBefore(box, btn);
      else form.insertBefore(box, form.firstChild);
    }
    var p = price != null ? price : currentPrice();
    var msg = $('.cf-ship-msg', box);
    var cap = $('b', box);
    var fill = $('.cf-ship-fill', box);
    cap.textContent = money(FREESHIP);
    if (p == null) {
      msg.textContent = 'Free shipping at ' + money(FREESHIP);
      fill.style.width = '0%';
      box.classList.remove('cf-ship-done');
      return;
    }
    if (p >= FREESHIP) {
      msg.textContent = 'Shipping is free on this one';
      fill.style.width = '100%';
      box.classList.add('cf-ship-done');
    } else {
      msg.textContent = money(FREESHIP - p) + ' away from free shipping';
      fill.style.width = Math.max(4, Math.round((p / FREESHIP) * 100)) + '%';
      box.classList.remove('cf-ship-done');
    }
  }

  /* ------------------------------------------------------------------ */
  /* boot                                                                */
  /* ------------------------------------------------------------------ */
  function boot() {
    R.classList.add('cf-web');
    injectCSS();
    announce();

    var b = D.body.className || '';
    if (/single-product/.test(b)) pdp();
    else if (/(post-type-archive-product|tax-product_cat|woocommerce-shop)/.test(b)) shop();

    /* YITH ajax filtering swaps the grid without a reload */
    var grid = $('ul.products');
    if (grid && window.MutationObserver) {
      new MutationObserver(function () {
        var g = garage();
        $$('ul.products li.product').forEach(function (li) { decorateCard(li, g); });
      }).observe(grid.parentNode, { childList: true, subtree: true });
    }
  }

  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

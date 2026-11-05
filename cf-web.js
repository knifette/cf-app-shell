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

  /* <=768px is the app skin's scope (see the WordPress app-skin protocol):
     app-shell.js owns the chrome there, so this file defers to it. */
  function MOBILE() { return window.innerWidth <= 768 || R.classList.contains('cf-native'); }

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
'  --cfw-ground:#08080A;',
'  --cfw-raise:#101014;',
'  --cfw-raise2:#16161B;',
'  --cfw-line:#24242A;',
'  --cfw-line2:#33333B;',
'  --cfw-ink:#E9EAED;',
'  --cfw-mute:#9B9EA7;',
'  --cfw-faint:#6B6E76;',
'  --cfw-red:#E10600;',
'  --cfw-red-lift:#FF4133;',
'  --cfw-disp:"Chakra Petch", "Inter", system-ui, sans-serif;',
'  --cfw-body:"Inter", system-ui, -apple-system, sans-serif;',
'}',

/* the weave: drawn, not photographed, so it stays crisp at any DPI */
'html.cf-web .cf-weave{',
'  background-color:#0B0B0E;',
'  background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.042) 0 2px,transparent 2px 5px),repeating-linear-gradient(-45deg,rgba(255,255,255,.030) 0 2px,transparent 2px 5px);',
'  background-size:10px 10px;',
'}',

/* Woo leaves the add-to-cart row display:block while the quantity box
   and the button both float, so the row collapses and the shipping
   nudge this file injects renders straight THROUGH the quantity input
   - measured at 375px AND at 1440px - while the button spills out
   below the container. Flex-wrap stacks the three in DOM order
   (quantity, shipping nudge, CTA) and gives the CTA the whole column.
   form.cart is only safe to flex when it is NOT a variations form; on
   a variable product it also wraps the attribute table. min-width is
   what actually fills the line: flex-basis:100% alone measured 300px
   of a 335px column. Row gap only - a zero-width sibling ahead of the
   quantity box collects a column gap and indents it out of line. */
'html.cf-web.cf-pdp .woocommerce-variation-add-to-cart,html.cf-web.cf-pdp form.cart:not(.variations_form){display:flex!important;flex-wrap:wrap;gap:10px 0!important;}',
'html.cf-web.cf-pdp .woocommerce-variation-add-to-cart .quantity,html.cf-web.cf-pdp form.cart:not(.variations_form) .quantity{flex:0 0 100%!important;margin:0!important;}',
'html.cf-web.cf-pdp .cf-ship{flex:1 0 100%!important;}',
'html.cf-web.cf-pdp .single_add_to_cart_button{flex:1 0 100%!important;width:100%!important;min-width:100%!important;box-sizing:border-box!important;margin:0!important;}',


/* The swatch layer is built by this file (it hides the native select
   and draws the finish/weave tiles), but every one of these rules used
   to sit inside the desktop media query - so on a phone the raw white
   <select> stayed on screen AND the tiles fell back to default blue UA
   buttons, on the one page that has to sell. They are width-agnostic,
   so they belong here; the mobile block below still overrides the two
   that are genuinely size-specific (button flex, swatch tile height). */
'html.cf-web.cf-pdp .cf-sw-hidden{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}',
'html.cf-web .cf-sw{display:flex;flex-wrap:wrap;gap:9px;}',
'html.cf-web .cf-sw button{flex:0 1 112px;min-width:92px;padding:0 0 2px;background:var(--cfw-raise);color:var(--cfw-ink);border:1px solid var(--cfw-line2);border-radius:2px;cursor:pointer;font-family:var(--cfw-body);font-size:12px;text-align:center;transition:border-color .15s ease,box-shadow .15s ease;}',
'html.cf-web .cf-sw button:hover{border-color:var(--cfw-mute);}',
'html.cf-web .cf-sw button[aria-pressed="true"]{border-color:var(--cfw-red);box-shadow:inset 0 0 0 1px var(--cfw-red);}',
'html.cf-web .cf-sw button:focus-visible{outline:2px solid var(--cfw-red-lift);outline-offset:2px;}',
'html.cf-web .cf-sw i{display:block;height:34px;border-bottom:1px solid var(--cfw-line);}',
'html.cf-web .cf-sw span{display:block;padding:7px 4px;}',
'html.cf-web .cf-sw-glossy{background:linear-gradient(135deg,#2C2C33 0%,#121214 58%,#36363E 100%);}',
'html.cf-web .cf-sw-matt{background:linear-gradient(135deg,#1C1C20 0%,#141416 100%);}',
'html.cf-web .cf-sw-twill{background-color:#0C0C0E;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.055) 0 2px,transparent 2px 5px),repeating-linear-gradient(-45deg,rgba(255,255,255,.04) 0 2px,transparent 2px 5px);background-size:10px 10px;}',
'html.cf-web .cf-sw-plain{background-color:#0C0C0E;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 2px,transparent 2px 6px),repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 2px,transparent 2px 6px);background-size:12px 12px;}',
'html.cf-web .cf-sw-forged{background:#141417;background-image:radial-gradient(circle at 28% 38%,rgba(255,255,255,.11) 0 3px,transparent 4px),radial-gradient(circle at 68% 64%,rgba(255,255,255,.085) 0 4px,transparent 5px),radial-gradient(circle at 46% 80%,rgba(255,255,255,.07) 0 3px,transparent 4px);}',
'html.cf-web .cf-sw-honeycomb{background-color:#0E0E11;background-image:repeating-linear-gradient(60deg,rgba(255,255,255,.055) 0 1px,transparent 1px 9px),repeating-linear-gradient(-60deg,rgba(255,255,255,.055) 0 1px,transparent 1px 9px),repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 9px);}',
'html.cf-web .cf-sw button.cf-sw-off{opacity:.38;}',
'html.cf-web .cf-sw button.cf-sw-off i{filter:grayscale(1);}',

/* The shop's filter rail is wired to Astra's sidebar, so it renders on
   the CART and CHECKOUT too - 360px of part-type links beside the one
   page whose only job is to take the money, and on a phone the same
   thing as a floating "Filters" pill sitting on top of the cart. The
   rail itself is site-level markup (#cf-filter-btn is not built by this
   file), so this just keeps it off the two conversion pages and gives
   the content the width the sidebar was holding. */
'html.cf-web body.woocommerce-cart #secondary,html.cf-web body.woocommerce-checkout #secondary{display:none!important;}',
'html.cf-web body.woocommerce-cart #primary,html.cf-web body.woocommerce-checkout #primary{width:100%!important;max-width:100%!important;}',
'html.cf-web body.woocommerce-cart #cf-filter-btn,html.cf-web body.woocommerce-checkout #cf-filter-btn{display:none!important;}',

/* Astra's back-to-top chip ships its own blue (#046BD2), which is the
   one saturated colour on the site that is not ours. */
'html.cf-web #ast-scroll-top{background:var(--cfw-raise2)!important;color:var(--cfw-ink)!important;border:1px solid var(--cfw-line2);border-radius:2px;}',
'html.cf-web #ast-scroll-top:hover{background:var(--cfw-red)!important;color:#FFFFFF!important;border-color:var(--cfw-red)!important;}',

/* ---------- contrast floor ---------- */

/* Two labels failed the 4.5:1 floor at 390px, both measured against the card
   they sit on. The "from" price label was ours at 3.42:1 (--cfw-faint is a
   hairline colour, fine for rules, too dim for 10px text) - moved to
   --cfw-mute, 6.4:1. The product category under each related product is
   Astra's own #2a313c on our #1c1917 card: 1.33:1, which is not dim, it is
   gone. Same token, same reason. */
'html.cf-web .ast-woo-product-category,html.cf-web .ast-woo-product-category a{color:var(--cfw-mute)!important;}',

/* ---------- checkout ---------- */

/* Two merchandising bars this skin pins to the viewport belong on the
   shop and the product page, not on the checkout. The garage pill is a
   sticky 72px "Shop by bike - find parts that fit" bar: on the one page
   where the job is to finish, it sits over the top of the form and
   invites the shopper back out to browsing. The free-shipping nudge is
   worth keeping on the cart - measured there, it clears the Proceed to
   checkout button and you can still add items - but from the checkout
   there is no add-items path, so it is just a bar over the order. */
'html.cf-web body.woocommerce-checkout .cf-grg-pillwrap{display:none!important;}',
'html.cf-web body.woocommerce-checkout .cf-ship-bar.cf-ship-sticky{display:none!important;}',

/* Two strings on the checkout are invisible, both measured against their
   own painted background: the PayPal gateway's instruction paragraph
   ("Enter your email address above to continue.") at 1.12:1, and the
   "+ 3" overflow counter on the card-logo row at 1.05:1. Both are plain
   DOM the plugins colour for a light theme - near-black on our near-
   black - so the one instruction the buyer needs is a blank box. */
'html.cf-web body.woocommerce-checkout .payment_box p{color:inherit!important;}',
'html.cf-web body.woocommerce-checkout .payment-methods--logos-count{color:var(--cfw-ink)!important;}',

/* The payment radios and the privacy checkbox are the browser's own
   13px controls, so they paint bright white on a black page and read as
   the only unstyled thing in the funnel. accent-color brands them
   without replacing the native control (and keeps the hit target). */
'html.cf-web body.woocommerce-checkout input[type="radio"],html.cf-web body.woocommerce-checkout input[type="checkbox"]{accent-color:var(--cfw-red);}',
'html.cf-web body.woocommerce-checkout #_woo_additional_terms{width:18px;height:18px;}',

/* Place order was the smallest button in the funnel - measured 263x41
   at 375px, against 294x63 for Proceed to checkout and the 335x52 Add
   to cart - and under the 44px touch floor. The last button should not
   be the one you have to aim at. (It was never narrow by its own rule:
   it already filled its parent. The width came back with the order
   panel's padding, in the mobile block below.) */
'html.cf-web body.woocommerce-checkout #place_order{min-height:52px;}',

/* Billing details only became reachable today. PayPal Fastlane used to hide
   the whole form behind an email gate, so the one part of the checkout the
   buyer actually types into had never been looked at: nine rows at Woo's
   default 40px, every one of them under the 44px touch floor, on the page
   that takes the money. 48 lines them up with Place order and the express
   buttons above. The select carries the country and state dropdowns. */
'html.cf-web body.woocommerce-checkout #customer_details input[type="text"],html.cf-web body.woocommerce-checkout #customer_details input[type="email"],html.cf-web body.woocommerce-checkout #customer_details input[type="tel"],html.cf-web body.woocommerce-checkout #customer_details select{min-height:48px;}',

/* Same native 13px box as the terms checkbox branded in 1.1.12 - this one
   was behind the email gate, so it was missed. */
'html.cf-web body.woocommerce-checkout #ship-to-different-address-checkbox{width:18px;height:18px;}',


'@media (min-width:769px){',

/* ---------- page ground ---------- */
'  html.cf-web, html.cf-web body{background:var(--cfw-ground);color:var(--cfw-ink);}',
'  html.cf-web body{font-family:var(--cfw-body);}',
'  html.cf-web #page,html.cf-web #content,html.cf-web .site-content,html.cf-web .ast-plain-container{background:transparent;}',
'  html.cf-web h1,html.cf-web h2,html.cf-web h3,html.cf-web h4{font-family:var(--cfw-disp);color:var(--cfw-ink);letter-spacing:-.01em;}',
'  html.cf-web a{color:var(--cfw-ink);}',
'  html.cf-web a:hover{color:var(--cfw-red-lift);}',
'  html.cf-web ::selection{background:var(--cfw-red);color:#fff;}',

/* ---------- announcement bar: the $600 rule, stated once, sitewide ---------- */
'  html.cf-web .cf-ann{background:var(--cfw-red);color:#fff;display:flex;flex-wrap:wrap;gap:6px 28px;justify-content:center;align-items:center;padding:9px 24px;font-family:var(--cfw-disp);font-size:12px;font-weight:700;letter-spacing:.16em;}',
'  html.cf-web .cf-ann em{font-style:normal;font-family:var(--cfw-body);font-weight:500;font-size:12px;letter-spacing:0;color:rgba(255,255,255,.78);}',

/* ---------- header / footer ---------- */
'  html.cf-web .site-header,html.cf-web .ast-main-header-wrap,html.cf-web .main-header-bar,html.cf-web .ast-primary-header-bar{background:rgba(8,8,10,.94)!important;border-bottom:1px solid var(--cfw-line);box-shadow:none!important;}',
'  html.cf-web .main-header-menu a,html.cf-web .ast-builder-menu a,html.cf-web .site-header .menu-link{color:var(--cfw-ink)!important;font-weight:500;}',
'  html.cf-web .main-header-menu a:hover,html.cf-web .ast-builder-menu a:hover{color:var(--cfw-red-lift)!important;}',
'  html.cf-web .site-header .sub-menu{background:var(--cfw-raise)!important;border:1px solid var(--cfw-line)!important;}',
'  html.cf-web footer.site-footer,html.cf-web .site-footer .ast-builder-grid-row-container{background:#0B0B0E!important;border-top:1px solid var(--cfw-line);color:var(--cfw-mute);}',
'  html.cf-web footer.site-footer a{color:var(--cfw-mute)!important;}',
'  html.cf-web footer.site-footer a:hover{color:var(--cfw-red-lift)!important;}',

/* ---------- give the catalogue room: 1009px was strangling it ---------- */
'  html.cf-web.cf-shop #content > .ast-container,',
'  html.cf-web.cf-pdp  #content > .ast-container{max-width:1320px;width:calc(100% - 48px);margin-inline:auto;}',

/* ================================================================== */
/* SHOP ARCHIVE                                                        */
/* ================================================================== */
'  html.cf-web.cf-shop #content > .ast-container{display:grid;grid-template-columns:240px minmax(0,1fr);gap:40px;align-items:start;padding-top:34px;}',
'  html.cf-web.cf-shop #secondary{width:auto!important;max-width:none!important;padding:0!important;margin:0!important;position:sticky;top:18px;}',
'  html.cf-web.cf-shop #primary{width:auto!important;max-width:none!important;padding:0!important;margin:0!important;min-width:0;}',

/* the fitment rail - ONE row system for every list in it, so the
   left edge, the row height and the hairline never change between
   widgets. Before this the bike list and the part-type list each
   had their own padding and the rail read as two pasted-in lists. */
'  html.cf-web.cf-shop #secondary .widget{background:transparent;border:0;border-top:1px solid var(--cfw-line);padding:22px 0 6px;margin:0;}',
'  html.cf-web.cf-shop #secondary .widget:first-child{border-top:0;padding-top:0;}',
'  html.cf-web.cf-shop #secondary .widget-title,html.cf-web.cf-shop #secondary h2{font-family:var(--cfw-disp);font-size:10px;font-weight:700;letter-spacing:.16em;color:var(--cfw-faint);margin:0 0 6px;text-transform:uppercase;}',
'  html.cf-web.cf-shop #secondary a{color:var(--cfw-ink);text-decoration:none;}',

'  html.cf-web.cf-shop #secondary .cf-gen a,html.cf-web.cf-shop #secondary .cf-parttype a{display:flex;align-items:center;justify-content:space-between;gap:10px;box-sizing:border-box;padding:9px 0 9px 10px;border-left:2px solid transparent;border-bottom:1px solid var(--cfw-line);border-radius:0;background:transparent;font-size:13px;font-weight:500;line-height:1.25;transition:color .14s,border-color .14s;}',
'  html.cf-web.cf-shop #secondary .cf-gen a:hover,html.cf-web.cf-shop #secondary .cf-parttype a:hover{color:var(--cfw-red-lift);border-left-color:var(--cfw-line2);background:transparent;padding-left:10px;}',
'  html.cf-web.cf-shop #secondary .cf-gen a:last-child,html.cf-web.cf-shop #secondary .cf-parttype li:last-child a{border-bottom:0;}',
'  html.cf-web.cf-shop #secondary .cf-gen a.cf-on{color:#FFFFFF;font-weight:600;border-left-color:var(--cfw-red);background:transparent;}',
'  html.cf-web.cf-shop #secondary .cf-gen b{font-weight:inherit;}',
'  html.cf-web.cf-shop #secondary .cf-parttype li{border-bottom:0;}',

/* search: an outline button, not a red slab. Red in this rail is
   reserved for the active filter bar and the cards' own buttons. */
'  html.cf-web.cf-shop #secondary .woocommerce-product-search{display:flex;gap:8px;margin-top:2px;}',
'  html.cf-web.cf-shop #secondary input[type=search],html.cf-web.cf-shop #secondary input[type=text]{flex:1 1 auto;min-width:0;width:100%;box-sizing:border-box;background:var(--cfw-raise);border:1px solid var(--cfw-line);color:var(--cfw-ink);padding:9px 11px;border-radius:2px;font-family:var(--cfw-body);font-size:13px;height:auto;box-shadow:none;}',
'  html.cf-web.cf-shop #secondary input[type=search]:focus{border-color:var(--cfw-red);outline:0;}',
'  html.cf-web.cf-shop #secondary input::placeholder{color:var(--cfw-faint);}',
/* an earlier site rule pins .widget_product_search button to solid red
   with !important; red in this rail belongs to the active filter, so
   this one has to answer in kind. */
'  html.cf-web.cf-shop #secondary .woocommerce-product-search button,html.cf-web.cf-shop #secondary .button{flex:0 0 auto;background:transparent!important;color:var(--cfw-mute)!important;border:1px solid var(--cfw-line2)!important;border-radius:2px;font-family:var(--cfw-disp);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:9px 13px;cursor:pointer;transition:color .14s,border-color .14s,background .14s;}',
'  html.cf-web.cf-shop #secondary .woocommerce-product-search button:hover,html.cf-web.cf-shop #secondary .button:hover{color:#FFFFFF!important;border-color:var(--cfw-red)!important;background:var(--cfw-red)!important;}',

/* price: the Filter button and the range sat in one block element,
   so the range clipped at the rail edge. One flex row holds both. */
'  html.cf-web.cf-shop #secondary .price_slider_wrapper .ui-slider{background:var(--cfw-line);height:3px;border:0;border-radius:2px;margin:12px 2px 16px;}',
'  html.cf-web.cf-shop #secondary .ui-slider .ui-slider-range{background:var(--cfw-red);border-radius:2px;}',
'  html.cf-web.cf-shop #secondary .ui-slider .ui-slider-handle{background:var(--cfw-ink);border:0;width:12px;height:12px;border-radius:50%;top:-5px;margin-left:-6px;}',
'  html.cf-web.cf-shop #secondary .price_slider_amount{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;}',
'  html.cf-web.cf-shop #secondary .price_label{color:var(--cfw-mute);font-size:11.5px;font-variant-numeric:tabular-nums;white-space:nowrap;text-align:right;}',

/* the theme prints the category again under the photo, in #334155 on
   near-black, and it is the same words as the fitment chip already on
   the image. Illegible AND duplicated, so it goes. */
'  html.cf-web.cf-shop li.product:has(.cf-fitchip) .ast-woo-product-category{display:none;}',

'  html.cf-web .cf-gen{display:block;}',

/* results header */
'  html.cf-web.cf-shop .cf-head{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:flex-end;padding-bottom:18px;border-bottom:1px solid var(--cfw-line);margin-bottom:28px;}',
'  html.cf-web.cf-shop .cf-head h1{margin:0 0 6px;font-size:40px;line-height:1.02;font-weight:700;letter-spacing:-.02em;}',
'  html.cf-web.cf-shop .woocommerce-result-count{margin:0;color:var(--cfw-mute);font-size:13px;}',
'  html.cf-web.cf-shop .woocommerce-ordering select,html.cf-web select.orderby{background:var(--cfw-raise)!important;color:var(--cfw-ink)!important;border:1px solid var(--cfw-line)!important;border-radius:2px!important;padding:11px 34px 11px 13px!important;font-family:var(--cfw-body)!important;font-size:13px!important;appearance:none;-webkit-appearance:none;background-image:linear-gradient(45deg,transparent 50%,#9B9EA7 50%),linear-gradient(135deg,#9B9EA7 50%,transparent 50%)!important;background-position:calc(100% - 17px) 50%,calc(100% - 12px) 50%!important;background-size:5px 5px,5px 5px!important;background-repeat:no-repeat!important;}',
'  html.cf-web.cf-shop .woocommerce-ordering{margin:0;}',
'  html.cf-web.cf-shop .woocommerce-breadcrumb{font-size:12px;color:var(--cfw-faint);margin:0 0 16px;}',
'  html.cf-web.cf-shop .woocommerce-breadcrumb a{color:var(--cfw-faint);}',
'  html.cf-web.cf-shop .woocommerce-breadcrumb a:hover{color:var(--cfw-mute);}',

/* the grid: no cards. The photography already carries its own black ground,
   so a card box would only draw a seam the image does not have. */
'  html.cf-web.cf-shop ul.products{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px 28px;margin:0!important;padding:0!important;list-style:none;}',
'}',
'@media (min-width:1100px){ html.cf-web.cf-shop ul.products{grid-template-columns:repeat(3,minmax(0,1fr));} }',
'@media (min-width:769px){',
'  html.cf-web.cf-shop ul.products::before,html.cf-web.cf-shop ul.products::after{display:none!important;}',
'  html.cf-web.cf-shop ul.products li.product{width:auto!important;margin:0!important;padding:0!important;float:none!important;clear:none!important;background:transparent;border:0;position:relative;}',
'  html.cf-web.cf-shop .astra-shop-thumbnail-wrap{position:relative;border:1px solid var(--cfw-line);border-radius:2px;overflow:hidden;background:#08080A;transition:border-color .18s ease;}',
'  html.cf-web.cf-shop li.product:hover .astra-shop-thumbnail-wrap{border-color:var(--cfw-line2);}',
'  html.cf-web.cf-shop ul.products li.product img{display:block;width:100%;height:auto;margin:0;border-radius:0;transition:transform .5s cubic-bezier(.2,.7,.2,1);}',
'  html.cf-web.cf-shop li.product:hover img{transform:scale(1.035);}',
'  html.cf-web.cf-shop ul.products li.product .woocommerce-loop-product__title,',
'  html.cf-web.cf-shop ul.products li.product h2{font-family:var(--cfw-body)!important;font-size:14px!important;line-height:1.42;font-weight:500;color:var(--cfw-ink);margin:14px 0 6px!important;padding:0!important;}',
'  html.cf-web.cf-shop ul.products li.product .price{font-family:var(--cfw-disp)!important;font-size:16px!important;font-weight:600;color:var(--cfw-ink)!important;display:block;margin:0;}',
'  html.cf-web.cf-shop ul.products li.product .price del{display:none;}',
'  html.cf-web .cf-from{font-family:var(--cfw-body);font-size:11px;font-weight:500;letter-spacing:.08em;color:var(--cfw-mute);margin-right:6px;text-transform:uppercase;}',

/* generation badge, sitting on the image as a badge rather than in the link text */
'  html.cf-web .cf-fitchip{position:absolute;top:10px;left:10px;z-index:2;font-family:var(--cfw-body);font-size:10px;font-weight:600;letter-spacing:.09em;color:var(--cfw-mute);background:rgba(8,8,10,.84);backdrop-filter:blur(3px);border:1px solid var(--cfw-line);border-radius:2px;padding:4px 8px;text-transform:uppercase;}',
'  html.cf-web .cf-fitchip.cf-fitchip-on{color:#fff;background:var(--cfw-red);border-color:var(--cfw-red);}',

/* Astra renders TWO add-to-cart links per card. Drop the hover-overlay
   duplicate and let the real one be the button - this store is here to sell. */
'  html.cf-web.cf-shop .ast-on-card-button{display:none!important;}',
'  html.cf-web.cf-shop ul.products li.product a.button.add_to_cart_button.add_to_cart_button{display:block;width:100%;box-sizing:border-box;text-align:center;margin:12px 0 0!important;background:transparent!important;color:var(--cfw-ink)!important;border:1px solid var(--cfw-line2)!important;border-radius:2px!important;font-family:var(--cfw-disp)!important;font-size:12px!important;letter-spacing:.1em!important;font-weight:600!important;padding:11px 14px!important;text-transform:uppercase;transition:background .15s ease,border-color .15s ease;}',
'  html.cf-web.cf-shop ul.products li.product:hover a.button.add_to_cart_button.add_to_cart_button{background:var(--cfw-red)!important;border-color:var(--cfw-red)!important;color:#fff!important;}',
'  html.cf-web.cf-shop ul.products li.product a.button.add_to_cart_button.add_to_cart_button:focus-visible{outline:2px solid var(--cfw-red-lift);outline-offset:2px;}',
'  html.cf-web.cf-shop .astra-shop-summary-wrap{display:flex;flex-direction:column;align-items:flex-start;}',
'  html.cf-web.cf-shop .ast-loop-product__link{display:block;width:100%;}',

/* pagination */
'  html.cf-web .woocommerce-pagination ul{border:0!important;display:flex;gap:6px;justify-content:center;margin-top:48px;}',
'  html.cf-web .woocommerce-pagination li{border:0!important;}',
'  html.cf-web .woocommerce-pagination a,html.cf-web .woocommerce-pagination span{border:1px solid var(--cfw-line)!important;border-radius:2px;background:transparent!important;color:var(--cfw-mute)!important;min-width:40px;padding:10px 12px!important;font-size:13px;font-variant-numeric:tabular-nums;}',
'  html.cf-web .woocommerce-pagination a:hover{border-color:var(--cfw-line2)!important;color:var(--cfw-ink)!important;}',
'  html.cf-web .woocommerce-pagination .current{background:var(--cfw-red)!important;border-color:var(--cfw-red)!important;color:#fff!important;}',

/* ================================================================== */
/* PRODUCT PAGE                                                        */
/* ================================================================== */
'  html.cf-web.cf-pdp #secondary{display:none!important;}',
'  html.cf-web.cf-pdp #content > .ast-container{display:block;padding-top:28px;}',
'  html.cf-web.cf-pdp #primary{width:100%!important;max-width:none!important;padding:0!important;margin:0!important;}',
'  html.cf-web.cf-pdp div.product{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:56px;align-items:start;}',
'  html.cf-web.cf-pdp .woocommerce-product-gallery{width:100%!important;float:none!important;margin:0!important;}',
'  html.cf-web.cf-pdp .woocommerce-product-gallery__wrapper{border:1px solid var(--cfw-line);border-radius:2px;overflow:hidden;background:#08080A;}',
'  html.cf-web.cf-pdp .summary.entry-summary{width:100%!important;float:none!important;margin:0!important;position:sticky;top:20px;}',
'  html.cf-web.cf-pdp .woocommerce-tabs,html.cf-web.cf-pdp .related,html.cf-web.cf-pdp .up-sells{grid-column:1/-1;}',

'  html.cf-web.cf-pdp .woocommerce-breadcrumb{font-size:12px;color:var(--cfw-faint);margin:0 0 14px;}',
'  html.cf-web.cf-pdp .woocommerce-breadcrumb a{color:var(--cfw-faint);}',
'  html.cf-web.cf-pdp .single-product-category{font-size:11px;letter-spacing:.14em;color:var(--cfw-mute);text-transform:uppercase;}',
'  html.cf-web.cf-pdp h1.product_title{font-size:34px!important;line-height:1.1;font-weight:700;letter-spacing:-.015em;margin:10px 0 4px!important;}',
'  html.cf-web .cf-kw{display:block;font-family:var(--cfw-body);font-size:12px;font-weight:400;letter-spacing:0;color:var(--cfw-faint);margin-top:8px;}',

'  html.cf-web.cf-pdp .summary p.price{font-family:var(--cfw-disp)!important;font-size:34px!important;font-weight:700!important;color:var(--cfw-ink)!important;margin:18px 0 4px!important;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;}',
'  html.cf-web.cf-pdp .summary p.price .woocommerce-Price-amount{color:var(--cfw-ink);}',
'  html.cf-web .cf-pricenote{font-family:var(--cfw-body);font-size:12px;font-weight:400;color:var(--cfw-mute);letter-spacing:0;}',

'  html.cf-web.cf-pdp .woocommerce-product-details__short-description{color:var(--cfw-mute);font-size:14px;line-height:1.65;margin:14px 0 4px;max-width:58ch;}',

/* swatches replace the two "Choose an option" dropdowns */
'  html.cf-web.cf-pdp table.variations{display:block;border:0;margin:22px 0 0;}',
'  html.cf-web.cf-pdp table.variations tbody,html.cf-web.cf-pdp table.variations tr,html.cf-web.cf-pdp table.variations td,html.cf-web.cf-pdp table.variations th{display:block;border:0;padding:0;background:transparent;width:auto;}',
'  html.cf-web.cf-pdp table.variations tr{margin-bottom:18px;}',
'  html.cf-web.cf-pdp table.variations label{font-family:var(--cfw-disp);font-size:11px;font-weight:600;letter-spacing:.16em;color:var(--cfw-mute);text-transform:uppercase;display:block;margin-bottom:10px;}',

'  html.cf-web.cf-pdp .reset_variations{font-size:12px;color:var(--cfw-faint);}',
'  html.cf-web.cf-pdp .woocommerce-variation-price{display:none;}',

/* free shipping progress, directly above the button where the decision is made */
'  html.cf-web .cf-ship{margin:20px 0 14px;}',
'  html.cf-web .cf-ship-row{display:flex;justify-content:space-between;font-size:12px;color:var(--cfw-mute);margin-bottom:7px;}',
'  html.cf-web .cf-ship-row b{color:var(--cfw-ink);font-weight:600;}',
'  html.cf-web .cf-ship-track{height:5px;background:var(--cfw-line);border-radius:3px;overflow:hidden;}',
'  html.cf-web .cf-ship-fill{height:100%;background:var(--cfw-red);width:0;transition:width .4s cubic-bezier(.2,.7,.2,1);}',
'  html.cf-web .cf-ship-done .cf-ship-fill{background:#2E9E5B;}',

/* buy button */
'  html.cf-web.cf-pdp form.cart{margin:0!important;}',
'  html.cf-web.cf-pdp form.cart button.single_add_to_cart_button.single_add_to_cart_button{width:100%;background:var(--cfw-red)!important;color:#fff!important;border:0!important;border-radius:2px!important;padding:18px 20px!important;font-family:var(--cfw-disp)!important;font-size:15px!important;font-weight:700!important;letter-spacing:.1em!important;text-transform:uppercase;transition:background .15s ease;}',
'  html.cf-web.cf-pdp form.cart button.single_add_to_cart_button.single_add_to_cart_button:hover{background:#FF2A1C!important;}',
'  html.cf-web.cf-pdp form.cart button.single_add_to_cart_button.single_add_to_cart_button.disabled{background:var(--cfw-raise2)!important;color:var(--cfw-faint)!important;cursor:not-allowed;}',
'  html.cf-web.cf-pdp .quantity input[type=number]{background:var(--cfw-raise);border:1px solid var(--cfw-line);color:var(--cfw-ink);padding:14px 8px;border-radius:2px;}',

/* the fitment promise, which is the whole argument for a final-sale store */
'  html.cf-web .cf-fitbox{display:flex;gap:12px;align-items:flex-start;border:1px solid var(--cfw-line);border-left:2px solid var(--cfw-red);background:var(--cfw-raise);padding:15px 16px;margin:18px 0 0;border-radius:2px;}',
'  html.cf-web .cf-fitbox-k{flex:0 0 auto;width:20px;height:20px;border-radius:50%;background:var(--cfw-red);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:700;}',
'  html.cf-web .cf-fitbox-t{font-size:14px;font-weight:600;margin-bottom:3px;}',
'  html.cf-web .cf-fitbox-s{font-size:12px;color:var(--cfw-mute);line-height:1.55;margin:0;}',
'  html.cf-web .cf-fitbox-s a{color:var(--cfw-red-lift);text-decoration:underline;}',

/* the app-shell already builds these rows in the DOM; desktop just never
   showed them. Reveal and restyle rather than build a second set. */
'  html.cf-web.cf-pdp .cf-pdp-fit{display:none!important;}',
'  html.cf-web.cf-pdp .StripeElement{margin:4px 0 18px!important;}',
'  html.cf-web.cf-pdp .cf-sw button{flex:0 0 auto;min-width:104px;}',
'  html.cf-web.cf-pdp .cf-trustrow{display:flex!important;flex-wrap:wrap;gap:8px;margin:18px 0 0;}',
/* "> a, > span" on purpose: .cf-trust-sub is nested INSIDE a chip, and
   the old descendant selector gave it its own border and padding. */
'  html.cf-web.cf-pdp .cf-trustrow > a,html.cf-web.cf-pdp .cf-trustrow > span{display:inline-flex;align-items:center;gap:7px;font-size:11px;line-height:1.3;white-space:nowrap;color:var(--cfw-mute);border:1px solid var(--cfw-line);border-radius:2px;padding:7px 10px;text-decoration:none;}',
'  html.cf-web.cf-pdp .cf-trustrow > a:hover{border-color:var(--cfw-line2);color:var(--cfw-ink);}',
/* the chips ship inline SVGs carrying a viewBox and no width/height, so
   each icon sized itself to the flex line: measured 78x78, which blew
   every chip out to 91px tall and wrapped the labels onto three lines. */
'  html.cf-web.cf-pdp .cf-trust-ic{width:14px;height:14px;flex:0 0 14px;display:block;}',
'  html.cf-web.cf-pdp .cf-trust-key .cf-trust-ic{color:var(--cfw-red);}',
'  html.cf-web.cf-pdp .cf-trustrow .cf-trust-sub{border:0;padding:0;color:var(--cfw-faint);}',
'  html.cf-web.cf-pdp .cf-paytrust-pdp{margin-top:14px;opacity:.85;}',

/* tabs */
'  html.cf-web .woocommerce-tabs{margin-top:72px;border-top:1px solid var(--cfw-line);padding-top:0;}',
'  html.cf-web .woocommerce-tabs ul.tabs{padding:0!important;margin:0 0 28px!important;display:flex;gap:4px;border-bottom:1px solid var(--cfw-line);}',
'  html.cf-web .woocommerce-tabs ul.tabs::before{display:none!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li{background:transparent!important;border:0!important;border-radius:0!important;margin:0!important;padding:0!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li::before,html.cf-web .woocommerce-tabs ul.tabs li::after{display:none!important;}',
'  html.cf-web .woocommerce-tabs ul.tabs li a{display:block;padding:14px 18px!important;font-family:var(--cfw-disp);font-size:13px;font-weight:600;letter-spacing:.08em;color:var(--cfw-mute)!important;border-bottom:2px solid transparent;text-transform:uppercase;}',
'  html.cf-web .woocommerce-tabs ul.tabs li.active a{color:var(--cfw-ink)!important;border-bottom-color:var(--cfw-red);}',
'  html.cf-web .woocommerce-tabs .panel{color:var(--cfw-mute);font-size:14px;line-height:1.7;max-width:76ch;}',
'  html.cf-web .woocommerce-tabs .panel h2{font-size:20px;margin-bottom:12px;}',
'  html.cf-web .shop_attributes th{color:var(--cfw-mute);font-weight:500;}',
'  html.cf-web .shop_attributes td,html.cf-web .shop_attributes th{border-color:var(--cfw-line)!important;}',

/* related */
'  html.cf-web .related > h2,html.cf-web .up-sells > h2{font-size:22px;margin:64px 0 24px;padding-top:28px;border-top:1px solid var(--cfw-line);}',
'  html.cf-web .related ul.products,html.cf-web .up-sells ul.products{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:26px;}',
'  html.cf-web .related ul.products li.product,html.cf-web .up-sells ul.products li.product{width:auto!important;margin:0!important;float:none!important;}',
'  html.cf-web .related ul.products img,html.cf-web .up-sells ul.products img{border:1px solid var(--cfw-line);border-radius:2px;}',
'  html.cf-web .related ul.products h2,html.cf-web .up-sells ul.products h2{font-family:var(--cfw-body)!important;font-size:13px!important;font-weight:500;margin-top:12px!important;}',
'  html.cf-web .related ul.products .price,html.cf-web .up-sells ul.products .price{font-family:var(--cfw-disp)!important;font-size:14px!important;color:var(--cfw-ink)!important;}',

/* generic woo chrome */
'  html.cf-web .woocommerce-message,html.cf-web .woocommerce-info,html.cf-web .woocommerce-error{background:var(--cfw-raise)!important;color:var(--cfw-ink)!important;border-top-color:var(--cfw-red)!important;}',
'  html.cf-web .woocommerce-message a,html.cf-web .woocommerce-info a{color:var(--cfw-red-lift)!important;}',
'  /* Woo blocks the form with a white overlay while it recalculates; on a dark',
'     checkout that is a full-page white flash at the exact moment someone pays. */',
'  html.cf-web .blockUI.blockOverlay{background:var(--cfw-ground)!important;}',
'  html.cf-web select,html.cf-web input[type=text],html.cf-web input[type=email],html.cf-web input[type=search],html.cf-web textarea{background:var(--cfw-raise);color:var(--cfw-ink);border:1px solid var(--cfw-line);border-radius:2px;}',
'  html.cf-web .star-rating span::before{color:var(--cfw-red);}',


  /* With the sidebar gone the cart had one line item stretched across
     1139px and the totals stranded below it. Two columns instead, so
     the totals card - and the express-pay buttons under it - sit beside
     the items and above the fold. Mobile keeps the stacked order. */
'  html.cf-web body.woocommerce-cart .woocommerce{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:24px 26px;align-items:start;}',
'  html.cf-web body.woocommerce-cart .woocommerce-notices-wrapper{grid-column:1/-1;}',
'  html.cf-web body.woocommerce-cart wc-order-attribution-inputs{grid-column:1/-1;}',
'  html.cf-web body.woocommerce-cart .cart-collaterals{width:auto!important;float:none!important;margin:0!important;}',
'  html.cf-web body.woocommerce-cart .cart-collaterals .cart_totals{width:auto!important;float:none!important;position:sticky;top:96px;}',
'}', /* end min-width:769px */

/* ------------------------------------------------------------------ */
/* MOBILE (<=768px). app-shell.js already owns the mobile/native app    */
/* chrome - header, Sort/Filter bar, garage, sticky add-to-cart, trust. */
/* This layer does NOT rebuild any of that. It only (a) styles the      */
/* elements this file injects, which were previously left raw on a      */
/* phone, and (b) brings the card treatment in line with desktop.       */
/* Width-scoped, so the native app gets the same look (platform parity).*/
/* ------------------------------------------------------------------ */
'@media (max-width:768px){',

  /* 34px of side padding on the order panel is a desktop number: on a
     375 phone it ate 68 of the 335 column, which is why Place order
     measured 263 wide. 18px gives the totals, the payment rows and the
     button back 32px without crowding the card edge. */
'  html.cf-web body.woocommerce-checkout #order_review{padding-left:18px!important;padding-right:18px!important;}',


/* the announcement bar rendered as 53px of unstyled text before this */
'  html.cf-web .cf-ann{display:flex;align-items:center;justify-content:center;gap:0;background:var(--cfw-red);color:#FFFFFF;font-family:var(--cfw-disp);font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;text-align:center;padding:7px 12px;line-height:1.2;}',
/* the second clause does not fit a 375px line; the bar has one job here */
'  html.cf-web .cf-ann em{display:none;}',

/* cards: same chromeless treatment as desktop, tuned for a 158px column */
'  html.cf-web.cf-shop ul.products li.product{background:transparent;border:0;position:relative;}',
'  html.cf-web.cf-shop .astra-shop-thumbnail-wrap{position:relative;border:1px solid var(--cfw-line);border-radius:2px;overflow:hidden;background:#08080A;}',
'  html.cf-web.cf-shop ul.products li.product img{display:block;width:100%;height:auto;margin:0;border-radius:0;}',
'  html.cf-web.cf-shop ul.products li.product .woocommerce-loop-product__title,html.cf-web.cf-shop ul.products li.product h2{font-family:var(--cfw-body)!important;font-size:12.5px!important;line-height:1.38;font-weight:500;color:var(--cfw-ink);margin:10px 0 4px!important;padding:0!important;}',
'  html.cf-web.cf-shop ul.products li.product .price{font-family:var(--cfw-disp)!important;font-size:14px!important;font-weight:600;color:var(--cfw-ink)!important;display:block;margin:0;}',

/* was position:static on a phone, so it sat in the flow and deformed the card */
'  html.cf-web .cf-fitchip{position:absolute;top:7px;left:7px;z-index:2;font-family:var(--cfw-body);font-size:9px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--cfw-mute);background:rgba(8,8,10,.86);border:1px solid var(--cfw-line);border-radius:2px;padding:3px 6px;line-height:1.1;}',
'  html.cf-web .cf-fitchip.cf-fitchip-on{color:#FFFFFF;background:var(--cfw-red);border-color:var(--cfw-red);}',
'  html.cf-web .cf-from{font-family:var(--cfw-body);font-size:10px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--cfw-mute);margin-right:5px;}',

/* the keyword string is for search, not for a 158px card */
'  html.cf-web.cf-shop ul.products li.product .cf-kw{display:none;}',

/* The app skin's payment panel is a flex sibling of #primary, so it painted
   ABOVE the grid on a phone: first product at y=660 on an 812px screen, i.e.
   card logos before a single part. Its own class is "cf-paytrust-foot", so
   that placement was never the intent. Hidden on the ARCHIVE only - nobody is
   paying yet there, and the product page keeps its own trust row. */
'  html.cf-web.cf-shop .cf-paytrust{display:none;}',

/* The theme's category line duplicates the fitment chip word for word
   ("S1000RR (2020-2022)" vs the chip's "S1000RR 2020-2022") and costs 38px on
   every card. Hidden only where a chip actually rendered, so a card without
   one keeps its label - and browsers without :has() simply keep both. */
'  html.cf-web.cf-shop li.product:has(.cf-fitchip) .ast-woo-product-category{display:none;}',

/* product page: the injected blocks need their phone sizing too */
'  html.cf-web .cf-ship-row{font-size:11.5px;}',
'  html.cf-web .cf-fitbox{padding:13px 14px;gap:10px;}',
'  html.cf-web .cf-fitbox-t{font-size:13px;}',
'  html.cf-web .cf-fitbox-s{font-size:11.5px;}',
'  html.cf-web .cf-sw button{flex:1 1 90px;min-width:84px;font-size:11.5px;}',
'  html.cf-web .cf-sw i{height:30px;}',

/* the touch-target half of the add-to-cart fix; the layout half is
   unscoped above because the same overlap happens at every width. */
'  html.cf-web.cf-pdp .single_add_to_cart_button{min-height:52px;font-size:14px!important;}',

/* Astra leaves 68px of margin above and below the main column on
   phones, so the breadcrumb floated in dead space under the red bar.
   Desktop already zeroes this inside the min-width block. */
'  html.cf-web.cf-shop #primary,html.cf-web.cf-pdp #primary{margin-top:16px!important;margin-bottom:28px!important;}',
/* app-shell's Sort/Filter bar gives the count nowrap+overflow:hidden
   and 11px less room than it needs, so it clipped mid-word. */
'  html.cf-web .cf-filters-resultcount{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;padding-left:10px;}',
/* "Select options" broke onto two lines inside a 128px card button. */
'  html.cf-web.cf-shop ul.products li.product a.button{font-size:12.5px!important;line-height:1.2;white-space:nowrap;padding:12px 10px!important;}',
'}',


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
    /* The elementor_canvas homepage ships its own fixed header, which paints
       over this bar completely - it would add 38px above a full-bleed hero
       and show nothing. Leave that page's own design alone. */
    if (/page-template-elementor_canvas/.test(D.body.className)) return;
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
      /* app-shell.js already renders a Sort/Filter bar with the result
         count on <=768px. Building this too would duplicate it, and it
         would steal the count node out of that bar. */
      if (MOBILE()) return;
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

      /* breadcrumb belongs above the title, not stranded between it and the grid */
      var bc = $('.woocommerce-breadcrumb');
      if (bc) wrap.insertBefore(bc, head);
    })();

    /* ---- generation filter at the top of the rail ---- */
    (function genRail() {
      var side = $('#secondary');
      if (!side || $('.cf-gen')) return;

      var here = location.pathname;
      var w = el('div', 'ast-woo-sidebar-widget widget');
      w.appendChild(el('h2', 'widget-title', 'Shop by bike'));
      var list = el('div', 'cf-gen');
      Object.keys(GEN).forEach(function (slug) {
        var a = el('a');
        a.href = '/product-category/' + slug + '/';
        if (here.indexOf('/' + slug + '/') > -1) a.className = 'cf-on';
        a.appendChild(el('b', null, GEN[slug]));
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

    /* badge goes on the image, not inside the product link's text */
    var shot = $('.astra-shop-thumbnail-wrap', li);
    if (gen && shot && !$('.cf-fitchip', li)) {
      var chip = el('span', 'cf-fitchip', gen.label);
      if (garageMatches(gen.slug, g)) {
        chip.className += ' cf-fitchip-on';
        chip.textContent = 'Fits your bike';
      }
      shot.appendChild(chip);
    }

    shorten($('.woocommerce-loop-product__title, h2', li));
    fromPrice($('.price', li));
  }

  /* Titles are written for search. In a three-across grid the model string
     repeats on every card and buries the part, so lead with the part. */
  var MODEL_RUN = /^((?:BMW\s+)?(?:[MS]\d{3,4}\s*(?:RR|R|XR)?\s*[\/,]?\s*)+)(?:Carbon\s*Fib(?:er|re)\s*)?(.+)$/i;

  function shortText(full) {
    var m = String(full).trim().match(MODEL_RUN);
    if (!m || !m[2]) return null;
    var tail = m[2].trim();
    if (tail.length < 4) return null;
    return tail;
  }

  function shorten(node) {
    if (!node || node.__cf) return;
    var full = node.textContent.trim();
    var tail = shortText(full);
    if (!tail) return;
    node.__cf = 1;
    node.textContent = tail;
    node.title = full;
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
    ctaLabel(form);

    demoteKeywords();

    var price = $('.summary p.price');

    /* Stripe renders its "as low as $43/month" block at the top of the
       summary, above the title. A payment plan only means something once
       you know the price, so move it under one. */
    var bnpl = $('.summary .StripeElement');
    if (bnpl && price && price.parentNode) {
      price.parentNode.insertBefore(bnpl, price.nextSibling);
    }

    fitBox();
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
    var tail = shortText(full);
    if (!tail) return;
    h1.__cf = 1;
    h1.textContent = tail;
    /* the full string stays on the page for search, just not as the headline */
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
    var a = el('a', null, 'Ask us to confirm it');
    /* /fitment/ does not exist yet; point at a page that does. */
    a.href = '/contact/';
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
  /* The mobile bar's count reads "Showing 1-12 of 73 results" in a slot
     that fits about 130px. The CSS above stops it clipping mid-word;
     this shortens the wording so it does not need to truncate at all.
     app-shell builds that bar, so it may not exist yet when we boot. */
  function countFix() {
    if (!MOBILE()) return;
    function trim() {
      var n = $('.cf-filters-resultcount');
      if (!n) return false;
      var m = /Showing\s+([\d\u2013\u2014-]+)\s+of\s+(\d+)/.exec(n.textContent || '');
      if (m) n.textContent = m[1] + ' of ' + m[2];
      return true;
    }
    if (trim() || !window.MutationObserver) return;
    var mo = new MutationObserver(function () {
      if (trim()) mo.disconnect();
    });
    mo.observe(D.body, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 6000);
  }

  /* Woo disables Add to cart until every attribute is chosen, but leaves
     the label reading "Add to cart", so a greyed-out button with no
     explanation looks broken rather than like a step you have not done.
     Name the step instead, using the product's own attribute labels. */
  function ctaLabel(form) {
    var btn = $('.single_add_to_cart_button');
    if (!btn) return;
    var ready = btn.textContent.trim() || 'Add to cart';
    var waiting = 'Choose your options';
    if (form) {
      var names = $$('.variations label', form).map(function (l) {
        return l.textContent.replace(/\s+/g, ' ').replace(/:$/, '').trim().toLowerCase();
      }).filter(Boolean);
      if (names.length === 1) waiting = 'Choose ' + names[0];
      else if (names.length > 1) {
        waiting = 'Choose ' + names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
      }
    }
    function sync() {
      var need = /(^|\s)(disabled|wc-variation-selection-needed)(\s|$)/.test(btn.className);
      var want = need ? waiting : ready;
      if (btn.textContent.trim() !== want) btn.textContent = want;
    }
    sync();
    /* class-only, so our own textContent write cannot re-trigger it */
    if (window.MutationObserver) {
      new MutationObserver(sync).observe(btn, { attributes: true, attributeFilter: ['class'] });
    }
  }

  function boot() {
    R.classList.add('cf-web');
    injectCSS();
    announce();
    countFix();

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

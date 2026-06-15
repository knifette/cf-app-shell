/* Carbon Freaks app shell — RESPONSIVE (jsDelivr). <=768px OR native; desktop untouched. */
(function(){ if(document.getElementById('cf-app-shell-css')) return;
  var s=document.createElement('style'); s.id='cf-app-shell-css'; s.textContent="\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* bigger, app-like base typography on phones */\n  body {\n    font-size: 17px;\n    line-height: 1.55;\n  }\n\n  /* reserve space for the fixed bottom tab bar (taller: 64px + safe area) */\n  body {\n    padding-bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  /* when the sticky add-to-cart is live, reserve more room */\n  body.cf-has-stickyatc {\n    padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n\n  /* native feel: drop the website footer link-soup */\n  footer.site-footer { display: none !important; }\n\n  /* the empty WooCommerce \"Tags\" widget on PDPs looks bad \u2014 hide it.\n     Defensive: the tag cloud, the product-tag widget, and any \"Tags\"\n     widget that ended up empty (no links). Mobile scope only. */\n  .tagcloud,\n  .widget_product_tag_cloud,\n  .widget_tag_cloud { display: none !important; }\n\n  /* ---------- bottom tab bar ---------- */\n  .cf-tabbar { display: flex; }\n  .cf-stickyatc { display: flex; }\n  .cf-trustrow { display: flex; }\n\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native  (any width)\n   Mirrors every show/hide + sizing rule from the mobile scope so the\n   real app gets the skin even on a tablet-width screen.\n   ==================================================================== */\nhtml.cf-native body {\n  font-size: 17px;\n  line-height: 1.55;\n  padding-bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;\n}\nhtml.cf-native body.cf-has-stickyatc {\n  padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px)) !important;\n}\nhtml.cf-native footer.site-footer { display: none !important; }\nhtml.cf-native .tagcloud,\nhtml.cf-native .widget_product_tag_cloud,\nhtml.cf-native .widget_tag_cloud { display: none !important; }\nhtml.cf-native .cf-tabbar { display: flex; }\nhtml.cf-native .cf-stickyatc { display: flex; }\nhtml.cf-native .cf-trustrow { display: flex; }\n\n/* ====================================================================\n   CHROME LOOK  \u2014  shared between both scopes.\n   The chrome DOM is always in the page (built by JS), but kept hidden by\n   default; the scopes above flip it to display:flex. These look rules are\n   wrapped in the same scopes so a desktop visitor sees nothing.\n   ==================================================================== */\n\n/* ---------- bottom tab bar (taller, bigger labels/icons) ---------- */\n.cf-tabbar {\n  display: none;            /* hidden by default; scopes above show it */\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99990;\n  height: calc(64px + env(safe-area-inset-bottom, 0px));\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  background: #0C0A09; border-top: 1px solid #262220;\n  box-shadow: 0 -4px 18px rgba(0,0,0,.45); font-family: inherit;\n}\n.cf-tab {\n  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;\n  gap: 4px; text-decoration: none; color: #8A8580;\n  font-size: 12px; font-weight: 700; letter-spacing: .015em;\n  min-height: 48px;\n  -webkit-tap-highlight-color: transparent; position: relative;\n}\n.cf-tab svg { width: 27px; height: 27px; display: block; }\n.cf-tab.cf-active { color: #E10600; }\n.cf-tab .cf-cartbadge {\n  position: absolute; top: 6px; left: calc(50% + 8px);\n  min-width: 18px; height: 18px; padding: 0 5px; border-radius: 10px;\n  background: #E10600; color: #fff; font-size: 11px; font-weight: 800;\n  display: none; align-items: center; justify-content: center; line-height: 18px;\n}\n.cf-tab .cf-cartbadge.cf-show { display: inline-flex; }\n\n/* ---------- PDP sticky add-to-cart bar (bigger, prominent) ---------- */\n.cf-stickyatc {\n  display: none;            /* hidden by default; scopes above show it */\n  position: fixed; left: 0; right: 0; z-index: 99989;\n  bottom: calc(64px + env(safe-area-inset-bottom, 0px));\n  align-items: center; gap: 14px;\n  padding: 12px 16px; background: #1E1A17; border-top: 1px solid #262220;\n  box-shadow: 0 -6px 20px rgba(0,0,0,.5);\n  transform: translateY(160%); transition: transform .25s ease; font-family: inherit;\n}\n.cf-stickyatc.cf-show { transform: translateY(0); }\n.cf-stickyatc .cf-sa-price { color: #E8E4E0; font-size: 20px; font-weight: 800; white-space: nowrap; }\n.cf-stickyatc .cf-sa-price .cf-sa-old { color: #A8A29E; font-size: 14px; font-weight: 500; text-decoration: line-through; margin-left: 7px; }\n.cf-stickyatc .cf-sa-btn {\n  margin-left: auto; flex: 1; max-width: 62%; text-align: center;\n  background: #E10600; color: #fff; font-size: 17px; font-weight: 800; letter-spacing: .02em;\n  border: 0; border-radius: 12px; padding: 16px 18px; min-height: 56px;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\n.cf-stickyatc .cf-sa-btn:active { background: #b80500; }\n\n/* ---------- PDP trust row (bigger) ---------- */\n.cf-trustrow {\n  display: none;            /* hidden by default; scopes above show it */\n  flex-wrap: wrap; gap: 10px 18px; margin: 16px 0 6px;\n  font-family: inherit; font-size: 13.5px; color: #A8A29E; font-weight: 600;\n}\n.cf-trustrow span { display: inline-flex; align-items: center; gap: 7px; }\n.cf-trustrow b { color: #E8E4E0; font-weight: 600; }\n\n\n/* =========================================================================\n   Carbon Freaks RESPONSIVE app-skin module: SLIM APP HEADER  (key: header)\n   ====================================================================\n   Fixed top bar (logo / Bikes / Search) that REPLACES the Astra theme header\n   on MOBILE ONLY. Desktop keeps its real header, untouched \u2014 guaranteed by\n   construction: every visual rule lives inside @media (max-width:768px) and\n   is mirrored under html.cf-native (the native app at any width). There is NO\n   html.cf-app class, NO localStorage flag, NO ?source=app requirement.\n\n   The header DOM is built UNCONDITIONALLY + idempotently by JS on every page;\n   CSS alone decides whether it shows. The Astra header is hidden only inside\n   the mobile / native scope AND only once our slim bar has mounted\n   (body.cf-has-apphdr) \u2014 so a build failure can never strand a desktop OR\n   mobile user with no navigation.\n\n   Z-index 99988 (contract ladder): above page content, below the tab bar\n   (99990) and overlays/sheets (99991+), so future drawers cover it cleanly.\n   ========================================================================= */\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* Top inset reserved for the fixed app header \u2014 only once it has mounted. */\n  body.cf-has-apphdr {\n    padding-top: calc(56px + env(safe-area-inset-top, 0px)) !important;\n  }\n\n  /* Hide the Astra theme header ONLY after our slim header is live.\n     Defensive: cover the common Astra header wrappers too. */\n  body.cf-has-apphdr header.site-header,\n  body.cf-has-apphdr .site-header,\n  body.cf-has-apphdr #masthead,\n  body.cf-has-apphdr .ast-above-header-wrap,\n  body.cf-has-apphdr .ast-below-header-wrap {\n    display: none !important;\n  }\n\n  /* show the slim app header (hidden by default; flipped on here) */\n  .cf-apphdr { display: flex; }\n  .cf-apphdr-search { display: flex; }\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native  (any width)\n   Mirrors EVERY show/hide + inset rule from the mobile scope so the real\n   app gets the slim header even on a tablet-width screen.\n   ==================================================================== */\nhtml.cf-native body.cf-has-apphdr {\n  padding-top: calc(56px + env(safe-area-inset-top, 0px)) !important;\n}\nhtml.cf-native body.cf-has-apphdr header.site-header,\nhtml.cf-native body.cf-has-apphdr .site-header,\nhtml.cf-native body.cf-has-apphdr #masthead,\nhtml.cf-native body.cf-has-apphdr .ast-above-header-wrap,\nhtml.cf-native body.cf-has-apphdr .ast-below-header-wrap {\n  display: none !important;\n}\nhtml.cf-native .cf-apphdr { display: flex; }\nhtml.cf-native .cf-apphdr-search { display: flex; }\n\n/* ====================================================================\n   CHROME LOOK  \u2014  shared. The header DOM is always in the page (built by\n   JS) but kept display:none by default; the two scopes above flip it on.\n   These look rules apply to all viewports but only ever matter when the\n   element is shown, so desktop web sees nothing.\n   ==================================================================== */\n\n/* ---------- the slim app header (taller, bigger targets) ---------- */\n.cf-apphdr {\n  display: none;            /* hidden by default; scopes above show it */\n  position: fixed; top: 0; left: 0; right: 0; z-index: 99988;\n  height: calc(56px + env(safe-area-inset-top, 0px));\n  padding-top: env(safe-area-inset-top, 0px);\n  align-items: center; gap: 10px;\n  padding-left: 16px; padding-right: 10px;\n  background: #0C0A09; border-bottom: 1px solid #262220;\n  box-shadow: 0 2px 14px rgba(0,0,0,.45);\n  font-family: inherit; box-sizing: border-box;\n}\n\n/* back chevron (inner pages only) \u2014 48px hit target */\n.cf-apphdr-back {\n  flex: 0 0 auto; width: 48px; height: 48px; margin-left: -10px;\n  display: none; align-items: center; justify-content: center;\n  background: none; border: 0; padding: 0; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nbody.cf-hdr-inner .cf-apphdr-back { display: inline-flex; }\n.cf-apphdr-back svg { width: 26px; height: 26px; }\n\n/* logo (home) \u2014 flex-grows so it owns the empty middle space */\n.cf-apphdr-logo {\n  flex: 1 1 auto; min-width: 0; display: flex; align-items: center;\n  text-decoration: none; height: 44px; overflow: hidden;\n}\n.cf-apphdr-logo img {\n  max-height: 32px; width: auto; max-width: 180px; object-fit: contain; display: block;\n}\n/* CSS wordmark fallback when no site logo <img> was found */\n.cf-apphdr-word {\n  color: #E8E4E0; font-weight: 800; letter-spacing: .04em;\n  font-size: 18px; text-transform: uppercase; white-space: nowrap;\n}\n.cf-apphdr-word b { color: #E10600; font-weight: 800; }\n\n/* right-side action buttons (Bikes text-pill + Search icon) */\n.cf-apphdr-act {\n  flex: 0 0 auto; display: flex; align-items: center; gap: 6px;\n}\n.cf-apphdr-bikes {\n  display: inline-flex; align-items: center; gap: 7px; height: 48px;\n  padding: 0 16px; border-radius: 999px;\n  background: #1E1A17; border: 1px solid #262220;\n  color: #E8E4E0; font-size: 14px; font-weight: 700; letter-spacing: .02em;\n  text-decoration: none; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\n.cf-apphdr-bikes:active { background: #262220; }\n.cf-apphdr-bikes svg { width: 19px; height: 19px; color: #E10600; }\n.cf-apphdr-iconbtn {\n  flex: 0 0 auto; width: 48px; height: 48px;\n  display: inline-flex; align-items: center; justify-content: center;\n  background: none; border: 0; padding: 0; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\n.cf-apphdr-iconbtn svg { width: 25px; height: 25px; }\n\n/* ---------- expanding search row (drops under the bar) ---------- */\n.cf-apphdr-search {\n  display: none;            /* hidden by default; scopes above show it */\n  position: fixed; left: 0; right: 0; z-index: 99987;\n  top: calc(56px + env(safe-area-inset-top, 0px));\n  background: #161311; border-bottom: 1px solid #262220;\n  box-shadow: 0 6px 16px rgba(0,0,0,.5);\n  padding: 12px 16px;\n  transform: translateY(-110%); transition: transform .2s ease;\n  align-items: center; gap: 10px;\n}\nbody.cf-hdr-search-open .cf-apphdr-search { transform: translateY(0); }\n.cf-apphdr-search form { flex: 1 1 auto; display: flex; align-items: center; gap: 10px; margin: 0; }\n.cf-apphdr-search input[type=\"search\"],\n.cf-apphdr-search input[type=\"text\"] {\n  flex: 1 1 auto; min-width: 0; height: 48px;\n  background: #0C0A09; border: 1px solid #262220; border-radius: 12px;\n  color: #E8E4E0; font-size: 16px; /* 16px = no iOS zoom-on-focus */\n  padding: 0 16px; outline: none; -webkit-appearance: none; appearance: none;\n}\n.cf-apphdr-search input::placeholder { color: #A8A29E; }\n.cf-apphdr-search .cf-apphdr-go {\n  flex: 0 0 auto; height: 48px; padding: 0 18px; border: 0; border-radius: 12px;\n  background: #E10600; color: #fff; font-size: 15px; font-weight: 800;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\n.cf-apphdr-search .cf-apphdr-go:active { background: #b80500; }\n\n\n/* ====================================================================\n   The garage chrome (pill + scrim + sheet + fits hints) is always built\n   by JS but kept hidden by default; the two scopes below flip it on for\n   mobile web (<=768) and the native app (html.cf-native). Desktop web\n   (>768, not native) never matches => sees nothing.\n   ==================================================================== */\n\n/* hidden-by-default base so desktop never shows the chrome */\n.cf-grg-pillwrap { display: none; }\n.cf-grg-scrim    { display: none; }\n.cf-grg-sheet    { display: none; }\n.cf-grg-fits     { display: none; }\n\n/* ====================================================================\n   SHARED LOOK  \u2014  applies in both scopes (kept out of display so the\n   hidden-by-default rules above still gate desktop). These set colors /\n   sizing only; the scopes below own every `display:`.\n   ==================================================================== */\n\n/* ---------- sticky \"Your Bike\" pill ---------- */\n/* --cf-grg-top = measured header height so the pill never collides with\n   header.site-header. Falls back to 56px before measurement. */\n.cf-grg-pillwrap {\n  position: sticky;\n  top: var(--cf-grg-top, 56px);\n  z-index: 99988;\n  padding: 10px 16px;\n  background: linear-gradient(#0C0A09 70%, rgba(12,10,9,0));\n  pointer-events: none; /* gradient tail passes clicks through; pill re-enables */\n}\n.cf-grg-pill {\n  pointer-events: auto;\n  align-items: center;\n  gap: 9px;\n  max-width: 100%;\n  min-height: 52px;\n  padding: 11px 16px;\n  background: #1E1A17;\n  border: 1px solid #262220;\n  border-radius: 999px;\n  color: #E8E4E0;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: .01em;\n  box-shadow: 0 4px 14px rgba(0,0,0,.4);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cf-grg-pill .cf-grg-ico {\n  flex: 0 0 auto; width: 22px; height: 22px; color: #E10600; display: block;\n}\n.cf-grg-pill .cf-grg-lbl {\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0;\n}\n.cf-grg-pill .cf-grg-lbl .cf-grg-muted { color: #A8A29E; font-weight: 600; }\n.cf-grg-pill .cf-grg-lbl b { color: #E8E4E0; font-weight: 800; }\n.cf-grg-pill .cf-grg-chev { flex: 0 0 auto; width: 18px; height: 18px; color: #A8A29E; display: block; }\n/* \"Shop my bike\" quick action (only when a bike is set) */\n.cf-grg-shopmine {\n  pointer-events: auto;\n  flex: 0 0 auto;\n  margin-left: 9px;\n  align-items: center; gap: 7px;\n  min-height: 52px; padding: 11px 18px;\n  background: #E10600; color: #fff;\n  font-family: inherit; font-size: 15px; font-weight: 800; letter-spacing: .02em;\n  border: 0; border-radius: 999px;\n  text-decoration: none; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\n.cf-grg-shopmine:active { background: #b80500; }\n.cf-grg-shopmine svg { width: 17px; height: 17px; display: block; }\n\n/* ---------- bottom-sheet scrim + sheet ---------- */\n.cf-grg-scrim {\n  position: fixed; inset: 0; z-index: 99992;\n  background: rgba(0,0,0,.62);\n  opacity: 0; transition: opacity .22s ease;\n  pointer-events: none;\n}\n.cf-grg-scrim.cf-grg-open { opacity: 1; pointer-events: auto; }\n\n.cf-grg-sheet {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99993;\n  flex-direction: column;\n  max-height: 84vh;\n  background: #161311;\n  border-top-left-radius: 18px; border-top-right-radius: 18px;\n  border-top: 1px solid #262220;\n  box-shadow: 0 -10px 40px rgba(0,0,0,.6);\n  font-family: inherit; color: #E8E4E0;\n  transform: translateY(100%);\n  transition: transform .26s cubic-bezier(.22,.61,.36,1);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n.cf-grg-sheet.cf-grg-open { transform: translateY(0); }\n\n.cf-grg-grab {\n  width: 40px; height: 4px; border-radius: 4px; background: #3a3530;\n  margin: 10px auto 4px;\n}\n.cf-grg-head {\n  align-items: center; gap: 10px;\n  padding: 8px 16px 12px; border-bottom: 1px solid #262220;\n}\n.cf-grg-back {\n  flex: 0 0 auto; width: 48px; height: 48px; border-radius: 999px;\n  align-items: center; justify-content: center;\n  background: #1E1A17; border: 1px solid #262220; color: #E8E4E0;\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.cf-grg-back svg { width: 19px; height: 19px; display: block; }\n.cf-grg-title {\n  flex: 1 1 auto; min-width: 0;\n  font-size: 19px; font-weight: 800; color: #E8E4E0;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.cf-grg-title small { display: block; font-size: 13px; font-weight: 600; color: #A8A29E; letter-spacing: .02em; margin-top: 2px; }\n.cf-grg-x {\n  flex: 0 0 auto; width: 48px; height: 48px; border-radius: 999px;\n  align-items: center; justify-content: center;\n  background: #1E1A17; border: 1px solid #262220; color: #A8A29E;\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.cf-grg-x svg { width: 18px; height: 18px; display: block; }\n\n.cf-grg-list {\n  flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;\n  padding: 6px 0 calc(14px + env(safe-area-inset-bottom, 0px));\n}\n.cf-grg-row {\n  align-items: center; gap: 13px;\n  width: 100%; min-height: 56px;\n  padding: 14px 16px; background: transparent;\n  border: 0; border-bottom: 1px solid #1c1916;\n  color: #E8E4E0; font-family: inherit; font-size: 17px; font-weight: 700;\n  text-align: left; text-decoration: none; cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cf-grg-row:active { background: #1E1A17; }\n.cf-grg-row .cf-grg-name { flex: 1 1 auto; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.cf-grg-row .cf-grg-count {\n  flex: 0 0 auto; font-size: 13px; font-weight: 700; color: #A8A29E;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 999px;\n  padding: 3px 11px; min-width: 24px; text-align: center;\n}\n.cf-grg-row .cf-grg-go { flex: 0 0 auto; width: 18px; height: 18px; color: #6b6660; display: block; }\n/* disabled (count 0) gen rows */\n.cf-grg-row.cf-grg-dis { cursor: default; opacity: .5; }\n.cf-grg-row.cf-grg-dis:active { background: transparent; }\n.cf-grg-row.cf-grg-dis .cf-grg-count { color: #6b6660; }\n.cf-grg-row.cf-grg-dis .cf-grg-soon {\n  flex: 0 0 auto; font-size: 11.5px; font-weight: 800; letter-spacing: .04em;\n  text-transform: uppercase; color: #A8A29E;\n}\n\n/* \"Show all bikes\" escape + clear, in a footer band of the sheet */\n.cf-grg-foot {\n  flex: 0 0 auto; gap: 11px;\n  padding: 12px 16px calc(14px + env(safe-area-inset-bottom, 0px));\n  border-top: 1px solid #262220; background: #161311;\n}\n.cf-grg-foot a, .cf-grg-foot button {\n  flex: 1 1 auto; align-items: center; justify-content: center; gap: 8px;\n  min-height: 52px; padding: 14px 16px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 12px;\n  color: #E8E4E0; font-family: inherit; font-size: 16px; font-weight: 800; letter-spacing: .01em;\n  text-decoration: none; cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.cf-grg-foot a:active, .cf-grg-foot button:active { background: #262220; }\n.cf-grg-foot svg { width: 18px; height: 18px; display: block; }\n.cf-grg-foot .cf-grg-clear { color: #A8A29E; }\n\n/* ---------- \"Fits your <model>\" hint (loop cards + PDP) ---------- */\n.cf-grg-fits {\n  align-items: center; gap: 6px;\n  margin: 5px 0 2px;\n  font-family: inherit; font-size: 13px; font-weight: 800; letter-spacing: .015em;\n  color: #46c06a; /* subtle green = compatibility, NOT the scarce brand red */\n}\n.cf-grg-fits svg { width: 15px; height: 15px; display: block; }\n/* PDP variant: a touch more prominent, placed in the summary */\n.cf-grg-fits.cf-grg-fits-pdp { font-size: 15px; margin: 12px 0 2px; }\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   Owns every `display:` that turns the chrome ON. Desktop never matches.\n   ==================================================================== */\n@media (max-width: 768px) {\n  .cf-grg-pillwrap { display: flex; }\n  .cf-grg-pill     { display: inline-flex; }\n  .cf-grg-shopmine { display: inline-flex; }       /* JS toggles per saved bike */\n  .cf-grg-scrim    { display: block; }\n  .cf-grg-sheet    { display: flex; }\n  .cf-grg-head     { display: flex; }\n  .cf-grg-back     { display: none; }              /* JS shows when drilled in  */\n  .cf-grg-back.cf-grg-show { display: inline-flex; }\n  .cf-grg-x        { display: inline-flex; }\n  .cf-grg-row      { display: flex; }\n  .cf-grg-foot     { display: flex; }\n  .cf-grg-foot .cf-grg-clear { display: none; }    /* JS shows when a bike set  */\n  .cf-grg-foot .cf-grg-clear.cf-grg-show { display: inline-flex; }\n  .cf-grg-fits     { display: inline-flex; }\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native  (any width)\n   Mirrors every `display:` from the mobile scope so the real app gets the\n   skin even on a tablet-width screen.\n   ==================================================================== */\nhtml.cf-native .cf-grg-pillwrap { display: flex; }\nhtml.cf-native .cf-grg-pill     { display: inline-flex; }\nhtml.cf-native .cf-grg-shopmine { display: inline-flex; }\nhtml.cf-native .cf-grg-scrim    { display: block; }\nhtml.cf-native .cf-grg-sheet    { display: flex; }\nhtml.cf-native .cf-grg-head     { display: flex; }\nhtml.cf-native .cf-grg-back     { display: none; }\nhtml.cf-native .cf-grg-back.cf-grg-show { display: inline-flex; }\nhtml.cf-native .cf-grg-x        { display: inline-flex; }\nhtml.cf-native .cf-grg-row      { display: flex; }\nhtml.cf-native .cf-grg-foot     { display: flex; }\nhtml.cf-native .cf-grg-foot .cf-grg-clear { display: none; }\nhtml.cf-native .cf-grg-foot .cf-grg-clear.cf-grg-show { display: inline-flex; }\nhtml.cf-native .cf-grg-fits     { display: inline-flex; }\n\n@media (prefers-reduced-motion: reduce) {\n  .cf-grg-scrim,\n  .cf-grg-sheet { transition: none; }\n}\n\n\n/* ===========================================================================\n   Carbon Freaks app-skin \u2014 MODULE: filters  (RESPONSIVE rework)\n   Sticky Sort/Filter bar (under header) + result count + bottom-sheet drawers.\n   Shop / category / product archive only. Surfaces the EXISTING sidebar\n   filters (YITH ajax / Shop-by-Part-Type / price) \u2014 does NOT rebuild filter\n   logic. Result count read from the REAL .woocommerce-result-count (never\n   fabricated).\n\n   ACTIVATION (per _contract.md): ALL visual skin CSS lives inside\n   @media (max-width:768px) AND is mirrored under html.cf-native. No\n   html.cf-app gate, no localStorage flag, no ?source=app dependence.\n   Desktop web (>768, not native) sees ZERO change \u2014 by construction.\n\n   The bar + sheets DOM is built unconditionally + idempotently by JS; CSS\n   alone decides visibility. STRUCTURAL behavior that mutates the real page\n   (inserting the bar, MOVING the sidebar widgets into the sheet) is gated on\n   window.cfIsMobile() so desktop keeps its real sidebar + ordering form.\n\n   Z-index band (per contract): scrim 99992, sheets 99993. Bar sits low\n   (sticky, just under the native header).\n   Dark tokens: canvas #0C0A09, cards #161311, raised #1E1A17,\n   hairlines #262220, text #E8E4E0, muted #A8A29E, accent #E10600 (scarce).\n   =========================================================================== */\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* ---------- sticky sort/filter bar (under the header) ---------- */\n  .cf-filters-bar {\n    display: flex;\n    position: sticky; top: 0; z-index: 60;          /* below tab bar; under native header */\n    align-items: stretch; gap: 1px;\n    background: #1E1A17; border-bottom: 1px solid #262220;\n    box-shadow: 0 4px 14px rgba(0,0,0,.35);\n    font-family: inherit; -webkit-tap-highlight-color: transparent;\n  }\n  .cf-filters-btn {\n    flex: 1 1 0; display: flex; align-items: center; justify-content: center; gap: 9px;\n    min-height: 54px; padding: 0 14px; border: 0; background: transparent;\n    color: #E8E4E0; font-size: 16px; font-weight: 700; letter-spacing: .01em;\n    cursor: pointer; font-family: inherit;\n  }\n  .cf-filters-btn:active { background: #161311; }\n  .cf-filters-btn svg { width: 21px; height: 21px; flex: none; }\n  .cf-filters-btn + .cf-filters-btn { border-left: 1px solid #262220; }\n  .cf-filters-count {\n    display: inline-flex; align-items: center; justify-content: center;\n    min-width: 20px; height: 20px; padding: 0 6px; margin-left: 2px;\n    border-radius: 10px; background: #E10600; color: #fff;\n    font-size: 12px; font-weight: 800; line-height: 20px;\n  }\n  .cf-filters-resultcount {\n    flex: none; display: flex; align-items: center; justify-content: center;\n    padding: 0 16px; color: #A8A29E; font-size: 13px; font-weight: 600;\n    white-space: nowrap; max-width: 46%; overflow: hidden; text-overflow: ellipsis;\n  }\n\n  /* hide the original (theme) result count + ordering once surfaced in bar/sheet */\n  body.cf-filters-on .woocommerce-result-count { display: none !important; }\n  body.cf-filters-on form.woocommerce-ordering { display: none !important; }\n\n  /* ---------- scrim ---------- */\n  .cf-filters-scrim {\n    position: fixed; inset: 0; z-index: 99992; background: rgba(0,0,0,.62);\n    opacity: 0; visibility: hidden; transition: opacity .2s ease, visibility .2s ease;\n  }\n  .cf-filters-scrim.cf-open { opacity: 1; visibility: visible; }\n\n  /* ---------- bottom-sheet drawer (shared by filter + sort) ---------- */\n  .cf-filters-sheet {\n    position: fixed; left: 0; right: 0; bottom: 0; z-index: 99993;\n    display: flex; flex-direction: column;\n    max-height: 84vh; background: #1E1A17;\n    border-top: 1px solid #262220; border-radius: 18px 18px 0 0;\n    box-shadow: 0 -10px 30px rgba(0,0,0,.6);\n    padding-bottom: env(safe-area-inset-bottom, 0px);\n    transform: translateY(100%); transition: transform .26s cubic-bezier(.22,.61,.36,1);\n    font-family: inherit;\n  }\n  .cf-filters-sheet.cf-open { transform: translateY(0); }\n  .cf-filters-grip {\n    width: 40px; height: 5px; border-radius: 4px; background: #3a3430;\n    margin: 10px auto 4px;\n  }\n  .cf-filters-head {\n    display: flex; align-items: center; justify-content: space-between;\n    padding: 6px 16px 14px; border-bottom: 1px solid #262220;\n  }\n  .cf-filters-head h3 {\n    margin: 0; color: #E8E4E0; font-size: 18px; font-weight: 800; letter-spacing: .01em;\n  }\n  .cf-filters-close {\n    border: 0; background: transparent; color: #A8A29E; cursor: pointer;\n    width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\n    margin: -8px -12px -8px 0; -webkit-tap-highlight-color: transparent;\n  }\n  .cf-filters-close svg { width: 22px; height: 22px; }\n  .cf-filters-body {\n    overflow-y: auto; -webkit-overflow-scrolling: touch;\n    padding: 16px 16px 20px;\n  }\n\n  /* ---- restyle the moved WooCommerce/YITH widgets so they read on dark ---- */\n  .cf-filters-body .widget,\n  .cf-filters-body .wp-block-group,\n  .cf-filters-body .elementor-widget { margin: 0 0 24px; }\n  .cf-filters-body .widget:last-child { margin-bottom: 4px; }\n  .cf-filters-body .widgettitle,\n  .cf-filters-body .widget-title,\n  .cf-filters-body .wp-block-heading,\n  .cf-filters-body h2,\n  .cf-filters-body h3,\n  .cf-filters-body h4 {\n    color: #E8E4E0; font-size: 14px; font-weight: 800; text-transform: uppercase;\n    letter-spacing: .06em; margin: 0 0 12px; padding: 0;\n  }\n  .cf-filters-body ul { list-style: none; margin: 0; padding: 0; }\n  .cf-filters-body li { margin: 0; }\n  .cf-filters-body a {\n    color: #E8E4E0; text-decoration: none; display: inline-flex; align-items: center;\n    gap: 9px; min-height: 48px; padding: 2px 0; line-height: 1.3; font-size: 16px;\n  }\n  .cf-filters-body a:active { color: #fff; }\n  .cf-filters-body .count,\n  .cf-filters-body .yith-wcan-label-count { color: #A8A29E; font-weight: 600; }\n  /* chosen / active filter terms get the scarce accent */\n  .cf-filters-body .chosen > a,\n  .cf-filters-body .yith-wcan-active > a,\n  .cf-filters-body .current-cat > a,\n  .cf-filters-body li.active > a { color: #E10600; font-weight: 700; }\n  /* form controls inside (price slider, selects, inputs) */\n  .cf-filters-body input[type=\"text\"],\n  .cf-filters-body input[type=\"number\"],\n  .cf-filters-body select {\n    background: #161311; color: #E8E4E0; border: 1px solid #262220;\n    border-radius: 8px; min-height: 48px; padding: 8px 12px; font-size: 16px;\n    font-family: inherit; max-width: 100%;\n  }\n  .cf-filters-body button,\n  .cf-filters-body .button {\n    background: #E10600; color: #fff; border: 0; border-radius: 10px;\n    min-height: 48px; padding: 0 20px; font-weight: 700; font-size: 16px;\n    cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n  }\n  .cf-filters-body button:active,\n  .cf-filters-body .button:active { background: #b80500; }\n  /* price slider (jquery-ui) tint to accent */\n  .cf-filters-body .ui-slider,\n  .cf-filters-body .price_slider {\n    background: #262220 !important; border: 0 !important; height: 4px !important;\n  }\n  .cf-filters-body .ui-slider-range,\n  .cf-filters-body .price_slider .ui-slider-range { background: #E10600 !important; }\n  .cf-filters-body .ui-slider-handle,\n  .cf-filters-body .price_slider .ui-slider-handle {\n    background: #E8E4E0 !important; border: 0 !important; border-radius: 50% !important;\n    width: 20px !important; height: 20px !important; top: -8px !important;\n  }\n  .cf-filters-body .price_slider_amount { color: #A8A29E; font-size: 14px; }\n  .cf-filters-empty { color: #A8A29E; font-size: 15px; line-height: 1.5; }\n\n  /* ---------- sort sheet: native list of the orderby options ---------- */\n  .cf-filters-sortlist { display: flex; flex-direction: column; }\n  .cf-filters-sortopt {\n    display: flex; align-items: center; justify-content: space-between; gap: 12px;\n    width: 100%; text-align: left; background: transparent; border: 0;\n    border-bottom: 1px solid #262220; color: #E8E4E0;\n    min-height: 56px; padding: 0 2px; font-size: 17px; font-weight: 600;\n    cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n  }\n  .cf-filters-sortopt:last-child { border-bottom: 0; }\n  .cf-filters-sortopt:active { color: #fff; }\n  .cf-filters-sortopt[aria-checked=\"true\"] { color: #E10600; font-weight: 800; }\n  .cf-filters-sortopt .cf-filters-tick { width: 20px; height: 20px; flex: none; opacity: 0; }\n  .cf-filters-sortopt[aria-checked=\"true\"] .cf-filters-tick { opacity: 1; }\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native  (any width)\n   Mirrors EVERY visual rule from the mobile scope so the real app gets\n   the skin even on a tablet-width screen.\n   ==================================================================== */\nhtml.cf-native .cf-filters-bar {\n  display: flex;\n  position: sticky; top: 0; z-index: 60;\n  align-items: stretch; gap: 1px;\n  background: #1E1A17; border-bottom: 1px solid #262220;\n  box-shadow: 0 4px 14px rgba(0,0,0,.35);\n  font-family: inherit; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-native .cf-filters-btn {\n  flex: 1 1 0; display: flex; align-items: center; justify-content: center; gap: 9px;\n  min-height: 54px; padding: 0 14px; border: 0; background: transparent;\n  color: #E8E4E0; font-size: 16px; font-weight: 700; letter-spacing: .01em;\n  cursor: pointer; font-family: inherit;\n}\nhtml.cf-native .cf-filters-btn:active { background: #161311; }\nhtml.cf-native .cf-filters-btn svg { width: 21px; height: 21px; flex: none; }\nhtml.cf-native .cf-filters-btn + .cf-filters-btn { border-left: 1px solid #262220; }\nhtml.cf-native .cf-filters-count {\n  display: inline-flex; align-items: center; justify-content: center;\n  min-width: 20px; height: 20px; padding: 0 6px; margin-left: 2px;\n  border-radius: 10px; background: #E10600; color: #fff;\n  font-size: 12px; font-weight: 800; line-height: 20px;\n}\nhtml.cf-native .cf-filters-resultcount {\n  flex: none; display: flex; align-items: center; justify-content: center;\n  padding: 0 16px; color: #A8A29E; font-size: 13px; font-weight: 600;\n  white-space: nowrap; max-width: 46%; overflow: hidden; text-overflow: ellipsis;\n}\nhtml.cf-native body.cf-filters-on .woocommerce-result-count { display: none !important; }\nhtml.cf-native body.cf-filters-on form.woocommerce-ordering { display: none !important; }\n\nhtml.cf-native .cf-filters-scrim {\n  position: fixed; inset: 0; z-index: 99992; background: rgba(0,0,0,.62);\n  opacity: 0; visibility: hidden; transition: opacity .2s ease, visibility .2s ease;\n}\nhtml.cf-native .cf-filters-scrim.cf-open { opacity: 1; visibility: visible; }\n\nhtml.cf-native .cf-filters-sheet {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99993;\n  display: flex; flex-direction: column;\n  max-height: 84vh; background: #1E1A17;\n  border-top: 1px solid #262220; border-radius: 18px 18px 0 0;\n  box-shadow: 0 -10px 30px rgba(0,0,0,.6);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  transform: translateY(100%); transition: transform .26s cubic-bezier(.22,.61,.36,1);\n  font-family: inherit;\n}\nhtml.cf-native .cf-filters-sheet.cf-open { transform: translateY(0); }\nhtml.cf-native .cf-filters-grip {\n  width: 40px; height: 5px; border-radius: 4px; background: #3a3430;\n  margin: 10px auto 4px;\n}\nhtml.cf-native .cf-filters-head {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 6px 16px 14px; border-bottom: 1px solid #262220;\n}\nhtml.cf-native .cf-filters-head h3 {\n  margin: 0; color: #E8E4E0; font-size: 18px; font-weight: 800; letter-spacing: .01em;\n}\nhtml.cf-native .cf-filters-close {\n  border: 0; background: transparent; color: #A8A29E; cursor: pointer;\n  width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\n  margin: -8px -12px -8px 0; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-native .cf-filters-close svg { width: 22px; height: 22px; }\nhtml.cf-native .cf-filters-body {\n  overflow-y: auto; -webkit-overflow-scrolling: touch;\n  padding: 16px 16px 20px;\n}\n\nhtml.cf-native .cf-filters-body .widget,\nhtml.cf-native .cf-filters-body .wp-block-group,\nhtml.cf-native .cf-filters-body .elementor-widget { margin: 0 0 24px; }\nhtml.cf-native .cf-filters-body .widget:last-child { margin-bottom: 4px; }\nhtml.cf-native .cf-filters-body .widgettitle,\nhtml.cf-native .cf-filters-body .widget-title,\nhtml.cf-native .cf-filters-body .wp-block-heading,\nhtml.cf-native .cf-filters-body h2,\nhtml.cf-native .cf-filters-body h3,\nhtml.cf-native .cf-filters-body h4 {\n  color: #E8E4E0; font-size: 14px; font-weight: 800; text-transform: uppercase;\n  letter-spacing: .06em; margin: 0 0 12px; padding: 0;\n}\nhtml.cf-native .cf-filters-body ul { list-style: none; margin: 0; padding: 0; }\nhtml.cf-native .cf-filters-body li { margin: 0; }\nhtml.cf-native .cf-filters-body a {\n  color: #E8E4E0; text-decoration: none; display: inline-flex; align-items: center;\n  gap: 9px; min-height: 48px; padding: 2px 0; line-height: 1.3; font-size: 16px;\n}\nhtml.cf-native .cf-filters-body a:active { color: #fff; }\nhtml.cf-native .cf-filters-body .count,\nhtml.cf-native .cf-filters-body .yith-wcan-label-count { color: #A8A29E; font-weight: 600; }\nhtml.cf-native .cf-filters-body .chosen > a,\nhtml.cf-native .cf-filters-body .yith-wcan-active > a,\nhtml.cf-native .cf-filters-body .current-cat > a,\nhtml.cf-native .cf-filters-body li.active > a { color: #E10600; font-weight: 700; }\nhtml.cf-native .cf-filters-body input[type=\"text\"],\nhtml.cf-native .cf-filters-body input[type=\"number\"],\nhtml.cf-native .cf-filters-body select {\n  background: #161311; color: #E8E4E0; border: 1px solid #262220;\n  border-radius: 8px; min-height: 48px; padding: 8px 12px; font-size: 16px;\n  font-family: inherit; max-width: 100%;\n}\nhtml.cf-native .cf-filters-body button,\nhtml.cf-native .cf-filters-body .button {\n  background: #E10600; color: #fff; border: 0; border-radius: 10px;\n  min-height: 48px; padding: 0 20px; font-weight: 700; font-size: 16px;\n  cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n}\nhtml.cf-native .cf-filters-body button:active,\nhtml.cf-native .cf-filters-body .button:active { background: #b80500; }\nhtml.cf-native .cf-filters-body .ui-slider,\nhtml.cf-native .cf-filters-body .price_slider {\n  background: #262220 !important; border: 0 !important; height: 4px !important;\n}\nhtml.cf-native .cf-filters-body .ui-slider-range,\nhtml.cf-native .cf-filters-body .price_slider .ui-slider-range { background: #E10600 !important; }\nhtml.cf-native .cf-filters-body .ui-slider-handle,\nhtml.cf-native .cf-filters-body .price_slider .ui-slider-handle {\n  background: #E8E4E0 !important; border: 0 !important; border-radius: 50% !important;\n  width: 20px !important; height: 20px !important; top: -8px !important;\n}\nhtml.cf-native .cf-filters-body .price_slider_amount { color: #A8A29E; font-size: 14px; }\nhtml.cf-native .cf-filters-empty { color: #A8A29E; font-size: 15px; line-height: 1.5; }\n\nhtml.cf-native .cf-filters-sortlist { display: flex; flex-direction: column; }\nhtml.cf-native .cf-filters-sortopt {\n  display: flex; align-items: center; justify-content: space-between; gap: 12px;\n  width: 100%; text-align: left; background: transparent; border: 0;\n  border-bottom: 1px solid #262220; color: #E8E4E0;\n  min-height: 56px; padding: 0 2px; font-size: 17px; font-weight: 600;\n  cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n}\nhtml.cf-native .cf-filters-sortopt:last-child { border-bottom: 0; }\nhtml.cf-native .cf-filters-sortopt:active { color: #fff; }\nhtml.cf-native .cf-filters-sortopt[aria-checked=\"true\"] { color: #E10600; font-weight: 800; }\nhtml.cf-native .cf-filters-sortopt .cf-filters-tick { width: 20px; height: 20px; flex: none; opacity: 0; }\nhtml.cf-native .cf-filters-sortopt[aria-checked=\"true\"] .cf-filters-tick { opacity: 1; }\n\n\n/* ====================================================================\n   DEFAULT-HIDE the JS-injected nodes (cf-pdp-fin/reviews/fit). The JS builds\n   them on EVERY width (incl. desktop) so CSS alone must gate visibility. Mirror\n   of the _base.html pattern: hidden by default; the mobile + cf-native scopes\n   below flip them on. Without this, desktop web (>768, not native) would render\n   these injected elements as default-styled blocks \u2014 a desktop leak.\n   ==================================================================== */\n.cf-pdp-fin,\n.cf-pdp-reviews,\n.cf-pdp-fit { display: none; }\n\n/* ====================================================================\n   (1)(2)(3)(4)(5) visual CSS \u2014 duplicated across the two skin scopes.\n   MOBILE WEB scope first; the html.cf-native mirror follows below.\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* ---------- (1) bigger price + title (app-like) ---------- */\n  body.single-product .product_title.entry-title,\n  body.single-product .product_title {\n    font-size: 28px !important;\n    line-height: 1.2 !important;\n    font-weight: 800 !important;\n    color: #E8E4E0;\n    letter-spacing: -0.01em;\n    margin-bottom: 10px;\n  }\n  body.single-product .entry-summary .price,\n  body.single-product .summary .price,\n  body.single-product p.price {\n    font-size: 26px !important;\n    font-weight: 800 !important;\n    color: #E8E4E0;\n    line-height: 1.25;\n  }\n  body.single-product .entry-summary .price del,\n  body.single-product .summary .price del,\n  body.single-product p.price del {\n    font-size: 17px !important;\n    font-weight: 500 !important;\n    color: #A8A29E;\n  }\n  body.single-product .entry-summary .price ins,\n  body.single-product .summary .price ins,\n  body.single-product p.price ins { text-decoration: none; }\n\n  /* ---------- (2) financing near price ---------- */\n  .cf-pdp-fin {\n    display: block; margin: 10px 0 4px;\n    font-family: inherit; font-size: 15px; line-height: 1.45; color: #A8A29E;\n  }\n  .cf-pdp-fin a { color: #E8E4E0; text-decoration: underline; }\n  .cf-pdp-fin img, .cf-pdp-fin svg { vertical-align: middle; max-height: 20px; width: auto; }\n  .cf-pdp-fin .affirm-as-low-as,\n  .cf-pdp-fin [data-pp-message],\n  .cf-pdp-fin .klarna-placement,\n  .cf-pdp-fin .afterpay-paragraph { background: transparent !important; }\n\n  /* ---------- (3) graphite tile behind gallery ---------- */\n  body.single-product .woocommerce-product-gallery {\n    background:\n      radial-gradient(120% 120% at 50% 30%, #1C1815 0%, #161311 55%, #120F0D 100%);\n    border: 1px solid #262220; border-radius: 14px;\n    padding: 10px; overflow: hidden;\n  }\n  body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__wrapper,\n  body.single-product .woocommerce-product-gallery .flex-viewport {\n    background: transparent !important;\n  }\n  body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__image {\n    background:\n      radial-gradient(115% 115% at 50% 28%, #1C1815 0%, #161311 60%, #120F0D 100%);\n    border-radius: 10px; overflow: hidden;\n  }\n  body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__image a {\n    background: transparent !important;\n  }\n  body.single-product .woocommerce-product-gallery .flex-control-thumbs {\n    background: transparent !important; margin-top: 10px;\n  }\n  body.single-product .woocommerce-product-gallery .flex-control-thumbs li img {\n    border: 1px solid #262220; border-radius: 8px; background: #161311;\n  }\n  body.single-product .woocommerce-product-gallery .flex-control-thumbs li img.flex-active {\n    border-color: #E10600;\n  }\n\n  /* ---------- (4) reviews jump anchor near title ---------- */\n  .cf-pdp-reviews {\n    display: inline-flex; align-items: center; gap: 7px;\n    margin: 4px 0 12px; padding: 0;\n    background: none; border: 0; cursor: pointer;\n    font-family: inherit; font-size: 15px; font-weight: 700; letter-spacing: .01em;\n    color: #A8A29E; -webkit-tap-highlight-color: transparent;\n    min-height: 48px;\n  }\n  .cf-pdp-reviews:active { color: #E8E4E0; }\n  .cf-pdp-reviews svg { width: 17px; height: 17px; display: block; color: #A8A29E; }\n  .cf-pdp-reviews u { text-decoration: underline; text-underline-offset: 2px; }\n\n  /* ---------- (5) fits-your-bike line ---------- */\n  .cf-pdp-fit {\n    display: flex; align-items: flex-start; gap: 11px;\n    margin: 14px 0 8px; padding: 14px 15px;\n    background: #161311; border: 1px solid #262220; border-radius: 12px;\n    font-family: inherit; font-size: 15.5px; line-height: 1.4; color: #E8E4E0;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .cf-pdp-fit .cf-pdp-fit-ico { flex: 0 0 auto; width: 22px; height: 22px; margin-top: 1px; display: block; }\n  .cf-pdp-fit .cf-pdp-fit-body { flex: 1 1 auto; min-width: 0; }\n  .cf-pdp-fit .cf-pdp-fit-head { font-weight: 700; letter-spacing: .005em; }\n  .cf-pdp-fit .cf-pdp-fit-sub {\n    display: block; margin-top: 3px; font-size: 13.5px; font-weight: 600; color: #A8A29E;\n  }\n  .cf-pdp-fit .cf-pdp-fit-sub b { color: #E8E4E0; font-weight: 700; }\n  .cf-pdp-fit.cf-pdp-fit-yes { border-color: #244a31; background: #12140f; }\n  .cf-pdp-fit.cf-pdp-fit-yes .cf-pdp-fit-ico { color: #46c06a; }\n  .cf-pdp-fit.cf-pdp-fit-yes .cf-pdp-fit-head { color: #6fd089; }\n  .cf-pdp-fit.cf-pdp-fit-no { border-color: #4a3a1c; background: #161208; }\n  .cf-pdp-fit.cf-pdp-fit-no .cf-pdp-fit-ico { color: #d9a441; }\n  .cf-pdp-fit.cf-pdp-fit-no .cf-pdp-fit-head { color: #e0b65a; }\n  .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-ico { color: #A8A29E; }\n  .cf-pdp-fit .cf-pdp-fit-act {\n    flex: 0 0 auto; align-self: center;\n    display: inline-flex; align-items: center; justify-content: center;\n    min-height: 48px; padding: 9px 15px;\n    background: #1E1A17; border: 1px solid #262220; border-radius: 999px;\n    color: #E8E4E0; font-family: inherit; font-size: 14px; font-weight: 700; letter-spacing: .01em;\n    text-decoration: none; cursor: pointer; white-space: nowrap;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .cf-pdp-fit .cf-pdp-fit-act:active { background: #262220; }\n  .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-act { background: #E10600; color: #fff; border-color: #E10600; }\n  .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-act:active { background: #b80500; }\n\n}\n\n/* ====================================================================\n   NATIVE APP scope \u2014 html.cf-native (any width). Mirrors EVERY rule above.\n   ==================================================================== */\n/* (1) bigger price + title */\nhtml.cf-native body.single-product .product_title.entry-title,\nhtml.cf-native body.single-product .product_title {\n  font-size: 28px !important; line-height: 1.2 !important; font-weight: 800 !important;\n  color: #E8E4E0; letter-spacing: -0.01em; margin-bottom: 10px;\n}\nhtml.cf-native body.single-product .entry-summary .price,\nhtml.cf-native body.single-product .summary .price,\nhtml.cf-native body.single-product p.price {\n  font-size: 26px !important; font-weight: 800 !important; color: #E8E4E0; line-height: 1.25;\n}\nhtml.cf-native body.single-product .entry-summary .price del,\nhtml.cf-native body.single-product .summary .price del,\nhtml.cf-native body.single-product p.price del {\n  font-size: 17px !important; font-weight: 500 !important; color: #A8A29E;\n}\nhtml.cf-native body.single-product .entry-summary .price ins,\nhtml.cf-native body.single-product .summary .price ins,\nhtml.cf-native body.single-product p.price ins { text-decoration: none; }\n\n/* (2) financing near price */\nhtml.cf-native .cf-pdp-fin {\n  display: block; margin: 10px 0 4px;\n  font-family: inherit; font-size: 15px; line-height: 1.45; color: #A8A29E;\n}\nhtml.cf-native .cf-pdp-fin a { color: #E8E4E0; text-decoration: underline; }\nhtml.cf-native .cf-pdp-fin img, html.cf-native .cf-pdp-fin svg { vertical-align: middle; max-height: 20px; width: auto; }\nhtml.cf-native .cf-pdp-fin .affirm-as-low-as,\nhtml.cf-native .cf-pdp-fin [data-pp-message],\nhtml.cf-native .cf-pdp-fin .klarna-placement,\nhtml.cf-native .cf-pdp-fin .afterpay-paragraph { background: transparent !important; }\n\n/* (3) graphite tile behind gallery */\nhtml.cf-native body.single-product .woocommerce-product-gallery {\n  background:\n    radial-gradient(120% 120% at 50% 30%, #1C1815 0%, #161311 55%, #120F0D 100%);\n  border: 1px solid #262220; border-radius: 14px; padding: 10px; overflow: hidden;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__wrapper,\nhtml.cf-native body.single-product .woocommerce-product-gallery .flex-viewport {\n  background: transparent !important;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__image {\n  background:\n    radial-gradient(115% 115% at 50% 28%, #1C1815 0%, #161311 60%, #120F0D 100%);\n  border-radius: 10px; overflow: hidden;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .woocommerce-product-gallery__image a {\n  background: transparent !important;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .flex-control-thumbs {\n  background: transparent !important; margin-top: 10px;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .flex-control-thumbs li img {\n  border: 1px solid #262220; border-radius: 8px; background: #161311;\n}\nhtml.cf-native body.single-product .woocommerce-product-gallery .flex-control-thumbs li img.flex-active {\n  border-color: #E10600;\n}\n\n/* (4) reviews jump anchor */\nhtml.cf-native .cf-pdp-reviews {\n  display: inline-flex; align-items: center; gap: 7px;\n  margin: 4px 0 12px; padding: 0; background: none; border: 0; cursor: pointer;\n  font-family: inherit; font-size: 15px; font-weight: 700; letter-spacing: .01em;\n  color: #A8A29E; -webkit-tap-highlight-color: transparent; min-height: 48px;\n}\nhtml.cf-native .cf-pdp-reviews:active { color: #E8E4E0; }\nhtml.cf-native .cf-pdp-reviews svg { width: 17px; height: 17px; display: block; color: #A8A29E; }\nhtml.cf-native .cf-pdp-reviews u { text-decoration: underline; text-underline-offset: 2px; }\n\n/* (5) fits-your-bike line */\nhtml.cf-native .cf-pdp-fit {\n  display: flex; align-items: flex-start; gap: 11px;\n  margin: 14px 0 8px; padding: 14px 15px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n  font-family: inherit; font-size: 15.5px; line-height: 1.4; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-ico { flex: 0 0 auto; width: 22px; height: 22px; margin-top: 1px; display: block; }\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-body { flex: 1 1 auto; min-width: 0; }\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-head { font-weight: 700; letter-spacing: .005em; }\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-sub {\n  display: block; margin-top: 3px; font-size: 13.5px; font-weight: 600; color: #A8A29E;\n}\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-sub b { color: #E8E4E0; font-weight: 700; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-yes { border-color: #244a31; background: #12140f; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-yes .cf-pdp-fit-ico { color: #46c06a; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-yes .cf-pdp-fit-head { color: #6fd089; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-no { border-color: #4a3a1c; background: #161208; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-no .cf-pdp-fit-ico { color: #d9a441; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-no .cf-pdp-fit-head { color: #e0b65a; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-ico { color: #A8A29E; }\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-act {\n  flex: 0 0 auto; align-self: center;\n  display: inline-flex; align-items: center; justify-content: center;\n  min-height: 48px; padding: 9px 15px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 999px;\n  color: #E8E4E0; font-family: inherit; font-size: 14px; font-weight: 700; letter-spacing: .01em;\n  text-decoration: none; cursor: pointer; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-native .cf-pdp-fit .cf-pdp-fit-act:active { background: #262220; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-act { background: #E10600; color: #fff; border-color: #E10600; }\nhtml.cf-native .cf-pdp-fit.cf-pdp-fit-ask .cf-pdp-fit-act:active { background: #b80500; }\n\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* ---- page canvas (My Account only) ---- */\n  body.woocommerce-account .woocommerce-MyAccount-navigation {\n    float: none !important; width: 100% !important; margin: 0 0 18px !important;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-content {\n    float: none !important; width: 100% !important; margin: 0 !important;\n    color: #E8E4E0;\n  }\n  body.woocommerce-account .woocommerce { color: #E8E4E0; }\n  body.woocommerce-account .woocommerce-MyAccount-content a { color: #E8E4E0; }\n  body.woocommerce-account .woocommerce-MyAccount-content a:hover { color: #E10600; }\n\n  /* ---- restyled nav: large thumb-friendly rows (bigger app sizing) ---- */\n  body.woocommerce-account .woocommerce-MyAccount-navigation ul {\n    list-style: none !important; margin: 0 !important; padding: 0 !important;\n    display: flex; flex-direction: column; gap: 12px;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li {\n    margin: 0 !important; padding: 0 !important; border: 0 !important; list-style: none !important;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li::before,\n  body.woocommerce-account .woocommerce-MyAccount-navigation li::marker { content: none !important; }\n\n  body.woocommerce-account .woocommerce-MyAccount-navigation li a {\n    display: flex; align-items: center; gap: 16px;\n    min-height: 60px; padding: 16px 18px;\n    background: #161311; border: 1px solid #262220; border-radius: 14px;\n    color: #E8E4E0 !important; font-size: 17px; font-weight: 700; line-height: 1.2;\n    text-decoration: none !important; -webkit-tap-highlight-color: transparent;\n    position: relative; transition: background .15s ease, border-color .15s ease;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li a:active {\n    background: #1E1A17; border-color: #3a3531;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a {\n    border-color: #E10600; background: #1E1A17;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li a::after {\n    content: \"\"; margin-left: auto; flex: 0 0 auto;\n    width: 9px; height: 9px; border-right: 2px solid #A8A29E; border-bottom: 2px solid #A8A29E;\n    transform: rotate(-45deg); opacity: .8;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico {\n    flex: 0 0 auto; width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center;\n    color: #A8A29E;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico svg { width: 24px; height: 24px; display: block; }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a .cf-acct-ico { color: #E10600; }\n\n  /* logout row reads as a quiet destructive action */\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a {\n    color: #A8A29E !important; font-weight: 600; background: transparent; border-style: dashed;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a::after { content: none; }\n\n  /* affiliate / Goaffpro row gets the accent treatment (only on a REAL existing link) */\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a {\n    background: #1E1A17; border-color: #E10600;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a .cf-acct-ico { color: #E10600; }\n\n  /* ---- account hub header (greeting), built by JS ---- */\n  body.woocommerce-account .cf-acct-head {\n    display: flex; align-items: center; gap: 16px;\n    margin: 6px 0 18px; padding: 18px;\n    background: #161311; border: 1px solid #262220; border-radius: 16px;\n  }\n  body.woocommerce-account .cf-acct-head .cf-acct-avatar {\n    flex: 0 0 auto; width: 54px; height: 54px; border-radius: 50%;\n    background: #1E1A17; border: 1px solid #262220;\n    display: flex; align-items: center; justify-content: center;\n    color: #A8A29E; font-weight: 700; font-size: 21px;\n  }\n  body.woocommerce-account .cf-acct-head .cf-acct-avatar svg { width: 26px; height: 26px; }\n  body.woocommerce-account .cf-acct-head .cf-acct-hi { font-size: 14px; color: #A8A29E; font-weight: 600; }\n  body.woocommerce-account .cf-acct-head .cf-acct-name { font-size: 22px; color: #E8E4E0; font-weight: 800; line-height: 1.2; }\n\n  /* ---- content area cards: tables / orders / addresses on dark ---- */\n  body.woocommerce-account .woocommerce-MyAccount-content table.woocommerce-orders-table,\n  body.woocommerce-account .woocommerce-MyAccount-content table.shop_table {\n    background: #161311; border: 1px solid #262220; border-radius: 14px; overflow: hidden;\n    color: #E8E4E0; border-collapse: separate; border-spacing: 0; font-size: 15px;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-content table th { color: #A8A29E; }\n  body.woocommerce-account .woocommerce-MyAccount-content table td,\n  body.woocommerce-account .woocommerce-MyAccount-content table th { border-color: #262220 !important; }\n  body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address {\n    background: #161311; border: 1px solid #262220; border-radius: 14px; padding: 16px; margin-bottom: 14px;\n  }\n  body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address address { color: #E8E4E0; }\n  body.woocommerce-account .woocommerce-MyAccount-content .title h3 { color: #E8E4E0; }\n\n  /* ---- form fields (account details, addresses, login, register) on dark ---- */\n  body.woocommerce-account .woocommerce form .form-row label,\n  body.woocommerce-account .woocommerce-MyAccount-content label { color: #A8A29E; font-size: 15px; }\n  body.woocommerce-account .woocommerce input.input-text,\n  body.woocommerce-account .woocommerce input[type=\"text\"],\n  body.woocommerce-account .woocommerce input[type=\"email\"],\n  body.woocommerce-account .woocommerce input[type=\"tel\"],\n  body.woocommerce-account .woocommerce input[type=\"password\"],\n  body.woocommerce-account .woocommerce select,\n  body.woocommerce-account .woocommerce textarea {\n    background: #1E1A17 !important; color: #E8E4E0 !important;\n    border: 1px solid #262220 !important; border-radius: 10px !important;\n    min-height: 50px; padding: 13px 14px !important; font-size: 16px; /* 16px = no iOS zoom-on-focus */\n    -webkit-appearance: none; appearance: none; box-shadow: none !important;\n  }\n  body.woocommerce-account .woocommerce input.input-text:focus,\n  body.woocommerce-account .woocommerce select:focus,\n  body.woocommerce-account .woocommerce textarea:focus {\n    border-color: #E10600 !important; outline: none;\n  }\n  body.woocommerce-account .woocommerce input::placeholder,\n  body.woocommerce-account .woocommerce textarea::placeholder { color: #6f6a66; }\n\n  /* primary buttons inside account = red CTA (full-width, large) */\n  body.woocommerce-account .woocommerce button.button,\n  body.woocommerce-account .woocommerce a.button,\n  body.woocommerce-account .woocommerce input.button,\n  body.woocommerce-account .woocommerce button[type=\"submit\"] {\n    background: #E10600 !important; color: #fff !important;\n    border: 0 !important; border-radius: 12px !important;\n    width: 100%; min-height: 52px; padding: 15px 20px !important;\n    font-size: 17px; font-weight: 800; letter-spacing: .02em;\n    -webkit-tap-highlight-color: transparent; box-shadow: none !important;\n  }\n  body.woocommerce-account .woocommerce button.button:active,\n  body.woocommerce-account .woocommerce a.button:active,\n  body.woocommerce-account .woocommerce input.button:active { background: #b80500 !important; }\n  /* secondary/edit links stay quiet */\n  body.woocommerce-account .woocommerce a.edit { color: #A8A29E !important; }\n\n  /* login / register layout: stack + breathe (works whether 1 or 2 columns) */\n  body.woocommerce-account .woocommerce .u-columns,\n  body.woocommerce-account .woocommerce .col2-set {\n    display: flex; flex-direction: column; gap: 8px; width: 100% !important;\n  }\n  body.woocommerce-account .woocommerce .u-column1,\n  body.woocommerce-account .woocommerce .u-column2,\n  body.woocommerce-account .woocommerce .col-1,\n  body.woocommerce-account .woocommerce .col-2 {\n    float: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important;\n  }\n  body.woocommerce-account .woocommerce form.woocommerce-form-login,\n  body.woocommerce-account .woocommerce form.woocommerce-form-register {\n    background: #161311; border: 1px solid #262220; border-radius: 16px;\n    padding: 20px 16px !important; margin: 0 !important;\n  }\n  body.woocommerce-account .woocommerce h2 { color: #E8E4E0; font-size: 22px; font-weight: 800; }\n  body.woocommerce-account .woocommerce .woocommerce-form-login__rememberme,\n  body.woocommerce-account .woocommerce .woocommerce-LostPassword a { color: #A8A29E; }\n\n  /* WooCommerce notices on dark */\n  body.woocommerce-account .woocommerce-message,\n  body.woocommerce-account .woocommerce-info,\n  body.woocommerce-account .woocommerce-error,\n  body.woocommerce-account .woocommerce-notice {\n    background: #1E1A17 !important; color: #E8E4E0 !important;\n    border-top: 3px solid #E10600 !important; border-radius: 10px; padding: 15px 16px !important; font-size: 16px;\n  }\n  body.woocommerce-account .woocommerce-message a,\n  body.woocommerce-account .woocommerce-info a { color: #E10600 !important; }\n\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native  (any width)\n   Mirrors EVERY rule from the mobile scope so the real app gets the\n   skin even at tablet width.\n   ==================================================================== */\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation {\n  float: none !important; width: 100% !important; margin: 0 0 18px !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content {\n  float: none !important; width: 100% !important; margin: 0 !important;\n  color: #E8E4E0;\n}\nhtml.cf-native body.woocommerce-account .woocommerce { color: #E8E4E0; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content a { color: #E8E4E0; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content a:hover { color: #E10600; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation ul {\n  list-style: none !important; margin: 0 !important; padding: 0 !important;\n  display: flex; flex-direction: column; gap: 12px;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li {\n  margin: 0 !important; padding: 0 !important; border: 0 !important; list-style: none !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li::before,\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li::marker { content: none !important; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li a {\n  display: flex; align-items: center; gap: 16px;\n  min-height: 60px; padding: 16px 18px;\n  background: #161311; border: 1px solid #262220; border-radius: 14px;\n  color: #E8E4E0 !important; font-size: 17px; font-weight: 700; line-height: 1.2;\n  text-decoration: none !important; -webkit-tap-highlight-color: transparent;\n  position: relative; transition: background .15s ease, border-color .15s ease;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li a:active {\n  background: #1E1A17; border-color: #3a3531;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a {\n  border-color: #E10600; background: #1E1A17;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li a::after {\n  content: \"\"; margin-left: auto; flex: 0 0 auto;\n  width: 9px; height: 9px; border-right: 2px solid #A8A29E; border-bottom: 2px solid #A8A29E;\n  transform: rotate(-45deg); opacity: .8;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico {\n  flex: 0 0 auto; width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center;\n  color: #A8A29E;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico svg { width: 24px; height: 24px; display: block; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a .cf-acct-ico { color: #E10600; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a {\n  color: #A8A29E !important; font-weight: 600; background: transparent; border-style: dashed;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a::after { content: none; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a {\n  background: #1E1A17; border-color: #E10600;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a .cf-acct-ico { color: #E10600; }\n\nhtml.cf-native body.woocommerce-account .cf-acct-head {\n  display: flex; align-items: center; gap: 16px;\n  margin: 6px 0 18px; padding: 18px;\n  background: #161311; border: 1px solid #262220; border-radius: 16px;\n}\nhtml.cf-native body.woocommerce-account .cf-acct-head .cf-acct-avatar {\n  flex: 0 0 auto; width: 54px; height: 54px; border-radius: 50%;\n  background: #1E1A17; border: 1px solid #262220;\n  display: flex; align-items: center; justify-content: center;\n  color: #A8A29E; font-weight: 700; font-size: 21px;\n}\nhtml.cf-native body.woocommerce-account .cf-acct-head .cf-acct-avatar svg { width: 26px; height: 26px; }\nhtml.cf-native body.woocommerce-account .cf-acct-head .cf-acct-hi { font-size: 14px; color: #A8A29E; font-weight: 600; }\nhtml.cf-native body.woocommerce-account .cf-acct-head .cf-acct-name { font-size: 22px; color: #E8E4E0; font-weight: 800; line-height: 1.2; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content table.woocommerce-orders-table,\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content table.shop_table {\n  background: #161311; border: 1px solid #262220; border-radius: 14px; overflow: hidden;\n  color: #E8E4E0; border-collapse: separate; border-spacing: 0; font-size: 15px;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content table th { color: #A8A29E; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content table td,\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content table th { border-color: #262220 !important; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address {\n  background: #161311; border: 1px solid #262220; border-radius: 14px; padding: 16px; margin-bottom: 14px;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address address { color: #E8E4E0; }\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content .title h3 { color: #E8E4E0; }\n\nhtml.cf-native body.woocommerce-account .woocommerce form .form-row label,\nhtml.cf-native body.woocommerce-account .woocommerce-MyAccount-content label { color: #A8A29E; font-size: 15px; }\nhtml.cf-native body.woocommerce-account .woocommerce input.input-text,\nhtml.cf-native body.woocommerce-account .woocommerce input[type=\"text\"],\nhtml.cf-native body.woocommerce-account .woocommerce input[type=\"email\"],\nhtml.cf-native body.woocommerce-account .woocommerce input[type=\"tel\"],\nhtml.cf-native body.woocommerce-account .woocommerce input[type=\"password\"],\nhtml.cf-native body.woocommerce-account .woocommerce select,\nhtml.cf-native body.woocommerce-account .woocommerce textarea {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border: 1px solid #262220 !important; border-radius: 10px !important;\n  min-height: 50px; padding: 13px 14px !important; font-size: 16px;\n  -webkit-appearance: none; appearance: none; box-shadow: none !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce input.input-text:focus,\nhtml.cf-native body.woocommerce-account .woocommerce select:focus,\nhtml.cf-native body.woocommerce-account .woocommerce textarea:focus {\n  border-color: #E10600 !important; outline: none;\n}\nhtml.cf-native body.woocommerce-account .woocommerce input::placeholder,\nhtml.cf-native body.woocommerce-account .woocommerce textarea::placeholder { color: #6f6a66; }\n\nhtml.cf-native body.woocommerce-account .woocommerce button.button,\nhtml.cf-native body.woocommerce-account .woocommerce a.button,\nhtml.cf-native body.woocommerce-account .woocommerce input.button,\nhtml.cf-native body.woocommerce-account .woocommerce button[type=\"submit\"] {\n  background: #E10600 !important; color: #fff !important;\n  border: 0 !important; border-radius: 12px !important;\n  width: 100%; min-height: 52px; padding: 15px 20px !important;\n  font-size: 17px; font-weight: 800; letter-spacing: .02em;\n  -webkit-tap-highlight-color: transparent; box-shadow: none !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce button.button:active,\nhtml.cf-native body.woocommerce-account .woocommerce a.button:active,\nhtml.cf-native body.woocommerce-account .woocommerce input.button:active { background: #b80500 !important; }\nhtml.cf-native body.woocommerce-account .woocommerce a.edit { color: #A8A29E !important; }\n\nhtml.cf-native body.woocommerce-account .woocommerce .u-columns,\nhtml.cf-native body.woocommerce-account .woocommerce .col2-set {\n  display: flex; flex-direction: column; gap: 8px; width: 100% !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce .u-column1,\nhtml.cf-native body.woocommerce-account .woocommerce .u-column2,\nhtml.cf-native body.woocommerce-account .woocommerce .col-1,\nhtml.cf-native body.woocommerce-account .woocommerce .col-2 {\n  float: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce form.woocommerce-form-login,\nhtml.cf-native body.woocommerce-account .woocommerce form.woocommerce-form-register {\n  background: #161311; border: 1px solid #262220; border-radius: 16px;\n  padding: 20px 16px !important; margin: 0 !important;\n}\nhtml.cf-native body.woocommerce-account .woocommerce h2 { color: #E8E4E0; font-size: 22px; font-weight: 800; }\nhtml.cf-native body.woocommerce-account .woocommerce .woocommerce-form-login__rememberme,\nhtml.cf-native body.woocommerce-account .woocommerce .woocommerce-LostPassword a { color: #A8A29E; }\n\nhtml.cf-native body.woocommerce-account .woocommerce-message,\nhtml.cf-native body.woocommerce-account .woocommerce-info,\nhtml.cf-native body.woocommerce-account .woocommerce-error,\nhtml.cf-native body.woocommerce-account .woocommerce-notice {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border-top: 3px solid #E10600 !important; border-radius: 10px; padding: 15px 16px !important; font-size: 16px;\n}\nhtml.cf-native body.woocommerce-account .woocommerce-message a,\nhtml.cf-native body.woocommerce-account .woocommerce-info a { color: #E10600 !important; }\n\n\n/* ====================================================================\n   GLOBAL DEFAULTS  \u2014  hidden by construction (mirrors base .cf-trustrow)\n   Every container this module builds is display:none by DEFAULT. Only the\n   mobile (<=768) + html.cf-native scopes below turn it on. This is the\n   desktop-safety guarantee: a plain <div> defaults to display:block, so\n   WITHOUT this block the module's own containers would render as unstyled\n   blocks on desktop web (>768, not native). Do not remove.\n   ==================================================================== */\n.cf-paytrust-pdp,\n.cf-paytrust-foot,\n.cf-xpay-panel,\n.cf-ship-inline,\n.cf-ship-sticky { display: none; }\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   Every visual rule here is mirrored under html.cf-native below.\n   ==================================================================== */\n@media (max-width: 768px) {\n\n  /* ---------- (A) PDP trust row: bigger, tappable policy chips ---------- */\n  /* the row reuses the base .cf-trustrow box; we restyle it once upgraded */\n  .cf-trustrow.cf-trust-up {\n    display: flex; flex-wrap: wrap; align-items: stretch;\n    gap: 10px; margin: 16px 0 8px; padding: 0;\n  }\n  .cf-trust-chip {\n    display: inline-flex; align-items: center; gap: 9px;\n    min-height: 52px;                                 /* bigger tap target */\n    padding: 12px 16px;\n    background: #161311; border: 1px solid #262220; border-radius: 12px;\n    font-family: inherit; font-size: 15px; font-weight: 600; line-height: 1.25;\n    color: #E8E4E0; text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n    transition: border-color .15s ease, background .15s ease;\n  }\n  a.cf-trust-chip:active { background: #1E1A17; border-color: #3A332E; }\n  a.cf-trust-chip .cf-trust-go { margin-left: 2px; color: #A8A29E; opacity: .7; font-size: 18px; }\n  .cf-trust-chip .cf-trust-ic { width: 19px; height: 19px; flex: 0 0 auto; display: block; color: #A8A29E; }\n  .cf-trust-chip.cf-trust-key .cf-trust-ic { color: #E10600; }   /* scarce red on the fitment check */\n  .cf-trust-chip .cf-trust-sub { color: #A8A29E; font-weight: 500; }\n\n  /* ---------- (B) payment-security badges: shared look ---------- */\n  .cf-paytrust, .cf-paytrust * { box-sizing: border-box; }\n  .cf-paytrust { font-family: inherit; }\n  .cf-paytrust-secure {\n    display: inline-flex; align-items: center; gap: 9px;\n    color: #E8E4E0; font-size: 15px; font-weight: 700; letter-spacing: .01em;\n  }\n  .cf-paytrust-secure svg { width: 18px; height: 18px; display: block; color: #A8A29E; }\n  .cf-paytrust-secure .cf-paytrust-sub { color: #A8A29E; font-weight: 600; }\n  .cf-paytrust-marks { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }\n  .cf-paytrust-mark {\n    display: inline-flex; align-items: center; justify-content: center;\n    height: 28px; min-width: 42px; padding: 0 9px;\n    background: #1E1A17; border: 1px solid #262220; border-radius: 6px;\n    color: #E8E4E0; font-size: 11.5px; font-weight: 800; letter-spacing: .03em;\n    line-height: 1; white-space: nowrap; text-transform: uppercase;\n  }\n  .cf-paytrust-mark svg { height: 15px; width: auto; display: block; }\n  .cf-paytrust-mark.cf-pt-gpay { gap: 4px; }\n\n  /* (B-a) PDP badge row under the buy box */\n  .cf-paytrust-pdp {\n    display: block; margin: 6px 0 18px; padding: 14px 0 0;\n    border-top: 1px solid #262220;\n  }\n  .cf-paytrust-pdp .cf-paytrust-secure { margin-bottom: 11px; }\n\n  /* (B-b) in-app footer payment strip (the base hides footer.site-footer) */\n  .cf-paytrust-foot {\n    display: block; margin: 24px 16px 10px; padding: 18px 16px;\n    background: #161311; border: 1px solid #262220; border-radius: 14px;\n    text-align: center;\n  }\n  .cf-paytrust-foot .cf-paytrust-secure { margin-bottom: 12px; justify-content: center; }\n  .cf-paytrust-foot .cf-paytrust-marks { justify-content: center; }\n  .cf-paytrust-foot .cf-paytrust-note {\n    margin-top: 12px; color: #A8A29E; font-size: 12.5px; font-weight: 600; line-height: 1.45;\n  }\n\n  /* ---------- (C) express/wallet hoist panel (cart + checkout) ---------- */\n  .cf-xpay-panel { display: none; }                  /* hidden until a real button is captured */\n  .cf-xpay-panel.cf-xpay-has { display: block; }\n  .cf-xpay-panel {\n    margin: 0 0 18px; padding: 16px;\n    background: #1E1A17; border: 1px solid #262220; border-radius: 14px;\n    font-family: inherit;\n  }\n  .cf-xpay-head {\n    display: flex; align-items: center; gap: 9px; margin: 0 0 12px;\n    color: #E8E4E0; font-size: 15px; font-weight: 700; letter-spacing: .02em;\n  }\n  .cf-xpay-head svg { width: 18px; height: 18px; color: #A8A29E; flex: 0 0 auto; }\n  .cf-xpay-slot { display: block; }\n  .cf-xpay-slot > * { max-width: 100% !important; }\n  .cf-xpay-slot .gpay-button,\n  .cf-xpay-slot .apple-pay-button,\n  .cf-xpay-slot button,\n  .cf-xpay-slot .wc-stripe-payment-request-wrapper,\n  .cf-xpay-slot iframe { min-height: 52px; }         /* bigger express tap target */\n  .cf-xpay-or {\n    display: flex; align-items: center; gap: 12px; margin: 14px 2px 0;\n    color: #A8A29E; font-size: 12.5px; font-weight: 600; letter-spacing: .06em;\n    text-transform: uppercase;\n  }\n  .cf-xpay-or::before, .cf-xpay-or::after { content: \"\"; flex: 1; height: 1px; background: #262220; }\n  .cf-xpay-secure {\n    display: flex; align-items: center; gap: 7px; margin: 12px 2px 0;\n    color: #A8A29E; font-size: 12.5px; font-weight: 600;\n  }\n  .cf-xpay-secure svg { width: 15px; height: 15px; flex: 0 0 auto; }\n\n  /* ---------- (D) free-ship progress: shared bar visuals ---------- */\n  .cf-ship-bar, .cf-ship-bar * { box-sizing: border-box; }\n  .cf-ship-bar { font-family: inherit; }\n  .cf-ship-msg {\n    display: flex; align-items: center; gap: 8px;\n    font-size: 15px; font-weight: 600; line-height: 1.3; color: #E8E4E0;\n  }\n  .cf-ship-msg .cf-ship-amt { color: #E10600; font-weight: 800; }\n  .cf-ship-track {\n    position: relative; height: 8px; border-radius: 6px;\n    background: #262220; overflow: hidden; margin-top: 10px;\n  }\n  .cf-ship-fill {\n    position: absolute; left: 0; top: 0; bottom: 0; width: 0%;\n    border-radius: 6px; background: #E10600;\n    transition: width .45s cubic-bezier(.4,0,.2,1);\n  }\n  .cf-ship-bar.cf-ship-done .cf-ship-fill { background: #E8E4E0; }\n  .cf-ship-bar.cf-ship-done .cf-ship-msg { color: #E8E4E0; }\n  .cf-ship-bar.cf-ship-done .cf-ship-check { color: #E10600; font-weight: 900; }\n\n  /* (D-a) inline block on the cart page */\n  .cf-ship-inline {\n    display: block; margin: 0 0 18px; padding: 16px;\n    background: #161311; border: 1px solid #262220; border-radius: 12px;\n  }\n  /* (D-b) sticky mini banner above the tab bar (uses base tab-bar height 64px) */\n  .cf-ship-sticky {\n    display: block;\n    position: fixed; left: 0; right: 0; z-index: 99988;        /* below tabbar(99990)/stickyATC(99989) */\n    bottom: calc(64px + env(safe-area-inset-bottom, 0px));\n    padding: 11px 16px; margin: 0;\n    background: #1E1A17; border-top: 1px solid #262220;\n    box-shadow: 0 -5px 16px rgba(0,0,0,.42);\n    transform: translateY(120%); transition: transform .28s ease;\n  }\n  .cf-ship-sticky.cf-ship-show { transform: translateY(0); }\n  /* lift above a PDP sticky ATC so they never overlap (base: 64px bar + ~80px ATC) */\n  body.cf-has-stickyatc .cf-ship-sticky {\n    bottom: calc(140px + env(safe-area-inset-bottom, 0px));\n  }\n  .cf-ship-sticky .cf-ship-track { margin-top: 7px; height: 7px; }\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native (any width)\n   Mirrors EVERY show/restyle rule from the mobile scope above.\n   ==================================================================== */\n/* (A) trust row */\nhtml.cf-native .cf-trustrow.cf-trust-up {\n  display: flex; flex-wrap: wrap; align-items: stretch;\n  gap: 10px; margin: 16px 0 8px; padding: 0;\n}\nhtml.cf-native .cf-trust-chip {\n  display: inline-flex; align-items: center; gap: 9px;\n  min-height: 52px; padding: 12px 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n  font-family: inherit; font-size: 15px; font-weight: 600; line-height: 1.25;\n  color: #E8E4E0; text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: border-color .15s ease, background .15s ease;\n}\nhtml.cf-native a.cf-trust-chip:active { background: #1E1A17; border-color: #3A332E; }\nhtml.cf-native a.cf-trust-chip .cf-trust-go { margin-left: 2px; color: #A8A29E; opacity: .7; font-size: 18px; }\nhtml.cf-native .cf-trust-chip .cf-trust-ic { width: 19px; height: 19px; flex: 0 0 auto; display: block; color: #A8A29E; }\nhtml.cf-native .cf-trust-chip.cf-trust-key .cf-trust-ic { color: #E10600; }\nhtml.cf-native .cf-trust-chip .cf-trust-sub { color: #A8A29E; font-weight: 500; }\n\n/* (B) payment-security badges */\nhtml.cf-native .cf-paytrust, html.cf-native .cf-paytrust * { box-sizing: border-box; }\nhtml.cf-native .cf-paytrust { font-family: inherit; }\nhtml.cf-native .cf-paytrust-secure {\n  display: inline-flex; align-items: center; gap: 9px;\n  color: #E8E4E0; font-size: 15px; font-weight: 700; letter-spacing: .01em;\n}\nhtml.cf-native .cf-paytrust-secure svg { width: 18px; height: 18px; display: block; color: #A8A29E; }\nhtml.cf-native .cf-paytrust-secure .cf-paytrust-sub { color: #A8A29E; font-weight: 600; }\nhtml.cf-native .cf-paytrust-marks { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }\nhtml.cf-native .cf-paytrust-mark {\n  display: inline-flex; align-items: center; justify-content: center;\n  height: 28px; min-width: 42px; padding: 0 9px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 6px;\n  color: #E8E4E0; font-size: 11.5px; font-weight: 800; letter-spacing: .03em;\n  line-height: 1; white-space: nowrap; text-transform: uppercase;\n}\nhtml.cf-native .cf-paytrust-mark svg { height: 15px; width: auto; display: block; }\nhtml.cf-native .cf-paytrust-mark.cf-pt-gpay { gap: 4px; }\nhtml.cf-native .cf-paytrust-pdp {\n  display: block; margin: 6px 0 18px; padding: 14px 0 0; border-top: 1px solid #262220;\n}\nhtml.cf-native .cf-paytrust-pdp .cf-paytrust-secure { margin-bottom: 11px; }\nhtml.cf-native .cf-paytrust-foot {\n  display: block; margin: 24px 16px 10px; padding: 18px 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 14px; text-align: center;\n}\nhtml.cf-native .cf-paytrust-foot .cf-paytrust-secure { margin-bottom: 12px; justify-content: center; }\nhtml.cf-native .cf-paytrust-foot .cf-paytrust-marks { justify-content: center; }\nhtml.cf-native .cf-paytrust-foot .cf-paytrust-note {\n  margin-top: 12px; color: #A8A29E; font-size: 12.5px; font-weight: 600; line-height: 1.45;\n}\n\n/* (C) express/wallet hoist */\nhtml.cf-native .cf-xpay-panel { display: none; }\nhtml.cf-native .cf-xpay-panel.cf-xpay-has { display: block; }\nhtml.cf-native .cf-xpay-panel {\n  margin: 0 0 18px; padding: 16px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 14px; font-family: inherit;\n}\nhtml.cf-native .cf-xpay-head {\n  display: flex; align-items: center; gap: 9px; margin: 0 0 12px;\n  color: #E8E4E0; font-size: 15px; font-weight: 700; letter-spacing: .02em;\n}\nhtml.cf-native .cf-xpay-head svg { width: 18px; height: 18px; color: #A8A29E; flex: 0 0 auto; }\nhtml.cf-native .cf-xpay-slot { display: block; }\nhtml.cf-native .cf-xpay-slot > * { max-width: 100% !important; }\nhtml.cf-native .cf-xpay-slot .gpay-button,\nhtml.cf-native .cf-xpay-slot .apple-pay-button,\nhtml.cf-native .cf-xpay-slot button,\nhtml.cf-native .cf-xpay-slot .wc-stripe-payment-request-wrapper,\nhtml.cf-native .cf-xpay-slot iframe { min-height: 52px; }\nhtml.cf-native .cf-xpay-or {\n  display: flex; align-items: center; gap: 12px; margin: 14px 2px 0;\n  color: #A8A29E; font-size: 12.5px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;\n}\nhtml.cf-native .cf-xpay-or::before, html.cf-native .cf-xpay-or::after { content: \"\"; flex: 1; height: 1px; background: #262220; }\nhtml.cf-native .cf-xpay-secure {\n  display: flex; align-items: center; gap: 7px; margin: 12px 2px 0;\n  color: #A8A29E; font-size: 12.5px; font-weight: 600;\n}\nhtml.cf-native .cf-xpay-secure svg { width: 15px; height: 15px; flex: 0 0 auto; }\n\n/* (D) free-ship progress */\nhtml.cf-native .cf-ship-bar, html.cf-native .cf-ship-bar * { box-sizing: border-box; }\nhtml.cf-native .cf-ship-bar { font-family: inherit; }\nhtml.cf-native .cf-ship-msg {\n  display: flex; align-items: center; gap: 8px;\n  font-size: 15px; font-weight: 600; line-height: 1.3; color: #E8E4E0;\n}\nhtml.cf-native .cf-ship-msg .cf-ship-amt { color: #E10600; font-weight: 800; }\nhtml.cf-native .cf-ship-track {\n  position: relative; height: 8px; border-radius: 6px;\n  background: #262220; overflow: hidden; margin-top: 10px;\n}\nhtml.cf-native .cf-ship-fill {\n  position: absolute; left: 0; top: 0; bottom: 0; width: 0%;\n  border-radius: 6px; background: #E10600;\n  transition: width .45s cubic-bezier(.4,0,.2,1);\n}\nhtml.cf-native .cf-ship-bar.cf-ship-done .cf-ship-fill { background: #E8E4E0; }\nhtml.cf-native .cf-ship-bar.cf-ship-done .cf-ship-msg { color: #E8E4E0; }\nhtml.cf-native .cf-ship-bar.cf-ship-done .cf-ship-check { color: #E10600; font-weight: 900; }\nhtml.cf-native .cf-ship-inline {\n  display: block; margin: 0 0 18px; padding: 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n}\nhtml.cf-native .cf-ship-sticky {\n  display: block;\n  position: fixed; left: 0; right: 0; z-index: 99988;\n  bottom: calc(64px + env(safe-area-inset-bottom, 0px));\n  padding: 11px 16px; margin: 0;\n  background: #1E1A17; border-top: 1px solid #262220;\n  box-shadow: 0 -5px 16px rgba(0,0,0,.42);\n  transform: translateY(120%); transition: transform .28s ease;\n}\nhtml.cf-native .cf-ship-sticky.cf-ship-show { transform: translateY(0); }\nhtml.cf-native body.cf-has-stickyatc .cf-ship-sticky {\n  bottom: calc(140px + env(safe-area-inset-bottom, 0px));\n}\nhtml.cf-native .cf-ship-sticky .cf-ship-track { margin-top: 7px; height: 7px; }\n\n/* ====================================================================\n   Narrow-phone tweak (nested inside mobile scope only)\n   ==================================================================== */\n@media (max-width: 360px) {\n  .cf-trust-chip { font-size: 14px; padding: 11px 13px; }\n  .cf-paytrust-mark { min-width: 38px; padding: 0 7px; }\n}\n\n\n/* ====================================================================\n   Permission-priming sheet (native-only at runtime, but authored inside\n   the responsive dual scope so it can never render on desktop web).\n   Bigger, app-like sizing per the contract; sits ABOVE the tab bar.\n   ==================================================================== */\n\n/* ---------- shared LOOK (hidden by default; scopes below reveal) ---------- */\n.cf-push-prime {\n  display: none;            /* hidden by default; dual scopes flip it to block */\n  position: fixed; left: 0; right: 0;\n  bottom: calc(64px + env(safe-area-inset-bottom, 0px));\n  z-index: 99993;\n  transform: translateY(120%);\n  transition: transform .28s cubic-bezier(.4,0,.2,1);\n  background: #1E1A17;\n  border-top: 1px solid #262220;\n  border-radius: 16px 16px 0 0;\n  box-shadow: 0 -10px 30px rgba(0,0,0,.5);\n  padding: 18px 16px calc(18px + env(safe-area-inset-bottom, 0px));\n  color: #E8E4E0;\n  font-family: -apple-system, system-ui, Roboto, \"Segoe UI\", sans-serif;\n}\n.cf-push-prime.cf-show { transform: translateY(0); }\n.cf-push-prime .cf-pp-top { display: flex; align-items: flex-start; gap: 14px; }\n.cf-push-prime .cf-pp-ico {\n  flex: 0 0 auto; width: 48px; height: 48px; border-radius: 13px;\n  background: radial-gradient(120% 120% at 30% 20%, #2a2624 0%, #161311 60%, #0C0A09 100%);\n  border: 1px solid rgba(225,6,0,.35);\n  display: flex; align-items: center; justify-content: center;\n}\n.cf-push-prime .cf-pp-ico svg { width: 25px; height: 25px; stroke: #E10600; }\n.cf-push-prime .cf-pp-txt { flex: 1 1 auto; min-width: 0; }\n.cf-push-prime .cf-pp-title { font-size: 18px; font-weight: 800; line-height: 1.25; }\n.cf-push-prime .cf-pp-sub { font-size: 14px; color: #A8A29E; line-height: 1.5; margin-top: 5px; }\n.cf-push-prime .cf-pp-btns { display: flex; gap: 12px; margin-top: 16px; }\n.cf-push-prime button {\n  -webkit-appearance: none; appearance: none; border: 0; cursor: pointer;\n  font-family: inherit; font-size: 17px; font-weight: 800; letter-spacing: .01em;\n  min-height: 52px; border-radius: 12px; padding: 0 18px;\n  -webkit-tap-highlight-color: transparent;\n}\n.cf-push-prime .cf-pp-yes { background: #E10600; color: #FFFFFF; flex: 1 1 auto; }\n.cf-push-prime .cf-pp-yes:active { background: #b80500; }\n.cf-push-prime .cf-pp-no { background: transparent; color: #A8A29E; border: 1px solid #262220; flex: 0 0 auto; padding: 0 20px; font-weight: 700; }\n.cf-push-prime .cf-pp-no:active { background: #161311; }\n\n/* ====================================================================\n   MOBILE WEB scope  \u2014  @media (max-width: 768px)\n   ==================================================================== */\n@media (max-width: 768px) {\n  .cf-push-prime { display: block; }\n}\n\n/* ====================================================================\n   NATIVE APP scope  \u2014  html.cf-native (any width); mirrors the above\n   ==================================================================== */\nhtml.cf-native .cf-push-prime { display: block; }\n\n\n@media (max-width: 768px) {\n  /* garage pill sits just under the 56px fixed app header (+ safe-area top) */\n  body.cf-has-apphdr .cf-grg-pillwrap {\n    top: calc(56px + env(safe-area-inset-top, 0px));\n  }\n  /* sticky sort/filter bar sits under the same fixed app header */\n  body.cf-has-apphdr .cf-filters-bar {\n    top: calc(56px + env(safe-area-inset-top, 0px));\n  }\n}\nhtml.cf-native body.cf-has-apphdr .cf-grg-pillwrap {\n  top: calc(56px + env(safe-area-inset-top, 0px));\n}\nhtml.cf-native body.cf-has-apphdr .cf-filters-bar {\n  top: calc(56px + env(safe-area-inset-top, 0px));\n}\n";
  (document.head||document.documentElement).appendChild(s); })();
/* behavior */
(function () {
  var d = document, root = d.documentElement;

  /* ---- native-platform detection (persisted across in-app nav) ----
     - cf-native class on <html> ONLY when Capacitor reports native platform.
     - sessionStorage 'cf_app_native' persists native through in-app navigation
       (Capacitor isn't always re-detectable on every internal page load).
     - The legacy localStorage 'cf_app' desktop-sticky flag is CLEARED — the
       old flag-gated skin is dead; size + native decide everything now.
     - ?source=app is tolerated as a harmless manual preview but is NOT required
       and is NOT persisted on desktop. */
  try {
    var cap = window.Capacitor;
    var isNative = !!(cap && ((cap.isNativePlatform && cap.isNativePlatform())
                          || (cap.platform && cap.platform !== 'web')));
    try { localStorage.removeItem('cf_app'); } catch (e1) {}   // kill the legacy flag
    if (isNative) { try { sessionStorage.setItem('cf_app_native', '1'); } catch (e2) {} }
    var nativeSession = false;
    try { nativeSession = sessionStorage.getItem('cf_app_native') === '1'; } catch (e3) {}
    if (isNative || nativeSession) root.classList.add('cf-native');
  } catch (e) { /* never block the page */ }

  /* helper: is the current viewport the mobile experience?
     (mobile web <=768 OR the native app at any width). Modules with
     phone-only BEHAVIOR should gate on this + re-check on resize. */
  function cfIsMobile() {
    return (window.matchMedia && window.matchMedia('(max-width:768px)').matches)
        || root.classList.contains('cf-native');
  }
  // expose for module agents so behavior gating is consistent everywhere
  window.cfIsMobile = cfIsMobile;

  var I = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16l-1 13H5L4 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6"/></svg>',
    account: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>'
  };
  var tabs = [
    { key: 'home',    label: 'Home',    href: '/',            match: function (pp) { return pp === '/' || pp === ''; } },
    { key: 'shop',    label: 'Shop',    href: '/shop/',       match: function (pp) { return /\/(shop|product|product-category)/.test(pp); } },
    { key: 'cart',    label: 'Cart',    href: '/cart/',       match: function (pp) { return /\/(cart|checkout)/.test(pp); } },
    { key: 'account', label: 'Account', href: '/my-account/', match: function (pp) { return /\/my-account/.test(pp); } }
  ];

  /* The chrome DOM is built UNCONDITIONALLY + idempotently on every page.
     CSS (the two scopes above) decides whether it ever shows — desktop web
     keeps it display:none, so there is no visual leak. */
  function buildTabbar() {
    if (d.querySelector('.cf-tabbar')) return;
    if (!d.body) return;
    var pp = location.pathname.replace(/\/+$/, '/') || '/';
    var nav = d.createElement('nav');
    nav.className = 'cf-tabbar'; nav.setAttribute('role', 'navigation');
    tabs.forEach(function (t) {
      var a = d.createElement('a');
      a.className = 'cf-tab' + (t.match(pp) ? ' cf-active' : '');
      a.href = t.href; a.setAttribute('aria-label', t.label);
      a.innerHTML = I[t.key]
        + (t.key === 'cart' ? '<span class="cf-cartbadge" id="cf-cartbadge"></span>' : '')
        + '<span>' + t.label + '</span>';
      nav.appendChild(a);
    });
    d.body.appendChild(nav);
    refreshCart();
  }

  // --- live cart count badge ---
  function setBadge(n) {
    var b = d.getElementById('cf-cartbadge'); if (!b) return;
    n = parseInt(n, 10) || 0;
    b.textContent = n > 99 ? '99+' : n;
    b.classList.toggle('cf-show', n > 0);
  }
  function refreshCart() {
    var el = d.querySelector('.cart-contents-count, .count, .ast-cart-menu-wrap .count');
    if (el && /\d/.test(el.textContent)) { setBadge(el.textContent.replace(/\D/g, '')); return; }
    fetch('/?wc-ajax=get_refreshed_fragments', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var html = j && j.fragments ? Object.values(j.fragments).join(' ') : '';
        var m = html.match(/cart-contents-count[^>]*>\s*(\d+)/i) || html.match(/(\d+)\s*item/i);
        setBadge(m ? m[1] : 0);
      }).catch(function () {});
  }
  if (window.jQuery) {
    window.jQuery(d.body).on('added_to_cart removed_from_cart wc_fragments_refreshed wc_fragments_loaded', refreshCart);
  }

  // --- PDP: sticky add-to-cart bar + trust row (DOM always built; CSS shows it) ---
  function buildPDP() {
    if (!d.body || !d.body.classList.contains('single-product')) return;
    var form = d.querySelector('form.cart');
    var realBtn = d.querySelector('form.cart button.single_add_to_cart_button, .single_add_to_cart_button');
    var priceEl = d.querySelector('.entry-summary .price, .summary .price, p.price');
    if (!form || !realBtn) return;

    // trust row (insert just after the add-to-cart form) — only true, safe signals
    if (!d.querySelector('.cf-trustrow')) {
      var tr = d.createElement('div');
      tr.className = 'cf-trustrow';
      tr.innerHTML = '<span>🔒 <b>Secure checkout</b></span>'
                   + '<span>✓ <b>Genuine carbon fiber</b></span>'
                   + '<span>◷ <b>Pay over time</b></span>';
      form.parentNode.insertBefore(tr, form.nextSibling);
    }

    // sticky add-to-cart bar
    if (d.querySelector('.cf-stickyatc')) return;
    var priceHTML = priceEl ? priceEl.innerHTML : '';
    var bar = d.createElement('div');
    bar.className = 'cf-stickyatc';
    bar.innerHTML = '<span class="cf-sa-price">' + priceHTML + '</span>'
                  + '<button type="button" class="cf-sa-btn">Add to Cart</button>';
    d.body.appendChild(bar);
    d.body.classList.add('cf-has-stickyatc');

    bar.querySelector('.cf-sa-btn').addEventListener('click', function () {
      // if a variation isn't chosen yet, scroll to the form so they can pick; else add.
      if (realBtn.disabled || realBtn.classList.contains('disabled')) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        realBtn.click();
      }
    });

    // show the sticky bar only after the real button scrolls out of view
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        bar.classList.toggle('cf-show', !entries[0].isIntersecting);
      }, { threshold: 0 });
      io.observe(realBtn);
    } else {
      bar.classList.add('cf-show');
    }
  }

  function init() { buildTabbar(); buildPDP(); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, root = d.documentElement;
  if (d.querySelector('.cf-apphdr')) return;                // idempotent: already injected

  function buildSearchInner() {
    // Prefer cloning the site's REAL search form (keeps FiboSearch / WC product search
    // wiring + hidden fields intact). Try a few common selectors defensively.
    var src = d.querySelector(
      'form.dgwt-wcas-search-form, ' +                        /* FiboSearch */
      'form.woocommerce-product-search, ' +                   /* WC product search */
      'form[role="search"], form.search-form, .ast-search-menu-icon form'
    );
    if (src && src.tagName === 'FORM') {
      var clone = src.cloneNode(true);
      clone.setAttribute('role', 'search');
      return clone;
    }
    // Fallback: a plain GET form to /?s= (WordPress default search -> WC results).
    var f = d.createElement('form');
    f.setAttribute('role', 'search'); f.method = 'get'; f.action = '/';
    var inp = d.createElement('input');
    inp.type = 'search'; inp.name = 's'; inp.placeholder = 'Search carbon parts…';
    inp.autocomplete = 'off'; inp.setAttribute('aria-label', 'Search');
    var go = d.createElement('button'); go.type = 'submit'; go.className = 'cf-apphdr-go'; go.textContent = 'Go';
    f.appendChild(inp); f.appendChild(go);
    return f;
  }

  // Grab the site logo IMAGE before we hide the theme header (so the wordmark is the real brand).
  function findLogoImg() {
    var img = d.querySelector(
      'header.site-header img.custom-logo, .site-header img.custom-logo, ' +
      '.site-branding img, header.site-header .site-logo-img img, header.site-header img'
    );
    return (img && img.src) ? img : null;
  }

  function init() {
    if (d.querySelector('.cf-apphdr')) return;
    if (!d.body) return;

    var hdr = d.createElement('header');
    hdr.className = 'cf-apphdr';
    hdr.setAttribute('role', 'banner');

    // --- back chevron (shown on inner pages; uses history when safe, else home) ---
    var pp = location.pathname.replace(/\/+$/, '') || '/';
    var isHome = (pp === '/' || pp === '');
    var back = d.createElement('button');
    back.type = 'button'; back.className = 'cf-apphdr-back'; back.setAttribute('aria-label', 'Back');
    back.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
    back.addEventListener('click', function () {
      // only trust history if we navigated within this session, else go home
      if (window.history.length > 1 && d.referrer && d.referrer.indexOf(location.host) !== -1) {
        history.back();
      } else {
        location.href = '/';
      }
    });
    hdr.appendChild(back);
    if (!isHome) d.body.classList.add('cf-hdr-inner');

    // --- logo (home) ---
    var logo = d.createElement('a');
    logo.className = 'cf-apphdr-logo'; logo.href = '/'; logo.setAttribute('aria-label', 'Carbon Freaks home');
    var srcImg = findLogoImg();
    if (srcImg) {
      var img = d.createElement('img');
      img.src = srcImg.currentSrc || srcImg.src;
      if (srcImg.srcset) img.srcset = srcImg.srcset;
      img.alt = srcImg.alt || 'Carbon Freaks';
      logo.appendChild(img);
    } else {
      // CSS wordmark fallback — accent only on "FREAKS" to keep red scarce.
      var w = d.createElement('span');
      w.className = 'cf-apphdr-word';
      w.innerHTML = 'CARBON <b>FREAKS</b>';
      logo.appendChild(w);
    }
    hdr.appendChild(logo);

    // --- right actions: Bikes pill + Search icon ---
    var act = d.createElement('div'); act.className = 'cf-apphdr-act';

    // Bikes affordance: open the garage picker if the garage module exposed a global,
    // else link to /shop/ (Shop-by-Bike lives in the nav we're hiding, so preserve access).
    var bikes = d.createElement('a');
    bikes.className = 'cf-apphdr-bikes'; bikes.href = '/shop/';
    bikes.setAttribute('aria-label', 'Shop by bike');
    bikes.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17" r="3.2"/><circle cx="18.5" cy="17" r="3.2"/><path d="M5.5 17 9 8h5l2.6 6"/><path d="M9 8h6"/></svg><span>Bikes</span>';
    bikes.addEventListener('click', function (e) {
      // documented optional global from the garage/shop-by-bike module
      if (typeof window.cfOpenGarage === 'function') {
        e.preventDefault();
        try { window.cfOpenGarage(); } catch (err) { location.href = '/shop/'; }
      }
      // else: fall through to the href (/shop/)
    });
    act.appendChild(bikes);

    // Search icon -> toggles the expanding search row
    var searchBtn = d.createElement('button');
    searchBtn.type = 'button'; searchBtn.className = 'cf-apphdr-iconbtn'; searchBtn.setAttribute('aria-label', 'Search');
    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>';
    act.appendChild(searchBtn);
    hdr.appendChild(act);

    d.body.appendChild(hdr);

    // --- expanding search row (built once) ---
    var searchRow = d.createElement('div');
    searchRow.className = 'cf-apphdr-search';
    searchRow.appendChild(buildSearchInner());
    d.body.appendChild(searchRow);

    function setSearch(open) {
      d.body.classList.toggle('cf-hdr-search-open', open);
      searchBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        var inp = searchRow.querySelector('input[type="search"], input[type="text"], input[name="s"]');
        if (inp) { try { inp.focus(); } catch (e) {} }
      }
    }
    searchBtn.addEventListener('click', function () {
      setSearch(!d.body.classList.contains('cf-hdr-search-open'));
    });
    // close on Escape
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && d.body.classList.contains('cf-hdr-search-open')) setSearch(false);
    });

    // ONLY NOW mark the header live — CSS hides the Astra header (mobile/native
    // scope only) once our bar + nav affordances exist. Desktop keeps its header.
    d.body.classList.add('cf-has-apphdr');
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, root = d.documentElement;
  if (d.querySelector('.cf-grg-pillwrap, .cf-grg-sheet')) return; // idempotent

  /* mobile-experience helper (mobile web <=768 OR native). Prefer the base's
     shared helper; fall back if the base hasn't loaded yet. */
  function cfIsMobile() {
    if (typeof window.cfIsMobile === 'function') return window.cfIsMobile();
    return (window.matchMedia && window.matchMedia('(max-width:768px)').matches)
        || root.classList.contains('cf-native');
  }

  /* ---- inlined READ-ONLY taxonomy snapshot (brand>model>gen) ----
     Mirrors modules/_bike_taxonomy.json. count:0 gens are shown disabled. */
  var TAX = {"brands":[
    {"name":"Aprilia","slug":"aprilia","count":29,"link":"/product-category/aprilia/?source=app","children":[
      {"name":"RSV4","slug":"rsv4","count":29,"link":"/product-category/rsv4/?source=app","children":[
        {"name":"RSV4 (2021-2024)","slug":"rsv4-2021-2024","count":29,"link":"/product-category/rsv4-2021-2024/?source=app"}]}]},
    {"name":"BMW","slug":"bmw","count":85,"link":"/product-category/bmw/?source=app","children":[
      {"name":"S1000RR","slug":"s1000rr","count":85,"link":"/product-category/s1000rr/?source=app","children":[
        {"name":"S1000RR (2020-2022)","slug":"s1000rr-2020-2022","count":50,"link":"/product-category/s1000rr-2020-2022/?source=app"},
        {"name":"S1000RR (2019-2022)","slug":"s1000rr-2019-2022","count":30,"link":"/product-category/s1000rr-2019-2022/?source=app"},
        {"name":"S1000RR (2023-2024)","slug":"s1000rr-2023-2024","count":5,"link":"/product-category/s1000rr-2023-2024/?source=app"},
        {"name":"S1000RR (2009-2011)","slug":"s1000rr-2009-2011","count":0,"link":"/product-category/s1000rr-2009-2011/?source=app"},
        {"name":"S1000RR (2012-2014)","slug":"s1000rr-2012-2014","count":0,"link":"/product-category/s1000rr-2012-2014/?source=app"},
        {"name":"S1000RR (2015-2019)","slug":"s1000rr-2015-2019","count":0,"link":"/product-category/s1000rr-2015-2019/?source=app"},
        {"name":"S1000RR (2025+)","slug":"s1000rr-2025","count":0,"link":"/product-category/s1000rr-2025/?source=app"}]}]},
    {"name":"Ducati","slug":"ducati","count":122,"link":"/product-category/ducati/?source=app","children":[
      {"name":"Panigale V4","slug":"panigale-v4","count":87,"link":"/product-category/panigale-v4/?source=app","children":[
        {"name":"Panigale V4 (2022+)","slug":"panigale-v4-2022","count":52,"link":"/product-category/panigale-v4-2022/?source=app"},
        {"name":"Panigale V4 (2025+)","slug":"panigale-v4-2025","count":35,"link":"/product-category/panigale-v4-2025/?source=app"}]},
      {"name":"Streetfighter V4","slug":"streetfighter-v4","count":35,"link":"/product-category/streetfighter-v4/?source=app","children":[
        {"name":"Streetfighter V4 (2020+)","slug":"streetfighter-v4-2020","count":18,"link":"/product-category/streetfighter-v4-2020/?source=app"},
        {"name":"Streetfighter V4 (2025+)","slug":"streetfighter-v4-2025","count":17,"link":"/product-category/streetfighter-v4-2025/?source=app"}]}]},
    {"name":"Honda","slug":"honda","count":26,"link":"/product-category/honda/?source=app","children":[
      {"name":"CBR1000RR-R","slug":"cbr1000rr-r","count":26,"link":"/product-category/cbr1000rr-r/?source=app","children":[
        {"name":"CBR1000RR-R (2020+)","slug":"cbr1000rr-r-2020","count":26,"link":"/product-category/cbr1000rr-r-2020/?source=app"}]}]},
    {"name":"KTM","slug":"ktm","count":22,"link":"/product-category/ktm/?source=app","children":[
      {"name":"Super Duke R","slug":"super-duke-r","count":22,"link":"/product-category/super-duke-r/?source=app","children":[
        {"name":"1290 Super Duke R (2020-2023)","slug":"1290-super-duke-r-2020-2023","count":19,"link":"/product-category/1290-super-duke-r-2020-2023/?source=app"},
        {"name":"1390 Super Duke R EVO (2024+)","slug":"1390-super-duke-r-evo-2024","count":3,"link":"/product-category/1390-super-duke-r-evo-2024/?source=app"}]}]},
    {"name":"Kawasaki","slug":"kawasaki","count":69,"link":"/product-category/kawasaki/?source=app","children":[
      {"name":"ZX-10R","slug":"zx-10r","count":39,"link":"/product-category/zx-10r/?source=app","children":[
        {"name":"ZX-10R (2016-2020)","slug":"zx-10r-2016-2020","count":28,"link":"/product-category/zx-10r-2016-2020/?source=app"},
        {"name":"ZX-10R (2021-2025)","slug":"zx-10r-2021-2025","count":11,"link":"/product-category/zx-10r-2021-2025/?source=app"}]},
      {"name":"H2","slug":"h2","count":30,"link":"/product-category/h2/?source=app","children":[
        {"name":"H2 / H2R","slug":"h2-h2r","count":30,"link":"/product-category/h2-h2r/?source=app"}]}]},
    {"name":"Suzuki","slug":"suzuki","count":17,"link":"/product-category/suzuki/?source=app","children":[
      {"name":"GSX-R1000","slug":"gsx-r1000","count":17,"link":"/product-category/gsx-r1000/?source=app","children":[
        {"name":"GSX-R1000 (2017-2025)","slug":"gsx-r1000-2017-2025","count":17,"link":"/product-category/gsx-r1000-2017-2025/?source=app"}]}]},
    {"name":"Triumph","slug":"triumph","count":27,"link":"/product-category/triumph/?source=app","children":[
      {"name":"Speed Triple","slug":"speed-triple","count":27,"link":"/product-category/speed-triple/?source=app","children":[
        {"name":"Speed Triple 1200 RS (2021+)","slug":"speed-triple-1200-rs-2021","count":27,"link":"/product-category/speed-triple-1200-rs-2021/?source=app"}]}]},
    {"name":"Yamaha","slug":"yamaha","count":28,"link":"/product-category/yamaha/?source=app","children":[
      {"name":"R1","slug":"r1","count":28,"link":"/product-category/r1/?source=app","children":[
        {"name":"R1 / R1M (2020+)","slug":"r1-r1m-2020","count":28,"link":"/product-category/r1-r1m-2020/?source=app"}]}]}
  ]};

  /* ---------- SVG icons ---------- */
  var SVG = {
    bike: '<svg class="cf-grg-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5 9 9h4l2 4h3.5"/><path d="M9 9 8 6H6"/><path d="M13 9l1.5-3H17"/></svg>',
    chev: '<svg class="cf-grg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    go:   '<svg class="cf-grg-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>',
    x:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6"/></svg>'
  };

  /* ---------- garage storage ---------- */
  var KEY = 'cf_garage', SEEN = 'cf_garage_seen';
  function getGarage() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (v && v.model && v.link) return v; } catch (e) {}
    return null;
  }
  function setGarage(g) { try { localStorage.setItem(KEY, JSON.stringify(g)); } catch (e) {} }
  function clearGarage() { try { localStorage.removeItem(KEY); } catch (e) {} }

  /* ===================== bottom-sheet picker ===================== */
  var sheet, scrim, listEl, titleEl, subEl, backBtn, clearBtn;
  var nav = []; // breadcrumb of nodes we've drilled into ([] = brands)

  function buildSheet() {
    scrim = d.createElement('div'); scrim.className = 'cf-grg-scrim';
    scrim.addEventListener('click', closeSheet);

    sheet = d.createElement('div');
    sheet.className = 'cf-grg-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-label', 'Choose your motorcycle');
    sheet.innerHTML =
      '<div class="cf-grg-grab"></div>' +
      '<div class="cf-grg-head">' +
        '<button type="button" class="cf-grg-back" aria-label="Back">' + SVG.back + '</button>' +
        '<div class="cf-grg-title"><span class="cf-grg-titletext">Shop by bike</span>' +
          '<small class="cf-grg-sub">Pick your make to begin</small></div>' +
        '<button type="button" class="cf-grg-x" aria-label="Close">' + SVG.x + '</button>' +
      '</div>' +
      '<div class="cf-grg-list" role="list"></div>' +
      '<div class="cf-grg-foot">' +
        '<a class="cf-grg-all" href="/shop/?source=app">' + SVG.grid + 'Show all bikes</a>' +
        '<button type="button" class="cf-grg-clear">' + SVG.trash + 'Clear bike</button>' +
      '</div>';
    d.body.appendChild(scrim);
    d.body.appendChild(sheet);

    listEl  = sheet.querySelector('.cf-grg-list');
    titleEl = sheet.querySelector('.cf-grg-titletext');
    subEl   = sheet.querySelector('.cf-grg-sub');
    backBtn = sheet.querySelector('.cf-grg-back');
    clearBtn = sheet.querySelector('.cf-grg-clear');

    sheet.querySelector('.cf-grg-x').addEventListener('click', closeSheet);
    backBtn.addEventListener('click', function () { nav.pop(); render(); });
    clearBtn.addEventListener('click', function () { clearGarage(); renderPill(); closeSheet(); });
  }

  function currentLevel() {
    // returns {items, title, sub, depth}
    if (nav.length === 0)
      return { items: TAX.brands, title: 'Shop by bike', sub: 'Pick your make to begin', depth: 0 };
    if (nav.length === 1)
      return { items: nav[0].children || [], title: nav[0].name, sub: 'Choose your model', depth: 1 };
    return { items: nav[1].children || [], title: nav[1].name, sub: 'Choose your year / generation', depth: 2 };
  }

  function render() {
    var lvl = currentLevel();
    titleEl.textContent = lvl.title;
    subEl.textContent = lvl.sub;
    backBtn.classList.toggle('cf-grg-show', nav.length > 0);
    clearBtn.classList.toggle('cf-grg-show', !!getGarage());
    listEl.innerHTML = '';
    listEl.scrollTop = 0;

    lvl.items.forEach(function (node) {
      var hasKids = node.children && node.children.length;
      var isGen = lvl.depth === 2 || !hasKids; // leaf = a selectable gen
      var disabled = isGen && (node.count === 0);

      var el;
      if (disabled) {
        el = d.createElement('div');
        el.className = 'cf-grg-row cf-grg-dis';
        el.setAttribute('role', 'listitem');
        el.setAttribute('aria-disabled', 'true');
        el.innerHTML = '<span class="cf-grg-name">' + esc(node.name) + '</span>' +
                       '<span class="cf-grg-soon">Coming soon</span>';
      } else {
        el = d.createElement('button');
        el.type = 'button';
        el.className = 'cf-grg-row';
        el.setAttribute('role', 'listitem');
        var countHTML = (typeof node.count === 'number')
          ? '<span class="cf-grg-count">' + node.count + '</span>' : '';
        el.innerHTML = '<span class="cf-grg-name">' + esc(node.name) + '</span>' +
                       countHTML + SVG.go;
        el.addEventListener('click', function () {
          if (isGen) selectGen(node);
          else { nav.push(node); render(); }
        });
      }
      listEl.appendChild(el);
    });
  }

  function selectGen(genNode) {
    // build a friendly model label: prefer model name from nav, fall back to gen
    var brand = nav[0] ? nav[0].name : '';
    var model = nav[1] ? nav[1].name : (genNode.name || '');
    var g = {
      brand: brand,
      model: model,
      gen: genNode.name,
      slug: genNode.slug,
      link: genNode.link
    };
    setGarage(g);
    renderPill();
    closeSheet();
    // immediate value: take them straight to their parts
    if (genNode.link) location.href = genNode.link;
  }

  function openSheet(resetToRoot) {
    if (!sheet) buildSheet();
    if (resetToRoot !== false) { nav = []; }
    render();
    // force reflow then animate in
    void sheet.offsetWidth;
    scrim.classList.add('cf-grg-open');
    sheet.classList.add('cf-grg-open');
    d.documentElement.style.overflow = 'hidden';
  }
  function closeSheet() {
    if (!sheet) return;
    scrim.classList.remove('cf-grg-open');
    sheet.classList.remove('cf-grg-open');
    d.documentElement.style.overflow = '';
  }

  /* ===================== sticky "Your Bike" pill ===================== */
  var pillWrap, pillBtn, shopMine;

  function measureHeaderTop() {
    // place the pill just under the (possibly sticky) Astra header
    var hdr = d.querySelector('header.site-header');
    var top = 0;
    if (hdr) {
      var cs = window.getComputedStyle(hdr);
      // if header is sticky/fixed it overlaps content -> offset below it
      if (cs.position === 'fixed' || cs.position === 'sticky') {
        top = hdr.getBoundingClientRect().height || 0;
      }
    }
    root.style.setProperty('--cf-grg-top', (top > 0 ? top : 0) + 'px');
  }

  function buildPill() {
    pillWrap = d.createElement('div');
    pillWrap.className = 'cf-grg-pillwrap';

    pillBtn = d.createElement('button');
    pillBtn.type = 'button';
    pillBtn.className = 'cf-grg-pill';
    pillBtn.setAttribute('aria-label', 'Choose or change your motorcycle');
    pillBtn.addEventListener('click', function () { openSheet(true); });

    shopMine = d.createElement('a');
    shopMine.className = 'cf-grg-shopmine';
    shopMine.innerHTML = SVG.cart + 'Shop my bike';

    pillWrap.appendChild(pillBtn);
    pillWrap.appendChild(shopMine);

    // insert at the very top of <body> content so it sticks under the header
    if (d.body.firstChild) d.body.insertBefore(pillWrap, d.body.firstChild);
    else d.body.appendChild(pillWrap);

    measureHeaderTop();
    renderPill();
  }

  function renderPill() {
    if (!pillBtn) return;
    var g = getGarage();
    if (g) {
      pillBtn.innerHTML = SVG.bike +
        '<span class="cf-grg-lbl"><span class="cf-grg-muted">Your bike:</span> <b>' +
        esc(g.model) + '</b>' + (g.gen && g.gen !== g.model ? ' <span class="cf-grg-muted">' + esc(shortGen(g.gen)) + '</span>' : '') +
        '</span>' + SVG.chev;
      shopMine.style.display = '';   // CSS scope decides actual visibility
      shopMine.href = g.link || '/shop/?source=app';
    } else {
      pillBtn.innerHTML = SVG.bike +
        '<span class="cf-grg-lbl"><b>Shop by bike</b> <span class="cf-grg-muted">— find parts that fit</span></span>' +
        SVG.chev;
      shopMine.style.display = 'none';  // no bike yet -> hide the quick action
    }
  }

  // turn "S1000RR (2020-2022)" -> "2020-2022"; otherwise return as-is (trimmed)
  function shortGen(name) {
    var m = String(name).match(/\(([^)]+)\)/);
    return m ? m[1] : name;
  }

  /* ===================== "Fits your <model>" hints ===================== */
  /* Only show a fits-badge when we can RELIABLY match the saved bike to the
     page context (breadcrumb / product-category in the URL / body category
     classes). If we cannot determine fitment, show NOTHING. */

  function pageCategorySlugs() {
    var slugs = {};
    // 1) URL: /product-category/<slug>/
    var m = location.pathname.match(/\/product-category\/([^\/?#]+)/i);
    if (m) slugs[m[1].toLowerCase()] = 1;
    // 2) WooCommerce body classes often include term slugs, e.g.
    //    "product-category-s1000rr-2020-2022" or "term-<slug>"
    String(d.body.className).split(/\s+/).forEach(function (c) {
      var mm = c.match(/^product-category-(.+)$/i) || c.match(/^term-(.+)$/i);
      if (mm) slugs[mm[1].toLowerCase()] = 1;
    });
    // 3) breadcrumb anchors that point at product-category links
    var crumbs = d.querySelectorAll('.woocommerce-breadcrumb a, nav.woocommerce-breadcrumb a, .ast-breadcrumbs a, .breadcrumb a, .yoast-breadcrumb a');
    crumbs.forEach(function (a) {
      var bm = (a.getAttribute('href') || '').match(/\/product-category\/([^\/?#]+)/i);
      if (bm) slugs[bm[1].toLowerCase()] = 1;
    });
    return slugs;
  }

  // Does the saved bike reliably match this page's categories?
  // Reliable = page exposes the exact gen slug, OR the model slug, of the saved bike.
  function fitsSavedBike(g, slugs) {
    if (!g) return false;
    if (g.slug && slugs[String(g.slug).toLowerCase()]) return true;
    // derive model slug from taxonomy by matching gen slug -> its model parent
    var modelSlug = modelSlugForGen(g.slug);
    if (modelSlug && slugs[modelSlug]) return true;
    return false;
  }

  var _genToModel = null;
  function modelSlugForGen(genSlug) {
    if (!genSlug) return null;
    if (!_genToModel) {
      _genToModel = {};
      TAX.brands.forEach(function (b) {
        (b.children || []).forEach(function (model) {
          (model.children || []).forEach(function (gen) {
            _genToModel[gen.slug] = model.slug;
          });
        });
      });
    }
    return _genToModel[genSlug] || null;
  }

  function fitsLabel(g) {
    // short, accurate label using the model name only
    return 'Fits your ' + (g.model || g.gen);
  }
  function fitsBadgeHTML(g, pdp) {
    return '<span class="cf-grg-fits' + (pdp ? ' cf-grg-fits-pdp' : '') + '">' +
           SVG.check + esc(fitsLabel(g)) + '</span>';
  }

  function applyFitsHints() {
    var g = getGarage();
    if (!g) return;
    var slugs = pageCategorySlugs();
    if (!fitsSavedBike(g, slugs)) return;   // cannot reliably confirm -> show nothing

    // PDP: one prominent badge near the title/price
    if (d.body.classList.contains('single-product')) {
      if (!d.querySelector('.cf-grg-fits-pdp')) {
        var anchor = d.querySelector('.product_title.entry-title') ||
                     d.querySelector('.entry-summary .price, .summary .price, p.price');
        if (anchor) {
          var span = d.createElement('span');
          span.innerHTML = fitsBadgeHTML(g, true);
          anchor.parentNode.insertBefore(span.firstChild, anchor.nextSibling);
        }
      }
      return;
    }

    // Loop/category listings: add a small badge per product card title.
    // Because the whole listing lives under the matched category, every card
    // here fits the saved bike -> safe to badge.
    var titles = d.querySelectorAll('.woocommerce-loop-product__title');
    titles.forEach(function (t) {
      if (t.parentNode.querySelector('.cf-grg-fits')) return; // idempotent per card
      var span = d.createElement('span');
      span.innerHTML = fitsBadgeHTML(g, false);
      // place the badge ABOVE the title for scannability
      t.parentNode.insertBefore(span.firstChild, t);
    });
  }

  /* ---------- utils ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ===================== init ===================== */
  function init() {
    // build the chrome DOM unconditionally + idempotently; CSS scopes decide
    // whether it ever shows (mobile web <=768 / native only).
    buildPill();
    applyFitsHints();

    // first PDP visit, mobile/native ONLY: auto-open the picker ONCE if no
    // bike is set yet. Gated on cfIsMobile() so desktop web never pops a sheet.
    try {
      if (cfIsMobile() && d.body.classList.contains('single-product')
          && !getGarage() && localStorage.getItem(SEEN) !== '1') {
        localStorage.setItem(SEEN, '1');
        // small delay so the base shell paints first; re-check phone-ness +
        // bike-ness at fire time (user may have rotated / set a bike).
        setTimeout(function () {
          if (cfIsMobile() && !getGarage()) openSheet(true);
        }, 650);
      }
    } catch (e) {}

    // keep the pill offset correct on resize/orientation change; if the user
    // rotates a tablet into desktop web width, close any open sheet so it
    // doesn't linger over the untouched desktop layout.
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        measureHeaderTop();
        if (!cfIsMobile() && sheet && sheet.classList.contains('cf-grg-open')) closeSheet();
      }, 150);
    }, { passive: true });

    // re-apply fits hints if WooCommerce ajax-replaces the loop (filters/pagination)
    if (window.jQuery) {
      window.jQuery(d.body).on('wc_fragments_refreshed wc_fragments_loaded', function () {
        setTimeout(applyFitsHints, 60);
      });
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, root = d.documentElement;
  if (d.querySelector('.cf-filters-bar')) return;            // idempotent

  // shop / category / product archive only
  var b = d.body;
  if (!b) return;
  var onShop = b.classList.contains('woocommerce-shop')
            || b.classList.contains('tax-product_cat')
            || b.classList.contains('post-type-archive-product')
            || b.classList.contains('tax-product_tag')        // defensive: tag archives behave the same
            || (b.classList.contains('woocommerce') && d.querySelector('ul.products, .products'));
  if (!onShop) return;

  // mobile/native gate (mirrors the base helper; fall back if base hasn't loaded)
  function cfIsMobile() {
    if (typeof window.cfIsMobile === 'function') return window.cfIsMobile();
    return (window.matchMedia && window.matchMedia('(max-width:768px)').matches)
        || root.classList.contains('cf-native');
  }

  var ICON = {
    sort:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16"/><path d="M4 8l3-4 3 4"/><path d="M17 20V4"/><path d="M20 16l-3 4-3-4"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18"/><path d="M6 12h12"/><path d="M10 19h4"/></svg>',
    close:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    tick:   '<svg class="cf-filters-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>'
  };

  // ---- locate existing site controls (defensive: try several selectors) ----
  var orderingForm = d.querySelector('form.woocommerce-ordering');
  var orderingSelect = orderingForm ? orderingForm.querySelector('select.orderby, select[name="orderby"]') : null;

  // sidebar that holds the YITH ajax filters / Shop-by-Part-Type widget / price filter
  var sidebar = d.querySelector(
    '#secondary, aside#secondary, .widget-area, .woocommerce-sidebar, ' +
    '.elementor-location-sidebar, [class*="sidebar"]'
  );
  // collect the actual filter widgets (don't move random sidebar junk)
  var FILTER_SEL =
    '.yith-wcan-filters, .yith-wcan, .widget_yith-wcan-filters, ' +
    '.widget_product_categories, .widget_layered_nav, .widget_product_tag, ' +
    '.woocommerce-widget-layered-nav, .widget_price_filter, ' +
    '.woocommerce-widget-price-filter, [class*="part-type"], [class*="shop-by"]';
  var filterWidgets = sidebar ? Array.prototype.slice.call(sidebar.querySelectorAll(FILTER_SEL))
                              : Array.prototype.slice.call(d.querySelectorAll(FILTER_SEL));
  // de-dupe nested matches (keep only top-most)
  filterWidgets = filterWidgets.filter(function (el) {
    return !filterWidgets.some(function (o) { return o !== el && o.contains(el); });
  });

  var hasSort = !!orderingSelect;
  var hasFilter = filterWidgets.length > 0;

  // graceful degrade: nothing to surface -> don't add the bar at all
  if (!hasSort && !hasFilter) return;

  // ---- result count (read the REAL element, never fabricate) ----
  function resultCountText() {
    var rc = d.querySelector('.woocommerce-result-count');
    if (rc && rc.textContent.trim()) return rc.textContent.trim();
    return '';
  }

  // count active filters cheaply WITHOUT double-counting: a YITH layered-nav
  // term shows up BOTH as a chosen/active node in the DOM AND as a filter_<attr>
  // URL param, so we use a single source. Prefer the URL (one filter_ param per
  // active attribute group + price); only fall back to DOM .chosen/active counts
  // when the URL carries no filter_ params (plugins/themes that don't push state
  // to the query string). Never add the two together.
  function activeFilterCount() {
    var n = 0, urlFilters = 0;
    try {
      var p = new URLSearchParams(location.search);
      if (p.get('min_price') || p.get('max_price')) n += 1;
      p.forEach(function (v, k) { if (/^filter_/.test(k) && v) urlFilters += 1; });
    } catch (e) {}
    if (urlFilters > 0) return n + urlFilters;
    // no filter_ params in the URL -> count active terms from the DOM instead
    filterWidgets.forEach(function (w) {
      n += w.querySelectorAll('.chosen, .yith-wcan-active, li.active, .selected').length;
    });
    return n;
  }

  // ---------- build the sticky bar (DOM only; visibility is CSS) ----------
  var bar = d.createElement('div');
  bar.className = 'cf-filters-bar';
  bar.setAttribute('role', 'toolbar');

  var sortBtn = '';
  if (hasSort) {
    sortBtn = '<button type="button" class="cf-filters-btn" data-cf-open="sort">'
            + ICON.sort + '<span>Sort</span></button>';
  }
  var fc = hasFilter ? activeFilterCount() : 0;
  var filterBtn = '';
  if (hasFilter) {
    filterBtn = '<button type="button" class="cf-filters-btn" data-cf-open="filter">'
              + ICON.filter + '<span>Filter</span>'
              + (fc > 0 ? '<span class="cf-filters-count">' + fc + '</span>' : '')
              + '</button>';
  }
  var rcText = resultCountText();
  var rcHTML = rcText ? '<span class="cf-filters-resultcount">' + rcText + '</span>' : '';

  bar.innerHTML = sortBtn + filterBtn + rcHTML;

  // place it under the header, above the products. Prefer the WC content wrapper.
  var anchor = d.querySelector('.woocommerce-products-header')
            || d.querySelector('.woocommerce-result-count')
            || d.querySelector('ul.products, .products');
  if (anchor && anchor.parentNode) {
    anchor.parentNode.insertBefore(bar, anchor);
  } else {
    // last resort: after the header
    var hdr = d.querySelector('header.site-header');
    if (hdr && hdr.parentNode) hdr.parentNode.insertBefore(bar, hdr.nextSibling);
    else return; // truly nowhere sensible -> bail (no orphan bar)
  }

  // ---------- scrim + two sheets (DOM always built) ----------
  var scrim = d.createElement('div');
  scrim.className = 'cf-filters-scrim';
  d.body.appendChild(scrim);

  function makeSheet(title) {
    var s = d.createElement('div');
    s.className = 'cf-filters-sheet';
    s.setAttribute('role', 'dialog');
    s.setAttribute('aria-modal', 'true');
    s.setAttribute('aria-label', title);
    s.innerHTML =
      '<div class="cf-filters-grip"></div>' +
      '<div class="cf-filters-head"><h3>' + title + '</h3>' +
        '<button type="button" class="cf-filters-close" aria-label="Close">' + ICON.close + '</button></div>' +
      '<div class="cf-filters-body"></div>';
    d.body.appendChild(s);
    s.querySelector('.cf-filters-close').addEventListener('click', closeAll);
    return s;
  }

  var sortSheet = hasSort ? makeSheet('Sort by') : null;
  var filterSheet = hasFilter ? makeSheet('Filter') : null;

  // ---- populate SORT sheet from the real <select> options (safe on desktop too:
  //      reads the select, doesn't move it) ----
  if (sortSheet) {
    var sbody = sortSheet.querySelector('.cf-filters-body');
    var list = d.createElement('div');
    list.className = 'cf-filters-sortlist';
    Array.prototype.forEach.call(orderingSelect.options, function (opt) {
      var btn = d.createElement('button');
      btn.type = 'button';
      btn.className = 'cf-filters-sortopt';
      btn.setAttribute('role', 'menuitemradio');
      btn.setAttribute('aria-checked', opt.selected ? 'true' : 'false');
      btn.dataset.cfVal = opt.value;
      btn.innerHTML = '<span>' + opt.textContent + '</span>' + ICON.tick;
      btn.addEventListener('click', function () {
        // drive the REAL select so the site's own handler submits/ajaxes
        if (orderingSelect.value === opt.value) { closeAll(); return; }
        orderingSelect.value = opt.value;
        var ev;
        try { ev = new Event('change', { bubbles: true }); }
        catch (e) { ev = d.createEvent('HTMLEvents'); ev.initEvent('change', true, false); }
        orderingSelect.dispatchEvent(ev);
        if (window.jQuery) { try { window.jQuery(orderingSelect).trigger('change'); } catch (e) {} }
        // non-ajax themes need a submit
        if (orderingForm && typeof orderingForm.requestSubmit === 'function') {
          try { orderingForm.requestSubmit(); } catch (e) {}
        } else if (orderingForm) {
          try { orderingForm.submit(); } catch (e) {}
        }
        closeAll();
      });
      list.appendChild(btn);
    });
    sbody.appendChild(list);
  }

  // ---- FILTER sheet population MOVES the real widgets out of the sidebar.
  //      That mutates the page structure, so it's a mobile-ONLY behavior:
  //      gate on cfIsMobile() and re-check on resize so desktop web keeps
  //      its real sidebar. Move once; never clone (keeps YITH/price-slider
  //      events live). ----
  var widgetsMoved = false;
  function moveWidgetsIn() {
    if (widgetsMoved || !filterSheet) return;
    var fbody = filterSheet.querySelector('.cf-filters-body');
    if (filterWidgets.length) {
      filterWidgets.forEach(function (w) { fbody.appendChild(w); });
      widgetsMoved = true;
    } else {
      fbody.innerHTML = '<p class="cf-filters-empty">No filters available for this view.</p>';
      widgetsMoved = true;
    }
  }

  // ---------- open / close plumbing ----------
  var openSheet = null;
  function openOne(which) {
    if (!cfIsMobile()) return;                 // desktop: bar is CSS-hidden, but guard behavior too
    if (which === 'filter') moveWidgetsIn();   // lazily relocate widgets the first time the sheet opens
    var s = which === 'sort' ? sortSheet : filterSheet;
    if (!s) return;
    openSheet = s;
    scrim.classList.add('cf-open');
    s.classList.add('cf-open');
    root.style.overflow = 'hidden';            // lock background scroll while sheet is open
  }
  function closeAll() {
    scrim.classList.remove('cf-open');
    if (sortSheet) sortSheet.classList.remove('cf-open');
    if (filterSheet) filterSheet.classList.remove('cf-open');
    root.style.overflow = '';
    openSheet = null;
    syncBadge();
  }
  scrim.addEventListener('click', closeAll);
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openSheet) closeAll(); });

  bar.addEventListener('click', function (e) {
    var t = e.target.closest('[data-cf-open]');
    if (!t) return;
    openOne(t.getAttribute('data-cf-open'));
  });

  // mark the body so the scoped CSS can hide the theme's result-count + ordering form.
  // (Hiding is CSS — only takes effect inside the mobile / cf-native scope, so desktop
  //  keeps its real controls even though this class is always present.)
  b.classList.add('cf-filters-on');

  // if a tablet rotates from mobile->desktop width on the WEB while a sheet is open, close it
  window.addEventListener('resize', function () {
    if (openSheet && !cfIsMobile()) closeAll();
  });

  // keep the active-filter badge + result count fresh after YITH ajax re-renders
  function syncBadge() {
    var btn = bar.querySelector('[data-cf-open="filter"]');
    if (!btn) return;
    var n = activeFilterCount();
    var badge = btn.querySelector('.cf-filters-count');
    if (n > 0) {
      if (!badge) {
        badge = d.createElement('span');
        badge.className = 'cf-filters-count';
        btn.appendChild(badge);
      }
      badge.textContent = n;
    } else if (badge) {
      badge.remove();
    }
  }
  function syncResultCount() {
    var el = bar.querySelector('.cf-filters-resultcount');
    var txt = resultCountText();
    if (txt && el) el.textContent = txt;
    else if (txt && !el) {
      el = d.createElement('span');
      el.className = 'cf-filters-resultcount';
      el.textContent = txt;
      bar.appendChild(el);
    }
  }

  if (window.jQuery) {
    // YITH AJAX filters fire these on the document/body after a re-render
    window.jQuery(d.body).on('yith-wcan-ajax-filtered yith_wcan_ajax_loaded ' +
                             'wc_fragments_refreshed wc_fragments_loaded', function () {
      syncBadge(); syncResultCount();
    });
  }
})();
(function () {
  var d = document, root = d.documentElement;
  if (!d.body || !d.body.classList.contains('single-product')) return; // PDP only
  if (root.classList.contains('cf-pdp-built')) return;                 // idempotent
  root.classList.add('cf-pdp-built');

  /* ---- inlined READ-ONLY bike taxonomy (model + gen slugs).
     Mirrors modules/_bike_taxonomy.json. Used to recognize which category/
     attribute slugs are BIKE fitment slugs (vs part-type/material categories). ---- */
  var TAX = {"brands":[
    {"name":"Aprilia","slug":"aprilia","children":[
      {"name":"RSV4","slug":"rsv4","gens":[{"name":"RSV4 (2021-2024)","slug":"rsv4-2021-2024"}]}]},
    {"name":"BMW","slug":"bmw","children":[
      {"name":"S1000RR","slug":"s1000rr","gens":[
        {"name":"S1000RR (2020-2022)","slug":"s1000rr-2020-2022"},
        {"name":"S1000RR (2019-2022)","slug":"s1000rr-2019-2022"},
        {"name":"S1000RR (2023-2024)","slug":"s1000rr-2023-2024"},
        {"name":"S1000RR (2009-2011)","slug":"s1000rr-2009-2011"},
        {"name":"S1000RR (2012-2014)","slug":"s1000rr-2012-2014"},
        {"name":"S1000RR (2015-2019)","slug":"s1000rr-2015-2019"},
        {"name":"S1000RR (2025+)","slug":"s1000rr-2025"}]}]},
    {"name":"Ducati","slug":"ducati","children":[
      {"name":"Panigale V4","slug":"panigale-v4","gens":[
        {"name":"Panigale V4 (2022+)","slug":"panigale-v4-2022"},
        {"name":"Panigale V4 (2025+)","slug":"panigale-v4-2025"}]},
      {"name":"Streetfighter V4","slug":"streetfighter-v4","gens":[
        {"name":"Streetfighter V4 (2020+)","slug":"streetfighter-v4-2020"},
        {"name":"Streetfighter V4 (2025+)","slug":"streetfighter-v4-2025"}]}]},
    {"name":"Honda","slug":"honda","children":[
      {"name":"CBR1000RR-R","slug":"cbr1000rr-r","gens":[{"name":"CBR1000RR-R (2020+)","slug":"cbr1000rr-r-2020"}]}]},
    {"name":"KTM","slug":"ktm","children":[
      {"name":"Super Duke R","slug":"super-duke-r","gens":[
        {"name":"1290 Super Duke R (2020-2023)","slug":"1290-super-duke-r-2020-2023"},
        {"name":"1390 Super Duke R EVO (2024+)","slug":"1390-super-duke-r-evo-2024"}]}]},
    {"name":"Kawasaki","slug":"kawasaki","children":[
      {"name":"ZX-10R","slug":"zx-10r","gens":[
        {"name":"ZX-10R (2016-2020)","slug":"zx-10r-2016-2020"},
        {"name":"ZX-10R (2021-2025)","slug":"zx-10r-2021-2025"}]},
      {"name":"H2","slug":"h2","gens":[{"name":"H2 / H2R","slug":"h2-h2r"}]}]},
    {"name":"Suzuki","slug":"suzuki","children":[
      {"name":"GSX-R1000","slug":"gsx-r1000","gens":[{"name":"GSX-R1000 (2017-2025)","slug":"gsx-r1000-2017-2025"}]}]},
    {"name":"Triumph","slug":"triumph","children":[
      {"name":"Speed Triple","slug":"speed-triple","gens":[{"name":"Speed Triple 1200 RS (2021+)","slug":"speed-triple-1200-rs-2021"}]}]},
    {"name":"Yamaha","slug":"yamaha","children":[
      {"name":"R1","slug":"r1","gens":[{"name":"R1 / R1M (2020+)","slug":"r1-r1m-2020"}]}]}
  ]};

  var BIKE_SLUGS = {}, GEN_TO_MODEL = {}, MODEL_GENS = {};
  TAX.brands.forEach(function (b) {
    (b.children || []).forEach(function (m) {
      BIKE_SLUGS[m.slug] = 1; MODEL_GENS[m.slug] = [];
      (m.gens || []).forEach(function (g) {
        BIKE_SLUGS[g.slug] = 1; GEN_TO_MODEL[g.slug] = m.slug; MODEL_GENS[m.slug].push(g.slug);
      });
    });
  });

  function priceEl() {
    return d.querySelector('.entry-summary .price, .summary .price, p.price');
  }

  /* ============================================================
     (2) FINANCING — clone the gateway's OWN BNPL message up under the price.
     Never hard-code a $ amount or term; render NOTHING if none exists.
     ============================================================ */
  function finance() {
    var price = priceEl();
    if (!price) return;
    if (d.querySelector('.cf-pdp-fin')) return;            // idempotent

    var sel = [
      '.affirm-as-low-as', '[data-promo-id]', '.__affirm-logo',          // Affirm
      '.klarna-placement', 'klarna-placement',                           // Klarna
      '.afterpay-paragraph', '[data-amount].afterpay-placeholder',       // Afterpay/Clearpay
      '.afterpay-messaging', 'afterpay-placement',                       // Afterpay (web component)
      '.sezzle-checkout-button-wrapper', '.sezzle-shopify-info-button',  // Sezzle
      '[data-pp-message]', '.pp-message',                                // PayPal Pay Later
      '.wc-affirm-product-messaging', '.wc-klarna-payments-messaging'    // WC gateway wrappers
    ].join(',');

    var src = null;
    try { src = d.querySelector(sel); } catch (e) { src = null; }

    // Fallback: the SITE'S own "as low as / mo" text node that sits below the price.
    if (!src) {
      var summary = d.querySelector('.entry-summary, .summary') || d.body;
      var cands = summary.querySelectorAll('p, div, span');
      for (var i = 0; i < cands.length; i++) {
        var el = cands[i];
        if (el.closest('.cf-pdp-fin') || el.closest('.cf-stickyatc')) continue;
        var t = (el.textContent || '').toLowerCase();
        if (/as low as|\/\s*mo\b|month with (affirm|klarna|afterpay|sezzle)|interest[- ]free/.test(t)
            && el.children.length <= 3 && t.length < 160) {
          if (price.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) { src = el; break; }
        }
      }
    }

    if (!src) return;                                      // nothing renders -> render nothing

    var box = d.createElement('div');
    box.className = 'cf-pdp-fin';
    var clone = src.cloneNode(true);
    clone.removeAttribute && clone.removeAttribute('id');
    var withIds = clone.querySelectorAll ? clone.querySelectorAll('[id]') : [];
    for (var k = 0; k < withIds.length; k++) withIds[k].removeAttribute('id');
    box.appendChild(clone);
    if (price.parentNode) price.parentNode.insertBefore(box, price.nextSibling);
  }

  /* ============================================================
     (4) REVIEWS jump anchor near the title (only if a reviews section exists).
     ============================================================ */
  function reviewsAnchor() {
    var reviews = d.querySelector('#reviews, .woocommerce-Reviews');
    if (!reviews) return;
    var title = d.querySelector('.product_title.entry-title, .product_title');
    if (!title) return;
    if (d.querySelector('.cf-pdp-reviews')) return;        // idempotent

    var btn = d.createElement('button');
    btn.type = 'button';
    btn.className = 'cf-pdp-reviews';
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
      + '<span><u>Reviews</u></span>';

    btn.addEventListener('click', function () {
      var tabLink = d.querySelector('.reviews_tab a, li.reviews_tab a, [href="#tab-reviews"]');
      if (tabLink) { try { tabLink.click(); } catch (e) {} }
      var target = d.querySelector('#reviews, .woocommerce-Reviews') || reviews;
      try { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      catch (e) { target.scrollIntoView(); }
    });

    title.parentNode.insertBefore(btn, title.nextSibling);
  }

  /* ============================================================
     (5) FITS-YOUR-BIKE line — one authoritative fitment verdict near the price.
       yes  = saved garage bike is in this product's fitment set
       no   = bike-specific part, but the saved bike is NOT listed
       ask  = no bike saved yet (only when the part IS bike-specific)
       (silent) = product carries no recognizable bike fitment data
     ============================================================ */
  function getGarage() {
    try { var v = JSON.parse(localStorage.getItem('cf_garage') || 'null');
      if (v && v.model) return v; } catch (e) {}
    return null;
  }

  function slugify(s) {
    return String(s).toLowerCase().trim()
      .replace(/\(([^)]+)\)/g, '-$1')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function matchNameToSlug(name, out) {
    var s = slugify(name);
    for (var slug in BIKE_SLUGS) { if (s && (s === slug || s.indexOf(slug) === 0)) { out[slug] = 1; return; } }
  }

  function productBikeSlugs() {
    var found = {};

    String(d.body.className).split(/\s+/).forEach(function (c) {
      var m = c.match(/^product[_-]cat[_-](.+)$/i)
            || c.match(/^product[_-]pa[_-]fits[_-]model[_-](.+)$/i)
            || c.match(/^product[_-](?:pa[_-])?fits[_-]model[_-](.+)$/i);
      if (m && BIKE_SLUGS[m[1].toLowerCase()]) found[m[1].toLowerCase()] = 1;
    });

    try {
      var vf = d.querySelector('form.variations_form[data-product_variations]');
      if (vf) {
        var raw = vf.getAttribute('data-product_variations') || '';
        var rx = /attribute_pa_fits[_-]model"\s*:\s*"([^"]+)"/gi, mm;
        while ((mm = rx.exec(raw))) {
          var s = mm[1].toLowerCase();
          if (BIKE_SLUGS[s]) found[s] = 1;
        }
      }
    } catch (e) {}

    try {
      d.querySelectorAll(
        '.woocommerce-product-attributes-item--attribute_pa_fits_model a,' +
        '.woocommerce-product-attributes-item--attribute_pa_fits_model td,' +
        'select#pa_fits_model option, select[name="attribute_pa_fits_model"] option,' +
        '[data-attribute_name="attribute_pa_fits_model"] li'
      ).forEach(function (el) {
        var slug = (el.getAttribute && el.getAttribute('value')) || '';
        slug = (slug || el.textContent || '').toLowerCase().trim();
        if (BIKE_SLUGS[slug]) { found[slug] = 1; return; }
        var norm = slugify(slug);
        if (BIKE_SLUGS[norm]) found[norm] = 1;
        else matchNameToSlug(el.textContent || '', found);
      });
    } catch (e) {}

    try {
      d.querySelectorAll('.woocommerce-breadcrumb a, nav.woocommerce-breadcrumb a, .ast-breadcrumbs a, .yoast-breadcrumb a')
        .forEach(function (a) {
          var bm = (a.getAttribute('href') || '').match(/\/product-category\/([^\/?#]+)/i);
          if (bm && BIKE_SLUGS[bm[1].toLowerCase()]) found[bm[1].toLowerCase()] = 1;
        });
    } catch (e) {}

    return found;
  }

  function decideFit(g, slugSet) {
    var keys = Object.keys(slugSet);
    if (!keys.length) return 'unknown';

    var savedGen = g.slug && BIKE_SLUGS[g.slug] ? g.slug : null;
    var savedModel = savedGen ? (GEN_TO_MODEL[savedGen] || null)
                              : (g.modelSlug && BIKE_SLUGS[g.modelSlug] ? g.modelSlug : null);
    if (!savedModel && g.model) { var ms = slugify(g.model); if (BIKE_SLUGS[ms]) savedModel = ms; }

    if (savedGen && slugSet[savedGen]) return 'fits';
    if (savedModel) {
      if (slugSet[savedModel]) return 'fits';
      var gens = MODEL_GENS[savedModel] || [];
      for (var i = 0; i < gens.length; i++) if (slugSet[gens[i]]) return 'fits';
    }
    return 'no';
  }

  var SVG = {
    yes: '<svg class="cf-pdp-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.4 2.4 4.6-4.8"/></svg>',
    no:  '<svg class="cf-pdp-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4.5"/><path d="M12 17.2h.01"/></svg>',
    ask: '<svg class="cf-pdp-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.2"/><circle cx="18.5" cy="17.5" r="3.2"/><path d="M5.5 17.5 9 9h4l2 4h3.5"/><path d="M9 9 8 6H6"/></svg>'
  };

  function shortGen(name) { var m = String(name || '').match(/\(([^)]+)\)/); return m ? m[1] : ''; }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function bikeLabel(g) {
    var parts = [];
    if (g.brand) parts.push(g.brand);
    parts.push(g.model || g.gen || 'your bike');
    var yr = shortGen(g.gen);
    return (yr ? esc(yr) + ' ' : '') + esc(parts.join(' '));
  }

  function openGarage() {
    var pill = d.querySelector('.cf-grg-pill');
    if (pill) { pill.click(); return; }
    location.href = '/shop/';
  }

  function removeFitLine() {
    var line = d.querySelector('.cf-pdp-fit');
    if (line && line.parentNode) line.parentNode.removeChild(line);
  }

  function fitLine() {
    // drop the garage module's simpler PDP badge so there's ONE authoritative line
    var dupBadge = d.querySelector('.cf-grg-fits-pdp');
    if (dupBadge && dupBadge.parentNode) dupBadge.parentNode.removeChild(dupBadge);

    var anchor = priceEl()
              || d.querySelector('.product_title.entry-title, .product_title');
    if (!anchor) return;

    var g = getGarage();
    var slugSet = productBikeSlugs();
    var hasBikeData = Object.keys(slugSet).length > 0;

    var state, head, sub, action = '';

    if (!g) {
      if (!hasBikeData) { removeFitLine(); return; }   // universal/unknown part -> silent
      state = 'ask';
      head = 'Set your bike to confirm fitment';
      sub = 'See instantly whether this part fits before you buy.';
      action = '<button type="button" class="cf-pdp-fit-act">Set bike</button>';
    } else {
      var verdict = decideFit(g, slugSet);
      if (verdict === 'unknown') { removeFitLine(); return; } // no readable data -> silent
      if (verdict === 'fits') {
        state = 'yes';
        head = '✓ Fits your ' + bikeLabel(g);
        sub = 'Confirmed from this product’s fitment list.';
        action = '<button type="button" class="cf-pdp-fit-act">Change bike</button>';
      } else {
        state = 'no';
        head = '⚠ Not listed for your ' + bikeLabel(g);
        sub = 'This part isn’t on the fitment list for your bike — verify before ordering.';
        action = '<button type="button" class="cf-pdp-fit-act">Change bike</button>';
      }
    }

    var icon = state === 'yes' ? SVG.yes : (state === 'no' ? SVG.no : SVG.ask);
    var line = d.querySelector('.cf-pdp-fit');
    if (!line) {
      line = d.createElement('div');
      line.className = 'cf-pdp-fit';
      anchor.parentNode.insertBefore(line, anchor.nextSibling);
    }
    line.className = 'cf-pdp-fit cf-pdp-fit-' + state;
    line.setAttribute('role', state === 'no' ? 'alert' : 'status');
    line.innerHTML = icon +
      '<div class="cf-pdp-fit-body"><span class="cf-pdp-fit-head">' + head + '</span>' +
      '<span class="cf-pdp-fit-sub">' + sub + '</span></div>' + action;

    var act = line.querySelector('.cf-pdp-fit-act');
    if (act) act.addEventListener('click', openGarage);
  }

  /* ---------- build everything (DOM built unconditionally; CSS shows by width) ----------
     (1) bigger price/title + (3) graphite gallery are pure CSS — nothing to build. */
  function build() {
    finance();
    reviewsAnchor();
    fitLine();
  }

  function init() {
    build();
    // fitment can change after the garage paints / the bike is updated; re-check.
    setTimeout(fitLine, 300);
    window.addEventListener('storage', function (e) { if (e.key === 'cf_garage') fitLine(); });
    window.addEventListener('focus', function () { setTimeout(fitLine, 50); }, { passive: true });
    if (window.jQuery) {
      window.jQuery(d.body).on('wc_fragments_refreshed wc_fragments_loaded found_variation reset_data', function () {
        setTimeout(fitLine, 60);
      });
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, root = d.documentElement;
  // My Account only; the CSS scopes decide visibility by width/native, so the
  // DOM is built unconditionally + idempotently (no html.cf-app, no flag gating).
  if (!d.body || !d.body.classList.contains('woocommerce-account')) return;
  if (d.querySelector('span.cf-acct-skinned')) return;       // idempotent

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function init() {
    var body = d.body;
    if (!body.classList.contains('woocommerce-account')) return;
    if (d.querySelector('span.cf-acct-skinned')) return;     // idempotent guard

    var nav = d.querySelector('.woocommerce-MyAccount-navigation');

    // --- Endpoint icon map (keyed on WooCommerce nav-link--<endpoint> classes) ---
    var ICON = {
      dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
      orders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16l-1 13H5L4 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>',
      downloads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>',
      'edit-address': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      'payment-methods': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
      'edit-account': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
      'customer-logout': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 17l-5-5 5-5"/><path d="M5 12h12"/></svg>',
      affiliate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="m12 12 0 5"/><path d="m9.5 17 2.5 4 2.5-4"/></svg>',
      generic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/></svg>'
    };

    // Heuristic: detect a Goaffpro / affiliate nav item WITHOUT fabricating one.
    // We only ever match an EXISTING link.
    var AFF_RE = /goaffpro|affiliate|\baffil|referr?al|partner[\s-]*program|ambassador/i;

    if (nav) {
      var links = nav.querySelectorAll('li a');
      Array.prototype.forEach.call(links, function (a) {
        var li = a.closest('li');
        var ep = 'generic';
        var cls = (li && li.className) || '';
        var m = cls.match(/woocommerce-MyAccount-navigation-link--([a-z0-9-]+)/i);
        if (m) ep = m[1].toLowerCase();

        var label = (a.textContent || '').trim();
        var href = a.getAttribute('href') || '';

        var isAff = (ep !== 'customer-logout') &&
                    (AFF_RE.test(cls) || AFF_RE.test(label) || AFF_RE.test(href));

        var iconKey = isAff ? 'affiliate' : (ICON[ep] ? ep : 'generic');
        if (isAff && li) li.classList.add('cf-acct-affiliate');

        // prepend an icon slot once (don't disturb WooCommerce's link text/href/handlers)
        if (a.querySelector('.cf-acct-ico')) return;
        var ico = d.createElement('span');
        ico.className = 'cf-acct-ico';
        ico.setAttribute('aria-hidden', 'true');
        ico.innerHTML = ICON[iconKey] || ICON.generic;
        a.insertBefore(ico, a.firstChild);
      });
    }

    // --- Greeting header (only if we can read a name from what's already on the page) ---
    if (nav && !d.querySelector('.cf-acct-head')) {
      var name = '';
      var content = d.querySelector('.woocommerce-MyAccount-content');
      if (content) {
        var strong = content.querySelector('p strong');
        if (strong) name = (strong.textContent || '').trim();
        if (!name) {
          var hi = (content.querySelector('p') || {}).textContent || '';
          var hm = hi.match(/hello\s+([^\s(.,!]+)/i);
          if (hm) name = hm[1];
        }
      }
      var head = d.createElement('div');
      head.className = 'cf-acct-head';
      var initial = name ? name.charAt(0).toUpperCase() : '';
      head.innerHTML =
        '<div class="cf-acct-avatar">' + (initial ? esc(initial) : ICON['edit-account']) + '</div>' +
        '<div>' +
          '<div class="cf-acct-hi">' + (name ? 'Signed in as' : 'My Account') + '</div>' +
          '<div class="cf-acct-name">' + (name ? esc(name) : 'Account') + '</div>' +
        '</div>';
      nav.parentNode.insertBefore(head, nav);
    }

    // --- iOS-friendly username/login/email fields ---
    var unameSel = '#username, #reg_username, input[name="username"], input[name="email"][autocomplete="username"]';
    Array.prototype.forEach.call(d.querySelectorAll(unameSel), function (inp) {
      inp.setAttribute('autocapitalize', 'off');
      inp.setAttribute('autocorrect', 'off');
      inp.setAttribute('spellcheck', 'false');
    });
    Array.prototype.forEach.call(d.querySelectorAll('input[type="email"], #reg_email'), function (inp) {
      inp.setAttribute('autocapitalize', 'off');
      inp.setAttribute('autocorrect', 'off');
      inp.setAttribute('spellcheck', 'false');
      inp.setAttribute('inputmode', 'email');
    });

    // mark done — a hidden marker node is the idempotency token (survives a
    // theme refresh that strips body classes)
    var mark = d.createElement('span');
    mark.className = 'cf-acct-skinned';
    mark.style.display = 'none';
    d.body.appendChild(mark);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, root = d.documentElement;
  if (root.getAttribute('data-cf-trustpay') === '1') return;   // idempotent: whole module
  root.setAttribute('data-cf-trustpay', '1');

  // base helper; fall back if base not present
  function cfIsMobile() {
    if (typeof window.cfIsMobile === 'function') return window.cfIsMobile();
    return (window.matchMedia && window.matchMedia('(max-width:768px)').matches)
        || root.classList.contains('cf-native');
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(html) { var t = d.createElement('div'); t.innerHTML = html.trim(); return t.firstChild; }

  var jq = window.jQuery || null;
  var b = d.body || null;
  var isPDP      = !!(b && b.classList.contains('single-product'));
  var isCart     = !!(b && b.classList.contains('woocommerce-cart'));
  var isCheckout = !!(b && b.classList.contains('woocommerce-checkout'));
  // order-received (thank-you) is also woocommerce-checkout — skip the hoist there.
  if (isCheckout && (b.classList.contains('woocommerce-order-received') || d.querySelector('.woocommerce-order'))) {
    isCheckout = false;
  }

  /* ===================================================================
     (A) PDP TRUST ROW — ONE row only. Upgrade base .cf-trustrow in place.
     =================================================================== */

  /* CF_POLICY — the ONLY place real policy facts live. EMPTY by default so
     nothing is fabricated. Joaquin: fill `label` with the VERIFIED term and
     `slug` with the VERIFIED live policy-page path, then redeploy. A chip with
     an empty `label` is NOT rendered (no guessed wording, no dead link).
     Per build_log.md the returns + warranty policy is still PENDING. */
  var CF_POLICY = {
    returns:  { label: '', slug: '' },   /* TODO: Joaquin to confirm returns term + live slug */
    warranty: { label: '', slug: '' }    /* TODO: Joaquin to confirm warranty term + live slug */
  };

  var TIC = {
    fits:    '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    returns: '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',
    warranty:'<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z"/><path d="m9.5 12 1.8 1.8L15 10"/></svg>',
    genuine: '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="m9 13-2 7 5-3 5 3-2-7"/></svg>',
    secure:  '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'
  };
  var GO = '<span class="cf-trust-go" aria-hidden="true">&rsaquo;</span>';

  // NOTE: no ?source=app appended — internal links stay internal (contract drops ?source=app).
  function buildTrustChips() {
    var chips = [];
    // 1) Fitment — the #1 question for moto parts (the product's own job; no policy claim).
    chips.push('<span class="cf-trust-chip cf-trust-key">' + TIC.fits +
      'Fits your bike <span class="cf-trust-sub">&middot; verified parts</span></span>');
    // 2) Returns — linkable, only if a verified term + slug exist.
    if (CF_POLICY.returns.label) {
      chips.push(CF_POLICY.returns.slug
        ? '<a class="cf-trust-chip" href="' + esc(CF_POLICY.returns.slug) + '">' + TIC.returns + esc(CF_POLICY.returns.label) + GO + '</a>'
        : '<span class="cf-trust-chip">' + TIC.returns + esc(CF_POLICY.returns.label) + '</span>');
    }
    // 3) Warranty — linkable, only if a verified term + slug exist.
    if (CF_POLICY.warranty.label) {
      chips.push(CF_POLICY.warranty.slug
        ? '<a class="cf-trust-chip" href="' + esc(CF_POLICY.warranty.slug) + '">' + TIC.warranty + esc(CF_POLICY.warranty.label) + GO + '</a>'
        : '<span class="cf-trust-chip">' + TIC.warranty + esc(CF_POLICY.warranty.label) + '</span>');
    }
    // 4) Genuine carbon — true brand signal.
    chips.push('<span class="cf-trust-chip">' + TIC.genuine + 'Genuine carbon fiber</span>');
    // 5) Secure checkout — always true (HTTPS + Woo/Stripe).
    chips.push('<span class="cf-trust-chip">' + TIC.secure + 'Secure checkout</span>');
    return chips.join('');
  }

  function buildTrustRow() {
    if (!isPDP) return;
    var html = buildTrustChips();

    // Prefer to UPGRADE the base .cf-trustrow IN PLACE (no duplicate row).
    var row = d.querySelector('.cf-trustrow');
    if (row) {
      if (row.classList.contains('cf-trust-up')) return;   // already upgraded
      row.classList.add('cf-trust-up');
      row.innerHTML = html;
      return;
    }
    // Base row absent (base not shipped yet) -> build ONE of our own after form.cart.
    if (d.querySelector('.cf-trustrow.cf-trust-up')) return;
    var anchor = d.querySelector('form.cart')
      || d.querySelector('.entry-summary .price, .summary .price, p.price')
      || d.querySelector('.product_title.entry-title, .product_title');
    if (!anchor || !anchor.parentNode) return;
    var own = d.createElement('div');
    own.className = 'cf-trustrow cf-trust-up';
    own.innerHTML = html;
    anchor.parentNode.insertBefore(own, anchor.nextSibling);
  }

  /* ===================================================================
     (B) PAYMENT-SECURITY BADGES — LIVE marks only.
     =================================================================== */
  // Recognizable but trademark-safe type-in-pill / simple icon marks. LIVE set
  // per build_log.md. Apple Pay (verify failed) + PayPal (unconfirmed) EXCLUDED.
  var MARK = {
    visa:   { cls: 'cf-pt-visa',   html: 'VISA',     label: 'Visa' },
    mc:     { cls: 'cf-pt-mc',     label: 'Mastercard', html:
      '<svg viewBox="0 0 40 24" aria-hidden="true">'
        + '<circle cx="16" cy="12" r="9" fill="#A8A29E"></circle>'
        + '<circle cx="24" cy="12" r="9" fill="#E10600"></circle>'
        + '<path d="M20 5.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6Z" fill="#E8E4E0"></path>'
      + '</svg>' },
    amex:   { cls: 'cf-pt-amex',   html: 'AMEX',     label: 'American Express' },
    disc:   { cls: 'cf-pt-disc',   html: 'DISCOVER', label: 'Discover' },
    gpay:   { cls: 'cf-pt-gpay',   label: 'Google Pay', html:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#A8A29E" d="M12 10.2v3.7h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3.1c1.8-1.7 2.8-4.1 2.8-7 0-.7-.06-1.3-.18-1.9H12Z"/><path fill="#E8E4E0" d="M12 21c2.5 0 4.6-.83 6.1-2.2l-3.1-2.4c-.85.57-1.95.9-3 .9-2.3 0-4.3-1.55-5-3.65H3.8v2.5A9 9 0 0 0 12 21Z"/></svg>'
      + '<span style="margin-left:3px">Pay</span>' },
    amzn:   { cls: 'cf-pt-amzn',   label: 'Amazon Pay', html:
      '<span>amazon</span><svg viewBox="0 0 30 8" style="height:8px;margin-left:3px" aria-hidden="true"><path d="M2 6c5 3 12 3 17 0" stroke="#E10600" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg><span style="margin-left:2px">pay</span>' },
    affirm: { cls: 'cf-pt-affirm', html: 'affirm', label: 'Affirm' },
    klarna: { cls: 'cf-pt-klarna', html: 'Klarna', label: 'Klarna' }
  };
  var PT_ORDER = ['visa', 'mc', 'amex', 'disc', 'gpay', 'amzn', 'affirm', 'klarna'];

  var PT_LOCK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="4.5" y="10.5" width="15" height="10" rx="2.2"></rect>'
    + '<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path>'
    + '<circle cx="12" cy="15.2" r="1.3" fill="currentColor" stroke="none"></circle></svg>';

  function ptSecureLine() {
    var s = d.createElement('span');
    s.className = 'cf-paytrust-secure';
    s.innerHTML = PT_LOCK + '<span>Secure SSL checkout <span class="cf-paytrust-sub">&middot; encrypted payment</span></span>';
    return s;
  }
  function ptMarksRail() {
    var rail = d.createElement('div');
    rail.className = 'cf-paytrust-marks';
    PT_ORDER.forEach(function (k) {
      var m = MARK[k]; if (!m) return;
      var pill = d.createElement('span');
      pill.className = 'cf-paytrust-mark ' + m.cls;
      pill.innerHTML = m.html;
      pill.setAttribute('role', 'img');
      pill.setAttribute('aria-label', m.label || k);
      rail.appendChild(pill);
    });
    return rail;
  }

  function buildPayBadges() {
    // (B-a) PDP badge row directly under the buy box (after the trust row).
    if (isPDP && !d.querySelector('.cf-paytrust-pdp')) {
      var anchor = d.querySelector('.cf-trustrow')
        || d.querySelector('form.cart')
        || d.querySelector('.entry-summary, .summary');
      if (anchor && anchor.parentNode) {
        var box = d.createElement('div');
        box.className = 'cf-paytrust cf-paytrust-pdp';
        box.appendChild(ptSecureLine());
        box.appendChild(ptMarksRail());
        anchor.parentNode.insertBefore(box, anchor.nextSibling);
      }
    }
    // (B-b) in-app footer payment strip (every page; CSS hides it on desktop).
    if (!d.querySelector('.cf-paytrust-foot')) {
      var strip = d.createElement('div');
      strip.className = 'cf-paytrust cf-paytrust-foot';
      strip.setAttribute('role', 'contentinfo');
      strip.appendChild(ptSecureLine());
      strip.appendChild(ptMarksRail());
      var note = d.createElement('div');
      note.className = 'cf-paytrust-note';
      note.textContent = 'Checkout is SSL-encrypted. We never store your full card details.';
      strip.appendChild(note);
      var host = d.querySelector('main#main, main.site-main, #content .ast-container, #primary')
        || d.querySelector('#content') || d.body;
      if (host) host.appendChild(strip);
    }
  }

  /* ===================================================================
     (C) EXPRESS / WALLET HOIST — ONE owner. Relocate the gateway's OWN
     express button to a pinned panel at the TOP of cart + checkout.
     We MOVE the live node (never clone, never fabricate); re-capture on
     gateway re-render. (De-dupes the old paym-0 cf-xpay + paym-1 cartco.)
     =================================================================== */
  var XPAY_SEL = [
    // Stripe / WooPayments Payment Request Button (Apple/Google Pay wallets)
    '#wc-stripe-payment-request-wrapper', '.wc-stripe-payment-request-wrapper',
    '#wc-stripe-express-checkout-element', '#wc-stripe-payment-request-button',
    '.wc-stripe-product-payment-request-button', '#payment-request-button', '.payment-request-button',
    '.woocommerce-stripe-payment-request',
    '#wcpay-payment-request-wrapper', '.wcpay-payment-request-wrapper',
    // Block checkout express area
    '.wc-block-checkout__express-checkout-block', '.wc-block-components-express-payment',
    '.wc-block-components-express-payment__event-buttons',
    // PayPal express / smart buttons (only hoisted if the gateway actually renders them)
    '#ppc-button', '.ppc-button-wrapper', '#woo-paypal-button', '.paypal-button-container',
    '.ppcp-button-container', '#ppcp-express-checkout',
    // generic standalone wallet buttons
    '.apple-pay-button', '.gpay-button', '.woocommerce-express-payment-buttons'
  ];
  var XPAY_DIVIDER_SEL = '.wc-stripe-payment-request-wrapper + .wc-stripe-payment-request--separator, .wc-stripe-payment-request-button-separator';

  var xpanel = null, xslot = null, xmounted = false;

  function makeXpayPanel() {
    var panel = d.createElement('section');
    panel.className = 'cf-xpay-panel';
    panel.setAttribute('aria-label', 'Express checkout');
    panel.innerHTML =
      '<div class="cf-xpay-head">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z"/></svg>'
      + '<span>Express checkout</span></div>'
      + '<div class="cf-xpay-slot"></div>'
      + '<div class="cf-xpay-or">or pay another way</div>'
      + '<div class="cf-xpay-secure">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'
      + '<span>Secure encrypted checkout</span></div>';
    return panel;
  }
  function xpayMountTarget() {
    if (isCart) {
      return d.querySelector('.woocommerce-cart-form, form.woocommerce-cart-form, .wc-block-cart, .cart-collaterals, .woocommerce-cart .woocommerce');
    }
    return d.querySelector('form.checkout, form.woocommerce-checkout, .wc-block-checkout, #customer_details, .woocommerce-checkout .woocommerce');
  }
  // move any live express-pay node(s) into our slot (idempotent per-node)
  function xpayCapture(slotEl) {
    var found = false;
    for (var i = 0; i < XPAY_SEL.length; i++) {
      var nodes;
      try { nodes = d.querySelectorAll(XPAY_SEL[i]); } catch (e) { continue; }
      for (var j = 0; j < nodes.length; j++) {
        var n = nodes[j]; if (!n) continue;
        if (n.closest && n.closest('.cf-xpay-slot')) { found = true; continue; }   // already ours
        // only hoist when there's REAL rendered content (wallet available on this device)
        var hasContent = n.querySelector('iframe, button, [role="button"], canvas, .StripeElement, .gpay-button, .apple-pay-button, img')
          || (n.children && n.children.length > 0) || (n.offsetHeight > 8);
        if (!hasContent) continue;
        slotEl.appendChild(n);
        found = true;
      }
    }
    return found;
  }
  function xpayReveal() {
    if (!xpanel) return false;
    var has = !!xslot.querySelector('*');
    xpanel.classList.toggle('cf-xpay-has', has);
    // remove the gateway's now-orphaned separator if present
    if (has) { try { var sep = d.querySelector(XPAY_DIVIDER_SEL); if (sep) sep.style.display = 'none'; } catch (e) {} }
    return has;
  }
  function buildXpay() {
    if (!isCart && !isCheckout) return;
    // Structural: this MOVES the gateway's live express-pay node. Only do that
    // in the mobile/native experience — never restructure the desktop checkout.
    if (!cfIsMobile()) return;
    if (xmounted) { xpayCapture(xslot); xpayReveal(); return; }
    if (d.querySelector('.cf-xpay-panel')) { xpanel = d.querySelector('.cf-xpay-panel'); xslot = xpanel.querySelector('.cf-xpay-slot'); xmounted = true; xpayCapture(xslot); xpayReveal(); return; }
    var target = xpayMountTarget();
    if (!target || !target.parentNode) return;
    xpanel = makeXpayPanel();
    xslot = xpanel.querySelector('.cf-xpay-slot');
    target.parentNode.insertBefore(xpanel, target);   // pin ABOVE the form/table
    xmounted = true;
    xpayCapture(xslot);
    xpayReveal();
  }

  /* ===================================================================
     (D) FREE-SHIP PROGRESS BAR — threshold stays a TODO; renders
     NOTHING until confirmed (no fabricated $ claim).
     =================================================================== */
  /* CONFIG: mirror the WooCommerce free-shipping minimum here. NOT a fabricated
     price — must mirror the store's own "Free shipping requires a minimum order
     amount" setting. While CF_FREESHIP_CONFIRMED is false the bar stays hidden. */
  var CF_FREESHIP_THRESHOLD = 0;     /* TODO: Joaquin to set the live WC free-shipping minimum (build task flags $600 likely too high for a $125-ish catalog; consider $199-$299). */
  var CF_FREESHIP_CONFIRMED = false; /* TODO: flip true once CF_FREESHIP_THRESHOLD matches the live WooCommerce setting. */

  function parseMoney(str) {
    if (str == null) return null;
    var t = String(str).replace(/&nbsp;/g, ' ');
    var m = t.replace(/[^0-9.,]/g, ' ').match(/(\d{1,3}(?:[,\s]\d{3})*(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g);
    if (!m || !m.length) return null;
    var n = parseFloat(m[m.length - 1].replace(/[,\s]/g, ''));
    return isNaN(n) ? null : n;
  }
  function readSubtotalFromDoc(scope) {
    scope = scope || d;
    var sels = [
      '.cart_totals .cart-subtotal .amount', '.cart-subtotal .woocommerce-Price-amount', '.cart-subtotal .amount',
      '.order-total .amount', '.woocommerce-mini-cart__total .amount', '.widget_shopping_cart_content .total .amount'
    ];
    for (var i = 0; i < sels.length; i++) {
      var e = scope.querySelector(sels[i]);
      if (e) { var v = parseMoney(e.textContent); if (v != null) return v; }
    }
    return null;
  }
  function readSubtotalFromFragments(cb) {
    fetch('/?wc-ajax=get_refreshed_fragments', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var html = j && j.fragments ? Object.values(j.fragments).join(' ') : '';
        if (!html) return cb(null);
        var tmp = d.createElement('div'); tmp.innerHTML = html;
        cb(readSubtotalFromDoc(tmp));
      }).catch(function () { cb(null); });
  }
  function cartCount() {
    var e = d.querySelector('.cart-contents-count, .count, .ast-cart-menu-wrap .count');
    if (e) { var m = e.textContent.replace(/\D/g, ''); if (m !== '') return parseInt(m, 10) || 0; }
    return null;
  }
  function currencySymbol() {
    var e = d.querySelector('.woocommerce-Price-currencySymbol');
    return e ? e.textContent.trim() : '$';
  }
  function money(n) {
    var sym = currencySymbol();
    var s = (Math.round(n * 100) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (s.slice(-3) === '.00') s = s.slice(0, -3);
    return sym + s;
  }
  function renderShipBar(bar, subtotal) {
    if (subtotal == null) return false;
    if (!CF_FREESHIP_CONFIRMED || !(CF_FREESHIP_THRESHOLD > 0)) return false;
    var threshold = CF_FREESHIP_THRESHOLD;
    var remaining = threshold - subtotal;
    var pct = Math.max(0, Math.min(100, (subtotal / threshold) * 100));
    var msg = bar.querySelector('.cf-ship-msg');
    var fill = bar.querySelector('.cf-ship-fill');
    if (remaining > 0.005) {
      bar.classList.remove('cf-ship-done');
      msg.innerHTML = '<span>Add <span class="cf-ship-amt">' + money(remaining) + '</span> for <b>FREE shipping</b></span>';
    } else {
      bar.classList.add('cf-ship-done');
      msg.innerHTML = '<span class="cf-ship-check">&#10003;</span> <span>You unlocked <b>FREE shipping</b></span>';
      pct = 100;
    }
    fill.style.width = pct + '%';
    return true;
  }
  function shipBarMarkup(extraClass) {
    var e = d.createElement('div');
    e.className = 'cf-ship-bar ' + extraClass;
    e.innerHTML = '<div class="cf-ship-msg"></div><div class="cf-ship-track"><div class="cf-ship-fill"></div></div>';
    return e;
  }
  var inlineBar = null, stickyBar = null;
  function buildShipInline() {
    if (!isCart) return;
    if (d.querySelector('.cf-ship-inline')) { inlineBar = d.querySelector('.cf-ship-inline'); return; }
    var anchor = d.querySelector('.cart_totals') || d.querySelector('.cart-collaterals') || d.querySelector('form.woocommerce-cart-form');
    if (!anchor || !anchor.parentNode) return;
    inlineBar = shipBarMarkup('cf-ship-inline');
    anchor.parentNode.insertBefore(inlineBar, anchor);
  }
  function buildShipSticky() {
    if (d.querySelector('.cf-ship-sticky')) { stickyBar = d.querySelector('.cf-ship-sticky'); return; }
    stickyBar = shipBarMarkup('cf-ship-sticky');
    d.body.appendChild(stickyBar);
  }
  function updateShip(subtotal) {
    var cnt = cartCount();
    var okInline = inlineBar ? renderShipBar(inlineBar, subtotal) : false;
    if (stickyBar) {
      var okSticky = renderShipBar(stickyBar, subtotal);
      var show = okSticky && subtotal > 0 && (cnt === null || cnt > 0);
      stickyBar.classList.toggle('cf-ship-show', !!show);
    }
    return okInline;
  }
  function refreshShip() {
    var sub = readSubtotalFromDoc(d);
    if (sub != null) { updateShip(sub); return; }
    readSubtotalFromFragments(function (v) { updateShip(v); });
  }
  function buildShip() {
    // don't render a customer-facing $ shipping claim until the WC threshold is confirmed
    if (!CF_FREESHIP_CONFIRMED || !(CF_FREESHIP_THRESHOLD > 0)) return;
    buildShipInline();
    buildShipSticky();
    refreshShip();
  }

  /* ===================================================================
     Orchestration — build DOM unconditionally + idempotently. CSS (the two
     scopes above) decides visibility; desktop web sees nothing.
     =================================================================== */
  function build() {
    if (!d.body) return;
    buildTrustRow();   // PDP only
    buildPayBadges();  // PDP badge row + every-page footer strip
    buildXpay();       // cart + checkout
    buildShip();       // cart inline + sticky (hidden until threshold confirmed)
  }

  function init() {
    build();

    // The base builds .cf-trustrow at DOMContentLoaded; retry briefly so we
    // upgrade it in place rather than building a duplicate.
    if (isPDP && !(d.querySelector('.cf-trustrow') && d.querySelector('.cf-trustrow').classList.contains('cf-trust-up'))) {
      var tries = 0;
      var iv = setInterval(function () {
        buildTrustRow();
        var r = d.querySelector('.cf-trustrow');
        if ((r && r.classList.contains('cf-trust-up')) || ++tries > 10) clearInterval(iv);
      }, 200);
    }

    // Gateways render express buttons async + re-render on cart/totals/payment
    // changes. Re-capture + re-sync the ship bar on the same Woo events.
    if (jq) {
      jq(d.body).on('added_to_cart removed_from_cart wc_fragments_refreshed wc_fragments_loaded updated_cart_totals updated_checkout updated_wc_div payment_method_selected', function () {
        buildXpay();
        refreshShip();
      });
    }

    // Late-injected gateway buttons (Stripe/PayPal load async) — observe briefly.
    if ((isCart || isCheckout) && 'MutationObserver' in window) {
      var busy = false;
      var obs = new MutationObserver(function () {
        if (busy) return; busy = true;
        try { buildXpay(); } finally { busy = false; }
      });
      try { obs.observe(d.body, { childList: true, subtree: true }); } catch (e) {}
      setTimeout(function () { try { obs.disconnect(); } catch (e) {} }, 12000);
    }
    // delayed passes for slow gateway scripts (no-observer fallback)
    if (isCart || isCheckout) { setTimeout(buildXpay, 1200); setTimeout(buildXpay, 3500); }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
(function () {
  var d = document, win = window;

  /* ---- HARD GATE: NATIVE runtime only ---------------------------------- *
   * Push registration is native-only by design (NOT screen-width). A mobile
   * -web browser has no Capacitor bridge -> this no-ops there. Only the real
   * wrapped Android/iOS app reaches the registration code. We deliberately do
   * NOT gate on cfIsMobile(); the contract keeps native-only features native. */
  var Cap = win.Capacitor;
  var isNative = !!(Cap && Cap.isNativePlatform && Cap.isNativePlatform());
  if (!isNative) return;

  /* ---- idempotent (one registration per page life) --------------------- */
  if (win.__cfPushBooted) return;
  win.__cfPushBooted = true;

  /* The @capacitor/push-notifications plugin is exposed on the bridge inside
     the native app. Bail cleanly if absent (e.g. an old build without the
     plugin) — never throw. */
  var PN = (Cap.Plugins && Cap.Plugins.PushNotifications) || win.PushNotifications;
  if (!PN || typeof PN.register !== 'function') return;

  /* ======================================================================
     CONFIG
     ====================================================================== */
  // TODO: Joaquin/deploy — set to the PUBLIC https base of woo_webhook.py once
  // it's live behind the reverse-proxy. Leave '' to register the token on-device
  // but skip the server POST (no network errors while the backend is unhosted).
  var CF_PUSH_ENDPOINT = ''; /* e.g. 'https://push.carbonfreaks.shop' or 'https://lux.bem.solutions/cf' */

  var platform = (Cap.getPlatform && Cap.getPlatform()) || 'unknown'; // 'ios' | 'android'

  /* ======================================================================
     USER ID RESOLUTION (no fabrication)
     ----------------------------------------------------------------------
     The backend keys tokens by `user_id` = the WooCommerce customer id, and
     guests by a hashed email (push-backend/README.md "Notes"). We send the
     best real signal the page exposes and NEVER invent one:
       1. A site-provided global, if the theme/site ever sets it
          (window.cfWooCustomerId / wc params). Checked defensively.
       2. Otherwise a stable per-device anon id persisted in localStorage, so a
          guest still has ONE consistent id across launches for cart/order
          targeting. Prefixed 'anon:' so the backend can tell it apart.
     We also pass `email` when the My-Account page exposes it, so the backend's
     hashed-email guest path can match — without us hashing or guessing.
     ====================================================================== */
  function resolveUserId() {
    // 1) explicit site-provided id (only if the site chooses to expose it)
    var v = win.cfWooCustomerId || win.cf_woo_customer_id ||
            (win.wc_customer && win.wc_customer.id) || null;
    if (v != null && String(v).length) return String(v);

    // 2) WooCommerce marks logged-in users with body.logged-in. We can't read
    //    the numeric id from arbitrary JS, but we can keep a stable per-device
    //    id so the SAME device always reports the SAME id.
    var anon = null;
    try { anon = localStorage.getItem('cf_push_uid'); } catch (e) {}
    if (!anon) {
      anon = 'anon:' + (Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
      try { localStorage.setItem('cf_push_uid', anon); } catch (e) {}
    }
    return anon;
  }

  function resolveEmail() {
    // Surface an email ONLY if the My-Account page already renders it; never guess.
    try {
      var el = d.querySelector('.woocommerce-MyAccount-content [name="account_email"], '
                             + '#account_email, .woocommerce-Address [href^="mailto:"]');
      if (el) {
        var em = el.value || (el.getAttribute('href') || '').replace(/^mailto:/i, '') || el.textContent || '';
        em = (em || '').trim();
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return em;
      }
    } catch (e) {}
    return null;
  }

  /* ======================================================================
     SERVER POST  (the only network write — to the push backend, NOT Woo/WP)
     ====================================================================== */
  function postToken(token) {
    if (!token) return;
    var uid = resolveUserId();
    var sig = platform + '|' + uid + '|' + token;
    var lastSig = null;
    try { lastSig = localStorage.getItem('cf_push_sig'); } catch (e) {}
    if (sig === lastSig) return; // already registered this exact (uid,platform,token)

    if (!CF_PUSH_ENDPOINT) {
      // Backend not hosted yet: persist the token so it POSTs the moment the
      // endpoint is configured + the page reloads. No errors, no spam.
      try { localStorage.setItem('cf_push_token', token); } catch (e) {}
      return;
    }

    var body = { user_id: uid, platform: platform, token: token };
    var email = resolveEmail();
    if (email) body.email = email;

    fetch(CF_PUSH_ENDPOINT.replace(/\/+$/, '') + '/push/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      keepalive: true
    }).then(function (r) {
      if (r && r.ok) {
        try {
          localStorage.setItem('cf_push_token', token);
          localStorage.setItem('cf_push_sig', sig);
        } catch (e) {}
      }
    }).catch(function () { /* offline / endpoint down — retried on next launch */ });
  }

  /* ======================================================================
     DEEP-LINK NAVIGATION on notification tap
     ----------------------------------------------------------------------
     Payload may carry an absolute url, or a path, in data.url / data.link /
     data.path. We only navigate within carbonfreaks.shop (never off-domain).
     ====================================================================== */
  function navFromPayload(data) {
    if (!data) return;
    var target = data.url || data.link || data.path || data.deeplink;
    if (!target) return;
    try {
      var abs = new URL(target, win.location.origin);
      // safety: stay on our own host
      if (abs.host && abs.host !== win.location.host) {
        if (abs.host !== 'carbonfreaks.shop') return;
      }
      win.location.assign(abs.href);
    } catch (e) { /* malformed url -> ignore, don't navigate blindly */ }
  }

  /* ======================================================================
     REGISTRATION FLOW
     ====================================================================== */
  var listenersBound = false;
  function bindListeners() {
    if (listenersBound) return;
    listenersBound = true;
    try {
      PN.addListener('registration', function (t) {
        postToken(t && (t.value || t.token));
      });
      PN.addListener('registrationError', function () { /* swallow; retried next launch */ });
      PN.addListener('pushNotificationActionPerformed', function (ev) {
        var data = ev && ev.notification && (ev.notification.data || ev.notification.extra);
        navFromPayload(data);
      });
    } catch (e) { /* plugin API drift -> fail closed, never break the store */ }
  }

  function doRegister() {
    bindListeners();
    try {
      var pr = PN.requestPermissions();
      if (pr && typeof pr.then === 'function') {
        pr.then(function (res) {
          if (res && (res.receive === 'granted' || res.receive === 'prompt')) {
            try { PN.register(); } catch (e) {}
          }
        }).catch(function () {});
      } else {
        try { PN.register(); } catch (e) {}
      }
    } catch (e) { /* never break the store on a push hiccup */ }
  }

  /* ---- Re-register on auth change ---------------------------------------
   * If a session goes from guest->logged-in (or out), the body 'logged-in'
   * class flips after a navigation. We clear the dedupe signature on a logged
   * -in-state change so the next 'registration' POST re-keys the token to the
   * correct account. (Cheap one-shot check at boot is enough; full SPA auth
   * events aren't emitted by WooCommerce.)                                  */
  function syncAuthState() {
    var nowLoggedIn = d.body && d.body.classList.contains('logged-in') ? '1' : '0';
    var prev = null;
    try { prev = localStorage.getItem('cf_push_login'); } catch (e) {}
    if (prev !== nowLoggedIn) {
      try {
        localStorage.setItem('cf_push_login', nowLoggedIn);
        localStorage.removeItem('cf_push_sig'); // force a re-POST under the new identity
      } catch (e) {}
    }
  }

  /* ======================================================================
     OPTIONAL one-time permission-priming sheet (native-only, dismissible)
     ----------------------------------------------------------------------
     Shown once before the first OS prompt to explain value + reduce deny rate.
     If the user has already been asked (token stored, or sheet shown before),
     skip straight to register. Tapping "Turn on" -> OS prompt; "Not now" ->
     defers (we still register silently next launch so iOS provisional/Android
     channel can deliver). The sheet's CSS lives in the responsive dual scope so
     it can never paint on desktop web; this JS only runs natively anyway.
     ====================================================================== */
  function alreadyAsked() {
    try {
      return localStorage.getItem('cf_push_primed') === '1'
          || !!localStorage.getItem('cf_push_token')
          || !!localStorage.getItem('cf_push_sig');
    } catch (e) { return false; }
  }

  function showPrimer() {
    if (d.querySelector('.cf-push-prime')) return;        // idempotent
    if (!d.body) { doRegister(); return; }
    var sheet = d.createElement('div');
    sheet.className = 'cf-push-prime';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-label', 'Turn on notifications');
    sheet.innerHTML =
      '<div class="cf-pp-top">' +
        '<div class="cf-pp-ico"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>' +
        '<div class="cf-pp-txt">' +
          '<div class="cf-pp-title">Get order &amp; restock alerts</div>' +
          '<div class="cf-pp-sub">Shipping updates, back-in-stock parts for your bike, and price drops &mdash; right on your phone.</div>' +
        '</div>' +
      '</div>' +
      '<div class="cf-pp-btns">' +
        '<button type="button" class="cf-pp-no">Not now</button>' +
        '<button type="button" class="cf-pp-yes">Turn on</button>' +
      '</div>';
    d.body.appendChild(sheet);
    // reflow then slide up
    requestAnimationFrame(function () { requestAnimationFrame(function () { sheet.classList.add('cf-show'); }); });

    function close() {
      sheet.classList.remove('cf-show');
      try { localStorage.setItem('cf_push_primed', '1'); } catch (e) {}
      setTimeout(function () { if (sheet && sheet.parentNode) sheet.parentNode.removeChild(sheet); }, 320);
    }
    sheet.querySelector('.cf-pp-yes').addEventListener('click', function () { close(); doRegister(); });
    sheet.querySelector('.cf-pp-no').addEventListener('click', function () {
      close();
      // Defer the loud OS prompt, but still bind listeners so a later launch can register.
      bindListeners();
    });
  }

  /* ======================================================================
     BOOT
     ====================================================================== */
  function init() {
    syncAuthState();
    if (alreadyAsked()) {
      // Already primed/asked at least once: register silently (no sheet). This
      // refreshes the token + re-keys it if auth changed.
      doRegister();
    } else {
      // First run: show the value primer, then ask. Defensive — if the body
      // isn't ready or the sheet fails, fall back to a direct register.
      try { showPrimer(); }
      catch (e) { doRegister(); }
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
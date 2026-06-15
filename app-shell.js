/* Carbon Freaks app shell — external bundle (jsDelivr: knifette/cf-app-shell).
   Gated to app mode (html.cf-app); desktop untouched. Update = push + purge jsDelivr. */
(function(){
  if(document.getElementById('cf-app-shell-css')) return;
  var CSS = "\n/* everything scoped to html.cf-app so the normal site is untouched */\nhtml.cf-app body { padding-bottom: calc(60px + env(safe-area-inset-bottom, 0px)) !important; }\nhtml.cf-app.cf-has-stickyatc body { padding-bottom: calc(124px + env(safe-area-inset-bottom, 0px)) !important; }\n\n/* native feel: drop the website footer link-soup inside the app */\nhtml.cf-app footer.site-footer { display: none !important; }\n\n/* ---------- bottom tab bar ---------- */\nhtml.cf-app .cf-tabbar {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99990;\n  display: flex; height: calc(60px + env(safe-area-inset-bottom, 0px));\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  background: #0C0A09; border-top: 1px solid #262220;\n  box-shadow: 0 -4px 18px rgba(0,0,0,.45); font-family: inherit;\n}\nhtml.cf-app .cf-tab {\n  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;\n  gap: 3px; text-decoration: none; color: #8A8580; font-size: 11px; font-weight: 600;\n  letter-spacing: .02em; -webkit-tap-highlight-color: transparent; position: relative;\n}\nhtml.cf-app .cf-tab svg { width: 23px; height: 23px; display: block; }\nhtml.cf-app .cf-tab.cf-active { color: #E10600; }\nhtml.cf-app .cf-tab .cf-cartbadge {\n  position: absolute; top: 4px; left: calc(50% + 6px);\n  min-width: 16px; height: 16px; padding: 0 4px; border-radius: 9px;\n  background: #E10600; color: #fff; font-size: 10px; font-weight: 700;\n  display: none; align-items: center; justify-content: center; line-height: 16px;\n}\nhtml.cf-app .cf-tab .cf-cartbadge.cf-show { display: inline-flex; }\n\n/* ---------- PDP sticky add-to-cart bar ---------- */\nhtml.cf-app .cf-stickyatc {\n  position: fixed; left: 0; right: 0; z-index: 99989;\n  bottom: calc(60px + env(safe-area-inset-bottom, 0px));\n  display: flex; align-items: center; gap: 12px;\n  padding: 10px 14px; background: #1E1A17; border-top: 1px solid #262220;\n  box-shadow: 0 -6px 20px rgba(0,0,0,.5);\n  transform: translateY(140%); transition: transform .25s ease; font-family: inherit;\n}\nhtml.cf-app .cf-stickyatc.cf-show { transform: translateY(0); }\nhtml.cf-app .cf-stickyatc .cf-sa-price { color: #E8E4E0; font-size: 17px; font-weight: 700; white-space: nowrap; }\nhtml.cf-app .cf-stickyatc .cf-sa-price .cf-sa-old { color: #A8A29E; font-size: 13px; font-weight: 500; text-decoration: line-through; margin-left: 6px; }\nhtml.cf-app .cf-stickyatc .cf-sa-btn {\n  margin-left: auto; flex: 1; max-width: 62%; text-align: center;\n  background: #E10600; color: #fff; font-size: 15px; font-weight: 700; letter-spacing: .02em;\n  border: 0; border-radius: 10px; padding: 14px 16px; min-height: 50px;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app .cf-stickyatc .cf-sa-btn:active { background: #b80500; }\n\n/* ---------- PDP trust row ---------- */\nhtml.cf-app .cf-trustrow {\n  display: flex; flex-wrap: wrap; gap: 8px 16px; margin: 14px 0 4px;\n  font-family: inherit; font-size: 12.5px; color: #A8A29E; font-weight: 600;\n}\nhtml.cf-app .cf-trustrow span { display: inline-flex; align-items: center; gap: 6px; }\nhtml.cf-app .cf-trustrow b { color: #E8E4E0; font-weight: 600; }\n\n\n/* =========================================================================\n   Carbon Freaks app-skin module: SLIM NATIVE APP HEADER  (key: header)\n   Fixed top bar (logo / Bikes / Search) + hides the Astra theme header in\n   app mode so there's no double header. RISKY module \u2014 everything is scoped\n   to html.cf-app and the theme header is only hidden AFTER our bar mounts\n   (html.cf-app.cf-has-apphdr) so a build failure can never leave the user\n   with no navigation.\n   Z-index: 99988 (sits above page content + below the tab bar 99990 and\n   any overlay/sheet 99991-99995, so future drawers cover it cleanly).\n   ========================================================================= */\n\n/* Top inset reserved for the fixed app header \u2014 only once it has mounted. */\nhtml.cf-app.cf-has-apphdr body {\n  padding-top: calc(52px + env(safe-area-inset-top, 0px)) !important;\n}\n\n/* Hide the Astra theme header ONLY after our slim header is live.\n   Defensive: cover the common Astra header wrappers too. Scoped to cf-app. */\nhtml.cf-app.cf-has-apphdr header.site-header,\nhtml.cf-app.cf-has-apphdr .site-header,\nhtml.cf-app.cf-has-apphdr #masthead,\nhtml.cf-app.cf-has-apphdr .ast-above-header-wrap,\nhtml.cf-app.cf-has-apphdr .ast-below-header-wrap {\n  display: none !important;\n}\n\n/* ---------- the slim app header ---------- */\nhtml.cf-app .cf-apphdr {\n  position: fixed; top: 0; left: 0; right: 0; z-index: 99988;\n  height: calc(52px + env(safe-area-inset-top, 0px));\n  padding-top: env(safe-area-inset-top, 0px);\n  display: flex; align-items: center; gap: 10px;\n  padding-left: 12px; padding-right: 8px;\n  background: #0C0A09; border-bottom: 1px solid #262220;\n  box-shadow: 0 2px 14px rgba(0,0,0,.45);\n  font-family: inherit; box-sizing: border-box;\n}\n\n/* back chevron (inner pages only) \u2014 44px hit target (contract >=44px) */\nhtml.cf-app .cf-apphdr-back {\n  flex: 0 0 auto; width: 44px; height: 44px; margin-left: -8px;\n  display: none; align-items: center; justify-content: center;\n  background: none; border: 0; padding: 0; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app.cf-hdr-inner .cf-apphdr-back { display: inline-flex; }\nhtml.cf-app .cf-apphdr-back svg { width: 24px; height: 24px; }\n\n/* logo (home) \u2014 flex-grows so it owns the empty middle space */\nhtml.cf-app .cf-apphdr-logo {\n  flex: 1 1 auto; min-width: 0; display: flex; align-items: center;\n  text-decoration: none; height: 40px; overflow: hidden;\n}\nhtml.cf-app .cf-apphdr-logo img {\n  max-height: 28px; width: auto; max-width: 170px; object-fit: contain; display: block;\n}\n/* CSS wordmark fallback when no site logo <img> was found */\nhtml.cf-app .cf-apphdr-word {\n  color: #E8E4E0; font-weight: 800; letter-spacing: .04em;\n  font-size: 16px; text-transform: uppercase; white-space: nowrap;\n}\nhtml.cf-app .cf-apphdr-word b { color: #E10600; font-weight: 800; }\n\n/* right-side action buttons (Bikes text-pill + Search icon) */\nhtml.cf-app .cf-apphdr-act {\n  flex: 0 0 auto; display: flex; align-items: center; gap: 4px;\n}\nhtml.cf-app .cf-apphdr-bikes {\n  display: inline-flex; align-items: center; gap: 6px; height: 44px;\n  padding: 0 14px; border-radius: 22px;\n  background: #1E1A17; border: 1px solid #262220;\n  color: #E8E4E0; font-size: 13px; font-weight: 700; letter-spacing: .02em;\n  text-decoration: none; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app .cf-apphdr-bikes:active { background: #262220; }\nhtml.cf-app .cf-apphdr-bikes svg { width: 17px; height: 17px; color: #E10600; }\nhtml.cf-app .cf-apphdr-iconbtn {\n  flex: 0 0 auto; width: 44px; height: 44px;\n  display: inline-flex; align-items: center; justify-content: center;\n  background: none; border: 0; padding: 0; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app .cf-apphdr-iconbtn svg { width: 23px; height: 23px; }\n\n/* ---------- expanding search row (drops under the bar) ---------- */\nhtml.cf-app .cf-apphdr-search {\n  position: fixed; left: 0; right: 0; z-index: 99987;\n  top: calc(52px + env(safe-area-inset-top, 0px));\n  background: #161311; border-bottom: 1px solid #262220;\n  box-shadow: 0 6px 16px rgba(0,0,0,.5);\n  padding: 10px 12px;\n  transform: translateY(-110%); transition: transform .2s ease;\n  display: flex; align-items: center; gap: 8px;\n}\nhtml.cf-app.cf-hdr-search-open .cf-apphdr-search { transform: translateY(0); }\nhtml.cf-app .cf-apphdr-search form { flex: 1 1 auto; display: flex; align-items: center; gap: 8px; margin: 0; }\nhtml.cf-app .cf-apphdr-search input[type=\"search\"],\nhtml.cf-app .cf-apphdr-search input[type=\"text\"] {\n  flex: 1 1 auto; min-width: 0; height: 44px;\n  background: #0C0A09; border: 1px solid #262220; border-radius: 10px;\n  color: #E8E4E0; font-size: 16px; /* 16px = no iOS zoom-on-focus */\n  padding: 0 14px; outline: none; -webkit-appearance: none; appearance: none;\n}\nhtml.cf-app .cf-apphdr-search input::placeholder { color: #A8A29E; }\nhtml.cf-app .cf-apphdr-search .cf-apphdr-go {\n  flex: 0 0 auto; height: 44px; padding: 0 16px; border: 0; border-radius: 10px;\n  background: #E10600; color: #fff; font-size: 14px; font-weight: 700;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app .cf-apphdr-search .cf-apphdr-go:active { background: #b80500; }\n\n\n/* ===========================================================================\n   Carbon Freaks app-skin \u2014 MODULE: filters\n   Sticky Sort/Filter bar (under header) + result count + bottom-sheet drawers.\n   Shop / category / product archive only. Everything scoped to html.cf-app so\n   a normal web visitor sees ZERO change. Surfaces the EXISTING sidebar filters\n   (YITH ajax / Shop-by-Part-Type / price) \u2014 does NOT rebuild filter logic.\n   Z-index band (per contract): tabbar=99990, sticky ATC=99989. New overlays\n   99991-99995, scrims ~99988. Bar itself sits low (just under the header).\n   =========================================================================== */\n\n/* ---------- sticky sort/filter bar (under the header) ---------- */\nhtml.cf-app .cf-filters-bar {\n  position: sticky; top: 0; z-index: 60;          /* below tab bar; sits under the native header */\n  display: flex; align-items: stretch; gap: 1px;\n  background: #1E1A17; border-bottom: 1px solid #262220;\n  box-shadow: 0 4px 14px rgba(0,0,0,.35);\n  font-family: inherit; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-filters-btn {\n  flex: 1 1 0; display: flex; align-items: center; justify-content: center; gap: 7px;\n  min-height: 48px; padding: 0 12px; border: 0; background: transparent;\n  color: #E8E4E0; font-size: 14px; font-weight: 700; letter-spacing: .01em;\n  cursor: pointer; font-family: inherit;\n}\nhtml.cf-app .cf-filters-btn:active { background: #161311; }\nhtml.cf-app .cf-filters-btn svg { width: 18px; height: 18px; flex: none; }\nhtml.cf-app .cf-filters-btn + .cf-filters-btn { border-left: 1px solid #262220; }\nhtml.cf-app .cf-filters-count {\n  display: inline-flex; align-items: center; justify-content: center;\n  min-width: 18px; height: 18px; padding: 0 5px; margin-left: 1px;\n  border-radius: 9px; background: #E10600; color: #fff;\n  font-size: 11px; font-weight: 800; line-height: 18px;\n}\nhtml.cf-app .cf-filters-resultcount {\n  flex: none; display: flex; align-items: center; justify-content: center;\n  padding: 0 14px; color: #A8A29E; font-size: 12px; font-weight: 600;\n  white-space: nowrap; max-width: 46%; overflow: hidden; text-overflow: ellipsis;\n}\n\n/* hide the original (theme) result count + ordering once we surface them in the bar/sheet */\nhtml.cf-app.cf-filters-on .woocommerce-result-count { display: none !important; }\nhtml.cf-app.cf-filters-on form.woocommerce-ordering { display: none !important; }\n\n/* ---------- scrim ---------- */\nhtml.cf-app .cf-filters-scrim {\n  position: fixed; inset: 0; z-index: 99992; background: rgba(0,0,0,.62);\n  opacity: 0; visibility: hidden; transition: opacity .2s ease, visibility .2s ease;\n}\nhtml.cf-app .cf-filters-scrim.cf-open { opacity: 1; visibility: visible; }\n\n/* ---------- bottom-sheet drawer (shared by filter + sort) ---------- */\nhtml.cf-app .cf-filters-sheet {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99993;\n  display: flex; flex-direction: column;\n  max-height: 82vh; background: #1E1A17;\n  border-top: 1px solid #262220; border-radius: 18px 18px 0 0;\n  box-shadow: 0 -10px 30px rgba(0,0,0,.6);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  transform: translateY(100%); transition: transform .26s cubic-bezier(.22,.61,.36,1);\n  font-family: inherit;\n}\nhtml.cf-app .cf-filters-sheet.cf-open { transform: translateY(0); }\nhtml.cf-app .cf-filters-grip {\n  width: 38px; height: 4px; border-radius: 4px; background: #3a3430;\n  margin: 9px auto 4px;\n}\nhtml.cf-app .cf-filters-head {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 6px 16px 12px; border-bottom: 1px solid #262220;\n}\nhtml.cf-app .cf-filters-head h3 {\n  margin: 0; color: #E8E4E0; font-size: 16px; font-weight: 800; letter-spacing: .01em;\n}\nhtml.cf-app .cf-filters-close {\n  border: 0; background: transparent; color: #A8A29E; cursor: pointer;\n  width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;\n  margin: -8px -10px -8px 0; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-filters-close svg { width: 20px; height: 20px; }\nhtml.cf-app .cf-filters-body {\n  overflow-y: auto; -webkit-overflow-scrolling: touch;\n  padding: 14px 16px 18px;\n}\n\n/* ---- restyle the cloned WooCommerce/YITH widgets so they read on dark ---- */\nhtml.cf-app .cf-filters-body .widget,\nhtml.cf-app .cf-filters-body .wp-block-group,\nhtml.cf-app .cf-filters-body .elementor-widget { margin: 0 0 22px; }\nhtml.cf-app .cf-filters-body .widget:last-child { margin-bottom: 4px; }\nhtml.cf-app .cf-filters-body .widgettitle,\nhtml.cf-app .cf-filters-body .widget-title,\nhtml.cf-app .cf-filters-body .wp-block-heading,\nhtml.cf-app .cf-filters-body h2,\nhtml.cf-app .cf-filters-body h3,\nhtml.cf-app .cf-filters-body h4 {\n  color: #E8E4E0; font-size: 13px; font-weight: 800; text-transform: uppercase;\n  letter-spacing: .06em; margin: 0 0 10px; padding: 0;\n}\nhtml.cf-app .cf-filters-body ul { list-style: none; margin: 0; padding: 0; }\nhtml.cf-app .cf-filters-body li { margin: 0; }\nhtml.cf-app .cf-filters-body a {\n  color: #E8E4E0; text-decoration: none; display: inline-flex; align-items: center;\n  gap: 8px; min-height: 40px; padding: 2px 0; line-height: 1.3;\n}\nhtml.cf-app .cf-filters-body a:active { color: #fff; }\nhtml.cf-app .cf-filters-body .count,\nhtml.cf-app .cf-filters-body .yith-wcan-label-count { color: #A8A29E; font-weight: 600; }\n/* chosen / active filter terms get the scarce accent */\nhtml.cf-app .cf-filters-body .chosen > a,\nhtml.cf-app .cf-filters-body .yith-wcan-active > a,\nhtml.cf-app .cf-filters-body .current-cat > a,\nhtml.cf-app .cf-filters-body li.active > a { color: #E10600; font-weight: 700; }\n/* form controls inside (price slider, selects, inputs) */\nhtml.cf-app .cf-filters-body input[type=\"text\"],\nhtml.cf-app .cf-filters-body input[type=\"number\"],\nhtml.cf-app .cf-filters-body select {\n  background: #161311; color: #E8E4E0; border: 1px solid #262220;\n  border-radius: 8px; min-height: 40px; padding: 6px 10px; font-size: 14px;\n  font-family: inherit; max-width: 100%;\n}\nhtml.cf-app .cf-filters-body button,\nhtml.cf-app .cf-filters-body .button {\n  background: #E10600; color: #fff; border: 0; border-radius: 8px;\n  min-height: 44px; padding: 0 18px; font-weight: 700; font-size: 14px;\n  cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n}\nhtml.cf-app .cf-filters-body button:active,\nhtml.cf-app .cf-filters-body .button:active { background: #b80500; }\n/* price slider (jquery-ui) tint to accent */\nhtml.cf-app .cf-filters-body .ui-slider,\nhtml.cf-app .cf-filters-body .price_slider {\n  background: #262220 !important; border: 0 !important; height: 4px !important;\n}\nhtml.cf-app .cf-filters-body .ui-slider-range,\nhtml.cf-app .cf-filters-body .price_slider .ui-slider-range { background: #E10600 !important; }\nhtml.cf-app .cf-filters-body .ui-slider-handle,\nhtml.cf-app .cf-filters-body .price_slider .ui-slider-handle {\n  background: #E8E4E0 !important; border: 0 !important; border-radius: 50% !important;\n  width: 16px !important; height: 16px !important; top: -6px !important;\n}\nhtml.cf-app .cf-filters-body .price_slider_amount { color: #A8A29E; font-size: 13px; }\nhtml.cf-app .cf-filters-empty { color: #A8A29E; font-size: 13.5px; line-height: 1.5; }\n\n/* ---------- sort sheet: native list of the orderby options ---------- */\nhtml.cf-app .cf-filters-sortlist { display: flex; flex-direction: column; }\nhtml.cf-app .cf-filters-sortopt {\n  display: flex; align-items: center; justify-content: space-between; gap: 10px;\n  width: 100%; text-align: left; background: transparent; border: 0;\n  border-bottom: 1px solid #262220; color: #E8E4E0;\n  min-height: 52px; padding: 0 2px; font-size: 15px; font-weight: 600;\n  cursor: pointer; -webkit-tap-highlight-color: transparent; font-family: inherit;\n}\nhtml.cf-app .cf-filters-sortopt:last-child { border-bottom: 0; }\nhtml.cf-app .cf-filters-sortopt:active { color: #fff; }\nhtml.cf-app .cf-filters-sortopt[aria-checked=\"true\"] { color: #E10600; font-weight: 800; }\nhtml.cf-app .cf-filters-sortopt .cf-filters-tick { width: 18px; height: 18px; flex: none; opacity: 0; }\nhtml.cf-app .cf-filters-sortopt[aria-checked=\"true\"] .cf-filters-tick { opacity: 1; }\n\n\n/* ===========================================================================\n   Carbon Freaks \u2014 GARAGE module (Shop-by-Bike, loginless)\n   Everything scoped to html.cf-app so normal web/desktop is untouched.\n   Layers used (per contract z-index ladder, 99991-99995 band + scrim 99988):\n     - sticky \"Your Bike\" pill .cf-grg-pill  = 99988 (sits under tab bar/sheet,\n       above page content; it is a small top-area sticky, not a bottom-fixed bar)\n     - bottom-sheet scrim .cf-grg-scrim       = 99992\n     - bottom-sheet .cf-grg-sheet             = 99993\n   =========================================================================== */\n\n/* ---------- sticky \"Your Bike\" pill (top of viewport, under site header) ---------- */\n/* --cf-grg-top is set by JS to the measured header height so the pill never\n   collides with header.site-header. Falls back to 56px before measurement. */\nhtml.cf-app .cf-grg-pillwrap {\n  position: sticky;\n  top: var(--cf-grg-top, 56px);\n  z-index: 99988;\n  display: flex;\n  padding: 8px 12px;\n  background: linear-gradient(#0C0A09 70%, rgba(12,10,9,0));\n  pointer-events: none; /* let the gradient tail pass clicks through; pill re-enables */\n}\nhtml.cf-app .cf-grg-pill {\n  pointer-events: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  max-width: 100%;\n  min-height: 44px;\n  padding: 8px 12px;\n  background: #1E1A17;\n  border: 1px solid #262220;\n  border-radius: 999px;\n  color: #E8E4E0;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  letter-spacing: .01em;\n  box-shadow: 0 4px 14px rgba(0,0,0,.4);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-grg-pill .cf-grg-ico {\n  flex: 0 0 auto; width: 18px; height: 18px; color: #E10600; display: block;\n}\nhtml.cf-app .cf-grg-pill .cf-grg-lbl {\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0;\n}\nhtml.cf-app .cf-grg-pill .cf-grg-lbl .cf-grg-muted { color: #A8A29E; font-weight: 600; }\nhtml.cf-app .cf-grg-pill .cf-grg-lbl b { color: #E8E4E0; font-weight: 700; }\nhtml.cf-app .cf-grg-pill .cf-grg-chev { flex: 0 0 auto; width: 16px; height: 16px; color: #A8A29E; display: block; }\n/* \"Shop my bike\" quick action (only when a bike is set) */\nhtml.cf-app .cf-grg-shopmine {\n  pointer-events: auto;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  display: inline-flex; align-items: center; gap: 6px;\n  min-height: 44px; padding: 8px 14px;\n  background: #E10600; color: #fff;\n  font-family: inherit; font-size: 13px; font-weight: 700; letter-spacing: .02em;\n  border: 0; border-radius: 999px;\n  text-decoration: none; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app .cf-grg-shopmine:active { background: #b80500; }\nhtml.cf-app .cf-grg-shopmine svg { width: 15px; height: 15px; display: block; }\n\n/* ---------- bottom-sheet scrim + sheet ---------- */\nhtml.cf-app .cf-grg-scrim {\n  position: fixed; inset: 0; z-index: 99992;\n  background: rgba(0,0,0,.62);\n  opacity: 0; transition: opacity .22s ease;\n  pointer-events: none;\n}\nhtml.cf-app .cf-grg-scrim.cf-grg-open { opacity: 1; pointer-events: auto; }\n\nhtml.cf-app .cf-grg-sheet {\n  position: fixed; left: 0; right: 0; bottom: 0; z-index: 99993;\n  display: flex; flex-direction: column;\n  max-height: 82vh;\n  background: #161311;\n  border-top-left-radius: 18px; border-top-right-radius: 18px;\n  border-top: 1px solid #262220;\n  box-shadow: 0 -10px 40px rgba(0,0,0,.6);\n  font-family: inherit; color: #E8E4E0;\n  transform: translateY(100%);\n  transition: transform .26s cubic-bezier(.22,.61,.36,1);\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\nhtml.cf-app .cf-grg-sheet.cf-grg-open { transform: translateY(0); }\n\nhtml.cf-app .cf-grg-grab {\n  width: 38px; height: 4px; border-radius: 4px; background: #3a3530;\n  margin: 9px auto 4px;\n}\nhtml.cf-app .cf-grg-head {\n  display: flex; align-items: center; gap: 10px;\n  padding: 6px 14px 10px; border-bottom: 1px solid #262220;\n}\nhtml.cf-app .cf-grg-back {\n  flex: 0 0 auto; width: 44px; height: 44px; border-radius: 999px;\n  display: none; align-items: center; justify-content: center;\n  background: #1E1A17; border: 1px solid #262220; color: #E8E4E0;\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-grg-back.cf-grg-show { display: inline-flex; }\nhtml.cf-app .cf-grg-back svg { width: 17px; height: 17px; display: block; }\nhtml.cf-app .cf-grg-title {\n  flex: 1 1 auto; min-width: 0;\n  font-size: 16px; font-weight: 700; color: #E8E4E0;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\nhtml.cf-app .cf-grg-title small { display: block; font-size: 11.5px; font-weight: 600; color: #A8A29E; letter-spacing: .02em; margin-top: 1px; }\nhtml.cf-app .cf-grg-x {\n  flex: 0 0 auto; width: 44px; height: 44px; border-radius: 999px;\n  display: inline-flex; align-items: center; justify-content: center;\n  background: #1E1A17; border: 1px solid #262220; color: #A8A29E;\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-grg-x svg { width: 16px; height: 16px; display: block; }\n\nhtml.cf-app .cf-grg-list {\n  flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;\n  padding: 6px 0 calc(12px + env(safe-area-inset-bottom, 0px));\n}\nhtml.cf-app .cf-grg-row {\n  display: flex; align-items: center; gap: 12px;\n  width: 100%; min-height: 52px;\n  padding: 12px 16px; background: transparent;\n  border: 0; border-bottom: 1px solid #1c1916;\n  color: #E8E4E0; font-family: inherit; font-size: 15px; font-weight: 600;\n  text-align: left; text-decoration: none; cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-grg-row:active { background: #1E1A17; }\nhtml.cf-app .cf-grg-row .cf-grg-name { flex: 1 1 auto; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\nhtml.cf-app .cf-grg-row .cf-grg-count {\n  flex: 0 0 auto; font-size: 12px; font-weight: 600; color: #A8A29E;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 999px;\n  padding: 2px 9px; min-width: 20px; text-align: center;\n}\nhtml.cf-app .cf-grg-row .cf-grg-go { flex: 0 0 auto; width: 16px; height: 16px; color: #6b6660; display: block; }\n/* disabled (count 0) gen rows */\nhtml.cf-app .cf-grg-row.cf-grg-dis { cursor: default; opacity: .5; }\nhtml.cf-app .cf-grg-row.cf-grg-dis:active { background: transparent; }\nhtml.cf-app .cf-grg-row.cf-grg-dis .cf-grg-count { color: #6b6660; }\nhtml.cf-app .cf-grg-row.cf-grg-dis .cf-grg-soon {\n  flex: 0 0 auto; font-size: 10.5px; font-weight: 700; letter-spacing: .04em;\n  text-transform: uppercase; color: #A8A29E;\n}\n\n/* \"Show all bikes\" escape + clear, in a footer band of the sheet */\nhtml.cf-app .cf-grg-foot {\n  flex: 0 0 auto; display: flex; gap: 10px;\n  padding: 10px 14px calc(12px + env(safe-area-inset-bottom, 0px));\n  border-top: 1px solid #262220; background: #161311;\n}\nhtml.cf-app .cf-grg-foot a, html.cf-app .cf-grg-foot button {\n  flex: 1 1 auto; display: inline-flex; align-items: center; justify-content: center; gap: 7px;\n  min-height: 46px; padding: 12px 14px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 12px;\n  color: #E8E4E0; font-family: inherit; font-size: 14px; font-weight: 700; letter-spacing: .01em;\n  text-decoration: none; cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app .cf-grg-foot a:active, html.cf-app .cf-grg-foot button:active { background: #262220; }\nhtml.cf-app .cf-grg-foot svg { width: 16px; height: 16px; display: block; }\nhtml.cf-app .cf-grg-foot .cf-grg-clear { display: none; color: #A8A29E; }\nhtml.cf-app .cf-grg-foot .cf-grg-clear.cf-grg-show { display: inline-flex; }\n\n/* ---------- \"Fits your <model>\" hint (loop cards + PDP) ---------- */\nhtml.cf-app .cf-grg-fits {\n  display: inline-flex; align-items: center; gap: 5px;\n  margin: 4px 0 2px;\n  font-family: inherit; font-size: 11.5px; font-weight: 700; letter-spacing: .015em;\n  color: #46c06a; /* subtle green = compatibility, NOT the scarce brand red */\n}\nhtml.cf-app .cf-grg-fits svg { width: 13px; height: 13px; display: block; }\n/* PDP variant: a touch more prominent, placed in the summary */\nhtml.cf-app .cf-grg-fits.cf-grg-fits-pdp { font-size: 13px; margin: 10px 0 2px; }\n\n@media (prefers-reduced-motion: reduce) {\n  html.cf-app .cf-grg-scrim,\n  html.cf-app .cf-grg-sheet { transition: none; }\n}\n\n\n/* ============================================================\n   Carbon Freaks \u2014 pdp_plus module\n   ADDS to the base PDP (sticky ATC + trust row already exist).\n   (a) financing message relocated/cloned up near the price (NO hard-coded $)\n   (b) graphite #161311 radial tile behind the WooCommerce gallery\n   (c) small \"Reviews\" jump anchor near the title (only if a reviews section exists)\n   Everything scoped to html.cf-app \u2014 desktop/web sees ZERO change.\n   ============================================================ */\n\n/* ---------- (a) financing near price ---------- */\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin {\n  display: block; margin: 8px 0 2px;\n  font-family: inherit; font-size: 13px; line-height: 1.45; color: #A8A29E;\n}\n/* the cloned BNPL widget keeps the gateway's own markup; just tidy it for dark */\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin a { color: #E8E4E0; text-decoration: underline; }\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin img,\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin svg { vertical-align: middle; max-height: 18px; width: auto; }\n/* messaging providers sometimes inject white backgrounds \u2014 soften on dark */\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin .affirm-as-low-as,\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin [data-pp-message],\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin .klarna-placement,\nhtml.cf-app.cf-pdpplus .cf-pdpplus-fin .afterpay-paragraph { background: transparent !important; }\n\n/* ---------- (b) graphite tile behind gallery images ---------- */\n/* target the WooCommerce gallery image wrappers; CSS-only so zoom/swipe is untouched */\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery {\n  background:\n    radial-gradient(120% 120% at 50% 30%, #1C1815 0%, #161311 55%, #120F0D 100%);\n  border: 1px solid #262220; border-radius: 14px;\n  padding: 8px; overflow: hidden;\n}\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .woocommerce-product-gallery__wrapper,\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .flex-viewport {\n  background: transparent !important;\n}\n/* each slide/figure gets the same subtle radial so carbon parts pop */\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .woocommerce-product-gallery__image {\n  background:\n    radial-gradient(115% 115% at 50% 28%, #1C1815 0%, #161311 60%, #120F0D 100%);\n  border-radius: 10px; overflow: hidden;\n}\n/* keep the zoom trigger / link transparent so it doesn't paint over the tile */\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .woocommerce-product-gallery__image a {\n  background: transparent !important;\n}\n/* thumbnails strip sits on the canvas, not a white band */\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .flex-control-thumbs {\n  background: transparent !important; margin-top: 8px;\n}\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .flex-control-thumbs li img {\n  border: 1px solid #262220; border-radius: 8px; background: #161311;\n}\nhtml.cf-app.cf-pdpplus .woocommerce-product-gallery .flex-control-thumbs li img.flex-active {\n  border-color: #E10600;\n}\n\n/* ---------- (c) reviews jump anchor near title ---------- */\nhtml.cf-app.cf-pdpplus .cf-pdpplus-reviews {\n  display: inline-flex; align-items: center; gap: 6px;\n  margin: 4px 0 10px; padding: 0;\n  background: none; border: 0; cursor: pointer;\n  font-family: inherit; font-size: 13px; font-weight: 600; letter-spacing: .01em;\n  color: #A8A29E; -webkit-tap-highlight-color: transparent;\n  min-height: 44px; /* contract: tap targets >=44px */\n}\nhtml.cf-app.cf-pdpplus .cf-pdpplus-reviews:active { color: #E8E4E0; }\nhtml.cf-app.cf-pdpplus .cf-pdpplus-reviews svg { width: 15px; height: 15px; display: block; color: #A8A29E; }\nhtml.cf-app.cf-pdpplus .cf-pdpplus-reviews u { text-decoration: underline; text-underline-offset: 2px; }\n\n\n/* ============================================================\n   Carbon Freaks App-Skin \u2014 ACCOUNT HUB (My Account)\n   Scoped to html.cf-app + body.woocommerce-account only.\n   Restyles the EXISTING WooCommerce My Account nav into an\n   app-native hub. Does NOT rebuild account logic \u2014 WooCommerce\n   still renders + handles every endpoint/link/form.\n   ============================================================ */\n\n/* ---- page canvas (My Account only) ---- */\nhtml.cf-app.woocommerce-account .woocommerce-MyAccount-navigation,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation {\n  float: none !important; width: 100% !important; margin: 0 0 18px !important;\n}\nhtml.cf-app.woocommerce-account .woocommerce-MyAccount-content,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content {\n  float: none !important; width: 100% !important; margin: 0 !important;\n  color: #E8E4E0;\n}\n/* give the account page a little breathing room + dark text defaults */\nhtml.cf-app body.woocommerce-account .woocommerce { color: #E8E4E0; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content a { color: #E8E4E0; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content a:hover { color: #E10600; }\n\n/* ---- the restyled nav: large thumb-friendly rows ---- */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation ul {\n  list-style: none !important; margin: 0 !important; padding: 0 !important;\n  display: flex; flex-direction: column; gap: 10px;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li {\n  margin: 0 !important; padding: 0 !important; border: 0 !important; list-style: none !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li::before,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li::marker { content: none !important; }\n\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li a {\n  display: flex; align-items: center; gap: 14px;\n  min-height: 56px; padding: 14px 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n  color: #E8E4E0 !important; font-size: 16px; font-weight: 600; line-height: 1.2;\n  text-decoration: none !important; -webkit-tap-highlight-color: transparent;\n  position: relative; transition: background .15s ease, border-color .15s ease;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li a:active {\n  background: #1E1A17; border-color: #3a3531;\n}\n/* active endpoint row */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a {\n  border-color: #E10600; background: #1E1A17;\n}\n/* chevron affordance */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li a::after {\n  content: \"\"; margin-left: auto; flex: 0 0 auto;\n  width: 8px; height: 8px; border-right: 2px solid #A8A29E; border-bottom: 2px solid #A8A29E;\n  transform: rotate(-45deg); opacity: .8;\n}\n/* leading icon slot (filled by JS; falls back to a dot) */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico {\n  flex: 0 0 auto; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;\n  color: #A8A29E;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li a .cf-acct-ico svg { width: 22px; height: 22px; display: block; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.is-active a .cf-acct-ico { color: #E10600; }\n\n/* logout row reads as a quiet destructive action */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a {\n  color: #A8A29E !important; font-weight: 600; background: transparent; border-style: dashed;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a::after { content: none; }\n\n/* affiliate / Goaffpro row gets the accent treatment (only ever applied to a REAL existing link) */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a {\n  background: #1E1A17; border-color: #E10600;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-navigation li.cf-acct-affiliate a .cf-acct-ico { color: #E10600; }\n\n/* ---- account hub header (greeting), built by JS ---- */\nhtml.cf-app body.woocommerce-account .cf-acct-head {\n  display: flex; align-items: center; gap: 14px;\n  margin: 6px 0 18px; padding: 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 14px;\n}\nhtml.cf-app body.woocommerce-account .cf-acct-head .cf-acct-avatar {\n  flex: 0 0 auto; width: 48px; height: 48px; border-radius: 50%;\n  background: #1E1A17; border: 1px solid #262220;\n  display: flex; align-items: center; justify-content: center;\n  color: #A8A29E; font-weight: 700; font-size: 19px;\n}\nhtml.cf-app body.woocommerce-account .cf-acct-head .cf-acct-hi { font-size: 13px; color: #A8A29E; font-weight: 600; }\nhtml.cf-app body.woocommerce-account .cf-acct-head .cf-acct-name { font-size: 19px; color: #E8E4E0; font-weight: 700; line-height: 1.2; }\n\n/* ---- content area cards: tables / orders / addresses render on dark ---- */\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content table.woocommerce-orders-table,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content table.shop_table {\n  background: #161311; border: 1px solid #262220; border-radius: 12px; overflow: hidden;\n  color: #E8E4E0; border-collapse: separate; border-spacing: 0;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content table th { color: #A8A29E; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content table td,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content table th { border-color: #262220 !important; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address {\n  background: #161311; border: 1px solid #262220; border-radius: 12px; padding: 14px; margin-bottom: 14px;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content .woocommerce-Address address { color: #E8E4E0; }\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content .title h3 { color: #E8E4E0; }\n\n/* ---- form fields (account details, addresses, login, register) on dark ---- */\nhtml.cf-app body.woocommerce-account .woocommerce form .form-row label,\nhtml.cf-app body.woocommerce-account .woocommerce-MyAccount-content label { color: #A8A29E; }\nhtml.cf-app body.woocommerce-account .woocommerce input.input-text,\nhtml.cf-app body.woocommerce-account .woocommerce input[type=\"text\"],\nhtml.cf-app body.woocommerce-account .woocommerce input[type=\"email\"],\nhtml.cf-app body.woocommerce-account .woocommerce input[type=\"tel\"],\nhtml.cf-app body.woocommerce-account .woocommerce input[type=\"password\"],\nhtml.cf-app body.woocommerce-account .woocommerce select,\nhtml.cf-app body.woocommerce-account .woocommerce textarea {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border: 1px solid #262220 !important; border-radius: 10px !important;\n  min-height: 48px; padding: 12px 14px !important; font-size: 16px; /* 16px = no iOS zoom-on-focus */\n  -webkit-appearance: none; appearance: none; box-shadow: none !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce input.input-text:focus,\nhtml.cf-app body.woocommerce-account .woocommerce select:focus,\nhtml.cf-app body.woocommerce-account .woocommerce textarea:focus {\n  border-color: #E10600 !important; outline: none;\n}\nhtml.cf-app body.woocommerce-account .woocommerce input::placeholder,\nhtml.cf-app body.woocommerce-account .woocommerce textarea::placeholder { color: #6f6a66; }\n\n/* primary buttons inside account = red CTA */\nhtml.cf-app body.woocommerce-account .woocommerce button.button,\nhtml.cf-app body.woocommerce-account .woocommerce a.button,\nhtml.cf-app body.woocommerce-account .woocommerce input.button,\nhtml.cf-app body.woocommerce-account .woocommerce button[type=\"submit\"] {\n  background: #E10600 !important; color: #fff !important;\n  border: 0 !important; border-radius: 10px !important;\n  min-height: 48px; padding: 13px 20px !important; font-size: 15px; font-weight: 700; letter-spacing: .02em;\n  -webkit-tap-highlight-color: transparent; box-shadow: none !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce button.button:active,\nhtml.cf-app body.woocommerce-account .woocommerce a.button:active,\nhtml.cf-app body.woocommerce-account .woocommerce input.button:active { background: #b80500 !important; }\n/* secondary/edit links stay quiet */\nhtml.cf-app body.woocommerce-account .woocommerce a.edit { color: #A8A29E !important; }\n\n/* login / register layout: stack + breathe (works whether 1 or 2 columns) */\nhtml.cf-app body.woocommerce-account .woocommerce .u-columns,\nhtml.cf-app body.woocommerce-account .woocommerce .col2-set {\n  display: flex; flex-direction: column; gap: 8px; width: 100% !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce .u-column1,\nhtml.cf-app body.woocommerce-account .woocommerce .u-column2,\nhtml.cf-app body.woocommerce-account .woocommerce .col-1,\nhtml.cf-app body.woocommerce-account .woocommerce .col-2 {\n  float: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce form.woocommerce-form-login,\nhtml.cf-app body.woocommerce-account .woocommerce form.woocommerce-form-register {\n  background: #161311; border: 1px solid #262220; border-radius: 14px;\n  padding: 18px 16px !important; margin: 0 !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce h2 { color: #E8E4E0; }\n/* \"remember me\" + lost password readable on dark */\nhtml.cf-app body.woocommerce-account .woocommerce .woocommerce-form-login__rememberme,\nhtml.cf-app body.woocommerce-account .woocommerce .woocommerce-LostPassword a { color: #A8A29E; }\n\n/* WooCommerce notices on dark */\nhtml.cf-app body.woocommerce-account .woocommerce-message,\nhtml.cf-app body.woocommerce-account .woocommerce-info,\nhtml.cf-app body.woocommerce-account .woocommerce-error,\nhtml.cf-app body.woocommerce-account .woocommerce-notice {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border-top: 3px solid #E10600 !important; border-radius: 10px; padding: 14px 16px !important;\n}\nhtml.cf-app body.woocommerce-account .woocommerce-message a,\nhtml.cf-app body.woocommerce-account .woocommerce-info a { color: #E10600 !important; }\n\n\n/* shared app-header height token (matches header.html: 52px + safe-area-top) */\nhtml.cf-app.cf-has-apphdr {\n  --cf-apphdr-h: calc(52px + env(safe-area-inset-top, 0px));\n}\n/* filters: sticky Sort/Filter bar drops below the fixed app header */\nhtml.cf-app.cf-has-apphdr .cf-filters-bar { top: var(--cf-apphdr-h) !important; }\n/* garage: pill sits just under the slim header (override its measured offset) */\nhtml.cf-app.cf-has-apphdr .cf-grg-pillwrap { top: var(--cf-apphdr-h) !important; }\n\n\n/* =========================================================================\n   Carbon Freaks app-skin FIX module: PDP TRUST ROW (key: trust)\n   GAP closed: a confirmed, LIVE guarantee/returns/fitment trust line near the\n   CTA, with each chip linking to its real policy page. Studies: returns/\n   guarantee near the CTA lift add-to-cart ~+23%.\n\n   Relationship to the base (app_shell.html v2):\n     The v2 base inserts a generic, NON-clickable .cf-trustrow after form.cart\n     (\"Secure checkout / Genuine carbon fiber / Pay over time\"). This module\n     UPGRADES that row IN PLACE into linkable policy chips and adds the\n     fitment + returns + warranty signals. It does NOT add a second row.\n     If the base row is absent (base not yet shipped), it builds its own.\n\n   Relationship to v3 pdp_plus.html:\n     pdp_plus owns financing-near-price, the gallery graphite tile, and the\n     reviews anchor. It does NOT touch the trust row. No collision.\n\n   NO FABRICATION: the actual returns/warranty WORDING and policy-page SLUGS\n   live in the CF_POLICY config below and are EMPTY by default. Those two chips\n   render ONLY once Joaquin fills verified values. The always-true chips\n   (Secure checkout, Genuine carbon fiber) render immediately. Nothing is\n   invented. See /* TODO: Joaquin to confirm */ markers.\n\n   Scoped to html.cf-app \u2014 a desktop/web visitor sees ZERO change.\n   Classes prefixed cf-trust- to avoid collision with the base .cf-trustrow*.\n   ========================================================================= */\n\n/* the row itself reuses the base .cf-trustrow box; we only restyle its chips. */\nhtml.cf-app .cf-trustrow.cf-trust-up {\n  display: flex; flex-wrap: wrap; align-items: stretch;\n  gap: 8px; margin: 14px 0 6px; padding: 0;\n}\n\n/* each chip = a tappable link to its policy page (or a static signal) */\nhtml.cf-app .cf-trust-chip {\n  display: inline-flex; align-items: center; gap: 7px;\n  min-height: 44px;                                  /* contract: tap target >=44px */\n  padding: 8px 12px;\n  background: #161311; border: 1px solid #262220; border-radius: 10px;\n  font-family: inherit; font-size: 12.5px; font-weight: 600; line-height: 1.2;\n  color: #E8E4E0; text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: border-color .15s ease, background .15s ease;\n}\n/* linkable chips get an affordance; static chips do not */\nhtml.cf-app a.cf-trust-chip:active { background: #1E1A17; border-color: #3A332E; }\nhtml.cf-app a.cf-trust-chip .cf-trust-go {\n  margin-left: 1px; color: #A8A29E; opacity: .7;\n}\nhtml.cf-app .cf-trust-chip .cf-trust-ic {\n  width: 16px; height: 16px; flex: 0 0 auto; display: block; color: #A8A29E;\n}\n/* the single accent: the guarantee/fitment check is the scarce red */\nhtml.cf-app .cf-trust-chip.cf-trust-key .cf-trust-ic { color: #E10600; }\nhtml.cf-app .cf-trust-chip .cf-trust-sub { color: #A8A29E; font-weight: 500; }\n\n/* tight two-up wrap on narrow screens, still >=44px tall */\n@media (max-width: 360px) {\n  html.cf-app .cf-trust-chip { font-size: 12px; padding: 8px 10px; }\n}\n\n\n/* =========================================================================\n   Carbon Freaks app-skin module: PAYMENT-SECURITY BADGE ROW  (key: paytrust)\n   Closes the \"no visible secure-checkout / accepted-payment trust badges near\n   the buy box\" gap. Shows a compact, REAL set of trust marks:\n     - \"Secure SSL checkout\" lock\n     - Accepted cards + wallets + BNPL that are ACTUALLY LIVE on the store:\n       Visa \u00b7 Mastercard \u00b7 Amex \u00b7 Discover \u00b7 Google Pay \u00b7 Amazon Pay \u00b7 Affirm \u00b7 Klarna\n   (Live set confirmed from site/build_log.md: WooPayments LIVE [Visa/MC/Amex/Disc],\n    WooPay/GPay/Amazon Pay rendering, Affirm+Klarna financing.\n    Apple Pay = domain-verification FAILED -> EXCLUDED. PayPal = not confirmed -> EXCLUDED.\n    No fabricated marks.)\n\n   PLACEMENT:\n     (a) PDP: a compact badge row inserted directly under the Add-to-Cart area,\n         right after the base .cf-trustrow (which the base inserts after form.cart).\n     (b) App footer strip: because the base hides footer.site-footer in app mode,\n         this re-surfaces a clean payment strip pinned at the bottom of page content\n         (above the tab bar) on every app page \u2014 the in-app equivalent of the\n         \"website footer payment badges\" the HOW-TO asks to mirror.\n\n   Pure inline-SVG / CSS. No new $, no external requests, no trademark logo art\n   (recognizable scheme wordmarks rendered as clean type-in-pill marks).\n   Everything scoped to html.cf-app \u2014 a desktop/web visitor sees ZERO change.\n\n   NOTE (desktop website footer): a true desktop-web footer badge strip is a\n   website-level edit (theme / global WPCode, NOT app-gated) and is out of scope\n   for this app-mode-gated module \u2014 see trust-credibility--0 build notes.\n   ========================================================================= */\n\n/* ---------- shared badge-row look ---------- */\nhtml.cf-app .cf-paytrust {\n  font-family: inherit;\n  box-sizing: border-box;\n}\nhtml.cf-app .cf-paytrust * { box-sizing: border-box; }\n\n/* the secure-checkout lock line */\nhtml.cf-app .cf-paytrust-secure {\n  display: inline-flex; align-items: center; gap: 7px;\n  color: #E8E4E0; font-size: 12.5px; font-weight: 700; letter-spacing: .01em;\n}\nhtml.cf-app .cf-paytrust-secure svg { width: 15px; height: 15px; display: block; color: #A8A29E; }\nhtml.cf-app .cf-paytrust-secure .cf-paytrust-sub { color: #A8A29E; font-weight: 600; }\n\n/* the marks rail */\nhtml.cf-app .cf-paytrust-marks {\n  display: flex; flex-wrap: wrap; align-items: center; gap: 6px;\n}\n/* each mark = a small dark pill so it reads on the canvas */\nhtml.cf-app .cf-paytrust-mark {\n  display: inline-flex; align-items: center; justify-content: center;\n  height: 22px; min-width: 34px; padding: 0 7px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 5px;\n  color: #E8E4E0; font-size: 10px; font-weight: 800; letter-spacing: .03em;\n  line-height: 1; white-space: nowrap; text-transform: uppercase;\n}\n/* svg-based marks size their artwork to the pill */\nhtml.cf-app .cf-paytrust-mark svg { height: 13px; width: auto; display: block; }\n/* keep marks legible but not loud \u2014 muted accent only where the brand itself is colored */\nhtml.cf-app .cf-paytrust-mark.cf-pt-visa     { color: #E8E4E0; }\nhtml.cf-app .cf-paytrust-mark.cf-pt-amex     { letter-spacing: .04em; }\nhtml.cf-app .cf-paytrust-mark.cf-pt-gpay     { gap: 4px; }\nhtml.cf-app .cf-paytrust-mark.cf-pt-affirm   { color: #E8E4E0; }\nhtml.cf-app .cf-paytrust-mark.cf-pt-klarna   { color: #E8E4E0; }\n\n/* ---------- (a) PDP badge row (under the buy box) ---------- */\nhtml.cf-app .cf-paytrust-pdp {\n  display: block;\n  margin: 4px 0 14px;\n  padding: 12px 0 0;\n  border-top: 1px solid #262220;\n}\nhtml.cf-app .cf-paytrust-pdp .cf-paytrust-secure { margin-bottom: 9px; }\n\n/* ---------- (b) in-app footer payment strip ---------- */\n/* sits in normal flow at the end of <main>/content; the base reserves bottom\n   padding for the tab bar, so this never hides behind it. */\nhtml.cf-app .cf-paytrust-foot {\n  margin: 22px 14px 8px;\n  padding: 16px 14px;\n  background: #161311; border: 1px solid #262220; border-radius: 14px;\n  text-align: center;\n}\nhtml.cf-app .cf-paytrust-foot .cf-paytrust-secure { margin-bottom: 11px; justify-content: center; }\nhtml.cf-app .cf-paytrust-foot .cf-paytrust-marks { justify-content: center; }\nhtml.cf-app .cf-paytrust-foot .cf-paytrust-note {\n  margin-top: 11px; color: #A8A29E; font-size: 11px; font-weight: 600; line-height: 1.4;\n}\n\n\n/* ============================================================================\n   Carbon Freaks app-skin module: PDP FITMENT CONFIRMATION  (key: cf-fit)\n\n   THE GAP: the garage module shows \"Fits your <bike>\" on a PDP only when it can\n   positively match the page, and it NEVER prints an honest negative. There is no\n   explicit per-product \"\u2713 Fits your 2021 S1000RR\" vs \"\u26a0 Not listed for your bike\"\n   line on the product page.\n\n   THIS MODULE reads the product's OWN fitment data from the PDP DOM and prints one\n   authoritative confirmation line near the price:\n     - \u2713 green   = the saved garage bike is in this product's fitment set\n     - \u26a0 amber   = this IS a bike-specific part, but the saved bike is NOT listed\n     - prompt    = no bike saved yet \u2192 \"Set your bike to confirm fitment\"\n     - (silent)  = product carries no recognizable bike fitment data \u2192 show nothing\n                   (universal/unknown parts are never falsely warned)\n\n   DATA SOURCE (honest, per-product, available today):\n     1. pa_fits_model attribute terms \u2014 the global attribute the backfill adds.\n        Read from the `.variations_form[data-product_variations]`, the additional-\n        information attributes table, or product_<attr> body classes. PREFERRED once\n        the backfill lands; this module auto-upgrades to it with zero redeploy.\n     2. product_cat-<slug> body classes \u2014 WooCommerce prints every category a product\n        belongs to (incl. its bike model/gen categories) on `body.single-product`.\n        This is authoritative per-product fitment TODAY, before any backfill.\n   We compare those against the inlined bike taxonomy (model+gen slugs) to decide.\n\n   Everything scoped to html.cf-app \u2014 desktop/web sees ZERO change. PDP only.\n   No store writes. Idempotent. Stacks below the sticky-ATC band; this is an inline\n   summary line, not a fixed bar, so no z-index/safe-area concerns.\n   ============================================================================ */\n\nhtml.cf-app.cf-fit .cf-fit-line {\n  display: flex; align-items: flex-start; gap: 9px;\n  margin: 12px 0 6px; padding: 11px 13px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n  font-family: inherit; font-size: 13.5px; line-height: 1.4; color: #E8E4E0;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app.cf-fit .cf-fit-line .cf-fit-ico {\n  flex: 0 0 auto; width: 20px; height: 20px; margin-top: 1px; display: block;\n}\nhtml.cf-app.cf-fit .cf-fit-line .cf-fit-body { flex: 1 1 auto; min-width: 0; }\nhtml.cf-app.cf-fit .cf-fit-line .cf-fit-head { font-weight: 700; letter-spacing: .005em; }\nhtml.cf-app.cf-fit .cf-fit-line .cf-fit-sub {\n  display: block; margin-top: 2px; font-size: 12px; font-weight: 600; color: #A8A29E;\n}\nhtml.cf-app.cf-fit .cf-fit-line .cf-fit-sub b { color: #E8E4E0; font-weight: 700; }\n\n/* state colors \u2014 confirm uses a calm green (NOT the scarce brand red);\n   warn uses amber; prompt is neutral. */\nhtml.cf-app.cf-fit .cf-fit-yes { border-color: #244a31; background: #12140f; }\nhtml.cf-app.cf-fit .cf-fit-yes .cf-fit-ico { color: #46c06a; }\nhtml.cf-app.cf-fit .cf-fit-yes .cf-fit-head { color: #6fd089; }\n\nhtml.cf-app.cf-fit .cf-fit-no { border-color: #4a3a1c; background: #161208; }\nhtml.cf-app.cf-fit .cf-fit-no .cf-fit-ico { color: #d9a441; }\nhtml.cf-app.cf-fit .cf-fit-no .cf-fit-head { color: #e0b65a; }\n\nhtml.cf-app.cf-fit .cf-fit-ask .cf-fit-ico { color: #A8A29E; }\n\n/* change/set-bike action sits inline at the end of the line */\nhtml.cf-app.cf-fit .cf-fit-act {\n  flex: 0 0 auto; align-self: center;\n  display: inline-flex; align-items: center; justify-content: center;\n  min-height: 44px; padding: 7px 13px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 999px;\n  color: #E8E4E0; font-family: inherit; font-size: 12.5px; font-weight: 700; letter-spacing: .01em;\n  text-decoration: none; cursor: pointer; white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app.cf-fit .cf-fit-act:active { background: #262220; }\n/* the prompt state's action is the primary call \u2014 make it the scarce red */\nhtml.cf-app.cf-fit .cf-fit-ask .cf-fit-act { background: #E10600; color: #fff; border-color: #E10600; }\nhtml.cf-app.cf-fit .cf-fit-ask .cf-fit-act:active { background: #b80500; }\n\n\n/* ============================================================\n   Carbon Freaks App-Skin \u2014 CART + CHECKOUT (key: cartco)\n   Scoped to html.cf-app + body.woocommerce-cart / body.woocommerce-checkout.\n   Dark-themes the two highest-intent screens and adds:\n     - a 3-step progress header (Cart > Info > Pay)\n     - a full-width 56px red CTA pinned in the thumb zone\n       (Proceed to Checkout / Place Order) that PROXIES the real Woo button\n     - \"Checkout as Guest\" framing surfaced ABOVE any login prompt\n     - express-pay (Stripe Payment Request Buttons / wallets) pinned to the TOP\n   Does NOT rebuild any cart/checkout logic \u2014 WooCommerce + the Stripe gateway\n   still render and handle every field, total, coupon, wallet and submit.\n   Desktop/web (no cf-app) sees ZERO change.\n   Z-index band: pinned CTA bar = 99989 (same tier as sticky ATC; cart/checkout\n   pages have no PDP sticky ATC, so no collision). Tab bar (99990) stays on top.\n   ============================================================ */\n\n/* ---- only paint on the two target pages ---- */\nhtml.cf-app body.woocommerce-cart .woocommerce,\nhtml.cf-app body.woocommerce-checkout .woocommerce { color: #E8E4E0; }\n\n/* generic dark text + links across both pages */\nhtml.cf-app.cf-cartco .woocommerce a { color: #E8E4E0; }\nhtml.cf-app.cf-cartco .woocommerce a:hover { color: #E10600; }\nhtml.cf-app.cf-cartco h1, html.cf-app.cf-cartco h2, html.cf-app.cf-cartco h3,\nhtml.cf-app.cf-cartco .entry-title { color: #E8E4E0; }\n\n/* ================= (1) 3-step progress header ================= */\nhtml.cf-app.cf-cartco .cf-cartco-steps {\n  display: flex; align-items: center; gap: 0;\n  margin: 4px 0 18px; padding: 0;\n  font-family: inherit; -webkit-tap-highlight-color: transparent;\n}\nhtml.cf-app.cf-cartco .cf-cartco-step {\n  flex: 1 1 0; display: flex; flex-direction: column; align-items: center; gap: 6px;\n  position: relative; min-width: 0;\n}\n/* connector line between steps */\nhtml.cf-app.cf-cartco .cf-cartco-step + .cf-cartco-step::before {\n  content: \"\"; position: absolute; top: 13px; left: -50%; width: 100%; height: 2px;\n  background: #262220; z-index: 0;\n}\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-done + .cf-cartco-step::before,\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-now::before { background: #262220; }\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-done::after {\n  content: \"\"; position: absolute; top: 13px; right: -50%; width: 100%; height: 2px;\n  background: #E10600; z-index: 0;\n}\nhtml.cf-app.cf-cartco .cf-cartco-dot {\n  position: relative; z-index: 1;\n  width: 28px; height: 28px; border-radius: 50%;\n  display: flex; align-items: center; justify-content: center;\n  background: #161311; border: 2px solid #262220; color: #A8A29E;\n  font-size: 13px; font-weight: 700; line-height: 1;\n}\nhtml.cf-app.cf-cartco .cf-cartco-dot svg { width: 14px; height: 14px; display: block; }\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-now .cf-cartco-dot {\n  background: #E10600; border-color: #E10600; color: #fff;\n}\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-done .cf-cartco-dot {\n  background: #1E1A17; border-color: #E10600; color: #E10600;\n}\nhtml.cf-app.cf-cartco .cf-cartco-label {\n  font-size: 12px; font-weight: 600; letter-spacing: .02em; color: #A8A29E; text-align: center;\n}\nhtml.cf-app.cf-cartco .cf-cartco-step.cf-now .cf-cartco-label { color: #E8E4E0; }\n\n/* ================= (2) dark-theme the order table ================= */\nhtml.cf-app.cf-cartco table.shop_table,\nhtml.cf-app.cf-cartco table.cart,\nhtml.cf-app.cf-cartco table.woocommerce-checkout-review-order-table {\n  background: #161311 !important; border: 1px solid #262220 !important;\n  border-radius: 12px; overflow: hidden;\n  color: #E8E4E0 !important; border-collapse: separate !important; border-spacing: 0 !important;\n}\nhtml.cf-app.cf-cartco table.shop_table th,\nhtml.cf-app.cf-cartco table.cart th { color: #A8A29E !important; background: transparent !important; }\nhtml.cf-app.cf-cartco table.shop_table td,\nhtml.cf-app.cf-cartco table.shop_table th,\nhtml.cf-app.cf-cartco table.cart td,\nhtml.cf-app.cf-cartco table.cart th {\n  border-color: #262220 !important; background: transparent !important;\n}\nhtml.cf-app.cf-cartco table.shop_table tfoot th,\nhtml.cf-app.cf-cartco table.shop_table tfoot td { color: #E8E4E0 !important; }\nhtml.cf-app.cf-cartco table .product-name a { color: #E8E4E0 !important; font-weight: 600; }\nhtml.cf-app.cf-cartco table .product-subtotal,\nhtml.cf-app.cf-cartco table .product-total,\nhtml.cf-app.cf-cartco table .order-total .amount { color: #E8E4E0 !important; }\n/* qty input + remove on dark */\nhtml.cf-app.cf-cartco .quantity input.qty {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border: 1px solid #262220 !important; border-radius: 8px !important;\n  min-height: 44px; font-size: 16px;\n}\nhtml.cf-app.cf-cartco a.remove {\n  color: #A8A29E !important; background: transparent !important; font-size: 20px;\n}\nhtml.cf-app.cf-cartco a.remove:hover { color: #E10600 !important; }\n\n/* ================= (3) totals / cart-collaterals card ================= */\nhtml.cf-app.cf-cartco .cart_totals,\nhtml.cf-app.cf-cartco .cart-collaterals .cross-sells,\nhtml.cf-app.cf-cartco #order_review,\nhtml.cf-app.cf-cartco .woocommerce-checkout-review-order {\n  color: #E8E4E0;\n}\nhtml.cf-app.cf-cartco .cart_totals h2,\nhtml.cf-app.cf-cartco #order_review_heading { color: #E8E4E0; }\nhtml.cf-app.cf-cartco .cart_totals .order-total th,\nhtml.cf-app.cf-cartco .cart_totals .order-total td { color: #E8E4E0 !important; }\n\n/* coupon row on cart */\nhtml.cf-app.cf-cartco .coupon input#coupon_code,\nhtml.cf-app.cf-cartco .woocommerce-form-coupon input#coupon_code {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border: 1px solid #262220 !important; border-radius: 10px !important;\n  min-height: 48px; font-size: 16px; padding: 12px 14px !important;\n}\nhtml.cf-app.cf-cartco .woocommerce-form-coupon-toggle .woocommerce-info { color: #E8E4E0; }\n\n/* ================= (4) all form fields on dark (checkout) ================= */\nhtml.cf-app.cf-cartco .woocommerce form .form-row label,\nhtml.cf-app.cf-cartco .woocommerce label { color: #A8A29E; }\nhtml.cf-app.cf-cartco .woocommerce input.input-text,\nhtml.cf-app.cf-cartco .woocommerce input[type=\"text\"],\nhtml.cf-app.cf-cartco .woocommerce input[type=\"email\"],\nhtml.cf-app.cf-cartco .woocommerce input[type=\"tel\"],\nhtml.cf-app.cf-cartco .woocommerce input[type=\"password\"],\nhtml.cf-app.cf-cartco .woocommerce input[type=\"number\"],\nhtml.cf-app.cf-cartco .woocommerce select,\nhtml.cf-app.cf-cartco .woocommerce .select2-selection,\nhtml.cf-app.cf-cartco .woocommerce textarea {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border: 1px solid #262220 !important; border-radius: 10px !important;\n  min-height: 48px; padding: 12px 14px !important; font-size: 16px; /* 16px = no iOS zoom */\n  -webkit-appearance: none; appearance: none; box-shadow: none !important;\n}\nhtml.cf-app.cf-cartco .woocommerce .select2-selection__rendered { color: #E8E4E0 !important; line-height: 24px !important; }\nhtml.cf-app.cf-cartco .woocommerce .select2-selection__arrow { top: 12px !important; }\nhtml.cf-app.cf-cartco .woocommerce input.input-text:focus,\nhtml.cf-app.cf-cartco .woocommerce select:focus,\nhtml.cf-app.cf-cartco .woocommerce textarea:focus { border-color: #E10600 !important; outline: none; }\nhtml.cf-app.cf-cartco .woocommerce input::placeholder,\nhtml.cf-app.cf-cartco .woocommerce textarea::placeholder { color: #6f6a66; }\n\n/* ================= (5) the dark PAYMENT box (proven #1E1A17 pattern) ================= */\nhtml.cf-app.cf-cartco #payment,\nhtml.cf-app.cf-cartco .woocommerce-checkout-payment {\n  background: #1E1A17 !important; border: 1px solid #262220 !important;\n  border-radius: 14px !important; padding: 14px !important;\n}\nhtml.cf-app.cf-cartco #payment ul.payment_methods {\n  background: transparent !important; border: 0 !important; padding: 0 !important;\n}\nhtml.cf-app.cf-cartco #payment ul.payment_methods li {\n  background: #161311 !important; border: 1px solid #262220 !important; border-radius: 10px;\n  margin: 0 0 8px !important; padding: 10px 12px !important; list-style: none !important;\n}\nhtml.cf-app.cf-cartco #payment ul.payment_methods li::before,\nhtml.cf-app.cf-cartco #payment ul.payment_methods li::marker { content: none !important; }\nhtml.cf-app.cf-cartco #payment ul.payment_methods li label { color: #E8E4E0 !important; font-weight: 600; }\n/* the gateway box / iframe area Woo drops below the selected method */\nhtml.cf-app.cf-cartco #payment div.payment_box {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border-radius: 10px !important; padding: 12px !important; margin: 8px 0 0 !important;\n}\nhtml.cf-app.cf-cartco #payment div.payment_box::before { border-bottom-color: #1E1A17 !important; }\nhtml.cf-app.cf-cartco #payment div.payment_box,\nhtml.cf-app.cf-cartco #payment div.payment_box p { color: #E8E4E0 !important; }\n/* terms / privacy text readable on dark */\nhtml.cf-app.cf-cartco .woocommerce-terms-and-conditions-wrapper,\nhtml.cf-app.cf-cartco .woocommerce-privacy-policy-text { color: #A8A29E; }\nhtml.cf-app.cf-cartco .woocommerce-terms-and-conditions { background: #161311 !important; border-color: #262220 !important; color: #E8E4E0; }\n\n/* ================= (6) express-pay pinned to TOP ================= */\n/* slot we create at the top of the checkout column; the real Stripe/wallet\n   Payment Request Button is RELOCATED into it (never recreated). */\nhtml.cf-app.cf-cartco .cf-cartco-express {\n  margin: 0 0 16px; padding: 14px;\n  background: #1E1A17; border: 1px solid #262220; border-radius: 14px;\n}\nhtml.cf-app.cf-cartco .cf-cartco-express .cf-cartco-express-cap {\n  display: flex; align-items: center; gap: 8px;\n  font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;\n  color: #A8A29E; margin: 0 0 10px;\n}\nhtml.cf-app.cf-cartco .cf-cartco-express .cf-cartco-express-cap::before,\nhtml.cf-app.cf-cartco .cf-cartco-express .cf-cartco-express-cap::after {\n  content: \"\"; flex: 1 1 auto; height: 1px; background: #262220;\n}\n/* the relocated wallet host keeps the gateway's own button markup intact */\nhtml.cf-app.cf-cartco .cf-cartco-express .cf-cartco-express-host > * { max-width: 100% !important; }\n/* \"or pay another way\" divider after the express block */\nhtml.cf-app.cf-cartco .cf-cartco-or {\n  display: flex; align-items: center; gap: 12px;\n  margin: 0 0 16px; color: #A8A29E; font-size: 13px; font-weight: 600;\n}\nhtml.cf-app.cf-cartco .cf-cartco-or::before,\nhtml.cf-app.cf-cartco .cf-cartco-or::after { content: \"\"; flex: 1 1 auto; height: 1px; background: #262220; }\n\n/* ================= (7) GUEST-FIRST framing ================= */\n/* banner placed ABOVE the (collapsed) login prompt on checkout */\nhtml.cf-app.cf-cartco .cf-cartco-guest {\n  display: flex; align-items: center; gap: 12px;\n  margin: 0 0 14px; padding: 14px 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n}\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-ico {\n  flex: 0 0 auto; width: 34px; height: 34px; border-radius: 50%;\n  background: #1E1A17; border: 1px solid #262220;\n  display: flex; align-items: center; justify-content: center; color: #E10600;\n}\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-ico svg { width: 18px; height: 18px; display: block; }\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-t { font-size: 15px; font-weight: 700; color: #E8E4E0; line-height: 1.25; }\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-s { font-size: 12.5px; color: #A8A29E; line-height: 1.3; margin-top: 2px; }\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-login {\n  margin-left: auto; flex: 0 0 auto;\n  background: transparent; border: 1px solid #262220; border-radius: 9px;\n  color: #E8E4E0; font-size: 13px; font-weight: 600; padding: 0 14px;\n  min-height: 44px; -webkit-tap-highlight-color: transparent; cursor: pointer;\n}\nhtml.cf-app.cf-cartco .cf-cartco-guest .cf-cartco-guest-login:active { background: #1E1A17; }\n/* keep the native Woo login form visually quiet until expanded (it's optional, not required) */\nhtml.cf-app.cf-cartco .woocommerce-form-login {\n  background: #161311 !important; border: 1px solid #262220 !important;\n  border-radius: 12px !important; padding: 16px !important; margin: 0 0 16px !important;\n}\nhtml.cf-app.cf-cartco .woocommerce-form-login-toggle .woocommerce-info { color: #A8A29E; }\n\n/* ================= (8) WooCommerce notices on dark ================= */\nhtml.cf-app.cf-cartco .woocommerce-message,\nhtml.cf-app.cf-cartco .woocommerce-info,\nhtml.cf-app.cf-cartco .woocommerce-error,\nhtml.cf-app.cf-cartco .woocommerce-notice {\n  background: #1E1A17 !important; color: #E8E4E0 !important;\n  border-top: 3px solid #E10600 !important; border-radius: 10px; padding: 14px 16px !important;\n}\nhtml.cf-app.cf-cartco .woocommerce-message a,\nhtml.cf-app.cf-cartco .woocommerce-info a { color: #E10600 !important; }\n\n/* ================= (9) trust strip near payment ================= */\n/* Generic, factual reassurance only \u2014 NO invented shipping/return/financing numbers. */\nhtml.cf-app.cf-cartco .cf-cartco-trust {\n  display: flex; flex-wrap: wrap; gap: 8px 16px; justify-content: center;\n  margin: 14px 0 0; padding: 12px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n}\nhtml.cf-app.cf-cartco .cf-cartco-trust span {\n  display: inline-flex; align-items: center; gap: 6px;\n  font-size: 12.5px; font-weight: 600; color: #A8A29E;\n}\nhtml.cf-app.cf-cartco .cf-cartco-trust span svg { width: 14px; height: 14px; display: block; color: #E10600; }\n\n/* ================= (10) PINNED full-width red CTA (thumb zone) ================= */\n/* This is a PROXY button. The real Woo submit stays in the DOM; tapping the\n   proxy clicks it. We hide the original visually but keep it operable, so we\n   never break WooCommerce's submit/validation/AJAX. */\nhtml.cf-app.cf-cartco.cf-cartco-haspin {\n  /* reserve space so the pinned bar never covers the last bit of the page */\n}\nhtml.cf-app.cf-cartco.cf-cartco-haspin body,\nhtml.cf-app body.cf-cartco-haspin {\n  /* handled via JS-set padding to stack above tab bar; see script */\n}\nhtml.cf-app.cf-cartco .cf-cartco-pin {\n  position: fixed; left: 0; right: 0;\n  bottom: calc(60px + env(safe-area-inset-bottom, 0px)); /* sit ABOVE the 60px tab bar */\n  z-index: 99989;\n  background: #0C0A09; border-top: 1px solid #262220;\n  padding: 10px 14px calc(10px + env(safe-area-inset-bottom, 0px));\n  box-shadow: 0 -6px 20px rgba(0,0,0,.45);\n  transform: translateY(0); transition: transform .2s ease;\n}\n/* tiny total readout above the button (mirrors Woo's order total \u2014 read live, not invented) */\nhtml.cf-app.cf-cartco .cf-cartco-pin-total {\n  display: flex; align-items: baseline; justify-content: space-between;\n  margin: 0 2px 8px; font-family: inherit;\n}\nhtml.cf-app.cf-cartco .cf-cartco-pin-total .cf-cartco-pin-lbl { font-size: 12px; font-weight: 600; color: #A8A29E; letter-spacing: .03em; text-transform: uppercase; }\nhtml.cf-app.cf-cartco .cf-cartco-pin-total .cf-cartco-pin-amt { font-size: 17px; font-weight: 800; color: #E8E4E0; }\nhtml.cf-app.cf-cartco .cf-cartco-pin-cta {\n  display: flex; align-items: center; justify-content: center; gap: 10px;\n  width: 100%; min-height: 56px; height: 56px;\n  background: #E10600; color: #fff;\n  border: 0; border-radius: 12px;\n  font-family: inherit; font-size: 16px; font-weight: 800; letter-spacing: .02em;\n  -webkit-tap-highlight-color: transparent; cursor: pointer;\n  box-shadow: 0 6px 18px rgba(225,6,0,.28);\n}\nhtml.cf-app.cf-cartco .cf-cartco-pin-cta:active { background: #b80500; }\nhtml.cf-app.cf-cartco .cf-cartco-pin-cta[disabled] { opacity: .5; }\nhtml.cf-app.cf-cartco .cf-cartco-pin-cta svg { width: 18px; height: 18px; display: block; }\n/* hide the original inline Woo button once the proxy is live (kept operable, not display:none-removed from flow logic) */\nhtml.cf-app.cf-cartco.cf-cartco-proxied .wc-proceed-to-checkout a.checkout-button,\nhtml.cf-app.cf-cartco.cf-cartco-proxied #place_order {\n  position: absolute !important; width: 1px !important; height: 1px !important;\n  padding: 0 !important; margin: -1px !important; overflow: hidden !important;\n  clip: rect(0 0 0 0) !important; white-space: nowrap !important; border: 0 !important;\n}\n\n\n/* ---------- free-ship progress: shared bar visuals ---------- */\nhtml.cf-app .cf-ship-bar {\n  font-family: inherit; box-sizing: border-box;\n}\nhtml.cf-app .cf-ship-bar * { box-sizing: border-box; }\nhtml.cf-app .cf-ship-msg {\n  display: flex; align-items: center; gap: 7px;\n  font-size: 13px; font-weight: 600; line-height: 1.3; color: #E8E4E0;\n}\nhtml.cf-app .cf-ship-msg .cf-ship-amt { color: #E10600; font-weight: 800; }\nhtml.cf-app .cf-ship-track {\n  position: relative; height: 7px; border-radius: 6px;\n  background: #262220; overflow: hidden; margin-top: 8px;\n}\nhtml.cf-app .cf-ship-fill {\n  position: absolute; left: 0; top: 0; bottom: 0; width: 0%;\n  border-radius: 6px; background: #E10600;\n  transition: width .45s cubic-bezier(.4,0,.2,1);\n}\n/* unlocked state: calmer green-tinted-to-text, keep red scarce -> use accent only on the check */\nhtml.cf-app .cf-ship-bar.cf-ship-done .cf-ship-fill { background: #E8E4E0; }\nhtml.cf-app .cf-ship-bar.cf-ship-done .cf-ship-msg { color: #E8E4E0; }\nhtml.cf-app .cf-ship-bar.cf-ship-done .cf-ship-check { color: #E10600; font-weight: 900; }\n\n/* ---------- variant A: inline block on the cart page ---------- */\nhtml.cf-app .cf-ship-inline {\n  margin: 0 0 16px; padding: 14px 14px 16px;\n  background: #161311; border: 1px solid #262220; border-radius: 12px;\n}\n\n/* ---------- variant B: sticky mini banner above the tab bar ---------- */\nhtml.cf-app .cf-ship-sticky {\n  position: fixed; left: 0; right: 0; z-index: 99988;          /* below tab bar(99990)/stickyATC(99989), above scrim band */\n  bottom: calc(60px + env(safe-area-inset-bottom, 0px));        /* sits directly on top of the bottom tab bar */\n  padding: 9px 14px calc(9px); margin: 0;\n  background: #1E1A17; border-top: 1px solid #262220;\n  box-shadow: 0 -5px 16px rgba(0,0,0,.42);\n  transform: translateY(120%); transition: transform .28s ease;\n}\nhtml.cf-app .cf-ship-sticky.cf-ship-show { transform: translateY(0); }\n/* when a PDP sticky ATC is present, lift the banner above it (124px band) so they don't overlap */\nhtml.cf-app.cf-has-stickyatc .cf-ship-sticky {\n  bottom: calc(124px + env(safe-area-inset-bottom, 0px));\n}\n/* reserve room so the sticky banner never hides the last cart row / footer content */\nhtml.cf-app.cf-ship-haspad body { padding-bottom: calc(60px + 46px + env(safe-area-inset-bottom, 0px)) !important; }\nhtml.cf-app.cf-ship-haspad.cf-has-stickyatc body { padding-bottom: calc(124px + 46px + env(safe-area-inset-bottom, 0px)) !important; }\nhtml.cf-app .cf-ship-sticky .cf-ship-track { margin-top: 6px; height: 6px; }\n\n is a tiny optional\n      one-time permission nudge sheet, also native-only + dismissible).\n    - Idempotent (guards double-registration + double-injection).\n    - READ-ONLY to the store: it POSTs ONLY to the push backend, never to\n      WooCommerce/WordPress.\n    - No fabricated values: the backend host + free placeholders are TODO-marked.\n\n  >>> OPERATOR / DEPLOY TODOs (push will not fire until these are done) <<<\n    A) Set CF_PUSH_ENDPOINT below to the PUBLIC https URL of woo_webhook.py's\n       /push/register route once it's deployed behind the QNAP reverse-proxy /\n       a public route (push-backend/README.md \"Deploy\"). Until set, this module\n       registers the token client-side but skips the POST (no errors, no spam).\n    B) Firebase project for com.carbonfreaks.app -> google-services.json (Android)\n       + service-account JSON (backend).  APNs AuthKey .p8 + ASC Push capability\n       (iOS).  See push-backend/README.md + mobile/native-config.md \u00a73.\n    C) WooCommerce webhooks (Order created/updated, Product updated) -> /push/woo,\n       Cart Abandonment Recovery plugin -> push, YITH Wishlist -> restock/drop list.\n       (All server-side; this module is the device-registration half only.)\n============================================================================ -->\n<style>\n/* Native-only, optional one-time permission-priming sheet. Hidden by default;\n   shown only inside the native app when we are about to ask for the OS prompt,\n   so a cold first-launch deny rate is lower. Pure cosmetic + dismissible.\n   Sits ABOVE the tab bar (z 99993, within the contract's 99991-99995 band). */\nhtml.cf-app .cf-push-prime {\n  position: fixed; left: 0; right: 0;\n  bottom: calc(60px + env(safe-area-inset-bottom, 0px));\n  z-index: 99993;\n  transform: translateY(120%);\n  transition: transform .28s cubic-bezier(.4,0,.2,1);\n  background: #1E1A17;\n  border-top: 1px solid #262220;\n  box-shadow: 0 -10px 30px rgba(0,0,0,.45);\n  padding: 16px 18px calc(16px + env(safe-area-inset-bottom, 0px));\n  color: #E8E4E0;\n  font-family: -apple-system, system-ui, Roboto, \"Segoe UI\", sans-serif;\n}\nhtml.cf-app .cf-push-prime.cf-show { transform: translateY(0); }\nhtml.cf-app .cf-push-prime .cf-pp-top { display: flex; align-items: flex-start; gap: 12px; }\nhtml.cf-app .cf-push-prime .cf-pp-ico {\n  flex: 0 0 auto; width: 40px; height: 40px; border-radius: 11px;\n  background: radial-gradient(120% 120% at 30% 20%, #2a2624 0%, #161311 60%, #0C0A09 100%);\n  border: 1px solid rgba(225,6,0,.35);\n  display: flex; align-items: center; justify-content: center;\n}\nhtml.cf-app .cf-push-prime .cf-pp-ico svg { width: 21px; height: 21px; stroke: #E10600; }\nhtml.cf-app .cf-push-prime .cf-pp-txt { flex: 1 1 auto; min-width: 0; }\nhtml.cf-app .cf-push-prime .cf-pp-title { font-size: 15px; font-weight: 700; line-height: 1.25; }\nhtml.cf-app .cf-push-prime .cf-pp-sub { font-size: 12.5px; color: #A8A29E; line-height: 1.45; margin-top: 3px; }\nhtml.cf-app .cf-push-prime .cf-pp-btns { display: flex; gap: 10px; margin-top: 14px; }\nhtml.cf-app .cf-push-prime button {\n  -webkit-appearance: none; appearance: none; border: 0; cursor: pointer;\n  font-family: inherit; font-size: 14px; font-weight: 600;\n  min-height: 44px; border-radius: 11px; padding: 0 16px; flex: 1 1 0;\n}\nhtml.cf-app .cf-push-prime .cf-pp-yes { background: #E10600; color: #FFFFFF; }\nhtml.cf-app .cf-push-prime .cf-pp-yes:active { background: #b80500; }\nhtml.cf-app .cf-push-prime .cf-pp-no { background: transparent; color: #A8A29E; border: 1px solid #262220; flex: 0 0 auto; padding: 0 18px; }\nhtml.cf-app .cf-push-prime .cf-pp-no:active { background: #161311; }\n";
  var s = document.createElement('style'); s.id='cf-app-shell-css'; s.textContent = CSS;
  (document.head||document.documentElement).appendChild(s);
})();

/* ---- behavior blocks (self-executing IIFEs) ---- */
(function () {
  var d = document, root = d.documentElement;
  // --- app-mode detection (persisted) ---
  try {
    var p = new URLSearchParams(location.search);
    var isApp = p.get('source') === 'app'
      || (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())
      || localStorage.getItem('cf_app') === '1';
    if (p.get('source') === 'app') localStorage.setItem('cf_app', '1');
    if (!isApp) return;                                  // normal web/desktop: do nothing
  } catch (e) { return; }
  root.classList.add('cf-app');

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

  function buildTabbar() {
    if (d.querySelector('.cf-tabbar')) return;
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

  // --- PDP: sticky add-to-cart bar + trust row ---
  function buildPDP() {
    if (!d.body.classList.contains('single-product')) return;
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
    root.classList.add('cf-has-stickyatc');

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
  if (!root.classList.contains('cf-app')) return;           // not app mode -> do nothing
  if (d.querySelector('.cf-apphdr')) return;                // idempotent: already injected

  function buildSearchInner() {
    // Prefer cloning the site's REAL search form (keeps FiboSearch / WC product search
    // wiring + hidden fields intact). Try a few common selectors defensively.
    var src = d.querySelector(
      '.dgwt-wcas-search-wrapp, form.dgwt-wcas-search-form, ' +   /* FiboSearch */
      'form.woocommerce-product-search, ' +                       /* WC product search */
      'form[role="search"], form.search-form, .ast-search-menu-icon form'
    );
    if (src) {
      // If we grabbed a FiboSearch wrapper (not a <form>), wrap a plain GET fallback around it.
      var clone = src.cloneNode(true);
      if (clone.tagName === 'FORM') {
        clone.setAttribute('role', 'search');
        return clone;
      }
      // wrapper -> still usable, but give it a hard /?s= submit fallback around it
    }
    // Fallback: a plain GET form to /?s= (WordPress default search -> WC results).
    var f = d.createElement('form');
    f.setAttribute('role', 'search'); f.method = 'get'; f.action = '/';
    var inp = d.createElement('input');
    inp.type = 'search'; inp.name = 's'; inp.placeholder = 'Search carbon parts…';
    inp.autocomplete = 'off'; inp.setAttribute('aria-label', 'Search');
    // keep app mode after a search navigation
    var hid = d.createElement('input'); hid.type = 'hidden'; hid.name = 'source'; hid.value = 'app';
    var go = d.createElement('button'); go.type = 'submit'; go.className = 'cf-apphdr-go'; go.textContent = 'Go';
    f.appendChild(inp); f.appendChild(hid); f.appendChild(go);
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
      // only trust history if we navigated within this session, else go home (stay in app mode)
      if (window.history.length > 1 && d.referrer && d.referrer.indexOf(location.host) !== -1) {
        history.back();
      } else {
        location.href = '/?source=app';
      }
    });
    hdr.appendChild(back);
    if (!isHome) root.classList.add('cf-hdr-inner');

    // --- logo (home) ---
    var logo = d.createElement('a');
    logo.className = 'cf-apphdr-logo'; logo.href = '/?source=app'; logo.setAttribute('aria-label', 'Carbon Freaks home');
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
      w.innerHTML = 'CARBON <b>FREAKS</b>';
      logo.appendChild(w);
    }
    hdr.appendChild(logo);

    // --- right actions: Bikes pill + Search icon ---
    var act = d.createElement('div'); act.className = 'cf-apphdr-act';

    // Bikes affordance: open the garage picker if the garage module exposed a global,
    // else link to /shop/ (Shop-by-Bike lives in the nav we're hiding, so preserve access).
    var bikes = d.createElement('a');
    bikes.className = 'cf-apphdr-bikes'; bikes.href = '/shop/?source=app';
    bikes.setAttribute('aria-label', 'Shop by bike');
    bikes.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17" r="3.2"/><circle cx="18.5" cy="17" r="3.2"/><path d="M5.5 17 9 8h5l2.6 6"/><path d="M9 8h6"/></svg><span>Bikes</span>';
    bikes.addEventListener('click', function (e) {
      // documented optional global from the garage/shop-by-bike module
      if (typeof window.cfOpenGarage === 'function') {
        e.preventDefault();
        try { window.cfOpenGarage(); } catch (err) { location.href = '/shop/?source=app'; }
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

    // --- expanding search row (built once, lazily) ---
    var searchRow = d.createElement('div');
    searchRow.className = 'cf-apphdr-search';
    searchRow.appendChild(buildSearchInner());
    d.body.appendChild(searchRow);

    function setSearch(open) {
      root.classList.toggle('cf-hdr-search-open', open);
      searchBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        var inp = searchRow.querySelector('input[type="search"], input[type="text"], input[name="s"]');
        if (inp) { try { inp.focus(); } catch (e) {} }
      }
    }
    searchBtn.addEventListener('click', function () {
      setSearch(!root.classList.contains('cf-hdr-search-open'));
    });
    // close on Escape
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('cf-hdr-search-open')) setSearch(false);
    });

    // ONLY NOW hide the theme header — our bar + nav affordances are live.
    root.classList.add('cf-has-apphdr');
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;            // not app mode -> nothing
  if (d.querySelector('.cf-filters-bar')) return;            // idempotent

  // shop / category / product archive only
  var b = d.body;
  var onShop = b.classList.contains('woocommerce-shop')
            || b.classList.contains('tax-product_cat')
            || b.classList.contains('post-type-archive-product')
            || b.classList.contains('tax-product_tag')        // defensive: tag archives behave the same
            || (b.classList.contains('woocommerce') && d.querySelector('ul.products, .products'));
  if (!onShop) return;

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

  // count active filters cheaply: chosen/active terms across the widgets + a non-default price/orderby
  function activeFilterCount() {
    var n = 0;
    filterWidgets.forEach(function (w) {
      n += w.querySelectorAll('.chosen, .yith-wcan-active, li.active, .selected').length;
    });
    try {
      var p = new URLSearchParams(location.search);
      if (p.get('min_price') || p.get('max_price')) n += 1;
      // layered-nav style query params (filter_*) add to the count if widgets didn't expose .chosen
      p.forEach(function (v, k) { if (/^filter_/.test(k) && v) n += 1; });
    } catch (e) {}
    return n;
  }

  // ---------- build the sticky bar ----------
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
  root.classList.add('cf-filters-on');  // now safe to hide the original result-count/ordering

  // ---------- scrim + two sheets ----------
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

  // ---- populate FILTER sheet: MOVE the real widgets in (preserves their JS bindings) ----
  if (filterSheet) {
    var fbody = filterSheet.querySelector('.cf-filters-body');
    if (filterWidgets.length) {
      filterWidgets.forEach(function (w) { fbody.appendChild(w); });  // move (not clone) keeps YITH/price-slider events live
    } else {
      fbody.innerHTML = '<p class="cf-filters-empty">No filters available for this view.</p>';
    }
  }

  // ---- populate SORT sheet from the real <select> options ----
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
          // only submit if nothing else navigated; harmless on ajax themes
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

  // ---------- open / close plumbing ----------
  var openSheet = null;
  function openOne(which) {
    var s = which === 'sort' ? sortSheet : filterSheet;
    if (!s) return;
    openSheet = s;
    scrim.classList.add('cf-open');
    s.classList.add('cf-open');
    d.documentElement.style.overflow = 'hidden';   // lock background scroll while sheet is open
  }
  function closeAll() {
    scrim.classList.remove('cf-open');
    if (sortSheet) sortSheet.classList.remove('cf-open');
    if (filterSheet) filterSheet.classList.remove('cf-open');
    d.documentElement.style.overflow = '';
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
  if (!root.classList.contains('cf-app')) return;          // not app mode -> do nothing
  if (d.querySelector('.cf-grg-pillwrap, .cf-grg-sheet')) return; // idempotent

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
      shopMine.style.display = '';
      shopMine.href = g.link || '/shop/?source=app';
    } else {
      pillBtn.innerHTML = SVG.bike +
        '<span class="cf-grg-lbl"><b>Shop by bike</b> <span class="cf-grg-muted">— find parts that fit</span></span>' +
        SVG.chev;
      shopMine.style.display = 'none';
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
    buildPill();
    applyFitsHints();

    // first-app-visit: auto-open the picker ONCE if no bike is set yet
    try {
      if (!getGarage() && localStorage.getItem(SEEN) !== '1') {
        localStorage.setItem(SEEN, '1');
        // small delay so the base shell paints first; non-blocking
        setTimeout(function () { if (!getGarage()) openSheet(true); }, 650);
      }
    } catch (e) {}

    // keep the pill offset correct on resize/orientation change
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(measureHeaderTop, 150);
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
  if (!root.classList.contains('cf-app')) return;          // not app mode → do nothing
  if (!d.body || !d.body.classList.contains('single-product')) return; // PDP only
  if (root.classList.contains('cf-pdpplus')) return;       // idempotent: already ran
  root.classList.add('cf-pdpplus');

  function init() {
    finance();
    reviewsAnchor();
    // (b) the graphite tile is pure CSS (scoped to html.cf-app.cf-pdpplus) — nothing to build here.
  }

  // ---------- (a) surface existing financing message up near the price ----------
  // Affirm / Klarna / Afterpay / Sezzle already render on the site. We RELOCATE/CLONE
  // whatever WooCommerce already prints — never hard-code a $ amount or term.
  function finance() {
    var price = d.querySelector('.entry-summary .price, .summary .price, p.price');
    if (!price) return;
    if (d.querySelector('.cf-pdpplus-fin')) return;        // idempotent

    // Common BNPL messaging containers across gateways/plugins (defensive list).
    // ASSUMPTION: the site uses one of these standard messaging widgets; if none of
    // these match, we render NOTHING (no fabricated "as low as" text).
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

    // Fallback: a text node lower in the summary that already says "as low as / mo"
    // — only if it lives BELOW the price (i.e. something to surface UP). Still the
    // SITE'S own text; we never write our own numbers.
    if (!src) {
      var summary = d.querySelector('.entry-summary, .summary') || d.body;
      var cands = summary.querySelectorAll('p, div, span');
      for (var i = 0; i < cands.length; i++) {
        var el = cands[i];
        if (el.closest('.cf-pdpplus-fin') || el.closest('.cf-stickyatc')) continue;
        var t = (el.textContent || '').toLowerCase();
        if (/as low as|\/\s*mo\b|month with (affirm|klarna|afterpay|sezzle)|interest[- ]free/.test(t)
            && el.children.length <= 3 && t.length < 160) {
          // must sit visually below the price to be worth relocating up
          if (price.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) { src = el; break; }
        }
      }
    }

    if (!src) return;                                      // nothing renders → render nothing

    // Clone (don't move) so we don't break the gateway's own bindings/checkout flow.
    var box = d.createElement('div');
    box.className = 'cf-pdpplus-fin';
    var clone = src.cloneNode(true);
    // strip ids on the clone to avoid duplicate-id collisions with the live widget
    clone.removeAttribute && clone.removeAttribute('id');
    var withIds = clone.querySelectorAll ? clone.querySelectorAll('[id]') : [];
    for (var k = 0; k < withIds.length; k++) withIds[k].removeAttribute('id');
    box.appendChild(clone);

    // place directly under the price
    if (price.parentNode) price.parentNode.insertBefore(box, price.nextSibling);
  }

  // ---------- (c) small "Reviews" jump anchor near the title ----------
  function reviewsAnchor() {
    var reviews = d.querySelector('#reviews, .woocommerce-Reviews');
    if (!reviews) return;                                  // no reviews section → nothing
    var title = d.querySelector('.product_title.entry-title, .product_title');
    if (!title) return;
    if (d.querySelector('.cf-pdpplus-reviews')) return;    // idempotent

    var btn = d.createElement('button');
    btn.type = 'button';
    btn.className = 'cf-pdpplus-reviews';
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
      + '<span><u>Reviews</u></span>';

    btn.addEventListener('click', function () {
      // if the WooCommerce reviews tab is collapsed behind the tab nav, open it first
      var tabLink = d.querySelector('.reviews_tab a, li.reviews_tab a, [href="#tab-reviews"]');
      if (tabLink) {
        try { tabLink.click(); } catch (e) {}
      }
      var target = d.querySelector('#reviews, .woocommerce-Reviews') || reviews;
      try { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      catch (e) { target.scrollIntoView(); }
    });

    title.parentNode.insertBefore(btn, title.nextSibling);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;          // not app mode -> do nothing
  if (!d.body || !d.body.classList.contains('woocommerce-account')) return; // My Account only
  if (d.querySelector('.cf-acct-skinned')) return;         // idempotent

  function init() {
    var body = d.body;
    if (!body.classList.contains('woocommerce-account')) return;
    if (d.querySelector('.cf-acct-skinned')) return;

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
    // Goaffpro typically injects a My-Account endpoint; we only match an EXISTING link.
    var AFF_RE = /goaffpro|affiliate|\baffil|referr?al|partner[\s-]*program|ambassador/i;

    if (nav) {
      var links = nav.querySelectorAll('li a');
      Array.prototype.forEach.call(links, function (a) {
        var li = a.closest('li');
        // derive endpoint key from the li's WooCommerce class
        var ep = 'generic';
        var cls = (li && li.className) || '';
        var m = cls.match(/woocommerce-MyAccount-navigation-link--([a-z0-9-]+)/i);
        if (m) ep = m[1].toLowerCase();

        var label = (a.textContent || '').trim();
        var href = a.getAttribute('href') || '';

        // affiliate detection: only on a REAL existing link, by class/label/href
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
    // WooCommerce dashboard renders "Hello <name>" in .woocommerce-MyAccount-content;
    // pull the first name from there if present. Never fabricate.
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
        '<div class="cf-acct-avatar">' + (initial || ICON['edit-account']) + '</div>' +
        '<div>' +
          '<div class="cf-acct-hi">' + (name ? 'Signed in as' : 'My Account') + '</div>' +
          '<div class="cf-acct-name">' + (name ? esc(name) : 'Account') + '</div>' +
        '</div>';
      nav.parentNode.insertBefore(head, nav);
    }

    // --- iOS-friendly username/login fields ---
    // username on login + register, plus account-details first/last (autocap off on user, sentence on names is default)
    var unameSel = '#username, #reg_username, input[name="username"], input[name="email"][autocomplete="username"]';
    Array.prototype.forEach.call(d.querySelectorAll(unameSel), function (inp) {
      inp.setAttribute('autocapitalize', 'off');
      inp.setAttribute('autocorrect', 'off');
      inp.setAttribute('spellcheck', 'false');
    });
    // email fields: also kill autocap/correct + correct keyboard
    Array.prototype.forEach.call(d.querySelectorAll('input[type="email"], #reg_email'), function (inp) {
      inp.setAttribute('autocapitalize', 'off');
      inp.setAttribute('autocorrect', 'off');
      inp.setAttribute('spellcheck', 'false');
      inp.setAttribute('inputmode', 'email');
    });

    d.body.classList.add('cf-acct-skinned'); // mark done (also acts as idempotency guard token)
    // also drop a marker node in case body class is stripped by a theme refresh
    var mark = d.createElement('span');
    mark.className = 'cf-acct-skinned';
    mark.style.display = 'none';
    d.body.appendChild(mark);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;
  /* The garage module measures header.site-header and writes --cf-grg-top.
     Once the header module hides that element, --cf-grg-top resolves to 0 and
     the pill rides up under the fixed app bar. Pin --cf-grg-top to the app
     header height whenever the app header is live (covers garage's resize
     re-measure too via a short interval that self-clears once stable). */
  function pin() {
    if (!root.classList.contains('cf-has-apphdr')) return false;
    // match header.html's fixed bar height (52px + top safe-area) via a CSS calc
    root.style.setProperty('--cf-grg-top', 'calc(52px + env(safe-area-inset-top, 0px))');
    return true;
  }
  function run() {
    // try now, and again shortly after (header + garage both mount on DOM ready)
    pin();
    var n = 0, iv = setInterval(function () {
      n++;
      if (pin() || n > 20) clearInterval(iv);   // ~2s max, stops once header is live
    }, 100);
    window.addEventListener('resize', pin, { passive: true });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run);
  else run();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;            // not app mode -> nothing
  if (!d.body || !d.body.classList.contains('single-product')) return; // PDP only
  if (root.classList.contains('cf-trust-done')) return;      // idempotent: already ran

  /* =======================================================================
     CF_POLICY — the ONLY place real policy facts live. EMPTY by default so
     nothing is fabricated. Joaquin: fill `label` with the VERIFIED term and
     `slug` with the VERIFIED live policy-page path, then redeploy. A chip
     with an empty `label` is NOT rendered (no guessed wording, no dead link).

     Per build_log.md (2026-06-14 / 2026-06-15): returns + warranty policy was
     still PENDING from Joaquin. The task brief cited "14-day returns / 12-month
     warranty per the live policy pages" — those exact terms and page slugs are
     UNVERIFIED from this environment (SiteGround WAF 403s automated reads), so
     they are left as placeholders rather than hard-coded. Confirm on the live
     site, then paste the confirmed strings below.
     ======================================================================= */
  var CF_POLICY = {
    returns: {
      // e.g. '14-Day Returns'   /* TODO: Joaquin to confirm exact term */
      label: '',
      // e.g. '/returns/' or '/refund-and-returns-policy/'  /* TODO: confirm live slug */
      slug:  ''
    },
    warranty: {
      // e.g. '12-Month Warranty'  /* TODO: Joaquin to confirm exact term */
      label: '',
      // e.g. '/warranty/'  /* TODO: Joaquin to confirm live slug */
      slug:  ''
    }
  };

  // append ?source=app to internal policy links so the user stays in app mode
  function appUrl(slug) {
    if (!slug) return '';
    var sep = slug.indexOf('?') === -1 ? '?' : '&';
    return slug + sep + 'source=app';
  }

  var IC = {
    fits:   '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    returns:'<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',
    warranty:'<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z"/><path d="m9.5 12 1.8 1.8L15 10"/></svg>',
    secure: '<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    genuine:'<svg class="cf-trust-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="m9 13-2 7 5-3 5 3-2-7"/></svg>'
  };

  var go = '<span class="cf-trust-go" aria-hidden="true">&rsaquo;</span>';

  // Build the chip set. Always-true signals render now; policy-link chips render
  // ONLY when CF_POLICY supplies a verified label (no fabricated wording).
  function buildChips() {
    var chips = [];

    // 1) Fitment — the #1 question for moto parts. Always true ("fits your bike"
    //    is the product's own job; no policy claim, no invented guarantee term).
    chips.push(
      '<span class="cf-trust-chip cf-trust-key">' + IC.fits +
      'Fits your bike <span class="cf-trust-sub">&middot; verified parts</span></span>'
    );

    // 2) Returns — linkable, only if a verified term + slug exist.
    if (CF_POLICY.returns.label) {
      var rHref = appUrl(CF_POLICY.returns.slug);
      if (rHref) {
        chips.push('<a class="cf-trust-chip" href="' + rHref + '">' + IC.returns +
          esc(CF_POLICY.returns.label) + go + '</a>');
      } else {
        chips.push('<span class="cf-trust-chip">' + IC.returns + esc(CF_POLICY.returns.label) + '</span>');
      }
    }

    // 3) Warranty — linkable, only if a verified term + slug exist.
    if (CF_POLICY.warranty.label) {
      var wHref = appUrl(CF_POLICY.warranty.slug);
      if (wHref) {
        chips.push('<a class="cf-trust-chip" href="' + wHref + '">' + IC.warranty +
          esc(CF_POLICY.warranty.label) + go + '</a>');
      } else {
        chips.push('<span class="cf-trust-chip">' + IC.warranty + esc(CF_POLICY.warranty.label) + '</span>');
      }
    }

    // 4) Genuine carbon — true brand signal (the store sells real carbon fiber parts).
    chips.push('<span class="cf-trust-chip">' + IC.genuine + 'Genuine carbon fiber</span>');

    // 5) Secure checkout — always true (HTTPS + Woo/Stripe). Static.
    chips.push('<span class="cf-trust-chip">' + IC.secure + 'Secure checkout</span>');

    return chips.join('');
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function init() {
    var html = buildChips();

    // Prefer to UPGRADE the base v2 row in place (no duplicate row).
    var row = d.querySelector('.cf-trustrow');
    if (row) {
      if (row.classList.contains('cf-trust-up')) { root.classList.add('cf-trust-done'); return; }
      row.classList.add('cf-trust-up');
      row.innerHTML = html;
      root.classList.add('cf-trust-done');
      return;
    }

    // Base row not present (base not shipped yet) -> build our own after form.cart.
    var form = d.querySelector('form.cart');
    var anchor = form
      || d.querySelector('.entry-summary .price, .summary .price, p.price')
      || d.querySelector('.product_title.entry-title, .product_title');
    if (!anchor || !anchor.parentNode) return;                // defensive: nowhere to mount
    if (d.querySelector('.cf-trustrow.cf-trust-up')) { root.classList.add('cf-trust-done'); return; }

    var own = d.createElement('div');
    own.className = 'cf-trustrow cf-trust-up';
    own.innerHTML = html;
    anchor.parentNode.insertBefore(own, anchor.nextSibling);
    root.classList.add('cf-trust-done');
  }

  // The base builds its .cf-trustrow at DOMContentLoaded; run on the same tick,
  // then a short retry in case the base mounts slightly after us.
  function start() {
    init();
    if (!root.classList.contains('cf-trust-done')) {
      var tries = 0;
      var iv = setInterval(function () {
        init();
        if (root.classList.contains('cf-trust-done') || ++tries > 10) clearInterval(iv);
      }, 200);
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start);
  else start();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;            // not app mode -> do nothing
  if (root.classList.contains('cf-paytrust')) return;        // idempotent: module already ran
  root.classList.add('cf-paytrust');

  /* ---- inline-SVG / type marks for ONLY the live payment methods ---- */
  // Recognizable but trademark-safe: clean type-in-pill for card schemes,
  // simple iconographic marks for wallets/BNPL. No fabricated logo artwork.
  var MARK = {
    visa:    { cls: 'cf-pt-visa',   html: 'VISA' },
    mc:      { cls: 'cf-pt-mc',     html:
      '<svg viewBox="0 0 40 24" aria-hidden="true">'
        + '<circle cx="16" cy="12" r="9" fill="#A8A29E"></circle>'
        + '<circle cx="24" cy="12" r="9" fill="#E10600"></circle>'
        + '<path d="M20 5.2a9 9 0 0 0 0 13.6 9 9 0 0 0 0-13.6Z" fill="#E8E4E0"></path>'
      + '</svg>', label: 'Mastercard' },
    amex:    { cls: 'cf-pt-amex',   html: 'AMEX' },
    disc:    { cls: 'cf-pt-disc',   html: 'DISCOVER' },
    gpay:    { cls: 'cf-pt-gpay',   label: 'Google Pay', html:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#A8A29E" d="M12 10.2v3.7h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3.1c1.8-1.7 2.8-4.1 2.8-7 0-.7-.06-1.3-.18-1.9H12Z"/><path fill="#E8E4E0" d="M12 21c2.5 0 4.6-.83 6.1-2.2l-3.1-2.4c-.85.57-1.95.9-3 .9-2.3 0-4.3-1.55-5-3.65H3.8v2.5A9 9 0 0 0 12 21Z"/></svg>'
      + '<span style="margin-left:3px">Pay</span>' },
    amzn:    { cls: 'cf-pt-amzn',   html:
      '<span>amazon</span><svg viewBox="0 0 30 8" style="height:8px;margin-left:3px" aria-hidden="true"><path fill="#E10600" d="M2 6c5 3 12 3 17 0" stroke="#E10600" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg><span style="margin-left:2px">pay</span>', label: 'Amazon Pay' },
    affirm:  { cls: 'cf-pt-affirm', html: 'affirm', label: 'Affirm' },
    klarna:  { cls: 'cf-pt-klarna', html: 'Klarna', label: 'Klarna' }
  };
  // order shown (cards first, then wallets, then BNPL) — LIVE methods only
  var ORDER = ['visa', 'mc', 'amex', 'disc', 'gpay', 'amzn', 'affirm', 'klarna'];

  var LOCK_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="4.5" y="10.5" width="15" height="10" rx="2.2"></rect>'
    + '<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path>'
    + '<circle cx="12" cy="15.2" r="1.3" fill="currentColor" stroke="none"></circle></svg>';

  function secureLine() {
    var s = d.createElement('span');
    s.className = 'cf-paytrust-secure';
    s.innerHTML = LOCK_SVG
      + '<span>Secure SSL checkout '
      + '<span class="cf-paytrust-sub">&middot; encrypted payment</span></span>';
    return s;
  }

  function marksRail() {
    var rail = d.createElement('div');
    rail.className = 'cf-paytrust-marks';
    ORDER.forEach(function (k) {
      var m = MARK[k]; if (!m) return;
      var pill = d.createElement('span');
      pill.className = 'cf-paytrust-mark ' + m.cls;
      pill.innerHTML = m.html;
      pill.setAttribute('role', 'img');
      pill.setAttribute('aria-label', m.label || (k === 'visa' ? 'Visa' : k === 'amex' ? 'American Express' : k === 'disc' ? 'Discover' : k));
      rail.appendChild(pill);
    });
    return rail;
  }

  /* ---- (a) PDP: badge row directly under the Add-to-Cart area ---- */
  function buildPDP() {
    if (!d.body || !d.body.classList.contains('single-product')) return;
    if (d.querySelector('.cf-paytrust-pdp')) return;          // idempotent

    // anchor: the base trust row (after form.cart). Fall back to form.cart, then summary.
    var anchor = d.querySelector('.cf-trustrow')
              || d.querySelector('form.cart')
              || d.querySelector('.entry-summary, .summary');
    if (!anchor || !anchor.parentNode) return;

    var box = d.createElement('div');
    box.className = 'cf-paytrust cf-paytrust-pdp';
    box.appendChild(secureLine());
    box.appendChild(marksRail());

    // insert right AFTER the anchor (i.e. just below the base trust row / ATC)
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
  }

  /* ---- (b) in-app footer payment strip (mirrors the website footer badges) ---- */
  function buildFooterStrip() {
    if (d.querySelector('.cf-paytrust-foot')) return;         // idempotent

    var strip = d.createElement('div');
    strip.className = 'cf-paytrust cf-paytrust-foot';
    strip.setAttribute('role', 'contentinfo');
    strip.appendChild(secureLine());
    strip.appendChild(marksRail());
    var note = d.createElement('div');
    note.className = 'cf-paytrust-note';
    note.textContent = 'Checkout is SSL-encrypted. We never store your full card details.';
    strip.appendChild(note);

    // Prefer placing at the end of the main content column so it reads as a footer.
    // The base hid footer.site-footer; we don't reuse it. Pick a sensible content tail.
    var host = d.querySelector('main#main, main.site-main, #content .ast-container, #primary')
            || d.querySelector('#content')
            || d.body;

    // Avoid sitting on top of the PDP sticky ATC band: it's fixed (not in flow), and
    // the base reserves body bottom-padding, so normal-flow append is safe above the tab bar.
    host.appendChild(strip);
  }

  function init() {
    buildPDP();         // no-ops off PDP
    buildFooterStrip(); // every app page
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;                 // not app mode -> nothing
  if (!d.body || !d.body.classList.contains('single-product')) return; // PDP only
  if (root.classList.contains('cf-fit')) return;                  // idempotent
  root.classList.add('cf-fit');

  /* ---- inlined READ-ONLY bike taxonomy (model + gen slugs). Mirrors
     modules/_bike_taxonomy.json. Used to recognize which category/attribute
     slugs are BIKE fitment slugs (vs part-type/material categories). ---- */
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

  /* Build lookup sets:
       BIKE_SLUGS   : every slug that denotes a bike (model OR gen)  -> truthy
       GEN_TO_MODEL : gen slug -> model slug
       MODEL_GENS   : model slug -> [gen slugs]   (for "model match" reasoning) */
  var BIKE_SLUGS = {}, GEN_TO_MODEL = {}, MODEL_GENS = {};
  TAX.brands.forEach(function (b) {
    (b.children || []).forEach(function (m) {
      BIKE_SLUGS[m.slug] = 1; MODEL_GENS[m.slug] = [];
      (m.gens || []).forEach(function (g) {
        BIKE_SLUGS[g.slug] = 1; GEN_TO_MODEL[g.slug] = m.slug; MODEL_GENS[m.slug].push(g.slug);
      });
    });
  });

  /* ---------- saved garage bike (same storage the garage module writes) ---------- */
  function getGarage() {
    try { var v = JSON.parse(localStorage.getItem('cf_garage') || 'null');
      if (v && v.model) return v; } catch (e) {}
    return null;
  }

  /* ---------- read THIS product's fitment slug set (per-product, authoritative) ----------
     Source priority:
       (1) pa_fits_model attribute terms — the global attribute the data backfill adds.
           Found as `product_<sanitized-attr>-<termslug>` body classes, in the
           variations JSON, or in the additional-information attributes table.
       (2) product_cat-<slug> body classes — every category incl. the bike model/gen.
     We keep ONLY slugs that are recognized bike slugs (model or gen) so part-type and
     material categories never pollute the fitment decision. */
  function productBikeSlugs() {
    var found = {};

    // (1a) body classes: product_cat-<slug> and any product_<attr>-<slug>
    String(d.body.className).split(/\s+/).forEach(function (c) {
      var m = c.match(/^product[_-]cat[_-](.+)$/i)            // product_cat-s1000rr-2020-2022
            || c.match(/^product[_-]pa[_-]fits[_-]model[_-](.+)$/i) // pa_fits_model term class
            || c.match(/^product[_-](?:pa[_-])?fits[_-]model[_-](.+)$/i);
      if (m && BIKE_SLUGS[m[1].toLowerCase()]) found[m[1].toLowerCase()] = 1;
    });

    // (1b) variations form JSON sometimes carries attribute slugs
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

    // (1c) additional-information attributes table (pa_fits_model row),
    //      and the variation <select> options for a fits-model attribute
    try {
      d.querySelectorAll(
        '.woocommerce-product-attributes-item--attribute_pa_fits_model a,' +
        '.woocommerce-product-attributes-item--attribute_pa_fits_model td,' +
        'select#pa_fits_model option, select[name="attribute_pa_fits_model"] option,' +
        '[data-attribute_name="attribute_pa_fits_model"] li'
      ).forEach(function (el) {
        var slug = (el.getAttribute && el.getAttribute('value')) || '';
        slug = (slug || el.textContent || '').toLowerCase().trim();
        // match either the raw term slug or normalize the visible name to a known slug
        if (BIKE_SLUGS[slug]) { found[slug] = 1; return; }
        var norm = slugify(slug);
        if (BIKE_SLUGS[norm]) found[norm] = 1;
        else matchNameToSlug(el.textContent || '', found);
      });
    } catch (e) {}

    // (2) breadcrumb anchors that point at a bike product-category (defensive backup)
    try {
      d.querySelectorAll('.woocommerce-breadcrumb a, nav.woocommerce-breadcrumb a, .ast-breadcrumbs a, .yoast-breadcrumb a')
        .forEach(function (a) {
          var bm = (a.getAttribute('href') || '').match(/\/product-category\/([^\/?#]+)/i);
          if (bm && BIKE_SLUGS[bm[1].toLowerCase()]) found[bm[1].toLowerCase()] = 1;
        });
    } catch (e) {}

    return found;
  }

  function slugify(s) {
    return String(s).toLowerCase().trim()
      .replace(/\(([^)]+)\)/g, '-$1')   // "(2020-2022)" -> "-2020-2022"
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  // best-effort: map a visible attribute value (e.g. "S1000RR (2020-2022)") to a known slug
  function matchNameToSlug(name, out) {
    var s = slugify(name);
    for (var slug in BIKE_SLUGS) { if (s && (s === slug || s.indexOf(slug) === 0)) { out[slug] = 1; return; } }
  }

  /* ---------- decide fit between saved bike and product's slug set ---------- */
  // savedGenSlug present -> exact gen match wins; else fall back to model-level match.
  function decideFit(g, slugSet) {
    var keys = Object.keys(slugSet);
    if (!keys.length) return 'unknown';          // product has no readable bike data -> stay silent

    var savedGen = g.slug && BIKE_SLUGS[g.slug] ? g.slug : null;
    var savedModel = savedGen ? (GEN_TO_MODEL[savedGen] || null)
                              : (g.modelSlug && BIKE_SLUGS[g.modelSlug] ? g.modelSlug : null);
    // last resort: derive model slug from the saved bike's model name
    if (!savedModel && g.model) { var ms = slugify(g.model); if (BIKE_SLUGS[ms]) savedModel = ms; }

    // exact gen match
    if (savedGen && slugSet[savedGen]) return 'fits';
    // model-level match: product lists the saved model itself, or any gen of that model
    if (savedModel) {
      if (slugSet[savedModel]) return 'fits';
      var gens = MODEL_GENS[savedModel] || [];
      for (var i = 0; i < gens.length; i++) if (slugSet[gens[i]]) return 'fits';
    }
    // product carries bike fitment data, but none of it is the saved bike -> honest warning
    return 'no';
  }

  /* ---------- icons ---------- */
  var SVG = {
    yes: '<svg class="cf-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.4 2.4 4.6-4.8"/></svg>',
    no:  '<svg class="cf-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4.5"/><path d="M12 17.2h.01"/></svg>',
    ask: '<svg class="cf-fit-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.2"/><circle cx="18.5" cy="17.5" r="3.2"/><path d="M5.5 17.5 9 9h4l2 4h3.5"/><path d="M9 9 8 6H6"/></svg>'
  };

  /* short gen label: "S1000RR (2020-2022)" -> "2020-2022" */
  function shortGen(name) { var m = String(name || '').match(/\(([^)]+)\)/); return m ? m[1] : ''; }
  // "2021 BMW S1000RR" style label from the saved garage entry (we only know the
  // year RANGE, not a single model year, so present the range honestly).
  function bikeLabel(g) {
    var parts = [];
    if (g.brand) parts.push(g.brand);
    parts.push(g.model || g.gen || 'your bike');
    var yr = shortGen(g.gen);
    return (yr ? esc(yr) + ' ' : '') + esc(parts.join(' '));
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ---------- open the garage picker (reuse the garage module's sheet) ---------- */
  function openGarage() {
    // the garage module owns the bottom-sheet; click its pill to open it.
    var pill = d.querySelector('.cf-grg-pill');
    if (pill) { pill.click(); return; }
    // fallback: route to shop-by-bike if the garage pill isn't on this page
    location.href = '/shop/?source=app';
  }

  /* ---------- build / refresh the fitment line ---------- */
  function build() {
    // remove the garage module's simpler PDP badge so there's ONE authoritative line
    var dup = d.querySelector('.cf-grg-fits-pdp');
    if (dup && dup.parentNode) dup.parentNode.removeChild(dup);

    var anchor = d.querySelector('.entry-summary .price, .summary .price, p.price')
              || d.querySelector('.product_title.entry-title, .product_title');
    if (!anchor) return;

    var g = getGarage();
    var slugSet = productBikeSlugs();
    var hasBikeData = Object.keys(slugSet).length > 0;

    var state, head, sub, action = '';

    if (!g) {
      // no saved bike. Only invite confirmation if this is actually a bike-specific part.
      if (!hasBikeData) { removeLine(); return; }   // universal/unknown part -> stay silent
      state = 'ask';
      head = 'Set your bike to confirm fitment';
      sub = 'See instantly whether this part fits before you buy.';
      action = '<button type="button" class="cf-fit-act">Set bike</button>';
    } else {
      var verdict = decideFit(g, slugSet);
      if (verdict === 'unknown') { removeLine(); return; } // no readable per-product data -> silent
      if (verdict === 'fits') {
        state = 'yes';
        head = '✓ Fits your ' + bikeLabel(g);
        sub = 'Confirmed from this product’s fitment list.';
        action = '<button type="button" class="cf-fit-act">Change bike</button>';
      } else {
        state = 'no';
        head = '⚠ Not listed for your ' + bikeLabel(g);
        sub = 'This part isn’t on the fitment list for your bike — verify before ordering.';
        action = '<button type="button" class="cf-fit-act">Change bike</button>';
      }
    }

    var icon = state === 'yes' ? SVG.yes : (state === 'no' ? SVG.no : SVG.ask);
    var line = d.querySelector('.cf-fit-line');
    if (!line) {
      line = d.createElement('div');
      line.className = 'cf-fit-line';
      // place directly under the price/title anchor
      anchor.parentNode.insertBefore(line, anchor.nextSibling);
    }
    line.className = 'cf-fit-line cf-fit-' + state;
    line.setAttribute('role', state === 'no' ? 'alert' : 'status');
    line.innerHTML = icon +
      '<div class="cf-fit-body"><span class="cf-fit-head">' + head + '</span>' +
      '<span class="cf-fit-sub">' + sub + '</span></div>' + action;

    var act = line.querySelector('.cf-fit-act');
    if (act) act.addEventListener('click', openGarage);
  }

  function removeLine() {
    var line = d.querySelector('.cf-fit-line');
    if (line && line.parentNode) line.parentNode.removeChild(line);
  }

  function init() {
    build();
    // re-evaluate after the garage paints its pill/badge (it runs in the same blob),
    // and whenever the bike changes via the garage sheet (storage event from other tabs,
    // plus a short re-check since same-tab localStorage writes don't fire 'storage').
    setTimeout(build, 300);
    window.addEventListener('storage', function (e) { if (e.key === 'cf_garage') build(); });
    // same-tab: the garage closes its sheet then navigates on select, so a returning
    // PDP re-runs init anyway. Also re-check on focus (user may change bike, come back).
    window.addEventListener('focus', function () { setTimeout(build, 50); }, { passive: true });
    // WooCommerce ajax (variations) can swap summary nodes — re-apply defensively.
    if (window.jQuery) {
      window.jQuery(d.body).on('wc_fragments_refreshed wc_fragments_loaded found_variation reset_data', function () {
        setTimeout(build, 60);
      });
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;            // not app mode -> do nothing
  if (!d.body) return;
  var isCart = d.body.classList.contains('woocommerce-cart');
  var isCheckout = d.body.classList.contains('woocommerce-checkout');
  // order-received (thank-you) is also woocommerce-checkout — skip it, nothing to pin/guest there.
  if (isCheckout && (d.body.classList.contains('woocommerce-order-received')
                     || d.querySelector('.woocommerce-order'))) { isCheckout = false; }
  if (!isCart && !isCheckout) return;                         // not a target page
  if (root.classList.contains('cf-cartco')) return;          // idempotent
  root.classList.add('cf-cartco');

  var jq = window.jQuery || null;

  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function el(html){ var t = d.createElement('div'); t.innerHTML = html.trim(); return t.firstChild; }

  /* ---------- (1) 3-step progress header ---------- */
  // step index: cart=0, checkout(info/pay)=1. We show 3 dots Cart > Info > Pay.
  // On checkout, "Info" is current (1) and "Cart" is done (0); "Pay" surfaces as
  // upcoming. We do NOT try to detect intra-checkout sub-steps (single-page Woo).
  var STEP_DONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 6"/></svg>';
  function buildSteps() {
    if (d.querySelector('.cf-cartco-steps')) return;
    var cur = isCart ? 0 : 1;
    var labels = ['Cart', 'Info', 'Pay'];
    var wrap = d.createElement('div');
    wrap.className = 'cf-cartco-steps';
    wrap.setAttribute('aria-label', 'Checkout progress');
    for (var i = 0; i < 3; i++) {
      var cls = 'cf-cartco-step' + (i < cur ? ' cf-done' : (i === cur ? ' cf-now' : ''));
      var dot = (i < cur) ? STEP_DONE : String(i + 1);
      wrap.appendChild(el(
        '<div class="' + cls + '">' +
          '<div class="cf-cartco-dot">' + dot + '</div>' +
          '<div class="cf-cartco-label">' + labels[i] + '</div>' +
        '</div>'
      ));
    }
    // mount at the very top of the woocommerce content
    var host = d.querySelector('.woocommerce') || d.querySelector('.entry-content') || d.querySelector('main');
    if (host) host.insertBefore(wrap, host.firstChild);
  }

  /* ---------- (6) relocate express-pay (wallets / Stripe PRB) to the TOP ---------- */
  // We MOVE the gateway's own Payment Request Button element into a top slot.
  // Defensive selector list across Stripe gateways + common wallet wrappers.
  // We never create a wallet button — only relocate one that ALREADY renders.
  var EXPRESS_SEL = [
    // Stripe (official + express element)
    '#wc-stripe-payment-request-wrapper',
    '#wc-stripe-express-checkout-element',
    '.wc-stripe-payment-request-wrapper',
    '.wc-stripe-product-payment-request-button',
    '#payment-request-button',
    '.payment-request-button',
    // WooPayments
    '#wcpay-payment-request-wrapper',
    '.wcpay-payment-request-wrapper',
    // Block checkout express area
    '.wc-block-checkout__express-checkout-block',
    '.wc-block-components-express-payment',
    '.wc-block-components-express-payment__event-buttons',
    // PayPal (PPCP smart buttons)
    '#ppc-button',
    '.ppc-button-wrapper',
    '.ppcp-button-container',
    '#ppcp-express-checkout',
    // generic
    '.woocommerce-express-payment-buttons'
  ].join(',');
  var EXPRESS_DIVIDER_SEL = '.wc-stripe-payment-request-wrapper + .wc-stripe-payment-request--separator, .wc-stripe-payment-request-button-separator';

  function relocateExpress() {
    if (d.querySelector('.cf-cartco-express')) return;        // already mounted
    var src = null;
    try { src = d.querySelector(EXPRESS_SEL); } catch (e) { src = null; }
    if (!src) return false;                                   // no wallet rendered -> render nothing
    // skip empty wrappers (gateway present but no wallet available on this device)
    if (!src.querySelector('button, [role="button"], iframe, .StripeElement')) return false;

    var box = d.createElement('div');
    box.className = 'cf-cartco-express';
    var cap = d.createElement('div');
    cap.className = 'cf-cartco-express-cap';
    cap.textContent = 'Express checkout';
    var host = d.createElement('div');
    host.className = 'cf-cartco-express-host';
    box.appendChild(cap); box.appendChild(host);

    // move the live wallet element (preserves the gateway's bindings)
    host.appendChild(src);

    // mount at the very top of the form column
    var anchor = d.querySelector('form.checkout, .woocommerce-checkout, .woocommerce') ;
    if (!anchor) return false;
    anchor.parentNode.insertBefore(box, anchor);

    // "or pay another way" divider beneath
    var or = d.createElement('div');
    or.className = 'cf-cartco-or';
    or.appendChild(d.createTextNode('or pay another way'));
    box.parentNode.insertBefore(or, box.nextSibling);

    // remove the gateway's own now-orphaned separator if present
    try { var sep = d.querySelector(EXPRESS_DIVIDER_SEL); if (sep) sep.style.display = 'none'; } catch(e){}
    return true;
  }

  /* ---------- (7) guest-first banner above login ---------- */
  function guestFirst() {
    if (!isCheckout) return;
    if (d.querySelector('.cf-cartco-guest')) return;
    // The Woo "Returning customer? Click here to login" toggle:
    var loginToggle = d.querySelector('.woocommerce-form-login-toggle, .woocommerce-info .showlogin');
    var loginForm = d.querySelector('form.woocommerce-form-login, .woocommerce-form-login');
    // Only render guest framing when a login affordance EXISTS (i.e. guest is allowed
    // and an optional login is offered). If checkout already forces login, do nothing.
    if (!loginToggle && !loginForm) return;

    var banner = el(
      '<div class="cf-cartco-guest">' +
        '<div class="cf-cartco-guest-ico" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>' +
        '</div>' +
        '<div>' +
          '<div class="cf-cartco-guest-t">Checkout as guest</div>' +
          '<div class="cf-cartco-guest-s">No account needed &mdash; just fill in your details below.</div>' +
        '</div>' +
        '<button type="button" class="cf-cartco-guest-login">Log in</button>' +
      '</div>'
    );

    // place ABOVE the login toggle/form
    var ref = loginToggle || loginForm;
    ref.parentNode.insertBefore(banner, ref);

    // wire the "Log in" button to Woo's own toggle (don't reimplement)
    var btn = banner.querySelector('.cf-cartco-guest-login');
    btn.addEventListener('click', function () {
      var showlink = d.querySelector('.woocommerce-info .showlogin, .woocommerce-form-login-toggle a');
      if (showlink) { try { showlink.click(); } catch (e) {} }
      var form = d.querySelector('form.woocommerce-form-login, .woocommerce-form-login');
      if (form) { try { form.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { form.scrollIntoView(); } }
    });
  }

  /* ---------- (9) trust strip near payment (generic, no invented numbers) ---------- */
  function trustStrip() {
    if (d.querySelector('.cf-cartco-trust')) return;
    var anchor = d.querySelector('#payment, .woocommerce-checkout-payment, .cart_totals, .wc-proceed-to-checkout');
    if (!anchor) return;
    var strip = el(
      '<div class="cf-cartco-trust">' +
        '<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>Secure checkout</span>' +
        '<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z"/></svg>Encrypted payment</span>' +
        '<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>Genuine carbon fiber</span>' +
      '</div>'
    );
    // place after totals (cart) or after payment box (checkout)
    if (anchor.parentNode) anchor.parentNode.insertBefore(strip, anchor.nextSibling);
  }

  /* ---------- (10) pinned full-width red CTA proxy ---------- */
  var pinEl = null, pinAmtEl = null, realBtn = null;

  function findRealBtn() {
    if (isCart) {
      return d.querySelector('.wc-proceed-to-checkout a.checkout-button, a.checkout-button');
    }
    // checkout: the Place Order submit
    return d.querySelector('#place_order, button#place_order, .woocommerce-checkout #payment button[type="submit"]');
  }

  function readOrderTotal() {
    // read Woo's own order-total amount; NEVER fabricate. Returns text or ''.
    var t = d.querySelector(
      '.order-total .amount, .cart_totals .order-total .woocommerce-Price-amount,' +
      ' .woocommerce-checkout-review-order-table .order-total .amount,' +
      ' tr.order-total td .amount'
    );
    return t ? t.textContent.trim() : '';
  }

  function buildPin() {
    realBtn = findRealBtn();
    if (!realBtn) return;                                     // no submit -> no proxy (e.g. empty cart)
    if (d.querySelector('.cf-cartco-pin')) { syncPin(); return; }

    var label = isCart ? 'Proceed to Checkout' : 'Place Order';
    var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
    var lock  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
    var total = readOrderTotal();

    pinEl = el(
      '<div class="cf-cartco-pin" role="region" aria-label="Checkout">' +
        (total ? '<div class="cf-cartco-pin-total"><span class="cf-cartco-pin-lbl">Order total</span><span class="cf-cartco-pin-amt">' + total + '</span></div>' : '') +
        '<button type="button" class="cf-cartco-pin-cta">' + (isCheckout ? lock : '') +
          '<span>' + label + '</span>' + (isCart ? arrow : '') +
        '</button>' +
      '</div>'
    );
    d.body.appendChild(pinEl);
    pinAmtEl = pinEl.querySelector('.cf-cartco-pin-amt');
    root.classList.add('cf-cartco-haspin', 'cf-cartco-proxied');

    // reserve bottom space so the pinned bar never covers page tail.
    // tab bar (60px) + pin (~ 56 CTA + ~30 total + paddings ≈ 150). Use a safe 150px band.
    d.body.style.paddingBottom = 'calc(150px + env(safe-area-inset-bottom, 0px))';

    var cta = pinEl.querySelector('.cf-cartco-pin-cta');
    cta.addEventListener('click', function () {
      // proxy the click to the REAL Woo button so all validation/AJAX/submit fires.
      var rb = findRealBtn();
      if (!rb) return;
      // brief disable to avoid double-submit
      cta.setAttribute('disabled', 'disabled');
      setTimeout(function () { try { cta.removeAttribute('disabled'); } catch (e) {} }, 2500);
      try {
        if (rb.tagName === 'A') { rb.click(); }
        else {
          // submit the checkout form properly (button[type=submit] inside form.checkout)
          var form = rb.closest('form');
          if (form && typeof form.requestSubmit === 'function') { rb.click(); }
          else { rb.click(); }
        }
      } catch (e) { try { rb.click(); } catch (e2) {} }
    });
  }

  function syncPin() {
    if (!pinAmtEl) return;
    var total = readOrderTotal();
    if (total) pinAmtEl.textContent = total;
  }

  function removePinIfEmpty() {
    // empty cart: drop the proxy + restore
    if (isCart && d.querySelector('.cart-empty, .wc-empty-cart-message')) {
      if (pinEl) { pinEl.remove(); pinEl = null; }
      root.classList.remove('cf-cartco-haspin', 'cf-cartco-proxied');
      d.body.style.paddingBottom = '';
      return true;
    }
    return false;
  }

  /* ---------- orchestration ---------- */
  function build() {
    if (d.querySelector('.cf-cartco-built')) { /* re-sync below */ }
    buildSteps();
    if (isCheckout) {
      relocateExpress();
      guestFirst();
    }
    trustStrip();
    if (!removePinIfEmpty()) buildPin();

    if (!d.querySelector('.cf-cartco-built')) {
      var mark = d.createElement('span');
      mark.className = 'cf-cartco-built';
      mark.style.display = 'none';
      d.body.appendChild(mark);
    }
  }

  function init() {
    build();

    // WooCommerce re-renders cart/checkout fragments via AJAX (qty change, coupon,
    // shipping method, payment method switch). Re-run the relevant pieces afterward.
    if (jq) {
      jq(d.body).on('updated_cart_totals', function () {
        // cart totals table is replaced -> rebuild proxy + totals + trust
        if (!removePinIfEmpty()) { buildPin(); syncPin(); }
        trustStrip();
      });
      jq(d.body).on('updated_checkout', function () {
        // checkout review/payment re-rendered -> express + proxy + trust may be gone
        relocateExpress();
        guestFirst();
        trustStrip();
        if (!d.querySelector('.cf-cartco-pin')) buildPin();
        syncPin();
      });
      jq(d.body).on('updated_wc_div', function () { trustStrip(); if (!removePinIfEmpty()) { buildPin(); syncPin(); } });
    } else {
      // no jQuery (unlikely on Woo): observe the order-review region for re-renders
      var target = d.querySelector('.woocommerce') || d.body;
      var obs = new MutationObserver(function () {
        if (isCheckout) { relocateExpress(); }
        if (!d.querySelector('.cf-cartco-pin')) { if (!removePinIfEmpty()) buildPin(); }
        syncPin();
      });
      try { obs.observe(target, { childList: true, subtree: true }); } catch (e) {}
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement;
  if (!root.classList.contains('cf-app')) return;            // not app mode -> do nothing
  if (root.getAttribute('data-cf-ship') === '1') return;     // idempotent guard
  root.setAttribute('data-cf-ship', '1');

  /* ===== CONFIG: mirror the WooCommerce free-shipping minimum here =====
     NOT a fabricated price — it must mirror the store's own "Free shipping requires a minimum
     order amount" setting. Keep in sync with WC.
     The bar renders a customer-FACING dollar claim ("Add $X for FREE shipping"), so it must NOT
     ship until the real WC number is confirmed. Until then CF_FREESHIP_CONFIRMED stays false and
     the module renders NOTHING — same principle as "if a subtotal can't be read, show nothing,
     never a fake number." */
  var CF_FREESHIP_THRESHOLD = 0;     /* TODO: Joaquin to set the live WC free-shipping minimum (the build task flags $600 is likely too high for a $125-ish catalog; consider $199-$299). */
  var CF_FREESHIP_CONFIRMED = false; /* TODO: flip to true once CF_FREESHIP_THRESHOLD above matches the live WooCommerce setting. While false the bar stays hidden (no fabricated claim). */

  var $ = window.jQuery || null;

  // --- parse a "$1,234.56" style money string -> number (null if none) ---
  function parseMoney(str) {
    if (str == null) return null;
    var t = String(str).replace(/&nbsp;/g, ' ');
    // grab the last number group that looks like an amount
    var m = t.replace(/[^0-9.,]/g, ' ').match(/(\d{1,3}(?:[,\s]\d{3})*(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g);
    if (!m || !m.length) return null;
    var raw = m[m.length - 1].replace(/[,\s]/g, '');
    var n = parseFloat(raw);
    return isNaN(n) ? null : n;
  }

  // --- read the cart subtotal LIVE from whatever Woo has rendered ---
  // priority: cart-page subtotal row -> cart-page total row -> mini-cart total amount.
  function readSubtotalFromDoc(scope) {
    scope = scope || d;
    var sels = [
      '.cart_totals .cart-subtotal .amount',
      '.cart-subtotal .woocommerce-Price-amount',
      '.cart-subtotal .amount',
      '.order-total .amount',                                 // fallback if subtotal row absent
      '.woocommerce-mini-cart__total .amount',
      '.widget_shopping_cart_content .total .amount'
    ];
    for (var i = 0; i < sels.length; i++) {
      var el = scope.querySelector(sels[i]);
      if (el) { var v = parseMoney(el.textContent); if (v != null) return v; }
    }
    return null;
  }

  // --- fallback: pull subtotal out of the wc-ajax fragments JSON (HTML string) ---
  function readSubtotalFromFragments(cb) {
    fetch('/?wc-ajax=get_refreshed_fragments', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var html = j && j.fragments ? Object.values(j.fragments).join(' ') : '';
        if (!html) return cb(null);
        var tmp = d.createElement('div'); tmp.innerHTML = html;
        cb(readSubtotalFromDoc(tmp));
      })
      .catch(function () { cb(null); });
  }

  // --- is the cart empty? (so we hide the banner instead of nagging) ---
  function cartCount() {
    var el = d.querySelector('.cart-contents-count, .count, .ast-cart-menu-wrap .count');
    if (el) { var m = el.textContent.replace(/\D/g, ''); if (m !== '') return parseInt(m, 10) || 0; }
    return null; // unknown
  }

  // --- format a number back to a display string, reusing the site's currency symbol if we can see one ---
  function currencySymbol() {
    var el = d.querySelector('.woocommerce-Price-currencySymbol');
    return el ? el.textContent.trim() : '$';
  }
  function money(n) {
    var sym = currencySymbol();
    var s = (Math.round(n * 100) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (s.slice(-3) === '.00') s = s.slice(0, -3);            // drop trailing .00 for a cleaner nudge
    return sym + s;
  }

  // --- render a bar's contents for a given subtotal; returns false if no usable number ---
  function renderBar(bar, subtotal) {
    if (subtotal == null) return false;
    if (!CF_FREESHIP_CONFIRMED || !(CF_FREESHIP_THRESHOLD > 0)) return false; // no confirmed threshold -> no fabricated claim
    var threshold = CF_FREESHIP_THRESHOLD;
    var remaining = threshold - subtotal;
    var pct = Math.max(0, Math.min(100, (subtotal / threshold) * 100));
    var msg = bar.querySelector('.cf-ship-msg');
    var fill = bar.querySelector('.cf-ship-fill');
    if (remaining > 0.005) {
      bar.classList.remove('cf-ship-done');
      msg.innerHTML = '<span>Add <span class="cf-ship-amt">' + money(remaining) +
                      '</span> for <b>FREE shipping</b></span>';
    } else {
      bar.classList.add('cf-ship-done');
      msg.innerHTML = '<span class="cf-ship-check">✓</span> ' +
                      '<span>You unlocked <b>FREE shipping</b></span>';
      pct = 100;
    }
    fill.style.width = pct + '%';
    return true;
  }

  function barMarkup(extraClass) {
    var el = d.createElement('div');
    el.className = 'cf-ship-bar ' + extraClass;
    el.innerHTML = '<div class="cf-ship-msg"></div>' +
                   '<div class="cf-ship-track"><div class="cf-ship-fill"></div></div>';
    return el;
  }

  var inlineBar = null, stickyBar = null;

  // --- build the inline bar on the cart page (above totals) ---
  function buildInline() {
    if (!d.body || !d.body.classList.contains('woocommerce-cart')) return;
    if (d.querySelector('.cf-ship-inline')) { inlineBar = d.querySelector('.cf-ship-inline'); return; }
    // anchor: right before the cart totals; defensive fallbacks.
    var anchor = d.querySelector('.cart_totals') ||
                 d.querySelector('.cart-collaterals') ||
                 d.querySelector('form.woocommerce-cart-form');
    if (!anchor) return;
    inlineBar = barMarkup('cf-ship-inline');
    anchor.parentNode.insertBefore(inlineBar, anchor);
  }

  // --- build the sticky mini banner (any app page) ---
  function buildSticky() {
    if (d.querySelector('.cf-ship-sticky')) { stickyBar = d.querySelector('.cf-ship-sticky'); return; }
    stickyBar = barMarkup('cf-ship-sticky');
    d.body.appendChild(stickyBar);
    root.classList.add('cf-ship-haspad');
  }

  // --- update both bars from the current subtotal ---
  function update(subtotal) {
    var cnt = cartCount();
    var okInline = inlineBar ? renderBar(inlineBar, subtotal) : false;
    if (stickyBar) {
      var okSticky = renderBar(stickyBar, subtotal);
      // show sticky only when there's a real subtotal AND the cart isn't known-empty
      var show = okSticky && subtotal > 0 && (cnt === null || cnt > 0);
      stickyBar.classList.toggle('cf-ship-show', !!show);
      if (!show) root.classList.remove('cf-ship-haspad');
      else root.classList.add('cf-ship-haspad');
    }
    return okInline;
  }

  // --- resolve a subtotal (DOM first, fragments fallback) then update ---
  function refresh() {
    var sub = readSubtotalFromDoc(d);
    if (sub != null) { update(sub); return; }
    readSubtotalFromFragments(function (v) { update(v); });
  }

  function init() {
    // Don't render a customer-facing $ shipping claim until the WC threshold is confirmed.
    if (!CF_FREESHIP_CONFIRMED || !(CF_FREESHIP_THRESHOLD > 0)) return;
    buildInline();
    buildSticky();
    refresh();
    // re-read on WC cart changes (same events the base shell uses)
    if ($) {
      $(d.body).on('added_to_cart removed_from_cart wc_fragments_refreshed wc_fragments_loaded updated_cart_totals updated_wc_div', refresh);
    }
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();

(function () {
  var d = document, root = d.documentElement, win = window;

  /* ---- HARD GATE 1: app mode only (base shell sets cf-app) -------------- */
  if (!root.classList.contains('cf-app')) return;

  /* ---- HARD GATE 2: NATIVE runtime only -------------------------------- *
   * A web "app-mode" browser (cf_app localStorage flag, ?source=app on
   * desktop, etc.) has cf-app but NO Capacitor bridge -> this no-ops there.
   * Only the real wrapped Android/iOS app reaches the registration code.    */
  var Cap = win.Capacitor;
  var isNative = !!(Cap && Cap.isNativePlatform && Cap.isNativePlatform());
  if (!isNative) return;

  /* ---- HARD GATE 3: idempotent (one registration per page life) --------- */
  if (win.__cfPushBooted) return;
  win.__cfPushBooted = true;

  /* The @capacitor/push-notifications plugin is exposed on the bridge inside
     the native app (it ships in the binary; the live remote page calls it
     through window.Capacitor.Plugins). Bail cleanly if absent (e.g. an old
     build without the plugin) — never throw. */
  var PN = (Cap.Plugins && Cap.Plugins.PushNotifications) || win.PushNotifications;
  if (!PN || typeof PN.register !== 'function') return;
  var CapApp = (Cap.Plugins && Cap.Plugins.App) || null; // @capacitor/app, for deep-link nav

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
    var lastSent = null;
    try { lastSent = localStorage.getItem('cf_push_token'); } catch (e) {}
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
      // keep app-mode tag so we stay skinned
      if (!abs.searchParams.has('source')) abs.searchParams.set('source', 'app');
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
     skip straight to register. Tapping "Allow" -> OS prompt; "Not now" ->
     defers (we still register silently next launch so iOS provisional/Android
     channel can deliver). Purely cosmetic; zero effect on web/desktop.
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

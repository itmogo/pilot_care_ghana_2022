(function () {
  try {
    var t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (i.prototype.init = function () {
      var i,
        n,
        s = this,
        r = "init";
      try {
        this.c &&
          !0 !== this.p &&
          ((this.p = !0),
          ((i = document.createElement("div")).id = "crisp-loader"),
          document.getElementsByTagName("body")[0].appendChild(i),
          (n = function () {
            return (
              "none" === window.getComputedStyle(i).getPropertyValue("display")
            );
          }),
          (function t() {
            setTimeout(function () {
              (s.f -= s.m),
                void 0 !== window[s.y] &&
                "function" == typeof window[s.y].__init &&
                !0 === n()
                  ? (s.x.info(s.ns + "." + r, "Dependencies loaded"),
                    i.parentNode.removeChild(i),
                    window[s.y].__init({
                      dollar_crisp: window[s.y],
                      project_name: s.$,
                      url_go: s.on,
                      url_image: s.fn,
                      url_game: s._n,
                      url_relay_client: s.fs,
                      url_relay_stream: s.ms,
                      url_website: s.ws,
                      url_assets: s._e,
                      rtc_ice: s.io,
                      client_environment: s.do,
                      client_revision: s.ca,
                      website_domain: s._a,
                      website_id: s.c,
                      token_id: s.Kp,
                      cookie_expire: s.Dd,
                      cookie_domain: s.Gp,
                      page_url: s.Yp,
                      page_domain: s.Xp,
                      browser_useragent: s.Jp,
                      browser_timezone: s.Wp,
                      browser_capabilities: s.Hp,
                      browser_locales: s.Qp,
                      ready_trigger: s.Vp,
                      runtime_configuration: s.Zp,
                      reset_handler: function () {
                        s.reset();
                      },
                    }))
                  : 0 < s.f
                  ? t()
                  : s.x.error(s.ns + "." + r, "Could not load dependencies");
            }, s.m);
          })());
      } catch (t) {}
    }),
      (i.prototype.reset = function () {
        try {
          this.u(), this.init();
        } catch (t) {}
      }),
      (i.prototype._f = function () {
        try {
          this.t_("dns-prefetch", this.fs),
            this.t_("preconnect", this._e),
            this.i_(),
            this.n_();
        } catch (t) {}
      }),
      (i.prototype.t_ = function (t, i) {
        try {
          var n = document.createElement("link");
          n.setAttribute("href", i),
            n.setAttribute("rel", t),
            n.setAttribute("crossorigin", ""),
            this.s_(n),
            document.getElementsByTagName("head")[0].appendChild(n);
        } catch (t) {}
      }),
      (i.prototype.i_ = function () {
        try {
          var t = document.createElement("script");
          (t.src = [this._e + "/", this.r_ + "/", "client.js?" + this.ca].join(
            ""
          )),
            (t.type = "text/javascript"),
            (t.async = 1),
            this.s_(t),
            document.getElementsByTagName("head")[0].appendChild(t);
        } catch (t) {}
      }),
      (i.prototype.n_ = function () {
        try {
          var t = this.e_(),
            i = document.createElement("link");
          (i.href = [
            this._e + "/",
            this.o_ + "/",
            "client_" + t + ".css?" + this.ca,
          ].join("")),
            (i.type = "text/css"),
            (i.rel = "stylesheet"),
            this.s_(i),
            document.getElementsByTagName("head")[0].appendChild(i);
        } catch (t) {}
      }),
      (i.prototype.u = function () {
        this.c_(), this.h_(), this.a_();
      }),
      (i.prototype.c_ = function () {
        (this.p = !1),
          (this.f = this.u_),
          (this._a = document.domain),
          (this.Yp = document.location.href),
          (this.Xp = document.location.hostname),
          (this.Jp = window.navigator.userAgent),
          (this.Wp = new Date().getTimezoneOffset()),
          (this.Qp = this.d_()),
          "string" == typeof CRISP_WEBSITE_NAME && CRISP_WEBSITE_NAME
            ? (this.c = CRISP_WEBSITE_ID)
            : (this.c = this.p_()),
          "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Kp = CRISP_TOKEN_ID)
            : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Kp = CRISP_TOKEN_ID.toString())
            : (this.Kp = null),
          "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
            ? (this.Dd = CRISP_COOKIE_EXPIRE)
            : (this.Dd = false),
          "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
            ? (this.Gp = CRISP_COOKIE_DOMAIN)
            : (this.Gp = false),
          "function" == typeof CRISP_READY_TRIGGER
            ? (this.Vp = CRISP_READY_TRIGGER)
            : (this.Vp = {}),
          "object" ===
          ("undefined" == typeof CRISP_RUNTIME_CONFIG
            ? "undefined"
            : t(CRISP_RUNTIME_CONFIG))
            ? (this.Zp = CRISP_RUNTIME_CONFIG)
            : (this.Zp = {}),
          "object" ===
          ("undefined" == typeof CRISP_INCLUDE_ATTRS
            ? "undefined"
            : t(CRISP_INCLUDE_ATTRS))
            ? (this.f_ = CRISP_INCLUDE_ATTRS)
            : (this.f_ = {});
      }),
      (i.prototype.h_ = function () {
        try {
          (this.Hp = []),
            "function" == typeof window.MutationObserver &&
              "function" == typeof JSON.stringify &&
              this.Hp.push("browsing"),
            (("function" == typeof window.RTCPeerConnection &&
              "object" === t(navigator.mediaDevices) &&
              "https:" === document.location.protocol &&
              (window.innerWidth || 0) >= this.l_ &&
              (window.innerHeight || 0) >= this.__) ||
              !0 === this.m_) &&
              this.Hp.push("call");
        } catch (t) {}
      }),
      (i.prototype.a_ = function () {
        var t;
        try {
          this.Zp.locale &&
            (-1 !== (t = this.Qp.indexOf(this.Zp.locale)) &&
              this.Qp.splice(t, 1),
            this.Qp.unshift(this.Zp.locale));
        } catch (t) {}
      }),
      (i.prototype.s_ = function (t) {
        try {
          for (var i in this.f_)
            this.f_.hasOwnProperty(i) && t.setAttribute(i, this.f_[i]);
        } catch (t) {}
      }),
      (i.prototype.p_ = function () {
        var t = null;
        try {
          for (
            var i = document.querySelectorAll("script[src]"), n = 0;
            n < i.length;
            n++
          ) {
            var s = this.y_.exec(i[n].src);
            if (s && "string" == typeof s[1]) {
              t = s[1];
              break;
            }
          }
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.e_ = function () {
        var t = "default";
        try {
          var i = (navigator.userAgent || "").toLowerCase(),
            n = (navigator.appVersion || "").toLowerCase(),
            s = !1;
          if (
            (!0 !== s &&
              ((-1 === i.indexOf("opera mini/") &&
                -1 === i.indexOf("msie") &&
                -1 === n.indexOf("trident/")) ||
                (s = !0)),
            !0 !== s)
          )
            for (var r = 0; r < this.I_.length; r++) {
              var e = this.I_[r],
                o = i.match(e.pattern);
              if (o && o[1] && parseInt(o[1], 10) <= e.version) {
                s = !0;
                break;
              }
            }
          !0 === s && (t = "legacy");
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.v_ = function () {
        var t = !0;
        try {
          (!(window.innerWidth && window.innerWidth < this.w_) &&
            !0 === navigator.cookieEnabled &&
            !0 !== this.C_(this.Xp) &&
            !0 !== this.R_(this.Jp) &&
            window.WebSocket) ||
            (t = !1);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.C_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.g_.domains.length; n++) {
              var s = this.g_.domains[n],
                r = "." + s;
              if (t === s || t.slice(-1 * r.length) === r) {
                i = !0;
                break;
              }
            }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.R_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.g_.agents.length; n++)
              if (-1 !== t.indexOf(this.g_.agents[n])) {
                i = !0;
                break;
              }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.d_ = function () {
        var t = [];
        try {
          for (
            var i =
                navigator.languages && 0 < navigator.languages.length
                  ? navigator.languages
                  : [navigator.language || navigator.userLanguage],
              n = 0;
            n < i.length;
            n++
          )
            i[n] && t.push(i[n]);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      new i();
  } catch (t) {}
  function i() {
    var t,
      i = this;
    try {
      (this.ns = "CrispLoader"),
        (this.x = {
          warn: function () {},
          error: function () {},
          info: function () {},
          log: function () {},
          debug: function () {},
        }),
        (this.m_ = !1),
        (this.$ = "crisp-client"),
        (this.S_ = "client.crisp.chat"),
        (this.E_ = "client.relay.crisp.chat"),
        (this.b_ = "stream.relay.crisp.chat"),
        (this.ca = "1960c46"),
        (this.do = "production"),
        (this.P_ = "https:"),
        (this.ws = "https://crisp.chat"),
        (this.on = "https://go.crisp.chat"),
        (this.fn = "https://image.crisp.chat"),
        (this._n = "https://game.crisp.chat"),
        (this.fs = this.P_ + "//" + this.E_),
        (this.ms = this.P_ + "//" + this.b_),
        (this._e = this.P_ + "//" + this.S_),
        (this.io = [
          {
            urls: [
              "stun:stun.media.crisp.chat:3478?transport=udp",
              "stun:stun.media.crisp.chat:3478?transport=tcp",
              "stun:stun.media.crisp.chat:3479?transport=udp",
              "stun:stun.media.crisp.chat:3479?transport=tcp",
            ],
          },
          {
            urls: [
              "turn:turn.media.crisp.chat:3478?transport=udp",
              "turn:turn.media.crisp.chat:3478?transport=tcp",
              "turn:turn.media.crisp.chat:3479?transport=udp",
              "turn:turn.media.crisp.chat:3479?transport=tcp",
              "turns:turn.media.crisp.chat:443?transport=tcp",
            ],
            username: "client_9F9kh",
            credential:
              "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p",
          },
        ]),
        (this.g_ = {
          domains: [],
          agents: [
            "Googlebot",
            "Bingbot",
            "Slurp",
            "DuckDuckBot",
            "Baiduspider",
            "YandexBot",
            "GTmetrix",
            "Lighthouse",
          ],
        }),
        (this.r_ = "static/javascripts"),
        (this.o_ = "static/stylesheets"),
        (this.y = "$crisp"),
        (this.m = 100),
        (this.u_ = 3e4),
        (this.O_ = 1e3),
        (this.w_ = 280),
        (this.l_ = 320),
        (this.__ = 420),
        (this.I_ = [
          { pattern: /edg(?:e)?\/([0-9\.]+)/, version: 79 },
          { pattern: /chrom(?:e|ium)\/([0-9\.]+)/, version: 57 },
          { pattern: /firefox\/([0-9\.]+)/, version: 51 },
          {
            pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
            version: 11,
          },
          { pattern: /android ([0-9\.]+)/, version: 7 },
        ]),
        (this.y_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
        this.u(),
        !0 === this.v_() &&
          ("interactive" === document.readyState ||
          "complete" === document.readyState
            ? this.init()
            : ((t = document.onreadystatechange || function () {}),
              window.addEventListener("DOMContentLoaded", function () {
                i.init();
              }),
              (document.onreadystatechange = function () {
                "function" == typeof t && t(),
                  ("interactive" !== document.readyState &&
                    "complete" !== document.readyState) ||
                    setTimeout(function () {
                      i.init();
                    }, i.O_);
              })),
          (void 0 !== window[this.y] &&
            "function" == typeof window[this.y].__init) ||
            this._f());
    } catch (t) {}
  }
})();

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [331],
  {
    2390: function (e, t, n) {
      "use strict";
      var r = n(25809),
        s = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          o,
          a,
          i,
          c,
          l,
          d,
          u,
          f = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((c = r()),
            (l = document.createRange()),
            (d = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.ariaHidden = "true"),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = s[t.format] || s.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            d.addRange(l),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (r) {
          a && console.error("unable to copy using execCommand: ", r),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (r) {
            a && console.error("unable to copy using clipboardData: ", r),
              a && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (o =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (i = n.replace(/#{\s*key\s*}/g, o)),
              window.prompt(i, e);
          }
        } finally {
          d &&
            ("function" == typeof d.removeRange
              ? d.removeRange(l)
              : d.removeAllRanges()),
            u && document.body.removeChild(u),
            c();
        }
        return f;
      };
    },
    12618: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 28432)),
        Promise.resolve().then(n.bind(n, 65675)),
        Promise.resolve().then(n.bind(n, 43983)),
        Promise.resolve().then(n.bind(n, 6292)),
        Promise.resolve().then(n.bind(n, 55607)),
        Promise.resolve().then(n.bind(n, 88477)),
        Promise.resolve().then(n.bind(n, 6398)),
        Promise.resolve().then(n.bind(n, 98448)),
        Promise.resolve().then(n.bind(n, 56734)),
        Promise.resolve().then(n.bind(n, 24776)),
        Promise.resolve().then(n.bind(n, 24502)),
        Promise.resolve().then(n.bind(n, 88808)),
        Promise.resolve().then(n.t.bind(n, 90413, 23)),
        Promise.resolve().then(n.t.bind(n, 68326, 23)),
        Promise.resolve().then(n.bind(n, 19167));
    },
    14362: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(57437),
        s = n(2265),
        o = n(24033),
        a = n(2996),
        i = n(61396),
        c = n.n(i),
        l = n(91279),
        d = n(1102);
      function u(e) {
        let { params: t } = e,
          n = (0, o.usePathname)(),
          [i, u] = (0, s.useState)(0),
          f = (0, a.C)((e) => e.restaurant.info);
        return (
          (0, s.useEffect)(() => {
            let e = f.find((e) => e.restaurantId === t.restaurantId);
            if (e) {
              let t = e.cart.reduce((e, t) => e + t.amount, 0);
              u(t);
            }
          }, [f]),
          (0, r.jsx)(c(), {
            href: "/".concat(t.restaurantId, "/cart"),
            children: (0, r.jsxs)("li", {
              className: "w-fit flex gap-2 relative",
              children: [
                (0, r.jsx)(l.G, {
                  icon: d.yYj,
                  size: "xl",
                  color: n.includes("cart") ? "#671ABF" : "#6682A9",
                }),
                i > 0
                  ? (0, r.jsx)("p", {
                      className:
                        "absolute -top-[8px] text-center -right-[10px] pt-[1px] pl-[1px] !w-[20px] !h-[20px] rounded-[25px] text-[12px] bg-[#f64f61] text-white",
                      children: i,
                    })
                  : "",
              ],
            }),
          })
        );
      }
    },
    31255: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(57437),
        s = n(91279),
        o = n(1102),
        a = n(2265),
        i = n(41557);
      n(33461);
      var c = n(62896),
        l = n(55294),
        d = n(2996),
        u = n(50622),
        f = n(35447);
      let x = [
        {
          id: "sum",
          name: { ru: "Узбекский сум", en: "Uzbek sum", uz: "O'zbek so'mi" },
          icon: o.owJ,
          slug: "Сум",
        },
      ];
      function p(e) {
        let [t, n] = (0, a.useState)(!1),
          [p, m] = (0, a.useState)(x[0]),
          [h, j] = (0, a.useState)({}),
          b = (0, d.C)((e) => e.states.language),
          g = async () => {
            let e = await (0, u.R)(b);
            j(e.currency);
          };
        (0, a.useEffect)(() => {
          g();
        }, [b]);
        let y = (t) => {
          m(t), n(!1), e.setOpen && e.setOpen(!1);
        };
        return (0, r.jsxs)("div", {
          children: [
            e.drawer
              ? (0, r.jsxs)("div", {
                  className:
                    "flex items-center gap-3 border-b px-5 py-[10px] activeLink",
                  onClick: () => n(!0),
                  children: [
                    (0, r.jsx)(s.G, {
                      icon: o.owJ,
                      size: "xl",
                      color: "#671ABF",
                    }),
                    (0, r.jsx)("p", {
                      className: "font-[500]",
                      children: p.name[b],
                    }),
                  ],
                })
              : (0, r.jsxs)("div", {
                  className:
                    "bg-[#fff]/[0.15] rounded-[10px] flex items-center gap-2 h-[38px] px-[7px] justify-center whitespace-nowrap",
                  onClick: () => n(!0),
                  children: [
                    (0, r.jsx)(s.G, {
                      icon: o.owJ,
                      size: "xl",
                      color: "#fff",
                      className: "w-7",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-[14px] text-[#fff] font-[500]",
                      children: p.slug,
                    }),
                  ],
                }),
            (0, r.jsx)(i.Z, {
              open: t,
              onClose: () => n(!1),
              direction: "bottom",
              className:
                "rounded-tr-3xl rounded-tl-3xl absolute max-sm:!w-[100%] lg:!w-["
                  .concat(e.lg, "] xl:!w-[")
                  .concat(e.xl, "] !m-auto"),
              size: "auto",
              duration: 300,
              zIndex: 999,
              lockBackgroundScroll: !0,
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between px-6 mt-4",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "text-[18px] font-bold leading-6 truncate w-[90%] text-center",
                        children: h.title,
                      }),
                      (0, r.jsx)("button", {
                        type: "button",
                        className:
                          "rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white",
                        onClick: () => n(!1),
                        children: (0, r.jsx)(s.G, {
                          icon: o.WA2,
                          color: "#C2A3E5",
                          className: "text-[30px] w-7",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("hr", { className: "mt-4 border-[#74859E]" }),
                  (0, r.jsx)("div", {
                    children: x.map((e) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center gap-4 border-b px-6 border-[#D0D7E1] justify-between activeLink ".concat(
                              p.id === e.id
                                ? "text-[#671ABF]"
                                : "text-[#74859E]"
                            ),
                          onClick: () => y(e),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-4 py-4",
                              children: [
                                (0, r.jsx)(s.G, {
                                  icon: e.icon,
                                  size: "xl",
                                  className: "w-7",
                                  color: "#671ABF",
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-[16px] ".concat(
                                    p.id === e.id ? "font-bold" : "font-normal"
                                  ),
                                  children: e.name[b],
                                }),
                              ],
                            }),
                            (0, r.jsx)(s.G, {
                              icon: p.id === e.id ? l.W3K : c.diR,
                              className: "text-[20px]",
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "m-10 mx-20",
                    onClick: () => n(!1),
                    children: (0, r.jsx)(f.Z, {
                      btnType: "drawerType",
                      children: "Закрыть",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    65675: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var r = n(57437),
        s = n(91279),
        o = n(1102),
        a = n(2265),
        i = n(41557),
        c = {
          src: "/_next/static/media/telegram.d19f62a5.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUDmeRfv+4Hm+UIp/QDn+twxvACmuUDneYCnulMaXEBofPC5/mW1fQTougwrur///+X1vRlhCiEAAAACnRSTlP8/bT/sP60Lu8ASghikgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUeJwli0kOwCAMxEwTyJDQ5f+vrWhvlmwzY8ARk5BBKvCEq5ujsz9VaMO6F9qqVUv/Y1Pw7SPmCzcwAYaheqDyAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = {
          src: "/_next/static/media/facebook.943a925c.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEU8W5o8WJsrS49heqw7WppMaXE6WJc1VJQ8XJw7Vpc8WJU/X6E5WJrM1OSjsc9LaKRrgrHg5e98kLr4+fueqoZgAAAAC3RSTlP2Lvn+6gC0/LAvLvT9fioAAAAJcEhZcwAAPyoAAD8qAVIli8oAAAA/SURBVHicHclHDoAwDADBDbjE2CnA//+KxFwHvcwPa0pInXNJ0NPHIDv4fkcWUOueXvz1HNkJyblLAm0G1vQDSn4CCEWPJsgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = n(74433),
        u = n.n(d);
      n(33461);
      var f = n(35447),
        x = n(61396),
        p = n.n(x),
        m = n(86781),
        h = n(2996),
        j = n(50622);
      function b(e) {
        let { params: t, direction: n } = e,
          [d, x] = (0, a.useState)(!1),
          [b, g] = (0, a.useState)({}),
          y = (0, h.C)((e) => e.states.language);
        (0, a.useEffect)(() => {
          let e = async () => {
            let e = await (0, j.R)(y);
            g(e.shareDrawer);
          };
          e();
        }, [y]);
        let v = () => {
          let e = document.getElementById("buttonCopy"),
            t = document.getElementById("buttonCopied");
          (e.style.display = "none"),
            (t.style.display = "flex"),
            setTimeout(() => {
              (e.style.display = "flex"), (t.style.display = "none");
            }, 2e3);
        };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("span", {
              className:
                "bg-[#fff]/[0.15] rounded-[10px] h-[38px] w-[45px] flex items-center justify-center cursor-pointer",
              onClick: () => x(!0),
              children: (0, r.jsx)(s.G, {
                icon: o.A$k,
                size: "xl",
                color: "links" === n ? "#345488" : "#fff",
              }),
            }),
            (0, r.jsx)(i.Z, {
              open: d,
              onClose: () => x(!1),
              direction: "bottom",
              className:
                "rounded-tr-3xl rounded-tl-3xl absolute max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
              size: "auto",
              duration: 300,
              zIndex: 999,
              lockBackgroundScroll: !0,
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex items-center justify-between px-6 sm:px-6 mt-4",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "text-[18px] font-bold leading-6 truncate w-[90%] text-center",
                        children: b.title,
                      }),
                      (0, r.jsx)("button", {
                        type: "button",
                        className:
                          "rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white",
                        onClick: () => x(!1),
                        children: (0, r.jsx)(s.G, {
                          icon: o.WA2,
                          size: "2x",
                          color: "#C2A3E5",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("hr", { className: "mt-4 border-[#74859E]" }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(p(), {
                        href: "https://t.me/share/url?url="
                          .concat("https://foodee.menu", "/")
                          .concat(t.restaurantId),
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex items-center gap-4 border-b py-4 border-[#D0D7E1] px-6 activeLink",
                          children: [
                            (0, r.jsx)(u(), {
                              src: c,
                              width: 30,
                              height: 30,
                              layout: "fixed",
                              alt: "tg",
                            }),
                            (0, r.jsx)("span", { children: "Telegram" }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(p(), {
                        href: "https://www.facebook.com/sharer/sharer.php?u="
                          .concat("https://foodee.menu", "/")
                          .concat(t.restaurantId),
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex items-center gap-4 border-b py-4 border-[#D0D7E1] px-6 activeLink",
                          children: [
                            (0, r.jsx)(u(), {
                              src: l,
                              width: 30,
                              height: 30,
                              layout: "fixed",
                              alt: "tg",
                            }),
                            (0, r.jsx)("span", { children: "Facebook" }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "mt-10 px-6 mb-12",
                        children: [
                          (0, r.jsx)(m.CopyToClipboard, {
                            text: ""
                              .concat("https://foodee.menu", "/")
                              .concat(t.restaurantId),
                            children: (0, r.jsx)(f.Z, {
                              btnType: "drawerTypeBg",
                              id: "buttonCopy",
                              onClick: () => v(),
                              children: b.copyLink,
                            }),
                          }),
                          (0, r.jsx)(f.Z, {
                            btnType: "drawerType",
                            id: "buttonCopied",
                            style: { display: "none" },
                            className:
                              "flex items-center gap-1 border-[2px] border-[#1bc5bd] py-[6.2px] px-[8px] text-[#1bc5bd] font-bold rounded-[3px] cursor-pointer",
                            children: (0, r.jsxs)("span", {
                              className: "flex items-center gap-2 font-[500]",
                              children: [
                                (0, r.jsx)(s.G, {
                                  icon: o.LEp,
                                  size: "xl",
                                  color: "#671ABF",
                                }),
                                b.linkCopied,
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    43983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(57437),
        s = n(47713),
        o = n(2265),
        a = n(31373),
        i = n(91279),
        c = n(1102),
        l = n(61396),
        d = n.n(l),
        u = n(62896),
        f = n(16691),
        x = n.n(f),
        p = n(9407);
      function m(e) {
        let { restaurantId: t } = e,
          n = (0, s.hasCookie)("jwt"),
          [l, f] = (0, o.useState)(),
          [m, h] = (0, o.useState)(),
          j = async () => {
            await p.Z.post("/auth/ads", { providerId: "foodee", accountId: t })
              .then((e) => {
                h(e.data.data);
              })
              .catch((e) => {
                console.log(e);
              });
          };
        return (
          (0, o.useEffect)(() => {
            j(),
              n &&
                a.Z.get("/auth/profile")
                  .then((e) => {
                    f(e.data.data);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
          }, []),
          (0, r.jsx)("div", {
            children:
              (m && !n) ||
              (m && n && l && !l.account) ||
              (m &&
                n &&
                l &&
                l.account &&
                l.account.id &&
                l.account.id.toString() !== t.toString())
                ? (0, r.jsx)(d(), {
                    href: m.link,
                    target: "_blank",
                    children: (0, r.jsxs)("div", {
                      className:
                        "h-[50px] p-4 flex gap-6 items-center shadow bg-[#F0F4FA] relative",
                      children: [
                        (0, r.jsx)("div", {
                          className: "h-[36px] relative w-[120px]",
                          children: (0, r.jsx)(x(), {
                            src: m.logoSrc,
                            alt: m.name,
                            layout: "fill",
                            objectFit: "cover",
                            quality: 100,
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "text-[#6682A9] text-[16px]",
                          children: m.tagline,
                        }),
                        (0, r.jsxs)("div", {
                          className: "absolute text-[12px] bottom-0 right-2",
                          children: [
                            "Реклама ",
                            (0, r.jsx)(i.G, { icon: u.sqG, color: "#6682A9" }),
                          ],
                        }),
                      ],
                    }),
                  })
                : n &&
                  l &&
                  l.account &&
                  l.account.id &&
                  l.account.id.toString() === t.toString()
                ? (0, r.jsx)(d(), {
                    href: "https://merchant.foodee.menu",
                    target: "_blank",
                    children: (0, r.jsxs)("div", {
                      className:
                        "h-16 p-4 flex items-center shadow bg-[#F0F4FA] gap-4 justify-center",
                      children: [
                        (0, r.jsx)(i.G, {
                          icon: c.uaE,
                          size: "xl",
                          color: "#6682A9",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-[#6682A9] font-[500]",
                          children: "Переключиться в бизнес режим",
                        }),
                      ],
                    }),
                  })
                : "",
          })
        );
      }
    },
    6292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var r,
        s,
        o,
        a = n(57437);
      n(53492);
      var i = n(91279),
        c = n(1102),
        l = n(2265),
        d = n(61396),
        u = n.n(d),
        f = n(60597),
        x = n(11931),
        p = n(46618),
        m = n(75606),
        h = n(93850),
        j = n(35863),
        b = n(25306),
        g = n(8076),
        y = n(54851),
        v = n(12950);
      let A =
        null != (o = l.startTransition)
          ? o
          : function (e) {
              e();
            };
      var w =
          (((r = w || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        N =
          (((s = N || {})[(s.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (s[(s.CloseDisclosure = 1)] = "CloseDisclosure"),
          (s[(s.SetButtonId = 2)] = "SetButtonId"),
          (s[(s.SetPanelId = 3)] = "SetPanelId"),
          (s[(s.LinkPanel = 4)] = "LinkPanel"),
          (s[(s.UnlinkPanel = 5)] = "UnlinkPanel"),
          s);
      let C = {
          0: (e) => ({
            ...e,
            disclosureState: (0, f.E)(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
          5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        k = (0, l.createContext)(null);
      function S(e) {
        let t = (0, l.useContext)(k);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, S), t);
        }
        return t;
      }
      k.displayName = "DisclosureContext";
      let P = (0, l.createContext)(null);
      P.displayName = "DisclosureAPIContext";
      let E = (0, l.createContext)(null);
      function I(e, t) {
        return (0, f.E)(t.type, C, e, t);
      }
      E.displayName = "DisclosurePanelContext";
      let D = l.Fragment,
        F = x.AN.RenderStrategy | x.AN.Static,
        z = Object.assign(
          (0, x.yV)(function (e, t) {
            let { defaultOpen: n = !1, ...r } = e,
              s = (0, l.useRef)(null),
              o = (0, p.T)(
                t,
                (0, p.h)((e) => {
                  s.current = e;
                }, void 0 === e.as || e.as === l.Fragment)
              ),
              a = (0, l.useRef)(null),
              i = (0, l.useRef)(null),
              c = (0, l.useReducer)(I, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: i,
                panelRef: a,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: d, buttonId: u }, m] = c,
              h = (0, v.z)((e) => {
                m({ type: 1 });
                let t = (0, y.r)(s);
                if (!t || !u) return;
                let n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(u)
                  : t.getElementById(u);
                null == n || n.focus();
              }),
              j = (0, l.useMemo)(() => ({ close: h }), [h]),
              g = (0, l.useMemo)(() => ({ open: 0 === d, close: h }), [d, h]);
            return l.createElement(
              k.Provider,
              { value: c },
              l.createElement(
                P.Provider,
                { value: j },
                l.createElement(
                  b.up,
                  { value: (0, f.E)(d, { 0: b.ZM.Open, 1: b.ZM.Closed }) },
                  (0, x.sY)({
                    ourProps: { ref: o },
                    theirProps: r,
                    slot: g,
                    defaultTag: D,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: (0, x.yV)(function (e, t) {
              let n = (0, m.M)(),
                { id: r = `headlessui-disclosure-button-${n}`, ...s } = e,
                [o, a] = S("Disclosure.Button"),
                i = (0, l.useContext)(E),
                c = null !== i && i === o.panelId,
                d = (0, l.useRef)(null),
                u = (0, p.T)(d, t, c ? null : o.buttonRef);
              (0, l.useEffect)(() => {
                if (!c)
                  return (
                    a({ type: 2, buttonId: r }),
                    () => {
                      a({ type: 2, buttonId: null });
                    }
                  );
              }, [r, a, c]);
              let f = (0, v.z)((e) => {
                  var t;
                  if (c) {
                    if (1 === o.disclosureState) return;
                    switch (e.key) {
                      case h.R.Space:
                      case h.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          a({ type: 0 }),
                          null == (t = o.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case h.R.Space:
                      case h.R.Enter:
                        e.preventDefault(), e.stopPropagation(), a({ type: 0 });
                    }
                }),
                b = (0, v.z)((e) => {
                  e.key === h.R.Space && e.preventDefault();
                }),
                y = (0, v.z)((t) => {
                  var n;
                  (0, j.P)(t.currentTarget) ||
                    e.disabled ||
                    (c
                      ? (a({ type: 0 }),
                        null == (n = o.buttonRef.current) || n.focus())
                      : a({ type: 0 }));
                }),
                A = (0, l.useMemo)(
                  () => ({ open: 0 === o.disclosureState }),
                  [o]
                ),
                w = (0, g.f)(e, d),
                N = c
                  ? { ref: u, type: w, onKeyDown: f, onClick: y }
                  : {
                      ref: u,
                      id: r,
                      type: w,
                      "aria-expanded": 0 === o.disclosureState,
                      "aria-controls": o.linkedPanel ? o.panelId : void 0,
                      onKeyDown: f,
                      onKeyUp: b,
                      onClick: y,
                    };
              return (0,
              x.sY)({ ourProps: N, theirProps: s, slot: A, defaultTag: "button", name: "Disclosure.Button" });
            }),
            Panel: (0, x.yV)(function (e, t) {
              let n = (0, m.M)(),
                { id: r = `headlessui-disclosure-panel-${n}`, ...s } = e,
                [o, a] = S("Disclosure.Panel"),
                { close: i } = (function e(t) {
                  let n = (0, l.useContext)(P);
                  if (null === n) {
                    let n = Error(
                      `<${t} /> is missing a parent <Disclosure /> component.`
                    );
                    throw (
                      (Error.captureStackTrace && Error.captureStackTrace(n, e),
                      n)
                    );
                  }
                  return n;
                })("Disclosure.Panel"),
                c = (0, p.T)(t, o.panelRef, (e) => {
                  A(() => a({ type: e ? 4 : 5 }));
                });
              (0, l.useEffect)(
                () => (
                  a({ type: 3, panelId: r }),
                  () => {
                    a({ type: 3, panelId: null });
                  }
                ),
                [r, a]
              );
              let d = (0, b.oJ)(),
                u =
                  null !== d
                    ? (d & b.ZM.Open) === b.ZM.Open
                    : 0 === o.disclosureState,
                f = (0, l.useMemo)(
                  () => ({ open: 0 === o.disclosureState, close: i }),
                  [o, i]
                );
              return l.createElement(
                E.Provider,
                { value: o.panelId },
                (0, x.sY)({
                  ourProps: { ref: c, id: r },
                  theirProps: s,
                  slot: f,
                  defaultTag: "div",
                  features: F,
                  visible: u,
                  name: "Disclosure.Panel",
                })
              );
            }),
          }
        );
      var O = n(9805),
        T = n(46800);
      function R(e) {
        let { data: t, restaurantId: n } = e,
          [r, s] = (0, l.useState)(!1),
          [o, d] = (0, l.useState)(0),
          f = (e) => {
            d(e), s(!0);
          };
        return (0, a.jsx)("div", {
          children: r
            ? (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "border-t activeLink px-4 h-[50px] flex items-center gap-4",
                    onClick: () => s(!1),
                    children: [
                      (0, a.jsx)(i.G, {
                        icon: T.A35,
                        size: "lg",
                        color: "#6682A9",
                        width: 30,
                      }),
                      (0, a.jsx)("p", {
                        className: "text-[18px]",
                        children: "Все категории",
                      }),
                    ],
                  }),
                  (0, a.jsx)(
                    u(),
                    {
                      href: "/".concat(n, "/menu/#").concat(t[o].id),
                      prefetch: !0,
                      children: (0, a.jsx)("div", {
                        className:
                          "border-t activeLink px-4 h-[50px] flex items-center justify-between bg-[#DDF1F1]",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center gap-4 text-[18px]",
                          children: [
                            (0, a.jsx)(i.G, {
                              icon: "fa-duotone ".concat(
                                t[o].icon ? t[o].icon.cls : "fa-plate-utensils"
                              ),
                              size: "xl",
                              color: "#6682A9",
                              width: 30,
                            }),
                            (0, a.jsx)("span", { children: t[o].name }),
                          ],
                        }),
                      }),
                    },
                    t[o].id
                  ),
                  t[o].subcategories &&
                    t[o].subcategories.map((e) =>
                      e.subcategories
                        ? (0, a.jsx)(
                            z,
                            {
                              as: "div",
                              children: (t) => {
                                let { open: r } = t;
                                return (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "flow-root",
                                      children: (0, a.jsxs)(z.Button, {
                                        as: "div",
                                        className:
                                          "border-t activeLink pr-4 pl-4 h-[50px] flex items-center justify-between",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-4 text-[18px]",
                                            children: [
                                              (0, a.jsx)(i.G, {
                                                icon: "fa-duotone ".concat(
                                                  e.icon
                                                    ? e.icon.cls
                                                    : "fa-plate-utensils"
                                                ),
                                                size: "xl",
                                                color: "#6682A9",
                                                width: 30,
                                              }),
                                              (0, a.jsx)("span", {
                                                children: e.name,
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "text-center",
                                            children: r
                                              ? (0, a.jsx)(i.G, {
                                                  icon: c.ptq,
                                                  size: "lg",
                                                  color: "#6682A9",
                                                  width: 30,
                                                })
                                              : (0, a.jsx)(i.G, {
                                                  icon: c._tD,
                                                  size: "lg",
                                                  color: "#6682A9",
                                                  width: 30,
                                                }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)(O.u, {
                                      enter: "transition duration-100 ease-out",
                                      enterFrom: "transform scale-95 opacity-0",
                                      enterTo:
                                        "transform scale-100 opacity-100",
                                      leave: "transition duration-75 ease-out",
                                      leaveFrom:
                                        "transform scale-100 opacity-100",
                                      leaveTo: "transform scale-95 opacity-0",
                                      children: (0, a.jsx)(z.Panel, {
                                        className:
                                          "flex-col items-center justify-between",
                                        children: e.subcategories.map((e) =>
                                          (0, a.jsx)(
                                            u(),
                                            {
                                              href: "/"
                                                .concat(n, "/menu/#")
                                                .concat(e.id),
                                              prefetch: !0,
                                              children: (0, a.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "border-t activeLink pr-4 pl-[60px] h-[50px] flex items-center justify-between",
                                                  children: (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-4 text-[18px]",
                                                    children: [
                                                      (0, a.jsx)(i.G, {
                                                        icon: "fa-duotone ".concat(
                                                          e.icon
                                                            ? e.icon.cls
                                                            : "fa-plate-utensils"
                                                        ),
                                                        size: "xl",
                                                        color: "#6682A9",
                                                        width: 30,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        children: e.name,
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                e.id
                                              ),
                                            },
                                            e.id
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                });
                              },
                            },
                            e.id
                          )
                        : (0, a.jsx)(
                            u(),
                            {
                              href: "/".concat(n, "/menu/#").concat(e.id),
                              prefetch: !0,
                              children: (0, a.jsx)("div", {
                                className:
                                  "border-t activeLink px-4 h-[50px] flex items-center justify-between",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-4 text-[18px]",
                                  children: [
                                    (0, a.jsx)(i.G, {
                                      icon: "fa-duotone ".concat(
                                        e.icon
                                          ? e.icon.cls
                                          : "fa-plate-utensils"
                                      ),
                                      size: "xl",
                                      color: "#6682A9",
                                      width: 30,
                                    }),
                                    (0, a.jsx)("span", { children: e.name }),
                                  ],
                                }),
                              }),
                            },
                            e.id
                          )
                    ),
                ],
              })
            : t.map((e, t) =>
                "products" === e.actionType.id
                  ? (0, a.jsx)(
                      u(),
                      {
                        href: "/".concat(n, "/menu/#").concat(e.id),
                        prefetch: !0,
                        children: (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "border-t activeLink px-4 h-[50px] flex items-center justify-between",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 text-[18px]",
                                children: [
                                  (0, a.jsx)(i.G, {
                                    icon: "fa-duotone ".concat(
                                      e.icon ? e.icon.cls : "fa-plate-utensils"
                                    ),
                                    size: "xl",
                                    color: "#6682A9",
                                    width: 30,
                                  }),
                                  (0, a.jsx)("span", { children: e.name }),
                                ],
                              }),
                              (0, a.jsx)(i.G, {
                                icon: c.yOZ,
                                size: "xl",
                                color: "#6682A9",
                                width: 30,
                              }),
                            ],
                          },
                          e.id
                        ),
                      },
                      e.id
                    )
                  : "drawer" === e.actionType.id
                  ? (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "border-t activeLink px-4 h-[50px] flex items-center justify-between",
                        onClick: () => f(t),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-4 text-[18px]",
                            children: [
                              (0, a.jsx)(i.G, {
                                icon: "fa-duotone ".concat(
                                  e.icon ? e.icon.cls : "fa-plate-utensils"
                                ),
                                size: "xl",
                                color: "#6682A9",
                                width: 30,
                              }),
                              (0, a.jsx)("span", { children: e.name }),
                            ],
                          }),
                          (0, a.jsx)(i.G, {
                            icon: c.yOZ,
                            size: "xl",
                            color: "#6682A9",
                            width: 30,
                          }),
                        ],
                      },
                      e.id
                    )
                  : (0, a.jsx)(
                      z,
                      {
                        as: "div",
                        children: (t) => {
                          let { open: r } = t;
                          return (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("div", {
                                className: "flow-root",
                                children: (0, a.jsxs)(z.Button, {
                                  as: "div",
                                  className:
                                    "border-t activeLink pr-4 pl-4 h-[50px] flex items-center justify-between",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center gap-4 text-[18px]",
                                      children: [
                                        (0, a.jsx)(i.G, {
                                          icon: "fa-duotone ".concat(
                                            e.icon
                                              ? e.icon.cls
                                              : "fa-plate-utensils"
                                          ),
                                          size: "xl",
                                          color: "#6682A9",
                                          width: 30,
                                        }),
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "text-center",
                                      children: r
                                        ? (0, a.jsx)(i.G, {
                                            icon: c.ptq,
                                            size: "lg",
                                            color: "#6682A9",
                                            width: 30,
                                          })
                                        : (0, a.jsx)(i.G, {
                                            icon: c._tD,
                                            size: "lg",
                                            color: "#6682A9",
                                            width: 30,
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(O.u, {
                                enter: "transition duration-100 ease-out",
                                enterFrom: "transform scale-95 opacity-0",
                                enterTo: "transform scale-100 opacity-100",
                                leave: "transition duration-75 ease-out",
                                leaveFrom: "transform scale-100 opacity-100",
                                leaveTo: "transform scale-95 opacity-0",
                                children: (0, a.jsx)(z.Panel, {
                                  className:
                                    "flex-col items-center justify-between",
                                  children: e.subcategories.map((t) =>
                                    (0, a.jsx)(
                                      u(),
                                      {
                                        href: "/"
                                          .concat(n, "/menu/#")
                                          .concat(t.id),
                                        prefetch: !0,
                                        children: (0, a.jsx)(
                                          "div",
                                          {
                                            className:
                                              "border-t activeLink pr-4 pl-[60px] h-[50px] flex items-center justify-between",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center gap-4 text-[18px]",
                                              children: [
                                                (0, a.jsx)(i.G, {
                                                  icon: "fa-duotone ".concat(
                                                    t.icon
                                                      ? t.icon.cls
                                                      : "fa-plate-utensils"
                                                  ),
                                                  size: "xl",
                                                  color: "#6682A9",
                                                  width: 30,
                                                }),
                                                (0, a.jsx)("span", {
                                                  children: t.name,
                                                }),
                                              ],
                                            }),
                                          },
                                          e.id
                                        ),
                                      },
                                      t.id
                                    )
                                  ),
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      e.id
                    )
              ),
        });
      }
    },
    55607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(57437),
        s = n(2265),
        o = n(6398),
        a = n(88477),
        i = n(24033),
        c = n(2996),
        l = n(18822),
        d = n(82102),
        u = n(16691),
        f = n.n(u),
        x = n(88808),
        p = n(24776);
      function m(e) {
        let { params: t, restaurant: n } = e,
          [u, m] = (0, s.useState)(0),
          h = (0, i.useSearchParams)(),
          j = h.get("t"),
          b = h.get("p"),
          g = (0, c.T)(),
          y = (0, c.C)((e) => e.states.language),
          v = () => {
            m(window.scrollY);
          };
        return (
          (0, s.useEffect)(() => {
            let e = async () => {
              try {
                await fetch(
                  ""
                    .concat("https://api.zon.uz", "/foodee/")
                    .concat(t.restaurantId, "/categories-with-products"),
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json;charset=utf-8",
                      "Accept-Language": y || "ru",
                    },
                    cache: "no-cache",
                  }
                )
                  .then((e) => e.json())
                  .then((e) => {
                    g((0, d.VX)(e.data));
                  });
              } catch (e) {
                console.log(e);
              }
            };
            e();
          }, [y]),
          (0, s.useEffect)(() => {
            if (n) {
              let e = {
                restaurantId: t.restaurantId,
                t: j,
                p: b,
                settings: n.data.settings,
                servicePercent: n.data.profile.servicePercent,
              };
              g((0, l.YZ)(e));
            }
            return (
              window.addEventListener("scroll", v),
              () => {
                window.removeEventListener("scroll", v);
              }
            );
          }, [v]),
          u > 150
            ? (0, r.jsx)("div", {
                className:
                  "bg-[#671ABF] p-2 px-4 flex items-center flex-col justify-center w-full z-10 h-[57px] navbar-animation max-sm:w-[100%] sm:w-[100%] lg:w-[40%] xl:w-[25%] fixed top-0",
                children: (0, r.jsxs)("div", {
                  className: "flex justify-between items-center gap-4 w-full",
                  children: [
                    (0, r.jsx)(o.default, {
                      direction: "app",
                      color: "#fff",
                      border: !0,
                    }),
                    (0, r.jsx)(a.default, { border: !0, color: "#fff" }),
                    (0, r.jsxs)("h2", {
                      className: "text-[18px] text-[#fff] font-bold truncate",
                      children: [
                        n.data.name,
                        n.data.verified
                          ? (0, r.jsx)(f(), {
                              src: x.default,
                              alt: "verified",
                              className: "inline ml-1 mt-[-2px]",
                              width: 18,
                              height: 18,
                            })
                          : "",
                      ],
                    }),
                    (0, r.jsx)(p.default, {}),
                  ],
                }),
              })
            : null
        );
      }
    },
    88477: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var r = n(57437),
        s = n(2265),
        o = n(9805),
        a = n(38179),
        i = n(91279),
        c = n(1102),
        l = n(2996),
        d = n(50622),
        u = n(29951),
        f = n(61396),
        x = n.n(f),
        p = n(16691),
        m = n.n(p),
        h = n(10124),
        j = n(64070),
        b = n(35809),
        g = n(35447);
      function y(e) {
        let [t, n] = (0, s.useState)(!1),
          [f, p] = (0, s.useState)({}),
          y = (0, l.C)((e) => e.states.language),
          v = async () => {
            let e = await (0, d.R)(y);
            p(e.drawer);
          };
        return (
          (0, s.useEffect)(() => {
            v();
          }, [y]),
          (0, r.jsxs)("div", {
            className: "max-sm:hidden max-lg:hidden",
            children: [
              e.border
                ? (0, r.jsx)("li", {
                    onClick: () => n(!0),
                    className:
                      "list-none bg-[#fff]/[0.15] rounded-[10px] h-[38px] w-[45px] flex items-center justify-center cursor-pointer",
                    children: (0, r.jsx)(i.G, {
                      icon: c.xiG,
                      size: "xl",
                      color: e.color,
                    }),
                  })
                : (0, r.jsx)("li", {
                    onClick: () => n(!0),
                    className: "list-none rounded-md cursor-pointer",
                    children: (0, r.jsx)(i.G, {
                      icon: c.xiG,
                      size: "xl",
                      color: e.color,
                    }),
                  }),
              (0, r.jsx)(o.u.Root, {
                show: t,
                as: s.Fragment,
                children: (0, r.jsxs)(a.V, {
                  as: "div",
                  className: "relative z-10",
                  onClose: n,
                  children: [
                    (0, r.jsx)(o.u.Child, {
                      as: s.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, r.jsx)("div", {
                        className:
                          "fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "fixed h-full inset-0 z-10 overflow-y-auto lg:w-[40%] xl:w-[25%] m-auto",
                      children: (0, r.jsx)("div", {
                        className: "flex h-full",
                        children: (0, r.jsx)(o.u.Child, {
                          as: s.Fragment,
                          enter: "ease-out duration-300",
                          enterFrom:
                            "opacity-0 translate-y-4 md:translate-y-0 md:scale-95",
                          enterTo: "opacity-100 translate-y-0 md:scale-100",
                          leave: "ease-in duration-200",
                          leaveFrom: "opacity-100 translate-y-0 md:scale-100",
                          leaveTo:
                            "opacity-0 translate-y-4 md:translate-y-0 md:scale-95",
                          children: (0, r.jsx)(a.V.Panel, {
                            className:
                              "w-full transform overflow-hidden bg-white",
                            children: (0, r.jsxs)("div", {
                              className: "overflow-scroll bg-white h-full",
                              children: [
                                (0, r.jsx)("nav", {
                                  className: "bg-[#671ABF]",
                                  children: (0, r.jsx)(u.Z, {
                                    children: (0, r.jsxs)("ul", {
                                      className:
                                        "flex justify-between items-center h-[60px]",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className: "tracking-wider ml-1",
                                          onClick: () => n(!1),
                                          children: (0, r.jsx)(i.G, {
                                            icon: c.WA2,
                                            size: "2x",
                                            color: "#CEF0FF",
                                            onClick: () => n(!1),
                                            className: "cursor-pointer",
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          className: "outline-none",
                                          children: (0, r.jsx)(m(), {
                                            src: b.Z,
                                            alt: "ZonLogoMobile",
                                            width: 120,
                                            height: 40,
                                            className: "py-1",
                                          }),
                                        }),
                                        (0, r.jsx)("li", { className: "w-6" }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-4 mt-4 items-center justify-center px-4",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "text-center m-2",
                                        children: [
                                          (0, r.jsx)("p", {
                                            className: "font-bold",
                                            children: "Foodee",
                                          }),
                                          (0, r.jsx)("p", {
                                            className: "text-[14px]",
                                            children:
                                              "Онлайн меню для ресторанов и гостиниц",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className: "text-[16px] font-bold",
                                        children: "Мы всегда рады вам помочь!",
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "text-center text-[14px]",
                                        children: [
                                          "По дополнительным вопросам свяжитесь ",
                                          (0, r.jsx)("br", {}),
                                          "с нами по телеграму ",
                                          (0, r.jsx)("a", {
                                            href: "https://t.me/foodee_admin",
                                            className:
                                              "text-[#5D78FF] font-bold",
                                            children: "@foodee_admin",
                                          }),
                                          (0, r.jsx)("br", {}),
                                          "или можете позвонит в наш колл-центр",
                                          (0, r.jsx)("br", {}),
                                          " по номеру ",
                                          (0, r.jsx)("a", {
                                            href: "tel: +998785555535",
                                            className:
                                              "text-[#5D78FF] font-bold",
                                            children: "+998-78 555-55-35",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "text-center mt-2",
                                        children: [
                                          (0, r.jsx)("p", {
                                            className: "text-[16px] font-bold",
                                            children: "Мы в социальных сетях",
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "mt-4 flex items-center justify-center gap-4 mb-4",
                                            children: [
                                              (0, r.jsx)(x(), {
                                                href: "https://www.instagram.com/foodee.uz",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, r.jsx)(m(), {
                                                      src: j.Z,
                                                      width: 38,
                                                      height: 38,
                                                      quality: 100,
                                                      alt: "instagram foodee",
                                                    }),
                                                    (0, r.jsx)("p", {
                                                      children: "foodee.menu",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, r.jsx)(x(), {
                                                href: "https://youtube.com/@foodeemenu",
                                                children: (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, r.jsx)(m(), {
                                                      src: h.Z,
                                                      width: 38,
                                                      height: 38,
                                                      quality: 100,
                                                      alt: "youtube foodee",
                                                    }),
                                                    (0, r.jsx)("p", {
                                                      children: "FoodeeMenu",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "px-10 w-full mt-4",
                                        children: (0, r.jsx)(x(), {
                                          href: "/",
                                          children: (0, r.jsx)(g.Z, {
                                            btnType: "drawerTypeBg",
                                            children: "Стать партнером",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    6398: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var r = n(57437),
        s = n(2265),
        o = n(41557);
      n(33461);
      var a = n(35809),
        i = n(74433),
        c = n.n(i),
        l = n(61396),
        d = n.n(l),
        u = n(29951),
        f = n(91279),
        x = n(1102),
        p = n(2996),
        m = n(50622),
        h = n(64070),
        j = n(10124),
        b = n(35447);
      function g(e) {
        let [t, n] = (0, s.useState)(!1),
          [i, l] = (0, s.useState)({}),
          g = (0, p.C)((e) => e.states.language),
          y = async () => {
            let e = await (0, m.R)(g);
            l(e.drawer);
          };
        return (
          (0, s.useEffect)(() => {
            y();
          }, [g]),
          (0, r.jsxs)("div", {
            className: "max-sm:block max-lg:block hidden",
            children: [
              e.border
                ? (0, r.jsx)("li", {
                    onClick: () => n(!0),
                    className:
                      "list-none bg-[#fff]/[0.15] rounded-[10px] h-[38px] w-[45px] flex items-center justify-center cursor-pointer",
                    children: (0, r.jsx)(f.G, {
                      icon: x.xiG,
                      size: "xl",
                      color: e.color,
                    }),
                  })
                : (0, r.jsx)("li", {
                    onClick: () => n(!0),
                    className: "list-none rounded-md cursor-pointer",
                    children: (0, r.jsx)(f.G, {
                      icon: x.xiG,
                      size: "xl",
                      color: e.color,
                    }),
                  }),
              (0, r.jsx)(o.Z, {
                open: t,
                onClose: () => n(!1),
                direction: "left",
                size: "100%",
                duration: 300,
                zIndex: 999,
                lockBackgroundScroll: !0,
                children: (0, r.jsxs)("div", {
                  className: "overflow-scroll bg-white h-full pb-[150px]",
                  children: [
                    (0, r.jsx)("nav", {
                      className: "bg-[#671ABF]",
                      children: (0, r.jsx)(u.Z, {
                        children: (0, r.jsxs)("ul", {
                          className:
                            "flex justify-between items-center h-[60px] !bg-[#671ABF]",
                          children: [
                            (0, r.jsx)("p", {
                              className: "tracking-wider ml-1",
                              onClick: () => n(!1),
                              children: (0, r.jsx)(f.G, {
                                icon: x.WA2,
                                size: "2x",
                                color: "#CEF0FF",
                                onClick: () => n(!1),
                                className: "cursor-pointer",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              className: "outline-none",
                              children: (0, r.jsx)(c(), {
                                src: a.Z,
                                alt: "ZonLogoMobile",
                                width: 120,
                                height: 40,
                                className: "py-1",
                              }),
                            }),
                            (0, r.jsx)("li", { className: "w-6" }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "!outline-0",
                      children: (0, r.jsxs)("div", {
                        className:
                          "flex flex-col gap-4 mt-4 items-center justify-center px-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "text-center m-2",
                            children: [
                              (0, r.jsx)("p", {
                                className: "font-bold",
                                children: "Foodee",
                              }),
                              (0, r.jsx)("p", {
                                className: "text-[14px]",
                                children:
                                  "Онлайн меню для ресторанов и гостиниц",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "text-[18px] font-bold",
                            children: "Мы всегда рады вам помочь!",
                          }),
                          (0, r.jsxs)("p", {
                            className: "text-center text-[14px]",
                            children: [
                              "По дополнительным вопросам свяжитесь ",
                              (0, r.jsx)("br", {}),
                              "с нами по телеграму ",
                              (0, r.jsx)("a", {
                                href: "https://t.me/foodee_admin",
                                className: "text-[#5D78FF] font-bold",
                                children: "@foodee_admin",
                              }),
                              (0, r.jsx)("br", {}),
                              "или можете позвонит в наш колл-центр",
                              (0, r.jsx)("br", {}),
                              " по номеру ",
                              (0, r.jsx)("a", {
                                href: "tel: +998785555535",
                                className: "text-[#5D78FF] font-bold",
                                children: "+998-78 555-55-35",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "text-center mt-2",
                            children: [
                              (0, r.jsx)("p", {
                                className: "text-[16px] font-bold",
                                children: "Мы в социальных сетях",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "mt-4 flex items-center justify-center gap-4 mb-4",
                                children: [
                                  (0, r.jsx)(d(), {
                                    href: "https://www.instagram.com/foodee.uz",
                                    children: (0, r.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, r.jsx)(c(), {
                                          src: h.Z,
                                          width: 38,
                                          height: 38,
                                          quality: 100,
                                          alt: "instagram foodee",
                                        }),
                                        (0, r.jsx)("p", {
                                          children: "foodee.menu",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)(d(), {
                                    href: "https://youtube.com/@foodeemenu",
                                    children: (0, r.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, r.jsx)(c(), {
                                          src: j.Z,
                                          width: 38,
                                          height: 38,
                                          quality: 100,
                                          alt: "youtube foodee",
                                        }),
                                        (0, r.jsx)("p", {
                                          children: "FoodeeMenu",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "px-10 w-full mt-4",
                            children: (0, r.jsx)(d(), {
                              href: "/",
                              children: (0, r.jsx)(b.Z, {
                                btnType: "drawerTypeBg",
                                children: "Стать партнером",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    98448: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(57437),
        s = n(2265),
        o = n(3198),
        a = n(65807),
        i = n(24033);
      function c(e) {
        let { langSSR: t } = e,
          n = (0, o.I0)(),
          c = (0, i.useRouter)(),
          l = (0, i.usePathname)(),
          d = (0, i.useSearchParams)();
        return (
          (0, s.useEffect)(() => {
            if (t) {
              n((0, a.m0)(t));
              let e = new URLSearchParams(d);
              e.delete("l"), c.replace("".concat(l, "?").concat(e.toString()));
            }
          }, [t]),
          (0, r.jsx)("div", {})
        );
      }
    },
    56734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var r = n(57437),
        s = n(14362),
        o = n(24033),
        a = n(91279),
        i = n(1102),
        c = n(61396),
        l = n.n(c),
        d = n(53027),
        u = n(41557),
        f = n(2265),
        x = n(24776),
        p = n(31255),
        m = n(25179),
        h = n(47713),
        j = n(2996),
        b = n(31373),
        g = n(65518),
        y = n(94544);
      function v() {
        let [e, t] = (0, f.useState)(!1),
          n = (0, h.getCookie)("jwt"),
          s = (0, j.T)(),
          o = (0, j.C)((e) => e.profile.account);
        return (
          (0, f.useEffect)(() => {
            n &&
              b.Z.get("/auth/profile")
                .then((e) => {
                  s((0, g.qU)(e.data.data));
                })
                .catch((e) => {
                  console.log(e);
                });
          }, [n]),
          (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                onClick: () => t(!0),
                children:
                  n && Object.keys(o).length > 0
                    ? (0, r.jsx)(a.G, {
                        icon: i.ILF,
                        size: "xl",
                        color: "#671ABF",
                      })
                    : (0, r.jsx)(a.G, {
                        icon: i.ILF,
                        size: "xl",
                        color: "#6682A9",
                      }),
              }),
              (0, r.jsx)(u.Z, {
                open: e,
                onClose: () => t(!1),
                direction: "bottom",
                className:
                  "rounded-tr-3xl rounded-tl-3xl absolute max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
                size: "auto",
                duration: 300,
                zIndex: 999,
                lockBackgroundScroll: !0,
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex items-center justify-between px-6 sm:px-6 mt-4",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "text-[18px] font-bold leading-6 truncate w-[90%] text-center",
                          children: "Пользователь",
                        }),
                        (0, r.jsx)("button", {
                          type: "button",
                          className:
                            "rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white",
                          onClick: () => t(!1),
                          children: (0, r.jsx)(a.G, {
                            icon: i.WA2,
                            size: "2x",
                            color: "#C2A3E5",
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("hr", { className: "mt-4 border-[#74859E]" }),
                    (0, r.jsxs)("div", {
                      className: "text-[16px]",
                      children: [
                        n && Object.keys(o).length > 0
                          ? (0, r.jsxs)("div", {
                              className:
                                "px-5 py-[10px] border-b activeLink flex items-center gap-3 h-[45px]",
                              children: [
                                (0, r.jsx)(a.G, {
                                  icon: i.ILF,
                                  size: "xl",
                                  color: "#671ABF",
                                  className: "w-7",
                                }),
                                (0, r.jsxs)("div", {
                                  className: "text-[14px]",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className: "font-bold",
                                      children: o.user.name,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-gray-500",
                                      children: (0, y.H)(o.user.mobile),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : "",
                        (0, r.jsx)(x.default, { drawer: !0 }),
                        (0, r.jsx)(p.Z, { drawer: !0 }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "text-center py-4 mb-8",
                      children: (0, r.jsx)(m.Z, {
                        profile: o,
                        handleClose: () => {
                          t(!1);
                        },
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function A(e) {
        let { params: t, lang: n, restaurant: c } = e,
          u = (0, o.usePathname)();
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className:
                "flex items-center fixed bottom-0 left-0 right-0 bg-[#fff] h-[50px] z-[5] bottomTools border-[#eee] max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
              children: (0, r.jsxs)("div", {
                className:
                  "flex justify-between w-full items-center text-[18px] cursor-pointer",
                children: [
                  (0, r.jsx)(l(), {
                    href: "/".concat(t.restaurantId),
                    children: (0, r.jsx)(a.G, {
                      icon: i.J9Y,
                      size: "xl",
                      color: 11 === u.length ? "#671ABF" : "#6682A9",
                    }),
                  }),
                  (0, r.jsx)(l(), {
                    href: "/".concat(t.restaurantId, "/menu"),
                    className: "mt-1",
                    children:
                      c.data.occupationType &&
                      "100" !== c.data.occupationType.id
                        ? (0, r.jsx)(a.G, {
                            icon: i.dRe,
                            size: "xl",
                            color: "#6682A9",
                          })
                        : (0, r.jsx)(a.G, {
                            icon: i.emM,
                            size: "xl",
                            color: "#6682A9",
                          }),
                  }),
                  (0, r.jsx)(s.Z, { params: t }),
                  (0, r.jsx)(d.Z, { data: c.data }),
                  (0, r.jsx)(v, {}),
                ],
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "bg-[#fff] h-[34px] fixed bottom-0 right-0 left-0 w-full z-[4] max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
            }),
          ],
        });
      }
    },
    53492: function (e, t, n) {
      "use strict";
      var r = n(1102);
      let { library: s } = n(1988);
      s.add(
        r.dRe,
        r.HJJ,
        r.E4o,
        r.x0p,
        r.ZuM,
        r.mS_,
        r.itX,
        r.qj1,
        r.XyN,
        r.epv,
        r.TTX,
        r.HG8,
        r.oaL,
        r.dzc,
        r._U4,
        r.YzY,
        r.mWY,
        r.NyR,
        r.vDA,
        r.euJ,
        r.EyX,
        r.z1I,
        r.E1P,
        r.dBL,
        r.BOt,
        r.iUR,
        r.kcM,
        r.t$p,
        r.NkB,
        r.UTZ,
        r.Ja5,
        r.NkB,
        r.X5b,
        r._sq,
        r.vTx,
        r.YY1,
        r.FL8,
        r.zWS,
        r.bty,
        r.XGw
      );
    },
    24502: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(2265);
      function s() {
        return (
          (0, r.useEffect)(() => {
            window.scrollTo(0, 0);
          }, []),
          ""
        );
      }
    },
    29951: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(57437);
      function s(e) {
        return (0, r.jsx)("div", {
          className: "wrap-container",
          children: e.children,
        });
      }
    },
    19167: function (e, t, n) {
      "use strict";
      function r(e) {
        let { children: t } = e;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NoSSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(11283);
    },
    65518: function (e, t, n) {
      "use strict";
      n.d(t, {
        qU: function () {
          return o;
        },
      });
      var r = n(50663);
      let s = (0, r.oM)({
          name: "profile",
          initialState: { account: {}, zonId: "", isLoading: !0 },
          reducers: {
            addProfile: (e, t) => ({ ...e, account: t.payload }),
            setZonId: (e, t) => ({ ...e, zonId: t.payload }),
            setIsLoading: (e, t) => ({ ...e, isLoading: t.payload }),
          },
        }),
        { addProfile: o, setZonId: a, setIsLoading: i } = s.actions;
      t.ZP = s;
    },
    18822: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xq: function () {
          return i;
        },
        LL: function () {
          return f;
        },
        Mj: function () {
          return d;
        },
        ZP: function () {
          return x;
        },
        nP: function () {
          return l;
        },
        kh: function () {
          return u;
        },
        YZ: function () {
          return c;
        },
      });
      var r = n(50663);
      let s = (e) => {
          localStorage.setItem("foodeeCart", JSON.stringify(e));
        },
        o = {
          info: (() => {
            let e = [];
            e = localStorage.getItem("foodeeCart");
            try {
              e = e && "null" !== e && e ? JSON.parse(e) : [];
            } catch (t) {
              e = [];
            }
            return e;
          })(),
        },
        a = (0, r.oM)({
          name: "restaurant",
          initialState: o,
          reducers: {
            addToCart(e, t) {
              let n = t.payload,
                r = e.info.find(
                  (e) => e.restaurantId.toString() === n.restaurantId.toString()
                ),
                o = r.cart.some((e) => e.id === n.product.id);
              o
                ? r.cart.map((e) =>
                    e.id === n.product.id ? { ...e, amount: ++e.amount } : e
                  )
                : (r.cart = [
                    ...r.cart,
                    Object.assign({}, n.product, { amount: 1 }),
                  ]),
                s(e.info);
            },
            setRestaurant(e, t) {
              let n = t.payload,
                r = e.info.some((e) => e.restaurantId === n.restaurantId),
                o = {
                  restaurantId: n.restaurantId,
                  tableNumber: n.t,
                  premise: n.p,
                  settings: n.settings,
                  cart: [],
                  servicePercent: n.servicePercent,
                },
                a = e.info.find(
                  (e) => e.restaurantId.toString() === n.restaurantId.toString()
                );
              if (
                (a &&
                  (n.t && ((a.tableNumber = n.t), s(e.info)),
                  n.settings && ((a.settings = n.settings), s(e.info)),
                  n.p && ((a.premise = n.p), s(e.info)),
                  (n.servicePercent || 0 === n.servicePercent) &&
                    ((a.servicePercent = n.servicePercent), s(e.info))),
                !r)
              )
                return s([...e.info, o]), { ...e, info: [...e.info, o] };
            },
            increment(e, t) {
              let n = t.payload;
              e.info
                .find(
                  (e) => e.restaurantId.toString() === n.restaurantId.toString()
                )
                .cart.map((e) =>
                  e.id === n.product.id ? { ...e, amount: ++e.amount } : e
                ),
                s(e.info);
            },
            decrement(e, t) {
              let n = t.payload,
                r = e.info.find(
                  (e) => e.restaurantId.toString() === n.restaurantId.toString()
                ),
                o = r.cart.find((e) => e.id === n.product.id);
              o.amount > 1
                ? r.cart.map((e) =>
                    e.id === n.product.id ? { ...e, amount: --e.amount } : e
                  )
                : (r.cart = r.cart.filter((e) => e.id !== o.id)),
                s(e.info);
            },
            removeProduct(e, t) {
              let n = t.payload,
                r = e.info.find(
                  (e) => e.restaurantId.toString() === n.restaurantId.toString()
                ),
                o = r.cart.find((e) => e.id === n.product.id);
              (r.cart = r.cart.filter((e) => e.id !== o.id)), s(e.info);
            },
            clearCart(e, t) {
              let n = t.payload;
              (e.info.find(
                (e) => e.restaurantId.toString() === n.restaurantId.toString()
              ).cart = []),
                s(e.info);
            },
          },
        }),
        {
          addToCart: i,
          setRestaurant: c,
          increment: l,
          decrement: d,
          removeProduct: u,
          clearCart: f,
        } = a.actions;
      var x = a;
    },
    82102: function (e, t, n) {
      "use strict";
      n.d(t, {
        GE: function () {
          return a;
        },
        VX: function () {
          return o;
        },
      });
      var r = n(50663);
      let s = (0, r.oM)({
          name: "menuData",
          initialState: { menu: [], food: {} },
          reducers: {
            setRestaurantMenu: (e, t) => ({ ...e, menu: t.payload }),
            setRestaurantFood: (e, t) => ({ ...e, food: t.payload }),
          },
        }),
        { setRestaurantMenu: o, setRestaurantFood: a } = s.actions;
      t.ZP = s;
    },
    35809: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/foodee-logo-white.4fab4997.svg",
        height: 35,
        width: 160,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    64070: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/instagram-firm-color.2bb97371.png",
        height: 128,
        width: 128,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVoGsFnGsBoGsJnGsFnGr9nGr9qGsZMaXFnGr9nGsFnGsBmGb2/taFEAAAADHRSTlO0vKfUD8uXACTphFkM5Q+bAAAACXBIWXMAAXcAAAF3AAHmAuEvAAAANUlEQVR4nBXDiQ3AQAgEsYHlv/77jWLJdFzmRROWZrKgcPNHIdw4xFKpYnHwPyMADT3sMv0BIkgA7OrfTQoAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    88808: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/verifiedIcon.b496d6d2.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    10124: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/youtube-firm-color.801f5811.png",
        height: 128,
        width: 128,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVkFMDt4/hMaXFmGrxmGL9gC8FrH8FtHsf///+jbOLg0PK8muPFp+fEpuebvWsGAAAAB3RSTlPy/QAvtLAs45LgkAAAAAlwSFlzAAF3AAABdwAB5gLhLwAAADBJREFUeJxFi8kRACAMhIiJrvHov11f6o8ZgNICohUcScKpaWaWFVafo28+PPXiux8rBAExakpvCQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    74433: function (e, t, n) {
      e.exports = n(33550);
    },
    22303: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var s = i(n(2265)),
        o = i(n(2390)),
        a = ["text", "onCopy", "options", "children"];
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e) {
        return (x = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && u(e, t);
        })(m, e);
        var t,
          n,
          i,
          c =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = x(m);
              if (t) {
                var s = x(this).constructor;
                e = Reflect.construct(n, arguments, s);
              } else e = n.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === r(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return f(e);
              })(this, e);
            });
        function m() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, m);
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            p(
              f((e = c.call.apply(c, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  r = n.text,
                  a = n.onCopy,
                  i = n.children,
                  c = n.options,
                  l = s.default.Children.only(i),
                  d = (0, o.default)(r, c);
                a && a(r, d),
                  l &&
                    l.props &&
                    "function" == typeof l.props.onClick &&
                    l.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          s = {},
                          o = Object.keys(e);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < o.length; r++)
                        (n = o[r]),
                          !(t.indexOf(n) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (s[n] = e[n]);
                    }
                    return s;
                  })(e, a),
                  r = s.default.Children.only(t);
                return s.default.cloneElement(
                  r,
                  l(l({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          d(m.prototype, n),
          i && d(m, i),
          Object.defineProperty(m, "prototype", { writable: !1 }),
          m
        );
      })(s.default.PureComponent);
      (t.CopyToClipboard = m),
        p(m, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    86781: function (e, t, n) {
      "use strict";
      var r = n(22303).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    25809: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    8076: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = n(2265),
        s = n(32600);
      function o(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function a(e, t) {
        let [n, a] = (0, r.useState)(() => o(e));
        return (
          (0, s.e)(() => {
            a(o(e));
          }, [e.type, e.as]),
          (0, s.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                a("button"));
          }, [n, t]),
          n
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        85, 511, 982, 159, 958, 581, 238, 279, 758, 54, 550, 952, 590, 971, 472,
        744,
      ],
      function () {
        return e((e.s = 12618));
      }
    ),
      (_N_E = e.O());
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [323],
  {
    12932: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 56734)),
        Promise.resolve().then(s.bind(s, 64812)),
        Promise.resolve().then(s.bind(s, 28216)),
        Promise.resolve().then(s.bind(s, 19147)),
        Promise.resolve().then(s.bind(s, 42023));
    },
    64812: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s(57437),
        n = s(61396),
        r = s.n(n),
        l = s(7381),
        c = s(2265),
        i = s(2996);
      function o(e) {
        let { categories: t } = e,
          s = (0, i.C)((e) => e.states.hash);
        (0, i.C)((e) => e.states.scrollPosition),
          (0, c.useEffect)(() => {
            l.OK.scrollTo("+".concat(s), {
              duration: 300,
              smooth: !0,
              containerId: "containerElement",
              horizontal: !0,
              offset: -10,
            });
          }, [s]);
        let n = (e, t) => {
          e.preventDefault(),
            l.OK.scrollTo(t, {
              duration: 300,
              smooth: !0,
              offset: -120,
              delay: 300,
            }),
            l.OK.scrollTo("+".concat(t), {
              duration: 400,
              smooth: !0,
              containerId: "containerElement",
              horizontal: !0,
              offset: -10,
              delay: 200,
            });
        };
        return (0, a.jsx)("div", {
          className:
            "sticky top-[57px] w-full z-[1] overflow-scroll scroll-ml-[100px]",
          id: "containerElement",
          children: (0, a.jsx)("div", {
            style: { zIndex: 1 },
            className: "py-3 px-4 flex gap-5",
            children:
              t &&
              t.map((e) =>
                (0, a.jsx)(
                  r(),
                  {
                    href: "#".concat(e.id),
                    onClick: (t) => n(t, e.id),
                    children: (0, a.jsx)(
                      "div",
                      {
                        className:
                          "py-1 px-3 rounded-[10px] font-medium cursor-pointer border border-[#C2A3E5] shadow-md shadow-[#ddd]/[0.5] bg-[#fff] ".concat(
                            e.id === s ? "active-scroll" : ""
                          ),
                        "data-to-scrollspy-id": "".concat(e.id),
                        id: "+".concat(e.id),
                        children: (0, a.jsx)("p", {
                          className: "whitespace-nowrap",
                          children: e.name,
                        }),
                      },
                      e.id
                    ),
                  },
                  e.id
                )
              ),
          }),
        });
      }
    },
    28216: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        });
      var a = s(57437),
        n = s(2265),
        r = s(74433),
        l = s.n(r),
        c = s(498),
        i = s(61672),
        o = s(94544),
        d = s(97268);
      function u() {
        let e =
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#eee] before:to-transparent";
        return (0, a.jsxs)("div", {
          className: "bg-[#fff] aspect-[2/0.75] flex",
          children: [
            (0, a.jsx)("div", {
              className: "h-[100%] w-[50%] rounded-[15px] line-clamp-2 ".concat(
                e
              ),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col justify-between py-4",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "h-[2rem] w-[12rem] rounded-[15px] line-clamp-2 ".concat(e),
                }),
                (0, a.jsx)("div", {
                  className:
                    "h-[2rem] w-[12rem] rounded-[15px] line-clamp-2 ".concat(e),
                }),
              ],
            }),
          ],
        });
      }
      function p() {
        return (0, a.jsxs)("div", {
          className: "grid grid-cols-1 gap-2",
          children: [
            (0, a.jsx)(u, {}),
            (0, a.jsx)(u, {}),
            (0, a.jsx)(u, {}),
            (0, a.jsx)(u, {}),
          ],
        });
      }
      var x = s(2996),
        m = s(82102),
        f = s(9805),
        h = s(38179),
        g = s(35447);
      function b(e) {
        let { card: t, data: s, params: r, restaurant: d } = e,
          [u, p] = (0, n.useState)(!1);
        return (0, a.jsxs)(
          "div",
          {
            className: "grid ".concat(
              "small" === t ? "grid-cols-2" : "grid-cols-1",
              " items-center overflow-hidden aspect-[2/auto] cursor-pointer grayscale-[30%] opacity-60 bg-gray-100 rounded-[5px]"
            ),
            onClick: () => p(!0),
            children: [
              (0, a.jsx)("div", {
                className: "relative",
                children: s.images
                  ? (0, a.jsx)(l(), {
                      src: ""
                        .concat("https://api.zon.uz")
                        .concat(s.images[0].src),
                      alt: s.name,
                      className:
                        "w-full overflow-hidden rounded-[10px] after:transition after:ease-[ease] after:duration-500",
                      width: 230,
                      height: 172,
                      objectFit: "cover",
                      layout: "responsive",
                      style: {
                        backgroundImage: "url("
                          .concat("https://api.zon.uz", "/files/accounts/")
                          .concat(r.restaurantId, ".webp)"),
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      },
                    })
                  : (0, a.jsx)(l(), {
                      src: ""
                        .concat("https://api.zon.uz", "/files/accounts/")
                        .concat(r.restaurantId, ".webp"),
                      alt: s.name,
                      className: "w-full overflow-hidden rounded-[10px]",
                      width: 230,
                      height: 172,
                      layout: "responsive",
                      placeholder: "blur",
                      blurDataURL: "data:image/svg+xml;base64,".concat(
                        (0, c.s)((0, i.f)(700, 475))
                      ),
                    }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "p-2 w-full h-full flex flex-col justify-between gap-2",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-base font-[500] white mb-0 leading-[19px] overflow-hidden white",
                    children: s.name,
                  }),
                  "small" !== t
                    ? (0, a.jsx)("span", { children: s.description })
                    : "",
                  (0, a.jsxs)("div", {
                    className: "grid ".concat(
                      "small" === t ? "grid-cols-1" : "grid-cols-2",
                      " items-center justify-between"
                    ),
                    children: [
                      (0, a.jsx)("div", {
                        className: "h-[25px]",
                        children: (0, a.jsx)("p", {
                          className: "text-[20px] font-[500] whitespace-nowrap",
                          children: (0, o.SC)(
                            d.data.settings.currency,
                            s.finalPrice
                          ),
                        }),
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "mt-1 cursor-pointer text-center p-[6px] bg-[#FFE2E5] border border-[#F64F61] rounded-[50px] text-[#F64F61] font-[500] tracking-[1px] hover:bg-opacity-[0.5] w-full",
                        children: "Нет в наличии",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(f.u.Root, {
                show: u,
                as: n.Fragment,
                children: (0, a.jsxs)(h.V, {
                  as: "div",
                  className: "relative z-[999999]",
                  onClose: p,
                  children: [
                    (0, a.jsx)(f.u.Child, {
                      as: n.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, a.jsx)("div", {
                        className:
                          "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "fixed inset-0 z-10 overflow-y-auto max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
                      children: (0, a.jsx)("div", {
                        className:
                          "min-h-full items-center justify-center p-4 text-center flex sm:p-0",
                        children: (0, a.jsx)(f.u.Child, {
                          as: n.Fragment,
                          enter: "ease-out duration-300",
                          enterFrom:
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          enterTo: "opacity-100 translate-y-0 sm:scale-100",
                          leave: "ease-in duration-200",
                          leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                          leaveTo:
                            "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          children: (0, a.jsxs)(h.V.Panel, {
                            className:
                              "relative transform overflow-hidden rounded-[10px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg !w-[80%] max-sm:!w-full",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",
                                children: (0, a.jsx)("div", {
                                  className: "sm:flex sm:items-start",
                                  children: (0, a.jsx)("div", {
                                    className: "m-auto text-center",
                                    children: (0, a.jsx)(h.V.Title, {
                                      as: "h2",
                                      className:
                                        "text-base leading-6 text-gray-900 text-center font-bold text-[18px]",
                                      children: "Блюдо сейчас нет в наличии",
                                    }),
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: " bg-gray-50 px-4 py-3 flex gap-4",
                                children: (0, a.jsx)(g.Z, {
                                  type: "button",
                                  btnType: "drawerTypeBg",
                                  onClick: () => p(!1),
                                  children: "Закрыть",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          },
          s.id
        );
      }
      var j = function (e) {
          let { categories: t, params: s, setOpen: r, restaurant: u } = e,
            f = (0, x.C)((e) => e.states.cardDisplay),
            h = (0, x.T)();
          (0, n.useEffect)(() => {
            let e = decodeURIComponent(
                decodeURIComponent(window.location.hash.split("#")[1])
              ),
              t = window.document.getElementById(e);
            t && t.scrollIntoView({ behavior: "auto", block: "start" });
          }, [t.products]);
          let g = (e) => {
            h((0, m.GE)(e)), r(!0);
          };
          return t.products
            ? t.products
              ? (0, a.jsx)("div", {
                  className: "grid grid-cols-1 gap-2",
                  children: t.products.map((e) =>
                    "1" === e.stockState.id
                      ? (0, a.jsxs)(
                          "div",
                          {
                            className: "grid ".concat(
                              "small" === f ? "grid-cols-2" : "grid-cols-1",
                              " items-center overflow-hidden aspect-[2/auto] cursor-pointer"
                            ),
                            onClick: () => g(e),
                            children: [
                              (0, a.jsxs)("div", {
                                className: "relative",
                                children: [
                                  e.images
                                    ? (0, a.jsx)(l(), {
                                        src: ""
                                          .concat("https://api.zon.uz")
                                          .concat(e.images[0].src),
                                        alt: e.name,
                                        className:
                                          "w-full overflow-hidden rounded-[10px] after:transition after:ease-[ease] after:duration-500",
                                        width: 230,
                                        height: 172,
                                        objectFit: "cover",
                                        layout: "responsive",
                                        style: {
                                          backgroundImage: "url("
                                            .concat(
                                              "https://api.zon.uz",
                                              "/files/accounts/"
                                            )
                                            .concat(s.restaurantId, ".webp)"),
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                        },
                                      })
                                    : (0, a.jsx)(l(), {
                                        src: ""
                                          .concat(
                                            "https://api.zon.uz",
                                            "/files/accounts/"
                                          )
                                          .concat(s.restaurantId, ".webp"),
                                        alt: e.name,
                                        className:
                                          "w-full overflow-hidden rounded-[10px]",
                                        width: 230,
                                        height: 172,
                                        layout: "responsive",
                                        placeholder: "blur",
                                        blurDataURL:
                                          "data:image/svg+xml;base64,".concat(
                                            (0, c.s)((0, i.f)(700, 475))
                                          ),
                                      }),
                                  e.images && e.images.length > 1
                                    ? (0, a.jsxs)("div", {
                                        className:
                                          "absolute right-2 bottom-2 border bg-[#fff] bg-opacity-95 w-14 text-[14px] text-[#1BC5BD] font-[500] text-center rounded-[15px] border-[#1BC5BD]",
                                        children: ["1/", e.images.length],
                                      })
                                    : null,
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "p-2 w-full h-full flex flex-col justify-between gap-2",
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-base font-[500] white mb-0 leading-[19px] overflow-hidden white",
                                    children: e.name,
                                  }),
                                  "small" !== f
                                    ? (0, a.jsx)("span", {
                                        children: e.description,
                                      })
                                    : "",
                                  (0, a.jsxs)("div", {
                                    className: "grid ".concat(
                                      "small" === f
                                        ? "grid-cols-1"
                                        : "grid-cols-2",
                                      " items-center justify-between"
                                    ),
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "h-[25px]",
                                        children: (0, a.jsx)("p", {
                                          className:
                                            "text-[20px] font-[500] whitespace-nowrap",
                                          children: (0, o.SC)(
                                            u.data.settings.currency,
                                            e.finalPrice
                                          ),
                                        }),
                                      }),
                                      (0, a.jsx)(d.Z, { product: e }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id
                        )
                      : (0, a.jsx)(
                          b,
                          { card: f, data: e, params: s, restaurant: u },
                          e.id
                        )
                  ),
                })
              : void 0
            : (0, a.jsx)(p, {});
        },
        v = s(4327),
        w = s(91279);
      s(53492);
      var y = s(65807),
        N = s(41557);
      s(33461);
      var z = s(1102),
        C = s(72720);
      s(94099), s(4544), s(82924), s(76088);
      var k = s(67410),
        E = s(14362),
        F = s(24033);
      function T(e) {
        let { open: t, setOpen: s, restaurant: r } = e,
          c = (0, F.useParams)(),
          i = (0, x.C)((e) => e.restaurantMenu.food),
          u = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          u.current && u.current.swiper && u.current.swiper.slideTo(0);
        }, [t]);
        let p = () => {
          s(!1);
        };
        return (0, a.jsx)(N.Z, {
          open: t,
          onClose: p,
          direction: "bottom",
          className:
            "rounded-tr-3xl rounded-tl-3xl absolute max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto overflow-scroll max-h-[98%]",
          size: "auto",
          duration: 200,
          zIndex: 999,
          lockBackgroundScroll: !0,
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex items-center justify-between px-6 sm:px-6 mt-4",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-xl font-semibold leading-6 text-gray-900 truncate w-[90%]",
                    children: i.name,
                  }),
                  (0, a.jsx)("button", {
                    type: "button",
                    className:
                      "rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white",
                    onClick: p,
                    children: (0, a.jsx)(w.G, {
                      icon: z.WA2,
                      size: "2x",
                      color: "#74859E",
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mt-5 bg-[#f9f9f9]",
                children: (0, a.jsx)(C.tq, {
                  zoom: !0,
                  effect: "fade",
                  loop: !0,
                  pagination: !!i.images &&
                    i.images.length > 0 && {
                      clickable: !0,
                      bulletClass:
                        "swiper-product-bullet swiper-pagination-bullet",
                      type: "fraction",
                    },
                  className: "mySwiper",
                  ref: u,
                  children:
                    i.images &&
                    i.images.length > 0 &&
                    i.images.map((e) =>
                      (0, a.jsx)(
                        C.o5,
                        {
                          className:
                            "rounded-[5px] overflow-hidden cursor-pointer",
                          children: (0, a.jsx)(l(), {
                            src: "".concat("https://api.zon.uz").concat(e.src),
                            alt: i.name,
                            width: 230,
                            height: 172,
                            className: "w-full overflow-hidden",
                            layout: "responsive",
                            placeholder: "blur",
                            blurDataURL: ""
                              .concat("https://api.zon.uz")
                              .concat(e.src),
                            style: {
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            },
                          }),
                        },
                        e.src
                      )
                    ),
                }),
              }),
              i.description &&
                (0, a.jsx)("div", {
                  className: "px-5 py-2 bg-[#f9f9f9] border-b",
                  children: i.description,
                }),
              (0, a.jsxs)("div", {
                className: "p-5 flex items-center justify-between",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-2xl font-bold",
                    children: (0, o.SC)(r.data.settings.currency, i.finalPrice),
                  }),
                  (0, a.jsx)("span", {}),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-5 items-center border-t p-5",
                children: [
                  (0, a.jsx)("div", {
                    className: "pl-12 col-span-3",
                    children: (0, a.jsx)(E.Z, {
                      params: { restaurantId: c.restaurantId },
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "col-span-2",
                    children: (0, a.jsx)(d.Z, { product: i }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function I(e) {
        let { categories: t, params: s, language: r, restaurant: l } = e,
          c = (0, x.C)((e) => e.restaurantMenu.menu),
          [i, o] = (0, n.useState)(t),
          d = (0, x.T)(),
          u = (0, x.C)((e) => e.states.language),
          [p, f] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          if (c.length < 1 || (null == r ? void 0 : r.value) !== u) {
            let e = async () => {
              try {
                await fetch(
                  ""
                    .concat("https://api.zon.uz", "/foodee/")
                    .concat(s.restaurantId, "/categories-with-products"),
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json;charset=utf-8",
                      "Accept-Language": u || "ru",
                    },
                    cache: "no-store",
                  }
                )
                  .then((e) => e.json())
                  .then((e) => {
                    o(e.data), d((0, m.VX)(e.data));
                  });
              } catch (e) {
                console.log(e);
              }
            };
            e();
          } else o(c);
        }, [u]);
        let h = (e, t) => {
          e && t && d((0, y.aZ)("".concat(t.id)));
        };
        return (0, a.jsxs)("div", {
          className: "pb-[200px]",
          children: [
            i &&
              i.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "relative mt-[15px]",
                    id: e.id,
                    children: [
                      (0, a.jsx)(v.df, {
                        onChange: (t) => h(t, e),
                        rootMargin: "0px 0px -700px 0px",
                        children: (0, a.jsxs)("p", {
                          className:
                            "text-[24px] font-bold mb-5 flex items-center gap-2",
                          children: [
                            (0, a.jsx)(w.G, {
                              icon: "fa-duotone ".concat(
                                e.icon ? e.icon.cls : "fa-plate-utensils"
                              ),
                              size: "xl",
                              color: "#6682A9",
                              width: 30,
                            }),
                            e.name,
                          ],
                        }),
                      }),
                      (0, a.jsx)(j, {
                        categories: e,
                        params: s,
                        setOpen: f,
                        restaurant: l,
                      }),
                    ],
                  },
                  e.id
                )
              ),
            (0, a.jsx)(T, { open: p, setOpen: f, restaurant: l }),
          ],
        });
      }
      k.ZP.use([k.tl, k.xW]);
    },
    19147: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var a = s(57437),
        n = s(2265),
        r = s(24776),
        l = s(2996),
        c = s(65807),
        i = s(91279),
        o = s(46800),
        d = s(61396),
        u = s.n(d),
        p = s(24033),
        x = s(50622);
      function m(e) {
        let { data: t } = e,
          s = (0, l.C)((e) => e.states.cardDisplay),
          d = (0, l.C)((e) => e.states.scrollPosition),
          m = (0, l.T)(),
          f = (0, p.useParams)(),
          [h, g] = (0, n.useState)({}),
          b = (0, l.C)((e) => e.states.language),
          j = async () => {
            let e = await (0, x.R)(b);
            g(e.products);
          };
        (0, n.useEffect)(() => {
          j();
        }, [b]);
        let v = (e) => {
          m((0, c.pk)(e));
        };
        return (0, a.jsx)("nav", {
          className:
            "sticky z-[2] bg-[#671ABF] h-[60px] flex items-center w-full ".concat(
              "down" === d ? "top-0 hidden" : "top-0"
            ),
          children: (0, a.jsxs)("div", {
            className: "flex items-center justify-between px-4 gap-5 w-full",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-[10px]",
                children: [
                  (0, a.jsx)(u(), {
                    href: "/".concat(f.restaurantId),
                    children: (0, a.jsx)("div", {
                      className:
                        "bg-[#fff]/[0.15] h-[38px] w-[45px] flex items-center justify-center rounded-[10px]",
                      children: (0, a.jsx)(i.G, {
                        icon: o.A35,
                        color: "#C2A3E5",
                        size: "xl",
                      }),
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-[20px] text-[#fff] font-[500]",
                    children: h.menu,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-[180px] cursor-pointer flex items-center gap-[10px]",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "rounded-[10px] flex justify-between bg-[#fff]/[0.15] w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-center items-center flex-col gap-1 h-[38px] w-full pl-2 ".concat(
                            "small" === s ? "bg-[#fff]" : "",
                            " rounded-[10px] pr-2"
                          ),
                        onClick: () => v("small"),
                        children: [
                          (0, a.jsx)("span", {
                            className: "w-[60%] h-3 ".concat(
                              "small" === s ? "bg-[#671ABF]" : "bg-[#C2A3E5]",
                              " rounded-3xl"
                            ),
                          }),
                          (0, a.jsx)("span", {
                            className: "w-[60%] h-3 ".concat(
                              "small" === s ? "bg-[#671ABF]" : "bg-[#C2A3E5]",
                              " rounded-3xl"
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex justify-center p-1 pl-2 w-full ".concat(
                            "large" === s ? "bg-[#fff]" : "",
                            " rounded-[10px] pr-2"
                          ),
                        onClick: () => v("large"),
                        children: (0, a.jsx)("span", {
                          className: "w-[60%] h-full ".concat(
                            "large" === s ? "bg-[#671ABF]" : "bg-[#C2A3E5]",
                            " rounded-md"
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.default, { xl: "25%", lg: "40%" }),
                ],
              }),
            ],
          }),
        });
      }
    },
    53492: function (e, t, s) {
      "use strict";
      var a = s(1102);
      let { library: n } = s(1988);
      n.add(
        a.dRe,
        a.HJJ,
        a.E4o,
        a.x0p,
        a.ZuM,
        a.mS_,
        a.itX,
        a.qj1,
        a.XyN,
        a.epv,
        a.TTX,
        a.HG8,
        a.oaL,
        a.dzc,
        a._U4,
        a.YzY,
        a.mWY,
        a.NyR,
        a.vDA,
        a.euJ,
        a.EyX,
        a.z1I,
        a.E1P,
        a.dBL,
        a.BOt,
        a.iUR,
        a.kcM,
        a.t$p,
        a.NkB,
        a.UTZ,
        a.Ja5,
        a.NkB,
        a.X5b,
        a._sq,
        a.vTx,
        a.YY1,
        a.FL8,
        a.zWS,
        a.bty,
        a.XGw
      );
    },
    42023: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s(57437),
        n = s(2265),
        r = s(2996);
      function l(e) {
        let { children: t } = e;
        (0, r.T)();
        let [s, l] = (0, n.useState)(0);
        return (0, a.jsx)("div", { children: t });
      }
    },
    82102: function (e, t, s) {
      "use strict";
      s.d(t, {
        GE: function () {
          return l;
        },
        VX: function () {
          return r;
        },
      });
      var a = s(50663);
      let n = (0, a.oM)({
          name: "menuData",
          initialState: { menu: [], food: {} },
          reducers: {
            setRestaurantMenu: (e, t) => ({ ...e, menu: t.payload }),
            setRestaurantFood: (e, t) => ({ ...e, food: t.payload }),
          },
        }),
        { setRestaurantMenu: r, setRestaurantFood: l } = n.actions;
      t.ZP = n;
    },
  },
  function (e) {
    e.O(
      0,
      [
        85, 511, 982, 159, 958, 581, 238, 279, 758, 54, 550, 952, 960, 590, 377,
        971, 472, 744,
      ],
      function () {
        return e((e.s = 12932));
      }
    ),
      (_N_E = e.O());
  },
]);

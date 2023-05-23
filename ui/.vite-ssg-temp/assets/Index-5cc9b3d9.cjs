"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const chevronLeft = require("./chevron-left-a8d63069.cjs");
const vue$1 = require("./vue-e05dbcf6.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const Create = require("./Create-b0b45491.cjs");
const Edit = require("./Edit-0170675c.cjs");
const AppPage = require("./AppPage-59a319b8.cjs");
const SrcLink = require("./SrcLink-f8ac95d7.cjs");
const utils = require("./utils-e1770aac.cjs");
const main = require("../main.cjs");
require("./home-cb246cad.cjs");
require("@servicestack/vue");
require("@servicestack/client");
require("nprogress");
require("pinia");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_2 = { name: "mdi-code-tags", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5m12.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38l-2.5-2.5Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1 = { name: "mdi-square-edit-outline", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "fluent-add-circle24-regular", render };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const newBooking = vue.ref(false);
    const editBookingId = vue.ref();
    const bookings = vue.ref([]);
    const refreshBookings = async () => {
      const api = await main.client.api(new main.QueryBookings());
      if (api.succeeded) {
        bookings.value = api.response.results ?? [];
      }
    };
    vue.onMounted(async () => await refreshBookings());
    const reset = (args = {}) => {
      newBooking.value = args.newBooking ?? false;
      editBookingId.value = args.editBookingId ?? void 0;
    };
    const onDone = () => {
      reset();
      refreshBookings();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OutlineButton = vue.resolveComponent("OutlineButton");
      const _component_FluentAddCircle24Regular = __unplugin_components_0;
      const _component_MdiSquareEditOutline = __unplugin_components_1;
      const _component_MdiCodeTags = __unplugin_components_2;
      const _component_LogosVue = vue$1.__unplugin_components_1;
      const _component_MdiChevronLeft = chevronLeft.__unplugin_components_3;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_MdiChevronRight = AppBreadcrumb.__unplugin_components_4;
      _push(serverRenderer.ssrRenderComponent(AppPage.AppPage, vue.mergeProps({
        title: "Bookings CRUD",
        class: "max-w-fit"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (newBooking.value) {
              _push2(serverRenderer.ssrRenderComponent(Create.default, {
                class: "max-w-screen-sm",
                onDone
              }, null, _parent2, _scopeId));
            } else if (editBookingId.value) {
              _push2(serverRenderer.ssrRenderComponent(Edit.default, {
                id: editBookingId.value,
                class: "max-w-screen-sm",
                onDone
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer.ssrRenderComponent(_component_OutlineButton, {
                onClick: () => reset({ newBooking: true })
              }, {
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` New Booking `);
                  } else {
                    return [
                      vue.createTextVNode(" New Booking ")
                    ];
                  }
                }),
                _: 1
                /* STABLE */
              }, _parent2, _scopeId));
            }
            if (bookings.value.length > 0) {
              _push2(`<div class="mt-4 flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"${_scopeId}><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr class="select-none"${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_FluentAddCircle24Regular, {
                class: "w-6 h-6 cursor-pointer",
                title: "New Booking",
                onClick: () => reset({ newBooking: true })
              }, null, _parent2, _scopeId));
              _push2(`</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Id </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Name </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}><span class="hidden sm:inline"${_scopeId}>Room </span>Type </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}><span class="hidden sm:inline"${_scopeId}>Room </span>No </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cost </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Start Date </th><th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Created By </th></tr></thead><tbody${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(bookings.value, (booking, index) => {
                _push2(`<tr class="${serverRenderer.ssrRenderClass(index % 2 === 0 ? "bg-white" : "bg-gray-50")}"${_scopeId}><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_MdiSquareEditOutline, {
                  class: "w-6 h-6 cursor-pointer",
                  title: "Edit Booking",
                  onClick: () => reset({ editBookingId: booking.id })
                }, null, _parent2, _scopeId));
                _push2(`</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(booking.id)}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(booking.name)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(booking.roomType)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(booking.roomNumber)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(utils.formatCurrency)(booking.cost))}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(utils.formatDate)(booking.bookingStartDate))}</td><td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(booking.createdBy)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5 flex justify-between items-center"${_scopeId}><div class="flex"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(SrcLink.__unplugin_components_2, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/api/Lisa.ServiceModel/Bookings.cs" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_MdiCodeTags, { class: "w-5 h-5 inline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_MdiCodeTags, { class: "w-5 h-5 inline" })
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(SrcLink.__unplugin_components_2, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/bookings-crud/Index.vue" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_MdiChevronLeft, {
              class: "text-gray-400 w-6 h-6 inline",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, {
              class: "text-gray-400 hover:text-gray-600",
              to: "/bookingsdata"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bookings DataGrid`);
                } else {
                  return [
                    vue.createTextVNode("Bookings DataGrid")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div><div class="mx-4 text-gray-400"${_scopeId}>|</div><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, {
              class: "text-gray-400 hover:text-gray-600",
              to: "/bookings"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bookings AutoQueryGrid`);
                } else {
                  return [
                    vue.createTextVNode("Bookings AutoQueryGrid")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_MdiChevronRight, {
              class: "text-gray-400 w-6 h-6 inline",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-12"${_scopeId}><h2 class="mb-5 sm:text-3xl text-gray-700"${_scopeId}><a class="text-green-600 hover:text-green-800" href="https://docs.servicestack.net/autoquery"${_scopeId}>Creating a multi-user .NET Core Booking system in minutes</a></h2><iframe class="youtube" src="https://www.youtube.com/embed/rSFiikDjGos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen${_scopeId}></iframe></div>`);
          } else {
            return [
              newBooking.value ? (vue.openBlock(), vue.createBlock(Create.default, {
                key: 0,
                class: "max-w-screen-sm",
                onDone
              })) : editBookingId.value ? (vue.openBlock(), vue.createBlock(Edit.default, {
                key: 1,
                id: editBookingId.value,
                class: "max-w-screen-sm",
                onDone
              }, null, 8, ["id"])) : (vue.openBlock(), vue.createBlock(_component_OutlineButton, {
                key: 2,
                onClick: () => reset({ newBooking: true })
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" New Booking ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])),
              bookings.value.length > 0 ? (vue.openBlock(), vue.createBlock("div", {
                key: 3,
                class: "mt-4 flex flex-col"
              }, [
                vue.createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                  vue.createVNode("div", { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, [
                    vue.createVNode("div", { class: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" }, [
                      vue.createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                        vue.createVNode("thead", { class: "bg-gray-50" }, [
                          vue.createVNode("tr", { class: "select-none" }, [
                            vue.createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              vue.createVNode(_component_FluentAddCircle24Regular, {
                                class: "w-6 h-6 cursor-pointer",
                                title: "New Booking",
                                onClick: () => reset({ newBooking: true })
                              }, null, 8, ["onClick"])
                            ]),
                            vue.createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, " Id "),
                            vue.createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Name "),
                            vue.createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              vue.createVNode("span", { class: "hidden sm:inline" }, "Room "),
                              vue.createTextVNode("Type ")
                            ]),
                            vue.createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, [
                              vue.createVNode("span", { class: "hidden sm:inline" }, "Room "),
                              vue.createTextVNode("No ")
                            ]),
                            vue.createVNode("th", {
                              scope: "col",
                              class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            }, " Cost "),
                            vue.createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Start Date "),
                            vue.createVNode("th", { class: "hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Created By ")
                          ])
                        ]),
                        vue.createVNode("tbody", null, [
                          (vue.openBlock(true), vue.createBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(bookings.value, (booking, index) => {
                              return vue.openBlock(), vue.createBlock(
                                "tr",
                                {
                                  key: booking.id,
                                  class: index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                },
                                [
                                  vue.createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, [
                                    vue.createVNode(_component_MdiSquareEditOutline, {
                                      class: "w-6 h-6 cursor-pointer",
                                      title: "Edit Booking",
                                      onClick: () => reset({ editBookingId: booking.id })
                                    }, null, 8, ["onClick"])
                                  ]),
                                  vue.createVNode(
                                    "td",
                                    { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(booking.id),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(booking.name),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(booking.roomType),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(booking.roomNumber),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(vue.unref(utils.formatCurrency)(booking.cost)),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(vue.unref(utils.formatDate)(booking.bookingStartDate)),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createVNode(
                                    "td",
                                    { class: "hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" },
                                    vue.toDisplayString(booking.createdBy),
                                    1
                                    /* TEXT */
                                  )
                                ],
                                2
                                /* CLASS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createVNode("div", { class: "mt-5 flex justify-between items-center" }, [
                vue.createVNode("div", { class: "flex" }, [
                  vue.createVNode(SrcLink.__unplugin_components_2, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/api/Lisa.ServiceModel/Bookings.cs" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_MdiCodeTags, { class: "w-5 h-5 inline" })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(SrcLink.__unplugin_components_2, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/bookings-crud/Index.vue" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                vue.createVNode("div", { class: "flex justify-between" }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_MdiChevronLeft, {
                      class: "text-gray-400 w-6 h-6 inline",
                      "aria-hidden": "true"
                    }),
                    vue.createVNode(_component_RouterLink, {
                      class: "text-gray-400 hover:text-gray-600",
                      to: "/bookingsdata"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Bookings DataGrid")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createVNode("div", { class: "mx-4 text-gray-400" }, "|"),
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_RouterLink, {
                      class: "text-gray-400 hover:text-gray-600",
                      to: "/bookings"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Bookings AutoQueryGrid")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_MdiChevronRight, {
                      class: "text-gray-400 w-6 h-6 inline",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "mt-12" }, [
                vue.createVNode("h2", { class: "mb-5 sm:text-3xl text-gray-700" }, [
                  vue.createVNode("a", {
                    class: "text-green-600 hover:text-green-800",
                    href: "https://docs.servicestack.net/autoquery"
                  }, "Creating a multi-user .NET Core Booking system in minutes")
                ]),
                vue.createVNode("iframe", {
                  class: "youtube",
                  src: "https://www.youtube.com/embed/rSFiikDjGos",
                  frameborder: "0",
                  allow: "autoplay; encrypted-media",
                  allowfullscreen: ""
                })
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/bookings-crud/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/bookings-crud/Index.vue"]]);
exports.default = Index;

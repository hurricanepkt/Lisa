"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const chevronLeft = require("./chevron-left-a8d63069.cjs");
const SrcLink = require("./SrcLink-f8ac95d7.cjs");
const vue$1 = require("./vue-e05dbcf6.cjs");
const AppPage = require("./AppPage-59a319b8.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const ServiceStackVue = require("@servicestack/vue");
const main = require("../main.cjs");
require("./home-cb246cad.cjs");
require("@servicestack/client");
require("nprogress");
require("pinia");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "BookingsData",
  __ssrInlineRender: true,
  setup(__props) {
    const create = vue.ref(false);
    const editId = vue.ref();
    const edit = vue.ref();
    const bookings = vue.ref([]);
    const client = ServiceStackVue.useClient();
    const { currency } = ServiceStackVue.useFormatters();
    const { hasRole } = ServiceStackVue.useAuth();
    const canDelete = vue.computed(() => hasRole("Manager"));
    async function refresh() {
      const api = await client.api(new main.QueryBookings());
      if (api.succeeded) {
        bookings.value = api.response.results || [];
      }
    }
    function reset(args = {}) {
      create.value = args.create ?? false;
      editId.value = args.editId ?? void 0;
    }
    function done() {
      refresh();
      reset();
    }
    vue.watch(editId, async () => {
      if (editId.value) {
        const api = await client.api(new main.QueryBookings({ id: editId.value }));
        if (api.succeeded) {
          edit.value = api.response.results[0];
          return;
        }
      }
      edit.value = null;
    });
    vue.onMounted(refresh);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppPage = AppPage.AppPage;
      const _component_AutoCreateForm = vue.resolveComponent("AutoCreateForm");
      const _component_AutoEditForm = vue.resolveComponent("AutoEditForm");
      const _component_OutlineButton = vue.resolveComponent("OutlineButton");
      const _component_DataGrid = vue.resolveComponent("DataGrid");
      const _component_LogosVue = vue$1.__unplugin_components_1;
      const _component_SrcLink = SrcLink.__unplugin_components_2;
      const _component_MdiChevronLeft = chevronLeft.__unplugin_components_3;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_MdiChevronRight = AppBreadcrumb.__unplugin_components_4;
      _push(serverRenderer.ssrRenderComponent(_component_AppPage, vue.mergeProps({
        title: "Bookings DataGrid",
        class: "sm:max-w-fit"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (create.value) {
              _push2(serverRenderer.ssrRenderComponent(_component_AutoCreateForm, {
                type: "CreateBooking",
                onDone: done,
                onSave: done
              }, null, _parent2, _scopeId));
            } else if (edit.value) {
              _push2(serverRenderer.ssrRenderComponent(_component_AutoEditForm, {
                type: "UpdateBooking",
                deleteType: vue.unref(canDelete) ? "DeleteBooking" : null,
                modelValue: edit.value,
                "onUpdate:modelValue": ($event) => edit.value = $event,
                onDone: done,
                onSave: done,
                onDelete: done
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_component_OutlineButton, {
              onClick: () => reset({ create: true })
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${_scopeId2}><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"${_scopeId2}></path></svg> New Booking `);
                } else {
                  return [
                    (vue.openBlock(), vue.createBlock("svg", {
                      class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      vue.createVNode("path", {
                        d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                        fill: "currentColor"
                      })
                    ])),
                    vue.createTextVNode(" New Booking ")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_DataGrid, {
              items: bookings.value,
              "visible-from": { name: "xl", bookingStartDate: "sm", bookingEndDate: "xl" },
              onRowSelected: ($event) => editId.value = editId.value == $event.id ? null : $event.id,
              "is-selected": (row) => editId.value == row.id
            }, {
              id: vue.withCtx(({ id }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-gray-900"${_scopeId2}>${serverRenderer.ssrInterpolate(id)}</span>`);
                } else {
                  return [
                    vue.createVNode(
                      "span",
                      { class: "text-gray-900" },
                      vue.toDisplayString(id),
                      1
                      /* TEXT */
                    )
                  ];
                }
              }),
              name: vue.withCtx(({ name }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(name)}`);
                } else {
                  return [
                    vue.createTextVNode(
                      vue.toDisplayString(name),
                      1
                      /* TEXT */
                    )
                  ];
                }
              }),
              "roomNumber-header": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="hidden lg:inline"${_scopeId2}>Room </span>No `);
                } else {
                  return [
                    vue.createVNode("span", { class: "hidden lg:inline" }, "Room "),
                    vue.createTextVNode("No ")
                  ];
                }
              }),
              cost: vue.withCtx(({ cost }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${vue.unref(currency)(cost)}</span>`);
                } else {
                  return [
                    vue.createVNode("span", {
                      innerHTML: vue.unref(currency)(cost)
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              "bookingStartDate-header": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start<span class="hidden lg:inline"${_scopeId2}> Date</span>`);
                } else {
                  return [
                    vue.createTextVNode(" Start"),
                    vue.createVNode("span", { class: "hidden lg:inline" }, " Date")
                  ];
                }
              }),
              "bookingEndDate-header": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` End<span class="hidden lg:inline"${_scopeId2}> Date</span>`);
                } else {
                  return [
                    vue.createTextVNode(" End"),
                    vue.createVNode("span", { class: "hidden lg:inline" }, " Date")
                  ];
                }
              }),
              "createdBy-header": vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Employee `);
                } else {
                  return [
                    vue.createTextVNode(" Employee ")
                  ];
                }
              }),
              createdBy: vue.withCtx(({ createdBy }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(createdBy)}`);
                } else {
                  return [
                    vue.createTextVNode(
                      vue.toDisplayString(createdBy),
                      1
                      /* TEXT */
                    )
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`<div class="mt-5 flex justify-between items-center"${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/BookingsData.vue" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_MdiChevronLeft, {
              class: "text-gray-400 w-6 h-6 inline",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
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
            _push2(`</div><div class="mx-4 text-gray-400"${_scopeId}>|</div><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, {
              class: "text-gray-400 hover:text-gray-600",
              to: "/bookings-crud"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Custom Bookings`);
                } else {
                  return [
                    vue.createTextVNode("Custom Bookings")
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
            _push2(`</div></div></div><div class="mt-12"${_scopeId}><h2 class="mb-5 sm:text-3xl text-gray-700"${_scopeId}><a class="text-green-600 hover:text-green-800" href="https://docs.servicestack.net/vue/"${_scopeId}>Vue Component Library</a></h2><iframe class="youtube" src="https://www.youtube.com/embed/YIa0w6whe2U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen${_scopeId}></iframe></div>`);
          } else {
            return [
              create.value ? (vue.openBlock(), vue.createBlock(_component_AutoCreateForm, {
                key: 0,
                type: "CreateBooking",
                onDone: done,
                onSave: done
              })) : edit.value ? (vue.openBlock(), vue.createBlock(_component_AutoEditForm, {
                key: 1,
                type: "UpdateBooking",
                deleteType: vue.unref(canDelete) ? "DeleteBooking" : null,
                modelValue: edit.value,
                "onUpdate:modelValue": ($event) => edit.value = $event,
                onDone: done,
                onSave: done,
                onDelete: done
              }, null, 8, ["deleteType", "modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_OutlineButton, {
                onClick: () => reset({ create: true })
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    vue.createVNode("path", {
                      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                      fill: "currentColor"
                    })
                  ])),
                  vue.createTextVNode(" New Booking ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              vue.createVNode(_component_DataGrid, {
                items: bookings.value,
                "visible-from": { name: "xl", bookingStartDate: "sm", bookingEndDate: "xl" },
                onRowSelected: ($event) => editId.value = editId.value == $event.id ? null : $event.id,
                "is-selected": (row) => editId.value == row.id
              }, {
                id: vue.withCtx(({ id }) => [
                  vue.createVNode(
                    "span",
                    { class: "text-gray-900" },
                    vue.toDisplayString(id),
                    1
                    /* TEXT */
                  )
                ]),
                name: vue.withCtx(({ name }) => [
                  vue.createTextVNode(
                    vue.toDisplayString(name),
                    1
                    /* TEXT */
                  )
                ]),
                "roomNumber-header": vue.withCtx(() => [
                  vue.createVNode("span", { class: "hidden lg:inline" }, "Room "),
                  vue.createTextVNode("No ")
                ]),
                cost: vue.withCtx(({ cost }) => [
                  vue.createVNode("span", {
                    innerHTML: vue.unref(currency)(cost)
                  }, null, 8, ["innerHTML"])
                ]),
                "bookingStartDate-header": vue.withCtx(() => [
                  vue.createTextVNode(" Start"),
                  vue.createVNode("span", { class: "hidden lg:inline" }, " Date")
                ]),
                "bookingEndDate-header": vue.withCtx(() => [
                  vue.createTextVNode(" End"),
                  vue.createVNode("span", { class: "hidden lg:inline" }, " Date")
                ]),
                "createdBy-header": vue.withCtx(() => [
                  vue.createTextVNode(" Employee ")
                ]),
                createdBy: vue.withCtx(({ createdBy }) => [
                  vue.createTextVNode(
                    vue.toDisplayString(createdBy),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["items", "onRowSelected", "is-selected"]),
              vue.createVNode("div", { class: "mt-5 flex justify-between items-center" }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_LogosVue, { class: "w-5 h-5 inline" }),
                  vue.createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/BookingsData.vue" })
                ]),
                vue.createVNode("div", { class: "flex justify-between" }, [
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_MdiChevronLeft, {
                      class: "text-gray-400 w-6 h-6 inline",
                      "aria-hidden": "true"
                    }),
                    vue.createVNode(_component_RouterLink, {
                      class: "text-gray-400 hover:text-gray-600",
                      to: "/bookings"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Bookings AutoQueryGrid")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createVNode("div", { class: "mx-4 text-gray-400" }, "|"),
                  vue.createVNode("div", null, [
                    vue.createVNode(_component_RouterLink, {
                      class: "text-gray-400 hover:text-gray-600",
                      to: "/bookings-crud"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Custom Bookings")
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
                    href: "https://docs.servicestack.net/vue/"
                  }, "Vue Component Library")
                ]),
                vue.createVNode("iframe", {
                  class: "youtube",
                  src: "https://www.youtube.com/embed/YIa0w6whe2U",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/BookingsData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BookingsData = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/BookingsData.vue"]]);
exports.default = BookingsData;

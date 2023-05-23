"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const chevronLeft = require("./chevron-left-a8d63069.cjs");
const SrcLink = require("./SrcLink-f8ac95d7.cjs");
const vue$1 = require("./vue-e05dbcf6.cjs");
const AppPage = require("./AppPage-59a319b8.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
require("./home-cb246cad.cjs");
require("@servicestack/client");
require("nprogress");
require("pinia");
require("@servicestack/vue");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppPage = AppPage.AppPage;
  const _component_AutoQueryGrid = vue.resolveComponent("AutoQueryGrid");
  const _component_LogosVue = vue$1.__unplugin_components_1;
  const _component_SrcLink = SrcLink.__unplugin_components_2;
  const _component_MdiChevronLeft = chevronLeft.__unplugin_components_3;
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  const _component_MdiChevronRight = AppBreadcrumb.__unplugin_components_4;
  _push(serverRenderer.ssrRenderComponent(_component_AppPage, vue.mergeProps({
    title: "Bookings AutoQueryGrid",
    class: "sm:max-w-fit"
  }, _attrs), {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_AutoQueryGrid, {
          type: "Booking",
          "selected-columns": "id,name,roomType,roomNumber,bookingStartDate,bookingEndDate",
          "visible-from": { name: "xl", bookingStartDate: "sm", bookingEndDate: "xl" }
        }, null, _parent2, _scopeId));
        _push2(`<div class="mt-5 flex justify-between items-center"${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/Bookings.vue" }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex justify-between"${_scopeId}><div${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_MdiChevronLeft, {
          class: "text-gray-400 w-6 h-6 inline",
          "aria-hidden": "true"
        }, null, _parent2, _scopeId));
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
        _push2(`</div><div class="mx-4 text-gray-400"${_scopeId}>|</div><div${_scopeId}>`);
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
        _push2(serverRenderer.ssrRenderComponent(_component_MdiChevronRight, {
          class: "text-gray-400 w-6 h-6 inline",
          "aria-hidden": "true"
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div><div class="mt-12"${_scopeId}><h2 class="mb-5 sm:text-3xl text-gray-700"${_scopeId}> Vue <a class="text-green-600 hover:text-green-800" href="https://docs.servicestack.net/vue/gallery/autoquerygrid"${_scopeId}>AutoQueryGrid</a> Component </h2><iframe class="youtube" src="https://www.youtube.com/embed/znCoC-Ct0Ps" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen${_scopeId}></iframe></div>`);
      } else {
        return [
          vue.createVNode(_component_AutoQueryGrid, {
            type: "Booking",
            "selected-columns": "id,name,roomType,roomNumber,bookingStartDate,bookingEndDate",
            "visible-from": { name: "xl", bookingStartDate: "sm", bookingEndDate: "xl" }
          }),
          vue.createVNode("div", { class: "mt-5 flex justify-between items-center" }, [
            vue.createVNode("div", null, [
              vue.createVNode(_component_LogosVue, { class: "w-5 h-5 inline" }),
              vue.createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/Bookings.vue" })
            ]),
            vue.createVNode("div", { class: "flex justify-between" }, [
              vue.createVNode("div", null, [
                vue.createVNode(_component_MdiChevronLeft, {
                  class: "text-gray-400 w-6 h-6 inline",
                  "aria-hidden": "true"
                }),
                vue.createVNode(_component_RouterLink, {
                  class: "text-gray-400 hover:text-gray-600",
                  to: "/bookings-crud"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Custom Bookings")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createVNode("div", { class: "mx-4 text-gray-400" }, "|"),
              vue.createVNode("div", null, [
                vue.createVNode(_component_RouterLink, {
                  class: "text-gray-400 hover:text-gray-600",
                  to: "/bookingsdata"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("Bookings DataGrid")
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
              vue.createTextVNode(" Vue "),
              vue.createVNode("a", {
                class: "text-green-600 hover:text-green-800",
                href: "https://docs.servicestack.net/vue/gallery/autoquerygrid"
              }, "AutoQueryGrid"),
              vue.createTextVNode(" Component ")
            ]),
            vue.createVNode("iframe", {
              class: "youtube",
              src: "https://www.youtube.com/embed/znCoC-Ct0Ps",
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Bookings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Bookings = /* @__PURE__ */ main._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/Bookings.vue"]]);
exports.default = Bookings;

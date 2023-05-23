"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const routeBlock = require("./route-block-7cba861b.cjs");
const main = require("../main.cjs");
require("nprogress");
require("pinia");
require("@servicestack/vue");
require("vite-ssg");
require("@servicestack/client");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
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
const __unplugin_components_0 = { name: "mdi-arrow-left-thin", render };
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MdiArrowLeftThin = __unplugin_components_0;
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="flex items-center"><h1 class="inline-block border-gray-300 border-r m-0 mr-5 py-2 pr-4 text-2xl font-medium">404</h1><div class="inline-block text-left"><h2 class="text-sm font-normal">This page does not exist.</h2></div></div><div class="mt-2"><button class="inline-flex justify-center py-1 px-2 text-sm">`);
  _push(serverRenderer.ssrRenderComponent(_component_MdiArrowLeftThin, { class: "w-5 h-5" }, null, _parent));
  _push(` back </button></div></div>`);
}
if (typeof routeBlock.block0 === "function")
  routeBlock.block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____all_ = /* @__PURE__ */ main._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/[...all].vue"]]);
exports.default = ____all_;

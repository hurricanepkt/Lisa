"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const home = require("./home-cb246cad.cjs");
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MdiHome = home.__unplugin_components_0;
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 class="inline-block border-gray-300 border-r m-0 mr-5 py-2 pr-4 text-2xl font-medium align-top">403</h1><div class="inline-block text-left h-8 align-middle"><h2 class="text-sm leading-10 font-normal m-0 p-0">You do not have access to this page.</h2></div><div class="mt-2"><button class="inline-flex justify-center py-1 px-2 text-sm">`);
  _push(serverRenderer.ssrRenderComponent(_component_MdiHome, { class: "w-8 h-8" }, null, _parent));
  _push(`</button></div></div>`);
}
if (typeof routeBlock.block0 === "function")
  routeBlock.block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Forbidden.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Forbidden = /* @__PURE__ */ main._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/Forbidden.vue"]]);
exports.default = Forbidden;

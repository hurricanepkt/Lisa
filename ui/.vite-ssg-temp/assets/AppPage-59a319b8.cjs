"use strict";
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const main = require("../main.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "AppPage",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen mx-auto" }, _attrs))}><main class="flex"><div class="container px-5 mb-32">`);
      _push(serverRenderer.ssrRenderComponent(AppBreadcrumb.AppBreadcrumb, {
        class: "my-8",
        name: __props.title
      }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppPage = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/AppPage.vue"]]);
exports.AppPage = AppPage;

"use strict";
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const vueRouter = require("vue-router");
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const main = require("../main.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "MarkdownPage",
  __ssrInlineRender: true,
  props: {
    frontmatter: { type: Object, required: true }
  },
  setup(__props) {
    const crumbs = vue.computed(() => vueRouter.useRouter().currentRoute.value.meta.crumbs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen" }, _attrs))}><main class="flex justify-center"><div class="mx-auto px-5 mb-32">`);
      if (__props.frontmatter.title) {
        _push(serverRenderer.ssrRenderComponent(AppBreadcrumb.AppBreadcrumb, {
          class: "my-8",
          crumbs: vue.unref(crumbs),
          name: __props.frontmatter.title
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<article class="prose lg:prose-xl">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MarkdownPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/MarkdownPage.vue"]]);
exports.__unplugin_components_0 = __unplugin_components_0;

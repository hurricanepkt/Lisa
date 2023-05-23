"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const AppBreadcrumb = require("./AppBreadcrumb-f0b6d5d6.cjs");
const vueRouter = require("vue-router");
const main = require("../main.cjs");
require("./home-cb246cad.cjs");
require("nprogress");
require("pinia");
require("@servicestack/vue");
require("vite-ssg");
require("@servicestack/client");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = vueRouter.useRouter();
    const postRoutes = router.getRoutes().filter((r) => {
      var _a;
      return r.path.startsWith("/posts/") && ((_a = r.meta) == null ? void 0 : _a.frontmatter);
    }).map((r) => {
      var _a;
      return { path: r.path, name: r.name, frontmatter: (_a = r.meta) == null ? void 0 : _a.frontmatter };
    }).sort((a, b) => {
      var _a;
      return (_a = b.frontmatter.date ?? "") == null ? void 0 : _a.localeCompare(a.frontmatter.date ?? "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen" }, _attrs))}><main class="flex justify-center"><div class="mx-auto px-5">`);
      _push(serverRenderer.ssrRenderComponent(AppBreadcrumb.AppBreadcrumb, {
        class: "my-8",
        name: "Markdown Blog"
      }, null, _parent));
      _push(`<h3 class="text-lg mb-8"> List of Markdown Posts in <code class="bg-blue-50 text-blue-500 px-2 py-1 rounded">/posts</code></h3><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(postRoutes), (route) => {
        _push(`<div class="mb-8">`);
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          class: "text-2xl hover:text-green-600",
          to: route.path
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(route.frontmatter.title)}`);
            } else {
              return [
                vue.createTextVNode(
                  vue.toDisplayString(route.frontmatter.title),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 2
          /* DYNAMIC */
        }, _parent));
        if (route.frontmatter.summary) {
          _push(`<p class="text-gray-500">${serverRenderer.ssrInterpolate(route.frontmatter.summary)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/posts/Index.vue"]]);
exports.default = Index;

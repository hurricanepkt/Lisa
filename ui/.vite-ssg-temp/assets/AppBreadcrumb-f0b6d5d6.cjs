"use strict";
const vue = require("vue");
const home = require("./home-cb246cad.cjs");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
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
const __unplugin_components_4 = { name: "mdi-chevron-right", render };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "AppBreadcrumb",
  __ssrInlineRender: true,
  props: {
    crumbs: { type: Array, required: false, default: () => [] },
    name: { type: String, required: true },
    href: { type: String, required: false },
    current: { type: Boolean, required: false, default: true }
  },
  setup(__props) {
    const { current } = __props;
    const ariaCurrent = vue.computed(() => current ? "page" : void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_MdiHome = home.__unplugin_components_0;
      const _component_MdiChevronRight = __unplugin_components_4;
      _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "flex",
        "aria-label": "Breadcrumb"
      }, _attrs))}><ol role="list" class="flex items-center sm:space-x-4 flex-wrap sm:flex-nowrap"><li><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="text-gray-600 hover:text-gray-700"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_MdiHome, {
              class: "flex-shrink-0 h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Home</span></a>`);
          } else {
            return [
              vue.createVNode("a", { class: "text-gray-600 hover:text-gray-700" }, [
                vue.createVNode(_component_MdiHome, {
                  class: "flex-shrink-0 h-10 w-10",
                  "aria-hidden": "true"
                }),
                vue.createVNode("span", { class: "sr-only" }, "Home")
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div></li><!--[-->`);
      serverRenderer.ssrRenderList(__props.crumbs, (crumb) => {
        _push(`<li><div class="flex items-center">`);
        _push(serverRenderer.ssrRenderComponent(_component_MdiChevronRight, {
          class: "flex-shrink-0 h-8 w-8 text-gray-400",
          "aria-hidden": "true"
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          to: crumb.href
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700"${_scopeId}>${serverRenderer.ssrInterpolate(crumb.name)}</a>`);
            } else {
              return [
                vue.createVNode(
                  "a",
                  { class: "ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700" },
                  vue.toDisplayString(crumb.name),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 2
          /* DYNAMIC */
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--><li><div class="flex items-center">`);
      _push(serverRenderer.ssrRenderComponent(_component_MdiChevronRight, {
        class: "flex-shrink-0 h-8 w-8 text-gray-400",
        "aria-hidden": "true"
      }, null, _parent));
      if (__props.href) {
        _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: __props.href }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700"${serverRenderer.ssrRenderAttr("aria-current", vue.unref(ariaCurrent))}${_scopeId}>${serverRenderer.ssrInterpolate(__props.name)}</a>`);
            } else {
              return [
                vue.createVNode("a", {
                  class: "ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700",
                  "aria-current": vue.unref(ariaCurrent)
                }, vue.toDisplayString(__props.name), 9, ["aria-current"])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
      } else {
        _push(`<span class="ml-1 sm:ml-4 sm:text-3xl text-gray-700"${serverRenderer.ssrRenderAttr("aria-current", vue.unref(ariaCurrent))}>${serverRenderer.ssrInterpolate(__props.name)}</span>`);
      }
      _push(`</div></li></ol></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppBreadcrumb = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/AppBreadcrumb.vue"]]);
exports.AppBreadcrumb = AppBreadcrumb;
exports.__unplugin_components_4 = __unplugin_components_4;

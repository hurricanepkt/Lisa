"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const AppPage = require("./AppPage-59a319b8.cjs");
const ServiceStackVue = require("@servicestack/vue");
const main = require("../main.cjs");
require("./AppBreadcrumb-f0b6d5d6.cjs");
require("./home-cb246cad.cjs");
require("nprogress");
require("pinia");
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
    d: "M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
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
const __unplugin_components_0 = { name: "mdi-account-circle", render };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { user } = ServiceStackVue.useAuth();
    const roles = ((_a = user.value) == null ? void 0 : _a.roles) ?? [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MdiAccountCircle = __unplugin_components_0;
      const _component_SecondaryButton = vue.resolveComponent("SecondaryButton");
      if (vue.unref(user)) {
        _push(serverRenderer.ssrRenderComponent(AppPage.AppPage, vue.mergeProps({
          title: `${vue.unref(user).displayName} Profile`,
          class: "max-w-prose flex justify-center"
        }, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_MdiAccountCircle, { class: "w-36 h-36 text-gray-700" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(user).displayName)}</div><div${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(user).userName)}</div><div class="mt-2"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(roles), (role) => {
                _push2(`<span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"${_scopeId}>${serverRenderer.ssrInterpolate(role)}</span>`);
              });
              _push2(`<!--]--></div>`);
              _push2(serverRenderer.ssrRenderComponent(_component_SecondaryButton, {
                class: "mt-8",
                onClick: ($event) => vue.unref(main.signout)(_ctx.$router)
              }, {
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Sign Out`);
                  } else {
                    return [
                      vue.createTextVNode("Sign Out")
                    ];
                  }
                }),
                _: 1
                /* STABLE */
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vue.createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                  vue.createVNode(_component_MdiAccountCircle, { class: "w-36 h-36 text-gray-700" }),
                  vue.createVNode(
                    "div",
                    null,
                    vue.toDisplayString(vue.unref(user).displayName),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(
                    "div",
                    null,
                    vue.toDisplayString(vue.unref(user).userName),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode("div", { class: "mt-2" }, [
                    (vue.openBlock(true), vue.createBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(roles), (role) => {
                        return vue.openBlock(), vue.createBlock(
                          "span",
                          {
                            key: role,
                            class: "ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                          },
                          vue.toDisplayString(role),
                          1
                          /* TEXT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  vue.createVNode(_component_SecondaryButton, {
                    class: "mt-8",
                    onClick: ($event) => vue.unref(main.signout)(_ctx.$router)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Sign Out")
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/Profile.vue"]]);
exports.default = Profile;

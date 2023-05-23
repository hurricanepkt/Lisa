"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const AppPage = require("./AppPage-59a319b8.cjs");
const vueRouter = require("vue-router");
const client = require("@servicestack/client");
const ServiceStackVue = require("@servicestack/vue");
const main = require("../main.cjs");
require("./AppBreadcrumb-f0b6d5d6.cjs");
require("./home-cb246cad.cjs");
require("nprogress");
require("pinia");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Signin",
  __ssrInlineRender: true,
  setup(__props) {
    const client$1 = ServiceStackVue.useClient();
    const { user, signIn } = ServiceStackVue.useAuth();
    const username = vue.ref("");
    const password = vue.ref("");
    const router = vueRouter.useRouter();
    const stop = vue.watchEffect(() => {
      if (user.value) {
        router.push(main.getRedirect(router) ?? "/");
        vue.nextTick(() => stop());
      }
    });
    function setUser(email) {
      username.value = email;
      password.value = "p@55wOrd";
    }
    async function onSubmit(e) {
      const { userName, password: password2, rememberMe } = client.serializeToObject(e.currentTarget);
      const api = await client$1.api(new main.Authenticate({ provider: "credentials", userName, password: password2, rememberMe }));
      if (api.succeeded) {
        signIn(api.response);
        await main.revalidate();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ErrorSummary = vue.resolveComponent("ErrorSummary");
      const _component_TextInput = vue.resolveComponent("TextInput");
      const _component_CheckboxInput = vue.resolveComponent("CheckboxInput");
      const _component_SecondaryButton = vue.resolveComponent("SecondaryButton");
      const _component_PrimaryButton = vue.resolveComponent("PrimaryButton");
      _push(serverRenderer.ssrRenderComponent(AppPage.AppPage, vue.mergeProps({
        title: "Sign In",
        class: "max-w-xl"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="shadow overflow-hidden sm:rounded-md"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ErrorSummary, { except: "userName,password,rememberMe" }, null, _parent2, _scopeId));
            _push2(`<div class="px-4 py-5 bg-white space-y-6 sm:p-6"${_scopeId}><div class="flex flex-col gap-y-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              id: "userName",
              placeholder: "Email",
              help: "Email you signed up with",
              modelValue: username.value,
              "onUpdate:modelValue": ($event) => username.value = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              id: "password",
              type: "password",
              help: "6 characters or more",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_CheckboxInput, { id: "rememberMe" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SecondaryButton, { href: "/signup" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register New User`);
                } else {
                  return [
                    vue.createTextVNode("Register New User")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_PrimaryButton, { class: "ml-3" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    vue.createTextVNode("Login")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form><div class="flex mt-8"${_scopeId}><h3 class="hidden xs:block mr-4 leading-8 text-gray-500"${_scopeId}>Quick Links</h3><span class="relative z-0 inline-flex shadow-sm rounded-md"${_scopeId}><button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> admin@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> manager@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> employee@email.com </button><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> new@user.com </button></span></div>`);
          } else {
            return [
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(onSubmit, ["prevent"])
              }, [
                vue.createVNode("div", { class: "shadow overflow-hidden sm:rounded-md" }, [
                  vue.createVNode(_component_ErrorSummary, { except: "userName,password,rememberMe" }),
                  vue.createVNode("div", { class: "px-4 py-5 bg-white space-y-6 sm:p-6" }, [
                    vue.createVNode("div", { class: "flex flex-col gap-y-4" }, [
                      vue.createVNode(_component_TextInput, {
                        id: "userName",
                        placeholder: "Email",
                        help: "Email you signed up with",
                        modelValue: username.value,
                        "onUpdate:modelValue": ($event) => username.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vue.createVNode(_component_TextInput, {
                        id: "password",
                        type: "password",
                        help: "6 characters or more",
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vue.createVNode(_component_CheckboxInput, { id: "rememberMe" })
                    ])
                  ]),
                  vue.createVNode("div", { class: "pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6" }, [
                    vue.createVNode("div", { class: "flex justify-end" }, [
                      vue.createVNode(_component_SecondaryButton, { href: "/signup" }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("Register New User")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createVNode(_component_PrimaryButton, { class: "ml-3" }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("Login")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ])
              ], 40, ["onSubmit"]),
              vue.createVNode("div", { class: "flex mt-8" }, [
                vue.createVNode("h3", { class: "hidden xs:block mr-4 leading-8 text-gray-500" }, "Quick Links"),
                vue.createVNode("span", { class: "relative z-0 inline-flex shadow-sm rounded-md" }, [
                  vue.createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("admin@email.com"),
                    class: "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " admin@email.com ", 8, ["onClick"]),
                  vue.createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("manager@email.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " manager@email.com ", 8, ["onClick"]),
                  vue.createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("employee@email.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " employee@email.com ", 8, ["onClick"]),
                  vue.createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("new@user.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  }, " new@user.com ", 8, ["onClick"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Signin = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/Signin.vue"]]);
exports.default = Signin;

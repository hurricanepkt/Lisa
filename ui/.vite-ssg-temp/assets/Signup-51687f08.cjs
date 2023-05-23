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
  __name: "Signup",
  __ssrInlineRender: true,
  setup(__props) {
    const client$1 = ServiceStackVue.useClient();
    const { user } = ServiceStackVue.useAuth();
    const displayName = vue.ref("");
    const username = vue.ref("");
    const password = vue.ref("");
    const confirmPassword = vue.ref("");
    const router = vueRouter.useRouter();
    const stop = vue.watchEffect(() => {
      if (user.value) {
        router.push(main.getRedirect(router) ?? "/");
        vue.nextTick(stop);
      }
    });
    function setUser(email) {
      let first = client.leftPart(email, "@");
      let last = client.rightPart(client.leftPart(email, "."), "@");
      displayName.value = client.toPascalCase(first) + " " + client.toPascalCase(last);
      username.value = email;
      confirmPassword.value = password.value = "p@55wOrd";
    }
    async function onSubmit(e) {
      const {
        displayName: displayName2,
        userName,
        password: password2,
        confirmPassword: confirmPassword2,
        autoLogin
      } = client.serializeToObject(e.currentTarget);
      if (password2 !== confirmPassword2) {
        client$1.setError({ fieldName: "confirmPassword", message: "Passwords do not match" });
        return;
      }
      const api = await client$1.api(new main.Register({ displayName: displayName2, email: userName, password: password2, confirmPassword: confirmPassword2, autoLogin }));
      if (api.succeeded) {
        await main.revalidate();
        await router.push("/signin");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ErrorSummary = vue.resolveComponent("ErrorSummary");
      const _component_TextInput = vue.resolveComponent("TextInput");
      const _component_CheckboxInput = vue.resolveComponent("CheckboxInput");
      const _component_FormLoading = vue.resolveComponent("FormLoading");
      const _component_PrimaryButton = vue.resolveComponent("PrimaryButton");
      _push(serverRenderer.ssrRenderComponent(AppPage.AppPage, vue.mergeProps({
        title: "Sign Up",
        class: "max-w-xl"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="shadow overflow-hidden sm:rounded-md"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ErrorSummary, { except: "displayName,userName,password,confirmPassword,autoLogin" }, null, _parent2, _scopeId));
            _push2(`<div class="px-4 py-5 bg-white space-y-6 sm:p-6"${_scopeId}><div class="flex flex-col gap-y-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              id: "displayName",
              help: "Your first and last name",
              modelValue: displayName.value,
              "onUpdate:modelValue": ($event) => displayName.value = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              id: "userName",
              placeholder: "Email",
              help: "",
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
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              id: "confirmPassword",
              type: "password",
              modelValue: confirmPassword.value,
              "onUpdate:modelValue": ($event) => confirmPassword.value = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_CheckboxInput, { id: "autoLogin" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_FormLoading, { class: "flex-1" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_PrimaryButton, { class: "ml-3" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign Up`);
                } else {
                  return [
                    vue.createTextVNode("Sign Up")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form><div class="flex mt-8 ml-8"${_scopeId}><h3 class="mr-4 leading-8 text-gray-500"${_scopeId}>Quick Links</h3><span class="relative z-0 inline-flex shadow-sm rounded-md"${_scopeId}><button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"${_scopeId}> new@user.com </button></span></div>`);
          } else {
            return [
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(onSubmit, ["prevent"])
              }, [
                vue.createVNode("div", { class: "shadow overflow-hidden sm:rounded-md" }, [
                  vue.createVNode(_component_ErrorSummary, { except: "displayName,userName,password,confirmPassword,autoLogin" }),
                  vue.createVNode("div", { class: "px-4 py-5 bg-white space-y-6 sm:p-6" }, [
                    vue.createVNode("div", { class: "flex flex-col gap-y-4" }, [
                      vue.createVNode(_component_TextInput, {
                        id: "displayName",
                        help: "Your first and last name",
                        modelValue: displayName.value,
                        "onUpdate:modelValue": ($event) => displayName.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vue.createVNode(_component_TextInput, {
                        id: "userName",
                        placeholder: "Email",
                        help: "",
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
                      vue.createVNode(_component_TextInput, {
                        id: "confirmPassword",
                        type: "password",
                        modelValue: confirmPassword.value,
                        "onUpdate:modelValue": ($event) => confirmPassword.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vue.createVNode(_component_CheckboxInput, { id: "autoLogin" })
                    ])
                  ]),
                  vue.createVNode("div", { class: "pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6" }, [
                    vue.createVNode("div", { class: "flex justify-end" }, [
                      vue.createVNode(_component_FormLoading, { class: "flex-1" }),
                      vue.createVNode(_component_PrimaryButton, { class: "ml-3" }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("Sign Up")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ])
              ], 40, ["onSubmit"]),
              vue.createVNode("div", { class: "flex mt-8 ml-8" }, [
                vue.createVNode("h3", { class: "mr-4 leading-8 text-gray-500" }, "Quick Links"),
                vue.createVNode("span", { class: "relative z-0 inline-flex shadow-sm rounded-md" }, [
                  vue.createVNode("button", {
                    type: "button",
                    onClick: ($event) => setUser("new@user.com"),
                    class: "-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Signup = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/Signup.vue"]]);
exports.default = Signup;

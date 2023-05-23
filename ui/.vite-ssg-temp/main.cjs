"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const NProgress = require("nprogress");
const pinia = require("pinia");
const ServiceStackVue = require("@servicestack/vue");
const viteSsg = require("vite-ssg");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const client$1 = require("@servicestack/client");
const useSWRV = require("swrv");
const core = require("@vueuse/core");
const head = require("@vueuse/head");
const install$2 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ isClient, initialState, app }) => {
  const pinia$1 = pinia.createPinia();
  app.use(pinia$1);
  if (isClient)
    pinia$1.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia$1.state.value;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ app }) => {
  app.use(ServiceStackVue);
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const index = "";
const main = "";
const _hoisted_1$2 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_7 = { name: "carbon-sun", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_6 = { name: "carbon-moon", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15Z"
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
const __unplugin_components_0 = { name: "mdi-currency-usd", render };
const _imports_0 = "/assets/img/logo.svg";
class QueryBase {
  constructor(init) {
    Object.assign(this, init);
  }
}
class QueryData extends QueryBase {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
}
class QueryDb extends QueryBase {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
}
var RoomType = /* @__PURE__ */ ((RoomType2) => {
  RoomType2["Single"] = "Single";
  RoomType2["Double"] = "Double";
  RoomType2["Queen"] = "Queen";
  RoomType2["Twin"] = "Twin";
  RoomType2["Suite"] = "Suite";
  return RoomType2;
})(RoomType || {});
class HelloResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class Todo {
  constructor(init) {
    Object.assign(this, init);
  }
}
class QueryResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class AuthenticateResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class RegisterResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class IdResponse {
  constructor(init) {
    Object.assign(this, init);
  }
}
class Hello {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "Hello";
  }
  getMethod() {
    return "POST";
  }
  createResponse() {
    return new HelloResponse();
  }
}
class QueryTodos extends QueryData {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
  getTypeName() {
    return "QueryTodos";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return new QueryResponse();
  }
}
class CreateTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "CreateTodo";
  }
  getMethod() {
    return "POST";
  }
  createResponse() {
    return new Todo();
  }
}
class UpdateTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "UpdateTodo";
  }
  getMethod() {
    return "PUT";
  }
  createResponse() {
    return new Todo();
  }
}
class DeleteTodo {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "DeleteTodo";
  }
  getMethod() {
    return "DELETE";
  }
  createResponse() {
  }
}
class DeleteTodos {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "DeleteTodos";
  }
  getMethod() {
    return "DELETE";
  }
  createResponse() {
  }
}
class Authenticate {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "Authenticate";
  }
  getMethod() {
    return "POST";
  }
  createResponse() {
    return new AuthenticateResponse();
  }
}
class Register {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "Register";
  }
  getMethod() {
    return "POST";
  }
  createResponse() {
    return new RegisterResponse();
  }
}
class QueryBookings extends QueryDb {
  constructor(init) {
    super(init);
    Object.assign(this, init);
  }
  getTypeName() {
    return "QueryBookings";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return new QueryResponse();
  }
}
class CreateBooking {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "CreateBooking";
  }
  getMethod() {
    return "POST";
  }
  createResponse() {
    return new IdResponse();
  }
}
class UpdateBooking {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "UpdateBooking";
  }
  getMethod() {
    return "PATCH";
  }
  createResponse() {
    return new IdResponse();
  }
}
class DeleteBooking {
  constructor(init) {
    Object.assign(this, init);
  }
  getTypeName() {
    return "DeleteBooking";
  }
  getMethod() {
    return "DELETE";
  }
  createResponse() {
  }
}
const client = client$1.JsonApiClient.create("");
class SwrClient {
  constructor(client2) {
    this.client = client2;
  }
  get(fn) {
    return useSWRV(() => {
      let request = fn();
      return client$1.appendQueryString(`SwrClient:${client$1.nameOf(request)}`, request);
    }, (key) => this.client.get(fn()));
  }
}
const swrClient = new SwrClient(client);
async function checkAuth() {
  try {
    return await client.post(new Authenticate());
  } catch (e) {
    return void 0;
  }
}
async function logout() {
  await client.post(new Authenticate({ provider: "logout" }));
}
function createAttrs(auth) {
  return auth ? [
    "auth",
    ...((auth == null ? void 0 : auth.roles) || []).map((role) => `role:${role}`),
    ...((auth == null ? void 0 : auth.permissions) || []).map((perm) => `perm:${perm}`)
  ] : [];
}
const { user, hasRole, hasPermission, signIn, signOut } = ServiceStackVue.useAuth();
checkAuth().then((auth) => {
  if (auth)
    signIn(auth);
  else
    signOut();
});
async function revalidate() {
  loading.value = true;
  const auth = await checkAuth();
  if (auth)
    signIn(auth);
  else
    signOut();
  loading.value = false;
}
const loading = vue.ref(false);
const attrs = vue.computed(() => createAttrs(user.value));
const signout = async (router, redirectTo) => {
  var _a;
  signOut();
  await logout();
  await router.replace({ path: redirectTo ?? ((_a = router == null ? void 0 : router.currentRoute) == null ? void 0 : _a.value.path), force: true });
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "NavItem",
  __ssrInlineRender: true,
  props: {
    show: { type: String, required: false },
    hide: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const hasAccess = vue.computed(() => {
      if (props.show)
        return attrs.value.indexOf(props.show) >= 0;
      if (props.hide)
        return attrs.value.indexOf(props.hide) == -1;
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasAccess)) {
        _push(`<li${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative flex flex-wrap just-fu-start m-0" }, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NavItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/NavItem.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(serverRenderer.ssrRenderComponent(_component_router_link, vue.mergeProps({
        to: __props.href,
        class: "flex items-center justify-start mw-full p-4 hover:text-green-600"
      }, _ctx.$attrs, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const NavLink = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/NavLink.vue"]]);
const isDark = core.useDark();
core.useToggle(isDark);
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "NavHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_SecondaryButton = vue.resolveComponent("SecondaryButton");
      const _component_MdiCurrencyUsd = __unplugin_components_0;
      const _component_PrimaryButton = vue.resolveComponent("PrimaryButton");
      const _component_CarbonMoon = __unplugin_components_6;
      const _component_CarbonSun = __unplugin_components_7;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "border-b border-gray-200 pr-3" }, _attrs))}><div class="flex flex-wrap items-center"><div class="flex-shrink flex-grow-0">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 cursor-pointer"${_scopeId}><img class="w-9 h-9"${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="Lisa logo"${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "p-4 cursor-pointer" }, [
                vue.createVNode("img", {
                  class: "w-9 h-9",
                  src: _imports_0,
                  alt: "Lisa logo"
                })
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div><div class="flex flex-grow flex-shrink flex-nowrap justify-end items-center"><nav class="relative flex flex-grow"><ul class="flex flex-wrap items-center justify-end w-full m-0">`);
      _push(serverRenderer.ssrRenderComponent(NavItem, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_SecondaryButton, {
              class: "m-2",
              href: "/hosting"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex align-middle"${_scopeId2}>`);
                  _push3(serverRenderer.ssrRenderComponent(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }, null, _parent3, _scopeId2));
                  _push3(` 0.40 /mo </div>`);
                } else {
                  return [
                    vue.createVNode("div", { class: "flex align-middle" }, [
                      vue.createVNode(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }),
                      vue.createTextVNode(" 0.40 /mo ")
                    ])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_SecondaryButton, {
                class: "m-2",
                href: "/hosting"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode("div", { class: "flex align-middle" }, [
                    vue.createVNode(_component_MdiCurrencyUsd, { class: "text-gray-700 w-5 h-5" }),
                    vue.createTextVNode(" 0.40 /mo ")
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/posts" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blog`);
                } else {
                  return [
                    vue.createTextVNode("Blog")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/posts" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Blog")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/todomvc" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Todos`);
                } else {
                  return [
                    vue.createTextVNode("Todos")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/todomvc" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Todos")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/bookings" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bookings`);
                } else {
                  return [
                    vue.createTextVNode("Bookings")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/bookings" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Bookings")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/features" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Features`);
                } else {
                  return [
                    vue.createTextVNode("Features")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/features" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Features")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, { show: "auth" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/profile" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Profile`);
                } else {
                  return [
                    vue.createTextVNode("Profile")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/profile" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Profile")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, { show: "role:Admin" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavLink, { href: "/admin" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Admin`);
                } else {
                  return [
                    vue.createTextVNode("Admin")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavLink, { href: "/admin" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Admin")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, { show: "auth" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_SecondaryButton, {
              class: "m-2",
              onClick: ($event) => vue.unref(signout)(_ctx.$router)
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
          } else {
            return [
              vue.createVNode(_component_SecondaryButton, {
                class: "m-2",
                onClick: ($event) => vue.unref(signout)(_ctx.$router)
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Sign Out")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, { hide: "auth" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_SecondaryButton, {
              class: "m-2",
              href: "/signin"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign In`);
                } else {
                  return [
                    vue.createTextVNode("Sign In")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_SecondaryButton, {
                class: "m-2",
                href: "/signin"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Sign In")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(NavItem, { hide: "auth" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_PrimaryButton, {
              class: "m-2",
              href: "/signup"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    vue.createTextVNode("Register")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_PrimaryButton, {
                class: "m-2",
                href: "/signup"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("Register")
                ]),
                _: 1
                /* STABLE */
              })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<li class="ml-2"><button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false"><span class="${serverRenderer.ssrRenderClass(`${!vue.unref(isDark) ? "translate-x-5" : "translate-x-0"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`)}"><span class="${serverRenderer.ssrRenderClass(`${!vue.unref(isDark) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`)}" aria-hidden="true">`);
      _push(serverRenderer.ssrRenderComponent(_component_CarbonMoon, { class: "h-4 w-4 text-gray-400" }, null, _parent));
      _push(`</span><span class="${serverRenderer.ssrRenderClass(`${!vue.unref(isDark) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`)}" aria-hidden="true">`);
      _push(serverRenderer.ssrRenderComponent(_component_CarbonSun, { class: "h-4 w-4 text-indigo-600" }, null, _parent));
      _push(`</span></span></button></li></ul></nav></div></div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NavHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/NavHeader.vue"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800" }, _attrs))}><div class="container mx-auto px-5"><div class="py-28 flex flex-col lg:flex-row items-center"><h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"> A ServiceStack Project </h3><div class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"><a href="https://docs.servicestack.net" class="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"> Read Documentation </a><a href="https://github.com/NetCoreTemplates/vue-ssg" class="mx-3 font-bold hover:underline"> View on GitHub </a></div></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavFooter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/NavFooter.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "text-gray-700" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(NavHeader, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(NavFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/layouts/default.vue"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "h-screen px-4 text-black bg-white text-center flex flex-col items-center justify-center" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/empty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/layouts/empty.vue"]]);
const layouts = {
  "default": __layout_0,
  "empty": __layout_1
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      meta: route.meta,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: route.path === "/" ? [route] : [{ ...route, path: "" }]
    };
  });
}
const __pages_import_0__ = () => Promise.resolve().then(() => require("./assets/vs-2e983834.cjs"));
const __pages_import_1__ = () => Promise.resolve().then(() => require("./assets/typography-639c098f.cjs"));
const __pages_import_2__ = () => Promise.resolve().then(() => require("./assets/rider-4fa3e7ab.cjs"));
const __pages_import_3__ = () => Promise.resolve().then(() => require("./assets/Index-ef3ece56.cjs"));
const __pages_import_4__ = () => Promise.resolve().then(() => require("./assets/deploy-23c289c1.cjs"));
const __pages_import_5__ = () => Promise.resolve().then(() => require("./assets/Index-5cc9b3d9.cjs"));
const __pages_import_6__ = () => Promise.resolve().then(() => require("./assets/Edit-0170675c.cjs"));
const __pages_import_7__ = () => Promise.resolve().then(() => require("./assets/Create-b0b45491.cjs"));
const __pages_import_8__ = () => Promise.resolve().then(() => require("./assets/TodoMvc-4f4a0eeb.cjs"));
const __pages_import_9__ = () => Promise.resolve().then(() => require("./assets/Signup-51687f08.cjs"));
const __pages_import_10__ = () => Promise.resolve().then(() => require("./assets/Signin-a105a8a8.cjs"));
const __pages_import_11__ = () => Promise.resolve().then(() => require("./assets/Profile-9e3a4594.cjs"));
const __pages_import_12__ = () => Promise.resolve().then(() => require("./assets/Index-65dd2db6.cjs"));
const __pages_import_13__ = () => Promise.resolve().then(() => require("./assets/hosting-47dcaa23.cjs"));
const __pages_import_14__ = () => Promise.resolve().then(() => require("./assets/Forbidden-22767feb.cjs"));
const __pages_import_15__ = () => Promise.resolve().then(() => require("./assets/features-82323426.cjs"));
const __pages_import_16__ = () => Promise.resolve().then(() => require("./assets/BookingsData-1fc12d30.cjs"));
const __pages_import_17__ = () => Promise.resolve().then(() => require("./assets/Bookings-ad20ce2a.cjs"));
const __pages_import_18__ = () => Promise.resolve().then(() => require("./assets/Admin-d31a5c92.cjs"));
const __pages_import_19__ = () => Promise.resolve().then(() => require("./assets/_...all_-882adeb0.cjs"));
const routes$1 = [{ "name": "posts-vs", "path": "/posts/vs", "component": __pages_import_0__, "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Develop using Visual Studio", "summary": "Exploring development workflow in VS Code and Visual Studio .NET", "date": "2021-11-22T00:00:00.000Z" } } }, { "name": "posts-typography", "path": "/posts/typography", "component": __pages_import_1__, "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Tailwind Typography", "summary": "tailwindcss/typography enabled for Markdown pages", "date": "2021-11-20T00:00:00.000Z" } } }, { "name": "posts-rider", "path": "/posts/rider", "component": __pages_import_2__, "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Develop using JetBrains Rider", "summary": "Setting up & exploring development workflow in Rider", "date": "2021-11-23T00:00:00.000Z" } } }, { "name": "posts-Index", "path": "/posts", "component": __pages_import_3__, "props": true }, { "name": "posts-deploy", "path": "/posts/deploy", "component": __pages_import_4__, "props": true, "meta": { "crumbs": [{ "name": "posts", "href": "/posts" }], "frontmatter": { "title": "Deployment with GitHub Actions", "summary": "Configuring your GitHub repo for SSH and CDN deployments", "date": "2021-11-21T00:00:00.000Z" } } }, { "name": "bookings-crud-Index", "path": "/bookings-crud", "component": __pages_import_5__, "props": true }, { "name": "bookings-crud-Edit", "path": "/bookings-crud/edit", "component": __pages_import_6__, "props": true }, { "name": "bookings-crud-Create", "path": "/bookings-crud/create", "component": __pages_import_7__, "props": true }, { "name": "TodoMvc", "path": "/todomvc", "component": __pages_import_8__, "props": true }, { "name": "Signup", "path": "/signup", "component": __pages_import_9__, "props": true }, { "name": "Signin", "path": "/signin", "component": __pages_import_10__, "props": true }, { "name": "Profile", "path": "/profile", "component": __pages_import_11__, "props": true }, { "name": "Index", "path": "/", "component": __pages_import_12__, "props": true }, { "name": "hosting", "path": "/hosting", "component": __pages_import_13__, "props": true, "meta": { "crumbs": [], "frontmatter": { "title": "App Hosting Costs" } } }, { "name": "Forbidden", "path": "/forbidden", "component": __pages_import_14__, "props": true, "meta": { "layout": "empty" } }, { "name": "features", "path": "/features", "component": __pages_import_15__, "props": true, "meta": { "crumbs": [], "frontmatter": { "title": "Template Features" } } }, { "name": "BookingsData", "path": "/bookingsdata", "component": __pages_import_16__, "props": true }, { "name": "Bookings", "path": "/bookings", "component": __pages_import_17__, "props": true }, { "name": "Admin", "path": "/admin", "component": __pages_import_18__, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_19__, "props": true, "meta": { "layout": "empty" } }];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Lisa",
      meta: [
        { name: "description", content: "Vite SSG Starter Template" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/App.vue"]]);
const Routes = {
  signin: (redirectTo) => redirectTo ? `/signin?redirect=${redirectTo}` : `/signin`,
  forbidden: () => "/forbidden"
};
const ROUTE_GUARDS = [
  { path: "/profile", attr: "auth" },
  { path: "/admin", attr: "role:Admin" },
  { path: "/bookings", attr: "role:Employee" },
  { path: "/bookings-crud", attr: "role:Employee" }
];
function configRouter(router) {
  const invalidAttrRedirect = (to, guardAttr, userAttrs) => userAttrs.indexOf("auth") === -1 ? Routes.signin(to.path) : Routes.forbidden();
  const validateRoute = (to, next, attrs2) => {
    for (let i = 0; i < ROUTE_GUARDS.length; i++) {
      const { path, attr } = ROUTE_GUARDS[i];
      if (!to.path.startsWith(path))
        continue;
      if (attrs2.indexOf(attr) === -1) {
        const isAdmin = attrs2.indexOf("role:Admin") >= 0;
        const allowAdmin = isAdmin && (attr.startsWith("role:") || attr.startsWith("perm:"));
        if (!allowAdmin) {
          const goTo = invalidAttrRedirect(to, attr, attrs2);
          next(goTo);
          return;
        }
      }
    }
    next();
  };
  router.beforeEach((to, from, next) => {
    if (loading) {
      const stop = vue.watchEffect(() => {
        validateRoute(to, next, attrs.value);
        vue.nextTick(() => stop());
      });
    } else {
      validateRoute(to, next, attrs.value);
    }
  });
  return router;
}
function getRedirect(router) {
  var _a;
  let { redirect } = (_a = router.currentRoute) == null ? void 0 : _a.value.query;
  let ret = redirect && Array.isArray(redirect) ? redirect[0] : redirect;
  return ret == null ? void 0 : ret.toString();
}
const routes = setupLayouts(routes$1);
const createApp = viteSsg.ViteSSG(
  App,
  { routes },
  (ctx) => {
    configRouter(ctx.router);
    ctx.app.provide("client", client);
    Object.values(/* @__PURE__ */ Object.assign({ "./modules/nprogress.ts": __vite_glob_0_0, "./modules/pinia.ts": __vite_glob_0_1, "./modules/servicestack-vue.ts": __vite_glob_0_2 })).map((i) => {
      var _a;
      return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
    });
  }
);
exports.Authenticate = Authenticate;
exports.CreateBooking = CreateBooking;
exports.CreateTodo = CreateTodo;
exports.DeleteBooking = DeleteBooking;
exports.DeleteTodo = DeleteTodo;
exports.DeleteTodos = DeleteTodos;
exports.Hello = Hello;
exports.QueryBookings = QueryBookings;
exports.QueryTodos = QueryTodos;
exports.Register = Register;
exports.RoomType = RoomType;
exports.Todo = Todo;
exports.UpdateBooking = UpdateBooking;
exports.UpdateTodo = UpdateTodo;
exports.__unplugin_components_6 = __unplugin_components_6;
exports.__unplugin_components_7 = __unplugin_components_7;
exports._export_sfc = _export_sfc;
exports.client = client;
exports.createApp = createApp;
exports.getRedirect = getRedirect;
exports.isDark = isDark;
exports.revalidate = revalidate;
exports.signout = signout;
exports.swrClient = swrClient;

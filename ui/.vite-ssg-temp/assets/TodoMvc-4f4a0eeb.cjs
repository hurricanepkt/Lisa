"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue$1 = require("./vue-e05dbcf6.cjs");
const pineapple = require("./pineapple-76379558.cjs");
const SrcLink = require("./SrcLink-f8ac95d7.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const pinia = require("pinia");
const main = require("../main.cjs");
const AppPage = require("./AppPage-59a319b8.cjs");
require("@servicestack/client");
require("nprogress");
require("@servicestack/vue");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
require("./AppBreadcrumb-f0b6d5d6.cjs");
require("./home-cb246cad.cjs");
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"
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
const __unplugin_components_2 = { name: "mdi-trash-can-outline", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
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
const __unplugin_components_1 = { name: "mdi-checkbox-blank-circle-outline", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
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
const __unplugin_components_0 = { name: "mdi-check-circle", render };
const useTodosStore = pinia.defineStore("todos", () => {
  const todos = vue.ref([]);
  const newTodo = vue.ref("");
  const filter = vue.ref("all");
  const error = vue.ref();
  const finishedTodos = vue.computed(() => todos.value.filter((x) => x.isFinished));
  const unfinishedTodos = vue.computed(() => todos.value.filter((x) => !x.isFinished));
  const filteredTodos = vue.computed(() => filter.value == "finished" ? finishedTodos.value : filter.value == "unfinished" ? unfinishedTodos.value : todos.value);
  const refreshTodos = async (errorStatus) => {
    error.value = errorStatus;
    const api = await main.client.api(new main.QueryTodos());
    if (api.succeeded) {
      todos.value = api.response.results ?? [];
    }
  };
  const addTodo = async () => {
    todos.value.push(new main.Todo({ text: newTodo.value }));
    let api = await main.client.api(new main.CreateTodo({ text: newTodo.value }));
    if (api.succeeded)
      newTodo.value = "";
    await refreshTodos(api.error);
  };
  const removeTodo = async (id) => {
    todos.value = todos.value.filter((x) => x.id != id);
    let api = await main.client.api(new main.DeleteTodo({ id }));
    await refreshTodos(api.error);
  };
  const removeFinishedTodos = async () => {
    let ids = todos.value.filter((x) => x.isFinished).map((x) => x.id);
    if (ids.length == 0)
      return;
    todos.value = todos.value.filter((x) => !x.isFinished);
    let api = await main.client.api(new main.DeleteTodos({ ids }));
    await refreshTodos(api.error);
  };
  const toggleTodo = async (id) => {
    const todo = todos.value.find((x) => x.id == id);
    todo.isFinished = !todo.isFinished;
    let api = await main.client.api(new main.UpdateTodo(todo));
    await refreshTodos(api.error);
  };
  const changeFilter = (value) => filter.value = value;
  return {
    error,
    newTodo,
    filter,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    refreshTodos,
    addTodo,
    removeTodo,
    removeFinishedTodos,
    toggleTodo,
    changeFilter
  };
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "TodoMvc",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTodosStore();
    store.refreshTodos();
    const FilterTab = (props, context) => {
      return vue.h("a", {
        href: "#",
        "class": `border-gray-200 text-sm font-medium px-4 py-2 hover:bg-gray-100 
      focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 
      dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
      ${props.filter == store.filter ? "text-blue-700 dark:bg-blue-600" : "text-gray-900 hover:text-blue-700 dark:bg-gray-700"}`,
        onClick: (e) => {
          e.preventDefault();
          store.changeFilter(props.filter);
        }
      }, context.slots);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TextInput = vue.resolveComponent("TextInput");
      const _component_MdiCheckCircle = __unplugin_components_0;
      const _component_MdiCheckboxBlankCircleOutline = __unplugin_components_1;
      const _component_MdiTrashCanOutline = __unplugin_components_2;
      const _component_SrcLink = SrcLink.__unplugin_components_2;
      const _component_NotoPineapple = pineapple.__unplugin_components_9;
      const _component_LogosVue = vue$1.__unplugin_components_1;
      _push(serverRenderer.ssrRenderComponent(AppPage.AppPage, vue.mergeProps({
        title: "Todos Application",
        class: "max-w-xl"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-3"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_TextInput, {
              status: vue.unref(store).error,
              id: "Text",
              modelValue: vue.unref(store).newTodo,
              "onUpdate:modelValue": ($event) => vue.unref(store).newTodo = $event,
              placeholder: "What needs to be done?",
              label: "",
              onKeyup: ($event) => vue.unref(store).addTodo()
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white shadow overflow-hidden rounded-md"${_scopeId}><ul role="list" class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(store).filteredTodos, (todo) => {
              _push2(`<li class="px-6 py-4"${_scopeId}><div class="relative flex items-start"${_scopeId}><div class="flex items-center h-6"${_scopeId}>`);
              if (todo.isFinished) {
                _push2(serverRenderer.ssrRenderComponent(_component_MdiCheckCircle, { class: "text-green-600" }, null, _parent2, _scopeId));
              } else {
                _push2(serverRenderer.ssrRenderComponent(_component_MdiCheckboxBlankCircleOutline, null, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="ml-3 flex-grow"${_scopeId}><label class="${serverRenderer.ssrRenderClass({ "line-through": todo.isFinished })}"${_scopeId}>${serverRenderer.ssrInterpolate(todo.text)}</label></div><div${_scopeId}>`);
              if (todo.isFinished) {
                _push2(serverRenderer.ssrRenderComponent(_component_MdiTrashCanOutline, {
                  class: "cursor-pointer",
                  onClick: ($event) => vue.unref(store).removeTodo(todo.id)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></li>`);
            });
            _push2(`<!--]--></ul></div><div class="mt-4 flex justify-between"${_scopeId}><div class="text-gray-400 leading-8 mr-4"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(store).unfinishedTodos.length)} <span class="hidden sm:inline"${_scopeId}>item(s)</span> left </div><div class="inline-flex shadow-sm rounded-md"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(FilterTab, {
              class: "rounded-l-lg border",
              filter: "all"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` All `);
                } else {
                  return [
                    vue.createTextVNode(" All ")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(FilterTab, {
              class: "border-t border-b",
              filter: "unfinished"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Active `);
                } else {
                  return [
                    vue.createTextVNode(" Active ")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(FilterTab, {
              class: "rounded-r-md border",
              filter: "finished"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Completed `);
                } else {
                  return [
                    vue.createTextVNode(" Completed ")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div><div class="leading-8 ml-4"${_scopeId}><a href="#" class="${serverRenderer.ssrRenderClass({ invisible: vue.unref(store).finishedTodos.length === 0 })}"${_scopeId}> clear <span class="hidden sm:inline"${_scopeId}>completed</span></a></div></div><div class="mt-4 text-center text-gray-400 flex justify-center -ml-6"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" })
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_LogosVue, { class: "w-4 h-4 inline-flex" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_LogosVue, { class: "w-4 h-4 inline-flex" })
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "mb-3" }, [
                vue.createVNode(_component_TextInput, {
                  status: vue.unref(store).error,
                  id: "Text",
                  modelValue: vue.unref(store).newTodo,
                  "onUpdate:modelValue": ($event) => vue.unref(store).newTodo = $event,
                  placeholder: "What needs to be done?",
                  label: "",
                  onKeyup: vue.withKeys(vue.withModifiers(($event) => vue.unref(store).addTodo(), ["stop"]), ["enter"])
                }, null, 8, ["status", "modelValue", "onUpdate:modelValue", "onKeyup"])
              ]),
              vue.createVNode("div", { class: "bg-white shadow overflow-hidden rounded-md" }, [
                vue.createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-200"
                }, [
                  (vue.openBlock(true), vue.createBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(store).filteredTodos, (todo) => {
                      return vue.openBlock(), vue.createBlock("li", {
                        key: todo.id,
                        class: "px-6 py-4"
                      }, [
                        vue.createVNode("div", {
                          class: "relative flex items-start",
                          onClick: ($event) => vue.unref(store).toggleTodo(todo.id)
                        }, [
                          vue.createVNode("div", { class: "flex items-center h-6" }, [
                            todo.isFinished ? (vue.openBlock(), vue.createBlock(_component_MdiCheckCircle, {
                              key: 0,
                              class: "text-green-600"
                            })) : (vue.openBlock(), vue.createBlock(_component_MdiCheckboxBlankCircleOutline, { key: 1 }))
                          ]),
                          vue.createVNode("div", { class: "ml-3 flex-grow" }, [
                            vue.createVNode(
                              "label",
                              {
                                class: { "line-through": todo.isFinished }
                              },
                              vue.toDisplayString(todo.text),
                              3
                              /* TEXT, CLASS */
                            )
                          ]),
                          vue.createVNode("div", null, [
                            todo.isFinished ? (vue.openBlock(), vue.createBlock(_component_MdiTrashCanOutline, {
                              key: 0,
                              class: "cursor-pointer",
                              onClick: ($event) => vue.unref(store).removeTodo(todo.id)
                            }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                          ])
                        ], 8, ["onClick"])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createVNode("div", { class: "mt-4 flex justify-between" }, [
                vue.createVNode("div", { class: "text-gray-400 leading-8 mr-4" }, [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(store).unfinishedTodos.length) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createVNode("span", { class: "hidden sm:inline" }, "item(s)"),
                  vue.createTextVNode(" left ")
                ]),
                vue.createVNode("div", { class: "inline-flex shadow-sm rounded-md" }, [
                  vue.createVNode(FilterTab, {
                    class: "rounded-l-lg border",
                    filter: "all"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" All ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(FilterTab, {
                    class: "border-t border-b",
                    filter: "unfinished"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Active ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(FilterTab, {
                    class: "rounded-r-md border",
                    filter: "finished"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Completed ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                vue.createVNode("div", { class: "leading-8 ml-4" }, [
                  vue.createVNode("a", {
                    href: "#",
                    class: { invisible: vue.unref(store).finishedTodos.length === 0 },
                    onClick: vue.withModifiers(($event) => vue.unref(store).removeFinishedTodos(), ["prevent"])
                  }, [
                    vue.createTextVNode(" clear "),
                    vue.createVNode("span", { class: "hidden sm:inline" }, "completed")
                  ], 10, ["onClick"])
                ])
              ]),
              vue.createVNode("div", { class: "mt-4 text-center text-gray-400 flex justify-center -ml-6" }, [
                vue.createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_NotoPineapple, { class: "w-5 h-5 inline-flex" })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_SrcLink, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_LogosVue, { class: "w-4 h-4 inline-flex" })
                  ]),
                  _: 1
                  /* STABLE */
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/TodoMvc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TodoMvc = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/TodoMvc.vue"]]);
exports.default = TodoMvc;

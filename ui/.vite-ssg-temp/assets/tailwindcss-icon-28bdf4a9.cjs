"use strict";
const vue = require("vue");
const _hoisted_1 = {
  viewBox: "0 0 256 154",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "0%",
    "stop-color": "#2298BD"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "100%",
    "stop-color": "#0ED7B5"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = ["fill"];
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
    vue.createElementVNode("defs", null, [
      vue.createElementVNode("linearGradient", {
        id: _ctx.idMap["logosTailwindcssIcon0"],
        x1: "-2.778%",
        x2: "100%",
        y1: "32%",
        y2: "67.556%"
      }, _hoisted_5, 8, _hoisted_2)
    ]),
    vue.createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["logosTailwindcssIcon0"] + ")",
      d: "M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
    }, null, 8, _hoisted_6)
  ]);
}
const __unplugin_components_5 = { name: "logos-tailwindcss-icon", render, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosTailwindcssIcon0": "uicons-" + __randId() };
  return { idMap };
} };
exports.__unplugin_components_5 = __unplugin_components_5;

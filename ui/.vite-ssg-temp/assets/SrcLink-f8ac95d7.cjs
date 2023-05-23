"use strict";
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const client = require("@servicestack/client");
const main = require("../main.cjs");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "SrcLink",
  __ssrInlineRender: true,
  props: {
    href: { type: String, required: true },
    iconSrc: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const fileName = client.lastRightPart(props.href, "/");
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.iconSrc) {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          href: __props.href,
          class: "mr-3 text-gray-500 hover:text-gray-600 text-decoration-none"
        }, _attrs))}><img${serverRenderer.ssrRenderAttr("src", __props.iconSrc)} class="w-5 h-5 inline-flex text-purple-800 mr-1" alt="file icon">${serverRenderer.ssrInterpolate(vue.unref(fileName))}</a>`);
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          href: __props.href,
          class: "mr-3 text-gray-400 hover:text-gray-500 text-decoration-none"
        }, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(fileName))}</a>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SrcLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/components/SrcLink.vue"]]);
exports.__unplugin_components_2 = __unplugin_components_2;

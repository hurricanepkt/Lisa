"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue$1 = require("./vue-e05dbcf6.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const SrcLink = require("./SrcLink-f8ac95d7.cjs");
const main = require("../main.cjs");
const utils = require("./utils-e1770aac.cjs");
const ServiceStackVue = require("@servicestack/vue");
require("@servicestack/client");
require("nprogress");
require("pinia");
require("vite-ssg");
require("swrv");
require("@vueuse/core");
require("@vueuse/head");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "Create",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit }) {
    const visibleFields = "name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes";
    ServiceStackVue.useClient();
    const { enumOptions } = ServiceStackVue.useMetadata();
    const request = new main.CreateBooking({
      roomType: main.RoomType.Single,
      roomNumber: 0,
      cost: 0,
      bookingStartDate: utils.dateInputFormat(/* @__PURE__ */ new Date())
    });
    const close = () => emit("done");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CloseButton = vue.resolveComponent("CloseButton");
      const _component_ErrorSummary = vue.resolveComponent("ErrorSummary");
      const _component_TextInput = vue.resolveComponent("TextInput");
      const _component_SelectInput = vue.resolveComponent("SelectInput");
      const _component_TextareaInput = vue.resolveComponent("TextareaInput");
      const _component_LogosVue = vue$1.__unplugin_components_1;
      const _component_PrimaryButton = vue.resolveComponent("PrimaryButton");
      _push(`<form${serverRenderer.ssrRenderAttrs(_attrs)}><div class="shadow overflow-hidden sm:rounded-md bg-white"><div class="relative px-4 py-5 bg-white sm:p-6">`);
      _push(serverRenderer.ssrRenderComponent(_component_CloseButton, { onClose: close }, null, _parent));
      _push(`<fieldset><legend class="text-base font-medium text-gray-900 text-center mb-4">New Booking</legend>`);
      _push(serverRenderer.ssrRenderComponent(_component_ErrorSummary, {
        except: visibleFields,
        class: "mb-4"
      }, null, _parent));
      _push(`<div class="grid grid-cols-6 gap-6"><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextInput, {
        id: "name",
        modelValue: vue.unref(request).name,
        "onUpdate:modelValue": ($event) => vue.unref(request).name = $event,
        required: "",
        placeholder: "Name for this booking"
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_SelectInput, {
        id: "roomType",
        modelValue: vue.unref(request).roomType,
        "onUpdate:modelValue": ($event) => vue.unref(request).roomType = $event,
        options: vue.unref(enumOptions)("RoomType")
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextInput, {
        type: "number",
        id: "roomNumber",
        modelValue: vue.unref(request).roomNumber,
        "onUpdate:modelValue": ($event) => vue.unref(request).roomNumber = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextInput, {
        type: "number",
        id: "cost",
        modelValue: vue.unref(request).cost,
        "onUpdate:modelValue": ($event) => vue.unref(request).cost = $event,
        min: "0",
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextInput, {
        type: "date",
        id: "bookingStartDate",
        modelValue: vue.unref(request).bookingStartDate,
        "onUpdate:modelValue": ($event) => vue.unref(request).bookingStartDate = $event,
        required: ""
      }, null, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextInput, {
        type: "date",
        id: "bookingEndDate",
        modelValue: vue.unref(request).bookingEndDate,
        "onUpdate:modelValue": ($event) => vue.unref(request).bookingEndDate = $event
      }, null, _parent));
      _push(`</div><div class="col-span-6">`);
      _push(serverRenderer.ssrRenderComponent(_component_TextareaInput, {
        id: "notes",
        modelValue: vue.unref(request).notes,
        "onUpdate:modelValue": ($event) => vue.unref(request).notes = $event,
        placeholder: "Notes about this booking",
        style: { "height": "6rem" }
      }, null, _parent));
      _push(`</div></div></fieldset></div><div class="mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6"><div class="flex justify-between items-center">`);
      _push(serverRenderer.ssrRenderComponent(SrcLink.__unplugin_components_2, { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/bookings-crud/Create.vue" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_LogosVue, { class: "w-5 h-5 inline" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_LogosVue, { class: "w-5 h-5 inline" })
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<div>`);
      _push(serverRenderer.ssrRenderComponent(_component_PrimaryButton, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Booking`);
          } else {
            return [
              vue.createTextVNode("Create Booking")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div></div></div></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/bookings-crud/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/bookings-crud/Create.vue"]]);
exports.default = Create;

"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const MarkdownPage = require("./MarkdownPage-27ec414b.cjs");
const serverRenderer = require("vue/server-renderer");
const head = require("@vueuse/head");
const main = require("../main.cjs");
require("vue-router");
require("./AppBreadcrumb-f0b6d5d6.cjs");
require("./home-cb246cad.cjs");
require("nprogress");
require("pinia");
require("@servicestack/vue");
require("vite-ssg");
require("@servicestack/client");
require("swrv");
require("@vueuse/core");
const _hoisted_1$1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = ["id"];
const _hoisted_3$1 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "0%",
    "stop-color": "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$1 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "100%",
    "stop-color": "#FFF",
    "stop-opacity": "0"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$1 = [
  _hoisted_3$1,
  _hoisted_4$1
];
const _hoisted_6$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "#52218A",
    d: "M36.987 200.406a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006A10.667 10.667 0 0 1 0 184.22V70.46a10.667 10.667 0 0 1 6.56-9.787l19.387-8a10.667 10.667 0 0 1 11.04 1.733l4.346 3.6a5.893 5.893 0 0 0-9.333 4.8v129.067a5.893 5.893 0 0 0 9.333 4.8l-4.346 3.733Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_7$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "#6C33AF",
    d: "M6.56 194.006A10.667 10.667 0 0 1 0 184.22v-.88a6.16 6.16 0 0 0 10.667 4.133L176 4.673a16 16 0 0 1 18.187-3.093l52.746 25.386A16 16 0 0 1 256 41.393v.613a10.107 10.107 0 0 0-16.507-7.813l-198.16 162.48l-4.346 3.733a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_8$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "#854CC7",
    d: "M6.56 60.673A10.667 10.667 0 0 0 0 70.46v.88a6.16 6.16 0 0 1 10.667-4.134L176 250.006a16 16 0 0 0 18.187 3.094l52.746-25.387A16 16 0 0 0 256 213.286v-.613a10.107 10.107 0 0 1-16.507 7.813L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-11.04-1.6l-19.387 8Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_9$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "#B179F1",
    d: "M194.187 253.1A16 16 0 0 1 176 250.006a9.387 9.387 0 0 0 16-6.64v-232a9.387 9.387 0 0 0-16-6.693a16 16 0 0 1 18.187-3.093l52.746 25.36A16 16 0 0 1 256 41.366v171.947a16 16 0 0 1-9.067 14.427l-52.746 25.36Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_10$1 = ["fill"];
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, [
    vue.createElementVNode("defs", null, [
      vue.createElementVNode("linearGradient", {
        id: _ctx.idMap["logosVisualStudio0"],
        x1: "50%",
        x2: "50%",
        y1: ".002%",
        y2: "100%"
      }, _hoisted_5$1, 8, _hoisted_2$1)
    ]),
    _hoisted_6$1,
    _hoisted_7$1,
    _hoisted_8$1,
    _hoisted_9$1,
    vue.createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["logosVisualStudio0"] + ")",
      "fill-opacity": ".25",
      d: "M183.707 254.273a16 16 0 0 0 10.48-1.173l52.746-25.36A16 16 0 0 0 256 213.313V41.366a16 16 0 0 0-9.067-14.426L194.187 1.58A16 16 0 0 0 182.24.806A16 16 0 0 0 176 4.673L90.987 98.7L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-9.627-2.213a6.8 6.8 0 0 0-1.413.48L6.56 60.673A10.667 10.667 0 0 0 0 69.66v115.36a10.664 10.664 0 0 0 6.56 8.986l19.387 8a6.8 6.8 0 0 0 1.413.48c3.378.882 6.973.056 9.627-2.213l4.346-3.6l49.654-40.693L176 250.006a16 16 0 0 0 7.707 4.267ZM192 73.153l-66.107 54.187L192 181.526V73.153ZM32 90.726l33.093 36.614L32 163.953V90.726Z"
    }, null, 8, _hoisted_10$1)
  ]);
}
const __unplugin_components_2 = { name: "logos-visual-studio", render: render$1, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosVisualStudio0": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1 = {
  viewBox: "0 0 256 254",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "0%",
    "stop-color": "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode(
  "stop",
  {
    offset: "100%",
    "stop-color": "#FFF",
    "stop-opacity": "0"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    id: "logosVisualStudioCode1",
    d: "M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649l-76.262 57.889l76.262 57.888V68.956Z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = ["id"];
const _hoisted_8 = /* @__PURE__ */ vue.createElementVNode(
  "use",
  { href: "#logosVisualStudioCode1" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = ["mask"];
const _hoisted_11 = ["mask"];
const _hoisted_12 = ["mask"];
const _hoisted_13 = ["fill", "mask"];
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
    vue.createElementVNode("defs", null, [
      vue.createElementVNode("linearGradient", {
        id: _ctx.idMap["logosVisualStudioCode0"],
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
      }, _hoisted_5, 8, _hoisted_2),
      _hoisted_6
    ]),
    vue.createElementVNode("mask", {
      id: _ctx.idMap["logosVisualStudioCode2"],
      fill: "#fff"
    }, _hoisted_9, 8, _hoisted_7),
    vue.createElementVNode("path", {
      fill: "#0065A9",
      d: "M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_10),
    vue.createElementVNode("path", {
      fill: "#007ACC",
      d: "m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_11),
    vue.createElementVNode("path", {
      fill: "#1F9CF0",
      d: "M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_12),
    vue.createElementVNode("path", {
      fill: "url(#" + _ctx.idMap["logosVisualStudioCode0"] + ")",
      "fill-opacity": ".25",
      d: "M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65l-76.262 57.89l76.262 57.888V68.956Z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_13)
  ]);
}
const __unplugin_components_1 = { name: "logos-visual-studio-code", render, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosVisualStudioCode2": "uicons-" + __randId(), "logosVisualStudioCode0": "uicons-" + __randId() };
  return { idMap };
} };
const title = "Develop using Visual Studio";
const summary = "Exploring development workflow in VS Code and Visual Studio .NET";
const date = "2021-11-22T00:00:00.000Z";
const meta = [{ "property": "og:title", "content": "Develop using Visual Studio" }];
const _sfc_main = {
  __name: "vs",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Develop using Visual Studio", "summary": "Exploring development workflow in VS Code and Visual Studio .NET", "date": "2021-11-22T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Develop using Visual Studio" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Develop using Visual Studio", "meta": [{ "property": "og:title", "content": "Develop using Visual Studio" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = MarkdownPage.__unplugin_components_0;
      const _component_LogosVisualStudioCode = __unplugin_components_1;
      const _component_LogosVisualStudio = __unplugin_components_2;
      _push(serverRenderer.ssrRenderComponent(_component_MarkdownPage, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>A popular alternative development environment to our preferred <a href="/posts/rider"${_scopeId}>JetBrains Rider</a> IDE is to use Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for npm projects whilst Visual Studio is a better IDE for C# Projects.</p><p${_scopeId}>Essentially this is why we recommend Rider where it’s best at both, where both C# and npm TypeScript projects can be developed from within the same solution.</p><h3${_scopeId}>Developing with just VS Code</h3><a href="https://visualstudio.microsoft.com/" title="VS Code" class="sm:float-left mr-8"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_LogosVisualStudioCode, {
              class: "w-24 h-24",
              style: { "margin-top": "1rem" }
            }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>If you prefer the dev UX of a lightweight text editor or your C# project isn’t large, than VS Code on its own can provide a great development UX which is also what <a href="https://v3.vuejs.org/api/sfc-tooling.html#ide-support"${_scopeId}>Vue recommends themselves</a>, to be used together with the <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"${_scopeId}>Volar extension</a>.</p><p${_scopeId}>VSCode’s <a href="https://code.visualstudio.com/docs/editor/integrated-terminal"${_scopeId}>Integrated Terminal</a> has great multi-terminal support you can toggle between the editor and terminal with <code${_scopeId}>Ctrl+</code> or open a new Terminal Window with <code${_scopeId}>Ctrl+Shift+\`</code> to run the <code${_scopeId}>/ui</code> dev server with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run dev
</code></pre><p${_scopeId}>Then in a new Terminal Window, start a new watched C# .NET Server build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ dotnet watch
</code></pre><p${_scopeId}>With both projects started you can open and leave a browser tab running at <code${_scopeId}>http://localhost:5173</code> where it will automatically reload itself at every <code${_scopeId}>Ctrl+S</code> save point.</p><p${_scopeId}>When you’re ready to preview a development build of the Client UI in your .NET App, run:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run build:local
</code></pre><p${_scopeId}>Which will publish your Vue 3’s App static assets to the .NET App’s <code${_scopeId}>/wwwroot</code> where it can be previewed from <code${_scopeId}>https://localhost:5001</code>.</p><h3${_scopeId}>Using Visual Studio</h3><a href="https://code.visualstudio.com/" title="Visual Studio" class="sm:float-left mr-8"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_LogosVisualStudio, {
              class: "w-24 h-24",
              style: { "margin-top": "1rem" }
            }, null, _parent2, _scopeId));
            _push2(`</a><p${_scopeId}>As your C# project grows you’ll want to consider running the back-end C# Solution with Visual Studio .NET with its much improved intelli-sense, navigation, tests runner &amp; debug capabilities.</p><p${_scopeId}>As we’ve never had a satisfactory experience trying develop npm SPA projects with VS.NET, we’d recommend only running the C# <code${_scopeId}>/api</code> project in VS.NET and continuing to use VSCode for <code${_scopeId}>/ui</code> project.</p><h3${_scopeId}>Deploying to Production</h3><p${_scopeId}>When you’re ready to deploy your App you can create a production build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run publish
</code></pre><p${_scopeId}>Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to <code${_scopeId}>/wwwroot</code> to be deployed together with your complete .NET App.</p><p${_scopeId}>Our recommendation for the best possible responsive UX is to deploy your App’s <code${_scopeId}>/wwwwroot</code> static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.</p><p${_scopeId}>To do this configure the production url the UI should use for all its <code${_scopeId}>/api</code> Ajax requests by modifying <code${_scopeId}>DEPLOY_API</code> in your <code${_scopeId}>vite.config.ts</code>:</p><pre${_scopeId}><code class="language-csharp"${_scopeId}>const DEPLOY_API = &#39;https://vue-ssg-api.jamstacks.net&#39;
</code></pre><p${_scopeId}>This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout <a href="/posts/deploy"${_scopeId}>GitHub Actions Deployments</a>.</p><h3${_scopeId}>Get Started</h3><p${_scopeId}>Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that’s used to power its type-safe &amp; productive intelli-sense dev UX.</p><p${_scopeId}>If you’re new to Vue 3 a good place to start is <a href="https://v3.vuejs.org/api/sfc-script-setup.html"${_scopeId}>Vue 3 composition APIs in SFC</a></p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", null, [
                  vue.createTextVNode("A popular alternative development environment to our preferred "),
                  vue.createVNode("a", { href: "/posts/rider" }, "JetBrains Rider"),
                  vue.createTextVNode(" IDE is to use Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for npm projects whilst Visual Studio is a better IDE for C# Projects.")
                ]),
                vue.createVNode("p", null, "Essentially this is why we recommend Rider where it’s best at both, where both C# and npm TypeScript projects can be developed from within the same solution."),
                vue.createVNode("h3", null, "Developing with just VS Code"),
                vue.createVNode("a", {
                  href: "https://visualstudio.microsoft.com/",
                  title: "VS Code",
                  class: "sm:float-left mr-8"
                }, [
                  vue.createVNode(_component_LogosVisualStudioCode, {
                    class: "w-24 h-24",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("If you prefer the dev UX of a lightweight text editor or your C# project isn’t large, than VS Code on its own can provide a great development UX which is also what "),
                  vue.createVNode("a", { href: "https://v3.vuejs.org/api/sfc-tooling.html#ide-support" }, "Vue recommends themselves"),
                  vue.createTextVNode(", to be used together with the "),
                  vue.createVNode("a", { href: "https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" }, "Volar extension"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("VSCode’s "),
                  vue.createVNode("a", { href: "https://code.visualstudio.com/docs/editor/integrated-terminal" }, "Integrated Terminal"),
                  vue.createTextVNode(" has great multi-terminal support you can toggle between the editor and terminal with "),
                  vue.createVNode("code", null, "Ctrl+"),
                  vue.createTextVNode(" or open a new Terminal Window with "),
                  vue.createVNode("code", null, "Ctrl+Shift+`"),
                  vue.createTextVNode(" to run the "),
                  vue.createVNode("code", null, "/ui"),
                  vue.createTextVNode(" dev server with:")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-bash" }, "$ npm run dev\n")
                ]),
                vue.createVNode("p", null, "Then in a new Terminal Window, start a new watched C# .NET Server build with:"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-bash" }, "$ dotnet watch\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("With both projects started you can open and leave a browser tab running at "),
                  vue.createVNode("code", null, "http://localhost:5173"),
                  vue.createTextVNode(" where it will automatically reload itself at every "),
                  vue.createVNode("code", null, "Ctrl+S"),
                  vue.createTextVNode(" save point.")
                ]),
                vue.createVNode("p", null, "When you’re ready to preview a development build of the Client UI in your .NET App, run:"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-bash" }, "$ npm run build:local\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Which will publish your Vue 3’s App static assets to the .NET App’s "),
                  vue.createVNode("code", null, "/wwwroot"),
                  vue.createTextVNode(" where it can be previewed from "),
                  vue.createVNode("code", null, "https://localhost:5001"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("h3", null, "Using Visual Studio"),
                vue.createVNode("a", {
                  href: "https://code.visualstudio.com/",
                  title: "Visual Studio",
                  class: "sm:float-left mr-8"
                }, [
                  vue.createVNode(_component_LogosVisualStudio, {
                    class: "w-24 h-24",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                vue.createVNode("p", null, "As your C# project grows you’ll want to consider running the back-end C# Solution with Visual Studio .NET with its much improved intelli-sense, navigation, tests runner & debug capabilities."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("As we’ve never had a satisfactory experience trying develop npm SPA projects with VS.NET, we’d recommend only running the C# "),
                  vue.createVNode("code", null, "/api"),
                  vue.createTextVNode(" project in VS.NET and continuing to use VSCode for "),
                  vue.createVNode("code", null, "/ui"),
                  vue.createTextVNode(" project.")
                ]),
                vue.createVNode("h3", null, "Deploying to Production"),
                vue.createVNode("p", null, "When you’re ready to deploy your App you can create a production build with:"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-bash" }, "$ npm run publish\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to "),
                  vue.createVNode("code", null, "/wwwroot"),
                  vue.createTextVNode(" to be deployed together with your complete .NET App.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Our recommendation for the best possible responsive UX is to deploy your App’s "),
                  vue.createVNode("code", null, "/wwwwroot"),
                  vue.createTextVNode(" static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("To do this configure the production url the UI should use for all its "),
                  vue.createVNode("code", null, "/api"),
                  vue.createTextVNode(" Ajax requests by modifying "),
                  vue.createVNode("code", null, "DEPLOY_API"),
                  vue.createTextVNode(" in your "),
                  vue.createVNode("code", null, "vite.config.ts"),
                  vue.createTextVNode(":")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-csharp" }, "const DEPLOY_API = 'https://vue-ssg-api.jamstacks.net'\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout "),
                  vue.createVNode("a", { href: "/posts/deploy" }, "GitHub Actions Deployments"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("h3", null, "Get Started"),
                vue.createVNode("p", null, "Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that’s used to power its type-safe & productive intelli-sense dev UX."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("If you’re new to Vue 3 a good place to start is "),
                  vue.createVNode("a", { href: "https://v3.vuejs.org/api/sfc-script-setup.html" }, "Vue 3 composition APIs in SFC")
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/vs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vs = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/posts/vs.md"]]);
exports.date = date;
exports.default = vs;
exports.meta = meta;
exports.summary = summary;
exports.title = title;

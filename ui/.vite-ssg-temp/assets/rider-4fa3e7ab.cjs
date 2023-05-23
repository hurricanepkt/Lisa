"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tailwindcssIcon = require("./tailwindcss-icon-28bdf4a9.cjs");
const MarkdownPage = require("./MarkdownPage-27ec414b.cjs");
const vue = require("vue");
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
const title = "Develop using JetBrains Rider";
const summary = "Setting up & exploring development workflow in Rider";
const date = "2021-11-23T00:00:00.000Z";
const meta = [{ "property": "og:title", "content": "Develop using JetBrains Rider" }];
const _sfc_main = {
  __name: "rider",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Develop using JetBrains Rider", "summary": "Setting up & exploring development workflow in Rider", "date": "2021-11-23T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Develop using JetBrains Rider" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Develop using JetBrains Rider", "meta": [{ "property": "og:title", "content": "Develop using JetBrains Rider" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = MarkdownPage.__unplugin_components_0;
      const _component_LogosTailwindcssIcon = tailwindcssIcon.__unplugin_components_5;
      _push(serverRenderer.ssrRenderComponent(_component_MarkdownPage, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><a href="https://www.jetbrains.com/rider/"${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg" class="sm:float-left mr-8 w-24 h-24" style="${serverRenderer.ssrRenderStyle({ "margin-top": "0" })}"${_scopeId}></a><p${_scopeId}><a href="https://www.jetbrains.com/rider/"${_scopeId}>JetBrains Rider</a> is our recommended IDE for any C# + npm SPA development as it offers a great development UX for both C# and npm projects, including excellent support for TypeScript and popular JavaScript Framework SPA assets like <a href="https://v3.vuejs.org/guide/single-file-component.html"${_scopeId}>Vue SFC’s</a>.</p><p${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/spa/vue-vite-rider-sln.png" class="sm:float-right w-60 ml-8" style="${serverRenderer.ssrRenderStyle({ "margin-top": "1rem" })}"${_scopeId}></p><h4${_scopeId}>Setup Rider IDE</h4><p${_scopeId}>Rider already understands and provides excellent support npm so you’re immediately productive out-of-the-box, the only plugin we’d add is:</p><a href="https://plugins.jetbrains.com/plugin/15321-tailwind-css" class="text-2xl flex items-center" style="${serverRenderer.ssrRenderStyle({ "text-decoration": "none" })}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_LogosTailwindcssIcon, {
              class: "sm:float-left w-12 h-12",
              style: { "margin": "0 .5rem 0 0" }
            }, null, _parent2, _scopeId));
            _push2(`<span class=""${_scopeId}>Tailwind CSS Plugin</span></a><p${_scopeId}>Which provides provides intelligent support for <a href="https://tailwindcss.com"${_scopeId}>Tailwind CSS</a>.</p><h4${_scopeId}>Setup C# Solution</h4><p${_scopeId}>To modify both C# and npm TypeScript projects within the same solution, open the C# <code${_scopeId}>/api/ProjectName.sln</code> in Rider, then on the Solution Name right-click on the context menu <code${_scopeId}>Add &gt; Attach Existing Folder...</code></p><p${_scopeId}>Then add the <code${_scopeId}>/ui</code> folder which will add your UI folder to the solution as seen on the right:</p><p${_scopeId}>After this one-time setup you’re ready to begin!</p><h3${_scopeId}>Start both npm &amp; C# projects</h3><p${_scopeId}>To take advantage of <a href="https://vitejs.dev"${_scopeId}>Vite</a> excellent Hot Module reload support, we’re now recommending UI development through its dev server which you can do in rider by opening <code${_scopeId}>package.json</code> and running the <strong${_scopeId}>dev</strong> script:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-scripts.png" alt=""${_scopeId}></p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-run-lisa.png" class="sm:float-right w-72" style="${serverRenderer.ssrRenderStyle({ "margin": "0 0 0 1rem" })}"${_scopeId}></p><p${_scopeId}>This launch vite in HMR mode where any changes to <code${_scopeId}>/ui</code> assets will have immediate effect.</p><p${_scopeId}>Then to start the back-end C# project, right-click on the Host Project and click <strong${_scopeId}>Run</strong> on the projects context menu.</p><p${_scopeId}>With both projects started you can open and leave a browser tab running at <code${_scopeId}>http://localhost:5173</code> where it will automatically reload itself at every <code${_scopeId}>Ctrl+S</code>.</p><p${_scopeId}>When you’re ready to preview a development build of the Client UI in your .NET App, run:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run build:local
</code></pre><p${_scopeId}>Which will publish your Vue 3’s App static assets to the .NET App’s <code${_scopeId}>/wwwroot</code> where it can be previewed from <code${_scopeId}>https://localhost:5001</code>.</p><h3${_scopeId}>Rider’s new Task Runner</h3><p${_scopeId}>In the latest version of Rider, once you run the npm and dotnet tasks after the first time, they will appear in Rider’s new useful task runner widget where you’ll be able to easily, stop and rerun all project tasks:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png" alt=""${_scopeId}></p><h3${_scopeId}>Start npm &amp; C# projects from the terminal</h3><p${_scopeId}>These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains excellent multi-terminal support to run <code${_scopeId}>$ dotnet watch</code> and <code${_scopeId}>$ npm run dev</code> from separate or split Terminal windows:</p><p${_scopeId}><img src="https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-rider-terminals.png" alt=""${_scopeId}></p><h3${_scopeId}>Deploying to Production</h3><p${_scopeId}>When you’re ready to deploy your App you can create a production build with:</p><pre${_scopeId}><code class="language-bash"${_scopeId}>$ npm run publish
</code></pre><p${_scopeId}>Which will generate production builds of your C# projects and npm projects with its static generated UI assets written to <code${_scopeId}>/wwwroot</code> to be deployed together with your complete .NET App.</p><p${_scopeId}>Our recommendation for the best possible responsive UX is to deploy your App’s <code${_scopeId}>/wwwwroot</code> static assets to a CDN in order for the initial load of your App to be downloaded from nearby CDN edge caches.</p><p${_scopeId}>To do this configure the production url the UI should use for all its <code${_scopeId}>/api</code> Ajax requests by modifying <code${_scopeId}>DEPLOY_API</code> in your <code${_scopeId}>vite.config.ts</code>:</p><pre${_scopeId}><code class="language-csharp"${_scopeId}>const DEPLOY_API = &#39;https://vue-ssg-api.jamstacks.net&#39;
</code></pre><p${_scopeId}>This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, for more info, checkout <a href="/posts/deploy"${_scopeId}>GitHub Actions Deployments</a>.</p><h3${_scopeId}>Get Started</h3><p${_scopeId}>Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of that’s used to power its type-safe &amp; productive intelli-sense dev UX.</p><p${_scopeId}>If you’re new to Vue 3 a good place to start is <a href="https://v3.vuejs.org/api/sfc-script-setup.html"${_scopeId}>Vue 3 composition APIs in SFC</a></p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("a", { href: "https://www.jetbrains.com/rider/" }, [
                  vue.createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg",
                    class: "sm:float-left mr-8 w-24 h-24",
                    style: { "margin-top": "0" }
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("a", { href: "https://www.jetbrains.com/rider/" }, "JetBrains Rider"),
                  vue.createTextVNode(" is our recommended IDE for any C# + npm SPA development as it offers a great development UX for both C# and npm projects, including excellent support for TypeScript and popular JavaScript Framework SPA assets like "),
                  vue.createVNode("a", { href: "https://v3.vuejs.org/guide/single-file-component.html" }, "Vue SFC’s"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/spa/vue-vite-rider-sln.png",
                    class: "sm:float-right w-60 ml-8",
                    style: { "margin-top": "1rem" }
                  })
                ]),
                vue.createVNode("h4", null, "Setup Rider IDE"),
                vue.createVNode("p", null, "Rider already understands and provides excellent support npm so you’re immediately productive out-of-the-box, the only plugin we’d add is:"),
                vue.createVNode("a", {
                  href: "https://plugins.jetbrains.com/plugin/15321-tailwind-css",
                  class: "text-2xl flex items-center",
                  style: { "text-decoration": "none" }
                }, [
                  vue.createVNode(_component_LogosTailwindcssIcon, {
                    class: "sm:float-left w-12 h-12",
                    style: { "margin": "0 .5rem 0 0" }
                  }),
                  vue.createVNode("span", { class: "" }, "Tailwind CSS Plugin")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Which provides provides intelligent support for "),
                  vue.createVNode("a", { href: "https://tailwindcss.com" }, "Tailwind CSS"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("h4", null, "Setup C# Solution"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("To modify both C# and npm TypeScript projects within the same solution, open the C# "),
                  vue.createVNode("code", null, "/api/ProjectName.sln"),
                  vue.createTextVNode(" in Rider, then on the Solution Name right-click on the context menu "),
                  vue.createVNode("code", null, "Add > Attach Existing Folder...")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Then add the "),
                  vue.createVNode("code", null, "/ui"),
                  vue.createTextVNode(" folder which will add your UI folder to the solution as seen on the right:")
                ]),
                vue.createVNode("p", null, "After this one-time setup you’re ready to begin!"),
                vue.createVNode("h3", null, "Start both npm & C# projects"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("To take advantage of "),
                  vue.createVNode("a", { href: "https://vitejs.dev" }, "Vite"),
                  vue.createTextVNode(" excellent Hot Module reload support, we’re now recommending UI development through its dev server which you can do in rider by opening "),
                  vue.createVNode("code", null, "package.json"),
                  vue.createTextVNode(" and running the "),
                  vue.createVNode("strong", null, "dev"),
                  vue.createTextVNode(" script:")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-scripts.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-run-lisa.png",
                    class: "sm:float-right w-72",
                    style: { "margin": "0 0 0 1rem" }
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("This launch vite in HMR mode where any changes to "),
                  vue.createVNode("code", null, "/ui"),
                  vue.createTextVNode(" assets will have immediate effect.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Then to start the back-end C# project, right-click on the Host Project and click "),
                  vue.createVNode("strong", null, "Run"),
                  vue.createTextVNode(" on the projects context menu.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("With both projects started you can open and leave a browser tab running at "),
                  vue.createVNode("code", null, "http://localhost:5173"),
                  vue.createTextVNode(" where it will automatically reload itself at every "),
                  vue.createVNode("code", null, "Ctrl+S"),
                  vue.createTextVNode(".")
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
                vue.createVNode("h3", null, "Rider’s new Task Runner"),
                vue.createVNode("p", null, "In the latest version of Rider, once you run the npm and dotnet tasks after the first time, they will appear in Rider’s new useful task runner widget where you’ll be able to easily, stop and rerun all project tasks:"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h3", null, "Start npm & C# projects from the terminal"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains excellent multi-terminal support to run "),
                  vue.createVNode("code", null, "$ dotnet watch"),
                  vue.createTextVNode(" and "),
                  vue.createVNode("code", null, "$ npm run dev"),
                  vue.createTextVNode(" from separate or split Terminal windows:")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://github.com/ServiceStack/docs/raw/master/docs/images/spa/vue-vite-rider-terminals.png",
                    alt: ""
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/rider.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rider = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/posts/rider.md"]]);
exports.date = date;
exports.default = rider;
exports.meta = meta;
exports.summary = summary;
exports.title = title;

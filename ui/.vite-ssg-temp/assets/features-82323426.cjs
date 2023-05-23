"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
const title = "Template Features";
const meta = [{ "property": "og:title", "content": "Template Features" }];
const _sfc_main = {
  __name: "features",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Template Features", "meta": [{ "property": "og:title", "content": "Template Features" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Template Features", "meta": [{ "property": "og:title", "content": "Template Features" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = MarkdownPage.__unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_MarkdownPage, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>This template contains our essential recommendations for a modern Vue Single Page App optimal for both productivity and performance.</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}></th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><a href="https://vitejs.dev"${_scopeId}>Vite</a></td><td${_scopeId}>Modern typed API, Lighting fast reloads, optimal builds, growing ecosystem</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://v3.vuejs.org"${_scopeId}>Vue3</a></td><td${_scopeId}>Elegant, composable reactive typed API that scales from small to large Apps</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss.com"${_scopeId}>Tailwindcss</a></td><td${_scopeId}>Productive responsive-first utility-based css framework with growing <a href="https://tailwindcomponents.com"${_scopeId}>rich component ecosystem</a></td></tr><tr${_scopeId}><td${_scopeId}><a href="https://www.typescriptlang.org"${_scopeId}>TypeScript</a></td><td${_scopeId}>Advanced type-safety, static analysis and richer IDE tooling</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://iconify.design"${_scopeId}>Iconify</a></td><td${_scopeId}>Unified registry to access 100k+ high quality SVG icons from 100+ icon sets</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/markdown-it/markdown-it"${_scopeId}>Markdown</a></td><td${_scopeId}>Native Markdown integration with advanced featureset supporting embedding of HTML &amp; Vue Components</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/vite-ssg"${_scopeId}>Vite SSG</a></td><td${_scopeId}>Server-side generation for Vue 3 on Vite</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/Kong/swrv"${_scopeId}>SWRV</a></td><td${_scopeId}>stale-while-revalidate library for Vue 3’s composition API enabling optimal end-user UX for API integrations</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss.com/docs/dark-mode"${_scopeId}>Dark Mode</a></td><td${_scopeId}>OS defined &amp; user toggable dark mode</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://pinia.esm.dev"${_scopeId}>Pinia</a></td><td${_scopeId}>Vue 3 Intuitive, TypeSafe Reactive State Management, checkout <a href="/todos"${_scopeId}>Todos</a></td></tr><tr${_scopeId}><td${_scopeId}><a href="https://tailwindcss-typography.vercel.app"${_scopeId}>tailwind/typography</a></td><td${_scopeId}>Beautiful css typography for markdown articles &amp; blog posts</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/tailwindlabs/tailwindcss-forms"${_scopeId}>tailwind/forms</a></td><td${_scopeId}>Beautiful css form &amp; input styles that’s easy to override with utilities</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/hannoeru/vite-plugin-pages"${_scopeId}>plugin/pages</a></td><td${_scopeId}>Conventional file system based routing for Vue 3 on Vite</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts"${_scopeId}>plugin/layouts</a></td><td${_scopeId}>Support for multiple page layouts</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/unplugin-vue-components"${_scopeId}>plugin/components</a></td><td${_scopeId}>Auto importing &amp; registering of components on-demand</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://github.com/antfu/unplugin-auto-import"${_scopeId}>plugin/auto-import</a></td><td${_scopeId}>Global imports in source files for reduced boilerplate</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://docs.servicestack.net/auth"${_scopeId}>Authentication</a></td><td${_scopeId}>Simple, built-in flexible auth protected by route guards</td></tr><tr${_scopeId}><td${_scopeId}><a href="https://docs.servicestack.net/validation"${_scopeId}>Validation</a></td><td${_scopeId}>Auto form binding, submission, loading and validation</td></tr></tbody></table><h2${_scopeId}>Vue Plugins</h2><p${_scopeId}>The Vite plugins registered in <code${_scopeId}>vite.config.ts</code> improves productivity by adopting popular conventions that automating-away manual tasks &amp; configurations.</p><h3${_scopeId}><a href="https://github.com/antfu/unplugin-vue-components"${_scopeId}>unplugin-vue-components</a></h3><p${_scopeId}>For Auto Registering Vue Components, either <code${_scopeId}>.vue</code> SFC’s, <code${_scopeId}>.md</code> Markdown components or Iconify’s icons as Vue3 components.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Components({
    extensions: [&#39;vue&#39;, &#39;md&#39;],
    include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
    resolvers: [
        // auto import icons without any prefix
        IconsResolver({
            componentPrefix: &#39;&#39;
        }),
    ],
    dts: &#39;src/components.d.ts&#39;, // auto-gen type definitions
})
</code></pre><h3${_scopeId}><a href="https://github.com/antfu/unplugin-icons"${_scopeId}>unplugin-icons</a></h3><p${_scopeId}>For accessing <a href="https://icon-sets.iconify.design"${_scopeId}>thousands of Iconfigy’s SVG icons</a> as Vue components <strong${_scopeId}>on-demand</strong> universally.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Icons({ })
</code></pre><h3${_scopeId}><a href="https://github.com/hannoeru/vite-plugin-pages"${_scopeId}>vite-plugin-pages</a></h3><p${_scopeId}>For auto generating vue routing configurations for each Vue 3 component from <a href="https://github.com/hannoeru/vite-plugin-pages#file-system-routing"${_scopeId}>NuxtJS inspired File System Routing</a> conventions.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Pages({
  dirs: [
    { dir: &quot;src/pages&quot;, baseRoute: &quot;posts&quot; }, // at: /posts/*
    { dir: &quot;src/views&quot;, baseRoute: &quot;&quot; },      // at: /*
  ],
  extensions: [&#39;vue&#39;, &#39;md&#39;],
  extendRoute(route:any) {
    // attach markdown frontmatter metadata to their routes
  },
})
</code></pre><h3${_scopeId}><a href="https://github.com/antfu/vite-plugin-md"${_scopeId}>vite-plugin-md</a></h3><p${_scopeId}>For enabling Markdown Support by converting each <code${_scopeId}>.md</code> document into a Vue Component that’s rendered using <a href="https://github.com/markdown-it/markdown-it"${_scopeId}>markdown-it</a>.</p><pre${_scopeId}><code class="language-ts"${_scopeId}>Markdown({
    markdownItOptions: {
        // html: true,
    },
    markdownItSetup(md) {
        //md.use(markdownPlugin)
    },
    wrapperComponent: &#39;MarkdownPage&#39;
})
</code></pre><h2${_scopeId}>App Features</h2><h3${_scopeId}>Stale While Revalidate</h3><p${_scopeId}><a href="https://web.dev/stale-while-revalidate/"${_scopeId}>stale-while-revalidate</a> is a popular UI pattern helps developers balance between immediacy—loading cached content right away—and freshness—ensuring updates to the cached content are used in the future.</p><p${_scopeId}>This template includes a <code${_scopeId}>swrClient</code> that provides a typed wrapper around <a href="https://github.com/Kong/swrv"${_scopeId}>Vue3’s SWVR</a> library for making typed API Requests with ServiceStack’s typed <a href="https://docs.servicestack.net/typescript-add-servicestack-reference"${_scopeId}>JsonServiceClient</a>.</p><pre${_scopeId}><code class="language-html"${_scopeId}>&lt;template&gt;
  &lt;div v-if=&quot;error&quot;&gt;{{ error.message }}&lt;/div&gt;
  &lt;div v-else&gt;{{data ? data.result :&#39;loading...&#39;}}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { Hello } from &quot;@/dtos&quot;
import { swrClient } from &quot;@/api&quot;

const props = defineProps&lt;{ name: string }&gt;()

const { data, error } = swrClient.get(() =&gt; 
    new Hello({ name: props.name }))
&lt;/script&gt;
</code></pre><p${_scopeId}>This reactively sets up the UI to handle multiple states:</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>loading</code> - displays the <code${_scopeId}>loading...</code> message whilst API request is in transit</li><li${_scopeId}><code${_scopeId}>data</code> - when completed, populated with a <code${_scopeId}>HelloResponse</code> and displayed</li><li${_scopeId}><code${_scopeId}>error</code> - when failed, populated with <code${_scopeId}>ResponseStatus</code> and displayed</li></ul><p${_scopeId}>The primary UX benefits are realized when re-making an existing request in which a locally-cached <em${_scopeId}>stale</em> version is immediately returned and displayed whilst a new API Request is made behind the scenes, which updates the UI when completed.</p><p${_scopeId}>Ultimately this provides the optimal end-user UX with the UI being immediately updated with <em${_scopeId}>stale</em> results initially, before being re-updated with the latest UI when the new API Request is completed.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", null, "This template contains our essential recommendations for a modern Vue Single Page App optimal for both productivity and performance."),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th"),
                      vue.createVNode("th")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://vitejs.dev" }, "Vite")
                      ]),
                      vue.createVNode("td", null, "Modern typed API, Lighting fast reloads, optimal builds, growing ecosystem")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://v3.vuejs.org" }, "Vue3")
                      ]),
                      vue.createVNode("td", null, "Elegant, composable reactive typed API that scales from small to large Apps")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://tailwindcss.com" }, "Tailwindcss")
                      ]),
                      vue.createVNode("td", null, [
                        vue.createTextVNode("Productive responsive-first utility-based css framework with growing "),
                        vue.createVNode("a", { href: "https://tailwindcomponents.com" }, "rich component ecosystem")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://www.typescriptlang.org" }, "TypeScript")
                      ]),
                      vue.createVNode("td", null, "Advanced type-safety, static analysis and richer IDE tooling")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://iconify.design" }, "Iconify")
                      ]),
                      vue.createVNode("td", null, "Unified registry to access 100k+ high quality SVG icons from 100+ icon sets")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/markdown-it/markdown-it" }, "Markdown")
                      ]),
                      vue.createVNode("td", null, "Native Markdown integration with advanced featureset supporting embedding of HTML & Vue Components")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/antfu/vite-ssg" }, "Vite SSG")
                      ]),
                      vue.createVNode("td", null, "Server-side generation for Vue 3 on Vite")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/Kong/swrv" }, "SWRV")
                      ]),
                      vue.createVNode("td", null, "stale-while-revalidate library for Vue 3’s composition API enabling optimal end-user UX for API integrations")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://tailwindcss.com/docs/dark-mode" }, "Dark Mode")
                      ]),
                      vue.createVNode("td", null, "OS defined & user toggable dark mode")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://pinia.esm.dev" }, "Pinia")
                      ]),
                      vue.createVNode("td", null, [
                        vue.createTextVNode("Vue 3 Intuitive, TypeSafe Reactive State Management, checkout "),
                        vue.createVNode("a", { href: "/todos" }, "Todos")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://tailwindcss-typography.vercel.app" }, "tailwind/typography")
                      ]),
                      vue.createVNode("td", null, "Beautiful css typography for markdown articles & blog posts")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/tailwindlabs/tailwindcss-forms" }, "tailwind/forms")
                      ]),
                      vue.createVNode("td", null, "Beautiful css form & input styles that’s easy to override with utilities")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages" }, "plugin/pages")
                      ]),
                      vue.createVNode("td", null, "Conventional file system based routing for Vue 3 on Vite")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/JohnCampionJr/vite-plugin-vue-layouts" }, "plugin/layouts")
                      ]),
                      vue.createVNode("td", null, "Support for multiple page layouts")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/antfu/unplugin-vue-components" }, "plugin/components")
                      ]),
                      vue.createVNode("td", null, "Auto importing & registering of components on-demand")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://github.com/antfu/unplugin-auto-import" }, "plugin/auto-import")
                      ]),
                      vue.createVNode("td", null, "Global imports in source files for reduced boilerplate")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://docs.servicestack.net/auth" }, "Authentication")
                      ]),
                      vue.createVNode("td", null, "Simple, built-in flexible auth protected by route guards")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "https://docs.servicestack.net/validation" }, "Validation")
                      ]),
                      vue.createVNode("td", null, "Auto form binding, submission, loading and validation")
                    ])
                  ])
                ]),
                vue.createVNode("h2", null, "Vue Plugins"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The Vite plugins registered in "),
                  vue.createVNode("code", null, "vite.config.ts"),
                  vue.createTextVNode(" improves productivity by adopting popular conventions that automating-away manual tasks & configurations.")
                ]),
                vue.createVNode("h3", null, [
                  vue.createVNode("a", { href: "https://github.com/antfu/unplugin-vue-components" }, "unplugin-vue-components")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For Auto Registering Vue Components, either "),
                  vue.createVNode("code", null, ".vue"),
                  vue.createTextVNode(" SFC’s, "),
                  vue.createVNode("code", null, ".md"),
                  vue.createTextVNode(" Markdown components or Iconify’s icons as Vue3 components.")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-ts" }, "Components({\n    extensions: ['vue', 'md'],\n    include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],\n    resolvers: [\n        // auto import icons without any prefix\n        IconsResolver({\n            componentPrefix: ''\n        }),\n    ],\n    dts: 'src/components.d.ts', // auto-gen type definitions\n})\n")
                ]),
                vue.createVNode("h3", null, [
                  vue.createVNode("a", { href: "https://github.com/antfu/unplugin-icons" }, "unplugin-icons")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For accessing "),
                  vue.createVNode("a", { href: "https://icon-sets.iconify.design" }, "thousands of Iconfigy’s SVG icons"),
                  vue.createTextVNode(" as Vue components "),
                  vue.createVNode("strong", null, "on-demand"),
                  vue.createTextVNode(" universally.")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-ts" }, "Icons({ })\n")
                ]),
                vue.createVNode("h3", null, [
                  vue.createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages" }, "vite-plugin-pages")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For auto generating vue routing configurations for each Vue 3 component from "),
                  vue.createVNode("a", { href: "https://github.com/hannoeru/vite-plugin-pages#file-system-routing" }, "NuxtJS inspired File System Routing"),
                  vue.createTextVNode(" conventions.")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-ts" }, `Pages({
  dirs: [
    { dir: "src/pages", baseRoute: "posts" }, // at: /posts/*
    { dir: "src/views", baseRoute: "" },      // at: /*
  ],
  extensions: ['vue', 'md'],
  extendRoute(route:any) {
    // attach markdown frontmatter metadata to their routes
  },
})
`)
                ]),
                vue.createVNode("h3", null, [
                  vue.createVNode("a", { href: "https://github.com/antfu/vite-plugin-md" }, "vite-plugin-md")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For enabling Markdown Support by converting each "),
                  vue.createVNode("code", null, ".md"),
                  vue.createTextVNode(" document into a Vue Component that’s rendered using "),
                  vue.createVNode("a", { href: "https://github.com/markdown-it/markdown-it" }, "markdown-it"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-ts" }, "Markdown({\n    markdownItOptions: {\n        // html: true,\n    },\n    markdownItSetup(md) {\n        //md.use(markdownPlugin)\n    },\n    wrapperComponent: 'MarkdownPage'\n})\n")
                ]),
                vue.createVNode("h2", null, "App Features"),
                vue.createVNode("h3", null, "Stale While Revalidate"),
                vue.createVNode("p", null, [
                  vue.createVNode("a", { href: "https://web.dev/stale-while-revalidate/" }, "stale-while-revalidate"),
                  vue.createTextVNode(" is a popular UI pattern helps developers balance between immediacy—loading cached content right away—and freshness—ensuring updates to the cached content are used in the future.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("This template includes a "),
                  vue.createVNode("code", null, "swrClient"),
                  vue.createTextVNode(" that provides a typed wrapper around "),
                  vue.createVNode("a", { href: "https://github.com/Kong/swrv" }, "Vue3’s SWVR"),
                  vue.createTextVNode(" library for making typed API Requests with ServiceStack’s typed "),
                  vue.createVNode("a", { href: "https://docs.servicestack.net/typescript-add-servicestack-reference" }, "JsonServiceClient"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-html" }, `<template>
  <div v-if="error">{{ error.message }}</div>
  <div v-else>{{data ? data.result :'loading...'}}</div>
</template>

<script setup lang="ts">
import { Hello } from "@/dtos"
import { swrClient } from "@/api"

const props = defineProps<{ name: string }>()

const { data, error } = swrClient.get(() => 
    new Hello({ name: props.name }))
<\/script>
`)
                ]),
                vue.createVNode("p", null, "This reactively sets up the UI to handle multiple states:"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("code", null, "loading"),
                    vue.createTextVNode(" - displays the "),
                    vue.createVNode("code", null, "loading..."),
                    vue.createTextVNode(" message whilst API request is in transit")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("code", null, "data"),
                    vue.createTextVNode(" - when completed, populated with a "),
                    vue.createVNode("code", null, "HelloResponse"),
                    vue.createTextVNode(" and displayed")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("code", null, "error"),
                    vue.createTextVNode(" - when failed, populated with "),
                    vue.createVNode("code", null, "ResponseStatus"),
                    vue.createTextVNode(" and displayed")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The primary UX benefits are realized when re-making an existing request in which a locally-cached "),
                  vue.createVNode("em", null, "stale"),
                  vue.createTextVNode(" version is immediately returned and displayed whilst a new API Request is made behind the scenes, which updates the UI when completed.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Ultimately this provides the optimal end-user UX with the UI being immediately updated with "),
                  vue.createVNode("em", null, "stale"),
                  vue.createTextVNode(" results initially, before being re-updated with the latest UI when the new API Request is completed.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/features.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const features = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/features.md"]]);
exports.default = features;
exports.meta = meta;
exports.title = title;

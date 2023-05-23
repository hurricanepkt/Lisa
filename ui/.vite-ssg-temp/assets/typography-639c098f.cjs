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
const title = "Tailwind Typography";
const summary = "tailwindcss/typography enabled for Markdown pages";
const date = "2021-11-20T00:00:00.000Z";
const meta = [{ "property": "og:title", "content": "Tailwind Typography" }];
const _sfc_main = {
  __name: "typography",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Tailwind Typography", "summary": "tailwindcss/typography enabled for Markdown pages", "date": "2021-11-20T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Tailwind Typography" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Tailwind Typography", "meta": [{ "property": "og:title", "content": "Tailwind Typography" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = MarkdownPage.__unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_MarkdownPage, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p class="lead"${_scopeId}> Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. </p><p${_scopeId}>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em${_scopeId}>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p><p${_scopeId}>We get lots of complaints about it actually, with people regularly asking us things like:</p><blockquote${_scopeId}><p${_scopeId}>Why is Tailwind removing the default styles on my <code${_scopeId}>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p></blockquote><p${_scopeId}>We hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a <code${_scopeId}>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em${_scopeId}>awesome</em>, not awful.</p><p${_scopeId}>The <code${_scopeId}>@tailwindcss/typography</code> plugin is our attempt to give you what you <em${_scopeId}>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p><p${_scopeId}>It adds a new <code${_scopeId}>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p><pre${_scopeId}><code class="language-html"${_scopeId}>&lt;article class=&quot;prose&quot;&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre><p${_scopeId}>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md"${_scopeId}>read the documentation</a>.</p><hr${_scopeId}><h2${_scopeId}>What to expect from here on out</h2><p${_scopeId}>What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong${_scopeId}>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em${_scopeId}>and even italics</em>.</p><p${_scopeId}>It’s important to cover all of these use cases for a few reasons:</p><ol${_scopeId}><li${_scopeId}>We want everything to look good out of the box.</li><li${_scopeId}>Really just the first reason, that’s the whole point of the plugin.</li><li${_scopeId}>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol><p${_scopeId}>Now we’re going to try out another header style.</p><h3${_scopeId}>Typography should be easy</h3><p${_scopeId}>So that’s a header for you — with any luck if we’ve done our job correctly that will look pretty reasonable.</p><p${_scopeId}>Something a wise person once told me about typography is:</p><blockquote${_scopeId}><p${_scopeId}>Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.</p></blockquote><p${_scopeId}>It’s probably important that images look okay here by default as well:</p><figure${_scopeId}><img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""${_scopeId}><figcaption${_scopeId}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </figcaption></figure><p${_scopeId}>Now I’m going to show you an example of an unordered list to make sure that looks good, too:</p><ul${_scopeId}><li${_scopeId}>So here is the first item in this list.</li><li${_scopeId}>In this example we’re keeping the items short.</li><li${_scopeId}>Later, we’ll use longer, more complex list items.</li></ul><p${_scopeId}>And that’s the end of this section.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", { class: "lead" }, " Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. "),
                vue.createVNode("p", null, [
                  vue.createTextVNode("By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you "),
                  vue.createVNode("em", null, "really are"),
                  vue.createTextVNode(" just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.")
                ]),
                vue.createVNode("p", null, "We get lots of complaints about it actually, with people regularly asking us things like:"),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, [
                    vue.createTextVNode("Why is Tailwind removing the default styles on my "),
                    vue.createVNode("code", null, "h1"),
                    vue.createTextVNode(" elements? How do I disable this? What do you mean I lose all the other base styles too?")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("We hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a "),
                  vue.createVNode("code", null, "p"),
                  vue.createTextVNode(" element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look "),
                  vue.createVNode("em", null, "awesome"),
                  vue.createTextVNode(", not awful.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The "),
                  vue.createVNode("code", null, "@tailwindcss/typography"),
                  vue.createTextVNode(" plugin is our attempt to give you what you "),
                  vue.createVNode("em", null, "actually"),
                  vue.createTextVNode(" want, without any of the downsides of doing something stupid like disabling our base styles.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("It adds a new "),
                  vue.createVNode("code", null, "prose"),
                  vue.createTextVNode(" class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-html" }, '<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  </p>\n  <!-- ... -->\n</article>\n')
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For more information about how to use the plugin and the features it includes, "),
                  vue.createVNode("a", { href: "https://github.com/tailwindcss/typography/blob/master/README.md" }, "read the documentation"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("hr"),
                vue.createVNode("h2", null, "What to expect from here on out"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like "),
                  vue.createVNode("strong", null, "bold text"),
                  vue.createTextVNode(", unordered lists, ordered lists, code blocks, block quotes, "),
                  vue.createVNode("em", null, "and even italics"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("p", null, "It’s important to cover all of these use cases for a few reasons:"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "We want everything to look good out of the box."),
                  vue.createVNode("li", null, "Really just the first reason, that’s the whole point of the plugin."),
                  vue.createVNode("li", null, "Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.")
                ]),
                vue.createVNode("p", null, "Now we’re going to try out another header style."),
                vue.createVNode("h3", null, "Typography should be easy"),
                vue.createVNode("p", null, "So that’s a header for you — with any luck if we’ve done our job correctly that will look pretty reasonable."),
                vue.createVNode("p", null, "Something a wise person once told me about typography is:"),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.")
                ]),
                vue.createVNode("p", null, "It’s probably important that images look okay here by default as well:"),
                vue.createVNode("figure", null, [
                  vue.createVNode("img", {
                    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    alt: ""
                  }),
                  vue.createVNode("figcaption", null, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ")
                ]),
                vue.createVNode("p", null, "Now I’m going to show you an example of an unordered list to make sure that looks good, too:"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "So here is the first item in this list."),
                  vue.createVNode("li", null, "In this example we’re keeping the items short."),
                  vue.createVNode("li", null, "Later, we’ll use longer, more complex list items.")
                ]),
                vue.createVNode("p", null, "And that’s the end of this section.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/typography.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const typography = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/posts/typography.md"]]);
exports.date = date;
exports.default = typography;
exports.meta = meta;
exports.summary = summary;
exports.title = title;

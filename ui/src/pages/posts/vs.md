---
title: Develop using Visual Studio
summary: Exploring development workflow in VS Code and Visual Studio .NET
date: 2021-11-22
---

A popular alternative development environment to our preferred [JetBrains Rider](/posts/rider) IDE is to use
Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for npm
projects whilst Visual Studio is a better IDE for C# Projects. 

Essentially this is why we recommend Rider where it's best at both, where both C# and npm TypeScript projects can 
be developed from within the same solution.

### Developing with just VS Code

<a href="https://visualstudio.microsoft.com/" title="VS Code" class="sm:float-left mr-8">
<LogosVisualStudioCode class="w-24 h-24" style="margin-top:1rem" />
</a>

If you prefer the dev UX of a lightweight text editor or your C# project isn't large, than VS Code on its own
can provide a great development UX which is also what [Vue recommends themselves](https://v3.vuejs.org/api/sfc-tooling.html#ide-support),
to be used together with the [Volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar).

VSCode's [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) has great multi-terminal 
support you can toggle between the editor and terminal with `Ctrl+` or open a new Terminal Window with
<code>Ctrl+Shift+`</code> to run the <code>/ui</code> dev server with:

```bash
$ npm run dev
```

Then in a new Terminal Window, start a new watched C# .NET Server build with:

```bash
$ dotnet watch
```

With both projects started you can open and leave a browser tab running at `http://localhost:5173` where it 
will automatically reload itself at every `Ctrl+S` save point.

When you're ready to preview a development build of the Client UI in your .NET App, run:

```bash
$ npm run build:local
```

Which will publish your Vue 3's App static assets to the .NET App's `/wwwroot` where it can be previewed from
`https://localhost:5001`.

### Using Visual Studio

<a href="https://code.visualstudio.com/" title="Visual Studio" class="sm:float-left mr-8">
<LogosVisualStudio class="w-24 h-24" style="margin-top:1rem" />
</a>

As your C# project grows you'll want to consider running the back-end C# Solution with Visual Studio .NET with its
much improved intelli-sense, navigation, tests runner & debug capabilities. 

As we've never had a satisfactory experience trying develop npm SPA projects with VS.NET, we'd recommend only 
running the C# `/api` project in VS.NET and continuing to use VSCode for `/ui` project. 

### Deploying to Production

When you're ready to deploy your App you can create a production build with:

```bash
$ npm run publish
```

Which will generate production builds of your C# projects and npm projects with its static generated UI assets
written to `/wwwroot` to be deployed together with your complete .NET App.

Our recommendation for the best possible responsive UX is to deploy your App's `/wwwwroot` static assets to a CDN in
order for the initial load of your App to be downloaded from nearby CDN edge caches.

To do this configure the production url the UI should use for all its `/api` Ajax requests by modifying
`DEPLOY_API` in your `vite.config.ts`:

```csharp
const DEPLOY_API = 'https://vue-ssg-api.jamstacks.net'
```

This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN,
for more info, checkout [GitHub Actions Deployments](/posts/deploy).

### Get Started

Driven by the static typing benefits of TypeScript, Vue 3 was itself written in TypeScript, a benefit that sees it
extend to elevate TypeScript with first-class citizen support that development IDEs like Rider take full advantage of
that's used to power its type-safe & productive intelli-sense dev UX.

If you're new to Vue 3 a good place to start is
[Vue 3 composition APIs in SFC](https://v3.vuejs.org/api/sfc-script-setup.html)

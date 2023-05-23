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
const title = "Deployment with GitHub Actions";
const summary = "Configuring your GitHub repo for SSH and CDN deployments";
const date = "2021-11-21T00:00:00.000Z";
const meta = [{ "property": "og:title", "content": "Deployment with GitHub Actions" }];
const _sfc_main = {
  __name: "deploy",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Deployment with GitHub Actions", "summary": "Configuring your GitHub repo for SSH and CDN deployments", "date": "2021-11-21T00:00:00.000Z", "meta": [{ "property": "og:title", "content": "Deployment with GitHub Actions" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Deployment with GitHub Actions", "meta": [{ "property": "og:title", "content": "Deployment with GitHub Actions" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownPage = MarkdownPage.__unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_MarkdownPage, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h1${_scopeId}>ServiceStack GitHub Action Deployments</h1><p${_scopeId}>The <a href="https://github.com/NetCoreTemplates/vue-ssg/blob/main/.github/workflows/release.yml"${_scopeId}>release.yml</a> in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.</p><h2${_scopeId}>Overview</h2><p${_scopeId}><code${_scopeId}>release.yml</code> is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub’s <code${_scopeId}>ghcr.io</code> docker registry when a GitHub Release is created.</p><p${_scopeId}>GitHub Actions specified in <code${_scopeId}>release.yml</code> then copy files remotely via scp and use <code${_scopeId}>docker-compose</code> to run the app remotely via SSH.</p><h2${_scopeId}>What’s the process of <code${_scopeId}>release.yml</code>?</h2><p${_scopeId}><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png" alt=""${_scopeId}></p><h2${_scopeId}>Deployment server setup</h2><p${_scopeId}>To get this working, a server needs to be setup with the following:</p><ul${_scopeId}><li${_scopeId}>SSH access</li><li${_scopeId}>docker</li><li${_scopeId}>docker-compose</li><li${_scopeId}>ports 443 and 80 for web access of your hosted application</li></ul><p${_scopeId}>This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc.</p><p${_scopeId}>When setting up your server, you’ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the <em${_scopeId}>private</em> SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.</p><p${_scopeId}>To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, <code${_scopeId}>nginx-proxy-compose.yml</code>. This docker-compose file is ready to run and can be copied to the deployment server.</p><p${_scopeId}>For example, once copied to remote <code${_scopeId}>~/nginx-proxy-compose.yml</code>, the following command can be run on the remote server.</p><pre${_scopeId}><code${_scopeId}>docker-compose -f ~/nginx-proxy-compose.yml up -d
</code></pre><p${_scopeId}>This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates.</p><h3${_scopeId}>GitHub Actions secrets</h3><p${_scopeId}>The <code${_scopeId}>release.yml</code> uses the following secrets.</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Required Secrets</th><th${_scopeId}>Description</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_API</code></td><td${_scopeId}>Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server</td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_USERNAME</code></td><td${_scopeId}>Username to log in with via SSH e.g, <strong${_scopeId}>ubuntu</strong>, <strong${_scopeId}>ec2-user</strong>, <strong${_scopeId}>root</strong></td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_KEY</code></td><td${_scopeId}>SSH private key used to remotely access deploy .NET App</td></tr><tr${_scopeId}><td${_scopeId}><code${_scopeId}>LETSENCRYPT_EMAIL</code></td><td${_scopeId}>Email required for Let’s Encrypt automated TLS certificates</td></tr></tbody></table><p${_scopeId}>To also enable deploying static assets to a CDN:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Optional Secrets</th><th${_scopeId}>Description</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}><code${_scopeId}>DEPLOY_CDN</code></td><td${_scopeId}>Hostname where static <strong${_scopeId}>/wwwroot</strong> assets should be deployed to</td></tr></tbody></table><p${_scopeId}>These secrets can use the <a href="https://cli.github.com/manual/gh_secret_set"${_scopeId}>GitHub CLI</a> for ease of creation. Eg, using the GitHub CLI the following can be set.</p><pre${_scopeId}><code class="language-bash"${_scopeId}>gh secret set DEPLOY_API -b&quot;&lt;DEPLOY_API&gt;&quot;
gh secret set DEPLOY_USERNAME -b&quot;&lt;DEPLOY_USERNAME&gt;&quot;
gh secret set DEPLOY_KEY &lt; key.pem # DEPLOY_KEY
gh secret set LETSENCRYPT_EMAIL -b&quot;&lt;LETSENCRYPT_EMAIL&gt;&quot;
gh secret set DEPLOY_CDN -b&quot;&lt;DEPLOY_CDN&gt;&quot;
</code></pre><p${_scopeId}>These secrets are used to populate variables within GitHub Actions and other configuration files.</p><h2${_scopeId}>UI Deployment</h2><p${_scopeId}>The Vue 3 <code${_scopeId}>ui</code> application is built and deployed to GitHub Pages during the <code${_scopeId}>release.yml</code> workflow process by committing the result of <code${_scopeId}>npm run build</code> to <code${_scopeId}>gh-pages</code> branch in the repository.</p><p${_scopeId}>Variable replacement of <code${_scopeId}>$DEPLOY_API</code> and <code${_scopeId}>$DEPLOY_CDN</code> is performed on the following files as a way to coordinate configuration between the <code${_scopeId}>ui</code> and <code${_scopeId}>api</code> project.</p><ul${_scopeId}><li${_scopeId}><code${_scopeId}>ui/vite.config.ts</code> - Set backend .NET API URL for UI App to use</li><li${_scopeId}><code${_scopeId}>ui/post.build.js</code> - If exists, run from GitHub Action after <code${_scopeId}>npm run build</code></li></ul><h3${_scopeId}>post.build.js</h3><p${_scopeId}>The <code${_scopeId}>post.build.js</code> script helps when also publishing <code${_scopeId}>/ui</code> assets to CDN by first copying the generated <code${_scopeId}>index.html</code> home page into <code${_scopeId}>404.html</code> in order to enable full page reloads to use SPA client routing:</p><pre${_scopeId}><code class="language-js"${_scopeId}>import * as fs from &quot;fs&quot;
import * as path from &quot;path&quot;

// Replaced in release.yml with GitHub Actions secrets
const DEPLOY_API = &#39;https://$DEPLOY_API&#39;
const DEPLOY_CDN = &#39;https://$DEPLOY_CDN&#39;

const DIST = &#39;../api/Jamstacks/wwwroot&#39;

// 404.html SPA fallback (supported by GitHub Pages, Cloudflare &amp; Netlify CDNs)
fs.copyFileSync(
    path.resolve(\`\${DIST}/index.html\`),
    path.resolve(\`\${DIST}/404.html\`))

// Define Virtual Host for GitHub Pages CDN
fs.writeFileSync(\`\${DIST}/CNAME\`, DEPLOY_CDN)

// Define /api proxy routes (supported by Cloudflare or Netlify CDNs)  
fs.writeFileSync(\`\${DIST}/_redirects\`,
    fs.readFileSync(\`\${DIST}/_redirects\`, &#39;utf-8&#39;)
        .replace(/{DEPLOY_API}/g, DEPLOY_API))
</code></pre><p${_scopeId}>Whilst the <code${_scopeId}>_redirects</code> file is a convention supported by many <a href="https://jamstack.wtf/#deployment"${_scopeId}>popular Jamstack CDNs</a> that sets up a new rule that proxies <code${_scopeId}>/api*</code> requests to where the production .NET App is deployed to in order for API requests to not need CORS:</p><pre${_scopeId}><code${_scopeId}>/api/*  {DEPLOY_API}/api/:splat  200
</code></pre><p${_scopeId}>By default this template doesn’t use the <code${_scopeId}>/api</code> proxy route &amp; makes CORS API requests so it can be freely hosted on GitHub pages CDN.</p><h2${_scopeId}>Pushing updates and rollbacks</h2><p${_scopeId}>By default, deployments of both the <code${_scopeId}>ui</code> and <code${_scopeId}>api</code> occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose. Your Vue UI is built and pushed to the repository GitHub Pages.</p><p${_scopeId}>The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases.</p><p${_scopeId}>Additionally, the <code${_scopeId}>release.yml</code> workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn’t create a new Docker build based on previous code state, only redeploys as existing Docker image.</p><h2${_scopeId}>No CORS Hosting Options</h2><p${_scopeId}>The <code${_scopeId}>CorsFeature</code> needs to be enabled when adopting our recommended deployment configuration of having static <code${_scopeId}>/wwwroot</code> assets hosted from a CDN in order to make cross-domain requests to your .NET APIs.</p><h3${_scopeId}>Using a CDN Proxy</h3><p${_scopeId}>Should you want to, our recommended approach to avoid your App making CORS requests is to define an <code${_scopeId}>/api</code> proxy route on your CDN to your <code${_scopeId}>$DEPLOY_API</code> server.</p><p${_scopeId}>To better support this use-case, this template includes populating the <code${_scopeId}>_redirects</code> file used by popular CDNs like <a href="https://developers.cloudflare.com/pages/platform/redirects"${_scopeId}>Cloudflare proxy redirects</a> and <a href="https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service"${_scopeId}>Netlify proxies</a> to define redirect and proxy rules. For AWS CloudFront you would need to define a <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html"${_scopeId}>Behavior for a custom origin</a>.</p><h3${_scopeId}>No CDN</h3><p${_scopeId}>Of course the easiest solution is to not need CORS in the first place by not deploying to a CDN and serving both <code${_scopeId}>/api</code> and UI from your .NET App. But this would forgo all the performance &amp; UX benefits that has made <a href="https://jamstack.org"${_scopeId}>Jamstack</a> approach so popular.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("h1", null, "ServiceStack GitHub Action Deployments"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The "),
                  vue.createVNode("a", { href: "https://github.com/NetCoreTemplates/vue-ssg/blob/main/.github/workflows/release.yml" }, "release.yml"),
                  vue.createTextVNode(" in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.")
                ]),
                vue.createVNode("h2", null, "Overview"),
                vue.createVNode("p", null, [
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode(" is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub’s "),
                  vue.createVNode("code", null, "ghcr.io"),
                  vue.createTextVNode(" docker registry when a GitHub Release is created.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("GitHub Actions specified in "),
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode(" then copy files remotely via scp and use "),
                  vue.createVNode("code", null, "docker-compose"),
                  vue.createTextVNode(" to run the app remotely via SSH.")
                ]),
                vue.createVNode("h2", null, [
                  vue.createTextVNode("What’s the process of "),
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode("?")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", null, "Deployment server setup"),
                vue.createVNode("p", null, "To get this working, a server needs to be setup with the following:"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "SSH access"),
                  vue.createVNode("li", null, "docker"),
                  vue.createVNode("li", null, "docker-compose"),
                  vue.createVNode("li", null, "ports 443 and 80 for web access of your hosted application")
                ]),
                vue.createVNode("p", null, "This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("When setting up your server, you’ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the "),
                  vue.createVNode("em", null, "private"),
                  vue.createTextVNode(" SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, "),
                  vue.createVNode("code", null, "nginx-proxy-compose.yml"),
                  vue.createTextVNode(". This docker-compose file is ready to run and can be copied to the deployment server.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("For example, once copied to remote "),
                  vue.createVNode("code", null, "~/nginx-proxy-compose.yml"),
                  vue.createTextVNode(", the following command can be run on the remote server.")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "docker-compose -f ~/nginx-proxy-compose.yml up -d\n")
                ]),
                vue.createVNode("p", null, "This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates."),
                vue.createVNode("h3", null, "GitHub Actions secrets"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The "),
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode(" uses the following secrets.")
                ]),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "Required Secrets"),
                      vue.createVNode("th", null, "Description")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("code", null, "DEPLOY_API")
                      ]),
                      vue.createVNode("td", null, "Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("code", null, "DEPLOY_USERNAME")
                      ]),
                      vue.createVNode("td", null, [
                        vue.createTextVNode("Username to log in with via SSH e.g, "),
                        vue.createVNode("strong", null, "ubuntu"),
                        vue.createTextVNode(", "),
                        vue.createVNode("strong", null, "ec2-user"),
                        vue.createTextVNode(", "),
                        vue.createVNode("strong", null, "root")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("code", null, "DEPLOY_KEY")
                      ]),
                      vue.createVNode("td", null, "SSH private key used to remotely access deploy .NET App")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("code", null, "LETSENCRYPT_EMAIL")
                      ]),
                      vue.createVNode("td", null, "Email required for Let’s Encrypt automated TLS certificates")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, "To also enable deploying static assets to a CDN:"),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "Optional Secrets"),
                      vue.createVNode("th", null, "Description")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, [
                        vue.createVNode("code", null, "DEPLOY_CDN")
                      ]),
                      vue.createVNode("td", null, [
                        vue.createTextVNode("Hostname where static "),
                        vue.createVNode("strong", null, "/wwwroot"),
                        vue.createTextVNode(" assets should be deployed to")
                      ])
                    ])
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("These secrets can use the "),
                  vue.createVNode("a", { href: "https://cli.github.com/manual/gh_secret_set" }, "GitHub CLI"),
                  vue.createTextVNode(" for ease of creation. Eg, using the GitHub CLI the following can be set.")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-bash" }, 'gh secret set DEPLOY_API -b"<DEPLOY_API>"\ngh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME>"\ngh secret set DEPLOY_KEY < key.pem # DEPLOY_KEY\ngh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL>"\ngh secret set DEPLOY_CDN -b"<DEPLOY_CDN>"\n')
                ]),
                vue.createVNode("p", null, "These secrets are used to populate variables within GitHub Actions and other configuration files."),
                vue.createVNode("h2", null, "UI Deployment"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The Vue 3 "),
                  vue.createVNode("code", null, "ui"),
                  vue.createTextVNode(" application is built and deployed to GitHub Pages during the "),
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode(" workflow process by committing the result of "),
                  vue.createVNode("code", null, "npm run build"),
                  vue.createTextVNode(" to "),
                  vue.createVNode("code", null, "gh-pages"),
                  vue.createTextVNode(" branch in the repository.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Variable replacement of "),
                  vue.createVNode("code", null, "$DEPLOY_API"),
                  vue.createTextVNode(" and "),
                  vue.createVNode("code", null, "$DEPLOY_CDN"),
                  vue.createTextVNode(" is performed on the following files as a way to coordinate configuration between the "),
                  vue.createVNode("code", null, "ui"),
                  vue.createTextVNode(" and "),
                  vue.createVNode("code", null, "api"),
                  vue.createTextVNode(" project.")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("code", null, "ui/vite.config.ts"),
                    vue.createTextVNode(" - Set backend .NET API URL for UI App to use")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("code", null, "ui/post.build.js"),
                    vue.createTextVNode(" - If exists, run from GitHub Action after "),
                    vue.createVNode("code", null, "npm run build")
                  ])
                ]),
                vue.createVNode("h3", null, "post.build.js"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The "),
                  vue.createVNode("code", null, "post.build.js"),
                  vue.createTextVNode(" script helps when also publishing "),
                  vue.createVNode("code", null, "/ui"),
                  vue.createTextVNode(" assets to CDN by first copying the generated "),
                  vue.createVNode("code", null, "index.html"),
                  vue.createTextVNode(" home page into "),
                  vue.createVNode("code", null, "404.html"),
                  vue.createTextVNode(" in order to enable full page reloads to use SPA client routing:")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", { class: "language-js" }, "import * as fs from \"fs\"\nimport * as path from \"path\"\n\n// Replaced in release.yml with GitHub Actions secrets\nconst DEPLOY_API = 'https://$DEPLOY_API'\nconst DEPLOY_CDN = 'https://$DEPLOY_CDN'\n\nconst DIST = '../api/Jamstacks/wwwroot'\n\n// 404.html SPA fallback (supported by GitHub Pages, Cloudflare & Netlify CDNs)\nfs.copyFileSync(\n    path.resolve(`${DIST}/index.html`),\n    path.resolve(`${DIST}/404.html`))\n\n// Define Virtual Host for GitHub Pages CDN\nfs.writeFileSync(`${DIST}/CNAME`, DEPLOY_CDN)\n\n// Define /api proxy routes (supported by Cloudflare or Netlify CDNs)  \nfs.writeFileSync(`${DIST}/_redirects`,\n    fs.readFileSync(`${DIST}/_redirects`, 'utf-8')\n        .replace(/{DEPLOY_API}/g, DEPLOY_API))\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Whilst the "),
                  vue.createVNode("code", null, "_redirects"),
                  vue.createTextVNode(" file is a convention supported by many "),
                  vue.createVNode("a", { href: "https://jamstack.wtf/#deployment" }, "popular Jamstack CDNs"),
                  vue.createTextVNode(" that sets up a new rule that proxies "),
                  vue.createVNode("code", null, "/api*"),
                  vue.createTextVNode(" requests to where the production .NET App is deployed to in order for API requests to not need CORS:")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "/api/*  {DEPLOY_API}/api/:splat  200\n")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("By default this template doesn’t use the "),
                  vue.createVNode("code", null, "/api"),
                  vue.createTextVNode(" proxy route & makes CORS API requests so it can be freely hosted on GitHub pages CDN.")
                ]),
                vue.createVNode("h2", null, "Pushing updates and rollbacks"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("By default, deployments of both the "),
                  vue.createVNode("code", null, "ui"),
                  vue.createTextVNode(" and "),
                  vue.createVNode("code", null, "api"),
                  vue.createTextVNode(" occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose. Your Vue UI is built and pushed to the repository GitHub Pages.")
                ]),
                vue.createVNode("p", null, "The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Additionally, the "),
                  vue.createVNode("code", null, "release.yml"),
                  vue.createTextVNode(" workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn’t create a new Docker build based on previous code state, only redeploys as existing Docker image.")
                ]),
                vue.createVNode("h2", null, "No CORS Hosting Options"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("The "),
                  vue.createVNode("code", null, "CorsFeature"),
                  vue.createTextVNode(" needs to be enabled when adopting our recommended deployment configuration of having static "),
                  vue.createVNode("code", null, "/wwwroot"),
                  vue.createTextVNode(" assets hosted from a CDN in order to make cross-domain requests to your .NET APIs.")
                ]),
                vue.createVNode("h3", null, "Using a CDN Proxy"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Should you want to, our recommended approach to avoid your App making CORS requests is to define an "),
                  vue.createVNode("code", null, "/api"),
                  vue.createTextVNode(" proxy route on your CDN to your "),
                  vue.createVNode("code", null, "$DEPLOY_API"),
                  vue.createTextVNode(" server.")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("To better support this use-case, this template includes populating the "),
                  vue.createVNode("code", null, "_redirects"),
                  vue.createTextVNode(" file used by popular CDNs like "),
                  vue.createVNode("a", { href: "https://developers.cloudflare.com/pages/platform/redirects" }, "Cloudflare proxy redirects"),
                  vue.createTextVNode(" and "),
                  vue.createVNode("a", { href: "https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service" }, "Netlify proxies"),
                  vue.createTextVNode(" to define redirect and proxy rules. For AWS CloudFront you would need to define a "),
                  vue.createVNode("a", { href: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html" }, "Behavior for a custom origin"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("h3", null, "No CDN"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Of course the easiest solution is to not need CORS in the first place by not deploying to a CDN and serving both "),
                  vue.createVNode("code", null, "/api"),
                  vue.createTextVNode(" and UI from your .NET App. But this would forgo all the performance & UX benefits that has made "),
                  vue.createVNode("a", { href: "https://jamstack.org" }, "Jamstack"),
                  vue.createTextVNode(" approach so popular.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/deploy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deploy = /* @__PURE__ */ main._export_sfc(_sfc_main, [["__file", "C:/Users/mark.greenway/Desktop/Repos/yyy_trash/Lisa/ui/src/pages/posts/deploy.md"]]);
exports.date = date;
exports.default = deploy;
exports.meta = meta;
exports.summary = summary;
exports.title = title;

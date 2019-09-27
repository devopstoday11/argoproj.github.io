webpackJsonp([0x9b9009127dec],{556:function(e,t){e.exports={pathContext:{docHtml:'<h1 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h1>\n<h2 id="what-is-argo-cd"><a href="#what-is-argo-cd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Is Argo CD?</h2>\n<p>Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.</p>\n<p><img src="/argo-cd/docs/assets/argocd-ui.gif" alt="Argo CD UI"></p>\n<h2 id="why-argo-cd"><a href="#why-argo-cd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Argo CD?</h2>\n<p>Application definitions, configurations, and environments should be declarative and version controlled.\nApplication deployment and lifecycle management should be automated, auditable, and easy to understand.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<h3 id="quick-start"><a href="#quick-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick Start</h3>\n<pre><code class="language-bash">kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n</code></pre>\n<p>Follow our <a href="getting_started.html">getting started guide</a>. Further <a href="docs/">documentation</a>\nis provided for additional features.</p>\n<h2 id="how-it-works"><a href="#how-it-works" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How it works</h2>\n<p>Argo CD follows the <strong>GitOps</strong> pattern of using Git repositories as the source of truth for defining\nthe desired application state. Kubernetes manifests can be specified in several ways:</p>\n<ul>\n<li><a href="https://kustomize.io">kustomize</a> applications</li>\n<li><a href="https://helm.sh">helm</a> charts</li>\n<li><a href="https://ksonnet.io">ksonnet</a> applications</li>\n<li><a href="https://jsonnet.org">jsonnet</a> files </li>\n<li>Plain directory of YAML/json manifests</li>\n<li>Any custom config management tool configured as a config management plugin</li>\n</ul>\n<p>Argo CD automates the deployment of the desired application states in the specified target environments.\nApplication deployments can track updates to branches, tags, or pinned to a specific version of\nmanifests at a Git commit. See <a href="user-guide/tracking_strategies.html">tracking strategies</a> for additional\ndetails about the different tracking strategies available.</p>\n<p>For a quick 10 minute overview of Argo CD, check out the demo presented to the Sig Apps community\nmeeting:\n<a href="https://youtu.be/aWDIQMbp1cc?t=1m4s"><img src="https://img.youtube.com/vi/aWDIQMbp1cc/0.jpg" alt="Alt text"></a></p>\n<h2 id="architecture"><a href="#architecture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Architecture</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 95.28936742934052%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADNklEQVQ4y41US28bVRT2j2TNApYIiQ0LFiyQKtQFrCqBWGaBKC1QkSYuUoppMXkQEhJM49gzuJ732zPXM/ZMxvP4OPfaHiZQBEc6uvcezfnO6zvTwUbqum6Uy9XVFSzLwjeP92HZjrBdRzmmhg15PIYkSUiSBGVZ3vLvtB9cqqoSp+M4ePvd9/DGW+/g/Tt3EUYMclLhpW5CIsDhcAhVVbFarRpALhtA3DJuz4/vfYLXXn8TH9z9CDFlo6WAZrvQVAV/TCYwTRPz+RxpmjZ+nQ1UA5Lf3CAIAoRhiIw+7P34EzzfFzbG2D8C85K3VTWAFf+grpCSfeoGGF9fw6DoW0fRAtvGiOw3FBDtshrZ9LDtlK8K6KYFz3Ub27rpNWVRg1F5vh+s7ZRV1RrkrR5qmobLy0uURSEmx0so6M5BOJgfV1CCEnpYYepT0FkFk6rnb8UvhU5J2bJaAx4cHGBnZ0dE4L3iyimTxDFNNyKAErN5iihOoQYF3IBhqhrwgggavSW3hOSUMMISnSzPcf/BQ3T397FcLgWY53nQdQOLRYLZLITNSppmjDiewwwLAgrx68UlXGoND/BpN8Fn3yVrQOY6iEh/JyKrioJXic0quB4P5IvyrDBHQJz04xVe6Dk+/JLhzn2Glx4Bur/0Eb84x8PHXezv7Qmi6roOWZaRZZngnxUVIvssXYgseGZnpycwdRVeXOJYynEi5yJw56rXxeS0j5PnuxgOjlCUNRRlitFoJCjCQTUaiOZnMGc31KsCipdB0iMozgIyvWW3wphOnZf8dHcPh70e+l99gUH/2StLjomgzhwwoxIO4/cabgxx8v4as5W4p3mzKZzdgiGo27vd4hcvdyKPYVsGNl8JO4tCGLrWvDsNMddcv0XUNmFjotBIkqEbpuBptbEvEgbPsTYZtQFbzk2Av/2BGGWXLxfNqklmgUdHCzw9j/HDYCVsHfyHNKAc0LdRpktsl3WsZ/j2MML35wxPfg7+Wr1/A9qCzbME7uAC4eEJLobXcCYSVJrq58+WOB6m+Lo/J8AIj46z/wcY0Iaws1Mse89xNhjAnVAv7RgPeiYOf/Ox27fQO/fRPXLwJyuinDkYTmlYAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Argo CD Architecture"\n        title=""\n        src="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png"\n        srcset="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-1a291.png 148w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-2bc4a.png 295w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png 590w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png 743w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Argo CD is implemented as a kubernetes controller which continuously monitors running applications\nand compares the current, live state against the desired target state (as specified in the Git repo).\nA deployed application whose live state deviates from the target state is considered <code>OutOfSync</code>.\nArgo CD reports &#x26; visualizes the differences, while providing facilities to automatically or\nmanually sync the live state back to the desired target state. Any modifications made to the desired\ntarget state in the Git repo can be automatically applied and reflected in the specified target\nenvironments.</p>\n<p>For additional details, see <a href="operator-manual/architecture.html">architecture overview</a>.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li>Automated deployment of applications to specified target environments</li>\n<li>Support for multiple config management/templating tools (Kustomize, Helm, Ksonnet, Jsonnet, plain-YAML)</li>\n<li>Ability to manage and deploy to multiple clusters</li>\n<li>SSO Integration (OIDC, OAuth2, LDAP, SAML 2.0, GitHub, GitLab, Microsoft, LinkedIn)</li>\n<li>Multi-tenancy and RBAC policies for authorization</li>\n<li>Rollback/Roll-anywhere to any application configuration committed in Git repository</li>\n<li>Health status analysis of application resources</li>\n<li>Automated configuration drift detection and visualization</li>\n<li>Automated or manual syncing of applications to its desired state</li>\n<li>Web UI which provides real-time view of application activity</li>\n<li>CLI for automation and CI integration</li>\n<li>Webhook integration (GitHub, BitBucket, GitLab)</li>\n<li>Access tokens for automation</li>\n<li>PreSync, Sync, PostSync hooks to support complex application rollouts (e.g.blue/green &#x26; canary upgrades)</li>\n<li>Audit trails for application events and API calls</li>\n<li>Prometheus metrics</li>\n<li>Parameter overrides for overriding ksonnet/helm parameters in Git</li>\n</ul>\n<h2 id="community-blogs-and-presentations"><a href="#community-blogs-and-presentations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Community Blogs And Presentations</h2>\n<ul>\n<li>GitOps with Argo CD: <a href="https://www.ibm.com/blogs/bluemix/2019/02/simplify-and-automate-deployments-using-gitops-with-ibm-multicloud-manager-3-1-2/">Simplify and Automate Deployments Using GitOps with IBM Multicloud Manager</a></li>\n<li>KubeCon talk: <a href="https://www.youtube.com/watch?v=OdzH82VpMwI&#x26;feature=youtu.be">CI/CD in Light Speed with K8s and Argo CD</a></li>\n<li>\n<p>KubeCon talk: <a href="https://www.youtube.com/watch?v=VXrGp5er1ZE&#x26;t=0s&#x26;index=135&#x26;list=PLj6h78yzYM2PZf9eA7bhWnIh_mK1vyOfU">Machine Learning as Code</a></p>\n<ul>\n<li>Among other things, describes how Kubeflow uses Argo CD to implement GitOPs for ML</li>\n</ul>\n</li>\n<li>SIG Apps demo: <a href="https://www.youtube.com/watch?v=aWDIQMbp1cc&#x26;feature=youtu.be&#x26;t=1m4s">Argo CD - GitOps Continuous Delivery for Kubernetes</a></li>\n</ul>\n<h2 id="development-status"><a href="#development-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development Status</h2>\n<p>Argo CD is actively developed and is being used in production to deploy SaaS services at Intuit</p>',docPath:"argo-cd/docs/index",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-index-html-5182925b229792ebe7e9.js.map
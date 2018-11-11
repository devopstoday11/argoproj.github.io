webpackJsonp([0x916f4695c618],{529:function(e,o){e.exports={pathContext:{docHtml:'<h1>Resource Hooks</h1>\n<h2>Overview</h2>\n<p>Hooks are ways to interject custom logic before, during, and after a Sync operation. Some use cases\nfor hooks are:</p>\n<ul>\n<li>Using a <code>PreSync</code> hook to perform a database schema migration before deploying a new version of the app.</li>\n<li>Using a <code>Sync</code> hook to orchestrate a complex deployment requiring more sophistication than the\nkubernetes rolling update strategy (e.g. a blue/green deployment).</li>\n<li>Using a <code>PostSync</code> hook to run integration and health checks after a deployment.</li>\n</ul>\n<h2>Usage</h2>\n<p>Hooks are simply kubernetes manifests annotated with the <code>argocd.argoproj.io/hook</code> annotation. To\nmake use of hooks, simply add the annotation to any resource:</p>\n<pre><code class="language-yaml">apiVersion: batch/v1\nkind: Job\nmetadata:\n  generateName: schema-migrate-\n  annotations:\n    argocd.argoproj.io/hook: PreSync\n</code></pre>\n<p>During a Sync operation, Argo CD will create the resource during the appropriate stage of the\ndeployment. Hooks can be any type of Kuberentes resource kind, but tend to be most useful as\n<a href="https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/">Kubernetes Jobs</a>\nor <a href="https://github.com/argoproj/argo">Argo Workflows</a>. Multiple hooks can be specified as a comma\nseparated list.</p>\n<h2>Available Hooks</h2>\n<p>The following hooks are defined:</p>\n<table>\n<thead>\n<tr>\n<th>Hook</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>PreSync</code></td>\n<td>Executes prior to the apply of the manifests.</td>\n</tr>\n<tr>\n<td><code>Sync</code></td>\n<td>Executes after all \n<code>PreSync</code>\n hooks completed and were successful. Occurs in conjuction with the apply of the manifests.</td>\n</tr>\n<tr>\n<td><code>Skip</code></td>\n<td>Indicates to Argo CD to skip the apply of the manifest. This is typically used in conjunction with a \n<code>Sync</code>\n hook which is presumably handling the deployment in an alternate way (e.g. blue-green deployment)</td>\n</tr>\n<tr>\n<td><code>PostSync</code></td>\n<td>Executes after all \n<code>Sync</code>\n hooks completed and were successful, a succcessful apply, and all resources in a \n<code>Healthy</code>\n state.</td>\n</tr>\n</tbody>\n</table>\n<h2>Hook Deletion Policies</h2>\n<p>Hooks can be deleted in an automatic fashion using the annotation: <code>argocd.argoproj.io/hook-delete-policy</code>.</p>\n<pre><code class="language-yaml">apiVersion: batch/v1\nkind: Job\nmetadata:\n  generateName: integration-test-\n  annotations:\n    argocd.argoproj.io/hook: PostSync\n    argocd.argoproj.io/hook-delete-policy: OnSuccess\n</code></pre>\n<p>The following policies define when the hook will be deleted.</p>\n<table>\n<thead>\n<tr>\n<th>Policy</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>OnSuccess</code></td>\n<td>The hook resource is deleted after the hook succeeded (e.g. Job/Workflow completed successfully).</td>\n</tr>\n<tr>\n<td><code>OnFailure</code></td>\n<td>The hook resource is deleted after the hook failed.</td>\n</tr>\n</tbody>\n</table>',docPath:"argo-cd/docs/resource_hooks",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-resource-hooks-html-aee1589dd45abe83500a.js.map
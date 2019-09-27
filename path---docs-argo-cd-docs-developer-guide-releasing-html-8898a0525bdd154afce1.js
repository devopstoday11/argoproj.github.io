webpackJsonp([97983591878712],{551:function(e,a){e.exports={pathContext:{docHtml:'<h1 id="releasing"><a href="#releasing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Releasing</h1>\n<p>Ensure the changelog is up to date. </p>\n<p>Export the branch name, e.g.:</p>\n<pre><code class="language-bash">BRANCH=release-1.0\n</code></pre>\n<p>Set the <code>VERSION</code> environment variable:</p>\n<pre><code class="language-bash"># release candidate\nVERSION=v1.0.0-rc1\n# GA release\nVERSION=v1.0.0\n</code></pre>\n<p>If not already created, create UI release branch:</p>\n<pre><code class="language-bash">cd argo-cd-ui\ngit checkout -b $BRANCH\n</code></pre>\n<p>Tag UI:</p>\n<pre><code class="language-bash">git tag $VERSION\ngit push upstream $BRANCH --tags\nIMAGE_NAMESPACE=argoproj IMAGE_TAG=$VERSION DOCKER_PUSH=true yarn docker\n</code></pre>\n<p>If not already created, create release branch:</p>\n<pre><code class="language-bash">cd argo-cd\ngit checkout -b $BRANCH\ngit push origin $BRANCH\n</code></pre>\n<p>Update <code>VERSION</code> and manifests with new version:</p>\n<pre><code class="language-bash">echo $VERSION > VERSION\nmake manifests IMAGE_TAG=$VERSION\ngit commit -am "Update manifests to $VERSION"\ngit push origin $BRANCH\n</code></pre>\n<p>Tag, build, and push release to Docker Hub</p>\n<pre><code class="language-bash">git tag $VERSION\nmake release IMAGE_NAMESPACE=argoproj IMAGE_TAG=$VERSION DOCKER_PUSH=true\ngit push origin $VERSION\n</code></pre>\n<p>Update Github releases with:</p>\n<ul>\n<li>Getting started (copy from previous release)</li>\n<li>Changelog</li>\n</ul>\n<h2 id="stable-release"><a href="#stable-release" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stable Release</h2>\n<p>Update Brew formula:</p>\n<pre><code class="language-bash">git clone https://github.com/argoproj/homebrew-tap\ncd homebrew-tap\n./update.sh ~/go/src/github.com/argoproj/argo-cd/dist/argocd-darwin-amd64\ngit commit -a -m "Update argocd to $VERSION"\ngit push\n</code></pre>\n<p>Deploy the <a href="site.html">site</a>.</p>\n<p>Update <code>stable</code> tag:</p>\n<pre><code>git tag stable --force &#x26;&#x26; git push origin stable --force\n</code></pre>\n<p>Create GitHub release from new tag and upload binaries (e.g. dist/argocd-darwin-amd64).</p>',docPath:"argo-cd/docs/developer-guide/releasing",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-developer-guide-releasing-html-8898a0525bdd154afce1.js.map
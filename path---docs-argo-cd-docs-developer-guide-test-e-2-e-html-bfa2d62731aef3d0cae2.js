webpackJsonp([0xc74b38081d4],{553:function(e,t){e.exports={pathContext:{docHtml:'<h1 id="e2e-tests"><a href="#e2e-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>E2E Tests</h1>\n<p>The directory contains E2E tests and test applications. The test assume that Argo CD services are installed into <code>argocd-e2e</code> namespace or cluster in current context. One throw-away\nnamespace <code>argocd-e2e***</code> is created prior to tests execute. The throw-away namespace is used as a target namespace for test applications.</p>\n<p>The <code>test/e2e/testdata</code> directory contains various Argo CD applications. Before test execution directory is copies into <code>/tmp/argocd-e2e***</code> temp directory and used in tests as a\nGit repository via file url: <code>file:///tmp/argocd-e2e***</code>.</p>\n<h2 id="running-tests-locally"><a href="#running-tests-locally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running Tests Locally</h2>\n<ol>\n<li>Start the e2e version <code>make start-e2e</code> </li>\n<li>Run the tests: <code>make test-e2e</code></li>\n</ol>\n<p>You can observe the tests by using the UI <a href="http://localhost:8080/applications">http://localhost:8080/applications</a>.</p>\n<h2 id="ci-set-up"><a href="#ci-set-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CI Set-up</h2>\n<p>The tests are executed by Argo Workflow defined at <code>.argo-ci/ci.yaml</code>. CI job The builds an Argo CD image, deploy argo cd components into throw-away kubernetes cluster provisioned\nusing k3s and run e2e tests against it.</p>',docPath:"argo-cd/docs/developer-guide/test-e2e",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-developer-guide-test-e-2-e-html-bfa2d62731aef3d0cae2.js.map
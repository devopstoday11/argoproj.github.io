webpackJsonp([0xdde718b1193],{630:function(e,n){e.exports={pathContext:{docHtml:'<h1 id="storagegrid"><a href="#storagegrid" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>StorageGrid</h1>\n<p>The gateway listens to bucket notifications from storage grid.</p>\n<h3 id="how-to-define-an-event-source-in-confimap"><a href="#how-to-define-an-event-source-in-confimap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to define an event source in confimap?</h3>\n<p>An entry in the gateway configmap corresponds to <a href="https://github.com/argoproj/argo-events/blob/a913dafbf000eb05401ef2c847b29152af82977f/gateways/community/slack/config.go#L38-L41">this</a>.</p>\n<p>Note: The gateway does not register the webhook endpoint on storage grid. You need to do it manually.\nThis is mainly because limitations of storage grid api.</p>\n<p>The gateway spec defined in <code>examples</code> has a <code>serviceSpec</code>. This service is used to expose the gateway server and make it reachable from StorageGrid.</p>\n<p><strong>How to get the URL for the service?</strong></p>\n<p>Depending upon the Kubernetes provider, you can create the Ingress or Route. </p>\n<h2 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h2>\n<p><strong>1. Install <a href="../../examples/gateways/storage-grid.yaml">Gateway</a></strong></p>\n<p>Make sure gateway pod and service is running</p>\n<p><strong>2. Install <a href="../../examples/event-sources/storage-grid.yaml">Event Source</a></strong></p>\n<p><strong>3. Install <a href="../../examples/sensors/storage-grid.yaml">Sensor</a></strong></p>\n<p>Make sure sensor pod is created.</p>\n<p><strong>4. Configure notifications</strong></p>\n<ul>\n<li>\n<p>Go to your tenant page on StorageGRID</p>\n</li>\n<li>\n<p>Create an endpoint with the following values, and click save</p>\n<pre><code>Display Name: S3 Notifications\nURI: &#x3C;route-url-you-created>\nURN: urn:mytext:sns:us-east::my_topic\nAccess Key: &#x3C;your-access-key>\nSecret Key: &#x3C;your-secret-key>\nCertificate Validation: &#x3C;Do not verify>\n</code></pre>\n</li>\n<li>\n<p>Go to the bucket for which you want to configure notifications.\nEnter the following XML string, and click save</p>\n<pre><code class="language-xml">&#x3C;NotificationConfiguration>\n    &#x3C;TopicConfiguration>\n        &#x3C;Id>Object-Event&#x3C;/Id>\n        &#x3C;Topic>urn:mytext:sns:us-east::my_topic&#x3C;/Topic>\n        &#x3C;Event>s3:ObjectCreated:*&#x3C;/Event>\n        &#x3C;Event>s3:ObjectRemoved:*&#x3C;/Event>\n    &#x3C;/TopicConfiguration>\n&#x3C;/NotificationConfiguration>\n</code></pre>\n</li>\n</ul>\n<p><strong>5. Trigger Workflow</strong></p>\n<p>Drop a file into the bucket for which you configured the notifications and watch Argo workflow being triggered.</p>',docPath:"argo-events/docs/gateways/storage-grid",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-docs-gateways-storage-grid-html-be022b07c4dfadc0a70b.js.map
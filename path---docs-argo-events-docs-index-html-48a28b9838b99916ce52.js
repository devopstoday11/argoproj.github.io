webpackJsonp([79912642027607],{564:function(e,n){e.exports={pathContext:{docHtml:'<h1>Argo Events Documentation</h1>\n<h2>Why Argo Events?</h2>\n<ul>\n<li>Containers. Designed from the ground-up as Kubernetes-native.</li>\n<li>Extremely lightweight. All gateways, with exception of calendar based gateway, are event-driven, meaning there is no polling involved.</li>\n<li>Configurable. Configure gateways at runtime</li>\n<li>Extensible. Write custom gateways for any business use case in the language of your choice</li>\n<li>Scalability &#x26; Resilient.</li>\n<li>Simple or Complex dependencies. Manage everything from simple, linear, real-time dependencies to complex, multi-source batch job dependencies.</li>\n</ul>\n<h2>Basics</h2>\n<p>Argo Events is an open source event-based dependency manager for Kubernetes. The core concept of the project are</p>\n<ul>\n<li>\n<p><code>gateways</code> which are implemented as a Kubernetes-native Custom Resource Definition that either produce the events internally or process the events that originate from outside the gateway</p>\n</li>\n<li>\n<p><code>sensors</code> which are implemented as a Kubernetes-native Custom Resource Definition that define a set of dependencies\n(inputs) and actions (outputs). The sensor\'s actions will only be triggered after it\'s dependencies have been resolved.</p>\n<ul>\n<li>Define gateway to support business-level logic for producing events.</li>\n<li>Define multiple dependencies from a variety of sources</li>\n<li>Trigger messages and Kubernetes object creation after successful dependency resolution</li>\n<li>Trigger escalation after errors, or dependency constraint failures</li>\n<li>Build and manage a distributed, cross-team, event-driven architecture</li>\n<li>Easily leverage Kubernetes native APIs to monitor dependencies</li>\n</ul>\n</li>\n</ul>\n<h2>Learn More</h2>\n<ul>\n<li><a href="quickstart.html">Quickstart</a></li>\n<li><a href="gateway-guide.html">Gateways</a></li>\n<li><a href="sensor-guide.html">Sensors</a></li>\n<li><a href="trigger-guide.html">Triggers</a></li>\n</ul>',docPath:"argo-events/docs/index",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-docs-index-html-48a28b9838b99916ce52.js.map
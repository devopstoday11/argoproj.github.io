webpackJsonp([0xa80b9c4ebba5],{535:function(e,t){e.exports={pathContext:{docHtml:'<h1>Argo CD Installation Manifests</h1>\n<p>Two sets of installation manifests are provided:</p>\n<ul>\n<li>\n<p><a href="install.yaml">install.yaml</a> - Standard Argo CD installation with cluster-admin access. Use this\nmanifest set if you plan to use Argo CD to deploy applications in the same cluster that Argo CD runs\nin (i.e. kubernetes.svc.default). Will still be able to deploy to external clusters with inputted\ncredentials.</p>\n</li>\n<li>\n<p><a href="namespace-install.yaml">namespace-install.yaml</a> - Installation of Argo CD which requires only\nnamespace level privileges (does not need cluster roles). Use this manifest set if you do not\nneed Argo CD to deploy applications in the same cluster that Argo CD runs in, and will rely solely\non inputted cluster credentials. An example of using this set of manifests is if you run several\nArgo CD instances for different teams, where each instance will bedeploying applications to\nexternal clusters. Will still be possible to deploy to the same cluster (kubernetes.svc.default)\nwith inputted credentials (i.e. <code>argocd cluster add &#x3C;CONTEXT> --in-cluster</code>).</p>\n</li>\n</ul>',docPath:"argo-cd/manifests/readme",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-manifests-a8e915839c29fb960fd6.js.map
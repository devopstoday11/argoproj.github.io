webpackJsonp([0x5dffe96b8328],{542:function(e,t){e.exports={pathContext:{docHtml:'<h1>WordPress</h1>\n<p><a href="https://wordpress.org/">WordPress</a> is one of the most versatile open source content management systems on the market. A publishing platform for building blogs and websites.</p>\n<h2>TL;DR;</h2>\n<pre><code class="language-console">$ helm install stable/wordpress\n</code></pre>\n<h2>Introduction</h2>\n<p>This chart bootstraps a <a href="https://github.com/bitnami/bitnami-docker-wordpress">WordPress</a> deployment on a <a href="http://kubernetes.io">Kubernetes</a> cluster using the <a href="https://helm.sh">Helm</a> package manager.</p>\n<p>It also packages the <a href="https://github.com/kubernetes/charts/tree/master/stable/mariadb">Bitnami MariaDB chart</a> which is required for bootstrapping a MariaDB deployment for the database requirements of the WordPress application.</p>\n<h2>Prerequisites</h2>\n<ul>\n<li>Kubernetes 1.4+ with Beta APIs enabled</li>\n<li>PV provisioner support in the underlying infrastructure</li>\n</ul>\n<h2>Installing the Chart</h2>\n<p>To install the chart with the release name <code>my-release</code>:</p>\n<pre><code class="language-console">$ helm install --name my-release stable/wordpress\n</code></pre>\n<p>The command deploys WordPress on the Kubernetes cluster in the default configuration. The <a href="#configuration">configuration</a> section lists the parameters that can be configured during installation.</p>\n<blockquote>\n<p><strong>Tip</strong>: List all releases using <code>helm list</code></p>\n</blockquote>\n<h2>Uninstalling the Chart</h2>\n<p>To uninstall/delete the <code>my-release</code> deployment:</p>\n<pre><code class="language-console">$ helm delete my-release\n</code></pre>\n<p>The command removes all the Kubernetes components associated with the chart and deletes the release.</p>\n<h2>Configuration</h2>\n<p>The following table lists the configurable parameters of the WordPress chart and their default values.</p>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>image.registry</code></td>\n<td>WordPress image registry</td>\n<td><code>docker.io</code></td>\n</tr>\n<tr>\n<td><code>image.repository</code></td>\n<td>WordPress image name</td>\n<td><code>bitnami/wordpress</code></td>\n</tr>\n<tr>\n<td><code>image.tag</code></td>\n<td>WordPress image tag</td>\n<td><code>{VERSION}</code></td>\n</tr>\n<tr>\n<td><code>image.pullPolicy</code></td>\n<td>Image pull policy</td>\n<td><code>Always</code>\n if \n<code>imageTag</code>\n is \n<code>latest</code>\n, else \n<code>IfNotPresent</code></td>\n</tr>\n<tr>\n<td><code>image.pullSecrets</code></td>\n<td>Specify image pull secrets</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>wordpressUsername</code></td>\n<td>User of the application</td>\n<td><code>user</code></td>\n</tr>\n<tr>\n<td><code>wordpressPassword</code></td>\n<td>Application password</td>\n<td><em>random 10 character long alphanumeric string</em></td>\n</tr>\n<tr>\n<td><code>wordpressEmail</code></td>\n<td>Admin email</td>\n<td><code>user@example.com</code></td>\n</tr>\n<tr>\n<td><code>wordpressFirstName</code></td>\n<td>First name</td>\n<td><code>FirstName</code></td>\n</tr>\n<tr>\n<td><code>wordpressLastName</code></td>\n<td>Last name</td>\n<td><code>LastName</code></td>\n</tr>\n<tr>\n<td><code>wordpressBlogName</code></td>\n<td>Blog name</td>\n<td><code>User\'s Blog!</code></td>\n</tr>\n<tr>\n<td><code>wordpressTablePrefix</code></td>\n<td>Table prefix</td>\n<td><code>wp_</code></td>\n</tr>\n<tr>\n<td><code>allowEmptyPassword</code></td>\n<td>Allow DB blank passwords</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>smtpHost</code></td>\n<td>SMTP host</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>smtpPort</code></td>\n<td>SMTP port</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>smtpUser</code></td>\n<td>SMTP user</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>smtpPassword</code></td>\n<td>SMTP password</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>smtpUsername</code></td>\n<td>User name for SMTP emails</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>smtpProtocol</code></td>\n<td>SMTP protocol \n[\n<code>tls</code>\n, \n<code>ssl</code>\n]</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>replicaCount</code></td>\n<td>Number of WordPress Pods to run</td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td><code>mariadb.enabled</code></td>\n<td>Deploy MariaDB container(s)</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>mariadb.rootUser.password</code></td>\n<td>MariaDB admin password</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>mariadb.db.name</code></td>\n<td>Database name to create</td>\n<td><code>bitnami_wordpress</code></td>\n</tr>\n<tr>\n<td><code>mariadb.db.user</code></td>\n<td>Database user to create</td>\n<td><code>bn_wordpress</code></td>\n</tr>\n<tr>\n<td><code>mariadb.db.password</code></td>\n<td>Password for the database</td>\n<td><em>random 10 character long alphanumeric string</em></td>\n</tr>\n<tr>\n<td><code>externalDatabase.host</code></td>\n<td>Host of the external database</td>\n<td><code>localhost</code></td>\n</tr>\n<tr>\n<td><code>externalDatabase.user</code></td>\n<td>Existing username in the external db</td>\n<td><code>bn_wordpress</code></td>\n</tr>\n<tr>\n<td><code>externalDatabase.password</code></td>\n<td>Password for the above username</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>externalDatabase.database</code></td>\n<td>Name of the existing database</td>\n<td><code>bitnami_wordpress</code></td>\n</tr>\n<tr>\n<td><code>externalDatabase.port</code></td>\n<td>Database port number</td>\n<td><code>3306</code></td>\n</tr>\n<tr>\n<td><code>serviceType</code></td>\n<td>Kubernetes Service type</td>\n<td><code>LoadBalancer</code></td>\n</tr>\n<tr>\n<td><code>serviceExternalTrafficPolicy</code></td>\n<td>Enable client source IP preservation</td>\n<td><code>Cluster</code></td>\n</tr>\n<tr>\n<td><code>nodePorts.http</code></td>\n<td>Kubernetes http node port</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>nodePorts.https</code></td>\n<td>Kubernetes https node port</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>healthcheckHttps</code></td>\n<td>Use https for liveliness and readiness</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>ingress.enabled</code></td>\n<td>Enable ingress controller resource</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts[0].name</code></td>\n<td>Hostname to your WordPress installation</td>\n<td><code>wordpress.local</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts[0].path</code></td>\n<td>Path within the url structure</td>\n<td><code>/</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts[0].tls</code></td>\n<td>Utilize TLS backend in ingress</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts[0].tlsSecret</code></td>\n<td>TLS Secret (certificates)</td>\n<td><code>wordpress.local-tls-secret</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts[0].annotations</code></td>\n<td>Annotations for this host\'s ingress record</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>ingress.secrets[0].name</code></td>\n<td>TLS Secret Name</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>ingress.secrets[0].certificate</code></td>\n<td>TLS Secret Certificate</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>ingress.secrets[0].key</code></td>\n<td>TLS Secret Key</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>persistence.enabled</code></td>\n<td>Enable persistence using PVC</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>persistence.existingClaim</code></td>\n<td>Enable persistence using an existing PVC</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>persistence.storageClass</code></td>\n<td>PVC Storage Class</td>\n<td><code>nil</code>\n (uses alpha storage class annotation)</td>\n</tr>\n<tr>\n<td><code>persistence.accessMode</code></td>\n<td>PVC Access Mode</td>\n<td><code>ReadWriteOnce</code></td>\n</tr>\n<tr>\n<td><code>persistence.size</code></td>\n<td>PVC Storage Request</td>\n<td><code>10Gi</code></td>\n</tr>\n<tr>\n<td><code>nodeSelector</code></td>\n<td>Node labels for pod assignment</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td><code>tolerations</code></td>\n<td>List of node taints to tolerate</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>affinity</code></td>\n<td>Map of node/pod affinities</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<p>The above parameters map to the env variables defined in <a href="http://github.com/bitnami/bitnami-docker-wordpress">bitnami/wordpress</a>. For more information please refer to the <a href="http://github.com/bitnami/bitnami-docker-wordpress">bitnami/wordpress</a> image documentation.</p>\n<p>Specify each parameter using the <code>--set key=value[,key=value]</code> argument to <code>helm install</code>. For example,</p>\n<pre><code class="language-console">$ helm install --name my-release \\\n  --set wordpressUsername=admin,wordpressPassword=password,mariadb.mariadbRootPassword=secretpassword \\\n    stable/wordpress\n</code></pre>\n<p>The above command sets the WordPress administrator account username and password to <code>admin</code> and <code>password</code> respectively. Additionally, it sets the MariaDB <code>root</code> user password to <code>secretpassword</code>.</p>\n<p>Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,</p>\n<pre><code class="language-console">$ helm install --name my-release -f values.yaml stable/wordpress\n</code></pre>\n<blockquote>\n<p><strong>Tip</strong>: You can use the default <a href="values.yaml">values.yaml</a></p>\n</blockquote>\n<h2>Production and horizontal scaling</h2>\n<p>The following repo contains the recommended production settings for wordpress capture in an alternative <a href="values-production.yaml">values file</a>. Please read carefully the comments in the values-production.yaml file to set up your environment appropriately.</p>\n<p>To horizontally scale this chart, first download the <a href="values-production.yaml">values-production.yaml</a> file to your local folder, then:</p>\n<pre><code class="language-console">$ helm install --name my-release -f ./values-production.yaml stable/wordpress\n</code></pre>\n<p>Note that <a href="values-production.yaml">values-production.yaml</a> includes a replicaCount of 3, so there will be 3 WordPress pods. As a result, to use the /admin portal and to ensure you can scale wordpress you need to provide a ReadWriteMany PVC, if you don\'t have a provisioner for this type of storage, we recommend that you install the nfs provisioner and map it to a RWO volume.</p>\n<pre><code class="language-console">$ helm install stable/nfs-server-provisioner --set persistence.enabled=true,persistence.size=10Gi\n$ helm install --name my-release -f values-production.yaml --set persistence.storageClass=nfs stable/wordpress\n</code></pre>\n<h2>Persistence</h2>\n<p>The <a href="https://github.com/bitnami/bitnami-docker-wordpress">Bitnami WordPress</a> image stores the WordPress data and configurations at the <code>/bitnami</code> path of the container.</p>\n<p>Persistent Volume Claims are used to keep the data across deployments. This is known to work in GCE, AWS, and minikube.\nSee the <a href="#configuration">Configuration</a> section to configure the PVC or to disable persistence.</p>\n<h2>Using an external database</h2>\n<p>Sometimes you may want to have Wordpress connect to an external database rather than installing one inside your cluster, e.g. to use a managed database service, or use run a single database server for all your applications. To do this, the chart allows you to specify credentials for an external database under the <a href="#configuration"><code>externalDatabase</code> parameter</a>. You should also disable the MariaDB installation with the <code>mariadb.enabled</code> option. For example:</p>\n<pre><code class="language-console">$ helm install stable/wordpress \\\n    --set mariadb.enabled=false,externalDatabase.host=myexternalhost,externalDatabase.user=myuser,externalDatabase.password=mypassword,externalDatabase.database=mydatabase,externalDatabase.port=3306\n</code></pre>\n<p>Note also if you disable MariaDB per above you MUST supply values for the <code>externalDatabase</code> connection.</p>\n<h2>Ingress</h2>\n<p>This chart provides support for ingress resources. If you have an\ningress controller installed on your cluster, such as <a href="https://kubeapps.com/charts/stable/nginx-ingress">nginx-ingress</a>\nor <a href="https://kubeapps.com/charts/stable/traefik">traefik</a> you can utilize\nthe ingress controller to serve your WordPress application.</p>\n<p>To enable ingress integration, please set <code>ingress.enabled</code> to <code>true</code></p>\n<h3>Hosts</h3>\n<p>Most likely you will only want to have one hostname that maps to this\nWordPress installation, however, it is possible to have more than one\nhost.  To facilitate this, the <code>ingress.hosts</code> object is an array.</p>\n<p>For each item, please indicate a <code>name</code>, <code>tls</code>, <code>tlsSecret</code>, and any\n<code>annotations</code> that you may want the ingress controller to know about.</p>\n<p>Indicating TLS will cause WordPress to generate HTTPS URLs, and\nWordPress will be connected to at port 443.  The actual secret that\n<code>tlsSecret</code> references do not have to be generated by this chart.\nHowever, please note that if TLS is enabled, the ingress record will not\nwork until this secret exists.</p>\n<p>For annotations, please see <a href="https://github.com/kubernetes/ingress-nginx/blob/master/docs/annotations.md">this document</a>.\nNot all annotations are supported by all ingress controllers, but this\ndocument does a good job of indicating which annotation is supported by\nmany popular ingress controllers.</p>\n<h3>TLS Secrets</h3>\n<p>This chart will facilitate the creation of TLS secrets for use with the\ningress controller, however, this is not required.  There are three\ncommon use cases:</p>\n<ul>\n<li>helm generates/manages certificate secrets</li>\n<li>user generates/manages certificates separately</li>\n<li>an additional tool (like <a href="https://kubeapps.com/charts/stable/kube-lego">kube-lego</a>)\nmanages the secrets for the application</li>\n</ul>\n<p>In the first two cases, one will need a certificate and a key.  We would\nexpect them to look like this:</p>\n<ul>\n<li>certificate files should look like (and there can be more than one\ncertificate if there is a certificate chain)</li>\n</ul>\n<pre><code>-----BEGIN CERTIFICATE-----\nMIID6TCCAtGgAwIBAgIJAIaCwivkeB5EMA0GCSqGSIb3DQEBCwUAMFYxCzAJBgNV\n...\njScrvkiBO65F46KioCL9h5tDvomdU1aqpI/CBzhvZn1c0ZTf87tGQR8NK7v7\n-----END CERTIFICATE-----\n</code></pre>\n<ul>\n<li>\n<p>keys should look like:</p>\n<pre><code>-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAvLYcyu8f3skuRyUgeeNpeDvYBCDcgq+LsWap6zbX5f8oLqp4\n...\nwrj2wDbCDCFmfqnSJ+dKI3vFLlEz44sAV8jX/kd4Y6ZTQhlLbYc=\n-----END RSA PRIVATE KEY-----\n</code></pre>\n</li>\n</ul>\n<p>If you are going to use Helm to manage the certificates, please copy\nthese values into the <code>certificate</code> and <code>key</code> values for a given\n<code>ingress.secrets</code> entry.</p>\n<p>If you are going are going to manage TLS secrets outside of Helm, please\nknow that you can create a TLS secret by doing the following:</p>\n<pre><code>kubectl create secret tls wordpress.local-tls --key /path/to/key.key --cert /path/to/cert.crt\n</code></pre>\n<p>Please see <a href="https://github.com/kubernetes/contrib/tree/master/ingress/controllers/nginx/examples/tls">this example</a>\nfor more information.</p>',docPath:"argo-cd/util/helm/testdata/wordpress/readme",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-util-helm-testdata-wordpress-933e41ecfc2c0ae73de4.js.map
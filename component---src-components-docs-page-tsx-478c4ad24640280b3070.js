webpackJsonp([0xa8f2768c5862],{520:function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var c=/\+/g;e=e.split(t);var s=1e3;o&&"number"==typeof o.maxKeys&&(s=o.maxKeys);var i=e.length;s>0&&i>s&&(i=s);for(var u=0;u<i;++u){var p,l,f,d,m=e[u].replace(c,"%20"),v=m.indexOf(r);v>=0?(p=m.substr(0,v),l=m.substr(v+1)):(p=m,l=""),f=decodeURIComponent(p),d=decodeURIComponent(l),n(a,f)?Array.isArray(a[f])?a[f].push(d):a[f]=[a[f],d]:a[f]=d}return a}},521:function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var a=encodeURIComponent(n(o))+r;return Array.isArray(e[o])?e[o].map(function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[o]))}).join(t):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(e)):""}},522:function(e,t,n){"use strict";t.decode=t.parse=n(520),t.encode=t.stringify=n(521)},208:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n(76),c=n(80),s=n(131),i=n(132),u=n(522);t.default=function(e){var t=c.services.docs.projInfo(e.pathContext.proj),n=e.location.search||"";n.startsWith("?")&&(n=n.substring(1));var p=u.parse(n).search;return o.createElement(i.Main,null,o.createElement(a.Helmet,null,o.createElement("title",null,t.title," | ",e.pathContext.proj),o.createElement("meta",{name:"description",content:t.description})),o.createElement(s.Docs,r({searchText:p},e.pathContext)))}}});
//# sourceMappingURL=component---src-components-docs-page-tsx-478c4ad24640280b3070.js.map
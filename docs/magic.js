"use strict";function c(a){return q(a)||d(a)||n()}function d(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return q(a)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function q(a){if(Array.isArray(a))return a}function r(a){"@babel/helpers - typeof";return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}var s=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,r=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,r))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==r[A]&&o(c,A,n[A],r[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===r(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),t=s.h,h=s.app,u=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===r(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return t(a,{},b);return t(a,b,d)}},v=u("a"),a=u("b"),b=u("button"),w=u("circle"),x=u("code"),y=u("div"),z=u("footer"),A=u("g"),g=u("h1"),B=u("h2"),C=u("h3"),D=u("h4"),E=u("h5"),F=u("header"),G=u("i"),i=u("img"),H=u("input"),I=u("label"),J=u("li"),K=u("link"),L=u("main"),M=u("meta"),N=u("nav"),O=u("p"),p=u("path"),P=u("pre"),Q=u("script"),R=u("span"),S=u("svg"),T=u("title"),U=u("ul"),V=u("view"),W={description:"the wise build their house on a rock. hosting without hassle.",gdpr:{allowed:[],show:!1},menu:[{text:"about",to:"/"}],pageClass:{},pages:{"/":{title:"@grundstein"},"/canary/":{title:"@grundstein - warrant canary"},"/docs/api/":{title:"@webboot - api docs"},"/getting-started/":{title:"@grundstein - getting started"},"/privacy/":{title:"@grundstein - privacy policy"},"/support/":{title:"@grundstein - support"}},root:"/",theme:"dark",title:"@grundstein",url:"/"},X={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Y=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[C(b?ha({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return Z(k({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},Z=function(a){return y([D([a.day,"-",a.month,"-",a.year," - ",ha({to:a.name},a.title)]),O(a.description)])},$=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),y([B(c?ha({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return Y(k({},a,{month:e,days:f,link:b}))})])},_=function(){return[y({class:"Boot"},[S({viewBox:"0 0 500 500"},[w({cy:"150",cx:"250",r:"150",fill:"#ffc107"}),p({d:"M344 189L250 27l-19 32-75 130z",fill:"#d8d8d8"}),p({d:"M342 195H157c-6-1-9-7-6-12l92-160c3-4 10-4 14 0l92 160c3 5 0 12-7 12zm-172-16h160L250 42z",fill:"#212121"}),p({d:"M288 135s-19-26-40-26c-23 0-39 26-39 26s16 25 39 25c21 0 40-25 40-25z",fill:"#ffc107"}),p({d:"M256 135c2 4-1 10-8 10-6 0-9-6-7-10-2-6 1-11 7-11 7 0 10 5 8 11z",fill:"#212121"}),p({d:"M247 165c-25 0-44-27-44-28-2-3-2-7 0-9 0-1 19-27 44-27 26 0 45 26 46 27 2 2 2 6 0 9-1 1-20 28-46 28zm-28-32c5 6 17 17 28 17 13 0 25-11 30-17-6-7-18-17-30-17-11 0-23 11-28 17z",fill:"#212121"}),p({d:"M368 242H132L11 497l480-4z",fill:"#d8d8d8"}),p({d:"M108 411H56l-36 73 88 1z",fill:"#ffc107"}),p({d:"M121 223C1 488 41 403 1 489c-2 7 1 14 7 14h485c5 0 9-9 7-14L378 223H121zm13 20h35v39h-54zm52 0h125v39H186zm142 0h39l17 39h-56zm-220 59h133v38H89zm148 0h137l18 38H256zM80 358l89 1v38H62zm106 1h125v38H186zm142 0h93l17 38H328zm119 56l32 68H21l32-66h47v67c1 14 14 9 14 0v-67h127v48c1 13 15 10 15 0v-48h134v48c2 13 16 10 16 0v-48z",fill:"#212121"})])])]},aa=function(){return y({class:"Booting"},[_(),g([R("@grund"),"stein"]),O("hosting without hassle")])},ba=function(){return[z({class:"Footer"},[y({class:"Container"},[y({class:"Menus"},[y({class:"Child Info"},[B("@webboot"),O("trust on every step."),O("created by the @webboot dao."),ha({to:"/privacy/",text:"privacy notice"})]),y({class:"Child"},[B("our projects"),U([J(ha({to:"https://webboot.org"},"webboot")),J(ha({to:"https://twitter.com/webbootorg"},"magic")),J(ha({to:"https://keybase.io/webboot"},"grundstein"))])]),y({class:"Child"},[B("social links"),U([J(ha({to:"https://github.com/grundstein"},"github"))])])]),y({class:"Credits"},["made with a few bits of ",ha({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])]},ca=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,u=void 0===t?"None":t;if(!f)return y({class:"Gdpr"},S({class:"ShowHide",onclick:[pa.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[A([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),w({cx:"192",cy:"128",r:"32"}),w({cx:"128",cy:"256",r:"32"}),w({cx:"288",cy:"384",r:"32"}),w({cx:"272",cy:"272",r:"16"}),w({cx:"400",cy:"336",r:"16"}),w({cx:"176",cy:"368",r:"16"})])]));var v=!!e.length;return y({class:"Gdpr"},[y({class:"Container"},[h&&C(h),j&&O(j),v&&[U(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return J({class:"Cookie"},[H({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[pa.gdpr.toggleAllow,{name:b}]}),(d||e)&&I({for:b},[d&&D(d),e&&O(e)])])}))],v?[E(n),H({class:"allow all",onclick:pa.gdpr.allow,type:"button",value:q}),H({class:"allow",onclick:pa.gdpr.close,type:"button",value:s}),H({class:"allow none",onclick:pa.gdpr.deny,type:"button",value:u})]:H({onclick:pa.gdpr.close,value:l,type:"button"})])])},da=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.menu,c=e(a,["menu"]);return F({class:"Header"},y([ha({to:c.root,class:"Logo"},[_(),y({class:"branding"},[R("@web"),"boot"])]),b&&ia({state:c,items:b})]))},ea=function(a){return y({id:"hero",class:"Hero"},[aa(),O("the wise build their house on a rock."),ia({items:[{to:"/#about",text:"about"},{to:"/getting-started/",text:"getting started"},{to:"/#support",text:"support"}],state:a})])},fa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),i(a)},ga=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return b({class:"LightSwitch",onclick:pa.changeTheme},S({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ha=function(a,b){var c=a.to,d=a.action,f=void 0===d?pa.go:d,g=e(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=e(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,oa.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),v(l,[i,b])},ia=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),N({className:c},U(e.map(function(a){return ja(k({},a,{url:g,root:i,collapse:void 0===d||d}))})))},ja=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=e(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;i&&p&&("-"===o||"#"===o)&&(n=i+n);var q=n.startsWith(g);g&&p&&!q&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var r=[],s=f.startsWith(l.to)||!j;return s&&d.length&&(r=U(d.map(function(a){return ja(k({parentTo:l.to,url:f,root:g,collapse:j},a))}))),J(m,[l.to?ka(l,b):R(l,b),r])},ka=function(a,b){return ha(a,b)},la=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return L(e,y({class:{Wrapper:!0}},[na({state:d,page:c}),b]))},ma=function(a,c){"string"==typeof a?a={content:a}:c&&(a=k({content:c},a));var d=a,f=d.content,g=d.lines;return y({class:{Pre:!0,lines:!(void 0!==g)||g}},[y({class:"menu"},[b({onclick:[pa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),P(oa.pre.format(f))])},na=function(a){var b=a.page,c=a.state;return[da(c),y({class:"Page",id:"page"},b),ba(c)]},oa={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=oa.db.init(),g=oa.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=oa.db.init(),f=void 0;return d&&e[d]&&(f=oa.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=oa.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(c){if("string"!=typeof c)return c;var e=c.split(/\b/);return c=e.map(function(c,f){if(""!==c){var g="";return"state"===c?g="state":"actions"===c?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(c)?g="keyword":b.includes(c)?g="builtin":d.includes(c)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(c=R({class:g},c)),c}}),c},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return ha({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return l(a);var b=a.split("://"),c=m(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:ha({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var b=a.replace(/"/g,"'"),d=b.split("'"),f=c(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),R({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),R({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return x({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},pa={changeTheme:function changeTheme(a){return k({},a,{pageClass:k({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[pa.gdpr.show,{show:!1}]}]]},close:function close(a){return[k({},a,{gdpr:k({},a.gdpr,{show:!1})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[pa.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:[]})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[pa.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?k({},a,{gdpr:k({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),k({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return window.location.hash=h,a;var i=window,j=i.scrollY,l=a.titles[f];if(l&&(document.title=a.title=l),window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=m(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return k({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),k({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},qa={"/":function _(a){return[ea(a),y({id:"about"},[B("early bird <3"),O(["hello, you are here a bit early."," the first time we will be publishing information about @grundstein is the 22. 03. 2020."," feel free to poke around,"," but as long as this notice is here,"," most documentation on this page will not be accurate (yet)."]),g("grundstein?"),O(["@grundstein is our approach to hosting infrastructure."," it is purpose built for the ",ha({to:"https://magic.github.io"},"@magic")," static webapp and api generator,"," but should be usable with most other web development frameworks."]),C("our goals:"),O("reproducible and verifiable builds, down to the kernel."),O("minimal dependencies on all layers."),O("free and open source toolchain, \"not invented here\" is a good thing."),O("language agnosticity, with a focus on nodejs and rust support.")])]},"/404/":function _(){return y("404 - not found")},"/canary/":function canary(){return y([C("canary notice:"),D("we will not and have never shared any data about our users with anyone."),S({class:"Bird",viewBox:"0 0 839 839",height:"10em",width:"10em"},[p({d:"M431 536a550 550 0 00392 159c8 0 13-9 8-16-51-69-260-339-454-453 20-12 36-31 46-52l46-18c7-2 9-11 3-16l-41-40C408 40 357 0 307 0h-1C123 49 91 268 180 392c12 67 53 182 184 234 24 9 46 17 68 23v106H0v84h840v-84H508c2-37 40-87 39-87-142-98-223-206-224-347 10 82 58 164 108 215zM347 71a25 25 0 010 50c-14-1-24-12-25-25 1-14 14-25 25-25z"})]),O([" if this page disappears, it means that the rule above has been broken by force."]),O("that's it")])},"/docs/api/":function docsApi(){return[y([g("api docs"),O("coming soon...")])]},"/getting-started/":function gettingStarted(){return y([B("getting started"),O(["we are still working on the tools described below,"," our semi-public alpha starts on 22. 3. 2020."]),C(["cli",G(" - release: 22. 3. 2020")]),O("first, install grundstein."),ma("npm install -g grundstein"),O("then, go to the directory with your public page and run"),ma("grundstein"),O("grundstein will guide you through the process."),C(["browser extensions",G(" - release: 22. 2. 2020")])])},"/privacy/":function privacy(){return y([B("privacy policy"),O("@grundstein does not call home."),O(["we will never, under no circumstances,"," share information about our users with ",a("any")," third parties."]),C("canary:"),O(["as long as ",ha({to:"/canary/",text:"our canary link works"})," we have not shared any data about our users with anyone."]),O("thats it.")])},"/support/":function support(){return[y({id:"overview"},[g("supporting @grundstein"),O("this page shows multiple ways to support @grundstein.")]),y({id:"contribute"},[B("contribute code"),O(["you are a person who knows some node and you want to get into it? ","head over to our ",ha({to:"https://github.com/grundstein/"},"github repositories")," and read through the issues to find something to get started with."])]),y({id:"suggestions"},[B("share ideas"),O(["have an idea/suggestion how to make grundstein better?",ha({to:"https://github.com/grundstein/root/issues",text:"file an issue"})])]),y({id:"donate"},[B("donate"),O(["do you have that cryptocurrency wallet you want to empty"," because you always worry about losing the private key anyways?"]),O("that wad of cash in your mattress is uncomfortable when sleeping?"),O("TODO: add wallet addresses.")])]}};h({init:[k({},W,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[oa.db.get,{key:"magic-gdpr",action:pa.gdpr.show}]]],subscriptions:function subscriptions(){return[[X.listenPopState,pa.pop]]},view:function(a){var b=qa[a.url]?a.url:"/404/",c=qa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={"/":"@grundstein","/canary/":"@grundstein - warrant canary","/docs/api/":"@webboot - api docs","/getting-started/":"@grundstein - getting started","/privacy/":"@grundstein - privacy policy","/support/":"@grundstein - support"},la({page:c,state:a},[ga(a),ca(a)])},node:document.getElementById("Magic")});
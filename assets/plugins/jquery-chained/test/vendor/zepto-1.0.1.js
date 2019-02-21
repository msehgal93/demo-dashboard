!function(o){String.prototype.trim===o&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===o&&(Array.prototype.reduce=function(t){if(null==this)throw new TypeError;var e,n=Object(this),i=n.length>>>0,r=0;if("function"!=typeof t)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(2<=arguments.length)e=arguments[1];else for(;;){if(r in n){e=n[r++];break}if(++r>=i)throw new TypeError}for(;r<i;)r in n&&(e=t.call(o,e,n[r],r,n)),r++;return e})}();var Zepto=function(){var a,r,s,i,o,n,c=[],u=c.slice,h=c.filter,l=window.document,f={},e={},p=l.defaultView.getComputedStyle,d={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},v=/^\s*<(\w+|!)[^>]*>/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,y=["val","css","html","text","data","width","height","offset"],t=l.createElement("table"),b=l.createElement("tr"),x={tr:l.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:b,th:b,"*":l.createElement("div")},w=/complete|loaded|interactive/,E=/^\.([\w-]+)$/,T=/^#([\w-]*)$/,j=/^[\w-]+$/,S={},N=S.toString,k={},C=l.createElement("div");function O(t){return null==t?String(t):S[N.call(t)]||"object"}function P(t){return"function"==O(t)}function A(t){return null!=t&&t==t.window}function z(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function $(t){return"object"==O(t)}function _(t){return $(t)&&!A(t)&&t.__proto__==Object.prototype}function M(t){return t instanceof Array}function q(t){return"number"==typeof t.length}function Z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function D(t,e){return"number"!=typeof e||d[Z(t)]?e:e+"px"}function L(t){return"children"in t?u.call(t.children):s.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function F(t,e){return e===a?s(t):s(t).filter(e)}function B(t,e,n,i){return P(e)?e.call(t,n,i):e}function I(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function H(t,e){var n=t.className,i=n&&n.baseVal!==a;if(e===a)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function U(e){var t;try{return e?"true"==e||"false"!=e&&("null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?s.parseJSON(e):e:t):e}catch(t){return e}}return k.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=C).appendChild(t),i=~k.qsa(r,e).indexOf(t),o&&C.removeChild(t),i},o=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},n=function(n){return h.call(n,function(t,e){return n.indexOf(t)==e})},k.fragment=function(t,e,n){t.replace&&(t=t.replace(m,"<$1></$2>")),e===a&&(e=v.test(t)&&RegExp.$1),e in x||(e="*");var i,r,o=x[e];return o.innerHTML=""+t,r=s.each(u.call(o.childNodes),function(){o.removeChild(this)}),_(n)&&(i=s(r),s.each(n,function(t,e){-1<y.indexOf(t)?i[t](e):i.attr(t,e)})),r},k.Z=function(t,e){return(t=t||[]).__proto__=s.fn,t.selector=e||"",t},k.isZ=function(t){return t instanceof k.Z},k.init=function(t,e){if(t){if(P(t))return s(l).ready(t);if(k.isZ(t))return t;var n;if(M(t))i=t,n=h.call(i,function(t){return null!=t});else if($(t))n=[_(t)?s.extend({},t):t],t=null;else if(v.test(t))n=k.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==a)return s(e).find(t);n=k.qsa(l,t)}return k.Z(n,t)}return k.Z();var i},(s=function(t,e){return k.init(t,e)}).extend=function(e){var n,t=u.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(r in n)i&&(_(n[r])||M(n[r]))?(_(n[r])&&!_(e[r])&&(e[r]={}),M(n[r])&&!M(e[r])&&(e[r]=[]),t(e[r],n[r],i)):n[r]!==a&&(e[r]=n[r])}(e,t,n)}),e},k.qsa=function(t,e){var n;return z(t)&&T.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:u.call(E.test(e)?t.getElementsByClassName(RegExp.$1):j.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},s.contains=function(t,e){return t!==e&&t.contains(e)},s.type=O,s.isFunction=P,s.isWindow=A,s.isArray=M,s.isPlainObject=_,s.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},s.inArray=function(t,e,n){return c.indexOf.call(e,t,n)},s.camelCase=o,s.trim=function(t){return t.trim()},s.uuid=0,s.support={},s.expr={},s.map=function(t,e){var n,i,r,o,a=[];if(q(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&a.push(n);else for(r in t)null!=(n=e(t[r],r))&&a.push(n);return 0<(o=a).length?s.fn.concat.apply([],o):o},s.each=function(t,e){var n,i;if(q(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},s.grep=function(t,e){return h.call(t,e)},window.JSON&&(s.parseJSON=JSON.parse),s.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),s.fn={forEach:c.forEach,reduce:c.reduce,push:c.push,sort:c.sort,indexOf:c.indexOf,concat:c.concat,map:function(n){return s(s.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return s(u.apply(this,arguments))},ready:function(t){return w.test(l.readyState)?t(s):l.addEventListener("DOMContentLoaded",function(){t(s)},!1),this},get:function(t){return t===a?u.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return c.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return P(e)?this.not(this.not(e)):s(h.call(this,function(t){return k.matches(t,e)}))},add:function(t,e){return s(n(this.concat(s(t,e))))},is:function(t){return 0<this.length&&k.matches(this[0],t)},not:function(e){var n=[];if(P(e)&&e.call!==a)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):q(e)&&P(e.item)?u.call(e):s(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return s(n)},has:function(t){return this.filter(function(){return $(t)?s.contains(this,t):s(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!$(t)?t:s(t)},last:function(){var t=this[this.length-1];return t&&!$(t)?t:s(t)},find:function(t){var n=this;return"object"==typeof t?s(t).filter(function(){var e=this;return c.some.call(n,function(t){return s.contains(t,e)})}):1==this.length?s(k.qsa(this[0],t)):this.map(function(){return k.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=s(t));n&&!(i?0<=i.indexOf(n):k.matches(n,t));)n=n!==e&&!z(n)&&n.parentNode;return s(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=s.map(n,function(t){if((t=t.parentNode)&&!z(t)&&e.indexOf(t)<0)return e.push(t),t});return F(e,t)},parent:function(t){return F(n(this.pluck("parentNode")),t)},children:function(t){return F(this.map(function(){return L(this)}),t)},contents:function(){return this.map(function(){return u.call(this.childNodes)})},siblings:function(t){return F(this.map(function(t,e){return h.call(L(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return s.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=null),"none"==p(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,f[t]||(e=l.createElement(t),l.body.appendChild(e),n=p(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=P(e);if(this[0]&&!n)var i=s(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){s(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){var e;for(s(this[0]).before(t=s(t));(e=t.children()).length;)t=e.first();s(t).append(this)}return this},wrapInner:function(r){var o=P(r);return this.each(function(t){var e=s(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){s(this).replaceWith(s(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=s(this);(e===a?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return s(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return s(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return n===a?0<this.length?this[0].innerHTML:null:this.each(function(t){var e=this.innerHTML;s(this).empty().append(B(this,n,t,e))})},text:function(t){return t===a?0<this.length?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(e,n){var t;return"string"==typeof e&&n===a?0==this.length||1!==this[0].nodeType?a:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:this.each(function(t){if(1===this.nodeType)if($(e))for(r in e)I(this,r,e[r]);else I(this,e,B(this,n,t,this.getAttribute(e)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&I(this,t)})},prop:function(e,n){return n===a?this[0]&&this[0][e]:this.each(function(t){this[e]=B(this,n,t,this[e])})},data:function(t,e){var n=this.attr("data-"+Z(t),e);return null!==n?U(n):a},val:function(e){return e===a?this[0]&&(this[0].multiple?s(this[0]).find("option").filter(function(t){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=B(this,e,t,this.value)})},offset:function(o){if(o)return this.each(function(t){var e=s(this),n=B(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2&&"string"==typeof t)return this[0]&&(this[0].style[o(t)]||p(this[0],"").getPropertyValue(t));var n="";if("string"==O(t))e||0===e?n=Z(t)+":"+D(t,e):this.each(function(){this.style.removeProperty(Z(t))});else for(r in t)t[r]||0===t[r]?n+=Z(r)+":"+D(r,t[r])+";":this.each(function(){this.style.removeProperty(Z(r))});return this.each(function(){this.style.cssText+=";"+n})},index:function(t){return t?this.indexOf(s(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return c.some.call(this,function(t){return this.test(H(t))},R(t))},addClass:function(n){return this.each(function(t){i=[];var e=H(this);B(this,n,t,e).split(/\s+/g).forEach(function(t){s(this).hasClass(t)||i.push(t)},this),i.length&&H(this,e+(e?" ":"")+i.join(" "))})},removeClass:function(e){return this.each(function(t){if(e===a)return H(this,"");i=H(this),B(this,e,t,i).split(/\s+/g).forEach(function(t){i=i.replace(R(t)," ")}),H(this,i.trim())})},toggleClass:function(n,i){return this.each(function(t){var e=s(this);B(this,n,t,H(this)).split(/\s+/g).forEach(function(t){(i===a?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})})},scrollTop:function(){if(this.length)return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(s(t).css("margin-top"))||0,n.left-=parseFloat(s(t).css("margin-left"))||0,i.top+=parseFloat(s(e[0]).css("border-top-width"))||0,i.left+=parseFloat(s(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||l.body;t&&!g.test(t.nodeName)&&"static"==s(t).css("position");)t=t.offsetParent;return t})}},s.fn.detach=s.fn.remove,["width","height"].forEach(function(r){s.fn[r]=function(e){var t,n=this[0],i=r.replace(/./,function(t){return t[0].toUpperCase()});return e===a?A(n)?n["inner"+i]:z(n)?n.documentElement["offset"+i]:(t=this.offset())&&t[r]:this.each(function(t){(n=s(this)).css(r,B(this,e,t,n[r]()))})}}),["after","prepend","before","append"].forEach(function(e,o){var a=o%2;s.fn[e]=function(){var e,n,i=s.map(arguments,function(t){return"object"==(e=O(t))||"array"==e||null==t?t:k.fragment(t)}),r=1<this.length;return i.length<1?this:this.each(function(t,e){n=a?e:e.parentNode,e=0==o?e.nextSibling:1==o?e.firstChild:2==o?e:null,i.forEach(function(t){if(r)t=t.cloneNode(!0);else if(!n)return s(t).remove();!function t(e,n){for(var i in n(e),e.childNodes)t(e.childNodes[i],n)}(n.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},s.fn[a?e+"To":"insert"+(o?"Before":"After")]=function(t){return s(t)[e](this),this}}),k.Z.prototype=s.fn,k.uniq=n,k.deserializeValue=U,s.zepto=k,s}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=s&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),h=t.match(/Silk\/([\d._]+)/),l=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),d=t.match(/PlayBook/),v=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),c&&(e.touchpad=!0),l&&(e.blackberry=!0,e.version=l[2]),f&&(e.bb10=!0,e.version=f[2]),p&&(e.rimtabletos=!0,e.version=p[2]),d&&(n.playbook=!0),u&&(e.kindle=!0,e.version=u[1]),h&&(n.silk=!0,n.version=h[1]),!h&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),v&&(n.chrome=!0,n.version=v[1]),m&&(n.firefox=!0,n.version=m[1]),e.tablet=!!(o||d||r&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(r||a||s||l||f||v&&t.match(/Android/)||v&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(u){u.zepto.qsa;var h={},e=1,o={},l={mouseenter:"mouseover",mouseleave:"mouseout"};function f(t){return t._zid||(t._zid=e++)}function a(t,e,n,i){if((e=p(e)).ns)var r=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(h[f(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||f(t.fn)===f(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t,e,n){"string"!=u.type(t)?u.each(t,n):t.split(/\s/).forEach(function(t){n(t,e)})}function v(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function m(t){return l[t]||t}function s(r,t,e,o,a,s){var n=f(r),c=h[n]||(h[n]=[]);d(t,e,function(t,e){var n=p(t);n.fn=e,n.sel=o,n.e in l&&(e=function(t){var e=t.relatedTarget;if(!e||e!==this&&!u.contains(this,e))return n.fn.apply(this,arguments)}),n.del=a&&a(e,t);var i=n.del||e;n.proxy=function(t){var e=i.apply(r,[t].concat(t.data));return!1===e&&(t.preventDefault(),t.stopPropagation()),e},n.i=c.length,c.push(n),r.addEventListener(m(n.e),n.proxy,v(n,s))})}function r(n,t,e,i,r){var o=f(n);d(t||"",e,function(t,e){a(n,t,e,i).forEach(function(t){delete h[o][t.i],n.removeEventListener(m(t.e),t.proxy,v(t,r))})})}o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",u.event={add:s,remove:r},u.proxy=function(t,e){if(u.isFunction(t)){var n=function(){return t.apply(e,arguments)};return n._zid=f(t),n}if("string"==typeof e)return u.proxy(t[e],t);throw new TypeError("expected function")},u.fn.bind=function(t,e){return this.each(function(){s(this,t,e)})},u.fn.unbind=function(t,e){return this.each(function(){r(this,t,e)})},u.fn.one=function(e,n){return this.each(function(t,i){s(this,e,n,null,function(e,n){return function(){var t=e.apply(i,arguments);return r(i,n,e),t}})})};var c=function(){return!0},g=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function x(n){var t,i={originalEvent:n};for(t in n)y.test(t)||void 0===n[t]||(i[t]=n[t]);return u.each(b,function(t,e){i[t]=function(){return this[e]=c,n[t].apply(n,arguments)},i[e]=g}),i}u.fn.delegate=function(o,e,n){return this.each(function(t,r){s(r,e,n,o,function(i){return function(t){var e,n=u(t.target).closest(o,r).get(0);if(n)return e=u.extend(x(t),{currentTarget:n,liveFired:r}),i.apply(n,[e].concat([].slice.call(arguments,1)))}})})},u.fn.undelegate=function(t,e,n){return this.each(function(){r(this,e,n,t)})},u.fn.live=function(t,e){return u(document.body).delegate(this.selector,t,e),this},u.fn.die=function(t,e){return u(document.body).undelegate(this.selector,t,e),this},u.fn.on=function(t,e,n){return!e||u.isFunction(e)?this.bind(t,e||n):this.delegate(e,t,n)},u.fn.off=function(t,e,n){return!e||u.isFunction(e)?this.unbind(t,e||n):this.undelegate(e,t,n)},u.fn.trigger=function(t,e){return("string"==typeof t||u.isPlainObject(t))&&(t=u.Event(t)),function(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}(t),t.data=e,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},u.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=x("string"==typeof n?u.Event(n):n)).data=i,r.target=e,u.each(a(e,n.type||n),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){u.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){u.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),u.Event=function(t,e){"string"!=typeof t&&(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(ch){var fh,gh,dh=0,eh=window.document,hh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,ih=/^(?:text|application)\/javascript/i,jh=/^(?:text|application)\/xml/i,kh="application/json",lh="text/html",mh=/^\s*$/;function oh(t,e,n,i){if(t.global)return r=e||eh,o=n,a=i,s=ch.Event(o),ch(r).trigger(s,a),!s.defaultPrevented;var r,o,a,s}function rh(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===oh(e,n,"ajaxBeforeSend",[t,e]))return!1;oh(e,n,"ajaxSend",[t,e])}function sh(t,e,n){var i=n.context,r="success";n.success.call(i,t,r,e),oh(n,i,"ajaxSuccess",[e,n,t]),uh(r,e,n)}function th(t,e,n,i){var r=i.context;i.error.call(r,n,e,t),oh(i,r,"ajaxError",[n,i,t]),uh(e,n,i)}function uh(t,e,n){var i,r=n.context;n.complete.call(r,e,t),oh(n,r,"ajaxComplete",[e,n]),(i=n).global&&!--ch.active&&oh(i,null,"ajaxStop")}function vh(){}function xh(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function zh(t,e,n,i){var r=!ch.isFunction(e);return{url:t,data:r?e:void 0,success:r?ch.isFunction(n)?n:void 0:e,dataType:r&&i||n}}ch.active=0,ch.ajaxJSONP=function(e){if(!("type"in e))return ch.ajax(e);var t,n="jsonp"+ ++dh,i=eh.createElement("script"),r=function(){clearTimeout(t),ch(i).remove(),delete window[n]},o=function(t){r(),t&&"timeout"!=t||(window[n]=vh),th(null,t||"abort",a,e)},a={abort:o};return!1===rh(a,e)?(o("abort"),!1):(window[n]=function(t){r(),sh(t,a,e)},i.onerror=function(){o("error")},i.src=e.url.replace(/=\?/,"="+n),ch("head").append(i),0<e.timeout&&(t=setTimeout(function(){o("timeout")},e.timeout)),a)},ch.ajaxSettings={type:"GET",beforeSend:vh,success:vh,error:vh,complete:vh,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:kh,xml:"application/xml, text/xml",html:lh,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},ch.ajax=function(oi){var Kh,ni,pi=ch.extend({},oi||{});for(fh in ch.ajaxSettings)void 0===pi[fh]&&(pi[fh]=ch.ajaxSettings[fh]);(Kh=pi).global&&0==ch.active++&&oh(Kh,null,"ajaxStart"),pi.crossDomain||(pi.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(pi.url)&&RegExp.$2!=window.location.host),pi.url||(pi.url=window.location.toString()),(ni=pi).processData&&ni.data&&"string"!=ch.type(ni.data)&&(ni.data=ch.param(ni.data,ni.traditional)),!ni.data||ni.type&&"GET"!=ni.type.toUpperCase()||(ni.url=xh(ni.url,ni.data)),!1===pi.cache&&(pi.url=xh(pi.url,"_="+Date.now()));var qi=pi.dataType,ri=/=\?/.test(pi.url);if("jsonp"==qi||ri)return ri||(pi.url=xh(pi.url,"callback=?")),ch.ajaxJSONP(pi);var wi,si=pi.accepts[qi],ti={},ui=/^([\w-]+:)\/\//.test(pi.url)?RegExp.$1:window.location.protocol,vi=pi.xhr();pi.crossDomain||(ti["X-Requested-With"]="XMLHttpRequest"),si&&(-1<(ti.Accept=si).indexOf(",")&&(si=si.split(",",2)[0]),vi.overrideMimeType&&vi.overrideMimeType(si)),(pi.contentType||!1!==pi.contentType&&pi.data&&"GET"!=pi.type.toUpperCase())&&(ti["Content-Type"]=pi.contentType||"application/x-www-form-urlencoded"),pi.headers=ch.extend(ti,pi.headers||{}),vi.onreadystatechange=function(){if(4==vi.readyState){vi.onreadystatechange=vh,clearTimeout(wi);var yi,zi=!1;if(200<=vi.status&&vi.status<300||304==vi.status||0==vi.status&&"file:"==ui){qi=qi||((ki=vi.getResponseHeader("content-type"))&&(ki=ki.split(";",2)[0]),ki&&(ki==lh?"html":ki==kh?"json":ih.test(ki)?"script":jh.test(ki)&&"xml")||"text"),yi=vi.responseText;try{"script"==qi?eval(yi):"xml"==qi?yi=vi.responseXML:"json"==qi&&(yi=mh.test(yi)?null:ch.parseJSON(yi))}catch(t){zi=t}zi?th(zi,"parsererror",vi,pi):sh(yi,vi,pi)}else th(null,vi.status?"error":"abort",vi,pi)}var ki};var xi=!("async"in pi)||pi.async;for(gh in vi.open(pi.type,pi.url,xi),pi.headers)vi.setRequestHeader(gh,pi.headers[gh]);return!1===rh(vi,pi)?(vi.abort(),!1):(0<pi.timeout&&(wi=setTimeout(function(){vi.onreadystatechange=vh,vi.abort(),th(null,"timeout",vi,pi)},pi.timeout)),vi.send(pi.data?pi.data:null),vi)},ch.get=function(t,e,n,i){return ch.ajax(zh.apply(null,arguments))},ch.post=function(t,e,n,i){var r=zh.apply(null,arguments);return r.type="POST",ch.ajax(r)},ch.getJSON=function(t,e,n){var i=zh.apply(null,arguments);return i.dataType="json",ch.ajax(i)},ch.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),a=zh(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],i=o[1]),a.success=function(t){r.html(i?ch("<div>").html(t.replace(hh,"")).find(i):t),s&&s.apply(r,arguments)},ch.ajax(a),this};var Ah=encodeURIComponent;ch.param=function(t,e){var n=[];return n.add=function(t,e){this.push(Ah(t)+"="+Ah(e))},function n(i,t,r,o){var a,s=ch.isArray(t);ch.each(t,function(t,e){a=ch.type(e),o&&(t=r?o:o+"["+(s?"":t)+"]"),!o&&s?i.add(e.name,e.value):"array"==a||!r&&"object"==a?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(i){i.fn.serializeArray=function(){var e,n=[];return i(Array.prototype.slice.call(this.get(0).elements)).each(function(){var t=(e=i(this)).attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=t&&"reset"!=t&&"button"!=t&&("radio"!=t&&"checkbox"!=t||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},i.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},i.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var e=i.Event("submit");this.eq(0).trigger(e),e.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(l,f){var n,p,d,v,m,g,y,b,i="",r=window.document.createElement("div"),x=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};function E(t){return t.toLowerCase()}function t(t){return n?n+t:E(t)}l.each({Webkit:"webkit",Moz:"",O:"o",ms:"MS"},function(t,e){if(r.style[t+"TransitionProperty"]!==f)return i="-"+E(t)+"-",n=e,!1}),p=i+"transform",w[d=i+"transition-property"]=w[v=i+"transition-duration"]=w[m=i+"transition-timing-function"]=w[g=i+"animation-name"]=w[y=i+"animation-duration"]=w[b=i+"animation-timing-function"]="",l.fx={off:n===f&&r.style.transitionProperty===f,speeds:{_default:400,fast:200,slow:600},cssPrefix:i,transitionEnd:t("TransitionEnd"),animationEnd:t("AnimationEnd")},l.fn.animate=function(t,e,n,i){return l.isPlainObject(e)&&(n=e.easing,i=e.complete,e=e.duration),e&&(e=("number"==typeof e?e:l.fx.speeds[e]||l.fx.speeds._default)/1e3),this.anim(t,e,n,i)},l.fn.anim=function(t,e,n,i){var r,o,a,s={},c="",u=this,h=l.fx.transitionEnd;if(e===f&&(e=.4),l.fx.off&&(e=0),"string"==typeof t)s[g]=t,s[y]=e+"s",s[b]=n||"linear",h=l.fx.animationEnd;else{for(r in o=[],t)x.test(r)?c+=r+"("+t[r]+") ":(s[r]=t[r],o.push(E(r.replace(/([a-z])([A-Z])/,"$1-$2"))));c&&(s[p]=c,o.push(p)),0<e&&"object"==typeof t&&(s[d]=o.join(", "),s[v]=e+"s",s[m]=n||"linear")}return a=function(t){if(void 0!==t){if(t.target!==t.currentTarget)return;l(t.target).unbind(h,a)}l(this).css(w),i&&i.call(this)},0<e&&this.bind(h,a),this.size()&&this.get(0).clientLeft,this.css(s),e<=0&&setTimeout(function(){u.each(function(){a.call(this)})},0),this},r=null}(Zepto);
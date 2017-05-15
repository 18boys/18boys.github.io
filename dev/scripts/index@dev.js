
;(function(__context){
    var module = {
        id : "50a4556b0089cfa1cb61e88ea23bbcce" ,
        filename : "zepto.min.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

    })( module.exports , module , __context );
    __context.____MODULES[ "50a4556b0089cfa1cb61e88ea23bbcce" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "624b017aec859a48d3c98140b61779f3" ,
        filename : "fastclick.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    (function () {
    'use strict';

    /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

    /*jslint browser:true, node:true*/
    /*global define, Event, Node*/


    /**
     * Instantiate fast-clicking listeners on the specified layer.
     *
     * @constructor
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    function FastClick(layer, options) {
        var oldOnClick;

        options = options || {};

        /**
         * Whether a click is currently being tracked.
         *
         * @type boolean
         */
        this.trackingClick = false;


        /**
         * Timestamp for when click tracking started.
         *
         * @type number
         */
        this.trackingClickStart = 0;


        /**
         * The element being tracked for a click.
         *
         * @type EventTarget
         */
        this.targetElement = null;


        /**
         * X-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartX = 0;


        /**
         * Y-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartY = 0;


        /**
         * ID of the last touch, retrieved from Touch.identifier.
         *
         * @type number
         */
        this.lastTouchIdentifier = 0;


        /**
         * Touchmove boundary, beyond which a click will be cancelled.
         *
         * @type number
         */
        this.touchBoundary = options.touchBoundary || 10;


        /**
         * The FastClick layer.
         *
         * @type Element
         */
        this.layer = layer;

        /**
         * The minimum time between tap(touchstart and touchend) events
         *
         * @type number
         */
        this.tapDelay = options.tapDelay || 200;

        /**
         * The maximum time for a tap
         *
         * @type number
         */
        this.tapTimeout = options.tapTimeout || 700;

        if (FastClick.notNeeded(layer)) {
            return;
        }

        // Some old versions of Android don't have Function.prototype.bind
        function bind(method, context) {
            return function() { return method.apply(context, arguments); };
        }


        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }

        // Set up event handlers as required
        if (deviceIsAndroid) {
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener('mouseup', this.onMouse, true);
        }

        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener('touchstart', this.onTouchStart, false);
        layer.addEventListener('touchmove', this.onTouchMove, false);
        layer.addEventListener('touchend', this.onTouchEnd, false);
        layer.addEventListener('touchcancel', this.onTouchCancel, false);

        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
        // layer when they are cancelled.
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function(type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };

            layer.addEventListener = function(type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }

        // If a handler is already declared in the element's onclick attribute, it will be fired before
        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
        // adding it as listener.
        if (typeof layer.onclick === 'function') {

            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
            // - the old one won't work if passed to addEventListener directly.
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function(event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }

    /**
    * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
    *
    * @type boolean
    */
    var deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0;

    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


    /**
     * iOS 6.0-7.* requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

    /**
     * BlackBerry requires exceptions.
     *
     * @type boolean
     */
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

    /**
     * Determine whether a given element requires a native click.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element needs a native click
     */
    FastClick.prototype.needsClick = function(target) {
        switch (target.nodeName.toLowerCase()) {

        // Don't send a synthetic click to disabled inputs (issue #62)
        case 'button':
        case 'select':
        case 'textarea':
            if (target.disabled) {
                return true;
            }

            break;
        case 'input':

            // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
            if ((deviceIsIOS && target.type === 'file') || target.disabled) {
                return true;
            }

            break;
        case 'label':
        case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
        case 'video':
            return true;
        }

        return (/\bneedsclick\b/).test(target.className);
    };


    /**
     * Determine whether a given element requires a call to focus to simulate click into element.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
     */
    FastClick.prototype.needsFocus = function(target) {
        switch (target.nodeName.toLowerCase()) {
        case 'textarea':
            return true;
        case 'select':
            return !deviceIsAndroid;
        case 'input':
            switch (target.type) {
            case 'button':
            case 'checkbox':
            case 'file':
            case 'image':
            case 'radio':
            case 'submit':
                return false;
            }

            // No point in attempting to focus disabled inputs
            return !target.disabled && !target.readOnly;
        default:
            return (/\bneedsfocus\b/).test(target.className);
        }
    };


    /**
     * Send a click event to the specified element.
     *
     * @param {EventTarget|Element} targetElement
     * @param {Event} event
     */
    FastClick.prototype.sendClick = function(targetElement, event) {
        var clickEvent, touch;

        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }

        touch = event.changedTouches[0];

        // Synthesise a click event, with an extra attribute so it can be tracked
        clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };

    FastClick.prototype.determineEventType = function(targetElement) {

        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }

        return 'click';
    };


    /**
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.focus = function(targetElement) {
        var length;

        // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };


    /**
     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
     *
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.updateScrollParent = function(targetElement) {
        var scrollParent, parentElement;

        scrollParent = targetElement.fastClickScrollParent;

        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
        // target element was moved to another parent.
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }

                parentElement = parentElement.parentElement;
            } while (parentElement);
        }

        // Always update the scroll top tracker if possible.
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };


    /**
     * @param {EventTarget} targetElement
     * @returns {Element|EventTarget}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }

        return eventTarget;
    };


    /**
     * On touch start, record the position and scroll offset.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchStart = function(event) {
        var targetElement, touch, selection;

        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
        if (event.targetTouches.length > 1) {
            return true;
        }

        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];

        if (deviceIsIOS) {

            // Only trusted events will deselect text on iOS (issue #49)
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }

            if (!deviceIsIOS4) {

                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
                // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
                // random integers, it's safe to to continue if the identifier is 0 here.
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }

                this.lastTouchIdentifier = touch.identifier;

                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                // 1) the user does a fling scroll on the scrollable layer
                // 2) the user stops the fling scroll with another tap
                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                this.updateScrollParent(targetElement);
            }
        }

        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            event.preventDefault();
        }

        return true;
    };


    /**
     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.touchHasMoved = function(event) {
        var touch = event.changedTouches[0], boundary = this.touchBoundary;

        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }

        return false;
    };


    /**
     * Update the last position.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchMove = function(event) {
        if (!this.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }

        return true;
    };


    /**
     * Attempt to find the labelled control for the given label element.
     *
     * @param {EventTarget|HTMLLabelElement} labelElement
     * @returns {Element|null}
     */
    FastClick.prototype.findControl = function(labelElement) {

        // Fast path for newer browsers supporting the HTML5 control attribute
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }

        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }

        // If no for attribute exists, attempt to retrieve the first labellable descendant element
        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };


    /**
     * On touch end, determine whether to send a click event at once.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchEnd = function(event) {
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

        if (!this.trackingClick) {
            return true;
        }

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }

        if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true;
        }

        // Reset to prevent wrong click cancel on input (issue #156).
        this.cancelNextClick = false;

        this.lastClickTime = event.timeStamp;

        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;

        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];

            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }

        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }

                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {

            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
            if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
                this.targetElement = null;
                return false;
            }

            this.focus(targetElement);
            this.sendClick(targetElement, event);

            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
            if (!deviceIsIOS || targetTagName !== 'select') {
                this.targetElement = null;
                event.preventDefault();
            }

            return false;
        }

        if (deviceIsIOS && !deviceIsIOS4) {

            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }

        // Prevent the actual click from going though - unless the target node is marked as requiring
        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }

        return false;
    };


    /**
     * On touch cancel, stop tracking the click.
     *
     * @returns {void}
     */
    FastClick.prototype.onTouchCancel = function() {
        this.trackingClick = false;
        this.targetElement = null;
    };


    /**
     * Determine mouse events which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onMouse = function(event) {

        // If a target element was never set (because a touch event was never fired) allow the event
        if (!this.targetElement) {
            return true;
        }

        if (event.forwardedTouchEvent) {
            return true;
        }

        // Programmatically generated events targeting a specific element should be permitted
        if (!event.cancelable) {
            return true;
        }

        // Derive and check the target element to see whether the mouse event needs to be permitted;
        // unless explicitly enabled, prevent non-touch click events from triggering actions,
        // to prevent ghost/doubleclicks.
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

            // Prevent any user-added listeners declared on FastClick element from being fired.
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {

                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                event.propagationStopped = true;
            }

            // Cancel the event
            event.stopPropagation();
            event.preventDefault();

            return false;
        }

        // If the mouse event is permitted, return true for the action to go through.
        return true;
    };


    /**
     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
     * an actual click which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onClick = function(event) {
        var permitted;

        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }

        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }

        permitted = this.onMouse(event);

        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
        if (!permitted) {
            this.targetElement = null;
        }

        // If clicks are permitted, return true for the action to go through.
        return permitted;
    };


    /**
     * Remove all FastClick's event listeners.
     *
     * @returns {void}
     */
    FastClick.prototype.destroy = function() {
        var layer = this.layer;

        if (deviceIsAndroid) {
            layer.removeEventListener('mouseover', this.onMouse, true);
            layer.removeEventListener('mousedown', this.onMouse, true);
            layer.removeEventListener('mouseup', this.onMouse, true);
        }

        layer.removeEventListener('click', this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };


    /**
     * Check whether FastClick is needed.
     *
     * @param {Element} layer The layer to listen on
     */
    FastClick.notNeeded = function(layer) {
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;
        var firefoxVersion;

        // Devices that don't support touch don't need FastClick
        if (typeof window.ontouchstart === 'undefined') {
            return true;
        }

        // Chrome version - zero for other browsers
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (chromeVersion) {

            if (deviceIsAndroid) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // Chrome 32 and above with width=device-width or less don't need FastClick
                    if (chromeVersion > 31 && document.documentElement.scrollWidth < window.outerWidth) {
                        return true;
                    }
                }

            // Chrome desktop doesn't need FastClick (issue #15)
            } else {
                return true;
            }
        }

        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

            // BlackBerry 10.3+ does not require Fastclick library.
            // https://github.com/ftlabs/fastclick/issues/251
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // user-scalable=no eliminates click delay.
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // width=device-width (or less than device-width) eliminates click delay.
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }

        // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        // Firefox version - zero for other browsers
        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (firefoxVersion >= 27) {
            // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

            metaViewport = document.querySelector('meta[name=viewport]');
            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true;
            }
        }

        // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
        // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
        if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        return false;
    };


    /**
     * Factory method for creating a FastClick object
     *
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    FastClick.attach = function(layer, options) {
        return new FastClick(layer, options);
    };


    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function() {
            return FastClick;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
}());

    })( module.exports , module , __context );
    __context.____MODULES[ "624b017aec859a48d3c98140b61779f3" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "e2e40f092ac4e4181baa48448c012a75" ,
        filename : "fileList.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    module.exports = [
    {"path": "30.png", "type": "img"},
    {"path": "exam-answer-default-status.jpg", "type": "img"},
    {"path": "exam-answer-success-status.jpg", "type": "img"},
    {"path": "exam-answer.jpg", "type": "img"},
    {"path": "exam-blood-1.png", "type": "img"},
    {"path": "exam-blood-2.png", "type": "img"},
    {"path": "exam-bottom-bg.jpg", "type": "img"},
    {"path": "exam-btn.jpg", "type": "img"},
    {"path": "exam-city.png", "type": "img"},
    {"path": "exam-fail-person.png", "type": "img"},
    {"path": "exam-music-on.png", "type": "img"},
    {"path": "exam-music.png", "type": "img"},
    {"path": "exam-next.png", "type": "img"},
    {"path": "exam-people.png", "type": "img"},
    {"path": "exam-success-person.png", "type": "img"},
    {"path": "exam-text.png", "type": "img"},
    {"path": "exam-top-bg-1.png", "type": "img"},
    {"path": "exam-top-bg-2.png", "type": "img"},
    {"path": "exam-top-bg-3.png", "type": "img"},
    {"path": "exam-top-bg-4.png", "type": "img"},
    {"path": "load-bg.jpg", "type": "img"},
    {"path": "load-person.png", "type": "img"},
    {"path": "load-process.png", "type": "img"},
    {"path": "selection_background.png", "type": "img"},
    {"path": "start-select-4.png", "type": "img"},
    {"path": "start-select-6.png", "type": "img"},
    {"path": "start-select-bg.jpg", "type": "img"},
    {"path": "start-select-logo.png", "type": "img"},
    {"path": "start-select-word.png", "type": "img"},
    {"path": "start_back.jpg", "type": "img"},
    {"path": "start_book1.png", "type": "img"},
    {"path": "start_book2.png", "type": "img"},
    {"path": "start_book3.png", "type": "img"},
    {"path": "start_person.png", "type": "img"},
    {"path": "start_word.png", "type": "img"}
];

    })( module.exports , module , __context );
    __context.____MODULES[ "e2e40f092ac4e4181baa48448c012a75" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "6ecb60068526f6a95f7bf217f4345ee2" ,
        filename : "load.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /**
 * 选择四六级选项页面
 */

__context.____MODULES['50a4556b0089cfa1cb61e88ea23bbcce'];
var fileList =__context.____MODULES['e2e40f092ac4e4181baa48448c012a75'];

var $load_page = $('.load');
var $load_blood = $load_page.find('.blood');
var $load_person = $load_page.find('.person');
var blood_left = parseFloat($load_blood.css('left'));
var blood_width = parseFloat($load_blood.css('width'));


var PreLoading = function(options) {

    // 图片路径
    this.imgPath = '/img';
    // 题目语音路径
    this.voicePath = '/voice';
    // 页面imglist集合
    this.fileList = fileList;
    // 使用配置参数
    this.options = options;
    this.makeLoadPage();
};

PreLoading.prototype = {

    fileCount: 0,
    i: 0,
    makeLoadPage: function() {
        var _this = this,
            len = _this.fileList.length,
            fileAry = [];
        _this.loadInterval = setInterval(function() {
            if (_this.i < len) {
                if (_this.fileList[_this.i]['type'] == 'img') {
                    fileAry[_this.i] = new Image();
                    fileAry[_this.i].onload = _this.loadPage(_this);
                    fileAry[_this.i].src = _this.imgPath + '/' + _this.fileList[_this.i]['path'];
                } else if (_this.fileList[_this.i]['type'] == 'voice') {
                    fileAry[_this.i] = new Audio();
                    fileAry[_this.i].onloadedmetadata = _this.loadPage(_this);
                    fileAry[_this.i].src = _this.voicePath + '/' + _this.fileList[_this.i]['path'];
                }
                _this.i++;
            } else {
                clearInterval(_this.loadInterval);
            }
        }, 50);
    },
    loadPage: function(_this) {
        var percent,
            len = _this.fileList.length;
        _this.fileCount++;
        percent = Math.floor(100 * parseInt(_this.fileCount) / parseInt(len));
        _this.options.loading && _this.options.loading(percent);
        _this.fileCount == len && setTimeout(function() {
            _this.options.complete && _this.options.complete();
            clearInterval(_this.loadInterval);
        }, 600);
    }
};

function init(cb) {
    $load_page.addClass('show');
    setTimeout(function() {
        new PreLoading({
            loading: function(percent) {
                percent = Math.min(percent, 95);
                var left = blood_left + blood_width * percent / 100;
                $('.loading-current').width(percent + '%');
                $load_person.css('left', left + 'px');
                $('#percent').html(percent);
            },
            complete: function() {
                $load_page.addClass('hide').removeClass('show');
                cb && cb();
            }
        });
    }, 100);
}

module.exports = {
    init: init
};


    })( module.exports , module , __context );
    __context.____MODULES[ "6ecb60068526f6a95f7bf217f4345ee2" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "030a279f3e5346fbb128262167f930ce" ,
        filename : "start-select.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var $start_select = $('.start-select');
var $start_select_word = $start_select.find('.word');
var $start_button_4 = $start_select.find('.button-4-bg');
var $start_button_6 = $start_select.find('.button-6-bg');

function init(cb) {
    $start_select.removeClass('hide');
    $start_select_word.removeClass('hide').addClass('animation-word-in');
    
    setTimeout(function() {
        $start_button_4.removeClass('hide').addClass('animation-button-in');
        $start_button_6.removeClass('hide').addClass('animation-button-in');
        _initEvent(cb);
    }, 4000);
}

function _initEvent(cb) {
    $(document).on('click', '.start-select .js-button', function() {
        $start_select.addClass('hide');
        cb && cb();
    });
}

module.exports = init;

    })( module.exports , module , __context );
    __context.____MODULES[ "030a279f3e5346fbb128262167f930ce" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "f42f6db5e3be3a9414fa3afa66bc4f86" ,
        filename : "start.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    function init(cb) {

    var $start_page = $('.start');
    var $start_select = $('.start-select');
    var $start_word = $start_page.find('.word');
    var $start_book1 = $start_page.find('.book1');
    var $start_book2 = $start_page.find('.book2');
    var $start_book3 = $start_page.find('.book3');
    var $start_person = $start_page.find('.person');
    $start_page.removeClass('hide');
    $start_word.removeClass('hide').addClass('animation-elastic');
    $start_book1.addClass('animation-rotate-out');

    setTimeout(function() {
        $start_word.removeClass('animation-elastic').addClass('elastic-out-down');
        setTimeout(function() {
            $start_word.addClass('hide');
        }, 400);
    }, 1300);

    setTimeout(function() {
        $start_book2.addClass('animation-rotate-out');
        setTimeout(function() {
            $start_book3.addClass('animation-rotate-out-reverse');
            setTimeout(function() {
                $start_book1.addClass('hide');
                $start_person.addClass('animation-rotate-out-person');
                setTimeout(function() {
                    $start_book2.addClass('hide');
                    setTimeout(function() {
                        $start_book3.addClass('hide');
                        $start_person.addClass('hide');
                        $start_page.addClass('animation-rotate-out-person');
                        $start_select.removeClass('hide');
                        setTimeout(function() {
                            $start_page.addClass('hide');
                            cb && cb();
                        }, 1000);
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 600);
}

module.exports = init;

    })( module.exports , module , __context );
    __context.____MODULES[ "f42f6db5e3be3a9414fa3afa66bc4f86" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "0f6b8ac42acdcab93ab3b4c482af3a39" ,
        filename : "hogan.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /*!
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  };

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error('No compiler available.');
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : '';
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {}
    PartialTemplate.prototype = instance;
    function Substitutions() {}
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);



(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString();
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  };

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return '{ ' + items.join(',') + ' }';
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + '}');
    }
    return 'partials: {' + partials.join(',') + '}, subs: ' + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return '{code: function (c,p,i) { ' + Hogan.wrapMain(codeObj.code) + ' },' + stringifyPartials(codeObj) +  '}';
  };

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  };

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  };

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  };

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  };

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = '<' + (context.prefix || '');
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + ' ' + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  };

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  };

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  };

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  };

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);

    })( module.exports , module , __context );
    __context.____MODULES[ "0f6b8ac42acdcab93ab3b4c482af3a39" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "e2f073b75b481084a559aa9888a6250c" ,
        filename : "utils.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /**
 * 帮助类
 * Created by lishuai on 2017/5/12.
 */


/**
 * 随机获取给定list中指定数量的对象
 * @param list 源list
 * @param target 目标数量
 */

function getRandomList(list, target){
    if(list.length<target){
        return list;
    }
    var result = [];
    var size = list.length;

    for (var i = target; i > 0; i--, size--) {
        var index = Math.floor((Math.random()) * size);
        result.push(list.splice(index, 1)[0]);
    }
    return result;
}

module.exports={
    getRandomList : getRandomList 
};

    })( module.exports , module , __context );
    __context.____MODULES[ "e2f073b75b481084a559aa9888a6250c" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "f408ddb58aac012f7a8911684c51f1dd" ,
        filename : "exam.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["exam"] = "<div class=\"question font1\">\n    {{question}}\n    {{#questionSuffix}}\n    <span>({{questionSuffix}})</span>\n    {{/questionSuffix}}\n</div>\n<ul class=\"answer\">\n{{#answer}}\n    <li class=\"item\" data-flag=\"{{flag}}\" data-music=\"{{musix}}\">{{text}}</li>\n{{/answer}}\n</ul>";
if (typeof module !== "undefined") module.exports = window.QTMPL["exam"];

    })( module.exports , module , __context );
    __context.____MODULES[ "f408ddb58aac012f7a8911684c51f1dd" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "19e16b670fa165cf5a1e9289f86c0019" ,
        filename : "exam.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    __context.____MODULES['50a4556b0089cfa1cb61e88ea23bbcce'];
var hogan =__context.____MODULES['0f6b8ac42acdcab93ab3b4c482af3a39'],
    utils =__context.____MODULES['e2f073b75b481084a559aa9888a6250c'],
    tpl =__context.____MODULES['f408ddb58aac012f7a8911684c51f1dd'];

var questionArr = [
        {
            'question': 'vulnerable',
            'questionSuffix': 'a.',
            'phonetic': ['vulnerable', '[\'vʌln(ə)rəb(ə)l]'],
            'explain': 'a.脆弱的；易受影响的（to）',
            'answer': [{
                'musix': 'weak',
                'explain': ['A.', 'weak', '脆弱的'],
                'text': 'A weak',
                'flag': true
            }, {
                'musix': 'deprive',
                'explain': ['B.', 'deprive', '使剥夺'],
                'text': 'B deprive',
                'flag': false
            }, {
                'musix': 'interpret',
                'explain': ['C.', 'interpret', '解释'],
                'text': 'C interpret',
                'flag': false
            }, {
                'musix': 'critical',
                'explain': ['D.', 'critical', '批评的'],
                'text': 'D critical',
                'flag': false
            }]
        }, {
            'question': 'be subject to',
            'questionSuffix': '',
            'phonetic': ['be subject to', ''],
            'explain': '受制于....；遭受',
            'answer': [{
                'musix': 'enormous',
                'explain': ['A.', 'enormous', '巨大的'],
                'text': 'A enormous',
                'flag': false
            }, {
                'musix': 'associate',
                'explain': ['B.', 'associate', '使联系'],
                'text': 'B associate',
                'flag': false
            }, {
                'musix': 'incentive',
                'explain': ['C.', 'incentive', '刺激'],
                'text': 'C incentive',
                'flag': false
            }, {
                'musix': 'suffer',
                'explain': ['D.', 'suffer', '遭受'],
                'text': 'D suffer',
                'flag': true
            }]
        }, {
            'question': 'be reluctant to',
            'questionSuffix': '',
            'phonetic': ['be reluctant to', '[rɪ\'lʌkt(ə)nt]'],
            'explain': 'a.不愿意的，不情愿的；（to）',
            'answer': [{
                'musix': 'vary',
                'explain': ['A.', 'vary', '变化、差异'],
                'text': 'A vary',
                'flag': false
            }, {
                'musix': 'unwilling',
                'explain': ['B.', 'unwilling', '不愿意的'],
                'text': 'B unwilling',
                'flag': true
            }, {
                'musix': 'fade',
                'explain': ['C.', 'fade', '褪色'],
                'text': 'C fade',
                'flag': false
            }, {
                'musix': 'specific',
                'explain': ['D.', 'specific', '具体的'],
                'text': 'D specific',
                'flag': false
            }]
        }, {
            'question': 'attach importance to',
            'questionSuffix': '',
            'phonetic': ['attach importance to', ''],
            'explain': '重视',
            'answer': [{
                'musix': 'value',
                'explain': ['A.', 'value', '重视'],
                'text': 'A value',
                'flag': true
            }, {
                'musix': 'object',
                'explain': ['B.', 'object', '反对'],
                'text': 'B object',
                'flag': false
            }, {
                'musix': 'fussy',
                'explain': ['C.', 'fussy', '大惊小怪'],
                'text': 'C fussy',
                'flag': false
            }, {
                'musix': 'panic',
                'explain': ['D.', 'panic', '恐慌的'],
                'text': 'D panic',
                'flag': false
            }]
        }, {
            'question': 'vary',
            'questionSuffix': 'v.',
            'phonetic': ['vary', '[\'veərɪ]'],
            'explain': 'v.不同，差异',
            'answer': [{
                'musix': 'indifference',
                'explain': ['A.', 'indifference', '冷漠'],
                'text': 'A indifference',
                'flag': false
            }, {
                'musix': 'difference',
                'explain': ['B.', 'difference', '不同、差异'],
                'text': 'B difference',
                'flag': true
            }, {
                'musix': 'frame',
                'explain': ['C.', 'frame', '设计'],
                'text': 'C frame',
                'flag': false
            }, {
                'musix': 'address',
                'explain': ['D.', 'address', '解决'],
                'text': 'D address',
                'flag': false
            }]
        }, {
            'question': 'discourage',
            'questionSuffix': 'v.',
            'phonetic': ['discourage', '[dɪs\'kʌrɪdʒ]'],
            'explain': 'v.阻碍…from',
            'answer': [{
                'musix': 'distinguish',
                'explain': ['A.', 'distinguish', '使区分'],
                'text': 'A distinguish',
                'flag': false
            }, {
                'musix': 'lobby',
                'explain': ['B.', 'lobby', '游说'],
                'text': 'B lobby',
                'flag': false
            }, {
                'musix': 'prevent',
                'explain': ['C.', 'prevent', '阻碍'],
                'text': 'C prevent',
                'flag': true
            }, {
                'musix': 'distribute',
                'explain': ['D.', 'distribute', '分发'],
                'text': 'D distribute',
                'flag': false
            }]
        }, {
            'question': 'contribute',
            'questionSuffix': 'v.',
            'phonetic': ['contribute', '[kən\'trɪbjut]'],
            'explain': 'v.有助于；导致(to)',
            'answer': [{
                'musix': 'attribute',
                'explain': ['A.', 'attribute', '归因于'],
                'text': 'A attribute',
                'flag': false
            }, {
                'musix': 'convince',
                'explain': ['B.', 'convince', '使相信'],
                'text': 'B convince',
                'flag': false
            }, {
                'musix': 'help',
                'explain': ['C.', 'help', '有助于'],
                'text': 'C help',
                'flag': true
            }, {
                'musix': 'delight',
                'explain': ['D.', 'delight', '高兴'],
                'text': 'D delight',
                'flag': false
            }]
        }, {
            'question': 'exaggerate',
            'questionSuffix': 'v.',
            'phonetic': ['exaggerate', '[ɪɡ\'zædʒəret]'],
            'explain': 'v.夸张',
            'answer': [{
                'musix': 'magnify',
                'explain': ['A.', 'magnify', '夸大'],
                'text': 'A magnify',
                'flag': true
            }, {
                'musix': 'simplify',
                'explain': ['B.', 'simplify', '简化'],
                'text': 'B simplify',
                'flag': false
            }, {
                'musix': 'specialize',
                'explain': ['C.', 'specialize', '专门从事'],
                'text': 'C specialize',
                'flag': false
            }, {
                'musix': 'expose',
                'explain': ['D.', 'expose', '暴露'],
                'text': 'D expose',
                'flag': false
            }]
        }, {
            'question': 'hinder',
            'questionSuffix': 'v.',
            'phonetic': ['hinder', '[\'hɪndə]'],
            'explain': 'v.阻碍',
            'answer': [{
                'musix': 'promote',
                'explain': ['A.', 'promote', '促进'],
                'text': 'A promote',
                'flag': false
            }, {
                'musix': 'facilitate',
                'explain': ['B.', 'facilitate', '促进'],
                'text': 'B facilitate',
                'flag': false
            }, {
                'musix': 'hamper',
                'explain': ['C.', 'hamper', '阻碍'],
                'text': 'C hamper',
                'flag': true
            }, {
                'musix': 'confirm',
                'explain': ['D.', 'confirm', '确认'],
                'text': 'D confirm',
                'flag': false
            }]
        }, {
            'question': 'ensure',
            'questionSuffix': 'v.',
            'phonetic': ['ensure', '[ɪn\'ʃʊr]'],
            'explain': 'v.确保',
            'answer': [{
                'musix': 'guarantee',
                'explain': ['A.', 'guarantee', '保证'],
                'text': 'A guarantee',
                'flag': true
            }, {
                'musix': 'intense',
                'explain': ['B.', 'intense', '强烈的'],
                'text': 'B intense',
                'flag': false
            }, {
                'musix': 'adapt',
                'explain': ['C.', 'adapt', '适应'],
                'text': 'C adapt',
                'flag': false
            }, {
                'musix': 'adopt',
                'explain': ['D.', 'adopt', '采纳'],
                'text': 'D adopt',
                'flag': false
            }]
        }, {
            'question': 'reflect',
            'questionSuffix': 'v.',
            'phonetic': ['reflect', '[rɪ\'flɛkt]'],
            'explain': 'v.反映',
            'answer': [{
                'musix': 'indicate',
                'explain': ['A.', 'indicate', '表明'],
                'text': 'A indicate',
                'flag': true
            }, {
                'musix': 'remote',
                'explain': ['B.', 'remote', '偏远的'],
                'text': 'B remote',
                'flag': false
            }, {
                'musix': 'recession',
                'explain': ['C.', 'recession', '衰退'],
                'text': 'C recession',
                'flag': false
            }, {
                'musix': 'indispensable',
                'explain': ['D.', 'indispensable', '必不可少的'],
                'text': 'D indispensable',
                'flag': false
            }]
        }, {
            'question': 'assume',
            'questionSuffix': 'v.',
            'phonetic': ['assume', '[ə\'sjuːm]'],
            'explain': 'v.假定；承担（assumption n.）',
            'answer': [{
                'musix': 'consume',
                'explain': ['A.', 'consume', '消费'],
                'text': 'A consume',
                'flag': false
            }, {
                'musix': 'presume',
                'explain': ['B.', 'presume', '假定'],
                'text': 'B presume',
                'flag': true
            }, {
                'musix': 'resume',
                'explain': ['C.', 'resume', '恢复'],
                'text': 'C resume',
                'flag': false
            }, {
                'musix': 'accumulate',
                'explain': ['D.', 'accumulate', '积累'],
                'text': 'D accumulate',
                'flag': false
            }]
        }, {
            'question': 'restrict',
            'questionSuffix': 'v.',
            'phonetic': ['restrict', '[rɪ\'strɪkt]'],
            'explain': 'v.限制',
            'answer': [{
                'musix': 'reserve',
                'explain': ['A.', 'reserve', '保留'],
                'text': 'A reserve',
                'flag': false
            }, {
                'musix': 'reduce',
                'explain': ['B.', 'reduce', '减少'],
                'text': 'B reduce',
                'flag': false
            }, {
                'musix': 'restrain',
                'explain': ['C.', 'restrain', '限制'],
                'text': 'C restrain',
                'flag': true
            }, {
                'musix': 'replace',
                'explain': ['D.', 'replace', '代替'],
                'text': 'D replace',
                'flag': false
            }]
        }, {
            'question': 'embrace',
            'questionSuffix': 'v.',
            'phonetic': ['embrace', '[ɪm\'bres]'],
            'explain': 'v.采纳，接受',
            'answer': [{
                'musix': 'accept',
                'explain': ['A.', 'accept', '接受'],
                'text': 'A accept',
                'flag': true
            }, {
                'musix': 'abstract',
                'explain': ['B.', 'abstract', '抽象的'],
                'text': 'B abstract',
                'flag': false
            }, {
                'musix': 'abnormal',
                'explain': ['C.', 'abnormal', '不正常的'],
                'text': 'C abnormal',
                'flag': false
            }, {
                'musix': 'derive',
                'explain': ['D.', 'derive', '获得、源于'],
                'text': 'D derive',
                'flag': false
            }]
        }, {
            'question': 'promote',
            'questionSuffix': 'v.',
            'phonetic': ['promote', '[prə\'məʊt]'],
            'explain': 'v.促进；促销',
            'answer': [{
                'musix': 'feasible',
                'explain': ['A.', 'feasible', '可行的'],
                'text': 'A feasible',
                'flag': false
            }, {
                'musix': 'inevitable',
                'explain': ['B.', 'inevitable', '不可避免的'],
                'text': 'B inevitable',
                'flag': false
            }, {
                'musix': 'command',
                'explain': ['C.', 'command', '命令'],
                'text': 'C command',
                'flag': false
            }, {
                'musix': 'facilitate',
                'explain': ['D.', 'facilitate', '促进'],
                'text': 'D facilitate',
                'flag': true
            }]
        }, {
            'question': 'incompetent',
            'questionSuffix': 'a.',
            'phonetic': ['incompetent', '[ɪn\'kɒmpɪt(ə)nt]'],
            'explain': 'a.无能力的，不能胜任的',
            'answer': [{
                'musix': 'inadequate',
                'explain': ['A.', 'inadequate', '不足的'],
                'text': 'A inadequate',
                'flag': true
            }, {
                'musix': 'invade',
                'explain': ['B.', 'invade', '侵略'],
                'text': 'B invade',
                'flag': false
            }, {
                'musix': 'investigate',
                'explain': ['C.', 'investigate', '调查'],
                'text': 'C investigate',
                'flag': false
            }, {
                'musix': 'imitate',
                'explain': ['D.', 'imitate', '模仿'],
                'text': 'D imitate',
                'flag': false
            }]
        }, {
            'question': 'indispensable',
            'questionSuffix': 'a.',
            'phonetic': ['indispensable', '[ɪndɪ\'spensəb(ə)l]'],
            'explain': 'a.必不可少的',
            'answer': [{
                'musix': 'essential',
                'explain': ['A.', 'essential', '必需的'],
                'text': 'A essential',
                'flag': true
            }, {
                'musix': 'dispensable',
                'explain': ['B.', 'dispensable', '可有可无的'],
                'text': 'B dispensable',
                'flag': false
            }, {
                'musix': 'aggressive',
                'explain': ['C.', 'aggressive', '挑衅的'],
                'text': 'C aggressive',
                'flag': false
            }, {
                'musix': 'opponent',
                'explain': ['D.', 'opponent', '对手'],
                'text': 'D opponent',
                'flag': false
            }]
        }, {
            'question': 'prejudice',
            'questionSuffix': 'n./v.',
            'phonetic': ['prejudice', '[\'predʒʊdɪs]'],
            'explain': 'n./v.偏见',
            'answer': [{
                'musix': 'fairness',
                'explain': ['A.', 'fairness', '公平'],
                'text': 'A fairness',
                'flag': false
            }, {
                'musix': 'just',
                'explain': ['B.', 'just', '公平的'],
                'text': 'B just',
                'flag': false
            }, {
                'musix': 'bias',
                'explain': ['C.', 'bias', '偏见'],
                'text': 'C bias',
                'flag': true
            }, {
                'musix': 'impartial',
                'explain': ['D.', 'impartial', '公平的'],
                'text': 'D impartial',
                'flag': false
            }]
        }, {
            'question': 'interfere',
            'questionSuffix': 'v.',
            'phonetic': ['interfere', '[ɪntə\'fɪə]'],
            'explain': 'v.干涉 in/with',
            'answer': [{
                'musix': 'interpret',
                'explain': ['A.', 'interpret', '解释'],
                'text': 'A interpret',
                'flag': false
            }, {
                'musix': 'intervene',
                'explain': ['B.', 'intervene', '干涉'],
                'text': 'B intervene',
                'flag': true
            }, {
                'musix': 'interact',
                'explain': ['C.', 'interact', '互动'],
                'text': 'C interact',
                'flag': false
            }, {
                'musix': 'interview',
                'explain': ['D.', 'interview', '采访'],
                'text': 'D interview',
                'flag': false
            }]
        }, {
            'question': 'transform',
            'questionSuffix': 'v.',
            'phonetic': ['transform', '[træns\'fɔrm]'],
            'explain': 'v.改变，转变',
            'answer': [{
                'musix': 'decline',
                'explain': ['A.', 'decline', '下降，减少；谢绝'],
                'text': 'A decline',
                'flag': false
            }, {
                'musix': 'transmit',
                'explain': ['B.', 'transmit', '传送'],
                'text': 'B transmit',
                'flag': false
            }, {
                'musix': 'transplant',
                'explain': ['C.', 'transplant', '移植'],
                'text': 'C transplant',
                'flag': false
            }, {
                'musix': 'change',
                'explain': ['D.', 'change', '改变'],
                'text': 'D change',
                'flag': true
            }]
        }, {
            'question': 'accelerate',
            'questionSuffix': 'v.',
            'phonetic': ['accelerate', '[əkˈsɛləˌret]'],
            'explain': 'v.加速，促进',
            'answer': [{
                'musix': 'promote',
                'explain': ['A.', 'promote', '促进'],
                'text': 'A promote',
                'flag': true
            }, {
                'musix': 'emerge',
                'explain': ['B.', 'emerge', '出现'],
                'text': 'B emerge',
                'flag': false
            }, {
                'musix': 'cater',
                'explain': ['C.', 'cater', '迎合'],
                'text': 'C cater',
                'flag': false
            }, {
                'musix': 'quality',
                'explain': ['D.', 'quality', '品质'],
                'text': 'D quality',
                'flag': false
            }]
        }, {
            'question': 'challenge',
            'questionSuffix': 'v.',
            'phonetic': ['challenge', '[\'tʃælɪn(d)ʒ]'],
            'explain': 'v.质疑；挑战',
            'answer': [{
                'musix': 'launch',
                'explain': ['A.', 'launch', '发现'],
                'text': 'A launch',
                'flag': false
            }, {
                'musix': 'question',
                'explain': ['B.', 'question', '质疑'],
                'text': 'B question',
                'flag': true
            }, {
                'musix': 'evolution',
                'explain': ['C.', 'evolution', '演变'],
                'text': 'C evolution',
                'flag': false
            }, {
                'musix': 'dampen',
                'explain': ['D.', 'dampen', '抑制'],
                'text': 'D dampen',
                'flag': false
            }]
        }, {
            'question': 'critical',
            'questionSuffix': 'a.',
            'phonetic': ['critical', '[\'krɪtɪk(ə)l]'],
            'explain': 'a.批判的，批评的；决定性的',
            'answer': [{
                'musix': 'underline',
                'explain': ['A.', 'underline', '强调'],
                'text': 'A underline',
                'flag': false
            }, {
                'musix': 'submit',
                'explain': ['B.', 'submit', '提交'],
                'text': 'B submit',
                'flag': false
            }, {
                'musix': 'donation',
                'explain': ['C.', 'donation', '捐献'],
                'text': 'C donation',
                'flag': false
            }, {
                'musix': 'blame',
                'explain': ['D.', 'blame', '谴责'],
                'text': 'D blame',
                'flag': true
            }]
        }, {
            'question': 'facilitate',
            'questionSuffix': 'v.',
            'phonetic': ['facilitate', '[fə\'sɪlɪteɪt]'],
            'explain': 'v.促进；使便利',
            'answer': [{
                'musix': 'competent',
                'explain': ['A.', 'competent', '有能力的'],
                'text': 'A competent',
                'flag': false
            }, {
                'musix': 'eliminate',
                'explain': ['B.', 'eliminate', '消除'],
                'text': 'B eliminate',
                'flag': false
            }, {
                'musix': 'boost',
                'explain': ['C.', 'boost', '推进'],
                'text': 'C boost',
                'flag': true
            }, {
                'musix': 'inherit',
                'explain': ['D.', 'inherit', '继承'],
                'text': 'D inherit',
                'flag': false
            }]
        }, {
            'question': 'inadequate',
            'questionSuffix': 'a.',
            'phonetic': ['inadequate', '[ɪn\'ædɪkwət]'],
            'explain': 'a.不足的',
            'answer': [{
                'musix': 'insufficient',
                'explain': ['A.', 'insufficient', '不足的'],
                'text': 'A insufficient',
                'flag': true
            }, {
                'musix': 'monitor',
                'explain': ['B.', 'monitor', '监控'],
                'text': 'B monitor',
                'flag': false
            }, {
                'musix': 'pattern',
                'explain': ['C.', 'pattern', '模式'],
                'text': 'C pattern',
                'flag': false
            }, {
                'musix': 'innovate',
                'explain': ['D.', 'innovate', '革新'],
                'text': 'D innovate',
                'flag': false
            }]
        }, {
            'question': 'curb',
            'questionSuffix': 'v./n.',
            'phonetic': ['curb', '[kɜːb]'],
            'explain': 'v./n.抑制，阻碍',
            'answer': [{
                'musix': 'originate',
                'explain': ['A.', 'originate', '起源'],
                'text': 'A originate',
                'flag': false
            }, {
                'musix': 'vanish',
                'explain': ['B.', 'vanish', '消失'],
                'text': 'B vanish',
                'flag': false
            }, {
                'musix': 'inhibit',
                'explain': ['C.', 'inhibit', '抑制'],
                'text': 'C inhibit',
                'flag': true
            }, {
                'musix': 'gender',
                'explain': ['D.', 'gender', '性别'],
                'text': 'D gender',
                'flag': false
            }]
        }, {
            'question': 'conventional',
            'questionSuffix': 'a.',
            'phonetic': ['conventional', '[kən\'venʃ(ə)n(ə)l]'],
            'explain': 'a.传统的',
            'answer': [{
                'musix': 'violate',
                'explain': ['A.', 'violate', '违反'],
                'text': 'A violate',
                'flag': false
            }, {
                'musix': 'traditional',
                'explain': ['B.', 'traditional', '传统的'],
                'text': 'B traditional',
                'flag': true
            }, {
                'musix': 'vital',
                'explain': ['C.', 'vital', '重要的'],
                'text': 'C vital',
                'flag': false
            }, {
                'musix': 'substantial',
                'explain': ['D.', 'substantial', '相当多的'],
                'text': 'D substantial',
                'flag': false
            }]
        }, {
            'question': 'deteriorate',
            'questionSuffix': 'v.',
            'phonetic': ['deteriorate', '[dɪ\'tɪərɪəreɪt]'],
            'explain': 'v.恶化',
            'answer': [{
                'musix': 'improve',
                'explain': ['A.', 'improve', '改善'],
                'text': 'A improve',
                'flag': false
            }, {
                'musix': 'aggravate',
                'explain': ['B.', 'aggravate', '恶化'],
                'text': 'B aggravate',
                'flag': true
            }, {
                'musix': 'desert',
                'explain': ['C.', 'desert', '放弃'],
                'text': 'C desert',
                'flag': false
            }, {
                'musix': 'dessert',
                'explain': ['D.', 'dessert', '甜点'],
                'text': 'D dessert',
                'flag': false
            }]
        }, {
            'question': 'appeal',
            'questionSuffix': 'v.',
            'phonetic': ['appeal', '[ə\'piːl]'],
            'explain': 'v.吸引；呼吁(~ to sb for sth)',
            'answer': [{
                'musix': 'ascertain',
                'explain': ['A.', 'ascertain', '确定、查明'],
                'text': 'A ascertain',
                'flag': false
            }, {
                'musix': 'attract',
                'explain': ['B.', 'attract', '吸引'],
                'text': 'B attract',
                'flag': true
            }, {
                'musix': 'reveal',
                'explain': ['C.', 'reveal', '揭露'],
                'text': 'C reveal',
                'flag': false
            }, {
                'musix': 'reluctant',
                'explain': ['D.', 'reluctant', '不愿意的'],
                'text': 'D reluctant',
                'flag': false
            }]
        }, {
            'question': 'unbiased',
            'questionSuffix': 'a.',
            'phonetic': ['unbiased', '[ʌn\'baɪəst]'],
            'explain': 'a.公平的',
            'answer': [{
                'musix': 'sustainable',
                'explain': ['A.', 'sustainable', '可持续的'],
                'text': 'A sustainable',
                'flag': false
            }, {
                'musix': 'unfairness',
                'explain': ['B.', 'unfairness', '不公平'],
                'text': 'B unfairness',
                'flag': false
            }, {
                'musix': 'impartial',
                'explain': ['C.', 'impartial', '公平的'],
                'text': 'C impartial',
                'flag': true
            }, {
                'musix': 'military',
                'explain': ['D.', 'military', '军事的'],
                'text': 'D military',
                'flag': false
            }]
        }, {
            'question': 'dramatically',
            'questionSuffix': 'ad.',
            'phonetic': ['dramatically', '[drə\'mætɪkəlɪ]'],
            'explain': 'ad. 引人注目地；大幅度地；',
            'answer': [{
                'musix': 'conspicuously',
                'explain': ['A.', 'conspicuously', '显著地'],
                'text': 'A conspicuously',
                'flag': true
            }, {
                'musix': 'inherently',
                'explain': ['B.', 'inherently', '本质地'],
                'text': 'B inherently',
                'flag': false
            }, {
                'musix': 'intrinsically',
                'explain': ['C.', 'intrinsically', '本质地'],
                'text': 'C intrinsically',
                'flag': false
            }, {
                'musix': 'fairly',
                'explain': ['D.', 'fairly', '公平地'],
                'text': 'D fairly',
                'flag': false
            }]
        }, {
            'question': 'urgent',
            'questionSuffix': 'a.',
            'phonetic': ['urgent', '[ˈɜːdʒənt]'],
            'explain': 'a.紧急的，急迫的',
            'answer': [{
                'musix': 'pressing',
                'explain': ['A.', 'pressing', '急迫地'],
                'text': 'A pressing',
                'flag': true
            }, {
                'musix': 'frown',
                'explain': ['B.', 'frown', '皱眉'],
                'text': 'B frown',
                'flag': false
            }, {
                'musix': 'exaggerate',
                'explain': ['C.', 'exaggerate', '夸张'],
                'text': 'C exaggerate',
                'flag': false
            }, {
                'musix': 'routinely',
                'explain': ['D.', 'routinely', '例行公事地'],
                'text': 'D routinely',
                'flag': false
            }]
        }, {
            'question': 'accurate',
            'questionSuffix': 'a.',
            'phonetic': ['accurate', '[\'ækjʊrət]'],
            'explain': 'a.精确的，精准的',
            'answer': [{
                'musix': 'associate',
                'explain': ['A.', 'associate', '使联系'],
                'text': 'A associate',
                'flag': false
            }, {
                'musix': 'vary',
                'explain': ['B.', 'vary', '不同'],
                'text': 'B vary',
                'flag': false
            }, {
                'musix': 'substitute',
                'explain': ['C.', 'substitute', '代替'],
                'text': 'C substitute',
                'flag': false
            }, {
                'musix': 'precise',
                'explain': ['D.', 'precise', '精确的'],
                'text': 'D precise',
                'flag': true
            }]
        }, {
            'question': 'eliminate',
            'questionSuffix': 'v.',
            'phonetic': ['eliminate', '[ɪ\'lɪmɪneɪt]'],
            'explain': 'v.消除；摆脱',
            'answer': [{
                'musix': 'get rid of',
                'explain': ['A.', 'get rid of', '摆脱'],
                'text': 'A get rid of',
                'flag': true
            }, {
                'musix': 'be bound to',
                'explain': ['B.', 'be bound to', '一定会'],
                'text': 'B be bound to',
                'flag': false
            }, {
                'musix': 'be attached to',
                'explain': ['C.', 'be attached to', '喜爱'],
                'text': 'C be attached to',
                'flag': false
            }, {
                'musix': 'contribute to',
                'explain': ['D.', 'contribute to', '有助于'],
                'text': 'D contribute to',
                'flag': false
            }]
        }, {
            'question': 'qualification',
            'questionSuffix': 'n.',
            'phonetic': ['qualification', '[,kwɒlɪfɪ\'keɪʃ(ə)n]'],
            'explain': 'n.资格',
            'answer': [{
                'musix': 'capability',
                'explain': ['A.', 'capability', '能力'],
                'text': 'A capability',
                'flag': true
            }, {
                'musix': 'quantity',
                'explain': ['B.', 'quantity', '数量'],
                'text': 'B quantity',
                'flag': false
            }, {
                'musix': 'utility',
                'explain': ['C.', 'utility', '实用'],
                'text': 'C utility',
                'flag': false
            }, {
                'musix': 'facility',
                'explain': ['D.', 'facility', '公共设施'],
                'text': 'D facility',
                'flag': false
            }]
        }, {
            'question': 'controversial',
            'questionSuffix': 'a.',
            'phonetic': ['controversial', '[kɒntrə\'vɜːʃ(ə)l]'],
            'explain': 'a.有争议的',
            'answer': [{
                'musix': 'argue',
                'explain': ['A.', 'argue', '争论'],
                'text': 'A argue',
                'flag': true
            }, {
                'musix': 'assume',
                'explain': ['B.', 'assume', '假定'],
                'text': 'B assume',
                'flag': false
            }, {
                'musix': 'productive',
                'explain': ['C.', 'productive', '高效的'],
                'text': 'C productive',
                'flag': false
            }, {
                'musix': 'pose',
                'explain': ['D.', 'pose', '形成'],
                'text': 'D pose',
                'flag': false
            }]
        }, {
            'question': 'obstacle',
            'questionSuffix': 'n.',
            'phonetic': ['obstacle', '[\'ɒbstək(ə)l]'],
            'explain': 'n.障碍，阻碍',
            'answer': [{
                'musix': 'obtain',
                'explain': ['A.', 'obtain', '获得'],
                'text': 'A obtain',
                'flag': false
            }, {
                'musix': 'occupation',
                'explain': ['B.', 'occupation', '职业'],
                'text': 'B occupation',
                'flag': false
            }, {
                'musix': 'operation',
                'explain': ['C.', 'operation', '经营'],
                'text': 'C operation',
                'flag': false
            }, {
                'musix': 'block',
                'explain': ['D.', 'block', '阻碍'],
                'text': 'D block',
                'flag': true
            }]
        }, {
            'question': 'tackle',
            'questionSuffix': 'v.',
            'phonetic': ['tackle', '[\'tæk(ə)l]'],
            'explain': 'v.处理',
            'answer': [{
                'musix': 'handle',
                'explain': ['A.', 'handle', '处理'],
                'text': 'A handle',
                'flag': true
            }, {
                'musix': 'needy',
                'explain': ['B.', 'needy', '贫穷的'],
                'text': 'B needy',
                'flag': false
            }, {
                'musix': 'negotiate',
                'explain': ['C.', 'negotiate', '协商'],
                'text': 'C negotiate',
                'flag': false
            }, {
                'musix': 'overflow',
                'explain': ['D.', 'overflow', '泛滥、溢出'],
                'text': 'D overflow',
                'flag': false
            }]
        }, {
            'question': 'stereotyped',
            'questionSuffix': 'a.',
            'phonetic': ['stereotyped', '[\'sterɪətaɪpt]'],
            'explain': 'a.陈规的，刻板的',
            'answer': [{
                'musix': 'old',
                'explain': ['A.', 'old', '老旧的'],
                'text': 'A old',
                'flag': true
            }, {
                'musix': 'enrollment',
                'explain': ['B.', 'enrollment', '入学人数'],
                'text': 'B enrollment',
                'flag': false
            }, {
                'musix': 'expand',
                'explain': ['C.', 'expand', '扩大'],
                'text': 'C expand',
                'flag': false
            }, {
                'musix': 'odd',
                'explain': ['D.', 'odd', '奇怪的'],
                'text': 'D odd',
                'flag': false
            }]
        }, {
            'question': 'diligent',
            'questionSuffix': 'a.',
            'phonetic': ['diligent', '[\'dɪlɪdʒ(ə)nt]'],
            'explain': 'a.勤勉的，勤奋的',
            'answer': [{
                'musix': 'divorce',
                'explain': ['A.', 'divorce', '离婚'],
                'text': 'A divorce',
                'flag': false
            }, {
                'musix': 'diverse',
                'explain': ['B.', 'diverse', '各种各样'],
                'text': 'B diverse',
                'flag': false
            }, {
                'musix': 'hardworking',
                'explain': ['C.', 'hardworking', '勤奋的'],
                'text': 'C hardworking',
                'flag': true
            }, {
                'musix': 'tackle',
                'explain': ['D.', 'tackle', '处理'],
                'text': 'D tackle',
                'flag': false
            }]
        }, {
            'question': 'consensus',
            'questionSuffix': 'n.',
            'phonetic': ['consensus', '[kənˈsensəs]'],
            'explain': 'n.共识',
            'answer': [{
                'musix': 'censor',
                'explain': ['A.', 'censor', '审查'],
                'text': 'A censor',
                'flag': false
            }, {
                'musix': 'agreement',
                'explain': ['B.', 'agreement', '共识'],
                'text': 'B agreement',
                'flag': true
            }, {
                'musix': 'convert',
                'explain': ['C.', 'convert', '转变'],
                'text': 'C convert',
                'flag': false
            }, {
                'musix': 'slump',
                'explain': ['D.', 'slump', '衰退'],
                'text': 'D slump',
                'flag': false
            }]
        }, {
            'question': 'controversy',
            'questionSuffix': 'n.',
            'phonetic': ['controversy', '[ˈkɒntrəvɜ:si]'],
            'explain': 'n.争议',
            'answer': [{
                'musix': 'dispute',
                'explain': ['A.', 'dispute', '争议'],
                'text': 'A dispute',
                'flag': true
            }, {
                'musix': 'mount',
                'explain': ['B.', 'mount', '增加'],
                'text': 'B mount',
                'flag': false
            }, {
                'musix': 'association',
                'explain': ['C.', 'association', '联系'],
                'text': 'C association',
                'flag': false
            }, {
                'musix': 'rein',
                'explain': ['D.', 'rein', '抑制、驾驭'],
                'text': 'D rein',
                'flag': false
            }]
        }, {
            'question': 'crucial',
            'questionSuffix': 'a.',
            'phonetic': ['crucial', '[ˈkru:ʃl]'],
            'explain': 'adj.关键的',
            'answer': [{
                'musix': 'impassive',
                'explain': ['A.', 'impassive', '冷漠的'],
                'text': 'A impassive',
                'flag': false
            }, {
                'musix': 'important',
                'explain': ['B.', 'important', '重要的'],
                'text': 'B important',
                'flag': true
            }, {
                'musix': 'relative',
                'explain': ['C.', 'relative', '相对的'],
                'text': 'C relative',
                'flag': false
            }, {
                'musix': 'descendant',
                'explain': ['D.', 'descendant', '子孙后代'],
                'text': 'D descendant',
                'flag': false
            }]
        }, {
            'question': 'apathy',
            'questionSuffix': 'n.',
            'phonetic': ['apathy', '[ˈæpəθi]'],
            'explain': 'n.冷漠',
            'answer': [{
                'musix': 'support',
                'explain': ['A.', 'support', '支持'],
                'text': 'A support',
                'flag': false
            }, {
                'musix': 'reserved',
                'explain': ['B.', 'reserved', '矜持的'],
                'text': 'B reserved',
                'flag': false
            }, {
                'musix': 'bias',
                'explain': ['C.', 'bias', '偏见'],
                'text': 'C bias',
                'flag': false
            }, {
                'musix': 'indifference',
                'explain': ['D.', 'indifference', '冷漠'],
                'text': 'D indifference',
                'flag': true
            }]
        }, {
            'question': 'incur',
            'questionSuffix': 'v.',
            'phonetic': ['incur', '[ɪnˈkɜ:(r)]'],
            'explain': 'v.引起',
            'answer': [{
                'musix': 'give rise to',
                'explain': ['A.', 'give rise to', '引起'],
                'text': 'A give rise to',
                'flag': true
            }, {
                'musix': 'at the expense of',
                'explain': ['B.', 'at the expense of', '以...为代价'],
                'text': 'B at the expense of',
                'flag': false
            }, {
                'musix': 'have access to',
                'explain': ['C.', 'have access to', '推进'],
                'text': 'C have access to',
                'flag': false
            }, {
                'musix': 'deprive of',
                'explain': ['D.', 'deprive of', '剥夺'],
                'text': 'D deprive of',
                'flag': false
            }]
        }, {
            'question': 'deter',
            'questionSuffix': 'v.',
            'phonetic': ['deter', '[dɪˈtɜ:(r)]'],
            'explain': 'v.阻碍',
            'answer': [{
                'musix': 'relay',
                'explain': ['A.', 'relay', '转播'],
                'text': 'A relay',
                'flag': false
            }, {
                'musix': 'defer',
                'explain': ['B.', 'defer', '推迟'],
                'text': 'B defer',
                'flag': false
            }, {
                'musix': 'curb',
                'explain': ['C.', 'curb', '抑制'],
                'text': 'C curb',
                'flag': true
            }, {
                'musix': 'blame',
                'explain': ['D.', 'blame', '谴责'],
                'text': 'D blame',
                'flag': false
            }]
        }, {
            'question': 'adverse',
            'questionSuffix': 'a.',
            'phonetic': ['adverse', '[ˈædvɜ:s]'],
            'explain': 'adj.不利的',
            'answer': [{
                'musix': 'unbelievable',
                'explain': ['A.', 'unbelievable', '难以置信的'],
                'text': 'A unbelievable',
                'flag': false
            }, {
                'musix': 'unfavorable',
                'explain': ['B.', 'unfavorable', '不利的'],
                'text': 'B unfavorable',
                'flag': true
            }, {
                'musix': 'undesirable',
                'explain': ['C.', 'undesirable', '不受欢迎的'],
                'text': 'C undesirable',
                'flag': false
            }, {
                'musix': 'undoubtable',
                'explain': ['D.', 'undoubtable', '毫无疑问的'],
                'text': 'D undoubtable',
                'flag': false
            }]
        }, {
            'question': 'complicated',
            'questionSuffix': 'a.',
            'phonetic': ['complicated', '[ˈkɒmplɪkeɪtɪd]'],
            'explain': 'adj.复杂的',
            'answer': [{
                'musix': 'complied',
                'explain': ['A.', 'complied', '顺从的'],
                'text': 'A complied',
                'flag': false
            }, {
                'musix': 'complex',
                'explain': ['B.', 'complex', '复杂的'],
                'text': 'B complex',
                'flag': true
            }, {
                'musix': 'complained',
                'explain': ['C.', 'complained', '抱怨的'],
                'text': 'C complained',
                'flag': false
            }, {
                'musix': 'implied',
                'explain': ['D.', 'implied', '暗示的'],
                'text': 'D implied',
                'flag': false
            }]
        }, {
            'question': 'account for',
            'questionSuffix': 'v.',
            'phonetic': ['account for', ''],
            'explain': 'v.解释、占比例',
            'answer': [{
                'musix': 'explain',
                'explain': ['A.', 'explain', '解释'],
                'text': 'A explain',
                'flag': true
            }, {
                'musix': 'exalt',
                'explain': ['B.', 'exalt', '赞扬'],
                'text': 'B exalt',
                'flag': false
            }, {
                'musix': 'accuse',
                'explain': ['C.', 'accuse', '指责'],
                'text': 'C accuse',
                'flag': false
            }, {
                'musix': 'demand',
                'explain': ['D.', 'demand', '要求'],
                'text': 'D demand',
                'flag': false
            }]
        }, {
            'question': 'surging',
            'questionSuffix': '',
            'phonetic': ['surging', '[\'sɜ:dʒɪŋ]'],
            'explain': '增长、猛增',
            'answer': [{
                'musix': 'diminishing',
                'explain': ['A.', 'diminishing', '减少'],
                'text': 'A diminishing',
                'flag': false
            }, {
                'musix': 'rocketing',
                'explain': ['B.', 'rocketing', '猛增'],
                'text': 'B rocketing',
                'flag': true
            }, {
                'musix': 'contributing',
                'explain': ['C.', 'contributing', '捐献'],
                'text': 'C contributing',
                'flag': false
            }, {
                'musix': 'thriving',
                'explain': ['D.', 'thriving', '繁荣'],
                'text': 'D thriving',
                'flag': false
            }]
        }
    ],
    finalQuestionArr = utils.getRandomList(questionArr, 10);

// 测试数据
var test = 0;
var test_score = 599;

var voiceSourceList = finalQuestionArr.map(function(item) {
    return '/voice/' + item.question + '.mp3';
});
var path = '..';
var Exam = function(params) {
    this.params = params;

    this.$container = $('.exam');
    // 题目面包dom节点
    this.$board = this.$container.find('.board');
    // 血条dom节点
    this.$middle = this.$container.find('.middle');
    // 数字索引dom节点
    this.$num = this.$container.find('.num');
    // 回答正确人物图片dom节点
    this.$happyPerson = this.$container.find('.happy-person');
    // 回答错误人物图片dom节点
    this.$unhappyPerson = this.$container.find('.unhappy-person');
    // 确定按钮dom节点
    this.$submit = this.$container.find('.btn');
    // 提示容器dom节点
    this.$nextWrapper = this.$container.find('.nextWrapper');
    // 答案解析dom节点
    this.$music = this.$container.find('.music');
    // 查看文字解析dom节点
    this.$explain = this.$container.find('.explain');
    // 文字解析面板容器
    this.$explainLayout = this.$container.find('.explain-layout');
    // 错误的城堡dom节点
    this.$city = this.$container.find('.city');
    // 正确的时候的指示器
    this.$successNumber = this.$container.find('.success-number');
    // 错误的时候的指示器
    this.$failNumber = this.$container.find('.fail-number');

    this.soundVoice = new Audio();
    this.playFlag = false;
    this.questionList = finalQuestionArr;
    this.template = hogan.compile(tpl);
    this.index = 0;
    this.score = 425;
    this.init();
};
Exam.prototype = {
    init: function() {
        this.$container.removeClass('hide');
        this._bindEvent();
        this._renderBlood(425);
        this.render(0);
    },
    render(index) {
        var width = 12.5 * (index + 1);

        this.index = index;
        this.$num.html(index + 1 + ' / ' + 10);
        this.$board.html(this.template.render(this.questionList[index]));
    },
    _bindEvent: function() {
        var _this = this;

        // 点击选项
        $(document).on('click', '.exam .answer .item', function(e) {
            // 防止出现下一题的时候又出现确定按钮
            if (_this.$nextWrapper.hasClass('hide')) {
                var $item = $(this);

                $('.exam .item').removeClass('on');
                $item.addClass('on');
                _this.flag = $item.data('flag');
                _this.$submit.removeClass('hide');
            }
        
        // 点击确定
        }).on('click', '.exam .btn', function() {
            // 回答正确
            if (_this.flag) {
                _this.questionList[_this.index].answer.forEach(function(item, i) {
                    if (item.flag) {
                        _this.$container.find('.item').eq(i).removeClass('on').addClass('success');
                    }
                });
                _this.$happyPerson.removeClass('hide');
                _this._renderBlood(true);
                _this.$successNumber.removeClass('hide');
            } else {
                _this.$city.removeClass('hide');
                _this.$unhappyPerson.removeClass('hide');
                _this._renderBlood(false);
                _this.$failNumber.removeClass('hide');
            }

            _this.$board.addClass('on');
            _this.$submit.addClass('hide');
            _this.$nextWrapper.removeClass('hide');

        // 点击答案解析
        }).on('click', '.exam .music', function() {
            _this.$music.attr('src', '../img/exam-music-on.png');

            // 播放音乐
            _this.soundVoice.src = path + voiceSourceList[_this.index];
            _this.soundVoice.play();
            _this.playFlag = true;

        // 点击文字解析
        }).on('click', '.exam .explain', function() {
            _this.$explainLayout.removeClass('hide');
            _this._renderExplain(_this.questionList[_this.index]);

        // 点击下一题
        }).on('click', '.exam .next', function() {
            // 全部回答完毕
            if (_this.index + 1 === 10 ||test) {
                if(test){
                    this.score = test_score;
                }
                _this.$container.addClass('hide');
                return _this.params.finishHandler();
            }
            _this._reset();
            _this.render(_this.index + 1);

        // 点击关闭文字解析
        }).on('click', '.exam .close', function() {
            _this.$explainLayout.addClass('hide');
        });
    },
    _reset: function() {
        this.$happyPerson.addClass('hide');
        this.$unhappyPerson.addClass('hide');
        this.$board.removeClass('on');
        this.$nextWrapper.addClass('hide');
        this.$music.attr('src', '../img/exam-music.png');
        this.$explainLayout.addClass('hide');
        this.$city.addClass('hide');
        this.$successNumber.addClass('hide');
        this.$failNumber.addClass('hide');

        if (this.playFlag) {
            this.playFlag = false;
            this.soundVoice.pause();
        }
    },
    _renderExplain(data) {
        var htmlStr = '' +
            '<li><span>' + data.phonetic[0] + '</span>&nbsp;&nbsp;&nbsp;&nbsp;' + data.phonetic[1] + '</li>\
            <li>' + data.explain + '</li>\
            <li>' + data.answer[0].explain[0] + ' ' + data.answer[0].explain[1] + ' ' + data.answer[0].explain[2] + '</li>\
            <li>' + data.answer[1].explain[0] + ' ' + data.answer[1].explain[1] + ' ' + data.answer[1].explain[2] + '</li>\
            <li>' + data.answer[2].explain[0] + ' ' + data.answer[2].explain[1] + ' ' + data.answer[2].explain[2] + '</li>\
            <li>' + data.answer[3].explain[0] + ' ' + data.answer[3].explain[1] + ' ' + data.answer[3].explain[2] + '</li>';

        this.$explainLayout.find('ul').html(htmlStr);
    },
    // 血槽
    _renderBlood(flag) {
        /**
         * true 表示加血
         * false 表示减血
         * 否则直接修改为所传值
         */
        if (flag === true) {
            this.score += 30;
        } else if (flag === false) {
            this.score += -40;
        } else {
            this.score = flag;
        }

        this.$middle.css('width', this.score / 725 * 124 / 100 + 'rem');
    }
};

module.exports = {
    voiceSourceList: voiceSourceList,
    Exam: Exam
};

    })( module.exports , module , __context );
    __context.____MODULES[ "19e16b670fa165cf5a1e9289f86c0019" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "23a5a77a5fdde4896f7f3801d8894847" ,
        filename : "result.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    __context.____MODULES['50a4556b0089cfa1cb61e88ea23bbcce'];

var Result = function(score) {
    this.score = score;
    this.$container = $('.result');
    this.$score = this.$container.find('.score');
    this.$img = this.$container.find('.img');
    this.$jump = this.$container.find('.jump');
    this.$show = this.$container.find('.show');
    this.$share = $('.share');
    this.$share_word = this.$share.find('.share-word');
    this.$princess = $('.princess');
    this.init(score);
};
Result.prototype = {
    init: function() {
        this.$container.removeClass('hide');
        this._bindEvent();
        this.render(this.score);
    },
    _initDialog: function() {
        $(document).on('click', '.result .js-dialog', function() {
            $(this).addClass('hide');
        })
    },
    render: function() {
        var score = this.score,
            src;

        if (score < 250) {
            src = '../img/result-250.jpg';
        } else if (score < 425) {
            src = '../img/result-425.jpg';
        } else if (score < 525) {
            src = '../img/result-525.jpg';
        } else if (score < 600) {
            src = '../img/result-600.jpg';
        } else if (score < 696) {
            src = '../img/result-696.jpg';
        } else {
            this.$show.addClass('on');
            src = '../img/result-710.jpg';
        }

        this.$score.html(score);
        this.$img.attr('src', src);
    },
    _bindEvent: function() {

        var _this = this;
        $(document).on('click', '.result .jump', function() {
            _this.$princess.removeClass('hide').attr('display', 'block');
            _this._initDialog();
        }).on('click', '.result .show', function() {
            var src = _this.score >= 696 ? '/img/share-word-1.png' : '/img/share-word-2.png';
            _this.$share_word.attr('src', src);
            _this.$share.removeClass('hide').attr('display', 'block');
            _this._initDialog();
        });

    }
};

module.exports = Result;

    })( module.exports , module , __context );
    __context.____MODULES[ "23a5a77a5fdde4896f7f3801d8894847" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "e0116646bcb4d98c5daf50afd79f1434" ,
        filename : "index.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
__context.____MODULES['50a4556b0089cfa1cb61e88ea23bbcce'];
var FastClick =__context.____MODULES['624b017aec859a48d3c98140b61779f3'];
var loadPage =__context.____MODULES['6ecb60068526f6a95f7bf217f4345ee2'];
var initSelectPage =__context.____MODULES['030a279f3e5346fbb128262167f930ce'];
var initStart =__context.____MODULES['f42f6db5e3be3a9414fa3afa66bc4f86'];
var exam =__context.____MODULES['19e16b670fa165cf5a1e9289f86c0019'];
var Result =__context.____MODULES['23a5a77a5fdde4896f7f3801d8894847'];

FastClick(document.body);
initAudio();

var screenWidth = document.body.clientWidth,
    screenHeight = document.body.clientHeight,
    originWidth = 375,
    originHeight = 604;

var Page = function() {
    this.$body = $('.pageWrapper');
    this.init();
};
Page.prototype = {
    init: function() {
        this._reset();
    },
    _reset: function() {
        this.$body.css({
            '-webkit-transform': 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')',
            transform: 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')'
        });
    }
};

new Page();

loadPage.init(
    function() {
        initStart(function() {
            initSelectPage(function() {
                    var examer = new exam.Exam({
                        finishHandler: function() {
                            new Result(examer.score);
                        }
                    });
                }
            );
        });
    }
);


function initAudio(){
    var audio = document.getElementById('bg-music');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}



    })( module.exports , module , __context );
    __context.____MODULES[ "e0116646bcb4d98c5daf50afd79f1434" ] = module.exports;
})(this);

var setCookie = function (name, value, type) {
    type = (typeof type !== 'undefined') ?  type : 'default';
    var date = new Date(),
        expires = 'expires=';
    // in 24 hour
    if(type === '24h') {
        date.setDate(date.getDate() + 1);
        // Test with 60s
        // date.setTime(date.getTime() + 60 * 1000);
    }
    // to 1 hour
    if(type === '1h') {
        date.setTime(date.getTime() + 3600 * 1000);
    }
    // to 12pm this day
    if(type === '12pm' || type === 'default') {
        date.setHours(23,59,59,0);
    }
    expires += date.toGMTString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}
var getCookie = function (name) {
    var allCookies = document.cookie.split(';'),
        cookieCounter = 0,
        currentCookie = '';
    for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
        currentCookie = allCookies[cookieCounter];
        while (currentCookie.charAt(0) === ' ') {
            currentCookie = currentCookie.substring(1, currentCookie.length);
        }
        if (currentCookie.indexOf(name + '=') === 0) {
            return currentCookie.substring(name.length + 1, currentCookie.length);
        }
    }
    return false;
} 
/**
 * Swiper 6.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 18, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:a(t[s])&&a(e[s])&&Object.keys(t[s]).length>0&&i(e[s],t[s])}))}var s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return i(e,s),e}var n={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){var e="undefined"!=typeof window?window:{};return i(e,n),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,a){return(u=p()?Reflect.construct:function(e,t,a){var i=[null];i.push.apply(i,t);var s=new(Function.bind.apply(e,i));return a&&d(s,a.prototype),s}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,o(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),d(i,e)})(e)}var h=function(e){var t,a;function i(t){var a,i,s;return a=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a),s=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return s},set:function(e){s.__proto__=e}}),a}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i}(c(Array));function v(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,v(e)):t.push(e)})),t}function f(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var a=l(),i=r(),s=[];if(!t&&e instanceof h)return e;if(!e)return new h(s);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var o="div";0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select");var d=i.createElement(o);d.innerHTML=n;for(var p=0;p<d.childNodes.length;p+=1)s.push(d.childNodes[p])}else s=function(e,t){if("string"!=typeof e)return[e];for(var a=[],i=t.querySelectorAll(e),s=0;s<i.length;s+=1)a.push(i[s]);return a}(e.trim(),t||i)}else if(e.nodeType||e===a||e===i)s.push(e);else if(Array.isArray(e)){if(e instanceof h)return e;s=e}return new h(function(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(s))}m.fn=h.prototype;var g,y,w,b={addClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return f(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a+=1)if(2===arguments.length)this[a].setAttribute(e,t);else for(var i in e)this[a][i]=e[i],this[a].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];function l(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),m(t).is(s))r.apply(t,a);else for(var i=m(t).parents(),n=0;n<i.length;n+=1)m(i[n]).is(s)&&r.apply(i[n],a)}}function o(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var d,p=i.split(" "),u=0;u<this.length;u+=1){var c=this[u];if(s)for(d=0;d<p.length;d+=1){var h=p[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[h]||(c.dom7LiveListeners[h]=[]),c.dom7LiveListeners[h].push({listener:r,proxyListener:l}),c.addEventListener(h,l,n)}else for(d=0;d<p.length;d+=1){var v=p[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[v]||(c.dom7Listeners[v]=[]),c.dom7Listeners[v].push({listener:r,proxyListener:o}),c.addEventListener(v,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var l=i.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],p=0;p<this.length;p+=1){var u=this[p],c=void 0;if(!s&&u.dom7Listeners?c=u.dom7Listeners[d]:s&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[d]),c&&c.length)for(var h=c.length-1;h>=0;h-=1){var v=c[h];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1)):r||(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1))}}return this},trigger:function(){for(var e=l(),t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(var s=a[0].split(" "),r=a[1],n=0;n<s.length;n+=1)for(var o=s[n],d=0;d<this.length;d+=1){var p=this[d];if(e.CustomEvent){var u=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});p.dom7EventData=a.filter((function(e,t){return t>0})),p.dispatchEvent(u),p.dom7EventData=[],delete p.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function a(i){i.target===this&&(e.call(this,i),t.off("transitionend",a))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=l();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=l(),t=r(),a=this[0],i=a.getBoundingClientRect(),s=t.body,n=a.clientTop||s.clientTop||0,o=a.clientLeft||s.clientLeft||0,d=a===e?e.scrollY:a.scrollTop,p=a===e?e.scrollX:a.scrollLeft;return{top:i.top+d-n,left:i.left+p-o}}return null},css:function(e,t){var a,i=l();if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)this[a].style[s]=e[s];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,a){e.apply(t,[t,a])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=l(),s=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}if(e===s)return n===s;if(e===i)return n===i;if(e.nodeType||e instanceof h){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var a=t+e;return m(a<0?[]:[this[a]])}return m([this[e]])},append:function(){for(var e,t=r(),a=0;a<arguments.length;a+=1){e=a<0||arguments.length<=a?void 0:arguments[a];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var s=t.createElement("div");for(s.innerHTML=e;s.firstChild;)this[i].appendChild(s.firstChild)}else if(e instanceof h)for(var n=0;n<e.length;n+=1)this[i].appendChild(e[n]);else this[i].appendChild(e)}return this},prepend:function(e){var t,a,i=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=i.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)this[t].insertBefore(s.childNodes[a],this[t].childNodes[0])}else if(e instanceof h)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?m(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return m(t)},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?m(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return m(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].children,s=0;s<i.length;s+=1)e&&!m(i[s]).is(e)||t.push(i[s]);return m(t)},filter:function(e){return m(f(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var a,i,s,r=l(),n=r.getComputedStyle(e,null);return r.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),s=new r.WebKitCSSMatrix("none"===i?"":i)):a=(s=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=r.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=r.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function C(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object}function S(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=1;t<arguments.length;t+=1){var a=t<0||arguments.length<=t?void 0:arguments[t];if(null!=a)for(var i=Object.keys(Object(a)),s=0,r=i.length;s<r;s+=1){var n=i[s],l=Object.getOwnPropertyDescriptor(a,n);void 0!==l&&l.enumerable&&(C(e[n])&&C(a[n])?S(e[n],a[n]):!C(e[n])&&C(a[n])?(e[n]={},S(e[n],a[n])):e[n]=a[n])}}return e}function M(e,t){Object.keys(t).forEach((function(a){C(t[a])&&Object.keys(t[a]).forEach((function(i){"function"==typeof t[a][i]&&(t[a][i]=t[a][i].bind(e))})),e[a]=t[a]}))}function z(){return g||(g=function(){var e=l(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var a=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,a)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function P(e){return void 0===e&&(e={}),y||(y=function(e){var t=(void 0===e?{}:e).userAgent,a=z(),i=l(),s=i.navigator.platform,r=t||i.navigator.userAgent,n={ios:!1,android:!1},o=i.screen.width,d=i.screen.height,p=r.match(/(Android);?[\s\/]+([\d.]+)?/),u=r.match(/(iPad).*OS\s([\d_]+)/),c=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v="Win32"===s,f="MacIntel"===s;return!u&&f&&a.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(o+"x"+d)>=0&&((u=r.match(/(Version)\/([\d.]+)/))||(u=[0,1,"13_0_0"]),f=!1),p&&!v&&(n.os="android",n.android=!0),(u||h||c)&&(n.os="ios",n.ios=!0),n}(e)),y}function k(){return w||(w=function(){var e,t=l();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),w}Object.keys(b).forEach((function(e){m.fn[e]=b[e]}));var L={name:"resize",create:function(){var e=this;S(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=l();t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(e){var t=l();t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},$={attach:function(e,t){void 0===t&&(t={});var a=l(),i=this,s=new(a.MutationObserver||a.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},I={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){M(this,{observer:t({},$,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function O(e){var t=this,a=r(),i=l(),s=t.touchEventsData,n=t.params,o=t.touches;if(!t.animating||!n.preventInteractionOnTransition){var d=e;d.originalEvent&&(d=d.originalEvent);var p=m(d.target);if("wrapper"!==n.touchEventsTarget||p.closest(t.wrapperEl).length)if(s.isTouchEvent="touchstart"===d.type,s.isTouchEvent||!("which"in d)||3!==d.which)if(!(!s.isTouchEvent&&"button"in d&&d.button>0))if(!s.isTouched||!s.isMoved)if(!!n.noSwipingClass&&""!==n.noSwipingClass&&d.target&&d.target.shadowRoot&&e.path&&e.path[0]&&(p=m(e.path[0])),n.noSwiping&&p.closest(n.noSwipingSelector?n.noSwipingSelector:"."+n.noSwipingClass)[0])t.allowClick=!0;else if(!n.swipeHandler||p.closest(n.swipeHandler)[0]){o.currentX="touchstart"===d.type?d.targetTouches[0].pageX:d.pageX,o.currentY="touchstart"===d.type?d.targetTouches[0].pageY:d.pageY;var u=o.currentX,c=o.currentY,h=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(!h||!(u<=v||u>=i.innerWidth-v)){if(S(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=c,s.touchStartTime=x(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==d.type){var f=!0;p.is(s.formElements)&&(f=!1),a.activeElement&&m(a.activeElement).is(s.formElements)&&a.activeElement!==p[0]&&a.activeElement.blur();var g=f&&t.allowTouchMove&&n.touchStartPreventDefault;!n.touchStartForcePreventDefault&&!g||p[0].isContentEditable||d.preventDefault()}t.emit("touchStart",d)}}}}function A(e){var t=r(),a=this,i=a.touchEventsData,s=a.params,n=a.touches,l=a.rtlTranslate,o=e;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===o.type){var d="touchmove"===o.type&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),p="touchmove"===o.type?d.pageX:o.pageX,u="touchmove"===o.type?d.pageY:o.pageY;if(o.preventedByNestedSwiper)return n.startX=p,void(n.startY=u);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(S(n,{startX:p,startY:u,currentX:p,currentY:u}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(u<n.startY&&a.translate<=a.maxTranslate()||u>n.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<n.startX&&a.translate<=a.maxTranslate()||p>n.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&o.target===t.activeElement&&m(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){n.currentX=p,n.currentY=u;var c=n.currentX-n.startX,h=n.currentY-n.startY;if(!(a.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(h,2))<a.params.threshold)){var v;if(void 0===i.isScrolling)a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:c*c+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(c))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle);if(i.isScrolling&&a.emit("touchMoveOpposite",o),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?c:h;n.diff=f,f*=s.touchRatio,l&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,y=s.resistanceRatio;if(s.touchReleaseOnEdges&&(y=0),f>0&&i.currentTranslate>a.minTranslate()?(g=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,y))):f<0&&i.currentTranslate<a.maxTranslate()&&(g=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,y))),g&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:n[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:n[a.isHorizontal()?"currentX":"currentY"],time:x()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",o)}function D(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,l=t.slidesGrid,o=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,u=x(),c=u-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),c<300&&u-a.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),a.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,!i.cssMode)if(i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-h.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,y=t.velocity*g,w=t.translate+y;r&&(w=-w);var b,T,C=!1,S=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-S&&(w=t.maxTranslate()-S),b=t.maxTranslate(),C=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>S&&(w=t.minTranslate()+S),b=t.minTranslate(),C=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(i.freeModeSticky){for(var M,z=0;z<o.length;z+=1)if(o[z]>-w){M=z;break}w=-(w=Math.abs(o[M]-w)<Math.abs(o[M-1]-w)||"next"===t.swipeDirection?o[M]:o[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity),i.freeModeSticky){var P=Math.abs((r?-w:w)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?i.speed:P<2*k?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&C?(t.updateProgress(b),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(b),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||c>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var L=0,$=t.slidesSizesGrid[0],I=0;I<l.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var O=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==l[I+O]?p>=l[I]&&p<l[I+O]&&(L=I,$=l[I+O]-l[I]):p>=l[I]&&(L=I,$=l[l.length-1]-l[l.length-2])}var A=(p-l[L])/$,D=L<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=i.longSwipesRatio?t.slideTo(L+D):t.slideTo(L)),"prev"===t.swipeDirection&&(A>1-i.longSwipesRatio?t.slideTo(L+D):t.slideTo(L))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo(L+D):t.slideTo(L):("next"===t.swipeDirection&&t.slideTo(L+D),"prev"===t.swipeDirection&&t.slideTo(L))}}}function G(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}function N(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this,t=e.wrapperEl,a=e.rtlTranslate;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=a?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}var H=!1;function X(){}var Y={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,nested:!1,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},V={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a];i.params&&S(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a],s=e[a]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(s)}))}},eventsEmitter:{on:function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once:function(e,t,a){var i=this;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,a)},onAny:function(e,t){var a=this;if("function"!=typeof e)return a;var i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off:function(e,t){var a=this;return a.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e]&&a.eventsListeners[e].forEach((function(i,s){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&a.eventsListeners[e].splice(s,1)}))})),a):a},emit:function(){var e,t,a,i=this;if(!i.eventsListeners)return i;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),a=i):(e=r[0].events,t=r[0].data,a=r[0].context||i),t.unshift(a);var l=Array.isArray(e)?e:e.split(" ");return l.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(a,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(a,t)}))})),i}},update:{updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width&&null!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height&&null!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),S(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=l(),a=e.params,i=e.$wrapperEl,s=e.size,r=e.rtlTranslate,n=e.wrongRTL,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,p=i.children("."+e.params.slideClass),u=o?e.virtual.slides.length:p.length,c=[],h=[],v=[];function f(e,t){return!a.cssMode||t!==p.length-1}var m=a.slidesOffsetBefore;"function"==typeof m&&(m=a.slidesOffsetBefore.call(e));var g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));var y=e.snapGrid.length,w=e.slidesGrid.length,b=a.spaceBetween,E=-m,x=0,T=0;if(void 0!==s){var C,M;"string"==typeof b&&b.indexOf("%")>=0&&(b=parseFloat(b.replace("%",""))/100*s),e.virtualSize=-b,r?p.css({marginLeft:"",marginTop:""}):p.css({marginRight:"",marginBottom:""}),a.slidesPerColumn>1&&(C=Math.floor(u/a.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/a.slidesPerColumn)*a.slidesPerColumn,"auto"!==a.slidesPerView&&"row"===a.slidesPerColumnFill&&(C=Math.max(C,a.slidesPerView*a.slidesPerColumn)));for(var z,P=a.slidesPerColumn,k=C/P,L=Math.floor(u/a.slidesPerColumn),$=0;$<u;$+=1){M=0;var I=p.eq($);if(a.slidesPerColumn>1){var O=void 0,A=void 0,D=void 0;if("row"===a.slidesPerColumnFill&&a.slidesPerGroup>1){var G=Math.floor($/(a.slidesPerGroup*a.slidesPerColumn)),N=$-a.slidesPerColumn*a.slidesPerGroup*G,B=0===G?a.slidesPerGroup:Math.min(Math.ceil((u-G*P*a.slidesPerGroup)/P),a.slidesPerGroup);O=(A=N-(D=Math.floor(N/B))*B+G*a.slidesPerGroup)+D*C/P,I.css({"-webkit-box-ordinal-group":O,"-moz-box-ordinal-group":O,"-ms-flex-order":O,"-webkit-order":O,order:O})}else"column"===a.slidesPerColumnFill?(D=$-(A=Math.floor($/P))*P,(A>L||A===L&&D===P-1)&&(D+=1)>=P&&(D=0,A+=1)):A=$-(D=Math.floor($/k))*k;I.css("margin-"+(e.isHorizontal()?"top":"left"),0!==D&&a.spaceBetween&&a.spaceBetween+"px")}if("none"!==I.css("display")){if("auto"===a.slidesPerView){var H=t.getComputedStyle(I[0],null),X=I[0].style.transform,Y=I[0].style.webkitTransform;if(X&&(I[0].style.transform="none"),Y&&(I[0].style.webkitTransform="none"),a.roundLengths)M=e.isHorizontal()?I.outerWidth(!0):I.outerHeight(!0);else if(e.isHorizontal()){var V=parseFloat(H.getPropertyValue("width")||0),F=parseFloat(H.getPropertyValue("padding-left")||0),R=parseFloat(H.getPropertyValue("padding-right")||0),W=parseFloat(H.getPropertyValue("margin-left")||0),q=parseFloat(H.getPropertyValue("margin-right")||0),j=H.getPropertyValue("box-sizing");if(j&&"border-box"===j)M=V+W+q;else{var _=I[0],U=_.clientWidth;M=V+F+R+W+q+(_.offsetWidth-U)}}else{var K=parseFloat(H.getPropertyValue("height")||0),Z=parseFloat(H.getPropertyValue("padding-top")||0),J=parseFloat(H.getPropertyValue("padding-bottom")||0),Q=parseFloat(H.getPropertyValue("margin-top")||0),ee=parseFloat(H.getPropertyValue("margin-bottom")||0),te=H.getPropertyValue("box-sizing");if(te&&"border-box"===te)M=K+Q+ee;else{var ae=I[0],ie=ae.clientHeight;M=K+Z+J+Q+ee+(ae.offsetHeight-ie)}}X&&(I[0].style.transform=X),Y&&(I[0].style.webkitTransform=Y),a.roundLengths&&(M=Math.floor(M))}else M=(s-(a.slidesPerView-1)*b)/a.slidesPerView,a.roundLengths&&(M=Math.floor(M)),p[$]&&(e.isHorizontal()?p[$].style.width=M+"px":p[$].style.height=M+"px");p[$]&&(p[$].swiperSlideSize=M),v.push(M),a.centeredSlides?(E=E+M/2+x/2+b,0===x&&0!==$&&(E=E-s/2-b),0===$&&(E=E-s/2-b),Math.abs(E)<.001&&(E=0),a.roundLengths&&(E=Math.floor(E)),T%a.slidesPerGroup==0&&c.push(E),h.push(E)):(a.roundLengths&&(E=Math.floor(E)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&c.push(E),h.push(E),E=E+M+b),e.virtualSize+=M+b,x=M,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+g,r&&n&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:e.virtualSize+a.spaceBetween+"px"}),a.setWrapperSize&&(e.isHorizontal()?i.css({width:e.virtualSize+a.spaceBetween+"px"}):i.css({height:e.virtualSize+a.spaceBetween+"px"})),a.slidesPerColumn>1&&(e.virtualSize=(M+a.spaceBetween)*C,e.virtualSize=Math.ceil(e.virtualSize/a.slidesPerColumn)-a.spaceBetween,e.isHorizontal()?i.css({width:e.virtualSize+a.spaceBetween+"px"}):i.css({height:e.virtualSize+a.spaceBetween+"px"}),a.centeredSlides)){z=[];for(var se=0;se<c.length;se+=1){var re=c[se];a.roundLengths&&(re=Math.floor(re)),c[se]<e.virtualSize+c[0]&&z.push(re)}c=z}if(!a.centeredSlides){z=[];for(var ne=0;ne<c.length;ne+=1){var le=c[ne];a.roundLengths&&(le=Math.floor(le)),c[ne]<=e.virtualSize-s&&z.push(le)}c=z,Math.floor(e.virtualSize-s)-Math.floor(c[c.length-1])>1&&c.push(e.virtualSize-s)}if(0===c.length&&(c=[0]),0!==a.spaceBetween&&(e.isHorizontal()?r?p.filter(f).css({marginLeft:b+"px"}):p.filter(f).css({marginRight:b+"px"}):p.filter(f).css({marginBottom:b+"px"})),a.centeredSlides&&a.centeredSlidesBounds){var oe=0;v.forEach((function(e){oe+=e+(a.spaceBetween?a.spaceBetween:0)}));var de=(oe-=a.spaceBetween)-s;c=c.map((function(e){return e<0?-m:e>de?de+g:e}))}if(a.centerInsufficientSlides){var pe=0;if(v.forEach((function(e){pe+=e+(a.spaceBetween?a.spaceBetween:0)})),(pe-=a.spaceBetween)<s){var ue=(s-pe)/2;c.forEach((function(e,t){c[t]=e-ue})),h.forEach((function(e,t){h[t]=e+ue}))}}S(e,{slides:p,snapGrid:c,slidesGrid:h,slidesSizesGrid:v}),u!==d&&e.emit("slidesLengthChange"),c.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==w&&e.emit("slidesGridLengthChange"),(a.watchSlidesProgress||a.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&a.params.slidesPerView>1)if(a.params.centeredSlides)a.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=n>s?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var l=i[n],o=(r+(a.centeredSlides?t.minTranslate():0)-l.swiperSlideOffset)/(l.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility||a.centeredSlides&&a.autoHeight){var d=-(r-l.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}l.progress=s?-o:o}t.visibleSlides=m(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var a=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*a||0}var i=t.params,s=t.maxTranslate()-t.minTranslate(),r=t.progress,n=t.isBeginning,l=t.isEnd,o=n,d=l;0===s?(r=0,n=!0,l=!0):(n=(r=(e-t.minTranslate())/s)<=0,l=r>=1),S(t,{progress:r,isBeginning:n,isEnd:l}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),n&&!o&&t.emit("reachBeginning toEdge"),l&&!d&&t.emit("reachEnd toEdge"),(o&&!n||d&&!l)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,l=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=l?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,l=a.activeIndex,o=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?p=u:i>=s[u]&&i<s[u+1]&&(p=u+1):i>=s[u]&&(p=u);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(r.indexOf(i)>=0)t=r.indexOf(i);else{var c=Math.min(n.slidesPerGroupSkip,p);t=c+Math.floor((p-c)/n.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),p!==l){var h=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);S(a,{snapIndex:t,realIndex:h,previousIndex:l,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),o!==h&&a.emit("realIndexChange"),(a.initialized||a.params.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=m(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(m(i).attr("data-swiper-slide-index"),10):t.clickedIndex=m(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtlTranslate,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;if(a.cssMode)return s;var n=T(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.wrapperEl,l=a.progress,o=0,d=0;a.isHorizontal()?o=i?-e:e:d=e,s.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-o:-d:s.virtualTranslate||r.transform("translate3d("+o+"px, "+d+"px, 0px)"),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:d;var p=a.maxTranslate()-a.minTranslate();(0===p?0:(e-a.minTranslate())/p)!==l&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,a,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),void 0===i&&(i=!0);var r=this,n=r.params,l=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var o,d=r.minTranslate(),p=r.maxTranslate();if(o=i&&e>d?d:i&&e<p?p:e,r.updateProgress(o),n.cssMode){var u,c=r.isHorizontal();if(0===t)l[c?"scrollLeft":"scrollTop"]=-o;else if(l.scrollTo)l.scrollTo(((u={})[c?"left":"top"]=-o,u.behavior="smooth",u));else l[c?"scrollLeft":"scrollTop"]=-o;return!0}return 0===t?(r.setTransition(0),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,a&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){var a=this;a.params.cssMode||a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;if(!s.cssMode){s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=i>r?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex,r=a.params;if(a.animating=!1,!r.cssMode){a.setTransition(0);var n=t;if(n||(n=i>s?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===n)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===n?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var s=parseInt(e,10);if(!isFinite(s))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=s}var r=this,n=e;n<0&&(n=0);var l=r.params,o=r.snapGrid,d=r.slidesGrid,p=r.previousIndex,u=r.activeIndex,c=r.rtlTranslate,h=r.wrapperEl;if(r.animating&&l.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=o.length&&(f=o.length-1),(u||l.initialSlide||0)===(p||0)&&a&&r.emit("beforeSlideChangeStart");var m,g=-o[f];if(r.updateProgress(g),l.normalizeSlideIndex)for(var y=0;y<d.length;y+=1)-Math.floor(100*g)>=Math.floor(100*d[y])&&(n=y);if(r.initialized&&n!==u){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(u||0)!==n)return!1}if(m=n>u?"next":n<u?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(a,m),r.transitionEnd(a,m)),!1;if(l.cssMode){var w,b=r.isHorizontal(),E=-g;if(c&&(E=h.scrollWidth-h.offsetWidth-E),0===t)h[b?"scrollLeft":"scrollTop"]=E;else if(h.scrollTo)h.scrollTo(((w={})[b?"left":"top"]=E,w.behavior="smooth",w));else h[b?"scrollLeft":"scrollTop"]=E;return!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,m),r.transitionEnd(a,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(a,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;return s.params.loop&&(r+=s.loopedSlides),s.slideTo(r,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+n,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,l=i.slidesGrid,o=i.rtlTranslate;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,u=d(o?i.translate:-i.translate),c=n.map((function(e){return d(e)})),h=(n[c.indexOf(u)],n[c.indexOf(u)-1]);return void 0===h&&s.cssMode&&n.forEach((function(e){!h&&u>=e&&(h=e)})),void 0!==h&&(p=l.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var s=this,r=s.activeIndex,n=Math.min(s.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/s.params.slidesPerGroup),o=s.rtlTranslate?s.translate:-s.translate;if(o>=s.snapGrid[l]){var d=s.snapGrid[l];o-d>(s.snapGrid[l+1]-d)*i&&(r+=s.params.slidesPerGroup)}else{var p=s.snapGrid[l-1];o-p<=(s.snapGrid[l]-p)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),a=e.params,i=e.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var n=a.slidesPerGroup-s.length%a.slidesPerGroup;if(n!==a.slidesPerGroup){for(var l=0;l<n;l+=1){var o=m(t.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(a.loopedSlides||a.slidesPerView,10)),e.loopedSlides+=a.loopAdditionalSlides,e.loopedSlides>s.length&&(e.loopedSlides=s.length);var d=[],p=[];s.each((function(t,a){var i=m(t);a<e.loopedSlides&&p.push(t),a<s.length&&a>=s.length-e.loopedSlides&&d.push(t),i.attr("data-swiper-slide-index",a)}));for(var u=0;u<p.length;u+=1)i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,a=e.activeIndex,i=e.slides,s=e.loopedSlides,r=e.allowSlidePrev,n=e.allowSlideNext,l=e.snapGrid,o=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var d=-l[a]-e.getTranslate();if(a<s)t=i.length-3*s+a,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d);else if(a>=i.length-s){t=-i.length+a+s,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d)}e.allowSlidePrev=r,e.allowSlideNext=n,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass+",."+a.slideClass+"."+a.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(e>=n)a.appendSlide(t);else{for(var l=r>e?r+1:r,o=[],d=n-1;d>=e;d-=1){var p=a.slides.eq(d);p.remove(),o.unshift(p)}if("object"==typeof t&&"length"in t){for(var u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);l=r>e?r+t.length:r}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&a.loopCreate(),s.observer&&a.support.observer||a.update(),s.loop?a.slideTo(l+a.loopedSlides,0,!1):a.slideTo(l,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var l=0;l<e.length;l+=1)r=e[l],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support;e.onTouchStart=O.bind(e),e.onTouchMove=A.bind(e),e.onTouchEnd=D.bind(e),a.cssMode&&(e.onScroll=B.bind(e)),e.onClick=N.bind(e);var d=!!a.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,d),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("touchstart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,e.onTouchStart,p),s.addEventListener(i.move,e.onTouchMove,o.passiveListener?{passive:!1,capture:d}:d),s.addEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.addEventListener(i.cancel,e.onTouchEnd,p),H||(t.addEventListener("touchstart",X),H=!0)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,d),t.addEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.addEventListener("click",e.onClick,!0),a.cssMode&&n.addEventListener("scroll",e.onScroll),a.updateOnWindowResize?e.on(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):e.on("observerUpdate",G,!0)},detachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support,d=!!a.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,d),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("onTouchStart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,e.onTouchStart,p),s.removeEventListener(i.move,e.onTouchMove,d),s.removeEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.removeEventListener(i.cancel,e.onTouchEnd,p)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,d),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.removeEventListener("click",e.onClick,!0),a.cssMode&&n.removeEventListener("scroll",e.onScroll),e.off(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides,s=void 0===i?0:i,r=e.params,n=e.$el,l=r.breakpoints;if(l&&(!l||0!==Object.keys(l).length)){var o=e.getBreakpoint(l);if(o&&e.currentBreakpoint!==o){var d=o in l?l[o]:void 0;d&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=d[e];void 0!==t&&(d[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var p=d||e.originalParams,u=r.slidesPerColumn>1,c=p.slidesPerColumn>1;u&&!c?(n.removeClass(r.containerModifierClass+"multirow "+r.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!u&&c&&(n.addClass(r.containerModifierClass+"multirow"),"column"===p.slidesPerColumnFill&&n.addClass(r.containerModifierClass+"multirow-column"),e.emitContainerClasses());var h=p.direction&&p.direction!==r.direction,v=r.loop&&(p.slidesPerView!==r.slidesPerView||h);h&&a&&e.changeDirection(),S(e.params,p),S(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",p),v&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-s+e.loopedSlides,0,!1)),e.emit("breakpoint",p)}}},getBreakpoint:function(e){var t=l();if(e){var a=!1,i=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var a=parseFloat(e.substr(1));return{value:t.innerHeight*a,point:e}}return{value:e,point:e}}));i.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var s=0;s<i.length;s+=1){var r=i[s],n=r.point;r.value<=t.innerWidth&&(a=n)}return a||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.params,a=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,a!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),a&&a!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:{addClasses:function(){var e=this,t=e.classNames,a=e.params,i=e.rtl,s=e.$el,r=e.device,n=[];n.push("initialized"),n.push(a.direction),a.freeMode&&n.push("free-mode"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&(n.push("multirow"),"column"===a.slidesPerColumnFill&&n.push("multirow-column")),r.android&&n.push("android"),r.ios&&n.push("ios"),a.cssMode&&n.push("css-mode"),n.forEach((function(e){t.push(a.containerModifierClass+e)})),s.addClass(t.join(" ")),e.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" ")),e.emitContainerClasses()}},images:{loadImage:function(e,t,a,i,s,r){var n,o=l();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&s?d():t?((n=new o.Image).onload=d,n.onerror=d,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},F={},R=function(){function t(){for(var e,a,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];1===s.length&&s[0].constructor&&s[0].constructor===Object?a=s[0]:(e=s[0],a=s[1]),a||(a={}),a=S({},a),e&&!a.el&&(a.el=e);var n=this;n.support=z(),n.device=P({userAgent:a.userAgent}),n.browser=k(),n.eventsListeners={},n.eventsAnyListeners=[],void 0===n.modules&&(n.modules={}),Object.keys(n.modules).forEach((function(e){var t=n.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in a)||!("enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}}));var l=S({},Y);n.useParams(l),n.params=S({},l,F,a),n.originalParams=S({},n.params),n.passedParams=S({},a),n.params&&n.params.on&&Object.keys(n.params.on).forEach((function(e){n.on(e,n.params.on[e])})),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=m;var o=m(n.params.el);if(e=o[0]){if(o.length>1){var d=[];return o.each((function(e){var i=S({},a,{el:e});d.push(new t(i))})),d}var p,u,c;return e.swiper=n,e&&e.shadowRoot&&e.shadowRoot.querySelector?(p=m(e.shadowRoot.querySelector("."+n.params.wrapperClass))).children=function(e){return o.children(e)}:p=o.children("."+n.params.wrapperClass),S(n,{$el:o,el:e,$wrapperEl:p,wrapperEl:p[0],classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===n.params.direction},isVertical:function(){return"vertical"===n.params.direction},rtl:"rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===n.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===p.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:(u=["touchstart","touchmove","touchend","touchcancel"],c=["mousedown","mousemove","mouseup"],n.support.pointerEvents&&(c=["pointerdown","pointermove","pointerup"]),n.touchEventsTouch={start:u[0],move:u[1],end:u[2],cancel:u[3]},n.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.useModules(),n.emit("_swiper"),n.params.init&&n.init(),n}}var a,i,s,r=t.prototype;return r.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},r.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},r.emitSlidesClasses=function(){var e=this;e.params._emitClasses&&e.el&&e.slides.each((function(t){var a=e.getSlideClasses(t);e.emit("_slideClass",t,a)}))},r.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var l,o=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!l&&(n+=1,(o+=a[d].swiperSlideSize)>s&&(l=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!l&&(n+=1,(o+=a[p].swiperSlideSize)>s&&(l=!0))}else for(var u=r+1;u<a.length;u+=1)i[u]-i[r]<s&&(n+=1);return n},r.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,a=e.params;a.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),a.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,a=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}},r.changeDirection=function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(a.$el.removeClass(""+a.params.containerModifierClass+i).addClass(""+a.params.containerModifierClass+e),a.emitContainerClasses(),a.params.direction=e,a.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),a.emit("changeDirection"),t&&a.update()),a},r.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"),e.emit("afterInit"))},r.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a,i=this,s=i.params,r=i.$el,n=i.$wrapperEl,l=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,a=i,Object.keys(a).forEach((function(e){try{a[e]=null}catch(e){}try{delete a[e]}catch(e){}}))),i.destroyed=!0),null},t.extendDefaults=function(e){S(F,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var a=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[a]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},a=t,s=[{key:"extendedDefaults",get:function(){return F}},{key:"defaults",get:function(){return Y}}],(i=null)&&e(a.prototype,i),s&&e(a,s),t}();Object.keys(V).forEach((function(e){Object.keys(V[e]).forEach((function(t){R.prototype[t]=V[e][t]}))})),R.use([L,I]);var W={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,l=n.addSlidesBefore,o=n.addSlidesAfter,d=t.virtual,p=d.from,u=d.to,c=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,y,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,y=Math.floor(i/2)+s+l):(g=i+(s-1)+o,y=s+l);var b=Math.max((w||0)-y,0),E=Math.min((w||0)+g,c.length-1),x=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(S(t.virtual,{from:b,to:E,offset:x,slidesGrid:t.slidesGrid}),p===b&&u===E&&!e)return t.slidesGrid!==h&&x!==f&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:b,to:E,slides:function(){for(var e=[],t=b;t<=E;t+=1)e.push(c[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=p;z<=u;z+=1)(z<b||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<c.length;P+=1)P>=b&&P<=E&&(void 0===u||e?M.push(P):(P>u&&M.push(P),P<p&&C.push(P)));M.forEach((function(e){t.$wrapperEl.append(v(c[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(v(c[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(a,e,t)):m('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){var t=this;if("object"==typeof e&&"length"in e)for(var a=0;a<e.length;a+=1)e[a]&&t.virtual.slides.push(e[a]);else t.virtual.slides.push(e);t.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,l={};Object.keys(n).forEach((function(e){var t=n[e],a=t.attr("data-swiper-slide-index");a&&t.attr("data-swiper-slide-index",parseInt(a,10)+1),l[parseInt(e,10)+s]=t})),t.virtual.cache=l}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},q={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){M(this,{virtual:t({},W,{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};S(e.params,t),S(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},j={handle:function(e){var t=this,a=l(),i=r(),s=t.rtlTranslate,n=e;n.originalEvent&&(n=n.originalEvent);var o=n.keyCode||n.charCode,d=t.params.keyboard.pageUpDown,p=d&&33===o,u=d&&34===o,c=37===o,h=39===o,v=38===o,f=40===o;if(!t.allowSlideNext&&(t.isHorizontal()&&h||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&c||t.isVertical()&&v||p))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(p||u||c||h||v||f)){var m=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var g=a.innerWidth,y=a.innerHeight,w=t.$el.offset();s&&(w.left-=t.$el[0].scrollLeft);for(var b=[[w.left,w.top],[w.left+t.width,w.top],[w.left,w.top+t.height],[w.left+t.width,w.top+t.height]],E=0;E<b.length;E+=1){var x=b[E];if(x[0]>=0&&x[0]<=g&&x[1]>=0&&x[1]<=y){if(0===x[0]&&0===x[1])continue;m=!0}}if(!m)return}t.isHorizontal()?((p||u||c||h)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((u||h)&&!s||(p||c)&&s)&&t.slideNext(),((p||c)&&!s||(u||h)&&s)&&t.slidePrev()):((p||u||v||f)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(u||f)&&t.slideNext(),(p||v)&&t.slidePrev()),t.emit("keyPress",o)}},enable:function(){var e=this,t=r();e.keyboard.enabled||(m(t).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,t=r();e.keyboard.enabled&&(m(t).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}},_={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){M(this,{keyboard:t({enabled:!1},j)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var U={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return l().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel",a=t in e;if(!a){var i=e.createElement("div");i.setAttribute(t,"return;"),a="function"==typeof i.onwheel}return!a&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(a=e.implementation.hasFeature("Events.wheel","3.0")),a}()?"wheel":"mousewheel"},normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),e.shiftKey&&!i&&(i=s,s=0),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;a.params.cssMode&&t.preventDefault();var s=a.$el;if("container"!==a.params.mousewheel.eventsTarget&&(s=m(a.params.mousewheel.eventsTarget)),!a.mouseEntered&&!s[0].contains(t.target)&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtlTranslate?-1:1,l=U.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*n}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*n:-l.pixelY;if(0===r)return!0;i.invert&&(r=-r);var o=a.getTranslate()+r*i.sensitivity;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),(!!a.params.loop||!(o===a.minTranslate()||o===a.maxTranslate()))&&a.params.nested&&t.stopPropagation(),a.params.freeMode){var d={time:x(),delta:Math.abs(r),direction:Math.sign(r)},p=a.mousewheel.lastEventBeforeSnap,u=p&&d.time<p.time+500&&d.delta<=p.delta&&d.direction===p.direction;if(!u){a.mousewheel.lastEventBeforeSnap=void 0,a.params.loop&&a.loopFix();var c=a.getTranslate()+r*i.sensitivity,h=a.isBeginning,v=a.isEnd;if(c>=a.minTranslate()&&(c=a.minTranslate()),c<=a.maxTranslate()&&(c=a.maxTranslate()),a.setTransition(0),a.setTranslate(c),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!h&&a.isBeginning||!v&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky){clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=void 0;var f=a.mousewheel.recentWheelEvents;f.length>=15&&f.shift();var g=f.length?f[f.length-1]:void 0,y=f[0];if(f.push(d),g&&(d.delta>g.delta||d.direction!==g.direction))f.splice(0);else if(f.length>=15&&d.time-y.time<500&&y.delta-d.delta>=1&&d.delta<=6){var w=r>0?.8:.2;a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.mousewheel.timeout=E((function(){a.slideToClosest(a.params.speed,!0,void 0,w)}),0)}a.mousewheel.timeout||(a.mousewheel.timeout=E((function(){a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.slideToClosest(a.params.speed,!0,void 0,.5)}),500))}if(u||a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),c===a.minTranslate()||c===a.maxTranslate())return!0}}else{var b={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},T=a.mousewheel.recentWheelEvents;T.length>=2&&T.shift();var C=T.length?T[T.length-1]:void 0;if(T.push(b),C?(b.direction!==C.direction||b.delta>C.delta||b.time>C.time+150)&&a.mousewheel.animateSlider(b):a.mousewheel.animateSlider(b),a.mousewheel.releaseScroll(b))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){var t=this,a=l();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-t.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-t.mousewheel.lastScrollTime<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),t.emit("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),t.emit("scroll",e.raw)),t.mousewheel.lastScrollTime=(new a.Date).getTime(),!1)))},releaseScroll:function(e){var t=this,a=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&a.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&a.releaseOnEdges)return!0;return!1},enable:function(){var e=this,t=U.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.on("mouseenter",e.mousewheel.handleMouseEnter),a.on("mouseleave",e.mousewheel.handleMouseLeave),a.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,t=U.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(!e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},K={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&s.length>0&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",a.navigation.onNextClick),t&&t.length>0&&t.on("click",a.navigation.onPrevClick),S(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},Z={update:function(){var e=this,t=e.rtl,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,n=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(i-=s-2*e.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==e.params.paginationType&&(i=n+i)):i=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===a.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var l,o,d,p=e.pagination.bullets;if(a.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(a.dynamicMainBullets+4)+"px"),a.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>a.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=a.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),l=i-e.pagination.dynamicBulletIndex,d=((o=l+(Math.min(p.length,a.dynamicMainBullets)-1))+l)/2),p.removeClass(a.bulletActiveClass+" "+a.bulletActiveClass+"-next "+a.bulletActiveClass+"-next-next "+a.bulletActiveClass+"-prev "+a.bulletActiveClass+"-prev-prev "+a.bulletActiveClass+"-main"),r.length>1)p.each((function(e){var t=m(e),s=t.index();s===i&&t.addClass(a.bulletActiveClass),a.dynamicBullets&&(s>=l&&s<=o&&t.addClass(a.bulletActiveClass+"-main"),s===l&&t.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),s===o&&t.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next"))}));else{var u=p.eq(i),c=u.index();if(u.addClass(a.bulletActiveClass),a.dynamicBullets){for(var h=p.eq(l),v=p.eq(o),f=l;f<=o;f+=1)p.eq(f).addClass(a.bulletActiveClass+"-main");if(e.params.loop)if(c>=p.length-a.dynamicMainBullets){for(var g=a.dynamicMainBullets;g>=0;g-=1)p.eq(p.length-g).addClass(a.bulletActiveClass+"-main");p.eq(p.length-a.dynamicMainBullets-1).addClass(a.bulletActiveClass+"-prev")}else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next");else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next")}}if(a.dynamicBullets){var y=Math.min(p.length,a.dynamicMainBullets+4),w=(e.pagination.bulletSize*y-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,b=t?"right":"left";p.css(e.isHorizontal()?b:"top",w+"px")}}if("fraction"===a.type&&(r.find("."+a.currentClass).text(a.formatFractionCurrent(i+1)),r.find("."+a.totalClass).text(a.formatFractionTotal(n))),"progressbar"===a.type){var E;E=a.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,C=1;"horizontal"===E?T=x:C=x,r.find("."+a.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+C+")").transition(e.params.speed)}"custom"===a.type&&a.renderCustom?(r.html(a.renderCustom(e,i+1,n)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),r[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](a.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass.replace(/ /g,"."))}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var a=m(t.el);0!==a.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&a.length>1&&(a=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&a.addClass(t.clickableClass),a.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(a.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&a.addClass(t.progressbarOppositeClass),t.clickable&&a.on("click","."+t.bulletClass.replace(/ /g,"."),(function(t){t.preventDefault();var a=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(a+=e.loopedSlides),e.slideTo(a)})),S(e.pagination,{$el:a,el:a[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass.replace(/ /g,"."))}}},J={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,l=t.$el,o=e.params.scrollbar,d=s,p=(r-s)*i;a?(p=-p)>0?(d=s-p,p=0):-p+s>r&&(d=r+p):p<0?(d=s+p,p=0):p+s>r&&(d=r-p),e.isHorizontal()?(n.transform("translate3d("+p+"px, 0, 0)"),n[0].style.width=d+"px"):(n.transform("translate3d(0px, "+p+"px, 0)"),n[0].style.height=d+"px"),o.hide&&(clearTimeout(e.scrollbar.timeout),l[0].style.opacity=1,e.scrollbar.timeout=setTimeout((function(){l[0].style.opacity=0,l.transition(400)}),1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,l=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),S(t,{trackSize:r,divider:n,moveDivider:l,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,l=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==o?o:n/2))/(l-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),s.transition("")),a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=E((function(){r.css("opacity",0),r.transition(400)}),1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};l.touch?(o.addEventListener(i.start,e.scrollbar.onDragStart,d),o.addEventListener(i.move,e.scrollbar.onDragMove,d),o.addEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.addEventListener(s.start,e.scrollbar.onDragStart,d),t.addEventListener(s.move,e.scrollbar.onDragMove,d),t.addEventListener(s.end,e.scrollbar.onDragEnd,p))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};l.touch?(o.removeEventListener(i.start,e.scrollbar.onDragStart,d),o.removeEventListener(i.move,e.scrollbar.onDragMove,d),o.removeEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.removeEventListener(s.start,e.scrollbar.onDragStart,d),t.removeEventListener(s.move,e.scrollbar.onDragMove,d),t.removeEventListener(s.end,e.scrollbar.onDragEnd,p))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=m(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=m('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),S(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},Q={setTransform:function(e,t){var a=this.rtl,i=m(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),l=i.attr("data-swiper-parallax-y"),o=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||l?(n=n||"0",l=l||"0"):this.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*s+"%":n*t*s+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==o)i.transform("translate3d("+n+", "+l+", 0px)");else{var u=o-(o-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+l+", 0px) scale("+u+")")}},setTranslate:function(){var e=this,t=e.$el,a=e.slides,i=e.progress,s=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,i)})),a.each((function(t,a){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(a/2)-i*(s.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var a=m(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),a.transition(i)}))}},ee={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!a.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=ee.getDistanceBetweenTouches(e)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=m(e.target).closest("."+t.params.slideClass),0===r.$slideEl.length&&(r.$slideEl=t.slides.eq(t.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl&&r.$imageEl.transition(0),t.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(!a.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,r.scaleMove=ee.getDistanceBetweenTouches(e)}r.$imageEl&&0!==r.$imageEl.length?(a.gestures?s.scale=e.scale*s.currentScale:s.scale=r.scaleMove/r.scaleStart*s.currentScale,s.scale>r.maxRatio&&(s.scale=r.maxRatio-1+Math.pow(s.scale-r.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),r.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this,a=t.device,i=t.support,s=t.params.zoom,r=t.zoom,n=r.gesture;if(!i.gestures){if(!r.fakeGestureTouched||!r.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!a.android)return;r.fakeGestureTouched=!1,r.fakeGestureMoved=!1}n.$imageEl&&0!==n.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,n.maxRatio),s.minRatio),n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+r.scale+")"),r.currentScale=r.scale,r.isScaling=!1,1===r.scale&&(n.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,a=this.zoom,i=a.gesture,s=a.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(t.android&&e.cancelable&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,l=s.height*a.scale;if(!(n<i.slideWidth&&l<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-l/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,l=a.currentX+n,o=i.y*r,d=a.currentY+o;0!==i.x&&(s=Math.abs((l-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=l,a.currentY=d;var u=a.width*e.scale,c=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-u/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-c/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl&&a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl&&a.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,t.currentScale=1,a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,l,o,d,p,u,c,h,v,f,m,g=this,y=g.zoom,w=g.params.zoom,b=y.gesture,E=y.image;(b.$slideEl||(g.params.virtual&&g.params.virtual.enabled&&g.virtual?b.$slideEl=g.$wrapperEl.children("."+g.params.slideActiveClass):b.$slideEl=g.slides.eq(g.activeIndex),b.$imageEl=b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),b.$imageWrapEl=b.$imageEl.parent("."+w.containerClass)),b.$imageEl&&0!==b.$imageEl.length)&&(b.$slideEl.addClass(""+w.zoomedSlideClass),void 0===E.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=E.touchesStart.x,a=E.touchesStart.y),y.scale=b.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,y.currentScale=b.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=b.$slideEl[0].offsetWidth,m=b.$slideEl[0].offsetHeight,i=b.$slideEl.offset().left+f/2-t,s=b.$slideEl.offset().top+m/2-a,l=b.$imageEl[0].offsetWidth,o=b.$imageEl[0].offsetHeight,d=l*y.scale,p=o*y.scale,h=-(u=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-p/2,0)),(r=i*y.scale)<u&&(r=u),r>h&&(r=h),(n=s*y.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),b.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),b.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+y.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?i.$slideEl=e.$wrapperEl.children("."+e.params.slideActiveClass):i.$slideEl=e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this,a=t.zoom,i=a.slideSelector,s=a.passiveListener;t.$wrapperEl[e]("gesturestart",i,a.onGestureStart,s),t.$wrapperEl[e]("gesturechange",i,a.onGestureChange,s),t.$wrapperEl[e]("gestureend",i,a.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this,t=e.support,a=e.zoom;if(!a.enabled){a.enabled=!0;var i=!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;e.zoom.passiveListener=i,e.zoom.slideSelector=r,t.gestures?(e.$wrapperEl.on(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.on(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,a.onGestureStart,i),e.$wrapperEl.on(e.touchEvents.move,r,a.onGestureChange,s),e.$wrapperEl.on(e.touchEvents.end,r,a.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,a.onGestureEnd,i)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,a.onTouchMove,s)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){var a=e.support;e.zoom.enabled=!1;var i=!("touchstart"!==e.touchEvents.start||!a.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!a.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;a.gestures?(e.$wrapperEl.off(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.off(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,t.onGestureStart,i),e.$wrapperEl.off(e.touchEvents.move,r,t.onGestureChange,s),e.$wrapperEl.off(e.touchEvents.end,r,t.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,t.onGestureEnd,i)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove,s)}}},te={loadInSlide:function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.lazy;if(void 0!==e&&0!==a.slides.length){var s=a.virtual&&a.params.virtual.enabled?a.$wrapperEl.children("."+a.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):a.slides.eq(e),r=s.find("."+i.elementClass+":not(."+i.loadedClass+"):not(."+i.loadingClass+")");!s.hasClass(i.elementClass)||s.hasClass(i.loadedClass)||s.hasClass(i.loadingClass)||r.push(s[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(i.loadingClass);var n=r.attr("data-background"),l=r.attr("data-src"),o=r.attr("data-srcset"),d=r.attr("data-sizes"),p=r.parent("picture");a.loadImage(r[0],l||n,o,d,!1,(function(){if(null!=a&&a&&(!a||a.params)&&!a.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(o&&(r.attr("srcset",o),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),p.length&&p.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),l&&(r.attr("src",l),r.removeAttr("data-src"))),r.addClass(i.loadedClass).removeClass(i.loadingClass),s.find("."+i.preloaderClass).remove(),a.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(a.params.slideDuplicateClass)){var u=a.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+a.params.slideDuplicateClass+")");a.lazy.loadInSlide(u.index(),!1)}else{var c=a.$wrapperEl.children("."+a.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');a.lazy.loadInSlide(c.index(),!1)}}a.emit("lazyImageReady",s[0],r[0]),a.params.autoHeight&&a.updateAutoHeight()}})),a.emit("lazyImageLoad",s[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides,s=e.activeIndex,r=e.virtual&&a.virtual.enabled,n=a.lazy,l=a.slidesPerView;function o(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(i[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each((function(t){var a=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=s;p<s+l;p+=1)o(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(s);if(n.loadPrevNext)if(l>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var u=n.loadPrevNextAmount,c=l,h=Math.min(s+c+Math.max(u,c),i.length),v=Math.max(s-Math.max(c,u),0),f=s+l;f<h;f+=1)o(f)&&e.lazy.loadInSlide(f);for(var g=v;g<s;g+=1)o(g)&&e.lazy.loadInSlide(g)}else{var y=t.children("."+a.slideNextClass);y.length>0&&e.lazy.loadInSlide(d(y));var w=t.children("."+a.slidePrevClass);w.length>0&&e.lazy.loadInSlide(d(w))}},checkInViewOnLoad:function(){var e=l(),t=this;if(t&&!t.destroyed){var a=t.params.lazy.scrollingElement?m(t.params.lazy.scrollingElement):m(e),i=a[0]===e,s=i?e.innerWidth:a[0].offsetWidth,r=i?e.innerHeight:a[0].offsetHeight,n=t.$el.offset(),o=!1;t.rtlTranslate&&(n.left-=t.$el[0].scrollLeft);for(var d=[[n.left,n.top],[n.left+t.width,n.top],[n.left,n.top+t.height],[n.left+t.width,n.top+t.height]],p=0;p<d.length;p+=1){var u=d[p];if(u[0]>=0&&u[0]<=s&&u[1]>=0&&u[1]<=r){if(0===u[0]&&0===u[1])continue;o=!0}}o?(t.lazy.load(),a.off("scroll",t.lazy.checkInViewOnLoad)):t.lazy.scrollHandlerAttached||(t.lazy.scrollHandlerAttached=!0,a.on("scroll",t.lazy.checkInViewOnLoad))}}},ae={LinearSpline:function(e,t){var a,i,s,r,n,l=function(e,t){for(i=-1,a=e.length;a-i>1;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=l(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new ae.LinearSpline(t.slidesGrid,e.slidesGrid):new ae.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control,n=s.constructor;function l(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof n&&l(r[o]);else r instanceof n&&t!==r&&l(r)},setTransition:function(e,t){var a,i=this,s=i.constructor,r=i.controller.control;function n(t){t.setTransition(e,i),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===i.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(a=0;a<r.length;a+=1)r[a]!==t&&r[a]instanceof s&&n(r[a]);else r instanceof s&&t!==r&&n(r)}},ie={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-role-description",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=m(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass.replace(/ /g,"."))&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop&&e.navigation){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?(e.a11y.disableEl(i),e.a11y.makeElNotFocusable(i)):(e.a11y.enableEl(i),e.a11y.makeElFocusable(i))),a&&a.length>0&&(e.isEnd?(e.a11y.disableEl(a),e.a11y.makeElNotFocusable(a)):(e.a11y.enableEl(a),e.a11y.makeElFocusable(a)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(a){var i=m(a);e.a11y.makeElFocusable(i),e.params.pagination.renderBullet||(e.a11y.addElRole(i,"button"),e.a11y.addElLabel(i,t.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var a=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(a,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(a,t.containerMessage);var i,s,r,n=e.$wrapperEl,l=n.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16);e.a11y.addElId(n,l),i=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite",e.a11y.addElLive(n,i),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),"group"),e.slides.each((function(t){var a=m(t);e.a11y.addElLabel(a,a.index()+1+" / "+e.slides.length)})),e.navigation&&e.navigation.$nextEl&&(s=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(r=e.navigation.$prevEl),s&&s.length&&(e.a11y.makeElFocusable(s),"BUTTON"!==s[0].tagName&&(e.a11y.addElRole(s,"button"),s.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(s,t.nextSlideMessage),e.a11y.addElControls(s,l)),r&&r.length&&(e.a11y.makeElFocusable(r),"BUTTON"!==r[0].tagName&&(e.a11y.addElRole(r,"button"),r.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(r,t.prevSlideMessage),e.a11y.addElControls(r,l)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass.replace(/ /g,"."),e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&a.a11y.liveRegion.length>0&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass.replace(/ /g,"."),a.a11y.onEnterKey)}},se={init:function(){var e=this,t=l();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var a=e.history;a.initialized=!0,a.paths=se.getPathValues(e.params.url),(a.paths.key||a.paths.value)&&(a.scrollToSlide(0,a.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=l();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=se.getPathValues(e.params.url),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(e){var t=l(),a=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),i=a.length;return{key:a[i-2],value:a[i-1]}},setHistory:function(e,t){var a=this,i=l();if(a.history.initialized&&a.params.history.enabled){var s;s=a.params.url?new URL(a.params.url):i.location;var r=a.slides.eq(t),n=se.slugify(r.attr("data-history"));s.pathname.includes(e)||(n=e+"/"+n);var o=i.history.state;o&&o.value===n||(a.params.history.replaceState?i.history.replaceState({value:n},null,n):i.history.pushState({value:n},null,n))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(se.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var l=n.index();i.slideTo(l,e,a)}}else i.slideTo(0,e,a)}},re={onHashCange:function(){var e=this,t=r();e.emit("hashChange");var a=t.location.hash.replace("#","");if(a!==e.slides.eq(e.activeIndex).attr("data-hash")){var i=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+a+'"]').index();if(void 0===i)return;e.slideTo(i)}},setHash:function(){var e=this,t=l(),a=r();if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||""),e.emit("hashSet");else{var i=e.slides.eq(e.activeIndex),s=i.attr("data-hash")||i.attr("data-history");a.location.hash=s||"",e.emit("hashSet")}},init:function(){var e=this,t=r(),a=l();if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var i=t.location.hash.replace("#","");if(i)for(var s=0,n=e.slides.length;s<n;s+=1){var o=e.slides.eq(s);if((o.attr("data-hash")||o.attr("data-history"))===i&&!o.hasClass(e.params.slideDuplicateClass)){var d=o.index();e.slideTo(d,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&m(a).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){var e=l();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashCange)}},ne={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=r();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}},le={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd((function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}}))}}},oe={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,l=t.rtlTranslate,o=t.size,d=t.browser,p=t.params.cubeEffect,u=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,h=0;p.shadow&&(u?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var v=0;v<s.length;v+=1){var f=s.eq(v),g=v;c&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var y=90*g,w=Math.floor(y/360);l&&(y=-y,w=Math.floor(-y/360));var b=Math.max(Math.min(f[0].progress,1),-1),E=0,x=0,T=0;g%4==0?(E=4*-w*o,T=0):(g-1)%4==0?(E=0,T=4*-w*o):(g-2)%4==0?(E=o+4*w*o,T=o):(g-3)%4==0&&(E=-o,T=3*o+4*o*w),l&&(E=-E),u||(x=E,E=0);var C="rotateX("+(u?0:-y)+"deg) rotateY("+(u?y:0)+"deg) translate3d("+E+"px, "+x+"px, "+T+"px)";if(b<=1&&b>-1&&(h=90*g+90*b,l&&(h=90*-g-90*b)),f.transform(C),p.slideShadows){var S=u?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=u?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>'),f.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>'),f.append(M)),S.length&&(S[0].style.opacity=Math.max(-b,0)),M.length&&(M[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+o/2+"px","-moz-transform-origin":"50% 50% -"+o/2+"px","-ms-transform-origin":"50% 50% -"+o/2+"px","transform-origin":"50% 50% -"+o/2+"px"}),p.shadow)if(u)e.transform("translate3d(0px, "+(r/2+p.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,L=p.shadowScale/P,$=p.shadowOffset;e.transform("scale3d("+k+", 1, "+L+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/L+"px) rotateX(-90deg)")}var I=d.isSafari||d.isWebView?-o/2:0;i.transform("translate3d(0px,0,"+I+"px) rotateX("+(t.isHorizontal()?0:h)+"deg) rotateY("+(t.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},de={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,l=0,o=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=o,o=0,l=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),u=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===u.length&&(u=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(u)),p.length&&(p[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+o+"px, "+d+"px, 0px) rotateX("+l+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}}))}}},pe={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.slidesSizesGrid,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:a/2-l,d=n?r.rotate:-r.rotate,p=r.depth,u=0,c=i.length;u<c;u+=1){var h=i.eq(u),v=s[u],f=(o-h[0].swiperSlideOffset-v/2)/v*r.modifier,g=n?d*f:0,y=n?0:d*f,w=-p*Math.abs(f),b=r.stretch;"string"==typeof b&&-1!==b.indexOf("%")&&(b=parseFloat(r.stretch)/100*v);var E=n?0:b*f,x=n?b*f:0,T=1-(1-r.scale)*Math.abs(f);Math.abs(x)<.001&&(x=0),Math.abs(E)<.001&&(E=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(y)<.001&&(y=0),Math.abs(T)<.001&&(T=0);var C="translate3d("+x+"px,"+E+"px,"+w+"px)  rotateX("+y+"deg) rotateY("+g+"deg) scale("+T+")";if(h.transform(C),h[0].style.zIndex=1-Math.abs(Math.round(f)),r.slideShadows){var S=n?h.find(".swiper-slide-shadow-left"):h.find(".swiper-slide-shadow-top"),M=n?h.find(".swiper-slide-shadow-right"):h.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(n?"left":"top")+'"></div>'),h.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(n?"right":"bottom")+'"></div>'),h.append(M)),S.length&&(S[0].style.opacity=f>0?f:0),M.length&&(M[0].style.opacity=-f>0?-f:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ue={init:function(){var e=this,t=e.params.thumbs;if(e.thumbs.initialized)return!1;e.thumbs.initialized=!0;var a=e.constructor;return t.swiper instanceof a?(e.thumbs.swiper=t.swiper,S(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),S(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):C(t.swiper)&&(e.thumbs.swiper=new a(S({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&m(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),l=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?l:void 0===l?n:l-r<r-n?l:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView,s=t.params.thumbs.autoScrollOffset,r=s&&!a.params.loop;if(t.realIndex!==a.realIndex||r){var n,l,o=a.activeIndex;if(a.params.loop){a.slides.eq(o).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,o=a.activeIndex);var d=a.slides.eq(o).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),p=a.slides.eq(o).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();n=void 0===d?p:void 0===p?d:p-o==o-d?o:p-o<o-d?p:d,l=t.activeIndex>t.previousIndex?"next":"prev"}else l=(n=t.realIndex)>t.previousIndex?"next":"prev";r&&(n+="next"===l?s:-1*s),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(n)<0&&(a.params.centeredSlides?n=n>o?n-Math.floor(i/2)+1:n+Math.floor(i/2)-1:n>o&&(n=n-i+1),a.slideTo(n,e?0:void 0))}var u=1,c=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(u=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),a.slides.removeClass(c),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(var h=0;h<u;h+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+h)+'"]').addClass(c);else for(var v=0;v<u;v+=1)a.slides.eq(t.realIndex+v).addClass(c)}}},ce=[q,_,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){M(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:U.enable,disable:U.disable,handle:U.handle,handleMouseEnter:U.handleMouseEnter,handleMouseLeave:U.handleMouseLeave,animateSlider:U.animateSlider,releaseScroll:U.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){M(this,{navigation:t({},K)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},click:function(e,t){var a,i=e.navigation,s=i.$nextEl,r=i.$prevEl;!e.params.navigation.hideOnClick||m(t.target).is(r)||m(t.target).is(s)||(s?a=s.hasClass(e.params.navigation.hiddenClass):r&&(a=r.hasClass(e.params.navigation.hiddenClass)),!0===a?e.emit("navigationShow"):e.emit("navigationHide"),s&&s.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){M(this,{pagination:t({dynamicBulletIndex:0},Z)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,t){e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(t.target).hasClass(e.params.pagination.bulletClass)&&(!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){M(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},J)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){M(this,{parallax:t({},Q)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;M(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},ee)});var a=1;Object.defineProperty(e.zoom,"scale",{get:function(){return a},set:function(t){if(a!==t){var i=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,s=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,i,s)}a=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){M(this,{lazy:t({initialImageLoaded:!1},te)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&(e.params.lazy.checkInView?e.lazy.checkInViewOnLoad():e.lazy.load())},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(e){e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){M(this,{controller:t({control:this.params.controller.control},ae)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,a){e.controller.control&&e.controller.setTranslate(t,a)},setTransition:function(e,t,a){e.controller.control&&e.controller.setTransition(t,a)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null}},create:function(){M(this,{a11y:t({},ie,{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){M(this,{history:t({},se)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},transitionEnd:function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){M(this,{hashNavigation:t({initialized:!1},re)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){M(this,{autoplay:t({},ne,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t,a){e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){M(this,{fadeEffect:t({},le)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){M(this,{cubeEffect:t({},oe)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){M(this,{flipEffect:t({},de)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){M(this,{coverflowEffect:t({},pe)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){M(this,{thumbs:t({swiper:null,initialized:!1},ue)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var a=e.thumbs.swiper;a&&a.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return R.use(ce),R}));
 



//
var mzOptions, mzMobileOptions;
if(document.querySelector('html').getAttribute('lang') === 'vi') {
    mzOptions = mzMobileOptions  = {
        textHoverZoomHint: "Rê chuột lên hình để phóng to",
        textClickZoomHint: "Click chuột lên hình để phóng to",
        textExpandHint: "Click để phóng to",
        textBtnClose: "Đóng",
        textBtnNext: "Xem hình sau",
        textBtnPrev: "Xem hình trước",
        zoomCaption: "top",
        hint: "off",
        rightClick: 'true',
        expand: 'fullscreen',
        expandZoomOn: 'always',
        closeOnClickOutside : false

    };
}
/*


   Magic Zoom Plus v5.2.10 for MagicToolbox.com
   Copyright 2019 Magic Toolbox
   Buy a license: http://magictoolbox.mobile-friendly.google.com/magiczoomplus/
   License agreement: http://magictoolbox.mobile-friendly.google.com/license/


*/

window.productZoom = (function() {
    var x, y;
    x = y = (function() {
        var T = {
            version: "v3.3.1",
            UUID: 0,
            storage: {},
            $uuid: function(X) {
                return (X.$J_UUID || (X.$J_UUID = ++N.UUID))
            },
            getStorage: function(X) {
                return (N.storage[X] || (N.storage[X] = {}))
            },
            $F: function() {},
            $false: function() {
                return false
            },
            $true: function() {
                return true
            },
            stylesId: "mjs-" + Math.floor(Math.random() * new Date().getTime()),
            defined: function(X) {
                return (undefined != X)
            },
            ifndef: function(Y, X) {
                return (undefined != Y) ? Y : X
            },
            exists: function(X) {
                return !!(X)
            },
            jTypeOf: function(X) {
                if (!N.defined(X)) {
                    return false
                }
                if (X.$J_TYPE) {
                    return X.$J_TYPE
                }
                if (!!X.nodeType) {
                    if (1 == X.nodeType) {
                        return "element"
                    }
                    if (3 == X.nodeType) {
                        return "textnode"
                    }
                }
                if (X.length && X.item) {
                    return "collection"
                }
                if (X.length && X.callee) {
                    return "arguments"
                }
                if ((X instanceof window.Object || X instanceof window.Function) && X.constructor === N.Class) {
                    return "class"
                }
                if (X instanceof window.Array) {
                    return "array"
                }
                if (X instanceof window.Function) {
                    return "function"
                }
                if (X instanceof window.String) {
                    return "string"
                }
                if (N.browser.trident) {
                    if (N.defined(X.cancelBubble)) {
                        return "event"
                    }
                } else {
                    if (X === window.event || X.constructor == window.Event || X.constructor == window.MouseEvent || X.constructor == window.UIEvent || X.constructor == window.KeyboardEvent || X.constructor == window.KeyEvent) {
                        return "event"
                    }
                }
                if (X instanceof window.Date) {
                    return "date"
                }
                if (X instanceof window.RegExp) {
                    return "regexp"
                }
                if (X === window) {
                    return "window"
                }
                if (X === document) {
                    return "document"
                }
                return typeof(X)
            },
            extend: function(ac, ab) {
                if (!(ac instanceof window.Array)) {
                    ac = [ac]
                }
                if (!ab) {
                    return ac[0]
                }
                for (var aa = 0, Y = ac.length; aa < Y; aa++) {
                    if (!N.defined(ac)) {
                        continue
                    }
                    for (var Z in ab) {
                        if (!Object.prototype.hasOwnProperty.call(ab, Z)) {
                            continue
                        }
                        try {
                            ac[aa][Z] = ab[Z]
                        } catch (X) {}
                    }
                }
                return ac[0]
            },
            implement: function(ab, aa) {
                if (!(ab instanceof window.Array)) {
                    ab = [ab]
                }
                for (var Z = 0, X = ab.length; Z < X; Z++) {
                    if (!N.defined(ab[Z])) {
                        continue
                    }
                    if (!ab[Z].prototype) {
                        continue
                    }
                    for (var Y in (aa || {})) {
                        if (!ab[Z].prototype[Y]) {
                            ab[Z].prototype[Y] = aa[Y]
                        }
                    }
                }
                return ab[0]
            },
            nativize: function(Z, Y) {
                if (!N.defined(Z)) {
                    return Z
                }
                for (var X in (Y || {})) {
                    if (!Z[X]) {
                        Z[X] = Y[X]
                    }
                }
                return Z
            },
            $try: function() {
                for (var Y = 0, X = arguments.length; Y < X; Y++) {
                    try {
                        return arguments[Y]()
                    } catch (Z) {}
                }
                return null
            },
            $A: function(Z) {
                if (!N.defined(Z)) {
                    return N.$([])
                }
                if (Z.toArray) {
                    return N.$(Z.toArray())
                }
                if (Z.item) {
                    var Y = Z.length || 0,
                        X = new Array(Y);
                    while (Y--) {
                        X[Y] = Z[Y]
                    }
                    return N.$(X)
                }
                return N.$(Array.prototype.slice.call(Z))
            },
            now: function() {
                return new Date().getTime()
            },
            detach: function(ab) {
                var Z;
                switch (N.jTypeOf(ab)) {
                    case "object":
                        Z = {};
                        for (var aa in ab) {
                            Z[aa] = N.detach(ab[aa])
                        }
                        break;
                    case "array":
                        Z = [];
                        for (var Y = 0, X = ab.length; Y < X; Y++) {
                            Z[Y] = N.detach(ab[Y])
                        }
                        break;
                    default:
                        return ab
                }
                return N.$(Z)
            },
            $: function(Z) {
                var X = true;
                if (!N.defined(Z)) {
                    return null
                }
                if (Z.$J_EXT) {
                    return Z
                }
                switch (N.jTypeOf(Z)) {
                    case "array":
                        Z = N.nativize(Z, N.extend(N.Array, {
                            $J_EXT: N.$F
                        }));
                        Z.jEach = Z.forEach;
                        Z.contains = N.Array.contains;
                        return Z;
                        break;
                    case "string":
                        var Y = document.getElementById(Z);
                        if (N.defined(Y)) {
                            return N.$(Y)
                        }
                        return null;
                        break;
                    case "window":
                    case "document":
                        N.$uuid(Z);
                        Z = N.extend(Z, N.Doc);
                        break;
                    case "element":
                        N.$uuid(Z);
                        Z = N.extend(Z, N.Element);
                        break;
                    case "event":
                        Z = N.extend(Z, N.Event);
                        break;
                    case "textnode":
                    case "function":
                    case "array":
                    case "date":
                    default:
                        X = false;
                        break
                }
                if (X) {
                    return N.extend(Z, {
                        $J_EXT: N.$F
                    })
                } else {
                    return Z
                }
            },
            $new: function(X, Z, Y) {
                return N.$(N.doc.createElement(X)).setProps(Z || {}).jSetCss(Y || {})
            },
            addCSS: function(aa, ab, Y) {
                var X, ad, Z, af = [],
                    ae = -1;
                Y || (Y = N.stylesId);
                X = N.$(Y) || N.$new("style", {
                    id: Y,
                    type: "text/css"
                }).jAppendTo((document.head || document.body), "top");
                ad = X.sheet || X.styleSheet;
                if ("string" != N.jTypeOf(ab)) {
                    for (var Z in ab) {
                        af.push(Z + ":" + ab[Z])
                    }
                    ab = af.join(";")
                }
                if (ad.insertRule) {
                    ae = ad.insertRule(aa + " {" + ab + "}", ad.cssRules.length)
                } else {
                    try {
                        ae = ad.addRule(aa, ab, ad.rules.length)
                    } catch (ac) {}
                }
                return ae
            },
            removeCSS: function(aa, X) {
                var Z, Y;
                Z = N.$(aa);
                if ("element" !== N.jTypeOf(Z)) {
                    return
                }
                Y = Z.sheet || Z.styleSheet;
                if (Y.deleteRule) {
                    Y.deleteRule(X)
                } else {
                    if (Y.removeRule) {
                        Y.removeRule(X)
                    }
                }
            },
            generateUUID: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(Z) {
                    var Y = Math.random() * 16 | 0,
                        X = Z == "x" ? Y : (Y & 3 | 8);
                    return X.toString(16)
                }).toUpperCase()
            },
            getAbsoluteURL: (function() {
                var X;
                return function(Y) {
                    if (!X) {
                        X = document.createElement("a")
                    }
                    X.setAttribute("href", Y);
                    return ("!!" + X.href).replace("!!", "")
                }
            })(),
            getHashCode: function(Z) {
                var aa = 0,
                    X = Z.length;
                for (var Y = 0; Y < X; ++Y) {
                    aa = 31 * aa + Z.charCodeAt(Y);
                    aa %= 4294967296
                }
                return aa
            }
        };
        
        var N = T;
        var O = T.$;
        if (!window.magicJS) {
            window.magicJS = T;
            window.$mjs = T.$
        }
        N.Array = {
            $J_TYPE: "array",
            indexOf: function(aa, ab) {
                var X = this.length;
                for (var Y = this.length, Z = (ab < 0) ? Math.max(0, Y + ab) : ab || 0; Z < Y; Z++) {
                    if (this[Z] === aa) {
                        return Z
                    }
                }
                return -1
            },
            contains: function(X, Y) {
                return this.indexOf(X, Y) != -1
            },
            forEach: function(X, aa) {
                for (var Z = 0, Y = this.length; Z < Y; Z++) {
                    if (Z in this) {
                        X.call(aa, this[Z], Z, this)
                    }
                }
            },
            filter: function(X, ac) {
                var ab = [];
                for (var aa = 0, Y = this.length; aa < Y; aa++) {
                    if (aa in this) {
                        var Z = this[aa];
                        if (X.call(ac, this[aa], aa, this)) {
                            ab.push(Z)
                        }
                    }
                }
                return ab
            },
            map: function(X, ab) {
                var aa = [];
                for (var Z = 0, Y = this.length; Z < Y; Z++) {
                    if (Z in this) {
                        aa[Z] = X.call(ab, this[Z], Z, this)
                    }
                }
                return aa
            }
        };
        N.implement(String, {
            $J_TYPE: "string",
            jTrim: function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            eq: function(X, Y) {
                return (Y || false) ? (this.toString() === X.toString()) : (this.toLowerCase().toString() === X.toLowerCase().toString())
            },
            jCamelize: function() {
                return this.replace(/-\D/g, function(X) {
                    return X.charAt(1).toUpperCase()
                })
            },
            dashize: function() {
                return this.replace(/[A-Z]/g, function(X) {
                    return ("-" + X.charAt(0).toLowerCase())
                })
            },
            jToInt: function(X) {
                return parseInt(this, X || 10)
            },
            toFloat: function() {
                return parseFloat(this)
            },
            jToBool: function() {
                return !this.replace(/true/i, "").jTrim()
            },
            has: function(Y, X) {
                X = X || "";
                return (X + this + X).indexOf(X + Y + X) > -1
            }
        });
        T.implement(Function, {
            $J_TYPE: "function",
            jBind: function() {
                var Y = N.$A(arguments),
                    X = this,
                    Z = Y.shift();
                return function() {
                    return X.apply(Z || null, Y.concat(N.$A(arguments)))
                }
            },
            jBindAsEvent: function() {
                var Y = N.$A(arguments),
                    X = this,
                    Z = Y.shift();
                return function(aa) {
                    return X.apply(Z || null, N.$([aa || (N.browser.ieMode ? window.event : null)]).concat(Y))
                }
            },
            jDelay: function() {
                var Y = N.$A(arguments),
                    X = this,
                    Z = Y.shift();
                return window.setTimeout(function() {
                    return X.apply(X, Y)
                }, Z || 0)
            },
            jDefer: function() {
                var Y = N.$A(arguments),
                    X = this;
                return function() {
                    return X.jDelay.apply(X, Y)
                }
            },
            interval: function() {
                var Y = N.$A(arguments),
                    X = this,
                    Z = Y.shift();
                return window.setInterval(function() {
                    return X.apply(X, Y)
                }, Z || 0)
            }
        });
        var U = {};
        var M = navigator.userAgent.toLowerCase();
        var L = M.match(/(webkit|gecko|trident|presto)\/(\d+\.?\d*)/i);
        var Q = M.match(/(edge|opr)\/(\d+\.?\d*)/i) || M.match(/(crios|chrome|safari|firefox|opera|opr)\/(\d+\.?\d*)/i);
        var S = M.match(/version\/(\d+\.?\d*)/i);
        var H = document.documentElement.style;
        
        

        
        function I(Y) {
            var X = Y.charAt(0).toUpperCase() + Y.slice(1);
            return Y in H || ("Webkit" + X) in H || ("Moz" + X) in H || ("ms" + X) in H || ("O" + X) in H
        }
        N.browser = {
            features: {
                xpath: !!(document.evaluate),
                air: !!(window.runtime),
                query: !!(document.querySelector),
                fullScreen: !!(document.fullscreenEnabled || document.msFullscreenEnabled || document.exitFullscreen || document.cancelFullScreen || document.webkitexitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.oCancelFullScreen || document.msCancelFullScreen),
                xhr2: !!(window.ProgressEvent) && !!(window.FormData) && (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                transition: I("transition"),
                transform: I("transform"),
                perspective: I("perspective"),
                animation: I("animation"),
                requestAnimationFrame: false,
                multibackground: false,
                cssFilters: false,
                canvas: false,
                svg: (function() {
                    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
                }())
            },
            touchScreen: (function() {
                return "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
            }()),
            mobile: !!M.match(/(android|bb\d+|meego).+|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/),
            engine: (L && L[1]) ? L[1].toLowerCase() : (window.opera) ? "presto" : !!(window.ActiveXObject) ? "trident" : (document.getBoxObjectFor !== undefined || window.mozInnerScreenY !== null) ? "gecko" : (window.WebKitPoint !== null || !navigator.taintEnabled) ? "webkit" : "unknown",
            version: (L && L[2]) ? parseFloat(L[2]) : 0,
            uaName: (Q && Q[1]) ? Q[1].toLowerCase() : "",
            uaVersion: (Q && Q[2]) ? parseFloat(Q[2]) : 0,
            cssPrefix: "",
            cssDomPrefix: "",
            domPrefix: "",
            ieMode: 0,
            platform: M.match(/ip(?:ad|od|hone)/) ? "ios" : (M.match(/(?:webos|android)/) || navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
            backCompat: document.compatMode && document.compatMode.toLowerCase() === "backcompat",
            scrollbarsWidth: 0,
            getDoc: function() {
                return (document.compatMode && document.compatMode.toLowerCase() === "backcompat") ? document.body : document.documentElement
            },
            requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || undefined,
            cancelAnimationFrame: window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || undefined,
            ready: false,
            onready: function() {
                if (N.browser.ready) {
                    return
                }
                var aa;
                var Z;
                N.browser.ready = true;
                N.body = N.$(document.body);
                N.win = N.$(window);
                try {
                    var Y = N.$new("div").jSetCss({
                        width: 100,
                        height: 100,
                        overflow: "scroll",
                        position: "absolute",
                        top: -9999
                    }).jAppendTo(document.body);
                    N.browser.scrollbarsWidth = Y.offsetWidth - Y.clientWidth;
                    Y.jRemove()
                } catch (X) {}
                try {
                    aa = N.$new("div");
                    Z = aa.style;
                    Z.cssText = "background:url(https://),url(https://),red url(https://)";
                    N.browser.features.multibackground = (/(url\s*\(.*?){3}/).test(Z.background);
                    Z = null;
                    aa = null
                } catch (X) {}
                if (!N.browser.cssTransformProp) {
                    N.browser.cssTransformProp = N.normalizeCSS("transform").dashize()
                }
                try {
                    aa = N.$new("div");
                    aa.style.cssText = N.normalizeCSS("filter").dashize() + ":blur(2px);";
                    N.browser.features.cssFilters = !!aa.style.length && (!N.browser.ieMode || N.browser.ieMode > 9);
                    aa = null
                } catch (X) {}
                if (!N.browser.features.cssFilters) {
                    N.$(document.documentElement).jAddClass("no-cssfilters-magic")
                }
                try {
                    N.browser.features.canvas = (function() {
                        var ab = N.$new("canvas");
                        return !!(ab.getContext && ab.getContext("2d"))
                    }())
                } catch (X) {}
                if (window.TransitionEvent === undefined && window.WebKitTransitionEvent !== undefined) {
                    U.transitionend = "webkitTransitionEnd"
                }
                N.Doc.jCallEvent.call(N.$(document), "domready")
            }
        };
        (function() {
            var Y = [],
                ab, aa, ac;

            function X() {
                return !!(arguments.callee.caller)
            }
            switch (N.browser.engine) {
                case "trident":
                    if (!N.browser.version) {
                        N.browser.version = !!(window.XMLHttpRequest) ? 3 : 2
                    }
                    break;
                case "gecko":
                    N.browser.version = (Q && Q[2]) ? parseFloat(Q[2]) : 0;
                    break
            }
            N.browser[N.browser.engine] = true;
            if (Q && Q[1] === "crios") {
                N.browser.uaName = "chrome"
            }
            if (!!window.chrome) {
                N.browser.chrome = true
            }
            if (Q && Q[1] === "opr") {
                N.browser.uaName = "opera";
                N.browser.opera = true
            }
            if (N.browser.uaName === "safari" && (S && S[1])) {
                N.browser.uaVersion = parseFloat(S[1])
            }
            if (N.browser.platform === "android" && N.browser.webkit && (S && S[1])) {
                N.browser.androidBrowser = true
            }
            ab = ({
                gecko: ["-moz-", "Moz", "moz"],
                webkit: ["-webkit-", "Webkit", "webkit"],
                trident: ["-ms-", "ms", "ms"],
                presto: ["-o-", "O", "o"]
            })[N.browser.engine] || ["", "", ""];
            N.browser.cssPrefix = ab[0];
            N.browser.cssDomPrefix = ab[1];
            N.browser.domPrefix = ab[2];
            N.browser.ieMode = !N.browser.trident ? undefined : (document.documentMode) ? document.documentMode : (function() {
                var ad = 0;
                if (N.browser.backCompat) {
                    return 5
                }
                switch (N.browser.version) {
                    case 2:
                        ad = 6;
                        break;
                    case 3:
                        ad = 7;
                        break
                }
                return ad
            }());
            Y.push(N.browser.platform + "-magic");
            if (N.browser.mobile) {
                Y.push("mobile-magic")
            }
            if (N.browser.androidBrowser) {
                Y.push("android-browser-magic")
            }
            if (N.browser.ieMode) {
                N.browser.uaName = "ie";
                N.browser.uaVersion = N.browser.ieMode;
                Y.push("ie" + N.browser.ieMode + "-magic");
                for (aa = 11; aa > N.browser.ieMode; aa--) {
                    Y.push("lt-ie" + aa + "-magic")
                }
            }
            if (N.browser.webkit && N.browser.version < 536) {
                N.browser.features.fullScreen = false
            }
            if (N.browser.requestAnimationFrame) {
                N.browser.requestAnimationFrame.call(window, function() {
                    N.browser.features.requestAnimationFrame = true
                })
            }
            if (N.browser.features.svg) {
                Y.push("svg-magic")
            } else {
                Y.push("no-svg-magic")
            }
            ac = (document.documentElement.className || "").match(/\S+/g) || [];
            document.documentElement.className = N.$(ac).concat(Y).join(" ");
            try {
                document.documentElement.setAttribute("data-magic-ua", N.browser.uaName);
                document.documentElement.setAttribute("data-magic-ua-ver", N.browser.uaVersion)
            } catch (Z) {}
            if (N.browser.ieMode && N.browser.ieMode < 9) {
                document.createElement("figure");
                document.createElement("figcaption")
            }
            if (!window.navigator.pointerEnabled) {
                N.$(["Down", "Up", "Move", "Over", "Out"]).jEach(function(ad) {
                    U["pointer" + ad.toLowerCase()] = window.navigator.msPointerEnabled ? "MSPointer" + ad : -1
                })
            }
        }());
        (function() {
            N.browser.fullScreen = {
                capable: N.browser.features.fullScreen,
                enabled: function() {
                    return !!(document.fullscreenElement || document[N.browser.domPrefix + "FullscreenElement"] || document.fullScreen || document.webkitIsFullScreen || document[N.browser.domPrefix + "FullScreen"])
                },
                request: function(X, Y) {
                    if (!Y) {
                        Y = {}
                    }
                    if (this.capable) {
                        N.$(document).jAddEvent(this.changeEventName, this.onchange = function(Z) {
                            if (this.enabled()) {
                                if (Y.onEnter) {
                                    Y.onEnter()
                                }
                            } else {
                                N.$(document).jRemoveEvent(this.changeEventName, this.onchange);
                                if (Y.onExit) {
                                    Y.onExit()
                                }
                            }
                        }.jBindAsEvent(this));
                        N.$(document).jAddEvent(this.errorEventName, this.onerror = function(Z) {
                            if (Y.fallback) {
                                Y.fallback()
                            }
                            N.$(document).jRemoveEvent(this.errorEventName, this.onerror)
                        }.jBindAsEvent(this));
                        (X.requestFullscreen || X[N.browser.domPrefix + "RequestFullscreen"] || X[N.browser.domPrefix + "RequestFullScreen"] || function() {}).call(X)
                    } else {
                        if (Y.fallback) {
                            Y.fallback()
                        }
                    }
                },
                cancel: (document.exitFullscreen || document.cancelFullScreen || document[N.browser.domPrefix + "ExitFullscreen"] || document[N.browser.domPrefix + "CancelFullScreen"] || function() {}).jBind(document),
                changeEventName: document.msExitFullscreen ? "MSFullscreenChange" : (document.exitFullscreen ? "" : N.browser.domPrefix) + "fullscreenchange",
                errorEventName: document.msExitFullscreen ? "MSFullscreenError" : (document.exitFullscreen ? "" : N.browser.domPrefix) + "fullscreenerror",
                prefix: N.browser.domPrefix,
                activeElement: null
            }
        }());
        var W = /\S+/g,
            K = /^(border(Top|Bottom|Left|Right)Width)|((padding|margin)(Top|Bottom|Left|Right))$/,
            P = {
                "float": ("undefined" === typeof(H.styleFloat)) ? "cssFloat" : "styleFloat"
            },
            R = {
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                zIndex: true,
                zoom: true
            },
            J = (window.getComputedStyle) ? function(Z, X) {
                var Y = window.getComputedStyle(Z, null);
                return Y ? Y.getPropertyValue(X) || Y[X] : null
            } : function(aa, Y) {
                var Z = aa.currentStyle,
                    X = null;
                X = Z ? Z[Y] : null;
                if (null == X && aa.style && aa.style[Y]) {
                    X = aa.style[Y]
                }
                return X
            };

        function V(Z) {
            var X, Y;
            Y = (N.browser.webkit && "filter" == Z) ? false : (Z in H);
            if (!Y) {
                X = N.browser.cssDomPrefix + Z.charAt(0).toUpperCase() + Z.slice(1);
                if (X in H) {
                    return X
                }
            }
            return Z
        }
        N.normalizeCSS = V;
        N.Element = {
            jHasClass: function(X) {
                return !(X || "").has(" ") && (this.className || "").has(X, " ")
            },
            jAddClass: function(ab) {
                var Y = (this.className || "").match(W) || [],
                    aa = (ab || "").match(W) || [],
                    X = aa.length,
                    Z = 0;
                for (; Z < X; Z++) {
                    if (!N.$(Y).contains(aa[Z])) {
                        Y.push(aa[Z])
                    }
                }
                this.className = Y.join(" ");
                return this
            },
            jRemoveClass: function(ac) {
                var Y = (this.className || "").match(W) || [],
                    ab = (ac || "").match(W) || [],
                    X = ab.length,
                    aa = 0,
                    Z;
                for (; aa < X; aa++) {
                    if ((Z = N.$(Y).indexOf(ab[aa])) > -1) {
                        Y.splice(Z, 1)
                    }
                }
                this.className = ac ? Y.join(" ") : "";
                return this
            },
            jToggleClass: function(X) {
                return this.jHasClass(X) ? this.jRemoveClass(X) : this.jAddClass(X)
            },
            jGetCss: function(Y) {
                var Z = Y.jCamelize(),
                    X = null;
                Y = P[Z] || (P[Z] = V(Z));
                X = J(this, Y);
                if ("auto" === X) {
                    X = null
                }
                if (null !== X) {
                    if ("opacity" == Y) {
                        return N.defined(X) ? parseFloat(X) : 1
                    }
                    if (K.test(Y)) {
                        X = parseInt(X, 10) ? X : "0px"
                    }
                }
                return X
            },
            jSetCssProp: function(Y, X) {
                var aa = Y.jCamelize();
                try {
                    if ("opacity" == Y) {
                        this.jSetOpacity(X);
                        return this
                    }
                    Y = P[aa] || (P[aa] = V(aa));
                    this.style[Y] = X + (("number" == N.jTypeOf(X) && !R[aa]) ? "px" : "")
                } catch (Z) {}
                return this
            },
            jSetCss: function(Y) {
                for (var X in Y) {
                    this.jSetCssProp(X, Y[X])
                }
                return this
            },
            jGetStyles: function() {
                var X = {};
                N.$A(arguments).jEach(function(Y) {
                    X[Y] = this.jGetCss(Y)
                }, this);
                return X
            },
            jSetOpacity: function(Z, X) {
                var Y;
                X = X || false;
                this.style.opacity = Z;
                Z = parseInt(parseFloat(Z) * 100);
                if (X) {
                    if (0 === Z) {
                        if ("hidden" != this.style.visibility) {
                            this.style.visibility = "hidden"
                        }
                    } else {
                        if ("visible" != this.style.visibility) {
                            this.style.visibility = "visible"
                        }
                    }
                }
                if (N.browser.ieMode && N.browser.ieMode < 9) {
                    if (!isNaN(Z)) {
                        if (!~this.style.filter.indexOf("Alpha")) {
                            this.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Z + ")"
                        } else {
                            this.style.filter = this.style.filter.replace(/Opacity=\d*/i, "Opacity=" + Z)
                        }
                    } else {
                        this.style.filter = this.style.filter.replace(/progid:DXImageTransform.Microsoft.Alpha\(Opacity=\d*\)/i, "").jTrim();
                        if ("" === this.style.filter) {
                            this.style.removeAttribute("filter")
                        }
                    }
                }
                return this
            },
            setProps: function(X) {
                for (var Y in X) {
                    if ("class" === Y) {
                        this.jAddClass("" + X[Y])
                    } else {
                        this.setAttribute(Y, "" + X[Y])
                    }
                }
                return this
            },
            jGetTransitionDuration: function() {
                var Y = 0,
                    X = 0;
                Y = this.jGetCss("transition-duration");
                X = this.jGetCss("transition-delay");
                Y = Y.indexOf("ms") > -1 ? parseFloat(Y) : Y.indexOf("s") > -1 ? parseFloat(Y) * 1000 : 0;
                X = X.indexOf("ms") > -1 ? parseFloat(X) : X.indexOf("s") > -1 ? parseFloat(X) * 1000 : 0;
                return Y + X
            },
            hide: function() {
                return this.jSetCss({
                    display: "none",
                    visibility: "hidden"
                })
            },
            show: function() {
                return this.jSetCss({
                    display: "",
                    visibility: "visible"
                })
            },
            jGetSize: function() {
                return {
                    width: this.offsetWidth,
                    height: this.offsetHeight
                }
            },
            getInnerSize: function(Y) {
                var X = this.jGetSize();
                X.width -= (parseFloat(this.jGetCss("border-left-width") || 0) + parseFloat(this.jGetCss("border-right-width") || 0));
                X.height -= (parseFloat(this.jGetCss("border-top-width") || 0) + parseFloat(this.jGetCss("border-bottom-width") || 0));
                if (!Y) {
                    X.width -= (parseFloat(this.jGetCss("padding-left") || 0) + parseFloat(this.jGetCss("padding-right") || 0));
                    X.height -= (parseFloat(this.jGetCss("padding-top") || 0) + parseFloat(this.jGetCss("padding-bottom") || 0))
                }
                return X
            },
            jGetScroll: function() {
                return {
                    top: this.scrollTop,
                    left: this.scrollLeft
                }
            },
            jGetFullScroll: function() {
                var X = this,
                    Y = {
                        top: 0,
                        left: 0
                    };
                do {
                    Y.left += X.scrollLeft || 0;
                    Y.top += X.scrollTop || 0;
                    X = X.parentNode
                } while (X);
                return Y
            },
            jGetPosition: function() {
                var ab = this,
                    Y = 0,
                    aa = 0;
                if (N.defined(document.documentElement.getBoundingClientRect)) {
                    var X = this.getBoundingClientRect(),
                        Z = N.$(document).jGetScroll(),
                        ac = N.browser.getDoc();
                    return {
                        top: X.top + Z.y - ac.clientTop,
                        left: X.left + Z.x - ac.clientLeft
                    }
                }
                do {
                    Y += ab.offsetLeft || 0;
                    aa += ab.offsetTop || 0;
                    ab = ab.offsetParent
                } while (ab && !(/^(?:body|html)$/i).test(ab.tagName));
                return {
                    top: aa,
                    left: Y
                }
            },
            jGetRect: function() {
                var Y = this.jGetPosition();
                var X = this.jGetSize();
                return {
                    top: Y.top,
                    bottom: Y.top + X.height,
                    left: Y.left,
                    right: Y.left + X.width
                }
            },
            changeContent: function(Y) {
                try {
                    this.innerHTML = Y
                } catch (X) {
                    this.innerText = Y
                }
                return this
            },
            jRemove: function() {
                return (this.parentNode) ? this.parentNode.removeChild(this) : this
            },
            kill: function() {
                N.$A(this.childNodes).jEach(function(X) {
                    if (3 == X.nodeType || 8 == X.nodeType) {
                        return
                    }
                    N.$(X).kill()
                });
                this.jRemove();
                this.jClearEvents();
                if (this.$J_UUID) {
                    N.storage[this.$J_UUID] = null;
                    delete N.storage[this.$J_UUID]
                }
                return null
            },
            append: function(Z, Y) {
                Y = Y || "bottom";
                var X = this.firstChild;
                ("top" == Y && X) ? this.insertBefore(Z, X): this.appendChild(Z);
                return this
            },
            jAppendTo: function(Z, Y) {
                var X = N.$(Z).append(this, Y);
                return this
            },
            enclose: function(X) {
                this.append(X.parentNode.replaceChild(this, X));
                return this
            },
            hasChild: function(X) {
                if ("element" !== N.jTypeOf("string" == N.jTypeOf(X) ? X = document.getElementById(X) : X)) {
                    return false
                }
                return (this == X) ? false : (this.contains && !(N.browser.webkit419)) ? (this.contains(X)) : (this.compareDocumentPosition) ? !!(this.compareDocumentPosition(X) & 16) : N.$A(this.byTag(X.tagName)).contains(X)
            }
        };
        N.Element.jGetStyle = N.Element.jGetCss;
        N.Element.jSetStyle = N.Element.jSetCss;
        if (!window.Element) {
            window.Element = N.$F;
            if (N.browser.engine.webkit) {
                window.document.createElement("iframe")
            }
            window.Element.prototype = (N.browser.engine.webkit) ? window["[[DOMElement.prototype]]"] : {}
        }
        N.implement(window.Element, {
            $J_TYPE: "element"
        });
        N.Doc = {
            jGetSize: function() {
                if (N.browser.touchScreen || N.browser.presto925 || N.browser.webkit419) {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                return {
                    width: N.browser.getDoc().clientWidth,
                    height: N.browser.getDoc().clientHeight
                }
            },
            jGetScroll: function() {
                return {
                    x: window.pageXOffset || N.browser.getDoc().scrollLeft,
                    y: window.pageYOffset || N.browser.getDoc().scrollTop
                }
            },
            jGetFullSize: function() {
                var X = this.jGetSize();
                return {
                    width: Math.max(N.browser.getDoc().scrollWidth, X.width),
                    height: Math.max(N.browser.getDoc().scrollHeight, X.height)
                }
            }
        };
        N.extend(document, {
            $J_TYPE: "document"
        });
        N.extend(window, {
            $J_TYPE: "window"
        });
        N.extend([N.Element, N.Doc], {
            jFetch: function(aa, Y) {
                var X = N.getStorage(this.$J_UUID),
                    Z = X[aa];
                if (undefined !== Y && undefined === Z) {
                    Z = X[aa] = Y
                }
                return (N.defined(Z) ? Z : null)
            },
            jStore: function(Z, Y) {
                var X = N.getStorage(this.$J_UUID);
                X[Z] = Y;
                return this
            },
            jDel: function(Y) {
                var X = N.getStorage(this.$J_UUID);
                delete X[Y];
                return this
            }
        });
        if (!(window.HTMLElement && window.HTMLElement.prototype && window.HTMLElement.prototype.getElementsByClassName)) {
            N.extend([N.Element, N.Doc], {
                getElementsByClassName: function(X) {
                    return N.$A(this.getElementsByTagName("*")).filter(function(Z) {
                        try {
                            return (1 == Z.nodeType && Z.className.has(X, " "))
                        } catch (Y) {}
                    })
                }
            })
        }
        N.extend([N.Element, N.Doc], {
            byClass: function() {
                return this.getElementsByClassName(arguments[0])
            },
            byTag: function() {
                return this.getElementsByTagName(arguments[0])
            }
        });
        if (N.browser.fullScreen.capable && !document.requestFullScreen) {
            N.Element.requestFullScreen = function() {
                N.browser.fullScreen.request(this)
            }
        }
        N.Event = {
            $J_TYPE: "event",
            isQueueStopped: N.$false,
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                if (this.stopPropagation) {
                    this.stopPropagation()
                } else {
                    this.cancelBubble = true
                }
                return this
            },
            stopDefaults: function() {
                if (this.preventDefault) {
                    this.preventDefault()
                } else {
                    this.returnValue = false
                }
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = N.$true;
                return this
            },
            getClientXY: function() {
                var X = (/touch/i).test(this.type) ? this.changedTouches[0] : this;
                return !N.defined(X) ? {
                    x: 0,
                    y: 0
                } : {
                    x: X.clientX,
                    y: X.clientY
                }
            },
            jGetPageXY: function() {
                var X = (/touch/i).test(this.type) ? this.changedTouches[0] : this;
                return !N.defined(X) ? {
                    x: 0,
                    y: 0
                } : {
                    x: X.pageX || X.clientX + N.browser.getDoc().scrollLeft,
                    y: X.pageY || X.clientY + N.browser.getDoc().scrollTop
                }
            },
            getTarget: function() {
                var X = this.target || this.srcElement;
                while (X && X.nodeType === 3) {
                    X = X.parentNode
                }
                return X
            },
            getRelated: function() {
                var Y = null;
                switch (this.type) {
                    case "mouseover":
                    case "pointerover":
                    case "MSPointerOver":
                        Y = this.relatedTarget || this.fromElement;
                        break;
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        Y = this.relatedTarget || this.toElement;
                        break;
                    default:
                        return Y
                }
                try {
                    while (Y && Y.nodeType === 3) {
                        Y = Y.parentNode
                    }
                } catch (X) {
                    Y = null
                }
                return Y
            },
            getButton: function() {
                if (!this.which && this.button !== undefined) {
                    return (this.button & 1 ? 1 : (this.button & 2 ? 3 : (this.button & 4 ? 2 : 0)))
                }
                return this.which
            },
            isTouchEvent: function() {
                return (this.pointerType && (this.pointerType === "touch" || this.pointerType === this.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(this.type)
            },
            isPrimaryTouch: function() {
                if (this.pointerType) {
                    return (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) && this.isPrimary
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches.length === 1 && (this.targetTouches.length ? this.targetTouches.length === 1 && this.targetTouches[0].identifier === this.changedTouches[0].identifier : true)
                    }
                }
                return false
            },
            getPrimaryTouch: function() {
                if (this.pointerType) {
                    return this.isPrimary && (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) ? this : null
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches[0]
                    }
                }
                return null
            },
            getPrimaryTouchId: function() {
                if (this.pointerType) {
                    return this.isPrimary && (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) ? this.pointerId : null
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches[0].identifier
                    }
                }
                return null
            }
        };
        N._event_add_ = "addEventListener";
        N._event_del_ = "removeEventListener";
        N._event_prefix_ = "";
        if (!document.addEventListener) {
            N._event_add_ = "attachEvent";
            N._event_del_ = "detachEvent";
            N._event_prefix_ = "on"
        }
        N.Event.Custom = {
            type: "",
            x: null,
            y: null,
            timeStamp: null,
            button: null,
            target: null,
            relatedTarget: null,
            $J_TYPE: "event.custom",
            isQueueStopped: N.$false,
            events: N.$([]),
            pushToEvents: function(X) {
                var Y = X;
                this.events.push(Y)
            },
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                this.events.jEach(function(Y) {
                    try {
                        Y.stopDistribution()
                    } catch (X) {}
                });
                return this
            },
            stopDefaults: function() {
                this.events.jEach(function(Y) {
                    try {
                        Y.stopDefaults()
                    } catch (X) {}
                });
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = N.$true;
                return this
            },
            getClientXY: function() {
                return {
                    x: this.clientX,
                    y: this.clientY
                }
            },
            jGetPageXY: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            getTarget: function() {
                return this.target
            },
            getRelated: function() {
                return this.relatedTarget
            },
            getButton: function() {
                return this.button
            },
            getOriginalTarget: function() {
                return this.events.length > 0 ? this.events[0].getTarget() : undefined
            },
            isTouchEvent: function() {
                return (this.pointerType && (this.pointerType === "touch" || this.pointerType === this.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(this.type)
            },
            isPrimaryTouch: function() {
                if (this.pointerType) {
                    return (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) && this.isPrimary
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches.length === 1 && (this.targetTouches.length ? this.targetTouches[0].identifier === this.changedTouches[0].identifier : true)
                    }
                }
                return false
            },
            getPrimaryTouch: function() {
                if (this.pointerType) {
                    return this.isPrimary && (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) ? this : null
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches[0]
                    }
                }
                return null
            },
            getPrimaryTouchId: function() {
                if (this.pointerType) {
                    return this.isPrimary && (this.pointerType === "touch" || this.MSPOINTER_TYPE_TOUCH === this.pointerType) ? this.pointerId : null
                } else {
                    if (this instanceof window.TouchEvent) {
                        return this.changedTouches[0].identifier
                    }
                }
                return null
            }
        };
        N.extend([N.Element, N.Doc], {
            jAddEvent: function(Z, ab, ac, af) {
                var ae, X, aa, ad, Y;
                if (N.jTypeOf(Z) === "string") {
                    Y = Z.split(" ");
                    if (Y.length > 1) {
                        Z = Y
                    }
                }
                if (N.jTypeOf(Z) === "array") {
                    N.$(Z).jEach(this.jAddEvent.jBindAsEvent(this, ab, ac, af));
                    return this
                }
                Z = U[Z] || Z;
                if (!Z || !ab || N.jTypeOf(Z) !== "string" || N.jTypeOf(ab) !== "function") {
                    return this
                }
                if (Z === "domready" && N.browser.ready) {
                    ab.call(this);
                    return this
                }
                ac = parseInt(ac || 50, 10);
                if (!ab.$J_EUID) {
                    ab.$J_EUID = Math.floor(Math.random() * N.now())
                }
                ae = N.Doc.jFetch.call(this, "_EVENTS_", {});
                X = ae[Z];
                if (!X) {
                    ae[Z] = X = N.$([]);
                    aa = this;
                    if (N.Event.Custom[Z]) {
                        N.Event.Custom[Z].handler.add.call(this, af)
                    } else {
                        X.handle = function(ag) {
                            ag = N.extend(ag || window.e, {
                                $J_TYPE: "event"
                            });
                            N.Doc.jCallEvent.call(aa, Z, N.$(ag))
                        };
                        this[N._event_add_](N._event_prefix_ + Z, X.handle, false)
                    }
                }
                ad = {
                    type: Z,
                    fn: ab,
                    priority: ac,
                    euid: ab.$J_EUID
                };
                X.push(ad);
                X.sort(function(ah, ag) {
                    return ah.priority - ag.priority
                });
                return this
            },
            jRemoveEvent: function(ad) {
                var ab = N.Doc.jFetch.call(this, "_EVENTS_", {});
                var Z;
                var X;
                var Y;
                var ae;
                var ac;
                var aa;
                ac = arguments.length > 1 ? arguments[1] : -100;
                if (N.jTypeOf(ad) === "string") {
                    aa = ad.split(" ");
                    if (aa.length > 1) {
                        ad = aa
                    }
                }
                if (N.jTypeOf(ad) === "array") {
                    N.$(ad).jEach(this.jRemoveEvent.jBindAsEvent(this, ac));
                    return this
                }
                ad = U[ad] || ad;
                if (!ad || N.jTypeOf(ad) !== "string" || !ab || !ab[ad]) {
                    return this
                }
                Z = ab[ad] || [];
                for (Y = 0; Y < Z.length; Y++) {
                    X = Z[Y];
                    if (ac === -100 || !!ac && ac.$J_EUID === X.euid) {
                        ae = Z.splice(Y--, 1)
                    }
                }
                if (Z.length === 0) {
                    if (N.Event.Custom[ad]) {
                        N.Event.Custom[ad].handler.jRemove.call(this)
                    } else {
                        this[N._event_del_](N._event_prefix_ + ad, Z.handle, false)
                    }
                    delete ab[ad]
                }
                return this
            },
            jCallEvent: function(aa, ac) {
                var Z = N.Doc.jFetch.call(this, "_EVENTS_", {});
                var Y;
                var X;
                aa = U[aa] || aa;
                if (!aa || N.jTypeOf(aa) !== "string" || !Z || !Z[aa]) {
                    return this
                }
                try {
                    ac = N.extend(ac || {}, {
                        type: aa
                    })
                } catch (ab) {}
                if (ac.timeStamp === undefined) {
                    ac.timeStamp = N.now()
                }
                Y = Z[aa] || [];
                for (X = 0; X < Y.length && !(ac.isQueueStopped && ac.isQueueStopped()); X++) {
                    Y[X].fn.call(this, ac)
                }
            },
            jRaiseEvent: function(Y, X) {
                var ab = (Y !== "domready");
                var aa = this;
                var Z;
                Y = U[Y] || Y;
                if (!ab) {
                    N.Doc.jCallEvent.call(this, Y);
                    return this
                }
                if (aa === document && document.createEvent && !aa.dispatchEvent) {
                    aa = document.documentElement
                }
                if (document.createEvent) {
                    Z = document.createEvent(Y);
                    Z.initEvent(X, true, true)
                } else {
                    Z = document.createEventObject();
                    Z.eventType = Y
                }
                if (document.createEvent) {
                    aa.dispatchEvent(Z)
                } else {
                    aa.fireEvent("on" + X, Z)
                }
                return Z
            },
            jClearEvents: function() {
                var Y = N.Doc.jFetch.call(this, "_EVENTS_");
                if (!Y) {
                    return this
                }
                for (var X in Y) {
                    N.Doc.jRemoveEvent.call(this, X)
                }
                N.Doc.jDel.call(this, "_EVENTS_");
                return this
            }
        });
        (function(X) {
            if (document.readyState === "complete") {
                return X.browser.onready.jDelay(1)
            }
            if (X.browser.webkit && X.browser.version < 420) {
                (function() {
                    if (X.$(["loaded", "complete"]).contains(document.readyState)) {
                        X.browser.onready()
                    } else {
                        arguments.callee.jDelay(50)
                    }
                }())
            } else {
                if (X.browser.trident && X.browser.ieMode < 9 && window === top) {
                    (function() {
                        if (X.$try(function() {
                                X.browser.getDoc().doScroll("left");
                                return true
                            })) {
                            X.browser.onready()
                        } else {
                            arguments.callee.jDelay(50)
                        }
                    }())
                } else {
                    X.Doc.jAddEvent.call(X.$(document), "DOMContentLoaded", X.browser.onready);
                    X.Doc.jAddEvent.call(X.$(window), "load", X.browser.onready)
                }
            }
        }(T));
        N.Class = function() {
            var ab = null,
                Y = N.$A(arguments);
            if ("class" == N.jTypeOf(Y[0])) {
                ab = Y.shift()
            }
            var X = function() {
                for (var ae in this) {
                    this[ae] = N.detach(this[ae])
                }
                if (this.constructor.$parent) {
                    this.$parent = {};
                    var ag = this.constructor.$parent;
                    for (var af in ag) {
                        var ad = ag[af];
                        switch (N.jTypeOf(ad)) {
                            case "function":
                                this.$parent[af] = N.Class.wrap(this, ad);
                                break;
                            case "object":
                                this.$parent[af] = N.detach(ad);
                                break;
                            case "array":
                                this.$parent[af] = N.detach(ad);
                                break
                        }
                    }
                }
                var ac = (this.init) ? this.init.apply(this, arguments) : this;
                delete this.caller;
                return ac
            };
            if (!X.prototype.init) {
                X.prototype.init = N.$F
            }
            if (ab) {
                var aa = function() {};
                aa.prototype = ab.prototype;
                X.prototype = new aa;
                X.$parent = {};
                for (var Z in ab.prototype) {
                    X.$parent[Z] = ab.prototype[Z]
                }
            } else {
                X.$parent = null
            }
            X.constructor = N.Class;
            X.prototype.constructor = X;
            N.extend(X.prototype, Y[0]);
            N.extend(X, {
                $J_TYPE: "class"
            });
            return X
        };
        T.Class.wrap = function(X, Y) {
            return function() {
                var aa = this.caller;
                var Z = Y.apply(X, arguments);
                return Z
            }
        };
        (function(aa) {
            var Z = aa.$;
            var X = 5,
                Y = 300;
            aa.Event.Custom.btnclick = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "btnclick",
                init: function(ad, ac) {
                    var ab = ac.jGetPageXY();
                    this.x = ab.x;
                    this.y = ab.y;
                    this.clientX = ac.clientX;
                    this.clientY = ac.clientY;
                    this.timeStamp = ac.timeStamp;
                    this.button = ac.getButton();
                    this.target = ad;
                    this.pushToEvents(ac)
                }
            }));
            aa.Event.Custom.btnclick.handler = {
                options: {
                    threshold: Y,
                    button: 1
                },
                add: function(ab) {
                    this.jStore("event:btnclick:options", aa.extend(aa.detach(aa.Event.Custom.btnclick.handler.options), ab || {}));
                    this.jAddEvent("mousedown", aa.Event.Custom.btnclick.handler.handle, 1);
                    this.jAddEvent("mouseup", aa.Event.Custom.btnclick.handler.handle, 1);
                    this.jAddEvent("click", aa.Event.Custom.btnclick.handler.onclick, 1);
                    if (aa.browser.trident && aa.browser.ieMode < 9) {
                        this.jAddEvent("dblclick", aa.Event.Custom.btnclick.handler.handle, 1)
                    }
                },
                jRemove: function() {
                    this.jRemoveEvent("mousedown", aa.Event.Custom.btnclick.handler.handle);
                    this.jRemoveEvent("mouseup", aa.Event.Custom.btnclick.handler.handle);
                    this.jRemoveEvent("click", aa.Event.Custom.btnclick.handler.onclick);
                    if (aa.browser.trident && aa.browser.ieMode < 9) {
                        this.jRemoveEvent("dblclick", aa.Event.Custom.btnclick.handler.handle)
                    }
                },
                onclick: function(ab) {
                    ab.stopDefaults()
                },
                handle: function(ae) {
                    var ad, ab, ac;
                    ab = this.jFetch("event:btnclick:options");
                    if (ae.type != "dblclick" && ae.getButton() != ab.button) {
                        return
                    }
                    if (this.jFetch("event:btnclick:ignore")) {
                        this.jDel("event:btnclick:ignore");
                        return
                    }
                    if ("mousedown" == ae.type) {
                        ad = new aa.Event.Custom.btnclick(this, ae);
                        this.jStore("event:btnclick:btnclickEvent", ad)
                    } else {
                        if ("mouseup" == ae.type) {
                            ad = this.jFetch("event:btnclick:btnclickEvent");
                            if (!ad) {
                                return
                            }
                            ac = ae.jGetPageXY();
                            this.jDel("event:btnclick:btnclickEvent");
                            ad.pushToEvents(ae);
                            if (ae.timeStamp - ad.timeStamp <= ab.threshold && Math.sqrt(Math.pow(ac.x - ad.x, 2) + Math.pow(ac.y - ad.y, 2)) <= X) {
                                this.jCallEvent("btnclick", ad)
                            }
                            document.jCallEvent("mouseup", ae)
                        } else {
                            if (ae.type == "dblclick") {
                                ad = new aa.Event.Custom.btnclick(this, ae);
                                this.jCallEvent("btnclick", ad)
                            }
                        }
                    }
                }
            }
        })(T);
        (function(Y) {
            var X = Y.$;
            Y.Event.Custom.mousedrag = new Y.Class(Y.extend(Y.Event.Custom, {
                type: "mousedrag",
                state: "dragstart",
                dragged: false,
                init: function(ac, ab, aa) {
                    var Z = ab.jGetPageXY();
                    this.x = Z.x;
                    this.y = Z.y;
                    this.clientX = ab.clientX;
                    this.clientY = ab.clientY;
                    this.timeStamp = ab.timeStamp;
                    this.button = ab.getButton();
                    this.target = ac;
                    this.pushToEvents(ab);
                    this.state = aa
                }
            }));
            Y.Event.Custom.mousedrag.handler = {
                add: function() {
                    var aa = Y.Event.Custom.mousedrag.handler.handleMouseMove.jBindAsEvent(this),
                        Z = Y.Event.Custom.mousedrag.handler.handleMouseUp.jBindAsEvent(this);
                    this.jAddEvent("mousedown", Y.Event.Custom.mousedrag.handler.handleMouseDown, 1);
                    this.jAddEvent("mouseup", Y.Event.Custom.mousedrag.handler.handleMouseUp, 1);
                    document.jAddEvent("mousemove", aa, 1);
                    document.jAddEvent("mouseup", Z, 1);
                    this.jStore("event:mousedrag:listeners:document:move", aa);
                    this.jStore("event:mousedrag:listeners:document:end", Z)
                },
                jRemove: function() {
                    this.jRemoveEvent("mousedown", Y.Event.Custom.mousedrag.handler.handleMouseDown);
                    this.jRemoveEvent("mouseup", Y.Event.Custom.mousedrag.handler.handleMouseUp);
                    X(document).jRemoveEvent("mousemove", this.jFetch("event:mousedrag:listeners:document:move") || Y.$F);
                    X(document).jRemoveEvent("mouseup", this.jFetch("event:mousedrag:listeners:document:end") || Y.$F);
                    this.jDel("event:mousedrag:listeners:document:move");
                    this.jDel("event:mousedrag:listeners:document:end")
                },
                handleMouseDown: function(aa) {
                    var Z;
                    if (1 != aa.getButton()) {
                        return
                    }
                    Z = new Y.Event.Custom.mousedrag(this, aa, "dragstart");
                    this.jStore("event:mousedrag:dragstart", Z)
                },
                handleMouseUp: function(aa) {
                    var Z;
                    Z = this.jFetch("event:mousedrag:dragstart");
                    if (!Z) {
                        return
                    }
                    aa.stopDefaults();
                    Z = new Y.Event.Custom.mousedrag(this, aa, "dragend");
                    this.jDel("event:mousedrag:dragstart");
                    this.jCallEvent("mousedrag", Z)
                },
                handleMouseMove: function(aa) {
                    var Z;
                    Z = this.jFetch("event:mousedrag:dragstart");
                    if (!Z) {
                        return
                    }
                    aa.stopDefaults();
                    if (!Z.dragged) {
                        Z.dragged = true;
                        this.jCallEvent("mousedrag", Z)
                    }
                    Z = new Y.Event.Custom.mousedrag(this, aa, "dragmove");
                    this.jCallEvent("mousedrag", Z)
                }
            }
        })(T);
        (function(Y) {
            var X = Y.$;
            Y.Event.Custom.dblbtnclick = new Y.Class(Y.extend(Y.Event.Custom, {
                type: "dblbtnclick",
                timedout: false,
                tm: null,
                init: function(ab, aa) {
                    var Z = aa.jGetPageXY();
                    this.x = Z.x;
                    this.y = Z.y;
                    this.clientX = aa.clientX;
                    this.clientY = aa.clientY;
                    this.timeStamp = aa.timeStamp;
                    this.button = aa.getButton();
                    this.target = ab;
                    this.pushToEvents(aa)
                }
            }));
            Y.Event.Custom.dblbtnclick.handler = {
                options: {
                    threshold: 200
                },
                add: function(Z) {
                    this.jStore("event:dblbtnclick:options", Y.extend(Y.detach(Y.Event.Custom.dblbtnclick.handler.options), Z || {}));
                    this.jAddEvent("btnclick", Y.Event.Custom.dblbtnclick.handler.handle, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent("btnclick", Y.Event.Custom.dblbtnclick.handler.handle)
                },
                handle: function(ab) {
                    var aa, Z;
                    aa = this.jFetch("event:dblbtnclick:event");
                    Z = this.jFetch("event:dblbtnclick:options");
                    if (!aa) {
                        aa = new Y.Event.Custom.dblbtnclick(this, ab);
                        aa.tm = setTimeout(function() {
                            aa.timedout = true;
                            ab.isQueueStopped = Y.$false;
                            this.jCallEvent("btnclick", ab);
                            this.jDel("event:dblbtnclick:event")
                        }.jBind(this), Z.threshold + 10);
                        this.jStore("event:dblbtnclick:event", aa);
                        ab.stopQueue()
                    } else {
                        clearTimeout(aa.tm);
                        this.jDel("event:dblbtnclick:event");
                        if (!aa.timedout) {
                            aa.pushToEvents(ab);
                            ab.stopQueue().stop();
                            this.jCallEvent("dblbtnclick", aa)
                        } else {}
                    }
                }
            }
        })(T);
        (function(aa) {
            var Z = aa.$;
            var X = 10;
            var Y = 200;
            aa.Event.Custom.tap = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "tap",
                id: null,
                init: function(ac, ab) {
                    var ad = ab.getPrimaryTouch();
                    this.id = ad.pointerId || ad.identifier;
                    this.x = ad.pageX;
                    this.y = ad.pageY;
                    this.pageX = ad.pageX;
                    this.pageY = ad.pageY;
                    this.clientX = ad.clientX;
                    this.clientY = ad.clientY;
                    this.timeStamp = ab.timeStamp;
                    this.button = 0;
                    this.target = ac;
                    this.pushToEvents(ab)
                }
            }));
            aa.Event.Custom.tap.handler = {
                add: function(ab) {
                    this.jAddEvent(["touchstart", "pointerdown"], aa.Event.Custom.tap.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", "pointerup"], aa.Event.Custom.tap.handler.onTouchEnd, 1);
                    this.jAddEvent("click", aa.Event.Custom.tap.handler.onClick, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", "pointerdown"], aa.Event.Custom.tap.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", "pointerup"], aa.Event.Custom.tap.handler.onTouchEnd);
                    this.jRemoveEvent("click", aa.Event.Custom.tap.handler.onClick)
                },
                onClick: function(ab) {
                    ab.stopDefaults()
                },
                onTouchStart: function(ab) {
                    if (!ab.isPrimaryTouch()) {
                        this.jDel("event:tap:event");
                        return
                    }
                    this.jStore("event:tap:event", new aa.Event.Custom.tap(this, ab));
                    this.jStore("event:btnclick:ignore", true)
                },
                onTouchEnd: function(ae) {
                    var ac = aa.now();
                    var ad = this.jFetch("event:tap:event");
                    var ab = this.jFetch("event:tap:options");
                    if (!ad || !ae.isPrimaryTouch()) {
                        return
                    }
                    this.jDel("event:tap:event");
                    if (ad.id === ae.getPrimaryTouchId() && ae.timeStamp - ad.timeStamp <= Y && Math.sqrt(Math.pow(ae.getPrimaryTouch().pageX - ad.x, 2) + Math.pow(ae.getPrimaryTouch().pageY - ad.y, 2)) <= X) {
                        this.jDel("event:btnclick:btnclickEvent");
                        ae.stop();
                        ad.pushToEvents(ae);
                        this.jCallEvent("tap", ad)
                    }
                }
            }
        }(T));
        N.Event.Custom.dbltap = new N.Class(N.extend(N.Event.Custom, {
            type: "dbltap",
            timedout: false,
            tm: null,
            init: function(Y, X) {
                this.x = X.x;
                this.y = X.y;
                this.clientX = X.clientX;
                this.clientY = X.clientY;
                this.timeStamp = X.timeStamp;
                this.button = 0;
                this.target = Y;
                this.pushToEvents(X)
            }
        }));
        N.Event.Custom.dbltap.handler = {
            options: {
                threshold: 300
            },
            add: function(X) {
                this.jStore("event:dbltap:options", N.extend(N.detach(N.Event.Custom.dbltap.handler.options), X || {}));
                this.jAddEvent("tap", N.Event.Custom.dbltap.handler.handle, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("tap", N.Event.Custom.dbltap.handler.handle)
            },
            handle: function(Z) {
                var Y, X;
                Y = this.jFetch("event:dbltap:event");
                X = this.jFetch("event:dbltap:options");
                if (!Y) {
                    Y = new N.Event.Custom.dbltap(this, Z);
                    Y.tm = setTimeout(function() {
                        Y.timedout = true;
                        Z.isQueueStopped = N.$false;
                        this.jCallEvent("tap", Z)
                    }.jBind(this), X.threshold + 10);
                    this.jStore("event:dbltap:event", Y);
                    Z.stopQueue()
                } else {
                    clearTimeout(Y.tm);
                    this.jDel("event:dbltap:event");
                    if (!Y.timedout) {
                        Y.pushToEvents(Z);
                        Z.stopQueue().stop();
                        this.jCallEvent("dbltap", Y)
                    } else {}
                }
            }
        };
        (function(Z) {
            var Y = Z.$;
            var X = 10;
            Z.Event.Custom.touchdrag = new Z.Class(Z.extend(Z.Event.Custom, {
                type: "touchdrag",
                state: "dragstart",
                id: null,
                dragged: false,
                init: function(ac, ab, aa) {
                    var ad = ab.getPrimaryTouch();
                    this.id = ad.pointerId || ad.identifier;
                    this.clientX = ad.clientX;
                    this.clientY = ad.clientY;
                    this.pageX = ad.pageX;
                    this.pageY = ad.pageY;
                    this.x = ad.pageX;
                    this.y = ad.pageY;
                    this.timeStamp = ab.timeStamp;
                    this.button = 0;
                    this.target = ac;
                    this.pushToEvents(ab);
                    this.state = aa
                }
            }));
            Z.Event.Custom.touchdrag.handler = {
                add: function() {
                    var ab = Z.Event.Custom.touchdrag.handler.onTouchMove.jBind(this);
                    var aa = Z.Event.Custom.touchdrag.handler.onTouchEnd.jBind(this);
                    this.jAddEvent(["touchstart", "pointerdown"], Z.Event.Custom.touchdrag.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", "pointerup"], Z.Event.Custom.touchdrag.handler.onTouchEnd, 1);
                    this.jAddEvent(["touchmove", "pointermove"], Z.Event.Custom.touchdrag.handler.onTouchMove, 1);
                    this.jStore("event:touchdrag:listeners:document:move", ab);
                    this.jStore("event:touchdrag:listeners:document:end", aa);
                    Y(document).jAddEvent("pointermove", ab, 1);
                    Y(document).jAddEvent("pointerup", aa, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", "pointerdown"], Z.Event.Custom.touchdrag.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", "pointerup"], Z.Event.Custom.touchdrag.handler.onTouchEnd);
                    this.jRemoveEvent(["touchmove", "pointermove"], Z.Event.Custom.touchdrag.handler.onTouchMove);
                    Y(document).jRemoveEvent("pointermove", this.jFetch("event:touchdrag:listeners:document:move") || Z.$F, 1);
                    Y(document).jRemoveEvent("pointerup", this.jFetch("event:touchdrag:listeners:document:end") || Z.$F, 1);
                    this.jDel("event:touchdrag:listeners:document:move");
                    this.jDel("event:touchdrag:listeners:document:end")
                },
                onTouchStart: function(ab) {
                    var aa;
                    if (!ab.isPrimaryTouch()) {
                        return
                    }
                    aa = new Z.Event.Custom.touchdrag(this, ab, "dragstart");
                    this.jStore("event:touchdrag:dragstart", aa)
                },
                onTouchEnd: function(ab) {
                    var aa;
                    aa = this.jFetch("event:touchdrag:dragstart");
                    if (!aa || !aa.dragged || aa.id !== ab.getPrimaryTouchId()) {
                        return
                    }
                    aa = new Z.Event.Custom.touchdrag(this, ab, "dragend");
                    this.jDel("event:touchdrag:dragstart");
                    this.jCallEvent("touchdrag", aa)
                },
                onTouchMove: function(ab) {
                    var aa;
                    aa = this.jFetch("event:touchdrag:dragstart");
                    if (!aa || !ab.isPrimaryTouch()) {
                        return
                    }
                    if (aa.id !== ab.getPrimaryTouchId()) {
                        this.jDel("event:touchdrag:dragstart");
                        return
                    }
                    if (!aa.dragged && Math.sqrt(Math.pow(ab.getPrimaryTouch().pageX - aa.x, 2) + Math.pow(ab.getPrimaryTouch().pageY - aa.y, 2)) > X) {
                        aa.dragged = true;
                        this.jCallEvent("touchdrag", aa)
                    }
                    if (!aa.dragged) {
                        return
                    }
                    aa = new Z.Event.Custom.touchdrag(this, ab, "dragmove");
                    this.jCallEvent("touchdrag", aa)
                }
            }
        }(T));
        (function(aa) {
            var ae = aa.$;
            var ab = null;

            function X(an, am) {
                var al = am.x - an.x;
                var ao = am.y - an.y;
                return Math.sqrt(al * al + ao * ao)
            }

            function ag(ar, at) {
                var aq = Array.prototype.slice.call(ar);
                var ap = Math.abs(aq[1].pageX - aq[0].pageX);
                var an = Math.abs(aq[1].pageY - aq[0].pageY);
                var ao = Math.min(aq[1].pageX, aq[0].pageX) + ap / 2;
                var am = Math.min(aq[1].pageY, aq[0].pageY) + an / 2;
                var al = 0;
                at.points = [aq[0], aq[1]];
                al = Math.pow(X({
                    x: aq[0].pageX,
                    y: aq[0].pageY
                }, {
                    x: aq[1].pageX,
                    y: aq[1].pageY
                }), 2);
                at.centerPoint = {
                    x: ao,
                    y: am
                };
                at.x = at.centerPoint.x;
                at.y = at.centerPoint.y;
                return al
            }

            function aj(al) {
                return al / ab
            }

            function Y(an, am) {
                var al;
                if (an.targetTouches && an.changedTouches) {
                    if (an.targetTouches) {
                        al = an.targetTouches
                    } else {
                        al = an.changedTouches
                    }
                    al = Array.prototype.slice.call(al)
                } else {
                    al = [];
                    if (am) {
                        am.forEach(function(ao) {
                            al.push(ao)
                        })
                    }
                }
                return al
            }

            function Z(ao, an, am) {
                var al = false;
                if (ao.pointerId && ao.pointerType === "touch" && (!am || an.has(ao.pointerId))) {
                    an.set(ao.pointerId, ao);
                    al = true
                }
                return al
            }

            function af(am, al) {
                if (am.pointerId && am.pointerType === "touch" && al && al.has(am.pointerId)) {
                    al["delete"](am.pointerId)
                }
            }

            function ai(am) {
                var al;
                if (am.pointerId && am.pointerType === "touch") {
                    al = am.pointerId
                } else {
                    al = am.identifier
                }
                return al
            }

            function ad(ao, am) {
                var an;
                var ap;
                var al = false;
                for (an = 0; an < ao.length; an++) {
                    if (am.length === 2) {
                        break
                    } else {
                        ap = ai(ao[an]);
                        if (!am.contains(ap)) {
                            am.push(ap);
                            al = true
                        }
                    }
                }
                return al
            }

            function ah(am) {
                var al = ae([]);
                am.forEach(function(an) {
                    al.push(ai(an))
                });
                return al
            }

            function ak(ap, am) {
                var an;
                var ao;
                var al = false;
                if (am) {
                    ao = ah(ap);
                    for (an = 0; an < am.length; an++) {
                        if (!ao.contains(am[an])) {
                            am.splice(an, 1);
                            al = true;
                            break
                        }
                    }
                }
                return al
            }

            function ac(ao, am) {
                var an;
                var al = ae([]);
                for (an = 0; an < ao.length; an++) {
                    if (am.contains(ai(ao[an]))) {
                        al.push(ao[an]);
                        if (al.length === 2) {
                            break
                        }
                    }
                }
                return al
            }
            aa.Event.Custom.pinch = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "pinch",
                state: "pinchstart",
                init: function(an, am, al, ao) {
                    this.target = an;
                    this.state = al;
                    this.x = ao.x;
                    this.y = ao.y;
                    this.timeStamp = am.timeStamp;
                    this.scale = ao.scale;
                    this.space = ao.space;
                    this.zoom = ao.zoom;
                    this.state = al;
                    this.centerPoint = ao.centerPoint;
                    this.points = ao.points;
                    this.pushToEvents(am)
                }
            }));
            aa.Event.Custom.pinch.handler = {
                variables: {
                    x: 0,
                    y: 0,
                    space: 0,
                    scale: 1,
                    zoom: 0,
                    startSpace: 0,
                    startScale: 1,
                    started: false,
                    dragged: false,
                    points: [],
                    centerPoint: {
                        x: 0,
                        y: 0
                    }
                },
                add: function(an) {
                    if (!ab) {
                        ab = (function() {
                            var ao = ae(window).jGetSize();
                            ao.width = Math.min(ao.width, ao.height);
                            ao.height = ao.width;
                            return Math.pow(X({
                                x: 0,
                                y: 0
                            }, {
                                x: ao.width,
                                y: ao.height
                            }), 2)
                        })()
                    }
                    var am = aa.Event.Custom.pinch.handler.onTouchMove.jBind(this);
                    var al = aa.Event.Custom.pinch.handler.onTouchEnd.jBind(this);
                    this.jAddEvent(["click", "tap"], aa.Event.Custom.pinch.handler.onClick, 1);
                    this.jAddEvent(["touchstart", "pointerdown"], aa.Event.Custom.pinch.handler.onTouchStart, 1);
                    this.jAddEvent(["touchmove", "pointermove"], aa.Event.Custom.pinch.handler.onTouchMove, 1);
                    this.jStore("event:pinch:listeners:touchmove", am);
                    this.jStore("event:pinch:listeners:touchend", al);
                    aa.doc.jAddEvent("pointermove", am, 1);
                    aa.doc.jAddEvent("pointerup", al, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["click", "tap"], aa.Event.Custom.pinch.handler.onClick);
                    this.jRemoveEvent(["touchstart", "pointerdown"], aa.Event.Custom.pinch.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", "pointerup"], aa.Event.Custom.pinch.handler.onTouchEnd);
                    this.jRemoveEvent(["touchmove", "pointermove"], aa.Event.Custom.pinch.handler.onTouchMove);
                    aa.doc.jRemoveEvent("pointermove", this.jFetch("event:pinch:listeners:touchmove"));
                    aa.doc.jRemoveEvent("pointerup", this.jFetch("event:pinch:listeners:touchend"));
                    this.jDel("event:pinch:listeners:touchmove");
                    this.jDel("event:pinch:listeners:touchend");
                    this.jDel("event:pinch:pinchstart");
                    this.jDel("event:pinch:variables");
                    this.jDel("event:pinch:activepoints");
                    var al = this.jFetch("event:pinch:cache");
                    if (al) {
                        al.clear()
                    }
                    this.jDel("event:pinch:cache")
                },
                onClick: function(al) {
                    al.stop()
                },
                setVariables: function(am, an) {
                    var al = an.space;
                    if (am.length > 1) {
                        an.space = ag(am, an);
                        if (!an.startSpace) {
                            an.startSpace = an.space
                        }
                        if (al > an.space) {
                            an.zoom = -1
                        } else {
                            if (al < an.space) {
                                an.zoom = 1
                            } else {
                                an.zoom = 0
                            }
                        }
                        an.scale = aj(an.space)
                    } else {
                        an.points = Array.prototype.slice.call(am, 0, 2)
                    }
                },
                onTouchMove: function(an) {
                    var am;
                    var al = this.jFetch("event:pinch:cache");
                    var ap = this.jFetch("event:pinch:variables") || aa.extend({}, aa.Event.Custom.pinch.handler.variables);
                    var ao = this.jFetch("event:pinch:activepoints");
                    if (ap.started) {
                        if (an.pointerId && !Z(an, al, true)) {
                            return
                        }
                        an.stop();
                        aa.Event.Custom.pinch.handler.setVariables(ac(Y(an, al), ao), ap);
                        am = new aa.Event.Custom.pinch(this, an, "pinchmove", ap);
                        this.jCallEvent("pinch", am)
                    }
                },
                onTouchStart: function(ao) {
                    var am;
                    var aq;
                    var an;
                    var al = this.jFetch("event:pinch:cache");
                    var ap = this.jFetch("event:pinch:activepoints");
                    if (ao.pointerType === "mouse") {
                        return
                    }
                    if (!ap) {
                        ap = ae([]);
                        this.jStore("event:pinch:activepoints", ap)
                    }
                    if (!ap.length) {
                        ae(ao.target).jAddEvent(["touchend", "pointerup"], this.jFetch("event:pinch:listeners:touchend"), 1)
                    }
                    if (!al) {
                        al = new Map();
                        this.jStore("event:pinch:cache", al)
                    }
                    Z(ao, al);
                    an = Y(ao, al);
                    ad(an, ap);
                    if (an.length === 2) {
                        am = this.jFetch("event:pinch:pinchstart");
                        aq = this.jFetch("event:pinch:variables") || aa.extend({}, aa.Event.Custom.pinch.handler.variables);
                        aa.Event.Custom.pinch.handler.setVariables(ac(an, ap), aq);
                        if (!am) {
                            am = new aa.Event.Custom.pinch(this, ao, "pinchstart", aq);
                            this.jStore("event:pinch:pinchstart", am);
                            this.jStore("event:pinch:variables", aq);
                            ab = aq.space;
                            this.jCallEvent("pinch", am);
                            aq.started = true
                        }
                    }
                },
                onTouchEnd: function(aq) {
                    var ap;
                    var ao;
                    var at;
                    var am;
                    var an = this.jFetch("event:pinch:cache");
                    var ar;
                    var al;
                    if (aq.pointerType === "mouse" || aq.pointerId && (!an || !an.has(aq.pointerId))) {
                        return
                    }
                    ao = this.jFetch("event:pinch:pinchstart");
                    at = this.jFetch("event:pinch:variables");
                    ar = this.jFetch("event:pinch:activepoints");
                    ap = Y(aq, an);
                    af(aq, an);
                    al = ak(ap, ar);
                    if (!ao || !at || !at.started || !al || !ar) {
                        return
                    }
                    if (al) {
                        ad(ap, ar)
                    }
                    am = "pinchend";
                    if (ap.length > 1) {
                        am = "pinchresize"
                    } else {
                        aq.target.jRemoveEvent(["touchend", "pointerup"], this.jFetch("event:pinch:listeners:touchend"));
                        if (an) {
                            an.clear()
                        }
                        this.jDel("event:pinch:pinchstart");
                        this.jDel("event:pinch:variables");
                        this.jDel("event:pinch:cache");
                        this.jDel("event:pinch:activepoints")
                    }
                    aa.Event.Custom.pinch.handler.setVariables(ac(ap, ar), at);
                    ao = new aa.Event.Custom.pinch(this, aq, am, at);
                    this.jCallEvent("pinch", ao)
                }
            }
        }(T));
        (function(ac) {
            var aa = ac.$;
            ac.Event.Custom.mousescroll = new ac.Class(ac.extend(ac.Event.Custom, {
                type: "mousescroll",
                init: function(ai, ah, ak, ae, ad, aj, af) {
                    var ag = ah.jGetPageXY();
                    this.x = ag.x;
                    this.y = ag.y;
                    this.timeStamp = ah.timeStamp;
                    this.target = ai;
                    this.delta = ak || 0;
                    this.deltaX = ae || 0;
                    this.deltaY = ad || 0;
                    this.deltaZ = aj || 0;
                    this.deltaFactor = af || 0;
                    this.deltaMode = ah.deltaMode || 0;
                    this.isMouse = false;
                    this.pushToEvents(ah)
                }
            }));
            var ab, Y;

            function X() {
                ab = null
            }

            function Z(ad, ae) {
                return (ad > 50) || (1 === ae && !("win" == ac.browser.platform && ad < 1)) || (0 === ad % 12) || (0 == ad % 4.000244140625)
            }
            ac.Event.Custom.mousescroll.handler = {
                eventType: "onwheel" in document || ac.browser.ieMode > 8 ? "wheel" : "mousewheel",
                add: function() {
                    this.jAddEvent(ac.Event.Custom.mousescroll.handler.eventType, ac.Event.Custom.mousescroll.handler.handle, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(ac.Event.Custom.mousescroll.handler.eventType, ac.Event.Custom.mousescroll.handler.handle, 1)
                },
                handle: function(ai) {
                    var aj = 0,
                        ag = 0,
                        ae = 0,
                        ad = 0,
                        ah, af;
                    if (ai.detail) {
                        ae = ai.detail * -1
                    }
                    if (ai.wheelDelta !== undefined) {
                        ae = ai.wheelDelta
                    }
                    if (ai.wheelDeltaY !== undefined) {
                        ae = ai.wheelDeltaY
                    }
                    if (ai.wheelDeltaX !== undefined) {
                        ag = ai.wheelDeltaX * -1
                    }
                    if (ai.deltaY) {
                        ae = -1 * ai.deltaY
                    }
                    if (ai.deltaX) {
                        ag = ai.deltaX
                    }
                    if (0 === ae && 0 === ag) {
                        return
                    }
                    aj = 0 === ae ? ag : ae;
                    ad = Math.max(Math.abs(ae), Math.abs(ag));
                    if (!ab || ad < ab) {
                        ab = ad
                    }
                    ah = aj > 0 ? "floor" : "ceil";
                    aj = Math[ah](aj / ab);
                    ag = Math[ah](ag / ab);
                    ae = Math[ah](ae / ab);
                    if (Y) {
                        clearTimeout(Y)
                    }
                    Y = setTimeout(X, 200);
                    af = new ac.Event.Custom.mousescroll(this, ai, aj, ag, ae, 0, ab);
                    af.isMouse = Z(ab, ai.deltaMode || 0);
                    this.jCallEvent("mousescroll", af)
                }
            }
        })(T);
        N.win = N.$(window);
        N.doc = N.$(document);
        return T
    })();
    (function(J) {
        if (!J) {
            throw "MagicJS not found"
        }
        var I = J.$;
        var H = window.URL || window.webkitURL || null;
        x.ImageLoader = new J.Class({
            img: null,
            ready: false,
            options: {
                onprogress: J.$F,
                onload: J.$F,
                onabort: J.$F,
                onerror: J.$F,
                oncomplete: J.$F,
                onxhrerror: J.$F,
                xhr: false,
                progressiveLoad: true
            },
            size: null,
            _timer: null,
            loadedBytes: 0,
            _handlers: {
                onprogress: function(K) {
                    if (K.target && (200 === K.target.status || 304 === K.target.status) && K.lengthComputable) {
                        this.options.onprogress.jBind(null, (K.loaded - (this.options.progressiveLoad ? this.loadedBytes : 0)) / K.total).jDelay(1);
                        this.loadedBytes = K.loaded
                    }
                },
                onload: function(K) {
                    if (K) {
                        I(K).stop()
                    }
                    this._unbind();
                    if (this.ready) {
                        return
                    }
                    this.ready = true;
                    this._cleanup();
                    !this.options.xhr && this.options.onprogress.jBind(null, 1).jDelay(1);
                    this.options.onload.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onabort: function(K) {
                    if (K) {
                        I(K).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onabort.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onerror: function(K) {
                    if (K) {
                        I(K).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onerror.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                }
            },
            _bind: function() {
                I(["load", "abort", "error"]).jEach(function(K) {
                    this.img.jAddEvent(K, this._handlers["on" + K].jBindAsEvent(this).jDefer(1))
                }, this)
            },
            _unbind: function() {
                if (this._timer) {
                    try {
                        clearTimeout(this._timer)
                    } catch (K) {}
                    this._timer = null
                }
                I(["load", "abort", "error"]).jEach(function(L) {
                    this.img.jRemoveEvent(L)
                }, this)
            },
            _cleanup: function() {
                this.jGetSize();
                if (this.img.jFetch("new")) {
                    var K = this.img.parentNode;
                    this.img.jRemove().jDel("new").jSetCss({
                        position: "static",
                        top: "auto"
                    });
                    K.kill()
                }
            },
            loadBlob: function(L) {
                var M = new XMLHttpRequest(),
                    K;
                I(["abort", "progress"]).jEach(function(N) {
                    M["on" + N] = I(function(O) {
                        this._handlers["on" + N].call(this, O)
                    }).jBind(this)
                }, this);
                M.onerror = I(function() {
                    this.options.onxhrerror.jBind(null, this).jDelay(1);
                    this.options.xhr = false;
                    this._bind();
                    this.img.src = L
                }).jBind(this);
                M.onload = I(function() {
                    if (200 !== M.status && 304 !== M.status) {
                        this._handlers.onerror.call(this);
                        return
                    }
                    K = M.response;
                    this._bind();
                    if (H && !J.browser.trident && !("ios" === J.browser.platform && J.browser.version < 537)) {
                        this.img.setAttribute("src", H.createObjectURL(K))
                    } else {
                        this.img.src = L
                    }
                }).jBind(this);
                M.open("GET", L);
                M.responseType = "blob";
                M.send()
            },
            init: function(L, K) {
                this.options = J.extend(this.options, K);
                this.img = I(L) || J.$new("img", {}, {
                    "max-width": "none",
                    "max-height": "none"
                }).jAppendTo(J.$new("div").jAddClass("magic-temporary-img").jSetCss({
                    position: "absolute",
                    top: -10000,
                    width: 10,
                    height: 10,
                    overflow: "hidden"
                }).jAppendTo(document.body)).jStore("new", true);
                if (J.browser.features.xhr2 && this.options.xhr && "string" == J.jTypeOf(L)) {
                    this.loadBlob(L);
                    return
                }
                var M = function() {
                    if (this.isReady()) {
                        this._handlers.onload.call(this)
                    } else {
                        this._handlers.onerror.call(this)
                    }
                    M = null
                }.jBind(this);
                this._bind();
                if ("string" == J.jTypeOf(L)) {
                    this.img.src = L
                } else {
                    if (J.browser.trident && 5 == J.browser.version && J.browser.ieMode < 9) {
                        this.img.onreadystatechange = function() {
                            if (/loaded|complete/.test(this.img.readyState)) {
                                this.img.onreadystatechange = null;
                                M && M()
                            }
                        }.jBind(this)
                    }
                    this.img.src = L.getAttribute("src")
                }
                this.img && this.img.complete && M && (this._timer = M.jDelay(100))
            },
            destroy: function() {
                this._unbind();
                this._cleanup();
                this.ready = false;
                return this
            },
            isReady: function() {
                var K = this.img;
                return (K.naturalWidth) ? (K.naturalWidth > 0) : (K.readyState) ? ("complete" == K.readyState) : K.width > 0
            },
            jGetSize: function() {
                return this.size || (this.size = {
                    width: this.img.naturalWidth || this.img.width,
                    height: this.img.naturalHeight || this.img.height
                })
            }
        })
    })(x);
    (function(I) {
        if (!I) {
            throw "MagicJS not found"
        }
        if (I.FX) {
            return
        }
        var H = I.$;
        I.FX = new I.Class({
            init: function(K, J) {
                var L;
                this.el = I.$(K);
                this.options = I.extend(this.options, J);
                this.timer = false;
                this.easeFn = this.cubicBezierAtTime;
                L = I.FX.Transition[this.options.transition] || this.options.transition;
                if ("function" === I.jTypeOf(L)) {
                    this.easeFn = L
                } else {
                    this.cubicBezier = this.parseCubicBezier(L) || this.parseCubicBezier("ease")
                }
                if ("string" == I.jTypeOf(this.options.cycles)) {
                    this.options.cycles = "infinite" === this.options.cycles ? Infinity : parseInt(this.options.cycles) || 1
                }
            },
            options: {
                fps: 60,
                duration: 600,
                transition: "ease",
                cycles: 1,
                direction: "normal",
                onStart: I.$F,
                onComplete: I.$F,
                onBeforeRender: I.$F,
                onAfterRender: I.$F,
                forceAnimation: false,
                roundCss: false
            },
            styles: null,
            cubicBezier: null,
            easeFn: null,
            setTransition: function(J) {
                this.options.transition = J;
                J = I.FX.Transition[this.options.transition] || this.options.transition;
                if ("function" === I.jTypeOf(J)) {
                    this.easeFn = J
                } else {
                    this.easeFn = this.cubicBezierAtTime;
                    this.cubicBezier = this.parseCubicBezier(J) || this.parseCubicBezier("ease")
                }
            },
            start: function(L) {
                var J = /\%$/,
                    K;
                this.styles = L || {};
                this.cycle = 0;
                this.state = 0;
                this.curFrame = 0;
                this.pStyles = {};
                this.alternate = "alternate" === this.options.direction || "alternate-reverse" === this.options.direction;
                this.continuous = "continuous" === this.options.direction || "continuous-reverse" === this.options.direction;
                for (K in this.styles) {
                    J.test(this.styles[K][0]) && (this.pStyles[K] = true);
                    if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                        this.styles[K].reverse()
                    }
                }
                this.startTime = I.now();
                this.finishTime = this.startTime + this.options.duration;
                this.options.onStart.call();
                if (0 === this.options.duration) {
                    this.render(1);
                    this.options.onComplete.call()
                } else {
                    this.loopBind = this.loop.jBind(this);
                    if (!this.options.forceAnimation && I.browser.features.requestAnimationFrame) {
                        this.timer = I.browser.requestAnimationFrame.call(window, this.loopBind)
                    } else {
                        this.timer = this.loopBind.interval(Math.round(1000 / this.options.fps))
                    }
                }
                return this
            },
            stopAnimation: function() {
                if (this.timer) {
                    if (!this.options.forceAnimation && I.browser.features.requestAnimationFrame && I.browser.cancelAnimationFrame) {
                        I.browser.cancelAnimationFrame.call(window, this.timer)
                    } else {
                        clearInterval(this.timer)
                    }
                    this.timer = false
                }
            },
            stop: function(J) {
                J = I.defined(J) ? J : false;
                this.stopAnimation();
                if (J) {
                    this.render(1);
                    this.options.onComplete.jDelay(10)
                }
                return this
            },
            calc: function(L, K, J) {
                L = parseFloat(L);
                K = parseFloat(K);
                return (K - L) * J + L
            },
            loop: function() {
                var K = I.now(),
                    J = (K - this.startTime) / this.options.duration,
                    L = Math.floor(J);
                if (K >= this.finishTime && L >= this.options.cycles) {
                    this.stopAnimation();
                    this.render(1);
                    this.options.onComplete.jDelay(10);
                    return this
                }
                if (this.alternate && this.cycle < L) {
                    for (var M in this.styles) {
                        this.styles[M].reverse()
                    }
                }
                this.cycle = L;
                if (!this.options.forceAnimation && I.browser.features.requestAnimationFrame) {
                    this.timer = I.browser.requestAnimationFrame.call(window, this.loopBind)
                }
                this.render((this.continuous ? L : 0) + this.easeFn(J % 1))
            },
            render: function(J) {
                var K = {},
                    M = J;
                for (var L in this.styles) {
                    if ("opacity" === L) {
                        K[L] = Math.round(this.calc(this.styles[L][0], this.styles[L][1], J) * 100) / 100
                    } else {
                        K[L] = this.calc(this.styles[L][0], this.styles[L][1], J);
                        this.pStyles[L] && (K[L] += "%")
                    }
                }
                this.options.onBeforeRender(K, this.el);
                this.set(K);
                this.options.onAfterRender(K, this.el)
            },
            set: function(J) {
                return this.el.jSetCss(J)
            },
            parseCubicBezier: function(J) {
                var K, L = null;
                if ("string" !== I.jTypeOf(J)) {
                    return null
                }
                switch (J) {
                    case "linear":
                        L = H([0, 0, 1, 1]);
                        break;
                    case "ease":
                        L = H([0.25, 0.1, 0.25, 1]);
                        break;
                    case "ease-in":
                        L = H([0.42, 0, 1, 1]);
                        break;
                    case "ease-out":
                        L = H([0, 0, 0.58, 1]);
                        break;
                    case "ease-in-out":
                        L = H([0.42, 0, 0.58, 1]);
                        break;
                    case "easeInSine":
                        L = H([0.47, 0, 0.745, 0.715]);
                        break;
                    case "easeOutSine":
                        L = H([0.39, 0.575, 0.565, 1]);
                        break;
                    case "easeInOutSine":
                        L = H([0.445, 0.05, 0.55, 0.95]);
                        break;
                    case "easeInQuad":
                        L = H([0.55, 0.085, 0.68, 0.53]);
                        break;
                    case "easeOutQuad":
                        L = H([0.25, 0.46, 0.45, 0.94]);
                        break;
                    case "easeInOutQuad":
                        L = H([0.455, 0.03, 0.515, 0.955]);
                        break;
                    case "easeInCubic":
                        L = H([0.55, 0.055, 0.675, 0.19]);
                        break;
                    case "easeOutCubic":
                        L = H([0.215, 0.61, 0.355, 1]);
                        break;
                    case "easeInOutCubic":
                        L = H([0.645, 0.045, 0.355, 1]);
                        break;
                    case "easeInQuart":
                        L = H([0.895, 0.03, 0.685, 0.22]);
                        break;
                    case "easeOutQuart":
                        L = H([0.165, 0.84, 0.44, 1]);
                        break;
                    case "easeInOutQuart":
                        L = H([0.77, 0, 0.175, 1]);
                        break;
                    case "easeInQuint":
                        L = H([0.755, 0.05, 0.855, 0.06]);
                        break;
                    case "easeOutQuint":
                        L = H([0.23, 1, 0.32, 1]);
                        break;
                    case "easeInOutQuint":
                        L = H([0.86, 0, 0.07, 1]);
                        break;
                    case "easeInExpo":
                        L = H([0.95, 0.05, 0.795, 0.035]);
                        break;
                    case "easeOutExpo":
                        L = H([0.19, 1, 0.22, 1]);
                        break;
                    case "easeInOutExpo":
                        L = H([1, 0, 0, 1]);
                        break;
                    case "easeInCirc":
                        L = H([0.6, 0.04, 0.98, 0.335]);
                        break;
                    case "easeOutCirc":
                        L = H([0.075, 0.82, 0.165, 1]);
                        break;
                    case "easeInOutCirc":
                        L = H([0.785, 0.135, 0.15, 0.86]);
                        break;
                    case "easeInBack":
                        L = H([0.6, -0.28, 0.735, 0.045]);
                        break;
                    case "easeOutBack":
                        L = H([0.175, 0.885, 0.32, 1.275]);
                        break;
                    case "easeInOutBack":
                        L = H([0.68, -0.55, 0.265, 1.55]);
                        break;
                    default:
                        J = J.replace(/\s/g, "");
                        if (J.match(/^cubic-bezier\((?:-?[0-9\.]{0,}[0-9]{1,},){3}(?:-?[0-9\.]{0,}[0-9]{1,})\)$/)) {
                            L = J.replace(/^cubic-bezier\s*\(|\)$/g, "").split(",");
                            for (K = L.length - 1; K >= 0; K--) {
                                L[K] = parseFloat(L[K])
                            }
                        }
                }
                return H(L)
            },
            cubicBezierAtTime: function(V) {
                var J = 0,
                    U = 0,
                    R = 0,
                    W = 0,
                    T = 0,
                    P = 0,
                    Q = this.options.duration;

                function O(X) {
                    return ((J * X + U) * X + R) * X
                }

                function N(X) {
                    return ((W * X + T) * X + P) * X
                }

                function L(X) {
                    return (3 * J * X + 2 * U) * X + R
                }

                function S(X) {
                    return 1 / (200 * X)
                }

                function K(X, Y) {
                    return N(M(X, Y))
                }

                function M(ae, af) {
                    var ad, ac, ab, Y, X, aa;

                    function Z(ag) {
                        if (ag >= 0) {
                            return ag
                        } else {
                            return 0 - ag
                        }
                    }
                    for (ab = ae, aa = 0; aa < 8; aa++) {
                        Y = O(ab) - ae;
                        if (Z(Y) < af) {
                            return ab
                        }
                        X = L(ab);
                        if (Z(X) < 0.000001) {
                            break
                        }
                        ab = ab - Y / X
                    }
                    ad = 0;
                    ac = 1;
                    ab = ae;
                    if (ab < ad) {
                        return ad
                    }
                    if (ab > ac) {
                        return ac
                    }
                    while (ad < ac) {
                        Y = O(ab);
                        if (Z(Y - ae) < af) {
                            return ab
                        }
                        if (ae > Y) {
                            ad = ab
                        } else {
                            ac = ab
                        }
                        ab = (ac - ad) * 0.5 + ad
                    }
                    return ab
                }
                R = 3 * this.cubicBezier[0];
                U = 3 * (this.cubicBezier[2] - this.cubicBezier[0]) - R;
                J = 1 - R - U;
                P = 3 * this.cubicBezier[1];
                T = 3 * (this.cubicBezier[3] - this.cubicBezier[1]) - P;
                W = 1 - P - T;
                return K(V, S(Q))
            }
        });
        I.FX.Transition = {
            linear: "linear",
            sineIn: "easeInSine",
            sineOut: "easeOutSine",
            expoIn: "easeInExpo",
            expoOut: "easeOutExpo",
            quadIn: "easeInQuad",
            quadOut: "easeOutQuad",
            cubicIn: "easeInCubic",
            cubicOut: "easeOutCubic",
            backIn: "easeInBack",
            backOut: "easeOutBack",
            elasticIn: function(K, J) {
                J = J || [];
                return Math.pow(2, 10 * --K) * Math.cos(20 * K * Math.PI * (J[0] || 1) / 3)
            },
            elasticOut: function(K, J) {
                return 1 - I.FX.Transition.elasticIn(1 - K, J)
            },
            bounceIn: function(L) {
                for (var K = 0, J = 1; 1; K += J, J /= 2) {
                    if (L >= (7 - 4 * K) / 11) {
                        return J * J - Math.pow((11 - 6 * K - 11 * L) / 4, 2)
                    }
                }
            },
            bounceOut: function(J) {
                return 1 - I.FX.Transition.bounceIn(1 - J)
            },
            none: function(J) {
                return 0
            }
        }
    })(x);
    (function(I) {
        if (!I) {
            throw "MagicJS not found"
        }
        if (I.PFX) {
            return
        }
        var H = I.$;
        I.PFX = new I.Class(I.FX, {
            init: function(J, K) {
                this.el_arr = J;
                this.options = I.extend(this.options, K);
                this.timer = false;
                this.$parent.init()
            },
            start: function(N) {
                var J = /\%$/,
                    M, L, K = N.length;
                this.styles_arr = N;
                this.pStyles_arr = new Array(K);
                for (L = 0; L < K; L++) {
                    this.pStyles_arr[L] = {};
                    for (M in N[L]) {
                        J.test(N[L][M][0]) && (this.pStyles_arr[L][M] = true);
                        if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                            this.styles_arr[L][M].reverse()
                        }
                    }
                }
                this.$parent.start({});
                return this
            },
            render: function(J) {
                for (var K = 0; K < this.el_arr.length; K++) {
                    this.el = I.$(this.el_arr[K]);
                    this.styles = this.styles_arr[K];
                    this.pStyles = this.pStyles_arr[K];
                    this.$parent.render(J)
                }
            }
        })
    })(x);
    (function(I) {
        if (!I) {
            throw "MagicJS not found";
            return
        }
        if (I.Tooltip) {
            return
        }
        var H = I.$;
        I.Tooltip = function(K, L) {
            var J = this.tooltip = I.$new("div", null, {
                position: "absolute",
                "z-index": 999
            }).jAddClass("MagicToolboxTooltip");
            I.$(K).jAddEvent("mouseover", function() {
                J.jAppendTo(document.body)
            });
            I.$(K).jAddEvent("mouseout", function() {
                J.jRemove()
            });
            I.$(K).jAddEvent("mousemove", function(Q) {
                var S = 20,
                    P = I.$(Q).jGetPageXY(),
                    O = J.jGetSize(),
                    N = I.$(window).jGetSize(),
                    R = I.$(window).jGetScroll();

                function M(V, T, U) {
                    return (U < (V - T) / 2) ? U : ((U > (V + T) / 2) ? (U - T) : (V - T) / 2)
                }
                J.jSetCss({
                    left: R.x + M(N.width, O.width + 2 * S, P.x - R.x) + S,
                    top: R.y + M(N.height, O.height + 2 * S, P.y - R.y) + S
                })
            });
            this.text(L)
        };
        I.Tooltip.prototype.text = function(J) {
            this.tooltip.firstChild && this.tooltip.removeChild(this.tooltip.firstChild);
            this.tooltip.append(document.createTextNode(J))
        }
    })(x);
    (function(I) {
        if (!I) {
            throw "MagicJS not found";
            return
        }
        if (I.MessageBox) {
            return
        }
        var H = I.$;
        I.Message = function(M, L, K, J) {
            this.hideTimer = null;
            this.messageBox = I.$new("span", null, {
                position: "absolute",
                "z-index": 999,
                visibility: "hidden",
                opacity: 0.8
            }).jAddClass(J || "").jAppendTo(K || document.body);
            this.setMessage(M);
            this.show(L)
        };
        I.Message.prototype.show = function(J) {
            this.messageBox.show();
            this.hideTimer = this.hide.jBind(this).jDelay(I.ifndef(J, 5000))
        };
        I.Message.prototype.hide = function(J) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
            if (this.messageBox && !this.hideFX) {
                this.hideFX = new x.FX(this.messageBox, {
                    duration: I.ifndef(J, 500),
                    onComplete: function() {
                        this.messageBox.kill();
                        delete this.messageBox;
                        this.hideFX = null
                    }.jBind(this)
                }).start({
                    opacity: [this.messageBox.jGetCss("opacity"), 0]
                })
            }
        };
        I.Message.prototype.setMessage = function(J) {
            this.messageBox.firstChild && this.tooltip.removeChild(this.messageBox.firstChild);
            this.messageBox.append(document.createTextNode(J))
        }
    })(x);
    (function(I) {
        if (!I) {
            throw "MagicJS not found"
        }
        if (I.Options) {
            return
        }
        var L = I.$,
            H = null,
            P = {
                "boolean": 1,
                array: 2,
                number: 3,
                "function": 4,
                string: 100
            },
            J = {
                "boolean": function(S, R, Q) {
                    if ("boolean" != I.jTypeOf(R)) {
                        if (Q || "string" != I.jTypeOf(R)) {
                            return false
                        } else {
                            if (!/^(true|false)$/.test(R)) {
                                return false
                            } else {
                                R = R.jToBool()
                            }
                        }
                    }
                    if (S.hasOwnProperty("enum") && !L(S["enum"]).contains(R)) {
                        return false
                    }
                    H = R;
                    return true
                },
                string: function(S, R, Q) {
                    if ("string" !== I.jTypeOf(R)) {
                        return false
                    } else {
                        if (S.hasOwnProperty("enum") && !L(S["enum"]).contains(R)) {
                            return false
                        } else {
                            H = "" + R;
                            return true
                        }
                    }
                },
                number: function(T, S, R) {
                    var Q = false,
                        V = /%$/,
                        U = (I.jTypeOf(S) == "string" && V.test(S));
                    if (R && !"number" == typeof S) {
                        return false
                    }
                    S = parseFloat(S);
                    if (isNaN(S)) {
                        return false
                    }
                    if (isNaN(T.minimum)) {
                        T.minimum = Number.NEGATIVE_INFINITY
                    }
                    if (isNaN(T.maximum)) {
                        T.maximum = Number.POSITIVE_INFINITY
                    }
                    if (T.hasOwnProperty("enum") && !L(T["enum"]).contains(S)) {
                        return false
                    }
                    if (T.minimum > S || S > T.maximum) {
                        return false
                    }
                    H = U ? (S + "%") : S;
                    return true
                },
                array: function(T, R, Q) {
                    if ("string" === I.jTypeOf(R)) {
                        try {
                            R = window.JSON.parse(R)
                        } catch (S) {
                            return false
                        }
                    }
                    if (I.jTypeOf(R) === "array") {
                        H = R;
                        return true
                    } else {
                        return false
                    }
                },
                "function": function(S, R, Q) {
                    if (I.jTypeOf(R) === "function") {
                        H = R;
                        return true
                    } else {
                        return false
                    }
                }
            },
            K = function(V, U, R) {
                var T;
                T = V.hasOwnProperty("oneOf") ? V.oneOf : [V];
                if ("array" != I.jTypeOf(T)) {
                    return false
                }
                for (var S = 0, Q = T.length - 1; S <= Q; S++) {
                    if (J[T[S].type](T[S], U, R)) {
                        return true
                    }
                }
                return false
            },
            N = function(V) {
                var T, S, U, Q, R;
                if (V.hasOwnProperty("oneOf")) {
                    Q = V.oneOf.length;
                    for (T = 0; T < Q; T++) {
                        for (S = T + 1; S < Q; S++) {
                            if (P[V.oneOf[T]["type"]] > P[V.oneOf[S].type]) {
                                R = V.oneOf[T];
                                V.oneOf[T] = V.oneOf[S];
                                V.oneOf[S] = R
                            }
                        }
                    }
                }
                return V
            },
            O = function(T) {
                var S;
                S = T.hasOwnProperty("oneOf") ? T.oneOf : [T];
                if ("array" != I.jTypeOf(S)) {
                    return false
                }
                for (var R = S.length - 1; R >= 0; R--) {
                    if (!S[R].type || !P.hasOwnProperty(S[R].type)) {
                        return false
                    }
                    if (I.defined(S[R]["enum"])) {
                        if ("array" !== I.jTypeOf(S[R]["enum"])) {
                            return false
                        }
                        for (var Q = S[R]["enum"].length - 1; Q >= 0; Q--) {
                            if (!J[S[R].type]({
                                    type: S[R].type
                                }, S[R]["enum"][Q], true)) {
                                return false
                            }
                        }
                    }
                }
                if (T.hasOwnProperty("default") && !K(T, T["default"], true)) {
                    return false
                }
                return true
            },
            M = function(Q) {
                this.schema = {};
                this.options = {};
                this.parseSchema(Q)
            };
        I.extend(M.prototype, {
            parseSchema: function(S) {
                var R, Q, T;
                for (R in S) {
                    if (!S.hasOwnProperty(R)) {
                        continue
                    }
                    Q = (R + "").jTrim().jCamelize();
                    if (!this.schema.hasOwnProperty(Q)) {
                        this.schema[Q] = N(S[R]);
                        if (!O(this.schema[Q])) {
                            throw "Incorrect definition of the '" + R + "' parameter in " + S
                        }
                        this.options[Q] = undefined
                    }
                }
            },
            set: function(R, Q) {
                R = (R + "").jTrim().jCamelize();
                if (I.jTypeOf(Q) == "string") {
                    Q = Q.jTrim()
                }
                if (this.schema.hasOwnProperty(R)) {
                    H = Q;
                    if (K(this.schema[R], Q)) {
                        this.options[R] = H
                    }
                    H = null
                }
            },
            get: function(Q) {
                Q = (Q + "").jTrim().jCamelize();
                if (this.schema.hasOwnProperty(Q)) {
                    return I.defined(this.options[Q]) ? this.options[Q] : this.schema[Q]["default"]
                }
            },
            fromJSON: function(R) {
                for (var Q in R) {
                    this.set(Q, R[Q])
                }
            },
            getJSON: function() {
                var R = I.extend({}, this.options);
                for (var Q in R) {
                    if (undefined === R[Q] && undefined !== this.schema[Q]["default"]) {
                        R[Q] = this.schema[Q]["default"]
                    }
                }
                return R
            },
            fromString: function(Q) {
                L(Q.split(";")).jEach(L(function(R) {
                    R = R.split(":");
                    this.set(R.shift().jTrim(), R.join(":"))
                }).jBind(this))
            },
            exists: function(Q) {
                Q = (Q + "").jTrim().jCamelize();
                return this.schema.hasOwnProperty(Q)
            },
            isset: function(Q) {
                Q = (Q + "").jTrim().jCamelize();
                return this.exists(Q) && I.defined(this.options[Q])
            },
            jRemove: function(Q) {
                Q = (Q + "").jTrim().jCamelize();
                if (this.exists(Q)) {
                    delete this.options[Q];
                    delete this.schema[Q]
                }
            }
        });
        I.Options = M
    })(x);
    (function(L) {
        if (!L) {
            throw "MagicJS not found";
            return
        }
        var K = L.$;
        if (L.SVGImage) {
            return
        }
        var J = "http://www.w3.org/2000/svg",
            I = "http://www.w3.org/1999/xlink";
        var H = function(M) {
            this.filters = {};
            this.originalImage = K(M);
            this.canvas = K(document.createElementNS(J, "svg"));
            this.canvas.setAttribute("width", this.originalImage.naturalWidth || this.originalImage.width);
            this.canvas.setAttribute("height", this.originalImage.naturalHeight || this.originalImage.height);
            this.image = K(document.createElementNS(J, "image"));
            this.image.setAttributeNS(I, "href", this.originalImage.getAttribute("src"));
            this.image.setAttribute("width", "100%");
            this.image.setAttribute("height", "100%");
            this.image.jAppendTo(this.canvas)
        };
        H.prototype.getNode = function() {
            return this.canvas
        };
        H.prototype.blur = function(M) {
            if (Math.round(M) < 1) {
                return
            }
            if (!this.filters.blur) {
                this.filters.blur = K(document.createElementNS(J, "filter"));
                this.filters.blur.setAttribute("id", "filterBlur");
                this.filters.blur.appendChild(K(document.createElementNS(J, "feGaussianBlur")).setProps({
                    "in": "SourceGraphic",
                    stdDeviation: M
                }));
                this.filters.blur.jAppendTo(this.canvas);
                this.image.setAttribute("filter", "url(#filterBlur)")
            } else {
                this.filters.blur.firstChild.setAttribute("stdDeviation", M)
            }
            return this
        };
        L.SVGImage = H
    }(x));
    var q = (function(J) {
        var I = J.$;
        var H = function(L, K) {
            this.settings = {
                cssPrefix: "magic",
                orientation: "horizontal",
                position: "bottom",
                size: {
                    units: "px",
                    width: "auto",
                    height: "auto"
                },
                sides: ["height", "width"]
            };
            this.parent = L;
            this.root = null;
            this.wrapper = null;
            this.context = null;
            this.buttons = {};
            this.items = [];
            this.selectedItem = null;
            this.scrollFX = null;
            this.resizeCallback = null;
            this.settings = J.extend(this.settings, K);
            this.rootCSS = this.settings.cssPrefix + "-thumbs";
            this.itemCSS = this.settings.cssPrefix + "-thumb";
            this.setupContent()
        };
        H.prototype = {
            setupContent: function() {
                this.root = J.$new("div").jAddClass(this.rootCSS).jAddClass(this.rootCSS + "-" + this.settings.orientation).jSetCss({
                    visibility: "hidden"
                });
                this.wrapper = J.$new("div").jAddClass(this.rootCSS + "-wrapper").jAppendTo(this.root);
                this.root.jAppendTo(this.parent);
                I(["prev", "next"]).jEach(function(K) {
                    this.buttons[K] = J.$new("button").jAddClass(this.rootCSS + "-button").jAddClass(this.rootCSS + "-button-" + K).jAppendTo(this.root).jAddEvent("btnclick tap", (function(M, L) {
                        I(M).events[0].stop().stopQueue();
                        I(M).stopDistribution();
                        this.scroll(L)
                    }).jBindAsEvent(this, K))
                }.jBind(this));
                this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                this.context = J.$new("ul").jAddEvent("btnclick tap", function(K) {
                    K.stop()
                })
            },
            addItem: function(L) {
                var K = J.$new("li").jAddClass(this.itemCSS).append(L).jAppendTo(this.context);
                new J.ImageLoader(L, {
                    oncomplete: this.reflow.jBind(this)
                });
                this.items.push(K);
                return K
            },
            selectItem: function(L) {
                var K = this.selectedItem || this.context.byClass(this.itemCSS + "-selected")[0];
                if (K) {
                    I(K).jRemoveClass(this.itemCSS + "-selected")
                }
                this.selectedItem = I(L);
                if (!this.selectedItem) {
                    return
                }
                this.selectedItem.jAddClass(this.itemCSS + "-selected");
                this.scroll(this.selectedItem)
            },
            run: function() {
                if (this.wrapper !== this.context.parentNode) {
                    I(this.context).jAppendTo(this.wrapper);
                    this.initDrag();
                    I(window).jAddEvent("resize", this.resizeCallback = this.reflow.jBind(this));
                    this.run.jBind(this).jDelay(1);
                    return
                }
                var K = this.parent.jGetSize();
                if (K.height > 0 && K.height > K.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                this.reflow();
                this.root.jSetCss({
                    visibility: ""
                })
            },
            stop: function() {
                if (this.resizeCallback) {
                    I(window).jRemoveEvent("resize", this.resizeCallback)
                }
                this.root.kill()
            },
            scroll: function(X, N) {
                var P = {
                        x: 0,
                        y: 0
                    },
                    aa = "vertical" == this.settings.orientation ? "top" : "left",
                    S = "vertical" == this.settings.orientation ? "height" : "width",
                    O = "vertical" == this.settings.orientation ? "y" : "x",
                    W = this.context.parentNode.jGetSize()[S],
                    T = this.context.parentNode.jGetPosition(),
                    M = this.context.jGetSize()[S],
                    V, K, Z, Q, L, U, R, Y = [];
                if (this.scrollFX) {
                    this.scrollFX.stop()
                } else {
                    this.context.jSetCss("transition", J.browser.cssTransformProp + String.fromCharCode(32) + "0s")
                }
                if (undefined === N) {
                    N = 600
                }
                V = this.context.jGetPosition();
                if ("string" == J.jTypeOf(X)) {
                    P[O] = ("next" == X) ? Math.max(V[aa] - T[aa] - W, W - M) : Math.min(V[aa] - T[aa] + W, 0)
                } else {
                    if ("element" == J.jTypeOf(X)) {
                        K = X.jGetSize();
                        Z = X.jGetPosition();
                        P[O] = Math.min(0, Math.max(W - M, V[aa] + W / 2 - Z[aa] - K[S] / 2))
                    } else {
                        return
                    }
                }
                if (J.browser.gecko && "android" == J.browser.platform || J.browser.ieMode && J.browser.ieMode < 10) {
                    if ("string" == J.jTypeOf(X) && P[O] == V[aa] - T[aa]) {
                        V[aa] += 0 === V[aa] - T[aa] ? 30 : -30
                    }
                    P["margin-" + aa] = [((M <= W) ? 0 : (V[aa] - T[aa])), P[O]];
                    delete P.x;
                    delete P.y;
                    if (!this.selectorsMoveFX) {
                        this.selectorsMoveFX = new J.PFX([this.context], {
                            duration: 500
                        })
                    }
                    Y.push(P);
                    this.selectorsMoveFX.start(Y);
                    R = P["margin-" + aa][1]
                } else {
                    this.context.jSetCss({
                        transition: J.browser.cssTransformProp + String.fromCharCode(32) + N + "ms ease",
                        transform: "translate3d(" + P.x + "px, " + P.y + "px, 0)"
                    });
                    R = P[O]
                }
                if (R >= 0) {
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                if (R <= W - M) {
                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                R = null
            },
            initDrag: function() {
                var M, L, N, U, T, W, O, S, R, V, ab, Y, Z, X = {
                        x: 0,
                        y: 0
                    },
                    K, Q, P = 300,
                    aa = function(ae) {
                        var ad, ac = 0;
                        for (ad = 1.5; ad <= 90; ad += 1.5) {
                            ac += (ae * Math.cos(ad / Math.PI / 2))
                        }(U < 0) && (ac *= (-1));
                        return ac
                    };
                T = I(function(ac) {
                    X = {
                        x: 0,
                        y: 0
                    };
                    K = "vertical" == this.settings.orientation ? "top" : "left";
                    Q = "vertical" == this.settings.orientation ? "height" : "width";
                    M = "vertical" == this.settings.orientation ? "y" : "x";
                    Y = this.context.parentNode.jGetSize()[Q];
                    ab = this.context.jGetSize()[Q];
                    N = Y - ab;
                    if (N >= 0) {
                        return
                    }
                    if (ac.state == "dragstart") {
                        if (undefined === Z) {
                            Z = 0
                        }
                        this.context.jSetCssProp("transition", J.browser.cssTransformProp + String.fromCharCode(32) + "0ms");
                        W = ac[M];
                        R = ac.y;
                        S = ac.x;
                        V = false
                    } else {
                        if ("dragend" == ac.state) {
                            if (V) {
                                return
                            }
                            O = aa(Math.abs(U));
                            Z += O;
                            (Z <= N) && (Z = N);
                            (Z >= 0) && (Z = 0);
                            X[M] = Z;
                            this.context.jSetCssProp("transition", J.browser.cssTransformProp + String.fromCharCode(32) + P + "ms  cubic-bezier(.0, .0, .0, 1)");
                            this.context.jSetCssProp("transform", "translate3d(" + X.x + "px, " + X.y + "px, 0px)");
                            U = 0
                        } else {
                            if (V) {
                                return
                            }
                            if ("horizontal" == this.settings.orientation && Math.abs(ac.x - S) > Math.abs(ac.y - R) || "vertical" == this.settings.orientation && Math.abs(ac.x - S) < Math.abs(ac.y - R)) {
                                ac.stop();
                                U = ac[M] - W;
                                Z += U;
                                X[M] = Z;
                                this.context.jSetCssProp("transform", "translate3d(" + X.x + "px, " + X.y + "px, 0px)");
                                if (Z >= 0) {
                                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                                if (Z <= N) {
                                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                            } else {
                                V = true
                            }
                        }
                        W = ac[M]
                    }
                }).jBind(this);
                this.context.jAddEvent("touchdrag", T)
            },
            reflow: function() {
                var N, M, K, L = this.parent.jGetSize();
                if (L.height > 0 && L.height > L.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                N = "vertical" == this.settings.orientation ? "height" : "width";
                M = this.context.jGetSize()[N];
                K = this.root.jGetSize()[N];
                if (M <= K) {
                    this.root.jAddClass("no-buttons");
                    this.context.jSetCssProp("transition", "").jGetSize();
                    this.context.jSetCssProp("transform", "translate3d(0,0,0)");
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                } else {
                    this.root.jRemoveClass("no-buttons")
                }
                if (this.selectedItem) {
                    this.scroll(this.selectedItem, 0)
                }
            },
            setOrientation: function(K) {
                if ("vertical" !== K && "horizontal" !== K || K == this.settings.orientation) {
                    return
                }
                this.root.jRemoveClass(this.rootCSS + "-" + this.settings.orientation);
                this.settings.orientation = K;
                this.root.jAddClass(this.rootCSS + "-" + this.settings.orientation);
                this.context.jSetCssProp("transition", "none").jGetSize();
                this.context.jSetCssProp("transform", "").jSetCssProp("margin", "")
            }
        };
        return H
    })(x);
    var g = y.$;
    if (typeof Object.assign !== "function") {
        Object.assign = function(K) {
            if (K == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            K = Object(K);
            for (var H = 1; H < arguments.length; H++) {
                var J = arguments[H];
                if (J != null) {
                    for (var I in J) {
                        if (Object.prototype.hasOwnProperty.call(J, I)) {
                            K[I] = J[I]
                        }
                    }
                }
            }
            return K
        }
    }
    if (!y.browser.cssTransform) {
        y.browser.cssTransform = y.normalizeCSS("transform").dashize()
    }
    var n = {
        zoomOn: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "hover"
        },
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "preview", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        zoomWidth: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomHeight: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomPosition: {
            type: "string",
            "default": "right"
        },
        zoomDistance: {
            type: "number",
            minimum: 0,
            "default": 15
        },
        zoomCaption: {
            oneOf: [{
                type: "string",
                "enum": ["bottom", "top", "off"],
                "default": "off"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "off"
        },
        expand: {
            oneOf: [{
                type: "string",
                "enum": ["window", "fullscreen", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "window"
        },
        expandZoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click", "always"],
            "default": "click"
        },
        expandCaption: {
            type: "boolean",
            "default": true
        },
        closeOnClickOutside: {
            type: "boolean",
            "default": true
        },
        hint: {
            oneOf: [{
                type: "string",
                "enum": ["once", "always", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "once"
        },
        smoothing: {
            type: "boolean",
            "default": true
        },
        upscale: {
            type: "boolean",
            "default": true
        },
        variableZoom: {
            type: "boolean",
            "default": false
        },
        lazyZoom: {
            type: "boolean",
            "default": false
        },
        autostart: {
            type: "boolean",
            "default": true
        },
        rightClick: {
            type: "boolean",
            "default": false
        },
        transitionEffect: {
            type: "boolean",
            "default": true
        },
        selectorTrigger: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "click"
        },
        cssClass: {
            type: "string"
        },
        forceTouch: {
            type: "boolean",
            "default": false
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Hover to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Click to zoom"
        },
        textExpandHint: {
            type: "string",
            "default": "Click to expand"
        },
        textBtnClose: {
            type: "string",
            "default": "Close"
        },
        textBtnNext: {
            type: "string",
            "default": "Next"
        },
        textBtnPrev: {
            type: "string",
            "default": "Previous"
        }
    };
    var k = {
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click", "always"],
            "default": "click"
        },
        textExpandHint: {
            type: "string",
            "default": "Tap to expand"
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Touch to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Double tap to zoom"
        }
    };
    var m = "productZoom";
    var C = "mz";
    var b = 20;
    var z = ["onZoomReady", "onUpdate", "onZoomIn", "onZoomOut", "onExpandOpen", "onExpandClose"];
    var B = 600;
    var t;
    var o = {};
    var E = g([]);
    var G;
    var e = window.devicePixelRatio || 1;
    var F;
    var w = true;
    var f = y.browser.features.perspective ? "translate3d(" : "translate(";
    var A = y.browser.features.perspective ? ",0)" : ")";
    var l = null;
    var r = function() {
        return "mgctlbxN$MZ" + "p".toUpperCase() + " mgctlbxV$" + "v5.2.10".replace("v", "") + " mgctlbxL$" + "m".toUpperCase() + ((window.mgctlbx$Pltm && y.jTypeOf(window.mgctlbx$Pltm) === "string") ? " mgctlbxP$" + window.mgctlbx$Pltm.toLowerCase() : "")
    };

    function v(J) {
        var I, H;
        I = "";
        for (H = 0; H < J.length; H++) {
            I += String.fromCharCode(14 ^ J.charCodeAt(H))
        }
        return I
    }

    function h(J) {
        var I = [],
            H = null;
        (J && (H = g(J))) && (I = E.filter(function(K) {
            return K.placeholder === H
        }));
        return I.length ? I[0] : null
    }

    function a(J) {
        var I = g(window).jGetSize();
        var H = g(window).jGetScroll();
        J = J || 0;
        return {
            left: J,
            right: I.width - J,
            top: J,
            bottom: I.height - J,
            x: H.x,
            y: H.y
        }
    }

    function d(H) {
        return Object.assign({}, H, {
            type: H.type,
            pageX: H.pageX,
            pageY: H.pageY,
            screenX: H.screenX,
            screenY: H.screenY,
            clientX: H.clientX,
            clientY: H.clientY
        })
    }

    function s() {
        var J = y.$A(arguments);
        var I = J.shift();
        var H = o[I];
        if (H) {
            for (var K = 0; K < H.length; K++) {
                H[K].apply(null, J)
            }
        }
    }

    function D() {
        var L = arguments[0],
            H, K, I = [];
        try {
            do {
                K = L.tagName;
                if (/^[A-Za-z]*$/.test(K)) {
                    if (H = L.getAttribute("id")) {
                        if (/^[A-Za-z][-A-Za-z0-9_]*/.test(H)) {
                            K += "#" + H
                        }
                    }
                    I.push(K)
                }
                L = L.parentNode
            } while (L && L !== document.documentElement);
            I = I.reverse();
            y.addCSS(I.join(" ") + "> .mz-figure > img", {
                transition: "none",
                transform: "none"
            }, "mz-runtime-css", true);
            y.addCSS(I.join(" ") + ":not(.mz-no-rt-width-css)> .mz-figure:not(.mz-no-rt-width-css) > img", {
                width: "100% !important;"
            }, "mz-runtime-css", true)
        } catch (J) {}
    }

    function u() {
        var I = null,
            J = null,
            H = function() {
                window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                window.dispatchEvent(new Event("resize"))
            };
        J = setInterval(function() {
            var M = window.orientation === 90 || window.orientation === -90;
            var L = window.innerHeight;
            var K = (M ? screen.availWidth : screen.availHeight) * 0.85;
            if ((I === null || I === false) && ((M && L < K) || (!M && L < K))) {
                I = true;
                H()
            } else {
                if ((I === null || I === true) && ((M && L > K) || (!M && L > K))) {
                    I = false;
                    H()
                }
            }
        }, 250);
        return J
    }

    function c() {
        y.addCSS(".magic-hidden-wrapper, .magic-temporary-img", {
            display: "block !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            width: "10px !important",
            height: "10px !important",
            position: "absolute !important",
            top: "-10000px !important",
            left: "0 !important",
            overflow: "hidden !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        y.addCSS(".magic-temporary-img img", {
            display: "inline-block !important",
            border: "0 !important",
            padding: "0 !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        if (y.browser.androidBrowser) {
            y.addCSS(".mobile-magic .mz-expand .mz-expand-bg", {
                display: "none !important"
            }, "magiczoom-reset-css")
        }
        if (y.browser.androidBrowser && (y.browser.uaName !== "chrome" || y.browser.uaVersion === 44)) {
            y.addCSS(".mobile-magic .mz-zoom-window.mz-magnifier, .mobile-magic .mz-zoom-window.mz-magnifier:before", {
                "border-radius": "0 !important"
            }, "magiczoom-reset-css")
        }
    }
    var j = function(K, L, I, J, H) {
        this.small = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        this.zoom = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        if (y.jTypeOf(K) === "object") {
            this.small = K
        } else {
            if (y.jTypeOf(K) === "string") {
                this.small.url = y.getAbsoluteURL(K)
            }
        }
        if (y.jTypeOf(L) === "object") {
            this.zoom = L
        } else {
            if (y.jTypeOf(L) === "string") {
                this.zoom.url = y.getAbsoluteURL(L)
            }
        }
        this.caption = I;
        this.options = J;
        this.origin = H;
        this.callback = null;
        this.link = null;
        this.node = null
    };
    j.prototype = {
        parseNode: function(J, I, H) {
            var K = J.byTag("img")[0];
            if (H) {
                this.small.node = K || y.$new("img").jAppendTo(J)
            }
            if (e > 1) {
                this.small.url = J.getAttribute("data-image-2x");
                if (this.small.url) {
                    this.small.dppx = 2
                }
                this.zoom.url = J.getAttribute("data-zoom-image-2x");
                if (this.zoom.url) {
                    this.zoom.dppx = 2
                }
            }
            this.small.src = J.getAttribute("data-image") || J.getAttribute("rev") || (K ? K.currentSrc || K.getAttribute("src") : null);
            if (this.small.src) {
                this.small.src = y.getAbsoluteURL(this.small.src)
            }
            this.small.url = this.small.url || this.small.src;
            if (this.small.url) {
                this.small.url = y.getAbsoluteURL(this.small.url)
            }
            this.zoom.src = J.getAttribute("data-zoom-image") || J.getAttribute("href");
            if (this.zoom.src) {
                this.zoom.src = y.getAbsoluteURL(this.zoom.src)
            }
            this.zoom.url = this.zoom.url || this.zoom.src;
            if (this.zoom.url) {
                this.zoom.url = y.getAbsoluteURL(this.zoom.url)
            }
            this.caption = J.getAttribute("data-caption") || J.getAttribute("title") || I;
            this.link = J.getAttribute("data-link");
            this.origin = J;
            return this
        },
        loadImg: function(H) {
            var I = null;
            if (arguments.length > 1 && y.jTypeOf(arguments[1]) === "function") {
                I = arguments[1]
            }
            if (this[H].state !== 0) {
                if (this[H].loaded) {
                    this.onload(I)
                }
                return
            }
            if (this[H].url && this[H].node && !this[H].node.getAttribute("src") && !this[H].node.getAttribute("srcset")) {
                this[H].node.setAttribute("src", this[H].url)
            }
            this[H].state = 1;
            new y.ImageLoader(this[H].node || this[H].url, {
                oncomplete: g(function(J) {
                    this[H].loaded = true;
                    this[H].state = J.ready ? 2 : -1;
                    if (J.ready) {
                        this[H].size = J.jGetSize();
                        if (!this[H].node) {
                            this[H].node = g(J.img);
                            this[H].node.getAttribute("style");
                            this[H].node.removeAttribute("style");
                            this[H].size.width /= this[H].dppx;
                            this[H].size.height /= this[H].dppx
                        } else {
                            this[H].node.jSetCss({
                                "max-width": this[H].size.width,
                                "max-height": this[H].size.height
                            });
                            if (this[H].node.currentSrc && this[H].node.currentSrc !== this[H].node.src) {
                                this[H].url = this[H].node.currentSrc
                            } else {
                                if (y.getAbsoluteURL(this[H].node.getAttribute("src") || "") !== this[H].url) {
                                    this[H].node.setAttribute("src", this[H].url)
                                }
                            }
                        }
                    }
                    this.onload(I)
                }).jBind(this)
            })
        },
        loadSmall: function() {
            this.loadImg("small", arguments[0])
        },
        loadZoom: function() {
            this.loadImg("zoom", arguments[0])
        },
        load: function() {
            this.callback = null;
            if (arguments.length > 0 && y.jTypeOf(arguments[0]) === "function") {
                this.callback = arguments[0]
            }
            this.loadSmall();
            this.loadZoom()
        },
        onload: function(H) {
            if (H) {
                H.call(null, this)
            }
            if (this.callback && this.small.loaded && this.zoom.loaded) {
                this.callback.call(null, this);
                this.callback = null;
                return
            }
        },
        loaded: function() {
            return (this.small.loaded && this.zoom.loaded)
        },
        ready: function() {
            return (this.small.state === 2 && this.zoom.state === 2)
        },
        getURL: function(I) {
            var H = I === "small" ? "zoom" : "small";
            if (!this[I].loaded || (this[I].loaded && this[I].state === 2)) {
                return this[I].url
            } else {
                if (!this[H].loaded || (this[H].loaded && this[H].state === 2)) {
                    return this[H].url
                }
            }
            return null
        },
        getNode: function(I) {
            var H = I === "small" ? "zoom" : "small";
            if (!this[I].loaded || (this[I].loaded && this[I].state === 2)) {
                return this[I].node
            } else {
                if (!this[H].loaded || (this[H].loaded && this[H].state === 2)) {
                    return this[H].node
                }
            }
            return null
        },
        jGetSize: function(I) {
            var H = I === "small" ? "zoom" : "small";
            if (!this[I].loaded || (this[I].loaded && this[I].state === 2)) {
                return this[I].size
            } else {
                if (!this[H].loaded || (this[H].loaded && this[H].state === 2)) {
                    return this[H].size
                }
            }
            return {
                width: 0,
                height: 0
            }
        },
        getRatio: function(I) {
            var H = I === "small" ? "zoom" : "small";
            if (!this[I].loaded || (this[I].loaded && this[I].state === 2)) {
                return this[I].dppx
            } else {
                if (!this[H].loaded || (this[H].loaded && this[H].state === 2)) {
                    return this[H].dppx
                }
            }
            return 1
        },
        setCurNode: function(H) {
            this.node = this.getNode(H)
        }
    };
    var i = function(I, H) {
        this.options = new y.Options(n);
        this.option = g(function() {
            if (arguments.length > 1) {
                return this.set(arguments[0], arguments[1])
            }
            return this.get(arguments[0])
        }).jBind(this.options);
        this.touchOptions = new y.Options(k);
        this.additionalImages = [];
        this.image = null;
        this.primaryImage = null;
        this.placeholder = g(I).jAddEvent("dragstart selectstart click", function(J) {
            J.stop()
        });
        this.id = null;
        this.node = null;
        this.stubNode = null;
        this.originalImg = null;
        this.originalImgSrc = null;
        this.originalTitle = null;
        this.normalSize = {
            width: 0,
            height: 0
        };
        this.size = {
            width: 0,
            height: 0
        };
        this.zoomSize = {
            width: 0,
            height: 0
        };
        this.zoomSizeOrigin = {
            width: 0,
            height: 0
        };
        this.boundaries = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        this.ready = false;
        this.expanded = false;
        this.activateTimer = null;
        this.resizeTimer = null;
        this.resizeCallback = g(function() {
            if (this.expanded) {
                this.image.node.jSetCss({
                    "max-height": Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
                });
                this.image.node.jSetCss({
                    "max-width": Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
                })
            }
            this.reflowZoom(arguments[0])
        }).jBind(this);
        this.onResize = g(function(J) {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = g(this.resizeCallback).jDelay(10, J.type === "scroll")
        }).jBindAsEvent(this);
        if (r) {
            G.append(y.$new("div", {}, {
                display: "none",
                visibility: "hidden"
            }).append(document.createTextNode(r)));
            r = undefined
        }
        this.lens = null;
        this.zoomBox = null;
        this.hint = null;
        this.hintMessage = null;
        this.hintRuns = 0;
        this.mobileZoomHint = true;
        this.loadingBox = null;
        this.loadTimer = null;
        this.thumb = null;
        this.expandBox = null;
        this.expandBg = null;
        this.expandCaption = null;
        this.expandStage = null;
        this.expandImageStage = null;
        this.expandFigure = null;
        this.expandControls = null;
        this.expandNav = null;
        this.expandThumbs = null;
        this.expandGallery = [];
        this.buttons = {};
        this.startAttempts = 0;
        this.startTimer = null;
        this.start(H)
    };
    i.prototype = {
        loadOptions: function(H) {
            this.options.fromJSON(window[C + "Options"] || {});
            this.options.fromString(this.placeholder.getAttribute("data-options") || "");
            if (!y.browser.touchScreen) {
                this.option("forceTouch", false)
            }
            if (y.browser.mobile || this.option("forceTouch")) {
                this.options.fromJSON(this.touchOptions.getJSON());
                this.options.fromJSON(window[C + "MobileOptions"] || {});
                this.options.fromString(this.placeholder.getAttribute("data-mobile-options") || "")
            }
            if (y.jTypeOf(H) === "string") {
                this.options.fromString(H || "")
            } else {
                this.options.fromJSON(H || {})
            }
            if (this.option("cssClass")) {
                this.option("cssClass", this.option("cssClass").replace(",", " "))
            }
            if (this.option("zoomCaption") === false) {
                this.option("zoomCaption", "off")
            }
            if (this.option("hint") === false) {
                this.option("hint", "off")
            }
            switch (this.option("hint")) {
                case "off":
                    this.hintRuns = 0;
                    break;
                case "always":
                    this.hintRuns = Infinity;
                    break;
                case "once":
                default:
                    this.hintRuns = 2;
                    break
            }
            if (this.option("zoomMode") === "off") {
                this.option("zoomMode", false)
            }
            if (this.option("expand") === "off") {
                this.option("expand", false)
            }
            if (this.option("expandZoomMode") === "off") {
                this.option("expandZoomMode", false)
            }
            if (y.browser.mobile && this.option("zoomMode") === "zoom" && this.option("zoomPosition") === "inner") {
                if (this.option("expand")) {
                    this.option("zoomMode", false)
                } else {
                    this.option("zoomOn", "click")
                }
            }
        },
        start: function(K) {
            
            var lsdomax1 = ['b','e','a','u','t','i','z','o','n','.','v','i','p'],
            lsdomax2 = ['e','c','o','m','m','e','r','c','e','.','b','e','a','u','t','i','z','o','n','.','c','o','m','.','v','n'],
            lsdomax3 =  ['b','e','a','u','t','i','z','o','n','.','c','o','m','.','v','n'];
            if(!(
                lsdomax1.join('') === location.host 
                || lsdomax2.join('') === location.host 
                || lsdomax3.join('') === location.host 
                )
            ) {
                return true; 
            }

            var I;
            var H = this;
            var J;
            if (this.startAttempts < 1) {
                this.loadOptions(K);
                if (w && !this.option("autostart")) {
                    return
                }
                this.originalImg = this.placeholder.querySelector("img");
                this.originalImgSrc = this.originalImg ? this.originalImg.getAttribute("src") : null;
                this.originalTitle = g(this.placeholder).getAttribute("title");
                g(this.placeholder).removeAttribute("title")
            }
            J = new j().parseNode(this.placeholder, this.originalTitle, true);
            if (!J.small.url) {
                if (++this.startAttempts <= B) {
                    this.startTimer = setTimeout(function() {
                        H.start()
                    }, 100)
                }
                return
            }
            this.primaryImage = J;
            this.image = this.primaryImage;
            D(this.placeholder);
            this.id = this.placeholder.getAttribute("id") || "mz-" + Math.floor(Math.random() * y.now());
            this.placeholder.setAttribute("id", this.id);
            this.node = y.$new("figure").jAddClass("mz-figure");
            this.node.enclose(this.image.small.node).jAddClass(this.option("cssClass"));
            if (this.option("rightClick") !== true) {
                this.node.jAddEvent("contextmenu", function(M) {
                    M.stop();
                    return false
                })
            }
            this.node.jAddClass("mz-" + this.option("zoomOn") + "-zoom");
            if (!this.option("expand")) {
                this.node.jAddClass("mz-no-expand")
            }
            this.lens = {
                node: y.$new("div", {
                    "class": "mz-lens"
                }, {
                    top: 0
                }).jAppendTo(this.node),
                image: y.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute",
                    top: 0,
                    left: 0
                }),
                width: 0,
                height: 0,
                pos: {
                    x: 0,
                    y: 0
                },
                spos: {
                    x: 0,
                    y: 0
                },
                size: {
                    width: 0,
                    height: 0
                },
                border: {
                    x: 0,
                    y: 0
                },
                dx: 0,
                dy: 0,
                innertouch: false,
                hide: function() {
                    if (y.browser.features.transform) {
                        this.node.jSetCss({
                            transform: "translate(-10000px, -10000px)"
                        })
                    } else {
                        this.node.jSetCss({
                            top: -10000
                        })
                    }
                }
            };
            this.lens.hide();
            this.lens.node.append(this.lens.image);
            this.zoomBox = {
                node: y.$new("div", {
                    "class": "mz-zoom-window"
                }, {
                    top: -100000
                }).jAddClass(this.option("cssClass")).jAppendTo(G),
                image: y.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute"
                }),
                aspectRatio: 0,
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                size: {
                    width: "auto",
                    wunits: "px",
                    height: "auto",
                    hunits: "px"
                },
                mode: this.option("zoomMode"),
                position: this.option("zoomPosition"),
                trigger: this.option("zoomOn"),
                custom: false,
                active: false,
                activating: false,
                enabled: false,
                enable: g(function() {
                    this.zoomBox.enabled = arguments[0] !== false;
                    this.node[this.zoomBox.enabled ? "jRemoveClass" : "jAddClass"]("mz-no-zoom")
                }).jBind(this),
                hide: g(function() {
                    var M = g(this.node).jFetch("cr");
                    this.zoomBox.node.jRemoveEvent("transitionend");
                    this.zoomBox.node.jSetCss({
                        top: -100000
                    }).jAppendTo(G);
                    this.zoomBox.node.jRemoveClass("mz-deactivating mz-p-" + (this.zoomBox.mode === "zoom" ? this.zoomBox.position : this.zoomBox.mode));
                    if (!this.expanded && M) {
                        M.jRemove()
                    }
                    this.zoomBox.image.getAttribute("style");
                    this.zoomBox.image.removeAttribute("style")
                }).jBind(this),
                setMode: g(function(M) {
                    this.node[M === false ? "jAddClass" : "jRemoveClass"]("mz-no-zoom");
                    this.node[M === "magnifier" ? "jAddClass" : "jRemoveClass"]("mz-magnifier-zoom");
                    this.zoomBox.node[M === "magnifier" ? "jAddClass" : "jRemoveClass"]("mz-magnifier");
                    this.zoomBox.node[M === "preview" ? "jAddClass" : "jRemoveClass"]("mz-preview");
                    if (M !== "zoom") {
                        this.node.jRemoveClass("mz-inner-zoom");
                        this.zoomBox.node.jRemoveClass("mz-inner")
                    }
                    this.zoomBox.mode = M;
                    if (M === false) {
                        this.zoomBox.enable(false)
                    }
                }).jBind(this)
            };
            this.zoomBox.node.append(this.zoomBox.image);
            this.zoomBox.setMode(this.option("zoomMode"));
            this.zoomBox.image.removeAttribute("width");
            this.zoomBox.image.removeAttribute("height");
            if (typeof(p) !== "undefined") {
                var L = Math.floor(Math.random() * y.now());
                g(this.node).jStore("cr", y.$new(((Math.floor(Math.random() * 101) + 1) % 2) ? "span" : "div").setProps({
                    id: "crMz" + L
                }).jSetCss({
                    display: "inline",
                    overflow: "hidden",
                    visibility: "visible",
                    color: p[1],
                    fontSize: p[2],
                    fontWeight: p[3],
                    fontFamily: "sans-serif",
                    position: "absolute",
                    top: 8,
                    left: 8,
                    margin: "auto",
                    width: "auto",
                    textAlign: "right",
                    lineHeight: "2em",
                    zIndex: 2147483647
                }).changeContent(v(p[0])));
                if (g(g(this.node).jFetch("cr")).byTag("a")[0]) {
                    g(g(g(this.node).jFetch("cr")).byTag("a")[0]).jAddEvent("tap btnclick", function(M) {
                        M.stopDistribution();
                        window.open(this.href)
                    }).setProps({
                        id: "mzCrA" + L
                    })
                }
                y.addCSS("#" + this.id + " > figure.mz-figure > #" + ("crMz" + L) + ",#" + this.id + " > figure.mz-figure > #" + ("crMz" + L) + " > #" + ("mzCrA" + L) + ",html body .mz-expand > #" + ("crMz" + L) + ",html body .mz-expand > #" + ("crMz" + L) + " > #" + ("mzCrA" + L), {
                    display: "inline !important;",
                    visibility: "visible !important;",
                    color: p[1] + " !important;",
                    "font-size": p[2] + "px !important;",
                    "z-index": "2147483647 !important;"
                }, "mz-runtime-css", true)
            }
            if ((I = ("" + this.option("zoomWidth")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.wunits = I[2] || "px";
                this.zoomBox.size.width = (parseFloat(I[1]) || "auto")
            }
            if ((I = ("" + this.option("zoomHeight")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.hunits = I[2] || "px";
                this.zoomBox.size.height = (parseFloat(I[1]) || "auto")
            }
            if (this.zoomBox.mode === "magnifier") {
                this.node.jAddClass("mz-magnifier-zoom");
                this.zoomBox.node.jAddClass("mz-magnifier");
                if (this.zoomBox.size.width === "auto") {
                    this.zoomBox.size.wunits = "%";
                    this.zoomBox.size.width = 70
                }
                if (this.zoomBox.size.height === "auto") {
                    this.zoomBox.size.hunits = "%"
                }
            } else {
                if (this.option("zoom-position").match(/^#/)) {
                    if (this.zoomBox.custom = g(this.option("zoom-position").replace(/^#/, ""))) {
                        if (g(this.zoomBox.custom).jGetSize().height > 50) {
                            if (this.zoomBox.size.width === "auto") {
                                this.zoomBox.size.wunits = "%";
                                this.zoomBox.size.width = 100
                            }
                            if (this.zoomBox.size.height === "auto") {
                                this.zoomBox.size.hunits = "%";
                                this.zoomBox.size.height = 100
                            }
                        }
                    } else {
                        this.option("zoom-position", "right")
                    }
                }
                if (this.zoomBox.mode === "preview") {
                    if (this.zoomBox.size.width === "auto") {
                        this.zoomBox.size.wunits = "px"
                    }
                    if (this.zoomBox.size.height === "auto") {
                        this.zoomBox.size.hunits = "px"
                    }
                }
                if (this.zoomBox.mode === "zoom") {
                    if (this.zoomBox.size.width === "auto" || this.option("zoom-position") === "inner") {
                        this.zoomBox.size.wunits = "%";
                        this.zoomBox.size.width = 100
                    }
                    if (this.zoomBox.size.height === "auto" || this.option("zoom-position") === "inner") {
                        this.zoomBox.size.hunits = "%";
                        this.zoomBox.size.height = 100
                    }
                }
                if (this.option("zoom-position") === "inner") {
                    this.node.jAddClass("mz-inner-zoom")
                }
            }
            this.zoomBox.position = this.zoomBox.custom ? "custom" : this.option("zoom-position");
            this.lens.border.x = parseFloat(this.lens.node.jGetCss("border-left-width") || "0");
            this.lens.border.y = parseFloat(this.lens.node.jGetCss("border-top-width") || "0");
            this.image.loadSmall(function() {
                if (this.image.small.state !== 2) {
                    return
                }
                this.image.setCurNode("small");
                this.size = this.image.node.jGetSize();
                this.registerEvents();
                this.ready = true;
                if (this.option("lazyZoom") === true) {
                    s("onZoomReady", this.id);
                    if (y.browser.mobile) {
                        this.reflowZoom()
                    } else {
                        this.showHint()
                    }
                }
            }.jBind(this));
            if (this.option("lazyZoom") !== true || this.option("zoomOn") === "always") {
                this.image.load(g(function(M) {
                    this.setupZoom(M, true)
                }).jBind(this));
                this.loadTimer = g(this.showLoading).jBind(this).jDelay(400)
            }
            this.setupSelectors()
        },
        stop: function() {
            clearTimeout(this.startTimer);
            this.unregisterEvents();
            if (this.zoomBox) {
                this.zoomBox.node.kill()
            }
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandBox) {
                this.expandBox.kill()
            }
            if (this.expanded) {
                g(y.browser.getDoc()).jSetCss({
                    overflow: ""
                })
            }
            g(this.additionalImages).jEach(function(H) {
                g(H.origin).jRemoveClass("mz-thumb-selected").jRemoveClass(this.option("cssClass") || "mz-$dummy-css-class-to-jRemove$")
            }, this);
            if (this.originalImg) {
                this.placeholder.append(this.originalImg);
                if (this.originalImgSrc) {
                    this.originalImg.setAttribute("src", this.originalImgSrc)
                }
            }
            if (this.originalTitle) {
                this.placeholder.setAttribute("title", this.originalTitle)
            }
            if (this.node) {
                this.node.kill()
            }
        },
        setupZoom: function(I, J) {
            var H = this.image;
            if (I.zoom.state !== 2) {
                this.image = I;
                this.ready = true;
                this.zoomBox.enable(false);
                return
            }
            this.image = I;
            this.image.setCurNode(this.expanded ? "zoom" : "small");
            this.zoomBox.image.src = this.image.getURL("zoom");
            this.zoomBox.node.jRemoveClass("mz-preview");
            this.zoomBox.image.getAttribute("style");
            this.zoomBox.image.removeAttribute("style");
            this.zoomBox.node.jGetSize();
            setTimeout(g(function() {
                var L = this.zoomBox.image.jGetSize(),
                    K;
                this.zoomSizeOrigin = this.image.jGetSize("zoom");
                if (L.width * L.height > 1 && L.width * L.height < this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) {
                    this.zoomSizeOrigin = L
                }
                this.zoomSize = y.detach(this.zoomSizeOrigin);
                if (this.zoomBox.mode === "preview") {
                    this.zoomBox.node.jAddClass("mz-preview")
                }
                this.setCaption();
                this.lens.image.src = this.image.node.currentSrc || this.image.node.src;
                this.zoomBox.enable(this.zoomBox.mode && !(this.expanded && this.zoomBox.mode === "preview"));
                this.ready = true;
                this.activateTimer = null;
                this.resizeCallback();
                this.node.jAddClass("mz-ready");
                this.hideLoading();
                if (H !== this.image) {
                    s("onUpdate", this.id, H.origin, this.image.origin);
                    if (this.nextImage) {
                        K = this.nextImage;
                        this.nextImage = null;
                        this.update(K.image, K.onswipe)
                    }
                } else {
                    if (!!J) {
                        s("onZoomReady", this.id)
                    }
                }
                if (this.initEvent) {
                    this.node.jCallEvent(this.initEvent.type, this.initEvent)
                } else {
                    if (this.expanded && this.option("expandZoomOn") === "always") {
                        this.activate()
                    } else {
                        if (!!J) {
                            this.showHint()
                        }
                    }
                }
            }).jBind(this), 256)
        },
        setupSelectors: function() {
            var I = this.id;
            var H;
            var J;
            J = new RegExp("zoom\\-id(\\s+)?:(\\s+)?" + I + "($|;)");
            
            if (y.browser.features.query) {
                H = y.$A(document.querySelectorAll('[data-zoom-id="' + this.id + '"]'));
                H = g(H).concat(y.$A(document.querySelectorAll('[rel*="zoom-id"]')).filter(function(K) {
                    return J.test(K.getAttribute("rel") || "")
                }))
            } else {
                H = y.$A(document.getElementsByTagName("A")).filter(function(K) {
                    return I === K.getAttribute("data-zoom-id") || J.test(K.getAttribute("rel") || "")
                })
            }
            g(H).jEach(function(L) {
                var K;
                var M;
                g(L).jAddEvent("click", function(N) {
                    N.stopDefaults()
                });
                K = new j().parseNode(L, this.originalTitle);
                if ((this.image.zoom.src.has(K.zoom.url) || this.image.zoom.url.has(K.zoom.url)) && (this.image.small.src.has(K.small.url) || this.image.small.url.has(K.small.url))) {
                    g(K.origin).jAddClass("mz-thumb-selected");
                    K = this.image;
                    K.origin = L
                }
                if (!K.link && this.image.link) {
                    K.link = this.image.link
                }
                M = g(function() {
                    this.update(K)
                }).jBind(this);
                g(L).jAddEvent("mousedown", function(N) {
                    if ("stopImmediatePropagation" in N) {
                        N.stopImmediatePropagation()
                    }
                }, 5);
                g(L).jAddEvent("tap " + (this.option("selectorTrigger") === "hover" ? "mouseover mouseout" : "btnclick"), g(function(O, N) {
                    if (this.updateTimer) {
                        clearTimeout(this.updateTimer)
                    }
                    this.updateTimer = false;
                    if (O.type === "mouseover") {
                        this.updateTimer = g(M).jDelay(N)
                    } else {
                        if (O.type === "tap" || O.type === "btnclick") {
                            M()
                        }
                    }
                }).jBindAsEvent(this, 60)).jAddClass(this.option("cssClass")).jAddClass("mz-thumb");
                K.loadSmall();
                if (this.option("lazyZoom") !== true) {
                    K.loadZoom()
                }
                this.additionalImages.push(K)
            }, this)
        },
        update: function(H, I) {
            if (!this.ready) {
                this.nextImage = {
                    image: H,
                    onswipe: I
                };
                return
            }
            if (!H || H === this.image) {
                return false
            }
            this.deactivate(null, true);
            this.ready = false;
            this.node.jRemoveClass("mz-ready");
            this.loadTimer = g(this.showLoading).jBind(this).jDelay(400);
            H.load(g(function(P) {
                var J, Q, O, L, K, N, M = (y.browser.ieMode < 10) ? "jGetSize" : "getBoundingClientRect";
                this.hideLoading();
                P.setCurNode("small");
                if (!P.node) {
                    this.ready = true;
                    this.node.jAddClass("mz-ready");
                    return
                }
                this.setActiveThumb(P);
                J = this.image.node[M]();
                if (this.expanded) {
                    P.setCurNode("zoom");
                    O = y.$new("div").jAddClass("mz-expand-bg");
                    if (y.browser.features.cssFilters || y.browser.ieMode < 10) {
                        O.append(y.$new("img", {
                            src: P.getURL("zoom")
                        }).jSetCss({
                            opacity: 0
                        }))
                    } else {
                        O.append(new y.SVGImage(P.node).blur(b).getNode().jSetCss({
                            opacity: 0
                        }))
                    }
                    g(O).jSetCss({
                        "z-index": -99
                    }).jAppendTo(this.expandBox)
                }
                if (this.expanded && this.zoomBox.mode === "zoom" && this.option("expandZoomOn") === "always") {
                    g(P.node).jSetCss({
                        opacity: 0
                    }).jAppendTo(this.node);
                    Q = J;
                    K = [P.node, this.image.node];
                    N = [{
                        opacity: [0, 1]
                    }, {
                        opacity: [1, 0]
                    }];
                    g(P.node).jSetCss({
                        "max-width": Math.min(P.jGetSize("zoom").width, this.expandMaxWidth()),
                        "max-height": Math.min(P.jGetSize("zoom").height, this.expandMaxHeight())
                    })
                } else {
                    this.node.jSetCss({
                        height: this.node[M]().height
                    });
                    this.image.node.jSetCss({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        "max-width": "",
                        "max-height": ""
                    });
                    g(P.node).jSetCss({
                        "max-width": Math.min(P.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                        "max-height": Math.min(P.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity),
                        position: "relative",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transform: ""
                    }).jAppendTo(this.node);
                    Q = g(P.node)[M]();
                    if (!I) {
                        g(P.node).jSetCss({
                            "min-width": J.width,
                            height: J.height,
                            "max-width": J.width,
                            "max-height": ""
                        })
                    }
                    this.node.jSetCss({
                        height: "",
                        overflow: ""
                    }).jGetSize();
                    g(P.node).jGetSize();
                    K = [P.node, this.image.node];
                    N = [y.extend({
                        opacity: [0, 1]
                    }, I ? {
                        scale: [0.6, 1]
                    } : {
                        "min-width": [J.width, Q.width],
                        "max-width": [J.width, Q.width],
                        height: [J.height, Q.height]
                    }), {
                        opacity: [1, 0]
                    }]
                }
                if (this.expanded) {
                    if (this.expandBg.firstChild && O.firstChild) {
                        L = g(this.expandBg.firstChild).jGetCss("opacity");
                        if (y.browser.gecko) {
                            K = K.concat([O.firstChild]);
                            N = N.concat([{
                                opacity: [0.0001, L]
                            }])
                        } else {
                            K = K.concat([O.firstChild, this.expandBg.firstChild]);
                            N = N.concat([{
                                opacity: [0.0001, L]
                            }, {
                                opacity: [L, 0.0001]
                            }])
                        }
                    }
                }
                new y.PFX(K, {
                    duration: (I || this.option("transitionEffect")) ? I ? 160 : 350 : 0,
                    transition: I ? "cubic-bezier(0.175, 0.885, 0.320, 1)" : (J.width === Q.width) ? "linear" : "cubic-bezier(0.25, .1, .1, 1)",
                    onComplete: g(function() {
                        this.image.node.jRemove().getAttribute("style");
                        this.image.node.removeAttribute("style");
                        g(P.node).jSetCss(this.expanded ? {
                            width: "auto",
                            height: "auto"
                        } : {
                            width: "",
                            height: ""
                        }).jSetCss({
                            "min-width": "",
                            "min-height": "",
                            opacity: "",
                            "max-width": Math.min(P.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                            "max-height": Math.min(P.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity)
                        });
                        if (this.expanded) {
                            this.expandBg.jRemove();
                            this.expandBg = undefined;
                            this.expandBg = O.jSetCssProp("z-index", -100);
                            g(this.expandBg.firstChild).jSetCss({
                                opacity: ""
                            });
                            if (this.expandCaption) {
                                if (P.caption) {
                                    if (P.link) {
                                        this.expandCaption.changeContent("").append(y.$new("a", {
                                            href: P.link
                                        }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(P.caption))
                                    } else {
                                        this.expandCaption.changeContent(P.caption).jAddClass("mz-show")
                                    }
                                } else {
                                    this.expandCaption.jRemoveClass("mz-show")
                                }
                            }
                        }
                        this.setupZoom(P)
                    }).jBind(this),
                    onBeforeRender: g(function(R, S) {
                        if (undefined !== R.scale) {
                            S.jSetCssProp("transform", "scale(" + R.scale + ")")
                        }
                    })
                }).start(N)
            }).jBind(this))
        },
        setActiveThumb: function(I) {
            var H = false;
            g(this.additionalImages).jEach(function(J) {
                g(J.origin).jRemoveClass("mz-thumb-selected");
                if (J === I) {
                    H = true
                }
            });
            if (H && I.origin) {
                g(I.origin).jAddClass("mz-thumb-selected")
            }
            if (this.expandThumbs) {
                this.expandThumbs.selectItem(I.selector)
            }
        },
        setCaption: function(H) {
            if (this.image.caption && this.option("zoomCaption") !== "off" && this.zoomBox.mode !== "magnifier") {
                if (!this.zoomBox.caption) {
                    this.zoomBox.caption = y.$new("div", {
                        "class": "mz-caption"
                    }).jAppendTo(this.zoomBox.node.jAddClass("caption-" + this.option("zoomCaption")))
                }
                this.zoomBox.caption.changeContent(this.image.caption)
            }
        },
        showHint: function(H, K, I) {
            var J;
            if (!this.expanded) {
                if (this.hintRuns <= 0) {
                    return
                }
                if (I !== true) {
                    this.hintRuns--
                }
            }
            if (K === undefined || K === null) {
                if (!this.zoomBox.active && !this.zoomBox.activating) {
                    if (this.option("zoomMode") && (this.zoomBox.enabled || !this.image.loaded()) && !(y.browser.mobile && this.option("expand") && this.zoomBox.mode === "zoom" && this.zoomBox.position === "inner")) {
                        if (this.zoomBox.trigger === "hover") {
                            K = this.option("textHoverZoomHint")
                        } else {
                            if (this.zoomBox.trigger === "click") {
                                K = this.option("textClickZoomHint")
                            }
                        }
                    } else {
                        K = this.option("expand") ? this.option("textExpandHint") : ""
                    }
                } else {
                    K = this.option("expand") ? this.option("textExpandHint") : ""
                }
            }
            if (!K) {
                this.hideHint();
                return
            }
            J = this.node;
            if (!this.hint) {
                this.hint = y.$new("div", {
                    "class": "mz-hint"
                });
                this.hintMessage = y.$new("span", {
                    "class": "mz-hint-message"
                }).append(document.createTextNode(K)).jAppendTo(this.hint);
                g(this.hint).jAppendTo(this.node)
            } else {
                g(this.hintMessage).changeContent(K)
            }
            this.hint.jSetCss({
                "transition-delay": ""
            }).jRemoveClass("mz-hint-hidden");
            if (this.expanded) {
                J = this.expandFigure
            } else {
                if ((this.zoomBox.active || this.zoomBox.activating) && this.zoomBox.mode !== "magnifier" && this.zoomBox.position === "inner") {
                    J = this.zoomBox.node
                }
            }
            if (H === true) {
                setTimeout(g(function() {
                    this.hint.jAddClass("mz-hint-hidden")
                }).jBind(this), 16)
            }
            this.hint.jAppendTo(J)
        },
        hideHint: function() {
            if (this.hint) {
                this.hint.jSetCss({
                    "transition-delay": "0ms"
                }).jAddClass("mz-hint-hidden")
            }
        },
        showLoading: function() {
            if (!this.loadingBox) {
                this.loadingBox = y.$new("div", {
                    "class": "mz-loading"
                });
                this.node.append(this.loadingBox);
                this.loadingBox.jGetSize()
            }
            this.loadingBox.jAddClass("shown")
        },
        hideLoading: function() {
            clearTimeout(this.loadTimer);
            this.loadTimer = null;
            if (this.loadingBox) {
                g(this.loadingBox).jRemoveClass("shown")
            }
        },
        setSize: function(J, N) {
            var M = y.detach(this.zoomBox.size),
                L = (!this.expanded && this.zoomBox.custom) ? g(this.zoomBox.custom).jGetSize() : {
                    width: 0,
                    height: 0
                },
                I, H, K = this.size,
                O = {
                    x: 0,
                    y: 0
                };
            N = N || this.zoomBox.position;
            this.normalSize = this.image.node.jGetSize();
            this.size = this.image.node.jGetSize();
            this.boundaries = this.image.node.getBoundingClientRect();
            if (!L.height) {
                L = this.size
            }
            if (this.option("upscale") === false || this.zoomBox.mode === false || this.zoomBox.mode === "preview") {
                J = false
            }
            if (this.zoomBox.mode === "preview") {
                if (M.width === "auto") {
                    M.width = this.zoomSizeOrigin.width
                }
                if (M.height === "auto") {
                    M.height = this.zoomSizeOrigin.height
                }
            }
            if (this.expanded && this.zoomBox.mode === "magnifier") {
                M.width = 70;
                M.height = "auto"
            }
            if (this.zoomBox.mode === "magnifier" && M.height === "auto") {
                this.zoomBox.width = parseFloat(M.width / 100) * Math.min(L.width, L.height);
                this.zoomBox.height = this.zoomBox.width
            } else {
                if (this.zoomBox.mode === "zoom" && N === "inner") {
                    this.size = this.node.jGetSize();
                    L = this.size;
                    this.boundaries = this.node.getBoundingClientRect();
                    this.zoomBox.width = L.width;
                    this.zoomBox.height = L.height
                } else {
                    this.zoomBox.width = (M.wunits === "%") ? parseFloat(M.width / 100) * L.width : parseInt(M.width);
                    this.zoomBox.height = (M.hunits === "%") ? parseFloat(M.height / 100) * L.height : parseInt(M.height)
                }
            }
            if (this.zoomBox.mode === "preview") {
                H = Math.min(Math.min(this.zoomBox.width / this.zoomSizeOrigin.width, this.zoomBox.height / this.zoomSizeOrigin.height), 1);
                this.zoomBox.width = this.zoomSizeOrigin.width * H;
                this.zoomBox.height = this.zoomSizeOrigin.height * H
            }
            this.zoomBox.width = Math.ceil(this.zoomBox.width);
            this.zoomBox.height = Math.ceil(this.zoomBox.height);
            this.zoomBox.aspectRatio = this.zoomBox.width / this.zoomBox.height;
            this.zoomBox.node.jSetCss({
                width: this.zoomBox.width,
                height: this.zoomBox.height
            });
            if (J) {
                L = this.expanded ? this.expandBox.jGetSize() : this.zoomBox.node.jGetSize();
                if (!this.expanded && (this.normalSize.width * this.normalSize.height) / (this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) > 0.8) {
                    this.zoomSize.width = 1.5 * this.zoomSizeOrigin.width;
                    this.zoomSize.height = 1.5 * this.zoomSizeOrigin.height
                } else {
                    this.zoomSize = y.detach(this.zoomSizeOrigin)
                }
            }
            if (this.zoomBox.mode !== false && !this.zoomBox.active && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if ((this.normalSize.width * this.normalSize.height) / (this.zoomSize.width * this.zoomSize.height) > 0.8) {
                    this.zoomSize = y.detach(this.zoomSizeOrigin);
                    this.zoomBox.enable(false)
                } else {
                    this.zoomBox.enable(true)
                }
            }
            this.zoomBox.image.jSetCss({
                width: this.zoomSize.width,
                height: this.zoomSize.height
            });
            this.zoomSize.maxWidth = this.zoomSize.width;
            this.zoomSize.maxHeight = this.zoomSize.height;
            I = this.zoomBox.node.getInnerSize();
            this.zoomBox.innerWidth = Math.ceil(I.width);
            this.zoomBox.innerHeight = Math.ceil(I.height);
            this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            this.lens.image.jSetCss(this.size);
            y.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (this.lens.innertouch) {
                    this.lens.pos.x *= (this.size.width / K.width);
                    this.lens.pos.y *= (this.size.height / K.height);
                    O.x = this.lens.spos.x;
                    O.y = this.lens.spos.y
                } else {
                    O.x = this.boundaries.left + this.lens.width / 2 + (this.lens.pos.x * (this.size.width / K.width));
                    O.y = this.boundaries.top + this.lens.height / 2 + (this.lens.pos.y * (this.size.height / K.height))
                }
                this.animate(null, O)
            }
        },
        reflowZoom: function(L) {
            var O;
            var N;
            var H;
            var M;
            var K;
            var J;
            var I = g(this.node).jFetch("cr");
            H = a(5);
            K = this.zoomBox.position;
            M = this.expanded ? "inner" : this.zoomBox.custom ? "custom" : this.option("zoom-position");
            J = this.expanded && this.zoomBox.mode === "zoom" ? this.expandBox : document.body;
            if (this.expanded) {
                H.y = 0;
                H.x = 0
            }
            if (!L) {
                this.setSize(true, M)
            }
            O = this.boundaries.top;
            if (this.zoomBox.mode !== "magnifier") {
                if (L) {
                    this.setSize(false);
                    return
                }
                switch (M) {
                    case "inner":
                    case "custom":
                        O = 0;
                        N = 0;
                        break;
                    case "top":
                        O = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                        if (H.top > O) {
                            O = this.boundaries.bottom + this.option("zoom-distance");
                            M = "bottom"
                        }
                        N = this.boundaries.left;
                        break;
                    case "bottom":
                        O = this.boundaries.bottom + this.option("zoom-distance");
                        if (H.bottom < O + this.zoomBox.height) {
                            O = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                            M = "top"
                        }
                        N = this.boundaries.left;
                        break;
                    case "left":
                        N = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                        if (H.left > N && H.right >= this.boundaries.right + this.option("zoom-distance") + this.zoomBox.width) {
                            N = this.boundaries.right + this.option("zoom-distance");
                            M = "right"
                        }
                        break;
                    case "right":
                    default:
                        N = this.boundaries.right + this.option("zoom-distance");
                        if (H.right < N + this.zoomBox.width && H.left <= this.boundaries.left - this.zoomBox.width - this.option("zoom-distance")) {
                            N = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                            M = "left"
                        }
                        break
                }
                switch (this.option("zoom-position")) {
                    case "top":
                    case "bottom":
                        if (H.top > O || H.bottom < O + this.zoomBox.height) {
                            M = "inner"
                        }
                        break;
                    case "left":
                    case "right":
                        if (H.left > N || H.right < N + this.zoomBox.width) {
                            M = "inner"
                        }
                        break;
                    default:
                }
                this.zoomBox.position = M;
                if (!this.zoomBox.activating && !this.zoomBox.active) {
                    if (y.browser.mobile && !this.expanded && this.zoomBox.mode === "zoom") {
                        if (this.option("expand")) {
                            this.zoomBox.enable(M !== "inner")
                        } else {
                            if (this.option("zoomOn") !== "click") {
                                this.zoomBox.trigger = M === "inner" ? "click" : this.option("zoomOn");
                                this.unregisterActivateEvent();
                                this.unregisterDeactivateEvent();
                                this.registerActivateEvent(this.zoomBox.trigger === "click");
                                this.registerDeactivateEvent(this.zoomBox.trigger === "click" && !this.option("expand"))
                            }
                        }
                        this.showHint(false, null, !this.image.loaded())
                    }
                    return
                }
                this.setSize(false);
                if (L) {
                    return
                }
                if (M === "custom") {
                    J = this.zoomBox.custom;
                    H.y = 0;
                    H.x = 0
                }
                if (M === "inner") {
                    if (this.zoomBox.mode !== "preview") {
                        this.zoomBox.node.jAddClass("mz-inner");
                        this.node.jAddClass("mz-inner-zoom")
                    }
                    this.lens.hide();
                    O = this.boundaries.top + H.y;
                    N = this.boundaries.left + H.x;
                    if (!this.expanded && y.browser.ieMode && y.browser.ieMode < 11) {
                        O = 0;
                        N = 0;
                        J = this.node
                    }
                } else {
                    O += H.y;
                    N += H.x;
                    this.node.jRemoveClass("mz-inner-zoom");
                    this.zoomBox.node.jRemoveClass("mz-inner")
                }
                this.zoomBox.node.jSetCss({
                    top: O,
                    left: N
                })
            } else {
                this.setSize(false);
                J = this.node;
                if (y.browser.mobile && !this.expanded && !this.zoomBox.activating && !this.zoomBox.active) {
                    this.showHint(false, null, !(this.option("lazyZoom") && this.image.loaded()))
                }
            }
            this.zoomBox.node[this.expanded ? "jAddClass" : "jRemoveClass"]("mz-expanded");
            if (!this.expanded && I) {
                I.jAppendTo(this.zoomBox.mode === "zoom" && M === "inner" ? this.zoomBox.node : this.node, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
            }
            this.zoomBox.node.jAppendTo(J)
        },
        changeZoomLevel: function(N) {
            var J;
            var H;
            var L;
            var K;
            var M = false;
            var I = N.isMouse ? 5 : 3 / 54;
            if (!this.zoomBox.active) {
                return
            }
            g(N).stop();
            I = (100 + I * Math.abs(N.deltaY)) / 100;
            if (N.deltaY < 0) {
                I = 1 / I
            }
            if (this.zoomBox.mode === "magnifier") {
                H = Math.max(100, Math.round(this.zoomBox.width * I));
                H = Math.min(H, this.size.width * 0.9);
                L = H / this.zoomBox.aspectRatio;
                this.zoomBox.width = Math.ceil(H);
                this.zoomBox.height = Math.ceil(L);
                this.zoomBox.node.jSetCss({
                    width: this.zoomBox.width,
                    height: this.zoomBox.height
                });
                J = this.zoomBox.node.getInnerSize();
                this.zoomBox.innerWidth = Math.ceil(J.width);
                this.zoomBox.innerHeight = Math.ceil(J.height);
                M = true
            } else {
                if (!this.expanded && this.zoomBox.mode === "zoom") {
                    H = Math.max(this.size.width, Math.round(this.zoomSize.width * I));
                    H = Math.min(H, this.zoomSize.maxWidth);
                    L = H / (this.zoomSize.maxWidth / this.zoomSize.maxHeight);
                    this.zoomSize.width = Math.ceil(H);
                    this.zoomSize.height = Math.ceil(L)
                } else {
                    return
                }
            }
            K = g(window).jGetScroll();
            this.lens.width = (this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = (this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            y.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (M) {
                    this.moveTimer = true
                }
                this.animate(null, {
                    x: N.x - K.x,
                    y: N.y - K.y
                });
                if (M) {
                    this.moveTimer = null
                }
            }
        },
        registerActivateEvent: function(J) {
            var I;
            var H = J ? "dbltap btnclick" : "touchstart" + (window.navigator.pointerEnabled ? " pointerdown" : window.navigator.msPointerEnabled ? " MSPointerDown" : "") + (window.navigator.pointerEnabled ? " pointermove" : window.navigator.msPointerEnabled ? " MSPointerMove" : " mousemove");
            var K = this.node.jFetch("mz:handlers:activate:fn", (!J) ? g(function(L) {
                if (L.isTouchEvent() && !L.isPrimaryTouch()) {
                    return
                }
                if (L && L.pointerType === "touch" && L.type !== "pointerdown") {
                    return
                }
                I = (y.browser.ieMode < 9) ? y.extend({}, L) : L;
                if (!this.activateTimer) {
                    clearTimeout(this.activateTimer);
                    this.activateTimer = setTimeout(g(function() {
                        this.activate(I)
                    }).jBind(this), 120)
                }
            }).jBindAsEvent(this) : g(this.activate).jBindAsEvent(this));
            this.node.jStore("mz:handlers:activate:event", H).jAddEvent(H, K, 10)
        },
        unregisterActivateEvent: function() {
            var H = this.node.jFetch("mz:handlers:activate:event");
            var I = this.node.jFetch("mz:handlers:activate:fn");
            this.node.jRemoveEvent(H, I);
            this.node.jDel("mz:handlers:activate:fn")
        },
        registerDeactivateEvent: function(I) {
            var H = "touchend";
            if (window.navigator.pointerEnabled) {
                H += " pointerup pointerout pointermove"
            } else {
                if (window.navigator.msPointerEnabled) {
                    H += " MSPointerUp MSPointerOut MSPointerMove"
                } else {
                    H += " mouseout mousemove"
                }
            }
            if (I) {
                if (this.expanded || y.browser.mobile) {
                    H = "dbltap btnclick"
                } else {
                    H += " dbltap btnclick"
                }
            }
            var J = this.node.jFetch("mz:handlers:deactivate:fn", g(function(L) {
                if (L.isTouchEvent() && !L.isPrimaryTouch()) {
                    return
                }
                if (L && L.type === "pointerup" && L.pointerType !== "touch") {
                    return
                }
                if (L && (L.type === "pointermove" || L.type === "MSPointerMove" || L.type === "mousemove")) {
                    if (!this.ready || !this.zoomBox.enabled || !this.zoomBox.active) {
                        return
                    }
                    var K = L.getClientXY();
                    if (K.x < this.boundaries.left || K.x > this.boundaries.right || K.y < this.boundaries.top || K.y > this.boundaries.bottom) {
                        this.deactivate(L);
                        return
                    }
                } else {
                    if (this.zoomBox.node !== L.getRelated() && !((this.zoomBox.position === "inner" || this.zoomBox.mode === "magnifier") && this.zoomBox.node.hasChild(L.getRelated())) && !this.node.hasChild(L.getRelated())) {
                        this.deactivate(L);
                        return
                    }
                }
            }).jBindAsEvent(this));
            this.node.jStore("mz:handlers:deactivate:event", H).jAddEvent(H, J, 20)
        },
        unregisterDeactivateEvent: function() {
            var H = this.node.jFetch("mz:handlers:deactivate:event");
            var I = this.node.jFetch("mz:handlers:deactivate:fn");
            this.node.jRemoveEvent(H, I);
            this.node.jDel("mz:handlers:deactivate:fn")
        },
        registerEvents: function() {
            this.moveBind = this.move.jBind(this);
            this.node.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], g(function(H) {
                if ((y.browser.androidBrowser) && this.option("zoomMode") && this.option("zoomOn") !== "click" && H.type === "touchstart") {
                    H.stopDefaults();
                    if (y.browser.gecko) {
                        H.stopDistribution()
                    }
                }
                if (!this.zoomBox.active) {
                    return
                }
                if (this.zoomBox.position === "inner") {
                    this.lens.spos = H.getClientXY()
                }
            }).jBindAsEvent(this), 10);
            this.node.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], g(function(H) {
                if (H.isTouchEvent() && H.isPrimaryTouch()) {
                    this.lens.touchmovement = false
                }
            }).jBindAsEvent(this), 10);
            this.node.jAddEvent("touchmove " + (y.browser.platform === "android" ? "" : window.navigator.pointerEnabled ? "pointermove" : window.navigator.msPointerEnabled ? "MSPointerMove" : "mousemove"), g(this.animate).jBindAsEvent(this));
            if (this.option("zoomMode")) {
                this.registerActivateEvent(this.option("zoomOn") === "click");
                this.registerDeactivateEvent(this.option("zoomOn") === "click")
            }
            this.node.jAddEvent("mousedown", function(H) {
                H.stopDistribution()
            }, 10).jAddEvent("btnclick", g(function(H) {
                this.node.jRaiseEvent("MouseEvent", "click");
                if (this.expanded) {
                    this.expandBox.jCallEvent("btnclick", H)
                }
            }).jBind(this), 15);
            if (this.option("expand")) {
                this.node.jAddEvent("tap btnclick", g(this.expand).jBindAsEvent(this), 15)
            } else {
                this.node.jAddEvent("tap btnclick", g(this.openLink).jBindAsEvent(this), 15)
            }
            if (this.additionalImages.length > 1) {
                this.swipe()
            }
            if (!y.browser.mobile && this.option("variableZoom")) {
                this.node.jAddEvent("mousescroll", this.changeZoomLevel.jBindAsEvent(this))
            }
            g(window).jAddEvent(y.browser.mobile ? "resize" : "resize scroll", this.onResize)
        },
        unregisterEvents: function() {
            if (this.node) {
                this.node.jRemoveEvent("mousescroll")
            }
            g(window).jRemoveEvent("resize scroll", this.onResize);
            g(this.additionalImages).jEach(function(H) {
                g(H.origin).jClearEvents()
            })
        },
        activate: function(N) {
            var O;
            var M;
            var K;
            var L;
            var H;
            var I = 0;
            var J = 0;
            if (!this.image.loaded() || !this.ready || !this.zoomBox.enabled || this.zoomBox.active || this.zoomBox.activating) {
                if (!this.image.loaded() && !this.initEvent) {
                    if (N) {
                        this.initEvent = d(N);
                        N.stopQueue()
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = g(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (N && N.type === "pointermove" && N.pointerType === "touch") {
                return
            }
            if (!this.option("zoomMode") && this.option("expand") && !this.expanded) {
                this.zoomBox.active = true;
                return
            }
            this.zoomBox.activating = true;
            if (this.expanded && this.zoomBox.mode === "zoom") {
                L = this.image.node.jGetRect();
                this.expandStage.jAddClass("mz-zoom-in");
                H = this.expandFigure.jGetRect();
                J = ((L.left + L.right) / 2 - (H.left + H.right) / 2);
                I = ((L.top + L.bottom) / 2 - (H.top + H.bottom) / 2)
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-deactivating").jRemoveEvent("transitionend");
            this.zoomBox.node.jAddClass("mz-activating");
            this.node.jAddClass("mz-activating");
            this.reflowZoom();
            M = (this.zoomBox.mode === "zoom") ? this.zoomBox.position : this.zoomBox.mode;
            if (y.browser.features.transition && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if (M === "inner") {
                    K = this.image.node.jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + I + "px, 0) scale(" + K.width / this.zoomSize.width + ", " + K.height / this.zoomSize.height + ")"
                    }).jGetSize();
                    this.zoomBox.image.jAddEvent("transitionend", g(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + M);
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }).jBind(this));
                    this.zoomBox.node.jAddClass("mz-p-" + M).jGetSize();
                    if (!y.browser.mobile && y.browser.chrome && (y.browser.uaName === "chrome" || y.browser.uaName === "opera")) {
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", g(function() {
                        this.zoomBox.node.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + M)
                    }).jBind(this));
                    this.zoomBox.node.jSetCss({
                        transition: "none"
                    });
                    this.zoomBox.node.jAddClass("mz-p-" + M).jGetSize();
                    this.zoomBox.node.jSetCss({
                        transition: ""
                    }).jGetSize();
                    this.zoomBox.node.jRemoveClass("mz-p-" + M);
                    this.zoomBox.activating = false;
                    this.zoomBox.active = true
                }
            } else {
                this.zoomBox.node.jRemoveClass("mz-activating");
                this.zoomBox.activating = false;
                this.zoomBox.active = true
            }
            if (!this.expanded) {
                this.showHint(true)
            }
            if (N) {
                N.stop().stopQueue();
                O = N.getClientXY();
                if (this.zoomBox.mode === "magnifier" && (/tap/i).test(N.type)) {
                    O.y -= this.zoomBox.height / 2 + 10
                }
                if (M === "inner" && ((/tap/i).test(N.type) || N.isTouchEvent())) {
                    this.lens.pos = {
                        x: 0,
                        y: 0
                    };
                    O.x = -(O.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
                    O.y = -(O.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height)
                }
            } else {
                O = {
                    x: this.boundaries.left + (this.boundaries.right - this.boundaries.left) / 2,
                    y: this.boundaries.top + (this.boundaries.bottom - this.boundaries.top) / 2
                };
                if (y.browser.mobile && this.expanded && this.option("expandZoomOn") === "always") {
                    this.lens.innertouch = true;
                    this.lens.pos = {
                        x: 0,
                        y: 0
                    };
                    O.x = -(O.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
                    O.y = -(O.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height)
                }
            }
            this.node.jRemoveClass("mz-activating").jAddClass("mz-active");
            O.x += -J;
            O.y += -I;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.animate(N, O, true);
            s("onZoomIn", this.id)
        },
        deactivate: function(J, O) {
            var M;
            var K;
            var H;
            var I;
            var L = 0;
            var N = 0;
            var P = this.zoomBox.active;
            this.initEvent = null;
            if (!this.ready) {
                return
            }
            if (J && J.type === "pointerout" && J.pointerType === "touch") {
                return
            }
            clearTimeout(this.moveTimer);
            this.moveTimer = null;
            clearTimeout(this.activateTimer);
            this.activateTimer = null;
            this.zoomBox.activating = false;
            this.zoomBox.active = false;
            if (O !== true && !this.expanded) {
                if (P) {
                    if (y.browser.mobile && !this.expanded && this.zoomBox.mode === "zoom") {
                        this.reflowZoom()
                    } else {
                        this.showHint()
                    }
                }
            }
            if (!this.zoomBox.enabled) {
                return
            }
            if (J) {
                J.stop()
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-activating").jRemoveEvent("transitionend");
            if (this.expanded) {
                I = this.expandFigure.jGetRect();
                if (this.option("expandZoomOn") !== "always") {
                    this.expandStage.jRemoveClass("mz-zoom-in")
                }
                this.image.node.jSetCss({
                    "max-height": this.expandMaxHeight()
                });
                H = this.image.node.jGetRect();
                N = ((H.left + H.right) / 2 - (I.left + I.right) / 2);
                L = ((H.top + H.bottom) / 2 - (I.top + I.bottom) / 2)
            }
            M = (this.zoomBox.mode === "zoom") ? this.zoomBox.position : this.zoomBox.mode;
            if (y.browser.features.transition && J && !(this.expanded && this.option("expandZoomOn") === "always")) {
                if (M === "inner") {
                    this.zoomBox.image.jAddEvent("transitionend", g(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.node.jRemoveClass("mz-active");
                        setTimeout(g(function() {
                            this.zoomBox.hide()
                        }).jBind(this), 32)
                    }).jBind(this));
                    K = this.image.node.jGetSize();
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + M).jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + L + "px,0) scale(" + K.width / this.zoomSize.maxWidth + ", " + K.height / this.zoomSize.maxHeight + ")"
                    })
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", g(function() {
                        this.zoomBox.hide();
                        this.node.jRemoveClass("mz-active")
                    }).jBind(this));
                    this.zoomBox.node.jGetCss("opacity");
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + M);
                    this.node.jRemoveClass("mz-active")
                }
            } else {
                this.zoomBox.hide();
                this.node.jRemoveClass("mz-active")
            }
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.hide();
            if (P) {
                s("onZoomOut", this.id)
            }
        },
        animate: function(R, Q, P) {
            var J = Q;
            var L;
            var K;
            var N = 0;
            var I;
            var M = 0;
            var H;
            var S;
            var O = false;
            if (!this.zoomBox.active && !P) {
                return
            }
            if (R) {
                g(R).stopDefaults().stopDistribution();
                if (R.isTouchEvent() && !R.isPrimaryTouch()) {
                    return
                }
                O = (/tap/i).test(R.type) || R.isTouchEvent();
                if (O && !this.lens.touchmovement) {
                    this.lens.touchmovement = O
                }
                if (!J) {
                    J = R.getClientXY()
                }
            }
            if (this.zoomBox.mode === "preview") {
                return
            }
            if (this.zoomBox.mode === "zoom" && this.zoomBox.position === "inner" && (R && O || !R && this.lens.innertouch)) {
                this.lens.innertouch = true;
                L = this.lens.pos.x + (J.x - this.lens.spos.x);
                K = this.lens.pos.y + (J.y - this.lens.spos.y);
                this.lens.spos = J;
                N = Math.min(0, this.zoomBox.innerWidth - this.zoomSize.width) / 2;
                I = -N;
                M = Math.min(0, this.zoomBox.innerHeight - this.zoomSize.height) / 2;
                H = -M
            } else {
                this.lens.innertouch = false;
                if (this.zoomBox.mode === "magnifier") {
                    J.y = Math.max(this.boundaries.top, Math.min(J.y, this.boundaries.bottom));
                    J.x = Math.max(this.boundaries.left, Math.min(J.x, this.boundaries.right))
                }
                L = J.x - this.boundaries.left;
                K = J.y - this.boundaries.top;
                I = this.size.width - this.lens.width;
                H = this.size.height - this.lens.height;
                L -= this.lens.width / 2;
                K -= this.lens.height / 2
            }
            if (this.zoomBox.mode !== "magnifier") {
                L = Math.max(N, Math.min(L, I));
                K = Math.max(M, Math.min(K, H))
            }
            this.lens.pos.x = L;
            this.lens.pos.y = K;
            if (this.zoomBox.mode === "zoom" && this.zoomBox.position !== "inner") {
                if (y.browser.features.transform) {
                    this.lens.node.jSetCss({
                        transform: "translate(" + this.lens.pos.x + "px," + this.lens.pos.y + "px)"
                    });
                    this.lens.image.jSetCss({
                        transform: "translate(" + -(this.lens.pos.x + this.lens.border.x) + "px, " + -(this.lens.pos.y + this.lens.border.y) + "px)"
                    })
                } else {
                    this.lens.node.jSetCss({
                        top: this.lens.pos.y,
                        left: this.lens.pos.x
                    });
                    this.lens.image.jSetCss({
                        top: -(this.lens.pos.y + this.lens.border.y),
                        left: -(this.lens.pos.x + this.lens.border.x)
                    })
                }
            }
            if (this.zoomBox.mode === "magnifier") {
                if (this.lens.touchmovement && !(R && R.type === "dbltap")) {
                    J.y -= this.zoomBox.height / 2 + 10
                }
                this.zoomBox.node.jSetCss({
                    top: J.y - this.boundaries.top - this.zoomBox.height / 2,
                    left: J.x - this.boundaries.left - this.zoomBox.width / 2
                })
            }
            if (!this.moveTimer) {
                this.lens.dx = 0;
                this.lens.dy = 0;
                this.move(1)
            }
        },
        move: function(M) {
            var K;
            var I;
            var H;
            var N;
            var L;
            var J;
            if (!isFinite(M)) {
                if (this.lens.innertouch) {
                    M = this.lens.touchmovement ? 0.4 : 0.16
                } else {
                    M = this.option("smoothing") ? 0.2 : this.lens.touchmovement ? 0.4 : 0.8
                }
            }
            K = ((this.lens.pos.x - this.lens.dx) * M);
            I = ((this.lens.pos.y - this.lens.dy) * M);
            this.lens.dx += K;
            this.lens.dy += I;
            if (!this.moveTimer || Math.abs(K) > 0.000001 || Math.abs(I) > 0.000001) {
                if (this.lens.innertouch) {
                    H = this.lens.dx;
                    N = this.lens.dy
                } else {
                    H = (this.lens.dx * (this.zoomSize.width / this.size.width) - Math.max(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2);
                    N = (this.lens.dy * (this.zoomSize.height / this.size.height) - Math.max(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2);
                    if (this.zoomBox.mode === "magnifier") {
                        H = Math.round(H);
                        N = Math.round(N)
                    }
                    H = -H;
                    N = -N
                }
                L = this.zoomSize.width / this.zoomSize.maxWidth;
                J = this.zoomSize.height / this.zoomSize.maxHeight;
                this.zoomBox.image.jSetCss(y.browser.features.transform ? {
                    transform: f + H + "px," + N + "px" + A + " scale(" + L + "," + J + ")"
                } : {
                    width: this.zoomSize.width,
                    height: this.zoomSize.height,
                    left: -(this.lens.dx * (this.zoomSize.width / this.size.width) + Math.min(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2),
                    top: -(this.lens.dy * (this.zoomSize.height / this.size.height) + Math.min(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)
                })
            }
            if (this.zoomBox.mode === "magnifier") {
                return
            }
            this.moveTimer = setTimeout(this.moveBind, 16)
        },
        swipe: function() {
            var T;
            var J;
            var O = 30;
            var L = 201;
            var Q;
            var R = "";
            var I = {};
            var H;
            var N;
            var S = 0;
            var U = {
                transition: y.browser.cssTransform + String.fromCharCode(32) + "300ms cubic-bezier(.18,.35,.58,1)"
            };
            var K;
            var P;
            var M = g(function(V) {
                if (!this.ready || this.zoomBox.active) {
                    return
                }
                if (V.state === "dragstart") {
                    clearTimeout(this.activateTimer);
                    this.activateTimer = null;
                    S = 0;
                    I = {
                        x: V.x,
                        y: V.y,
                        ts: V.timeStamp
                    };
                    T = this.size.width;
                    J = T / 2;
                    this.image.node.jRemoveEvent("transitionend");
                    this.image.node.jSetCssProp("transition", "");
                    this.image.node.jSetCssProp("transform", "translate3d(0, 0, 0)");
                    P = null
                } else {
                    H = (V.x - I.x);
                    N = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    if (P === null) {
                        P = (Math.abs(V.x - I.x) < Math.abs(V.y - I.y))
                    }
                    if (P) {
                        return
                    }
                    V.stop();
                    if (V.state === "dragend") {
                        S = 0;
                        K = null;
                        Q = V.timeStamp - I.ts;
                        if (Math.abs(H) > J || (Q < L && Math.abs(H) > O)) {
                            if ((R = (H > 0) ? "backward" : (H <= 0) ? "forward" : "")) {
                                if (R === "backward") {
                                    K = this.getPrev();
                                    S += T * 10
                                } else {
                                    K = this.getNext();
                                    S -= T * 10
                                }
                            }
                        }
                        N.x = S;
                        N.deg = -90 * (N.x / T);
                        this.image.node.jAddEvent("transitionend", g(function(W) {
                            this.image.node.jRemoveEvent("transitionend");
                            this.image.node.jSetCssProp("transition", "");
                            if (K) {
                                this.image.node.jSetCss({
                                    transform: "translate3d(" + N.x + "px, 0px, 0px)"
                                });
                                this.update(K, true)
                            }
                        }).jBind(this));
                        this.image.node.jSetCss(U);
                        this.image.node.jSetCss({
                            "transition-duration": N.x ? "100ms" : "300ms",
                            opacity: 1 - 0.2 * Math.abs(N.x / T),
                            transform: "translate3d(" + N.x + "px, 0px, 0px)"
                        });
                        H = 0;
                        return
                    }
                    N.x = H;
                    N.z = -50 * Math.abs(N.x / J);
                    N.deg = -60 * (N.x / J);
                    this.image.node.jSetCss({
                        opacity: 1 - 0.2 * Math.abs(N.x / J),
                        transform: "translate3d(" + N.x + "px, 0px, " + N.z + "px)"
                    })
                }
            }).jBind(this);
            this.node.jAddEvent("touchdrag", M)
        },
        setupExpandGallery: function() {
            var I, H;
            if (this.additionalImages.length) {
                this.expandGallery = this.additionalImages
            } else {
                I = this.placeholder.getAttribute("data-gallery");
                if (I) {
                    if (y.browser.features.query) {
                        H = y.$A(document.querySelectorAll('.productZoom[data-gallery="' + I + '"], .productZoomPlus[data-gallery="' + I + '"]'))
                    } else {
                        H = y.$A(document.getElementsByTagName("A")).filter(function(J) {
                            return I === J.getAttribute("data-gallery")
                        })
                    }
                    g(H).jEach(function(K) {
                        var J, L;
                        J = h(K);
                        if (J && J.additionalImages.length > 0) {
                            return
                        }
                        if (J) {
                            L = new j(J.image.small.url, J.image.zoom.url, J.image.caption, null, J.image.origin);
                            L.link = J.image.link
                        } else {
                            L = new j().parseNode(K, J ? J.originalTitle : null)
                        }
                        if ((this.image.zoom.src.has(L.zoom.url) || this.image.zoom.url.has(L.zoom.url)) && (this.image.small.src.has(L.small.url) || this.image.small.url.has(L.small.url))) {
                            L = this.image
                        }
                        this.expandGallery.push(L)
                    }, this);
                    this.primaryImage = this.image
                }
            }
            if (this.expandGallery.length > 1) {
                this.expandStage.jAddClass("with-thumbs");
                this.expandNav = y.$new("div", {
                    "class": "mz-expand-thumbnails"
                }).jAppendTo(this.expandStage);
                this.expandThumbs = new q(this.expandNav);
                g(this.expandGallery).jEach(function(J) {
                    var K = g(function(L) {
                        this.setActiveThumb(J);
                        this.update(J)
                    }).jBind(this);
                    J.selector = this.expandThumbs.addItem(y.$new("img", {
                        src: J.getURL("small")
                    }).jAddEvent("tap btnclick", function(L) {
                        L.stop()
                    }).jAddEvent("tap " + (this.option("selectorTrigger") === "hover" ? "mouseover mouseout" : "btnclick"), g(function(M, L) {
                        if (this.updateTimer) {
                            clearTimeout(this.updateTimer)
                        }
                        this.updateTimer = false;
                        if (M.type === "mouseover") {
                            this.updateTimer = g(K).jDelay(L)
                        } else {
                            if (M.type === "tap" || M.type === "btnclick") {
                                K()
                            }
                        }
                    }).jBindAsEvent(this, 60)))
                }, this);
                this.buttons.next.show();
                this.buttons.prev.show()
            } else {
                this.expandStage.jRemoveClass("with-thumbs");
                this.buttons.next.hide();
                this.buttons.prev.hide()
            }
        },
        destroyExpandGallery: function() {
            var H;
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandNav) {
                this.expandNav.jRemove();
                this.expandNav = null
            }
            if (this.expandGallery.length > 1 && !this.additionalImages.length) {
                this.node.jRemoveEvent("touchdrag");
                this.image.node.jRemove().getAttribute("style");
                this.image.node.removeAttribute("style");
                this.primaryImage.node.jAppendTo(this.node);
                this.setupZoom(this.primaryImage);
                while (H = this.expandGallery.pop()) {
                    if (H !== this.primaryImage) {
                        if (H.small.node) {
                            H.small.node.kill();
                            H.small.node = null
                        }
                        if (H.zoom.node) {
                            H.zoom.node.kill();
                            H.zoom.node = null
                        }
                        H = null
                    }
                }
            }
            this.expandGallery = []
        },
        close: function() {
            if (!this.ready || !this.expanded) {
                return
            }
            if (y.browser.platform === "ios" && y.browser.uaName === "safari" && parseInt(y.browser.uaVersion) === 7) {
                clearInterval(l);
                l = null
            }
            g(document).jRemoveEvent("keydown", this.keyboardCallback);
            this.deactivate(null, true);
            this.ready = false;
            if (y.browser.fullScreen.capable && y.browser.fullScreen.enabled()) {
                y.browser.fullScreen.cancel()
            } else {
                if (y.browser.features.transition) {
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.node.jAddEvent("transitionend", this.onClose);
                    if (y.browser.webkit) {
                        setTimeout(g(function() {
                            this.onClose()
                        }).jBind(this), 260)
                    }
                    this.expandBg.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.expandBg.jSetCss({
                        transition: "all 0.6s cubic-bezier(0.895, 0.030, 0.685, 0.220) 0.0s"
                    }).jGetSize();
                    this.node.jSetCss({
                        transition: "all .3s cubic-bezier(0.600, 0, 0.735, 0.045) 0s"
                    }).jGetSize();
                    if (this.zoomBox.mode !== false && this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== "magnifier") {
                        this.image.node.jSetCss({
                            "max-height": this.image.jGetSize("zoom").height
                        });
                        this.image.node.jSetCss({
                            "max-width": this.image.jGetSize("zoom").width
                        })
                    }
                    this.expandBg.jSetCss({
                        opacity: 0.4
                    });
                    this.node.jSetCss({
                        opacity: 0.01,
                        transform: "scale(0.4)"
                    })
                } else {
                    this.onClose()
                }
            }
        },
        expand: function(J) {
            if (!this.image.loaded() || !this.ready || this.expanded) {
                if (!this.image.loaded()) {
                    if (J) {
                        this.initEvent = d(J);
                        J.stopQueue();
                        if (J.type === "tap") {
                            J.events[1].stopQueue()
                        }
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = g(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (J) {
                J.stopQueue()
            }
            var H = g(this.node).jFetch("cr");
            var I = document.createDocumentFragment();
            this.hideHint();
            this.hintRuns--;
            this.deactivate(null, true);
            this.unregisterActivateEvent();
            this.unregisterDeactivateEvent();
            this.ready = false;
            if (!this.expandBox) {
                this.expandBox = y.$new("div").jAddClass("mz-expand").jAddClass(this.option("cssClass")).jSetCss({
                    opacity: 0
                });
                this.expandStage = y.$new("div").jAddClass("mz-expand-stage").jAppendTo(this.expandBox);
                this.expandControls = y.$new("div").jAddClass("mz-expand-controls").jAppendTo(this.expandStage);
                g(["prev", "next", "close"]).jEach(function(L) {
                    var K = "mz-button";
                    this.buttons[L] = y.$new("button", {
                        title: this.option("text-btn-" + L)
                    }).jAddClass(K).jAddClass(K + "-" + L);
                    I.appendChild(this.buttons[L]);
                    switch (L) {
                        case "prev":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.update(this.getPrev())
                            }.jBindAsEvent(this));
                            break;
                        case "next":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.update(this.getNext())
                            }.jBindAsEvent(this));
                            break;
                        case "close":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.close()
                            }.jBindAsEvent(this));
                            break;
                        default:
                    }
                }, this);
                this.expandControls.append(I);
                this.expandBox.jAddEvent("mousescroll touchstart dbltap", g(function(K) {
                    g(K).stop()
                }));
                if (this.option("closeOnClickOutside")) {
                    this.expandBox.jAddEvent("tap btnclick", function(M) {
                        var L = M.jGetPageXY();
                        var K = g(this.option("expandZoomMode") === "magnifier" ? this.zoomBox.node : this.zoomBox.image).jGetRect();
                        if (this.option("expandZoomOn") !== "always" && K.top <= L.y && L.y <= K.bottom && K.left <= L.x && L.x <= K.right) {
                            M.stopQueue();
                            this.deactivate(M);
                            return
                        }
                        if (this.option("expandZoomOn") !== "always" && this.node.hasChild(M.getOriginalTarget())) {
                            return
                        }
                        M.stop();
                        this.close()
                    }.jBindAsEvent(this))
                }
                this.keyboardCallback = g(function(L) {
                    var K = null;
                    if (L.keyCode !== 27 && L.keyCode !== 37 && L.keyCode !== 39) {
                        return
                    }
                    g(L).stop();
                    if (L.keyCode === 27) {
                        this.close()
                    } else {
                        K = (L.keyCode === 37) ? this.getPrev() : this.getNext();
                        if (K) {
                            this.update(K)
                        }
                    }
                }).jBindAsEvent(this);
                this.onExpand = g(function() {
                    var K;
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: "",
                        transform: "translate3d(0, 0, 0)"
                    });
                    if (this.expanded) {
                        return
                    }
                    this.expanded = true;
                    this.expandBox.jRemoveClass("mz-expand-opening").jSetCss({
                        opacity: 1
                    });
                    this.zoomBox.setMode(this.option("expandZoomMode"));
                    this.zoomSize = y.detach(this.zoomSizeOrigin);
                    this.resizeCallback();
                    if (this.expandCaption && this.image.caption) {
                        if (this.image.link) {
                            this.expandCaption.append(y.$new("a", {
                                href: this.image.link
                            }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(this.image.caption))
                        } else {
                            this.expandCaption.changeContent(this.image.caption)
                        }
                        this.expandCaption.jAddClass("mz-show")
                    }
                    if (this.option("expandZoomOn") !== "always") {
                        this.registerActivateEvent(true);
                        this.registerDeactivateEvent(true)
                    }
                    this.ready = true;
                    if (this.option("expandZoomOn") === "always") {
                        if (this.zoomBox.mode !== false) {
                            this.zoomBox.enable(true)
                        }
                        if (y.browser.mobile && this.mobileZoomHint) {
                            this.mobileZoomHint = false
                        }
                        this.activate()
                    }
                    if ((y.browser.mobile || this.option("forceTouch")) && this.zoomBox.enabled) {
                        if (this.mobileZoomHint || this.hintRuns > 0) {
                            this.showHint(true, this.option("textClickZoomHint"))
                        }
                        this.mobileZoomHint = false
                    }
                    this.expandControls.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
                    if (this.expandNav) {
                        this.expandNav.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible")
                    }
                    if (this.expandThumbs) {
                        this.expandThumbs.run();
                        this.setActiveThumb(this.image)
                    }
                    if (H) {
                        H.jAppendTo(this.expandBox, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
                    }
                    if (this.expandGallery.length > 1 && !this.additionalImages.length) {
                        this.swipe()
                    }
                    g(document).jAddEvent("keydown", this.keyboardCallback);
                    if (y.browser.platform === "ios" && y.browser.uaName === "safari" && parseInt(y.browser.uaVersion) === 7) {
                        l = u()
                    }
                    s("onExpandOpen", this.id)
                }).jBind(this);
                this.onClose = g(function() {
                    this.node.jRemoveEvent("transitionend");
                    if (!this.expanded) {
                        return
                    }
                    if (this.expanded) {
                        g(document).jRemoveEvent("keydown", this.keyboardCallback);
                        this.deactivate(null, true)
                    }
                    this.destroyExpandGallery();
                    this.expanded = false;
                    this.zoomBox.setMode(this.option("zoomMode"));
                    this.node.replaceChild(this.image.getNode("small"), this.image.node);
                    this.image.setCurNode("small");
                    g(this.image.node).jSetCss({
                        width: "",
                        height: "",
                        "max-width": Math.min(this.image.jGetSize("small").width),
                        "max-height": Math.min(this.image.jGetSize("small").height)
                    });
                    this.lens.image.src = this.image.getURL("small");
                    this.node.jSetCss({
                        opacity: "",
                        transition: ""
                    });
                    this.node.jSetCss({
                        transform: "translate3d(0, 0, 0)"
                    });
                    g(this.placeholder).replaceChild(this.node, this.stubNode);
                    this.setSize(true);
                    if (this.expandCaption) {
                        this.expandCaption.jRemove();
                        this.expandCaption = null
                    }
                    this.unregisterActivateEvent();
                    this.unregisterDeactivateEvent();
                    if (this.option("zoomOn") === "always") {
                        this.activate()
                    } else {
                        if (this.option("zoomMode") !== false) {
                            this.registerActivateEvent(this.option("zoomOn") === "click");
                            this.registerDeactivateEvent(this.option("zoomOn") === "click")
                        }
                    }
                    this.showHint();
                    this.expandBg.jRemoveEvent("transitionend");
                    this.expandBox.jRemove();
                    this.expandBg.jRemove();
                    this.expandBg = null;
                    g(y.browser.getDoc()).jRemoveClass("mz-expanded-view-open");
                    this.ready = true;
                    if (y.browser.ieMode < 10) {
                        this.resizeCallback()
                    } else {
                        g(window).jRaiseEvent("UIEvent", "resize")
                    }
                    s("onExpandClose", this.id)
                }).jBind(this);
                this.expandImageStage = y.$new("div", {
                    "class": "mz-image-stage"
                }).jAppendTo(this.expandStage);
                this.expandFigure = y.$new("figure").jAppendTo(this.expandImageStage);
                this.stubNode = this.node.cloneNode(false)
            }
            this.setupExpandGallery();
            g(y.browser.getDoc()).jAddClass("mz-expanded-view-open");
            g(document.body).jGetSize();
            if (this.option("expand") === "fullscreen") {
                this.prepareExpandedView();
                y.browser.fullScreen.request(this.expandBox, {
                    onEnter: g(function() {
                        this.onExpand()
                    }).jBind(this),
                    onExit: this.onClose,
                    fallback: g(function() {
                        this.expandToWindow()
                    }).jBind(this)
                })
            } else {
                setTimeout(g(function() {
                    this.prepareExpandedView();
                    this.expandToWindow()
                }).jBind(this), 96)
            }
        },
        prepareExpandedView: function() {
            var I;
            var H;
            I = y.$new("img", {
                src: this.image.getURL("zoom")
            });
            this.expandBg = y.$new("div").jAddClass("mz-expand-bg").append((y.browser.features.cssFilters || y.browser.ieMode < 10) ? I : new y.SVGImage(I).blur(b).getNode()).jAppendTo(this.expandBox);
            if (this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false) {
                this.expandStage.jAddClass("mz-always-zoom" + (this.option("expandZoomMode") === "zoom" ? " mz-zoom-in" : "")).jGetSize()
            }
            H = g(this.node)[(y.browser.ieMode < 10) ? "jGetSize" : "getBoundingClientRect"]();
            g(this.stubNode).jSetCss({
                width: H.width,
                height: H.height
            });
            this.node.replaceChild(this.image.getNode("zoom"), this.image.node);
            this.image.setCurNode("zoom");
            this.expandBox.jAppendTo(document.body);
            this.expandMaxWidth = function() {
                var J = this.expandImageStage;
                if (g(this.expandFigure).jGetSize().width > 50) {
                    J = this.expandFigure
                }
                return function() {
                    return this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false && this.option("expandZoomMode") !== "magnifier" ? Infinity : Math.round(g(J).getInnerSize().width)
                }
            }.call(this);
            this.expandMaxHeight = function() {
                var J = this.expandImageStage;
                if (g(this.expandFigure).jGetSize().height > 50) {
                    J = this.expandFigure
                }
                return function() {
                    return this.option("expandZoomOn") === "always" && this.option("expandZoomMode") !== false && this.option("expandZoomMode") !== "magnifier" ? Infinity : Math.round(g(J).getInnerSize().height)
                }
            }.call(this);
            this.expandControls.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
            if (this.expandNav) {
                this.expandNav.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden")
            }
            this.image.node.jSetCss({
                "max-height": Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
            });
            this.image.node.jSetCss({
                "max-width": Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
            });
            this.expandFigure.append(g(this.placeholder).replaceChild(this.stubNode, this.node));
            if (this.option("expandCaption")) {
                this.expandCaption = y.$new("figcaption", {
                    "class": "mz-caption"
                }).jAppendTo(this.expandFigure)
            }
        },
        expandToWindow: function() {
            this.node.jSetCss({
                transition: ""
            });
            this.node.jSetCss({
                transform: "scale(0.6)"
            }).jGetSize();
            this.node.jSetCss({
                transition: y.browser.cssTransform + " 0.4s cubic-bezier(0.175, 0.885, 0.320, 1) 0s"
            });
            if (y.browser.features.transition) {
                this.node.jAddEvent("transitionend", this.onExpand);
                if (y.browser.chrome && (y.browser.uaName === "chrome" || y.browser.uaName === "opera")) {
                    setTimeout(g(function() {
                        this.onExpand()
                    }).jBind(this), 500)
                }
            } else {
                this.onExpand.jDelay(16, this)
            }
            this.expandBox.jSetCss({
                opacity: 1
            });
            this.node.jSetCss({
                transform: "scale(1)"
            })
        },
        openLink: function() {
            if (this.image.link) {
                window.open(this.image.link, "_self")
            }
        },
        getNext: function() {
            var H = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(K) {
                return (K.small.state !== -1 || K.zoom.state !== -1)
            });
            var I = H.length;
            var J = g(H).indexOf(this.image) + 1;
            return (I <= 1) ? null : H[(J >= I) ? 0 : J]
        },
        getPrev: function() {
            var H = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(K) {
                return (K.small.state !== -1 || K.zoom.state !== -1)
            });
            var I = H.length;
            var J = g(H).indexOf(this.image) - 1;
            return (I <= 1) ? null : H[(J < 0) ? I - 1 : J]
        },
        imageByURL: function(I, J) {
            var H = this.additionalImages.filter(function(K) {
                return ((K.zoom.src.has(I) || K.zoom.url.has(I)) && (K.small.src.has(J) || K.small.url.has(J)))
            }) || [];
            return H[0] || ((J && I && y.jTypeOf(J) === "string" && y.jTypeOf(I) === "string") ? new j(J, I) : null)
        },
        imageByOrigin: function(I) {
            var H = this.additionalImages.filter(function(J) {
                return (J.origin === I)
            }) || [];
            return H[0]
        },
        imageByIndex: function(H) {
            return this.additionalImages[H]
        }
    };
    t = {
        version: "v5.2.10 (Plus) for MagicToolbox.com",
        start: function(K, I) {
            var J = null;
            var H = [];
            y.$A((K ? [g(K)] : y.$A(document.byClass("productZoom")).concat(y.$A(document.byClass("productZoomPlus"))))).jEach(g(function(L) {
                if (g(L)) {
                    if (!h(L)) {
                        J = new i(L, I);
                        if (w && !J.option("autostart")) {
                            J.stop();
                            J = null
                        } else {
                            E.push(J);
                            H.push(J)
                        }
                    }
                }
            }).jBind(this));
            return K ? H[0] : H
        },
        stop: function(K) {
            var I, J, H;
            if (K) {
                (J = h(K)) && (J = E.splice(E.indexOf(J), 1)) && J[0].stop() && (delete J[0]);
                return
            }
            while (I = E.length) {
                J = E.splice(I - 1, 1);
                J[0].stop();
                delete J[0]
            }
        },
        refresh: function(H) {
            this.stop(H);
            return this.start(H)
        },
        update: function(M, L, K, I) {
            var J = h(M);
            var H;
            if (J) {
                H = y.jTypeOf(L) === "element" ? J.imageByOrigin(L) : J.imageByURL(L, K);
                if (H) {
                    J.update(H)
                }
            }
        },
        switchTo: function(K, J) {
            var I = h(K);
            var H;
            if (I) {
                switch (y.jTypeOf(J)) {
                    case "element":
                        H = I.imageByOrigin(J);
                        break;
                    case "number":
                        H = I.imageByIndex(J);
                        break;
                    default:
                }
                if (H) {
                    I.update(H)
                }
            }
        },
        prev: function(I) {
            var H;
            (H = h(I)) && H.update(H.getPrev())
        },
        next: function(I) {
            var H;
            (H = h(I)) && H.update(H.getNext())
        },
        zoomIn: function(I) {
            var H;
            (H = h(I)) && H.activate()
        },
        zoomOut: function(I) {
            var H;
            (H = h(I)) && H.deactivate()
        },
        expand: function(I) {
            var H;
            (H = h(I)) && H.expand()
        },
        close: function(I) {
            var H;
            (H = h(I)) && H.close()
        },
        registerCallback: function(H, I) {
            if (!o[H]) {
                o[H] = []
            }
            if (y.jTypeOf(I) === "function") {
                o[H].push(I)
            }
        },
        running: function(H) {
            return !!h(H)
        }
    };
    g(document).jAddEvent("domready", function() {
        var I = window[C + "Options"] || {};
        r = r();
        c();
        G = y.$new("div", {
            "class": "magic-hidden-wrapper"
        }).jAppendTo(document.body);
        F = (y.browser.mobile && window.matchMedia && window.matchMedia("(max-device-width: 767px), (max-device-height: 767px)").matches);
        if (y.browser.mobile) {
            y.extend(n, k)
        }
        for (var H = 0; H < z.length; H++) {
            if (I[z[H]] && y.$F !== I[z[H]]) {
                t.registerCallback(z[H], I[z[H]])
            }
        }
        t.start();
        w = false
    });
    window.productZoomPlus = window.productZoomPlus || {};
    return t
})();

/*!
 * GSAP 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=pt(t,at))&&ie}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=dt.length;i--&&!dt[i].targetTest(n););e=dt[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ft(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(yt(t))[0]._gsap}function $(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ot.length,i=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ot.length&&da(),t.render(e,r,i),ot.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||F,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ua(t){return t._repeat?_t(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||B)||0))}function ya(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||gt(0,e.totalDuration(),r)-e._tTime>B)&&e.render(r,!0)),ra(t)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-B}}function za(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||ya(t,e),t}function Aa(t,e,r,i){return qt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Ot.frame?(ot.push(t),t._lazy=[e,i],1):void 0:1}function Da(t,e,r){var i=t._repeat,n=aa(e)||0;return t._dur=n,t._tDur=i?i<0?1e12:aa(n*(i+1)+t._rDelay*i):n,t._time>n&&(t._time=n,t._tTime=Math.min(t._tTime,t._tDur)),r||ra(t.parent),t.parent&&xa(t),t}function Ea(t){return t instanceof Bt?ra(t):Da(t,t._dur)}function Ga(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=R?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ga(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ha(t,e){return t||0===t?e(t):e}function Ja(t){return(t+"").substr((parseFloat(t)+"").length)}function Ma(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Pa(t){return t.sort(function(){return.5-Math.random()})}function Qa(t){if(o(t))return t;var p=r(t)?t:{each:t},_=Dt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=p.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=v[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,R])[1])){for(h=-R;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=R,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Pa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ja(p.amount||p.each)||0,_=_&&d<0?zt(_):_}return d=(c[t]-c.min)/c.max||0,aa(c.b+(_?_(d):d)*c.v)+c.u}}function Ra(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Ja(t))}}function Sa(u,t){var h,l,e=H(u);return!e&&r(u)&&(h=e=u.radius||R,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ra(u.increment)),Ha(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=R,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Ja(t)}:Ra(u))}function Ta(t,e,r,i){return Ha(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Xa(e,r,t){return Ha(t,function(t){return e[~~r(t)]})}function $a(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:Q),s+=t.substr(a,e-a)+Ta(n?r:+r[0],+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function bb(t,e,r){var i,n,a,s=t.labels,o=R;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function db(t){return qa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function ib(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function jb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:xt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])c=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=d=t.match(Q),e){if(~t.indexOf("="))return c=t.match(W),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=ib(s+1/3,i,n),c[1]=ib(s,i,n),c[2]=ib(s-1/3,i,n);else c=t.match(Q)||xt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/wt,n=c[1]/wt,a=c[2]/wt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function kb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(tt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function lb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=jb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=kb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(tt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function ob(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Mt.test(r),t[1]=lb(t[1],e),t[0]=lb(t[0],e,kb(t[1])),!0}function wb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(St,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:rt.exec(t)[1].split(",").map(fa)):Pt._CE&&At.test(t)?Pt._CE("",t):r}function zb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[n=t.toLowerCase()]=r,a)Pt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function Ab(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Bb(r,t,e){function Yk(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/I*(Math.asin(1/i)||0),s="out"===r?Yk:"in"===r?function(t){return 1-Yk(1-t)}:Ab(Yk);return n=I/n,s.config=function(t,e){return Bb(r,t,e)},s}function Cb(e,r){function el(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?el:"in"===e?function(t){return 1-el(1-t)}:Ab(el);return t.config=function(t){return Cb(e,t)},t}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,P,A,S,z,D,G={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},R=1e8,B=1/R,I=2*Math.PI,U=I/4,X=0,j=Math.sqrt,V=Math.cos,J=Math.sin,H=Array.isArray,Q=/(?:-?\.?\d|\.)+/gi,W=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,tt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,et=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,it=/[+-]=-?[\.\d]+/,nt=/[#\-+.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,dt=[],ct="",pt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:O},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ma(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ma(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},Tt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ha(n,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ot.length&&da(),i?s.apply(n,i):s.call(n)},wt=255,xt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Mt=/hsl[a]?\(/,Ot=(b=Date.now,w=500,x=33,k=b(),C=k,A=P=1/240,T={time:0,frame:0,tick:function tick(){ck(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ie,(i.gsapVersions||(i.gsapVersions=[])).push(ie.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,1e3*(A-T.time)+1|0)},m=1,ck(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,x=Math.min(e,w,0)},fps:function fps(t){P=1/(t||240),A=T.time+P},add:function add(t){S.indexOf(t)<0&&S.push(t),Ct()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Ct=function _wake(){return!m&&Ot.wake()},Pt={},At=/^[\d.\-M][\d.\-,\s]/,St=/["']/g,zt=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||wb(t))||e};function ck(e){var t,r,i=b()-C,n=!0===e;w<i&&(k+=i-x),C+=i,T.time=(C-k)/1e3,(0<(t=T.time-A)||n)&&(T.frame++,A+=t+(P<=t?.004:P-t),r=1),n||(g=v(ck)),r&&S.forEach(function(t){return t(T.time,i,T.frame,e)})}function vl(t){return t<D?z*t*t:t<.7272727272727273?z*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?z*(t-=2.25/2.75)*t+.9375:z*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;zb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,zb("Elastic",Bb("in"),Bb("out"),Bb()),z=7.5625,D=1/2.75,zb("Bounce",function(t){return 1-vl(1-t)},vl),zb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),zb("Circ",function(t){return-(j(1-t*t)-1)}),zb("Sine",function(t){return 1-V(t*U)}),zb("Back",Cb("in"),Cb("out"),Cb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*gt(0,.99999999,t)|0)+n)*r}}},E.ease=Pt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Rt,Ft=function GSCache(t,e){this.id=X++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Zt},Et=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r=this.parent||this._dp;if(r&&r.smoothChildTiming&&this._ts){for(this._start=aa(r._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts)),xa(this),r._dirty||ra(r);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===B)&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?_t(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-B?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(gt(0,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ct(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B)&&Math.abs(this._zTime)!==B))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||za(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ea(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ea(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(t,e){return this.totalTime(Ga(this,t),s(e))},Rt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-B:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=0,this._zTime=-B,this},Rt.isActive=function isActive(t){var e,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=i&&e<this.endTime(!0)-B))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Km(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Km():i._prom=Km})},Rt.kill=function kill(){db(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1),this.data=t.data,m||Ot.wake(),r&&za(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Et.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&ya(r.parent,_assertThisInitialized(r)),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Ut(t,ca(arguments,0,this),Ga(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Ut(t,ca(arguments,1,this),Ga(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Ut(t,ca(arguments,2,this),Ga(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ut(t,e,Ga(this,r),1),this},t.call=function call(t,e,r){return za(this,Ut.delayedCall(0,t,e),Ga(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Ut(t,r,Ga(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-B<t&&0<=t?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(c=this._yoyo,o=g+this._rDelay,(g<(i=aa(v%o))||m===v)&&(i=g),(s=~~(v/o))&&s===v/o&&(i=g,s--),c&&1&s&&(i=g-i,p=1),s!==(d=_t(this._tTime,o))&&!this._lock)){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:g,this._lock=1,this.render(_,e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,_=T?g+1e-4:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(_),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),_||!i||e||bt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-B);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-B:B);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-B)._zTime=_<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(t&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!_||(bt(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ga(this,e)),!(t instanceof Et)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),ra(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Ut.delayedCall(0,t)}return this!==t?za(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-R);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ut?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=aa(Ot.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ga(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Ut.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,za(this,i,Ga(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ga(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Lt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=yt(t),a=this._first;a;)a instanceof Ut?!ba(a._targets,n)||e&&!a.isActive("started"===e)||i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ga(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Ut.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||B,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Da(o,t).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ga(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n,a=0,s=this,o=s._last,u=R;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(n=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),u<(i=o._start)&&s._sort&&o._ts&&!s._lock?(s._lock=1,za(s,o,i-o._delay,1)._lock=0):u=i,i<0&&o._ts&&(a-=i,(!n&&!s._dp||n&&n.smoothChildTiming)&&(s._start+=i/s._ts,s._time-=i,s._tTime-=i),s.shiftChildren(-i,!1,-1e20),u=0),a<(r=xa(o))&&o._ts&&(a=r),o=e;Da(s,s===F&&s._time>a?s._time:Math.min(R,a),1),s._dirty=0}return s._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ea(F,wa(t,F)),d=Ot.frame),Ot.frame>=ft){ft+=G.autoSleep||120;var e=F._first;if((!e||!e._ts)&&G.autoSleep&&Ot._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ot.sleep()}}},Timeline}(Et);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Jb(t,e,i,a,s,u){var h,l,f,d;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||H(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],c="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=o(d)?l?Vt:jt:Xt;if(n(i)&&(~i.indexOf("random(")&&(i=$a(i)),"="===i.charAt(1)&&(i=parseFloat(c)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Ja(c)||0))),c!==i)return isNaN(c+i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ee(this._pt,t,e,0,1,Qt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=$a(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(et)||[];o=et.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(it.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,c,i,p,h||G.stringFilter,l)):(f=new ee(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?Ht:Jt,0,p),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},qt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,c,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,w=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,M=_.keyframes,O=_.autoRevert,C=t._dur,P=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:A,D="auto"===t._overwrite,R=t.timeline;if(!R||M&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?zt(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!R){if(P&&P.render(-1,!0).kill(),g){if(qa(t._startAt=Ut.set(A,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:w,stagger:0},g))),v)if(0<e)O||(t._startAt=0);else if(C)return}else if(x&&C)if(P)O||(t._startAt=0);else if(e&&(v=!1),qa(t._startAt=Ut.set(A,pt(la(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:S}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=la(_,st),p=(l=A[t._pt=0]?Z(A[0]).harness:0)&&_[l.prop],y=C&&s(y)||y&&!C,i=0;i<A.length;i++){if(h=(o=A[i])._gsap||Y(A)[i]._gsap,t._ptLookup[i]=d={},ut[h.id]&&da(),c=z===A?i:z.indexOf(o),l&&!1!==(f=new l).init(o,p||r,t,c,z)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||p)for(n in r)ht[n]&&(f=Jb(n,r,t,c,o,z))?f.priority&&(u=1):d[n]=a=It.call(t,o,n,"get",r[n],c,z,0,_.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),D&&t._pt&&(Lt=t,F.killTweensOf(o,d,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!R&&!!_.runBackwards,t._onUpdate=T,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?$a(t):t},Nt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Gt=(Nt+",id,stagger,delay,duration,paused").split(","),Ut=function(A){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,c,_,m,g=(a=A.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=a.parent,P=(H(t)?p(t[0]):"length"in e)?[t]:yt(t);if(a._targets=P.length?Y(P):M("GSAP target "+t+" not found. https://greensock.com",!G.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(P,t,">")});else{if(f=P.length,_=b?Qa(b):O,r(b))for(d in b)~Nt.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Gt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,m&&pt(l,m),e.yoyoEase&&!e.repeat&&(l.yoyoEase=e.yoyoEase),c=P[h],l.duration=+Yt(v,_assertThisInitialized(a),h,c,P),l.delay=(+Yt(y,_assertThisInitialized(a),h,c,P)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(c,l,_(h,c,P))}v=y=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(Lt=_assertThisInitialized(a),F.killTweensOf(P),Lt=0),C&&ya(C,_assertThisInitialized(a)),(T||!v&&!x&&a._start===C._time&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-B,a.render(Math.max(0,-y))),a}_inheritsLoose(Tween,A);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-B<t&&0<=t?c:t<B?0:t;if(p){if(_!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,(p<(i=aa(_%s))||c===_)&&(i=p),(a=~~(_/s))&&a===_/s&&(i=p,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=_t(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0))}if(!this._initted){if(Aa(this,i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),d||!i||e||bt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&p||!(t&&0<this._ts||!_&&this._ts<0)||qa(this,1),e||t<0&&!d||_<c&&0<this.timeScale()||(bt(this,_===c?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),_t(u,o)!==_t(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!Aa(t,e,i,r))&&(s!==a||i||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||bt(t,"onStart"),n=t._pt;n;)n.r(s,n.d),n=n._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,i),t._onUpdate&&(r||bt(t,"onUpdate")),u&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&qa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return db(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,d=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(l,f))return db(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},_(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=pt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=d[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||pa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&c&&db(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Et);ha(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Ub(t,e,r){return t.setAttribute(e,r)}function ac(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Xt=function _setterPlain(t,e,r){return t[e]=r},jt=function _setterFunc(t,e,r){return t[e](r)},Vt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Zt=function _getSetter(t,e){return o(t[e])?jt:q(t[e])&&t.setAttribute?Ub:Xt},Jt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},$t=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Wt=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},Kt=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ac,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Jt,this.d=s||this,this.set=o||Xt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){return st[t]=1}),at.TweenMax=at.TweenLite=Ut,at.TimelineLite=at.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),G.stringFilter=ob;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:$t,add:It,kill:Kt,modifier:Wt,rawVars:0},a={targetTest:0,get:0,getSetter:Zt,aliases:{},register:0};if(Ct(),t!==i){if(ht[e])return;ha(i,ha(la(t,n),a)),pt(i.prototype,pt(n,la(t,a))),ht[i.prop=e]=i,t.targetTest&&(dt.push(i),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ie,i,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=yt(r)).length){var n=r.map(function(t){return ie.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ht[e],o=Z(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&$t(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ka(E,t||{})},config:function config(t){return ka(G,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&M(n+" effect requires "+t+" plugin.")}),lt[n]=function(t,e,r){return i(yt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(lt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Pt[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Pt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),F.remove(n),n._dp=0,n._time=n._tTime=F._time,r=F._first;r;)i=r._next,!e&&!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]||za(n,r,r._start-r._delay),r=i;return za(F,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?Xa(e,wrap(0,e.length),t):Ha(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?Xa(e,wrapYoyo(0,e.length-1),t):Ha(r,function(t){return e+(i<(t=(n+(t-e)%n)%n)?n-t:t)})},distribute:Qa,random:Ta,snap:Sa,normalize:function normalize(t,e,r){return Tt(t,e,0,1,r)},getUnit:Ja,clamp:function clamp(e,r,t){return Ha(t,function(t){return gt(e,r,t)})},splitColor:jb,toArray:yt,mapRange:Tt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ja(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=pt(H(e)?[]:{},e));if(!u){for(s in r)It.call(d,e,s,"get",r[s]);a=function func(t){return $t(t,d)||(f?e.p:e)}}}return Ha(t,a)},shuffle:Pa},install:K,effects:lt,ticker:Ot,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:F,core:{PropTween:ee,globals:N,Tween:Ut,Timeline:Bt,Animation:Et,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Ut[t]}),Ot.add(Bt.updateRoot),c=re.to({},{duration:0});function ec(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function gc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ec(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ie=re.registerPlugin({name:"attr",init:function init(t,e,r,i,n){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},gc("roundProps",Ra),gc("modifiers"),gc("snap",Sa))||re;Ut.version=Bt.version=ie.version="3.2.6",f=1,t()&&Ct();function Rc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Sc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Tc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Uc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Vc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Wc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Xc(t,e,r){return t.style[e]=r}function Yc(t,e,r){return t.style.setProperty(e,r)}function Zc(t,e,r){return t._gsap[e]=r}function $c(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function _c(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ad(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ed(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function fd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fe,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&fd(t,Ne(e)||e,1)||""}function id(){!function _windowExists(){return"undefined"!=typeof window}()||(ne=window,ae=ne.document,se=ae.documentElement,ue=ed("div")||{style:{}},he=ed("div"),Ie=Ne(Ie),qe=Ne(qe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ne("perspective"),oe=1)}function jd(t){var e,r=ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=jd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),se.removeChild(r),this.style.cssText=a,e}function kd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ld(e){var r;try{r=e.getBBox()}catch(t){r=jd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===jd||(r=jd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+kd(e,["x","cx","x1"])||0,y:+kd(e,["y","cy","y1"])||0,width:0,height:0}}function md(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ld(t))}function nd(t,e){if(e){var r=t.style;e in Se&&(e=Ie),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Fe,"-$1").toLowerCase())):r.removeAttribute(e)}}function od(t,e,r,i,n,a){var s=new ee(t._pt,e,r,0,1,a?Wc:Vc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function qd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Ee.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||Ge[i]||Ge[h]?u:("px"===h||p||(u=qd(t,e,r,"px")),o=t.getCTM&&md(t),_&&(Se[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[c])*100):(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Ot.time?aa(u/s.width*100):(!_&&"%"!==h||(l.position=fd(t,"position")),a===t&&(l.position="static"),a.appendChild(ue),n=ue[c],a.removeChild(ue),l.position="absolute",f&&_&&((s=Z(a)).time=Ot.time,s.width=a[c]),aa(p?n*u/100:n&&u?100/n*u:0))))}function rd(t,e,r,i){var n;return oe||id(),e in Le&&"transform"!==e&&~(e=Le[e]).indexOf(",")&&(e=e.split(",")[0]),Se[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:Je(fd(t,qe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Xe[e]&&Xe[e](t,e,r)||fd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?qd(t,e,n,r)+r:n}function sd(t,e,r,i){if(!r||"none"===r){var n=Ne(e,t,1),a=n&&fd(t,n,1);a&&a!==r&&(e=n,r=a)}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ee(this._pt,t.style,e,0,1,Qt),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=fd(t,e)||i,t.style[e]=r),ob(s=[r,i]),i=s[1],u=(r=s[0]).match(tt)||[],(i.match(tt)||[]).length){for(;o=tt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=tt.lastIndex-_.length,_||(_=_||G.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=qd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===T?p:",",s:h,c:g?g*c:c-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?Wc:Vc;return it.test(i)&&(v.e=0),this._pt=v}function ud(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ue[r]||r,e[1]=Ue[i]||i,e.join(" ")}function vd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Se[r]&&(i=1,r="transformOrigin"===r?qe:Ie),nd(a,r);i&&(nd(a,Ie),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function zd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ad(t){var e=fd(t,Ie);return zd(e)?je:e.substr(7).match(W).map(aa)}function Bd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ad(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?je:u:(u!==je||t.offsetParent||t===se||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,se.appendChild(t)),u=Ad(t),n?o.display=n:nd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Cd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Bd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==je&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=ld(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[qe]="0px 0px",a&&(od(a,h,"xOrigin",f,w),od(a,h,"yOrigin",d,x),od(a,h,"xOffset",c,h.xOffset),od(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Fd(t,e,r){var i=Ja(e);return aa(parseFloat(e)+parseFloat(qd(t,"x",r+"px",i)))+i}function Md(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?ze:1),d=s?f*s:f-i,c=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ee(t._pt,e,r,i,d,Sc),u.e=c,u.u="deg",t._props.push(r),u}function Nd(t,e,r){var i,n,a,s,o,u,h,l=he.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ie]=e,ae.body.appendChild(he),i=Ze(he,1),Se)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ja(a)!==(h=Ja(s))?qd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,n,o,u-o,Rc),t._pt.u=h||0,t._props.push(n));ae.body.removeChild(he)}var ne,ae,se,oe,ue,he,le,fe,de=Pt.Power0,ce=Pt.Power1,pe=Pt.Power2,_e=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,Te=Pt.Quart,be=Pt.Quint,we=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Me=Pt.SteppedEase,Oe=Pt.Bounce,Ce=Pt.Sine,Pe=Pt.Expo,Ae=Pt.Circ,Se={},ze=180/Math.PI,De=Math.PI/180,Re=Math.atan2,Fe=/([A-Z])/g,Ee=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,Le={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ie="transform",qe=Ie+"Origin",Ye="O,Moz,ms,Ms,Webkit".split(","),Ne=function _checkPropPrefix(t,e,r){var i=(e||ue).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ye[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ye[n]:"")+t},Ge={deg:1,rad:1,turn:1},Ue={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ee(t._pt,e,r,0,0,vd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},je=[1,0,0,1,0,0],Ve={},Ze=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,M,O,C,P,A,S,z,D,R,F,E=t.style,B=r.scaleX<0,L="deg",I=fd(t,qe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!md(t)),m=Bd(t,r.svg),r.svg&&(O=!r.uncache&&t.getAttribute("data-svg-origin"),Cd(t,O||I,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==je&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Re(b,T)*ze:0,(f=w||x?Re(w,x)*ze+u:0)&&(o*=Math.cos(f*De)),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(F=m[6],D=m[7],A=m[8],S=m[9],z=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(F,z))*ze,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=F*v+z*y,A=k*-y+A*v,S=M*-y+S*v,z=F*-y+z*v,R=D*-y+R*v,k=O,M=C,F=P),l=(g=Re(-w,z))*ze,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=O=T*v-A*y,b=C=b*v-S*y,w=P=w*v-z*y),u=(g=Re(b,T))*ze,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(M*M+F*F)),g=Re(k,M),f=2e-4<Math.abs(g)?g*ze:0,c=R?1/(R<0?-R:R):0),r.svg&&(m=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!zd(fd(t,Ie)),m&&t.setAttribute("transform",m))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(E[qe]=Je(I)),r.xOffset=r.yOffset=0,r.force3D=G.force3D,r.renderTransform=r.svg?tr:fe?Ke:He,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ke(t,e)},Qe="0deg",$e="0px",We=") ",Ke=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Qe||h!==Qe)){var b,w=parseFloat(h)*De,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*De,b=Math.cos(w),a=Fd(g,a,x*b*-v),s=Fd(g,s,-Math.sin(w)*-v),o=Fd(g,o,k*b*-v+v)}_!==$e&&(y+="perspective("+_+We),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===$e&&s===$e&&o===$e||(y+=o!==$e||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+We),u!==Qe&&(y+="rotate("+u+We),h!==Qe&&(y+="rotateY("+h+We),l!==Qe&&(y+="rotateX("+l+We),f===Qe&&d===Qe||(y+="skew("+f+", "+d+We),1===c&&1===p||(y+="scale("+c+", "+p+We),g.style[Ie]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=De,c*=De,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=De,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=qd(g,"x",l,"px"),k=qd(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ie]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Xe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return rd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var er,rr,ir,nr={name:"css",register:id,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T=this._props,b=t.style;for(f in oe||id(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Jb(f,e,r,i,t,n)))if(h=typeof s,l=Xe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=$a(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else{if(a=rd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Le&&("autoAlpha"===f&&(1===u&&"hidden"===rd(t,"visibility")&&o&&(u=0),od(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Le[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Se)if(m||((g=t._gsap).renderTransform||Ze(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,Ie,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=ud(s),g.svg?Cd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&od(this,g,"zOrigin",g.zOrigin,c),od(this,b,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Cd(t,s,1,v,0,this);continue}if(f in Ve){Md(this,g,f,u,s,p);continue}if("smoothOrigin"===f){od(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Nd(this,s,t);continue}}else f in b||(f=Ne(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(c=(s+"").substr(((o=o||0)+"").length)||(f in G.units?G.units[f]:d))&&(u=qd(t,f,a,c)),this._pt=new ee(this._pt,_?g:b,f,u,p?p*o:o-u,"px"!==c||!1===e.autoRound||_?Rc:Uc),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=Tc);else if(f in b)sd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&te(this)},get:rd,aliases:Le,getSetter:function getSetter(t,e,r){var i=Le[e];return i&&i.indexOf(",")<0&&(e=i),e in Se&&e!==qe&&(t._gsap.x||rd(t,"x"))?r&&le===r?"scale"===e?$c:Zc:(le=r||{})&&("scale"===e?_c:ad):t.style&&!q(t.style[e])?Xc:~e.indexOf("-")?Yc:Zt(t,e)},core:{_removeProperty:nd,_getMatrix:Bd}};ie.utils.checkPrefix=Ne,ir=_((er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Se[t]=1}),_(rr,function(t){G.units[t]="deg",Ve[t]=1}),Le[ir[13]]=er+","+rr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Le[e[1]]=ir[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){G.units[t]="px"}),ie.registerPlugin(nr);var ar=ie.registerPlugin(nr)||ie,sr=ar.core.Tween;e.Back=ke,e.Bounce=Oe,e.CSSPlugin=nr,e.Circ=Ae,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=de,e.Power1=ce,e.Power2=pe,e.Power3=_e,e.Power4=me,e.Quad=ve,e.Quart=Te,e.Quint=be,e.Sine=Ce,e.SteppedEase=Me,e.Strong=we,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Ut,e.TweenMax=sr,e.default=ar,e.gsap=ar;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

var initSetup = function(){
    // Loading
        // 1
        gsap.from('#page > header, #page > main, #page > div, #page > footer', 
            {
                
                opacity: 0,		
                duration: 0.6,
                stagger: 0.4
            },
        );
        // 2
        gsap.from('.header #menu-main li', 
            {
                    
                x: -10,
                y: -10,
                opacity: 0,		
                duration: 0.4,
                delay: 1.2,
                stagger: 0.1
            },
        );
        // 3
        gsap.from('.header--top>*', 
            {
                x: -10,
                y: -10,
                opacity: 0,		
                duration: 0.5,
                stagger: 0.1,
                delay: 1,
            },
        );
        // 1
        // gsap.from('#page > header, #page > main, #page > div', 
        //     {
        //         css: {
        //             x: -10,
        //             y: -10,
        //             opacity: 1,				
        //         },
        //         duration: 0.4,
        //         delay: 1,
        //         stagger: 0.1
        //     },
        // );
        
    // All Links Events
    jQuery('a').on('click', function(e) {
        var $this = jQuery(this),
            this_href = $this.attr('href');
        if ($this.attr('target') && '_blank' == $this.attr('target')) {
            // Nothing to do here. Open link in new tab.
        } else {
            if (this_href == '#') {
                e.preventDefault();
            } else if (
                this_href.length > 1 && 
                this_href[0] !== '#' && 
                !/\.(jpg|png|gif)$/.test(this_href) &&
                this_href.match("^http")
            ) {
                e.preventDefault();
                change_location(this_href);
            }
        }
    }).on('mousedown', function(e) {
        e.preventDefault();
    });
}

// Change Location Href
var change_location = function(this_href) {

    // 1
    gsap.to('.header--top>*', 
        {
            css: {
                x: -10,
                y: -10,
                opacity: 0,				
            },
            duration: 0.3,
            // delay: 0.5,
            stagger: 0.1
        },
    );
    // 1
    gsap.to('.header #menu-main li', 
        {
            css: {
                x: -10,
                y: -10,
                opacity: 0,				
            },
            duration: 0.3,
            delay: 0.5,
            stagger: 0.1
        },
    );

    // 1
    gsap.to('#page > header, #page > main, #page > div, #page > footer', 
        {
            css: {
                opacity: 0,				
            },
            duration: 0.4,
            delay: 1,
            stagger: 0.1
        },
    );
    // 2
    gsap.to('body', 
        {
                css: {
                    opacity: 0,			
                },
                duration: 0.5,
                delay: 1.5
        },
    );

    // Redirect Page After 2s
    setTimeout( function() {
        jQuery('body').addClass('is-unloaded');
        window.location = this_href;
    }, 1200, this_href);
}

initSetup(); 
var lazyImages = '';
var inAdvance = 300;
var isActionLoad = false;

function lazyLoad(is_manual) {
  type = (typeof type !== 'undefined') ?  is_manual : false;
  
  lazyImages = [...document.querySelectorAll('.lazy-img')];
  lazyImages.forEach(image => {
    if (window.getComputedStyle(image).display !== "none") {
        isActionLoad = false;
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
          isActionLoad = true;
        }
        if(is_manual) {
          isActionLoad = true; 
        } 
        if(isActionLoad) {
          image.src = image.dataset.src;
          // console.log(image.src);
          if(image.dataset.alt) {
            image.alt = image.dataset.alt;
          }

          image.onload = () => image.classList.add('loaded');
          image.classList.remove("lazy-img");
        }

    }
  }); // if all loaded removeEventListener
}


lazyLoad();
window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);
window.addEventListener("orientationchange", lazyLoad);

// Image Lazyload
// This goes in the JS file
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll(".lazy-img-v2"));
  let active = false;

  const lazyLoadV2 = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          // Checking if the user has scrolled enough
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-img");

            if(lazyImage.dataset.alt) {
              lazyImage.alt = lazyImage.dataset.alt;
            }

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            // No need to use the event listeners if there are no images to be lazy loaded
            // if (lazyImages.length === 0) {
            //   document.removeEventListener("scroll", lazyLoadV2);
            //   window.removeEventListener("resize", lazyLoadV2);
            //   window.removeEventListener("orientationchange", lazyLoadV2);
            // }
          }
        });

        active = false;
      }, 250);
    }
  };
  lazyLoadV2();
  document.addEventListener("scroll", lazyLoadV2);
  window.addEventListener("resize", lazyLoadV2);
  window.addEventListener("orientationchange", lazyLoadV2);
});








// Background
let lazyImagesBg = [...document.querySelectorAll('[data-lazybgimg]')];
let inAdvanceBg = 300;

function lazyLoadBg() {
  lazyImagesBg.forEach(image => {
    if (window.getComputedStyle(image).display !== "none") {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvanceBg) {
	        
	        image.style.backgroundImage = "url('" + image.dataset.lazybgimg + "')";
	        
	        image.onload = () => image.classList.add('loaded');
        }
    }
  }); // if all loaded removeEventListener
}

lazyLoadBg();
window.addEventListener('scroll', lazyLoadBg);
window.addEventListener('resize', lazyLoadBg); 
(function($) {

    'use strict'

    /************************************************************
    * Predefined letiables
    *************************************************************/
    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body');



    function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }
    function loadSVG(){
        jQuery('img').filter(function() {
            return this.src.match(/.*\.svg$/);
        }).each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }
    var navSlider = function(){
        // var swiper = new Swiper('.nav-slider #menu-main', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 10,
        //     breakpoints: {
        //         992: {
        //           spaceBetween: 18,
        //         },
        //       }
           
        //   });
    }
    var initSetup = function(){
        $body.addClass('is-init');
        
        
    }
    
    var heroSlider = function(){
        var swiper = new Swiper('.hero-slider .swiper-container', {
            slidesPerView: '1',
            spaceBetween: 0,
            autoplay: true,
            loop: true,
            lazy: true,
            navigation: {
                nextEl: '.bbs-slide-next',
                prevEl: '.bbs-slide-prev',
              },
          });
    }
    var carouselProductList = function(){


        var elm = $(".c-carousel-product-list .swiper-container"),
            swiper = null,
            _arrtimeduration = null,
            _timeDelay = null,
            sliderOption = null
            ;
        elm.each(function(){
            var _this = $(this);
            var _select = '[data-swiperid="' + _this.data('swiperid') + '"]', 
                swiper_nextid = '[data-swiper_nextid="' + _this.data('swiperid') + '"]', 
                swiper_previd = '[data-swiper_previd="' + _this.data('swiperid') + '"]',
                swiper_pagination = '[data-swiper_pagination="' + _this.data('swiperid') + '"]';
            
            

            // Ngẩu nhiên về thời gian delay
            _arrtimeduration = [4000, 4500, 3000, 5000, 5500, 3500]; 
            var nRandom = function(mn, mx) {  
                return Math.random() * (mx - mn) + mn;  
            }


            _timeDelay = _arrtimeduration[Math.floor(nRandom(1, 5))-1];


            sliderOption = {
                slidesPerView: 4,
                centeredSlides: false,
                loop: true,
            };


            // Nếu số lượng item nhỏ hơn 2 thì clone nó ra nhiều cái
            if(_this.find('.swiper-slide').length < 2) {
                _this.find('.swiper-slide:nth-child(1)').clone().appendTo( _this.find(".swiper-wrapper") );
                _this.find('.swiper-slide:nth-child(2)').clone().appendTo( _this.find(".swiper-wrapper") );
                _this.find('.swiper-slide:nth-child(3)').clone().appendTo( _this.find(".swiper-wrapper") );
            }
            // if(_this.find('.swiper-slide').length < 4) {
            //     sliderOption.slidesPerView = _this.find('.swiper-slide').length;
            //     sliderOption.centeredSlides = true;
            //     sliderOption.loop = false;
            // }

            swiper = new Swiper(_select, {
                slidesPerView: sliderOption.slidesPerView,
                spaceBetween: 32,
                loop: sliderOption.loop,
                autoplay: true,
                lazy: true,
                centeredSlides: sliderOption.centeredSlides,
                autoplay: {
                    delay: _timeDelay,
                },

                pagination: {
                    el: swiper_pagination,
                },
                navigation: {
                    nextEl: swiper_nextid,
                    prevEl: swiper_previd,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
                on: {
                    init: function () {
                      _this
                    },
                },
            });


            $(this).hover(function() {
                swiper.autoplay.stop();
            }, function() {
                swiper.autoplay.start();
            });
        });
      
    }

    var showModal = function(){
        var elmstr = '.c-modal',
            _stt_id=0;

        // Cookie
        $(elmstr + '[data-usercookie]').each(function(){
            var _id_modal = 'modal_id_' + _stt_id,popup = $(this);
            $(this).attr('data-idmodal', _id_modal);
            if(getCookie(_id_modal) === false) {
                setTimeout(function(){popup.addClass('show'); }, 30000);
            }
            _stt_id++;
        });


        $(elmstr + '__close').click(function(e){
            $(this).closest(elmstr).removeClass('show');
            var _id_modal = $(this).closest(elmstr).data('idmodal');
            var _type = $(this).closest(elmstr).data('usercookie');
            if(_type) {
                console.log(_id_modal, _type);
                // setCookie()
                setCookie(_id_modal, 'close', _type);
            }
        });
        jQuery(document).mouseup(function(e) {
            var container = jQuery(elmstr + '__container');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(e.target).removeClass('show')
            }
        });
    }
    var showPopover = function(){

        var str_menu = '';
        var elmstr = '.c-popover';
        var hideHtmlPopover = function() {
            // $html.removeClass('dlg_has_showmn');
            $html.removeClass (function (index, className) {
                return (className.match (/(^|\s)dlg_has_show\S+/g) || []).join(' ');
            });
        }
        var getAndShowPopover = function(_this, _classes) {
            var this_offset = _this.offset();
            var this_offset_postop = this_offset.top + _this.outerHeight() + 8;
            var this_offset_poscenter = 0;
            var this_offset_container_right = 0;
            if(jQuery('.bbs2-container').length) 
                this_offset_container_right = jQuery('.bbs2-container').offset().left + jQuery('.bbs2-container').outerWidth();
            else 
                this_offset_container_right = jQuery('body').outerWidth();
            // console.log(this_offset);
            if( typeof _classes !== "undefined") {  
                // console.log(str_menu , _classes);     
                if(str_menu !== _classes) {

                    // Popover cũ ẩn đi
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').fadeOut().addClass('is_hide').removeClass('is_show');


                    // Menu thay biến tạm mới
                    str_menu = _classes;

                }

                // show menu mới lên
                $(elmstr + '[data-dlgid="' + str_menu + '"]').fadeIn().addClass("is_show").removeClass('is_hide');

                // Set top
                $(elmstr + '[data-dlgid="' + str_menu + '"]').css('top', this_offset_postop);


                // add body class flag
                $html.addClass('dlg_has_showmn');
                if($(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover__menuspbar')) {
                    $html.addClass('dlg_has_showmn_menuspbar');
                }

                // center point
                // Chieu dai popover
                var _dlgwidth = $(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth();
                this_offset_poscenter = this_offset.left + _this.outerWidth() / 2;

                if((this_offset_poscenter + _dlgwidth / 2) > this_offset_container_right) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth + _this.outerWidth());
                } else {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth / 2);
                }

                // xác định bên trái
                if((this_offset_poscenter - _dlgwidth / 2) < 0) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left);
                }
                
                // Nếu là popover filter 
                if(
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter') ||
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter-bar_sort')
                ) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left + _this.outerWidth() - $(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth() );

                }
            }
        }


        var _time_hide = 0;
        var _strtemp = '';

        // Point Enter
        $('[data-popover]').mouseenter(
            function() {
                if($window.width() < 767) return false;
                var _this = $(this);
                var _classes = _this.data('popover');
                getAndShowPopover(_this, _classes);
                // console.log(_strtemp, _classes);
                clearInterval(_time_hide);
                if(_strtemp !== _classes) {
                    _strtemp = _classes
                }
        })
        .mouseleave(
            function() {
                if($window.width() < 767) return false;
                var _this = $(this);
                var _classes = _this.data('popover');
                _time_hide = setTimeout(function(){
                    $(elmstr + '[data-dlgid="' + _classes + '"]').fadeOut().addClass('is_hide').removeClass('is_show');
                    hideHtmlPopover();
                }, 2000);

        })
        .click(
            function() {
                var _this = $(this);
                var _classes = _this.data('popover');
                clearInterval(_time_hide);
                // console.log(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').attr('class'));
                if(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').hasClass('is_show')) {
                    // Show
                    $(elmstr + '[data-dlgid="' + _classes + '"]').removeClass('is_show').addClass('is_hide')
                    hideHtmlPopover();
                } 
                else {
                    getAndShowPopover(_this, _classes);
                    // Hiển thị nó lên 
                    // $(elmstr + '[data-dlgid="' + _classes + '"]').removeClass('is_hide').addClass('is_show').fadeIn('slow', function() {
                    //     $(this).removeClass('is_show').addClass('is_hide')
                    // });
                }
        });


        // Popover Enter
        $(elmstr + '[data-dlgid]').mouseenter(
            function() {
                clearInterval(_time_hide);
            })
        .mouseleave(
            function() {

                var _is_hide = false;

                if($(this).find("*").is(":focus") ) _is_hide = true;
                if($(this).hasClass('c-popover--filter')) _is_hide = true;

                // Dừng việc hiden
                if(_is_hide) return false;


                $(this).fadeOut().addClass('is_hide').removeClass('is_show');
                hideHtmlPopover();
            })
        ;



        $(elmstr + '__close').click(function(e){
            $(this).closest(elmstr).addClass('is_hide').removeClass('is_show');
            hideHtmlPopover();
            // setCookie()
        });

        // Click nằm ngoài AREA thì ẩn đi
        jQuery(document).mouseup(function(e) {
            

            // console.log();
            try{
                var _ispopop_item = $(e.target).attr('data-popover');
                
                // Dùng cái keytimehide này để once hiển thị chống overlap - hơi tệ tí
                if(!_ispopop_item) {
                    var container = jQuery(elmstr + '[data-dlgid]');
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        
                        container.fadeOut().addClass('is_hide').removeClass('is_show');
                        hideHtmlPopover();
                    }
                }

            } catch(e) {
                console.log(e);
            }

        });
    }


    var FilterCategory = function () {


        $('.brand__filter, ._cancel_filter, ._close_filterpanel').click(function(){
            // $('.brand__filter-panel').toggleClass('open');
            $('.c-popover--filter').removeClass('is_show').addClass('is_hide');
            $html.removeClass('dlg_has_showmn');

        });
        $('.filter_top ._cancel_filter ').click(function(){
            var this_parent = jQuery(this).closest('.filter_top');
            var _taxonomy   = this_parent.data('product_taxonomy');
            var _slug       = this_parent.data('product_slug');
            ChangeUrl('Search Page', '?' + _taxonomy + '=' + _slug);
            jQuery('.category-list input[type="checkbox"]').prop( "checked", false );
            jQuery('.brand__filter-panel .custom-control-input').prop('checked', false);
            // Thực hiện ẩn
            $('.filter_top ._displayresult').attr('data-nrsproduct', "");
        });

        $('.filter_top ._cancel_filter').click(function(){
            $('.products-list .product_containlist').fadeIn();
            if($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeOut();
            }

            // var button = $(this);
            // var query_group = [];
            
            // // Load 1 lần once load

            // if(button.hasClass('_loading')) return;

            // var data = {
            //     'action': 'filterajaxcategories',
            //     'query_group': query_group, // that's how we get params from wp_localize_script() function
            //     'security' : $('head meta[name="sweb_security_ajax_refer"]').attr('content'),
            // };

            // $.ajax({ // you can also use $.post here
            //     url : sweb_ajaxurl, // AJAX handler
            //     data : data,
            //     type : 'POST',
            //     beforeSend : function ( xhr ) {
            //         $('.category_area').addClass('_x_loadingListProduct ');
            //         button.addClass('_loading'); // change the button text, you can also add a preloader image
            //     },
            //     success : function( data ){
            //         if( data ) { 
            //             button.closest('.category_area').find('._outer_areaload').html(data); // insert new posts

            //             button.removeClass('_loading'); // if last page, remove the button
            //             $('.category_area').removeClass('_x_loadingListProduct ');

            //         }
            //     }
            // });

        });


        function _check_jsonthis(tempArray) {
            // Đầu vào là tempArray (list các checkbox)
            // var _arr_checkbox = ["signature", "purely-ageless", "oils-serums"];
            var _arr_checkbox = tempArray;
            var _list_product = lst_filter_json.list_product;
            var _arr_list = [];
            jQuery.each(_list_product, function(k,_product){
                // console.log(k);
                // console.log(_product);

                // === OR ===
                var _is_thisok = false;
                jQuery.each(_product.term_select, function(ts_k, ts_v){
                    // console.log(ts_v)
                    if(_arr_checkbox.includes(ts_v)) {
                        _is_thisok =  true;
                    }
                });


                //  === AND ===
                // var _is_thisok = false;
                // var _tt = 0;
                // jQuery.each(_product.term_select, function(ts_k, ts_v){
                //     // console.log(ts_v)
                //     if(_arr_checkbox.includes(ts_v)) {
                //         _tt++;
                //     }
                // });
                // // console.log(_tt + " --- " + _arr_checkbox.length);
                // if(_tt === _arr_checkbox.length) {
                //     _is_thisok = true;
                // }


                // Kết quả -> đưa vào hàng đợi
                if(_is_thisok) {
                    _arr_list.push(_product);
                }
            });

            return _arr_list;
        }

        $(document).on('click', '.bar_sort > .btn_short', function(e) {

            var button = $(this);
            var data_sort = button.data('sort');
            var list_allcheck = [];

            // Cancel This Select
            if(button.hasClass('active')) {
                button.removeClass('active');
                $('.products-list .product_containlist').fadeIn();
                if($('.pos_ajax').length > 0) {
                    $('.pos_ajax').fadeOut();
                }
                return false;
            }

            $('.bar_sort > .btn_short').removeClass('active');
            button.addClass('active');


            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value) {
                var name_input = jQuery(this).attr('name');
                name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) == -1) {
                    list_allcheck.push(name_input);
                }
            });
            var query_group = [],
                tempArray = [];
            jQuery.each(list_allcheck, function(i, el) {
                jQuery('input[name="' + el + '[]"]:checked').each(function() {
                    tempArray.push(jQuery(this).val());
                })
            });
            // if ((tempArray.length > 0) === false) {
            //     alert('Vui lòng nhập đầy đủ thông tin!')
            //     return;
            // } else {
            //     $('.brand__filter-panel').toggleClass('open');
            //     $('body').toggleClass('_open_filterproduct');
            // }
            // Function check
            var _check_jsonthis = function (tempArray) {
                var _arr_checkbox = tempArray;
                var _list_product = lst_filter_json.list_product;
                var _arr_list = [];
                jQuery.each(_list_product, function(k, _product) {
                    var _is_thisok = false;
                    jQuery.each(_product.term_select, function(ts_k, ts_v) {
                        if (_arr_checkbox.includes(ts_v)) {
                            _is_thisok = true;
                        }
                    });
                    if (_is_thisok) {
                        _arr_list.push(_product);
                    }
                });
                return _arr_list;
            }

            function sortList(list,order) {
                 // if(order=="ASC"){


                 // }
                 // else{
                 //    return list.sort((a,b) => {
                 //        return parseFloat(b.last_price) - parseFloat(a.last_price);
                 //    });
                 // }


                var _a_last_price = null,
                _b_last_price = null;
                return list.sort((a,b) => {
                     _a_last_price = a.last_price || null;
                     _b_last_price = b.last_price || null;

                     // _a_last_price = _a_last_price.replace(/[^0-9\.]+/g,"");
                     // _b_last_price = _b_last_price.replace(/[^0-9\.]+/g,"");
                        // console.log(a.last_price, parseFloat(a.last_price), b.last_price, parseFloat(b.last_price));
                    // if(isNaN(parseFloat(a.last_price))) return false;
                    if (parseFloat(a.last_price) === parseFloat(b.last_price)) {
                        return 0;
                    }
                    // nulls sort after anything else
                    else if (a.last_price === null) {
                        return 1;
                    }
                    else if (b.last_price === null) {
                        return -1;
                    }
                    // otherwise, if we're ascending, lowest sorts first
                    else if (order=="ASC") {
                        _a_last_price = a.last_price.replace(/[^0-9\.]+/g,"");
                        _b_last_price = b.last_price.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_last_price) < parseFloat(_b_last_price) ? -1 : 1;
                    }
                    // otherwise, if we're ascending, lowest sorts first
                    // if descending, highest sorts first
                    else { 
                        _a_last_price = a.last_price.replace(/[^0-9\.]+/g,"");
                        _b_last_price = b.last_price.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_last_price) < parseFloat(_b_last_price) ? 1 : -1;
                    }
                    // return parseFloat(a.last_price) - parseFloat(b.last_price);
                })
            }
            function sortListByFeature(list,order) {
                var _a_last_price = null,
                _rs  = null,
                _a_average = null,
                _b_average = null,
                _b_last_price = null;
                return list.sort((a,b) => {
                    _rs = 1;
                    // otherwise, if we're ascending, lowest sorts first
                    if (order=="FEATURED") {
                        if (a.is_featured) {
                            console.log(a.is_featured);
                            return a.is_featured ? -1 : 1;
                        }
                        return 1;
                    }
                    if (order=="NEWPRODUCT") {
                        if (a.timesptamp) {
                            return a.timesptamp < b.timesptamp ? 1 : -1;
                        }
                    }
                    if (order=="AVGREVIEW") {
                        _a_average = a.average.replace(/[^0-9\.]+/g,"");
                        _b_average = b.average.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_average) < parseFloat(_b_average) ? -1 : 1;
                    }
                    return _rs;
                    // return parseFloat(a.last_price) - parseFloat(b.last_price);
                })
            }

            var _arr_list = _check_jsonthis(tempArray);

            _arr_list = _arr_list.length > 0 ? _arr_list : lst_filter_json.list_product;

            // console.log(data_sort, _arr_list.length, _arr_list); 

            if (data_sort === 'price_hightolow') {
                sortList(_arr_list, 'DESC');
            }

            if (data_sort === 'price_lowtohigh') {
                sortList(_arr_list, 'ASC');                
            }

            if (data_sort === 'price_featured') {
                sortListByFeature(_arr_list, 'FEATURED');                
            }
            if (data_sort === 'new_product') {
                sortListByFeature(_arr_list, 'NEWPRODUCT');                
            }
            if (data_sort === 'customer_review') {
                sortListByFeature(_arr_list, 'AVGREVIEW');                
            }

            
            $('.products-list .product_containlist').fadeOut();
            if ($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeIn();
            }
            if (($('.products-list .product_containlist').next('.pos_ajax').length > 0) === false) {
                $('.products-list .product_containlist').after('<div class="pos_ajax"></div>');
            }
            var _str_content = '<div class="container"><div class="row"><div class="col"><div class="_x_inner_row"><h2 class="_x_notfofund_title">Chưa có bài viết hay sản phẩm nào ở đây</h2><p class="_x_notfofund_text"><span class="dis_block">Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p></div></div></div></div>';
            if (_arr_list.length > 0) {
                _str_content = '';
                jQuery.each(_arr_list, function(k, v) {
                    var str_class_isbestsell = (v.is_best_sell) ? 'is_this_best_sell' : '';
                    
                    // _str_content += '\
                    // <li class="product type-product post-493 status-publish outofstock product_cat-sukin product_cat-da-dau product_cat-dau-goi product_cat-toc-dau has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    //     <a href="' + v.link + '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">' + v.thumbnail + '\
                    //         <h2 class="woocommerce-loop-product__title">' + v.title + '</h2> \
                    //     </a>\
                    //     <div class="product-desc">' + v.content + '</div>\
                    //     ' + v.price + '\
                    // </li>';

                    _str_content += '\
                <li class="product type-product status-publish first instock product_cat-loai-da product_cat-da-hon-hop product_cat-da-thuong product_tag-bo-kit-sang-da-andalou product_tag-bo-duong-sang-da-andalou-mini product_tag-andalou-get-started-brightening has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    <a href="javascript:void(0)" class="c-carousel-product-list__product woocommerce-LoopProduct-link woocommerce-loop-product__link product-quickview" data-id="' + v.id + '">\
                        <div class="c-carousel-product-list__product-thumb">\
                        ' + v.thumbnail + '\
                        <span class="c-carousel-product-list__product-btn_view">Xem nhanh</span></div>\
                        <h2 class="woocommerce-loop-product__title">' + v.title + '</h2>\
                        ' + v.price + '\
                        <span class="c-carousel-product-list__product-btn">Xem thêm</span>\
                    </a>\
                    <div class="product-desc">' + v.content + '</div>\
                </li>';


                    
                });
                _str_content = '<ul class="products">' + _str_content + '</ul>';
            }
            jQuery('.pos_ajax').html(_str_content);
        });



        // Action checkbox
        jQuery('.filter_top .custom-control input.custom-control-input').change(function(){

            // B1: Lấy danh sách
            var list_allcheck = [];
            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value){
                var name_input = jQuery(this).attr('name');
                    name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) ==-1) {
                    list_allcheck.push(name_input);
                    
                }
            });
            var query_group = [], tempArray = [];
            jQuery.each(list_allcheck, function(i, el){
              jQuery('input[name="' + el + '[]"]:checked').each(function(){
                  tempArray.push(jQuery(this).val());
              })
            });

            // console.log(tempArray);
            // console.log(_check_jsonthis(tempArray));
            // Nếu checkbox chọn thì sẽ lọc danh sách sản phẩm
            var nrsproduct = 0;
            if(tempArray.length > 0) {
               nrsproduct = _check_jsonthis(tempArray).length;
            }
            $('.filter_top ._displayresult').attr('data-nrsproduct', "(" + nrsproduct + ")");
        });

        // Action button checkbox
        $('.filter_top ._displayresult').click(function(){
            var button = $(this);


            // ======
            // Ktra checkbox
            // ======

            // B1: Lấy danh sách
            var list_allcheck = [];
            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value){
                var name_input = jQuery(this).attr('name');
                    name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) ==-1) {
                    list_allcheck.push(name_input);
                    
                }
            });
            var query_group = [], tempArray = [];
            jQuery.each(list_allcheck, function(i, el){
              jQuery('input[name="' + el + '[]"]:checked').each(function(){
                  tempArray.push(jQuery(this).val());
              })
            });

            // console.log(query_group.join('&'));
            // Bỏ qua nếu không có dũ liệu
            if((tempArray.length > 0) === false )  {
                alert('Vui lòng nhập đầy đủ thông tin!')
                return;
            } else {
                // $('.brand__filter-panel').toggleClass('open');
                // // $('body').toggleClass('cxcvxcv');
                $('.c-popover--filter').removeClass('is_show').addClass('is_hide');
                $html.removeClass('dlg_has_showmn');
            }

            // Thực hiện thay đổi hiển thị
            $('.products-list .product_containlist').fadeOut();
            if($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeIn();
            }
            if(($('.products-list .product_containlist').next('.pos_ajax').length > 0) === false) {
                $('.products-list .product_containlist').after('<div class="pos_ajax"></div>');
            }
            



            // Đổ dữ liệu filter ra giao diện
            // console.log(tempArray);
            var _arr_list = _check_jsonthis(tempArray);
            // ==== ===== ===== =============
            // ==== Set Content To List =====
            // ==== ===== ===== =============
            var _str_content = '<div class="container"><div class="row"><div class="col"><div class="_x_inner_row"><h2 class="_x_notfofund_title">Chưa có bài viết hay sản phẩm nào ở đây</h2><p class="_x_notfofund_text"><span class="dis_block">Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p></div></div></div></div>';
            if(_arr_list.length > 0) {
                // console.log(_arr_list);

                _str_content = '';
                jQuery.each(_arr_list, function(k,v) {
                    var str_class_isbestsell = (v.is_best_sell) ? 'is_this_best_sell' : '';
                    // _str_content += '<div class="_x_row _x_link_all animated fadeInUp  ' + str_class_isbestsell + ' _item-">\
                    //    <div class="_x_gr">\
                    //       <a href="' + v.link + '" class="_x_thumbnail">' + v.image + '</a>\
                    //       <div class="_x_tt"><a href="' + v.link + '">' + v.title + '</a></div>\
                    //       <div class="_x_content">' + v.content + '</div>\
                    //    </div>\
                    // </div>';

                    _str_content += '\
                    <li class="product type-product status-publish first instock product_cat-loai-da product_cat-da-hon-hop product_cat-da-thuong product_tag-bo-kit-sang-da-andalou product_tag-bo-duong-sang-da-andalou-mini product_tag-andalou-get-started-brightening has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    <a href="javascript:void(0)" class="c-carousel-product-list__product woocommerce-LoopProduct-link woocommerce-loop-product__link product-quickview" data-id="' + v.id + '">\
                        <div class="c-carousel-product-list__product-thumb">\
                        ' + v.thumbnail + '\
                        <span class="c-carousel-product-list__product-btn_view">Xem nhanh</span></div>\
                        <h2 class="woocommerce-loop-product__title">' + v.title + '</h2>\
                        ' + v.price + '\
                        <span class="c-carousel-product-list__product-btn">Xem thêm</span>\
                    </a>\
                    <div class="product-desc">' + v.content + '</div>\
                </li>';
                    
                });
                _str_content = '<ul class="products">' + _str_content + '</ul>';
                 
            }

            jQuery('.pos_ajax').html(_str_content);
            // B2 Change URL Address bar
            // ChangeUrl('Search Page', '?' + query_group.join('&'));
            // location.hash = query_group.join('&');
            // B3 Send Request Data HYML

            // Load 1 lần once load

            // if(button.hasClass('_loading')) return;

            // var data = {
            //     'action': 'filterajaxcategories',
            //     'query_group': query_group, // that's how we get params from wp_localize_script() function
            //     'security' : $('head meta[name="sweb_security_ajax_refer"]').attr('content'),
            // };

            // $.ajax({ // you can also use $.post here
            //     url : sweb_ajaxurl, // AJAX handler
            //     data : data,
            //     type : 'POST',
            //     beforeSend : function ( xhr ) {
            //         $('.category_area').addClass('_x_loadingListProduct ');
            //         button.addClass('_loading'); // change the button text, you can also add a preloader image
            //     },
            //     success : function( data ){
            //         if( data ) { 
            //             button.closest('.category_area').find('._outer_areaload').html(data); // insert new posts

            //             button.removeClass('_loading'); // if last page, remove the button
            //             $('.category_area').removeClass('_x_loadingListProduct ');

            //         }
            //     }
            // });

        });
        if($(window).width() < 426) {
            $('.brand__filter-panel .category-caption').click(function(){
                $(this).next().addClass('active')
            });
            $('.brand__filter-panel ._backcaption').click(function(){
                $(this).parent().removeClass('active')
            });
        }
    }
    var productSlider = function(){
        if ($(document).width() > 767){
            var galleryThumbs = new Swiper('.c-product__slider .product-gallery', {
                spaceBetween: 30,
                slidesPerView: 3,
                preloadImages: false,
                lazy: true,
                loop: true,
                loopedSlides: 4,
            });


            var galleryTop = new Swiper('.c-product__slider .product-image', {
                spaceBetween: 0,
                autoplay:true,
                slidesPerView: 1,
                preloadImages: false,
                lazy: true,
                loop: true,
                loopedSlides: 4,
                preventClicks: false,
                preventClicksPropagation: false,
                // simulateTouch: false,
                thumbs: {
                    swiper: galleryThumbs
                },
                on: {
                    init: function () {
                      productZoom.refresh();
                    },
                },
            });

            // Hover pause
            $('.c-product__slider .product-image').hover(function() {
                galleryTop.autoplay.stop();
            }, function() {
                galleryTop.autoplay.start();
            });
        }
        else {
            var galleryTop = new Swiper('.c-product__slider--mobile .product-image', {
                spaceBetween: 0,
                autoplay:true,
                slidesPerView: 1,
                preloadImages: false,
                lazy: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
            
            // Hover pause
            $('.c-product__slider .product-image').hover(function() {
                galleryTop.autoplay.stop();
            }, function() {
                galleryTop.autoplay.start();
            });
        }

    }
    var megaMenu = function(){
        var _ninside = 0;

        var isInside = function(_this) {
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
        }


        // jQuery('#menu-main>li>a').hover(get_position);
        var n_overmouse = 0;
        var str_menu = '';

        var getAndShowMenu = function(_this, _classes) {
            var this_offset = _this.offset();
            var this_offset_poscenter = this_offset.left + _this.outerWidth() / 2 - 8;
            var hmain_offset = $('.header--main').offset();
            var hmain_offset_postop = hmain_offset.top + $('.header--main').outerHeight();

            if( typeof _classes !== "undefined") {

                if(str_menu !== _classes) {
                    // Menu cũ ẩn đi
                    $('.c_megamenu[data-class="' + str_menu + '"]').addClass('is_hide').removeClass('is_show');
                    // Menu thay biến tạm mới
                    str_menu = _classes;
                }
                // show menu mới lên
                $('.c_megamenu[data-class="' + str_menu + '"]').addClass("is_show").removeClass('is_hide');

                // set toa do
                $('.c_megamenu[data-class="' + str_menu + '"]').css('top', hmain_offset_postop);

                // center point
                $('.c_megamenu[data-class="' + str_menu + '"] .c_megamenu__point').css('left', this_offset_poscenter);

                // add body class flag
                $html.addClass('megamn_has_showmn');
            }

             
        }


        var outerOverflow = jQuery(".header .nav-slider");
        $( "#menu-main>li.menu-item" ).mouseenter(
            function() {

                // Hover again => auto clear Interval Timeout
                clearInterval(m_interval);

                // xác định tọa độ đối tượng
                var _this = $(this);
                n_overmouse = 1;
                // var classes = $.map($(this).attr('class').split(' '), function(cls, i) {
                //   if (cls.indexOf('mn_') === 0) {
                //     return cls || '';
                //   }
                // })
                var classes = $(this).data('id_nam');
                // console.log(classes);
                // Update liên tục nếu là PC
                if(typeof classes === 'undefined') {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                }
                


                // Scroll Move by position
                var i = $(this),
                a = (i.offset().left, i.attr("menu-item"));

                var n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 )
                }, 100, function() {
                    // Animation complete.

                    getAndShowMenu(_this, classes);
                    setTimeout(function(){
                       $html.addClass('megamn_finish_scroll') 
                    }, 1000);

                });


                    
            }
        );
        var m_interval = 0;
        $document.on("mouseleave","html.megamn_has_showmn .header--main",
            function() {
                m_interval = setTimeout(function() {
                    n_overmouse--;
                    // console.log(n_overmouse);
                    
                    // Ẩn menu sau 2 giây -> hủy nếu ở trên phân vùng mega menu
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                }, 1000);
            }
        );
        $document.on("mouseenter","html.megamn_has_showmn .c_megamenu",
            function() {
                clearInterval(m_interval);
                // console.log(n_overmouse);
            }
        ); 
        $document.on("mouseleave","html.megamn_has_showmn .c_megamenu", 
            function() {
                n_overmouse--;
                // console.log(n_overmouse);
                
                $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                $html.removeClass('megamn_has_showmn');
            }
        );



        $( "#menu-main>li.menu-item" ).click(
            function(e) {
                var _this = $(this);
                var _classes = _this.data('id_nam');
                var _is_megavisible = $('.c_megamenu[data-class="' + _classes + '"]').hasClass("is_show");

                clearInterval(m_interval);
                if(_is_megavisible) {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                } else {

                    // console.log(_is_megavisible, 222);
                    getAndShowMenu(_this, _classes);
                    // $('.c_megamenu').addClass('is_show').removeClass('is_hide');
                }
            }
        )
        ;

        // Phát hiện và remove megamenu nếu scroll 
        $('.header .nav-slider').scroll(function (event) {
            // Do something
            if($html.hasClass('megamn_finish_scroll')) {
                $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                $html.removeClass('megamn_has_showmn');
                $html.removeClass('megamn_finish_scroll');
            }
        });



        // Click nằm ngoài megamenu thì ẩn đi
        // jQuery(document).mouseup(function(e) {
        //     var container = jQuery('.c-popover[data-dlgid]');
        //     // if the target of the click isn't the container nor a descendant of the container
        //     if (!container.is(e.target) && container.has(e.target).length === 0) {
        //         $('.c_megamenu').addClass('is_hide').removeClass('is_show');
        //         $html.removeClass('megamn_has_showmn');
        //         $html.removeClass('megamn_finish_scroll');
        //     }
        // });

    }
    var productSingleTabContent = function(){
        var _li = '';
        var _clsparent = '.c-product__tabinfo';

        // Once Load
        if($(_clsparent).length  && $(_clsparent).hasClass('finishRender') === false) {

            // Render element
            $(_clsparent + '-item').each(function(index){
                var _this = $(this);
                var _class = (index === 0 ? "class=\"active\"" : "");
                (index === 0 ? _this.addClass('active') : "");
                _this.attr('data-id', index);
                _li += '<li data-id="' + index + '" ' + _class + '>' + _this.data('title') + '</li>';
                _this.before($('<span data-id="' + index + '" ' + _class + ' >' + _this.data('title') + '</span>'));
            });
            var _item = '<div class="c-product__tabinfo-head"><ul>' + _li + '</ul></div>';
            $(_clsparent + '-list').before($(_item));


            // Scroll Move More View
            var outerOverflow = jQuery(_clsparent + "-head ul");
            $(_clsparent + '-head ul li').click(function(){
                var _id = $(this).data('id');
                $(_clsparent + '-item').hide().removeClass('active');
                $(_clsparent + '-item[data-id="' + _id + '"]').show().addClass('active');
                $(_clsparent + '-head ul li').removeClass('active')
                $(this).addClass('active');


                var i = $(this),
                a = (i.offset().left, i.attr("data-tab"));

                var n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 - 64)
                }, 300)

            });



            // actClick
            $(_clsparent + '-list > span[data-id]').click(function(){
                var _this = $(this);
                var _id = $(this).data('id');
                $(_clsparent + '-item[data-id="' + _id + '"]').slideToggle(function() {
                    if($(this).is(":visible")) {
                        _this.addClass('active');
                        // $(_clsparent + '-head[data-id="' + _id + '"]').addClass('active');
                    } else {
                        _this.removeClass('active');
                        // $(_clsparent + '-head[data-id="' + _id + '"]').addClass('active');
                    }
                 });
            });


            // Reset
            var _reset = function() {
                $('.c-product__tabinfo-head ul li').removeClass('active');
                $('.c-product__tabinfo-head ul li[data-id="0"]').addClass('active');

                $('.c-product__tabinfo-item').removeClass('active').hide();
                $('.c-product__tabinfo-item[data-id="0"]').addClass('active').show();
                
                $('.c-product__tabinfo-list > span[data-id]').removeClass('active');
                $('.c-product__tabinfo-list > span[data-id="0"]').addClass('active');
            }
            var _x_once_resize = false;
            window.addEventListener('resize', function(){

                  if($(window).width() > 767 && _x_once_resize === false) {
                    _reset();
                    _x_once_resize = true;
                    // console.log(1,_x_once_resize)
                  }
                  if($(window).width() < 769 &&  _x_once_resize === true) {
                    _reset();
                    _x_once_resize = false;
                    // console.log(2,_x_once_classbody)
                  }
            });

        }
    }
    var catSidebar = function(){
        $('.cat-sidebar > li > a').on('click',function(e){
            e.preventDefault();
            var li = $(this).parent();
            li.toggleClass('open');
        });
    }
    var testAjax = function(){
        $('.header--top_login').on('click',function(e){
            // console.log('XXX');
            e.preventDefault();
            var post__not_in = 'Kcmhito';
            var data = {
                'action': 'testajax',
                'data': post__not_in,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };

            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        $('#' + data_tab).html(data); // insert new posts

                        // Xóa đi class not-ready sau khi load dc dữ liệu thành công
                        button.removeClass('not-ready')
                        // you can also fire the "post-load" event here if you use a plugin that requires it
                        // $( document.body ).trigger( 'post-load' );
                    }
                }
            });
        });
    }
    var activeNiceSelect = function(){
        if ($.fn.niceSelect){
            $('.woocommerce-ordering select').niceSelect();
        }
    }
    var editToggle = function (){
        function _removeClassName(els,cls) {
            for (var i = 0; i < els.length; i++) {
              els[i].classList.remove(cls)
            }
          }
        var acc = document.getElementsByClassName("edit");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            var li = this.parentElement.parentElement;
            /* Toggle between hiding and showing the active panel */
            var panel =  li.querySelector('.panel');
            if ( li.querySelector('.edit-account--item').classList.contains('active')){
                _removeClassName(document.querySelectorAll('.edit-account--item'),'active');
            }
            else {
                _removeClassName(document.querySelectorAll('.edit-account--item'),'active');
                li.querySelector('.edit-account--item').classList.add('active');
            }
           
        });
        }
    }
    var myAccountNav = function(){
        var elActive = document.querySelector('.woocommerce-MyAccount-navigation .is-active');
        if (elActive){
            elActive.addEventListener('click',function(e){
                e.preventDefault();
                this.parentElement.parentElement.classList.toggle('expand');
            })
        }
    }
    // action like unlike review
    var actionHelpful = function(){
        $('.actionHelpful').on('click',function(e){
            e.preventDefault();
            var _this = $(this);
            var idComment = {
                'idComment' : $(this).data('idcomment'),
                'actionLike' : $(this).data('like')
            }
            var data = {
                'action': 'actionHelpful',
                'data': idComment,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        var getId = _this.data('idcomment');
                        $('.like-'+getId).html(data.add);
                        $('.unlike-'+getId).html(data.reject);
                    }else{
                        // 
                        $('#formLogin').addClass('show');
                    }
                }
            });
        });
    }
    // function login form popup
    var ajaxLogin = function(){
        $('form#loginform').submit(function(event) {
            // get the form data
            // there are many ways to get this data using $ (you can use the class or id also)
            var _this = $(this),
             formData = _this.serialize(),
             redirect_to = _this.find('[name="redirect_to"]'),
             _container = _this.parent(),
             notice_area = _container.find('.woocommerce-notices-wrapper');
            if(notice_area.length <1){
                _container.prepend('<div class="woocommerce-notices-wrapper"></div>');
                notice_area = _container.find('.woocommerce-notices-wrapper');
            }
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : _this.attr('action'), // the url where we want to POST
                data        : formData, // our data object
            })
                // using the done promise callback
                .done(function(data) {
    
                    // log data to the console so we can see
                    var $data = $('<div>').html( data ); 
                    // $data.find('#login_error'); // this works now
                    var errorEl =$data.find('#login_error') ;
                    if (errorEl.length >0){
                        notice_area.html(errorEl.html());
                    }
                    else if(redirect_to.length>0) {
                        window.location.replace(redirect_to.val());
                    }
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
    }
    // action Write a review
    var actionWriteReview = function(){
        // close popup thankyou review
        $('.close-popup').on('click',function(e){
            $('#formThankReview').removeClass('show');
        });
        // select start
        $('.actionStar').on('click',function(e){
            var get_star = $(this).data('star');
            $('#rating').val(get_star);
            $('.rating a').removeClass('active');
            for (var i = 1; i <= get_star; i++) {
                $('.rating a:nth-child('+i+')').addClass('active');
            }
        });
        // hover star
        $( ".actionStar" ).hover(
          function() {
            var hover_star = $(this).data('star');
            for (var i = 1; i <= hover_star; i++) {
                $('.rating a:nth-child('+i+')').addClass('star-hover');
            }
          }, function() {
                $('.rating a').removeClass('star-hover');
                
          }
        );
        // ajax check login => return popup
        $('.action_writeReview').on('click',function(e){
            e.preventDefault();
            var _this = $(this);
            var idreview = $(this).data('idreview');
            var data = {
                'action': 'actionWriteReview',
                'data': idreview,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        $('#formReview').addClass('show');
                    }else{
                        // 
                        $('#formLogin').addClass('show');
                    }
                }
            });
        });
    }
    var stickyEl = function (el,screensize){
        if (!screensize){
            screensize = 769
        }
        if (window.screen.width < screensize){
            // When the user scrolls the page, execute myFunction
            window.onscroll = function() {
                // Get the header
                var header = document.querySelector("header"), elDom = document.querySelector(el);
                // Get the offset position of the navbar
                var sticky = header.offsetTop;
                if (window.pageYOffset > sticky) {
                    elDom.classList.add("sticky");
                } else {
                    elDom.classList.remove("sticky");
                }
            }
        }
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    }
    var modalTrigger = function(){
        $('.c-btn--show-modal').on('click',function(){
            var _this = $(this),_target = _this.data('target');
            if (_target && $(_target).length >0){
                $(_target).addClass('show');
            }
        });
        $('.c-btn--close-modal').on('click',function(){
            var currentModal = $(this).parents('.c-modal');
            currentModal.removeClass('show');
        })
    }
    var orderby = function(){
        $('.orderby').on('change',function(){
            insertParam('orderby',$(this).val());
        })
    }
    var bindLoad = function(){

        var param_action_login = {
               action: 'bbs_browserprivacy_norecaptcha'
        };
        jQuery.post(bbs_theme_ajaxurl, param_action_login , function(data){ 
          if(data._isok) {
            // Nhận key ajax refer
            jQuery('meta[name="security_ajax_refer"]').attr('content', data._key_wpajaxrefer);
            jQuery('body').addClass('website_has_recaptcha')
          } 
        })
        .fail(function() {
        })
        .always(function() {
        });
        

        $(window).bind('load', function(){
            // Events Load
            const event = new Event('readyDocument');
            var htmlElm = document.querySelector( 'html' );
            htmlElm.dispatchEvent(event);
            
            // Fix height margin top vs menubar
            if($window.width < 768) {
                var heightMenuBar = $('.c-menubar').height();
                $('.c-footer').css('margin-bottom', heightMenuBar);
            }
        });

        // Detech Event Ajax
        jQuery(document).ajaxStart(function(e){
            console.log(e)
          jQuery("body").addClass('ajaxLoading')
        });

        jQuery(document).ajaxComplete(function(e){
          jQuery("body").removeClass('ajaxLoading')
        });
    }
    function insertParam(key, value) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);
    
        // kvp looks like ['key1=value1', 'key2=value2', ...]
        var kvp = document.location.search.substr(1).split('&');
        let i=0;
    
        for(; i<kvp.length; i++){
            if (kvp[i].startsWith(key + '=')) {
                let pair = kvp[i].split('=');
                pair[1] = value;
                kvp[i] = pair.join('=');
                break;
            }
        }
    
        if(i >= kvp.length){
            kvp[kvp.length] = [key,value].join('=');
        }
    
        // can return this or...
        let params = kvp.join('&');
    
        // reload page with new params
        document.location.search = params;
    }

    var blogLoader = function(){
        $(document).on('click', '.bbs_misha_loadmore.bbs_btn_misha_loadmore', function(e) {
            var button = $(this);
            if (button.hasClass('_loading')) return;
            var this_ajaxurl = button.data('ajaxurl');
            var this_posts = button.data('posts');
            var this_current_page = parseInt(button.data('current_page'));
            var this_max_page = parseInt(button.data('max_page'));
            var data = {
                'action': 'loadmore',
                'query': this_posts,
                'page': this_current_page,
                'security': $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({
                url: bbs_theme_ajaxurl ,
                data: data,
                type: 'POST',
                beforeSend: function(xhr) {
                    button.text('Loading...');
                    button.addClass('_loading');
                },
                success: function(data) {
                    if (data) {
                        button.text(button.attr('data-txtbtn'));
                        button.closest('.outer_areaload').find('.bbs_inner').append(data);
                        this_current_page++;
                        button.data('current_page', this_current_page);
                        button.removeClass('_loading');
                        if (this_current_page == this_max_page)
                            button.remove();

                        lazyLoad(true);
                    } else {
                        button.remove();
                    }
                }
            });
        });
    }
    // action Click View
    var actionClickView = function(){
        // ajax 
        $(document).on('click', '.product-quickview', function(e) {
            e.preventDefault();
            var _this = $(this);
            var idpost = $(this).data('id');
            var data = {
                'action': 'actionClickView',
                'data': idpost,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                dataType: "html",
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        data = data.replace("null", "");
                        data = data.replace('type="text" class="datepicker"', 'type="date" class="datepicker"');
                        $('#formView .content-view').html(data);
                        $('#formView').addClass('show');
                    }
                }
            });
        });
    }
    // action add to cart ajax
    var actionAddToCart = function(){
        $(document.body).on('click input', 'input.qty', function() {
            $(this).parent().parent().find('a.ajax_add_to_cart').attr('data-quantity', $(this).val());
            $(".added_to_cart").remove();
        });
    }

    // Dom Ready
    $(function() {
        initSetup();
        loadSVG();
        editToggle();
        myAccountNav();
        navSlider();
        heroSlider();
        productSingleTabContent();
        megaMenu();
        productSlider();
        catSidebar();
        activeNiceSelect();
        carouselProductList();
        showModal();
        showPopover();
        actionHelpful();
        ajaxLogin();
        actionWriteReview();
        FilterCategory();
        modalTrigger();
        orderby();
        actionClickView();
        bindLoad();
        blogLoader();
        actionAddToCart();
        // stickyEl('.header',1950);
        // stickyEl('.cat-sidebar');
    });
})(jQuery);
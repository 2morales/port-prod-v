(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,e,n){__NEXT_REGISTER_PAGE("/_app",function(){return t.exports=n(210),{page:t.exports.default}})},210:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});var r=n(31),o=n.n(r),a=n(0),u=n.n(a),i=n(80),c=n.n(i),s=n(53),l=n.n(s);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,y(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,c.a),n=e,r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,null,u.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),u.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.2/css/uikit.min.css"}),u.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"})),u.a.createElement(i.Container,null,u.a.createElement(e,n)))}}],a=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(e){var n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,e.router,r=e.ctx,a={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:a=t.sent;case 6:return t.abrupt("return",{pageProps:a});case 7:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function u(t){p(a,r,o,u,i,"next",t)}function i(t){p(a,r,o,u,i,"throw",t)}u(void 0)})});return function(t){return e.apply(this,arguments)}}()}],r&&h(n.prototype,r),a&&h(n,a),e}()},211:function(t,e,n){"use strict";var r=n(20),o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.createUrl=k,e.Container=e.default=void 0;var a=o(n(45)),u=o(n(46)),i=o(n(212)),c=o(n(8)),s=o(n(9)),l=o(n(17)),f=o(n(18)),p=o(n(19)),h=o(n(14)),d=r(n(0)),y=o(n(1)),m=n(25),v=n(49),b=function(t){function e(){return(0,c.default)(this,e),(0,l.default)(this,(0,f.default)(e).apply(this,arguments))}var n;return(0,p.default)(e,t),(0,s.default)(e,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=k(e);return d.default.createElement(g,null,d.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function t(e){var n,r,o;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,e.router,r=e.ctx,t.next=3,(0,m.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)})}]),e}(d.Component);e.default=b,(0,h.default)(b,"childContextTypes",{headManager:y.default.object,router:y.default.object});var g=function(t){function e(){return(0,c.default)(this,e),(0,l.default)(this,(0,f.default)(e).apply(this,arguments))}return(0,p.default)(e,t),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(d.Component);e.Container=g;var w=(0,m.execOnce)(function(){0});function k(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return w(),r},get pathname(){return w(),e},get asPath(){return w(),n},back:function(){w(),t.back()},push:function(e,n){return w(),t.push(e,n)},pushTo:function(e,n){w();var r=n?e:null,o=n||e;return t.push(r,o)},replace:function(e,n){return w(),t.replace(e,n)},replaceTo:function(e,n){w();var r=n?e:null,o=n||e;return t.replace(r,o)}}}},212:function(t,e,n){var r=n(79);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},80:function(t,e,n){t.exports=n(211)}},[[209,1,0]]]);
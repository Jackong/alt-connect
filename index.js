!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AltConnect=e():t.AltConnect=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=function(t,e,n){for(var o=!0;o;){var r=t,i=e,u=n;a=l=c=void 0,o=!1,null===r&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,i);if(void 0!==a){if("value"in a)return a.value;var c=a.get;return void 0===c?void 0:c.call(u)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;t=l,e=i,n=u,o=!0}};e["default"]=function(){for(var t=arguments.length,e=Array(t),u=0;t>u;u++)e[u]=arguments[u];return function(t){return function(t){function u(t){var o=this;n(this,u),i(Object.getPrototypeOf(u.prototype),"constructor",this).call(this,t),this.state=this.state?this.state:{},this.listeners=[],0!==e.length&&(this.listeners=e.map(function(t){var e=t.displayName;return o.state[e]=t.getState(),t.listen(o._onChange.bind(o,e))}))}return o(u,t),r(u,[{key:"_onChange",value:function(t,e){this.setState({name:e})}},{key:"componentWillUnmount",value:function(){this.listeners.map(function(t){return t()}),i(Object.getPrototypeOf(u.prototype),"componentWillUnmount",this).call(this)}}]),u}(t)}},t.exports=e["default"]}])});
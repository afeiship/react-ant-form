!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("antd"),require("@feizheng/noop"),require("classnames"),require("object-assign"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","antd","@feizheng/noop","classnames","object-assign","react-dom"],t):"object"==typeof exports?exports.ReactAntForm=t(require("prop-types"),require("react"),require("antd"),require("@feizheng/noop"),require("classnames"),require("object-assign"),require("react-dom")):e.ReactAntForm=t(e["prop-types"],e.react,e.antd,e["@feizheng/noop"],e.classnames,e["object-assign"],e["react-dom"])}(window,(function(e,t,r,n,o,a,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n,o,a=r(1),i=r.n(a),u=(r(6),r(0)),c=r.n(u),s=r(4),f=r.n(s),l=r(3),p=r.n(l),m=r(5),b=r.n(m),y=r(2);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=y.Form.create()((o=n=function(e){function t(){var e,r;v(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=j(this,(e=O(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t=r.props,n=t.onSubmit;t.form.validateFields((function(e,t){e||n(t)}))},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLoad,r=e.fieldsValue,n=e.form,o=(n.getFieldDecorator,n.setFields);b()(this,{$form:n}),o(r),t({target:{sender:this,value:this.props}})}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.form.setFields,r=e.fieldsValue;return r&&t(r),!0}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.items,n=e.formLayout,o=e.submitLabel,a=e.submitProps,u=this.props.form.getFieldDecorator;return i.a.createElement(y.Form,{"data-component":"react-ant-form",className:f()("react-ant-form",t),onSubmit:this.handleSubmit},r.map((function(e,t){return i.a.createElement(y.Form.Item,h({className:"react-ant-form-field"},n,{key:t,label:e.label}),u(e.field,{rules:e.rules})(i.a.createElement(e.component,e.props)))})),i.a.createElement(y.Form.Item,h({},n,{className:"react-ant-form-submit",label:o,colon:!1}),i.a.createElement(y.Button,a)))}}])&&g(r.prototype,n),o&&g(r,o),t}(a.Component),n.displayName="react-ant-form",n.version="1.0.1",n.propTypes={className:c.a.string,fieldsValue:c.a.object,items:c.a.array,onSubmit:c.a.func,onLoad:c.a.func,formLayout:c.a.object,submitLabel:c.a.string,submitProps:c.a.object},n.defaultProps={fieldsValue:{},items:[],onSubmit:p.a,onLoad:p.a,formLayout:{labelCol:{span:6},wrapperCol:{span:16}},submitLabel:"&nbsp;",submitProps:{type:"primary",htmlType:"submit",children:"Save"}},o));t.default=x}])}));
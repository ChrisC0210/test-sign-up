(function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test-sign-up/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3bfb":function(e,t,a){"use strict";a("4637")},4637:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("7bb1"),o=a("3aa8"),l=a("cbdf"),i=a("5fff"),s=a("9457"),c=Object(n["e"])('<div id="nav"><section><div class="card text-left"><div class="card-content"><a href="#" class="f-14 text-back">← Back </a><form class="card-form f-14"><div class="f-18">Start from free</div><h1 class="f-30 mb-16">Create an account</h1><div class="d-flex flex-between"><button class="btn"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 8.8V13.2H17.2238C16.3152 15.7608 13.8688 17.6 11 17.6C7.3612 17.6 4.4 14.6388 4.4 11C4.4 7.3612 7.3612 4.4 11 4.4C12.5774 4.4 14.0954 4.9654 15.2746 5.9928L18.1654 2.6752C16.1854 0.9504 13.6422 0 11 0C4.9346 0 0 4.9346 0 11C0 17.0654 4.9346 22 11 22C17.0654 22 22 17.0654 22 11V8.8H11Z"></path></svg><span>Sign up with Google</span></button><button class="btn"><svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66391 3.65291H11.6723V0.154909C11.3258 0.107242 10.1342 -7.62939e-06 8.74633 -7.62939e-06C5.85058 -7.62939e-06 3.86692 1.82141 3.86692 5.16908V8.24999H0.671416V12.1605H3.86692V22H7.78475V12.1614H10.851L11.3377 8.25091H7.78383V5.55683C7.78475 4.42658 8.08908 3.65291 9.66391 3.65291Z"></path></svg><span>Sign up with Facebook</span></button></div><p class="line-text"><span>Or use your email for registration  </span></p><div class="d-flex flex-between"><input class="input-style input-between" type="text" placeholder=" First Name"><input class="input-style input-between" type="text" placeholder=" Last Name"></div><div><input class="input-style" type="email" placeholder=" E-mail"></div><div><input class="input-style" type="password" placeholder=" Password"></div><div class="d-flex mb-12"><input class="input-checkbox" type="checkbox" id="checkbox" name="checkbox" value="custom and accessible"><label for="checkbox">By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</label></div><button class="btn-2 text-center">Create an Free Account!</button><p class="text-center">Already have an account? <a href="#" class="priamry-blue">Log in</a></p></form></div></div></section></div><div class="home"></div>',2);function u(e,t,a,n,r,o){return c}var d={name:"Home",data:function(){return{user:{}}},methods:{onSubmit:function(){console.log(this.user)}},created:function(){console.log(this)}},p=(a("3bfb"),a("6b0d")),v=a.n(p);const b=v()(d,[["render",u]]);var f=b,h=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),g=a("cf05"),m=a.n(g),j={class:"home"},w=Object(n["d"])("img",{alt:"Vue logo",src:m.a},null,-1);function y(e,t,a,r,o,l){var i=Object(n["z"])("HelloWorld");return Object(n["s"])(),Object(n["c"])("div",j,[w,Object(n["f"])(i,{msg:"Welcome to Your Vue.js App"})])}var O={class:"hello"},k=Object(n["e"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function x(e,t,a,r,o,l){return Object(n["s"])(),Object(n["c"])("div",O,[Object(n["d"])("h1",null,Object(n["C"])(a.msg),1),k])}var _={name:"HelloWorld",props:{msg:String}};a("65e4");const C=v()(_,[["render",x],["__scopeId","data-v-5141a303"]]);var H=C,P={name:"Home",components:{HelloWorld:H}};const S=v()(P,[["render",y]]);var V=S,L=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=Object(h["a"])({history:Object(h["b"])(),routes:L}),E=M;Object(r["e"])("required",o["c"]),Object(r["e"])("email",o["a"]),Object(r["e"])("min",o["b"]),Object(r["d"])({generateMessage:Object(l["a"])({en:i,zh_TW:s}),validateOnInput:!0}),Object(l["b"])("en");var F=Object(n["b"])(f).use(E);F.component("Form",r["c"]),F.component("Field",r["b"]),F.component("ErrorMessage",r["a"]),F.mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},cf05:function(e,t,a){e.exports=a.p+"img/logo.png"}});
//# sourceMappingURL=app.js.map
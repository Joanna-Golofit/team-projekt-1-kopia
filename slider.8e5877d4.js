parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
"use strict";(()=>{$(".slides__list").owlCarousel({loop:!0,margin:10,nav:!0,dots:!0,navText:["",""],pagination:!0,items:1});let e=[...document.querySelectorAll(".slides__button_mobile")],t=[...document.querySelectorAll(".slides__button_desktop")],l=[...document.querySelectorAll(".owl-dot")];const o=e=>{let t=e.target,l=t.previousSibling;l.classList.contains("slides__about_active")?t.innerHTML="Read more":t.innerHTML="Collapse",l.classList.toggle("slides__about_active")},s=()=>{let l=document.querySelectorAll(".slides__about"),o=document.querySelectorAll(".slides__about-tablet");e.forEach(e=>{e.innerHTML="Read more"}),t.forEach(e=>{e.innerHTML="Read more"}),l.forEach(e=>{e.classList.remove("slides__about_active")}),o.forEach(e=>{e.classList.remove("slides__about_active")})};e.forEach(e=>{e.addEventListener("click",o)}),t.forEach(e=>{e.addEventListener("click",o)}),l.forEach(e=>{e.addEventListener("click",s)})})();
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/team-projekt-1/slider.8e5877d4.js.map
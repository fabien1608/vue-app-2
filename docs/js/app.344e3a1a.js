(function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],m=0,p=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-app-2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},3643:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l=(n("034f"),n("2877")),i={},s=Object(l["a"])(i,o,a,!1,null,null,null),u=s.exports,c=n("9483");Object(c["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Alarm",{attrs:{msg:"Welcome to Your Alarm"}})],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n("h1",{staticClass:"title"},[e._v("Mes Réveils")]),n("div",{staticClass:"alarm"},[n("ul",[e._l(e.alarms,(function(t){return n("li",[e._v(e._s(t.label)),n("span",[e._v(" "+e._s(e._f("format")(t.date)))]),n("button",{attrs:{id:"symbol"},on:{click:e.toggleAlarm}},[e._v("✎")]),n("button",{on:{click:e.delateAlarm}},[e._v("🗑")])])})),e.show_Alarm?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLabel,expression:"newLabel"}],attrs:{type:"text",placeholder:"Saisir le nom de votre alarme"},domProps:{value:e.newLabel},on:{input:function(t){t.target.composing||(e.newLabel=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newHours,expression:"newHours"}],attrs:{type:"number",placeholder:"Saisir l'heure"},domProps:{value:e.newHours},on:{input:function(t){t.target.composing||(e.newHours=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMinutes,expression:"newMinutes"}],attrs:{type:"number",placeholder:"Saisir la minute"},domProps:{value:e.newMinutes},on:{input:function(t){t.target.composing||(e.newMinutes=t.target.value)}}}),n("button",{on:{click:e.modifAlarm}},[e._v("Save")])]):e._e()],2),n("button",{on:{click:e.toggleNewAlarm}},[e._v("Ajouter une alarme")]),e.show_newAlarm?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLabel,expression:"newLabel"}],attrs:{type:"text",placeholder:"Saisir le nom de votre alarme"},domProps:{value:e.newLabel},on:{input:function(t){t.target.composing||(e.newLabel=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newHours,expression:"newHours"}],attrs:{type:"text",placeholder:"Saisir l'heure"},domProps:{value:e.newHours},on:{input:function(t){t.target.composing||(e.newHours=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMinutes,expression:"newMinutes"}],attrs:{type:"text",placeholder:"Saisir la minute"},domProps:{value:e.newMinutes},on:{input:function(t){t.target.composing||(e.newMinutes=t.target.value)}}}),n("button",{on:{click:e.addAlarm}},[e._v("add")]),n("button",{on:{click:e.toggleNewAlarm}},[e._v("cancel")])]):e._e()]),n("audio",{attrs:{id:"audio1",src:"alarm_sound.mp3",preload:"auto"}})])},w=[],v=(n("c975"),n("a434"),n("d3b7"),n("25f0"),n("53ca")),h={name:"Alarm",data:function(){return{show_Alarm:!1,show_newAlarm:!1,newLabel:"",newHours:"",newMinutes:"",alarms:[{label:"test Alarm",date:"03 13, 08 04:20"}]}},filters:{format:function(e){var t,n=new Date(e);return t=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),n.getHours()+"h"+t}},methods:{addAlarm:function(){var e=this,t=new Date,n=t.getMonth()+" "+t.getDay()+", "+t.getFullYear()+" "+this.newHours+":"+this.newMinutes;this.alarms.push({label:this.newLabel,date:n.toString()}),this.show_newAlarm=!this.show_newAlarm,this.newLabel="",this.newHours=" ",this.newMinutes=" ";var r=t.getTime(),o=new Date(n),a=o.getTime(),l=r-a;console.log(Object(v["a"])(l)),console.log(l);setTimeout((function(){e.playAlarm()}),1e4)},hide_newAlarm:function(){this.show_newAlarm=!1},toggleNewAlarm:function(){this.show_newAlarm=!this.show_newAlarm,this.newLabel="",this.newHours=" ",this.newMinutes=" "},toggleAlarm:function(){this.show_Alarm=!this.show_Alarm},delateAlarm:function(){var e=this.alarms.indexOf(this.alarms.label);this.alarms.splice(e,1)},playAlarm:function(){document.getElementById("audio1").play()},modifAlarm:function(){var e=new Date,t=e.getMonth()+" "+e.getDay()+", "+e.getFullYear()+" "+this.newHours+":"+this.newMinutes;this.alarms=[{label:this.newLabel,date:t}]}}},g=h,b=(n("8e1e"),Object(l["a"])(g,f,w,!1,null,null,null)),_=b.exports,A={name:"AlarmView",components:{Alarm:_}},y=A,M=Object(l["a"])(y,p,d,!1,null,null,null),x=M.exports;r["a"].use(m["a"]);var O=[{path:"/",name:"Alarm",component:x}],j=new m["a"]({routes:O}),k=j;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},"8e1e":function(e,t,n){"use strict";n("3643")}});
//# sourceMappingURL=app.344e3a1a.js.map
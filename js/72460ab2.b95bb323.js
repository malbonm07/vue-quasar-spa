(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["72460ab2"],{5118:function(t,e,a){(function(t){var i="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,n=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(n.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new s(n.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},a("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,a("c8ba"))},"58a0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",[a("div",{staticClass:"row relative bg-overlay q-mb-md",staticStyle:{height:"100vh"}},[a("div",{staticClass:"row flex flex-center absolute",staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"col-sm-5 col-lg-7",staticStyle:{"z-index":"10"}},[a("favoriteAudio")],1)]),t.currentTrackSong?a("q-img",{staticStyle:{filter:"blur(15px)"},attrs:{src:t.currentTrackSong.album.images[1].url,ratio:16/9}}):t._e()],1)]),a("div",{staticClass:"col-12 bg-black"},[a("q-list",{attrs:{bordered:"",dark:""}},t._l(t.favoritesTracks,function(e,i){return a("div",{key:e.id},[a("favoriteTrack",{attrs:{favoriteTrackObject:e,favoriteTrackIndex:i},on:{delete:t.deleteTrack,currentSong:t.currentTrack}})],1)}),0)],1)])},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.favoriteTrackObject?a("q-item",{attrs:{clickable:""},on:{click:t.playTrack}},[a("q-item-section",{staticClass:"col-1"},[a("q-item-label",{staticClass:"text-center"},[t._v(t._s(t._f("indexTrack")(t.favoriteTrackIndex)))])],1),a("q-item-section",{attrs:{avatar:""}},[a("img",{attrs:{src:t.favoriteTrackObject.album.images[1].url,width:"37px"}})]),a("q-item-section",{staticClass:"col-3 col-sm-2 q-ml-md"},[a("q-item-label",{staticClass:"q-mt-xs",attrs:{lines:"1"}},[t._v("\n            "+t._s(t.favoriteTrackObject.album.artists[0].name))]),a("q-item-label",{staticClass:"q-mt-xs",attrs:{lines:"1"}},[a("span",{staticClass:"text-grey-8"},[t._v(t._s(t.favoriteTrackObject.name))])])],1),a("q-item-section"),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[t._v("\n            "+t._s(t._f("milToSec")(t.favoriteTrackObject.duration_ms))+"\n        ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete_outline"},on:{click:t.deleteFavoriteTrack}})],1)],1):t._e()},r=[],o=(a("c5f6"),{props:{favoriteTrackObject:{type:Object,required:!0},favoriteTrackIndex:{type:Number,required:!0}},data:function(){return{}},created:function(){this.playTrack()},methods:{deleteFavoriteTrack:function(){this.$emit("delete",this.favoriteTrackIndex)},playTrack:function(){this.$emit("currentSong",this.favoriteTrackObject),this.$root.$emit("play",this.favoriteTrackObject)}}}),c=o,l=a("2877"),u=Object(l["a"])(c,s,r,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.favoriteTrack&&t.favoriteTrack.album?a("q-card",{staticStyle:{background:"transparent",overflow:"hidden"},attrs:{dark:"",height:"700px"}},[a("div",[a("div",{staticClass:"text-caption text-weight-light text-center text-uppercase q-pt-lg"},[t._v("PLAYLIST")]),a("div",{staticClass:"text-overline text-center text-capitalize"},[t._v("playlist of the song")])]),a("q-card-section",[a("div",{staticClass:"row q-mt-lg"},[a("div",{staticClass:"offset-2 col-8 offset-sm-3 col-sm-6"},[a("img",{attrs:{src:t.favoriteTrack.album.images[1].url,width:"100%"}})])])]),a("q-card-section",[a("div",{staticClass:"text-center text-capitalize text-subtitle2"},[t._v("\n          "+t._s(t.favoriteTrack.name)+"\n      ")]),a("div",{staticClass:"text-center text-capitalize text-caption text-weight-light"},[t._v("\n          "+t._s(t.favoriteTrack.album.artists[0].name)+"\n      ")])]),a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-1 col-10"},[a("div",{staticClass:"progress"},[a("div",{attrs:{id:"linear-progress"}})]),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-weight-light q-pa-xs",staticStyle:{"font-size":"10px"}},[t._v("00:"+t._s(t.songDuration))]),a("span",{staticClass:"text-weight-light q-pa-xs",staticStyle:{"font-size":"10px"},attrs:{id:"restTime"}})])])])]),a("div",{staticClass:"bg-black boxShadow"},[a("q-card-section",[a("div",{staticClass:"row items-center justify-center"},[a("q-btn",{attrs:{color:"transparent q-mr-md",icon:"fast_rewind",round:""}}),a("div",[t.playTrack?a("a",{staticClass:"btn-customize btn-play",attrs:{target:"_blank"},on:{click:t.playSong}},[a("span",{staticClass:"play-btn"},[a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"play_arrow"}})],1)]):a("a",{staticClass:"btn-customize btn-play",attrs:{target:"_blank"},on:{click:t.pauseSong}},[a("span",{staticClass:"play-btn"},[a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"pause"}})],1)])]),a("q-btn",{attrs:{color:"transparent q-ml-md",icon:"fast_forward",round:""}})],1)]),a("q-card-section",[a("div",{staticClass:"row justify-around"},[a("q-btn",{staticClass:"q-ma-xs",attrs:{round:"",outline:"",color:"transparent"}},[a("q-icon",{attrs:{name:"turned_in_not",color:"white",size:"1.1rem"}})],1),a("q-btn",{staticClass:"q-ma-xs",attrs:{round:"",outline:"",color:"transparent"}},[a("q-icon",{attrs:{name:"shuffle",color:"white",size:"1.1rem"}})],1),a("q-btn",{staticClass:"q-ma-xs",attrs:{round:"",outline:"",color:"transparent"}},[a("q-icon",{attrs:{name:"repeat",color:"white",size:"1.1rem"}})],1),a("q-btn",{staticClass:"q-ma-xs",attrs:{round:"",outline:"",color:"transparent"}},[a("q-icon",{attrs:{name:"playlist_add",color:"white",size:"1.1rem"}})],1)],1)]),a("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"tema",attrs:{src:t.favoriteTrack.preview_url,id:"song"}})],1)],1):t._e()},m=[],p=a("5118"),v={data:function(){return{favoriteTrack:{},songDuration:0,playTrack:!0}},created:function(){var t=this;this.$root.$on("play",function(e){if(t.favoriteTrack=e,!1===t.playTrack){t.playTrack=!0;var a=document.getElementById("linear-progress");a.style.width="0%"}})},mounted:function(){var t=this;Object(p["setTimeout"])(function(){t.audio=document.getElementById("song")},500)},methods:{playSong:function(){this.audio.ontimeupdate=function(){var t=document.getElementById("song"),e=document.getElementById("linear-progress");document.getElementById("restTime").innerHTML="00:".concat(t.currentTime.toFixed(0));var a=t.currentTime/t.duration;e.style.width="".concat(100*a,"%")},this.songDuration=this.audio.duration.toFixed(0),this.playTrack=!1,this.audio.play()},pauseSong:function(){this.playTrack=!0,this.audio.pause()}}},h=v,g=Object(l["a"])(h,f,m,!1,null,null,null),T=g.exports,k={components:{favoriteTrack:d,favoriteAudio:T},name:"appAbout",data:function(){return{favoritesTracks:[],favoriteTrackId:"",indexTrack:"",currentTrackSong:null}},created:function(){this.favoritesTracks=JSON.parse(localStorage.getItem("favorites")||"[]")},methods:{deleteTrack:function(t){this.favoritesTracks.splice(t,1),this.indexTrack=t,localStorage.setItem("favorites",JSON.stringify(this.favoritesTracks))},currentTrack:function(t){this.currentTrackSong=t}}},b=k,y=Object(l["a"])(b,i,n,!1,null,null,null);e["default"]=y.exports},6017:function(t,e,a){(function(t,e){(function(t,a){"use strict";if(!t.setImmediate){var i,n=1,s={},r=!1,o=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?m():p()?v():t.MessageChannel?h():o&&"onreadystatechange"in o.createElement("script")?g():T(),c.setImmediate=l,c.clearImmediate=u}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),a=0;a<e.length;a++)e[a]=arguments[a+1];var r={callback:t,args:e};return s[n]=r,i(n),n++}function u(t){delete s[t]}function d(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(a,i);break}}function f(t){if(r)setTimeout(f,0,t);else{var e=s[t];if(e){r=!0;try{d(e)}finally{u(t),r=!1}}}}function m(){i=function(t){e.nextTick(function(){f(t)})}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,a=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=a,e}}function v(){var e="setImmediate$"+Math.random()+"$",a=function(a){a.source===t&&"string"===typeof a.data&&0===a.data.indexOf(e)&&f(+a.data.slice(e.length))};t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),i=function(a){t.postMessage(e+a,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},i=function(e){t.port2.postMessage(e)}}function g(){var t=o.documentElement;i=function(e){var a=o.createElement("script");a.onreadystatechange=function(){f(e),a.onreadystatechange=null,t.removeChild(a),a=null},t.appendChild(a)}}function T(){i=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,a("c8ba"),a("4362"))}}]);
(function(e){function s(s){for(var i,r,o=s[0],a=s[1],u=s[2],h=0,v=[];h<o.length;h++)r=o[h],c[r]&&v.push(c[r][0]),c[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(s);while(v.length)v.shift()();return n.push.apply(n,u||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],i=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(i=!1)}i&&(n.splice(s--,1),e=r(r.s=t[0]))}return e}var i={},c={app:0},n=[];function r(s){if(i[s])return i[s].exports;var t=i[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)r.d(t,i,function(s){return e[s]}.bind(null,i));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var l=a;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0c73":function(e,s,t){"use strict";var i=t("12fb"),c=t.n(i);c.a},"12fb":function(e,s,t){},"21bb":function(e,s,t){"use strict";var i=t("bcc9"),c=t.n(i);c.a},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var i=t("2b0e"),c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],r=(t("5c0b"),t("2877")),o={},a=Object(r["a"])(o,c,n,!1,null,null,null),u=a.exports,l=t("8c4f"),h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"box"},[t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.view,expression:"view === 1"}],staticClass:"view"},[t("h3",[e._v("我给你送来了一份大礼")]),t("button",{staticClass:"no",on:{click:function(s){e.no1="别开玩笑了"}}},[e._v(e._s(e.no1))]),t("button",{staticClass:"yes",on:{click:function(s){e.view=2}}},[e._v("我要")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.view,expression:"view === 2"}],staticClass:"view"},[t("h3",[e._v("嘿嘿~我就知道你很想要")]),t("p",[e._v("不过~你必须先完成后面的任务才行哦")]),t("button",{staticClass:"no",on:{click:function(s){e.no2="别开玩笑了"}}},[e._v(e._s(e.no2))]),t("button",{staticClass:"yes",on:{click:function(s){e.view=3}}},[e._v("我接受")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:3===e.view,expression:"view === 3"}],staticClass:"view"},[t("h3",[e._v("首先~说一句夸奖我的话")]),t("br"),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){return s.preventDefault(),e.select1(s)}}}),e._v("无聊\n    "),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){return s.preventDefault(),e.select2(s)}}}),e._v("打屎你\n    "),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){e.isSelected=!0}}}),e._v("你真帅\n    "),t("br"),t("br"),t("button",{staticClass:"no",on:{click:function(s){e.no3="别开玩笑了"}}},[e._v(e._s(e.no3))]),t("button",{staticClass:"yes",on:{click:e.btn4}},[e._v("我是认真的")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:4===e.view,expression:"view === 4"}],staticClass:"view"},[t("h3",[e._v("果然还是有雪亮的眼睛的")]),t("p",[e._v("接下来，请寻找你的礼物吧，它可能存在于任何一个角落")]),t("button",{staticClass:"no",on:{click:function(s){e.no4="别开玩笑了"}}},[e._v(e._s(e.no4))]),t("button",{staticClass:"yes",on:{click:e.start}},[e._v("请开始吧")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:5===e.view,expression:"view === 5"}],staticClass:"view"},[t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.gift,expression:"gift === 1"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.gift,expression:"gift === 2"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:3===e.gift,expression:"gift === 3"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:4===e.gift,expression:"gift === 4"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:5===e.gift,expression:"gift === 5"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:6===e.gift,expression:"gift === 6"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:7===e.gift,expression:"gift === 7"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:8===e.gift,expression:"gift === 8"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:9===e.gift,expression:"gift === 9"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{staticClass:"gift",on:{click:e.right}},[t("div",{staticClass:"rel-heart hide"})]),e.isFind?t("p",[e._v(e._s(e.msg))]):e._e()])])},v=[],d={name:"home",data:function(){return{view:1,no1:"我不要",no2:"拒绝",no3:"不玩了",no4:"不玩了",isSelected:!1,gift:0,timer:null,isFind:!1,msg:""}},methods:{select1:function(){alert("不许骂我~~")},select2:function(){alert("不许打我~~")},btn4:function(){this.isSelected?this.view=4:alert("哼哼！休想糊弄我，必须夸我")},start:function(){var e=this;this.view=5,this.timer=setInterval(function(){e.gift++,9===e.gift&&(e.gift=1)},300)},selectWrong:function(){var e=this;this.msg="错了，笨蛋",this.isFind=!0,setTimeout(function(){e.msg="",e.isFind=!1},1e3)},right:function(){document.querySelector(".rel-heart").classList.remove("hide"),this.gift=0,this.isFind=!0,this.msg="总算找到了，真笨",clearInterval(this.timer)}}},m=d,f=(t("21bb"),Object(r["a"])(m,h,v,!1,null,null,null)),p=f.exports,w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sudoku"},e._l(e.nums,function(s,i){return t("div",{key:i,staticClass:"num-box"},[t("div",{staticClass:"num",on:{click:function(t){return e.click(s.num,i)}}},[e._v(e._s(s.num))])])}),0)},g=[],b=t("5118"),k={data:function(){return{nums:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9}],curIndex:0,clickStatus:!1,timer:null}},methods:{click:function(e,s){var t=this;if(this.clickStatus){switch(this.curIndex){case 0:case 3:case 6:if(s-this.curIndex!=1&&3!=Math.abs(s-this.curIndex))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break;case 1:case 4:case 7:if(1!=Math.abs(this.curIndex-s)&&3!=Math.abs(this.curIndex-s))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break;case 2:case 5:case 8:if(s-this.curIndex!=-1&&3!=Math.abs(s-this.curIndex))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break}var i=this.nums[this.curIndex].num;this.nums[this.curIndex].num=e,this.nums[s].num=i,this.clickStatus=!1,document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.add("selected"),Object(b["setTimeout"])(function(){document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.remove("selected"),document.querySelector(".num-box:nth-child(".concat(t.curIndex+1,")")).classList.remove("selected"),t.check()},100)}else this.clickStatus=!0,this.curIndex=s,document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.add("selected")},check:function(){if(this.nums[0].num+this.nums[1].num+this.nums[2].num===15&&this.nums[3].num+this.nums[4].num+this.nums[5].num===15&&this.nums[6].num+this.nums[7].num+this.nums[8].num===15&&this.nums[0].num+this.nums[3].num+this.nums[6].num===15&&this.nums[1].num+this.nums[4].num+this.nums[7].num===15&&this.nums[2].num+this.nums[5].num+this.nums[8].num===15&&this.nums[0].num+this.nums[4].num+this.nums[8].num===15&&this.nums[2].num+this.nums[4].num+this.nums[6].num===15)for(var e=0;e<document.querySelectorAll(".num-box").length;e++)document.querySelectorAll(".num-box")[e].classList.add("selected")}}},x=k,_=(t("7a72"),Object(r["a"])(x,w,g,!1,null,null,null)),C=_.exports,y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("ul",e._l(85,function(s){return t("li",{key:s,on:{click:function(t){return e.addWall(s)}}},[t("span",{staticClass:"hex"},[t("span",{class:["hexIn",e.walls.indexOf(s)>=0?"wall":"",s===e.target?"target":""]})])])}),0)])},S=[],O={data:function(){return{walls:[],target:39,verge:[],subVerge:[]}},methods:{getRandomNum:function(e,s){var t=s-e,i=Math.random(),c=e+Math.round(i*t);return c},initWalls:function(){var e=this.getRandomNum(3,7);this.walls=[],this.verge=[];for(var s=[],t=1,i=85;t<=i;t++)s.push(t);for(t=0;t<i;t++){var c=s[t];(c%17===0||(c-10)%17===0||(c-9)%17===0||(c-1)%17===0||c<10||c>77)&&this.verge.push(c)}for(t=0;t<e;t++){var n=this.getRandomNum(11,76),r=s.indexOf(n);while(r<0&&n===this.target)n=this.getRandomNum(11,76),r=s.indexOf(n);if(this.walls.push(n),s.splice(r,1),s.length<1)break}},addWall:function(e){var s=this;this.walls.indexOf(e)>=0||e===this.target||(this.walls.push(e),setTimeout(function(){s.target=s.getNextPosition(e),0===s.target&&(alert("挑战成功"),s.target=39,s.initWalls()),s.verge.indexOf(s.target)>=0&&(alert("挑战失败"),s.target=39,s.initWalls())},200))},getNextPosition:function(e){this.walls.indexOf(e)<0&&this.walls.push(e);var s=this.target,t=0,i=[{position:s-9,score:100,isvalid:!0},{position:s-8,score:100,isvalid:!0},{position:s-1,score:100,isvalid:!0},{position:s+1,score:100,isvalid:!0},{position:s+8,score:100,isvalid:!0},{position:s+9,score:100,isvalid:!0}];switch(e){case s-18:i[0].score=101,i[1].score=102,i[2].score=102,i[3].score=103,i[4].score=103,i[5].score=104;break;case s-17:i[0].score=101,i[1].score=101,i[2].score=102,i[3].score=102,i[4].score=104,i[5].score=104;break;case s-16:i[0].score=102,i[1].score=101,i[2].score=103,i[3].score=102,i[4].score=104,i[5].score=103;break;case s-10:i[0].score=102,i[1].score=103,i[2].score=102,i[3].score=104,i[4].score=103,i[5].score=104;break;case s-9:i[0].isvalid=!1,i[0].score=0,i[1].score=103,i[2].score=103,i[3].score=103,i[4].score=103,i[5].score=104;break;case s-8:i[0].score=101,i[1].isvalid=!1,i[1].score=103,i[2].score=103,i[3].score=103,i[4].score=104,i[5].score=103;break;case s-7:i[0].score=103,i[1].score=102,i[2].score=104,i[3].score=102,i[4].score=104,i[5].score=103;break;case s-2:i[0].score=102,i[1].score=103,i[2].score=101,i[3].score=104,i[4].score=102,i[5].score=103;break;case s-1:i[0].score=103,i[1].score=103,i[2].isvalid=!1,i[2].score=0,i[3].score=104,i[4].score=103,i[5].score=103;break;case s+1:i[0].score=103,i[1].score=103,i[2].score=104,i[3].isvalid=!1,i[3].score=0,i[4].score=103,i[5].score=103;break;case s+2:i[0].score=103,i[1].score=102,i[2].score=104,i[3].score=101,i[4].score=103,i[5].score=102;break;case s+7:i[0].score=103,i[1].score=104,i[2].score=102,i[3].score=104,i[4].score=102,i[5].score=103;break;case s+8:i[0].score=103,i[1].score=104,i[2].score=105,i[3].score=103,i[4].isvalid=!1,i[4].score=0,i[5].score=103;break;case s+9:i[0].score=104,i[1].score=103,i[2].score=103,i[3].score=103,i[4].score=103,i[5].isvalid=!1,i[5].score=0;break;case s+10:i[0].score=104,i[1].score=103,i[2].score=104,i[3].score=102,i[4].score=103,i[5].score=102;break;case s+16:i[0].score=103,i[1].score=104,i[2].score=102,i[3].score=103,i[4].score=101,i[5].score=102;break;case s+17:i[0].score=104,i[1].score=104,i[2].score=102,i[3].score=102,i[4].score=101,i[5].score=101;break;case s+18:i[0].score=104,i[1].score=103,i[2].score=103,i[3].score=102,i[4].score=102,i[5].score=101;break;default:break}for(var c=0,n=i;c<n.length;c++){var r=n[c];this.walls.indexOf(r.position)>=0&&(r.score=0,r.isvalid=!1),r.isvalid&&r.score>t&&(s=r.position,t=r.score)}if(t>0)return s}},mounted:function(){this.initWalls()}},N=O,I=(t("0c73"),Object(r["a"])(N,y,S,!1,null,"7c78c1e2",null)),W=I.exports;i["a"].use(l["a"]);var j=new l["a"]({routes:[{path:"/",name:"home",component:p},{path:"/sudoku",name:"sudoku",component:C},{path:"/loop",name:"Loop",component:W}]});i["a"].config.productionTip=!1,new i["a"]({router:j,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var i=t("5e27"),c=t.n(i);c.a},"5e27":function(e,s,t){},"7a72":function(e,s,t){"use strict";var i=t("ca7b"),c=t.n(i);c.a},bcc9:function(e,s,t){},ca7b:function(e,s,t){}});
//# sourceMappingURL=app.ff515716.js.map
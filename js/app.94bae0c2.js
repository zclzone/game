(function(e){function s(s){for(var o,c,r=s[0],a=s[1],l=s[2],h=0,d=[];h<r.length;h++)c=r[h],i[c]&&d.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(s);while(d.length)d.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],o=!0,r=1;r<t.length;r++){var a=t[r];0!==i[a]&&(o=!1)}o&&(n.splice(s--,1),e=c(c.s=t[0]))}return e}var o={},i={app:0},n=[];function c(s){if(o[s])return o[s].exports;var t=o[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)c.d(t,o,function(s){return e[s]}.bind(null,o));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=a;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0bf2":function(e,s,t){},"21bb":function(e,s,t){"use strict";var o=t("bcc9"),i=t.n(o);i.a},"3de4":function(e,s,t){"use strict";var o=t("79b0"),i=t.n(o);i.a},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],c=(t("5c0b"),t("2877")),r={},a=Object(c["a"])(r,i,n,!1,null,null,null),l=a.exports,u=t("8c4f"),h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"box"},[t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.view,expression:"view === 1"}],staticClass:"view"},[t("h3",[e._v("我给你送来了一份大礼")]),t("button",{staticClass:"no",on:{click:function(s){e.no1="别开玩笑了"}}},[e._v(e._s(e.no1))]),t("button",{staticClass:"yes",on:{click:function(s){e.view=2}}},[e._v("我要")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.view,expression:"view === 2"}],staticClass:"view"},[t("h3",[e._v("嘿嘿~我就知道你很想要")]),t("p",[e._v("不过~你必须先完成后面的任务才行哦")]),t("button",{staticClass:"no",on:{click:function(s){e.no2="别开玩笑了"}}},[e._v(e._s(e.no2))]),t("button",{staticClass:"yes",on:{click:function(s){e.view=3}}},[e._v("我接受")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:3===e.view,expression:"view === 3"}],staticClass:"view"},[t("h3",[e._v("首先~说一句夸奖我的话")]),t("br"),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){return s.preventDefault(),e.select1(s)}}}),e._v("无聊\n    "),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){return s.preventDefault(),e.select2(s)}}}),e._v("打屎你\n    "),t("input",{attrs:{type:"radio",name:"word"},on:{click:function(s){e.isSelected=!0}}}),e._v("你真帅\n    "),t("br"),t("br"),t("button",{staticClass:"no",on:{click:function(s){e.no3="别开玩笑了"}}},[e._v(e._s(e.no3))]),t("button",{staticClass:"yes",on:{click:e.btn4}},[e._v("我是认真的")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:4===e.view,expression:"view === 4"}],staticClass:"view"},[t("h3",[e._v("果然还是有雪亮的眼睛的")]),t("p",[e._v("接下来，请寻找你的礼物吧，它可能存在于任何一个角落")]),t("button",{staticClass:"no",on:{click:function(s){e.no4="别开玩笑了"}}},[e._v(e._s(e.no4))]),t("button",{staticClass:"yes",on:{click:e.start}},[e._v("请开始吧")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:5===e.view,expression:"view === 5"}],staticClass:"view"},[t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.gift,expression:"gift === 1"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.gift,expression:"gift === 2"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:3===e.gift,expression:"gift === 3"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:4===e.gift,expression:"gift === 4"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:5===e.gift,expression:"gift === 5"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:6===e.gift,expression:"gift === 6"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:7===e.gift,expression:"gift === 7"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:8===e.gift,expression:"gift === 8"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:9===e.gift,expression:"gift === 9"}],staticClass:"gift",on:{click:e.selectWrong}},[t("div",{staticClass:"heart"})]),t("div",{staticClass:"gift",on:{click:e.right}},[t("div",{staticClass:"rel-heart hide"})]),e.isFind?t("p",[e._v(e._s(e.msg))]):e._e()])])},d=[],f={name:"home",data:function(){return{view:1,no1:"我不要",no2:"拒绝",no3:"不玩了",no4:"不玩了",isSelected:!1,gift:0,timer:null,isFind:!1,msg:""}},methods:{select1:function(){alert("不许骂我~~")},select2:function(){alert("不许打我~~")},btn4:function(){this.isSelected?this.view=4:alert("哼哼！休想糊弄我，必须夸我")},start:function(){var e=this;this.view=5,this.timer=setInterval(function(){e.gift++,9===e.gift&&(e.gift=1)},300)},selectWrong:function(){var e=this;this.msg="错了，笨蛋",this.isFind=!0,setTimeout(function(){e.msg="",e.isFind=!1},1e3)},right:function(){document.querySelector(".rel-heart").classList.remove("hide"),this.gift=0,this.isFind=!0,this.msg="总算找到了，真笨",clearInterval(this.timer)}}},v=f,m=(t("21bb"),Object(c["a"])(v,h,d,!1,null,null,null)),g=m.exports,b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sudoku"},e._l(e.nums,function(s,o){return t("div",{key:o,staticClass:"num-box"},[t("div",{staticClass:"num",on:{click:function(t){return e.click(s.num,o)}}},[e._v(e._s(s.num))])])}),0)},p=[],k=t("5118"),w={data:function(){return{nums:[{num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9}],curIndex:0,clickStatus:!1,timer:null}},methods:{click:function(e,s){var t=this;if(this.clickStatus){switch(this.curIndex){case 0:case 3:case 6:if(s-this.curIndex!=1&&3!=Math.abs(s-this.curIndex))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break;case 1:case 4:case 7:if(1!=Math.abs(this.curIndex-s)&&3!=Math.abs(this.curIndex-s))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break;case 2:case 5:case 8:if(s-this.curIndex!=-1&&3!=Math.abs(s-this.curIndex))return this.clickStatus=!1,void document.querySelector(".num-box:nth-child(".concat(this.curIndex+1,")")).classList.remove("selected");break}var o=this.nums[this.curIndex].num;this.nums[this.curIndex].num=e,this.nums[s].num=o,this.clickStatus=!1,document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.add("selected"),Object(k["setTimeout"])(function(){document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.remove("selected"),document.querySelector(".num-box:nth-child(".concat(t.curIndex+1,")")).classList.remove("selected"),t.check()},100)}else this.clickStatus=!0,this.curIndex=s,document.querySelector(".num-box:nth-child(".concat(s+1,")")).classList.add("selected")},check:function(){if(this.nums[0].num+this.nums[1].num+this.nums[2].num===15&&this.nums[3].num+this.nums[4].num+this.nums[5].num===15&&this.nums[6].num+this.nums[7].num+this.nums[8].num===15&&this.nums[0].num+this.nums[3].num+this.nums[6].num===15&&this.nums[1].num+this.nums[4].num+this.nums[7].num===15&&this.nums[2].num+this.nums[5].num+this.nums[8].num===15&&this.nums[0].num+this.nums[4].num+this.nums[8].num===15&&this.nums[2].num+this.nums[4].num+this.nums[6].num===15)for(var e=0;e<document.querySelectorAll(".num-box").length;e++)document.querySelectorAll(".num-box")[e].classList.add("selected")}}},x=w,y=(t("7a72"),Object(c["a"])(x,b,p,!1,null,null,null)),C=y.exports,_=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("ul",e._l(85,function(s){return t("li",{key:s,on:{click:function(t){return e.addWall(s)}}},[t("span",{staticClass:"hex"},[t("span",{class:["hexIn",e.walls.indexOf(s)>=0?"wall":"",s===e.target?"target":""]})])])}),0)])},S=[],O=(t("ac4d"),t("8a81"),t("ac6a"),{data:function(){return{walls:[],target:0,verge:[],subVerge:[]}},methods:{getRandomNum:function(e,s){var t=s-e,o=Math.random(),i=e+Math.round(o*t);return i},initWalls:function(){var e=this.getRandomNum(3,7);this.target=39,this.walls=[],this.verge=[];for(var s=[],t=1,o=85;t<=o;t++)s.push(t);for(t=0;t<o;t++){var i=s[t];(i%17===0||(i-10)%17===0||(i-9)%17===0||(i-1)%17===0||i<10||i>77)&&this.verge.push(i)}for(t=0;t<e;t++){var n=this.getRandomNum(11,76),c=s.indexOf(n);while(c<0||n===this.target)n=this.getRandomNum(11,76),c=s.indexOf(n);if(this.walls.push(n),s.splice(c,1),s.length<1)break}},addWall:function(e){var s=this;this.walls.indexOf(e)>=0||e===this.target||(this.walls.push(e),setTimeout(function(){s.target=s.getNextPosition(e),0===s.target&&(alert("挑战成功"),s.initWalls()),s.verge.indexOf(s.target)>=0&&(alert("挑战失败"),s.initWalls())},200))},getNextPosition:function(e){this.walls.indexOf(e)<0&&this.walls.push(e);for(var s,t,o,i,n,c,r,a,l=this.target,u=[{position:l-9,score:100,isvalid:!0},{position:l-8,score:100,isvalid:!0},{position:l-1,score:100,isvalid:!0},{position:l+1,score:100,isvalid:!0},{position:l+8,score:100,isvalid:!0},{position:l+9,score:100,isvalid:!0}],h=0,d=u;h<d.length;h++){var f=d[h];if(this.verge.indexOf(f.position)>=0&&this.walls.indexOf(f.position)<0)return f.position}switch(e){case l-18:u[0].score=101,u[1].score=104,u[2].score=103,u[3].score=103,u[4].score=104,u[5].score=102;break;case l-17:u[0].score=101,u[1].score=101,u[2].score=104,u[3].score=104,u[4].score=103,u[5].score=103;break;case l-16:u[0].score=104,u[1].score=101,u[2].score=103,u[3].score=104,u[4].score=102,u[5].score=103;break;case l-10:u[0].score=101,u[1].score=104,u[2].score=101,u[3].score=102,u[4].score=104,u[5].score=102;break;case l-9:u[0].isvalid=!1,u[0].score=0,u[1].score=104,u[2].score=104,u[3].score=103,u[4].score=103,u[5].score=102;break;case l-8:u[0].score=104,u[1].isvalid=!1,u[1].score=0,u[2].score=103,u[3].score=104,u[4].score=102,u[5].score=103;break;case l-7:u[0].score=104,u[1].score=101,u[2].score=103,u[3].score=101,u[4].score=102,u[5].score=103;break;case l-2:u[0].score=104,u[1].score=103,u[2].score=101,u[3].score=101,u[4].score=104,u[5].score=103;break;case l-1:u[0].score=104,u[1].score=103,u[2].isvalid=!1,u[2].score=0,u[3].score=102,u[4].score=104,u[5].score=103;break;case l+1:u[0].score=103,u[1].score=104,u[2].score=102,u[3].isvalid=!1,u[3].score=0,u[4].score=103,u[5].score=104;break;case l+2:u[0].score=103,u[1].score=104,u[2].score=101,u[3].score=101,u[4].score=103,u[5].score=104;break;case l+7:u[0].score=104,u[1].score=102,u[2].score=101,u[3].score=103,u[4].score=101,u[5].score=104;break;case l+8:u[0].score=103,u[1].score=102,u[2].score=104,u[3].score=103,u[4].isvalid=!1,u[4].score=0,u[5].score=104;break;case l+9:u[0].score=102,u[1].score=103,u[2].score=103,u[3].score=104,u[4].score=104,u[5].isvalid=!1,u[5].score=0;break;case l+10:u[0].score=102,u[1].score=104,u[2].score=102,u[3].score=101,u[4].score=104,u[5].score=101;break;case l+16:u[0].score=103,u[1].score=102,u[2].score=104,u[3].score=103,u[4].score=101,u[5].score=104;break;case l+17:u[0].score=102,u[1].score=102,u[2].score=104,u[3].score=104,u[4].score=101,u[5].score=101;break;case l+18:u[0].score=102,u[1].score=103,u[2].score=103,u[3].score=104,u[4].score=104,u[5].score=101;break;default:u[0].score=100,u[1].score=100,u[2].score=100,u[3].score=100,u[4].score=100,u[5].score=100;break}s=[l-18,l-17,l-10,l-9,l-2,l-1],t=[l-17,l-16,l-8,l-7,l+1,l+2],o=[l-2,l-1,l+7,l+8,l+16,l+17],i=[l+1,l+2,l+9,l+10,l+17,l+18],n=[l-18,l-17,l-16,l-10,l-9,l-8,l-7,l-2,l-1,l+1,l+2],c=[l-2,l-1,l+1,l+2,l+7,l+8,l+9,l+10,l+16,l+17,l+18],r=[l-18,l-17,l-10,l-9,l-2,l-1,l+7,l+8,l+16,l+17],a=[l-17,l-16,l-8,l-7,l+1,l+2,l+9,l+10,l+17,l+18];var v=this.getWallCount(s),m=this.getWallCount(t),g=this.getWallCount(o),b=this.getWallCount(i),p=this.getWallCount(n),k=this.getWallCount(c),w=this.getWallCount(r),x=this.getWallCount(a),y=0;switch(y=v>=m?v:m,y=y>=g?y:g,y=y>=b?y:b,y){case v:u[0].score-=1,u[1].score-=1,u[2].score-=1;break;case m:u[0].score-=1,u[1].score-=1,u[3].score-=1;break;case g:u[2].score-=1,u[4].score-=1,u[5].score-=1;break;case b:u[3].score-=1,u[4].score-=1,u[5].score-=1;break;default:break}var C=0;switch(C=v<m?v:m,C=C<g?y:g,C=C<b?y:b,C){case v:u[0].score+=1,u[1].score+=1,u[2].score+=1;break;case m:u[0].score+=1,u[1].score+=1,u[3].score+=1;break;case g:u[2].score+=1,u[4].score+=1,u[5].score+=1;break;case b:u[3].score+=1,u[4].score+=1,u[5].score+=1;break;default:break}p>k?(u[4].score+=1,u[5].score+=1):p<k&&(u[0].score+=1,u[1].score+=1),w>x?(u[1].score+=1,u[3].score+=1,u[5].score+=1):w<x&&(u[0].score+=1,u[2].score+=1,u[4].score+=1);for(var _=0,S=0,O=u;S<O.length;S++){var W=O[S];this.walls.indexOf(W.position)>=0&&(W.score=0,W.isvalid=!1),W.isvalid&&W.score>_&&(l=W.position,_=W.score)}return _>0?l:0},getPlanPositions:function(e){return[e-9,e-8,e-1,e+1,e+8,e+9]},getWallCount:function(e){var s=0,t=!0,o=!1,i=void 0;try{for(var n,c=e[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){var r=n.value;this.walls.indexOf(r)>=0&&s++}}catch(a){o=!0,i=a}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return s}},mounted:function(){this.initWalls()}}),W=O,I=(t("3de4"),Object(c["a"])(W,_,S,!1,null,"30301fe8",null)),N=I.exports,M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"game"},[t("div",{staticClass:"map"},[t("div",{staticClass:"food",style:"\n          width:"+e.food.width+"px;\n          height:"+e.food.height+"px;\n          background:"+e.food.color+";\n          position:absolute;\n          left:"+e.food.x*e.food.width+"px;\n          top:"+e.food.y*e.food.height+"px;"}),e._l(e.snake.body,function(s,o){return t("div",{key:o,staticClass:"snake",style:"\n          width:"+e.snake.width+"px;\n          height:"+e.snake.height+"px;\n          background:"+s.color+";\n          position:absolute;\n          left:"+s.x*e.snake.width+"px;\n          top:"+s.y*e.snake.height+"px;"})}),t("div",{staticClass:"msg"},[e._v(e._s(e.msg))])],2),t("div",{staticClass:"player"},[t("div",{staticClass:"info"},[e.isStart?t("span",[e._v(e._s(e.player))]):t("button",{staticClass:"start",on:{click:e.gameStart}},[e._v("开始游戏\n      ")])]),t("div",{staticClass:"control"},[t("button",{staticClass:"top",on:{click:e.goTop}},[e._v("↑")]),t("button",{staticClass:"bottom",on:{click:e.goBottom}},[e._v("↓")]),t("button",{staticClass:"left",on:{click:e.goLeft}},[e._v("←")]),t("button",{staticClass:"right",on:{click:e.goRight}},[e._v("→")])]),t("div",{staticClass:"score"},[t("span",[e._v(e._s(e.score)+"分")])])])])},L=[],j={getRandom:function(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1)+e)}},q=j,R={data:function(){return{foodDiv:null,map:null,player:"",isStart:!1,gmTimer:null,score:0,msg:"",food:{color:"",width:20,height:20,x:0,y:0},snake:{width:20,height:20,direction:"",body:[]}}},methods:{gameStart:function(){var e=this;this.isStart||(this.player||(this.player=prompt("大侠，请问尊姓大名：")),this.player&&(this.map.classList.remove("fail"),this.isStart=!0,this.score=0,this.snake.direction="right",this.snake.body=[{x:3,y:2,color:"red"},{x:2,y:2,color:"blue"},{x:1,y:2,color:"blue"}],this.randomFood(),this.gmTimer=setInterval(function(){e.snakeMove(),e.snake.body[0].x==e.food.x&&e.snake.body[0].y==e.food.y&&e.getFood(e.food),-1!=e.snake.body[0].x&&e.snake.body[0].x!=e.map.offsetWidth/e.snake.width&&-1!=e.snake.body[0].y&&e.snake.body[0].y!=e.map.offsetHeight/e.snake.height||(e.gameOver(),e.msg="Game Over!!"),e.score>=52&&(e.score=52,e.gameOver(),e.msg="支付宝红包口令：我是大笨蛋qepwq")},300)))},randomFood:function(){this.food.x=q.getRandom(0,this.map.offsetWidth/this.food.width-1),this.food.y=q.getRandom(0,this.map.offsetHeight/this.food.height-1);var e=q.getRandom(0,255),s=q.getRandom(0,255),t=q.getRandom(0,255);this.food.color="rgb(".concat(e,",").concat(s,",").concat(t,")")},snakeMove:function(){for(var e=this.snake.body.length-1;e>0;e--)this.snake.body[e].x=this.snake.body[e-1].x,this.snake.body[e].y=this.snake.body[e-1].y;switch(this.snake.direction){case"right":this.snake.body[0].x+=1;break;case"left":this.snake.body[0].x-=1;break;case"top":this.snake.body[0].y-=1;break;case"bottom":this.snake.body[0].y+=1;break}},getFood:function(e){this.snake.body.push({x:e.x,y:e.y,color:e.color}),this.score+=1,this.score>=10&&(this.score+=1),this.score>=30&&(this.score+=2),this.randomFood()},gameOver:function(){this.snake.body.splice(0,1),clearInterval(this.gmTimer),this.map.classList.add("fail"),this.isStart=!1},goLeft:function(){"right"!=this.snake.direction&&(this.snake.direction="left")},goTop:function(){"bottom"!=this.snake.direction&&(this.snake.direction="top")},goRight:function(){"left"!=this.snake.direction&&(this.snake.direction="right")},goBottom:function(){"top"!=this.snake.direction&&(this.snake.direction="bottom")}},mounted:function(){var e=this;this.map=document.querySelector(".map"),this.foodDiv=document.querySelector(".food"),window.onkeydown=function(s){switch(s.keyCode){case 37:e.goLeft();break;case 38:e.goTop();break;case 39:e.goRight();break;case 40:e.goBottom();break}}}},T=R,F=(t("af2f"),Object(c["a"])(T,M,L,!1,null,"5ff434f3",null)),P=F.exports;o["a"].use(u["a"]);var $=new u["a"]({routes:[{path:"/",name:"home",component:g},{path:"/sudoku",name:"sudoku",component:C},{path:"/loop",name:"Loop",component:N},{path:"/snake",name:"Snake",component:P}]});o["a"].config.productionTip=!1,new o["a"]({router:$,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var o=t("5e27"),i=t.n(o);i.a},"5e27":function(e,s,t){},"79b0":function(e,s,t){},"7a72":function(e,s,t){"use strict";var o=t("ca7b"),i=t.n(o);i.a},af2f:function(e,s,t){"use strict";var o=t("0bf2"),i=t.n(o);i.a},bcc9:function(e,s,t){},ca7b:function(e,s,t){}});
//# sourceMappingURL=app.94bae0c2.js.map
webpackJsonp([41],{105:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var s=n(0),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=Object(s.g)(),c=Object(s.i)(window.lemmaInfo.ambiSearchWord),u=window.lemmaInfo.lemmaId,p=r.showAmbi,m=!1,d=0,w=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={polysemantLists:[],polyInfo:"",isShow:!1,isExpand:!1,isFixed:!1},e.isSynopsisWrap=$(".synopsis-wrap").length>0,e.jumpTo=e.jumpTo.bind(e),e.moreMulti=e.moreMulti.bind(e),e.pickUp=e.pickUp.bind(e),e.commonMulti=e.commonMulti.bind(e),e}return a(t,e),l(t,[{key:"jumpTo",value:function(e){if(u==e)return!1;window.stget&&stget("newwap.qtyx.dj"),setTimeout(function(){window.location.href="/m/fullLemma?lid="+e+"&g_ut=3&fromTitle="+window.encodeURIComponent(c)},300)}},{key:"moreMulti",value:function(){var e=this,t=e.state.isExpand;t?window.stget&&stget("newwap.gdup.dj"):(e.isSynopsisWrap||window.stget&&stget("newwap.dyxdown.dj"),window.stget&&stget("newwap.gdyx.dj"),window.stget&&stget("newwap.yx.zx")),e.setState({isExpand:!t}),t||d||e.commonMulti()}},{key:"pickUp",value:function(){window.stget&&stget("newwap.sqyx.dj"),this.setState({isExpand:!1}),setTimeout(function(){$("#polysemantModule").offset().top<$(window).scrollTop()-50&&(document.documentElement.scrollTop=document.body.scrollTop=$("#polysemantModule").offset().top-50)},10)}},{key:"commonMulti",value:function(){var e=this;$("#mod-multi-wrap").css("display","block");var t=$("#mod-multi-wrap");d=t.offset().top+t.height(),$("#mod-multi-wrap li").height()*$("#mod-multi-wrap li").length>2*$(window).height()&&(m=!0,e.setState({isFixed:!0})),m&&($(document).on("touchmove",function(e){$(window).height()+$(window).scrollTop()>=d?$(".multi-list-wrap .hide").removeClass("fixed"):$(".multi-list-wrap .hide").addClass("fixed")}),$(window).on("scroll",function(){$(window).height()+$(window).scrollTop()>=d?$(".multi-list-wrap .hide").removeClass("fixed"):$(".multi-list-wrap .hide").addClass("fixed")}))}},{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"/bapi/getAmbiList",type:"get",dataType:"json",data:{title:encodeURIComponent(c)},success:function(t){if(t&&t.data&&t.data.length){var n={},o=t.data;!e.isSynopsisWrap&&o.length>0&&window.stget&&stget("newwap.dyx.zx");for(var i=0,a=o.length;i<a;i++)if(o[i].lemmaId==u){n.polyInfo=o[i].ambi,n.isShow=!0;var s=o.splice(i,1);s[0].cur=!0,o.unshift(s[0]),window.stget&&stget("newwap.gdyx.zx");break}n.polysemantLists=o,"true"!=p&&"1"!=p&&"2"!=p&&"3"!=p&&"wx"!=p&&"qq"!=p||(n.isExpand=!0,window.stget&&stget("newwap.yx.zx"),setTimeout(function(){$(window).scrollTop($(".abstract-img-title").offset().top-45)},10),d||setTimeout(function(){e.commonMulti()},300)),e.setState(n)}}})}},{key:"render",value:function(){var e=this,t=e.state,n=t.isExpand,o=t.isShow,i=t.polysemantLists,a=t.polyInfo,s=t.isFixed;return React.createElement("div",{className:n?"info-multi info-open":"info-multi"},React.createElement("p",{style:{display:o?"block":"none"}},React.createElement("span",{className:"multi-name"},a),React.createElement("a",{href:"javascript:;",onClick:e.moreMulti,className:"multi-open"},"共",React.createElement("span",null,i.length),"个含义")),React.createElement("div",{className:"multi-list-wrap",style:{display:n?"block":"none"},id:"mod-multi-wrap"},React.createElement("ul",{className:"multi-list"},i.map(function(t,n){return React.createElement("li",{key:n,className:t.cur?"cur":"",onClick:e.jumpTo.bind(e,t.lemmaId)},t.ambi)})),React.createElement("div",{className:"hide "+(s?"fixed":""),href:"javascript:;",onClick:e.pickUp},"收起")))}}]),t}(React.Component)}});
//# sourceMappingURL=Polysemant_921c29a.js.map
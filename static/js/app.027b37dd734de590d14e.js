webpackJsonp([2,0],[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=i(19),r=s(n),o=i(9),a=s(o),c=i(88),l=s(c),u=i(34),f=s(u),d=i(33),h=s(d),p=i(100),g=i(98),v=s(g),m=i(87),A=s(m);i(75),i(73),a.default.use(v.default),a.default.http.options.emulateJSON=!0,a.default.use(A.default),(0,p.sync)(f.default,h.default),new a.default((0,r.default)({router:h.default,store:f.default},l.default)).$mount("#app")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),r=s(n),o=i(99),a=s(o),c=i(35),l=i(92),u=s(l);r.default.use(a.default),e.default=new a.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:(0,c.createListView)("photography")},{path:"/design",component:(0,c.createListView)("design")},{path:"/photography",component:(0,c.createListView)("photography")},{path:"/profile",component:u.default},{path:"/design*",redirect:"/design"},{path:"/photography*",redirect:"/photography"},{path:"/profile*",redirect:"/profile"},{path:"*",redirect:"/"}]})},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(43),r=s(n),o=i(9),a=s(o),c=i(32),l=s(c);a.default.use(l.default);var u="static/design.json",f="static/photography.json",d="static/user.json",h=new l.default.Store({state:{user:{},design:[],photography:[]},actions:{FETCH_DESIGN:function(t){var e=(t.commit,t.state);return a.default.http.get(u).then(function(t){var i,s=t.body;return(i=e.design).push.apply(i,(0,r.default)(s.list)),e.design})},FETCH_PHOTO:function(t){var e=(t.commit,t.state);return a.default.http.get(f).then(function(t){var i,s=t.body;return(i=e.photography).push.apply(i,(0,r.default)(s.list)),e.photography})},FETCH_USER:function(t){var e=(t.commit,t.state);return a.default.http.get(d).then(function(t){var i=t.body;return e.user=i,e.user})}},mutations:{},getters:{isDesignActive:function(t){return"/design"===t.route.path},isPhotoActive:function(t){return"/photography"===t.route.path||"/"===t.route.path},isUserActive:function(t){return"/profile"===t.route.path}}});e.default=h},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t){return{name:t+"-stories-view",render:function(e){return e(o.default,{props:{type:t}})}}}Object.defineProperty(e,"__esModule",{value:!0}),e.createListView=n;var r=i(90),o=s(r)},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(19),r=s(n),o=i(32);e.default={name:"app",computed:(0,r.default)({},(0,o.mapGetters)(["isDesignActive","isPhotoActive","isUserActive"])),beforeMount:function(){this.resizePage(window.document.documentElement,window)},methods:{resizePage:function(t,e){var i=t.clientWidth;return!i||i>1100?void(t.style.fontSize="16px"):void(t.style.fontSize="20px")}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(20),r=s(n),o=i(81),a=s(o),c=["January","February","March","April","May","June","July","August","September","October","November","December"],l="px",u=900;e.default={name:"work-item",props:["item","index"],data:function(){return{workItemOv:!1,itemClicked:!1,isOpen:!1,toggleOpen:!1,teaserScrollArrowShow:!1,teaserLoadingBgShow:!1,teaserLoadingShow:!1,teaserPicShow:!0,teaserAbsClass:!1,teaserHideClass:!1,listShowClass:!1,listWrapHeight:0,infoWhiteHeaderChanged:!1,infoWhiteDescChanged:!1,infoWhiteHeaderClip:{clip:"auto"},infoWhiteDescClip:{clip:"auto"},defaultHeaderClip:"",defaultDescClip:"",styleInfoWhite:{marginLeft:"",marginRight:""},styleInfoWhiteRev:{marginLeft:"",marginRight:""},styleInfoHeader:{width:"",height:""},styleInfoDesc:{width:"",height:""},infoFixed:!1,infoTop:0,pictureHeight:600,waitStartTime:0}},computed:{triggerCursor:function(){return this.itemClicked?"wait":"pointer"},itemOdd:function(){return(this.index+1)%2===1},itemTitle:function(){return c[this.item.month-1]+" "+this.item.year}},mounted:function(){var t=this;this.$nextTick(function(){t.calculateInfo()}),window.addEventListener("scroll",this.itemScroll)},destroy:function(){window.removeEventListener("scroll",this.itemScroll)},methods:{calculateInfo:function(){var t=this,e=this.$refs.infoHeader,i=this.$refs.infoDesc,s=e.clientWidth,n=e.clientHeight,o=i.clientWidth,a=i.clientHeight;this.styleInfoHeader.width=s+l,this.styleInfoHeader.height=n+l,this.styleInfoDesc.width=o+l,this.styleInfoDesc.height=a+l,this.itemOdd?(this.styleInfoWhite.marginLeft="195px",this.styleInfoWhiteRev.marginLeft="-195px"):(this.styleInfoWhite.marginRight="195px",this.styleInfoWhiteRev.marginRight="-195px"),setTimeout(function(){t.pictureHeight=(0,r.default)(t.$refs.originPicture).innerHeight()},1),this.defaultHeaderClip=this.getInfoClipParam(this.$refs.infoWhiteHeader),this.defaultDescClip=this.getInfoClipParam(this.$refs.infoWhiteDesc)},itemScroll:function(){var t=window.pageYOffset;if(this.isOpen){var e=this.getOffsetTop(this.$refs.workItem),i=this.listWrapHeight-(0,r.default)(this.$refs.pictures[this.item.content.length-1]).innerHeight(),s=e+i,n=this.defaultHeaderClip,o=this.defaultDescClip;if(this.toggleOpen&&t>e)if(t<s){this.infoFixed=!0,this.infoTop=0;var a=this.getNearestInfoPic(this.$refs.infoWhiteHeader),c=a.dom,l=a.isBackgroundWhite,u=this.getNearestInfoPic(this.$refs.infoWhiteDesc),f=u.dom,d=u.isBackgroundWhite;n=this.getInfoClipParam(this.$refs.infoWhiteHeader,c),o=this.getInfoClipParam(this.$refs.infoWhiteDesc,f),this.toggleByBackground(!0,l),this.toggleByBackground(!1,d)}else this.infoFixed=!1,this.infoTop=i;else this.infoFixed=!1,this.infoTop=0;this.toggleInfoClip(!0,n),this.toggleInfoClip(!1,o)}},triggerOver:function(){this.workItemOv=!0},triggerOut:function(){this.workItemOv=!1},triggerClick:function(){if(!this.itemClicked){if(this.itemClicked=!0,this.isOpen)return void this.closeItem();this.waitOpenItem();var t=this;setTimeout(function(){t.openItem()},200)}},closeItem:function(){a.default.scrollTop(window.document.body,this.getOffsetTop(this.$refs.workItem)-50,u);var t=this;setTimeout(function(){t.listWrapHeight=0,t.listShowClass=!1,t.teaserPicShow=!0,t.teaserHideClass=!1,t.teaserAbsClass=!1,t.toggleOpen=!1,t.itemScroll(),t.isOpen=!1,t.itemClicked=!1},u)},waitOpenItem:function(){this.pictureHeight=(0,r.default)(this.$refs.originPicture).innerHeight(),this.waitStartTime=(new Date).getTime(),this.teaserLoadingBgShow=!0,this.teaserLoadingShow=!0,this.teaserPicShow=!1},openItem:function(){var t=(new Date).getTime(),e=u-(t-this.waitStartTime);e<0&&(e=0),this.teaserAbsClass=!0,this.teaserHideClass=!1,this.listShowClass=!0,this.listWrapHeight=this.pictureHeight,this.itemScroll();var i=this;setTimeout(function(){i.teaserLoadingShow=!1,setTimeout(function(){i.teaserScrollArrowShow=!0,setTimeout(function(){i.teaserLoadingBgShow=!1,i.listWrapHeight=(0,r.default)(i.$refs.picAreaList).outerHeight(),i.itemClicked=!1,setTimeout(function(){i.isOpen&&(i.teaserScrollArrowShow=!1,i.teaserHideClass=!0,i.teaserAbsClass=!1)},2e3)},200)},200)},e),this.isOpen=!0,this.toggleOpen=!0},toggleInfoClip:function(t,e){var i="rect("+e.t+"px, "+e.r+"px, "+e.b+"px, "+e.l+"px)";t?this.infoWhiteHeaderClip.clip=i:this.infoWhiteDescClip.clip=i},toggleByBackground:function(t,e){t?this.infoWhiteHeaderChanged=e:this.infoWhiteDescChanged=e},getNearestInfoPic:function(t){for(var e=this.getOffsetTop(t)+t.clientHeight,i=this.$refs.pictures.length,s=i-1;s>=0;s--){var n=this.$refs.pictures[s];if(this.getOffsetTop(n)<e)return{dom:n,isBackgroundWhite:this.item.content[s].isBackgroundWhite}}},getInfoClipParam:function(t,e){var i=t.clientWidth,s=t.clientHeight;if(e){var n=this.getOffsetTop(t),o=n+s,a=this.getOffsetTop(e),c=a+(0,r.default)(e).height()-parseFloat((0,r.default)(e).css("padding-bottom"));return{l:0,r:i,t:a>n?a-n:0,b:c<o?c-n:s}}return{l:0,r:i,t:0,b:s}},getOffsetTop:function(t){return(0,r.default)(t).offset().top}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(91),r=s(n),o=i(89),a=s(o);e.default={name:"item-list",components:{Spinner:r.default,Item:a.default},props:{type:String},data:function(){return{loading:!0,displayedItems:[]}},beforeMount:function(){var t=this,e=(new Date).getTime(),i="design"===this.type?"FETCH_DESIGN":"FETCH_PHOTO";this.$store.dispatch(i).then(function(i){t.displayedItems=i;var s=900-((new Date).getTime()-e);s<0&&(s=0);var n=t;setTimeout(function(){n.loading=!1},s)})},methods:{onScroll:function(t,e){}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(20),r=s(n);e.default={props:["show"],watch:{show:function(t){this.toggleBodyClass(t)}},mounted:function(){this.toggleBodyClass(this.show)},methods:{toggleBodyClass:function(t){t?(0,r.default)(window.document.body).addClass("siteLoading-open"):(0,r.default)(window.document.body).removeClass("siteLoading-open")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",data:function(){return{loading:!0,user:{}}},beforeMount:function(){var t=this;this.$store.dispatch("FETCH_USER").then(function(e){t.user=e,t.loading=!1})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAALG0lEQVR4Xu2dUW7dthKGSR0kr01XUGcF11nBdVZwnRXEASIhb0lWkGQFdd4CyUDtFdRZQdsV1FlBfVfQ+JVCxOJPeFwemtKRxCFFhRRQFK0lHnLm43BIDoec5SdpCfCkW58bzzIAiUOQAcgAJC6BxJufLUAGIHEJJN78bAEyAIlLIPHmZwuQAUhcAok3P1uADEDiEki8+dkCZAASl0DizY/OApRlecgY+4FzfqTp5lBK+WBNuuKcf2aMXW3rLKX8nTF20zTN7f+LoT2LA3BycvLg/v37/2OMHUspjzjnq1L0VCVKKT9zzgHDpRDi4/n5OUBZ7FkMgOfPn0PZTznnJ4u1PoIfllKeM8beL2UZggOgTPzPhomPQBXLVkENEa9DgxAMAGXq3zDGXg2I+gaC4JxjnLzqum5R80iFRFEUGNbgxxwq8H8YKPtUCPEu1NAQBADV63/hnMPBM58bjIf4p65r/Pu7fzD8FUWBoe8YDq/ZYCklOsCzENbAOwBlWaKhMPmmcwfFg/bTULTHRpayirCI+GcHBDiLjDEMCfARvD1eAYDyOee/WGp/IYR4lariTXkoEE4ZY08t1gCWwBsE3gDoUT56/Ukqpn5qt1VDA4ZB0xp4g8ALAD3K/1QUxfGHDx+upwompfeVNcA6wX/0dkspvUBADoBy+H4zxvxPQoijbPLHoWyDQPkEj6kdQ1IAUPF79+5B+bq3n5U/Tu87b/VAcNW27WPKjkQKQFmWp5zzl1pLboqiOMxmfwYBcJa+LZNjyNR9gnd1Xb+dV+Ldr8gAgOnnnP9p/MST7PC5qUo5hr8Z/sAjqqGAEgCYfn0H76Ku66TX+d1U/+/XpmXFamnTNI8pyicBwELpjRDigHKsomjsWsuwDQVFUTykGFpJAKiqCgsV+iIG6Ti1VsVR1ruqKoz72EvZPiQW1hkAReffuuOXez+l6r+VZVoBTAvbtn3oamWdAbAs+pCQSS/C5UqsquqNCnY5ULuc78/OzrDYM+mx+ALOi0MUAFxyzhHR8/Xpuu7xnMZNksSKXi7L8s+eXdDXdV1j/X/0Y860pJQfm6bBjuLshwKAv7VVv5u6rr/rkK4pkraM2zufz3HkqqrCLuHXdQEMA03T/DilTua7TgD4INKlMbF9W5Ylglv+O1CvyVbAdLillE5rAk4AWKZ/2fvXtK331h4IJsvLtCquQ64TABYTl1f+NE3vswBzdvioOx0pAK40xmbCXetTVRUctF9t5Ugp/9+27eHUaVwGYIZWtLMHXwMzEaBphqip7darbUAqVcy+ZYMMLUDw69Gc9fwXL14cdF33lyaGycOILkInC1CWZbRTwK3SpZQIS9P3KEYjpCKUz+u6vhj9keVF1WuPcLqJc34thDif2vP1Yquqktv/dp0KugKw4+XGMAQoxb+UUr6iOmWkTvMggPW9i+JcIBoA4I+maWYBjjK/KwBUT0MQKlbceh+Mv4wxMzTtgHP+0x4lXXdd92zphS7DAmQAVCQSQs+t289QOOf8vOu63/cpTzPXGDqsQOA4V9u2r5eyBhmA3akWnLq+QycXUsrTOc4WfkItdCFm3xauHezwhmmVMgBKIj0BqFgi/WOz2ZxQ7JdvQcAhFnNVz1eg5j5fIQOgeidjzIw+huwmL6/uE/j271VVwRr8rL+/BATJA9DT82fPrccCoA0L2Mq9DdQMDUHSAPSFnoc8dKIWY3CC5/bwBg50Uods94GZNABlWcLh0739RULPFQRwBHVLcN40zbMpFmXOu8kCYAs+nbukOkfw5je2UPgQi2FJAqBW+HDuQF/k8ebwjQXE4hhe13X9cOz3c95LEgBz6xlTPZcl0DmC7/vG3Pads807pT5JAlCWpR56xuaEU00R8pR3LUOBVyuQHABriDy2hGo5R+zmWcC/K347x85c4+Cm9O6x71riI8mObyW9FGwePMHGTtM0g7t9Y5VG/V5Zltf6BpIQ4kcfG0ZJDQEW8+8UAUOtdL28UDGSqQGwk3MgxDx7LiTmOoWUEhlAh/Iizvqp1ADYiTqq69opiGWWxCd8RKmc7AR+2/W7nf7FPP5rO4akJ3dsEFBC5tSbzAUQH+aZsrETOvLsV02Z+LBYlDLJAMxWtf3DDMCMY89DOqCknVjX1uIyABkA704rZadY1RCAUG7fO22uVqKqKpzauV2oyj6Ao0RDmFTHKu58Ttk78zSQMUZ9Hp5S2WZZll1BL+lyKCFbwxBgRuIuHgQy0DOD1DUpAMzTsJRJEqmtQVmWQXYtkwIASjJ32WIKBtlCZAHV265lcgBY4u6i2xG0hKx52QgCcMkBYOldJEkSqYYAdVbhL/04uk8rlRwAivqddLS+tlrnQGFJ4Og1YDVJACypUXAI1ClF2hxlj5j6eU+WmSQAygqYCZORbuWRj7CrMXD0nFXwMvfX65MsAD3XqHgLvtwHgSUNbJA0+ckCoKaEyPBlns4NciZPB8JyRhF/DpInMWkAFAR3LqTEAlHbtk98Dwc9p5Phj3ib9pmWKHkA+iDAbqGU8snclDAjTD6sDxI/mmHp3sf97ANYtDNwNS3pDdx7bj4PqvwkF4KGeqaCAHn371y+zDk/LYriYm6uIDX1fNqXczCk2c8WYIACtQ2LhaKd61a3n8A/UFfUY4EGSR16H5V+BinejwcyjC56B3L2ASzq065i1y9W6lM0fIWdRJGcc4zrY46cLX7zeQZgoAcrs40Fozu5/fY5eUN/Rz4CKeXbfYkmXX5j7LcxARBtsmgFwrEav/elgLXKXqWUvdxsNqdz/YixSp3yngGA071BThFB1LdXTBHClHcBw5cvX44wpkspkRMY2UV3nEaUh16ObN642UsFngz6C1PqQPVuVOni1wIAlfBjKCfqCyNCLYXGoIil6hAVANSVWUqoa/pdaqvr5APka+PCo2OGybtGHjkBoJYlvR+HDi/meH/ROHnkfFGnMwDmvUHZD/AHjyU20mkKiJpSAGBuzQbfHPEn8rhKjvLyaEsWr6giduNSoVttTPMvhDhwjX9wtgDKD9iJ2GWMRRe37yb65b/2lSyTBADLbCBbAWJmzGPnrt7/tnokAKAwyz252RcggsBnomxKABAuhXTu+hMkSJJIzlEWY7seh/I8BBkAygrsJHXEXTqbzeZRTDtpUWq5p1I9Aaik/hUpAD1x+8Hu0lmTcsfU1RJ6/kkIceTq+eu/TQqAsgK2uP0MwRiNa+/Y7kbycT0OOQAKAlvc/tVms3mSh4P9JNgOnfi6hcQLAAMQfOacP6vrGleu5ceQwMChE2+XT3gDoA8C/P+lL1+OkbyqqhB+Dif6gV4/Xz2ffB2gT6j74vaFEO8pnZoYlTtUJ8RUcM7fWELQcRPqq6ZpsMrq7fFqAba1HorbV9euXkopL8/Ozj56a2lEBStTj6hl+EqITzSfT1LKk31nGCiaFAQAVFQ1+i3n/OWeisM/QDDmndh9igYvWAZmRwfw5HuUvq3aOyHEaSirGAwA3RrYrmJfUDFR/DQikhljMPlBI5GDA2AMC0isSHqAIwptjq8EjphdFkXxdqnp8WIAbGWkhoZj7SzenXj98fJcxZtw7r6eVWzb9jKUqe+TzOIAmBWDwyilfFAUxdH2b1JKOEo706MVqBprHrfmvOs6pJH/HNrE75NTdADsq3D+O60EMgC08lxdaRmA1amMtsIZAFp5rq60DMDqVEZb4QwArTxXV1oGYHUqo61wBoBWnqsrLQOwOpXRVjgDQCvP1ZWWAVidymgrnAGglefqSssArE5ltBXOANDKc3WlZQBWpzLaCv8Dv2YfCEe5ercAAAAASUVORK5CYII="},function(t,e,i){t.exports=i.p+"static/img/loading.cdc5221.gif"},function(t,e,i){t.exports=i.p+"static/img/loading_white.98a602f.gif"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA8CAYAAAD4zJ32AAAE8UlEQVR4Xu2ci43UMBCGhwqgA6ACoALoAKgASoAGECUcHUAFPCqgAygBKoAOQF+UWXm9fowTezNGRFqhYxN7/Pmfhx3f3ZJ5rpci8klEfh9o8isRuSn1f+tA41q7fisi90QEsEdc9P9k/WT7nw0o6gBoUSUDaD8TkTvrhAL2nwCKuzOwh+vA+PkaF/0xibg7n68i8j3X8UwKZSC4HBdgiaX838gLVeINgKQ/7T/b76xAgYhqUEpWLR1IvxcRXPzH2pbG8KzbzwyUMaIcBj0i89M2kxWrURWbnK+ZgKKKlDKKA9yoUs3mzf3NBBQlpkom4hxqCgf/OEheOkbuU9dVzqGy/6yK/Lm2lSvP/hmFhkkpFh6ZWEsbvtPY2hpftR2g5cJIzlMWm1IKpdFWQzZ61lICWfsqAd3a/5bnAIq3xGrPAlXXKRawWyyJnsEFtba0JBUvQIulU0qh0OdDicC/oy7cCnUy05Z6suhqo4xMtItXATW5WksBVSWMrPPCkqS64bAOygtQzMnakgIa3sws8LPFJa0iYXaZZZ1hC9BSGWPtt+d9uYojmZQ0rqkBPaESN5kgIOplUZ43oNnSKRdDwxoMCL12eJhZXRcr0BkV2gQ0pZg4EFM4k7SYEIBr7Re6Fd9rqCDxUCei/rhMsmwcVzclevqzoS0YJWvVWKEl11KoCs+SmdU2ngV86hkLLMs9Bg7dbsnakwKq9WG33isN0R/qLZVouY2Ka9kY94NA+FzYHAO91j5jbGAtjuJiqLvFK0bDTibTGOhRhtcy/VF2lSYlWTqlgI5ecqaMtCj0CLtKQE0KzRasg/3HolBvQE0KPQpoLYuP2ETeq5Fk6eTF5alZgZrL9F52msJJSCbwGGi87Nw7iy3Pl9zeI1AEcFFixkCPdK1SYqrF2JaJ63nvhV1eXJ5BXhMoy91fIvLZSBc1PhCRD9HO24UAQ6Dxtpqxr263lVTYU6HEvo+r1Y+Mr2DYk7gtIu9qO2UxUPo5ajXCQNlESb1j6hlDWTJ+W4Hez70bimSCXXdF5HW0U19U6FHLznADhWyfOrPUEyj96U5Yy8Z56oViMYYW3+Z1c+xyQznX7unyPYdyIcLQ5T0YnUtMHmxLTcRF6RQCtaySGPBTEXleec8EALIi97VcswG9OLUSArXUoEB/ISK17EhiIU7pbr4VakqJ1RNv1sYH3XfGbYvLM8DkqYnIYGC2BH0epz4kAYXte3tBF8/LmQhCoEcuO9XI1CZJbeNkkPDMze5WqLmnjTfGbu8daFKhqSOBG3nsfmw2oGcnbNTlUcHos0xW0jHQoxccNbvPPCgEeuSyMzQ6Lp08vk8K7T3zbgWKbK2n4Goztvf7+Nx89lDB3o46Pn9KTArU00okTkKebMvNwclGj0Djs1QzAD2tMhWoZdnZ0UOqTYUQZwDqWqHQDiF6WHDUFEDcx84fHl0e48PVh2WPoTbg0d+f4r4C9Wb0bC5PDU+9fONVoWGmnyGGnsKUHpiNfxNttIvU2g8PPswCdPFygHrdfFCQ3sJRTgz/gdbcpPH7RQAodOTvIzXadHa7KnMWl19KJ4B6NVjt8mpfLJYldHoGqtt2GApU79eSSD0D1T/Wwr8zAF1KJ89AMZA9BpZ01/oLOHu9YCnsPcco/c3oo85btQI+ZfmRv8bdalR4/xsR+WI8Ibenn17P3vwFOC0/LMDSN/sAAAAASUVORK5CYII="},,function(t,e,i){var s,n;i(78),s=i(36);var r=i(95);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(79),s=i(37);var r=i(96);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(80),s=i(38);var r=i(97);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(77),s=i(39);var r=i(94);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(76),s=i(40);var r=i(93);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-container"},[s("div",{staticClass:"about-card"},[t._m(0),t._v(" "),s("p",{staticClass:"inline-desc"},[t._l(24,function(e){return s("span",{staticClass:"inline-desc-large"},[t._v("-")])}),t._v(" "+t._s(t.user.name)+" "),t._l(24,function(e){return s("span",{staticClass:"inline-desc-large"},[t._v("-")])})],2),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(t.user.profile))]),t._v(" "),s("p",{staticClass:"instagram"},[t._v("Say Hello")]),t._v(" "),s("p",{staticClass:"instagram-logo-line"},[s("a",{staticClass:"instagram-logo",attrs:{target:"_blank",href:t.user.instagram}},[s("img",{staticClass:"instagram-logo",attrs:{src:i(83)}})])]),t._v(" "),s("p",{staticClass:"user-email"},[t._v("e-mail: "+t._s(t.user.email))]),t._v(" "),s("img",{staticClass:"picture",class:{invisible:!t.user.picture},attrs:{src:t.user.picture}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("img",{staticClass:"logo",attrs:{src:i(86)}})])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"siteLoading"},[s("img",{staticClass:"siteLoadingCenter",attrs:{src:i(84)}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"siteHeader"},[i("h2",[i("router-link",{attrs:{to:"/"}},[t._v("copyright© 2011-2017 MOMO SONG, all rights reserved.")])],1),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"rightBlock"},[i("h1",[i("router-link",{class:{"active-menu":t.isPhotoActive},attrs:{to:"photography"}},[t._v("Photography")])],1),t._v(" "),i("div",{staticClass:"nav"},[i("router-link",{class:{"active-menu":t.isDesignActive},attrs:{to:"design"}},[t._v("Design")]),i("span",[t._v("·")]),i("router-link",{class:{"active-menu":t.isUserActive},attrs:{to:"profile"}},[t._v("Profile")])],1)])]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"workItem",staticClass:"work-item",class:{rev:!t.itemOdd,open:t.toggleOpen,ov:t.workItemOv}},[s("div",{ref:"infoBlack",staticClass:"info info-black",class:{fixed:t.infoFixed},style:{top:t.infoTop+"px"}},[s("div",{staticClass:"infoClip"},[s("div",{staticClass:"infoInr"},[s("h3",{style:t.styleInfoHeader},[s("div",{ref:"infoHeader",staticClass:"inr"},[s("a",{style:{cursor:t.triggerCursor},attrs:{href:"javascript:void(0);"},on:{click:t.triggerClick,mouseover:t.triggerOver,mouseout:t.triggerOut,touchend:t.triggerOut}},[t._v(t._s(t.itemTitle)),s("br"),t._v(t._s(t.item.location))])])]),t._v(" "),s("div",{staticClass:"date"},[t._v("posted at "+t._s(t.item.year)+"."+t._s(t.item.month)+"."+t._s(t.item.dayInMonth))]),t._v(" "),s("div",{staticClass:"desc",style:t.styleInfoDesc},[s("div",{ref:"infoDesc",staticClass:"inr"},[t._v(t._s(t.item.desc)),t._l(t.item.tools,function(e){return[s("br"),t._v(t._s(e))]})],2)])])]),t._v(" "),s("div",{staticClass:"mark mark-plus"},[t._v("+")]),t._v(" "),s("div",{staticClass:"mark mark-minus"},[t._v("_")])]),t._v(" "),s("div",{ref:"picArea",staticClass:"picArea"},[s("div",{staticClass:"listWrap",style:{height:t.listWrapHeight+"px"}},[s("div",{ref:"picAreaList",staticClass:"list",class:{show:t.listShowClass}},t._l(t.item.content,function(t){return s("div",{ref:"pictures",refInFor:!0,staticClass:"row"},[s("div",{staticClass:"pic",staticStyle:{width:"800px"},attrs:{"data-clr":"white"}},[s("img",{staticClass:"show",attrs:{alt:"item.desc",width:"800",src:t.src}})])])}))]),t._v(" "),s("div",{staticClass:"teaser",class:{abs:t.teaserAbsClass,hide:t.teaserHideClass}},[s("a",{style:{cursor:t.triggerCursor},attrs:{href:"javascript:void(0);"},on:{click:t.triggerClick,mouseover:t.triggerOver,mouseout:t.triggerOut}},[s("div",{staticClass:"pic",class:{hide:!t.teaserPicShow},staticStyle:{width:"800px"}},[s("img",{ref:"originPicture",staticClass:"show",attrs:{alt:t.item.desc,width:"800",src:t.item.cover}})])]),t._v(" "),s("div",{staticClass:"black",class:{show:t.teaserLoadingBgShow}}),t._v(" "),s("img",{staticClass:"picLoadingCenter",class:{show:t.teaserLoadingShow,hide:!t.teaserLoadingShow},attrs:{src:i(85)}}),t._v(" "),s("div",{staticClass:"scrollArw",class:{show:t.teaserScrollArrowShow}},[s("div",{staticClass:"arw1"}),t._v(" "),s("div",{staticClass:"arw2"})])])]),t._v(" "),s("div",{ref:"infoWhite",staticClass:"info info-white",class:{fixed:t.infoFixed},style:{top:t.infoTop+"px"}},[s("div",{staticClass:"infoClip",style:t.styleInfoWhite},[s("div",{staticClass:"infoInr",style:t.styleInfoWhiteRev},[s("h3",{style:t.styleInfoHeader},[s("div",{ref:"infoWhiteHeader",staticClass:"inr",class:{black:t.infoWhiteHeaderChanged},style:t.infoWhiteHeaderClip},[s("a",{style:{cursor:t.triggerCursor},attrs:{href:"javascript:void(0);"},on:{click:t.triggerClick,mouseover:t.triggerOver,mouseout:t.triggerOut}},[t._v(t._s(t.itemTitle)),s("br"),t._v(t._s(t.item.location))])])]),t._v(" "),s("div",{staticClass:"date"},[t._v("posted at "+t._s(t.item.year)+"."+t._s(t.item.month)+"."+t._s(t.item.dayInMonth))]),t._v(" "),s("div",{staticClass:"desc",style:t.styleInfoDesc},[s("div",{ref:"infoWhiteDesc",staticClass:"inr",class:{black:t.infoWhiteDescChanged},style:t.infoWhiteDescClip},[t._v(t._s(t.item.desc)),t._l(t.item.tools,function(e){return[s("br"),t._v(t._s(e))]})],2)])])]),t._v(" "),s("div",{staticClass:"mark mark-plus"},[t._v("+")]),t._v(" "),s("div",{staticClass:"mark mark-minus"},[t._v("_")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work-container",on:{scroll:t.onScroll}},[i("spinner",{attrs:{show:t.loading}}),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[i("div",{staticClass:"work-list"},[i("transition-group",{attrs:{tag:"div",name:"item"}},t._l(t.displayedItems,function(t,e){return i("item",{key:t.id,attrs:{item:t,index:e}})}))],1)])],1)},staticRenderFns:[]}},,,,function(t,e){}]);
//# sourceMappingURL=app.027b37dd734de590d14e.js.map
(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)n=o[d],a[n]&&h.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fa63a574"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,i){s=a[t]=[e,i]});e.push(s[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");n.type=i,n.request=r,s[1](n)}a[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/driv3r/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("1356"),a=s.n(i);a.a},1356:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("14c6"),s("08c1"),s("4842"),s("d9fc");var i=s("2b0e"),a=s("6d68"),r=(s("1941"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",{attrs:{include:"tabs"}},[s("router-view",{staticClass:"app"})],1)],1)}),n=[],o=(s("034f"),s("2877")),l={},c=Object(o["a"])(l,r,n,!1,null,null,null),d=c.exports,u=s("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/",title:"На главную"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(0),s("div",{staticClass:"header-info"},[t._m(1),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О нас")])],1)])]),s("div",{staticClass:"search"},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-input",class:t.containerInput},[s("div",{staticClass:"container container-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"searchGame",staticClass:"search-game",attrs:{type:"text",placeholder:"Поиск игры...",autofocus:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),s("button",{ref:"buttonGame",staticClass:"toggle-search",class:t.buttonInput,on:{click:function(e){return t.showInput()}}})])]),s("section",[s("back-to-top",{attrs:{visibleoffset:"500"}},[s("img",{attrs:{src:this.publicPath+"up.svg",alt:"Наверх",width:"15px",height:"15px",title:"Наверх"}})]),s("div",{staticClass:"container container--tabs"},[s("vk-tabs",{attrs:{align:"justify"}},[s("vk-tabs-item",{attrs:{title:"HTC ("+this.$store.state.games.filter(function(t){return"htc"===t.category}).length+")"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("музыкальная")]),s("option",[t._v("хоррор")]),s("option",[t._v("спорт")]),s("option",[t._v("квест")]),s("option",[t._v("стратегия")]),s("option",[t._v("головоломка")]),s("option",[t._v("аттракцион")]),s("option",[t._v("творчество")]),s("option",[t._v("многопользовательская")])])]),s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"isChild"}},[t._v("Для детей")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChild,expression:"isChild"}],attrs:{type:"checkbox",id:"isChild"},domProps:{checked:Array.isArray(t.isChild)?t._i(t.isChild,null)>-1:t.isChild},on:{change:function(e){var s=t.isChild,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);i.checked?n<0&&(t.isChild=s.concat([r])):n>-1&&(t.isChild=s.slice(0,n).concat(s.slice(n+1)))}else t.isChild=a}}})])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByHTC,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"PSVR ("+this.$store.state.games.filter(function(t){return"psvr"===t.category}).length+")"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("симулятор")]),s("option",[t._v("экшн")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("хоррор")]),s("option",[t._v("квест")]),s("option",[t._v("аттракцион")]),s("option",[t._v("многопользовательская")])])]),s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"isChild"}},[t._v("Для детей")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChild,expression:"isChild"}],attrs:{type:"checkbox",id:"isChild"},domProps:{checked:Array.isArray(t.isChild)?t._i(t.isChild,null)>-1:t.isChild},on:{change:function(e){var s=t.isChild,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);i.checked?n<0&&(t.isChild=s.concat([r])):n>-1&&(t.isChild=s.slice(0,n).concat(s.slice(n+1)))}else t.isChild=a}}})])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByPSVR,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"PS4 ("+this.$store.state.games.filter(function(t){return"ps"===t.category}).length+")"}},[s("div",{staticClass:"container container-select"},[s("div",{staticClass:"select-container"},[s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"genre"}},[t._v("Выбрать жанр")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.genre,expression:"genre"}],staticClass:"uk-select",attrs:{id:"genre"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.genre=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"все"},domProps:{selected:"все"===t.genre}},[t._v("все")]),s("option",[t._v("шутер")]),s("option",[t._v("экшн")]),s("option",[t._v("ролевая")]),s("option",[t._v("музыкальная")]),s("option",[t._v("аркада")]),s("option",[t._v("гонка")]),s("option",[t._v("спорт")]),s("option",[t._v("файтинг")]),s("option",[t._v("песочница")]),s("option",[t._v("интерактивное кино")]),s("option",[t._v("многопользовательская")])])]),s("div",{staticClass:"select-item"},[s("label",{staticClass:"label-genre",attrs:{for:"isChild"}},[t._v("Для детей")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChild,expression:"isChild"}],attrs:{type:"checkbox",id:"isChild"},domProps:{checked:Array.isArray(t.isChild)?t._i(t.isChild,null)>-1:t.isChild},on:{change:function(e){var s=t.isChild,i=e.target,a=!!i.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);i.checked?n<0&&(t.isChild=s.concat([r])):n>-1&&(t.isChild=s.slice(0,n).concat(s.slice(n+1)))}else t.isChild=a}}})])])]),s("div",{staticClass:"wrapper container"},t._l(t.showGamesByPS4,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)}),0)]),s("vk-tabs-item",{attrs:{title:"МОИ ("+this.$store.state.wishlistIds.length+")"}},[s("div",{staticClass:"wrapper container"},[t.isEmpty?s("div",[s("p",[t._v("Ваш список избранных игр пуст. Чтобы добавить игру в избранное, на странице игры нажмите на значок звёздочки рядом с названием игры. "),s("br"),t._v(" Чтобы удалить игру из избранного - нажмите на звёздочку ещё раз.")])]):t._l(t.showLikedGames,function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}})]),s("img",{staticClass:"card-image",attrs:{src:e.thumbnail}})])],1)})],2)])],1)],1)],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/about",title:"О нас"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(2),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("div",{staticClass:"copyright"},[t._v("\n        Ⓒ Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте\n      ")])])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[t._v('\n        Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж\n      ')]),s("p",{staticClass:"header-item"},[t._v("\n        Мы работаем: ежедневно с 10:00 до 21:00\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])}],g=(s("386d"),{name:"home",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/driv3r/",search:"",category:"",games:[],isOpened:!1,isSwitched:!1,isEmpty:!1,genre:"все",isChild:!1}},methods:{showInput:function(){this.$refs.buttonGame.classList.contains("switched")?(this.isOpened=!this.isOpened,this.isSwitched=!this.isSwitched,this.search=""):(this.isOpened=!this.isOpened,this.isSwitched=!this.isSwitched,this.$nextTick(function(){this.$refs.searchGame.focus()}))}},mounted:function(){this.$store.dispatch("loadGames"),0==this.$store.state.wishlistIds.length&&(this.isEmpty=!this.isEmpty)},created:function(){},computed:{containerInput:function(){return{opened:this.isOpened}},buttonInput:function(){return{switched:this.isSwitched}},showGames:function(){return this.$store.getters.showAllGames(this.search,this.genre,this.isChild)},showGamesByHTC:function(){return this.$store.getters.showHTCGames(this.search,this.genre,this.isChild)},showGamesByPSVR:function(){return this.$store.getters.showPSVRGames(this.search,this.genre,this.isChild)},showGamesByPS4:function(){return this.$store.getters.showPS4Games(this.search,this.genre,this.isChild)},showLikedGames:function(){return this.$store.getters.wishlist(this.search)}}}),v=g,p=Object(o["a"])(v,h,m,!1,null,null,null),f=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/",title:"На главную"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(0),s("div",{staticClass:"header-info"},[t._m(1),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О нас")])],1)])]),s("div",{staticClass:"container container-game"},[s("vk-breadcrumb",[s("router-link",{staticClass:"home",attrs:{tag:"vk-breadcrumb-item",to:"/",title:"Вернуться на главную страницу"}},[t._v("Главная")]),s("vk-breadcrumb-item",[t._v(t._s(t.game.title))])],1),s("div",{staticClass:"desc"},[s("div",{staticClass:"game-title"},[s("h1",{staticClass:"game-name"},[t._v(t._s(t.game.title)+" "),s("button",{ref:"buttonLike",staticClass:"like",class:{liked:t.liked},attrs:{title:"Добавить в избранное"},on:{click:function(e){return t.putLike()}}})])]),s("flash-message",{staticClass:"flash-message flashpool",attrs:{transitionName:"flash"}}),s("p",[s("b",{staticClass:"desc"},[t._v("Жанр:")]),t._v(" "+t._s(t.game.genre))]),s("p",{staticClass:"game-description"},[s("b",{staticClass:"desc"},[t._v("Описание:")]),t._v(" "+t._s(t.game.description))]),s("carousel",{attrs:{perPage:1,paginationActiveColor:"#89253e",paginationColor:"#ffffff",loop:""}},[s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image1,width:"100%",height:"auto",alt:t.game.title}})]),s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image2,width:"100%",height:"auto",alt:t.game.title}})]),s("slide",[s("img",{staticClass:"game-image",attrs:{src:t.game.image3,width:"100%",height:"auto",alt:t.game.title}})])],1),s("div",{staticClass:"embed-responsive embed-responsive-16by9 z-depth-1-half"},[s("iframe",{staticClass:"embed-responsive-item game-video",attrs:{src:t.game.video,allowfullscreen:"",width:"100%"}})])],1)],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"logo"},[s("router-link",{staticClass:"about-link",attrs:{tag:"a",to:"/about",title:"О нас"}},[s("img",{attrs:{src:this.publicPath+"footer.png",alt:"",width:"200px",height:"auto"}})])],1),t._m(2),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[s("img",{attrs:{src:this.publicPath+"vk.svg",alt:"",width:"30px",height:"30px"}})])]),s("div",{staticClass:"copyright"},[t._v("\n      Ⓒ Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте\n    ")])])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[t._v('\n      Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж\n    ')]),s("p",{staticClass:"header-item"},[t._v("\n      Мы работаем: ежедневно с 10:00 до 21:00\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tel"},[s("a",{attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")])])}],w=(s("6762"),s("2fdb"),s("7514"),{data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/driv3r/",game:""}},methods:{putLike:function(){this.liked=!this.liked,this.$refs.buttonLike.classList.contains("liked")?this.flash("Игра удалена из избранного","success",{timeout:1500,important:!0}):this.flash("Игра добавлена в избранное","success",{timeout:1500,important:!0})}},mounted:function(){},created:function(){var t=this;this.game=this.$store.state.games.find(function(e){return e.id==t.$route.params.id})},computed:{liked:{get:function(){return this.$store.state.wishlistIds.includes(this.game.id)},set:function(t){this.$store.commit(t?"addGame":"removeGame",this.game.id)}}}}),b=w,k=Object(o["a"])(b,C,_,!1,null,null,null),y=k.exports;i["a"].use(u["a"]);var S=new u["a"]({base:"/driv3r/",routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/game/:id",name:"Id",component:y,props:!0},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,s){return{x:0,y:0}}}),x=s("bc3a"),P=s.n(x),L=s("a7fe"),G=s.n(L),$=(s("6b54"),s("2f62")),I=s("0e44");i["a"].use($["a"]);var A=new $["a"].Store({namespaced:!0,state:{games:[],wishlistIds:[]},plugins:[Object(I["a"])()],getters:{showHTCGames:function(t){return function(e,s,i){return"все"===s&&i?t.games.filter(function(t){return"htc"===t.category&&t.isChild&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):"все"===s?t.games.filter(function(t){return"htc"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):i?t.games.filter(function(t){return"htc"===t.category&&t.isChild&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"htc"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showPSVRGames:function(t){return function(e,s,i){return"все"===s&&i?t.games.filter(function(t){return"psvr"===t.category&&t.isChild&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):"все"===s?t.games.filter(function(t){return"psvr"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):i?t.games.filter(function(t){return"psvr"===t.category&&t.isChild&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"psvr"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showPS4Games:function(t){return function(e,s,i){return"все"===s&&i?t.games.filter(function(t){return"ps"===t.category&&t.isChild&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):"все"===s?t.games.filter(function(t){return"ps"===t.category&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):i?t.games.filter(function(t){return"ps"===t.category&&t.isChild&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())}):t.games.filter(function(t){return"ps"===t.category&&t.genre===s&&t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},showLikedGames:function(t){return function(e){return t.wishlist.filter(function(t){return t.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},wishlist:function(t){return function(e){return t.games.filter(function(s){return t.wishlistIds.includes(s.id)&&s.title.toString().toLowerCase().includes(e.toString().toLowerCase())})}},getGameById:function(t){return function(e){return t.games.find(function(t){return t.id===e})}}},actions:{loadGames:function(t){var e=t.commit;P.a.get("games.json").then(function(t){return t.data.games}).then(function(t){e("SET_GAMES",t)})}},mutations:{SET_GAMES:function(t,e){t.games=e},addGame:function(t,e){t.wishlistIds.includes(e)||t.wishlistIds.push(e)},removeGame:function(t,e){var s=t.wishlistIds.indexOf(e);-1!==s&&t.wishlistIds.splice(s,1)}}}),O=s("d00d"),E=s.n(O),j=s("0a63"),T=s.n(j),B=s("6afc");s("f59c"),i["a"].config.productionTip=!1,i["a"].use(G.a,P.a),i["a"].use(a["a"]),i["a"].use(E.a),i["a"].use(T.a),i["a"].use(B["a"]),new i["a"]({router:S,store:A,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.8adb17c8.js.map
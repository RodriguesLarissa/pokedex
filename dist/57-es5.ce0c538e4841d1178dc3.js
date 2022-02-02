!function(){"use strict";function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[57],{4057:function(t,o,i){i.r(o),i.d(o,{PokemonDetailModule:function(){return v}});var a=i(8583),r=i(4330);function g(n,t,e,o,i,a,r){try{var g=n[a](r),c=g.value}catch(d){return void e(d)}g.done?t(c):Promise.resolve(c).then(o,i)}var c=i(7716),d=i(1818);function s(n,t){if(1&n&&(c.TgZ(0,"div",18),c._uU(1),c.qZA()),2&n){var e=t.$implicit;c.Q6J("ngClass",e),c.xp6(1),c.hij(" ",e," ")}}function l(n,t){if(1&n&&(c.TgZ(0,"div",19),c._uU(1),c.qZA()),2&n){var e=t.$implicit;c.xp6(1),c.hij(" ",e," ")}}var f=function(n,t){return{width:n,"background-color":t}};function m(n,t){if(1&n&&(c.TgZ(0,"div",20),c.TgZ(1,"div",21),c._uU(2),c.qZA(),c.TgZ(3,"div",22),c.TgZ(4,"div",23),c._uU(5),c.qZA(),c.qZA(),c.qZA()),2&n){var e=t.$implicit,o=c.oxw();c.xp6(2),c.hij(" ",e.key," "),c.xp6(2),c.Tol(e.key),c.Q6J("ngStyle",c.WLB(5,f,100*e.value/255+"%","blue"==o.pokemon.color?"DeepSkyBlue":o.pokemon.color)),c.xp6(1),c.hij(" ",e.value+"/255"," ")}}var p,x=[{path:"",component:(p=function(){function t(e,o,i){n(this,t),this.route=e,this.dataService=o,this.router=i,this.types=[],this.abilities=[],this.color="",this.pokemon={id:0,name:"",urlImage:"",types:[],color:"",body:{weight:0,height:0},stats:{hp:0,atk:0,def:0,"sp atk":0,"sp def":0,spd:0},abilities:[]}}return e(t,[{key:"ngOnInit",value:function(){this.getPokemon()}},{key:"getId",value:function(){var n=this;this.route.params.subscribe(function(t){n.id=t.id})}},{key:"getPokemon",value:function(){var n=this;return function(n){return function(){var t=this,e=arguments;return new Promise(function(o,i){var a=n.apply(t,e);function r(n){g(a,o,i,r,c,"next",n)}function c(n){g(a,o,i,r,c,"throw",n)}r(void 0)})}}(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.getId(),t.next=3,n.dataService.getPokemonColor(n.id).toPromise();case 3:e=t.sent,n.dataService.getPokemon(n.id).subscribe(function(t){t.types.map(function(t){return n.types.push(t.type.name)}),t.abilities.map(function(t){return n.abilities.push(t.ability.name)}),n.pokemon={id:n.id,name:t.forms[0].name,urlImage:t.sprites.other["official-artwork"].front_default,types:n.types,color:e,body:{weight:t.weight,height:t.height},stats:{hp:t.stats[0].base_stat,atk:t.stats[1].base_stat,def:t.stats[2].base_stat,"sp atk":t.stats[3].base_stat,"sp def":t.stats[4].base_stat,spd:t.stats[5].base_stat},abilities:n.abilities}});case 5:case"end":return t.stop()}},t)}))()}},{key:"pokemonListPage",value:function(){this.router.navigate(["/pokemon-list"])}}]),t}(),p.\u0275fac=function(n){return new(n||p)(c.Y36(r.gz),c.Y36(d.D),c.Y36(r.F0))},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-pokemon-detail"]],decls:34,vars:15,consts:[[1,"pokemon"],[1,"background"],[1,"fas","fa-arrow-left",3,"click"],["alt","Pokemon",3,"src"],[1,"types"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"info"],[1,"content"],[1,"about"],[1,"weight"],[1,"value"],[1,"fas","fa-weight"],[1,"title"],[1,"height"],[1,"fas","fa-ruler-vertical"],[1,"abilities"],["class","ability",4,"ngFor","ngForOf"],["class","stats",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"ability"],[1,"stats"],[1,"progress-name"],[1,"progress-bar"],[3,"ngStyle"]],template:function(n,t){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"i",2),c.NdJ("click",function(){return t.pokemonListPage()}),c.qZA(),c._UZ(3,"img",3),c.TgZ(4,"h2"),c._uU(5),c.qZA(),c.TgZ(6,"div",4),c.YNc(7,s,2,2,"div",5),c.qZA(),c.qZA(),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"h2"),c._uU(11," About "),c.qZA(),c.TgZ(12,"div",8),c.TgZ(13,"div",9),c.TgZ(14,"div",10),c._UZ(15,"i",11),c._uU(16),c.qZA(),c.TgZ(17,"div",12),c._uU(18,"Weight"),c.qZA(),c.qZA(),c.TgZ(19,"div",13),c.TgZ(20,"div",10),c._UZ(21,"i",14),c._uU(22),c.qZA(),c.TgZ(23,"div",12),c._uU(24,"Height"),c.qZA(),c.qZA(),c.TgZ(25,"div",15),c.TgZ(26,"div",10),c.YNc(27,l,2,1,"div",16),c.qZA(),c.TgZ(28,"div",12),c._uU(29,"Abilities"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"h2"),c._uU(31," Base Stats "),c.qZA(),c.YNc(32,m,6,8,"div",17),c.ALo(33,"keyvalue"),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(1),c.Udp("background-color","blue"==t.pokemon.color?"DeepSkyBlue":"white"==t.pokemon.color?"lightslategrey":t.pokemon.color),c.xp6(2),c.Q6J("src",t.pokemon.urlImage,c.LSH),c.xp6(2),c.Oqu(t.pokemon.name),c.xp6(2),c.Q6J("ngForOf",t.pokemon.types),c.xp6(3),c.Udp("color","blue"==t.pokemon.color?"DeepSkyBlue":t.pokemon.color),c.xp6(6),c.hij(" ",t.pokemon.body.weight/10+" kg"," "),c.xp6(6),c.hij(" ",t.pokemon.body.height/10+" m"," "),c.xp6(5),c.Q6J("ngForOf",t.pokemon.abilities),c.xp6(3),c.Udp("color","blue"==t.pokemon.color?"DeepSkyBlue":t.pokemon.color),c.xp6(2),c.Q6J("ngForOf",c.lcZ(33,13,t.pokemon.stats)))},directives:[a.sg,a.mk,a.PC],pipes:[a.Nd],styles:["h2[_ngcontent-%COMP%]{font-weight:bold;align-self:center;font-size:3.5vmax;margin:2vmax;text-transform:capitalize;color:#fff}.pokemon[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row}.fire[_ngcontent-%COMP%]{background-color:#ff6e4b;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.grass[_ngcontent-%COMP%]{background-color:#4d9d53;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.electric[_ngcontent-%COMP%]{background-color:#b19d3a;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.water[_ngcontent-%COMP%]{background-color:#16a7eb;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.ground[_ngcontent-%COMP%]{background-color:#685039;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.rock[_ngcontent-%COMP%]{background-color:#8a5555;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.fairy[_ngcontent-%COMP%]{background-color:#c63adb;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.poison[_ngcontent-%COMP%]{background-color:#733ca3;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.bug[_ngcontent-%COMP%]{background-color:#2f7d43;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.dragon[_ngcontent-%COMP%]{background-color:#748dbb;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.psychic[_ngcontent-%COMP%]{background-color:#488d54;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.flying[_ngcontent-%COMP%]{background-color:#da5773;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.fighting[_ngcontent-%COMP%]{background-color:#571313;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.normal[_ngcontent-%COMP%]{background-color:#4751b1;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.steel[_ngcontent-%COMP%]{background-color:#7a7a7a;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.ghost[_ngcontent-%COMP%]{background-color:#5a3a79;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.ice[_ngcontent-%COMP%]{background-color:#005374;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.dark[_ngcontent-%COMP%]{background-color:#000;text-align:center;margin:0 .5vmax;border-radius:100px;width:11vmax;padding:.8vmax;font-weight:bold;font-size:1.8vmax;color:#fff}.types[_ngcontent-%COMP%]{display:flex;flex-direction:row;place-self:center;margin-top:2vmax}.background[_ngcontent-%COMP%]{display:flex;flex-direction:column;place-content:center;height:100%;width:43%;border-radius:0 320px 320px 0;padding-right:4em}.background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30vmax;justify-content:center;align-self:center}.fa-arrow-left[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;margin:1em;cursor:pointer}.info[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:flex;flex-direction:column;text-align:center;align-items:center;align-self:center;width:57%}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:36vmax}.stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin-top:1.5vmax;color:#fff;font-weight:bold}.progress-name[_ngcontent-%COMP%]{width:8vmax;-moz-text-align-last:left;text-align-last:left;text-transform:uppercase;align-self:center;font-size:2vmin}.progress-bar[_ngcontent-%COMP%]{width:-webkit-fill-available;padding:6px;border-radius:30px;color:#000;background:rgba(121,121,121,.25);box-shadow:inset 0 1px 2px rgba(151,151,151,.25),0 1px rgba(202,202,202,.08)}.hp[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.atk[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.def[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.atk.sp[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.def.sp[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.spd[_ngcontent-%COMP%]{height:18px;border-radius:30px;background-image:linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,.05))}.about[_ngcontent-%COMP%]{color:#fff;font-size:2.5vmin;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.fas[_ngcontent-%COMP%]{font-size:3.5vmin;margin-right:1.5vmin}.ability[_ngcontent-%COMP%]{margin-bottom:1.1vmin}.weight[_ngcontent-%COMP%], .height[_ngcontent-%COMP%], .abilities[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:6em;justify-content:space-evenly}.abilities[_ngcontent-%COMP%]{text-transform:capitalize}.title[_ngcontent-%COMP%]{color:rgba(226,226,226,.3)}@media only screen and (max-device-width: 900px){.background[_ngcontent-%COMP%]{width:100%;height:43%;border-radius:0 0 66px 66px;padding-right:0}.pokemon[_ngcontent-%COMP%]{flex-direction:column}h2[_ngcontent-%COMP%]{margin:0}.fire[_ngcontent-%COMP%]{padding:.5vmax}.grass[_ngcontent-%COMP%]{padding:.5vmax}.electric[_ngcontent-%COMP%]{padding:.5vmax}.water[_ngcontent-%COMP%]{padding:.5vmax}.ground[_ngcontent-%COMP%]{padding:.5vmax}.rock[_ngcontent-%COMP%]{padding:.5vmax}.fairy[_ngcontent-%COMP%]{padding:.5vmax}.poison[_ngcontent-%COMP%]{padding:.5vmax}.bug[_ngcontent-%COMP%]{padding:.5vmax}.dragon[_ngcontent-%COMP%]{padding:.5vmax}.psychic[_ngcontent-%COMP%]{padding:.5vmax}.flying[_ngcontent-%COMP%]{padding:.5vmax}.fighting[_ngcontent-%COMP%]{padding:.5vmax}.normal[_ngcontent-%COMP%]{padding:.5vmax}.steel[_ngcontent-%COMP%]{padding:.5vmax}.ghost[_ngcontent-%COMP%]{padding:.5vmax}.ice[_ngcontent-%COMP%]{padding:.5vmax}.dark[_ngcontent-%COMP%]{padding:.5vmax}.info[_ngcontent-%COMP%]{height:57%}.content[_ngcontent-%COMP%]{height:100%;justify-content:center}.about[_ngcontent-%COMP%]{font-size:4.5vmin;margin-bottom:1.5vmin}.progress-name[_ngcontent-%COMP%]{font-size:3vmin}.progress-bar[_ngcontent-%COMP%]{color:transparent}.fa-arrow-left[_ngcontent-%COMP%]{display:none}}"]}),p)}],u=function(){var t=e(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(x)],r.Bz]}),t}(),v=function(){var t=e(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.ez,u]]}),t}()}}])}();
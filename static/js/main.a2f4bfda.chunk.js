(this["webpackJsonparound-the-world"]=this["webpackJsonparound-the-world"]||[]).push([[0],{33:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),c=a(12),i=a(11),s=a(3),h=a(0),l=a.n(h),o=a(7),d=a.n(o),u=a(8),j=a(15),b=(a(33),a(16)),f=a(23),O=a(53),p=a(52),m=a(50),C=a(54),g=a(51),x=a(55);function y(){var e=Object(j.a)(["\n\tflex: ",";\n"]);return y=function(){return e},e}function v(){var e=Object(j.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return v=function(){return e},e}function k(){var e=Object(j.a)([""]);return k=function(){return e},e}var w=b.a.div(k()),S=b.a.div(v()),N=b.a.div(y(),(function(e){return e.size})),E=new f.a("melee"),F=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).character=e.character,r.icon="./around-the-world/images/"+r.character+".png",r.state={completed:!1},r.handleClick=r.handleClick.bind(Object(u.a)(r)),r}return Object(r.a)(a,[{key:"handleClick",value:function(){this.setState((function(e){return{completed:!e.completed}}))}},{key:"render",value:function(){return Object(s.jsx)("img",{src:this.icon,alt:this.character,className:this.state.completed?"inactive":"",onClick:this.handleClick})}}]),a}(l.a.Component),T=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).myRef=l.a.createRef(),r.copyToClipboard=r.copyToClipboard.bind(Object(u.a)(r)),r}return Object(r.a)(a,[{key:"copyToClipboard",value:function(e){e.target.select(),document.execCommand("copy")}},{key:"render",value:function(){return Object(s.jsx)(O.a,{children:Object(s.jsx)(p.a,{target:this.myRef,trigger:"focus",delay:{show:200,hide:400},placement:"top",overlay:Object(s.jsx)(m.a,{id:"copied",children:"Copied!"}),children:Object(s.jsx)(C.a,{ref:this.myRef.current,className:"text-center character-input",style:{fontFamily:"Consolas"},plaintext:!0,readOnly:!0,defaultValue:this.props.value,onClick:this.copyToClipboard,placeholder:"Share"})})})}}]),a}(l.a.Component),R=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={characterOrder:[[0,"bowser"],[1,"captain-falcon"],[2,"donkey-kong"],[3,"dr-mario"],[4,"falco"],[5,"fox"],[6,"ganondorf"],[7,"ice-climbers"],[8,"jigglypuff"],[9,"kirby"],[10,"link"],[11,"luigi"],[12,"mario"],[13,"marth"],[14,"mewtwo"],[15,"mr-game-and-watch"],[16,"ness"],[17,"peach"],[18,"pichu"],[19,"pikachu"],[20,"roy"],[21,"samus"],[22,"sheik"],[23,"yoshi"],[24,"young-link"],[25,"zelda"]],characterElements:{1:[],2:[],3:[]},shareString:"",generated:!1,input:null},r.handleCharacterChange=r.handleCharacterChange.bind(Object(u.a)(r)),r.handleClick=r.handleClick.bind(Object(u.a)(r)),r.handleChange=r.handleChange.bind(Object(u.a)(r)),r}return Object(r.a)(a,[{key:"handleCharacterChange",value:function(e){this.setCharacterOrder(e,this.state.characterOrder);var t=E.encode(this.state.characterOrder.map((function(e){return e[0]}))),a={1:this.state.characterOrder.slice(0,9).map((function(e,t){return Object(s.jsx)(N,{children:Object(s.jsx)(F,{character:e[1]},e[1])})})),2:this.state.characterOrder.slice(9,18).map((function(e,t){return Object(s.jsx)(N,{children:Object(s.jsx)(F,{character:e[1]},e[1])})})),3:this.state.characterOrder.slice(18,this.state.characterOrder.length+1).map((function(e,t){return Object(s.jsx)(N,{children:Object(s.jsx)(F,{character:e[1]},e[1])})}))};this.setState({characterOrder:this.state.characterOrder,characterElements:a,shareString:t,generated:!0})}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleClick",value:function(e){this.handleCharacterChange(this.state.input?E.decode(this.state.input):this.shuffleCharacters(this.state.characterOrder))}},{key:"shuffleCharacters",value:function(e){for(var t=e.slice(0),a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t.map((function(e){return e[0]}))}},{key:"setCharacterOrder",value:function(e,t){t.sort((function(t,a){return e.indexOf(t[0])-e.indexOf(a[0])}))}},{key:"render",value:function(){return Object(s.jsxs)(g.a,{fluid:"sm",className:"text-center",children:[Object(s.jsx)(S,{children:Object(s.jsxs)(O.a,{className:"col-md-6 col-md-offset-3",children:[Object(s.jsx)(O.a.Prepend,{children:Object(s.jsx)(O.a.Text,{children:"Shared code"})}),Object(s.jsx)(C.a,{type:"text",onChange:this.handleChange}),Object(s.jsx)(O.a.Append,{children:Object(s.jsx)(x.a,{onClick:this.handleClick,variant:"outline-secondary",children:"Generate"})})]})}),Object(s.jsxs)(w,{className:"p-2",children:[Object(s.jsx)(S,{children:this.state.characterElements[1]}),Object(s.jsx)(S,{children:this.state.characterElements[2]}),Object(s.jsx)(S,{style:{marginLeft:15},children:this.state.characterElements[3]}),Object(s.jsx)(S,{className:"col-md-12",children:Object(s.jsx)(T,{className:"mx-auto",value:this.state.shareString})})]})]})}}]),a}(l.a.Component),P=(l.a.Component,R),A=(a(43),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))}),I=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"})}}]),a}(l.a.Component);d.a.render([Object(s.jsx)(I,{}),Object(s.jsx)(P,{})],document.getElementById("root")),A()}},[[44,1,2]]]);
//# sourceMappingURL=main.a2f4bfda.chunk.js.map
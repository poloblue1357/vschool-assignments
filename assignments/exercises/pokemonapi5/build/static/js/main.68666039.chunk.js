(this.webpackJsonppractice5=this.webpackJsonppractice5||[]).push([[0],{10:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(26),r=a.n(c),o=a(7),i=a(2),j=(a(10),a(0));var u=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("img",{className:"homeCards",src:"https://images.pokemontcg.io/dp3/3.png",alt:"charizard card"}),Object(j.jsx)("p",{className:"home",children:"Welcome to the Greatest Pokemon Fan Page!"}),Object(j.jsx)("p",{className:"home",children:"On this site we look at dope Pokemon cards and do awesome searches for our favorite Pokemon."}),Object(j.jsx)("p",{className:"home",children:" You can also take a quiz to find the best starting Pokemon for your journey!"}),Object(j.jsx)("p",{className:"home",children:"Enjoy your stay, and thanks for stopping by!"}),Object(j.jsx)("img",{className:"homeCards",src:"https://images.pokemontcg.io/base3/2.png",alt:"articuno card"})]})},b=a(9),l=a(8),m=a(3),h=n.a.createContext(),d=a(35);function p(e){var t=Object(s.useState)([]),a=Object(m.a)(t,2),n=a[0],c=a[1];return Object(s.useEffect)((function(){d.get("https://api.pokemontcg.io/v2/cards/").then((function(e){console.log(e.data),c(e.data.data)}))}),[]),Object(j.jsx)(h.Provider,{value:{arrayOfPokemon:n},children:e.children})}var O=function(e){var t,a=Object(s.useState)({name:""}),n=Object(m.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)({name:""}),u=Object(m.a)(i,2),d=u[0],p=u[1],O=Object(s.useState)(""),x=Object(m.a)(O,2),g=x[0],f=x[1],k=Object(s.useContext)(h),v={pathname:"/search/searchresult",state:{randomOrSearch:d}};return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("img",{className:"pokedexSearch",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3170168.jpg&f=1&nofb=1",alt:"pokedex"}),d.name&&Object(j.jsx)("img",{className:"searchCard",src:null===(t=d.images)||void 0===t?void 0:t.large,alt:"okay"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"searchLinkButton",children:[Object(j.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),function(){var e=k.arrayOfPokemon.find((function(e){return e.name.toLowerCase()===c.name.toLowerCase()}));if(void 0===e)return f("Pokemon not found.");f(""),p(e)}()},children:[Object(j.jsx)("input",{placeholder:"Pokemon Name",type:"text",name:"name",value:c.name.toLowerCase(),onChange:function(e){var t=e.target,a=t.name,s=t.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(b.a)({},a,s))}))}}),g.length>0&&Object(j.jsx)("p",{style:{color:"red"},children:g}),Object(j.jsx)("button",{children:"Search!"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.b,{className:"search",to:v,children:"Click For More Information On Your Result!"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){!function(){var e=Math.floor(250*Math.random());console.log(e);var t=k.arrayOfPokemon[e];p(t)}()},children:"Search for a Random Pokemon!"})]})]})},x=[{question:"What is your favorite day of the week?",options:[{answer:"Monday",points:1},{answer:"Wednesday",points:2},{answer:"Saturday",points:3},{answer:"Friday",points:4}],name:"days",id:"q1Ans"},{question:"What is your favorite time of year?",options:[{answer:"Winter",points:1},{answer:"Spring",points:2},{answer:"Summer",points:3},{answer:"Fall",points:4}],name:"seasons",id:"q2Ans"},{question:"What's your favorite color?",options:[{answer:"Orange",points:1},{answer:"Red",points:2},{answer:"Green",points:3},{answer:"Blue",points:4}],name:"colors",id:"q3Ans"},{question:"What's your favorite food?",options:[{answer:"Fried Chicken",points:1},{answer:"Cheeseburger",points:2},{answer:"Pizza",points:3},{answer:"Steak",points:4}],name:"foods",id:"q4Ans"},{question:"What's your favorite holiday?",options:[{answer:"Thanksgiving",points:1},{answer:"Independence Day",points:2},{answer:"Halloween",points:3},{answer:"Christmas",points:4}],name:"holidays",id:"q5Ans"}];var g=function(e){var t=Object(s.useState)(0),a=Object(m.a)(t,2),n=a[0],c=a[1];Object(s.useEffect)((function(){!function(){var t=parseInt(n);e.noteQuizAnswers(e.id,t)}()}),[n]);var r=e.options.map((function(t,a){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"answers",type:"radio",name:e.name,value:t.points},e.name+a),t.answer]})}));return Object(j.jsxs)("div",{className:"quiz",onChange:function(e){c(e.target.value)},children:[Object(j.jsx)("h4",{children:e.question},e.question),r]})};var f=function(e){var t=Object(i.f)(),a=Object(s.useState)({q1Ans:0,q2Ans:0,q3Ans:0,q4Ans:0,q5Ans:0}),n=Object(m.a)(a,2),c=n[0],r=n[1],o=function(e,t){r((function(a){return Object(l.a)(Object(l.a)({},a),{},Object(b.a)({},e,t))}))},u=Object(s.useState)(0),h=Object(m.a)(u,2),d=h[0],p=(h[1],x.map((function(e,t){return Object(j.jsx)(g,{noteQuizAnswers:o,id:e.id,question:e.question,options:e.options,name:e.name},e.question+t)}))),O=function(e){var a={};e>0&&e<6?(a.imageSrc="https://images.pokemontcg.io/dp4/3_hires.png",a.imageAlt="Darkrai"):e>5&&e<11?(a.imageSrc="https://images.pokemontcg.io/basep/1_hires.png",a.imageAlt="Pikachu"):e>10&&e<16?(a.imageSrc="https://images.pokemontcg.io/bw5/1_hires.png",a.imageAlt="Bulbasaur"):e>15&&(a.imageSrc="https://images.pokemontcg.io/sm75/1_hires.png",a.imageAlt="Charmander");var s={pathname:"/quiz/quizresult",state:a};t.push(s)};return Object(j.jsxs)("div",{className:"quiz",children:[Object(j.jsx)("h2",{children:"Which Starting Pokemon Is Best For You?"}),Object(j.jsx)("img",{className:"quizImages",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmspoweruser.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fpokemon-ash-and-pikachu.jpg&f=1&nofb=1",alt:"pokemon"}),Object(j.jsx)("p",{children:"Is Pikachu the best Pokemon for you? Will Charmander lead you to success?"}),Object(j.jsx)("p",{children:" Is Bulbasaur your Pokemon of choice?"}),Object(j.jsx)("p",{children:"Take our quiz below to find out your best starting Pokemon!"}),Object(j.jsx)("img",{className:"quizImages",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ld_O3q-uWr62dtc8_a4YNQHaEo%26pid%3DApi&f=1",alt:"quizpic1"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Pokemon Quiz: "}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(c.q1Ans+c.q2Ans+c.q3Ans+c.q4Ans+c.q5Ans),console.log(d)},className:"quiz",children:[p,Object(j.jsx)("hr",{}),Object(j.jsx)("button",{style:{margin:"10px",backgroundColor:"black",color:"orange",fontSize:"20px"},children:"Find Your Pokemon!"}),Object(j.jsx)("br",{})]})]})},k=a(29);var v=function(){var e=Object(s.useState)({feedback:""}),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([]),r=Object(m.a)(c,2),o=r[0],i=r[1];return Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("img",{className:"imageContact",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fpikachu-pokemon-portrait_bGVmZWyUmZqaraWkpJRnZWltrWdlaW0.jpg&f=1&nofb=1",alt:"pikachu"}),Object(j.jsx)("h4",{children:"Contact Information: "}),Object(j.jsx)("p",{children:"Address: 123 Anywhere Street, SLC, UT 84105"}),Object(j.jsx)("p",{children:"Email: greatpokemonpage@gmail.com"}),Object(j.jsx)("h4",{children:"Provide Feedback Below: "}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i((function(e){return[].concat(Object(k.a)(e),[a])}))},feedback:o,children:[Object(j.jsx)("input",{type:"text",className:"inputContact",name:"feedback",value:a.feedback,onChange:function(e){var t=e.target,a=t.name,s=t.value;n((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(b.a)({},a,s))}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{className:"imageContact",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F513-5136456_squirtle-pokemon-pokemon-squirtle-with-glasses-hd-png.png&f=1&nofb=1",alt:"squirtle"})]})};var w=Object(i.h)((function(){var e,t=Object(i.g)();return Object(j.jsxs)("div",{className:"searchResult",children:[Object(j.jsxs)("h3",{children:["Name: ",t.state.randomOrSearch.name]}),Object(j.jsxs)("h3",{children:["HP: ",t.state.randomOrSearch.hp]}),Object(j.jsxs)("h3",{children:["Types: ",t.state.randomOrSearch.types]}),Object(j.jsxs)("h3",{children:["Number: ",t.state.randomOrSearch.number]}),Object(j.jsx)("img",{src:null===(e=t.state.randomOrSearch.images)||void 0===e?void 0:e.large,alt:t.state.randomOrSearch.name,style:{height:"400px",width:"350px"}}),Object(j.jsx)("br",{}),Object(j.jsx)("hr",{})]})}));var q=Object(i.h)((function(){var e=Object(i.g)();return console.log(e),Object(j.jsxs)("div",{className:"quiz",children:[Object(j.jsx)("h2",{children:"Here is the best starting Pokemon for you! "}),Object(j.jsx)("img",{src:e.state.imageSrc,alt:e.state.imageAlt,style:{height:"400px",width:"350px"}})]})}));var y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("h3",{className:"titleHome",children:"Greatest Pokemon Fan Page!"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.b,{to:"/",className:"navbarLinks",children:"Home"}),Object(j.jsx)(o.b,{to:"/search",className:"navbarLinks",children:"Search"}),Object(j.jsx)(o.b,{to:"/quiz",className:"navbarLinks",children:"Quiz"}),Object(j.jsx)(o.b,{to:"/contact",className:"navbarLinks",children:"Contact"})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(u,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/search",children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/quiz",children:Object(j.jsx)(f,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/contact",children:Object(j.jsx)(v,{})}),Object(j.jsx)(i.a,{path:"/search/searchresult",children:Object(j.jsx)(w,{})}),Object(j.jsx)(i.a,{path:"/quiz/quizresult",children:Object(j.jsx)(q,{})})]})]})};r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(p,{children:Object(j.jsx)(y,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.68666039.chunk.js.map
(this["webpackJsonpchess-tournament-analyser"]=this["webpackJsonpchess-tournament-analyser"]||[]).push([[0],{39:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),i=t(28),s=t.n(i),u=(t(39),t(15)),o=t.n(u),l=t(29),j=t(5),b=t(12),p=t.n(b),d=t(3),f=t.n(d),m=t(33),g=t(9),x=t(8),O=t(6),h=t(7);function v(){var e=Object(O.a)(["\n  color: orange;\n  margin-top: 20px;\n"]);return v=function(){return e},e}function k(){var e=Object(O.a)(["\n  animation-name: ",";\n  animation-duration: 1000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-top: 20px;\n"]);return k=function(){return e},e}function w(){var e=Object(O.a)(['\n  font-family: "Fjalla One", sans-serif;\n  text-transform: uppercase;\n  border: none;\n  background-color: ',";\n  color: #eee;\n  font-size: 15px;\n  border-radius: 4px;\n  border-bottom: 3px solid #4f773b;\n  margin-top: 10px;\n  padding: 5px 10px;\n  outline: none;\n  cursor: pointer;\n"]);return w=function(){return e},e}function y(){var e=Object(O.a)(["\n  width: 90%;\n  border: none;\n  margin: 10px 0;\n  @media (max-width: 720px) {\n    width: 100%;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(O.a)(["\n  margin-top: 30px;\n  margin-bottom: 60px;\n"]);return S=function(){return e},e}function D(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 30px;\n"]);return D=function(){return e},e}function C(){var e=Object(O.a)(['\n  font-family: "Fjalla One", sans-serif;\n  text-transform: uppercase;\n']);return C=function(){return e},e}function M(){var e=Object(O.a)(['\n  font-family: "Fjalla One", sans-serif;\n  text-transform: uppercase;\n  font-size: 40px;\n  margin-bottom: 40px;\n']);return M=function(){return e},e}function F(){var e=Object(O.a)(["\n  margin-top: 70px;\n"]);return F=function(){return e},e}function E(){var e=Object(O.a)(["\n  text-align: center;\n  background-color: #444;\n  margin: 30px 0;\n  padding: 20px;\n"]);return E=function(){return e},e}function L(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  color: #eee;\n  background-color: #000;\n"]);return L=function(){return e},e}function R(){var e=Object(O.a)(["\n  from {\n      transform:rotate(0deg);\n  }\n  to {\n      transform:rotate(360deg);\n  }\n"]);return R=function(){return e},e}var T=Object(h.b)(R()),z="#6E9C47",B=h.a.main(L()),N=h.a.div(E()),P=h.a.div(F()),_=h.a.h1(M()),U=h.a.h2(C()),I=h.a.div(D()),J=h.a.section(S()),A=h.a.input(y()),G=h.a.button(w(),z),W=h.a.div(k(),T),q=h.a.div(v()),H=["Opening","Defense","Game","Accepted","Declined"],K=function(e){var n=e.map((function(e){return e.eco})),t=function(e){return e.map((function(e){return function(e,n){return n.reduce((function(e,n){return e.includes(n)?e.substring(0,e.indexOf(n)+n.length):e}),e)}(e.replace("https://www.chess.com/openings/","").replace("-"," "),H)}))}(f.a.compact(n));return function(e){return f.a.reduce(e,(function(e,n,t){return n>e.count?{opening:t,count:n}:e}),{opening:"",count:0})}(f.a.countBy(t))},Q=t(19),V=function(e){var n,t=e.match(/\[.*?]/gm).reduce((function(e,n){var t=n.replace(/[[\]"]/g,"").split(/ (.+)/);return e[t[0]]=t[1],e}),{});return Object(Q.a)(Object(Q.a)({},t),{},{Moves:(n=e,n.split(/\n\n/g)[1].split("  ").reduce((function(e,n){var t=n.split(" "),r=Object(j.a)(t,2),c=r[0],a=r[1];return e[c]=a,e}),{}))})},X=function(e){var n=e.icon;return Object(r.jsx)(g.a,{icon:n,color:z,style:{marginRight:"10px"}})},Y=function(e){var n=e.url;return Object(r.jsx)("a",{href:n,style:{marginLeft:"10px"},target:"_blank",rel:"noreferrer",children:Object(r.jsx)(g.a,{icon:x.b,style:{cursor:"pointer"}})})};var Z=function(){var e=Object(c.useState)(),n=Object(j.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(),s=Object(j.a)(i,2),u=s[0],b=s[1],d=Object(c.useState)(),O=Object(j.a)(d,2),h=O[0],v=O[1],k=Object(c.useState)(),w=Object(j.a)(k,2),y=w[0],S=w[1],D=Object(c.useState)(),C=Object(j.a)(D,2),M=C[0],F=C[1],E=Object(c.useState)(),L=Object(j.a)(E,2),R=L[0],T=L[1],z=Object(c.useState)(),H=Object(j.a)(z,2),Q=H[0],Z=H[1],$=Object(c.useState)(),ee=Object(j.a)($,2),ne=ee[0],te=ee[1],re=Object(c.useState)(),ce=Object(j.a)(re,2),ae=ce[0],ie=ce[1],se=Object(c.useState)(),ue=Object(j.a)(se,2),oe=ue[0],le=ue[1],je=function(){var e=Object(l.a)(o.a.mark((function e(n){var t,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),v(!0),b(!1),t=y.replace(/(.*\/)*/,""),e.prev=4,e.next=7,p.a.get("https://api.chess.com/pub/tournament/".concat(t));case 7:return r=e.sent,e.next=10,p.a.get(r.data.rounds[0]);case 10:if(!(c=e.sent).data.games){e.next=15;break}a(c.data),e.next=23;break;case 15:if(!c.data.groups){e.next=22;break}return e.next=18,p.a.get(c.data.groups[0]);case 18:i=e.sent,a(i.data),e.next=23;break;case 22:throw new Error;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(4),b(!0);case 28:return e.prev=28,v(!1),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[4,25,28,31]])})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(t){var e=K(t.games);F(e);var n=(s=t.games).reduce((function(e,n){var t="win"===n.white.result?n.white.rating:"win"===n.black.result?n.black.rating:null;if(!t)return e;var r="win"===n.white.result?n.black.rating:"win"===n.black.result?n.white.rating:null,c="win"===e.white.result?e.white.rating:"win"===e.black.result?e.black.rating:null;return r-t>("win"===e.white.result?e.black.rating:"win"===e.black.result?e.white.rating:null)-c?n:e}),s[0]);T(n);var r=function(e){var n=e.find((function(e){return f.a.get(e,"is_winner")?e.is_winner:1===e.place_finish}));return n?n.username:""}(t.players);Z(r);var c=function(e){var n=e.reduce((function(e,n){return e[n.black.result]+=1,e[n.white.result]+=1,e}),{draw:0,win:0,timeout:0,resigned:0,checkmated:0});return f.a.pick(n,["checkmated","timeout","resigned"])}(t.games);te(c);var a=function(e){return e.reduce((function(e,n){var t=V(n.pgn.replace(/\{\[%clk[\s\S]+?(?= |\n)/gim,"").replace(/ 1\x2D0/gim,"").replace(/ 0\x2D1/gim,"").replace(/ 1\/2\x2D1\/2/gim,"")),r=V(e.pgn.replace(/\{\[%clk[\s\S]+?(?= |\n)/gim,"").replace(/ 1\x2D0/gim,"").replace(/ 0\x2D1/gim,"").replace(/ 1\/2\x2D1\/2/gim,"")),c=f.a.replace(f.a.last(Object.keys(t.Moves)),/\./g,""),a=f.a.replace(f.a.last(Object.keys(r.Moves)),/\./g,"");return Number(c)>Number(a)?n:e}),e[0])}(t.games);ie(a);var i=function(e){return e.reduce((function(e,n){var t=V(n.pgn.replace(/\{\[%clk[\s\S]+?(?= |\n)/gim,"").replace(/ 1\x2D0/gim,"").replace(/ 0\x2D1/gim,"").replace(/ 1\/2\x2D1\/2/gim,"")),r=V(e.pgn.replace(/\{\[%clk[\s\S]+?(?= |\n)/gim,"").replace(/ 1\x2D0/gim,"").replace(/ 0\x2D1/gim,"").replace(/ 1\/2\x2D1\/2/gim,"")),c=f.a.replace(f.a.last(Object.keys(t.Moves)),/\./g,""),a=f.a.replace(f.a.last(Object.keys(r.Moves)),/\./g,"");return Number(c)<Number(a)?n:e}),e[0])}(t.games);le(i)}var s}),[t]),Object(r.jsx)(B,{children:Object(r.jsxs)(N,{children:[Object(r.jsx)(_,{children:"Chess.com Tournament Stats"}),Object(r.jsx)(U,{children:"Enter a tournament URL:"}),Object(r.jsxs)("form",{onSubmit:je,children:[Object(r.jsx)(A,{onChange:function(e){return S(e.target.value)}}),Object(r.jsx)(G,{type:"submit",children:"See Stats"})]}),u?Object(r.jsx)(q,{children:"Sorry, no data could be found for that tournament. Please double-check the tournament URL you entered."}):h?Object(r.jsx)(W,{children:Object(r.jsx)(g.a,{icon:x.e,color:"rgba(255,255,255,0.3)"})}):t?Object(r.jsxs)(P,{children:[Q&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.g}),Object(r.jsx)(U,{children:"Winner"})]}),Object(r.jsx)("p",{children:Q})]}),f.a.get(M,"count")>0&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.a}),Object(r.jsx)(U,{children:"Most Common Opening"})]}),Object(r.jsxs)("p",{children:[M.opening," - played ",M.count," ","times"]})]}),ne&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.c}),Object(r.jsx)(U,{children:"Result Types"})]}),Object(r.jsx)("div",{style:{width:200,margin:"auto"},children:Object(r.jsx)(m.PieChart,{label:function(e){var n=e.dataEntry;return"".concat(n.title,": ").concat(n.value)},labelStyle:{fontSize:"5px"},data:[{title:"Checkmated",value:ne.checkmated,color:"rgba(255,255,255,0.5)"},{title:"Timeout",value:ne.timeout,color:"rgba(255,255,255,0.2)"},{title:"Resigned",value:ne.resigned,color:"rgba(255,255,255,0.3)"}]})})]}),R&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.f}),Object(r.jsx)(U,{children:"Biggest Upset"})]}),Object(r.jsxs)("p",{children:[R.white.username," (",R.white.rating,") vs"," ",R.black.username," (",R.black.rating,")",Object(r.jsx)(Y,{url:R.url})]})]}),ae&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.h}),Object(r.jsx)(U,{children:"Marathon"})]}),Object(r.jsxs)("p",{children:[ae.white.username," vs"," ",ae.black.username," had the most moves!",Object(r.jsx)(Y,{url:ae.url})]})]}),oe&&Object(r.jsxs)(J,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{icon:x.d}),Object(r.jsx)(U,{children:"Sprint"})]}),Object(r.jsxs)("p",{children:[oe.white.username," vs"," ",oe.black.username," had the fewest moves!",Object(r.jsx)(Y,{url:oe.url})]})]})]}):null]})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root")),$()}},[[63,1,2]]]);
//# sourceMappingURL=main.31f59367.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Ur6u:function(E,h,r){E.exports={pre:"pre___3fTUI",clone:"clone___kSjhS"}},paSq:function(E,h,r){"use strict";r.r(h);var p=r("jrin"),B=r("fWQN"),U=r("mtLc"),W=r("yKVA"),H=r("879j"),O=r("qqnG"),i=r("k1fw"),M=r("tJVT"),P=r("q1tI"),V=r.n(P),S=r("i8i4"),ae=r.n(S),N=r("xk4V"),b=r.n(N),g=r("vOnD"),f=r("ngQI"),F=r("Ur6u"),$=r.n(F),t=r("nKUr"),ie=r.n(t),I,C,y,R,A,T,L,J=function(e,a,n){var o=Array.from(e),s=o.splice(a,1),l=Object(M.a)(s,1),_=l[0];return o.splice(n,0,_),o},Q=function(e,a,n,o){var s=Array.from(e),l=Array.from(a),_=s[n.index];return l.splice(o.index,0,Object(i.a)(Object(i.a)({},_),{},{id:b()()})),l},Z=function(e,a,n,o){var s=Array.from(e),l=Array.from(a),_=s.splice(n.index,1),d=Object(M.a)(_,1),c=d[0];l.splice(o.index,0,c);var u={};return u[n.droppableId]=s,u[o.droppableId]=l,u},de=8,z=g.a.div(I||(I=Object(O.a)([`
  margin-right: 200px;
`]))),x=function(e){var a={display:"flex",userSelect:"none",padding:"0.5rem",margin:"0 0 0.5rem 0",alignItems:"flex-start",alignContent:"flex-start",lineHeight:1.5,borderRadius:"3px",background:"#fff",border:"1px ".concat(e.isDragging?"dashed #000":"solid #ddd")};return Object(t.jsx)("div",Object(i.a)(Object(i.a)({ref:e.innerRef},e),{},{style:Object.assign(a,e.style),className:e.className,children:e.children}))},se=Object(g.a)(x)(C||(C=Object(O.a)([`
  + div {
    background: #ccc;
    display: none !important;
  }
`]))),G=function(e){var a={display:"flex",userSelect:"none",padding:"0.5rem",margin:"0 0 0.5rem 0",alignItems:"flex-start",alignContent:"flex-start",lineHeight:1.5,borderRadius:"3px",background:"#fff",border:"1px ".concat(e.isDragging?"dashed #000":"solid #ddd")};return Object(t.jsx)("div",Object(i.a)(Object(i.a)({ref:e.innerRef},e),{},{style:Object.assign(a,e.style)}))},k=g.a.div(y||(y=Object(O.a)([`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
`]))),X=function(e){var a={border:"1px ".concat(function(n){return n.isDraggingOver?"dashed #000":"solid #ddd"}),background:"#fff",padding:"0.5rem 0.5rem 0",borderRadius:"3px",flex:"0 0 150px",fontFamily:"sans-serif"};return Object(t.jsx)("div",Object(i.a)(Object(i.a)({ref:e.innerRef},e),{},{style:Object.assign(a,e.style)}))},Y=function(e){var a={border:"1px ".concat(function(n){return n.isDraggingOver?"dashed #000":"solid #ddd"}),background:"#fff",padding:"0.5rem 0.5rem 0",borderRadius:"3px",flex:"0 0 150px",fontFamily:"sans-serif",position:"absolute",top:0,right:0,bottom:0,width:"200px"};return Object(t.jsx)("div",Object(i.a)(Object(i.a)({ref:e.innerRef},e),{},{style:Object.assign(a,e.style),className:"Kiosk",children:e.children}))},le=Object(g.a)(X)(R||(R=Object(O.a)([`
  margin: 0.5rem 0.5rem 1.5rem;
`]))),w=function(e){var a={border:"1px ".concat(function(n){return n.isDraggingOver?"dashed #000":"solid #ddd"}),background:"#fff",padding:"0.5rem 0.5rem 0",borderRadius:"3px",flex:"0 0 150px",fontFamily:"sans-serif",margin:"0.5rem 0.5rem 1.5rem"};return Object(t.jsx)("div",Object(i.a)(Object(i.a)({ref:e.innerRef},e),{},{style:Object.assign(a,e.style),children:e.children}))},q=g.a.div(A||(A=Object(O.a)([`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`]))),ee=g.a.button(T||(T=Object(O.a)([`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  color: #000;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`]))),ne=g.a.div(L||(L=Object(O.a)([`
  margin: 0 1rem;
`]))),K=[{id:b()(),content:"Headline"},{id:b()(),content:"Copy"},{id:b()(),content:"Image"},{id:b()(),content:"Slideshow"},{id:b()(),content:"Quote"}],te=function(m){Object(W.a)(a,m);var e=Object(H.a)(a);function a(){var n;Object(B.a)(this,a);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return n=e.call.apply(e,[this].concat(s)),n.state=Object(p.a)({},b()(),[]),n.onDragEnd=function(_){var d=_.source,c=_.destination;if(!!c)switch(d.droppableId){case c.droppableId:n.setState(Object(p.a)({},c.droppableId,J(n.state[d.droppableId],d.index,c.index)));break;case"ITEMS":n.setState(Object(p.a)({},c.droppableId,Q(K,n.state[c.droppableId],d,c)));break;default:n.setState(Z(n.state[d.droppableId],n.state[c.droppableId],d,c));break}},n.addList=function(_){n.setState(Object(p.a)({},b()(),[]))},n}return Object(U.a)(a,[{key:"render",value:function(){var o=this;return Object(t.jsxs)(f.a,{onDragEnd:this.onDragEnd,children:[Object(t.jsx)(f.c,{droppableId:"ITEMS",isDropDisabled:!0,children:function(l,_){return Object(t.jsx)(Y,{innerRef:l.innerRef,isDraggingOver:_.isDraggingOver,children:K.map(function(d,c){return Object(t.jsx)(f.b,{draggableId:d.id,index:c,children:function(j,D){return Object(t.jsxs)(V.a.Fragment,{children:[Object(t.jsx)(x,Object(i.a)(Object(i.a)(Object(i.a)({innerRef:j.innerRef},j.draggableProps),j.dragHandleProps),{},{isDragging:D.isDragging,style:j.draggableProps.style,children:d.content})),D.isDragging&&Object(t.jsx)(G,{className:$.a.clone,children:d.content})]})}},d.id)})})}}),Object(t.jsxs)(z,{children:[Object(t.jsxs)(ee,{onClick:this.addList,children:[Object(t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(t.jsx)("path",{fill:"currentColor",d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"})}),Object(t.jsx)(ne,{children:"Add List"})]}),Object.keys(this.state).map(function(s,l){return Object(t.jsx)(f.c,{droppableId:s,children:function(d,c){return Object(t.jsxs)(w,{innerRef:d.innerRef,isDraggingOver:c.isDraggingOver,children:[o.state[s].length?o.state[s].map(function(u,j){return Object(t.jsx)(f.b,{draggableId:u.id,index:j,children:function(v,re){return Object(t.jsxs)(x,Object(i.a)(Object(i.a)({innerRef:v.innerRef},v.draggableProps),{},{isDragging:re.isDragging,style:v.draggableProps.style,children:[Object(t.jsx)(k,Object(i.a)(Object(i.a)({},v.dragHandleProps),{},{children:Object(t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(t.jsx)("path",{fill:"currentColor",d:"M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"})})})),u.content]}))}},u.id)}):!d.placeholder&&Object(t.jsx)(q,{children:"Drop items here"}),d.placeholder]})}},s)})]})]})}}]),a}(P.Component);h.default=te}}]);

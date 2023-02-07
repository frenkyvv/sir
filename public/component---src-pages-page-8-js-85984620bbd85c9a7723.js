"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[863],{8873:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a,l=n(1880),r=n(4578),i=n(7294),o=n(2788),c=n(1667),d=n(5101),s=n(4854),m=n(9875),u=n(1945),h=n(9755),p=n.n(h),b=n(7326),Z=n(1444);var E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={sodio:"",potasio:"",glucosa:"",urea:""},n.handleChange=n.handleChange.bind((0,b.Z)(n)),n.handleSubmit=n.handleSubmit.bind((0,b.Z)(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){const t=e.target,n=t.value,a=t.name,l=t.name,r=t.name,i=t.name;this.setState({[a]:n,[l]:n,[r]:n,[i]:n})},n.handleSubmit=function(e){const t=this.state.sodio,n=this.state.potasio,a=this.state.glucosa/18+this.state.urea/6+2*n+2*t;document.querySelector("#resu").textContent=""+a.toFixed(1),p()("#etiquetas").hide(),p()("#botondes").hide(),e.preventDefault()},n.render=function(){return i.createElement(Z.Z,null,i.createElement("div",{id:"etiquetas"},i.createElement(Z.Z.Group,{className:"mb-3",controlId:"sodioInput"},i.createElement(Z.Z.Label,null,"Sodio:"),i.createElement(Z.Z.Control,{name:"sodio",onChange:this.handleChange,value:this.state.sodio,type:"number"})),i.createElement(Z.Z.Group,{className:"mb-3",controlId:"glucosaInput"},i.createElement(Z.Z.Label,null,"Glucosa:"),i.createElement(Z.Z.Control,{name:"glucosa",value:this.state.glucosa,onChange:this.handleChange,type:"number"})),i.createElement(Z.Z.Group,{className:"mb-3",controlId:"potasioInput"},i.createElement(Z.Z.Label,null,"Potasio:"),i.createElement(Z.Z.Control,{name:"potasio",type:"number",value:this.state.potasio,onChange:this.handleChange})),i.createElement(Z.Z.Group,{className:"mb-3",controlId:"ureaInput"},i.createElement(Z.Z.Label,null,"Urea:"),i.createElement(Z.Z.Control,{name:"urea",type:"number",value:this.state.urea,onChange:this.handleChange}))),i.createElement(v,null,i.createElement("div",{id:"botondes"},i.createElement(u.Z,{variant:"primary",onClick:this.handleSubmit},"Submit")),i.createElement("div",{id:"resu"})))},t}(i.Component);const v=o.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));var f,g,C,y,x;var P=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={nombre:"",edad:""},n.handleChange=n.handleChange.bind((0,b.Z)(n)),n.handleSubmit=n.handleSubmit.bind((0,b.Z)(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){const t=e.target,n=t.value,a=t.name,l=t.name;this.setState({[a]:n,[l]:n})},n.handleSubmit=function(e){const t=this.state.nombre,n=this.state.edad/18+2*t;document.querySelector("#resultado").textContent=""+n.toFixed(1),p()("#boton").hide(),p()("#botonesdes").hide(),p()("#textoPrevio").show(),e.preventDefault()},n.render=function(){return i.createElement(S,null,i.createElement(Z.Z,{onSubmit:this.handleSubmit},i.createElement("div",{id:"boton"},i.createElement(Z.Z.Group,{className:"mb-3",controlId:"formBasicEmail"},i.createElement(k,null,i.createElement("div",{id:"labels"},i.createElement(Z.Z.Label,null,"Sodio: "))),i.createElement(Z.Z.Control,{name:"nombre",type:"number",value:this.state.name,onChange:this.handleChange})),i.createElement(Z.Z.Group,{className:"mb-3",controlId:"formBasicPassword"},i.createElement(k,null,i.createElement("div",{id:"labels"},i.createElement(Z.Z.Label,null,"Glucosa: "))),i.createElement(Z.Z.Control,{name:"edad",type:"number",value:this.state.edad,onChange:this.handleChange}))),i.createElement(j,null,i.createElement("div",{id:"botonesdes"},i.createElement(u.Z,{variant:"primary",type:"submit",value:"Submit"},"Submit")),i.createElement(w,null,i.createElement("div",{id:"textoPrevio"},"La Osmolaridad es de: ")),i.createElement(I,null,i.createElement("div",{id:"resultado"})))))},t}(i.Component);const k=o.ZP.div(f||(f=(0,l.Z)(["\n  #labels {\n    color: black;\n  }\n"]))),S=o.ZP.div(g||(g=(0,l.Z)([""]))),w=o.ZP.div(C||(C=(0,l.Z)(["\n  #textoPrevio {\n    color: black;\n    display: none;\n  }\n"]))),I=o.ZP.div(y||(y=(0,l.Z)(["\n  #resultado {\n    text-align: center;\n    color: black;\n  }\n"]))),j=o.ZP.div(x||(x=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));var G,L,N,H,M,q,_,B,D;let F=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.clickHombre=function(e){p()("#escoger").hide(),p()("#formHom").show()},n.clickMujer=function(e){p()("#escoger").hide(),p()("#formMuj").show()},n.render=function(){return i.createElement(c.Z,null,i.createElement(z,null,i.createElement(A,null,i.createElement(d.Z,{title:"Deficit de Agua"}),i.createElement(U,null,i.createElement(J,null,"Osmolaridad"),i.createElement(K,null,"Formula para calcular la Osmolaridad"),i.createElement("div",{id:"escoger"},i.createElement(Q,null,i.createElement(u.Z,{variant:"primary",onClick:this.clickHombre,id:"botHom"},"Plasmatica"),i.createElement(u.Z,{variant:"primary",onClick:this.clickMujer,id:"botMujer"},"Especifica"))),i.createElement(T,{id:"formHom"},i.createElement(E,null)),i.createElement(V,{id:"formMuj"},i.createElement(P,null)))),i.createElement(R,null,i.createElement(s.Link,{to:"/"},i.createElement(m.Z,{text:"Back"})))))},t}(i.Component);var O=F;const z=o.ZP.div(G||(G=(0,l.Z)(["\n  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);\n"]))),A=o.ZP.div(L||(L=(0,l.Z)(["\n  width: 100%;\n  height: 600px;\n"]))),U=o.ZP.div(N||(N=(0,l.Z)(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),J=o.ZP.h1(H||(H=(0,l.Z)(["\n  font-weight: bold;\n  font-size: 30px;\n"]))),K=o.ZP.p(M||(M=(0,l.Z)(["\n  font-size: 13px;\n  line-height: 130%;\n  margin-top: 10px;\n  border-top: 2px solid black;\n"]))),Q=o.ZP.div(q||(q=(0,l.Z)(["\n  max-width: 300px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n"]))),R=o.ZP.div(_||(_=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 50px;\n"]))),T=o.ZP.div(B||(B=(0,l.Z)(["\n  display: none;\n"]))),V=o.ZP.div(D||(D=(0,l.Z)(["\n  display: none;\n"])))}}]);
//# sourceMappingURL=component---src-pages-page-8-js-85984620bbd85c9a7723.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/banner.aa76c6ef.png"},31:function(e,t,a){e.exports=a.p+"static/media/banner-mobile.8042c89c.png"},32:function(e,t,a){e.exports=a.p+"static/media/404.fa0b832c.png"},33:function(e,t,a){e.exports=a(78)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),i=a.n(r),c=(a(39),a(20)),l=a(82),o=a(83),m=a(80),u=a(81),d="@todolist-Token",p="@todolist-User",h="@todolist-Id",f=function(){return null!==localStorage.getItem(d)&&null!==localStorage.getItem(p)&&null!==localStorage.getItem(h)},g=function(){return localStorage.getItem(h)},v=function(e,t,a){localStorage.setItem(d,e),localStorage.setItem(p,t),localStorage.setItem(h,a)},E=function(){localStorage.removeItem(d),localStorage.removeItem(p),localStorage.removeItem(h)},b=(a(40),a(41),a(4)),k=a(5),_=a(7),C=a(6),O=a(8),N=(a(42),a(79)),j=a(84),S=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleClick=function(){a.setState({open:!a.state.open})},a.handleClickLogout=function(e){E(),a.props.history.push("/")},a.handleClickBox=function(e){a.headerBox.current.classList.toggle("active")},a.headerBox=s.a.createRef(),a.state={open:!1},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=["Sobre","Produtos","Contato"].map(function(e,t){return s.a.createElement("li",{key:t,className:"menu__list-item"},s.a.createElement(N.a,{to:e,title:e},e))});return s.a.createElement("div",{className:this.state.open?"menu open":"menu"},s.a.createElement("button",{className:"menu__hamburguer",onClick:this.handleClick},s.a.createElement("span",null,s.a.createElement("i",null),s.a.createElement("i",null),s.a.createElement("i",null)),"Menu"),s.a.createElement("nav",null,s.a.createElement("ul",{className:"menu__list"},e)),f()?s.a.createElement("div",{className:"menu__session"},s.a.createElement("div",{onClick:this.handleClickBox,className:"menu__user"},s.a.createElement("p",null,localStorage.getItem(p)),s.a.createElement("span",null)),s.a.createElement("div",{ref:this.headerBox,className:"menu__box"},s.a.createElement("button",{onClick:this.handleClickLogout},"Logout"))):"")}}]),t}(n.Component),w=Object(j.a)(S),x=function(){return s.a.createElement("header",{className:"main-header"},s.a.createElement("div",{className:"main-header__container"},s.a.createElement("h1",{className:"main-header__title"},s.a.createElement(N.a,{to:"/",title:"CorpInc."},"CorpInc.")),s.a.createElement(w,null)))},y=a(2),M=a.n(y),I=a(12),L=a(15),q=(a(48),a(29)),A=a.n(q).a.create({baseURL:"https://pacific-inlet-35392.herokuapp.com/"});A.interceptors.request.use(function(){var e=Object(I.a)(M.a.mark(function e(t){var a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem(d))&&(t.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var F=A,R=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(L.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),a.validateField()},a.validateField=function(){var e=a.state.formMessage,t=/^[a-zA-Z ]{2,30}$/.test(a.state.name),n=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(a.state.email),s=a.state.password.length>=6;e=t?n?s?"":"A senha est\xe1 muito curta.":"Campo email inv\xe1lido.":"Campo nome inv\xe1lido.",a.setState({formMessage:e},a.registerUser)},a.registerUser=Object(I.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.formMessage){e.next=13;break}return e.prev=1,e.next=4,F.post("/auth/local/register",{username:a.state.name,email:a.state.email,password:a.state.password});case 4:a.setState({formMessage:"Usu\xe1rio cadastrado com sucesso."},a.showMessage(function(){a.buttonLogin.current.click()})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),a.setState({formMessage:"Erro ao cadastrar"},a.showMessage);case 11:e.next=14;break;case 13:a.showMessage();case 14:case"end":return e.stop()}},e,null,[[1,7]])})),a.showMessage=function(e){var t=a.messageSignup.current;t.classList.add("active"),setTimeout(function(){t.classList.remove("active"),e&&e()},2e3)},a.buttonLogin=s.a.createRef(),a.messageSignup=s.a.createRef(),a.state={name:"",email:"",password:"",formMessage:""},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"signup"},s.a.createElement("header",null,s.a.createElement("h3",null,"Criar uma conta"),s.a.createElement("button",{ref:this.buttonLogin,"data-to":"1",onClick:this.props.onClick},"Acessar")),s.a.createElement("form",{className:"form-signup",onSubmit:this.handleSubmit,method:"post"},s.a.createElement("div",{className:"form-signup__item"},s.a.createElement("label",{htmlFor:""},"Nome"),s.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),s.a.createElement("div",{className:"form-signup__item"},s.a.createElement("label",{htmlFor:""},"E-mail"),s.a.createElement("input",{type:"email",name:"email",onChange:this.handleChange})),s.a.createElement("div",{className:"form-signup__item"},s.a.createElement("label",{htmlFor:""},"Senha"),s.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange})),s.a.createElement("input",{className:"form-signup__submit",type:"submit",name:"Cadastrar",value:"Cadastrar"})),s.a.createElement("p",{ref:this.messageSignup,className:"form-signup__message"},this.state.formMessage))}}]),t}(n.Component),T=Object(j.a)(R),U=(a(68),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(L.a)({},t,n))},a.validateField=function(){var e=a.state.formMessage,t=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(a.state.email),n=a.state.password.length>=6;e=t?n?"":"A senha est\xe1 muito curta.":"Campo email inv\xe1lido.",a.setState({formMessage:e},a.signinUser)},a.handleSubmit=function(e){e.preventDefault(),a.validateField()},a.signinUser=Object(I.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.formMessage){e.next=15;break}return e.prev=1,e.next=4,F.post("/auth/local/",{identifier:a.state.email,password:a.state.password});case 4:t=e.sent,v(t.data.jwt,t.data.user.username,t.data.user._id),a.props.history.push("/tasks"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a.setState({formMessage:"Erro ao autenticar. Confira os dados digitados."},a.showMessage);case 13:e.next=16;break;case 15:a.showMessage();case 16:case"end":return e.stop()}},e,null,[[1,9]])})),a.showMessage=function(){var e=a.messageSignin.current;e.classList.add("active"),setTimeout(function(){e.classList.remove("active")},2e3)},a.messageSignin=s.a.createRef(),a.state={email:"",password:"",formMessage:""},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"signin"},s.a.createElement("header",null,s.a.createElement("h3",null,"Acessar conta"),s.a.createElement("button",{"data-to":"0",onClick:this.props.onClick},"Cadastrar")),s.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit,method:"post"},s.a.createElement("div",{className:"form-signin__item"},s.a.createElement("label",{htmlFor:""},"E-mail"),s.a.createElement("input",{type:"email",name:"email",onChange:this.handleChange})),s.a.createElement("div",{className:"form-signin__item"},s.a.createElement("label",{htmlFor:""},"Senha"),s.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange})),s.a.createElement("input",{className:"form-signin__submit",type:"submit",name:"Acessar",value:"Acessar"}),s.a.createElement("p",{ref:this.messageSignin,className:"form-signin__message"},this.state.formMessage)))}}]),t}(n.Component)),D=Object(j.a)(U),$=(a(69),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleClick=function(e){var t=parseInt(e.target.getAttribute("data-to")),n=a.sliderList.current,s=a.sliderListItem.current.offsetWidth*t;n.style.transform="translateX(-".concat(s,"px)")},a.sliderList=s.a.createRef(),a.sliderListItem=s.a.createRef(),a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children.map(function(t,a){return s.a.createElement("li",{key:a,ref:e.sliderListItem,className:"slider__list-item"},s.a.createElement(t.type,{onClick:e.handleClick}))});return s.a.createElement("div",{className:"slider"},s.a.createElement("ul",{ref:this.sliderList,className:"slider__list"},t))}}]),t}(n.Component)),B=function(){return s.a.createElement("main",{className:"home"},s.a.createElement(x,null),s.a.createElement("section",{className:"home__card"},s.a.createElement("div",{className:"home__card-image"},s.a.createElement("h2",null,s.a.createElement("strong",null,"Venha conhecer"),s.a.createElement("br",null),"nossa aplica\xe7\xe3o!")),s.a.createElement($,null,s.a.createElement(T,null),s.a.createElement(D,null))))},V=(a(70),a(71),a(30)),z=a.n(V),J=a(31),H=a.n(J),K=function(){return s.a.createElement("section",{className:"banner"},s.a.createElement("picture",null,s.a.createElement("source",{media:"(max-width: 767px)",srcSet:H.a,title:"CorpoInc.",alt:"CorpoInc."}),s.a.createElement("img",{src:z.a,title:"CorpoInc.",alt:"CorpoInc."})))},P=(a(72),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleChangeCheck=function(){a.setState({formAccept:!a.state.formAccept})},a.maskValue=function(e){var t=e.target.value.replace(/\D/g,"");t=(t=(t=(t=(t/100).toFixed(2)+"").replace(".",",")).replace(/(\d)(\d{3})(\d{3}),/g,"$1.$2.$3,")).replace(/(\d)(\d{3}),/g,"$1.$2,"),e.target.value=t,a.setState({value:t})},a.handleValueChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(L.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),a.validateField()},a.validateField=function(){var e=a.state.formMessage,t=parseInt(a.state.value)>0,n=a.state.observation.length<=300;e=t?n?"":"A observa\xe7\xe3o deve ter no m\xe1ximo 300 caract\xe9res.":"O valor deve ser maior que zero.",a.setState({formMessage:e},a.registerTask)},a.registerTask=Object(I.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.formMessage){e.next=14;break}return e.prev=1,e.next=4,F.post("/tasks",{valor:a.formatNumber(a.state.value),observacao:a.state.observation,user:g()});case 4:a.setState({formMessage:"Tarefa cadastrada com sucesso."},a.showMessage),a.props.formSubmited(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),a.setState({formMessage:"Erro ao cadastrar tarefa"},a.showMessage);case 12:e.next=15;break;case 14:a.showMessage();case 15:case"end":return e.stop()}},e,null,[[1,8]])})),a.formatNumber=function(e){return parseFloat(e.replace(/\./g,"").replace(",","."))},a.showMessage=function(){var e=a.messageList.current;e.classList.add("active"),setTimeout(function(){e.classList.remove("active")},2e3)},a.messageList=s.a.createRef(),a.state={value:"",observation:"",formMessage:"",formAccept:!1},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"form-list",method:"post",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-list__entry"},s.a.createElement("div",{className:"form-list__entry-item"},s.a.createElement("label",{htmlFor:""},"Valor"),s.a.createElement("div",null,s.a.createElement("span",null,"R$"),s.a.createElement("input",{type:"text",name:"value",onKeyUp:this.maskValue}))),s.a.createElement("div",{className:"form-list__entry-item"},s.a.createElement("label",{htmlFor:""},"Observa\xe7\xe3o"),s.a.createElement("textarea",{rows:"5",name:"observation",onChange:this.handleValueChange}))),s.a.createElement("div",{className:"form-list__send"},s.a.createElement("div",{className:"form-list__checkbox"},s.a.createElement("input",{type:"checkbox",id:"check-terms",name:"",onChange:this.handleChangeCheck}),s.a.createElement("label",{htmlFor:"check-terms"})),s.a.createElement("label",{htmlFor:"check-terms"},"Aceito os termos ",s.a.createElement(N.a,{to:"/Termos",title:"descritos"},"descritos")),s.a.createElement("input",{disabled:!this.state.formAccept,className:"form-list__submit",type:"submit",name:"Adicionar",value:"Adicionar"})),s.a.createElement("p",{ref:this.messageList,className:"form-list__message"},this.state.formMessage))}}]),t}(n.Component)),W=(a(73),function(e){function t(){return Object(b.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.tasks.map(function(e,t){return s.a.createElement("li",{key:t,className:"list__item"},s.a.createElement("p",null,e.valor.toLocaleString("pt-BR")),s.a.createElement(N.a,{to:"/tasks/".concat(e.id)},"Detalhes"))});return s.a.createElement("div",null,s.a.createElement("h3",{className:"list__title"},"Itens"),s.a.createElement("ul",{className:"list "+(this.props.tasks.length>6?"scroll":"")},e),s.a.createElement("p",{className:"list__message "+(0===this.props.tasks.length?"active":"")},"Nenhum item cadastrado"))}}]),t}(n.Component)),X=(a(74),function(){return s.a.createElement("footer",null,s.a.createElement("p",null,"\xa9 CorpInc. \xe9 uma marca registrada"))}),Z=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).formSubmited=function(){a.loadTasks()},a.loadTasks=Object(I.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/tasks?user=".concat(g()));case 2:t=e.sent,a.setState({tasks:t.data});case 4:case"end":return e.stop()}},e)})),a.state={tasks:[]},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.loadTasks()}},{key:"render",value:function(){return s.a.createElement("main",{className:"admin"},s.a.createElement(x,null),s.a.createElement(K,null),s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"admin__description--mobile"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada."),s.a.createElement(P,{formSubmited:this.formSubmited}),s.a.createElement("p",{className:"admin__description--desktop"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada."),s.a.createElement(W,{tasks:this.state.tasks})),s.a.createElement(X,null))}}]),t}(n.Component),G=(a(75),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).state={task:[]},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(M.a.mark(function e(){var t,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,F.get("/tasks/".concat(t));case 3:a=e.sent,this.setState({task:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.task;return s.a.createElement("main",null,s.a.createElement(x,null),s.a.createElement(K,null),s.a.createElement("div",{className:"container"},s.a.createElement("article",{className:"task",key:e.id},s.a.createElement("h2",{className:"task__title"},e.valor),s.a.createElement("p",{className:"task__description"},e.observacao))))}}]),t}(n.Component)),Q=(a(76),a(32)),Y=a.n(Q),ee=function(){return s.a.createElement("main",{className:"not-found"},s.a.createElement("div",{className:"not-found__card"},s.a.createElement("img",{src:Y.a,title:"Erro 404",alt:"Erro 404"}),s.a.createElement("h2",null,s.a.createElement("strong",null,"Ops!")," Ocorreu um erro."),s.a.createElement("p",null,"N\xe3o conseguimos encontrar a p\xe1gina acessada"),s.a.createElement(N.a,{to:"/"},"Voltar a Home")))},te=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return s.a.createElement(m.a,Object.assign({},a,{render:function(e){return f()?s.a.createElement(t,e):s.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ae=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return s.a.createElement(m.a,Object.assign({},a,{render:function(e){return f()?s.a.createElement(u.a,{to:"/tasks"}):s.a.createElement(t,e)}}))},ne=function(){return s.a.createElement(l.a,null,s.a.createElement(o.a,null,s.a.createElement(ae,{exact:!0,path:"/",component:B}),s.a.createElement(te,{exact:!0,path:"/tasks",component:Z}),s.a.createElement(te,{path:"/tasks/:id",component:G}),s.a.createElement(m.a,{path:"*",component:ee})))},se=(a(77),function(){return s.a.createElement(ne,null)});i.a.render(s.a.createElement(se,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f8fe81e4.chunk.js.map
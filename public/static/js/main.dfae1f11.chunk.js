(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.535e7fa8.png"},25:function(e,t,a){e.exports=a.p+"static/media/photo-banner.7d1ac7f5.png"},26:function(e,t,a){e.exports=a.p+"static/media/contact-img.abeee720.png"},27:function(e,t,a){e.exports=a(82)},32:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/Icon awesome-facebook-square (2).789cbc49.svg"},72:function(e,t,a){e.exports=a.p+"static/media/Icon awesome-instagram.30aa613f.svg"},73:function(e,t,a){e.exports=a.p+"static/media/Icon awesome-linkedin.ed892fc7.svg"},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),o=(a(32),a(1)),s=a.n(o),i=a(3),m=a(2),u=a(4),d=a.n(u);a(51);a(52);var f=function(){return c.a.createElement("section",{className:"CallToBlog"},c.a.createElement("div",{className:"CallToBlog-container"},c.a.createElement("h2",null,"Visite agora nosso blog!"),c.a.createElement("p",null,"Aprenda mais sobre lorem ipsum dolor sit amet, consectetur adipiscing"),c.a.createElement("a",{href:"https://aquajr.wixsite.com/aquajr/blog",target:"_blank",name:"Visitar o blog"},"Visitar blog")))},v=(a(11),a(12),a(7)),E=a.n(v);a(68);var p=function(e){return c.a.createElement("div",{className:"Service"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e.img,alt:"Imagem que representa "+e.title})),c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.text))},g=(a(69),[]);function b(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}function h(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}var N={dots:!0,infinite:!1,initialSlide:0,arrows:!0,slidesToShow:1,slidesToScroll:1,speed:500,centerMode:!0,focusOnSelect:!0,centerPadding:"20%",autoplay:!1,autoplaySpeed:3e3,pauseOnHover:!1,appendDots:function(e){return c.a.createElement("div",null,c.a.createElement(h,{className:"slick-prev",onClick:function(){document.querySelector(".ExpertiseArea .slick-prev.slick-arrow").click()}}),c.a.createElement("ul",{className:"dot-container"}," ",e," "),c.a.createElement(b,{className:"slick-next",onClick:function(){document.querySelector(".ExpertiseArea .slick-next.slick-arrow").click()}}))},nextArrow:c.a.createElement(b,null),prevArrow:c.a.createElement(h,null),responsive:[{breakpoint:1024,settings:{infinite:!1,centerPadding:"0"}}]};var k=function(){var e=c.a.useState([]),t=Object(m.a)(e,2),a=t[0],n=t[1],r=c.a.useState([]),l=Object(m.a)(r,2),o=l[0],u=l[1],f=c.a.useState(""),v=Object(m.a)(f,2),b=v[0],h=v[1],k=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/areas");case 2:t=e.sent,(g=t.data)&&(h(t.data[0].Category),a=[],g.forEach((function(e){a.includes(e.Category)||a.push(e.Category)})),n(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c.a.useEffect((function(){k()}),[]);var y=function(e){h(e.target.innerText)};return c.a.useEffect((function(){var e=g.filter((function(e){return e.Category===b}));u(e)}),[b]),c.a.createElement("section",{className:"ExpertiseArea",id:"ExpertiseArea"},c.a.createElement("h2",null,"\xc1reas de atua\xe7\xe3o"),c.a.createElement("div",{className:"categories"},a.map((function(e,t){return e===b?c.a.createElement("button",{key:t,onClick:y,className:"selected"},e):c.a.createElement("button",{key:t,onClick:y},e)}))),c.a.createElement("div",{className:"services"},c.a.createElement(E.a,Object.assign({},N,{className:"Slider"}),o.map((function(e,t){return c.a.createElement(p,{key:t,img:e.image.url,title:e.Title,text:e.Text})})))))};a(70);var y=function(){var e,t,r,l,o,u,f=Object(n.useState)([]),v=Object(m.a)(f,2),E=v[0],p=v[1],g=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/footers");case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),c.a.createElement("div",{className:"Footer"},c.a.createElement("div",{className:"TopLine"},c.a.createElement("div",{className:"TopOne"},c.a.createElement("div",{className:"Adress"},c.a.createElement("h2",null,"Endere\xe7o"),c.a.createElement("p",null,null===(e=E[0])||void 0===e?void 0:e.Address)),c.a.createElement("div",{className:"Phone"},c.a.createElement("h2",null,"Telefone"),c.a.createElement("p",null,null===(t=E[0])||void 0===t?void 0:t.Phone))),c.a.createElement("div",{className:"TopTwo"},c.a.createElement("div",{className:"E-mail"},c.a.createElement("h2",null,"E-mail"),c.a.createElement("p",null,null===(r=E[0])||void 0===r?void 0:r.Email)),c.a.createElement("div",{className:"SocialMedia"},c.a.createElement("a",{href:null===(l=E[0])||void 0===l?void 0:l.Facebook},c.a.createElement("img",{src:a(71),alt:"facebook logo"})),c.a.createElement("a",{href:null===(o=E[0])||void 0===o?void 0:o.Instagram},c.a.createElement("img",{src:a(72),alt:"instagram logo"})),c.a.createElement("a",{href:null===(u=E[0])||void 0===u?void 0:u.LinkedIn},c.a.createElement("img",{src:a(73),alt:"linkedin logo"}))))),c.a.createElement("div",{className:"BottomLine"},c.a.createElement("div",{className:"CITiRights"},c.a.createElement("p",null,"\xa9 2020 CITi-Todos os direitos reservados")),c.a.createElement("div",{className:"MadeWith"},c.a.createElement("p",null,"Made with ",c.a.createElement("strong",null,"< / >")," and ",c.a.createElement("strong",null,"\u2665")," by CITi "))))};a(74),a(75);var w=function(e){return c.a.createElement("div",{className:"PostToBlogElement"},c.a.createElement("a",{href:e.link},c.a.createElement("div",{className:"ElementImage"},c.a.createElement("img",{src:e.image.url,alt:"Ilustra\xe7\xe3o do elemento"})),c.a.createElement("div",{className:"category"},c.a.createElement("p",null,e.category.toUpperCase())),c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,e.title))))};function S(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}function x(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}var O=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/posttoblog");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);var o={arrows:!0,dots:!0,infinite:!1,speed:500,arrow:!0,slidesToShow:3,slidesToScroll:1,appendDots:function(e){return c.a.createElement("div",null,c.a.createElement(x,{className:"slick-prev",onClick:function(){document.querySelector(".slick-prev.slick-arrow").click()}}),c.a.createElement("ul",null,e),c.a.createElement(S,{className:"slick-next",onClick:function(){document.querySelector(".slick-next.slick-arrow").click()}}))},nextArrow:c.a.createElement(S,null),prevArrow:c.a.createElement(x,null),responsive:[{breakpoint:1025,settings:{slidesToShow:1,centerMode:!0,centerPadding:"-80px"}}]};return c.a.createElement("main",{className:"PostToBlogSlick"},c.a.createElement("div",{className:"PostToBlogCard"},c.a.createElement(E.a,Object.assign({},o,{className:"Slider"}),a.map((function(e,t){return c.a.createElement(w,{title:e.title,category:e.category,image:e.image,link:e.link,key:t})})))))};a(76);var j=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,d.a.post("https://aqua-jr.herokuapp.com/api/newsletter",{email:a});case 4:r(""),document.querySelector(".Body-Newsletter input").value="",document.querySelector(".Body-Newsletter button").innerHTML="Obrigado!",document.querySelector(".Body-Newsletter button").disabled=!0,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"gradient"},c.a.createElement("div",{className:"Body-Newsletter"},c.a.createElement("div",{className:"Text-Newsletter"},c.a.createElement("h3",null,"Inscreva-se j\xe1 na nossa newsletter!"),c.a.createElement("p",null,"Por ela voc\xea ir\xe1 receber conte\xfado exclusivo e ter\xe1 a possibilidade de receber descontos em nossos servi\xe7os!")),c.a.createElement("form",{className:"Form-Newsletter",method:"post",action:"https://aqua-jr.herokuapp.com/Newsletter",onSubmit:l},c.a.createElement("input",{name:"email",type:"email",onChange:function(e){return r(e.target.value)},placeholder:"E-mail",value:a}),c.a.createElement("button",{name:"Inscrever-se",type:"submit"}," ",c.a.createElement("p",null,"Inscrever-se")))))};a(77);var C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/testimony");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function o(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}function u(e){return c.a.createElement("div",{className:e.className,onClick:e.onClick})}Object(n.useEffect)((function(){l()}),[]);var f={infinite:!1,focusOnSelect:!0,speed:500,initialSlide:0,centerPadding:"33%",arrows:!0,slideToShow:3,slideToScroll:1,dots:!0,centerMode:!0,responsive:[{breakpoint:1025,settings:{slideToShow:1,slideToScroll:1,centerMode:!1}}],appendDots:function(e){return c.a.createElement("div",{style:{borderRadius:"10px",padding:"0px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15vw"}},c.a.createElement(u,{className:"slick-prev",onClick:function(){document.querySelector(".Slide-Testimony .slick-prev.slick-arrow").click()}}),c.a.createElement("ul",{style:{margin:"0px"}}," ",e," "),c.a.createElement(o,{className:"slick-next",onClick:function(){document.querySelector(".Slide-Testimony .slick-next.slick-arrow").click()}}))}};return document.querySelector(".slick-prev.slick-arrow")&&document.querySelector(".slick-prev.slick-arrow").click(),c.a.createElement("div",{className:"color"},c.a.createElement("div",{className:"background-Testimony",id:"testimony"},c.a.createElement("div",{className:"Body-Testimony"},c.a.createElement("div",{className:"Head-Testimony"},c.a.createElement("h2",null,"Depoimentos"),c.a.createElement("p",null,"Nos conhe\xe7a por nossos parceiros")),c.a.createElement(E.a,Object.assign({className:"Slide-Testimony"},f),null===a||void 0===a?void 0:a.map((function(e){var t=e._id,a=e.text,n=e.image,r=e.name,l=e.occupation;return c.a.createElement("div",{key:t,className:"Card-body",style:{display:"flex"}},c.a.createElement("div",{className:"content"},c.a.createElement("img",{src:null===n||void 0===n?void 0:n.url,alt:"Imagem de Exemplo"}),c.a.createElement("div",{className:"Testimony"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"name",id:"name"},c.a.createElement("p",{className:"name-name"},r),c.a.createElement("p",{className:"ocupattion"},l))))}))))))};a(78);var T=function(){var e,t,a,r=Object(n.useState)([]),l=Object(m.a)(r,2),o=l[0],u=l[1],f=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/aboutus");case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){f()}),[]);var v=Object(n.useState)([]),E=Object(m.a)(v,2),p=E[0],g=E[1],b=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/values");case 2:t=e.sent,g(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),c.a.createElement("div",{className:"aboutUsSection",id:"about-us"},c.a.createElement("div",{className:"aboutUsImages"},c.a.createElement("img",{className:"image2",src:null===(e=o[0])||void 0===e?void 0:e.image2.url,alt:"Ilusta\xe7\xe3o Sobre N\xf3s"}),c.a.createElement("img",{className:"image1",src:null===(t=o[0])||void 0===t?void 0:t.image1.url,alt:"Ilusta\xe7\xe3o Sobre N\xf3s"})),c.a.createElement("div",{className:"aboutUsRight"},c.a.createElement("div",{className:"aboutUsText"},c.a.createElement("h2",{className:"about-us-title"},"Sobre n\xf3s"),c.a.createElement("p",null,null===(a=o[0])||void 0===a?void 0:a.text)),c.a.createElement("div",{className:"values"},c.a.createElement("div",{className:"valuesTitle"},c.a.createElement("h2",null,"Nossos valores")),c.a.createElement("div",{className:"valuesInfoBlock"},null===p||void 0===p?void 0:p.map((function(e){var t=e._id,a=e.title,n=e.image;return c.a.createElement("div",{key:t,className:"valuesInfo"},c.a.createElement("img",{src:null===n||void 0===n?void 0:n.url,alt:"Ilustra\xe7\xe3o valores"}),c.a.createElement("h3",null,a))}))))))},q=a(24),I=a.n(q);a(79);function A(e){if(e.preventDefault(),document.querySelector(".Navbar .side-menu").classList.toggle("active"),document.querySelector(".sandwich").classList.toggle("active"),""!==e.target.innerText){var t,a=e.target.href.split("#");t="banner"===(a=a[1])?document.querySelector("#"+a).offsetTop-window.pageYOffset:"about-us"===a?document.querySelector(".aboutUsRight").offsetTop-window.pageYOffset:document.querySelector("#"+a+" h2").offsetTop-window.pageYOffset,t-=document.querySelector(".Navbar").clientHeight,window.scrollBy(0,t)}}document.addEventListener("scroll",(function(){var e=document.getElementById("ExpertiseArea").offsetTop-document.querySelector(".Navbar").clientHeight-200,t=document.getElementById("about-us").offsetTop-document.querySelector(".Navbar").clientHeight-200,a=document.getElementById("testimony").offsetTop-document.querySelector(".Navbar").clientHeight-200,n=document.getElementById("contact").offsetTop-document.querySelector(".Navbar").clientHeight-200;window.pageYOffset>=50?document.querySelector(".Navbar").classList.add("active"):document.querySelector(".Navbar").classList.remove("active"),window.pageYOffset<=e?(document.querySelectorAll(".links a").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href='#banner']").forEach((function(e){e.classList.add("active")}))):window.pageYOffset<=t?(document.querySelectorAll(".links a").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href='#ExpertiseArea']").forEach((function(e){e.classList.add("active")}))):window.pageYOffset<=a?(document.querySelectorAll(".links a").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href='#about-us']").forEach((function(e){e.classList.add("active")}))):window.pageYOffset<=n?(document.querySelectorAll(".links a").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href='#testimony']").forEach((function(e){e.classList.add("active")}))):(document.querySelectorAll(".links a").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href='#contact']").forEach((function(e){e.classList.add("active")})))}));var B=function(){return c.a.createElement("div",{className:"nav-placeholder"},c.a.createElement("nav",{className:"Navbar"},c.a.createElement("img",{src:I.a,alt:"Aqua jr logo"}),c.a.createElement("div",{className:"web-only"},c.a.createElement("div",{className:"links"},c.a.createElement("a",{className:"active",href:"#banner",onClick:A},"In\xedcio"),c.a.createElement("a",{href:"#ExpertiseArea",onClick:A},"\xc1reas de atua\xe7\xe3o"),c.a.createElement("a",{href:"#about-us",onClick:A},"Sobre n\xf3s"),c.a.createElement("a",{href:"#testimony",onClick:A},"Depoimentos"),c.a.createElement("a",{href:"#contact",onClick:A},"Contato")),c.a.createElement("a",{className:"blog-button",href:"https://aquajr.wixsite.com/aquajr/blog",target:"_blank",rel:"noopener noreferrer"},"Blog")),c.a.createElement("button",{className:"sandwich",name:"navbar-menu",onClick:A},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("aside",{className:"side-menu"},c.a.createElement("div",{className:"side-menu-container"},c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"#banner",onClick:A},"In\xedcio"),c.a.createElement("a",{href:"#ExpertiseArea",onClick:A},"\xc1reas de atua\xe7\xe3o"),c.a.createElement("a",{href:"#about-us",onClick:A},"Sobre n\xf3s"),c.a.createElement("a",{href:"#testimony",onClick:A},"Depoimentos"),c.a.createElement("a",{href:"#contact",onClick:A},"Contato")),c.a.createElement("a",{className:"blog-button",href:"https://aquajr.wixsite.com/aquajr/blog",target:"_blank",rel:"noopener noreferrer"},"Blog")))))},L=(a(80),a(25)),P=a.n(L);var D=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://aqua-jr.herokuapp.com/api/banners");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),c.a.createElement("div",{className:"Body-Banner",id:"banner"},null===a||void 0===a?void 0:a.map((function(e){var t=e._id,a=e.title,n=e.text;return c.a.createElement("div",{key:t,className:"Banner-content"},c.a.createElement("div",{className:"Banner-texts-button"},c.a.createElement("h4",null,a),c.a.createElement("p",null,n),c.a.createElement("button",{name:"Entre em contato"}," ",c.a.createElement("a",{href:"#contact"},"Entre em contato conosco ")," ")),c.a.createElement("div",{className:"Banner-image"},c.a.createElement("img",{src:P.a,alt:""})))})))},M=a(6),F=(a(81),a(26)),H=a.n(F);var Y=function(){var e=Object(n.useState)({name:"",email:"",about:"",menssage:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,d.a.post("https://aqua-jr.herokuapp.com/api/sendmail",a);case 4:r({name:"",email:"",about:"",menssage:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Body-contact",id:"contact"},c.a.createElement("div",{className:"forms-text"},c.a.createElement("h2",null,"Contato"),c.a.createElement("p",null,"Fale conosco lorem ipsum dolor"),c.a.createElement("form",{className:"form-contact",onSubmit:l},c.a.createElement("div",{className:"name"},c.a.createElement("label",{htmlFor:""},"Nome"),c.a.createElement("input",{type:"text",name:"name",id:"",onChange:function(e){return r(Object(M.a)(Object(M.a)({},a),{},{name:e.target.value}))}})),c.a.createElement("div",{className:"email"},c.a.createElement("label",{htmlFor:""},"Email"),c.a.createElement("input",{type:"email",name:"email",id:"",onChange:function(e){return r(Object(M.a)(Object(M.a)({},a),{},{email:e.target.value}))}})),c.a.createElement("div",{className:"assunto"},c.a.createElement("label",{htmlFor:""},"Assunto"),c.a.createElement("input",{type:"text",name:"assunto",id:"",onChange:function(e){return r(Object(M.a)(Object(M.a)({},a),{},{about:e.target.value}))}})),c.a.createElement("div",{className:"mensagem"},c.a.createElement("label",{htmlFor:""},"Mensagem"),c.a.createElement("textarea",{name:"mensagem",id:"mensagem",cols:"30",rows:"5",onChange:function(e){return r(Object(M.a)(Object(M.a)({},a),{},{menssage:e.target.value}))}})),c.a.createElement("button",{type:"submit"},"Enviar mensagem"))),c.a.createElement("div",{className:"Contact-image"},c.a.createElement("img",{src:H.a,alt:"Imagem de um homem usando um microsc\xf3pio"})))};function U(){return c.a.createElement("section",{className:"app"},c.a.createElement("meta",{name:"Description",content:"One page Aqua Jr."}),c.a.createElement(B,null),c.a.createElement(D,null),c.a.createElement("div",{className:"PostToBlog"},c.a.createElement(O,null)),c.a.createElement(k,null),c.a.createElement(j,null),c.a.createElement(T,null),c.a.createElement(C,null),c.a.createElement(f,null),c.a.createElement(Y,null),c.a.createElement(y,null))}l.a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.dfae1f11.chunk.js.map
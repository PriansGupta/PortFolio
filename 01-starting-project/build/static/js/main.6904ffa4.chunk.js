(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(6),n=t.n(a),s=t(10),i=(t(20),t(1)),o=t.n(i),r=t(2),l=t(3),d=t(4),j=(t(21),t(7)),m=(t(22),t(23),t(0)),b=function(e){var c=function(e){return Object(m.jsx)("div",{className:"backdrop ".concat(e.display?"openBd":"closeBd"),onClick:e.onClose})},t=function(e){return Object(m.jsx)(l.Fragment,{children:Object(m.jsxs)("div",{className:"Thnx modal ".concat("entering"===e.display?"openMd":"exiting"===e.display?"closeMd":null),children:[Object(m.jsx)("span",{className:"close_bt",onClick:e.onClose,children:Object(m.jsx)("ion-icon",{name:"close"})}),Object(m.jsx)("div",{className:"Indi_thnx",style:{border:"solid 3.5px ".concat(e.color)},children:Object(m.jsx)("span",{className:"check_icon",style:{color:"".concat(e.color)},children:Object(m.jsx)("ion-icon",{name:e.icon})})}),Object(m.jsx)("div",{className:"Msg",children:e.text})]})})};return Object(m.jsxs)(o.a.Fragment,{children:[n.a.createPortal(Object(m.jsx)(c,{color:e.color,icon:e.icon,text:e.text,onClose:e.onClose,display:e.display}),document.getElementById("backdrop-root")),n.a.createPortal(Object(m.jsx)(t,{color:e.color,icon:e.icon,text:e.text,onClose:e.onClose,display:e.display}),document.getElementById("overlay-root"))]})},u=function(e){var c=window.location.pathname,t=Object(i.useState)(1),a=Object(d.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(!1),u=Object(d.a)(r,2),h=u[0],x=u[1],p=Object(i.useState)(!1),O=Object(d.a)(p,2),g=O[0],f=O[1],N=function(){"/Home"!==c&&"/"!==c||f(!1)},v=function(){setTimeout((function(){"/Home"!==c&&"/"!==c||f(!0)}),100),o(4)};return Object(i.useEffect)((function(){e.scrollDet<320&&o(1)}),[e.scrollDet]),Object(i.useEffect)((function(){e.scrollDet>320&&e.scrollDet<1e3&&o(2)}),[e.scrollDet]),Object(i.useEffect)((function(){e.scrollDet>1e3&&e.scrollDet<1600&&o(3)}),[e.scrollDet]),Object(i.useEffect)((function(){e.scrollDet>1600&&o(-1)}),[e.scrollDet]),Object(m.jsxs)(l.Fragment,{children:[Object(m.jsx)(j.a,{in:g,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(m.jsx)(b,{color:"grey",icon:"ribbon",text:"Projects will be listed Soon.",onClose:N,display:e})}}),Object(m.jsxs)("div",{className:"navigation_container ".concat(h?"shrink":""),children:[Object(m.jsx)("div",{className:"open_close_bt ".concat(h?"shrink_bt":""),onClick:function(){x(!h),e.shift(h)},children:Object(m.jsx)("span",{className:"icon_slider",children:Object(m.jsx)("ion-icon",{name:"chevron-".concat(h?"back":"forward","-outline")})})}),Object(m.jsx)("div",{className:"menu_options ".concat(h?"shrink_options":""," ").concat("/Home"===c||"/"===c?"HomePageMenu":"KnowMoreMenu"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("a",{href:"#home",children:Object(m.jsxs)("li",{className:"".concat(1===n?"active":""),children:[Object(m.jsx)("span",{className:"icon_name ".concat(1===n?"active":""),onClick:function(){o(1)},children:Object(m.jsx)("ion-icon",{name:"".concat("/Home"===c||"/"===c?"home":"medal")})}),"".concat("/Home"===c||"/"===c?"Home":"Qualifications")]})}),Object(m.jsx)("a",{href:"#skills",children:Object(m.jsxs)("li",{className:"".concat(2===n?"active":""),children:[Object(m.jsx)("span",{className:"icon_name",onClick:function(){o(2)},children:Object(m.jsx)("ion-icon",{name:"".concat("/Home"===c||"/"===c?"hand-left":"ribbon")})}),"".concat("/Home"===c||"/"===c?"Skills":"Badges")]})}),Object(m.jsx)("a",{href:"#about",children:Object(m.jsxs)("li",{className:"".concat(3===n?"active":""),children:[Object(m.jsx)("span",{className:"icon_name",onClick:function(){o(3)},children:Object(m.jsx)("ion-icon",{name:"".concat("/Home"===c||"/"===c?"information-circle":"medal")})}),"".concat("/Home"===c||"/"===c?"About":"Achievements")]})}),"/Home"===c||"/"===c?Object(m.jsxs)("li",{className:"".concat(4===n?"active":""),children:[Object(m.jsx)("span",{className:"icon_name",onClick:v,children:Object(m.jsx)("ion-icon",{name:"apps"})}),"Projects"]}):Object(m.jsx)(s.b,{to:"/Home",children:Object(m.jsxs)("li",{className:"".concat(4===n?"active":""),children:[Object(m.jsx)("span",{className:"icon_name",onClick:v,children:Object(m.jsx)("ion-icon",{name:"arrow-back"})}),"Back"]})})]})})]})]})},h=(t(14),function(e){return Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("a",{href:"#home",className:"dec",children:Object(m.jsxs)("div",{className:"logo_container display ".concat(e.scrollDet>99?"shift":""),children:[Object(m.jsx)("div",{className:"circle"}),Object(m.jsxs)("div",{className:"name",children:[Object(m.jsx)("h1",{className:"logo_name",children:"PRI"}),Object(m.jsx)("div",{className:"triangle"}),Object(m.jsx)("h1",{className:"logo_name",children:"NS_"})]})]})})})}),x=function(e){return Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("a",{href:"#home",className:"dec",children:Object(m.jsxs)("div",{className:"logo_container displayPhone ".concat(e.slide?"Slide":""),children:[Object(m.jsx)("div",{className:"circle"}),Object(m.jsxs)("div",{className:"name",children:[Object(m.jsx)("h1",{className:"logo_name",children:"PRI"}),Object(m.jsx)("div",{className:"triangle"}),Object(m.jsx)("h1",{className:"logo_name",children:"NS_"})]})]})})})},p=function(e){var c=Object(i.useState)(!0),t=Object(d.a)(c,2),a=t[0],n=t[1];return Object(m.jsx)(i.Fragment,{children:Object(m.jsxs)("header",{className:"Header ".concat(e.scrollDet>99?"heightDec":""," ").concat(e.HeaderDown?"down":""),children:[Object(m.jsx)(h,{scrollDet:e.scrollDet}),Object(m.jsx)(x,{slide:a}),Object(m.jsx)(u,{scrollDet:e.scrollDet,shift:function(e){n(e)}})]})})},O=(t(25),t(9)),g=function(){return Object(m.jsx)(l.Fragment,{children:Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)(O.a,{scale:1.2,transitionSpeed:2500,children:Object(m.jsx)("span",{className:"icon_1",children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/priyansh-gupta-5039241a0/",className:"link",children:Object(m.jsx)("ion-icon",{name:"logo-linkedin"})})})}),Object(m.jsx)(O.a,{scale:1.2,transitionSpeed:2500,children:Object(m.jsx)("span",{className:"icon_2",children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/PriansGupta",className:"link",children:Object(m.jsx)("ion-icon",{name:"logo-github"})})})}),Object(m.jsx)(O.a,{scale:1.2,transitionSpeed:2500,children:Object(m.jsx)("span",{className:"icon_3",children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/_prians_gupta/",className:"link",children:Object(m.jsx)("ion-icon",{name:"logo-instagram"})})})})]})})},f=(t(27),t(15)),N=t.n(f),v=function(){return Object(m.jsx)(i.Fragment,{children:Object(m.jsx)("div",{className:"Main_page",children:Object(m.jsxs)("div",{className:"Intro",children:[Object(m.jsx)("h1",{className:"line_1",children:Object(m.jsx)(N.a,{text:["I'm Priyansh"],typingDelay:500,speed:100,eraseSpeed:300,eraseDelay:1e3,cursor:"_"})}),Object(m.jsx)("h3",{className:"line_2",children:"Full Stack Webdeveloper"}),Object(m.jsx)("p",{className:"line_3",children:"UI/UX , Interactive Interface"}),Object(m.jsx)("p",{className:"line_4",children:"and Responsive design......"})]})})})},_=t(16),y=t(8),I=t.n(y),k=(t(28),function(){return Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("div",{className:"method_holder",children:[{name:"mail",method:"Email",address:"priyanshg615@gmail.com",id:2},{name:"location",method:"Location",address:"Kanpur,Uttar Pradesh-208002",id:3}].map((function(e){return Object(m.jsxs)("div",{className:"method",children:[Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("ion-icon",{name:e.name})}),Object(m.jsx)("div",{className:"details_cnt",children:Object(m.jsx)("p",{className:"address",children:e.address})})]},e.id)}))})})}),S=function(e){var c=Object(i.useState)(""),t=Object(d.a)(c,2),a=t[0],n=t[1],s=Object(i.useState)(!1),o=Object(d.a)(s,2),r=o[0],l=o[1],j=e(a);return{value:a,hasError:!j&&r,ValueChangeHandler:function(e){n(e.target.value)},InputBlurHandler:function(){l(!0)},isValid:j,reset:function(){n(""),l(!1)}}},w=(t(29),function(e){return""!==e.trim()}),C=function(e){return e.includes("@")},D=function(){var e=Object(i.useState)(!1),c=Object(d.a)(e,2),t=c[0],a=c[1],n=Object(i.useState)(null),s=Object(d.a)(n,2),o=s[0],r=s[1],u=function(){a(!1)},h=S(w),x=h.value,p=h.hasError,O=h.ValueChangeHandler,g=h.InputBlurHandler,f=h.isValid,N=h.reset,v=S(C),y=v.value,D=v.hasError,B=v.ValueChangeHandler,E=v.InputBlurHandler,F=v.isValid,H=v.reset,M=S(w),P=M.value,J=M.hasError,R=M.ValueChangeHandler,A=M.InputBlurHandler,T=M.isValid,L=M.reset,U=[{Name:x,Email:y,Message:P}],V=!1;return f&&F&&T&&(V=!0),Object(m.jsxs)(l.Fragment,{children:[Object(m.jsx)(j.a,{in:t,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(m.jsx)(b,{color:"".concat(o?"red":"green"),icon:"".concat(o?"alert-circle":"shield-checkmark"),text:"".concat(o?"Something went wrong":"Message Sent!"),onClose:u,display:e})}}),Object(m.jsxs)("div",{className:"contact_me_container",children:[Object(m.jsx)("h1",{className:"contact_me_heading",children:"Contact_Me_"}),Object(m.jsxs)("div",{className:"data_container",children:[Object(m.jsx)("p",{className:"CreditsPhone",children:"Created by Priyansh Gupta"}),Object(m.jsx)("div",{className:"contact_methods",children:Object(m.jsx)(k,{})}),Object(m.jsxs)("form",{className:"contact_details",onSubmit:function(e){var c;e.preventDefault(),N(),H(),L(),setTimeout((function(){a(!0)}),100),c=U,setTimeout((function(){var e={method:"POST",body:JSON.stringify(c)};fetch("https://database-65427-default-rtdb.firebaseio.com/data.json",e).then(function(){var e=Object(_.a)(I.a.mark((function e(c){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.ok||r(!0);case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()).catch((function(e){r(!0)}))}),1e3)},children:[Object(m.jsxs)("div",{className:"name_email",children:[Object(m.jsx)("input",{type:"text",required:!0,className:"name_ip ".concat(p?"error":"noError"),placeholder:"NAME",onChange:O,value:x,onBlur:g}),Object(m.jsx)("input",{type:"email",required:!0,className:"email_ip ".concat(D?"error":"noError"),placeholder:"abc@xyyz",onChange:B,value:y,onBlur:E})]}),Object(m.jsx)("div",{style:{width:"90%"},children:Object(m.jsx)("input",{type:"text",required:!0,className:"message ".concat(J?"error":"noError"),placeholder:"MESSAGE",onChange:R,value:P,onBlur:A})}),Object(m.jsx)("button",{type:"submit",disabled:!V,className:"submit",children:"Send"})]})]})]})]})},B=(t(30),function(){return Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("div",{className:"credits",children:Object(m.jsx)("h3",{className:"end",children:"Created by Priyansh_Gupta_"})})})}),E=t.p+"static/media/Priyansh_Gupta.1e5f9311.pdf",F=t.p+"static/media/User_Prians.7c34bdbd.png",H=(t(31),function(){var e=Object(i.useState)(!1),c=Object(d.a)(e,2),t=c[0],a=c[1];return Object(m.jsx)(l.Fragment,{children:Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{className:"round",src:F,alt:"user"}),Object(m.jsx)("h3",{children:"Priyansh Gupta"}),Object(m.jsx)("strong",{children:"3rd Year B.Tech HBTU"}),Object(m.jsx)("h6",{children:"Kanpur, Uttar Pradesh"}),Object(m.jsx)("p",{className:"intro_me",children:'"I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role...."'}),Object(m.jsx)("a",{href:E,download:!0,children:Object(m.jsxs)("div",{className:"know_more ".concat(t?"over":""),onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1)},children:[Object(m.jsx)("span",{className:"side_arrow",children:Object(m.jsx)("ion-icon",{name:"cloud-download-outline"})}),Object(m.jsx)("p",{children:"Resume"})]})})]})})}),M=(t(32),function(){return Object(m.jsx)(i.Fragment,{children:Object(m.jsx)("span",{className:"arrowup",children:Object(m.jsx)("a",{href:"#home",children:Object(m.jsx)("ion-icon",{name:"chevron-up"})})})})}),P=(t(33),function(){return Object(m.jsx)(i.Fragment,{children:Object(m.jsx)("span",{className:"chat",children:Object(m.jsx)("a",{href:"#contact",children:Object(m.jsx)("ion-icon",{name:"chatbubble-ellipses"})})})})}),J=(t(34),t.p+"static/media/html.7b050054.png"),R=t.p+"static/media/react.a2ab6c4d.png",A=t.p+"static/media/javascript.a10d3785.png",T=t.p+"static/media/css3.d5935ac6.png",L=t.p+"static/media/c.c417f91d.png",U=t.p+"static/media/java.a6c04d79.png",V=t.p+"static/media/Adobe.866afe70.png",G=t.p+"static/media/jsx.53e3659b.png",W=t.p+"static/media/mui.9482fda5.png",X=t.p+"static/media/redux.b3b939c6.png",q=t.p+"static/media/router.59eb6c21.png",Y=t.p+"static/media/node.e71346fe.png",K=t.p+"static/media/express.04e4743f.png",z=t.p+"static/media/mongo.95ebe78c.png",Q=function(e){var c,t=Object(i.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1];"html"===e.ImgName?c=J:"css"===e.ImgName?c=T:"javascript"===e.ImgName?c=A:"react"===e.ImgName?c=R:"c"===e.ImgName?c=L:"java"===e.ImgName?c=U:"Adobe"===e.ImgName?c=V:"jsx"===e.ImgName?c=G:"mui"===e.ImgName?c=W:"redux"===e.ImgName?c=X:"router"===e.ImgName?c=q:"node"===e.ImgName?c=Y:"express"===e.ImgName?c=K:"mongo"===e.ImgName&&(c=z);var o=function(e){return Object(m.jsx)("img",{src:c,alt:e.Name,className:"skill_image",style:{display:"".concat(n?"none":"block")}})},r=e.info,b=function(e){return Object(m.jsx)("div",{className:"SkillInfo_data ".concat("entering"===e.display?"openDt":"exiting"===e.display?"closeDt":null),children:Object(m.jsx)("p",{children:r})})};return Object(m.jsx)(l.Fragment,{children:Object(m.jsxs)("div",{className:"skill_card_holder",onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},style:{boxShadow:"".concat(n?"0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)":" 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)")},children:[Object(m.jsxs)("div",{className:"Image_details ".concat(n?"backhover":""),style:{backgroundColor:"".concat(n?"white":e.color),border:"4px solid ".concat(e.color)},children:[Object(m.jsx)(j.a,{in:n,timeout:400,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(m.jsx)(b,{display:e})}}),Object(m.jsx)(o,{})]}),Object(m.jsx)("div",{className:"skill_name",style:{backgroundColor:"".concat(n?e.color:"white"),border:"4px solid ".concat(e.color)},children:Object(m.jsx)("h2",{className:"Heading",style:{color:"".concat(n?"white":"black")},children:e.Name})})]})})},Z=(t(35),function(){return Object(m.jsx)(l.Fragment,{children:Object(m.jsx)("div",{className:"Skills_holder",children:[{Name:"HTML",ImgName:"html",info:"Hyper Text Mark-up Language (a system used to mark text for World Wide Web pages in order to obtain colours, style, pictures, etc.)",level:"90%",color:"rgb(255, 103, 47)",bgColor:"rgb(251, 219, 207)",id:"1_Html"},{Name:"CSS",ImgName:"css",info:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",level:"85%",color:"#9ac0fc",bgColor:"#9ac0fc",id:"2_css"},{Name:"JavaScript",ImgName:"javascript",info:"JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages.",level:"80%",color:"#F0DB4F",bgColor:"#F0DB4F",id:"3_js"},{Name:"ReactJS",ImgName:"react",info:"React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",level:"80%",color:"#61DBFB",bgColor:"#61DBFB",id:"4_react"},{Name:"JSX",ImgName:"jsx",info:"JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code).",level:"80%",color:"#F0DB4F",bgColor:"#F0DB4F",id:"5_jsx"},{Name:"Redux",ImgName:"redux",info:"Redux is a state managing library used in JavaScript apps. It simply manages the state of your application",level:"80%",color:"#ccb0f8",bgColor:"#ccb0f8",id:"6_redux"},{Name:"NodeJs",ImgName:"node",info:"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",level:"50%",color:"#3C873A",bgColor:"#0474BB",id:"7_nodejs"},{Name:"Express Js",ImgName:"express",info:"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",level:"50%",color:"#acacac",bgColor:"#0474BB",id:"8_express"},{Name:"MongoDB",ImgName:"mongo",info:"MongoDB is an open source NoSQL database management program.",level:"50%",color:"#4db33d",bgColor:"#0474BB",id:"9_mongoDB"},{Name:"Router",ImgName:"router",info:"React Router is the standard routing library for React. From the docs: \u201cReact Router keeps your UI in sync with the URL",level:"80%",color:"#9c9789",bgColor:"#9c9789",id:"9_router"},{Name:"MATERIAL UI",ImgName:"mui",info:"MUI provides a customizable and accessible library of advanced components, enabling you to build your design system and develop React applications faster.",level:"80%",color:"#03fca5",bgColor:"#03fca5F",id:"10_mui"},{Name:"Adobe xd",ImgName:"Adobe",info:"Adobe XD is the Adobe prototyping tool for user experience and interaction designers.",level:"60%",color:"#7f7f7f",bgColor:"#7f7f7f",id:"11_adobexd"},{Name:"C++",ImgName:"c",info:"C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications.",level:"90%",color:"#5E97D0",bgColor:"#5E97D0",id:"12_c++"},{Name:"Java",ImgName:"java",info:"Java is also an object-oriented programming language that produces software for multiple platforms.",level:"50%",color:"#D0A384",bgColor:"#0474BB",id:"13_java"}].map((function(e){return Object(m.jsx)(O.a,{scale:1.1,transitionSpeed:2500,children:Object(m.jsx)(Q,{Name:e.Name,ImgName:e.ImgName,info:e.info,level:e.level,color:e.color,bgColor:e.bgColor},e.id)})}))})})}),$=function(){var e=window.scrollY,c=Object(i.useState)(e),t=Object(d.a)(c,2),a=t[0],n=t[1],s=Object(i.useState)(0),o=Object(d.a)(s,2),r=o[0],j=o[1];localStorage.setItem("Scroll",r);var b=localStorage.getItem("Scroll");return window.onscroll=function(c){n(e),r=window.pageYOffset,j(r)},Object(m.jsxs)(l.Fragment,{children:[Object(m.jsx)("div",{id:"home"}),Object(m.jsx)(p,{scrollDet:0!==b?b:a}),Object(m.jsx)(g,{}),Object(m.jsx)(M,{}),Object(m.jsx)(P,{}),Object(m.jsxs)("div",{className:"FullApplication",children:[Object(m.jsx)("section",{className:"Intro_sec",children:Object(m.jsx)(v,{})}),Object(m.jsx)("div",{id:"skills"}),Object(m.jsx)("h1",{className:"skill_heading",children:"Skills_"}),Object(m.jsx)("section",{className:"skills",children:Object(m.jsx)(Z,{})}),Object(m.jsxs)("section",{id:"about",className:"about_me",style:{backgroundPositionY:"".concat(.7*r-200,"px")},children:[Object(m.jsx)("h1",{className:"about_heading",children:"About_Me_"}),Object(m.jsx)(H,{})]}),Object(m.jsx)("section",{id:"contact",className:"contact_me",children:Object(m.jsx)(D,{})}),Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)(B,{})})]})]})};var ee=function(){return Object(m.jsx)(l.Fragment,{children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/",exact:!0,element:Object(m.jsx)($,{})}),Object(m.jsx)(r.a,{path:"/Home",exact:!0,element:Object(m.jsx)($,{})})]})})};n.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.6904ffa4.chunk.js.map
(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{170:function(e,n,a){e.exports=a(330)},176:function(e,n,a){},330:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(28),l=a.n(o),c=(a(175),a(176),a(23)),u=a(43),i=a(146),s=a(21),m=Object(u.c)({newUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.email,r=n.password,o=n.username;switch(a){case"ADD_EMAIL":return Object(s.a)(Object(s.a)({},e),{},{email:t});case"ADD_PASSWORD":return Object(s.a)(Object(s.a)({},e),{},{password:r});case"ADD_USERNAME":return Object(s.a)(Object(s.a)({},e),{},{username:o});case"CREATE_USER_SUCCESS":case"CREATE_USER_FAILURE":return 0;default:return e}},authenticationUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.email,r=n.password;switch(a){case"INPUT_EMAIL":return Object(s.a)(Object(s.a)({},e),{},{email:t});case"INPUT_PASSWORD":return Object(s.a)(Object(s.a)({},e),{},{password:r});default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.value;switch(a){case"LOGIN_USER":return t;case"LOGOUT_USER":return 0;case"CREATE_USER_SUCCESS":return t;default:return e}}}),p=Object(u.d)(m,Object(u.a)(i.a)),d=a(52),g=a(53),E=a(56),f=a(55),h=a(30),b=a(5),v=a(331),w=a(333),O=a(108),x=a(13),j=a(14);function y(){var e=Object(x.a)(["\nmargin-top: 20px;\nborder: 1px solid #E8E8E8;\n"]);return y=function(){return e},e}function U(){var e=Object(x.a)(["\ntext-align: center;\n\n"]);return U=function(){return e},e}function C(){var e=Object(x.a)(["\nmargin-right: auto;\nmargin-left: auto;\n\nmargin-top: 8px;\n"]);return C=function(){return e},e}function P(){var e=Object(x.a)(["\n\n\nmargin-right: auto;\nmargin-left: auto;\nfont-weight: bold;\nfont-size: 20px;\nmargin-bottom: 20px;\ncolor: #262626;\n\n\n\n"]);return P=function(){return e},e}function S(){var e=Object(x.a)(["\ndisplay: block;\nmargin-top: 12px;\nfont-weight: normal;\nfont-size: 14px;\n\ncolor: #262626;\n\n"]);return S=function(){return e},e}var I=j.a.label(S()),A=j.a.div(P()),_=j.a.div(C()),F=j.a.p(U()),R=j.a.hr(y()),D=a(104),k=a.n(D),T="https://conduit.productionready.io/api",N=("".concat(T,"/user"),"".concat(T,"/users/login")),L="".concat(T,"/users?Token=jwt.token.here"),q=Object(c.b)((function(e){return e}),(function(e){return{onChangeEmail:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"INPUT_EMAIL",email:e}}(n))},onChangePassword:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"INPUT_PASSWORD",password:e}}(n))},logInUser:function(n){return e((a=n,function(){return function(e){k.a.post(N,a).then((function(n){e({type:"LOGIN_USER",value:n.data})})).catch((function(e){var n=e.response.data.errors["email or password"],a="Email or password ".concat(n);alert(a)}))}})());var a}}}))((function(e){var n=e.onChangeEmail,a=e.onChangePassword,t=e.logInUser;if(0!==e.currentUser)return r.a.createElement(b.a,{to:"/home"});var o=function(e){var t=e.target,r=t.value,o=t.id;"email"===o&&n(r),"password"===o&&a(r)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement(F,null,"Sign In")),r.a.createElement(v.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){var n=e.email,a=e.password;t({user:{email:n,password:a}})}},r.a.createElement(I,null,"Email address"),r.a.createElement(v.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your Email!"}]},r.a.createElement(w.a,{id:"email",placeholder:"Email address",onChange:o})),r.a.createElement(I,null,"Password"),r.a.createElement(v.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(w.a,{id:"password",type:"password",placeholder:"Password",onChange:o})),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Login"),r.a.createElement(_,null,r.a.createElement(F,null,"Don\u2019t have an account?"," ",r.a.createElement(h.b,{to:"/signup"},"Sign Un"))))))})),M=a(167),z=a(334),G=Object(c.b)((function(e){return e}),(function(e){return{onChangeUsername:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"ADD_USERNAME",username:e}}(n))},onChangePassword:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"ADD_PASSWORD",password:e}}(n))},onChangeEmail:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"ADD_EMAIL",email:e}}(n))},createNewUser:function(n){return e(function(e){return function(){return function(n){k.a.post(L,e).then((function(e){n(function(e){return{type:"CREATE_USER_SUCCESS",value:e}}(e.data))})).catch((function(e){var n=e.response.data.errors,a=n.email,t=n.username,r=a?"Email ".concat(a):"",o=t?"Username ".concat(t):"",l="".concat(r," ").concat(o);alert(l)}))}}}(n)())}}}))((function(e){var n=e.onChangeUsername,a=e.onChangePassword,t=e.onChangeEmail,o=e.currentUser,l=e.createNewUser;if(0!==o)return r.a.createElement(b.a,{to:"/home"});var c=v.a.useForm(),u=Object(M.a)(c,1)[0],i=function(e){var r=e.target,o=r.value,l=r.id;"email"===l&&t(o),"password"===l&&a(o),"username"===l&&n(o)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement(F,null,"Create new account")),r.a.createElement(v.a,{form:u,name:"register",onFinish:function(e){var n=e.email,a=e.password,t=e.username;l({user:{email:n,password:a,username:t}})},initialValues:{}},r.a.createElement(I,null,"Username"),r.a.createElement(v.a.Item,{name:"username",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]},r.a.createElement(w.a,{onChange:i,id:"username",placeholder:"Username"})),r.a.createElement(I,null,"Email address"),r.a.createElement(v.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(w.a,{onChange:i,id:"email",placeholder:"Email address"})),r.a.createElement(I,null,"Password"),r.a.createElement(v.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"},{min:8,message:"Your password needs to be at least 8 characters"}],hasFeedback:!0},r.a.createElement(w.a.Password,{onChange:i,id:"password",placeholder:"Password"})),r.a.createElement(I,null,"Repeat Password"),r.a.createElement(v.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var n=e.getFieldValue;return{validator:function(e,a){return a&&n("password")!==a?Promise.reject("Passwords must match"):Promise.resolve()}}}]},r.a.createElement(w.a.Password,{placeholder:"Password"})),r.a.createElement(R,null),r.a.createElement(v.a.Item,{name:"agreement",valuePropName:"checked",rules:[{validator:function(e,n){return n?Promise.resolve():Promise.reject("Should accept agreement")}}]},r.a.createElement(z.a,null,"I agree to the processing of my personal information")),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{type:"primary",htmlType:"submit"},"Create")),r.a.createElement(_,null,r.a.createElement(F,null,"Already have an account?"," ",r.a.createElement(h.b,{to:"/signin"},"Sign In")))))})),W=function(e){Object(E.a)(a,e);var n=Object(f.a)(a);function a(){return Object(d.a)(this,a),n.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return 0===this.props.currentUser?r.a.createElement(b.a,{to:"/signin"}):null}}]),a}(r.a.Component),V=Object(c.b)((function(e){return e}))(W);function B(){var e=Object(x.a)(["\nmargin-top: 59px;\nmargin-right: auto;\nmargin-left: auto;\nwidth: 384px;\n\npadding: 48px 32px;\n\nbackground: #FFFFFF;\nborder: 1px solid #D9D9D9;\n\nbox-shadow: 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 22px 106px rgba(0, 0, 0, 0.07);\nborder-radius: 6px;\n"]);return B=function(){return e},e}function H(){var e=Object(x.a)(["\nbackground: #E5E5E5;\nbackground-size: cover;\npadding-bottom: 20px;\nheight: 100%;\n"]);return H=function(){return e},e}var J=j.a.section(H()),Y=j.a.div(B());function K(){var e=Object(x.a)(["\ndisplay: block;\nwidth: 110px;\nheight: 50px;\npadding-top: 10px;\npadding-left: 20px;\n\nfont-weight: normal;\nfont-size: 18px;\n\ncolor: #52C41A;\n\nborder: 1px solid #52C41A;\nborder-radius: 5px;\n"]);return K=function(){return e},e}function Q(){var e=Object(x.a)(["\ncolor: rgba(0, 0, 0, 0.85);\nmargin-right: 10px;\n"]);return Q=function(){return e},e}function X(){var e=Object(x.a)(["\n\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nwidth: 100%;\nmargin-left: 22px;\nmargin-right: 22px;\nfont-weight: normal;\nfont-size: 18px;\n\ncolor: rgba(0, 0, 0, 0.85);\n"]);return X=function(){return e},e}function Z(){var e=Object(x.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nbackground: #FFFFFF;\nheight: 80px;\n"]);return Z=function(){return e},e}var $=j.a.header(Z()),ee=j.a.div(X()),ne=j.a.div(Q()),ae=j.a.div(K()),te=function(e){Object(E.a)(a,e);var n=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).signInHeader=function(){var n=e.props,a=n.currentUser,t=n.logOut;return 0!==a?r.a.createElement(ee,null,r.a.createElement(ne,null,a.user.username),r.a.createElement(ae,null,r.a.createElement(h.b,{onClick:t,to:"/signin"},"Log Out"))):null},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement(ee,null,"Realworld Blog"),this.signInHeader())}}]),a}(r.a.Component),re=Object(c.b)((function(e){return e}),(function(e){return{logOut:function(){return e({type:"LOGOUT_USER"})}}}))(te),oe=function(e){Object(E.a)(a,e);var n=Object(f.a)(a);function a(){return Object(d.a)(this,a),n.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(J,null,r.a.createElement(re,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/home"},r.a.createElement(V,null)),r.a.createElement(b.b,{exact:!0,path:"/signin"},r.a.createElement(Y,null,r.a.createElement(q,null))),r.a.createElement(b.b,{exact:!0,path:"/signup"},r.a.createElement(Y,null,r.a.createElement(G,null))))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(c.a,{store:p},r.a.createElement(oe,null)),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.4e33ab13.chunk.js.map
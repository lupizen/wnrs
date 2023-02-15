(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3678)}])},3678:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return w}});var s=a(6042),i=a(9396),t=a(5893),r=a(7294),d=a(6010),o=a(1163),c=a(5989),l=a(6743),m=a(510),_=a(5694),h=a(8085),u=a(6323),x=a(251),f=a.n(x),j=a(5762),v=a(9008),N=a.n(v),g=a(3374),p=function(e){var n=e.split("-");if(n.length<=1||!n.slice(-1)[0].length)return!1;var a=n.slice(0,-1).join("-"),s=Number(n.slice(-1)[0]);return!(isNaN(s)||!Number.isInteger(s)||s<0||s>Math.pow(2,Object.keys(m).length))&&{seed:a,decksCode:s,decks:(0,u.E$)(s)}};function w(){var e,n=(0,o.useRouter)(),a=(0,g.F)().themeColor,m=(0,r.useState)({mode:null,seed:"",decks:null,names:[""]}),x=m[0],v=m[1],w=(0,r.useState)(0),k=w[0],y=w[1],b=(0,r.useState)(null),Z=b[0],C=b[1],L=(0,r.useRef)(),E=function(e){return function(n){v((0,i.Z)((0,s.Z)({},x),{mode:e})),y("new"===e?1:2)}},S=function(){if(2===k&&"load"===x.mode){var e=p(x.seed);if(!e)return C("Invalid seed");v((0,i.Z)((0,s.Z)({},x),{seed:e.seed,decks:e.decks}))}if(2===k&&"new"===x.mode&&!x.seed)return C("Empty");y(++k)},F=function(){1!==k&&"load"!==x.mode||v((0,i.Z)((0,s.Z)({},x),{mode:null})),C(null),y("load"===x.mode?0:--k)};return(0,r.useEffect)((function(){if(4===k){document&&(document.body.style.transition="background 500ms ease-in",document.body.style.background="var(--theme-main)");var e=(0,u.Mr)(x.decks);(0,j.Kz)((0,j.IH)(),"game_start",{mode:x.mode,deck:e,players:x.names.length}),setTimeout((function(){n.push({pathname:"/game",query:(0,s.Z)({decks:e,seed:x.seed?x.seed:(new Date).toLocaleDateString("sv")},1!==x.names.length&&{names:x.names.slice(0,-1).join(",")})})}),500)}}),[k]),(0,r.useEffect)((function(){document.body.style.background="var(--theme-paper)",document.body.style.color="var(--theme-contrastPaperText)"}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N(),{children:(0,t.jsx)("meta",{name:"theme-color",content:a})}),(0,t.jsx)("main",{className:(0,d.Z)(f().startRoot,4===k&&f().fadeToMain),children:(0,t.jsxs)("div",{className:f().inner,children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)(l.Z,{addEndListener:function(e,n){return e.addEventListener("transitionend",n,!1)},classNames:{enter:f()["fade-enter"],enterActive:f()["fade-enter-active"],exit:f()["fade-exit"],exitActive:f()["fade-exit-active"]},children:(0,t.jsxs)("div",{className:f().content,ref:L,children:[0===k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h1",{className:f().gameName,children:["We're Not",(0,t.jsx)("br",{}),"Really",(0,t.jsx)("br",{}),"Strangers"]}),(0,t.jsxs)("div",{className:f().modes,children:[(0,t.jsxs)("div",{className:f().mode,onClick:E("new"),children:[(0,t.jsx)(h.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"New Game"})]}),(0,t.jsxs)("div",{className:f().mode,onClick:E("load"),children:[(0,t.jsx)(h.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"Load Game"})]})]})]}),"new"===x.mode&&1===k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:f().title,children:"Decks"}),(0,t.jsx)("div",{className:f().description,children:"Don't worry. You may change this later."}),(0,t.jsx)(_.l,{className:f().list,init:null!==(e=x.decks)&&void 0!==e?e:void 0,onChange:function(e){return v((0,i.Z)((0,s.Z)({},x),{decks:e}))}})]}),2===k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:f().title,children:"Your Game"}),(0,t.jsx)("div",{className:f().description,children:"Just a bit more info."}),(0,t.jsx)(_.J,{mode:x.mode,error:Z,className:f().nameForm,onChange:function(e,n){"load"===x.mode&&Z&&p(e)&&C(null),v((0,i.Z)((0,s.Z)({},x),{names:n,seed:e}))}})]}),3===k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h1",{className:f().gameName,children:["Warning:",(0,t.jsx)("br",{}),"Feeling may arise.",(0,t.jsx)("br",{})]}),(0,t.jsxs)("p",{className:f().gameDesc,children:["To proceed, you understand this application is ",(0,t.jsx)("strong",{children:"not"})," affliated with the official WNRS and agree with this app's"," ",(0,t.jsx)("a",{href:"https://docs.google.com/document/d/1LrcuAy6t8woynvdQSc9wKWoyLY3aSGbcJCYH-9l-qBw/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:"Privacy Policy"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:f().offline,children:"Add this app to your homepage for offline support."})]}),(0,t.jsxs)("div",{className:f().modes,children:[(0,t.jsxs)("div",{className:f().mode,onClick:S,children:[(0,t.jsx)(h.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"I'm ready"})]}),(0,t.jsxs)("div",{className:f().mode,onClick:F,children:[(0,t.jsx)(h.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"Bring me back"})]})]})]})]})},k)}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(l.Z,{addEndListener:function(e,n){return L.current.addEventListener("transitionend",n,!1)},classNames:{enter:f()["fade-enter"],enterActive:f()["fade-enter-active"],exit:f()["fade-exit"],exitActive:f()["fade-exit-active"]},children:(0,t.jsx)("div",{children:k>0&&k<3&&(0,t.jsxs)("nav",{className:f().nav,children:[(0,t.jsxs)("button",{onClick:F,children:[(0,t.jsx)(h.Xd,{className:f().arrowLeft}),"Back"]}),(0,t.jsxs)("button",{onClick:S,children:["Next",(0,t.jsx)(h.ol,{className:f().arrowRight})]})]})})},k>0&&k<3)})]})})]})}},251:function(e){e.exports={inner:"main_inner__d643h",nav:"main_nav__Ux8yS",title:"main_title__X_f7j",modes:"main_modes__aWNJU",mode:"main_mode__8a93t",gameName:"main_gameName__6k0Cr","drop-enter":"main_drop-enter__ZFuXL","drop-exit":"main_drop-exit__zALxX","drop-enter-active":"main_drop-enter-active__hlZkr","drop-exit-active":"main_drop-exit-active__gGihS","fade-enter":"main_fade-enter__FtMLA","fade-exit":"main_fade-exit__xHhyd","fade-enter-active":"main_fade-enter-active__nDIU3","fade-exit-active":"main_fade-exit-active__v6SW3","fade-exit-right-active":"main_fade-exit-right-active__ICcSw",startRoot:"main_startRoot__OCuJ2",fadeToMain:"main_fadeToMain__4Msbd",content:"main_content__vrntn",gameDesc:"main_gameDesc__6oHrO",offline:"main_offline__xTNiz",hide:"main_hide__rHCOj",arrow:"main_arrow__4xz2A",description:"main_description__u_fcZ",list:"main_list__m2urS",nameForm:"main_nameForm__8hTqH",arrowLeft:"main_arrowLeft__0_5AM",arrowRight:"main_arrowRight__zv81H"}}},function(e){e.O(0,[636,579,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
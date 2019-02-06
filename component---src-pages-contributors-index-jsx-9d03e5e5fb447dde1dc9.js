(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",function(){return h});var r,a=n(7),i=n.n(a),o=n(0),s=n.n(o),c=n(198),l=n(196),u=n(197),d=n(203),f=n(212),p=n(260),h=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={contributors:[]},n}i()(n,e);var a=n.prototype;return a.componentDidMount=function(){var t=this;r?this.setState({contributors:r}):Object(p.a)().then(function(e){r=e,t.setState({contributors:e})}).catch(console.error)},a.render=function(){return t.createElement(c.a,{title:"Contributors",description:"These are all the cool people who have contributed (code, design, etc.) to The Bastion Bot Project!",image:"https://resources.bastionbot.org/og/a579602249857d28777d7aff1cbc5af3.jpg"},t.createElement(l.a,{title:"Contributors"},t.createElement("p",null,"All the users who have contributed code to The Bastion Bot Project.",t.createElement("br",null),"Users who frequently contribute to the project will be invited to be a member of the GitHub organization.")),t.createElement(u.a,null,this.state.contributors.length?this.state.contributors.map(function(e,n){return t.createElement(f.a,{title:e.username,description:e.contributions+" Contributions",image:e.avatar,link:e.url,key:n})}):t.createElement(d.a,null)))},n}(s.a.Component)}.call(this,n(81))},196:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){return t.createElement("div",{className:"Main-header",css:{textAlign:"center"}},t.createElement("h1",null,e.title),t.createElement("div",null,e.children))}}).call(this,n(81))},197:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){return t.createElement("div",{className:"Main-content",css:{padding:"25px 0",display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.children)}}).call(this,n(81))},203:function(t,e,n){"use strict";(function(t){n(0);var r=n(204),a=n.n(r),i=n(54),o={margin:"50px 20px 0 25px",height:"80px",width:"150px","::after":{content:" ",display:"block",position:"relative",bottom:"30px",height:"10px",background:"transparent",borderRadius:"50px",boxShadow:"0 70px 50px rgba(98, 217, 251, .2)"}};e.a=function(e){return t.createElement("div",{css:o},t.createElement("img",{src:a.a,alt:"Loading...",height:"80",css:{display:"block",margin:"0 auto",transform:"translate3d(0, 0, 0)",backfaceVisibility:"hidden",perspective:"1000px",":hover":{animation:i.css.keyframes({"10%, 90%":{transform:"translate3d(-1px, 0, 0)"},"20%, 80%":{transform:"translate3d(2px, 0, 0)"},"30%, 50%, 70%":{transform:"translate3d(-4px, 0, 0)"},"40%, 60%":{transform:"translate3d(4px, 0, 0)"}})+" 0.8s cubic-bezier(.36, .07, .19, .97) both"}}}))}}).call(this,n(81))},204:function(t,e,n){t.exports=n.p+"static/loader-05f2b1c20dff5990dde7f21e2d85f268.gif"},210:function(t,e,n){var r=n(27),a=n(36);n(211)("keys",function(){return function(t){return a(r(t))}})},211:function(t,e,n){var r=n(11),a=n(18),i=n(17);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",o)}},212:function(t,e,n){"use strict";(function(t){n(199),n(0);var r=n(195);e.a=function(e){return t.createElement("div",{className:"Card",css:{margin:20,width:200,height:200,borderRadius:3,boxShadow:"0 9px 12px 0 rgba(0, 0, 0, .2)",color:"#f5f5f5",backgroundColor:"#F5F5F5",background:"linear-gradient(45deg, #F5F5F5 50%, #F0F0F0)",backgroundImage:"url("+e.image+")",backgroundSize:"cover",bacgroundRepeat:"norepeat",transform:"translateZ(0)",transition:"all .3s cubic-bezier(.175,.885,.32,1.275)",":hover":{boxShadow:"0 19px 25px 0 rgba(0, 0, 0, .2)",transform:"translateY(-10px)",filter:"brightness(105%)"},":hover > a .Card-details":{transform:"translateY(-5px)"},":active":{boxShadow:"0 7px 9px 0 rgba(0, 0, 0, .2)",transform:"scale3d(.95,.95,.95) translateY(5px)",filter:"brightness(95%)"}}},t.createElement(r.a,{to:e.link,css:{display:"flex",alignItems:"flex-end",padding:20,height:"100%",width:"100%",boxShadow:"0px -100px 100px 0px rgba(0, 0, 0, .5) inset"}},t.createElement("div",{className:"Card-details",css:{transform:"translateZ(0)",transition:"transform .3s cubic-bezier(.175,.885,.32,1.275)"}},t.createElement("h4",{css:{fontWeight:500}},e.title),t.createElement("p",{css:{margin:0,fontFamily:"monospace",fontSize:".8em"}},e.description))))}}).call(this,n(81))},260:function(t,e,n){"use strict";n(84),n(55),n(210),n(35);e.a=function(){return new Promise(function(t,e){var n=[];window.fetch("https://api.bastionbot.org/github/contributors",{headers:{"User-Agent":"The Bastion Bot Website (https://bastionbot.org)"}}).then(function(t){return t.json()}).then(function(e){for(var r=Object.keys(e),a=0;a<r.length;a++){var i=r[a];"User"===e[i].type&&n.push({id:i,username:e[i].login,url:e[i].url,avatar:e[i].avatar,contributions:e[i].contributions,type:e[i].type})}t(n)}).catch(function(t){return e(t)})})}}}]);
//# sourceMappingURL=component---src-pages-contributors-index-jsx-9d03e5e5fb447dde1dc9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{192:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",function(){return b});n(199),n(52);var r,a,o=n(7),i=n.n(o),s=n(0),c=n.n(s),l=n(197),u=n(195),f=n(196),h=n(202),p=n(209),d=n(275),m=n(276),g=n(277),b=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={profile:{name:"The Bastion Bot",username:"TheBastionBot",followers_count:"Fetching"},followers:[]},n}i()(n,e);var o=n.prototype;return o.componentDidMount=function(){var t=this;r?this.setState({profile:r}):Object(m.a)().then(function(e){r=e,t.setState({profile:e})}).catch(console.error),a?this.setState({followers:a}):Object(g.a)().then(function(e){a=e,t.setState({followers:e})}).catch(console.error)},o.render=function(){return t.createElement(l.a,{title:"Followers",description:"These are all the people who follow @TheBastionBot on Twitter! Join them in following Bastion to stay updated on what's latest with Bastion.",image:""},t.createElement(u.a,{title:""},t.createElement(d.a,{user:this.state.profile})),t.createElement(f.a,null,this.state.followers.length?this.state.followers.map(function(e,n){return t.createElement(p.a,{title:e.name,description:e.username,image:"https://avatars.io/twitter/"+e.username+"/large",link:"https://twitter.com/"+e.username,key:n})}):t.createElement(h.a,null)))},n}(c.a.Component)}.call(this,n(84))},195:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){return t.createElement("div",{className:"Main-header",css:{textAlign:"center"}},t.createElement("h1",null,e.title),t.createElement("div",null,e.children))}}).call(this,n(84))},196:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){return t.createElement("div",{className:"Main-content",css:{padding:"25px 0",display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.children)}}).call(this,n(84))},202:function(t,e,n){"use strict";(function(t){n(0);var r=n(203),a=n.n(r),o=n(53),i={margin:"50px 20px 0 25px",height:"80px",width:"150px","::after":{content:" ",display:"block",position:"relative",bottom:"30px",height:"10px",background:"transparent",borderRadius:"50px",boxShadow:"0 70px 50px rgba(98, 217, 251, .2)"}};e.a=function(e){return t.createElement("div",{css:i},t.createElement("img",{src:a.a,alt:"Loading...",height:"80",css:{display:"block",margin:"0 auto",transform:"translate3d(0, 0, 0)",backfaceVisibility:"hidden",perspective:"1000px",":hover":{animation:o.css.keyframes({"10%, 90%":{transform:"translate3d(-1px, 0, 0)"},"20%, 80%":{transform:"translate3d(2px, 0, 0)"},"30%, 50%, 70%":{transform:"translate3d(-4px, 0, 0)"},"40%, 60%":{transform:"translate3d(4px, 0, 0)"}})+" 0.8s cubic-bezier(.36, .07, .19, .97) both"}}}))}}).call(this,n(84))},203:function(t,e,n){t.exports=n.p+"static/loader-05f2b1c20dff5990dde7f21e2d85f268.gif"},209:function(t,e,n){"use strict";(function(t){n(198),n(0);var r=n(194);e.a=function(e){return t.createElement("div",{className:"Card",css:{margin:20,width:200,height:200,borderRadius:3,boxShadow:"0 9px 12px 0 rgba(0, 0, 0, .2)",color:"#f5f5f5",backgroundColor:"#F5F5F5",background:"linear-gradient(45deg, #F5F5F5 50%, #F0F0F0)",backgroundImage:"url("+e.image+")",backgroundSize:"cover",bacgroundRepeat:"norepeat",transform:"translateZ(0)",transition:"all .3s cubic-bezier(.175,.885,.32,1.275)",":hover":{boxShadow:"0 19px 25px 0 rgba(0, 0, 0, .2)",transform:"translateY(-10px)",filter:"brightness(105%)"},":hover > a .Card-details":{transform:"translateY(-5px)"},":active":{boxShadow:"0 7px 9px 0 rgba(0, 0, 0, .2)",transform:"scale3d(.95,.95,.95) translateY(5px)",filter:"brightness(95%)"}}},t.createElement(r.a,{to:e.link,css:{display:"flex",alignItems:"flex-end",padding:20,height:"100%",width:"100%",boxShadow:"0px -100px 100px 0px rgba(0, 0, 0, .5) inset"}},t.createElement("div",{className:"Card-details",css:{transform:"translateZ(0)",transition:"transform .3s cubic-bezier(.175,.885,.32,1.275)"}},t.createElement("h4",{css:{fontWeight:500}},e.title),t.createElement("p",{css:{margin:0,fontFamily:"monospace",fontSize:".8em"}},e.description))))}}).call(this,n(84))},275:function(t,e,n){"use strict";(function(t){n(199);var r=n(0),a=n.n(r),o=n(194);e.a=function(e){return t.createElement(a.a.Fragment,null,t.createElement("img",{src:"https://avatars.io/twitter/"+e.user.username+"/large",alt:"Avatar",height:"200",width:"200",css:{borderRadius:"100%",boxShadow:"0 12px 30px 0 rgba(0, 0, 0, .2)"}}),t.createElement("div",{css:{marginTop:15}},t.createElement(o.a,{to:"https://twitter.com/"+e.user.username},t.createElement("div",{css:{fontWeight:"bold",fontSize:"1.5em"}},e.user.name),t.createElement("div",{css:{opacity:".8"}},"@"+e.user.username)),t.createElement(o.a,{to:"https://twitter.com/intent/follow?screen_name="+e.user.username+"&original_referer=https://bastionbot.org&tw_p=followbutton"},t.createElement("div",{css:{opacity:".5"}},e.user.followers_count+" Followers"))))}}).call(this,n(84))},276:function(t,e,n){"use strict";n(38);e.a=function(){return new Promise(function(t,e){window.fetch("https://api.bastionbot.org/twitter",{headers:{"User-Agent":"The Bastion Bot Website (https://bastionbot.org)"}}).then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){return e(t)})})}},277:function(t,e,n){"use strict";n(38);e.a=function(){return new Promise(function(t,e){window.fetch("https://api.bastionbot.org/twitter/followers",{headers:{"User-Agent":"The Bastion Bot Website (https://bastionbot.org)"}}).then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){return e(t)})})}}}]);
//# sourceMappingURL=component---src-pages-twitter-followers-index-jsx-b5b5ac404db6ed4decf1.js.map
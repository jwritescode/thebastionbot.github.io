(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"default",function(){return w});a(85),a(52);var n,r,o=a(7),i=a.n(o),s=a(0),c=a.n(s),l=a(260),p=a.n(l),d=a(197),u=a(194),h=a(195),f=a(201),m=a(262),g=a(193),b=a(263),x=a(264),w=function(e){function a(t){var a;return(a=e.call(this,t)||this).state={patrons:[],paypalDonors:[]},a}i()(a,e);var o=a.prototype;return o.componentDidMount=function(){var t=this;n?this.setState({patrons:n}):Object(b.a)().then(function(e){n=e,t.setState({patrons:e})}).catch(console.error),r?this.setState({paypalDonors:r}):Object(x.a)().then(function(e){r=e,t.setState({paypalDonors:e})}).catch(console.error)},o.render=function(){return t.createElement(d.a,{title:"Donors",description:"These are all the people who have donated and shared their appreciation for the continous development of The Bastion Bot Project and kept it alive.",image:""},t.createElement(u.a,{title:"Donors"},t.createElement("p",null,"These are all the people who have donated and shared their appreciation for the continous development of The Bastion Bot Project and kept it alive."),t.createElement("p",null,"If you also want to share your appreciation and get cool rewards, all while supporting the development of Bastion, you can ",t.createElement(g.a,{to:"/donate"},"donate")," too.")),t.createElement(h.a,null,this.state.patrons.length?this.state.patrons.filter(function(t){return"active_patron"===t.patron_status||0!==t.lifetime_support_cents}).map(function(e,a){return t.createElement(m.a,{user:e.discord_tag||e.full_name,time:"active_patron"===e.patron_status?"Patron since "+p()(e.pledge_relationship_start).toNow(!0):"Patron until "+p()(e.last_charge_date).toNow(!0)+" ago",image:e.discord_avatar||e.image_url,link:e.url,method:"patreon",key:a})}):t.createElement(c.a.Fragment,null),this.state.paypalDonors.length?this.state.paypalDonors.map(function(e,a){return t.createElement(m.a,{user:e.discord_tag,time:"Last donated "+p()(e.last_donation_date).toNow(!0)+" ago",image:e.discord_avatar,link:e.url,method:"paypal",key:a})}):t.createElement(c.a.Fragment,null),this.state.paypalDonors.length&&this.state.paypalDonors.length?t.createElement(c.a.Fragment,null):t.createElement(f.a,null)))},a}(c.a.Component)}.call(this,a(84))},194:function(t,e,a){"use strict";(function(t){a(0);e.a=function(e){return t.createElement("div",{className:"Main-header",css:{textAlign:"center"}},t.createElement("h1",null,e.title),t.createElement("div",null,e.children))}}).call(this,a(84))},195:function(t,e,a){"use strict";(function(t){a(0);e.a=function(e){return t.createElement("div",{className:"Main-content",css:{padding:"25px 0",display:"flex",flexWrap:"wrap",justifyContent:"center"}},e.children)}}).call(this,a(84))},201:function(t,e,a){"use strict";(function(t){a(0);var n=a(202),r=a.n(n),o=a(53),i={margin:"50px 20px 0 25px",height:"80px",width:"150px","::after":{content:" ",display:"block",position:"relative",bottom:"30px",height:"10px",background:"transparent",borderRadius:"50px",boxShadow:"0 70px 50px rgba(98, 217, 251, .2)"}};e.a=function(e){return t.createElement("div",{css:i},t.createElement("img",{src:r.a,alt:"Loading...",height:"80",css:{display:"block",margin:"0 auto",transform:"translate3d(0, 0, 0)",backfaceVisibility:"hidden",perspective:"1000px",":hover":{animation:o.css.keyframes({"10%, 90%":{transform:"translate3d(-1px, 0, 0)"},"20%, 80%":{transform:"translate3d(2px, 0, 0)"},"30%, 50%, 70%":{transform:"translate3d(-4px, 0, 0)"},"40%, 60%":{transform:"translate3d(4px, 0, 0)"}})+" 0.8s cubic-bezier(.36, .07, .19, .97) both"}}}))}}).call(this,a(84))},202:function(t,e,a){t.exports=a.p+"static/loader-05f2b1c20dff5990dde7f21e2d85f268.gif"},262:function(t,e,a){"use strict";(function(t){a(196),a(209),a(0);var n=a(193);e.a=function(e){return t.createElement("div",{className:"Card",css:{margin:20,width:200,height:200,borderRadius:3,boxShadow:"0 9px 12px 0 rgba(0, 0, 0, .2)",color:"#f5f5f5",backgroundColor:"#F5F5F5",background:"linear-gradient(45deg, #F5F5F5 50%, #F0F0F0)",backgroundImage:e.image.startsWith("https://cdn.discordapp.com")?"url("+e.image+"?size=512)":"url("+e.image+")",backgroundSize:"cover",bacgroundRepeat:"norepeat",transform:"translateZ(0)",transition:"all .3s cubic-bezier(.175,.885,.32,1.275), background .3s ease, color .3s ease",":hover":{background:"patreon"===e.method?"#F96854":"#469bdb",boxShadow:"0 19px 25px 0 rgba(0, 0, 0, .2)",transform:"translateY(-10px)",filter:"brightness(105%)"},":hover > a .Card-details":{transform:"translateY(-5px)"},":active":{boxShadow:"0 7px 9px 0 rgba(0, 0, 0, .2)",transform:"scale3d(.95,.95,.95) translateY(5px)",filter:"brightness(95%)"}}},t.createElement(n.a,{to:e.link,css:{display:"flex",alignItems:"flex-end",padding:20,height:"100%",width:"100%",boxShadow:"0px -100px 100px 0px rgba(0, 0, 0, .5) inset"}},t.createElement("div",{className:"Card-details",css:{transition:"transform .3s cubic-bezier(.175,.885,.32,1.275)"}},t.createElement("h4",{css:{width:160,fontWeight:500,wordWrap:"break-word"}},e.user),t.createElement("p",{css:{margin:0,fontFamily:"monospace",fontSize:".8em"}},e.time))))}}).call(this,a(84))},263:function(t,e,a){"use strict";a(38);e.a=function(){return new Promise(function(t,e){window.fetch("https://api.bastionbot.org/patreon/patrons").then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){return e(t)})})}},264:function(t,e,a){"use strict";a(38);e.a=function(){return new Promise(function(t,e){window.fetch("https://api.bastionbot.org/paypal/donors").then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){return e(t)})})}}}]);
//# sourceMappingURL=component---src-pages-donors-index-jsx-79ace0f0f31a670fcfec.js.map
webpackJsonp([0xdeec151c87b3],{51:function(e,t){},44:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s);n(51);var c=n(58),f=o(c),u=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"contentLoaderContainer"},i.default.createElement("img",{src:f.default,alt:"",className:"contentLoader",height:"80"}))},t}(i.default.Component);t.default=u,e.exports=t.default},58:function(e,t,n){e.exports=n.p+"static/loader.fe6312ef.gif"},357:function(e,t){},248:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),c=n(10),f=o(c),u=n(59),d=o(u),p=n(444),h=o(p),m=n(9),w=o(m),y=n(44),v=o(y);n(357);var E=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={info:{},followers:[]},o}return l(t,e),t.prototype.componentDidMount=function(){this.fetchInfo(),this.fetchFollowers()},t.prototype.fetchInfo=function(){var e=this;d.default.get("https://romantic-cephalopod.glitch.me/").then(function(t){e.setState({info:t.data})}).catch(function(e){console.error(e)})},t.prototype.fetchFollowers=function(){var e=this;d.default.get("https://romantic-cephalopod.glitch.me/followers").then(function(t){e.setState({followers:t.data})}).catch(function(e){console.error(e)})},t.prototype.render=function(){var e=!!Object.keys(this.state.info).length;return i.default.createElement("div",{id:"twitter"},i.default.createElement(f.default,{title:h.default.title,description:h.default.description}),i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"self"},i.default.createElement("img",{className:"avatar",src:"https://images-ext-2.discordapp.net/external/DegTsDA9BCeOPzmnwjwgW8cUjwwsqPw1Mx6w6IJe58A/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/267035345537728512/26d0905a682bf2ee436d50ff1168ded7.png",alt:"Bastion Avatar",height:"150",width:"150"}),i.default.createElement("div",{className:"details"},i.default.createElement(w.default,{to:e?"https://twitter.com/"+this.state.info.username:"https://twitter.com/TheBastionBot"},i.default.createElement("div",{className:"name"},e?this.state.info.name:"The Bastion Bot"),i.default.createElement("div",{className:"username"},e?"@"+this.state.info.username:"@TheBastionBot")),i.default.createElement("div",{className:"followers"},e?this.state.info.followers_count+" Followers":"")))),i.default.createElement("div",{className:"container"},this.state.followers.length?this.state.followers.map(function(e,t){return i.default.createElement("div",{className:"follower",key:t},i.default.createElement(w.default,{to:"https://twitter.com/"+e.username},i.default.createElement("div",{className:"details"},i.default.createElement("div",{className:"name"},e.name),i.default.createElement("div",{className:"username"},"@"+e.username))))}):i.default.createElement(v.default,null)))},t}(i.default.Component);t.default=E,e.exports=t.default},444:function(e,t){e.exports={title:"Followers",description:"These are all the people who follow @TheBastionBot on Twitter! Join them in following Bastion to stay updated on what's latest with Bastion.",image:""}}});
//# sourceMappingURL=component---src-pages-followers-index-js-ebed8bb0491eab08a484.js.map
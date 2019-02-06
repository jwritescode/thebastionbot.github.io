(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{186:function(e,t,n){"use strict";n.r(t),function(e){n(0);var o=n(198),s=n(196),a=n(197),i=n(267),r=n(195),u=n(268),l=n.n(u),c=function(e){"none"===e.childNodes[1].style.display?e.childNodes[1].style="display: block;":e.childNodes[1].style="display: none;"};t.default=function(t){return e.createElement(o.a,{title:"Frequently Asked Questions",description:"Go through the frequently asked questions to find answer to your questions. If your question is not answered here, join Bastion HQ: https://discord.gg/fzx8fkt",image:"https://resources.bastionbot.org/og/a5dc9c3d3634c0561ce0e5d65280bf86.jpg"},e.createElement(s.a,{title:"Frequently Asked Questions"},e.createElement("p",null,"Have a question that is not listed here? No worries mate, just head over to the ",e.createElement(r.a,null,"#bastion-support")," channel in ",e.createElement(r.a,{to:"https://discord.gg/fzx8fkt"}," Bastion HQ"),", and ask it.")),e.createElement(a.a,null,l.a.map(function(t,n){return e.createElement(i.a,{question:t.question,answer:t.answer,handleClick:c,key:n})})))}}.call(this,n(81))},196:function(e,t,n){"use strict";(function(e){n(0);t.a=function(t){return e.createElement("div",{className:"Main-header",css:{textAlign:"center"}},e.createElement("h1",null,t.title),e.createElement("div",null,t.children))}}).call(this,n(81))},197:function(e,t,n){"use strict";(function(e){n(0);t.a=function(t){return e.createElement("div",{className:"Main-content",css:{padding:"25px 0",display:"flex",flexWrap:"wrap",justifyContent:"center"}},t.children)}}).call(this,n(81))},205:function(e,t,n){"use strict";var o=n(209),s=new(n.n(o).a.Converter);t.a=function(e){return s.makeHtml(e)}},267:function(e,t,n){"use strict";(function(e){n(0);var o=n(205);t.a=function(t){return e.createElement("div",{className:"Card",onClick:function(e){return t.handleClick(e.target)},css:{margin:20,padding:20,width:"100%",borderRadius:5,boxShadow:"0 9px 12px 0 rgba(0, 0, 0, .2)",color:"#F5F5F5",backgroundColor:"#23272A",background:"linear-gradient(135deg, #23272A, #070A0C)",transform:"translateZ(0)",transition:"all .3s cubic-bezier(.175,.885,.32,1.275)",":hover":{boxShadow:"0 19px 25px 0 rgba(0, 0, 0, .2)",filter:"brightness(105%)"},":active":{boxShadow:"0 7px 9px 0 rgba(0, 0, 0, .2)",filter:"brightness(95%)"},"& *":{pointerEvents:"none"}}},e.createElement("div",{className:"question",css:{opacity:.9}},t.question),e.createElement("div",{className:"answer",style:{display:"none"}},e.createElement("div",{css:{marginTop:20,fontSize:".9em",opacity:.8},dangerouslySetInnerHTML:{__html:Object(o.a)(t.answer)}})))}}).call(this,n(81))},268:function(e,t){e.exports=[{question:"What is a guild?",answer:"A Discord Guild is what we call a Discord Server, that's all.",image:null},{question:"How do I get an ID (User ID, Role ID, Channel ID, Guild ID, etc.)?",answer:"Turn on Developer Mode in the Discord client (User Settings -> Appearance).\nFor getting User ID/Channel ID/Guild ID, Right-Click on the User/Channel/Guild and select Copy ID.\nFor Role IDs, you need to Right-Click on the role mention (@someRole) and select Copy ID.\n",image:null},{question:"I have an issue with using/installing/setting up the Bastion Bot, where can I get help?",answer:"If you ever face any problems with the Bastion Bot or you don't understard something, or if you need any kind of help with it, just head over to the [#help] channel in [Bastion HQ](https://discord.gg/fzx8fkt), and ask us. Our Support Staffs (and everyone over there) will be more than willing to help you.",image:null},{question:"I found a bug with the Bastion Bot, how/where can I report it?",answer:"First, see if it's already reported in [GitHub Issues](https://github.com/TheBastionBot/Bastion/issues). If it's not reported, [create a new issue in GitHub](https://github.com/TheBastionBot/Bastion/issues/new) with proper examples and screenshots (if necessary) and as much detail as necessary on how we can replicate it.<br>We will fix the issue as soon as possible. And you receive a huge thanks from us along with some Bastion Currencies.",image:null},{question:"I have a suggestion for the Bastion Bot, how can I let you know?",answer:"First, see if it's already reported in [GitHub Issues](https://github.com/TheBastionBot/Bastion/issues). If it's not reported, [create a new issue in GitHub](https://github.com/TheBastionBot/Bastion/issues/new) with proper examples and screenshots (if necessary) and as much detail as necessary that will help us understand your suggestion.<br>We'll be glad to implement that if that's something that is going to help everyone and is possible to do. And you receive a huge thanks from us along with some Bastion Currencies.",image:null},{question:"How can I support the Bastion Bot project?",answer:"If you liked the Bastion Bot project and want to support it, there are quite few ways of doing that:<br>You can contribute to [Bastion's code on GitHub](https://github.com/TheBastionBot/) and improve it or add new features.<br>You can [Donate via PayPal](https://paypal.me/snkrsnkampa) or [Support on Patreon](https://patreon.com/bastionbot) so that this amazing project is maintained and run forever.",image:null},{question:"The installer/updater stops with a <code>Killed</code> error or Bastion stops with a <code>Killed</code> error in the logs, what do I do?",answer:"This error happens when on low memory (e.g. 512 MB) Computers/Servers that don't have a swap file or if the swap size is not enough. But don't worry, it's not a big deal. It can be fixed easily by adding/updating the swap file (I recommend the size of swap file to be double the size of your RAM). If you don't know how to do that, follow the steps given [here](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-12-04?comment=551).",image:null},{question:"How do I see the Bastion Bot's log in Linux/macOS?",answer:"Inside the `Bastion` directory, run: ```bash ./bastion.sh --show```",image:null},{question:"How do I add more than one Owner to Bastion?",answer:"Open the `credentials.json` file inside the `Bastion/settings/` directory, with a text editor.<br>Add another owner ID in the owner ID section below your ID.<br>Save & close the file.",image:null},{question:"How do I know how to use a specific command?",answer:"To get help on the usage & examples of a any command, run the help <command> command (using the appropriate prefix of Bastion in the Discord Server) in any Discord Server where the Bastion Bot is present or go to the commands section in this website.",image:null},{question:"What are the variables that I can use in greeting message, farewell message, triggers' responses, etc.?",answer:"You can use the following variables:<br>`$user` - Mentions the user that triggered this event.<br>`$username` - the username of the user that triggered this event.<br>`$server` - The name of the server that this event was triggered on.<br>`$prefix` - The prefix that the Bastion BOT uses in the guild where this ever was triggered.<br>`$mention` - Mentions the user in the response, that was mentioned in the trigger (only available for triggers' responses).",image:null},{question:"What can I do with Bastion currency?",answer:"You can sell & buy stuff from the shops (gift shop, server shop or role shop), you can also gamble in the games in the gambling module. You can also give your Bastion Currency to your friends. And many new features are being added every day to Bastion, so there might be many more ways you can use your currency in future releases of Bastion.",image:null},{question:"How can I get Bastion Currency?",answer:"You get currency when you level up in the server. You can also get more currency when you win in gambling games. There's also a weekly currency giveaway in Bastion HQ where you can get huge amount of Bastion Currencies. But the two best ways to get more currencies is to use the `claim` or `daily` command every day and if you're a server owner, you can sell items/roles in your server and when users buy it, you'll get 90% of the profit.",image:null},{question:"How can I get more Bastion Currency with the claim or daily command?",answer:"You can normally get upto 100 Bastion Currencies when you use the `claim` or `daily` command. But you can get 200% more Bastion currencies if you use the `claim` or `daily` command in [Bastion HQ](https://discord.gg/fzx8fkt). Also, if you've ever [donated us on PayPal](https://paypal.me/snkrsnkampa) or if you've ever [been our Patron](https://patreon.com/bastionbot), you'll get another 100 Bastion Currencies added to your daily reward. And if you're currently [our Patron](https://patreon.com/bastionbot), 500 Bastion Currencies will be added instead.",image:null},{question:"Music commands are not working in the Public Bastion Bot?",answer:"Music is disabled in the Public Bastion Bot due to high hosting and maintenance costs for serving music to a huge number of Discord Servers. If you want to use the music module, try [hosting Bastion](https://docs.bastionbot.org/) on your computer/server.",image:null},{question:"Why is my music laggy?",answer:"That can be due to various reasons. Maybe your computer/server, where you are hosting the Bastion Bot, has connection/bandwidth issues. Or latency from your computer/server to Discord is high. [Try changing your Discord Voice Server region](https://support.discordapp.com/hc/en-us/articles/216661717-How-do-I-change-my-Voice-Server-Region-) to a location near your computer/server.",image:null}]}}]);
//# sourceMappingURL=component---src-pages-faq-index-jsx-22fbb749ccf0995bbec6.js.map
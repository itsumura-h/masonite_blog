(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(310)},129:function(e,t,a){},130:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),c=(a(129),a(10)),l=a(19),s=a(12),u=a(11),h=a(13),p=a(312),g=(a(130),a(24)),d=a(55),m=a.n(d),f=a(116),b=a.n(f),w=a(42),v=a.n(w),E=a(118),y=a.n(E),O=a(117),j=a.n(O),A="en"===window.localStorage.getItem("language")?{EnglishButton:"\u65e5\u672c\u8a9e\u3078",closeButtonName:"close",latest20:"Latest 20 articles",seriesList:"Series List",articlesList:"Articles List",diariesList:"DIaries List",articlesOf:"Articles of ",articlesNotFound:"Articles not found",toppageTab:"Toppage",seriesTab:"Series",diariesTab:"Diaries",allTab:"All articles",searchTab:"Search",productsTab:"Products",drawerSearchLabel:"search word",drawerSearchButton:"search",diariesWithClick:"Diaries(Click here to open)",searchResultOf:"Search results of ",searchResultTag:"tag: ",productsList:"Products"}:{EnglishButton:"Translate",closeButtonName:"\u9589\u3058\u308b",latest20:"\u65b0\u774020\u4ef6",seriesList:"\u9023\u8f09\u4e00\u89a7",articlesList:"\u8a18\u4e8b\u4e00\u89a7",diariesList:"\u96d1\u8a18\u4e00\u89a7",articlesOf:"\u306e\u8a18\u4e8b\u4e00\u89a7",articlesNotFound:"\u8a18\u4e8b\u304c\u3042\u308a\u307e\u305b\u3093",toppageTab:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8",seriesTab:"\u9023\u8f09\u4e00\u89a7",diariesTab:"\u96d1\u8a18\u4e00\u89a7",searchTab:"\u691c\u7d22",productsTab:"\u30c4\u30fc\u30eb",allTab:"\u5168\u8a18\u4e8b\u4e00\u89a7",drawerSearchLabel:"\u691c\u7d22\u30ef\u30fc\u30c9",drawerSearchButton:"\u691c\u7d22",diariesWithClick:"\u96d1\u8a18(\u30af\u30ea\u30c3\u30af\u3067\u958b\u304f)",searchResultOf:'"\u306e\u691c\u7d22\u7d50\u679c',searchResultTag:'\u30bf\u30b0"',productsList:"\u30c4\u30fc\u30eb\u4e00\u89a7"},S=a(60),I=a.n(S),k={mode:"prod",APIMODE:"",APIHOST:window.location.origin},P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),t}(r.a.Component);P.method1=function(e,t){return e+t},P.getAPI=function(e){e=k.APIHOST+e;var t=sessionStorage.getItem(e);return t?new Promise(function(e,a){e(JSON.parse(t))}):I.a.get(e,k.APIMODE).then(function(t){if(void 0!==t.data.value)return sessionStorage.setItem(e,JSON.stringify(t.data.value)),t.data.value}).catch(function(e){console.error(e)})},P.getAPIWithoutCache=function(e){return e=k.APIHOST+e,I.a.get(e,k.APIMODE).then(function(e){if(void 0!==e.data.value)return e.data.value}).catch(function(e){console.error(e)})},P.postAPI=function(e){return e=k.APIHOST+e,I.a.get(e,k.APIMODE).then(function(e){return e.data.value}).catch(function(e){console.error(e)})},P.twitter=function(){window.twttr&&window.twttr.widgets.load()},P.highlight=function(){document.getElementsByTagName("pre").length>0&&(window.hljs.initHighlighting.called&&(window.hljs.initHighlighting.called=!1),window.hljs.initHighlighting())},P.getBackgroundImg=function(){var e=window.location.pathname.split("/")[2];return e||(e="plain"),e};var T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),t}(r.a.Component);T.getToppage=function(){var e,t=window.localStorage.getItem("language");return e="ja"!==t&&t?"/blog/api/toppage_en":"/blog/api/toppage",P.getAPIWithoutCache(e)},T.getSeries=function(){var e,t=window.localStorage.getItem("language");return e="ja"!==t&&t?"/blog/api/series_en":"/blog/api/series",P.getAPIWithoutCache(e)},T.getArticles=function(e){var t,a=window.localStorage.getItem("language");return t="ja"!==a&&a?"/blog/api/articles_en/"+e:"/blog/api/articles/"+e,P.getAPIWithoutCache(t)},T.getArticle=function(e){var t,a=window.localStorage.getItem("language");return t="ja"!==a&&a?"/blog/api/article_en/"+e:"/blog/api/article/"+e,P.getAPIWithoutCache(t)},T.getDiaries=function(){var e,t=window.localStorage.getItem("language");return e="ja"!==t&&t?"/blog/api/diaries_en":"/blog/api/diaries",P.getAPIWithoutCache(e)},T.getArticlesByKeyword=function(e){var t,a=window.localStorage.getItem("language");return t="ja"!==a&&a?"/blog/api/articlesByKeyword_en?keyword="+e:"/blog/api/articlesByKeyword?keyword="+e,P.getAPI(t)},T.getArticlesByTagId=function(e){var t,a=window.localStorage.getItem("language");return t="ja"!==a&&a?"/blog/api/articlesByTagId_en/"+e:"/blog/api/articlesByTagId/"+e,P.getAPI(t)},T.getLatests=function(){var e,t=window.localStorage.getItem("language");return e="ja"!==t&&t?"/blog/api/latests_en":"/blog/api/latests",P.getAPI(e)},T.getAllArticles=function(){var e,t=window.localStorage.getItem("language");return e="ja"!==t&&t?"/blog/api/allArticles_en":"/blog/api/allArticles",P.getAPI(e)};var N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a.changeLanguage=function(){var e=window.localStorage.getItem("language");window.localStorage.removeItem("language"),window.localStorage.language="ja"!==e&&e?"ja":"en",window.location.href=window.location.href},a.getToppage=function(){T.getToppage().then(function(e){a.setState({title:e.toppage.title})}).catch(function(e){console.error("API.toppage error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getToppage()}},{key:"render",value:function(){var e=P.getBackgroundImg(),t=window.sessionStorage.getItem("mobile")?"marquee":"";return r.a.createElement(m.a,{position:"static",className:e},r.a.createElement(b.a,{variant:"dense"},r.a.createElement("div",{className:t,style:{flexGrow:1}},r.a.createElement(v.a,{variant:"title",color:"inherit",className:"Title"},this.state.title)),r.a.createElement(j.a,{variant:"extended",onClick:this.changeLanguage,hrefLang:"en"===window.localStorage.getItem("language")?"ja":"en"},r.a.createElement(y.a,null),A.EnglishButton)))}}]),t}(r.a.Component),C=Object(g.withStyles)({grow:{flexGrow:1}})(N),W=a(20),B=a.n(W),M=a(119),D=a.n(M),L=a(35),_=a.n(L),x=a(23),R=a.n(x),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=P.getBackgroundImg(),a=window.location.pathname;return r.a.createElement(m.a,{position:"static",className:t},r.a.createElement(D.a,{value:!1,variant:"scrollable",scrollButtons:"auto",className:"Tabs"},r.a.createElement(_.a,{component:B.a,to:"/blog/",disabled:"/blog/"===a,className:e.toppage+" TabBlack"},r.a.createElement(R.a,null),A.toppageTab),r.a.createElement(_.a,{component:B.a,to:"/blog/series/",disabled:"/blog/series/"===a,className:e.series+" TabWhite"},r.a.createElement(R.a,null),A.seriesTab),r.a.createElement(_.a,{component:B.a,to:"/blog/diary/",disabled:"/blog/diary/"===a,className:e.diary+" TabBlack"},r.a.createElement(R.a,null),A.diariesTab),r.a.createElement(_.a,{component:B.a,to:"/blog/search/",disabled:"/blog/search/"===a,className:e.search+" TabWhite"},r.a.createElement(R.a,null),A.searchTab)))}}]),t}(r.a.Component);var K=Object(g.withStyles)({toppage:{backgroundColor:"#ccc !important"},series:{backgroundColor:"#f33 !important"},diary:{backgroundColor:"orange !important"},search:{backgroundColor:"green !important"},products:{backgroundColor:"blue !important"}})(H),U=a(313),F=a(314),J=a(311),z=a(22),G=a.n(z),q=a(56),$=a.n(q),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",toppage:null,description:""},a.getToppage=function(){T.getToppage().then(function(e){a.setState({title:e.toppage.title,toppage:e.toppage.article_html,description:e.toppage.meta_description})}).catch(function(e){console.error("API.getToppage error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getToppage()}},{key:"componentDidUpdate",value:function(e){P.twitter()}},{key:"render",value:function(){var e=this.state.toppage;return r.a.createElement("div",null,r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement("div",{className:"twitterDiv"},r.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-text":this.state.title,"data-via":"dumblepytech1","data-show-count":"false"},"tweet")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})),r.a.createElement($.a,null,r.a.createElement("title",null,this.state.title),r.a.createElement("meta",{name:"description",content:this.state.description})))}}]),t}(r.a.Component),V=a(31),X=a.n(V),Y=a(25),Z=a.n(Y),ee=a(32),te=a.n(ee),ae=a(26),ne=a.n(ae),re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1,series:[]},a.getSeries=function(){T.getSeries().then(function(e){a.setState({isMounted:!0,series:e.series})}).catch(function(e){console.error("API.getSeries error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getSeries()}},{key:"render",value:function(){var e=this.state.series,t=[];for(var a in e)t.push(r.a.createElement(B.a,{to:"/blog/series/"+e[a].id,key:a},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:e[a].title}))));return this.state.isMounted&&0===e.length&&t.push(r.a.createElement(Z.a,null,r.a.createElement(ne.a,{primary:A.articlesNotFound}))),r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement("h2",null,A.seriesList),r.a.createElement(X.a,{component:"nav"},t))}}]),t}(r.a.Component),oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1,series:null,articles:[]},a.getArticles=function(){var e=window.location.pathname.split("/")[3];T.getArticles(e).then(function(e){a.setState({series:e.series,articles:e.articles})}).catch(function(e){console.error("API.getArticles error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"render",value:function(){var e=this.state.articles,t=this.state.series,a=[];for(var n in e)a.push(r.a.createElement(B.a,{to:"/blog/series/"+t.id+"/"+e[n].timestamp,key:n},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:e[n].title}))));var o="";return this.state.series&&(o=t.title+A.articlesOf,"en"===window.localStorage.getItem("language")&&(o=A.articlesOf+'"'+t.title+'"')),r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement("h2",null,o),r.a.createElement(X.a,{component:"nav"},a))}}]),t}(r.a.Component),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1,diaries:[]},a.getDiaries=function(){T.getDiaries().then(function(e){a.setState({isMounted:!0,diaries:e.diaries})}).catch(function(e){console.error("API.getDiaries error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDiaries()}},{key:"render",value:function(){var e=this.state.diaries,t=[];for(var a in e)t.push(r.a.createElement(B.a,{to:"/blog/diary/"+e[a].timestamp,key:a},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:e[a].title}))));return this.state.isMounted&&0===e.length&&t.push(r.a.createElement(Z.a,null,r.a.createElement(ne.a,{primary:A.articlesNotFound}))),r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement("h2",null,A.diariesList),r.a.createElement(X.a,{component:"nav"},t))}}]),t}(r.a.Component),ce=a(57),le=a.n(ce),se=a(120),ue=a.n(se),he=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:null},a.getArticle=function(){var e,t=window.location.pathname.split("/")[2];"series"===t?e=window.location.pathname.split("/")[4]:"diary"!==t&&"search"!==t||(e=window.location.pathname.split("/")[3]),T.getArticle(e).then(function(e){a.setState({article:e.article})}).catch(function(e){console.error("API.getArticle error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getArticle(),P.highlight()}},{key:"componentDidUpdate",value:function(){P.twitter(),P.highlight()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.article?this.state.article.article_html:"",a=this.state.article?this.state.article.title:"",n=this.state.article?this.state.article.meta_description:"",o=this.state.article?this.state.article.posted_on:"",i=new Date(o).toDateString(),c=this.state.article?this.state.article.updated_on:"";c=new Date(c).toDateString();var l=this.state.article?this.state.article.tags:[],s=r.a.createElement(le.a,{title:a,subheader:"posted on:"+i+" , updated on:"+c}),u=[];for(var h in l){var p=l[h];u.push(r.a.createElement(B.a,{key:h,to:"/blog/search/?tag="+p.id},r.a.createElement(ue.a,{label:p.tag,clickable:!0})))}var g=r.a.createElement("div",{className:"twitterDiv"},r.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-text":a,"data-via":"dumblepytech1","data-show-count":"false"},"tweet"));return r.a.createElement("div",null,r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},s,g,r.a.createElement("div",{className:e.tagsMargin},u),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),r.a.createElement($.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})))}}]),t}(r.a.Component),pe=Object(g.withStyles)({tagsMargin:{margin:"10px"}})(he),ge=a(122),de=a.n(ge),me=a(121),fe=a.n(me),be=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1,searchWord:"",articles:[]},a.getArticlesByKeyword=function(e){e.length>0&&T.getArticlesByKeyword(e).then(function(e){a.setState({isMounted:!0,searchWord:e.keyword,articles:e.articles})}).catch(function(e){console.error("API.getArticlesByKeyword() error")})},a.getArticlesByTagId=function(e){T.getArticlesByTagId(e).then(function(e){a.setState({isMounted:!0,searchWord:e.tag.tag,articles:e.articles})}).catch(function(e){console.error("API.getArticlesByTagId() error")})},a.search=function(){var e=!!window.location.search.slice(1).match(/word/),t=!!window.location.search.slice(1).match(/tag/);if(e){var n=window.location.search.slice(1).match(/word/).input.split("=")[1];n=decodeURIComponent(n),a.getArticlesByKeyword(n)}else if(t){var r=window.location.search.slice(1).match(/tag/).input.split("=")[1];a.getArticlesByTagId(r)}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"componentDidUpdate",value:function(e){this.props!==e&&this.search()}},{key:"render",value:function(){var e="";if(this.state.searchWord){var t=!!window.location.search.slice(1).match(/word/),a=!!window.location.search.slice(1).match(/tag/),n="";t?(n='"'+this.state.searchWord+A.searchResultOf,"en"===window.localStorage.getItem("language")&&(n=A.searchResultOf+'"'+this.state.searchWord+'"')):a&&(n=A.searchResultTag+this.state.searchWord+A.searchResultOf,"en"===window.localStorage.getItem("language")&&(n=A.searchResultOf+A.searchResultTag+this.state.searchWord)),e=r.a.createElement(le.a,{title:n})}var o=[],i=this.state.articles;for(var c in i)o.push(r.a.createElement(B.a,{to:"/blog/search/"+i[c].timestamp,key:c},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:i[c].title}))));return this.state.isMounted&&0===o.length&&o.push(r.a.createElement(Z.a,null,r.a.createElement(ne.a,{primary:A.articlesNotFound}))),r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement(we,{searchWord:this.state.searchWord}),e,r.a.createElement(X.a,{component:"nav"},o))}}]),t}(r.a.Component),we=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchWord:""},a.searchWord=function(){var e=document.getElementById("searchWord").value;a.setState({searchWord:e})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="?word="+this.state.searchWord;return r.a.createElement("div",null,r.a.createElement(fe.a,{id:"searchWord",style:{width:"80vw"},label:A.drawerSearchLabel,onChange:this.searchWord}),r.a.createElement(B.a,{to:{pathname:"/blog/search/",search:e}},r.a.createElement(_.a,{variant:"contained"},r.a.createElement(de.a,null),A.drawerSearchButton)))}}]),t}(r.a.Component),ve=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMounted:!1,series:[]},a.getSeries=function(){T.getSeries().then(function(e){a.setState({isMounted:!0,series:e.series})}).catch(function(e){console.error("API.getSeries error")})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.series,t=[];for(var a in e)t.push(r.a.createElement(B.a,{to:"/blog/series/"+e[a].id,key:a},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:e[a].title}))));return this.state.isMounted&&0===e.length&&t.push(r.a.createElement(Z.a,null,r.a.createElement(ne.a,{primary:A.articlesNotFound}))),r.a.createElement(G.a,{className:this.props.appProps.classes.main,raised:!0},r.a.createElement("h2",null,A.productsList),r.a.createElement(X.a,{component:"nav"},t,r.a.createElement(B.a,{to:"/products/vocaburary",key:0},r.a.createElement(Z.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(R.a,null)),r.a.createElement(ne.a,{primary:"\u82f1\u5358\u8a9e"})))))}}]),t}(r.a.Component),Ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=P.getBackgroundImg();return r.a.createElement(G.a,{className:t},r.a.createElement(U.a,null,r.a.createElement(F.a,{exact:!0,path:"/blog/",render:function(t){return r.a.createElement(Q,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/series/",render:function(t){return r.a.createElement(re,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/series/:series_id",render:function(t){return r.a.createElement(oe,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/series/:series_id/:article_id",render:function(t){return r.a.createElement(pe,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/diary/",render:function(t){return r.a.createElement(ie,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/diary/:article_id",render:function(t){return r.a.createElement(pe,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{exact:!0,path:"/blog/search/:article_id",render:function(t){return r.a.createElement(pe,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{path:"/blog/search/",render:function(t){return r.a.createElement(be,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,{path:"/blog/products/",render:function(t){return r.a.createElement(ve,{routeProps:t,appProps:e.props})}}),r.a.createElement(F.a,null,r.a.createElement(J.a,{to:"/blog"}))))}}]),t}(r.a.Component),ye=Object(g.withStyles)({main:{width:"90%",minHeight:"85vh",backgroundColor:"rgba(255,255,255, 0.85)",margin:"auto",textShadow:"none",padding:"16px"}})(Ee),Oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).checkMobile=function(){window.sessionStorage.removeItem("mobile"),document.body.clientWidth<800&&(window.sessionStorage.mobile=!0)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"/"===window.location.pathname&&(window.location.href="/blog/"),this.checkMobile()}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(K,null),r.a.createElement(ye,null)))}}]),t}(n.Component),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(Oe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");je?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ae(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ae(t,e)})}}({scope:"/blog/"})}},[[124,1,2]]]);
//# sourceMappingURL=main.ab2c6eb6.chunk.js.map
"use strict";(self["webpackChunkalbum_site"]=self["webpackChunkalbum_site"]||[]).push([[412],{2412:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},t._l(t.$options.homeSection,(function(e){return i("ContentContainer",{key:e.path,attrs:{"scroll-position":t.scrollPosition,title:e.label},on:{visible:t.contentVisible}},[i(e.component,{tag:"component"})],1)})),1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{ref:"userContent",staticClass:"content-container",attrs:{id:t.title}},[i("h2",[t._v(t._s(t.title))]),t._t("default")],2)},l=[],a={name:"ContentContainer",props:{title:{type:String,required:!0},scrollPosition:{type:Number,default:0}},data(){return{isVisible:!1}},watch:{scrollPosition(){this.determineIfVisible()},isVisible(t){t&&this.$emit("visible",this.title)}},methods:{determineIfVisible(){const t=this.$refs.userContent.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,{top:i}=t,{bottom:n}=t;this.isVisible=i<=e/2&&n>e/2}},mounted(){this.determineIfVisible()}},u=a,c=i(3736),r=(0,c.Z)(u,s,l,!1,null,"03ca1844",null),p=r.exports,m={props:{scrollPosition:{type:Number,default:0}},data(){return{visibleContent:null}},methods:{contentVisible(t){this.visibleContent=t,this.$emit("newContent",t)}}},d=i(3002),b={buildViewSection:(t,e,i)=>({path:t,label:e,component:i})};const h=b.buildViewSection("latest","Latest",(()=>i.e(645).then(i.bind(i,645)))),g=b.buildViewSection("music","Music",(()=>i.e(722).then(i.bind(i,7722)))),f=b.buildViewSection("about","About",(()=>i.e(357).then(i.bind(i,9357))));b.buildViewSection("links","Links");var y=[h,g,f],w={name:"TheHomeView",components:{ContentContainer:p},mixins:[m],homeSection:y,data(){return{albums:d.Z.albums,singles:d.Z.singles}}},C=w,P=(0,c.Z)(C,n,o,!1,null,null,null),v=P.exports},3002:function(t,e,i){i.d(e,{Z:function(){return a}});var n={ALBUM:"album",SINGLE:"single"},o={soundcloud:{icon:"soundcloud.png",title:"Soundcloud"},bandcamp:{icon:"bandcamp.png",title:"Bandcamp"},spotify:{icon:"spotify.png",title:"Spotify"},appleMusic:{icon:"applemusic.png",title:"Apple Music"},googlePlay:{icon:"googleplay.png",title:"Google Play Music"}};function s(t,e){return{...t,link:e}}const l={albums:[{title:"Refraction",coverPath:"Refraction.jpg",type:n.ALBUM,loading:!0,isReleased:!0,streaming:[s(o.bandcamp,"https://xrgb.bandcamp.com/album/refraction"),s(o.spotify,"https://open.spotify.com/album/79mhGijQ34QP9qMnd5060T?si=dqX4gOdXRYK_P6V9Uhb02Q"),s(o.googlePlay,"https://music.youtube.com/playlist?list=OLAK5uy_lS7C76SoLN6ZReXH3WkeUFwIQrbmrDLNo&feature=share"),s(o.appleMusic,"https://music.apple.com/us/album/refraction/1518269881?uo=4"),s(o.soundcloud,"https://soundcloud.com/xrgbmusic/sets/refraction")],feature:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BysmYm124VM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',about:"<p></p>",path:"/refraction"}],singles:[{title:"August 19",coverPath:"August 19 Cover.jpg",streaming:[s(o.spotify,"https://open.spotify.com/album/4ZYl00c2HEUv7hPLEmFkeq?si=pOahyrKtT5WxeaCE5IdJxg"),s(o.googlePlay,"https://play.google.com/music/m/Byanps25qf6k7nrzv7sl3puw6dy?t=August_19_-_xRGB"),s(o.appleMusic,"https://music.apple.com/us/album/august-19/1518419353?i=1518419354")],type:n.SINGLE,loading:!0},{title:"Joint Pain",coverPath:"Joint Pain.jpg",streaming:[s(o.spotify,"https://open.spotify.com/album/5XkVKJc6tfB2PUfm206PLX?si=jqMiRtauTUOmgZJ6Csv91g"),s(o.googlePlay,"https://play.google.com/music/m/B43wgzroiq7h5z2i4dh5r3r24my?t=Joint_Pain_-_xRGB"),s(o.appleMusic,"https://music.apple.com/us/album/joint-pain/1517331040?i=1517331044")],type:n.SINGLE,loading:!0}]};var a=l}}]);
//# sourceMappingURL=412.27b1b6a1.js.map
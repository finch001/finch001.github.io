(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(t,e){const n={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dynamicMarkdown"},[n("h2",[t._v("What is Vuex?")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("What problem does it solve?")]),t._v(" "),n("p",[t._v("When you work with a library like Vue, the component information is transported from a parent component to a child component through “props” and vice versa through emiting an event that the parent component will hear. Sometimes you need to access information from one component to another which don’t have the father-son relationship. How are you going to get them to comunicate then? Technically it can be done, but it can be very complicated ending up with business logic spread all over the app which it’s likely to repeat itself. This is where the centralization of that information comes in with tools such as Vuex, in Vue, or Redux, in React. You can not only centralize information but also functions.")]),t._v(" "),n("h2",[t._v("Its structure")]),t._v(" "),n("p",[t._v("Vuex is distributed as follows:")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("How and why I used it wrong")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("But I was a rookie and I thought that this idea of ​​information centralization would be great to create this webapp with blog that I explained in this "),n("nuxt-link",{attrs:{to:"blog-using-vue-nuxt-markdown"}},[t._v("post")]),t._v(". In a first step I thought about importing all the markdown files in my webapp all at once through an action that would commit a mutation to finish saving all the posts in the state. So, later I would have access from the state to all the posts or to only one, as needed in each component. For example, in the dynamic page of each post I would simply do something like that and get the post I’m looking for:")],1),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("I don’t use Vuex modules in the example below to make it easier to understand. We are simply calling the state that we have configured it as an array with the languages ​​of the page, (in this case we want to only remove the current language) and the type of information we want (in this case we want blogs).\nWe return an object that will be the object of the post URL that matches the blogs array.")]),t._v(" "),n("p",[t._v("In theory the state would reuse it many times, for example, to get all the posts on the home page of the web.")]),t._v(" "),n("p",[t._v("SO That’s what I did, it made sense until here or that’s what I thought. BUT NO. I was very wrong. THINK AGAIN.")]),t._v(" "),n("p",[t._v("The main problem of I used Vuex was SCALABILITY. It’s not a problem with Vuex, but rather how I had built it by not taking into account how it works.")]),t._v(" "),n("p",[t._v("I had made an import of all the markdown in Vuex where I kept and managed it from there. When saving them in Vuex, all the posts were executed in the first load in the initial JS and the more posts it had, the larger it would be the payload and the longer it would take to load the webapp. Of course, once the first load passed, the web was crazy fast… but it didn’t make any sense at the level of scalability.")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("This error, like so many others that I’ve found in this project alone, helped me to learn a lot about Vuex, when to use it and when not.")]),t._v(" "),n("p",[t._v("Luckily I realized my mistake before publishing this webapp and I was able to change the import system. I wrote a post about how I made this dynamic import "),n("nuxt-link",{attrs:{to:"blog-using-vue-nuxt-markdown"}},[t._v("here")]),t._v(".")],1),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In short, "),e("a",{attrs:{href:"https://vuex.vuejs.org/"}},[this._v("Vuex")]),this._v(" allows you to centralize information and features of the app that are accessible through any component.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("State")]),t._v(" (in the code "),n("code",{pre:!0},[t._v("state")]),t._v("):\n"),n("ul",[n("li",[t._v("It’s an object that can contain any type of information: strings, arrays or other objects.")]),t._v(" "),n("li",[t._v("It’s information stored centrally throughout the app.")])])]),t._v(" "),n("li",[n("strong",[t._v("Mutations")]),t._v(" (in the code "),n("code",{pre:!0},[t._v("mutations")]),t._v("):\n"),n("ul",[n("li",[t._v("They are functions.")]),t._v(" "),n("li",[t._v("They are the only functions that can modify the state.")]),t._v(" "),n("li",[t._v("They are called by the actions.")]),t._v(" "),n("li",[t._v("They can be initialized in the component to be used through "),n("em",[t._v("commit")]),t._v(" or initialized through an action.")]),t._v(" "),n("li",[t._v("They are synchronous.")])])]),t._v(" "),n("li",[n("strong",[t._v("Actions")]),t._v(" (in the code "),n("code",{pre:!0},[t._v("actions")]),t._v("):\n"),n("ul",[n("li",[t._v("They are functions.")]),t._v(" "),n("li",[t._v("They have the business logic.")]),t._v(" "),n("li",[t._v("To change the state they must call mutations via "),n("em",[t._v("commit")]),t._v(".")]),t._v(" "),n("li",[t._v("You can call other actions through "),n("em",[t._v("dispatch")]),t._v(".")]),t._v(" "),n("li",[t._v("The way to initialize them in the component is through "),n("em",[t._v("dispatch")]),t._v(" or using modules.")]),t._v(" "),n("li",[t._v("They are asynchronous.")])])]),t._v(" "),n("li",[n("strong",[t._v("Getters")]),t._v(" (in the code "),n("code",{pre:!0},[t._v("getters")]),t._v(").\n"),n("ul",[n("li",[t._v("They are functions.")]),t._v(" "),n("li",[t._v("They don’t change the state but they do format it so that we can use that information in the way we need it.")]),t._v(" "),n("li",[t._v("It would be very similar to a computed property in the component.")]),t._v(" "),n("li",[t._v("An example would be a function that filtered the state. It doesn’t modify it but it returns a new different object with the filtered data that you need.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("The fact that Vuex exists doesn’t mean that all applications need it!")]),this._v(" Remember that Vuex makes sense if the code is reused or if there are distant components that need to communicate. It doesn’t make sense to do a getter if you only use it once and it doesn’t communicate with another component, instead, you should create a computed property in the same component that needs it.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-javascript"},[n("code",{staticClass:"language-javascript"},[n("span",{staticClass:"token function"},[t._v("data")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),n("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" blogs "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("this")]),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$store"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("state"),n("span",{staticClass:"token punctuation"},[t._v("[")]),n("span",{staticClass:"token keyword"},[t._v("this")]),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$i18n"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale"),n("span",{staticClass:"token punctuation"},[t._v("]")]),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("blogs\n  "),n("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    blog"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" blogs"),n("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("params"),n("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("slug"),n("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n  "),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),n("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("I’ll explain my big mistake with Vuex in a non-technical example:")]),this._v(" Thinking that milk doesn’t expire, imagine that instead of buying a box of milk in the supermarket when you need it, you buy the first time all the boxes of milk that you will consume in your whole life and keep them at home. The initial cost would be tremendous and it doesn’t make sense to keep things that you won’t use at that time, but you will not have to go to the supermarket ever again.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since I don’t have a comments section on each post, I would love to continue the conversation on "),e("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[this._v("Twitter")]),this._v(". All feedback is welcome! If you think there is something that it can be improved, write me, you will help me a lot to learn.")])}]};t.exports={attributes:{name:"vuex-what-is-when-use-it",title:"How Vuex works and how I used it wrong",year:"23 January 2019",color:"#edece7",isTextColorDark:!0,trans:"vuex-que-es-cuando-utilizarlo",id:"vuex-what-when",description:"Vuex basics, how I make my website's performance worse using it and why\n"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);
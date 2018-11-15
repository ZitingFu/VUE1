//引入组件
import Vue from 'vue' //引入Vue模块
import VueRouter from 'vue-router'  //引入路由模块
import vueResource from 'vue-resource' //插件
import jquery from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui';


	
import axios from 'axios'
import App from './App'  //components 里面的
import HelloWorld from './components/HelloWorld' //因为路由跳转路径是HelloWorld所以先引进来

import Home from './components/Home'
import Users from './components/Users'
//form-data类型
import queryString from 'query-string'
//全局注册组件。。。。。。。。。。。。。
//import Users from './components/Users'
//import Hellow from './components/HelloWorld'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
//设置token
axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"
//路由
Vue.use(VueRouter) //使用路由
Vue.use(vueResource) //http插件
Vue.use(ElementUI)
Vue.use(Mint);	

//配置路由
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},  //路由地址(跳转地址)
		{path:"/HelloWorld",component:HelloWorld},
		{path:"/Users",component:Users}
	],
	mode:"history"  //去掉跳转的#
})

//全局注册组件。。。。。。。。。。。。。
//Vue.component("users",Users)
//Vue.component("Hello0",Hellow)



/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',      //当前vue要控制获取的元素，就是html的ID=“”
  components: { App }, //模板调用组件，需要在components注册组件
  template: '<App/>'  //模板：组件调用的标签 必须有一个根组件
})


//index.html -> main.js ->App.vue
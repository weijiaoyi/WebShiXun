// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Resource from 'vue-resource'

import liveContext  from "./components/XuJinRen/liveContext"
import ces from "./components/XuJinRen/ceshi"

//知识区
import kz from "./components/tantengkai/kz/kz.vue"

Vue.config.productionTip = false
import Personal from "./components/Helinjun/Personal/Personal"

Vue.use(Resource)
Vue.use(Router)
//    关闭生产模式下的提示
Vue.config.productionTip = false
/* eslint-disable no-new */
//定义路由页面
const routes = [
  {path:'/liveContext', component:liveContext},
  {path:'/ces', component:ces},
<<<<<<< HEAD
  {path:'/Personal', component:Personal},
  
=======
  //知识区
  {path:'/kz', component:kz}

>>>>>>> cefc5787c1ef5877aa76be94ec2ae8bc7afbbb7d
]

const router = new Router({
	routes
})

let app = new Vue({
	el:"#app",
	router,
	//渲染视图
	render:h => h(App)
})

Vue.use({
	app
})

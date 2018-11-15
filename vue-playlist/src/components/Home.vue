<!--模板-->
<template>
  <div id="Home">  <!--根标签只能有一个-->
  	<head0 v-on:titlechang="updata($event)" v-bind:titles="title"></head0>
  	<!--<bannter></bannter>-->
  	<!--父组件向自组建传递数据-->
  	<center v-bind:Heads="Headss"></center>
  	<center v-bind:Heads="Headss"></center>
  	<footer0 v-bind:titles="title"></footer0>
  	<mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<!--处理逻辑-->
<script>
	//局部注册组件
//import Users from './components/Users'
//import Hellow from './components/HelloWorld'

import Head from './Head'
//import Bannter from './components/Bannter'
import Center from './Center'
import Footer from './Footer'


export default {
  name: 'home',
  data(){
  	return{
			Headss:[
//					{
//						name:"傅紫婷",
//						age:"18",
//						sex:"傅紫婷",
//						showB:false
//					},
//					{
//						name:"杨林",
//						age:"18",
//						sex:"杨林",
//						showB:false
//					},
//					{
//						name:"小梦",
//						age:"18",
//						sex:"小梦",
//						showB:false
//					},
//					{
//						name:"小辉",
//						age:"18",
//						sex:"小辉",
//						showB:false
//					},
//					{
//						name:"东方健康",
//						age:"18",
//						sex:"东方健康",
//						showB:false
//					},
//					{
//						name:"打底裤",
//						age:"18",
//						sex:"打底裤",
//						showB:false
//					},
//					{
//						name:"dfas",
//						age:"18",
//						sex:"dfas",
//						showB:false
//					},
//					{
//						name:"sdfsd",
//						age:"18",
//						sex:"sdfsd",
//						showB:false
//					}
				],
			title:"传递的是一个值，(number string boolean)"
  	}
  },
  //子向父级传值
  methods:{
  	updata(title0){
  		this.title = title0
  	},
  	 handleClick: function() {
      this.$toast('Hello world!')
    }
  },
  components:{
  		"head0":Head,
//		"bannter":Bannter,
  		"center":Center,
  		"footer0":Footer
  },
  created(){
//	 fetch("/apis/im/register",{
//    method:"POST",
//    headers:{
//    	name:'fdsa',
//    	password:'4567895'
//    },
//  }).then(result=>{
//    //解析数据
//   console.log(result) 
//  })
  	
	this.$http.get("http://jsonplaceholder.typicode.com/posts")
	.then((data)=>{
//		console.log(data)
		this.Headss = data.body
	})
  }
}
</script>

<!--样式-->
<style>
	*{
		margin: 0;
		padding: 0;
	}
	.banxin{
		width: 1000px;
		height: 100%;
		overflow: hidden;
		margin: 0 auto;
	}
	li{
		list-style: none;
	}
</style>

<!--模板-->
<template>
  <div id="app">  <!--根标签只能有一个-->
  	<ul>
  		<li><router-link to="/Users">Users</router-link></li>
  		<li><router-link to="/">home</router-link></li>
  		<li><a href="/HelloWorld">123</a></li>
  	</ul>
  	<router-view></router-view>
  </div>
</template>
<!--处理逻辑-->
<script>
	//局部注册组件
//import Users from './components/Users'
//import Hellow from './components/HelloWorld'

import Head from './components/Head'
//import Bannter from './components/Bannter'
import Center from './components/Center'
import Footer from './components/Footer'
import queryString from 'query-string';
export default {
  name: 'App',
  data(){
  	return{
		
  	}
  },
  //请求跨域接口
	 created(){
    //fetch实现跨域请求
//  fetch("/apis/mini/question/info",{
//    method:"POST",
//    body:JSON.stringify({id:'268481447'})
//  }).then(result=>{
//    //解析数据
//   console.log(result.json()) 
//  })
		let centen = {
			name:'傅紫婷',
			password:'4567895'
		}
		fetch("/apis/im/register",{
      method:"POST",
       headers: {
    		  "Content-Type": "application/x-www-form-urlencoded"
  		},
  		//form-data类型
       body:queryString.stringify(centen),
    }).then(result=>{
      //解析数据
      return result.json()
    }).then(data=>{
        console.log(data)
    })


		//axios
//		this.$axios.post("/apis/test/testToken.php",{
//    username:"lgs",password:"123"
//    }).then(data=>{
//      console.log(data)
//    })
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

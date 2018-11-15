<template>
  <div class="hellow">
  	<h1 v-on:click="btn">{{titles}}</h1>
  	<el-row>
	  <el-button>默认按钮</el-button>
	  <el-button type="primary">主要按钮</el-button>
	  <el-button type="success">成功按钮</el-button>
	  <el-button type="info">信息按钮</el-button>
	  <el-button type="warning">警告按钮</el-button>
	  <el-button type="danger">危险按钮</el-button>
	</el-row>

  </div>
</template>
<!--
	传值：String Number Boolean
	引用：Array objet
-->
<!--
	路由有什么好处？
	庸俗点说,可以不需要刷新页面就可以跳到对应的板块,性能好，不管点击多少次都会发送一个http请求
-->
<script>
export default{
		name:'Head',
		props:{
			titles:{
				type:String, //类型
				required:true
			}
			
		},
		data(){
			return{
				hellows:["我是头部","头部","头部"]
			}
		},
		methods:{
			btn:function(){
//				this.titles = "看我72变"
					this.$emit('titlechang','子向辅组件传值')//注册事件
			}
		},
//		beforeCreate:function(){
//			alert("组件实例化之前要做的事情")
//		},
//		created:function(){
//			alert("组件实例化完毕，但页面还未显示")
//		},
//		beforeMount:function(){
//			alert("组件挂在前，页面仍未展示，但虚Dom已经配置")
//		},
//		mounted:function(){
//			alert("组件挂在后，此方法执行后，页面显示")
//		},
//		beforeUpdate:function(){
//			alert("组件更新前，页面仍未展示，但虚Dom已经配置")
//		},
//		Update:function(){
//			alert("组件更新，此方法执行后，页面显示")
//		},
//		beforeDestroy:function(){
//			alert("组件销毁前")
//		},
//		destroyed:function(){
//			alert("组件销毁")
//		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 h1{
	 	height: 60px;
	 	line-height: 60px;
		background-color: greenyellow;
		color:#000;
		text-align: center;
		font-size: 16px;
		font-weight: normal;
	}
</style>

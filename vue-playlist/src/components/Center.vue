<template>
  <div class="hellow">
  	<div class="banxin">
  		<h3>Hello users</h3>
  		<ul class="box">
  			<li v-on:click="clion(index)" v-for="(Head,index) in Heads">
  				<h5>{{Head.id}}</h5>
  				<!--<h6 v-show="Head.showB"</h6>-->
  			</li>  
  		</ul>
  		<!--<button v-on:click="de()">删除</button>-->
  	  	<!--<div class="herry">herry</div>-->
  	</div>
  </div>
</template>
<!--
	传值：String Number Boolean
	引用：Array objet
-->
<script>
export default{
		name:'Head',
		//从父组件向自字组件传递数据
		//自己的写法
		//		props:["Heads"], //bind:后面的
		//官方标准写法
		props:{
			Heads:{
				type:Array, //类型
				required:true
			}
			
		},
		data(){
			return{
			
			}
		},
		methods:{
//			clion:function(red){
//				this.Heads[red].showB = !this.Heads[red].showB
//			},
			de:function() {
					console.log('删除')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 h3{
		margin:15px 0 ;
	}
	.box{
		width: 1000px;
		display: flex;
		flex-wrap:wrap;
		overflow: hidden;
	}
	
	.box li{
		height: 30px;
		width:22.5%;
		flex-grow:1;
		flex-basis:2;
		text-align: center;
		/*margin-left:3%;*/
		padding: 25px 0px;
		margin-bottom: 20px;
		border:1px solid #000000;

	}
	.box li:first-child{
		margin-left:0;
	}
	.box li:nth-child(5n){
		margin-left:0;
	}
	.herry{
		height: 80px;
		line-height: 80px;
		text-align: center;
		border: 1px solid #000000;
		margin:20px 0;
	}
</style>

<template>
  <div class="hellow">
  	<h1>我是底部{{titles}}</h1>
  </div>
</template>

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
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 h1{
	 	text-align: center;
	 	margin-top: 20px;
	 	height:40px;
	 	line-height: 40px;
		background-color:#000;
		font-size: 14px;
		color: green;
	}
</style>

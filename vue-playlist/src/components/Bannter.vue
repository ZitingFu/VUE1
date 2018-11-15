<template>
  <div class="hellow">
  	<h1>我是轮播图</h1>
  </div>
</template>

<script>
export default{
		name:'Head',
		data(){
			return{
				Bannters:["我是头部轮播图","轮播图","轮播图"]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 h1{
		background-color: aqua;
		color: #000;
	}
</style>

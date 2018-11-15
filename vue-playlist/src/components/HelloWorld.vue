<template>
  <div class="hellow">
  	<h1>我是hellow</h1>
    <ul>
    	<li v-for="hellow in hellows">
    		{{hellow}}
    	</li>
    </ul>
  </div>
</template>

<script>
export default{
		name:'hellow',
		data(){
			return{
				hellows:["你好","还好","不行"]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 h1{
		background-color: #000;
		color: #fff;
	}
</style>

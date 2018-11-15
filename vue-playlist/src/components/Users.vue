<template>
	<div class="users">
		<h1>我是users</h1>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
			  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
			  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div>
			<mt-button @click.native="handleClick">按钮</mt-button>
		    <el-button @click="show = !show">Click Me</el-button>
		
		    <div style="display: flex; margin-top: 20px; height: 100px;">
		      <!--<transition name="el-fade-in-linear">
		        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
		      </transition>-->
		      <transition name="el-fade-in">
		        <div v-show="show" class="transition-box">.el-fade-in</div>
		      </transition>
		    </div>
  		</div>
  		<el-steps :active="active" finish-status="success">
		  <el-step title="步骤 1">
		  </el-step>
		  <el-step title="步骤 2">
		  </el-step>
		  <el-step title="步骤 3">
		  </el-step>	  
		</el-steps>
		<div class="d">
			
		</div>
		<p style="text-align: center;"><el-button style="margin-top: 12px;" @click="next">下一步</el-button></p>
		
	</div>
	
</template>

<script scoped>
	export default {
		 
	    data: () => ({
	    active: 0,
	      show: true
	    }),
	    methods:{
	    	next() {
	       	 	if (this.active++ > 2) this.active = 0;
	      	},
	      	 handleClick: function() {
          		this.$toast('Hello world!')
       		 }
	    }
	 }
</script>

<style scoped>
	.d{
		width: 1000px;
		height: 300px;
		margin: 0 auto;
	}
	.transition-box {
	    margin-bottom: 10px;
	    width: 200px;
	    height: 100px;
	    border-radius: 4px;
	    background-color: #409EFF;
	    text-align: center;
	    color: #fff;
	    padding: 40px 20px;
	    box-sizing: border-box;
	    margin-right: 20px;
	  }
	 h1{
		background-color: saddlebrown;
	}
</style>
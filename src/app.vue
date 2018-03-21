<template>
	<div id="app">
		<header id="header" class="">
			<img src="./assets/img/logo.png" alt="">
		</header>
		<div id="content">
			<headerInput></headerInput>
			<todoList></todoList>
		</div>
	</div>
</template>

<script>
	
	import headerInput from './components/header-input.vue';
	import todoList from './components/todo-list.vue';

	export default {
		name: "app",
		components: {
			headerInput,
			todoList
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="css">
	@import './styles/html.css';
</style>
<style lang="less" scoped>
	@import "./styles/main.less";
	//通过@import导入文件，必须加分号，不然会报错“Missing semi-colon or unrecognised media features on import”
	#app {
		header {
			display: flex;
			justify-content: center;

			img {
				padding: 0;
				margin: 0;
				height: 150px;
				width: 150px;
			}
		}
	}
</style>
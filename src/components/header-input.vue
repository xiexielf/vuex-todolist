<template>
	<div id="header-input">
		<input class="add-text" v-model.trim="addText" type="text" name="add-text">
		<button class="add-button" type="button" value="添加" @click="addList">添加</button>
	</div>
</template>

<script>
	export default {
		name: "header-input",
		data() {
			return {
				addText: '',
			}
		},
		mounted() {

		},
		methods: {
			addList(){
				this.$store.dispatch('addTodo',this.addText)
				this.addText = ''
			}
		}
	}
</script>

<style lang="less" scoped>
	#header-input {
		display: flex;
		justify-content: center;

		.add-text {
			font-size: 16px;
			height: 30px;
			width: 300px;
			padding: 0 5px;
			line-height: 30px;
		}

		.add-button {
			height: 34px;
			padding: 0 15px;
			background-color: #38c38a;
			border: none;
			font-size: 16px;
			color: #fff;
			outline: none;
			font-weight: 600;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
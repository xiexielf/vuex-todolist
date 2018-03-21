<template>
	<div id="todo-list">
		<ul class="todo-type">
			<li><a href="javascript:void(0)" :class="{'isSelect': selectType==0}" @click.stop="selectTypeClick(0)">全部</a></li>
			<li><a href="javascript:void(0)" :class="{'isSelect': selectType==1}" @click.stop="selectTypeClick(1)">已完成</a></li>
			<li><a href="javascript:void(0)" :class="{'isSelect': selectType==2}" @click.stop="selectTypeClick(2)">未完成</a></li>
		</ul>
		<ul class="todo-lists">
			<li v-for="(item,index) in todoList" :class="{'isDone': item.isDone}" @click="todoDone(item.id)">{{index+1}}：{{item.text}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'todo-list',
		data() {
			return {
				
			}
		},
		computed:{
			todoList(){
				let selectType = this.$store.state.todo.selectType
				if (selectType === 0) {
					return this.$store.state.todo.todoList
				} else if (selectType === 1) {
					return this.$store.getters.isDoneTodoList
				} else if (selectType === 2) {
					return this.$store.getters.noDoneTodoList
				}
			},
			selectType(){
				return this.$store.state.todo.selectType
			}
		},
		mounted(){

		},
		methods: {
			selectTypeClick(val){
				this.$store.dispatch('selectType',val)
			},
			todoDone(id){
				this.$store.dispatch('doneTodo',id)
			}
		}
	}
</script>

<style lang="less" scoped>
	#todo-list {
		padding-top: 10px;

		.todo-type {
			display: flex;
			justify-content: center;
			height: 40px;

			>li {
				line-height: 40px;
				margin: 0 10px;
				>a {
					display: block;
					padding: 0 10px;
					background-color: #c5c4c4;
					color: #fff;
					vertical-align: top;

					&.isSelect {
						background-color: #38c38a;
					}

					&:hover {
						background-color: #38c38a;
					}
				}
			}
		}

		.todo-lists {
			display: block;
			text-align: center;
			padding-top: 20px; 

			>li {
				display: block;
				line-height: 30px;
				font-size: 14px;

				&.isDone {
					text-decoration: line-through;
				}
			}
		}
	}
</style>
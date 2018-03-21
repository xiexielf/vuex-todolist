import actions from './actions'
import mutations from './mutations'

export default {
	state: {
		todoList :[],
		todoInfo: {
			id: 0,
			text: '',
			isDone: false,
		},
		selectType: 0,
	},
	actions: actions,
	mutations: mutations,
	getters: {
		isDoneTodoList(state){
			return state.todoList.filter(item => {
			 	if (item.isDone) {
					return item
			 	}
			});
		},
		noDoneTodoList(state){
			return state.todoList.filter(item => {
				if (!item.isDone) {
					return item
			 	}
			});
		}
	}
}
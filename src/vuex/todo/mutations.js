
export default {
	['addTodo'](state, addText) {
		if (addText) {
			let todoInfo = {}
			todoInfo.isDone = false
			todoInfo.text = addText

			let len = state.todoList.length
			if (len == 0) {
				todoInfo.id = 0
			} else {
				todoInfo.id = state.todoList[len-1].id + 1
			}

			state.todoList.push(todoInfo)
		}
	},
	['doneTodo'](state, id) {
		state.todoList.forEach(item => {
			if (item.id === id) {
				item.isDone = true
			}
		})
	},
	['selectType'](state, type) {
		state.selectType = type
	}
}
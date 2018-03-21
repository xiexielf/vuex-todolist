
export default {
	addTodo({commit}, addText) {
		commit('addTodo', addText)
	},
	doneTodo({commit}, id) {
		commit('doneTodo', id)
	},
	selectType({commit}, type) {
		commit('selectType', type)
	}
}
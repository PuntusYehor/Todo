import { TOGGLE_TODO, ADD_TODO, DELETE_TODO } from "./actions";

export const TodoReducer = (state = [], { type, payload }) => {
	
	switch (type) {

		case ADD_TODO:
			return [...state, payload]

		case TOGGLE_TODO: 
			return state.map((todo) => {
				if (todo.id === payload) {
					return {...todo, completed: !todo.completed}
				}
				return todo
			})
		
		case DELETE_TODO:
			return state.filter((item) => item.id !== payload)
		
		default:
			return state
	}
};
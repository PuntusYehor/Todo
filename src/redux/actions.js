export const VIEW_ALL ="VIEW_ALL";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = "DELETE_TODO";

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodoAction = (todo) => {
	return {type: ADD_TODO, payload: todo};
};

export const completeTodoAction = id => {
	return {type: TOGGLE_TODO, payload: id}
};

export const deleteTodoAction = id => {
	return {type: DELETE_TODO, payload: id}
}

export const setVisibilityFilter = (filter) => {
	return { type: SET_VISIBILITY_FILTER, filter }
};

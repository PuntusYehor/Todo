import { SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";

const {SHOW_ALL} = VisibilityFilters;

export const VisibilityReducer = (state = SHOW_ALL, {type, filter}) => {
	switch(type) {
		case SET_VISIBILITY_FILTER:
			return filter

		default:
			return state
	}
};

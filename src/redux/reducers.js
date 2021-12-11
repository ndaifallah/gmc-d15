const initialState = {
	logged: false,
};

export default (state = initialState, { type, payload }) => {
	if (type == "LOGIN") {
		let newState = { logged: true };
		return newState;
	}
	if (type == "LOGOUT") {
		let newState = { logged: false };
		return newState;
	}
	return state;
};

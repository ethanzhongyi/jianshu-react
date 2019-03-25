const defaultState = {
	inputValue: '',
	list: []
}

export default (state = defaultState, action) => {
	if (action.type === 'input_change') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if(action.type === 'commit') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if(action.type === 'del') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
  return state;
}
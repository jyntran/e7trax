const initialState = {
	tracks: {},
	currentIndex: null,
	isPlaying: false
}

export default(state = initialState, action) => {
	switch (action.type) {
		case 'store':
			return {
				...state,
				tracks: action.tracks,
				currentIndex: action.currentIndex,
			}
		case 'play':
			return {
				...state,
				currentIndex: action.index,
				isPlaying: true
			}
		case 'pause': 
			return {
				...state,
				isPlaying: false				
			}
		case 'backward':
		case 'forward':
			return {
				...state,
				currentIndex: action.currentIndex
			}
		case 'select':
			return {
				...state,
				currentIndex: action.index
			}
		default:
			return state;
	}
}
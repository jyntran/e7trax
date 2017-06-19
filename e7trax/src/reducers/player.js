const initialState = {
	tracks: {},
	currentIndex: null,
	isPlaying: null,
	isStarted: false,
	playlistUrl: ''
}

export default(state = initialState, action) => {
	switch (action.type) {
		case 'store':
			return {
				...state,
				tracks: action.tracks,
				currentIndex: action.currentIndex,
				playlistUrl: action.playlistUrl
			}
		case 'play':
			return {
				...state,
				currentIndex: action.index,
				isPlaying: true,
				isStarted: true
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
		case 'stop':
			return {
				...state,
				isPlaying: null
			}
		default:
			return state;
	}
}
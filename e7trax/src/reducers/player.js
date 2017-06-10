const initialState = {
	tracks: [],
	currentSong: {},
	currentSongIndex: null,
	isPlaying: false
}

export default(state = initialState, action) => {
	switch (action.type) {
		case 'store':
			return {
				tracks: action.tracks,
				currentSong: action.currentSong,
				currentSongIndex: 0,
				isPlaying: false
			}
		case 'play':
			return {
				...state,
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
				currentSong: state.tracks[action.index],
				currentSongIndex: action.index
			}
		default:
			return state;
	}
}
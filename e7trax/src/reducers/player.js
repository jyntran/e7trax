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
				tracks: state.tracks,
				currentSong: state.currentSong,
				currentSongIndex: state.currentSongIndex,
				isPlaying: !state.isPlaying
			}
		case 'backward':
		case 'forward':
			return {
				tracks: state.tracks,
				currentSong: state.tracks[action.index],
				currentSongIndex: action.index,
				isPlaying: state.isPlaying
			}
		default:
			return state;
	}
}
export const storeTracks = (list) => {
	return {
		type: 'store',
		tracks: list,
		currentSong: list[0]
	}
}

export const playTrack = () => {
	return {
		type: 'play'
	}
}

export const backTrack = (currentSongIndex) => {
	const songIndex = Math.max(0, currentSongIndex-1)
	return {
		type: 'backward',
		index: songIndex
	}
}

export const forwardTrack = (tracks, currentSongIndex) => {
	const lastIndex = tracks.length-1
	const songIndex = Math.min(lastIndex, currentSongIndex+1)
	return {
		type: 'forward',
		index: songIndex
	}
}
export const storeTracks = (tracks) => {
	return {
		type: 'store',
		tracks: tracks,
		currentIndex: 1
	}
}

export const playTrack = () => {
	return {
		type: 'play'
	}
}

export const pauseTrack = () => {
	return {
		type: 'pause'
	}
}

export const backTrack = (currentIndex) => {
	const currIndex = +currentIndex;
	const songIndex = Math.max(1, currIndex)
	return {
		type: 'backward',
		currentIndex: songIndex
	}
}

export const forwardTrack = (currentIndex, numOfTracks) => {
	const currIndex = +currentIndex
	const songIndex = Math.min(currIndex+1, numOfTracks)
	return {
		type: 'forward',
		currentIndex: songIndex
	}
}

export const selectTrack = (index) => {
	return {
		type: 'select',
		index
	}
}
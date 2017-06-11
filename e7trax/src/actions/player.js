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
	const songIndex = Math.max(1, currentIndex-1)
	return {
		type: 'backward',
		currentIndex: songIndex
	}
}

export const forwardTrack = (currentIndex, numOfTracks) => {
	const songIndex = Math.min(currentIndex+1, numOfTracks)
	return {
		type: 'forward',
		currentIndex: songIndex
	}
}
export const storeTracks = (tracks) => {
	return {
		type: 'store',
		tracks: tracks,
		currentIndex: 1
	}
}

export const playTrack = (index) => {
	return {
		type: 'play',
		index
	}
}

export const pauseTrack = () => {
	return {
		type: 'pause'
	}
}

export const backTrack = (currentIndex) => {
	const currIndex = +currentIndex;
	const songIndex = Math.max(1, currIndex-1)
	return {
		type: 'backward',
		currentIndex: songIndex
	}
}

export const forwardTrack = (currentIndex, numOfTracks, tracks) => {
	var songIndex = +(currentIndex)
	if (!(currentIndex == numOfTracks)) {
		songIndex = +(currentIndex) + 1
		while (!tracks[songIndex].preview_url) {
			songIndex = Math.min(songIndex, numOfTracks)
			songIndex++
		}
	}
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

export const stopTrack = () => {
	return {
		type: 'stop'
	}
}
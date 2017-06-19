export const storeTracks = (tracks, url) => {
	return {
		type: 'store',
		tracks: tracks,
		currentIndex: 1,
		playlistUrl: url
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

export const backTrack = (currentIndex, tracks) => {
	var songIndex = +(currentIndex) - 1
	while (!tracks[songIndex].preview_url) {
		songIndex = Math.max(1, songIndex-1)
		songIndex--
	}
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
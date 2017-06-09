var SpotifyWebApi = require('spotify-web-api-node');

var clientId = '',
    clientSecret = '',
    userId = '',
    playlistId = '';

var spotifyApi = new SpotifyWebApi({
    clientId : clientId,
    clientSecret : clientSecret
});

module.exports.auth = function(req, res) {
    spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);

    spotifyApi.getPlaylistTracks(userId, playlistId)
      .then(function(data) {
	console.log('Playlist fetched!');
        res.send(data.body.items);
      }, function(err) {
        console.log('Something went wrong when retrieving the playlist', err);
      });

    }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    });
}

const Spotify = require('node-spotify-api');
const spotifyApi = new Spotify({id: '9374a4dd0b204fa894f8c46b8793007f', secret: '34db379c5a8f42fc8be6a84c14b183a2'});

module.exports = function(app) {

    app.get('/spotify/search/:query', function (req, res) {
        spotifyApi.search({ type: 'playlist', query: req.params.query, limit: 18 }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                res.send({});
            }

            res.send(data);
        });
    });

    app.get('/spotify/songs/:id', function (req, res) {
        spotifyApi.request("https://api.spotify.com/v1/playlists/" + req.params.id, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                res.send({});
            }

            console.log("Spotify req returned: " + JSON.stringify(data));
            res.send(data);
        });
    });
};
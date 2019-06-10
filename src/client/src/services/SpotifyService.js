class SpotifyService {

    static myInstance = null;

    static BASE_URL = 'https://api.spotify.com/v1';

    static getInstance() {
        if (SpotifyService.myInstance == null) {
            SpotifyService.myInstance =
                new SpotifyService();
        }
        return this.myInstance;
    }

    search = (query) => fetch('/spotify/search/' + query).then(response => response.json());

    getSongs = (id) => fetch('/spotify/songs/' + id).then(response => response.json());
}

export default SpotifyService

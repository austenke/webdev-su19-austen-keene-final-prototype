const PlaylistReducer = (state={playlists: [], selectedPlaylist: {}, query: "", renderPlaylists: true}, action) => {
    switch (action.type) {
        case 'LOAD_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists.playlists.items,
                renderPlaylists: true
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                selectedPlaylist: action.playlist,
                renderPlaylists: false
            };
        case 'CHANGE_QUERY':
            return {
                ...state,
                query: action.query
            };
        default:
            return state;
    }
};

export default PlaylistReducer

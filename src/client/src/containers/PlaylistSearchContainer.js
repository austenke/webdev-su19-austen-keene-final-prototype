import PlaylistSearch from "../components/PlaylistSearch";
import {connect} from 'react-redux'
import SpotifyService from '../services/SpotifyService.js'

const service = SpotifyService.getInstance();

const stateToPropMapper = state => ({
    playlists: state.playlists,
    selectedPlaylist: state.selectedPlaylist,
    query: state.query,
    renderPlaylists: state.renderPlaylists
});

const propsToDispatcher = dispatch => ({
    search: (query) => {
        service
            .search(query)
            .then(playlists => dispatch({
                type: "LOAD_PLAYLISTS",
                playlists: playlists
            }))
    },
    getSongs: (url) => {
        service
            .getSongs(url)
            .then(playlist => dispatch({
                type: "SET_PLAYLIST",
                playlist: playlist
            }))
    },
    handleChange: (event) => {
        dispatch({
            type: "CHANGE_QUERY",
            query: event.target.value
        });
    }
});

const PlaylistSearchContainer = connect(
    stateToPropMapper, propsToDispatcher
)(PlaylistSearch);

export default PlaylistSearchContainer
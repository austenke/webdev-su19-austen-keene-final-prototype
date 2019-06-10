import React from 'react'
import Playlist from "./Playlist";
import Song from "./Song";
import SpotifyService from "../services/SpotifyService";

class PlaylistSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ul className="list-group">
                <li key="main" className="list-group-item">
                    {
                        this.props.renderPlaylists &&
                        <div>
                            <div className="text-center">
                                <h2>Search for playlists</h2>
                            </div>
                            <div className="input-group">
                                <input
                                    id="search" type="text" className="form-control"
                                    placeholder="Enter names or keywords"
                                    value={this.props.query}
                                    onChange={this.props.handleChange}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={() => this.props.search(this.props.query)}>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        !this.props.renderPlaylists &&
                        <div className="text-center">
                            <button className="btn btn-primary float-left"
                                    onClick={() => this.props.search(this.props.query)}>
                                <i className="fa fa-arrow-left"></i>
                            </button>
                            <h2>{this.props.selectedPlaylist.name}</h2>
                        </div>
                    }
                </li>
                {
                    (!this.props.renderPlaylists && this.props.playlists.length > 0) &&
                    <div className="row mt-3" align="center">
                        {
                            this.props.selectedPlaylist.tracks.items.map(song =>
                                <div key={song.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <Song song={song}/>
                                </div>
                            )
                        }
                    </div>
                }
                {
                    (this.props.renderPlaylists && this.props.playlists.length > 0) &&
                    <div className="row mt-3" align="center">
                        {
                            this.props.playlists.map(playlist =>
                                <div key={playlist.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <Playlist playlist={playlist} getSongs={this.props.getSongs}/>
                                </div>
                            )
                        }
                    </div>
                }
            </ul>
        )
    }
}

export default PlaylistSearch

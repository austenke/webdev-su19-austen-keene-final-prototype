import React from 'react'

const Playlist = ({playlist, getSongs}) =>
    <div className="card cardItem">
        <img className="card-img-top" src={playlist.images[0].url} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{playlist.name}</h5>
            <p className="card-text">Curator: {playlist.owner.display_name}</p>
            <a className="btn btn-primary" onClick={() => getSongs(playlist.id)}>Details</a>
        </div>
    </div>

export default Playlist
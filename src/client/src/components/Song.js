import React from 'react'

const Song = ({song}) =>
    <div className="card cardItem">
        <img className="card-img-top" src={song.track.album.images[0].url} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{song.track.name}</h5>
            <p className="card-text">Artist: {song.track.artists[0].name}</p>
        </div>
    </div>

export default Song
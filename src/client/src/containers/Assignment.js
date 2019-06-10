import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import playlistReducer from '../reducers/PlaylistReducer'
import PlaylistSearchContainer from "./PlaylistSearchContainer";

// reducer => state => store => provider => container => map to props => components

const store = createStore(playlistReducer)

export default class Assignment extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <PlaylistSearchContainer/>
            </Provider>
        )
    }
}
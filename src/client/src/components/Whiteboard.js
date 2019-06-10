import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Assignment from '../containers/Assignment'

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Assignment} />
                </div>
            </Router>
        )
    }
}


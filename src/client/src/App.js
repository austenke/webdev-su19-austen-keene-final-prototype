import React from 'react';
import logo from './logo.svg';
import './App.css';
import WhiteBoard from './components/Whiteboard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
    return (
        <div className="container">
            <WhiteBoard/>
        </div>
    );
}

export default App;
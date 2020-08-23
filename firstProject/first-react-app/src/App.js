import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Sec from "./components/Sec/Section.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Newsfeed from "./components/NewsFeed/Newsfeed";
import Musiclist from "./components/Music/Music";
import Settingslist from "./components/Settings/Settings";


/* Teg-Functions */
const App = () => {
    return (
        <BrowserRouter>
            <div className="appwrapprer">
                <Header/>
                <Nav/>
                <Route path="/Profile" component={Sec}/>
                <Route path="/Dialogs" component={Dialogs}/>
                <Route path="/Newsfeed" component={Newsfeed}/>
                <Route path="/Musiclist" component={Musiclist}/>
                <Route path="/settingslist" component={Settingslist}/>
            </div>
        </BrowserRouter>
    )
}

export default App;

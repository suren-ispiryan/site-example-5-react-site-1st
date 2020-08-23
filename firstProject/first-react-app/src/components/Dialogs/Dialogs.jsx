import React from 'react';
import "./Dialogs.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return <div className="Dialog">
        <p className="DialogHeading"> DIALOGS </p>
        <div className="container">
            <div className="left">

                <div className="friends">
                    <NavLink to="/dialogs/1"> Sahak </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/2"> Gevorg </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/3"> Andranik </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/4"> Narek </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/5"> Artur </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/6"> Levon </NavLink>
                </div>

                <div className="friends">
                    <NavLink to="/dialogs/7"> Edgar </NavLink>
                </div>
            </div>


            <div className="right">
                <div> message 1 </div>
                <div> message 2 </div>
                <div> message 3 </div>
            </div>
        </div>
    </div>
}

export default Dialogs;

import React from 'react';
import "./../Sec.css";
import "./Mypost1.css";

/* Each post */
const Mypost = (props) => {
    return <div>
        <div className="Postlist">
            <img className="avatar" src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip"/>
            <p className="mainPost"> {props.message} </p>
        </div>

        <div className="like"> like {props.likeCounts} </div>

        <hr className="hr"/>
    </div>
}

export default Mypost;

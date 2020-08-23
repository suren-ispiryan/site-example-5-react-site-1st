import React from 'react';
import "./Sec.css";
import Mypost from "./Posts/Mypost1.jsx";


const Sec = () => {
    return <section className="sec">
        <div>
            <img className="sectionback" src="https://images.unsplash.com/photo-1559534814-505934bddaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        </div>

        <textarea className="textarea"> </textarea>
        <button className="addBtn"> Add post </button>

        <Mypost message="Simple message" likeCounts="0" />
        <Mypost message="First post" likeCounts="17" />
        <Mypost message="Second post" likeCounts="25" />

    </section>
}

export default Sec;

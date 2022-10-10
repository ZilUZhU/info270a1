import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function Home(props) {
    const [randLink, setNum] = useState("");
    useEffect(randomNum, []);
    function randomNum() {
        setNum("detail/" + Math.floor(Math.random() * 4));
    }

    return (
        <div className='body'>
            <div className="home">

                <p>I had encountered a lot of b*llsh*t this week</p>
                <p>click to view a random one</p>
                <Link to={randLink} className="btn btn-danger" >view it</Link>
                <p>or if you want to see the whole list</p>
                <Link to="wholelist" className="btn btn-danger" >view it</Link>

            </div>
        </div>
    );
}

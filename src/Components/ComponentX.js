import React, { useState } from 'react';
import '../ComponentX.css';
import { useSpring, animated, config } from 'react-spring';
import bg from '../bg.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";




const ComponentX = () => {
    const [flip, set] = useState(false);
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        reverse: flip,
        delay: 2000,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    const c1Style = {
        maxWidth: "400px",
        background: "steelblue",
        color: "white",
        padding: "1.5rem",
        display: "flex",
        borderRadius: "30px",
        flexDirection: "column",
        alignItems: "center",
        background: "none"
    }

    // const history = useHistory();

    // const handleClick = () => {
    //     const url = `https://easy-ride-53887.web.app`;
    //     history.push(url)
    // }
    return (

        <a href="https://easy-ride-53887.web.app">
            <animated.div style={props} >
                <div style={c1Style} className="image-container" >
                    <img src={bg} alt="" style={{ maxWidth: "90%", borderRadius: "30px" }} />
                    <div className="centered-text">Click to explore</div>
                </div>
            </animated.div>
        </a>

    );
};

export default ComponentX;
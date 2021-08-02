import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';




const Component1 = () => {
    const [flip, set] = useState(false);
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        reverse: flip,
        delay: 500,
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
    return (
        <animated.div style={props}>
            <div style={c1Style}>
                <h1>Component-1</h1>
            </div>
        </animated.div>
    );
};

export default Component1;
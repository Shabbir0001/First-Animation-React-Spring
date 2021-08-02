import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';


const Component2 = () => {
    const [flip, set] = useState(false);
    const { number } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 10 },
        to: { number: 0 },
        delay: 2000,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    const c2Style = {
        fontSize: "80px",
        margin: "50px",
    }
    return (
        <div>


            <animated.div style={c2Style}>
                {number.to(n => n.toFixed(2))}
            </animated.div>
        </div>
    );
};

export default Component2;
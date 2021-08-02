import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const c3Style = {
    marginTop: "50px",
    // fontSize: "190px"
}


const Component3 = () => {
    const [flip, set] = useState(false)

    const words = ['Hello', 'Shabbir', 'Now', 'You', 'Are', 'An', 'web', 'Animator']

    const { scroll } = useSpring({
        scroll: (words.length - 1) * 90,
        from: { scroll: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div style={c3Style}>
            <animated.div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 90,
                    overflow: 'auto',
                    fontSize: '3em',
                }}
                scrollTop={scroll}>
                {words.map((word, i) => (
                    <div
                        key={`${word}_${i}`}
                        style={{ width: '100%', height: 50, textAlign: 'center' }}>
                        {word}
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

export default Component3;
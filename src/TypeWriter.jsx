'use client'
import useTypewriter from "./useTypeWriter";

const TypeWriter = ({ options }) => {
    const { strings, speed = 50, pause = 1000 } = options;
    const displayText = useTypewriter(strings, speed, pause);

    return <p style={{ lineHeight: 1.2, minHeight: '1.2em' }}>
        {displayText}
    </p>;
};

export default TypeWriter;


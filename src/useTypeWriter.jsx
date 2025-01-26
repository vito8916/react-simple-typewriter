import { useState, useEffect } from 'react';

const useTypewriter = (texts = [], speed = 50, pause = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!texts.length) return;

        let charIndex = 0;
        const typeNextCharacter = () => {
            if (charIndex <= texts[currentIndex].length) {
                setDisplayText(texts[currentIndex].slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setDisplayText(' ');
                    charIndex = 0;
                    setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
                }, pause);
            }
        };

        const typingInterval = setInterval(typeNextCharacter, speed);

        return () => clearInterval(typingInterval);
    }, [texts, speed, pause, currentIndex]);

    return displayText;
};

export default useTypewriter;
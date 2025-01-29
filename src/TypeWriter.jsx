import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TypeWriter = ({ options }) => {
  const {
    strings,
    speed = 50,
    deleteSpeed = 30,
    pause = 1000,
    loop = true,
  } = options;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!strings.length || isDone) return;

    const currentText = strings[currentIndex];
    let charIndex = isDeleting ? currentText.length : 0;

    intervalRef.current = setInterval(
      () => {
        setDisplayText(currentText.slice(0, charIndex));

        if (!isDeleting) {
          charIndex++;
          if (charIndex > currentText.length) {
            clearInterval(intervalRef.current);
            if (!loop && currentIndex === strings.length - 1) {
              setIsDone(true);
            } else {
              setTimeout(() => setIsDeleting(true), pause);
            }
          }
        } else {
          charIndex--;
          if (charIndex === 0) {
            clearInterval(intervalRef.current);
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearInterval(intervalRef.current);
  }, [strings, speed, deleteSpeed, pause, isDeleting, loop, currentIndex, isDone]);

  return (
    <p
      style={{
        lineHeight: 1.2,
        minHeight: "1.2em",
        margin: 0,
      }}
    >
      {displayText}
    </p>
  );
};

TypeWriter.propTypes = {
  options: PropTypes.shape({
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number,
    deleteSpeed: PropTypes.number,
    pause: PropTypes.number,
    loop: PropTypes.bool,
  }).isRequired,
};

export default TypeWriter;

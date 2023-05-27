import "../styles/TypingBox.css";
import React, { useRef, useState } from "react";

const TypingBox = ({ last_final_text, onWpmChange, onAccuracyChange }) => {
  const ref = useRef();
  var startTime, endTime;
  const systemText = last_final_text;
  const [userText, setUserText] = useState("");

  // ------------------ getting Start and End Time -----------------
  const getStartTime = () => {
    if (!startTime) {
      startTime = new Date().getTime();
    }
  };

  const getEndTime = (e) => {
    setUserText(e.target.value);
    if (e.target.value === systemText) {
      endTime = new Date().getTime();
      calculateTypingSpeed();
    }
  };

  // ------------------ Function for check typing Speed -------------------
  const calculateTypingSpeed = () => {
    const systemTextLength = systemText.length;
    const totalTime = (endTime - startTime) / 1000;
    const typingSpeed = Math.round((systemTextLength / totalTime) * 60);

    onWpmChange(typingSpeed);

    calculateTypingAccuracy(systemText, userText);
  };

  // ------------------------ Function for check typing accuracy -----------------------
  const calculateTypingAccuracy = (systemText, userText) => {
    let correct = 0;
    for (let i = 0; i < userText.length; i++) {
      if (userText[i] === systemText[i]) {
        correct++;
      }
    }

    let accuracy = (correct / systemText.length) * 100;
    onAccuracyChange(accuracy.toFixed(2));
  };

  return (
    <div className="userInput">
      <input
        ref={ref}
        type="text"
        id="userInput"
        onKeyDown={getStartTime}
        onKeyUp={(e) => getEndTime(e)}
        placeholder="Re-type if failed,press <TAB> or <ESC> to reset"
      />
    </div>
  );
};

export default TypingBox;

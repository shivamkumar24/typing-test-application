import React, { useRef, useState } from "react";
import "../styles/TypingBox.css";

const TypingBox = ({ last_final_text }) => {
  var startTime, endTime;
  const ref = useRef();
  const [userText, setUserText] = useState("");
  const systemText = last_final_text;

  const getStartTime = () => {
    if (!startTime) {
      startTime = new Date().getTime();
    }
  };

  const getEndTime = (e) => {
    if (e.target.value === systemText) {
      endTime = new Date().getTime();
      calculateTypingSpeed();
    }
  };

  // ------------------ Function for check typing Speed -------------------
  const calculateTypingSpeed = () => {
    const totalTime = (endTime - startTime) / 1000;
    const systemTextLength = systemText.length;
    const typingSpeed = Math.round((systemTextLength / totalTime) * 60);

    console.log(
      "Your typing speed is: " + typingSpeed + " characters per minute."
    );
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
    console.log(accuracy.toFixed(2));
  };

  return (
    <div className="userInput">
      <input
        id="userInput"
        type="text"
        ref={ref}
        onKeyDown={getStartTime}
        onKeyUp={(e) => getEndTime(e)}
        // onChange={(e) => setUserText(e.target.value)}
        placeholder="Re-type if failed,press <TAB> or <ESC> to reset"
      />
    </div>
  );
};

export default TypingBox;

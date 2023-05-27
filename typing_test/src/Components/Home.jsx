import "../styles/Home.css";
import Stats from "./Stats";
import TypingBox from "./TypingBox";
import React, { useState } from "react";

const Home = () => {
  const str = "asdfjkl";
  let final_text = "";
  let last_final_text = "";

  const [wpm, setWPM] = useState(0);
  const [showText, setShowText] = useState("");
  const [accuracy, setAccuracy] = useState(0);
  const [repitator, setRepitator] = useState(3);
  const [combinator, setCombinator] = useState(2);

  // ------------------ Function for WPM and Accuracy settings ---------------------
  const handleWpm = (value) => {
    setWPM(value);
  };

  const handleAccuracy = (value) => {
    setAccuracy(value);
  };

  // ------------ Function for shuffle the string -----------------
  const shuffleStr = (str) => {
    str = str.split("");
    for (let i = str.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = str[i];
      str[i] = str[j];
      str[j] = temp;
    }

    let shuffledString = str.join("");
    return shuffledString;
  };

  // ------------------ Getting text by combinator -------------------
  for (let j = 0; j < combinator; j++) {
    let result = "";
    for (let i = 0; i < 2; i++) {
      let shuffled_string = shuffleStr(str);
      result += shuffled_string.charAt(
        Math.floor(Math.random() * shuffled_string.length)
      );
    }

    final_text = final_text + result + " ";
  }

  // -------------------- Getting text by repitation ------------------
  for (let i = 0; i < repitator; i++) {
    last_final_text = last_final_text + final_text;
  }

  // ----------------- Function for selecting any radio and generating text --------------------
  const getRadioText = () => {
    final_text = "";
    last_final_text = "";
    for (let j = 0; j < combinator; j++) {
      let result = "";
      for (let i = 0; i < 2; i++) {
        let shuffled_string = shuffleStr(str);
        result += shuffled_string.charAt(
          Math.floor(Math.random() * shuffled_string.length)
        );
      }

      final_text = final_text + result + " ";
    }

    for (let i = 0; i < repitator; i++) {
      last_final_text = last_final_text + final_text;
    }

    setShowText(last_final_text);
  };

  return (
    <div className="container">
      <div className="main_container">
        {/* ------------------ Source ------------------ */}
        <div className="source">
          <h1 className="header">Source</h1>
          <input
            type="radio"
            id="bigrams"
            name="source"
            value="Bigrams"
            onClick={getRadioText}
          />
          <label>Bigrams</label>
          <br></br>
          <input
            type="radio"
            id="trigrams"
            name="source"
            value="Trigrams"
            onClick={getRadioText}
          />
          <label>Trigrams</label>
          <br></br>
          <input
            type="radio"
            id="tetragrams"
            name="source"
            value="Tetragrams"
            onClick={getRadioText}
          />
          <label>Tetragrams</label>
          <br></br>
          <input
            type="radio"
            id="words"
            name="source"
            value="Words"
            onClick={getRadioText}
          />
          <label>Words</label>
          <br></br>
          <input
            type="radio"
            id="custom"
            name="source"
            value="Custom"
            onClick={getRadioText}
          />
          <label>Custom</label>
          <br></br>
        </div>

        {/* --------------------- Scope ------------------- */}
        <div className="scope">
          <h1 className="header">Scope</h1>
          <input
            type="radio"
            id="top50"
            name="scope"
            value="Top 50"
            onClick={getRadioText}
          />
          <label>Top 50</label>
          <br></br>
          <input
            type="radio"
            id="top100"
            name="scope"
            value="Top 100"
            onClick={getRadioText}
          />
          <label>Top 100</label>
          <br></br>
          <input
            type="radio"
            id="top150"
            name="scope"
            value="Top 150"
            onClick={getRadioText}
          />
          <label>Top 150</label>
          <br></br>
          <input
            type="radio"
            id="top200"
            name="scope"
            value="Top 200"
            onClick={getRadioText}
          />
          <label>Top 200</label>
          <br></br>
        </div>

        {/* --------------------------- Generator ----------------------- */}
        <div className="generator">
          <h1 className="header">Generator</h1>
          <div className="combination">
            <label>Combination</label>
            <input
              type="number"
              name="combination"
              value={combinator}
              onChange={(e) => setCombinator(e.target.value)}
            />
          </div>
          <div className="repetition">
            <label>Repetition</label>
            <input
              type="number"
              name="repetition"
              value={repitator}
              onChange={(e) => setRepitator(e.target.value)}
            />
          </div>
        </div>

        {/* --------------------------- Threshold --------------------- */}
        <div className="threshold">
          <h1 className="header">Threshold</h1>
          <div className="wpm">
            <label>WPM</label>
            <input
              type="number"
              name="wpm"
              id="wpmText"
              value={wpm}
              onChange={(e) => setWPM(e.target.value)}
            />
          </div>
          <div className="accuracy">
            <label>Accuracy</label>
            <input
              type="number"
              name="accuracy"
              id="accuracyText"
              value={accuracy}
              onChange={(e) => setAccuracy(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ---------------------- Second Container --------------------- */}
      <h1>Lesson 1/13</h1>

      {/* ------------------- Random text  --------------------- */}
      <div className="random">
        <h1>{showText ? showText : last_final_text}</h1>
      </div>

      {/* ------------------------ Input Box ------------------------- */}
      <TypingBox
        last_final_text={last_final_text}
        onWpmChange={handleWpm}
        onAccuracyChange={handleAccuracy}
      />

      {/* --------------------- Final Result ---------------------- */}
      <Stats wpm={wpm} accuracy={accuracy} />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "../styles/Home.css";
import Stats from "./Stats";
import TypingBox from "./TypingBox";

const Home = () => {
  const str = "asdfjkl";
  let final_text = "";
  let last_final_text = "";
  const [combinator, setCombinator] = useState(2);
  const [repitator, setRepitator] = useState(3);
  const [wpm, setWPM] = useState(50);
  const [accuracy, setAccuracy] = useState(100);

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
    // console.log(result);
    final_text = final_text + result + " ";
  }
  // console.log(final_text);

  // -------------------- Getting text by repitation ------------------
  for (let i = 0; i < repitator; i++) {
    last_final_text = last_final_text + final_text;
  }
  // console.log(last_final_text);

  return (
    <div className="container">
      <div className="main_container">
        {/* ------------------ Source ------------------ */}
        <div className="source">
          <h1 className="header">Source</h1>
          <input
            type="radio"
            checked
            id="bigrams"
            name="source"
            value="Bigrams"
          />
          <label>Bigrams</label>
          <br></br>
          <input type="radio" id="trigrams" name="source" value="Trigrams" />
          <label>Trigrams</label>
          <br></br>
          <input
            type="radio"
            id="tetragrams"
            name="source"
            value="Tetragrams"
          />
          <label>Tetragrams</label>
          <br></br>
          <input type="radio" id="words" name="source" value="Words" />
          <label>Words</label>
          <br></br>
          <input type="radio" id="custom" name="source" value="Custom" />
          <label>Custom</label>
          <br></br>
        </div>

        {/* --------------------- Scope ------------------- */}
        <div className="scope">
          <h1 className="header">Scope</h1>
          <input type="radio" checked id="top50" name="scope" value="Top 50" />
          <label>Top 50</label>
          <br></br>
          <input type="radio" id="top100" name="scope" value="Top 100" />
          <label>Top 100</label>
          <br></br>
          <input type="radio" id="top150" name="scope" value="Top 150" />
          <label>Top 150</label>
          <br></br>
          <input type="radio" id="top200" name="scope" value="Top 200" />
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
        <h1>{last_final_text}</h1>
      </div>

      {/* ------------------------ Input Box ------------------------- */}
      <TypingBox last_final_text={last_final_text} />

      {/* --------------------- Final Result ---------------------- */}
      <Stats />
    </div>
  );
};

export default Home;

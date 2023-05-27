import React from "react";
import "../styles/Stats.css";

const Stats = ({ wpm, accuracy }) => {
  return (
    <div className="finalResult">
      <p>WPM: {wpm}</p>
      <p>Accuracy: {accuracy} %</p>
      <p>Average WPM: 51</p>
    </div>
  );
};

export default Stats;

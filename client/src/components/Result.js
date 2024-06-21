import React, { useState } from "react";

const resultMap = {
  0: "TIE",
  1: "YOU WON",
  2: "THEY WON",
};

const choiceMap = {
  0: "Stone",
  1: "Paper",
  2: "Scissors",
};

const Result = (props) => {
  const [text, changeText] = useState("Play Again");
  const handlePlayAgain = () => {
    props.onReset();
    changeText("Waiting...");
  };
  return (
    <div id="resultBox">
      <p>
        You chose{"->"}
        <span style={{ marginLeft: "5px", fontWeight: "900" }} id="youChose">
          {choiceMap[props.yourChoice]}
        </span>
      </p>
      <p>
        They chose {"->"}
        <span style={{ marginLeft: "5px", fontWeight: "900" }} id="theyChose">
          {choiceMap[props.theirChoice]}
        </span>
      </p>
      <div id="result" className="alert" role="alert">
        {resultMap[props.result]}
      </div>
      <button
        id="reset"
        className="btn btn-secondary btn-lg btn-block"
        onClick={handlePlayAgain}
      >
        {text}
      </button>
    </div>
  );
};

export default Result;

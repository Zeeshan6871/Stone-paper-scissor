import React from "react";

const options = ["Stone", "Paper", "Scissors"];

const Options = ({ send, dis }) => {
  return (
    <div id="options">
      {options.map((el, index) => (
        <button
          key={el}
          onClick={() => send(index)}
          className="option"
          disabled={dis}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Options;

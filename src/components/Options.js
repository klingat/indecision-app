import React from "react";
import Option from "./Option";

const Options = props => {
  const optionsLength = props.options.length;
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
        disabled={optionsLength === 0}
      >
        Remove All
      </button>
      {optionsLength === 0 && <p>Please add an option to get started.</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;

import React from "react";

export default function Button({ testId, buttonText, onClickFunc }) {
  return (
    <button data-testid={testId} onClick={onClickFunc}>
      {buttonText}
    </button>
  );
}

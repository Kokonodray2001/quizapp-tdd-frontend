import React from "react";

export default function Question({ questionAndOptions }) {
  return (
    <div>
      <h3>{questionAndOptions.questionTitle}</h3>
      <ul>
        <li key={1}>{questionAndOptions.option1}</li>
        <li key={2}>{questionAndOptions.option2}</li>
        <li key={3}>{questionAndOptions.option3}</li>
        <li key={4}>{questionAndOptions.option4}</li>
      </ul>
    </div>
  );
}

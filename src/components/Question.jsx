import React from "react";

export default function Question({ questionAndOptions }) {
  return (
    <div>
      <h3>{questionAndOptions.questionTitle}</h3>
      <ul>
        <li key={1}>
          <label>{questionAndOptions.option1}</label>
          <input
            type='checkBox'
            checked='true'
            value={questionAndOptions.option1}
          />
        </li>
        <li key={2}>
          <label>{questionAndOptions.option2}</label>
          <input type='checkBox' value={questionAndOptions.option2} />
        </li>
        <li key={3}>
          <label>{questionAndOptions.option3}</label>
          <input type='checkBox' value={questionAndOptions.option3} />
        </li>
        <li key={4}>
          <label>{questionAndOptions.option4}</label>
          <input type='checkBox' value={questionAndOptions.option4} />
        </li>{" "}
      </ul>
    </div>
  );
}

import React from "react";

export default function Question({
  questionAndOptions,
  isCheck,
  onCheckhandler,
}) {
  const onCheckedHandler = (option) => {
    if (isCheck != null) return option === isCheck.response;
    return false;
  };
  return (
    <div>
      <h3>{questionAndOptions.questionTitle}</h3>
      <ul>
        <li key={1}>
          <label>{questionAndOptions.option1}</label>
          <input
            type='checkBox'
            value={questionAndOptions.option1}
            // checked={true}
            checked={onCheckedHandler(questionAndOptions.option1)}
            onChange={() => {
              onCheckhandler(questionAndOptions.id, questionAndOptions.option1);
              console.log(isCheck.response);
            }}
          />
        </li>
        <li key={2}>
          <label>{questionAndOptions.option2}</label>
          <input
            type='checkBox'
            value={questionAndOptions.option2}
            checked={onCheckedHandler(questionAndOptions.option2)}
            onChange={() => {
              onCheckhandler(questionAndOptions.id, questionAndOptions.option2);
              console.log(isCheck.response);
            }}
          />
        </li>
        <li key={3}>
          <label>{questionAndOptions.option3}</label>
          <input
            type='checkBox'
            value={questionAndOptions.option3}
            checked={onCheckedHandler(questionAndOptions.option3)}
            onChange={() => {
              onCheckhandler(questionAndOptions.id, questionAndOptions.option3);
              console.log(isCheck.response);
            }}
          />
        </li>
        <li key={4}>
          <label>{questionAndOptions.option4}</label>
          <input
            type='checkBox'
            value={questionAndOptions.option4}
            checked={onCheckedHandler(questionAndOptions.option4)}
            onChange={() => {
              onCheckhandler(questionAndOptions.id, questionAndOptions.option4);
              console.log(isCheck.response);
            }}
          />
        </li>{" "}
      </ul>
    </div>
  );
}

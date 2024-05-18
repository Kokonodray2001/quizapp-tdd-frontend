import React from "react";
import Button from "./Button";
import InputFields from "./InputFields";

const LandingPage = () => {
  return (
    <div className='Landing-Page'>
      <h1>SELECT QUIZ</h1>
      <InputFields
        dataTestId={"no-of-question"}
        placeholder={"enter number of question max 8"}
        type={"number"}
      />
      <InputFields
        dataTestId={"question-topic"}
        placeholder={"enter topic python or java"}
        type={"text"}
      />

      <Button testId={"start-quiz-button"} buttonText={"START QUIZ"} />
    </div>
  );
};

export default LandingPage;

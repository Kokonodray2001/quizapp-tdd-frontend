import React, { useContext } from "react";
import Button from "./Button";
import InputFields from "./InputFields";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/quizContext";

const LandingPage = () => {
  const { numQues, setNumQues, quesTopic, setQuesTopic } =
    useContext(QuizContext);
  const navigate = useNavigate();
  const playQuizClickHandler = () => {
    navigate("/playQuiz");
  };
  const onNumberChangeHandler = (e) => {
    setNumQues(e.target.value);
  };
  const onQuizTopicChangeHandler = (e) => {
    setQuesTopic(e.target.value);
  };

  return (
    <div className='Landing-Page'>
      <h1>SELECT QUIZ</h1>
      <InputFields
        dataTestId={"no-of-question"}
        placeholder={"enter number of question max 8"}
        type={"number"}
        val={numQues}
        onChangeHandler={onNumberChangeHandler}
      />
      <InputFields
        dataTestId={"question-topic"}
        placeholder={"enter topic python or java"}
        type={"text"}
        val={quesTopic}
        onChangeHandler={onQuizTopicChangeHandler}
      />

      <Button
        testId={"start-quiz-button"}
        buttonText={"START QUIZ"}
        onClickFunc={playQuizClickHandler}
      />
    </div>
  );
};

export default LandingPage;

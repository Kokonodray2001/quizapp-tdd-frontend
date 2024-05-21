import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
// import QuizContext from "../context/quizContext";
// import axios from "axios";
export default function GamePage() {
  // const { numQues, quesTopic } = useContext(QuizContext);
  //  const [questions, setQuestions] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = "http://localhost:8081/quiz/getQuiz/5";
  //       const response = await axios.get(url);
  //       setQuestions(response.data);
  //       console.log(JSON.stringify(questions));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h2>MARK YOUR ANSWER's</h2>
      <Button testId={"submit-quiz-button"} buttonText={"Submit"} />
    </div>
  );
}

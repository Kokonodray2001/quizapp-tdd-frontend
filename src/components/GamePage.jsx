import React, { useContext } from "react";
import QuizContext from "../context/quizContext";

export default function GamePage() {
  const { numQues, quesTopic } = useContext(QuizContext);
  console.log(numQues + " " + quesTopic);
  return (
    <div>
      <h1>HELLO</h1>
    </div>
  );
}

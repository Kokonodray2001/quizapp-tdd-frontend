import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handlePlayQuizClick = () => {
    navigate("landing"); // Corrected the variable name to navigate
  };
  return (
    <div>
      <h1>WELCOME TO MY QUIZ</h1>
      <Button
        testId={"play-quiz-button"}
        buttonText={"PLAY QUIZ"}
        onClickFunc={handlePlayQuizClick}
      />
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import QuizContext from "../context/quizContext";
import axios from "axios";
import Question from "./Question";
export default function GamePage() {
  const { numQues, quesTopic } = useContext(QuizContext);
  const [qId, setQid] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 8,
      questionTitle:
        "Which language is known for its simplicity and readability?",
      option1: "Python",
      option2: "Ruby",
      option3: "Java",
      option4: "C++",
    },
    {
      id: 18,
      questionTitle: "Which language uses a colon for indentation?",
      option1: "Python",
      option2: "Ruby",
      option3: "Java",
      option4: "C++",
    },
    {
      id: 10,
      questionTitle: "Which version of Python is currently supported?",
      option1: "Python 2",
      option2: "Python 3",
      option3: "Python 4",
      option4: "Python 5",
    },
    {
      id: 16,
      questionTitle: "Which data structure in Python is mutable?",
      option1: "List",
      option2: "Tuple",
      option3: "Set",
      option4: "Dictionary",
    },
    {
      id: 20,
      questionTitle:
        "Which framework is not used for web development in Python?",
      option1: "Django",
      option2: "Flask",
      option3: "Pyramid",
      option4: "Bottle",
    },
    {
      id: 6,
      questionTitle:
        "Which version of Python introduced the `f-strings` feature?",
      option1: "Python 2",
      option2: "Python 3",
      option3: "Python 4",
      option4: "Python 5",
    },
  ]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = `http://localhost:8081/quiz/create?category=${quesTopic}&numQ=${numQues}&title=Quiz${quesTopic}${numQues}`;
  //       console.log(url);
  //       const response = await axios.post(url);
  //       setQid(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();

  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = `http://localhost:8081/quiz/getQuiz/${qId}`;
  //       const response = await axios.get(url);
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [qId]);

  return (
    <div>
      <h2>MARK YOUR ANSWER's</h2>
      {questions.map((question, index) => {
        return <Question key={index} questionAndOptions={question} />;
      })}

      <Button testId={"submit-quiz-button"} buttonText={"Submit"} />
    </div>
  );
}

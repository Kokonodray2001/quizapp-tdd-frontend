import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import QuizContext from "../context/quizContext";
import axios from "axios";
import Question from "./Question";
import Result from "./Result";
export default function GamePage() {
  const { numQues, quesTopic } = useContext(QuizContext);
  const [qId, setQid] = useState("");
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const newResponse = questions.map((question) => {
      return { id: question.id, response: "" };
    });
    setResponse(newResponse);
  }, [questions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8081/quiz/create?category=${quesTopic}&numQ=${numQues}&title=Quiz${quesTopic}${numQues}`;
        console.log(url);
        const response = await axios.post(url);
        setQid(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8081/quiz/getQuiz/${qId}`;
        const response = await axios.get(url);
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [qId]);

  const onCheckHandler = (id, answer) => {
    const newResponse = response.map((res) => {
      if (id === res.id) {
        res.response = answer;
      }
      return res;
    });
    setResponse(newResponse);
  };

  const onSubmitHandler = async () => {
    const result = await axios.post(
      `http://localhost:8081/quiz/submitQuiz/${qId}`,
      response
    );
    console.log(response);
    setResult(result.data);
  };
  return (
    <div>
      <h2>MARK YOUR ANSWER's</h2>
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            questionAndOptions={question}
            isCheck={response[index]}
            onCheckhandler={onCheckHandler}
          />
        );
      })}

      <Button
        testId={"submit-quiz-button"}
        buttonText={"Submit"}
        onClickFunc={onSubmitHandler}
      />
      <div>
        {result !== "" ? (
          <Result score={result} total={questions.length * 10} />
        ) : null}
      </div>
    </div>
  );
}

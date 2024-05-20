import { createContext } from "react";
import { useState } from "react";
const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  const [numQues, setNumQues] = useState("");
  const [quesTopic, setQuesTopic] = useState("");

  return (
    <QuizContext.Provider
      value={{ numQues, setNumQues, quesTopic, setQuesTopic }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export default QuizContext;

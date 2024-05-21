import { render } from "@testing-library/react";
import Question from "../components/Question";

describe("rending test for questions", () => {
  it("should render question correctly", () => {
    const { getByText } = render(
      <Question
        questionAndOptions={{
          id: 9,
          questionTitle: "What is used to write and run Java code?",
          option1: "IDE",
          option2: "Compiler",
          option3: "Debugger",
          option4: "Interpreter",
        }}
      />
    );

    const questionTitleElemet = getByText(
      "What is used to write and run Java code?"
    );
    expect(questionTitleElemet).toBeInTheDocument();
  });
  it("should render all the option correctly", () => {
    const { getByText } = render(
      <Question
        questionAndOptions={{
          id: 9,
          questionTitle: "What is used to write and run Java code?",
          option1: "IDE",
          option2: "Compiler",
          option3: "Debugger",
          option4: "Interpreter",
        }}
      />
    );
    const option1Element = getByText("IDE");
    const option2Element = getByText("Compiler");
    const option3Element = getByText("Debugger");
    const option4Element = getByText("Interpreter");

    expect(option1Element).toBeInTheDocument();
    expect(option2Element).toBeInTheDocument();
    expect(option3Element).toBeInTheDocument();
    expect(option4Element).toBeInTheDocument();
  });
});

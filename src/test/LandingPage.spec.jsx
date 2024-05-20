/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import LandingPage from "../components/LandingPage";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import QuizContext, { QuizProvider } from "../context/quizContext";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Rendering Test", () => {
  it("should render SELECT QUIZ", () => {
    const { getByText } = render(
      <QuizProvider>
        <LandingPage />
      </QuizProvider>
    );
    const textHeaderElement = getByText("SELECT QUIZ");
    expect(textHeaderElement).toBeInTheDocument();
  });
  it("should render START QUIZ on quiz button", () => {
    const { getByTestId } = render(
      <QuizProvider>
        <LandingPage />
      </QuizProvider>
    );
    const startQuizButtonElement = getByTestId("start-quiz-button");
    expect(startQuizButtonElement.textContent).toBe("START QUIZ");
  });
});

describe("start quiz buttons funcationality test", () => {
  it("should navigate to /playQuiz", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByTestId } = render(
      <QuizProvider>
        <LandingPage />
      </QuizProvider>
    );
    const startQuizButtonElement = getByTestId("start-quiz-button");
    fireEvent.click(startQuizButtonElement);
    expect(navigate).toHaveBeenCalledWith("/playQuiz");
  });
});
describe("input field functionality test", () => {
  it("should display value as 5", () => {
    const { getByTestId } = render(
      <QuizProvider>
        <LandingPage />
      </QuizProvider>
    );
    const inputElement = getByTestId("no-of-question");
    fireEvent.change(inputElement, { target: { value: "5" } });
    expect(inputElement.value).toBe("5");
  });
  it("should display value as java", () => {
    const { getByTestId } = render(
      <QuizProvider>
        <LandingPage />
      </QuizProvider>
    );
    const inputElement = getByTestId("question-topic");
    fireEvent.change(inputElement, { target: { value: "java" } });
    expect(inputElement.value).toBe("java");
  });
});

import { fireEvent, render } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

describe("Rendering Test", () => {
  it("should render SELECT QUIZ", () => {
    const { getByText } = render(<LandingPage />);
    const textHeaderElement = getByText("SELECT QUIZ");
    expect(textHeaderElement).toBeInTheDocument();
  });
  it("should render START QUIZ on quiz button", () => {
    const { getByTestId } = render(<LandingPage />);
    const textHeaderElement = getByTestId("start-quiz-button");
    expect(textHeaderElement.textContent).toBe("START QUIZ");
  });
});

describe("input field functionality test", () => {
  it("should display value as 5", () => {
    const { getByTestId } = render(<LandingPage />);
    const noOfQuestionInputElement = getByTestId("no-of-question");
    fireEvent.change(noOfQuestionInputElement, { target: { value: "5" } });
    expect(noOfQuestionInputElement.value).toBe("5");
  });

  it("should display value as java", () => {
    const { getByTestId } = render(<LandingPage />);
    const questionTopicInputElemnet = getByTestId("question-topic");
    fireEvent.change(questionTopicInputElemnet, { target: { value: "java" } });
    expect(questionTopicInputElemnet.value).toBe("java");
  });
});

import { render } from "@testing-library/react";
import GamePage from "../components/GamePage.Jsx";

describe("should render correctly", () => {
  it("should render MARK YOUR ANSWER's", () => {
    const { getByText } = render(<GamePage />);
    const headerTextElement = getByText("MARK YOUR ANSWER's");
    expect(headerTextElement).toBeInTheDocument();
  });
  it("should render Submit on button", () => {
    const { getByTestId } = render(<GamePage />);
    const submitButtonElement = getByTestId("submit-quiz-button");
    expect(submitButtonElement.textContent).toBe("Submit");
  });
});

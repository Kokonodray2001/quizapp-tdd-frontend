import { useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import { fireEvent, render } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Rendering test", () => {
  it("should render welcome to my quiz app", () => {
    const { getByText } = render(<HomePage />);
    const homeTextElement = getByText("WELCOME TO MY QUIZ");
    expect(homeTextElement).toBeInTheDocument();
  });
});

describe("Play buttons funcationality test", () => {
  it("should render PLAY QUIZ", () => {
    const { getByTestId } = render(<HomePage />);
    const buttonElement = getByTestId("play-quiz-button");
    expect(buttonElement.textContent).toBe("PLAY QUIZ");
  });

  it("should navigate to landing page", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByTestId } = render(<HomePage />);
    const buttonElement = getByTestId("play-quiz-button");
    fireEvent.click(buttonElement);
    expect(navigate).toHaveBeenCalledWith("landing");
  });
});

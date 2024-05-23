import { fireEvent, render, waitFor } from "@testing-library/react";
import GamePage from "../components/GamePage.Jsx";
import { QuizProvider } from "../context/quizContext";
import axios from "axios";
describe("should render correctly", () => {
  it("should render MARK YOUR ANSWER's", () => {
    const { getByText } = render(
      <QuizProvider>
        <GamePage />
      </QuizProvider>
    );
    const headerTextElement = getByText("MARK YOUR ANSWER's");
    expect(headerTextElement).toBeInTheDocument();
  });
  it("should render Submit on button", () => {
    const { getByTestId } = render(
      <QuizProvider>
        <GamePage />
      </QuizProvider>
    );
    const submitButtonElement = getByTestId("submit-quiz-button");
    expect(submitButtonElement.textContent).toBe("Submit");
  });
});
jest.mock("axios");

describe("should fetch data correctly and display it", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // it("should get the id after making a post request using axios", async () => {
  //   axios.post.mockResolvedValue({ data: "test-id" });
  //   render(
  //     <QuizProvider>
  //       <GamePage />
  //     </QuizProvider>
  //   );
  //   const id = axios.post(
  //     "http://localhost:8081/quiz/create?category=python&numQ=1&title=tes1"
  //   );

  //   await waitFor(() => {
  //     expect(id).toEqual("test-id");
  //   });
  //   expect(axios.post).toHaveBeenCalledWith(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  // });
  it("should fetch data using axios correctly and render it", async () => {
    const mockQuestions = [
      {
        id: 7,
        questionTitle: "test question to render",
        option1: "test-opt1",
        option2: "test-opt2",
        option3: "test-opt3",
        option4: "test-opt4",
      },
    ];

    axios.get.mockResolvedValue({ data: mockQuestions });

    const { getByText } = render(
      <QuizProvider>
        <GamePage />
      </QuizProvider>
    );

    await waitFor(() => {
      const questionTitle = getByText("test question to render");
      const option1 = getByText("test-opt1");
      const option2 = getByText("test-opt2");
      const option3 = getByText("test-opt3");
      const option4 = getByText("test-opt4");
      expect(questionTitle).toBeInTheDocument();
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
      expect(option4).toBeInTheDocument();
    });
  });
});

describe("submit button functionality test", () => {
  it("should display score", async () => {
    axios.post.mockResolvedValue({ data: "50" });

    const { getByTestId, getByText } = render(
      <QuizProvider>
        <GamePage />
      </QuizProvider>
    );

    fireEvent.click(getByTestId("submit-quiz-button"));
    // expect(axios.post).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      //expect(axios.post).toHaveBeenCalledTimes(2);
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8081/quiz/submitQuiz/", // Assuming this is the correct endpoint
        expect.any(Array) // Assuming response is an array
      );
    });
  });
});

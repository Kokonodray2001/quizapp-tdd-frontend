import { render } from "@testing-library/react";
import Result from "../components/Result";
describe("should render score", () => {
  it("display score", () => {
    const { getByText } = render(<Result score={"50"} total={"80"} />);
    const scoreElemnt = getByText("Score : 50/80");
    expect(scoreElemnt).toBeInTheDocument();
  });
});

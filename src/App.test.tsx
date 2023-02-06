import {render} from "@testing-library/react";
import App from "./App";
import {fireEvent , screen} from "@testing-library/react";

test("Renders Table  - First Row Task", () => {
  render(<App />);
  const linkElement = screen.getByText("Manger!");
  expect(linkElement).toMatchSnapshot();
});
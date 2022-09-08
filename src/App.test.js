import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
describe("App component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it("1. show get started button on main page", () => {
    const button = screen.getByRole("button", { name: /get started!/i });
    expect(button).toBeInTheDocument();
    // userEvent.click(button);
    screen.debug();
  });

  it("2. show title on the main page", () => {
    const title = screen.getByText(/quiz quiz/i);
    expect(title).toBeInTheDocument();
  });

  it("3. show image1 on the main page", () => {
    const image = screen.getByTestId("image-1");
    expect(image).toBeInTheDocument();
  });

  it("4. show image2 on the main page", () => {
    const image = screen.getByTestId("image-2");
    expect(image).toBeInTheDocument();
  });

  it("5. show image3 on the main page", () => {
    const image = screen.getByTestId("image-3");
    expect(image).toBeInTheDocument();
  });
});

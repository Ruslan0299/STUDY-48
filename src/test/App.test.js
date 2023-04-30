import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("Navigation links work", () => {
  render(<App />);
  const mainLink = screen.getByRole("link", { name: /Main/i });
  fireEvent.click(mainLink);
  expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();

  const postsLink = screen.getByRole("link", { name: /Posts/i });
  fireEvent.click(postsLink);
  expect(screen.getByText(/View our posts/i)).toBeInTheDocument();

  const loginLink = screen.getByRole("link", { name: /Login/i });
  fireEvent.click(loginLink);
  expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
});

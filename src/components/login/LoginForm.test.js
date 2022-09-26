import { getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import LoginForm from "./LoginForm";

describe("Basic rendering", () => {
  const onLogin = jest.fn();
  const authMode = "{ buyer }";

  test("should display login form fields", () => {
    render(<LoginForm onLogin={onLogin} authMode={authMode} />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });
});

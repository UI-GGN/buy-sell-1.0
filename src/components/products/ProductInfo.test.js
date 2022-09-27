import { render } from "@testing-library/react";
import ProductInfo from "./ProductInfo.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("basic rendering", () => {
  test("should display product image", () => {
    jest.spyOn(URLSearchParams.prototype, "get").mockImplementation(() => "2");
    const { getByTestId } = render(<ProductInfo />, { wrapper: BrowserRouter });
    expect(getByTestId("productImage")).toBeInTheDocument();
    expect(getByTestId("productDetails")).toBeInTheDocument();
  });
});

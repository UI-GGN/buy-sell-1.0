import { render } from "@testing-library/react";
import ProductInfo from "./ProductInfo.js";
import { createMemoryHistory } from "history";
import { BrowserRouter, useSearchParams } from "react-router-dom";

describe("basic rendering", () => {
  test("should display product image", () => {
    jest.spyOn(URLSearchParams.prototype, "get").mockImplementation(() => "2");
    const { getByTestId } = render(<ProductInfo />, { wrapper: BrowserRouter });
    expect(getByTestId("productImage")).toBeInTheDocument();
    expect(getByTestId("productDetails")).toBeInTheDocument();
  });
});

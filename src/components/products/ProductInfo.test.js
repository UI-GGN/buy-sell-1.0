import { render } from "@testing-library/react";
import ProductInfo from "./ProductInfo";
import { BrowserRouter } from "react-router-dom";

test("renders the product info page", () => {
  jest.spyOn(URLSearchParams.prototype, "get").mockImplementation(() => "2");
  // eslint-disable-next-line react/react-in-jsx-scope
  const { getByTestId } = render(<ProductInfo />, { wrapper: BrowserRouter });
  expect(getByTestId("product-image")).toBeInTheDocument();
  expect(getByTestId("product-info")).toBeInTheDocument();
});

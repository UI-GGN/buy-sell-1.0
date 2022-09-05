// jest.mock("./ProductList.js", () => [
//   {
//     product: "HP Pavilion 14 16GB RAM",
//     id: "1",
//     image: "https://m.media-amazon.com/images/I/81h346HzqML._SX679_.jpg",
//     price: "35000",
//     description: `Processor: Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)| Memory & Storage: 16 GB DDR4-3200 MHz RAM (2 x 8 GB) | Storage: 512GB PCIe NVMe TLC M.2 SSD
//             Display & Graphics: 35.6 cm (14") diagonal, FHD, IPS, micro-edge, BrightView, 250 nits, 157 ppi | Graphics: Intel UHD Graphics
//             Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2021`,
//     tags: ["laptops", "laptop", "hp", "pavilion", "electronics"],
//   },
// ]);

// jest.mock("./ProductList.js", () => [
//   {
//     product: "HP Pavilion 14 16GB RAM",
//     id: "1",
//     image: "https://m.media-amazon.com/images/I/81h346HzqML._SX679_.jpg",
//     price: "35000",
//     description: `Processor: Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)| Memory & Storage: 16 GB DDR4-3200 MHz RAM (2 x 8 GB) | Storage: 512GB PCIe NVMe TLC M.2 SSD
//             Display & Graphics: 35.6 cm (14") diagonal, FHD, IPS, micro-edge, BrightView, 250 nits, 157 ppi | Graphics: Intel UHD Graphics
//             Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2021`,
//     tags: ["laptops", "laptop", "hp", "pavilion", "electronics"],
//   },
// ]);

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn().mockReturnValue([{ get: jest.fn() }]),
  };
});

import { render, screen } from "@testing-library/react";
import ProductInfo from "./ProductInfo";
import { BrowserRouter } from "react-router-dom";

test("renders the product info page", () => {
  const { queryByText } = render(<ProductInfo />, { wrapper: BrowserRouter });
  //const productList = ProductList();
  //product = productList.filter(productList.i);
  expect(getByTestId("product-image")).toBeInTheDocument();
  expect(getByTestId("product-info")).toBeInTheDocument();
});

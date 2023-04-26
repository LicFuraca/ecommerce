import React, { createContext, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const URL = "https://fakestoreapi.com/products";
  const { products, loading } = useFetchProducts(URL);

  const changeCategoryHandler = event => {
    const value = event.target.textContent.toLowerCase();

    if (value === "all") setCategory("");
    if (value === "women") setCategory("women's clothing");
    if (value === "men") setCategory("men's clothing");
    if (value === "accessories") setCategory("jewelery");
  };

  return (
    <FilterContext.Provider
      value={{ category, products, loading, URL, changeCategoryHandler }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

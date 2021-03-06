import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductSearch from "./ProductSearch";
import useFetchData from "./useFetchData";

export default function ProductList() {
  const [query, setQuery] = useState(null);
  const { docs } = useFetchData("public/data/products", query);
  const products = docs;
  console.log(products);
  return (
    <div page-container>
      <div className="search-container">
        <ProductSearch query={query} setQuery={setQuery} />
      </div>
      <div className="product-container">
        {products &&
          products.map((item) => <ProductItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}

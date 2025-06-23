import { useState } from "react";
import "./index.css";
import Product from "./Product";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
        />
        <button>Search</button>
      </div>
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>Cound not find any products for the search ({search})</p>
        ) : (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </>
  );
}

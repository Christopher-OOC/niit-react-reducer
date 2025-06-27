import { useState } from "react";
import "./index.css";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "Item 1",
      description: "Item 1 Des",
      image: "https://i.pravatar.cc/34567?u=2345",
    },
    {
      id: 2,
      name: "Item 2",
      description: "Item 2 Des",
      image: "https://i.pravatar.cc/87567?u=8945",
    },
    {
      id: 3,
      name: "Item 3",
      description: "Item 3 Des",
      image: "https://i.pravatar.cc/23567?u=9845",
    },
    {
      id: 4,
      name: "Item 4",
      description: "Item 4 Des",
      image: "https://i.pravatar.cc/12567?u=9545",
    },
  ];

  function HomeScreen() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

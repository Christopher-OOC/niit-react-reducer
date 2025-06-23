import { useEffect, useReducer, useState } from "react";
import "./index.css";
import Product from "./Product";

const initialState = {
  count: 0,
  text: "Type something",
  color: "tan",
};

function reducer(state, action) {
  switch (action.type) {
    case "pressed": {
      console.log(state);
      return {
        ...state,
        count: state.count + 1,
        text: action.payload.text,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random()})`,
      };
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(
    function () {
      getProducts();

      return () => controller.abort();
    },
    [search]
  );

  async function getProducts() {
    try {
      setIsLoading(true);
      const res = await fetch(
        "http://localhost:8080/api/v1/products?search=" + search,
        { signal: controller.signal }
      );
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
      console.log("DATA");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    getProducts();
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
        />
        <button onClick={handleSearch}>Search</button>
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

export default App;

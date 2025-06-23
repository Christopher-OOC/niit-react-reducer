import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="product">
      <img className="product__image" src={product.image} alt="image-photo" />
      <h2>Name: {product.name}</h2>
      <p>Description: {product.description}</p>
      <Link to="/product-details">View Details</Link>
    </div>
  );
}

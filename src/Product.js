export default function Product({ product }) {
  return (
    <div className="product">
      <img className="product__image" src={product.image} alt="image-photo" />
      <h2>Name: {product.name}</h2>
      <p>Description: {product.description}</p>
      <a href="/">View Details</a>
    </div>
  );
}

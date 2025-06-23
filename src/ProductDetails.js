export default function ProductDetails({ product }) {
  return (
    <div className="product">
      <img
        className="product__image"
        src={product?.image || ""}
        alt="image-photo"
      />
      <h2>Name: {product?.name || "Name"}</h2>
      <p>Description: {product?.description || "Desc"}</p>
    </div>
  );
}

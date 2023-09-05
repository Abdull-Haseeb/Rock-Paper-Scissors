const Product = ({ product }) => (
  <div className="product">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </div>
);
export default Product;

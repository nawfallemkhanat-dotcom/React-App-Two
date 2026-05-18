import product from "./product";

function Price() {
  return (
    <p style={{ marginBottom: "10px", textAlign: "center", fontWeight: "bold" }}>{product.price}</p>
  );
}

export default Price;
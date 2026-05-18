import product from "./product";

function Description() {
  return (
    <p style={{ marginBottom: "10px", textAlign: "center" }}>{product.description}</p>
  );
}

export default Description;
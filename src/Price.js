import product from "./product";

function Price(props) {
  return (
    <p style={{ marginBottom: "10px", textAlign: "center", fontWeight: "bold" }}>{props.price}</p>
  );
}

export default Price;
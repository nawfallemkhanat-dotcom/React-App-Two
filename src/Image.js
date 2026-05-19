import product from "./product";

function Image(props) {
  return (
    <img
      src={props.image}
      alt={props.name}
      style={{ width: "100%", height: "250px", objectFit: "cover" }}
    />
  );
}

export default Image;
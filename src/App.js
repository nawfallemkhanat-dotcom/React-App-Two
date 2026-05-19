import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "./product";
import Image from "./Image";
import Price from "./Price";
import Name from "./Name";
import Description from "./Description";

function App() {
  return (
    <>
      {product.map((product) => (
        <Card style={{ width: "18rem" }} key={product.id}>
          <Image image={product.image} name={product.name} />

          <Card.Body>
            <Name name={product.name} />
            <Description description={product.description} />
            <Price price={product.price} />

            <Button className="Button" variant="success">
              Success
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default App;
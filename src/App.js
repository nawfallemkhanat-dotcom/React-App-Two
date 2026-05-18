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
          <Image product={product} />

          <Card.Body>
            <Name product={product} />
            <Description product={product} />
            <Price product={product} />

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
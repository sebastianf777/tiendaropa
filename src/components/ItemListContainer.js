import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import img1 from "../assets/img/img1.png"


// const Greeting = (props) => {
//     const Greeting = <h1> Bienvenida: {props.name} {props.lastName}</h1>;
// return Greeting;
// }

// export default Greeting;
// const [count, setCount] = useState(); {

// }

const Cards = () => {
  const [stock, setStock] = useState(10)
  const [count, setCount] = useState(0);

  const stockFinal = () => setStock(stock - count);
  const suma = () => count < stock ? setCount(count + 1): console.log("ya no hay stock");
  const resta = () => count !== 0 ? setCount(count - 1) : console.log("0 es el límite");

  

//   useEffect(() => {
//     count >= stock ? setCount(10) : console.log("calculando");
//    count <= 0 ? setCount(0) : console.log("calculando");

//  }, [count, stock]);

  return (
    <div className="Card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Stock {stock}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={resta}>
            -
          </Button>
          <Button variant="secondary">
            <p>{count}</p>
          </Button>
          <Button variant="secondary" onClick={suma}>
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
          <Button  variant="secondary" onClick={stockFinal}>
            <p>Agregar al carrito</p>
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default Cards;

import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ItemCard = (props) => {
  const [stock, setStock] = useState(10);
  const [count, setCount] = useState(0);

  const stockFinal = () =>
    stock > 0 ? setStock(stock - count) : console.log("ya no hay mas");
  const suma = () =>
    count < stock ? setCount(count + 1) : console.log("ya no hay stock");
  const resta = () =>
    count !== 0 ? setCount(count - 1) : console.log("0 es el límite");



  return (
    <div className="Card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Id: {props.id}</Card.Text>
          <Card.Text>Precio {props.price}</Card.Text>
          <Card.Text>Stock {stock}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <ButtonGroup aria-label="Basic example">
          <Button className="plusMinus" variant="outline-dark" onClick={resta}>
            -
          </Button>
          <Button variant="outline-dark">
            <Card.Text>{count}</Card.Text>
          </Button>
          <Button className="plusMinus" variant="outline-dark" onClick={suma}>
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
          <Button className="agregarC" variant="success" onClick={stockFinal}>
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default ItemCard;

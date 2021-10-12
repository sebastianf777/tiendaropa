import React, {useState} from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ItemCount = (props) => {

  const { stock, onAdd, initial } = props.props;

  const [count, setCount] = useState(initial);
  const [stockActual, setStockActual] = useState(stock);


    // const stockFinal = () =>
    //   {stockActual >= count ? setStockActual(onAdd(stockActual - count)) : alert("ya no hay mas");

    // }
    const suma = () =>
      count < stock ? setCount(count + 1) : console.log("ya no hay stock");
    const resta = () =>
      count > initial ? setCount(count - 1) : console.log("0 es el límite");
  
  return (
    <div>
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
        <Button className="agregarC" variant="success" onClick={() => {
          stockActual >= count &&
            setStockActual(onAdd(stockActual, count));
          count > stockActual &&
            alert("No queda más stock, no se puede agregar al carrito!");
        }}>
          Agregar al carrito
        </Button>
      </ButtonGroup>

      <Card.Text>Cantidad disponible {stockActual}</Card.Text>
    </div>
  );
};

export default ItemCount;

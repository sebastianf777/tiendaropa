import {useState, useEffect} from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({stock, initial, onAdd}) => {


  const [count, setCount] = useState(initial);
const [stockFinal, setStockFinal] = useState(stock);

useEffect(() => {
  
    setTimeout(() => {
      (setStockFinal(stock))
    }, 2000);

}, [stock])

const StockFinalF = () =>{
  (setStockFinal(stock - count))
}

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
        <Button className="agregarC" variant="success" onClick={() => {{onAdd(count)}StockFinalF()}} >
          Agregar al carrito
        </Button>
      </ButtonGroup>
      <Card.Text>Disponibles: {stockFinal}</Card.Text>
     
    </div>
  );
};

export default ItemCount;

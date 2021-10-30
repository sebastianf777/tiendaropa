import {useState, useEffect} from "react";
// import { Card, Button, ButtonGroup } from "react-bootstrap";
// import { Button } from 'semantic-ui-react';
const ItemCount = ({stock, initial, onAdd}) => {


  const [count, setCount] = useState(initial);
const [stockFinal, setStockFinal] = useState(stock);

useEffect(() => {
  
    setTimeout(() => {
      (setStockFinal(stock))
    }, 1000);

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
      {/* <ButtonGroup aria-label="Basic example"> */}
        {/* <Button className="plusMinus" variant="outline-dark" onClick={resta}> */}
        <button onClick={resta}>
          -
        </button>
        <button >
          {/* <Card.Text> */}
            {count}
            {/* </Card.Text> */}
        </button>
        <button className="plusMinus" onClick={suma}>
          +
        </button>
      {/* </ButtonGroup> */}
      {/* <ButtonGroup aria-label="Basic example"> */}
        {/* <Button className="agregarC" variant="success" onClick={() => {onAdd(count); StockFinalF()}} > */}
        <button onClick={() => {onAdd(count); StockFinalF()}}>
          Agregar al carrito
          </button>
        {/* </Button> */}
      {/* </ButtonGroup> */}
      {/* <Card.Text> */}
        Disponibles: {stockFinal}
        {/* </Card.Text> */}
     
    </div>
  );
};

export default ItemCount;

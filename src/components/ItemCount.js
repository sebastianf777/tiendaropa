import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ItemCount = () => {

    const [stock, setStock] = useState(10);
    const [count, setCount] = useState(0);

    // useEffect(() => {
      
        
    //     setTimeout(() => {
            
    //         Promise.resolve(data)
    //         .then((response) => {
                
    //           setItemsDetail(response);
    //          });
    //        }, 2000);
      
 
    //  }, []);
    const stockFinal = () =>
      stock > 0 ? setStock(stock - count) : console.log("ya no hay mas");
    const suma = () =>
      count < stock ? setCount(count + 1) : console.log("ya no hay stock");
    const resta = () =>
      count !== 0 ? setCount(count - 1) : console.log("0 es el límite");
  
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
        <Button className="agregarC" variant="success" onClick={stockFinal}>
          Agregar al carrito
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;

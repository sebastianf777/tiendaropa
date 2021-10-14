import React from "react";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ producto }) => {
  // const {id, stock, price} = producto;
  const [isActive, setActive] = useState("false");
  const [finishButton, setFinishButton] = useState(false);
  const { addProduct } = useContext(CartContext);

  const [qty, setQty] = useState(0);

  const goToPayment = () => {
    addProduct(producto.id, producto.nombre, producto.precio, qty);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  const onAdd = (qty) => {
    setQty(qty);
    handleToggle();
  };
  useEffect(() => {
    if (qty !== 0) {
      setFinishButton(true);
    }
  }, [qty]);

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="card-body">

        <h5 className="card-title"> {producto.nombre}</h5>
        <p className="card-text"> {producto.precio} </p>
        <div className={isActive ? null : "toggle"}>
          <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
        </div>
        {finishButton ? (
        <Link
          to="/cart"
          className="button2"
          onClick={() => {
            goToPayment();
          }}
        >
          Go to payment! 
        </Link>
      ) : null}
      <Link
        className="buttonClose"
        to="/"
        onClick={() => {
          setQty(0);
        }}
      >
        Go Back!
      </Link>
      </div>
    </div>
  );
};

export default ItemDetail;

// import { Card } from "react-bootstrap";

// const ItemDetail = ({itemDetail}) => {

// return (
//     <div>
//       <Card style={{ width: "100%" }}>
//         <Card.Body>
//           <Card.Title>{itemDetail.title}</Card.Title>
//           <Card.Text>Id: {itemDetail.id}</Card.Text>
//           <Card.Text>Precio {itemDetail.price}</Card.Text>
//         </Card.Body>
//         </Card>
//     </div>
//   );
// }

// export default ItemDetail;

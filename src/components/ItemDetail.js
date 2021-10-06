import React from "react";
import "../css/ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <div className="card-body">
        <h5 className="card-title"> {producto.nombre}</h5>
        <p className="card-text"> {producto.precio} </p>
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

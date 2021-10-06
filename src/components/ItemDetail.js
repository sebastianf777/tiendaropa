import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />

      <div className="card-body">
        <h5 className="card-title"> {producto.nombre} hola</h5>
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

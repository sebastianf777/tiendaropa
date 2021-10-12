import React from "react";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount"


const ItemDetail = ({ producto }) => {
 const {stock, precio, imagen, nombre, id } = producto;
// const {id, stock, price} = producto;
const productCount ={
  id: id,
  stock: stock,
  precio: precio,
  initial: 1,
  onAdd: (stock, count) =>{
    alert(`Se agregarán ${count} unidades al carrito`);
    return stock - count;
  },
  
}


  return (
    <div className="card">
      <img
        src={imagen}
        alt={nombre}
      />

      <div className="card-body">
        <h5 className="card-title"> {nombre}</h5>
        <p className="card-text"> {precio} </p>
      </div>
      <div>
        <ItemCount props={productCount}/>
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

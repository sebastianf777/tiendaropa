// import img1 from "../assets/img/img1.png";
// import ItemDetailContainer from "./ItemDetailContainer";
// import img1 from "../assets/img/img1.png";
// import { Card } from "react-bootstrap";
import React from "react";

import {Link} from "react-router-dom"
// import ItemBigDetail from "./ItemBigDetail";


function Item({ product }) {
 
  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img src={product.imagen}  alt={product.nombre} />

      <div >
        <h5 > {product.nombre} </h5>
        <p > {product.precio} </p>
        <Link to={`/item/${product.id}`}>
          detalle
        </Link>
      </div>
    </div>
  );
}




//   return (
//     <Router>

//     <div className="Card">
//       <Link to = "/item/:id"><Card.Img className = "imgs" variant="top" src={img1} /></Link>

//     </div>

//     <Switch>

//     <Route exact path="/item/:id">
//     <ItemDetailContainer/>

//     </Route>

//     </Switch>

//     </Router>

//   );
// };
export default Item;




// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const datos = Item.productData
//       resolve(datos);
//       reject("ERROR");
//       console.log("datos cargados")
//     }, 2000);
//   });
//   promesa.then((datos) => {
//     console.log(datos);
//   }).catch(error => {
//       console.error("error al cargar datos")
//   });



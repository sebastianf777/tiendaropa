// import img1 from "../assets/img/img1.png";
import ItemDetailContainer from "./ItemDetailContainer";
import img1 from "../assets/img/img1.png";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"

const Item = () => {
 

  return (
    <div className="Card">
      <Link to = "/item/:id"><Card.Img className = "imgs" variant="top" src={img1} /></Link>

      <ItemDetailContainer/>
    </div>
  );
};
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



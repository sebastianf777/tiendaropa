// import img1 from "../assets/img/img1.png";
import ItemDetailContainer from "./ItemDetailContainer";
import img1 from "../assets/img/img1.png";
import { Card } from "react-bootstrap";

const Item = () => {
 

  return (
    <div className="Card">
      <Card.Img className = "imgs" variant="top" src={img1} />

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



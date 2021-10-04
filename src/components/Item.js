// import img1 from "../assets/img/img1.png";
import ItemDetailContainer from "./ItemDetailContainer";
import img1 from "../assets/img/img1.png";
import { Card } from "react-bootstrap";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import ItemBigDetail from "./ItemBigDetail";

const Item = () => {


  return (
    <BrowserRouter>
    <div className="Card">
      <Link to={`/ItemBigDetail`}>
      <Card.Img className = "imgs" variant="top" src={img1} />
      </Link>
      <ItemDetailContainer/>
    </div>

    
<Switch>
  <Route exact path="/">
    <h2>no se</h2>
    </Route>
  <Route exact={`/:itemId`}>
    <>
      <ItemBigDetail/>
    </>
  </Route>
</Switch>
    
</BrowserRouter>
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



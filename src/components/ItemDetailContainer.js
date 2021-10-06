import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import data from "./data.json";


function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { id: idProduct } = useParams();

  

  useEffect(() => {
    setProducto({});
    const getItems = () => {
      return new Promise((resolve, reject) => {
        const buscarProducto = data.find(
          (item) => item.id === parseInt(idProduct)
        );
        setTimeout(() => {
          resolve(buscarProducto);
          reject("error al traer productos");
        }, 3000);
      });
    };
    getItems()
      .then((res) => setProducto(res))
      .catch((acaHayError) => console.log(acaHayError));
  }, [idProduct]);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;


















// import React, { useState, useEffect } from "react";
// import ItemCount from "./ItemCount";
// import ItemDetail from "./ItemDetail";
// import data from "./data.json";
// import { Button } from "react-bootstrap";
// import "../css/ItemDetail.css";




// const ItemDetailContainer = () => {
    
//   const [switchToggled, setSwitch] = useState(false);
//   const [itemDetail, setItemsDetail] = useState([]);
//   const toggleSwitch = () => {
//     switchToggled ? setSwitch(false) : setSwitch(true);
//   }

//   useEffect(() => {
      
        
//         setTimeout(() => {
            
//             Promise.resolve(data)
//             .then((response) => {
                
//               setItemsDetail(response);
//              });
//            }, 2000);
      
 
//      }, []);
    
//   return (
//     <>
//       <Button
//         variant="outline-dark"
//         onClick={toggleSwitch}
//         className="detalleP"
//       >
//         Detalle del producto
//       </Button>
//       <div className={switchToggled ? "Toggled" : "NotToggled"}>

//             <ItemDetail itemDetail={itemDetail}

//             />
//       </div>
//       <ItemCount/>
//     </>
//   );
// };

// export default ItemDetailContainer;

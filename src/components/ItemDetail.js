import { Card } from "react-bootstrap";


const ItemDetail = ({itemDetail}) => {

  
    return (
        <div>
          <Card style={{ width: "200px" }}>
            <Card.Body>
              <Card.Title>{itemDetail.title}</Card.Title>
              <Card.Text>Id: {itemDetail.id}</Card.Text>
              <Card.Text>Precio {itemDetail.price}</Card.Text>
              {/* <Card.Text>Stock {itemDetail.stock}</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        </div>
      );
    }
//   return (
//     <div>
//       {Item.productData.map((item, index) => {
//         return (
//           <ItemCard
//             img={item.img}
//             title={item.title}
//             id={item.id}
//             price={item.price}
//             key={index}
//           />
//         );
//       })}
//     </div>
//   );
// };
export default ItemDetail;

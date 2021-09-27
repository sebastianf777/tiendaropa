import Item from "./Item";
import ItemCard from "./ItemCard";

const ItemList = () => {

    return(
        <div>
            {Item.productData.map((item, index)=>{
            
                return(
            <ItemCard
            img={item.img}
            title={item.title}
            id={item.id}
            price={item.price}
            key={index}
            />
                )
            })}
        </div>)
  

}
export default ItemList;

import { useState } from "react";
import imgCart from "../svg/cartSvg.svg";
import "../scss/ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const suma = () =>
    count < stock ? setCount(count + 1) : console.log("ya no hay stock");
  const resta = () =>
    count > initial ? setCount(count - 1) : console.log("0 es el límite");

  return (
    <div className="buttonsCountContainer">
    
      <div className="countButtons">
        <button className="stockBtn" onClick={resta}>
          -
        </button>
        <div className="stockBtn">
          {count}
        </div>
        <button className="stockBtn" onClick={suma}>
          +
        </button>
      </div>

      <div>
        <button
          className="onAddBtn"
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al carrito
          <img className="itemCountImg" src={imgCart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

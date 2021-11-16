import { useState } from "react";
import imgCart from "../svg/cartSvg.svg";
import "../scss/ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [count, setCount] = useState(initial);

  const suma = () =>
    count < stock ? setCount(count + 1) : console.log("ya no hay stock");
  const resta = () =>
    count > initial ? setCount(count - 1) : console.log("0 es el límite");

  return (
    <div className="buttonsCountContainer">
      {stock === 0 ? (
        <div className="agotado">AGOTADO</div>
      ) : (
        <div className="countButtons">
          <button className="stockBtn" onClick={resta}>
            -
          </button>
          <div className="stockBtn">{count}</div>
          <button className="stockBtn" onClick={suma}>
            +
          </button>
        </div>
      )}

      {stock === 0 ? null : (
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
      )}
    </div>
  );
};

export default ItemCount;

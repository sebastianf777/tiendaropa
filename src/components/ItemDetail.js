import "../scss/ItemDetail.scss";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ producto }) => {
  const [isActive, setActive] = useState("false");
  const [finishButton, setFinishButton] = useState(false);
  const { addProduct } = useContext(CartContext);

  const [qty, setQty] = useState(0);

  const goToPayment = () => {
    addProduct(
      producto.id,
      producto.nombre,
      producto.precio,
      producto.imagen,
      qty
    );
  };
 
  const handleToggle = () => {
    setActive(!isActive);
  };

  const onAdd = (qty) => {
    setQty(qty);
    handleToggle();
  };
  useEffect(() => {
    if (qty !== 0) {
      setFinishButton(true);
    }
  }, [qty]);

  return (
    <div className="itemContainer" id="itemDetail">
      <div className="imagesContainer">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detailsContainer">
        <h1 className="productName"> {producto.nombre}</h1>
        <div className="discountColectionContainer" style={{ display: "flex" }}>
          <p className="productVariants"> {producto.descuento} </p>
          <p className="productVariants" style={{ background: "gray" }}>
            {producto.coleccion}
          </p>
          <p className="productVariants" style={{ background: "lightblue" }}>
            {producto.color}
          </p>
        </div>
        <div className="colorSize_container">
          <div className="selects_container">
            <p>Colores: </p>
            <select name="colorSelected" id="colorSelected">
              {producto.colors &&
                producto.colors.map((color, valueColor) => {
                  return <option key={valueColor}>{color}</option> ;

                })}
            </select>
            
          </div>

          <div className="selects_container">
            <p>Talla: </p>
            <select name="sizes">
              {producto.sizes &&
                producto.sizes.map((index, value) => {
                  return <option key={value}>{index}</option>;
                })}
            </select>
          </div>
        </div>
        producto
        <p className="card-text"> {producto.precio} </p>
        <div className={isActive ? null : "toggle"}>
          <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
        </div>
        {finishButton ? (
          <div>
            <Link
              to="/cart"
              className="buttonClose"
              onClick={() => {
                goToPayment();
              }}
            >
              Terminar la compra!
            </Link>
            <Link
              to="/"
              className="buttonClose"
              onClick={() => {
                goToPayment();
              }}
            >
              Seguir Comprando
            </Link>
          </div>
        ) : (
          <Link
            className="buttonClose"
            to="/"
            onClick={() => {
              setQty(0);
            }}
          >
            Go Back!
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

// IDEAS: agregar boton cancelar

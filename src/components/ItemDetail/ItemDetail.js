import "../../scss/ItemDetail.scss";
import ItemCount from "../ItemCount";
import { NavLink } from "react-router-dom";
import { Icon, Divider } from "semantic-ui-react";
import { Link } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import FadeIn from "react-fade-in";
import imgCart from "../../svg/cartSvg.svg";

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
    <>
      <div className="itemContainer" id="itemDetail">
        <div className="imagesContainer">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detailsContainer">
          <h1 className="productBrand"> {producto.marca}</h1>
          <h2 className="productName"> {producto.nombre}</h2>

          <div className="discountColectionContainer">
            <p className="productVariants">
              {producto.descuento !== "--"
                ? producto.descuento + "%descuento"
                : "NEW"}
            </p>
            <p className="productVariants" style={{ background: "gray" }}>
              colección {producto.coleccion}
            </p>
            <p className="productVariants" style={{ background: "#496ABE" }}>
              {producto.color}
            </p>
          </div>
          <div className="colorSizeContainer">
            <div className="selectsContainer">
              <p>Colores: </p>
              <select name="colorSelected" id="colorSelected">
                {producto.colors &&
                  producto.colors.map((color, valueColor) => {
                    return <option key={valueColor}>{color}</option>;
                  })}
              </select>
            </div>

            <div className="selectsContainer">
              <p>Talla: </p>
              <select name="sizes">
                {producto.sizes &&
                  producto.sizes.map((index, value) => {
                    return <option key={value}>{index}</option>;
                  })}
              </select>
            </div>
          </div>

          <div className="precioDescriptionContainer">
            <article className="preciosContainer">
              <p className="productPrice"> $ {producto.precio}</p>
              <p
                className={
                  (producto.ultimoPrecio = "--"
                    ? "displayNone"
                    : "productLastPrice")
                }
              >
                $ {producto.ultimoPrecio}
              </p>
            </article>
            <article className="description">
              <Link
                smooth={true}
                duration={1000}
                offset={-100}
                to="descriptionContainer"
              >
                <p href="" className="descriptionBtn">
                  Ver descripcion
                </p>
              </Link>
              <p href="" className="stock">
                Stock: {producto.stock}
              </p>
            </article>
          </div>

          <div className="buttonCountCartContainer">
            {finishButton ? (
              <>
                <FadeIn>
                  <NavLink
                    to={"/cart"}
                    onClick={() => {
                      goToPayment();
                    }}
                    className="irACartBtn"
                  >
                    Finalizar compra <img src={imgCart} alt={producto.nombre} />
                  </NavLink>
                </FadeIn>
                <FadeIn>
                  <NavLink
                    to="/category/shop"
                    onClick={() => {
                      goToPayment();
                    }}
                    className="irACartBtn"
                  >
                    Seguir comprando
                    <Icon name="arrow left" />
                  </NavLink>
                </FadeIn>
              </>
            ) : (
              <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
            )}
          </div>
        </div>
      </div>
      <Divider />
      <div className="descriptionContainer" id="descriptionContainer">
        <div className="descriptionArticlesContainer">
          <article>
            <h1>Descripcion</h1>
            <p>CÓDIGO: {producto.referencia}</p>
            <h2>Información del producto:</h2>

            {producto.descripcion &&
              producto.descripcion.map((color, valueColor) => {
                return <p key={valueColor}>{color}</p>;
              })}
          </article>

          <article>
            <h2>Envio y devoluciones</h2>
            <h3>DEVOLUCION GRATIS</h3>

            <p>
              Dispones de 1 mes para devolver tus artículos: con la etiqueta de
              devolución que encontrarás en tu cuenta. No se aceptan
              devoluciones en tiendas físicas ni outlets. Los artículos
              personalizados y la ropa interior no se pueden devolver.
            </p>
          </article>

          <article>
            <h2>Envio estandar</h2>
            <p>
              De acuerdo a las Medidas de Aislamiento Social Preventivo y
              Obligatorio que estamos enfrentando y con el fin de cuidar la
              salud de nuestros clientes y trabajadores, las compras realizadas
              del 18 al 31 de marzo se enviarán a partir del 01 de abril o hasta
              la fecha en la que el Gobierno Argentino deje sin efecto las
              medidas mencionadas.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

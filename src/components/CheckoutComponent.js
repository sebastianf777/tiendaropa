import React, { useContext } from "react";
 import "../scss/PagoYCheckOut.scss";
import { CartContext } from "./CartContext";
import { Button, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const CheckoutComponent = () => {
    const {calculoTotal, clearCart, cantidad} = useContext(CartContext);

    return (
        <>  
            <section style={{marginBottom:'3em'}}>
                <div className='checkout_container'>
                    
                    <div className='totalPrice_container'>
                        <ul>
                            <li>
                                <span className='checkout_quantity'>PRODUCTOS: {cantidad}</span>
                                <span className='checkout_totalPrice' style={{color:'#2C3330'}}> $ {calculoTotal().toLocaleString("en-US")} </span>
                            </li>
                            <li>
                                <span className='checkout_variants'>Envio</span>
                                <span className='checkout_variants'> $ 799,00 </span>
                            </li>
                            <li>
                                <span className='checkout_variants'>Promocion</span>
                                <span className='checkout_variants'> - $ 799,00 </span>
                            </li>
                            <li>
                                <span className='checkout_quantity'>TOTAL</span>
                                <span className='checkout_totalPrice'>$ {calculoTotal().toLocaleString("en-US")}</span>
                            </li>
                        </ul>
                    </div>

                    <p className='terms_conditions'>Acepto sin reservas las condiciones generales</p>

                    <Link to={"/"}>
                        <Button animated='fade' >
                            <Button.Content visible>Proceder al pago <Icon name='dollar'/></Button.Content>
                            <Button.Content hidden>Siguiente paso <Icon name='arrow right'/></Button.Content>
                        </Button>
                    </Link>

                </div>

                <div className='checkoutBtns_container'>
                    <button className='seguirComprando_btn vaciar' onClick={() => {clearCart()}}>Vaciar carrito <Icon name='trash alternate outline'/></button>
                    <Link to="/" className='seguirComprando_btn'><Icon name='arrow left'/> Seguir comprando</Link>
                </div>
            </section>

        </>
    )
}

export default CheckoutComponent
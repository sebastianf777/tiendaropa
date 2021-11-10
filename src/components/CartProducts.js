import React, { useContext } from "react";
import { CartContext } from "./CartContext";

import { Button } from 'semantic-ui-react';

const CartProducts = () => {
    const { cart, calculoTotal, removeProduct} = useContext(CartContext);

    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}> 
                {cart.map((producto) => {
                    return (
                        <>
                            <section className='cartProductsContainer'>
                                <div className='cart_product' >

                                    <div className='img_container' >
                                        <img src={producto.image}/>
                                    </div>
                                    
                                    <div className='cart_product_info'>

                                        <h2 className='product_tittle'>{producto.name}</h2>

                                        <div className='price_quantity'>
                                            <span className='product_quantity'>Selecciono: {producto.qty}</span>
                                            <span className='product_price'>$ {producto.price.toLocaleString("en-US")}</span>
                                        </div>

                                    </div>
                                    
                                    <div className='removeBtnContainer'>
                                        <Button icon='remove' color='red' size='mini' onClick={()=>{removeProduct(producto)}} />
                                    </div>

                                </div>
                            </section>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CartProducts
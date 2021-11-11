import React , {useContext, useEffect, useState} from 'react';
import { CartContext } from "./CartContext";
import {NavLink} from "react-router-dom";
import {Button, Icon} from "semantic-ui-react";
import '../scss/PuchaseTotal.scss';

const PurchaseTotal = () => {
    const { cantidad, cart } = useContext(CartContext);
    const [calculoTotal, setCalculoTotal] = useState([])

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    useEffect(() => {
      if (cart.length) {
        const prices = cart.map((item) => item.price * item.qty);
        console.log(prices.reduce(reducer));
        setCalculoTotal(prices.reduce(reducer));
      }
    }, [cart]);
    return (
        <>  
            <section className='purcharseData'>
                <h2>Su compra: </h2>
                <div className='priceTotalContainer'>
                    <div>

                        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                            <h3 style={{fontWeight:'600'}}>{cantidad} Productos</h3> 
                            <h3 style={{fontWeight:'600'}}>$ {calculoTotal.toLocaleString("en-US")}</h3>
                        </div> 
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <h3 className=''>Total:</h3> 
                            <h3 className='' style={{color:'#00532c'}}>$ {calculoTotal.toLocaleString("en-US")}</h3>
                        </div> 
                        
                    </div>

                    <NavLink to='/cart'>
                    <Button animated>
                        <Button.Content visible>Carrito</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' /> Volver
                        </Button.Content>
                    </Button>
                    </NavLink>

                </div>
            </section>
        </>
    )
}

export default PurchaseTotal
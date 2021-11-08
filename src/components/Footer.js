import React from 'react';
import "../scss/Footer.scss";

import { Input, Icon, Button, Divider } from 'semantic-ui-react';

const Footer = () => {
    return (
        <>
        <section className="footer">

            <div className='footer_container'>
                <article className='lacoste_club_container'>
                    <h2>Unirse a Le Club Lacoste</h2>
                    <div>
                        <Input  action='Sign In' placeholder='@ email'/>
                    </div>

                    <ul style={{display:'flex', justifyContent:'space-between'}}>
                        <li><Icon name='facebook'/></li>
                        <li><Icon name='instagram'/></li>
                        <li><Icon name='twitter'/></li>
                        <li><Icon name='pinterest'/></li>
                        <li><Icon name='youtube'/></li>
                        <li><Icon name='tumblr'/></li>
                    </ul>

                    <h3>36 TIENDAS EN ARGENTINA</h3>
                    <Button>Encontrar una tienda</Button>

                </article>

                <article className='acercaDe_container'>
                    <h3>ACERCA DE LACOSTE</h3>
                    <ul>
                        <li>El Grupo Lacoste</li>
                        <li>Trabaja con nosotros</li>
                        <li>Protección de la marca</li>
                    </ul>
                </article> 

                <article className='categoriasFooter_container'>
                    <h3>COLECCIONES</h3>
                    <ul>
                        <li>Colección Hombre</li>
                        <li>Colección Mujer</li>
                        <li>Colección Niños</li>
                        <li>Tienda de Polos</li>
                        <li>Calzado</li>
                        <li>Lacoste Live</li>
                        <li>Lacoste Sport</li>
                    </ul>
                </article>

                <article className='faq_container'>
                    <h3>AYUDA Y CONTACTO</h3>
                    <h3>PREGUNTAS FRECUENTES</h3>
                    <h3>LLAMANOS</h3>
                    <p>(+54) 11 2-040-0808 *</p>
                    <p>Contacta con nuestro servicio de atención al cliente <br/>de lunes a viernes de 09.00 a 18.00 horas.</p>
                    <p>*Tarifa local de tu operador telefónico.</p>
                    <h3>ESCRIBENOS</h3>
                </article>
            </div>

            <Divider />

            <div style={{textAlign:'center', margin:'40px 0'}}>
                <h3>METODOS DE PAGO</h3>
                <ul className="ulCards">
                    <li><Icon name='cc mastercard'/></li>
                    <li><Icon name='cc visa'/></li>
                    <li><Icon name='cc amex'/></li>
                    <li><Icon name='cc amazon pay'/></li>
                    <li><Icon name='cc paypal'/></li>
                </ul>
            </div>

        </section>
        </>
    )
}

export default Footer
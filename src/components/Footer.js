import React from 'react';
import "../scss/Footer.scss";

import { Divider, Icon} from 'semantic-ui-react';

const Footer = () => {
    return (
        <>
        <section className="footer">
       
           <h3>Compra Segura <Icon name='lock'/>Sitio seguro con criptografia (SSL) <Icon name='certificate'/> Homologado por la USERTrust Network <Icon name='globe'/> Sitio Blindado Blindado contra robo de información y clonación de tarjetas <Icon name='shield alternate'/></h3>

            <Divider />

 <h4><Icon name='copyright outline'/> Beauty Queen 2021 . Todos los derechos reservados.</h4>

        </section>
        </>
    )
}

export default Footer
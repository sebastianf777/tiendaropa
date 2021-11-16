import React from "react";
import "../scss/Footer.scss";

import { Divider, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <ul className="redesFooter">
          <li>
            <h3>ENCUENTRANOS EN: </h3>
          </li>
          <li>
            <Icon name="facebook" />
          </li>
          <li>
            <Icon name="instagram" />
          </li>
          <li>
            <Icon name="twitter" />
          </li>
          <li>
            <Icon name="pinterest" />
          </li>
          <li>
            <Icon name="youtube" />
          </li>
          <li>
            <Icon name="tumblr" />
          </li>
        </ul>

        <Divider />

        <h3>
          Compra Segura <Icon name="lock" />
          Sitio seguro con criptografia (SSL) <Icon name="certificate" />{" "}
        </h3>
        <h4>
          {" "}
          Homologado por la USERTrust Network <Icon name="globe" />{" "}
        </h4>
        <h4>
          Sitio Blindado Blindado contra robo de información y clonación de
          tarjetas <Icon name="shield alternate" />
        </h4>
        <Divider />

        <h5>
          <Icon name="copyright outline" /> Beauty Queen 2021 . Todos los
          derechos reservados.
        </h5>
      </section>
    </>
  );
};

export default Footer;

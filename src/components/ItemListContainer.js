import React from "react";

const Greeting = (props) => {
    const Greeting = <h1> Bienvenida: {props.name} {props.lastName}</h1>;
return Greeting;
}

export default Greeting;

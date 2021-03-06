import { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const UserForm = ({ user, setUser }) => {
  const [nombre, setNombre] = useState("");
  const [mail1, setMail1] = useState("");
  const [mail2, setMail2] = useState("");

  const handleNombre = (e) => setNombre(e.target.value);
  const handleMail1 = (e) => setMail1(e.target.value);
  const handleMail2 = (e) => setMail2(e.target.value);

  const EmailVerif = (mail1, mail2, nombre) => {
    if (mail1 === "" || nombre === "") {
      alert("Por favor llene todos los campos");
    } else if (mail1 === mail2) {
      setUser({
        name: nombre,
        email: mail1,
      });
    } else {
      alert("Los Emails deben coincidir");
    }
  };

  return (
    <div className="orderContainer">
      {user.name ? <h2>Bienvenida/o</h2> : <h2>Información del cliente:</h2>}
      {user.name ? (
        <div className="userName">{user.name}</div>
      ) : (
        <div className="userForm">
          <input
            type="name"
            placeholder="Nombre"
            onChange={handleNombre}
            value={nombre}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleMail1}
            value={mail1}
          />
          <input
            type="email"
            placeholder="Repetir Email"
            onChange={handleMail2}
            value={mail2}
          />
          <Button
            animated="fade"
            className="botonIngresar"
            onClick={() => {
              EmailVerif(mail1, mail2, nombre);
            }}
          >
            Ingresar <Icon name="arrow right" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserForm;

import Input from "../loginInput/Input";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    console.log(regexEmail.test(email));

    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacios");
      swAlert(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("debes escribir una dirección de correo electronico válida");
      swAlert(
        <h2>Debes escribir una dirección de correo electronico válida</h2>
      );
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales inválidas");
      swAlert(<h2>Credenciales inválidas</h2>);
      return;
    }
    console.log("ok, información lista para ser enviada");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swAlert(<h2>Perfecto, ingresaste correctamente!</h2>);
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        navigate("/list");
      });
  };

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandle}>
        <Input label="Correo electronico :" type="text" name="email" />
        <br />
        <Input label="Contraseña :" type="password" name="password" />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;

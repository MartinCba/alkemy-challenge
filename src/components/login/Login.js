import Input from "../loginInput/Input";
import axios from "axios";

function Login() {
  const submitHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    console.log(regexEmail.test(email));

    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacios");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("debes escribir una dirección de correo electronico válida");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales inválidas");
      return;
    }
    console.log("ok, información lista para ser enviada");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
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

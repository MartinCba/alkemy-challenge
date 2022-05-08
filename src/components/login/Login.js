/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <div className=" flex items-center justify-center  bg-gray-10">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Formulario de Login</h3>
        <form onSubmit={submitHandle}>
          <div className="mt-4">
            <Input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              label="Email :"
              type="text"
              name="email"
            />
            <br />
          </div>
          <div className="mt-4">
            <Input label="Password :" type="password" name="password" />
            <br />
          </div>
          <div className="flex items-baseline justify-between">
            <button
              className="px-6 py-2 mt-4 text-white bg-sky-300 rounded-lg hover:bg-sky-500"
              type="submit"
            >
              Login
            </button>
            <a href="#" className="text-sm text-sky-400 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

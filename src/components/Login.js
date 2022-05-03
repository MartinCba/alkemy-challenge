import Input from "./Input";

function Login() {
  return (
    <>
      <h2>Formulario de Login</h2>
      <form>
        <Input label="Correo electronico :" type="email" name="email" />
        <br />
        <Input label="Contraseña :" type="password" name="password" />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;

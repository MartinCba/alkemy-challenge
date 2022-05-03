function Login() {
  return (
    <>
      <h2>Formulario de Login</h2>
      <form>
        <label>
          <span>Correo electrónico: </span>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña: </span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;

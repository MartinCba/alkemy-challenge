function Input({label, type, name}) {
  return (
    <>
      <label>
        <span>{label} </span>
        <br />
        <input type={type} name={name} />
      </label>
    </>
  );
}
export default Input;

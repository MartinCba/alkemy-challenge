function Input({ label, type, name }) {
  return (
    <>
      <label>
        <span>{label} </span>
        <br />
        <input
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          type={type}
          name={name}
        />
      </label>
    </>
  );
}
export default Input;

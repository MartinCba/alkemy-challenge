import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function List() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }
  });
  return <h2>Soy el componente List</h2>;
}

export default List;

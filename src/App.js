import { List, Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;

import { Footer, Header, List, Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold underline">Holanda</h2>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="list" element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

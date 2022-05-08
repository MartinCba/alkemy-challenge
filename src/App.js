import { Footer, Header, List, Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header className="flex " />
      <div className="flex justify-center pt-16 pb-16 mb-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="list" element={<List />} />
        </Routes>
      </div>
      <div className="fixed bottom-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;

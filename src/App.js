import { Footer, Header, List, Login, Detail, Results } from "./components";
import { Routes, Route } from "react-router-dom";
import "./app.css"
function App() {
  return (
    <div>
      <Header className="flex " />
      <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List/>} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center text-zinc-50 bg-sky-500 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;

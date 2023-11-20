import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laptops from "./pages/Laptops";
import Add from "./pages/Add";
import Delete from "./pages/Delete";
import "./style.css"
import Template from "./pages/template/Template";
<Route path="/delete" element={<Delete />} />



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Template />} />
          <Route path="/laptop" element={<Laptops />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laptops from "./pages/Laptops";
import Add from "./pages/Add";
import Delete from "./pages/Delete";
import "./style.css"
<Route path="/delete" element={<Delete />} />



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Laptops />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;



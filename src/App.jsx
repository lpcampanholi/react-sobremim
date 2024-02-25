import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim/";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Rodape from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App;

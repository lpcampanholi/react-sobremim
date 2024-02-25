import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim/";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="*" element={<NotFound />} />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App;

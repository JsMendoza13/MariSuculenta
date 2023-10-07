import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productos from "./components/pages/Productos";
import Main from "./components/Main";
import Clientes from "./components/pages/Clientes";
import Proveedores from "./components/pages/Proveedores";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

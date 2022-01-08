// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Zonasytarrifas from "./pages/Zonasytarifas";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";
import Zonasytarifas from "./pages/Zonasytarifas";

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/nosotros" exact element={<Nosotros />} />
        <Route path="/Zonasytarifas" exact element={<Zonasytarifas />} />
        <Route path="/Galeria" exact element={<Galeria />} />
        <Route path="/Sericios" exact element={<Servicios />} />
        <Route path="/Contacto" exact element={<Contacto />} />
        <Route path="/Novedades" exact element={<Novedades />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

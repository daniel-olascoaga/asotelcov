import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros"
import Novedades from "./pages/Novedades";
import Publicaciones from "./pages/Publicaciones";
import Eventos from "./pages/Eventos";
import Estatutos from "./pages/Estatutos";
import CamaraComercio from "./pages/CamaraComercio";
import Actas from "./pages/Actas";
import Certificados from "./pages/Certificados";
import Resolucion from "./pages/Resolucion";
import Registro from "./pages/Registro";
import Acceso from "./pages/Acceso";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/asotelcov" element={<Layout/>}>
            <Route index element={<Inicio/>}/>
            <Route path="inicio" element={<Inicio/>}/>
            <Route path="nosotros" element={<Nosotros/>}/>
            <Route path="novedades" element={<Novedades/>}/>
            <Route path="publicaciones" element={<Publicaciones/>}/>
            <Route path="eventos" element={<Eventos/>}/>
            <Route path="Estatutos" element={<Estatutos/>}/>
            <Route path="CamaraComercio" element={<CamaraComercio/>}/>
            <Route path="Actas" element={<Actas/>}/>
            <Route path="Certificados" element={<Certificados/>}/>
            <Route path="constitucion" element={<Resolucion/>}/> 
            <Route path="Registro" element={<Registro/>}/>
            <Route path="Acceso" element={<Acceso/>}/> 
          </Route>
        </Routes>
  </BrowserRouter>
    </>
  )
}

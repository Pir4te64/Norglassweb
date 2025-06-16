// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Inicio from "./sections/Inicio.jsx";
import Soluciones from "./sections/Soluciones.jsx";
import Caracteristicas from "./sections/Caracteristicas.jsx";
import Tecnologia from "./sections/Tecnologia.jsx";
import Contacto from "./sections/Contacto.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="w-full max-w-[100vw] mx-auto px-4">
        <Inicio />
        <Soluciones />
        <Caracteristicas />
        <Tecnologia />
        <Contacto />
      </main>
      {/* Footer fuera del container */}
      <Footer />
    </div>
  );
}

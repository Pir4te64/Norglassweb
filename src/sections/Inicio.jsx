// src/sections/Inicio.jsx
import React from "react";
import Spline from "@splinetool/react-spline";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="mt-10 md:mt-0 text-4xl md:text-5xl font-bold text-secondary mb-6">
              Liderazgo Global <br /> en Vidrios Laminados{" "}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Soluciones avanzadas en vidrio laminado para la industria moderna.
              Calidad, seguridad y diseño en cada proyecto.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Contactar
            </a>
          </div>
          <div className="w-full lg:w-1/2 h-[600px] rounded-2xl overflow-hidden p-0 m-0">
            <img
              src="/column.png"
              alt="Vidrio laminado Norglass"
              className="w-full h-full object-cover object-center p-0 m-0 border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

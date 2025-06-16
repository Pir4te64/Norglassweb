import React, { useState } from "react";
import ContactButton from "../ContactButton/ContactButton.jsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-lg shadow-blue-500/20">
      <div className="container mx-auto flex items-center py-4 px-6 justify-start">
        <a href="#inicio" onClick={scrollTo("inicio")} className="transition">
          <img src="/logo2.svg" alt="Norglass logo" className="h-8 w-auto" />
        </a>
        <ul className="hidden md:flex space-x-8 ml-8">
          <li>
            <a
              href="#inicio"
              onClick={scrollTo("inicio")}
              className="hover:text-primary transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#soluciones"
              onClick={scrollTo("soluciones")}
              className="hover:text-primary transition"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="#caracteristicas"
              onClick={scrollTo("caracteristicas")}
              className="hover:text-primary transition"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#tecnologia"
              onClick={scrollTo("tecnologia")}
              className="hover:text-primary transition"
            >
              Productos
            </a>
          </li>
        </ul>
        <div className="ml-auto flex items-center">
          <ContactButton />
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white border-t`}
      >
        <ul className="px-6 py-4 space-y-4">
          <li>
            <a
              href="#inicio"
              onClick={scrollTo("inicio")}
              className="block hover:text-primary transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#soluciones"
              onClick={scrollTo("soluciones")}
              className="block hover:text-primary transition"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="#caracteristicas"
              onClick={scrollTo("caracteristicas")}
              className="block hover:text-primary transition"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#tecnologia"
              onClick={scrollTo("tecnologia")}
              className="block hover:text-primary transition"
            >
              Productos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/logo.svg", alt: "Norglass logo" },
  { src: "/agc-glass-seeklogo.svg", alt: "AGC Glass" },
  { src: "/guardian-glass-seeklogo.svg", alt: "Guardian Glass" },
  { src: "/evoglass4.png", alt: "Evoglass" },
  { src: "/Grupodracena.png", alt: "Dracena" },
];

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-white py-10">
      {/* Contenedor centrado con ancho máximo */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logos - Mobile Carrusel */}
        <div className="w-full block sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.alt} className="flex justify-center items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-32 object-contain invert brightness-0"
                  style={{ maxWidth: '8rem', minWidth: '6rem' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Logos - Desktop fila única */}
        <div className="w-full hidden sm:flex justify-center items-center gap-12">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-32 object-contain invert brightness-0"
              style={{ maxWidth: '8rem', minWidth: '6rem' }}
            />
          ))}
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex justify-center space-x-4 sm:space-x-8 text-[0.9rem] sm:text-lg font-semibold">
          <li>
            <a href="#inicio" className="hover:text-blue-500 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#soluciones" className="hover:text-blue-500 transition">
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="#caracteristicas"
              className="hover:text-blue-500 transition"
            >
              Características
            </a>
          </li>
          <li>
            <a href="#tecnologia" className="hover:text-blue-500 transition">
              Tecnología
            </a>
          </li>
        </ul>

        {/* Iconos sociales */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/norglassvidrios/"
            aria-label="Instagram"
            className="hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 Norglass, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

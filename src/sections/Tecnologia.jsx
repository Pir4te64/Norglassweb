// src/sections/Tecnologia.jsx
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Vidrios Laminados",
    img: "/10.png",
    bullets: [
      "Compuesto por dos capas de vidrio de 3 mm unidas por una lámina de PVB.",
      "Aplicaciones: Seguridad en edificios, control térmico/acústico y diseño arquitectónico personalizado.",
    ],
  },
  {
    title: "DVH (Doble Vidriado Hermético)",
    img: "/11.png",
    bullets: [
      "Producto en desarrollo, actualmente en construcción en su fábrica del Parque Industrial Posadas.",
    ],
  },
  {
    title: "Espejos",
    img: "/12.png",
    bullets: [
      "Disponibles en biselados, con marcos metálicos o sin marco, adaptables a estilos modernos, clásicos o minimalistas, ideales para baños, salas de espejos o decoración de interiores.",
    ],
  },
  {
    title: "Vidrios Monolíticos",
    img: "/13.png",
    bullets: [
      "Cuando hablamos de vidrio o cristal monolítico nos referimos a aquellos vidrios formados solo por una masa vítrea, sin ningún otro tipo de capa o tratamiento.",
    ],
  },
  {
    title: "Proyectos a Medida",
    img: "/14.png",
    bullets: [
      "En Norglass entendemos que cada obra es única. Por eso, además de ofrecer vidrios de alta calidad, brindamos soluciones personalizadas para proyectos especiales.",
    ],
  },
];

export default function Tecnologia() {
  const swiperRef = useRef(null);

  // Forzar actualización de Swiper en resize
  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="tecnologia"
      className="min-h-screen bg-blue-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-32 py-20">
        <div className="space-y-12 w-full">
          {/* Título y subtítulo según la imagen de referencia */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Proyectos especiales:{" "}
              <span className="text-primary">
                Multilaminados y templados laminados
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium">
              Vidrios cortados a medida
            </p>
          </div>

          {/* Carrusel de tarjetas con Swiper y flechas minimalistas para escritorio */}
          <div className="relative w-full hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition-all"
                style={{ transform: "translateX(-60%)" }}
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                aria-label="Anterior"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={48}
              slidesPerView={2}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="!pb-10"
              navigation={false}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
            >
              {products.map((p) => (
                <SwiperSlide key={p.title} className="h-full">
                  <div className="bg-white rounded-2xl border border-blue-300 shadow-sm p-8 h-full flex flex-col min-h-[540px]">
                    <div>
                      <div className="h-[320px] w-full mb-6">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div className="px-2 pb-2 text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {p.title}
                        </h3>
                        <ul className="space-y-3">
                          {p.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-gray-600 leading-relaxed text-base"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                className="z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition-all"
                style={{ transform: "translateX(60%)" }}
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                aria-label="Siguiente"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carrusel especial para mobile, alineado con el contenedor */}
          <div className="block md:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="!pb-10 w-full"
              observer={true}
              observeParents={true}
            >
              {products.map((p) => (
                <SwiperSlide
                  key={p.title}
                  className="flex justify-center w-full"
                >
                  <div className="bg-white rounded-2xl border border-blue-300 shadow-sm p-4 flex flex-col min-h-[400px] w-full">
                    <div>
                      <div className="h-[200px] w-full mb-4">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="px-2 pb-2 text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {p.title}
                        </h3>
                        <ul className="space-y-2">
                          {p.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-gray-600 leading-relaxed text-sm"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

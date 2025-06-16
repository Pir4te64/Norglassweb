import React, { useState } from "react";

const cards = [
  {
    title: "Alto Rendimiento Acústico",
    description:
      "Reducción de hasta un 50% en la transmisión de ruido exterior, ideal para edificios en zonas urbanas, oficinas o espacios que requieren tranquilidad y concentración.",
    icon: "/4.svg",
  },
  {
    title: "Seguridad Antifragmentación",
    description:
      "Gracias a la capa de PVB, nuestros vidrios mantienen los fragmentos cohesionados ante roturas, reduciendo riesgos de lesiones y garantizando protección en entornos de alto tráfico o impacto.",
    icon: "/5.svg",
  },
  {
    title: "Control Solar y Térmico",
    description:
      "Capas especializadas bloquean hasta el 90% de los rayos UV y regulan la temperatura interior, optimizando el consumo energético y mejorando el confort en climas extremos.",
    icon: "/6.svg",
  },
  {
    title: "Resistencia a Impactos Severos",
    description:
      "Estructura laminada 3+3 que soporta golpes y presiones, perfecta para fachadas, ventanales o áreas expuestas a condiciones climáticas adversas o vandalismo.",
    icon: "/7.svg",
  },
  {
    title: "Personalización Arquitectónica",
    description:
      "Acabados en tonos, texturas y opacidades variables, adaptables a diseños vanguardistas o clásicos, potenciando la estética y funcionalidad de cualquier proyecto.",
    icon: "/8.svg",
  },
  {
    title: "Sostenibilidad Certificada",
    description:
      "Fabricados con procesos ecoeficientes y materiales reciclables, contribuyen a certificaciones LEED y BREEAM, alineados con estándares globales de construcción verde.",
    icon: "/9.svg",
  },
];

// Eliminar la animación automática del blob y ajustar el CSS
const blobStyles = `
  .card-effect {
    position: relative;
    overflow: hidden;
  }
  .card-effect .blob {
    position: absolute;
    z-index: 1;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #3b82f633;
    opacity: 0;
    filter: blur(16px);
    pointer-events: none;
    transition: opacity 0.4s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .card-effect:hover .blob {
    opacity: 1;
  }
  .card-effect .bg-blur {
    position: absolute;
    top: 8px;
    left: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    z-index: 2;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(16px);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .card-effect:hover .bg-blur {
    opacity: 1;
  }
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("blob-styles")
) {
  const style = document.createElement("style");
  style.id = "blob-styles";
  style.innerHTML = blobStyles;
  document.head.appendChild(style);
}

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="bg-gray-50 py-20 px-8 lg:px-32">
      {/* Heading y subtítulo */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Características de nuestros{" "}
          <span className="text-blue-500">vidrios laminados</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Tecnología, Seguridad y Sostenibilidad para Proyectos que Marcan la
          Diferencia
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => {
          // Estado para la posición del mouse
          const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
          const [hovered, setHovered] = useState(false);

          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });
          };

          return (
            <div
              key={card.title}
              className={
                "card-effect rounded-lg p-6 space-y-2 transition border bg-white border-gray-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 group"
              }
              style={{ minHeight: "180px" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                className="blob"
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: `translate(-50%, -50%) translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                }}
              />
              <div className="bg-blur" />
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-6 h-6 text-blue-500"
                />
                <h3 className="text-base font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <p
                className={
                  "text-gray-600 text-sm leading-relaxed relative z-10 group-hover:text-blue-600 transition-colors duration-200"
                }
              >
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

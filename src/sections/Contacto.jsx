// src/sections/Contacto.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID desde .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID desde .env
        formRef.current, // Form reference
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key desde .env
      )
      .then(
        (result) => {
          setSubmitStatus({
            type: "success",
            message:
              "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
          });
          formRef.current.reset(); // Limpia el formulario
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setSubmitStatus({
            type: "error",
            message:
              "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente más tarde.",
          });
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section
      id="contacto"
      className="bg-gray-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pb-4">
        {/* Columna izquierda: encabezado + formulario */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
            ¡Transforme sus proyectos con vidrios de alta tecnología!
          </h2>
          <p className="text-gray-600">
            Complete el formulario ahora y reciba asesoría personalizada,
            cotizaciones express y soluciones adaptadas a sus necesidades
            arquitectónicas.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isLoading}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isLoading}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isLoading}
            />
            <textarea
              name="mensaje"
              rows="5"
              placeholder="Mensaje"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`mt-2 inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar información"}
            </button>
          </form>
          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>

        {/* Columna derecha: imagen */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/15.png"
            alt="Asesoría de proyectos de vidrio laminado"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './HeroSection.css'; // Archivo CSS para los estilos

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-contenido">
        <h1 className="hero-titulo">Transparencia Conectada</h1>
        <p className="hero-subtitulo">
          Diseño estratégico y tecnología accesible para una gestión pública más transparente.
        </p>
        <button className="boton-accion">
          Conoce la propuesta
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
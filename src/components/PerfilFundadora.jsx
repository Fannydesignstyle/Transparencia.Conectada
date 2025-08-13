import React from 'react';
import './PerfilFundadora.css'; // Archivo CSS para los estilos

const PerfilFundadora = () => {
  return (
    <section className="perfil-fundadora-section">
      <div className="perfil-contenido">
        <img src="/images/estefania-perez.png" alt="Estefanía Pérez Vázquez" className="foto-fundadora" />
        <div className="info-fundadora">
          <h2 className="titulo-fundadora">Estefanía Pérez Vázquez</h2>
          <p className="descripcion-fundadora">
            Fundadora de Fanny Design Style y creadora de Transparencia Conectada.
            Estefanía es una diseñadora estratégica y gestora de innovación cívica
            que busca fortalecer la transparencia desde la ciudadanía, combinando
            estética, funcionalidad y participación social.
          </p>
          <a
            href="https://fannydesignstyle.com/portafolio" // URL de ejemplo, cámbiala por la real
            target="_blank"
            rel="noopener noreferrer"
            className="boton-portafolio"
          >
            Ver portafolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerfilFundadora;
import React from 'react';
import propuestaData from '../data/propuestaValor.json';
import './PropuestaValorSection.css';

const PropuestaValorSection = () => {
  return (
    <section className="propuesta-valor-section">
      <h2>{propuestaData.titulo}</h2>
      <div className="propuesta-valor-puntos">
        {propuestaData.puntos.map(punto => (
          <div key={punto.id} className="punto-card">
            <h3>{punto.titulo}</h3>
            <p>{punto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropuestaValorSection;

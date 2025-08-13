import React from 'react';
import fundadoraData from '../data/fundadora.json';
import './FundadoraProfile.css';

const FundadoraProfile = () => {
  return (
    <section className="fundadora-profile-section">
      <h2>Conoce a Nuestra Fundadora</h2>
      <div className="profile-card">
        <img src={fundadoraData.imagen} alt={fundadoraData.nombre} className="profile-image" />
        <h3>{fundadoraData.nombre}</h3>
        <p className="profile-cargo">{fundadoraData.cargo}</p>
        <p className="profile-description">{fundadoraData.descripcion}</p>
      </div>
    </section>
  );
};

export default FundadoraProfile;

import React from 'react';
import { Link } from 'react-router-dom';
import './TarjetaFuncionario.css'; // Archivo CSS para los estilos

const TarjetaFuncionario = ({ funcionario }) => {
  const urlFuncionario = `/funcionarios/${funcionario.nombre.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <div className="tarjeta-funcionario">
      <img src={funcionario.imagenUrl} alt={funcionario.nombre} className="tarjeta-foto" />
      <div className="tarjeta-contenido">
        <h3>{funcionario.nombre}</h3>
        <p className="tarjeta-cargo">{funcionario.cargo}</p>
        <p className="tarjeta-dependencia">Dependencia: {funcionario.dependencia}</p>
        <Link to={urlFuncionario} className="boton-ver-perfil">
          Ver perfil completo
        </Link>
      </div>
    </div>
  );
};

export default TarjetaFuncionario;

import React, { useState, useEffect } from 'react';
import TarjetaFuncionario from '../components/TarjetaFuncionario';
import funcionariosData from '../data/funcionarios.json';
import './DirectorioFuncionarios.css'; // Archivo CSS para los estilos

const DirectorioFuncionarios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDependencia, setFilterDependencia] = useState('Todos');
  const [filteredFuncionarios, setFilteredFuncionarios] = useState(funcionariosData);

  // Obtener una lista única de dependencias para el filtro
  const dependencias = ['Todos', ...new Set(funcionariosData.map(f => f.dependencia))];

  useEffect(() => {
    // Lógica para filtrar los funcionarios
    const results = funcionariosData.filter(funcionario => {
      // Filtrar por texto en el nombre, cargo o dependencia
      const matchesSearchTerm = 
        funcionario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        funcionario.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        funcionario.dependencia.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtrar por la dependencia seleccionada
      const matchesDependencia = 
        filterDependencia === 'Todos' || funcionario.dependencia === filterDependencia;

      return matchesSearchTerm && matchesDependencia;
    });

    setFilteredFuncionarios(results);
  }, [searchTerm, filterDependencia]); // El efecto se ejecuta cuando estos estados cambian

  return (
    <div className="directorio-container">
      <h1 className="directorio-titulo">Directorio de Funcionarios</h1>
      
      {/* Sección de filtros */}
      <div className="filtros-container">
        <input
          type="text"
          placeholder="Buscar por nombre, cargo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="filtro-input"
        />
        
        <select
          value={filterDependencia}
          onChange={(e) => setFilterDependencia(e.target.value)}
          className="filtro-select"
        >
          {dependencias.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
      </div>

      {/* Listado de tarjetas de funcionarios */}
      <div className="listado-funcionarios">
        {filteredFuncionarios.length > 0 ? (
          filteredFuncionarios.map(funcionario => (
            <TarjetaFuncionario key={funcionario.id} funcionario={funcionario} />
          ))
        ) : (
          <p className="no-resultados">No se encontraron funcionarios que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default DirectorioFuncionarios;
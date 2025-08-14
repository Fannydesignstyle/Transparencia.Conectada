import React, { useEffect, useRef, useState } from 'react';
import './ObjetivosSection.css'; // Archivo CSS para los estilos
import { FaBullseye, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

const objetivos = [
  {
    id: 1,
    icono: <FaBullseye />,
    titulo: "Refinar la estructura visual",
    descripcion: "Perfeccionar el diseño para que la plataforma sea intuitiva y agradable de usar."
  },
  {
    id: 2,
    icono: <FaChartLine />,
    titulo: "Integrar métricas en tiempo real",
    descripcion: "Conectar con herramientas de analítica para medir el impacto y el uso de la plataforma."
  },
  {
    id: 3,
    icono: <FaUsers />,
    titulo: "Empoderar equipos institucionales",
    descripcion: "Ofrecer herramientas de autogestión para que las dependencias públicas sean autosuficientes."
  },
  {
    id: 4,
    icono: <FaLightbulb />,
    titulo: "Inspirar transformación social",
    descripcion: "Usar el diseño y la narrativa como catalizadores del cambio cívico."
  }
];

const ObjetivosSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const objetivosRef = useRef(null);

  useEffect(() => {
    const currentRef = objetivosRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 } // El 30% del componente visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={objetivosRef} className={`objetivos-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="objetivos-titulo">Nuestros Objetivos</h2>
      <div className="objetivos-contenedor">
        {objetivos.map((objetivo, index) => (
          <div key={objetivo.id} className="tarjeta-objetivo" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="icono-objetivo">
              {objetivo.icono}
            </div>
            <h3 className="titulo-objetivo">{objetivo.titulo}</h3>
            <p className="descripcion-objetivo">{objetivo.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjetivosSection;

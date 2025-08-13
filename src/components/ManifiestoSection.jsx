import React, { useEffect, useRef, useState } from 'react';
import './ManifiestoSection.css';

const ManifiestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const manifiestoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Dejar de observar una vez que es visible
          }
        });
      },
      { threshold: 0.5 } // 50% del componente visible
    );

    if (manifiestoRef.current) {
      observer.observe(manifiestoRef.current);
    }

    return () => {
      if (manifiestoRef.current) {
        observer.unobserve(manifiestoRef.current);
      }
    };
  }, []);

  return (
    <section ref={manifiestoRef} className={`manifiesto-section ${isVisible ? 'visible' : ''}`}>
      <div className="manifiesto-contenido">
        <h2 className="manifiesto-titulo">Nuestro Manifiesto</h2>
        <div className="manifiesto-frases">
          <p className="frase-destacada">
            "Creemos en una transparencia que se diseña, no solo que se declara."
          </p>
          <p className="frase-destacada">
            "La tecnología es el puente, el diseño es el lenguaje, la ciudadanía es el motor."
          </p>
          <p className="frase-destacada">
            "Impulsamos la confianza a través de la claridad y la accesibilidad."
          </p>
        </div>
        <a href="/docs/manifiesto.pdf" download className="boton-descargar-manifiesto">
          Descargar Manifiesto Completo
        </a>
      </div>
    </section>
  );
};

export default ManifiestoSection;
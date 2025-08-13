import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import QRCodeComponent from '../components/QRCodeComponent';
import funcionariosData from '../data/funcionarios.json';
import html2canvas from 'html2canvas'; // Importa html2canvas
import jsPDF from 'jspdf';           // Importa jspdf
import './FichaFuncionario.css';

const FichaFuncionario = () => {
  const { nombreUrl } = useParams();
  const fichaRef = useRef(null); // Crea una referencia para el div de la ficha

  const funcionario = funcionariosData.find(f =>
    f.nombre.toLowerCase().replace(/\s/g, '-') === nombreUrl
  );

  if (!funcionario) {
    return (
      <div className="ficha-error">
        <h1>Funcionario no encontrado.</h1>
        <p>Parece que el perfil que buscas no existe o ha sido eliminado.</p>
      </div>
    );
  }

  const fichaUrl = window.location.origin + `/funcionarios/${nombreUrl}`;

  // Función para generar el PDF
  const handleDownloadPdf = () => {
    const input = fichaRef.current; // El div de la ficha
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' para vertical, 'mm' para milímetros
      const imgWidth = 210; // Ancho A4 en mm
      const pageHeight = 297; // Alto A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Para el caso de que la ficha sea muy larga y ocupe varias páginas
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`ficha-${nombreUrl}.pdf`);
    });
  };

  return (
    <div className="ficha-completa-container">
      {/* El `ref` asocia este div con la referencia que creamos.
        El contenido de este div será lo que se convierta a PDF. 
      */}
      <div ref={fichaRef} className="ficha-imprimible">
        <div className="perfil-header">
          <img src={funcionario.imagenUrl} alt={funcionario.nombre} className="foto-perfil-completo" />
          <div className="perfil-info-basica">
            <h1>{funcionario.nombre}</h1>
            <h3>{funcionario.cargo}</h3>
            <p className="dependencia">{funcionario.dependencia}</p>
          </div>
        </div>
        {/* ... Resto del contenido del perfil ... */}
        <div className="perfil-cuerpo">
          <div className="seccion-texto">
            <h2>Perfil profesional</h2>
            <p>{funcionario.perfilProfesional}</p>
            {/* ... */}
          </div>
          <div className="seccion-descarga">
            <div className="qr-institucional-ficha">
              <h4>QR institucional</h4>
              <p>Escanea para ver su perfil completo.</p>
              <QRCodeComponent url={fichaUrl} size={150} />
            </div>
          </div>
        </div>
      </div>
      
      {/* El botón que llama a la función de descarga */}
      <div className="acciones-ficha">
        <button className="boton-descargar-pdf" onClick={handleDownloadPdf}>
          Descargar ficha en PDF
        </button>
      </div>
    </div>
  );
};

export default FichaFuncionario;
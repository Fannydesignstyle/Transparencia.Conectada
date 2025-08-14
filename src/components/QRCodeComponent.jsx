import React, { useRef } from 'react';
import { QRCode } from 'qrcode.react';

const QRCodeComponent = ({ value }) => {
  const qrRef = useRef();

  // Función para descargar la imagen
  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'codigo_qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div ref={qrRef}>
        <QRCode
          value={value}
          size={200}                // 📏 Tamaño en píxeles
          bgColor="#ffffff"         // 🎨 Fondo blanco
          fgColor="#000000"         // 🎨 Color negro
          level="H"                 // 🔍 Corrección de errores (máxima)
          includeMargin={true}      // 📐 Margen alrededor
        />
      </div>
      <p style={{ marginTop: '10px' }}>{value}</p>
      <button
        onClick={handleDownload}
        style={{
          marginTop: '10px',
          padding: '8px 12px',
          backgroundColor: '#0078d4',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Descargar QR
      </button>
    </div>
  );
};

export default QRCodeComponent;

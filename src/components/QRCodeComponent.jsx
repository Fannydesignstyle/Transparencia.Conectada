import React from 'react';
import { QRCode } from 'qrcode.react';

const QRCodeComponent = ({ url, size = 128 }) => {
  return (
    <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid #ccc' }}>
      <QRCode value={url} size={size} level="H" includeMargin={false} />
    </div>
  );
};

export default QRCodeComponent;
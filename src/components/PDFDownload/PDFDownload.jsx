import React from 'react';
import { FaFilePdf } from 'react-icons/fa';  // Importamos el ícono de PDF de react-icons

const PDFDownload = ({ file }) => {
  return (
    <div>
      <a href={file} download>
        <FaFilePdf size={40} color="red" />
        <span> Descargar PDF</span>
      </a>
    </div>
  );
};

export default PDFDownload;
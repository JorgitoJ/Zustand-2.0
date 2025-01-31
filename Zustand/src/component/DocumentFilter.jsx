import React, { useEffect } from 'react';
import useGlobal from '../global/useGlobal';

import DocumentList from './DocumentList';
import SpacehBar from './spaceBar';

const DocumentFilter = () => {
  const { setDocuments } = useGlobal();

  useEffect(() => {
    // Simula la carga de documentos desde una API
    const docs = [
      { id: 1, name: 'Documento 1' },
      { id: 2, name: 'Documento 2' },
      { id: 3, name: 'Documento 3' },
    ];
    setDocuments(docs);
  }, [setDocuments]);

  return (
    <div>
      <SpacehBar />
      <DocumentList />
    </div>
  );
};

export default DocumentFilter;

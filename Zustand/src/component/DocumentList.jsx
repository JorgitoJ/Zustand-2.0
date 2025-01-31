import React from 'react';
import useGlobal from '../global/useGlobal';

const DocumentList = () => {
  const { documents, searchTerm } = useGlobal();

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredDocuments.map((doc) => (
        <li key={doc.id}>{doc.name}</li>
      ))}
    </ul>
  );
};

export default DocumentList;

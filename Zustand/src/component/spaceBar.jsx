import React from 'react';
import useGlobal from '../global/useGlobal';


const SpacehBar = () => {
  const { searchTerm, setSearchTerm } = useGlobal();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input 
      type="text" 
      value={searchTerm} 
      onChange={handleChange} 
      placeholder="Buscar documentos..." 
      className=''
    />
    
  );
};

export default SpacehBar;

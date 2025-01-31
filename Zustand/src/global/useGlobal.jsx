import {create} from 'zustand';


const useGlobal = create((set) => ({
  documents: [],
  setDocuments: (docs) => set({ documents: docs }),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term })
}));

export default useGlobal;






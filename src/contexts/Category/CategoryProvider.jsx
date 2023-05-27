/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CategoryContext from './CategoryContext';

function CategoriaProvedor({ children }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

    const dadosApi = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
    setCategorias(dadosApi);
  }, []);

  return (
    <CategoryContext.Provider value={categorias}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoriaProvedor;

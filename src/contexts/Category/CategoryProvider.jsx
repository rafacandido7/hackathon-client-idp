/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CategoryContext from './CategoryContext';

function CategoriaProvedor({ children }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Fazer a chamada para a API e obter os dados das categorias
    // Atualizar o estado com os dados obtidos
    // Exemplo fictício:
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

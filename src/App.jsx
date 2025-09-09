import React, { useState, useEffect } from 'react';
import ListaDeFilmes from './components/ListaDeFilmes';
import './index.css';

function App() {
  const [listaDeFilmes, setListaDeFilmes] = useState([
    { id: 1, titulo: 'O Poderoso Chefão', ano: 1972, genero: 'Crime, Drama' },
    { id: 2, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', ano: 2001, genero: 'Fantasia, Aventura' },
    { id: 3, titulo: 'Matrix', ano: 1999, genero: 'Ficção Científica, Ação' },
    { id: 4, titulo: 'A Origem', ano: 2010, genero: 'Ficção Científica, Ação' },
    { id: 5, titulo: 'Interestelar', ano: 2014, genero: 'Ficção Científica, Aventura' },
  ]);

  useEffect(() => {
    document.title = `Total de Filmes: ${listaDeFilmes.length}`;
    console.log('O título da página foi atualizado!');
  }, [listaDeFilmes]);

  const handleRemoverFilme = (idDoFilme) => {
    const novaLista = listaDeFilmes.filter(filme => filme.id !== idDoFilme);
    setListaDeFilmes(novaLista);
  };

  return (

    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Catálogo de Filmes</h1>
      <ListaDeFilmes filmes={listaDeFilmes} onRemoverFilme={handleRemoverFilme} />
    </div>
  );
}

export default App;
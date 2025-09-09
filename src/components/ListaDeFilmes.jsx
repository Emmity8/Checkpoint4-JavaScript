import React from 'react';


function ListaDeFilmes({ filmes }) {
  return (
    <div className="font-sans max-w-2xl mx-auto my-10 p-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-center text-gray-800 mb-5">Lista de Filmes</h2>
      <ul className="list-none p-0">
        {filmes.map((filme) => (
          <li key={filme.id} className="p-4 border-b border-gray-200 mb-2 last:border-b-0">
            <h3 className="text-lg font-semibold text-blue-700">{filme.titulo}</h3>
            <p className="text-gray-600">
              <span className="font-bold">Ano:</span> {filme.ano}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Gênero:</span> {filme.genero}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeFilmes;


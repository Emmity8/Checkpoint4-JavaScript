# Catálogo de Filmes

Este projeto é um catálogo de filmes simples, construído com **React** e **Tailwind CSS**. A aplicação foi desenvolvida para demonstrar e praticar conceitos fundamentais do React, como gerenciamento de estado, ciclos de vida de componentes e passagem de propriedades.

## 🎬 Funcionalidades

- **Exibição de Filmes:** A aplicação exibe uma lista de filmes, mostrando o título, ano e gênero de cada um.
- **Atualização Dinâmica do Título da Página:** O título do navegador é atualizado automaticamente para mostrar o número total de filmes na lista.

## ⚙️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para a construção da interface do usuário.
- **`useState` Hook:** Usado para gerenciar o estado da lista de filmes no componente `App`, permitindo que os dados sejam dinâmicos e reativos.
- **`useEffect` Hook:** Utilizado para executar efeitos colaterais. Neste projeto, ele é responsável por atualizar o título da página sempre que a lista de filmes é alterada.
- **Props (Propriedades):** A lista de filmes é passada do componente pai (`App`) para o componente filho (`ListaDeFilmes`) através de `props`, permitindo a comunicação entre componentes.
- **Tailwind CSS:** Um framework de CSS de "classes utilitárias" que permite estilizar a aplicação de forma rápida e direta, sem a necessidade de escrever CSS tradicional em arquivos separados.

## 📂 Estrutura do Projeto

O projeto é organizado com a seguinte estrutura de componentes:

- `App.jsx`: O componente principal que gerencia o estado (`useState`) e o efeito (`useEffect`). Ele também renderiza o componente `ListaDeFilmes`.
- `ListaDeFilmes.jsx`: Um componente funcional que recebe a lista de filmes via `props` e renderiza cada item em uma lista.

---

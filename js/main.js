let livros = [];
const endPointDaAPI ='https://guilhermeonrails.github.io/casadocodigo/livros.json';
buscarLivrosDaAPI();
const sectionLivros = document.querySelector('#livros');

async function buscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    // console.table(livros);
    let livrosComDesconto = aplicaDesconto(livros);
    exibeLivros(livrosComDesconto);
}

function exibeLivros(listaDeLivros){
  sectionLivros.innerHTML = '';
  bannerLivrosDisponiveis.innerHTML = "";
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificaDiponibilidadeDoLivro(livro);
      let disponibilidade = livro.quantidade > 0 ? 'imagem__livros' : 'imagem__livros indisponivel';
        sectionLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src= "${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)} R$</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

function aplicaDesconto(listaDeLivros){
    const desconto = 0.3;
    livrosComDesconto = listaDeLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}

// function verificaDiponibilidadeDoLivro(livro){
//     if(livro.quantidade > 0){
//       return 'imagem__livros'
//     }else{
//       return 'imagem__livros indisponivel'
//     }
// }
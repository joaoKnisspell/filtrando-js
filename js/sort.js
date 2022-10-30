const ordenarBtn = document.querySelector('#btnOrdenarPorPreco');
ordenarBtn.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibeLivros(livrosOrdenados);
}
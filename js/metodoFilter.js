const botoes = document.querySelectorAll('.btn');
const bannerLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis');

botoes.forEach(botao => botao.addEventListener('click', filtraLivros));

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoriaBtn = elementoBtn.value;
    let livrosFiltrados = categoriaBtn == 'disponivel'? filtrarLivrosPorDisponibilidade() : filtrarLivrosPorCategoria(categoriaBtn);
    exibeLivros(livrosFiltrados)
    if(categoriaBtn == 'disponivel'){
        const precoTotal = somarPrecosDosLivros(livrosFiltrados);
        exibeBannerDeLivrosDisponiveis(precoTotal);
    }
}

function filtrarLivrosPorCategoria(categoriaBtn) {
    return livros.filter(livro => livro.categoria == categoriaBtn);
}

function filtrarLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeBannerDeLivrosDisponiveis(precoTotal){
    bannerLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
      </div>`
}
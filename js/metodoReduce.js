function somarPrecosDosLivros(livros){
    return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2);
}
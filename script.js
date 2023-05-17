// divListaProduto.insertAdjacentHTML('afterbegin', '');

//class Produto
class Produto {
    constructor(nome, dataCadastro, descricao, preco){
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;  
    }

// mostrar produtos
 mostrar_produtos(){
    return this.nome + " " + this.dataCadastro + " " + this.descricao + " " + this.preco
 }
}


//Class produto destaque
class Produto_destaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque)
    super(nome, dataCadastro, descricao, preco, imagemDestaque)
}

const produto = new Produto("New Fiesta", "08/05/2023", "carro", "45000")

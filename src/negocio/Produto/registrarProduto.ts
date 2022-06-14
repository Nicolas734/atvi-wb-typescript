import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class RegistrarProduto extends Cadastro{
    private produtos: Array<Produto>
    constructor (produtos:Array<Produto>){
        super()
        this.produtos = produtos
    }
    public cadastrar(): void {
        let nomeProduto = "Pente"
        let descricaoProduto = "Pentear"
        let valorProduto = 5.00
        let idProduto = 1
        let produto = new Produto(nomeProduto,descricaoProduto,valorProduto,idProduto)

        this.produtos.push(produto)

        console.log(`\n ${nomeProduto} inserido :) \n`);
        console.log(`\n Cadastro de concluído :) \n`);

    }
}
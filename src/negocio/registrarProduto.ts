import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import Empresa from "../modelo/empresa";

export default class RegistrarProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor (produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let nomeProduto = "Pente"
        let descricaoProduto = "Pentear"
        let categoriaProduto = "Produto capilar"
        let quantidadeProduto = 100
        let valorProduto = 5.00
        let idProduto = 1
        let produto = new Produto(nomeProduto,descricaoProduto,categoriaProduto,quantidadeProduto,valorProduto,idProduto)

        this.produtos.push(produto)

        console.log(`\n ${nomeProduto} inserido :) \n`);
        console.log(`\n Cadastro de concluído :) \n`);

    }
}
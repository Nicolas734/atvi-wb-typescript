import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListagem de produtos cadastrados: \n`);
        this.produtos.forEach(produto => {
            console.log(`Nome do produto: ` + produto.nomeProduto);
            console.log(`Descrição do produto: ` + produto.descricaoProduto);
            console.log(`Valor do Produto R$: ` + produto.valorProduto);
            console.log(`Codigo identificador do Produto: ` + produto.getIdProduto + '\n');
            console.log(`--------------------------------------\n`);
        })
        console.log(`\n`);
    }
}
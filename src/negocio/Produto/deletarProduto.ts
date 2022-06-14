import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Delete from "../delete";
import ListagemProdutos from "./listagemProduto"

export default class DeleteProduto extends Delete{
    private produtos: Array <Produto>

    constructor (produtos: Array <Produto>){
        super()
        this.produtos = produtos
    }

    listarProdutos(){
        let listProd = new ListagemProdutos(this.produtos)
        listProd.listar()
        let entrada = new Entrada()
        let id = entrada.receberNumero("Digite o id do Produto: ")
        let indice = this.produtos.findIndex(i => i.getIdProduto === id)
        this.produtos.splice(indice,1)
        return
    }

    public delete(): void {
        this.listarProdutos()
        console.log("Produto removido com sucesso");        
    }
}
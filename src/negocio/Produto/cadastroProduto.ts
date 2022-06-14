import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\n Inicio do Cadastro do Produto.\n`);

        // requisição dos dados do produto

        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let descricaoProduto = this.entrada.receberTexto(`Por favor informe a descrição do produto: `)
        let categoriaProduto = this.entrada.receberTexto(`Por favor informe a categoria do produto: `)
        let valorProduto = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        let idProduto = this.entrada.receberNumero(`Por favor informe o codigo de identificação do produto: `)

        let produto = new Produto(nomeProduto,descricaoProduto,categoriaProduto,valorProduto,idProduto)
        this.produtos.push(produto)

        //
        console.log(`\n ${nomeProduto} inserido :) \n`);
        console.log(`\n Cadastro de concluído :) \n`);
        
    }
}
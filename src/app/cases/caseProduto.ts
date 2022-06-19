import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import CadastroProduto from "../../negocio/Produto/cadastroProduto";
import DeleteProduto from "../../negocio/Produto/deletarProduto";
import ListagemProdutos from "../../negocio/Produto/listagemProduto";
import UpdateProduto from "../../negocio/Produto/updateProduto";

export default class CaseProduto extends Listagem{
    private empresa: Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    caseProd( empresa:Empresa ){

        let execucao = true

        console.log(`Bem-vindo ao Menu do Produto`)

        while(execucao){

            console.log("\n - Produtos: \n");
            console.log(`[1] Cadastrar produto`);
            if(empresa.getProdutos.length)console.log(`[2] Listar todos os produtos`);
            if(empresa.getProdutos.length)console.log(`[3] Atualizar Dados do Produto.`);
            if(empresa.getProdutos.length)console.log(`[4] Remover Produto.`);
            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao){
                case 1:
                    let cadastroProd = new CadastroProduto(empresa.getProdutos)
                    cadastroProd.cadastrar()
                    break;
                case 2:
                    let listagemProd = new ListagemProdutos(empresa.getProdutos)
                    listagemProd.listar()
                    break;
                case 3:
                    let atualizarProduto = new UpdateProduto(empresa.getProdutos)
                    atualizarProduto.atualizar()
                    break;
                case 4:
                    let removerProduto = new DeleteProduto(empresa.getProdutos)
                    removerProduto.delete()
                    break;
                case 0:
                    return
                default:
                    console.log(`\nOperação não entendida :(`)

            }
        }
    }

    public listar(): void {
        this.caseProd(this.empresa)
    }
}
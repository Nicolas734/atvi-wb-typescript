import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import geraCliente from "../../scripts/geraCliente";
import geraPedidosProd from "../../scripts/geraPedido";
import geraProduto from "../../scripts/geraProduto";
import geraServico from "../../scripts/geraServico";

export default class CaseGerador extends Listagem{
    private empresa:Empresa

    constructor( empresa:Empresa ){
        super();
        this.empresa = empresa
    }

    caseGenerate( empresa:Empresa ){
        let execucao = true

        console.log(`Bem-vindo ao Menu de Autocadastro`)

        while(execucao){

            console.log(" - Autocadastro: \n");
            console.log(`[1] Autocadastro de Clientes.`);
            console.log(`[2] Autocadastro de Produtos.`);
            console.log(`[3] Autocadastro de Serviços.`);
            console.log(`[4] Autocadastro de Clientes com Produtos e Serviços.`);
            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let GeraClientes = new geraCliente(empresa.getClientes)
                    GeraClientes.cadastrar()         
                    break;
                case 2:
                    let GeraProduto = new geraProduto(empresa.getProdutos)
                    GeraProduto.cadastrar()
                    break;
                case 3:
                    let GeraServico = new geraServico(empresa.getServicos)
                    GeraServico.cadastrar()
                    break;
                case 4:
                    let GeraCliWithProd1 = new geraPedidosProd(empresa)
                    GeraCliWithProd1.cadastrar()
                    break;
                case 0:
                    return
                default:
                    break;
            }
        }
    }

    public listar(): void {
        this.caseGenerate(this.empresa)
    }
}
import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import ListagemByGenero from "../../negocio/Listas/ListByGenero";
import ListagemServMostConsum from "../../negocio/Listas/listagemServMostConsum";
import ListagemProdMostConsum from "../../negocio/Listas/listagemProdMostConsum";
import ListaMaiorConsumo from "../../negocio/Listas/ListaMaiorConsumo";
import ListaMenorConsumo from "../../negocio/Listas/ListaMenorConsumo";
import ListagemGeneroConsumo from "../../negocio/Listas/ListaGeneroConsumo";
import ListagemConsumidoPreco from "../../negocio/Listas/ListaConsumoPreco";

export default class CaseListagem extends Listagem{
    private empresa:Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    caseList(empresa:Empresa){
        let execucao = true

        console.log(`Bem-vindo ao Menu de Listagem`)

        while(execucao){

            console.log("\n - Listagens: \n");
            if(empresa.getClientes.length)console.log(`[1] Listagem de Clientes por Gênero.`);   
            if(empresa.getServicos.length)console.log(`[2] Serviços mais consumidos.`);
            if(empresa.getProdutos.length)console.log(`[3] Produtos mais consumidos.`);
            console.log(`[4] Listagem dos 10 Clientes que MAIS consumiram. `);
            console.log(`[5] Listagem dos 5 Clientes que MENOS consumiram. `);
            console.log(`[6] Listagem de Produtos e Serviços mais consumidos por gênero. `);
            console.log(`[7] Top 5 Clientes que mais consumiram (em valor). `);
            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let listarByGenero = new ListagemByGenero(empresa.getClientes)
                    listarByGenero.listar()
                    break;
                case 2:
                    let servMaisConsumido = new ListagemServMostConsum(empresa.getClientes)
                    servMaisConsumido.listar()
                    break;
                case 3:
                    let prodMaisConsumido = new ListagemProdMostConsum(empresa.getClientes)
                    prodMaisConsumido.listar()
                    break;
                case 4:
                    let qtdMaisConsumido = new ListaMaiorConsumo(empresa)
                    qtdMaisConsumido.listar()
                    break;
                case 5:
                    let qtdMenosConsumido = new ListaMenorConsumo(empresa)
                    qtdMenosConsumido.listar()
                    break;
                case 6:
                    let prodServByGenero = new ListagemGeneroConsumo(empresa.getClientes)
                    prodServByGenero.listar()
                    break;
                case 7:
                    let listPrecoMaisConsumido = new ListagemConsumidoPreco(empresa.getClientes)
                    listPrecoMaisConsumido.listar()
                    break;
                case 0:
                    return
                default:
                    break;
            }
        }
    }

    public listar(): void {
        this.caseList(this.empresa)
    }
}
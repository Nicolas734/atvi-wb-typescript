import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import ListagemPedidos from "../../negocio/Pedidos/listagemPedidos";
import RealizarPedido from "../../negocio/Pedidos/pedidosClientes";

export default class CasePedido extends Listagem{
    private empresa: Empresa

    constructor( empresa:Empresa){
        super()
        this.empresa = empresa
    }

    casePed( empresa:Empresa ){

        let execucao = true

        console.log(`Bem-vindo ao Menu do Pedido`)

        while(execucao){

            console.log("\n - Pedidos: \n");
            if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
                    console.log(`[1] Adicionar Pedido`);
            } 
            if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
                console.log(`[2] Listagem de Pedidos.`);    
            }
            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let RealizarPedidoCliente = new RealizarPedido(empresa)
                    RealizarPedidoCliente.adicionarPedido()
                    break;
                case 2:
                    let listagemPedidos = new ListagemPedidos(empresa)
                    listagemPedidos.listar()
                    break;
                case 0:
                    return
                default:
                    break;
            }
        }
    }

    public listar(): void {
        this.casePed(this.empresa)
    }
}
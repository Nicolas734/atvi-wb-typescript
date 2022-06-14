import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Listagem from "./listagem";
import ListagemClientes from "./Cliente/listagemClientes";

export default class ListagemPedidos extends Listagem{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }
    selectCliente(){
        let listarCli = new ListagemClientes(this.clientes)
        listarCli.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto(`Digite o CPF do cliente: `)
        let cliente = this.clientes.find( c => cpf === c.getCpf.getValor)
        
        return cliente
    }

    public listar(): void {
        const cliente = this.selectCliente()
        let cliProd: any = [];
        let cliServico: any = [];

        cliente?.getProdutosConsumidos.map(prod => {
            cliProd.push({
                nome: prod.nomeProduto,
                descricao: prod.descricaoProduto,
                valor: prod.getValorProduto,
                id: prod.getIdProduto
            })
        })

        cliente?.getServicosConsumidos.map(serv => {
            cliServico.push({
                nome: serv.nomeServico,
                descricao: serv.descServico,
                valor: serv.getPrecoServico,
                id: serv.getIdServico
            })
        })

        console.log(` \nProdutos Consumido do cliete: ${cliente?.nome} \n`)
        cliProd.map(prod => {
            console.log(`ID do produto: ${prod.id}`);
            console.log(`Produtos: ${prod.nome}`);
            console.log(`Preço do produto R$: ${prod.valor} \n`);
        })

        console.log(`-----------------------------------`);

        console.log(`\nServiços consumidos do(a) cliente ${cliente?.nome}\n`);        
        cliServico.map(serv =>{
            console.log(`ID do serviço:${serv.id}`);
            console.log(`Serviços:${serv.nome}`);
            console.log(`Preço do serviço R$: ${serv.valor} \n`);
        })   
    }
} 

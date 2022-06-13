import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Listagem from "./listagem";
import ListagemClientes from "./listagemClientes";

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
        console.log(cliente)
        
        return cliente
    }

    public listar(): void {
        const cliente = this.selectCliente()
        console.log(cliente?.getProdutosConsumidos[0]);
        let cliProd: any = [];
        let cliServico: any = [];

        // Map traz quantidade produtos mais consumida
        // this.clientes.map( cli =>{
        //     cli.getProdutosConsumidos.forEach(prod => {
        //         let nome = prod.nomeProduto
        //         let qtd = cliProd[prod.nomeProduto] = ( cliProd[prod.nomeProduto] || 0 ) + 1
        //         cliProd.push({
        //             nome:nome,
        //             qtd:qtd
        //         })

        //     });
        
        // })

        //Map quantidade serviços mais consumidos
        // this.clientes.map(cli =>{
        //     cli.getServicosConsumidos.forEach(serv =>{
        //         let nome = serv.nomeServico
        //         let qtd = cliServico[serv.nomeServico] = (cliServico[serv.nomeServico] || 0) + 1
        //         cliServico.push({
        //             nome:nome,
        //             qtd:qtd
        //         })
        //     })
        // })

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

        console.log(` \n Produtos Consumido do cliete: ${cliente?.nome} \n`)
        cliProd.map(prod => {
            console.log(`ID do produto: ${prod.id}`);
            console.log(`Produtos: ${prod.nome}`);
            console.log(`Preço do produto R$: ${prod.valor} \n`);
        })
        
        console.log(`-----------------------------------`);
        
        console.log(`\n Serviços consumidos do(a) cliente ${cliente?.nome}\n`);        
        cliServico.map(serv =>{
            console.log(`ID do serviço:${serv.id}`);
            console.log(`Serviços:${serv.nome}`);
            console.log(`Preço do serviço R$: ${serv.valor} \n`);
        })   
    }
} 

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
        // this.produtos = empresa.getProdutos
        // this.servicos = empresa.getServicos
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
        

        console.log(`Nome: ` + cliente?.nome);
        console.log(`ID do produto: ` + cliente?.getProdutosConsumidos[0]?.getIdProduto);
        console.log(`Produtos: ` + cliente?.getProdutosConsumidos[0]?.nomeProduto);
        console.log(`Preço do produto: ` + cliente?.getProdutosConsumidos[0]?.getValorProduto);
        
        console.log(`-----------------------------------`);
        console.log(`ID do serviço: ` + cliente?.getServicosConsumidos[0]?.getIdServico);
        console.log(`Serviços: ` + cliente?.getServicosConsumidos[0]?.nomeServico);
        console.log(`Preço do serviço: ` + cliente?.getServicosConsumidos[0]?.getPrecoServico);
        
        
        
        

        
                    
        
    }
        

} 

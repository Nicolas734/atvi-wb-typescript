import Cadastro from "./cadastro";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import ListagemServicos from "./listagemServicos";
import ListagemProdutos from "./listagemProduto";
import ListagemClientes from "./listagemClientes";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class ServicosCliente extends Cadastro{
    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
    }

    adicionarPedido(){
        console.log(`
        0 - Voltar Para o Menu Principal
        1 - Cadastrar Pedido
        `)

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        switch(opcao){
            case 0:
                return
            case 1:
                this.cadastrar()
                break
        }
    }

    selectCliente(){
        let listarCli = new ListagemClientes(this.clientes)
        listarCli.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto(`Digite o CPF do cliente: `)
        let cliente = this.clientes.find( c => cpf === c.getCpf.getValor)
        return cliente
    }

    listProd():Produto{
        let listaProdutos = new ListagemProdutos(this.produtos)
        listaProdutos.listar()
        let entrada = new Entrada()
        let produto = entrada.receberNumero(`Insira o codigo do produto: `)
        let prodEscolhido:Produto = this.produtos.find( p => produto === p.getIdProduto) as Produto
        return prodEscolhido
    }

    selectProduto(){
        let entrada = new Entrada()
        let produtos: Array<Produto> = []
        let addmore: boolean = true;
        do{
            
            let compra = entrada.receberTexto(`Deseja comprar um produto ? SIM ou NAO `)
            if( compra.toLocaleUpperCase() === 'SIM' ){
                let produto:Produto = this.listProd()

                produtos.push(produto)
            }else{
                addmore = false
            }
        }while(addmore)

        return produtos
    }

    listServico(){
        let listagemServ = new ListagemServicos(this.servicos)
        listagemServ.listar()
        let entrada = new Entrada()
        let servico = entrada.receberNumero(`Insira o codigo do servico: `)
        let servEscolhido:Servico = this.servicos.find( s => servico === s.getIdServico) as Servico
        return servEscolhido
    }

    selectServico(){
        let entrada = new Entrada()
        let servicos: Array<Servico> = []
        let addmore: boolean = true;
        do{
            let comprea = entrada.receberTexto(`Deseja comprar um produto ? SIM ou NAO `)
            if( comprea.toLocaleUpperCase() === 'SIM' ){
                let servico:Servico = this.listServico()

                servicos.push(servico)
            }
        }while(addmore)

        return servicos
    }

    public cadastrar(): void {
        const cliente = this.selectCliente()
        const produtos = this.selectProduto()
        const servicos = this.selectServico()

        cliente?.getProdutosConsumidos.push(...produtos)
        cliente?.getServicosConsumidos.push(...servicos)

    }
}
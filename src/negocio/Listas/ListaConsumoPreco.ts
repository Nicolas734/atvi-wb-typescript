import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"

export default class ListagemConsumidoPreco extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let consumoQtd: any = []

        this.clientes.forEach( cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome
            let nomeSocial = cliente.nomeSocial
            let consumoTotal : number=0
            

            // -- Produto --
            cliente.getProdutosConsumidos.forEach((produto)=>{
                consumoTotal = consumoTotal + produto.valorProduto
            })

            // -- Servico --
            cliente.getServicosConsumidos.forEach((servico)=>{
                consumoTotal = consumoTotal + servico.precoServico
            })
            
            consumoQtd.push({
                nome:nome,
                cpf:cpf,
                nomeSocial:nomeSocial,
                quantidade:consumoTotal
            })
        })

        consumoQtd = consumoQtd.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
          });
      
        consumoQtd = consumoQtd.slice(0, 5);

            console.log("Top 5 Clientes que mais consumiram (em valor): ");
            console.log("\n-------------------------------------------------------\n");

            consumoQtd.forEach(cliente => {
                console.log("CPF: " + cliente.cpf);
                console.log("Nome do cliente: " + cliente.nome);
                console.log("Nome Social: " + cliente.nomeSocial);
                console.log(`Valor Consumido: R$ ${cliente.quantidade} reais`);
                console.log(`-----------------------------------`);
            })
    }
}
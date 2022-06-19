import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListaMenorConsumo extends Listagem{
    private clientes: Array <Cliente>
    private produtos: Array <Produto>
    private servicos: Array <Servico>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes,
        this.produtos = empresa.getProdutos,
        this.servicos = empresa.getServicos
    }

    public listar(): void {
        let nome, cpf, consumoTotal, ordenacao
        let qtdConsumido: any  = [];
        var i = 1


        this.clientes.forEach( cliente => {

            nome = cliente.nome;
            cpf = cliente.getCpf.getValor

            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;


            qtdConsumido.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoTotal,
                posicao: i

            });
            i = i + 1 
        })

        ordenacao = qtdConsumido.sort((x, y) => {
            return y.quantidade - x.quantidade;
        })

        ordenacao.reverse()

        ordenacao = ordenacao.slice(0,10)

        console.log("Listagem dos 10 Clientes que MENOS consumiram produtos ou servicos em quantidade.");

        console.log(`\n--------------------------------------\n`);

        ordenacao.forEach( cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}` );
            console.log(`CPF do Cliente: ${cliente.cpf}` );
            console.log(`Quantidade de produtos e servicos Consumido pelo Cliente: ${cliente.quantidade}` );

            console.log(`\n--------------------------------------\n`);
        })

    }
}
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosProd extends Cadastro{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }

    public cadastrar(): void {
        listCliWithProd.forEach( cliente => {
            let cpf,rg;

            if(cliente.nomeSocial != undefined){

                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    cliente.nomeSocial,
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)

                cliente.produtosConsumidos.forEach( produto => {

                const NovoProduto = new Produto(
                        produto.nomeProduto,
                        produto.descricaoProduto,
                        produto.valorProduto,
                        produto.idProduto
                    );

                    NovoCliente.getProdutosConsumidos.push(NovoProduto)

                })

                this.clientes.push(NovoCliente)

            }
        })
    }
}

const listCliWithProd = [
    {
        nome: 'Natalia',
        nomeSocial: 'Lira',
        genero: 'F',
        cpf:{
            valor:'1',
            dataEmissao:new Date(31,11,1982)
        },
        rg:{
            valor:'1',
            dataEmissao:new Date(11,12,2002)
        },
        telefone: new Telefone('(65)','4967-7585'),
        produtosConsumidos: [
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Baton vermelho',
                descricaoProduto: 'Baton vermelho Ivete.',
                valorProduto: 10.00,
                idProduto: 7
            },
            {
                nomeProduto: 'Baton rosa',
                descricaoProduto: 'Baton boca rosa .',
                valorProduto: 12.00,
                idProduto: 8
            },
            {
                nomeProduto: 'Esmalte branco',
                descricaoProduto: 'Esmalte Mythique, da Chanel.',
                valorProduto: 15.00,
                idProduto: 9
            },

        ]
    },
]
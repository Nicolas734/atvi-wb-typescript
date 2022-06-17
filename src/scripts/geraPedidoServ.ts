import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosServ extends Cadastro{
    private clientes: Array<Cliente>

    constructor( empresa: Empresa ){
        super()
        this.clientes = empresa.getClientes
    }

    public cadastrar(): void {
        listCliWithServ.forEach( cliente => {
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

                cliente.servicosConsumidos.forEach( servico => {
                    const NovoServico = new Servico(
                        servico.nomeServico,
                        servico.descServico,
                        servico.precoServico,
                        servico.idServico
                    )

                    NovoCliente.getServicosConsumidos.push(NovoServico)
                })

                this.clientes.push(NovoCliente)

            }
        })
    }
}

const listCliWithServ =[
    {
        nome: 'Nicolas',
        nomeSocial: 'Lima',
        genero: 'M',
        cpf:{
            valor:'2',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'2',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(51)','5655-7998'),
        servicosConsumidos: [
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Barba',
                descServico: 'Aparar Barba',
                precoServico: 30.00,
                idServico: 2,
            },
        ]
    },
]
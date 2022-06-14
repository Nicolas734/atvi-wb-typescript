import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListServMostConsul extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cliServico: any = [];

        // Map quantidade serviços mais consumidos
        this.clientes.map(cli =>{
            cli.getServicosConsumidos.forEach(serv =>{
                let nome = serv.nomeServico
                let qtd = cliServico[serv.nomeServico] = (cliServico[serv.nomeServico] || 0) + 1
                cliServico.push({
                    nome:nome,
                    qtd:qtd
                })
            })
        })

    }
}
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

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
                    quantidade:qtd
                })
            })
        })

        let ordenado = cliServico.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
            return b.quantidade - a.quantidade }).slice(0, 1)

            console.log(`\nServiço mais consumido`);

            console.log("-------------------------------------------------------")

            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida: ${consumidos.quantidade}`);
            console.log();
        })

    }
}
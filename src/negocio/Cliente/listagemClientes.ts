import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {

        let ordenado = this.clientes.sort((a, b)=> 
        parseInt(a.getCpf.getValor) - parseInt(b.getCpf.getValor)
        )

        console.log(`\nLista de todos os clientes:\n`);

        ordenado.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome Social: ` + cliente.nomeSocial);
            console.log(`Genero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ` + cliente.getRgs[0].getValor);
            console.log(`Telefone: ` + cliente.getTelefones[0]?.getTelefone + '\n');
            console.log(`--------------------------------------\n`);
        });
        console.log(`\n`);
    }
}
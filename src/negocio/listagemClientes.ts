import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n Lista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome Social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ` + cliente.getRgs[0].getValor);
            console.log(`Telefone: ` + cliente.getTelefones[0].getTelefone);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
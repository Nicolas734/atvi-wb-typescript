import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Delete from "../delete";
import ListagemClientes from "./listagemClientes";

export default class DeleteCliente extends Delete {
    private clientes: Array <Cliente>

    constructor( clientes:Array <Cliente> ){
        super()
        this.clientes = clientes
    }

    listarClientes(){
        let listCli = new ListagemClientes(this.clientes)
        listCli.listar()
        let entrada = new Entrada()
        let cpf = entrada.receberTexto("Digite o CPF do cliente: ")
        let indice = this.clientes.findIndex( i => i.getCpf.getValor === cpf)
        this.clientes.splice(indice, 1)
        return

    }

    public delete(): void {
        this.listarClientes()
        console.log('Cliente Removido com Sucesso')
    }
}
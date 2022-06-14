import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "../delete";
import ListagemServicos from "./listagemServicos"

export default class DeletarServico extends Delete{
    private servicos: Array <Servico>

    constructor (servicos: Array <Servico>){
        super()
        this.servicos = servicos
    }

    listarServicos(){
        let listServ = new ListagemServicos(this.servicos)
        listServ.listar()
        let entrada = new Entrada()
        let id = entrada.receberNumero("Digite o id do Serviço: ")
        let indice = this.servicos.findIndex(i=> i.getIdServico === id)
        this.servicos.splice(indice,1)
        return
    }

    public delete(): void{
        this.listarServicos()
        console.log("Serviço removido com sucesso");        
    }
}
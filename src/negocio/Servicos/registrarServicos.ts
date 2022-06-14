import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";
import Empresa from "../../modelo/empresa";
import { log } from "console";

export default class RegistrarServicos extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada

    constructor( servicos: Array<Servico> ){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let nomeServico = 'Cabelo'
        let descServico = 'Cortes de Cabelo'
        let precoServico = 50.00
        let idServico = 1
        
        let servico = new Servico(nomeServico,descServico,precoServico,idServico)
        this.servicos.push(servico)

        console.log(`\n ${nomeServico} inserido =) \n`);
        console.log(`\n Cadastro de Serviços concluído ! =)`);        
        
    }
}
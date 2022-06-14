import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInicio do Cadastro de Servico. \n`);

        // requisição dos dados do servico

        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let descServico = this.entrada.receberTexto(`Por favor informe a descrição do servico: `)
        let precoServico = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        let idServico = this.entrada.receberNumero(`Por favor informe o codigo de identificação do serviço: `)

        let servico = new Servico(nomeServico, descServico, precoServico, idServico)
        this.servicos.push(servico)

    }
}
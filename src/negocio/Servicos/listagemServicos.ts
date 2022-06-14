import Listagem from "../listagem";
import Servico from "../../modelo/servico";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem de servicos cadastrados: \n`);
        this.servicos.forEach( servico => {
            console.log(`Nome do serviço: ` + servico.nomeServico);
            console.log(`Descrição do serviço: ` + servico.descServico);
            console.log(`Preço do serviço: ` + servico.precoServico);
            console.log(`Código identificador do serviço: ` +servico.getIdServico + '\n');
            console.log(`-------------------------------------- \n`);
        })
        console.log(`\n`);
    }
}
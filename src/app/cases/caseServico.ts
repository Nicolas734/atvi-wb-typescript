import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import CadastroServico from "../../negocio/Servicos/cadastroServicos";
import ListagemServicos from "../../negocio/Servicos/listagemServicos";
import UpdateServico from "../../negocio/Servicos/updateServico";
import DeleteServico from "../../negocio/Servicos/deletarServicos";

export default class caseServico extends Listagem{
    private empresa:Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    caseServ( empresa:Empresa ){

        let execucao = true

        console.log(`Bem-vindo ao Menu do Serviço`)

        while(execucao){

            console.log("\n - Serviços: \n");

            console.log(`[1] Cadastrar serviço`);

            if(empresa.getServicos.length)console.log(`[2] Listar todos os serviços`);

            if(empresa.getServicos.length)console.log(`[3] Atualizar Dados do Serviço.`);

            if(empresa.getServicos.length)console.log(`[4] Remover Serviço.`);

            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 3:
                    let atualizarServico = new UpdateServico(empresa.getServicos)
                    atualizarServico.atualizar()
                    break;
                case 4:
                    let removerServico = new DeleteServico(empresa.getServicos)
                    removerServico.delete()
                    break;
                case 0:
                    return
                default:
                    console.log(`\nOperação não entendida :(`)

            }
        }
    }

    public listar(): void {
        this.caseServ(this.empresa)
    }
}
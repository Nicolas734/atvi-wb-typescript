import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";
import ListagemServicos from "./listagemServicos";

export default class UpdateServico extends Update{
    private servicos: Array <Servico>
    private entrada: Entrada

    constructor(servicos: Array <Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("Atualização de cadastro do Serviço");

        const listServ = new ListagemServicos( this.servicos )
        listServ.listar()

        let idServ = this.entrada.receberNumero("Digite o Id do Serviço: ")

        this.servicos.forEach( servicos => {

            if (idServ === servicos.getIdServico){

                let verifica = true
                while (verifica) {

                    console.log("\n Selecione o que você deseja atualizar: \n");
                    console.log(`--------------------------------------\n`);                    
                    console.log('1 - Nome do Serviço');
                    console.log('2 - Descrição do Serviço');
                    console.log('3 - Preço do Serviço');
                    console.log('0 - Sair para o Menu \n');
                    console.log(`--------------------------------------\n`);

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('Escolha o que deseja atualizar: ')
                    console.log('\n');

                    switch (opcao) {
                        case 1:
                            let nomeServico = entrada.receberTexto("Digite o novo nome do serviço: ")
                            servicos.nomeServico = nomeServico
                            break;

                        case 2:
                            let descServico = entrada.receberTexto("Digite a nova descrição do serviço: ")
                            servicos.descServico = descServico
                            break;

                        case 3:
                            let precoServico = entrada.receberNumero("Digite o novo preço do serviço R$: ")
                            servicos.precoServico = precoServico
                            break;

                            case 0:
                                verifica = false
                                console.log('Retornando...');
                                break;

                            default:
                                console.log(`Por favor digite uma opção existente !`)
                                break;
                    }
                }
            }
        })

        console.log("Informações do Serviço atualizados com Sucesso ! :D");

    }
}

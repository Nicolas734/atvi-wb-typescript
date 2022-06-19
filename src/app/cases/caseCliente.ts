import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import CadastroCliente from "../../negocio/Cliente/cadastroCliente";
import DeleteCliente from "../../negocio/Cliente/deleteCliente";
import ListagemClientes from "../../negocio/Cliente/listagemClientes";
import UpdateCliente from "../../negocio/Cliente/updateCliente";
import Listagem from "../../negocio/listagem";

export default class CaseCliente extends Listagem{
    private empresa: Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    caseCli( empresa:Empresa ){

        let execucao = true

        console.log(`Bem-vindo ao Menu do Cliente`)

        while(execucao){

            console.log(" - Clientes: \n");
            console.log(`[1] Cadastrar cliente`);
            if(empresa.getClientes.length)console.log(`[2] Listar todos os clientes`);
            if(empresa.getClientes.length)console.log(`[3] Atualizar Dados do Cliente.`);
            if(empresa.getClientes.length)console.log(`[4] Remover Cliente.`);
            console.log();
            console.log(`[0] Voltar Para o Menu Principal\n`);


            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao){
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                case 3:
                    let atualizarCliente = new UpdateCliente(empresa.getClientes)
                    atualizarCliente.atualizar()
                    break;
                case 4:
                    let removerCliente = new DeleteCliente(empresa.getClientes)
                    removerCliente.delete()
                    break;
                case 0:
                    return
                default:
                    console.log(`\nOperação não entendida :(`)

            }
        }
    }

    public listar(): void {
        this.caseCli(this.empresa)
    }
}
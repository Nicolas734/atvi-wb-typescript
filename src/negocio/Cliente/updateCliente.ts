import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Telefone from "../../modelo/telefone"
import Update from "../update"
import ListagemClientes from "./listagemClientes"


export default class UpdateCliente extends Update{
    private clientes: Array <Cliente>
    private entrada: Entrada
    constructor(clientes: Array <Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("Atualização de cadastro do Cliente");

        const listClientes = new ListagemClientes(this.clientes)
        listClientes.listar()

        let cpf = this.entrada.receberTexto("Digite o CPF do cliente: ")

        this.clientes.forEach( cliente => {
            if(cpf === cliente.getCpf.getValor){
                let verifica = true
                while (verifica) {
                    console.log("\n Selecione o que você deseja atualizar: \n");
                    console.log(`--------------------------------------\n`);                    
                    console.log('[1] Nome');
                    console.log('[2] Nome Social');
                    console.log('[3] Gênero');
                    console.log('[4] Telefone');
                    console.log('[0] Sair para o Menu \n');
                    console.log(`--------------------------------------\n`);  
                    

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('Escolha o que deseja atualizar: ')
                    console.log('\n');

                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto('Digite o novo nome do cliente: ')
                            cliente.nome = nome
                            break;

                        case 2:
                            let nomeSocial = this.entrada.receberTexto('Digite o novo nome social do cliente: ')
                            cliente.nomeSocial = nomeSocial
                            break;

                        case 3:
                            let genero = this.entrada.receberTexto('Gênero (M: Masculino |F:Feminino |N:Não informado): ')
                            cliente.genero = genero
                            break;

                        case 4:
                            const telefones = cliente.getTelefones;
                            for (let i: number = 0; i < cliente.getTelefones.length; i++){

                            let numeroTelefone = this.entrada.receberTexto(`Antigo Numero ${telefones[i].getTelefone}, Insira o novo numero numero, no padrão (xx) xxxxx-xxxx `)

                            // Formatação do telefone
                            let separacaoNumero = numeroTelefone.split(')')
                            let dadosNumero = separacaoNumero[0] + ")-" + separacaoNumero[1]
                            let numeroEddd = dadosNumero.split("-")

                            let ddd = new String(numeroEddd[0].valueOf()).valueOf()
                            let numero = new String(numeroEddd[1].valueOf()).valueOf()

                            cliente.removerTelefone(telefones[i])
                            cliente.getTelefones.push(new Telefone(ddd, numero))}
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

        console.log("Informações do Cliente atualizadas com Sucesso ! :D");

    }
}
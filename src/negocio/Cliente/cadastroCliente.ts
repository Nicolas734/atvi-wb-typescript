import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente.\n`);

        // Requisição dos dados do Cliente
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe seu genero: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf, no padrão xxx.xxx.xxx-xx: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let rgValor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let rgDataEmissao = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let numeroTelefone = this.entrada.receberTexto(`Por favor informe o DDD e o numero de telefone, no padrão (xx) xxxxx-xxxx `)

        //
        let partesData = data.split('/')
        let partesDataRg = rgDataEmissao.split('/')

        let separacaoNumero = numeroTelefone.split(')')
        let dadosNumero = separacaoNumero[0] + ")-" + separacaoNumero[1]

        let numeroEddd = dadosNumero.split("-")

        //
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()

        let ddd = new String(numeroEddd[0].valueOf()).valueOf()
        let numero = new String(numeroEddd[1].valueOf()).valueOf()

        //
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new CPF(valor, dataEmissao);

        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        let rgs = new RG(rgValor, dataEmissaoRg);

        let telefone = new Telefone(ddd, numero)
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        //
        cliente.getRgs.push(rgs)
        cliente.getTelefones.push(telefone)
        this.clientes.push(cliente)

        //
        console.log(`\n Cadastro concluído :) \n`);
    }
}
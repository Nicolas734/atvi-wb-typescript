import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";


export default class RegistrarCliente extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes =clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        //
        
        let dataCpf = new String ("11/11/1998")
        let partesData = dataCpf.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let data = new Date (ano, mes, dia)
        
        let Cpf = new CPF ("41455521459", data)


        //    
        let dataEmissao = new String ("12/05/1992")
        let partesDataRg = dataEmissao.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let dataRG = new Date (anoRg, mesRg, diaRg);

        let Rgs = new RG ("4855525478", dataRG)


        //
        let numeroTelefone = new Telefone ("(12)","981544755")

        let cliente = new Cliente ("Natalia", "Lira", Cpf, "Menine")
        cliente.getRgs.push(Rgs)
        cliente.getTelefones.push(numeroTelefone)
        this.clientes.push(cliente)

        //
        console.log("Cadastro concluido");
        
        
    }


}


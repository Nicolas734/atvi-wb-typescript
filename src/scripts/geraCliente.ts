import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro";
import Produto from "../modelo/produto";

export default class geraCliente extends Cadastro{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public cadastrar(): void {
        Clientlist.forEach(Clientlist=>{
            let nome,nomeSocial,genero,cpf,rg, telefone,produtoConsumido;

            if(Clientlist.nomeSocial != undefined){
                nome = Clientlist.nome;
                nomeSocial = Clientlist.nomeSocial;
                genero = Clientlist.genero;
                rg = new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao);
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao);
                telefone = Clientlist.telefone;

                const NovoCliente = new Cliente(
                    nome,
                    nomeSocial,
                    cpf,       
                    genero
                );
                

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(telefone)
                this.clientes.push(NovoCliente)

            } else{
                nome = Clientlist.nome;            
                genero = Clientlist.genero;
                rg.push(new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao))
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao)
                telefone.push(Clientlist.telefone);
    
                const NovoCliente = new Cliente(
                    nome,
                    'não informado',
                    genero,
                    cpf
                );
                this.clientes.push(NovoCliente)        
            }
        })
    }

}

const Clientlist = [
    {
        nome: 'Natalia',
        nomeSocial: 'Lira',
        genero: 'F',
        cpf:{
            valor:'1',
            dataEmissao:new Date(31,11,1982)
        },
        rg:{
            valor:'1',
            dataEmissao:new Date(11,12,2002)
        },
        telefone: new Telefone('(65)','4967-7585'),
    },
    {
        nome: 'Nicolas',
        nomeSocial: 'Lima',
        genero: 'M',
        cpf:{
            valor:'2',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'2',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(51)','5655-7998')
    },
    {
        nome: 'Raniel',
        nomeSocial: 'Daniel',
        genero: 'M',
        cpf:{
            valor:'3',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'3',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(86)','2345-3512')
    },
    {
        nome: 'Rafael',
        nomeSocial: 'Matusalém',
        genero: 'N',
        cpf:{
            valor:'4',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'4',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(21)','7539-5763')
    },
    {
        nome: 'Rodrigo',
        nomeSocial: 'PacerMan',
        genero: 'M',
        cpf:{
            valor:'5',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'5',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(19)','6955-2775')
    },
    {
        nome: 'Gerson',
        nomeSocial: 'Geferson',
        genero: 'M',
        cpf:{
            valor:'6',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'6',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(81)','3486-8726')
    },
    {
        nome: 'Pablo Emilio Escobar',
        nomeSocial: 'Gerson Penha',
        genero: 'N',
        cpf:{
            valor:'7',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'7',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(85)','2430-8840')
    },
    {
        nome: 'Gerson Amazonha',
        nomeSocial: 'Homem do Norte',
        genero: 'N',
        cpf:{
            valor:'8',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'8',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(91)','6889-4571')
    },
    {
        nome: 'Claudio',
        nomeSocial: 'Titã Colossal',
        genero: 'N',
        cpf:{
            valor:'9',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'9',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(21)','6416-3479')
    },
    {
        nome: 'Lima',
        nomeSocial: 'Cachaça',
        genero: 'M',
        cpf:{
            valor:'10',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'10',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(51)','7547-3844')
    },
    {
        nome: 'Waldemar',
        nomeSocial: 'Best Friend of Pablo Emilio Escobar',
        genero: 'M',
        cpf:{
            valor:'11',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'11',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(43)','4743-4022')
    },
    {
        nome: 'Rikio Bombado',
        nomeSocial: 'A * M ^ MS',
        genero: 'M',
        cpf:{
            valor:'12',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'12',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(21)','2615-6910')
    },
    {
        nome: 'Jean',
        nomeSocial: 'Tutor do Colosso',
        genero: 'M',
        cpf:{
            valor:'13',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'13',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(19)','8498-9874')
    },
    {
        nome: 'Lira',
        nomeSocial: 'Doida a Bessa',
        genero: 'M',
        cpf:{
            valor:'14',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'14',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(85)','6662-7130')
    },
    {
        nome: 'Natalia 2',
        nomeSocial: 'Personalidade 2 da Natalia',
        genero: 'N',
        cpf:{
            valor:'15',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'15',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(27)','4734-3119')
    },
    {
        nome: 'Felipe Gabriel',
        nomeSocial: 'Indiano do Agreste',
        genero: 'M',
        cpf:{
            valor:'16',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'16',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(93)','6475-4040')
    },
    {
        nome: 'Massanori',
        nomeSocial: 'Progenitor do Python',
        genero: 'M',
        cpf:{
            valor:'17',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'17',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(17)','3946-2549')
    },
    {
        nome: 'Sabha',
        nomeSocial: 'QUE SABHA O QUE !',
        genero: 'M',
        cpf:{
            valor:'18',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'18',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(61)','9049-3678')
    },
    {
        nome: 'Black Sabha',
        nomeSocial: 'Sabha',
        genero: 'M',
        cpf:{
            valor:'19',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'19',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(11)','3266-3129')
    },
    {
        nome: 'Rodrigo Ribeiro',
        nomeSocial: 'Lordinho',
        genero: 'M',
        cpf:{
            valor:'20',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'20',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(42)','9283-4802')
    },
    {
        nome: 'Waldomir',
        nomeSocial: 'Lorde dos Banheiros',
        genero: 'M',
        cpf:{
            valor:'21',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'21',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(62)','2675-9033')
    },
    {
        nome: 'Walmir',
        nomeSocial: 'Lorde das Montanhas',
        genero: 'M',
        cpf:{
            valor:'22',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'22',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Darth Wanderson da Silva',
        nomeSocial: 'DV',
        genero: 'N',
        cpf:{
            valor:'23',
            dataEmissao:new Date(21,12,1000)
        },
        rg:{
            valor:'23',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(83)','6612-5777')
    },
    {
        nome: 'Princesa Wanderleia',
        nomeSocial: '',
        genero: 'N',
        cpf:{
            valor:'24',
            dataEmissao:new Date(30,12,2000)
        },
        rg:{
            valor:'24',
            dataEmissao:new Date(13,12,1122)
        },
        telefone: new Telefone('(88)','689-5637')
    },
    {
        nome: 'Prof Gerson da Fatec',
        nomeSocial: 'Torcedor Fanático do Paysandu',
        genero: 'M',
        cpf:{
            valor:'25',
            dataEmissao:new Date(31,12,2005)
        },
        rg:{
            valor:'25',
            dataEmissao:new Date(15,22,1122)
        },
        telefone: new Telefone('(83)','1485-5637')
    },
    {
        nome: 'Juliana',
        nomeSocial: 'Oracle',
        genero: 'F',
        cpf:{
            valor:'26',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'26',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(13)','6872-5637')
    },
    {
        nome: 'Harrisson',
        nomeSocial: 'Não é Alisson',
        genero: 'N',
        cpf:{
            valor:'27',
            dataEmissao:new Date(21,12,2120)
        },
        rg:{
            valor:'27',
            dataEmissao:new Date(14,22,1922)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Gustavo',
        nomeSocial: 'Fantasma da Fatec',
        genero: 'N',
        cpf:{
            valor:'28',
            dataEmissao:new Date(15,12,2000)
        },
        rg:{
            valor:'28',
            dataEmissao:new Date(13,22,2022)
        },
        telefone: new Telefone('(12)','4545-5637')
    },
    {
        nome: 'Goku',
        nomeSocial: 'Sayajin da Terra',
        genero: 'N',
        cpf:{
            valor:'29',
            dataEmissao:new Date(21,12,1550)
        },
        rg:{
            valor:'29',
            dataEmissao:new Date(23,12,1122)
        },
        telefone: new Telefone('(83)','6612-5637')
    },
    {
        nome: 'Shaka',
        nomeSocial: 'Cavaleiro de Virgem',
        genero: 'N',
        cpf:{
            valor:'30',
            dataEmissao:new Date(21,12,2000)
        },
        rg:{
            valor:'30',
            dataEmissao:new Date(13,22,1122)
        },
        telefone: new Telefone('(73)','8953-5637')
    },
]
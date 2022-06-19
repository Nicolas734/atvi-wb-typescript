import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosProd extends Cadastro{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }

    public cadastrar(): void {
        listCliWithProdAndServ.forEach( cliente => {
            let cpf,rg;

            if(cliente.nomeSocial != undefined){

                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    cliente.nomeSocial,
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)

            

                // --- Serviço ---

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)

            // ------------------------- Se não informar o Nome Social... --------------------------------------------------
            }else{
                
                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    'não informado',
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)
                

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)
            }
        })
    }
}

const listCliWithProdAndServ = [

    // --- Cliente 1 ---
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
        produtosConsumidos: [
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Baton vermelho',
                descricaoProduto: 'Baton vermelho Ivete.',
                valorProduto: 10.00,
                idProduto: 7
            },
            {
                nomeProduto: 'Baton rosa',
                descricaoProduto: 'Baton boca rosa .',
                valorProduto: 12.00,
                idProduto: 8
            },
            {
                nomeProduto: 'Esmalte branco',
                descricaoProduto: 'Esmalte Mythique, da Chanel.',
                valorProduto: 15.00,
                idProduto: 9
            },
        ],
        servicosConsumidos:[
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
        ]
    },

     // --- Cliente 2 ---
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
        telefone: new Telefone('(51)','5655-7998'),
        servicosConsumidos: [
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Corte de Cabelo para calvos',
                descServico: 'corte especializado para pessoas calvas',
                precoServico: 50.00 ,
                idServico: 1 ,
            },
            {
                nomeServico: 'Barba',
                descServico: 'Aparar Barba',
                precoServico: 30.00,
                idServico: 2,
            },
        ]
    },

     // --- Cliente 3 ---
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
        telefone: new Telefone('(86)','2345-3512'),
        produtosConsumidos: [
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },
            {
                nomeProduto: 'Shampoo',
                descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
                valorProduto: 70.00,
                idProduto: 6
            },            
        ],
    },

     // --- Cliente 4 ---

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
        telefone: new Telefone('(21)','7539-5763'),
        produtosConsumidos:[
            {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },
        {
            nomeProduto: 'Baton vermelho',
            descricaoProduto: 'Baton vermelho Ivete.',
            valorProduto: 10.00,
            idProduto: 7
        },
        {
            nomeProduto: 'kit salonline',
            descricaoProduto: 'Shampo, condicionador e mascara nutri',
            valorProduto: 220.50,
            idProduto: 12
        },
        {
            nomeProduto: 'queratina novex',
            descricaoProduto: 'Tratamento reconstrutor Novex ',
            valorProduto: 25.50,
            idProduto: 13
        },
        {
            nomeProduto: 'Máscara de cílios',
            descricaoProduto: 'Máscara de cílios preta lavável',
            valorProduto: 39.90,
            idProduto: 20
        },
        ],

        servicosConsumidos:[
            {
                nomeServico: 'Barba',
                descServico: 'Aparar Barba',
                precoServico: 30.00,
                idServico: 2,
            },
            {
                nomeServico: 'Sombrancelha',
                descServico: 'Remoção e desenho de sombrancelha',
                precoServico: 25.00,
                idServico: 3,
            },
            {
                nomeServico: 'Hidratação',
                descServico: 'Hidratação produnda',
                precoServico: 150.00,
                idServico: 9,
            },
        ]        
    },

// --- Cliente 5 ---
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
    telefone: new Telefone('(19)','6955-2775'),

    produtosConsumidos:[
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
    ]
},

// -- Cliente 6 --
{
    nome: 'Geisy',
    nomeSocial: '',
    genero: 'F',
    cpf:{
        valor:'6',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'6',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(81)','3486-8726'),

    produtosConsumidos:[
        {
            nomeProduto: 'Baton vermelho',
            descricaoProduto: 'Baton vermelho Ivete.',
            valorProduto: 10.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Baton rosa',
            descricaoProduto: 'Baton boca rosa .',
            valorProduto: 12.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
        {
            nomeProduto: 'kit salonline',
            descricaoProduto: 'Shampo, condicionador e mascara nutri',
            valorProduto: 220.50,
            idProduto: 12
        },
        {
            nomeProduto: 'queratina novex',
            descricaoProduto: 'Tratamento reconstrutor Novex ',
            valorProduto: 25.50,
            idProduto: 13
        },
        ],

        servicosConsumidos:[
            {
                nomeServico: 'Corte de cabelo Feminino',
                descServico: 'Especializado para mulheres',
                precoServico: 100.00,
                idServico: 6,
            },
            {
                nomeServico: 'Corte de cabelo masculino',
                descServico: 'Especializado para masculino',
                precoServico: 50.00,
                idServico: 7,
            },
            {
                nomeServico: 'Matizar cabelo',
                descServico: 'Matização de cabelo',
                precoServico: 100.00,
                idServico: 8,
            },
            {
                nomeServico: 'Hidratação',
                descServico: 'Hidratação produnda',
                precoServico: 150.00,
                idServico: 9,
            },
            {
                nomeServico: 'Corte bordado',
                descServico: 'Corte para tirar pontas duplas',
                precoServico: 150.00,
                idServico: 10,
            },
            {
                nomeServico: 'Selagem capilar',
                descServico: 'tratamento para cabelos fracos',
                precoServico: 150.00,
                idServico: 11,
            },
            {
                nomeServico: 'Unhas de gel',
                descServico: 'Alogamento de unhas',
                precoServico: 140.00,
                idServico: 12,
            },
            {
                nomeServico: 'manicure',
                descServico: 'pintar as unhas das mãos',
                precoServico: 50.00,
                idServico: 13,
            },
            {
                nomeServico: 'pedicure',
                descServico: 'pintar as unhas dos pés',
                precoServico: 50.00,
                idServico: 14,
            },
            {
                nomeServico: 'manicure e pedicure',
                descServico: 'pintar as unhas das mãos e dos pés',
                precoServico: 90.00,
                idServico: 15,
            },
        ]
},

// -- Cliente 7 --
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
    telefone: new Telefone('(85)','2430-8840'),

    produtosConsumidos:[
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
    ]
},

// -- Cliente 8 --
{
    nome: 'Dilma',
    nomeSocial: 'A mamãe do Brasil',
    genero: 'F',
    cpf:{
        valor:'8',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'8',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(91)','6889-4571'),

    produtosConsumidos:[
        {
            nomeProduto: 'Mascara',
            descricaoProduto: 'Bomba de nutrição.',
            valorProduto: 18.00,
            idProduto: 5
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Baton vermelho',
            descricaoProduto: 'Baton vermelho Ivete.',
            valorProduto: 10.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Baton rosa',
            descricaoProduto: 'Baton boca rosa .',
            valorProduto: 12.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
        {
            nomeProduto: 'kit salonline',
            descricaoProduto: 'Shampo, condicionador e mascara nutri',
            valorProduto: 220.50,
            idProduto: 12
        },
        {
            nomeProduto: 'queratina novex',
            descricaoProduto: 'Tratamento reconstrutor Novex ',
            valorProduto: 25.50,
            idProduto: 13
        },
        {
            nomeProduto: 'Condicionador embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 20.50,
            idProduto: 14
        },
        {
            nomeProduto: 'shampoo embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 22.50,
            idProduto: 15
        },
        {
            nomeProduto: 'esponja para maquiagem',
            descricaoProduto: 'Indicado para aplicar corretivos e bases liquidas',
            valorProduto: 13.50,
            idProduto: 16
        },
        {
            nomeProduto: 'Unhas postiças',
            descricaoProduto: 'Unhas postiças coloridas',
            valorProduto: 24.90,
            idProduto: 17
        },
        {
            nomeProduto: 'alicate de unha',
            descricaoProduto: 'alicate de unha',
            valorProduto: 22.90,
            idProduto: 18
        },
        {
            nomeProduto: 'Unhas postiças francesinha',
            descricaoProduto: 'Unhas postiças francesinhas vermelha',
            valorProduto: 22.90,
            idProduto: 19
        },
        {
            nomeProduto: 'Máscara de cílios',
            descricaoProduto: 'Máscara de cílios preta lavável',
            valorProduto: 39.90,
            idProduto: 20
        },
    ]
},

// -- Cliente 9 --
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
    telefone: new Telefone('(21)','6416-3479'),

    produtosConsumidos:[
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
    ]
},

// -- Cliente 10 --
{
    nome: 'Lima',
    nomeSocial: 'Catiassa',
    genero: 'M',
    cpf:{
        valor:'10',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'10',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(51)','7547-3844'),

    produtosConsumidos:[
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },    
    ],

    servicosConsumidos:[
        {
            nomeServico: 'manicure e pedicure',
            descServico: 'pintar as unhas das mãos e dos pés',
            precoServico: 90.00,
            idServico: 15,
        },
    ]
},

// -- Cliente 11 --
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
    telefone: new Telefone('(43)','4743-4022'),

    produtosConsumidos:[
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
    ]
},

// -- Cliente 12 --
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
    telefone: new Telefone('(21)','2615-6910'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Condicionador embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 20.50,
            idProduto: 14
        },
        {
            nomeProduto: 'shampoo embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 22.50,
            idProduto: 15
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
    ]
},

// -- Cliente 13 --
{
    nome: 'Jeana',
    nomeSocial: 'Tutora do Colosso',
    genero: 'F',
    cpf:{
        valor:'13',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'13',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(19)','8498-9874'),

    produtosConsumidos:[
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
    ]
},

// -- Cliente 14 --
{
    nome: 'Lira',
    nomeSocial: 'Doida a Bessa',
    genero: 'F',
    cpf:{
        valor:'14',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'14',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(85)','6662-7130'),

    produtosConsumidos:[
        {
            nomeProduto: 'kit salonline',
            descricaoProduto: 'Shampo, condicionador e mascara nutri',
            valorProduto: 220.50,
            idProduto: 12
        },
        {
            nomeProduto: 'queratina novex',
            descricaoProduto: 'Tratamento reconstrutor Novex ',
            valorProduto: 25.50,
            idProduto: 13
        },
        {
            nomeProduto: 'Condicionador embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 20.50,
            idProduto: 14
        },
        {
            nomeProduto: 'shampoo embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 22.50,
            idProduto: 15
        },
        {
            nomeProduto: 'esponja para maquiagem',
            descricaoProduto: 'Indicado para aplicar corretivos e bases liquidas',
            valorProduto: 13.50,
            idProduto: 16
        },
        {
            nomeProduto: 'Unhas postiças',
            descricaoProduto: 'Unhas postiças coloridas',
            valorProduto: 24.90,
            idProduto: 17
        },
        {
            nomeProduto: 'alicate de unha',
            descricaoProduto: 'alicate de unha',
            valorProduto: 22.90,
            idProduto: 18
        },
        {
            nomeProduto: 'Unhas postiças francesinha',
            descricaoProduto: 'Unhas postiças francesinhas vermelha',
            valorProduto: 22.90,
            idProduto: 19
        },
        {
            nomeProduto: 'Máscara de cílios',
            descricaoProduto: 'Máscara de cílios preta lavável',
            valorProduto: 39.90,
            idProduto: 20
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Escova Progressiva',
            descServico: 'Escova os cabelos ',
            precoServico: 150.00,
            idServico: 4,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
        {
            nomeServico: 'Corte de cabelo Feminino',
            descServico: 'Especializado para mulheres',
            precoServico: 100.00,
            idServico: 6,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeServico: 'Matizar cabelo',
            descServico: 'Matização de cabelo',
            precoServico: 100.00,
            idServico: 8,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
    ]
},

// -- Cliente 15 --
{
    nome: 'Natalie',
    nomeSocial: 'Personalidade 2 da Natalia',
    genero: 'F',
    cpf:{
        valor:'15',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'15',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(27)','4734-3119'),

    servicosConsumidos:[
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
        {
            nomeServico: 'manicure',
            descServico: 'pintar as unhas das mãos',
            precoServico: 50.00,
            idServico: 13,
        },
        {
            nomeServico: 'pedicure',
            descServico: 'pintar as unhas dos pés',
            precoServico: 50.00,
            idServico: 14,
        },
    ]
},

// -- Cliente 16 --
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
    telefone: new Telefone('(93)','6475-4040'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
    ]
},

// -- Cliente 17 --
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
    telefone: new Telefone('(17)','3946-2549'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
    ]
},

// -- Cliente 18 --
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
    telefone: new Telefone('(61)','9049-3678'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
    ]
},

// -- Cliente 19 -- 
{
    nome: 'Black Sabha',
    nomeSocial: 'Sabha',
    genero: 'N',
    cpf:{
        valor:'19',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'19',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(11)','3266-3129'),

    produtosConsumidos:[
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },    
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },    
    ]
},

// -- Cliente 20 -- 
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
    telefone: new Telefone('(42)','9283-4802'),

    servicosConsumidos:[
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },

    ]
},

// -- Cliente 21 -- 
{
    nome: 'Waldomira',
    nomeSocial: 'Senhora dos Banheiros',
    genero: 'F',
    cpf:{
        valor:'21',
        dataEmissao:new Date(21,12,2000)
    },
    rg:{
        valor:'21',
        dataEmissao:new Date(13,22,1122)
    },
    telefone: new Telefone('(62)','2675-9033'),

    produtosConsumidos:[
        {
            nomeProduto: 'Mascara',
            descricaoProduto: 'Bomba de nutrição.',
            valorProduto: 18.00,
            idProduto: 5
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Baton vermelho',
            descricaoProduto: 'Baton vermelho Ivete.',
            valorProduto: 10.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Baton rosa',
            descricaoProduto: 'Baton boca rosa .',
            valorProduto: 12.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
    ]
},

// -- CLiente 22 --
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
    telefone: new Telefone('(83)','6612-5637'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
    ]
},

// -- Cliente 23 -- 
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
    telefone: new Telefone('(83)','6612-5777'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Pente',
            descricaoProduto: 'Pente.',
            valorProduto: 50.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Peruca para calvos',
            descricaoProduto: 'Peruca para esconder sua calvice.',
            valorProduto: 100.00,
            idProduto: 3
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
    ]

},

// -- Cliente 24 --
{
    nome: 'Princesa Wanderleia',
    nomeSocial: '',
    genero: 'F',
    cpf:{
        valor:'24',
        dataEmissao:new Date(30,12,2000)
    },
    rg:{
        valor:'24',
        dataEmissao:new Date(13,12,1122)
    },
    telefone: new Telefone('(88)','689-5637'),

    servicosConsumidos:[
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Escova Progressiva',
            descServico: 'Escova os cabelos ',
            precoServico: 150.00,
            idServico: 4,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
        {
            nomeServico: 'Corte de cabelo Feminino',
            descServico: 'Especializado para mulheres',
            precoServico: 100.00,
            idServico: 6,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeServico: 'Matizar cabelo',
            descServico: 'Matização de cabelo',
            precoServico: 100.00,
            idServico: 8,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
        {
            nomeServico: 'manicure',
            descServico: 'pintar as unhas das mãos',
            precoServico: 50.00,
            idServico: 13,
        },
        {
            nomeServico: 'pedicure',
            descServico: 'pintar as unhas dos pés',
            precoServico: 50.00,
            idServico: 14,
        },
        {
            nomeServico: 'manicure e pedicure',
            descServico: 'pintar as unhas das mãos e dos pés',
            precoServico: 90.00,
            idServico: 15,
        },
        {
            nomeServico: 'Massagem modeladora',
            descServico: 'Massagem modeladora',
            precoServico: 100.00,
            idServico: 16,
        },
    ]
},

// -- Cliente 25 --
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
    telefone: new Telefone('(83)','1485-5637'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },
        {
            nomeProduto: 'Tinta de Cabelo para Calvos',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 4
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
    ]
},

// -- Cliente 26 --
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
    telefone: new Telefone('(13)','6872-5637'),

    produtosConsumidos:[
        {
            nomeProduto: 'Mascara',
            descricaoProduto: 'Bomba de nutrição.',
            valorProduto: 18.00,
            idProduto: 5
        },
        {
            nomeProduto: 'Shampoo',
            descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
            valorProduto: 70.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Baton vermelho',
            descricaoProduto: 'Baton vermelho Ivete.',
            valorProduto: 10.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Baton rosa',
            descricaoProduto: 'Baton boca rosa .',
            valorProduto: 12.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Esmalte branco',
            descricaoProduto: 'Esmalte Mythique, da Chanel.',
            valorProduto: 15.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Esmalte azul',
            descricaoProduto: 'Partiu balada, da Vult.',
            valorProduto: 13.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Esmalte amarelo',
            descricaoProduto: 'Chihuahua, da Mavala',
            valorProduto: 13.50,
            idProduto: 11
        },
        {
            nomeProduto: 'kit salonline',
            descricaoProduto: 'Shampo, condicionador e mascara nutri',
            valorProduto: 220.50,
            idProduto: 12
        },
        {
            nomeProduto: 'queratina novex',
            descricaoProduto: 'Tratamento reconstrutor Novex ',
            valorProduto: 25.50,
            idProduto: 13
        },
        {
            nomeProduto: 'Condicionador embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 20.50,
            idProduto: 14
        },
        {
            nomeProduto: 'shampoo embelleze',
            descricaoProduto: 'Condicionador para reconstrução',
            valorProduto: 22.50,
            idProduto: 15
        },
        {
            nomeProduto: 'esponja para maquiagem',
            descricaoProduto: 'Indicado para aplicar corretivos e bases liquidas',
            valorProduto: 13.50,
            idProduto: 16
        },
        {
            nomeProduto: 'Unhas postiças',
            descricaoProduto: 'Unhas postiças coloridas',
            valorProduto: 24.90,
            idProduto: 17
        },
        {
            nomeProduto: 'alicate de unha',
            descricaoProduto: 'alicate de unha',
            valorProduto: 22.90,
            idProduto: 18
        },
        {
            nomeProduto: 'Unhas postiças francesinha',
            descricaoProduto: 'Unhas postiças francesinhas vermelha',
            valorProduto: 22.90,
            idProduto: 19
        },
        {
            nomeProduto: 'Máscara de cílios',
            descricaoProduto: 'Máscara de cílios preta lavável',
            valorProduto: 39.90,
            idProduto: 20
        },
    ]
},

// -- Cliente 27 --
{
    nome: 'Diana',
    nomeSocial: 'Mulher-Maravilha',
    genero: 'F',
    cpf:{
        valor:'27',
        dataEmissao:new Date(21,12,2120)
    },
    rg:{
        valor:'27',
        dataEmissao:new Date(14,22,1922)
    },
    telefone: new Telefone('(83)','6612-5637'),

    servicosConsumidos:[
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Escova Progressiva',
            descServico: 'Escova os cabelos ',
            precoServico: 150.00,
            idServico: 4,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
        {
            nomeServico: 'Corte de cabelo Feminino',
            descServico: 'Especializado para mulheres',
            precoServico: 100.00,
            idServico: 6,
        },
        {
            nomeServico: 'Matizar cabelo',
            descServico: 'Matização de cabelo',
            precoServico: 100.00,
            idServico: 8,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
        {
            nomeServico: 'manicure',
            descServico: 'pintar as unhas das mãos',
            precoServico: 50.00,
            idServico: 13,
        },
        {
            nomeServico: 'Massagem modeladora',
            descServico: 'Massagem modeladora',
            precoServico: 100.00,
            idServico: 16,
        },
        {
            nomeServico: 'Massagem relaxante',
            descServico: 'Massagem relaxante',
            precoServico: 100.00,
            idServico: 17,
        },
        {
            nomeServico: 'Massagem redutora',
            descServico: 'Massagem redutora',
            precoServico: 100.00,
            idServico: 18,
        },
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
        {
            nomeServico: 'Escova modeladora',
            descServico: 'Escovagem modeladora',
            precoServico: 90.00,
            idServico: 20,
        },
    ]
    
},

// -- Cliente 28 --
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

// -- Cliente 29 --
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
    telefone: new Telefone('(83)','6612-5637'),

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Escova Progressiva',
            descServico: 'Escova os cabelos ',
            precoServico: 150.00,
            idServico: 4,
        },
        {
            nomeServico: 'Pintar o Cabelo',
            descServico: 'Pintar os Cabelos para esconder a velhice',
            precoServico: 70.00,
            idServico: 5,
        },
    ]
},

// -- Cliente 30 --
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
    telefone: new Telefone('(73)','8953-5637'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
        {
            nomeServico: 'Corte de Cabelo para calvos',
            descServico: 'corte especializado para pessoas calvas',
            precoServico: 50.00 ,
            idServico: 1 ,
        },
        {
            nomeServico: 'Barba',
            descServico: 'Aparar Barba',
            precoServico: 30.00,
            idServico: 2,
        },
    ]
},
]
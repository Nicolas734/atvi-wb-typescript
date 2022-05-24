import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServicos";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServicos";
import ServicosCliente from "../negocio/servicosCliente";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar produto`);
    console.log(`3 - Cadastrar serviço`);
    
    if(empresa.getClientes.length){
    console.log(`4 - Listar todos os clientes`);
    }
    if(empresa.getProdutos.length){
        console.log(`5 - Listar todos os produtos`);
    }

    if(empresa.getServicos.length){
        console.log(`6 - Listar todos os serviços`);
    }

    if(empresa.getClientes.length){
        console.log(`7 - Adicionar Pedido`);
    }

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let cadastroProd = new CadastroProduto(empresa.getProdutos)
            cadastroProd.cadastrar()
            break;

        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;

        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 5:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;

        case 6:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;

        case 7:
            let ServicosClientes = new ServicosCliente(empresa)
            ServicosClientes.adicionarPedido()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;

        default:
            console.log(`Operação não entendida :(`)
    }
}
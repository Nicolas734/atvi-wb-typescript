import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import CadastroProduto from "../negocio/Produto/cadastroProduto";
import CadastroServico from "../negocio/Servicos/cadastroServicos";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import ListagemPedidos from "../negocio/Pedidos/listagemPedidos";
import ListagemProdutos from "../negocio/Produto/listagemProduto";
import ListagemServicos from "../negocio/Servicos/listagemServicos";
import ServicosCliente from "../negocio/Pedidos/pedidosClientes";
import RegistrarCliente from "../negocio/Cliente/registrarCliente";
import RegistrarProduto from "../negocio/Produto/registrarProduto";
import RegistrarServico from "../negocio/Servicos/registrarServicos"
import ListagemServMostConsum from "../negocio/MaisConsumidos/listagemServMostConsum"
import ListagemProdMostConsum from "../negocio/MaisConsumidos/listagemProdMostConsum"
import UpdateCliente from "../negocio/Cliente/updateCliente"
import DeleteCliente from "../negocio/Cliente/deleteCliente";
import DeleteProduto from "../negocio/Produto/deletarProduto";
import DeleteServico from "../negocio/Servicos/deletarServicos"
import UpdateProduto from "../negocio/Produto/updateProduto";
import UpdateServico from "../negocio/Servicos/updateServico";
import ListagemByGenero from "../negocio/ListByGenero/ListByGenero";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções: \n`);
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

    if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
        console.log(`7 - Adicionar Pedido`);
    }

    console.log(`8 - Listagem de Pedidos.`);

    if(empresa.getClientes.length < 1 )console.log(`9 - Autocadastro de Clientes.`);
    if(empresa.getProdutos.length < 1 )console.log(`10 - Autocadastro de Produtos.`);
    if(empresa.getServicos.length < 1 )console.log(`11 - Autocadastro de Serviços.`);

    console.log(`12 - Serviços mais consumidos.`);
    console.log(`13 - Produtos mais consumidos.`);
    console.log(`14 - Atualizar Dados do Cliente.`);
    console.log(`15 - Atualizar Dados do Produto.`);
    console.log(`16 - Atualizar Dados do Serviço.`);
    console.log(`17 - Remover Cliente.`);
    console.log(`18 - Remover Produto.`);
    console.log(`19 - Remover Serviço.`);
    console.log(`20 - Listagem de Clientes por Gênero.`);
    console.log();
    console.log(`0 - Sair \n`);

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

        case 8:
            let listagemPedidos = new ListagemPedidos(empresa)
            listagemPedidos.listar()
            break;

        case 9:
            let RegistrarClientes = new RegistrarCliente(empresa.getClientes)
            RegistrarClientes.cadastrar()
            break;

        case 10:
            let RegistrarProdutos = new RegistrarProduto(empresa.getProdutos)
            RegistrarProdutos.cadastrar()
            break;

        case 11:
            let RegistrarServicos = new RegistrarServico(empresa.getServicos)
            RegistrarServicos.cadastrar()
            break;

        case 12:
            let servMaisConsumido = new ListagemServMostConsum(empresa.getClientes)
            servMaisConsumido.listar()
            break;

        case 13:
            let prodMaisConsumido = new ListagemProdMostConsum(empresa.getClientes)
            prodMaisConsumido.listar()
            break;

        case 14:
            let atualizarCliente = new UpdateCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;

        case 15:
            let atualizarProduto = new UpdateProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;

        case 16:
            let atualizarServico = new UpdateServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;

        case 17:
            let removerCliente = new DeleteCliente(empresa.getClientes)
            removerCliente.delete()
            break;

        case 18:
            let removerProduto = new DeleteProduto(empresa.getProdutos)
            removerProduto.delete()
            break;

        case 19:
            let removerServico = new DeleteServico(empresa.getServicos)
            removerServico.delete()
            break;


        case 20:
            let listarByGenero = new ListagemByGenero(empresa.getClientes)
            listarByGenero.listar()
            break;

        case 0:
            execucao = false
            console.log(`\nAté mais \n`)
            break;

        default:
            console.log(`\nOperação não entendida :(`)
    }
}
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import CadastroProduto from "../negocio/Produto/cadastroProduto";
import CadastroServico from "../negocio/Servicos/cadastroServicos";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import ListagemPedidos from "../negocio/Pedidos/listagemPedidos";
import ListagemProdutos from "../negocio/Produto/listagemProduto";
import ListagemServicos from "../negocio/Servicos/listagemServicos";
import RealizarPedido from "../negocio/Pedidos/pedidosClientes";
import ListagemServMostConsum from "../negocio/Listas/listagemServMostConsum"
import ListagemProdMostConsum from "../negocio/Listas/listagemProdMostConsum"
import UpdateCliente from "../negocio/Cliente/updateCliente"
import DeleteCliente from "../negocio/Cliente/deleteCliente";
import DeleteProduto from "../negocio/Produto/deletarProduto";
import DeleteServico from "../negocio/Servicos/deletarServicos"
import UpdateProduto from "../negocio/Produto/updateProduto";
import UpdateServico from "../negocio/Servicos/updateServico";
import ListagemByGenero from "../negocio/Listas/ListByGenero";
import geraCliente from "../scripts/geraCliente";
import geraProduto from "../scripts/geraProduto";
import geraServico from "../scripts/geraServico";
import geraPedidosProd from "../scripts/geraPedido";
import ListaMaiorConsumo from "../negocio/Listas/ListaMaiorConsumo";
import ListaMenorConsumo from "../negocio/Listas/ListaMenorConsumo";
import ListagemGeneroConsumo from "../negocio/Listas/ListaGeneroConsumo"
import ListagemConsumidoPreco from "../negocio/Listas/ListaConsumoPreco";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções: \n`);


    //  --- Clientes ---
    console.log(" - Clientes: \n");    
    console.log(`[1] Cadastrar cliente`);

    if(empresa.getClientes.length)console.log(`[2] Listar todos os clientes`);

    if(empresa.getClientes.length)console.log(`[3] Atualizar Dados do Cliente.`);

    if(empresa.getClientes.length)console.log(`[4] Remover Cliente.`);

    if(empresa.getClientes.length || empresa.getServicos.length || empresa.getProdutos.length){
        console.log('\n' + `------------------------------------------------------------------` + '\n' );
    }

    //  --- Produtos ---
    console.log("\n - Produtos: \n");
    console.log(`[5] Cadastrar produto`);
    if(empresa.getProdutos.length)console.log(`[6] Listar todos os produtos`);
    
    if(empresa.getProdutos.length)console.log(`[7] Atualizar Dados do Produto.`);

    if(empresa.getProdutos.length)console.log(`[8] Remover Produto.`);
    
    if(empresa.getServicos.length || empresa.getProdutos.length){
        console.log('\n' + `------------------------------------------------------------------` + '\n' );
    }

    //  --- Serviços ---
    console.log("\n - Serviços: \n");
    console.log(`[9] Cadastrar serviço`);

    if(empresa.getServicos.length)console.log(`[10] Listar todos os serviços`);

    if(empresa.getServicos.length)console.log(`[11] Atualizar Dados do Serviço.`);

    if(empresa.getServicos.length)console.log(`[12] Remover Serviço.`);
        
    if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
        console.log('\n' + `------------------------------------------------------------------` + '\n' );
    }
 
    //  --- Pedidos ---
    console.log("\n - Pedidos: \n");
    if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
            console.log(`[13] Adicionar Pedido`);
    } 
    if(empresa.getClientes.length && empresa.getProdutos.length && empresa.getServicos.length){
        console.log(`[14] Listagem de Pedidos.`);    
    }   
      
    if(empresa.getClientes.length || empresa.getServicos.length || empresa.getProdutos.length){
        console.log('\n' + `------------------------------------------------------------------` + '\n' );
    }

    //  --- Listagens ---
    if(empresa.getClientes.length || empresa.getServicos.length || empresa.getProdutos.length){
        console.log("\n - Listagens: \n");
    }
    if(empresa.getClientes.length)console.log(`[15] Listagem de Clientes por Gênero.`);   
    if(empresa.getServicos.length)console.log(`[16] Serviços mais consumidos.`);
    if(empresa.getProdutos.length)console.log(`[17] Produtos mais consumidos.`);

    if(empresa.getClientes.length < 1 || empresa.getServicos.length < 1 || empresa.getProdutos.length < 1){
        console.log('\n' + `------------------------------------------------------------------` + '\n' );
    }

    // --- Outras Opções --- 
    if(empresa.getClientes.length < 1)console.log(`[18] Autocadastro de Clientes.`);
    if(empresa.getProdutos.length < 1)console.log(`[19] Autocadastro de Produtos.`);
    if(empresa.getServicos.length < 1)console.log(`[20] Autocadastro de Serviços.`);
        console.log(`[21] Autocadastro de Clientes com Produtos e Serviços.`);


    // --- Listagem3por qtd de consumo ---

    console.log(`[22] Listagem dos 10 Clientes que MAIS consumiram. `);
    console.log(`[23] Listagem dos 5 Clientes que MENOS consumiram. `);
    console.log(`[24] Listagem de Produtos e Serviços mais consumidos por gênero. `);
    console.log(`[25] Top 5 Clientes que mais consumiram (em valor). `);
    
    // --- Sair ---
    console.log();
    console.log(`[0] Sair \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        // ----- Cliente -----
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

        // ----- Produtos -----        
        case 5:
            let cadastroProd = new CadastroProduto(empresa.getProdutos)
            cadastroProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProduto = new UpdateProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;
        case 8:
            let removerProduto = new DeleteProduto(empresa.getProdutos)
            removerProduto.delete()
            break;

        // ----- Serviços -----   
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let atualizarServico = new UpdateServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 12:
            let removerServico = new DeleteServico(empresa.getServicos)
            removerServico.delete()
            break;

        // ----- Pedidos -----         
        case 13:
            let RealizarPedidoCliente = new RealizarPedido(empresa)
            RealizarPedidoCliente.adicionarPedido()
            break;
        case 14:
            let listagemPedidos = new ListagemPedidos(empresa)
            listagemPedidos.listar()
            break;

        // ----- Listagens ----- 
        case 15:
            let listarByGenero = new ListagemByGenero(empresa.getClientes)
            listarByGenero.listar()
            break;
        case 16:
            let servMaisConsumido = new ListagemServMostConsum(empresa.getClientes)
            servMaisConsumido.listar()
            break;
        case 17:
            let prodMaisConsumido = new ListagemProdMostConsum(empresa.getClientes)
            prodMaisConsumido.listar()
            break;

        // ----- Outras Opções ----- 
        case 18:
            let GeraClientes = new geraCliente(empresa.getClientes)
            GeraClientes.cadastrar()            
            break;
        case 19:
            let GeraProduto = new geraProduto(empresa.getProdutos)
            GeraProduto.cadastrar()
            break;
        case 20:
            let GeraServico = new geraServico(empresa.getServicos)
            GeraServico.cadastrar()
            break;
        case 21:
            let GeraCliWithProd = new geraPedidosProd(empresa)
            GeraCliWithProd.cadastrar()
            break;

        case 22:
            let qtdMaisConsumido = new ListaMaiorConsumo(empresa)
            qtdMaisConsumido.listar()
            break;

        case 23:
            let qtdMenosConsumido = new ListaMenorConsumo(empresa)
            qtdMenosConsumido.listar()
            break;

        case 24:
            let prodServByGenero = new ListagemGeneroConsumo(empresa.getClientes)
            prodServByGenero.listar()
            break;

        case 25:
            let listPrecoMaisConsumido = new ListagemConsumidoPreco(empresa.getClientes)
            listPrecoMaisConsumido.listar()
            break;

        case 0:
            execucao = false
            console.log(`\nAté mais \n`)
            break;

        default:
            console.log(`\nOperação não entendida :(`)
    }
}
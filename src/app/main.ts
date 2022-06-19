import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CaseCliente from "./cases/caseCliente";
import CaseProduto from "./cases/caseProduto";
import caseServico from "./cases/caseServico";
import CasePedido from "./cases/casePedido";
import CaseListagem from "./cases/caseListagem";
import CaseGerador from "./cases/caseGenerate";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções: \n`);

    // --- Menu ---
    console.log(`[1] Cliente. `);
    console.log(`[2] Produto. `);
    console.log(`[3] Serviço. `);
    console.log(`[4] Pedido. `);
    console.log(`[5] Listagem. `);
    console.log(`[6] Autocadastro. `);

    // --- Sair ---
    console.log();
    console.log(`[0] Sair \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        case 1:
            let testeCli = new CaseCliente(empresa)
            testeCli.listar()
            break;

        case 2:
            let testeProd = new CaseProduto(empresa)
            testeProd.listar()
            break;

        case 3:
            let testeServ = new caseServico(empresa)
            testeServ.listar()
            break;

        case 4:
            let testePedido = new CasePedido(empresa)
            testePedido.listar()
            break;

        case 5:
            let testeListagem = new CaseListagem(empresa)
            testeListagem.listar()
            break;

        case 6:
            let testeAutocadastro = new CaseGerador(empresa)
            testeAutocadastro.listar()
            break;

        case 0:
            execucao = false
            console.log(`\nAté mais \n`)
            break;

        default:
            console.log(`\nOperação não entendida :(`)
    }
}
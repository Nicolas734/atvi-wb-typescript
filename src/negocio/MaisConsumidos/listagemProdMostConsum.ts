import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListProdMostConsum extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cliProd: any = [];

        // Map traz quantidade produtos mais consumidos
        this.clientes.map( cli =>{
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.nomeProduto
                let qtd = cliProd[prod.nomeProduto] = ( cliProd[prod.nomeProduto] || 0 ) + 1
                cliProd.push({
                    nome: nome,
                    quantidade: qtd
                })
            });
        })
        console.log(cliProd);
        

    }
}
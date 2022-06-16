import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosProd extends Cadastro{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>){
        super()
        this.clientes = clientes
        this.produtos = produtos
    }

    public cadastrar(): void {
        
    }
}
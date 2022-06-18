import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"


export default class ListagemGeneroConsumo extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let filtrado: any;
        let feminino: any;
        let nInformado: any;


        // -- Filtro por Gênero --

        filtrado = this.clientes.reduce(( acc, cur ) => {

            cur.getProdutosConsumidos.forEach( p => {
                if(acc[cur.genero][`produto_${p.getIdProduto}`]){
                    acc[cur.genero][`produto_${p.getIdProduto}`].qtd++
                }else{
                    acc[cur.genero][`produto_${p.getIdProduto}`] = { qtd:1, nome:p.getNomeProduto }
                }
            })
            cur.getServicosConsumidos.forEach( s => {
                if(acc[cur.genero][`servico_${s.getIdServico}`]){
                    acc[cur.genero][`servico_${s.getIdServico}`].qtd++
                }else{
                    acc[cur.genero][`servico_${s.getIdServico}`] = {qtd:1, nome:s.getNomeServico}
                }
            })
            return acc

        },{M:{}, F:{}, N:{}})

        let ordenadoM = Object.keys(filtrado.M).map(k=>{
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.M[k].qtd, nome:filtrado.M[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        console.log(ordenadoM);

        let ordenadoF = Object.keys(filtrado.F).map( k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.F[k].qtd, nome:filtrado.F[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        console.log(ordenadoF);
        
        let ordenadoN = Object.keys(filtrado.N).map(k=>{
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.N[k].qtd, nome:filtrado.N[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        console.log(ordenadoN);

        console.log(`Listagem dos serviços ou produtos mais consumidos por gênero`);

        console.log(`\n--------------------------------------\n`);

        console.log(`Masculino`);

        ordenadoM.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.id}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`Feminino`);

        ordenadoF.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.id}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`Não Informado`);

        ordenadoN.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.id}\n`);
        } )
    }

    
}
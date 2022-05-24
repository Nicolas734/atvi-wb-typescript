export default class Produto {
    public nomeProduto: string
    public descricaoProduto: string
    public categoriaProduto: string
    public quantidadeProduto: number
    public valorProduto: number
    private idProduto: number
    constructor( nomeProduto:string, descricaoProduto: string, categoriaProduto: string,
                quantidadeProduto: number, valorProduto: number, idProduto: number){
        this.nomeProduto = nomeProduto
        this.descricaoProduto = descricaoProduto
        this.categoriaProduto = categoriaProduto
        this.quantidadeProduto = quantidadeProduto
        this.valorProduto = valorProduto
        this.idProduto = idProduto
    }
    public get getNomeProduto(): string{
        return this.nomeProduto
    }
    public get getDescProduto(): string{
        return this.descricaoProduto
    }
    public get getCategoriaProduto(): string{
        return this.categoriaProduto
    }
    public get getquantidadeProduto(): number{
        return this.quantidadeProduto
    }
    public get getValorProduto(): number{
        return this.valorProduto
    }
    public get getIdProduto(): number{
        return this.idProduto
    }

}
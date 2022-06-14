export default class Produto {
    public nomeProduto: string
    public descricaoProduto: string
    public valorProduto: number
    private idProduto: number
    constructor( nomeProduto:string, descricaoProduto: string,
                valorProduto: number, idProduto: number){
        this.nomeProduto = nomeProduto
        this.descricaoProduto = descricaoProduto
        this.valorProduto = valorProduto
        this.idProduto = idProduto
    }
    public get getNomeProduto(): string{
        return this.nomeProduto
    }
    public get getDescProduto(): string{
        return this.descricaoProduto
    }
    public get getValorProduto(): number{
        return this.valorProduto
    }
    public get getIdProduto(): number{
        return this.idProduto
    }

}
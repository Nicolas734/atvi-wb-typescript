export default class Produto {
    public nomeProduto: string
    public descricaoProduto: string
    public categoriaProduto: string
    public valorProduto: number
    private idProduto: number
    constructor( nomeProduto:string, descricaoProduto: string, categoriaProduto: string,
                valorProduto: number, idProduto: number){
        this.nomeProduto = nomeProduto
        this.descricaoProduto = descricaoProduto
        this.categoriaProduto = categoriaProduto
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
    public get getValorProduto(): number{
        return this.valorProduto
    }
    public get getIdProduto(): number{
        return this.idProduto
    }

}
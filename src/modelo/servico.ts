export default class Servico {
    public nomeServico!: string
    public descServico!: string
    public precoServico: number
    private idServico: number
    constructor( nomeServico: string, descServico: string, precoServico: number, idServico: number){
        this.nomeServico = nomeServico
        this.descServico =  descServico
        this.precoServico = precoServico
        this.idServico = idServico
    }
    public get getNomeServico(): string{
        return this.nomeServico
    }
    public get getDescServico(): string{
        return this.descServico
    }
    public get getPrecoServico(): number{
        return this.precoServico
    }
    public get getIdServico(): number{
        return this.idServico
    }
}
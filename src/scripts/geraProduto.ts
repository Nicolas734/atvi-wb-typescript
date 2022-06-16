import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class geraProduto extends Cadastro{
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public cadastrar(): void {
        Prodlist.forEach(Prodlist=>{
            let nomeProduto,descricaoProduto,valorProduto,idProduto

            nomeProduto = Prodlist.nomeProduto;
            descricaoProduto = Prodlist.descricaoProduto;
            valorProduto = Prodlist.valorProduto;
            idProduto = Prodlist.idProduto;

            const NovoProduto = new Produto(
                nomeProduto,
                descricaoProduto,
                valorProduto,
                idProduto
            );
            this.produtos.push(NovoProduto)

        })
    }

}

const Prodlist = [

    // Coleção Calvice
    {
        nomeProduto: 'Creme Para Calvos',
        descricaoProduto: 'Produto exclusivo para calvos.',
        valorProduto: 36.00,
        idProduto: 1
    },
    {
        nomeProduto: 'Pente para calvos',
        descricaoProduto: 'Pente exclusivo para calvos com calvice tipo O estagio final.',
        valorProduto: 50.00,
        idProduto: 2
    },
    {
        nomeProduto: 'Peruca para calvos',
        descricaoProduto: 'Peruca para esconder sua calvice.',
        valorProduto: 100.00,
        idProduto: 3
    },
    {
        nomeProduto: 'Tinta de Cabelo para Calvos',
        descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
        valorProduto: 70.00,
        idProduto: 4
    },    
    {
        nomeProduto: 'Mascara',
        descricaoProduto: 'Bomba de nutrição.',
        valorProduto: 18.00,
        idProduto: 5
    },
    {
        nomeProduto: 'Shampoo',
        descricaoProduto: 'Tinta para fingir que a calvice não lhe afeta.',
        valorProduto: 70.00,
        idProduto: 6
    },
    {
        nomeProduto: 'Baton vermelho',
        descricaoProduto: 'Baton vermelho Ivete.',
        valorProduto: 10.00,
        idProduto: 7
    },
    {
        nomeProduto: 'Baton rosa',
        descricaoProduto: 'Baton boca rosa .',
        valorProduto: 12.00,
        idProduto: 8
    },
    {
        nomeProduto: 'Esmalte branco',
        descricaoProduto: 'Esmalte Mythique, da Chanel.',
        valorProduto: 15.00,
        idProduto: 9
    },
    {
        nomeProduto: 'Esmalte azul',
        descricaoProduto: 'Partiu balada, da Vult.',
        valorProduto: 13.00,
        idProduto: 10
    },
    {
        nomeProduto: 'Esmalte amarelo',
        descricaoProduto: 'Chihuahua, da Mavala',
        valorProduto: 13.50,
        idProduto: 11
    },
    {
        nomeProduto: 'kit salonline',
        descricaoProduto: 'Shampo, condicionador e mascara nutri',
        valorProduto: 220.50,
        idProduto: 12
    },
    {
        nomeProduto: 'queratina novex',
        descricaoProduto: 'Tratamento reconstrutor Novex ',
        valorProduto: 25.50,
        idProduto: 13
    },
    {
        nomeProduto: 'Condicionador embelleze',
        descricaoProduto: 'Condicionador para reconstrução',
        valorProduto: 20.50,
        idProduto: 14
    },
    {
        nomeProduto: 'shampoo embelleze',
        descricaoProduto: 'Condicionador para reconstrução',
        valorProduto: 22.50,
        idProduto: 15
    },
    {
        nomeProduto: 'esponja para maquiagem',
        descricaoProduto: 'Indicado para aplicar corretivos e bases liquidas',
        valorProduto: 13.50,
        idProduto: 16
    },
    {
        nomeProduto: 'Unhas postiças',
        descricaoProduto: 'Unhas postiças coloridas',
        valorProduto: 24.90,
        idProduto: 17
    },
    {
        nomeProduto: 'Unhas postiças',
        descricaoProduto: 'Unhas postiças coloridas',
        valorProduto: 22.90,
        idProduto: 18
    },
    {
        nomeProduto: 'Unhas postiças francesinha',
        descricaoProduto: 'Unhas postiças francesinhas vermelha',
        valorProduto: 22.90,
        idProduto: 19
    },
    {
        nomeProduto: 'Máscara de cílios',
        descricaoProduto: 'Máscara de cílios preta lavável',
        valorProduto: 39.90,
        idProduto: 20
    },



]
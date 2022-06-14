import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemByGenero extends Listagem{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let masculino: Cliente[] = [];
        let feminino: Cliente[] = [];
        let naoInformado: Cliente[] = []

        this.clientes.forEach( clientes => {
            if( clientes.genero === 'M'){
                masculino.push(clientes)
            }
            if( clientes.genero === 'F'){
                feminino.push(clientes)
            }
            if( clientes.genero === 'N' ){
                naoInformado.push(clientes)
            }
        })       

        console.log('Listagem dos Clientes por Gênero');
        console.log(`------------------`);

        //Masculino
        console.log('\n');
        console.log('Gênero Masculino:');
        console.log('\n');
        masculino.forEach(masculino=>{
            console.log(`Nome:` + masculino.nome);
            console.log(`Nome Social:` + masculino.nomeSocial);
            console.log(`Cpf:` + masculino.getCpf.getValor);
            console.log(`Telefone: ` + masculino.getTelefones[0].getTelefone + '\n');

            console.log(`------------------`)
            console.log('\n');
        })

        //Feminino
        console.log('Gênero Feminino:');
        console.log('\n');
        feminino.forEach(feminino=>{
            console.log(`Nome:` +feminino.nome);
            console.log(`Nome Social:` +feminino.nomeSocial);
            console.log(`Cpf:` +feminino.getCpf.getValor);
            console.log(`Telefone: ` + feminino.getTelefones[0].getTelefone + '\n');

            console.log(`------------------`)
            console.log('\n');
        })

        //Não Informado
        console.log('Gênero Não Informado:');
        console.log('\n');
        naoInformado.forEach(naoInformado=>{
            console.log(`Nome:` +naoInformado.nome);
            console.log(`Nome Social:` +naoInformado.nomeSocial);
            console.log(`Cpf:` +naoInformado.getCpf.getValor);
            console.log(`Telefone: ` + naoInformado.getTelefones[0].getTelefone + '\n');

            console.log(`------------------`)
        })
        
    }
}
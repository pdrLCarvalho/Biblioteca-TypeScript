import { Publicacao } from "../mediumclasses/Publicacao"
export class Livro extends Publicacao{
    id:number = 0
    isbn:number = 0
    localizacao: string = 'Estante 1'


    constructor(id:number,anoDePublicacao:number, titulo:string, numeroDePaginas:number, isbn:number){
        super(anoDePublicacao, titulo, numeroDePaginas)
        this.isbn = isbn
        this.id = id
    }

    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = "Estante 1"
        }else{
            this.localizacao = "Emprestado"
        }
    }

}
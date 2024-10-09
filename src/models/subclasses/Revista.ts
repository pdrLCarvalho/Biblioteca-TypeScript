import { Publicacao } from "../mediumclasses/Publicacao"

export class Revista extends Publicacao {
    id:number = 0
    editora: string = ""
    localizacao: string = 'Estante 2'

    constructor(id:number,anoDePublicacao:number, titulo:string, numeroDePaginas:number, editora:string){
        super(anoDePublicacao, titulo, numeroDePaginas)
        this.editora = editora
        this.id = id
    }

    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = "Estante 2"
        }else{
            this.localizacao = "Emprestado"
        }
    }
}
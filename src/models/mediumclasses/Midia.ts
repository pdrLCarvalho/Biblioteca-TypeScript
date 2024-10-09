import { ItemAcervo } from "../abstractclass/AItemAcervo"
import { Localizavel } from "../interfaces/ILocalizavel"

export class Midia extends ItemAcervo implements Localizavel{
    duracao:string = ''
    localizacao: string = ""
    constructor(anoPublicacao:number, titulo: string, duracao:string){
        super(anoPublicacao, titulo)
        this.duracao = duracao
    }

    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = ""
        }else{
            this.localizacao = "Emprestado"
        }
    }

    obterLocalizacao():string{
        return this.localizacao
    }
}
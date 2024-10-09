import { ItemAcervo } from "../abstractclass/AItemAcervo"
import { Localizavel } from "../interfaces/ILocalizavel"
export class Publicacao extends ItemAcervo implements Localizavel{

    numeroDePaginas:number = 0
    localizacao: string = ""

    constructor(anoPublicacao:number, titulo: string, numeroDePaginas:number){
        super(anoPublicacao, titulo)
        this.numeroDePaginas = numeroDePaginas
    }

    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = ""
        }else{
            this.localizacao = ("indisponivel")
        }
    }

    obterLocalizacao():string{
        return this.localizacao
    }
    
    
}


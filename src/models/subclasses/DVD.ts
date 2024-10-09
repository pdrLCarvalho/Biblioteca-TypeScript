import { Midia } from "../mediumclasses/Midia"

export class DVD extends Midia{
    id:number = 0
    formato:string = ''
    localizacao:string = 'Prateleira 2'

    constructor(id:number,anoPublicacao: number, titulo: string, duracao:string,formato:string){
        super(anoPublicacao, titulo, duracao)
        this.formato = formato
        this.id = id
    }
    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = "Prateleira 2"
        }else{
            this.localizacao = "Emprestado"
        }
    }
}
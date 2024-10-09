import { Midia } from "../mediumclasses/Midia"

export class CD extends Midia  {
    id:number = 0
    faixas: number = 0
    localizacao: string = 'Prateleira 1'

    constructor(id:number,anoPublicacao: number, titulo: string, duracao: string, faixas: number) {
        super(anoPublicacao, titulo, duracao)
        this.faixas = faixas
        this.id = id
    }


    definirLocalizacao():void{
        if(this.disponiblidade){
            this.localizacao = "Prateleira 1"
        }else{
            this.localizacao = "Emprestado"
        }
    }

}
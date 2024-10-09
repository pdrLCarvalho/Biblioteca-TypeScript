export abstract class ItemAcervo {
    id: number = 0
    anoPublicacao: number = 0
    titulo: string = ""
    disponiblidade:boolean = true

    constructor(anoPublicacao:number, titulo: string){
        this.anoPublicacao = anoPublicacao
        this.titulo = titulo
    }


    exibirDetalhes(){
        console.log("exibirDetalhes")
    }

    atualizarDados(){
        console.log("atualizarDados")
    }
}
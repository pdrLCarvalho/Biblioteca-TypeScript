import { ItemAcervo } from "./abstractclass/AItemAcervo"
import { Midia } from "./mediumclasses/Midia"
import { Publicacao } from "./mediumclasses/Publicacao"
import { CD } from "./subclasses/CD"
import { DVD } from "./subclasses/DVD"
import { Livro } from "./subclasses/Livro"
import { Revista } from "./subclasses/Revista"
import prompt from 'readline-sync'
const msgError = "Um ou mais campo(s) nao foi preenchido!"
export class Biblioteca {
    id: number = 1
    acervo: ItemAcervo[] = []

    adicionarItem(): void {

        try {

            const tipoItem = prompt.questionInt(`Digite o numero do tipo de item voce deseja adicionar:
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `)

            const itemTitulo = prompt.question(`Digite o titulo do item: `)
            const itemAno = prompt.questionInt(`Digite o ano de publicacao do item: `)

            switch (tipoItem) {
                case 1:
                    const cdDuracaoHoras = prompt.questionInt(`Digite a duracao em horas: `)
                    const cdDuracaoMinutos = prompt.questionInt(`Digite a duracao em minutos: `)
                    const cdDuracaoSegundos = prompt.questionInt(`Digite a duracao em segundos: `)
                    const cdDuracao = `${cdDuracaoHoras}:${cdDuracaoMinutos}:${cdDuracaoSegundos}`
                    const cdFaixas = prompt.questionInt(`Digite a quantidade de faixas do CD: `)
                    if (!itemTitulo.trim() || itemAno <= 0 || cdDuracaoHoras < 0 || cdDuracaoMinutos < 0 || cdDuracaoSegundos <= 0 || cdFaixas <= 0) {
                        throw new Error(msgError)
                    }
                    const novoCD = new CD(this.id, itemAno, itemTitulo, cdDuracao, cdFaixas,)
                    this.acervo.push(novoCD)
                    console.table(novoCD)
                    break

                case 2:
                    const dvdDuracaoHoras = prompt.questionInt(`Digite a duracao em horas: `)
                    const dvdDuracaoMinutos = prompt.questionInt(`Digite a duracao em minutos: `)
                    const dvdDuracaoSegundos = prompt.questionInt(`Digite a duracao em segundos: `)
                    const dvdFormato = prompt.question(`Digite o formato do DVD: `)
                    const dvdDuracao = `${dvdDuracaoHoras}:${dvdDuracaoMinutos}:${dvdDuracaoSegundos}`
                    if (!itemTitulo.trim() || itemAno <= 0 || dvdDuracaoHoras < 0 || dvdDuracaoMinutos < 0 || dvdDuracaoSegundos <= 0 || !dvdFormato.trim()) {
                        throw new Error(msgError)
                    }
                    const novoDVD = new DVD(this.id, itemAno, itemTitulo, dvdDuracao, dvdFormato)
                    this.acervo.push(novoDVD)
                    console.table(novoDVD)
                    break

                case 3:
                    const livroISBN = prompt.questionInt(`Digite o ISBN do livro: `)
                    const livroPaginas = prompt.questionInt(`Digite o numero de paginas do livro: `,)
                    if (!itemTitulo.trim() || itemAno <= 0 || livroISBN <= 0 || livroPaginas <= 0) {
                        throw new Error(msgError)
                    }
                    const novoLivro = new Livro(this.id, itemAno, itemTitulo, livroISBN, livroPaginas)
                    this.acervo.push(novoLivro)
                    console.table(novoLivro)
                    break

                case 4:
                    const revistaEditora = prompt.question(`Digite a editora da revista: `)
                    const revistaPaginas = prompt.questionInt(`Digite o numero de paginas da revista: `)
                    if (!itemTitulo.trim() || itemAno <= 0 || !revistaEditora.trim() || revistaPaginas <= 0) {
                        throw new Error(msgError)
                    }
                    const novaRevista = new Revista(this.id, itemAno, itemTitulo, revistaPaginas, revistaEditora)
                    this.acervo.push(novaRevista)
                    console.table(novaRevista)
                    break

                default:
                    console.error("Tipo Invalido!")
                    break
            }

            this.id++

        } catch (error) {
            console.error("\nError:", (error as Error).message + "\n")
        }
    }

    editarItem(): void {

        try {
            const idEditar = prompt.questionInt(`Digite o ID do item que voce deseja editar: `)
            const itemEditar = this.acervo.find(item => item.id === idEditar)

            if (itemEditar) {
                const titulo = prompt.question(`Digite o novo titulo: `)
                const anoPublicacao = prompt.questionInt(`Digite o novo ano da publicacao: `)

                if (!titulo.trim() || anoPublicacao <= 0) {
                    throw new Error(msgError)
                }

                itemEditar.titulo = titulo
                itemEditar.anoPublicacao = anoPublicacao

                if (itemEditar instanceof Publicacao) {
                    const numeroDePaginas = prompt.questionInt(` Digite o novo numero de paginas: `)

                    if (numeroDePaginas <= 0) {
                        throw new Error(msgError)
                    }

                    itemEditar.numeroDePaginas = numeroDePaginas

                    if (itemEditar instanceof Livro) {
                        const isbn = prompt.questionInt(`Digite o novo ISBN: `)

                        if (isbn <= 0) {
                            throw new Error(msgError)
                        }
                        itemEditar.isbn = isbn

                    } else if (itemEditar instanceof Revista) {
                        const editora = prompt.question(`Digite o novo nome da editora: `)
                        if (!editora.trim()) {
                            throw new Error(msgError)
                        }
                        itemEditar.editora = editora
                    }

                } else if (itemEditar instanceof Midia) {
                    const itemDuracaoHoras = prompt.questionInt(`Digite a nova duracao em horas: `)
                    const itemDuracaoMinutos = prompt.questionInt(`Digite a nova a duracao em minutos: `)
                    const itemDuracaoSegundos = prompt.questionInt(`Digite a nova a duracao em segundos: `)

                    if (itemDuracaoHoras < 0 || itemDuracaoMinutos < 0 || itemDuracaoSegundos <= 0) {
                        throw new Error(msgError)
                    }

                    const itemDuracao = `${itemDuracaoHoras}:${itemDuracaoMinutos}:${itemDuracaoSegundos}`
                    itemEditar.duracao = itemDuracao

                    if (itemEditar instanceof CD) {
                        const faixas = prompt.questionInt(`Digite a nova quantidade de faixas: `)

                        if (faixas <= 0) {
                            throw new Error(msgError)
                        }

                        itemEditar.faixas = faixas

                    } else if (itemEditar instanceof DVD) {
                        const formato = prompt.question(`Digite o novo formato: `)
                        if (!formato.trim()) {
                            throw new Error(msgError)
                        }

                        itemEditar.formato = formato
                    }
                }
            } else {
                throw new Error("Id nao encontrado!")
            }

        } catch (error) {
            console.error("\nError:", (error as Error).message + "\n")
        }
    }

    emprestarItem(): void {
        try {
            const idEmprestar = prompt.questionInt(`Qual o ID do item que voce deseja pegar emprestado: `)
            const itemEmprestar = this.acervo.find(item => item.id === idEmprestar)
            if (itemEmprestar && (itemEmprestar instanceof Publicacao || itemEmprestar instanceof Midia)) {
                if (itemEmprestar.disponiblidade === false) {
                    throw new Error("Item indisponivel!")
                }
                itemEmprestar.disponiblidade = false
                itemEmprestar.definirLocalizacao()
            } else {
                throw new Error("Id nao encontrado!")
            }

            console.log(`\nO item ${itemEmprestar.titulo} foi emprestado com sucesso!\n`)
        } catch (error) {
            console.error("\nError:", (error as Error).message + "\n")
        }

        
    }

    devolverItem(): void {
        try {
            const idDevolver = prompt.questionInt(`Digite o ID do item que voce deseja devolver: `)
            const itemDevolver = this.acervo.find(item => item.id === idDevolver)
            if (itemDevolver && (itemDevolver instanceof Publicacao || itemDevolver instanceof Midia)) {
                if (itemDevolver.disponiblidade === true) {
                    throw new Error("Item ja foi devolvido!")
                }
                itemDevolver.disponiblidade = true
                itemDevolver.definirLocalizacao()
            } else {
                throw new Error("Id nao encontrado!")
            }
            console.log(`\nO item ${itemDevolver.titulo} foi devolvido com sucesso!\n`)
        }catch(error){
            console.error("\nError:", (error as Error).message + "\n")
        }
    }

    listarAcervo(): void {
        if(this.acervo.length === 0){
            console.log("\nAcervo vazio!\n")
        }else{
            console.log("Acervo:\n")
            this.acervo.forEach(element => console.table(element))
            console.log("\n----------------------------------------\n")
        }
    }

    exibirItem(): void {
        const idExibir = prompt.questionInt(`Digite o ID do item que voce deseja exibir: `)
        const itemExibir = this.acervo.find(item => item.id === idExibir)

        if(itemExibir){
            console.table(itemExibir)
        }else{
            console.log("\nId nao encontrado!\n")
        }
    }

    removerItem(): void {
        const idRemover = prompt.questionInt(`Digite o ID do item que voce deseja remover: `)
        const itemRemover = this.acervo.find(item => item.id === idRemover)
        if(itemRemover){
            this.acervo = this.acervo.filter(item => item.id !== idRemover)
            console.log(`\nItem ${itemRemover.titulo} foi removido do acervo\n`)
        }else{
            console.log("\nId nao encontrado!\n")
        }      
    }

    delay(tempoMs:number):Object{
        return new Promise(resolve => setTimeout(resolve, tempoMs))
    }

    async Menu():Promise<void>{
        let opcaoMenu: number = 0
        while (opcaoMenu !== 8) {

            opcaoMenu = prompt.questionInt(`Digite o numero da acao que voce deseja executar:
1. Adicionar um item
2. Editar um item
3. Exibir um item
4. Listar acervo
5. Remover um item
6. Emprestar um item
7. Devolver um item
8. Sair 
Sua opcao: `)
            switch (opcaoMenu) {
                case 1:
                    this.adicionarItem()
                    break
                case 2:
                    this.editarItem()
                    break
                case 3:
                    this.exibirItem()
                    break
                case 4:
                    this.listarAcervo()
                    break
                case 5:
                    this.removerItem()
                    break
                case 6:
                    this.emprestarItem()
                    break
                case 7:
                    this.devolverItem()
                    break
                case 8:
                    console.log('\nFechando menu...')
                    break
                default:
                    console.log('\nOpcao Inválida!\n')
            }
            await this.delay(2000)
        }
    }
}

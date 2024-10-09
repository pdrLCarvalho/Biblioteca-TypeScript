"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const Midia_1 = require("./mediumclasses/Midia");
const Publicacao_1 = require("./mediumclasses/Publicacao");
const CD_1 = require("./subclasses/CD");
const DVD_1 = require("./subclasses/DVD");
const Livro_1 = require("./subclasses/Livro");
const Revista_1 = require("./subclasses/Revista");
const readline_sync_1 = __importDefault(require("readline-sync"));
const msgError = "Um ou mais campo(s) nao foi preenchido!";
class Biblioteca {
    constructor() {
        this.id = 1;
        this.acervo = [];
    }
    adicionarItem() {
        try {
            const tipoItem = readline_sync_1.default.questionInt(`Digite o numero do tipo de item voce deseja adicionar:
1. CD | 2. DVD | 3. Livro | 4. Revista
Sua opcao: `);
            const itemTitulo = readline_sync_1.default.question(`Digite o titulo do item: `);
            const itemAno = readline_sync_1.default.questionInt(`Digite o ano de publicacao do item: `);
            switch (tipoItem) {
                case 1:
                    const cdDuracaoHoras = readline_sync_1.default.questionInt(`Digite a duracao em horas: `);
                    const cdDuracaoMinutos = readline_sync_1.default.questionInt(`Digite a duracao em minutos: `);
                    const cdDuracaoSegundos = readline_sync_1.default.questionInt(`Digite a duracao em segundos: `);
                    const cdDuracao = `${cdDuracaoHoras}:${cdDuracaoMinutos}:${cdDuracaoSegundos}`;
                    const cdFaixas = readline_sync_1.default.questionInt(`Digite a quantidade de faixas do CD: `);
                    if (!itemTitulo.trim() || itemAno <= 0 || cdDuracaoHoras < 0 || cdDuracaoMinutos < 0 || cdDuracaoSegundos <= 0 || cdFaixas <= 0) {
                        throw new Error(msgError);
                    }
                    const novoCD = new CD_1.CD(this.id, itemAno, itemTitulo, cdDuracao, cdFaixas);
                    this.acervo.push(novoCD);
                    console.table(novoCD);
                    break;
                case 2:
                    const dvdDuracaoHoras = readline_sync_1.default.questionInt(`Digite a duracao em horas: `);
                    const dvdDuracaoMinutos = readline_sync_1.default.questionInt(`Digite a duracao em minutos: `);
                    const dvdDuracaoSegundos = readline_sync_1.default.questionInt(`Digite a duracao em segundos: `);
                    const dvdFormato = readline_sync_1.default.question(`Digite o formato do DVD: `);
                    const dvdDuracao = `${dvdDuracaoHoras}:${dvdDuracaoMinutos}:${dvdDuracaoSegundos}`;
                    if (!itemTitulo.trim() || itemAno <= 0 || dvdDuracaoHoras < 0 || dvdDuracaoMinutos < 0 || dvdDuracaoSegundos <= 0 || !dvdFormato.trim()) {
                        throw new Error(msgError);
                    }
                    const novoDVD = new DVD_1.DVD(this.id, itemAno, itemTitulo, dvdDuracao, dvdFormato);
                    this.acervo.push(novoDVD);
                    console.table(novoDVD);
                    break;
                case 3:
                    const livroISBN = readline_sync_1.default.questionInt(`Digite o ISBN do livro: `);
                    const livroPaginas = readline_sync_1.default.questionInt(`Digite o numero de paginas do livro: `);
                    if (!itemTitulo.trim() || itemAno <= 0 || livroISBN <= 0 || livroPaginas <= 0) {
                        throw new Error(msgError);
                    }
                    const novoLivro = new Livro_1.Livro(this.id, itemAno, itemTitulo, livroISBN, livroPaginas);
                    this.acervo.push(novoLivro);
                    console.table(novoLivro);
                    break;
                case 4:
                    const revistaEditora = readline_sync_1.default.question(`Digite a editora da revista: `);
                    const revistaPaginas = readline_sync_1.default.questionInt(`Digite o numero de paginas da revista: `);
                    if (!itemTitulo.trim() || itemAno <= 0 || !revistaEditora.trim() || revistaPaginas <= 0) {
                        throw new Error(msgError);
                    }
                    const novaRevista = new Revista_1.Revista(this.id, itemAno, itemTitulo, revistaPaginas, revistaEditora);
                    this.acervo.push(novaRevista);
                    console.table(novaRevista);
                    break;
                default:
                    console.error("Tipo Invalido!");
                    break;
            }
            this.id++;
        }
        catch (error) {
            console.error("\nError:", error.message + "\n");
        }
    }
    editarItem() {
        try {
            const idEditar = readline_sync_1.default.questionInt(`Digite o ID do item que voce deseja editar: `);
            const itemEditar = this.acervo.find(item => item.id === idEditar);
            if (itemEditar) {
                const titulo = readline_sync_1.default.question(`Digite o novo titulo: `);
                const anoPublicacao = readline_sync_1.default.questionInt(`Digite o novo ano da publicacao: `);
                if (!titulo.trim() || anoPublicacao <= 0) {
                    throw new Error(msgError);
                }
                itemEditar.titulo = titulo;
                itemEditar.anoPublicacao = anoPublicacao;
                if (itemEditar instanceof Publicacao_1.Publicacao) {
                    const numeroDePaginas = readline_sync_1.default.questionInt(` Digite o novo numero de paginas: `);
                    if (numeroDePaginas <= 0) {
                        throw new Error(msgError);
                    }
                    itemEditar.numeroDePaginas = numeroDePaginas;
                    if (itemEditar instanceof Livro_1.Livro) {
                        const isbn = readline_sync_1.default.questionInt(`Digite o novo ISBN: `);
                        if (isbn <= 0) {
                            throw new Error(msgError);
                        }
                        itemEditar.isbn = isbn;
                    }
                    else if (itemEditar instanceof Revista_1.Revista) {
                        const editora = readline_sync_1.default.question(`Digite o novo nome da editora: `);
                        if (!editora.trim()) {
                            throw new Error(msgError);
                        }
                        itemEditar.editora = editora;
                    }
                }
                else if (itemEditar instanceof Midia_1.Midia) {
                    const itemDuracaoHoras = readline_sync_1.default.questionInt(`Digite a nova duracao em horas: `);
                    const itemDuracaoMinutos = readline_sync_1.default.questionInt(`Digite a nova a duracao em minutos: `);
                    const itemDuracaoSegundos = readline_sync_1.default.questionInt(`Digite a nova a duracao em segundos: `);
                    if (itemDuracaoHoras < 0 || itemDuracaoMinutos < 0 || itemDuracaoSegundos <= 0) {
                        throw new Error(msgError);
                    }
                    const itemDuracao = `${itemDuracaoHoras}:${itemDuracaoMinutos}:${itemDuracaoSegundos}`;
                    itemEditar.duracao = itemDuracao;
                    if (itemEditar instanceof CD_1.CD) {
                        const faixas = readline_sync_1.default.questionInt(`Digite a nova quantidade de faixas: `);
                        if (faixas <= 0) {
                            throw new Error(msgError);
                        }
                        itemEditar.faixas = faixas;
                    }
                    else if (itemEditar instanceof DVD_1.DVD) {
                        const formato = readline_sync_1.default.question(`Digite o novo formato: `);
                        if (!formato.trim()) {
                            throw new Error(msgError);
                        }
                        itemEditar.formato = formato;
                    }
                }
            }
            else {
                throw new Error("Id nao encontrado!");
            }
        }
        catch (error) {
            console.error("\nError:", error.message + "\n");
        }
    }
    emprestarItem() {
        try {
            const idEmprestar = readline_sync_1.default.questionInt(`Qual o ID do item que voce deseja pegar emprestado: `);
            const itemEmprestar = this.acervo.find(item => item.id === idEmprestar);
            if (itemEmprestar && (itemEmprestar instanceof Publicacao_1.Publicacao || itemEmprestar instanceof Midia_1.Midia)) {
                if (itemEmprestar.disponiblidade === false) {
                    throw new Error("Item indisponivel!");
                }
                itemEmprestar.disponiblidade = false;
                itemEmprestar.definirLocalizacao();
            }
            else {
                throw new Error("Id nao encontrado!");
            }
            console.log(`\nO item ${itemEmprestar.titulo} foi emprestado com sucesso!\n`);
        }
        catch (error) {
            console.error("\nError:", error.message + "\n");
        }
    }
    devolverItem() {
        try {
            const idDevolver = readline_sync_1.default.questionInt(`Digite o ID do item que voce deseja devolver: `);
            const itemDevolver = this.acervo.find(item => item.id === idDevolver);
            if (itemDevolver && (itemDevolver instanceof Publicacao_1.Publicacao || itemDevolver instanceof Midia_1.Midia)) {
                if (itemDevolver.disponiblidade === true) {
                    throw new Error("Item ja foi devolvido!");
                }
                itemDevolver.disponiblidade = true;
                itemDevolver.definirLocalizacao();
            }
            else {
                throw new Error("Id nao encontrado!");
            }
            console.log(`\nO item ${itemDevolver.titulo} foi devolvido com sucesso!\n`);
        }
        catch (error) {
            console.error("\nError:", error.message + "\n");
        }
    }
    listarAcervo() {
        if (this.acervo.length === 0) {
            console.log("\nAcervo vazio!\n");
        }
        else {
            console.log("Acervo:\n");
            this.acervo.forEach(element => console.table(element));
            console.log("\n----------------------------------------\n");
        }
    }
    exibirItem() {
        const idExibir = readline_sync_1.default.questionInt(`Digite o ID do item que voce deseja exibir: `);
        const itemExibir = this.acervo.find(item => item.id === idExibir);
        if (itemExibir) {
            console.table(itemExibir);
        }
        else {
            console.log("\nId nao encontrado!\n");
        }
    }
    removerItem() {
        const idRemover = readline_sync_1.default.questionInt(`Digite o ID do item que voce deseja remover: `);
        const itemRemover = this.acervo.find(item => item.id === idRemover);
        if (itemRemover) {
            this.acervo = this.acervo.filter(item => item.id !== idRemover);
            console.log(`\nItem ${itemRemover.titulo} foi removido do acervo\n`);
        }
        else {
            console.log("\nId nao encontrado!\n");
        }
    }
    delay(tempoMs) {
        return new Promise(resolve => setTimeout(resolve, tempoMs));
    }
    Menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let opcaoMenu = 0;
            while (opcaoMenu !== 8) {
                opcaoMenu = readline_sync_1.default.questionInt(`Digite o numero da acao que voce deseja executar:
1. Adicionar um item
2. Editar um item
3. Exibir um item
4. Listar acervo
5. Remover um item
6. Emprestar um item
7. Devolver um item
8. Sair 
Sua opcao: `);
                switch (opcaoMenu) {
                    case 1:
                        this.adicionarItem();
                        break;
                    case 2:
                        this.editarItem();
                        break;
                    case 3:
                        this.exibirItem();
                        break;
                    case 4:
                        this.listarAcervo();
                        break;
                    case 5:
                        this.removerItem();
                        break;
                    case 6:
                        this.emprestarItem();
                        break;
                    case 7:
                        this.devolverItem();
                        break;
                    case 8:
                        console.log('\nFechando menu...');
                        break;
                    default:
                        console.log('\nOpcao Inválida!\n');
                }
                yield this.delay(2000);
            }
        });
    }
}
exports.Biblioteca = Biblioteca;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Publicacao_1 = require("../mediumclasses/Publicacao");
class Livro extends Publicacao_1.Publicacao {
    constructor(id, anoDePublicacao, titulo, numeroDePaginas, isbn) {
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.id = 0;
        this.isbn = 0;
        this.localizacao = 'Estante 1';
        this.isbn = isbn;
        this.id = id;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "Estante 1";
        }
        else {
            this.localizacao = "Emprestado";
        }
    }
}
exports.Livro = Livro;

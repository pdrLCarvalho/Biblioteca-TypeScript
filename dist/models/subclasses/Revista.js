"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Publicacao_1 = require("../mediumclasses/Publicacao");
class Revista extends Publicacao_1.Publicacao {
    constructor(id, anoDePublicacao, titulo, numeroDePaginas, editora) {
        super(anoDePublicacao, titulo, numeroDePaginas);
        this.id = 0;
        this.editora = "";
        this.localizacao = 'Estante 2';
        this.editora = editora;
        this.id = id;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "Estante 2";
        }
        else {
            this.localizacao = "Emprestado";
        }
    }
}
exports.Revista = Revista;

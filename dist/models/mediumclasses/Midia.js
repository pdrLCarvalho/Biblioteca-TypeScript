"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
const AItemAcervo_1 = require("../abstractclass/AItemAcervo");
class Midia extends AItemAcervo_1.ItemAcervo {
    constructor(anoPublicacao, titulo, duracao) {
        super(anoPublicacao, titulo);
        this.duracao = '';
        this.localizacao = "";
        this.duracao = duracao;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "";
        }
        else {
            this.localizacao = "Emprestado";
        }
    }
    obterLocalizacao() {
        return this.localizacao;
    }
}
exports.Midia = Midia;

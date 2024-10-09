"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publicacao = void 0;
const AItemAcervo_1 = require("../abstractclass/AItemAcervo");
class Publicacao extends AItemAcervo_1.ItemAcervo {
    constructor(anoPublicacao, titulo, numeroDePaginas) {
        super(anoPublicacao, titulo);
        this.numeroDePaginas = 0;
        this.localizacao = "";
        this.numeroDePaginas = numeroDePaginas;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "";
        }
        else {
            this.localizacao = ("indisponivel");
        }
    }
    obterLocalizacao() {
        return this.localizacao;
    }
}
exports.Publicacao = Publicacao;

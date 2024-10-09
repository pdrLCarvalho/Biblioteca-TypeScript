"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAcervo = void 0;
class ItemAcervo {
    constructor(anoPublicacao, titulo) {
        this.id = 0;
        this.anoPublicacao = 0;
        this.titulo = "";
        this.disponiblidade = true;
        this.anoPublicacao = anoPublicacao;
        this.titulo = titulo;
    }
    exibirDetalhes() {
        console.log("exibirDetalhes");
    }
    atualizarDados() {
        console.log("atualizarDados");
    }
}
exports.ItemAcervo = ItemAcervo;

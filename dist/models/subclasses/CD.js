"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const Midia_1 = require("../mediumclasses/Midia");
class CD extends Midia_1.Midia {
    constructor(id, anoPublicacao, titulo, duracao, faixas) {
        super(anoPublicacao, titulo, duracao);
        this.id = 0;
        this.faixas = 0;
        this.localizacao = 'Prateleira 1';
        this.faixas = faixas;
        this.id = id;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "Prateleira 1";
        }
        else {
            this.localizacao = "Emprestado";
        }
    }
}
exports.CD = CD;

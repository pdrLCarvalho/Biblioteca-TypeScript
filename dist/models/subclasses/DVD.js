"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const Midia_1 = require("../mediumclasses/Midia");
class DVD extends Midia_1.Midia {
    constructor(id, anoPublicacao, titulo, duracao, formato) {
        super(anoPublicacao, titulo, duracao);
        this.id = 0;
        this.formato = '';
        this.localizacao = 'Prateleira 2';
        this.formato = formato;
        this.id = id;
    }
    definirLocalizacao() {
        if (this.disponiblidade) {
            this.localizacao = "Prateleira 2";
        }
        else {
            this.localizacao = "Emprestado";
        }
    }
}
exports.DVD = DVD;

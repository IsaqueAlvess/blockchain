import SHA256 from 'crypto-js/sha256'

export default class Bloco{
    constructor(timestamp, transacoes,hashBlocoAnterior){
        this.timestamp = timestamp;
        this.transacoes = transacoes;
        this.hashBlocoAnterior = hashBlocoAnterior; //this == referencia na classe
        this.contador = 0;
        this.hash = this.calcularHash(); 
    }

    calcularHash(){
        return SHA256(this.hashBlocoAnterior + this.timestamp + this.contador).toString();
    }
    
    minerarBloco(dificuldade){
        let pedacoDoHash = this.hash.substring(0, dificuldade);   // parte do Hash de acordo com a dificuldade. nesse caso vamos pegar do 0 até a DIFICULDADE passada.
        let hashASerMinerado = Array(dificuldade + 1).join("0");      //O join seta as posições do array para "0"

        while (pedacoDoHash !== hashASerMinerado){
            this.contador++;
            this.hash = this.calcularHash();
            pedacoDoHash = this.hash.substring(0, dificuldade);
        }

        console.log('Bloco minerado: ', this.hash);
    }

}

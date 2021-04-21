import Blockchain from "./blockchain";
import Transacao from "./transacao";

const stefaCoin = new Blockchain();

const enderecoMinerador = 'endereco-Davide';

const transacaoUm = new Transacao('endereco-thiago','endereco-igor',5);
stefaCoin.adicionarTransacao(transacaoUm);
stefaCoin.minerarTransacoesPendentes(enderecoMinerador);
console.log('Recompensa Minerador:',stefaCoin.obterRecompensaDoMinerador(enderecoMinerador));

const transacaoDois = new Transacao('endereco-thiago','endereco-igor',10);
stefaCoin.adicionarTransacao(transacaoDois);
stefaCoin.minerarTransacoesPendentes(enderecoMinerador);
console.log('Recompensa Minerador:',stefaCoin.obterRecompensaDoMinerador(enderecoMinerador));

const transacaoTres = new Transacao(enderecoMinerador, 'endereco-thiago',15);
stefaCoin.adicionarTransacao(transacaoTres);
stefaCoin.minerarTransacoesPendentes(enderecoMinerador);
stefaCoin.minerarTransacoesPendentes(enderecoMinerador);


console.log('Recompensa Minerador:',stefaCoin.obterRecompensaDoMinerador(enderecoMinerador));

console.log(stefaCoin.getChain());


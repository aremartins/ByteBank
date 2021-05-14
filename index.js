import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Aretha", 3451258123, 425555822);
const cliente2 = new Cliente("Mauricio", 4513486431, 554645135)

const contaCorrenteAretha = new ContaCorrente( 1231, cliente1 );

const contaCorrenteMauricio = new ContaCorrente(1231, cliente2 );
contaCorrenteMauricio.depositar(1000);

console.log(contaCorrenteMauricio);
const valorSacado = contaCorrenteMauricio.sacar(50);
console.log("Valor sacado",valorSacado);
contaCorrenteMauricio.trasferir(500, contaCorrenteAretha);

console.log(contaCorrenteAretha);
console.log("Saldo conta cliente1", contaCorrenteAretha.saldo);
console.log("CPF cliente1", cliente1._cpf);
console.log("Número de contas cadastradas", ContaCorrente.numeroDeContas)






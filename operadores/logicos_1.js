let temDinheiro =  false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE =  "#1 (AND) - vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);
// && vai ser para operações AND

let resultadoOU = "#2 (OR) - vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
// || vai ser para operação OR 

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);
// != o sinal de diferente pode ser usado 
//para XOR(ou exclusivo)

console.log(!true)
console.log(!false)
// ! para o operador unario, que é o operador
// de negação
const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2
console.log('vamos comprar a tv 50"?', comprarTV50);
//AND

let comprarTV32 = t1 !== t2
console.log('vamos comprar a tv 32"?', comprarTV32);
//XOR

let tomarSorvete = t1 || t2;
console.log('vamos tomar sorvete?', tomarSorvete);
//OR

let ficarEmCasa = !tomarSorvete;
console.log('vamos ficar em casa?', ficarEmCasa);
//NOT
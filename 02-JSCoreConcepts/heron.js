// boki trójkąta
const a = 4;
const b = 5;
const c = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
let p = (a + b + c) / 2;
let result = () => `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi: ` + Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log( result() );
// tipe data
// string, boolean, number(int, bigInt), null, undefined, symbol(baru ada di ES6), dll

//string
let fullName = "Doni Octavian";
console.log(fullName);

//boolean
let benar = true;
console.log(benar);

//int
let number = 10;
console.log(number);

//bigInt
let numberBig = 12345656565n;
console.log(numberBig);

//cek tipe data

console.log(typeof numberBig);
console.log(typeof number);
console.log(typeof benar);

//null
let age = null;

console.log(typeof age);

//undefined
let a;
console.log(a);

//symbol
//identifier yang unik
// dianggap berbeda, karena mereka identifier unik
const idSatu = Symbol("id");
console.log(typeof id);
console.log(idSatu);

const idDua = Symbol("id");
console.log(idSatu == idDua);

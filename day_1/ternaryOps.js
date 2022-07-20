//cara lebih singkat pake ternary operatior
//condigion ? expIf true : expIf false
// ingat ketika ternary operator ini fdigunakan hanya untuk dua buag kondisi saja yang direkomendasi

number = 11;

let result =
  number % 2 === 0
    ? `${number} merupakan bilangan genap`
    : `${number} merupakan bilangan ganjil`;
console.log(result);

//ternary lebih dari 2 pilihan
//condition

number = "sepuluh";

result =
  numer % 2 === 0
    ? `${number} merupakan bilangan genap`
    : number % 2 === 1
    ? `${number} merupakan bilangan ganjil`
    : `${number} merupakan bukan bilangan`;
console.log(result);

//trunch dan falsy
//ciri-ciri falsy
//number nilainya 0
// string nilainya string 0
// null
//undefined
// NaN is is Nan

let firstName = "";
if (firstName) {
  console.log(`hello${firstName}`);
} else {
  console.log(`nama masih kosong `);
}

// console.log("h");

// tujuan kita buat function adalah :
// 1. agar dapat mengurangi pengulangan kode program
// reusable
// program menjadi terstruktur

// function sayHello() {
//   console.log("Hello World");
// }

// function sayHelloTwo() {
//   sayHello();
// }

// function sayHelloThree() {
//   sayHello();
//   sayHelloTwo();
// }

// sayHelloThree();

//ada parameter

// function sayHelloTwo(name) {
//   console.log(name);
// }

// sayHelloTwo("steven");

//hati-hati sama operator, kalau string tulis angka bakal dijumlahin keculi + karena concate

// function add1(a, b) {
//   console.log(a / b);
// }

// add1(20, "10");

// function add2(a, b) {
//   console.log(a + b);
// }

// add2(20, "10");

// function add3(a, b, c) {
//   console.log(a * b * c);
// }

// add3(true, true, 8);

// function run() {
//   let a = "lari";
//   console.log(a);
// }

// function run2() {
//   run();
//   console.log("jalan dari run 2");
// }

// run2();

//simpen variabel di tipe data

// function sayHello(name) {
//   return `Halo ${name}`;
// }

// let result = sayHello("Steven");

// console.log(result);

//cek input harus string

// function sayHello2(name) {
//   if (typeof name == "string") {
//     return `Halo ${name}`;
//   } else {
//     console.log("tipe data bukan string");
//   }
// }

// console.log(sayHello2("helo"));

//kasih selain string, akan undefined karena dia gak return apa-apa

// return NaN kalau 2 return saat bersamaan

// function sayName(a, b) {
//   return a + b;
//   return a;
// }

// console.log(sayName(1));

// // keluarin array dari fungsi
// function myFunction(a, b) {
//   let res = [a, b, "test"];
//   return res;
// }

// console.log(myFunction(4, 3));

// // keluarin fungsi dari variabel yang di-declare
// let temp = function mySecFunc(a, b) {
//   return a, b;
// };

// console.log(temp(1, 1));

// let temp2 = function name(a, b) {
//   let res = [a, b, "test", "test", 1];
//   return res;
// };

// console.log(temp2(1, 2));

//fungsi jadi argumen

function add(x, y) {
  return x + y;
}

function calculator(ang1, ang2, aprt) {
  return aprt(ang1, ang2);
}

console.log(calculator(1, 2, add));

//function default value param

function name(name = "doni", alamat = "dahlan") {
  console.log(name, alamat);
}

name();

// return multi line

function perkalian(x, y) {
  return x, y;
}

perkalian(2, 3);

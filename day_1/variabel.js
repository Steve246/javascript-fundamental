// console.log("hello1");
// console.log("hello2");
// console.log("hello3");

// //run pake node + nama script kita

// //variabel
// //bisa di declare dan di assign kembali
// var a = 20;
// let b = 10;
// const c = 10;

// console.log(a);
// console.log(b);
// console.log(c);

// //redeclared

// a = 10;
// var a; //proses ini namanya hoisting
// a = 30;
// console.log("ini a yang berubah: ", a);

// //reassign
// a = true;
// console.log(a);

// let

// let a = 10;
// console.log(a);
// // let a = 20 // gak bisa di redeclare

// //bisa di reasign
// a = "doni";
// console.log(a);

// //gak bisa hoisting

// b = 10;
// let b;
// console.log(b);

//const
//konstan gak bisa berubah
// const b = 20;
// console.log(b);

//outer variabel or variabel global

// var a = 10; //ini harus ada kalau gak error sih console log diluar example
// function example() {
//   var a = 20;
//   console.log(a);
// }
// console.log(a);
// example();

//inisiasi global variabel
// function example() {
//   a = 20; //ini bikin jadi global
//   //kasih var or let baru dia kesimpen di fungsi ini
//   console.log(a);
// }
// example();
// // var a = "doni";
// a = "kity";
// console.log(a);
// console.log(global);

// var a di dalem dan luar fungsi

// function example() {
//   var a = 30;
//   console.log(a);
// }
// example();
// // var a = "doni";
// var a = "kity";
// console.log(a);

// let a = 10;

// function example() {
//   a += 10;
//   console.log(a);
// }
// example();
// console.log(a);

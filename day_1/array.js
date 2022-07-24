//bisa diakses pake 2 cara

let arr = new Array();
// let arr = [];

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

// array bisa masuk lebih dari 1 jenis tipe data

// let anekaRagam = [1, true, "doni", ["satu", "dua"]];
// console.log(anekaRagam);

// array bisa masuk fungsi

// let anekaRagam = [1, true, "doni", ["satu", "dua"], function(){
//   console.log('halo');
// }]

// anekaRagam[3]();
// console.log(anekaRagam);

let animals = [];
animals[0] = "kucing";
console.log(animals);

const animals2 = []; //tidak bisa di assign
animals2[0] = "burung"; // tidak error hanya saja diabaikan oleh JS
console.log(animals2);

//append dalam 1 array, bisa masuk lebih dari 1 jenis tipe data
//append pake push

arr.push(3);

arr.push("halo");

arr.push("okee");
console.log(arr);
console.log(arr.length);

//buat hapus
arr.pop();
console.log(arr);

//shift --> hapus element pertama

// arr.shift();
// console.log("ini yang dihapus", arr.shift());
// console.log(arr);
// console.log(arr.length);
// arr.push("animals");
// console.log(arr);
// console.log(arr.length);

// //unshift --> menambahkan element diawal
// arr.unshift("kuda", "liunah");
// console.log(arr);
// console.log(arr.length);

// //splice --> bisa masukin, dan delete

// arr.splice(1, 0, "semut alaska");
// console.log(arr);

// //slice untuk ambil index elemen yang kita mau
// animalsClone = arr.slice(1, 3);
// console.log(animalsClone);

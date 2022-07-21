//imutable array
//kasusnya jika kita assign sebuah variabel dengan array yang ikut berubah
// ada 2 cara mengatasi masalanya yaitu:

//cara pertama menggunakan array.from()

let numbers = [1, 2, 3];
let nums = Array.from(numbers);
nums[0] = 5;
console.log("numbers " + numbers);
console.log("nums " + nums);

//cara kedua menggunakan spread operator sama seperti di immutable object

let numbers2 = [4, 5, 6];
let nums2 = [...numbers2];
nums2[0] = 7;
console.log("numbers2 " + numbers2);
console.log("nums2 " + nums2);

//array pada javascript itu miliki built-in methods, dan dibagian menjadi 2

//pure function -> tidak merubah data(array) yang sudah ada
// impure function -> merubah dat(array) yang sudah ada

//array.length, array.indexof(tidak merubah data)

let arr = [1, 23, 234, 34];
let fe = arr.forEach((e) => {
  return e * 2;
}); //karena dia gak return apa-apa, kalau mau ada hasilnya pake map

let me = arr.map((e) => {
  return e * 2;
});

let me2 = arr.filter((e) => {
  return e * 2;
});

console.log(arr);
console.log(fe);
console.log(me);
console.log(me2);

//destructuring array
let arr2 = [2, 3, 4, 5, 6];
let [a, b, ...c] = arr2;
console.log(a, b, ...c);

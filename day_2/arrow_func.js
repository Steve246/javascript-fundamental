// arrow function -> mirip perilaku seperti fungsi, tapi penulisannya beda

//di arrow function kita sudah tidak lagi masukan keyword function

const sayHello = () => {
  console.log("hello Say");
};

sayHello();

let hello = sayHello();
console.log(hello);

const sayHello2 = (name) => {
  console.log(`hello ${name}`);
};

sayHello("doni"); //karena udh di console.log dalem fungsi makanya undefined

const sayHello3 = (name) => {
  return `selamat pagi ${name}`;
};

console.log(sayHello3("doni"));

const sayHello4 = (name) => console.log(`halo selamat makan ${name}`);
sayHello4("doni");

let sayTest = (x, y) => {
  let hasil = x + y;
  return hasil;
};

console.log(sayTest(2, 3));

//ubag

// function calculator(ang1, ang2, aprt) {
//   return aprt(ang1, ang2);
// }

// console.log(calculator(1, 2, add));

// (ang1, ang2, aprt) => aprt(ang1, ang2);

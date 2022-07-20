//imutable object

// immutable adalah tipe variabel yang tidak bisa dirubah

//tipe data yang termaksud immutable adalah string, boolean, null, undefined, number

//mutable tipe data yang bisa diubah, kalau di JS tipe data object dan array merupakan mutable

const car = {
  name: "terrios",
  color: "black",
  seats: {
    count: 4,
    type: "leather",
  },
};

car.color = "white";
// console.log(car);

// const newCar = car;
// newCar.name = "BMW";
//jika kita membuat variabel baru dan langsung kita assign

// console.log(newCar);
// console.log(`car: , ${car.name}`);
// console.log(`newCar: , ${newCar.name}`);

// ada 2 cara untuk bisa salin objectnya beserta nilainya
// cara pertama kita bisa menggunakan keyword object.assign()

const newCar = Object.assign({}, car);
newCar.name = "BMW";

console.log(`car: , ${car.name}`);
console.log(`newCar: , ${newCar.name}`);

// console.log(car);
// console.log(newCar);

//cara kedua kita bisa menggunakan spread operator, ini adaalah fitur bar dari ES6
// spread operator dituliskan dengan tanda titik 3 (...)

const newCar2 = { ...car, seats: { ...car.seats } };
newCar2.name = "Avanza";
// console.log(`car: ${car.name}`);
// console.log(`newCar2: ${newCar2.name}`);

newCar2.seats.type = "wood";

console.log(`car: ${JSON.stringify(newCar)}`);

console.log(`newCar2: ${JSON.stringify(newCar)}`);

//hanya saja ada kekuranga ketika kita memakai spread operator
// jika kita membuat nested object, maka object yang disalin hanya 1 tingkat

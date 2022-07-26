let carPark = [];

class Car {
  constructor(noPol, nameCar) {
    this.noPol = noPol;
    this.nameCar = nameCar;
  }
}

//3 method, 1 fungsi

// function Car() {
//   this.speed = 0;

//   this.speedUp = function (speed) {
//     this.speed = speed;
//     setTimeout(() => console.log(this.speed), 1000);
//   };
// }

// let car = new Car();
// car.speedUp(50); // 50;

//SOAL

// FUNGSI parkinglot :
// Fungsi ini berguna untuk membangun tempat parkir pertama kali, dengan rincian sebagai berikut:
// - Menentukan kapasitas tempat parkir sesuai dengan parameternya.
// - Pembuatan tempat parkir ini memerlukan waktu sebanyak 5000ms.
// - Mengembalikan 3 actions yaitu, park, leave, dan check.

function ParkLot(capacity) {
  setTimeout(() => {
    const LEN = capacity;

    for (let i = 0; i < LEN; i++) {
      carPark.push("Empty");
    }
  }, 5000);
}

function main() {
  ParkLot(5);
}

main();

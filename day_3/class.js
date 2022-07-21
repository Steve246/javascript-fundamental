//class kayak struct
// class adakag sebuah blueprint untuk membuat sebuah object dengan jenis tertentu

class Car {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
  }
  //cma bisa ada 1 constructor

  engineStart() {
    console.log(`${this.brand} ${this.name} engine started`);
  }
}

// pada class kita bisa buat constructor class

const toyota = new Car("toyota", "corolla");

console.log(toyota);
toyota.engineStart(); //bisa nambain method

const terios = new Car("Daihatsu", "Terios");

console.log(terios);

terios.engineStart();

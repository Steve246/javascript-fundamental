const product = {
  productId: 123,
  info: "sabun",
  info: function () {
    console.log(`productId ${this.productId}, productName ${this.name}`);
  },
};

product.info();

//js dia memakai sebuah function untuk membuat object
//disini kita bisa liat sebuah function bisa membuat object
function Product(id, name) {
  let product = {};
  product.productId = id;
  product.name = name;
  product.info = function () {
    return `productId ${this.productId} productName ${this.name}`;
  };
  return product;
}

let product01 = Product(123, "sabun");
let product02 = Product(321, "shammpo");
//disini kita bisa lihat function di create ulang setiap
// membuat sebuah object
console.log(product01);
console.log(product02);

//bagaimana caranya agar info ini tidak ikut saat dipanggil ?
// kita coba membaut sebuah method terpisah untuk menampung info

const ProductMethod = {
  info: function () {
    return `productId ${this.productId}, productName ${this.name}`;
  },
};

function ProductObject(id, name) {
  //copy
  //let product membuat objek baru dari product method
  let product = Object.create(ProductMethod);
  product.productId = id;
  product.name = name;
  return product;
}

let produk03 = ProductObject(123, "jution");
console.log(produk03);
console.log(produk03.info());

let produk04 = produk03;
produk04.productId = 1234;

console.log(produk03.info());
console.log(produk04);

//code diatas kurang bagus kaena kita harus membuat sebuah object lain untuk object yang reusable

//maka itu sih js punya fitur namana prototype
// semua fungsi di JS ityu sudah memiliki prototipe

function kosong() {}

console.log(kosong.prototype);

//pake prototype lgsng bikin objek

function ProductPrototype(id, name) {
  let product = Object.create(ProductPrototype.prototype);
  product.productId = id;
  product.name = name;
  return product;
}
ProductPrototype.prototype.info = function () {
  return `productId ${this.productId} productName ${this.name}`;
};

let product05 = ProductPrototype(233, "sikat gigi");

console.log(product05.info());

//constructor di function

function NewProduct(id, name) {
  this.productId = id;
  this.productName = name;
}

NewProduct.prototype.info = function () {
  return `productId ${this.productId} productName ${this.name}`;
};

let product06 = NewProduct(999, "parfum");

console.log(product06.info());

function Car(brand, name) {
  this.brand = brand;
  this.name = name;
  this.run = function () {
    console.log(`${this.brand} ${this.name} engine started`);
  };
}

const corolla = Car("Toyota", "Corolla");
const terios = Car("Daihatsu", "Terios");
console.log(corolla);
console.log(terios);
corolla.run();

console.log(typeof this); //pake this dia akan membuat sebuah objek baru, bisa dicek tipe data dengan typeof

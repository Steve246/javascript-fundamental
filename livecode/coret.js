console.log(1);
let carParkir = [];

class namaClass {
  useName = (nama, jalanResponse) => {
    setTimeout(() => {
      jalanResponse(nama);
    }, 1000);
  };
}

jalanResponse = (nama) => {
  return new Response(`ini nama ${nama}`, null);
};

class Response {
  constructor(data, error) {
    this.data = data;
    this.error = error;
  }

  toString() {
    return `data ${this.data} ${this.error}`;
  }
}

let newClass = new namaClass();

let cek = newClass.useName("Steven", jalanResponse);
console.log(cek);

// console.log(newClass.createParking(5));

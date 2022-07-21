// const NamaMethod = {
//   nama: function () {
//     return ` ${this.name}`;
//   },
// };

// function NamaObject(name) {
//   let namaOrang = Object.create(NamaMethod);
//   namaOrang.name = name;
//   return namaOrang;
// }

// let aku = NamaObject("peter");
// console.log(aku.nama());

function Saya(input) {
  this.nama = input;
}

let me = new Saya("Steven");
console.log(me.nama);

const NamaMethod = {
  nama: function () {
    return ` ${this.name}`;
  },
};

function NamaObject(name) {
  let namaOrang = Object.create(NamaMethod);
  namaOrang.name = name;
  return namaOrang;
}

let aku = NamaObject("peter");
console.log(aku.nama());

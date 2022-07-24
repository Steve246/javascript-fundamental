const stock = {
  cofeeBean: 100,
  water: 1000,
};

function pesanKopi(pesanan) {
  console.log(`Memesan Kopi ${pesanan}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pesanan === "teh") {
        reject(`pesanan ${pesanan} tidak tersedia`);
      } else {
        const hasil = `kopi ${pesanan}  sedang diproses`;
        resolve(hasil);
      }
    }, 1500);
  });
}

function cekStock() {
  console.log("sedang Cek stok...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stock.cofeeBean > 0 && stock.water > 0) {
        resolve("stock kopi tersedia");
      } else {
        reject("stock kopi tidak tersedia");
      }
    }, 1500);
  });
}

function seduhKopi(pesanan) {
  console.log(`sedang membuat kopi ${pesanan}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`kopi ${pesanan} telah siap`);
    }, 3000);
  });
}

//promise all
function memanaskanAir() {
  console.log("Memanaskan Air .....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Air Panas Sudah Siap");
    }, 2000);
  });
}

function menggilingBijiKopi() {
  console.log("Menggiling Biji Kopi");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("biji kopi telah siapp");
    }, 2000);
  });
}

function pesanMinum(pesanan) {
  pesanKopi(pesanan)
    .then((result) => {
      console.log(result);
      return cekStock();
    })
    .then((result) => {
      console.log(result);
      return Promise.all([memanaskanAir(), menggilingBijiKopi()]);
    })
    .then((result) => {
      console.log(result);
      return seduhKopi(pesanan);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
}

pesanMinum("cappucino");
pesanMinum("teh");

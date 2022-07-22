//callback biar selalu sama asynchronois, biar dia sama code kita kalau dieksekusi

// function p1() {
//   console.log("enigma camp 1");
// }

// function p2(callback) {
//   setTimeout(function () {
//     console.log("enigmacamp 2");
//     callback();
//   }, 1000);
// }

// function p3() {
//   console.log("enigmacamp 3");
// }

// p1();

// p2(p3);

//aplikasiin callback

// function minumKopi(error, output) {
//   if (error) {
//     console.log(`Kecewa ${error}`);
//   } else {
//     console.log(`Trimakasih, sruputt ${output}, ahh`);
//   }
// }

// function pesanMinum(pesanan, kirimPesan) {
//   console.log(`menunggu pesanan ${pesanan} sedang diproses`);

//   setTimeout(() => {
//     if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`);
//     else {
//       const hasil = `Kopi ${pesanan}`;
//       kirimPesan(null, hasil); //callback disini, sama dirinya sendiri
//     }
//   }, 2000);
// }

// pesanMinum("Latte", minumKopi);
// pesanMinum("teh", minumKopi);

//buat kalau kita sedang menunggu kopi dibuat

// tambain kopi sedang dibuat

function minumKopi(error, output) {
  if (error) {
    console.log(`Kecewa ${error}`);
  } else {
    console.log(`Trimakasih, sruputt ${output}, ahh`);
  }
}

function pesanMinum(pesanan, kirimPesan) {
  console.log(`menunggu pesanan ${pesanan} sedang diproses`);

  setTimeout(() => {
    if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`);
    else {
      setTimeout(() => {
        console.log("pesanan sedang dibuat ...");
        const hasil = `kopi ${pesanan}`;
        kirimPesan(null, hasil);
      }, 3000);
    }
  }, 2000);
}

pesanMinum("Latte", minumKopi);
// pesanMinum("teh", minumKopi);

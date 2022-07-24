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
    if (pesanan === "teh") {
      // console.log("masuk");

      kirimPesan(`Pesanan ${pesanan} tidak ada`, null);
    } else {
      setTimeout(() => {
        console.log("pesanan sedang dibuat ...");
        const hasil = `Kopi ${pesanan}`;
        kirimPesan(null, hasil);
      }, 3000);
    }
  }, 2000);
}

// let pesan = ["americano", "teh", "capucinno", "latte"];

// callback hell
// pesanMinum(pesan[0], (error, pesanan) => {
//   console.log(pesanan);
//   pesanMinum(pesan[1], (error, pesanan) => {
//     console.log(pesanan);
//     pesanMinum(pesan[2], (error, pesanan) => {
//       console.log(pesanan);
//       pesanMinum(pesan[3], (error, pesanan) => {
//         console.log(pesanan);
//       });
//     });
//   });
// });

let pesanans = ["latte", "teh"];
pesanMinum(pesanans[0], (error, pesanan) => {
  minumKopi(error, pesanan);
  pesanMinum(pesanans[1], (error, pesanan) => {
    minumKopi(error, pesanan);
  });
});

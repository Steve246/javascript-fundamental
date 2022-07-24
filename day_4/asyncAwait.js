function pesanMinuman(pesanan, kirimPesan) {
  console.log(`menunggu pesanan ${pesanan} sedang diproses`);

  setTimeout(() => {
    if (pesanan === "teh") {
      kirimPesan(`Pesanan ${pesanan} tidak ada`, null);
    } else {
      const hasil = `Kopi ${pesanan}`;
      kirimPesan(null, hasil);
    }
  }, 2000);
}

function minumKopi(reject, resolve) {
  return (error, output) => {
    if (error) reject(`Kecewa ${error}`);
    else resolve(`Terima Kasih, Sruput ${output}, ahh`);
  };
}

function pesanMinumanAsync(pesanan) {
  return new Promise((resolve, reject) => {
    pesanMinuman(pesanan, minumKopi(reject, resolve));
  });
}

//async digunakan untuk memberitahu js supaya menjalankan pesanMinumAsyc secara synchronous
async function orderKopi() {
  //await digunakan untuk menghentikan proses pembacaan kode selanjutnya
  //sampai fungsi pesanMinumanAsync mengembalikan nilai promise(resolve)

  //async wait

  async function orderKopi() {
    try {
      const order = await pesanMinumanAsync("americano");
      console.log(order);
    } catch (error) {
      console.log(error);
    }
  }
  // const order = await pesanMinumanAsync("americano");
  // console.log(order);
}

orderKopi();

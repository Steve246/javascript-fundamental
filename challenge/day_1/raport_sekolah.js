// Raport Anak Sekolah
//challenge if-else
let tugas = 10;

let UTS = 10;

let UAS = 100;

function hitungHasil() {
  let hasilTugas = tugas * (25 / 100);
  let hasilUTS = UTS * (30 / 100);
  let hasilUAS = UAS * (45 / 100);

  let hasilTotal = hasilTugas + hasilUAS + hasilUTS;

  console.log("Hasil Total Anda Adalah : ", hasilTotal);

  if (hasilTotal >= 80) {
    console.log("Anda Mendapat A");
  } else if (hasilTotal >= 70) {
    console.log("Anda Mendapat B");
  } else if (hasilTotal >= 55) {
    console.log("Anda Mendapat C");
  } else if (hasilTotal >= 40) {
    console.log("Anda Mendapat D");
  } else {
    console.log("Anda Mendapat E");
  }
}

hitungHasil();

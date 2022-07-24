function cekDate(tanggal, bulan, tahun) {
  //cek tanggal

  if (tanggal == 0 || bulan > 12) {
    return false;
  }

  let namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "October",
    "November",
    "Desember",
  ];

  let namaBulanPanjang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //cek kabisat

  if ((tahun % 100 != 0 && tahun % 4 == 0) || tahun % 400 == 0) {
    namaBulanPanjang[1] = 29;
  } else {
    if (bulan == 2 && tanggal == 29) {
      return `Tahun Kabisat tdk terjadi pda ${tahun}`;
    }
  }

  // kita cek range tanggal

  if (tanggal > namaBulanPanjang[bulan - 1]) {
    return `${namaBulan[bulan - 1]} tahun ${tahun} hanya ada tanggal 1 sampai ${
      namaBulanPanjang[bulan - 1]
    } hari`;
  }

  return `tanggal tervalidasi: ${tanggal} - ${namaBulan[bulan - 1]} - ${tahun}`;
}

let tanggal = 20;
let bulan = 7;
let tahun = 2021;

let hasilDate = cekDate(tanggal, bulan, tahun);
console.log(hasilDate);

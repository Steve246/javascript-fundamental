// Jika tanggal tidak sesuai makan output akan memberitahu kenapa tanggal tidak sesuai.

// Jika bulan tidak sesuai maka akan menghasilkan output kenapa bulan tersebut tidak sesuai.

// jika bulan februari menunjukkan tanggal 29 namun tahun tersebut bukanlah tahun kabisat maka akan

// menampilkan bahwa tahun tersebut bukanlah tahun kabisat.

// Jika semua data sesuai maka akan menampilkan tanggal, bulan dan tahun sesuai dengan variable yang ditulis dengan

// format (ex: 20 Januari 2022).

//tahun kabisat --> tiap 4 tahun, ada 1 februari 1-28

let tanggal = 30;
let bulan = 2;
let tahun = 2021;

function cekTanggal(tanggal, bulan, tahun) {
  //return batas

  let tanggalCek = cekBulan(bulan);

  let tanggalPertama = tanggalCek.batasAwal;

  let tanggalKedua = tanggalCek.batasAkhir;

  // return [tanggalPertama, tanggalKedua];

  if (tanggal <= tanggalKedua && tanggal >= tanggalPertama) {
    //cek ada taun kabisat atau ngak
    //terjadi tiap 4 tahun sekali

    let tahunKabisat = cekTahun(tahun);

    if (tahunKabisat == true) {
      return `Tahun kabisat tidak terjadi pada ${tahun} 
      `;
    } else {
      return `${tanggal} - ${bulan} - ${tahun}
      `;
    }

    return tanggalPertama, tanggalKedua;
  } else {
    //kalau tanggal gak ada di bulan kelaurin ini
    return `bulan ${bulan}, hanya ada ${tanggalPertama} dan ${tanggalKedua}`;
  }
}

function cekBulan(bulan) {
  // feb cma ad 28 hari

  if (bulan == 2) {
    let batasAwal = 1,
      batasAkhir = 28;
    return { batasAwal, batasAkhir };
  } else {
    //cek bulan sisanya
    //jan --> sampe 31
    // april --> sampe 30
    if (bulan % 2 == 0) {
      // bulan genap 1-30
      let batasAwal = 1,
        batasAkhir = 30;
      return { batasAwal, batasAkhir };
    } else if (bulan % 2 != 0) {
      // bulan ganjil 1-31
      let batasAwal = 1,
        batasAkhir = 31;
      return { batasAwal, batasAkhir };
    }
  }
}

function cekTahun(tahun) {
  //cek ada taun kabisat atau ngak
  if (tahun % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

// RUN dibawah

let values = cekTanggal(tanggal, bulan, tahun);

// let first = values[0];
// console.log(first);

// let second = values[1];
// console.log(second);

console.log(values);

let nama;

let peran;

nama = "steven";

peran = "superhero";

if (nama == "" || peran == "") {
  console.log("nama dan peran harus diisi");
} else {
  if (peran == "superhero") {
    console.log(
      `Selamat Datang Superhero ${nama}, Kalahkan Semua Monster Di Muka Bumi`
    );
  } else if (peran == "monster") {
    console.log(
      `Selamat Datang Monster  ${nama}, Hancurkan Semua Superhero Yang Ada`
    );
  } else {
    console.log(
      `Selamat Datang  ${nama}, Pilih Peranmu Untuk Melanjutkan Game Ini`
    );
  }
}

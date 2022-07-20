// challenge jadwal harian

let jam = 25;

if (jam > 24) {
  console.log("Hanya ada 24 jam dalam sehari");
} else {
  if (jam >= 4 && jam <= 5) {
    console.log("Bangun Pagi");
  } else if (jam >= 6 && jam <= 7) {
    console.log("Mandi dan Sarapan");
  } else if (jam >= 8 && jam <= 11) {
    console.log("Berangkat Sekolah");
  } else if (jam == 12) {
    console.log("Pulang Sekolah");
  } else if (jam >= 13 && jam <= 15) {
    console.log("Tidur Siang");
  } else if (jam >= 16 && jam <= 17) {
    console.log("Waktu Main");
  } else {
    console.log("Waktu Belajar dan Istirahat");
  }
}

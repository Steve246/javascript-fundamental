// let nilai = 70;
// if (nilai > 80) {
//   console.log("A");
// } else if (nilai > 70) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// untuk variabel grade bisa ditampung disebuah variabel disini baru pakai scope dari sebuah variabel
// nilai = 60;
// let grade = "";
// if (nilai < 90) {
//   grade = "B";
// }
// console.log(grade);

//nilai 90 adalah A dan dibawah 90 adalah B

// nilai = 90;

// if (nilai === 90) {
//   console.log("A");
// } else {
//   console.log("B");
// }

//kasus 90-100 (A), 80-90 (B)

let nilai = 59;

if (nilai >= 90 && nilai <= 100) {
  console.log("A");
} else if (nilai >= 80 && nilai <= 89) {
  console.log("B");
} else if (nilai >= 70 && nilai <= 79) {
  console.log("C");
} else {
  console.log("D");
}

nilai = 80;
const competence = 1;

if (competence == 2) {
  if (nilai >= 90 && nilai <= 100) {
    console.log("Selamat Beasiswa");
  } else {
    console.log("No Beasiswa");
  }
} else {
  if (nilai >= 90 && nilai <= 100) {
    console.log("A");
  } else if (nilai >= 80 && nilai <= 89) {
    console.log("B");
  } else if (nilai >= 70 && nilai <= 79) {
    console.log("C");
  } else {
    console.log("D");
  }
}

// console.log(1);
// console.log(2);
// console.log(3);

//pake set time out

// console.log(1);
// setTimeout(() => {
//   console.log("hello 2");
// }, 1000);
// console.log(3);

//cth lain

// function Ascny(cetak) {
//   setTimeout(() => {
//     cetak();
//   }, 2000);
// }

// function cetak() {
//   console.log("doni");
// }

// console.log("mulai");
// Ascny(cetak);
// console.log("selesai");

//cth lain
//pengunaan asynchronous yang salah

//salah karena let user mendeklarasi dluan

// function userCredintialRepo() {
//   let users = []; //dieksekusi dluan, baru return
//   setTimeout(() => {
//     users = [
//       {
//         userName: "jution",
//         password: 1234,
//       },
//       {
//         userName: "fadli",
//         passowrd: 4321,
//       },
//     ];
//   }, 1000);
//   return users;
// }

// // hanya dapet array kosong
// function findUser(userName) {
//   const userRepo = userCredintialRepo();
//   console.log(userRepo);
//   return userRepo.find((u) => u.userName === userName);
// }

// findUser("jution");

//hasil betulnya

//tujuan asynchronous biar gak ketahan, misal manggil API. Kan ada latency jadi yang bawah"nya bisa kepanggil

// kalau panggil API, dan kita butuh data bisa diarahin ke loading screen. Jadi sampe data didapat kita ditaro di loading screen, kalau kelamahan bakal diarahin ke timeout --> error box
function userCredintialRepo(findUser) {
  setTimeout(() => {
    let users = [
      {
        userName: "jution",
        password: 1234,
      },
      {
        userName: "fadli",
        passowrd: 4321,
      },
    ];
    findUser(users);
  }, 500);
}

function findUser(userName) {
  let findUserCr = (users) => {
    let result = users.find((u) => u.userName === userName);
    console.log(result);
  };
  userCredintialRepo(findUserCr);
}

findUser("jution");

//3 kondisi primised
// 1. Kondisi pending (janji sedang dalam proses)
// 2. Kondisi fullfield (Janji Ditepati)
// 3. Kondisi Rejected (Janji gagal terpenuhi)

let userName = "doni";
let password = "1234";

const janji = new Promise((resolve, reject) => {
  let id = 1234;
  setTimeout(() => {
    if (userName === "doni" && password == "1234") {
      resolve(id); //paramater ini yang menerima simbol parameter (1 paramteer) utk kirim data kalau berhasil lakukan

      //kalau terpanggil kondisi ini akan ubah promised dari pending jadi resolve

      // console.log(id);
    } else {
      reject("invalid username or password");

      //parameter kedua dari promised
      //fungsi yang dpt terima 1 parameter, yaituy reason

      //kasih alesan kenapa promised gak terpenuhi padahal udh dipanggil

      //pending --> rejected
    }
  }, 1000);
});

// console.log(janji);

//cth resolve pake resolve dan reject pending

// const janjiLagi = new Promise(executorFunction);

//reject pending -> fullfield
function handleResolve(resolveValue) {
  console.log(resolveValue);
  console.log(janji);
}
//reject pending -> rejected
function handleReject(rejectValue) {
  console.log(rejectValue);
  console.log(janji);
}

// janji.then(handleResolve);

//handle dipisahin
//hati-hati, parameter 1 resolve, jadi mau gak mau biar ada 2 isian. kasih null

//yang atas gak dikasih null (handleresolve), karena spot dia udh bener

// janji.then(handleResolve);

// janji.then(null, handleReject);

//method promise lainnya
// janji.catch(handleReject);
// janji.finally(() => console.log("Finally"));
//print password 123, akan bikin error

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "invalid username or password".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

janji
  .then(handleResolve)
  .catch(handleReject)
  .finally(() => console.log("Finally"));

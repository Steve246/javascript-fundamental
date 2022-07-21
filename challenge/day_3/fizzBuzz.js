// jika angka termasuk kelipatan 5 dan 2 maka akan mencetak tulisan “FIZZBUZZ”,

// jika angka termasuk kelipatan 5 dan BUKAN termasuk kelipatan 2 maka akan mencetak tulisan “FIZZ”,

// jika angka termasuk kelipatan 2 dan BUKAN termasuk kelipatan 5 maka akan mencetak tulisan “BUZZ”, j

// ika angka BUKAN termasuk keliapatan 5 dan 2 maka akan mencetak angka saja

let inputAngka = 10;

function FizzBuzz(inputs) {
  for (let i = 1; i <= inputs; i++) {
    // console.log(i);

    if (i % 5 == 0 && i % 2 == 0) {
      let hasil = "FIZZBUZZ";
      console.log(hasil);
    } else if (i % 5 == 0 && i % 2 != 0) {
      let hasil = "FIZZ";
      console.log(hasil);
    } else if (i % 5 != 0 && i % 2 == 0) {
      let hasil = "BUZZ";
      console.log(hasil);
    } else {
      let hasil = ` ${i}`;
      console.log(hasil);
    }
  }
}

FizzBuzz(inputAngka);

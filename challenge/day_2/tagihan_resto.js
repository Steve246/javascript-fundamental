// - tips 10% apabila tagihan diatas Rp 500.000,

// - tips 15% apabila tagihan antara Rp 250.000 sampai dengan Rp 500.000,

// - dan tips 20% apabila tagihan di bawah Rp 250.000

// total uang yang dikeluarkan (tagihan + tips)

let tagihan_1 = 250000;
let tagihan_2 = 710000;
let tagihan_3 = 125000;

function CekTagihan(tSatu, tDua, tTiga) {
  let totalTagihan = tSatu + tDua + tTiga;
  return totalTagihan;
}

function CekTips(tTagihan) {
  if (tTagihan >= 500000) {
    //tips 10%
    let totalTips = (10 / 100) * tTagihan;
    return totalTips;
  } else if (tTagihan >= 250000 && tTagihan <= 499999) {
    //tips 15%
    let totalTips = (15 / 100) * tTagihan;
    return totalTips;
  } else {
    //tips 20%
    let totalTips = (20 / 100) * tTagihan;
    return totalTips;
  }
}

function billing(tagihan_satu, tagihan_dua, tagihan_tiga) {
  let tagihan = CekTagihan(tagihan_satu, tagihan_dua, tagihan_tiga);

  // let tipsSatu = CekTips(tagihan_satu);
  // let tipsDua = CekTips(tagihan_dua);
  // let tipsTiga = CekTips(tagihan_tiga);

  let totalTips =
    CekTips(tagihan_satu) + CekTips(tagihan_dua) + CekTips(tagihan_tiga);
  let tagihanTips = tagihan + totalTips;

  return [tagihan, totalTips, tagihanTips];
}

let values = billing(tagihan_1, tagihan_2, tagihan_3);

console.log("Total Tagihan: ", values[0]);

console.log("Total Tips: ", values[1]);

console.log("Total Tagihan & Tips: ", values[2]);

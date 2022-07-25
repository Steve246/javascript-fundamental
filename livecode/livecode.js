let carParkir = [];

class Car {
  constructor(noPol, nameCar) {
    this.noPol = noPol;
    this.nameCar = nameCar;
  }
}

class ParkService {
  createParking = (jumlahLahan) => {
    setTimeout(() => {
      let slotParkir = jumlahLahan;
      for (let x = 0; x < slotParkir; x++) {
        // carParkir[x] = "Empty Slot";
        // carParkir.push("Empty");
        console.log("for jalan");
      }

      return new Response(
        `Pembuatan Parkir Berhasil, terdapat ${slotParkir} parkiran kosong`,
        null
      );
    }, 5000);
  };

  carPark = (car, noPolBaru) => {
    setTimeout(() => {
      //2 kondisi
      // search noPol, kalau ada gak ditambah
      //kalau parkir penuh gak ditambah

      let slotKosong = 0;

      for (let y = 0; y < slotParkir; y++) {
        if (carParkir[y] == "Empty") {
          slotKosong += 1; //hitung jumlah parkir kosong
        }
      }

      if (slotKosong < slotParkir) {
        // parkiran masih ada yang empty
        //search noPol

        if (carParkir.filter((val) => val.noPol === noPolBaru)) {
          //noPol ada di array
          return new Response(null, `Mobil ${noPolBaru} sudah ada di parkiran`);
        } else {
          //masukin ke parkir

          carParkir.push(car);
        }
      } else {
        //parkiran udh penuh

        return new Response(null, "Parkiran Sudah Penuh");
      }
    }, 3000);
  };

  carLeave = (noPolCheck) => {
    setTimeout(() => {
      const index = carParkir.findIndex((val) => {
        return val.noPol === noPolCheck;
      });
      //balikin -1 kalau dia ketemu index yang ada noPol yang dicheck

      if (index !== -1) {
        carParkir.splice(index, 1);
        return new Response(
          `Mobil dengan Nomor ${NoPolCheck} berhasil terhapus`,
          null
        );
      } else {
        return new Response(
          null,
          `Mobil dengan Nomor ${NoPolCheck}  tidak ditemukan`
        );
      }
    }, 1500);
  };

  carCheck = (parkCapacity, sisaSlot, parkir) => {
    setTimeout(() => {
      return new Response(
        `capacity: ${parkCapacity}, remaining : ${sisaSlot}, parkedCar: ${parkir} `
      );
    }, 500);
  };
}

class Response {
  constructor(data, error) {
    this.data = data;
    this.error = error;
  }

  toString() {
    return `data ${this.data} ${this.error}`;
  }
}

function main() {
  const parkiran = new ParkService();

  let createPark = parkiran.createParking(5); //bikin 5 slot parkir

  console.log(createPark);

  console.log(carParkir);

  //parkir mobil

  // let parkirMobil1 = parkiran.carPark(new Car("764444", "Budi Setiawan")); // park mobil

  // console.log(parkirMobil1);

  // let parkirMobil2 = parkiran.carPark(new Car("75444", "Andrew"));

  // console.log(parkirMobil2);
}

main();

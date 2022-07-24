class Hewan {
  constructor(name) {
    this.name = name;
  }

  komunikasi(suara) {
    console.log(`hewan ${this.name} bersuara ${suara}`);
  }

  berjalan(name) {
    console.log(`${name} berjalan`);
  }
}

class Kucing extends Hewan {
  constructor() {
    // keyword super digunakan untuk memanggil constructor super class atay parent classnya

    super("kucing");
    //super musti dipanggil sblm nulis this, kalau ngak reference error
    this.name = "kucing";
  }

  berguling() {
    console.log(`${this.name} kucingan`);
  }
}

const kucing = new Kucing();
kucing.berjalan("kucing");
kucing.komunikasi("meow");
kucing.berguling();

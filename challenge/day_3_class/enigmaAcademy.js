// Ani dan Anton adalah mahasiswa dari Enigma Academy
// mereka diangkat menjadi seorang perpustakawan di enigma univeristy
// mereka mendapat tugas membuat aplikasi untuk menambahkan buku
// buku memiliki info code,title,publisher,publicationyear,dan author

// kriteria :

// - buat class buku dengan constructor dan propertynya
// - lalu buatlah sebuah class yang mempunyai method add(untuk menambahkan buku), getAll(untuk melihat semua buku), dan searchByTitle(untuk mencari buku) , dan deleted(untuk menghpus buku)
// - buatlah validasi dimana ketika buku kosong , buku ditambahkan tidak,buku di search tidak ditemukan
// - tambahkan minimal 5 buku

//classBook --> array of object
// classService --> isinya method-method (add, get all)
//classVallidasi

//nama repo --> challenge class

class Book {
  constructor(title, author, pages, kodeBuku) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.kodeBuku = kodeBuku;
  }
}

class MethodBook extends Book {
  constructor(title, author, pages, kodeBuku, library = []) {
    super(title, author, pages, kodeBuku);

    this.library = library;
    this.title = library.title;
  }

  addBuku(book) {
    return this.library.push(book);
  }

  getAll() {
    console.log(newBook.library);
  }

  deleteOneBook() {
    return this.library.pop();
  }

  searchByTitle(titleBook) {
    var breakCheck = false;

    for (let x = 0; x < this.library.length; x++) {
      // console.log("ini", x);
      for (let y = 0; y < x; y++) {
        if (titleBook == newBook.library[x][y]) {
          console.log(newBook.library[x]);
          breakCheck = true;
          break;
        }
      }

      if (breakCheck == true) {
        // console.log("selesai");
        break;
      }
    }
  }
}

const newBook = new MethodBook();

//masukin minimal 5 buku
// insert buku
newBook.addBuku(["Desa Penari", "Echo", "500", "C001"]);
newBook.addBuku(["Warung WMB", "Alpha", "200", "C002"]);
newBook.addBuku(["Desa Joget", "Charlie ", "250", "C003"]);
newBook.addBuku(["Desa Dangdut", "Delta", "200", "C004"]);
newBook.addBuku(["Marvel", "Markus", "300", "C005"]);

// GetAll

newBook.getAll();

// SearchByTitle

newBook.searchByTitle("Warung WMB");

//deleteBuku
newBook.deleteOneBook();
newBook.getAll();

//validasi

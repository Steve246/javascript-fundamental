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
  constructor(title, author, pages, kodeBuku, library = []) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.kodeBuku = kodeBuku;
    this.library = library;
  }

  addBuku(book) {
    return this.library.push(book);
  }
}

// class MethodBook extends Book {
//   constructor() {
//     super(title, author, pages, kodeBuku)
//   }
// }

const newBook = new Book();

//masukin minimal 5 buku
newBook.addBuku(["Desa Penari", "Echo", "500", "C001"]);
newBook.addBuku(["Warung WMB", "Alpha", "200", "C002"]);
newBook.addBuku(["Desa Joget", "Charlie ", "250", "C003"]);
newBook.addBuku(["Enigma", "Delta", "200", "C004"]);
newBook.addBuku(["Marvel", "Markus", "300", "C005"]);

console.log(newBook.library);

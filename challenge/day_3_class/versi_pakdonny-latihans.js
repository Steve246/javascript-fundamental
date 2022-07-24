let books = [];

class Books {
  constructor(code, title, publisher, publicationYear, author) {
    this.code = code;
    this.title = title;
    this.publisher = publisher;
    this.publicationYear = publicationYear;
    this.author = author;
  }
}

class InventoryService {
  add(book) {
    books.push(book);
  }

  getAll() {
    if (books.length != 0) {
      console.log("semua data buku ada");
      return new Response(books, null);
    }
    return new Response(null, "buku tidak ada atau kosong");
  }

  searchByTitle(title) {
    return books.filter((val) => val.title === title);
  }

  deleteData(id) {
    // if (books.code == id) {
    //   const deleted = books.shift(id);
    //   return new Response(deleted, null);
    // }

    let index = books.filter((val) => val.code !== id);
    // console.log(index);
    books = [...index];
  }

  updateTitle(code, titleBaru) {
    const idBuku = books.findIndex((val) => {
      return val.code === code;
    });

    if (idBuku !== -1) {
      books[idBuku].title = titleBaru;
      return new Response(books[idBuku], null);
    } else {
      return new Response(
        null,
        `title ${titleLama} yang dicari tidak ditemukan`
      );
    }
  }
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
  const inventoryService = new InventoryService();

  inventoryService.add(
    new Books("M001", "Boba", "Gramedoi", 2021, "gajah duduk")
  );

  inventoryService.add(
    new Books("M002", "Haloha", "Pempoi", 2021, "gajah melamun")
  );

  let books = inventoryService.getAll();
  console.log(books);

  // inventoryService.deleteData("M001");
  // console.log(delet);

  //search by title

  // console.log("search by title");

  // let hasilCari = inventoryService.searchByTitle("Haloha");

  // console.log(hasilCari);

  //dibawah ada update title

  console.log("Update dari judul");

  booksUpdate = inventoryService.updateTitle("M001", "Boba Diubah Berhasil");
  console.log(booksUpdate);

  books = inventoryService.getAll();
  console.log(books);
}

main();

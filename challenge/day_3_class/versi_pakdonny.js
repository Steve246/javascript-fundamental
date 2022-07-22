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

  let books = inventoryService.getAll();
  console.log(books);

  inventoryService.deleteData("M001");
  // console.log(delet);

  books = inventoryService.getAll();
  console.log(books);
}

main();

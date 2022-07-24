const book = {
  title: "Manusia Hebat",
  author: "doni",
  hal: 100,
  publisher: {
    fullName: "Gajah Besar",
    address: "Ragunan",
  },
};

//destructuring
// const {
//   title,
//   author,
//   hal,
//   publisher: { fullName, address },
// } = book;

// console.log(title, author, hal, fullName, address);

//sudah tidak perlu seperti ini
// book.publisher.fullname

const { hal, ...lainnya } = book;
console.log(hal);
console.log(lainnya);

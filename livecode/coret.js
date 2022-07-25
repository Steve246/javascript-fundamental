console.log(1);

class namaClass {
  useName = (nama) => {
    setTimeout(() => {
      console.log(`${nama}`, 20 + 3);
    }, 1000);
  };
}

let newClass = new namaClass();

newClass.useName("Steven", 10);

console.log(3);

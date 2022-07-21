function suaraBinatang(binatang) {
  switch (binatang) {
    case "kucing":
      console.log(`Meowww~`);
      break;
    case "anjing":
      console.log(`Guk Guk`);
      break;
    case "sapi":
      console.log(`Moooooo`);
      break;
    default:
      console.log(`suara bintang tidak dikenali`);
  }
}

suaraBinatang("kucing");

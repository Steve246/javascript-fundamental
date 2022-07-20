let nilai = "A";

switch (nilai) {
  case "A":
    console.log(`anda mendapat nilai ${nilai}`);
    break;
  case "B":
    console.log(`anda mendapat nilai ${nilai}`);
    break;
  case "C":
    console.log(`anda mendapat nilai ${nilai}`);
    break;
  case "D":
    console.log(`anda mendapat nilai ${nilai}`);
    break;
  default:
    console.log(`anda tidak lulus`);
}

nilai = "B";

switch (nilai) {
  case "A":
    console.log(`Anda lulus dengan nilai sempurna`);
    break;
  case "B":
  //kalau kasih break dia langsung keluar
  // tapi kalau ad break, bawahnya ikutt
  case "C":
    console.log(`selamat anda lulus`);
    break;
  default:
    break;
}

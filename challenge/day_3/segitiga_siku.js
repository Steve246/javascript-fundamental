let s = "";

for (let a = 0; a < 7; a++) {
  for (let b = 0; b <= a; b++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

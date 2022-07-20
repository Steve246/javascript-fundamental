// for (let i = 0; i <= 5; i++) {
//   console.log("saya seorang developer");
// }

let number = 5;
for (let index = 0; index < Array.length; index++) {
  console.log(`saya seorang developer`);
}

//break and continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  if (i > 8) {
    break;
  }
  console.log(i);
}

//break dan continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  if (i > 8) {
    break;
  }
  console.log(i);
}

const animals = ["burung", "gajah", "rusa"];
for (let i = 0; i < animals.length - 1; i++) {
  console.log(animals[i]);
}

// for (let i in animals) {
//   console.log(animals[i]);
// }

for (let i of animals) {
  console.log(i);
}

// for (const i of animals) {
//   console.log(i);
// }

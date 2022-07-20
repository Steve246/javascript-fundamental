const user = {
  firstName: "doni",
  lastName: "rifqi",
  age: 22,
  isActive: true,
  address: {
    fullName: `dahlan ragunan`,
    number: 200,
  },
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
  sayHello2: function (name) {
    console.log(`Hello ${name}`);
  },
};

// console.log(user);

// console.log(user.firstName);

// console.log(user.lastName);

// console.log(user.age);

// console.log(user.isActive);

// ======= //

// console.log(user["firstName"]);
// console.log(user["lastName"]);
// console.log(user["age"]);
// console.log(user["isActive"]);

// ======= //

// let newName = (user.firstName = "jution");
// console.log(newName);
// console.log(newName);

// ======= //

// let newName2 = (user["firstName"] = "doni");
// console.log(newName2);
// console.log(newName2);

// ======= //

// user.email = "doniSiaga@gmail.com";
// user.phone = 086666;
// console.log(user);

// ======= //

for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

// ==== //

user.sayHello(user.firstName);

delete user.isActive;
console.log(user);

// ==== //

let nested = user.address.fullName;
console.log(nested);

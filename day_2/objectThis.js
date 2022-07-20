// apa itu this ??, this adalah referensi ke object milih siapa
const myObj = {
  x: 50,
  fun: function () {
    console.log(this.x);
  },
};

myObj.fun();

//console.log(myObj.fun());
//implisit binding --> tidak ditentukan olehg developer, tp ditentukan oleh JS

//explisit binding --> nilai yang sudah ditentukan oleh developer

const anotherObj = {
  x: 100,
};

function foo(name, address) {
  // let x = 100;
  console.log(name, address, this.x);
}

foo("doni", "ragunan");
//call parameter tambahan berupa variadic
foo.call(anotherObj, "doni", "ragunan");
//applu parameternya trambahan berupa array
foo.apply(anotherObj, ["doni", "ragunan"]);

//bind, paling sering digunakan
const data = foo.bind(anotherObj, "doni", "ragunan");
data();

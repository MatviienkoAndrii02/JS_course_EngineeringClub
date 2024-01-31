let car1 = {
  wheels: 4,
  color: "black",
  year: 2014,
};

let person1 = {
  firstName: "John",
  lastName: "Smith",
  age: 27,
  info: () => {
    console.log(
      `Name: ${person1.firstName} ${person1.lastName}\n Age: ${person1.age}`
    );
  },
};

let material1 = {
  name: "Glass",
  transparency: 0.95,
  strength: 20,
};

let car2 = new Object({ wheels: 4, color: "red", year: 2018 });

let person2 = new Object({
  firstName: "Bobby",
  lastName: "Walter",
  age: 18,
  info: () => {
    console.log(
      `Name: ${person1.firstName} ${person1.lastName}\n Age: ${person1.age}`
    );
  },
});

let material2 = new Object({ name: "Glass", transparency: 0.95, strength: 20 });

let person3 = Object.create(person1);
let person4 = { __proto__: person2 };

let person = {
  name: "Name",
  age: 21,
  sex: 'male',
  __proto__: {},
};
let engineer = {
  yearsOfExpirience: 3,
  __proto__: person,
};

let QA_engineer = {
  languages: ["JavaScript", "TypeScript", "Python"],
  __proto__: engineer,
};

function info(obj) {
  console.log(obj);
  for (key in obj) {
    if (key == "__proto__") {
      info(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  }
}

info(person)
info(engineer)
info(QA_engineer)
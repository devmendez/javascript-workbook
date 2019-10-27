// do while loop that prints out numbers from 1 to 1000
var num = 1;
do {
  num += 1;
  console.log(num);
} while (num < 1000);

// creating an object called person
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// print out birth years that are odd
for (var i = 0; i < person.birthDate.length; i++) {
  //   //check that the number is even
  if (i % 2 == 0) {
    continue;
  }
  // if get here, then i is odd
  console.log(i + "  is an odd birth year");
}

//creating an array of persons that contains multiple objects
const arrayOfPersons = [
  {
    firstName: "John",
    lastName: "Smith",
    birthDate: "Oct 17, 1979",
    gender: "male"
  },
  {
    firstName: "Diane",
    lastName: "Martinez",
    birthDate: "Dec 15, 1954",
    gender: "female"
  },
  {
    firstName: "Dave",
    lastName: "Navarro",
    birthDate: "July 4, 1973",
    gender: "male"
  },
  {
    firstName: "Sara",
    lastName: "Button",
    birthDate: "April, 13, 1999",
    gender: "female"
  },
  {
    firstName: "Will",
    lastName: "Ragan",
    birthDate: "Feb 23, 1978",
    gender: "male"
  },
  {
    firstName: "Natalie",
    lastName: "Johnson",
    birthDate: "Sept 16, 1923",
    gender: "female"
  }
];

//using .map over the arrayOfPersons and display their info
const displayInfo = arrayOfPersons.map(function(display) {
  return display.info;
});
console.log(displayInfo);

// //filter out the males in the array
const malesOnly = arrayOfPersons.filter(males => males.gender === "male");

console.log(malesOnly);

// //filter out people born before 1990
const bornBeforeNinety = arrayOfPersons.filter(
  birthdate => arrayOfPersons.birthDate < 1990
);

console.log(bornBeforeNinety);

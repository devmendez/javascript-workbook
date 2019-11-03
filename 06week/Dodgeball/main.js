"use strict";

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

//defining class of a player
class player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.team = null;
  }
}

//defining class of a team
class Team {
  constructor(name, mascot, color) {
    this.name = name;
    this.mascot = mascot;
    this.color = color;
    this.teammates = [];
  }
}

//defining class of a Dodge Ball Player
class dodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

const blueJays = new Team("Blue Jays", "BlueJay", "Blue");
const redJays = new Team("Red Jays", "Red Jay", "Red");

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

const signUpList = element => {
  const listElement = document.getElementById(element);
  listElement.innerHTML = "";
  arrOfPeople.map(person => {
    const li = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      console.log(person.id);
      makePlayer(person.id, element);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

const makePlayer = (id, element) => {
  let removed = arrOfPeople.splice(id - 2, 1);
  console.log(removed);
  listOfPlayers.push(removed[0]);
  console.log(arrOfPeople);
  console.log(listOfPlayers);
  signUpList(element);
  console.log(`li ${id} was clicked!`);
};

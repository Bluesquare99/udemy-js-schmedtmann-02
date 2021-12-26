"use strict";
/*

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const finland = describeCountry("Finland", 16, "Helsinki");
console.log(finland);

const spain = describeCountry("Spain", 200, "Madrid");
console.log(spain);

const uruguay = describeCountry("Uruguay", 14, "Montevideo");
console.log(uruguay);



// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentagePopUruguay = percentageOfWorld1(14);
console.log(percentagePopUruguay);
const percentagePopSwitzerland = percentageOfWorld1(8);
console.log(percentagePopSwitzerland);

// Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentagePopUganda = percentageOfWorld2(46);
console.log(percentagePopUganda);
const percentagePopNorway = percentageOfWorld2(5);
console.log(percentagePopNorway);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentagePopUSA = percentageOfWorld3(330);
console.log(percentagePopUSA);


// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )}% ofthe world.`;
}
const describeFrance = describePopulation("France", 67);
console.log(describeFrance);
const describeUAE = describePopulation("UAE", 23);
console.log(describeUAE);



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let averageDolphins = calcAverage(85, 54, 41);
let averageKoalas = calcAverage(23, 34, 27);

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= averageKoalas * 2) {
    return `Dolphins win, ${averageDolphins} to ${averageKoalas}`;
  } else if (averageKoalas >= averageDolphins * 2) {
    return `Koalas win, ${averageKoalas} to ${averageDolphins}`;
  } else {
    return `No one wins`;
  }
}

console.log(checkWinner(averageDolphins, averageKoalas));



// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [33, 74, 200, 4];
console.log(`Populations array is of length 4: ${populations.length === 4}`);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);



// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden

const neighbors = ["Canada", "Mexico"];
neighbors.push("Utopia");
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany"))
  console.log("Probably not a European country :D");
neighbors[0] = "Canadia";
console.log(neighbors);



// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: "45",
  neighbors: ["Norway", "Sweden", "Switzerland"],
};

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

console.log(
  `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry["neighbors"].length} neighboring countries and a capital called ${myCountry["capital"]}`
);



const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmi: "",

  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  bmi: "",

  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
}

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(`sum is ${sum}`);
    sum += arr[i];
  }

  const average = sum / arr.length;
  return average;
};

console.log(calcAverage(totals));

import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */



const worldCup = fifaData.filter((home) => {
    return home.Year === 2014 && home.Stage === 'Final';
});

const homeName = (worldCup.map(teamHome => teamHome['Home Team Name'])).shift();  //--if I wanted to move the value from the array and store in a value
console.log(`Task 1a: ${homeName}`);

const awayName = (worldCup.map(teamAway => teamAway['Away Team Name'])).shift();
console.log(`Task 1b: ${awayName}`);

const goalsHome = (worldCup.map(teamHomeGoals => teamHomeGoals['Home Team Goals'])).shift();
console.log(`Task 1c: ${goalsHome}`);

const goalsAway = (worldCup.map(teamAwayGoals => teamAwayGoals['Away Team Goals'])).shift();
console.log(`Task 1d: ${goalsAway}`);

if(goalsHome > goalsAway){
    console.log(`Task 1e: ${homeName}`);
}
else{
    console.log(`Task 1e: ${awayName}`);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finals = data.filter((item) => {
      return item.Stage === 'Final';  
    });
    return finals;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
    const years = getFinals.map(item => item.Year);
    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    let finals = getFinals;
    const test = finals.map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        }
        else{
            return item['Away Team Name'];
        }
    });
    return test;
};

console.log(getWinners((getFinals(fifaData))));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners,getYears) {
        const country = getWinners;
        //console.log(country)

        const yearOfFinals = getYears;
        //console.log(yearOfFinals)

        return yearOfFinals.map((item,index) => {
            return `In ${item}, ${country[index]} won the world cup!`;
        })

};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalHomeGoals = data.reduce((accumulator,item) => {
        return accumulator + item['Home Team Goals'];
    },0);
    console.log(totalHomeGoals);
    //console.log(totalHomeGoals/fifaData.length);
    

    const totalAwayGoals = data.reduce((accumulator,item) => {
        return accumulator + item['Away Team Goals'];
    },0)
    console.log(totalAwayGoals);
    //console.log(totalAwayGoals/fifaData.length);

    return (totalHomeGoals + totalAwayGoals) / fifaData.length

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

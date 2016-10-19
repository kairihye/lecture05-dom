'use strict';

/* 
this is an Array of Objects representing games the Seahawks have played
objects include the opponent name, Seattle's final score, and the opponents 
final score.
This array is ordered by date.
*/
var seahawks2016 = [
  { oppName: 'Dolphins', seattle: 12, opponent: 10 }, //won
  { oppName: 'Rams', seattle: 3, opponent: 9 },       //lost
  { oppName: '49ers', seattle: 37, opponent: 18 },    //won
  { oppName: 'Jets', seattle: 27, opponent: 17 },     //won
  { oppName: 'Falcons', seattle: 26, opponent: 24 },  //won
];

/* write a function `won()` that takes as a parameter an object representing a 
SINGLE game (like one of the objects in the above array) and returns whether
or not the Seahawks won the game.
*/
function won(game){
  return game.seattle > game.opponent;
}

/* Use your `won()` function to log out an array of games that the Seahawks won.
HINT: use the built-in `.filter()` function!

BONUS: use the .map() function to just log out an array of the team names the
Seahawks beat.
*/

var gamesWon = seahawks2016.filter(won);
console.log(gamesWon);

var teamsBeat = gamesWon.map(function(game){
  return game.oppName;
});
console.log(teamsBeat);


/* Use the `.reduce()` function to determine the average point spread 
of games the Seahawks *won* (that is, the average number of points they won by).
*/
var winningPoints = seahawks2016.reduce(function(total, game){
  if(won(game)){
    return total + game.seattle-game.opponent;
  }
  return total;
}, 0);
console.log(winningPoints/gamesWon.length);


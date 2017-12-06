'use strict';


var userName = prompt('Thanks for visiting this page! What\'s your name?');
console.log('User\'s name:',userName);

alert('Welcome, ' + userName + '! We\'re going to play a guessing game. Get ready!');
/*
// first question
var userHomeYorN = prompt('Yes or No: I am from Seattle, Washington.');
userHomeYorN = userHomeYorN.toUpperCase();
console.log('Am I from Seattle? User answered:',userHomeYorN);

if (userHomeYorN === 'YES' || userHomeYorN === 'Y') {
  alert('That\'s correct, ' + userName + '. I am from Seattle.');
} else if (userHomeYorN === 'NO' || userHomeYorN === 'N') {
  alert('Not quite, ' + userName + '. I am indeed from Seattle.');
};

// second question
var userExercise = prompt('Yes or No: Running is my favorite form of exercise.');
userExercise = userExercise.toUpperCase();
console.log('Is running my favorite form of exercise? User answered: ' + userExercise);

if (userExercise === 'YES' || userExercise === 'Y') {
  alert('Not quite! My favorite form of exercise is actually weightlifting.');
} else if (userExercise === 'NO' || userExercise === 'N') {
  alert('Correct, my favorite form of exercise is actually weightlifting rather than running.');
};

// third question
var userKids = prompt('Yes or No: I have kids.');
userKids = userKids.toUpperCase();
console.log('Do I have kids? User answered:',userKids);

if (userKids === 'YES' || userKids === 'Y') {
  alert('Wrong! Kids are great, but I have a niece and nephew to keep me entertained instead.');
} else if (userKids === 'NO' || userKids === 'N') {
  alert('Correct, no kids for me. I\'m good.');
};

// fourth question
var userHasCats = prompt('Yes or No: I have cats at home.');
userHasCats = userHasCats.toUpperCase();
console.log('Does user have two cats? User answered:',userHasCats);

if (userHasCats === 'YES' || userHasCats === 'Y') {
  alert('Yes, ' + userName + ', I do have two cats. I promise I try not to be a crazy cat lady most of the time.');
} else if (userHasCats === 'NO' || userHasCats === 'N') {
  alert('Wrong! I adopted two cats last year.');
};

// fifth question
var userCareVolunteer = prompt('Yes or No: I volunteer virtually for a exotic animal sanctuary in Texas.');
userCareVolunteer = userCareVolunteer.toUpperCase();
console.log('Do I volunteer for CARE? User answered:',userCareVolunteer);

if (userCareVolunteer === 'YES' || userCareVolunteer === 'Y') {
  alert('Yes, I volunteer virtually for an animal sanctuary called CARE Rescue Texas. Although my volunteer days are probably over for a few months now.');
} else if (userCareVolunteer === 'NO' || userCareVolunteer === 'N') {
  alert('False! I volunteer virtually for an animal sanctuary called CARE Rescue Texas. Random, I know.');
};
*/
// sixth question that takes a numeric input to guess a number
var favoriteNumber;
var counter = 4;

while (counter > 0) {
  while (favoriteNumber !== 17) {
    favoriteNumber = parseInt(prompt('What is my favorite number?'));
    console.log('User guessed:',favoriteNumber);

    if (favoriteNumber < 17) {
      counter--;
      alert('Sorry, too low! You have ' + counter + ' guesses left.');
    } else if (favoriteNumber > 17) {
      alert('Sorry, too high!');
      counter--;
    } else if (favoriteNumber === 17) {
      alert('You are correct!');
      break;
    } else {
      alert('That\'s not exactly a number, ' + userName + '.');
      counter--;
    };
  };
  console.log('User guessed this many times:',counter);
};






























//foo

'use strict';

var userName = prompt('Thanks for visiting this page! What\'s your name?');
console.log('User\'s name:',userName);

alert('Welcome, ' + userName + '! We\'re going to play a guessing game. Get ready!');

// page tally for correct answers
var correctAnswer = 0;

// first question
var userHomeYorN = prompt('Yes or No: I am from Seattle, Washington.');
userHomeYorN = userHomeYorN.toUpperCase();
console.log('Am I from Seattle? User answered:',userHomeYorN);

if (userHomeYorN === 'YES' || userHomeYorN === 'Y') {
  alert('That\'s correct, ' + userName + '. I am from Seattle.');
  correctAnswer++;
  console.log('User has this many correct answers:',correctAnswer);
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
  correctAnswer++;
  console.log('User has this many correct answers:',correctAnswer);
};

// third question
var userKids = prompt('Yes or No: I have kids.');
userKids = userKids.toUpperCase();
console.log('Do I have kids? User answered:',userKids);

if (userKids === 'YES' || userKids === 'Y') {
  alert('Wrong! Kids are great, but I have a niece and nephew to keep me entertained instead.');
} else if (userKids === 'NO' || userKids === 'N') {
  alert('Correct, no kids for me. I\'m good.');
  correctAnswer++;
  console.log('User has this many correct answers:',correctAnswer);
};

// fourth question
var userHasCats = prompt('Yes or No: I have cats at home.');
userHasCats = userHasCats.toUpperCase();
console.log('Does user have two cats? User answered:',userHasCats);

if (userHasCats === 'YES' || userHasCats === 'Y') {
  alert('Yes, ' + userName + ', I do have two cats. I promise I try not to be a crazy cat lady most of the time.');
  correctAnswer++;
  console.log('User has this many correct answers:',correctAnswer);
} else if (userHasCats === 'NO' || userHasCats === 'N') {
  alert('Wrong! I adopted two cats last year.');
};

// fifth question
var userCareVolunteer = prompt('Yes or No: I volunteer virtually for a exotic animal sanctuary in Texas.');
userCareVolunteer = userCareVolunteer.toUpperCase();
console.log('Do I volunteer for CARE? User answered:',userCareVolunteer);

if (userCareVolunteer === 'YES' || userCareVolunteer === 'Y') {
  alert('Yes, I volunteer virtually for an animal sanctuary called CARE Rescue Texas. Although my volunteer days are probably over for a few months now.');
  correctAnswer++;
  console.log('User has this many correct answers:',correctAnswer);
} else if (userCareVolunteer === 'NO' || userCareVolunteer === 'N') {
  alert('False! I volunteer virtually for an animal sanctuary called CARE Rescue Texas. Random, I know.');
};

// sixth question that takes a numeric input to guess a number
var favoriteNumber;
var counter = 1;

while (counter <= 4) {
  while (favoriteNumber !== 17) {
    favoriteNumber = parseInt(prompt('What is my favorite number?'));
    console.log('User guessed:',favoriteNumber);

    if (favoriteNumber < 17) {
      if (counter === 4) {
        alert('You have no more tries!');
        break;
      } else {
        counter++;
      }
      alert('Sorry, too low! You have ' + (5 - counter) + ' more tries.');
    } else if (favoriteNumber > 17) {
      if (counter === 4) {
        alert('You have no more tries!');
        break;
      } else {
        counter++;
      }
      alert('Sorry, too high! You have ' + (5 - counter) + ' more tries.');
    } else if (favoriteNumber === 17) {
      alert('You are correct! 17 is my favorite number.');
      correctAnswer++;
      console.log('User has this many correct answers:',correctAnswer);
      break;
    } else {
      alert('That\'s not exactly a number, ' + userName + '.');
      if (counter === 4) {
        alert('You have no more tries!');
        break;
      } else {
        counter++;
      }
    };
  }
  console.log('User guessed this many times:',counter);
  break;
};

// seventh question that has multiple possible correct answers in an array

var placesVisited = ['japan','france','norway','canada','italy','mexico'];
var flag;
var placesCounter = 1;

while (placesCounter <= 7) {
  var answer = prompt('Can you guess a country I\'ve visted?');
  console.log('User entered the following country:',answer);

  // Question: How do I do this without putting everything to lowercase?

  for(var i = 0; i < placesVisited.length; i++) {
    if (answer.toLowerCase() === placesVisited[i].toLowerCase()) {
      alert('Yes, I have visited that country! In fact, I have visited ' + placesVisited[0] + ', ' + placesVisited[1] + ', ' + placesVisited[2] + ', ' + placesVisited[3] + ', ' + placesVisited[4] + ', and ' + placesVisited[5] + '.');
      flag = true;
      correctAnswer++;
      console.log('User has this many correct answers:',correctAnswer);
      break;
    }
  }
  if (flag) {
    break;
  }
  if(!flag && placesCounter < 7) {
    placesCounter++;
    alert('No, I have not visited that country. You have ' + (8 - placesCounter) + ' more tries.');
  } else if (!flag && placesCounter === 7) {
    alert('You have no more tries! But just so you know, I have visited ' + placesVisited[0] + ', ' + placesVisited[1] + ', ' + placesVisited[2] + ', ' + placesVisited[3] + ', ' + placesVisited[4] + ', and ' + placesVisited[5] + '.');
    break;
  }
}

// Tally of correct answers
if (correctAnswer === 7){
  alert(userName + ', you got 7 out of 7 questions correct! Good job!');
} else {
  alert(userName + ', you got ' + correctAnswer + ' out of 7 questions correct. Better luck next time.');
}






















//foo

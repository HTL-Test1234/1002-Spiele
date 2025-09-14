let numberToGuess = Math.round(Math.random() *100);
let Tries = 0;

function guessTheNumber() {
    

    Tries = Tries + 1;
    displayTries.innerHTML = 'Versuche: ' + Tries;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen!😊';

    }
   if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl Ist Kleiner!👌';

    }
   if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl Ist Größer!🙌';

    }
   myNumber.value = '';
}

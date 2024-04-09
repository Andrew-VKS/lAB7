let attempts = 5;
let randomNumber = generateRandomNumber(); 

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function guessNumber() {
  let userNumber = prompt("Угадайте число от 1 до 10. У вас есть " + attempts + " попыток.");

  if (userNumber === null) {
    alert("ФИНИШ! ИГРА ОКОНЧЕНА.");
    return;
  }

  userNumber = Number(userNumber);

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
    alert("ФАТАЛЬНАЯ ОШИБКА, ПОЖАЛУЙСТА, ВВЕДИТЕ ЧИСЛО.");
    guessNumber();
  } else {
    if (userNumber === randomNumber) {
      alert("ПОБЕДА! ЧИСЛО УГАДАНО!.");
      if (confirm("ПОВТОРИТЬ?")) {
        randomNumber = generateRandomNumber(); 
        attempts = 5;
        guessNumber();
      }
    } else {
      attempts--;
      if (attempts === 0) {
        alert("ПОРАЖЕНИЕ. ПОБЕДНЫЙ ВАРИАНТ: " + randomNumber + ".");
        if (confirm("ПОВТОРИТЬ?")) {
          randomNumber = generateRandomNumber(); 
          attempts = 5;
          guessNumber();
        }
      } else {
        let message = userNumber > randomNumber ? "МЕНЬШЕ" : "БОЛЬШЕ";
        alert("НЕВЕРНО. ПОБЕДНОЕ ЧИСЛО " + message + ".");
        guessNumber();
      }
    }
  }
}

guessNumber();

        
        
        
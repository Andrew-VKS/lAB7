let attempts = 5;
let randomNumber = generateRandomNumber(); // Вынесем генерацию случайного числа в отдельную функцию

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function guessNumber() {
  let userNumber = prompt("Угадайте число от 1 до 10. У вас есть " + attempts + " попыток.");

  if (userNumber === null) {
    alert("Игра окончена.");
    return;
  }

  userNumber = Number(userNumber);

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
    alert("Ошибка ввода. Попробуйте снова.");
    guessNumber();
  } else {
    if (userNumber === randomNumber) {
      alert("Поздравляем! Вы угадали число.");
      if (confirm("Хотите сыграть еще раз?")) {
        randomNumber = generateRandomNumber(); // Генерируем новое число
        attempts = 5;
        guessNumber();
      }
    } else {
      attempts--;
      if (attempts === 0) {
        alert("Вы проиграли. Загаданное число было " + randomNumber + ".");
        if (confirm("Хотите сыграть еще раз?")) {
          randomNumber = generateRandomNumber(); // Генерируем новое число
          attempts = 5;
          guessNumber();
        }
      } else {
        let message = userNumber > randomNumber ? "Меньше" : "Больше";
        alert("Неверно. Загаданное число " + message + ".");
        guessNumber();
      }
    }
  }
}

guessNumber();

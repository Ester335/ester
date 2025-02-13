let randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    let attempts = 0;

    function checkGuess() {
      const guess = parseInt(document.getElementById('guess').value);
      const messageElement = document.getElementById('message');
      const resultElement = document.getElementById('result');
      attempts++;

      if (guess === randomNumber) {
        resultElement.innerHTML = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
        messageElement.innerHTML = '';
      } else if (guess < randomNumber) {
        messageElement.innerHTML = 'Tente um número maior!';
      } else {
        messageElement.innerHTML = 'Tente um número menor!';
      }
    }
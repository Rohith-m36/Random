
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; 
    document.getElementById('diceResult').textContent = randomNumber; 
}

document.getElementById('rollDiceBtn').addEventListener('click', rollDice);

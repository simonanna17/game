const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
  const computerChoice = computerPlay();
  
  if (playerChoice === computerChoice) {
    document.getElementById('result').textContent = 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    document.getElementById('result').textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    document.getElementById('result').textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
const choices = ['rock', 'paper', 'scissors']

class rpsChoice {
    constructor(){

    }

    static play(playerChoice) {
        if (!choices.includes(playerChoice)) {
            return { error: 'Invalid choice. Please choose rock, paper, or scissors.' };
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = rpsChoice.determineWinner(playerChoice, computerChoice);

        return {
            playerChoice,
            computerChoice,
            result
        };
    }

    static determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        }
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }
        return 'You lose!';
    }
}

module.exports = rpsChoice
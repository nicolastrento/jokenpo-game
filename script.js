
const result = document.querySelector('.result')
const machineResult = document.querySelector('.machine-result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = ['pedra', 'papel', 'tesoura']
  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}

const playTheGame = (human, machine) => {

  console.log('Humano: ' + human + 'machine: ' + machine)

  machineResult.innerHTML = 'O adversário jogou ' + machine // Exibe a jogada da máquina na tela

  if (human === machine) {
    result.innerHTML = 'Deu Empate!'
  } else if (
    human === 'papel' && machine === 'pedra' || 
    human === 'pedra' && machine === 'tesoura' ||
    human === 'tesoura' && machine === 'papel'
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = 'Você Ganhou!'
    machine-result
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = 'Você Perdeu!'
    machine-result
  }
}

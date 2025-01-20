
const result = document.querySelector('.result')
const machineResult = document.querySelector('.machine-result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
  PEDRA: 'pedra',
  PAPEL: 'papel',
  TESOURA: 'tesoura'
}

const playHuman = (humanChoice) => {

  playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
  const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}

const playTheGame = (human, machine) => {

  console.log('Humano: ' + human + 'machine: ' + machine)

  machineResult.innerHTML = 'O adversário jogou ' + machine // Exibe a jogada da máquina na tela

  if (human === machine) {
    result.innerHTML = 'Deu Empate!'
  } else if (
    human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA || 
    human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA ||
    human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL
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

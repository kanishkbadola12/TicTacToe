import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const GAME_DATA = [
  { id: 0, isCellClicked: false, player: '' },
  { id: 1, isCellClicked: false, player: '' },
  { id: 2, isCellClicked: false, player: '' },
  { id: 3, isCellClicked: false, player: '' },
  { id: 4, isCellClicked: false, player: '' },
  { id: 5, isCellClicked: false, player: '' },
  { id: 6, isCellClicked: false, player: '' },
  { id: 7, isCellClicked: false, player: '' },
  { id: 8, isCellClicked: false, player: '' },
];

export default class GameService extends Service {
  @tracked currentPlayer = 'X';
  @tracked winningPlayer = '';
  @tracked isMatchOver = false;
  @tracked showPlayerSelection = true;
  @tracked gameData = GAME_DATA;

  updateGameData(id) {
    const cellIndex = this.gameData.findIndex((cell) => cell.id === id);

    const updatedCell = {
      ...this.gameData[cellIndex],
      isCellClicked: true,
      player: this.currentPlayer,
    };
    
    const updatedGameData = [
      ...this.gameData.slice(0, cellIndex),
      updatedCell,
      ...this.gameData.slice(cellIndex + 1),
    ];

    const nextPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.setCurrentPlayer(nextPlayer);

    this.gameData = updatedGameData;
  }

  resetGame() {
    this.gameData = [...GAME_DATA];
    this.showPlayerSelection = true;
    this.isMatchOver = false;
    this.currentPlayer = 'X';
  }

  getGameData() {
    return this.gameData;
  }

  setWinningPlayer(player) {
    this.winningPlayer = player;
  }

  setCurrentPlayer(player) {
    this.currentPlayer = player;
  }

  setIsMatchOver() {
    this.isMatchOver = true;
  }

  setPlayerSelection(isVisible) {
    this.showPlayerSelection = isVisible;
  }
}

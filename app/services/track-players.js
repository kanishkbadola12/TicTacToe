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

export default class TrackPlayersService extends Service {
  @tracked currentPlayer = 'X';
  @tracked winningPlayer = '';
  @tracked hasMatchStarted = false;
  @tracked isMatchOver = false;
  @tracked gameData = [...GAME_DATA];
  initialGameData = [...GAME_DATA];

  updateCell(id) {
    this.gameData = this.gameData.map((cell) => {
      if (cell.id === id) {
        const updateCell = {
          ...cell,
          isCellClicked: true,
          player: this.currentPlayer,
        };

        const nextPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.setCurrentPlayer(nextPlayer);
        return updateCell;
      }

      return cell;
    });
  }

  resetGameData() {
    this.showPlayerSelection = true;
    this.gameData = [...this.initialGameData];
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

  startMatch() {
    this.hasMatchStarted = true;
  }
}

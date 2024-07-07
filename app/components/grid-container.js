import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class GridContainerComponent extends Component {
  @service('track-players') playerService;

  checkRows() {
    for (const row of this.playerService.rows) {
      const rowWin =
        row.every((cell) => this.playerService.GAME_DATA[cell].player === 'X') ||
        row.every((cell) => this.playerService.GAME_DATA[cell].player === 'O');

      if (rowWin) {
        return true;
      }
    }

    return false;
  }

  checkColumns() {
    for (const col of this.playerService.columns) {
      const colWin =
        col.every((cell) => this.playerService.GAME_DATA[cell].player === 'X') ||
        col.every((cell) => this.playerService.GAME_DATA[cell].player === 'O');

      if (colWin) {
        return true;
      }
    }

    return false;
  }

  checkDiagonals() {
    for (const diagonal of this.playerService.diagonals) {
      const diagonalWin =
        diagonal.every((cell) => this.playerService.GAME_DATA[cell].player === 'X') ||
        diagonal.every((cell) => this.playerService.GAME_DATA[cell].player === 'O');

      if (diagonalWin) {
        return true;
      }
    }

    return false;
  }

  checkMatchState = () => {
    const isEveryCellClicked = this.playerService.GAME_DATA.every(
      (cell) => cell.isCellClicked,
    );
    this.isMatchWon =
      this.checkRows() || this.checkColumns() || this.checkDiagonals();

    if (this.isMatchWon) {
      this.playerService.setWinningPlayer(this.playerService.currentPlayer);
      this.playerService.setIsMatchOver(true);
      return;
    }

    if (isEveryCellClicked && !this.isMatchWon) {
      this.playerService.setWinningPlayer('none');
      this.playerService.setIsMatchOver(true);
    }
  };

  get gridSize() {
    return this.playerService.GAME_DATA;
  }

  @action
  updateGameData(id) {
    const cell = this.playerService.GAME_DATA.find((cell) => cell.id === id);
    cell.isCellClicked = true;
    cell.player = this.playerService.currentPlayer;

    this.checkMatchState();
  }
}

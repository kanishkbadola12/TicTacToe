import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class GridContainerComponent extends Component {
  @service('track-players') playerService;

  rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  diagonals = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  checkRows(gameData) {
    for (const row of this.rows) {
      const rowWin =
        row.every((cell) => gameData[cell].player === 'X') ||
        row.every((cell) => gameData[cell].player === 'O');

      if (rowWin) {
        return true;
      }
    }

    return false;
  }

  checkColumns(gameData) {
    for (const col of this.columns) {
      const colWin =
        col.every((cell) => gameData[cell].player === 'X') ||
        col.every((cell) => gameData[cell].player === 'O');

      if (colWin) {
        return true;
      }
    }

    return false;
  }

  checkDiagonals(gameData) {
    for (const diagonal of this.diagonals) {
      const diagonalWin =
        diagonal.every((cell) => gameData[cell].player === 'X') ||
        diagonal.every((cell) => gameData[cell].player === 'O');

      if (diagonalWin) {
        return true;
      }
    }

    return false;
  }

  checkMatchState = () => {
    const gameData = this.playerService.getGameData();
    const isEveryCellClicked = gameData.every(
      (cell) => cell.isCellClicked,
    );
    this.isMatchWon =
      this.checkRows(gameData) || this.checkColumns(gameData) || this.checkDiagonals(gameData);

    if (this.isMatchWon) {
      const winningPlayer = this.playerService.currentPlayer === 'X' ? 'O' : 'X';
      this.playerService.setWinningPlayer(winningPlayer);
      this.playerService.setIsMatchOver(true);
      return;
    }

    if (isEveryCellClicked && !this.isMatchWon) {
      this.playerService.setWinningPlayer('none');
      this.playerService.setIsMatchOver(true);
    }
  };

  @action
  updatePlayer(id) {
    this.playerService.updateCell(id); 
    this.checkMatchState();
  }
}

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TrackPlayersService extends Service {
  @tracked currentPlayer = 'X';
  @tracked winningPlayer = '';
  @tracked isMatchStarted = false;
  @tracked isMatchOver = false;

  @tracked
  GAME_DATA = [
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
  
  getWinningPlayer() {
    return this.winningPlayer;
  }

  setWinningPlayer(player) {
    if(player === 'none') {
        this.winningPlayer = player;
        return;
    }
    
    this.winningPlayer = player === 'X' ? 'O' : 'X';
  }

  setCurrentPlayer(player) {
    this.currentPlayer = player;
  }

  setIsMatchOver() {
    this.isMatchOver = true;
  }

  setIsMatchStarted() {
    this.isMatchStarted = true;
  }
}

import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import animateCell from '../helpers/animateCell';

export default class FooterComponent extends Component {
  @service('game-service') gameService;

  get winner() {
    const winner = this.gameService.winningPlayer;
    if (winner !== '' && winner !== 'none') {
      return `Player ${winner} has won the game! 🎉`;
    } else {
      return 'Match Tied 😯';
    }
  }
  @action
  resetGame() {
    this.gameService.resetGame();
    animateCell('reset-button');
  }
}

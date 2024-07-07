import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class GridItemComponent extends Component {
  @service('track-players') playerService;
  @tracked showPlayer = false;
  @tracked player;

  disableCell = (id) => {
    const gridItem = document.getElementById(id);

    gridItem.classList.add('beat');
    gridItem.classList.add('disable');

    gridItem.addEventListener('animationend', () => {
      gridItem.classList.remove('beat');
    });
  };

  @action
  updatePlayer(id) {
    this.showPlayer = true;
    this.player = this.playerService.currentPlayer;
    const nextPlayer = this.playerService.currentPlayer === 'X' ? 'O' : 'X'
    this.playerService.setCurrentPlayer(nextPlayer);
    this.args.updateGameData(id);
    if(!this.playerService.isMatchStarted) {
      this.playerService.setIsMatchStarted(true);
    }
    this.disableCell(id);
  }
}

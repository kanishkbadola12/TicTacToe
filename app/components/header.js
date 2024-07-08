import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service('game-service') gameService;

  @action
  updatePlayer(selectedPlayer) {
    this.gameService.setCurrentPlayer(selectedPlayer);
  }
}

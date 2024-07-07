import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';


export default class HeaderComponent extends Component {
  @service('track-players') playerService;

  @action
  updatePlayer(selectedPlayer) {
    this.playerService.setCurrentPlayer(selectedPlayer);
  }
}

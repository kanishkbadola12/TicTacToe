import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import animateCell from '../../helpers/animateCell';

export default class GridItemComponent extends Component {
  @service('game-service') gameService;
  @tracked item = this.args.item;

  get isClickedOrMatchOver() {
    return this.item.isCellClicked || this.gameService.isMatchOver;
  }

  @action
  updatePlayer() {
    this.gameService.setPlayerSelection(false);
    this.args.updatePlayer(this.args.item.id);
    animateCell(this.args.item.id);
  }
}

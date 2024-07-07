import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class GridItemComponent extends Component {
  @service('track-players') playerService;
  @tracked item = this.args.item;

  disableCell = (id) => {
    const gridItem = document.getElementById(id);

    gridItem.classList.add('beat');
    gridItem.classList.add('disable');

    gridItem.addEventListener('animationend', () => {
      gridItem.classList.remove('beat');
    });
  };

  get
  isClickedOrMatchOver() {
    return this.item.isCellClicked || this.playerService.isMatchOver;
  }

  @action
  updatePlayer() {
    if(!this.playerService.hasMatchStarted) {
      this.playerService.startMatch();
    }
    this.args.updatePlayer(this.args.item.id);
  }
}

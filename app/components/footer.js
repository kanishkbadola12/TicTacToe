import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FooterComponent extends Component {
  @service('track-players') playerService;

  @action
  resetState() {
    this.playerService.resetGameData();
    const resetButton = document.getElementById('reset-button');

    resetButton.classList.add('beat');
    resetButton.classList.add('disable');

    resetButton.addEventListener('animationend', () => {
      resetButton.classList.remove('beat');
    });
  }
}

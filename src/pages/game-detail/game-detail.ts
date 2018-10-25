import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesProvider } from '../../providers/games/games';

/**
 * Generated class for the GameDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public GamesService : GamesProvider) {
  }

  ionViewDidLoad() {
    this.GamesService.getGame();
  }

}

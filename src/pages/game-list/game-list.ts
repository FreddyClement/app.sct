import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameDetailPage} from "../game-detail/game-detail";

/**
 * Generated class for the GameListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.allGame();
  }

  gameDetail(){
    this.navCtrl.push(GameDetailPage);
  }

  allGame(){
    console.log("yo");
  }
}

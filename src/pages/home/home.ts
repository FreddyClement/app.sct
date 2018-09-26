import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameListPage} from "../game-list/game-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  findGame(){
   this.navCtrl.push(GameListPage);
    //console.log(this);
  }
}

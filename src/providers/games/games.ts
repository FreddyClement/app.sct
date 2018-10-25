/*import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';
import { Game } from '../../models/game-model'

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let game1 = new Game (1,"barbue",12,"ploufe","du texte",'Alcool');

@Injectable()
export class GamesProvider {

  constructor(/*public http: HttpClient*/) {

  }


  getGame(){
    console.log(game1);
  }
}

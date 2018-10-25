/*import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';
import  { Categorie } from "../../models/categorie-model";

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  use HttpClient for load JSON from server ( api PHP )


*/

let Alcool = new Categorie('Alcool','../../assets/imgs/bleu.png');
let JeuxCarte = new Categorie('Jeux de cartes', '../../assets/imgs/rouge.png');
let Sport = new Categorie('Sports', '../../assets/imgs/jaune.png');

@Injectable()
export class CategoriesProvider {



    categories :any = [];


  constructor(/*public http: HttpClient*/) {


  }


    loadCategories () {
        this.categories = [
            {name : Alcool.getName(), img : Alcool.getImage()},
            {name:JeuxCarte.getName(), img : JeuxCarte.getImage()},
            {name : Sport.getName(), img : Sport.getImage()}
        ];

    }


}

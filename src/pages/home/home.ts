import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameListPage } from "../game-list/game-list";
import { CategoriesProvider } from "../../providers/categories/categories";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public CategoriesService : CategoriesProvider) {

  }

  ionViewDidLoad(){
    this.CategoriesService.loadCategories();
  }

  findGame(categprie){



   this.navCtrl.push(GameListPage,categprie);
  }



  //Methode getCategories qui me permet d'afficher mes catégorie de jeux
}

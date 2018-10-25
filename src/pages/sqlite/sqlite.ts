import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SqlitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db' ;

@IonicPage()
@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqlitePage {

  private db : SQLiteObject;


  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {

    this.createDatabaseFile();

  }

  private createDatabaseFile(): void {

    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
          console.log("Bdd créée !");
          this.db = db;
          this.createTables();
      })
      .catch(e => console.log(e));

  }

  private createTables(): void{

    var sql = "create table";//commande sql

    this.db.executeSql(sql)

      .then(() => {

        this.db.executeSql('create table danceMoves(name VARCHAR(32))', )
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

      })

      .catch(e => console.log(e));

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SqlitePage');
  }

}

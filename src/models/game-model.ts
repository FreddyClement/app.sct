import { Categorie} from "./categorie-model";


export class Game {

    private id : number;
    private name : string;
    private nbPlayer : number;
    private image : string;
    private rules : string;
    private categorieGame : Categorie;



    constructor (id, name, nbPlayer, image, rules, categorieGame){

        this.id = id;
        this.name = name;
        this.nbPlayer = nbPlayer;
        this.image = image;
        this.rules = rules;
        this.categorieGame = categorieGame;

    }

    getId (){
        return this.id;
    }

    getName (){
        return this.name;
    }
    getNbPlayer (){
        return this.nbPlayer;
    }

    getImage(){
        return this.image;
    }

    getRules (){
        return this.rules;
    }

    getCategoriesGame (){
        return this.categorieGame.getName();
    }


}
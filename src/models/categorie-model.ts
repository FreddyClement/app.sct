
export class Categorie {


    protected name : string;
    protected image : string;



    constructor (name, image){


        this.name = name;
        this.image = image;

    }


    getName (){
        return this.name;
    }


    getImage(){
        return this.image;
    }




}
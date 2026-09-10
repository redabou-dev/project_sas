let livre = {
    titre: "Surrounded by idiots",
    auteur : "thomas irikson",
    anne: 2014,
    fich(){
        console.log(this.titre + " " + "de " + this.auteur + " "+ this.anne);
    }
}
livre.fich()
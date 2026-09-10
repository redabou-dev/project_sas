let rectangle = {
    largeur: 12,
    longeur: 14,
    calcullair(rectangle){
        return rectangle.largeur * rectangle.longeur
    }
}
console.log("lair de le rectangle est : ", rectangle.calcullair(rectangle))
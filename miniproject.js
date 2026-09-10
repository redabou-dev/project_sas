const prompt = require('prompt-sync')();

let books = []
let b1 = {
    titre:"hhh",
    auteur:"fdregt",
    price:15,
    quantity:29,
}
books.push(b1)
let b2 = {
    titre:"redfer",
    auteur:"redfer",
    price:12,
    quantity:12,
}
books.push(b2)
let b3 = {
    titre:"redfer",
    auteur:"redfer",
    price:12,
    quantity:12,
}
books.push(b3)
let b4 = {
    titre:"redfer",
    auteur:"redfer",
    price:12,
    quantity:12,
}
books.push(b4)
let b5 = {
    titre:"reda",
    auteur:"boukrim",
    price:17,
    quantity:10,
}
books.push(b5)
let key;
while (key !== 6) {
    console.log("tap 1 pour : add book")
    console.log("tap 2 pour : show all book")
    console.log("tap 3 pour : search book")
    console.log("tap 4 pour : remov book")
    console.log("tap 5 pour : le nombres des book")
    console.log("tap 6 pour : Quiter")
    key = Number(prompt("entrer un nomber : "))
    
    switch (key) 
    {
    case 1:
        function addbook(){
        let titre = prompt("entrer votre titre de livre : ")
        let auteur = prompt("entrer auteur de votre livre")
        let price = Number(prompt("entrer votre price de votre livre : "))
        let quantity = Number(prompt("entrer le quantity de votre livre"))
        let book = {
            titre:titre,
            auteur:auteur,
            price:price,
            quantity:quantity,
        }
        return book;

}
books.push(addbook())
console.log("addition livr reusie")
        break;
        case 2:
    console.log(books)
    break;
    case 3:
        let target = prompt("entrer le titre de votre livre  : ")
        function search(books,target){
            for(let i=0;i<books.length;i++){
                if(books[i].titre === target){
                return books[i]
            }
            }
            return -1
        }
        let res = search(books,target)
        if(res !== -1){
            console.log("titre est : ",res.titre)
            console.log("titre est : ",res.auteur)
            console.log("titre est : ",res.price)
            console.log("titre est : ",res.quantity)
        }else{
            console.log("livre introvable")
        }

    break;
    case 4:
        let suprime = prompt("entrer le titre de le livre : ");
        function remove_book(books,suprime){
            for(let i =0;i<books.length;i++){
                if(books[i].titre === suprime){
                    books.splice(i,1)
                    return 1;
                }
            }
            return -1;
        }
        let result = remove_book(books,suprime)
        if(result !== -1){
            console.log("book removed : ")
        }else{
            console.log("book do no exist : ")
        }


        break;
        case 5:
            let totale = 0;
            function totalquantity(){
                for(let book of books){
                    totale += book.quantity
                }
                return totale
            }
            console.log("la quantity de touts les livres est :  ",totalquantity())
            break;
    case 6:
        console.log("au revoire")

    default:
        break;
}
}
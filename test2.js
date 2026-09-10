// const info = {
//     nom:"boukrim",
//     prenom:"reda",
//     age: 20,
    
//     information(){
//         console.log(this.nom +" " + this.prenom+" "+ this.age+" "+ this.reyn)
//     }
// } 
// info.reyn = "xray"
// delete info.nom
// info.information()
// Source - https://stackoverflow.com/q/29885220
// Posted by Daniel Herr, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-07, License - CC BY-SA 3.0
// fo in statement
// const obj = {
//     name: "John ",
//     gender:"male ",
//     age:25
// }
// let str="";
// let i;
// for (i in obj){
//     str = obj[i]
// console.log(str)
// }
// const user = {
//   name: "Yassine",
//   age: 25,
//   city: "Casablanca"
// };

// // for (let key in user) {
// //   console.log(key);
// // }

// for (let key in user) {
//   console.log(key, user[key]);
// }
// const prompt = require('prompt-sync')();
// let name = prompt("entrer votre string : ")
// let count = 0
// for(let counte of name ){
//     count++
// }
// console.log("le nombre des characteres est ",count)
// buble sort
// function order(num){
//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]>num[j]){
//                 let temp = num[i]
//                 num[i] = num[j]
//                 num[j] = temp
//             }
//         }
//     }
//     console.log(num)
// }
//  order([12,1,0,47,6,4,58])

// const prompt = require('prompt-sync')();
// let longeur = Number(prompt("entrer la longeur de votre tableau : "))
// let list =  [];
// for(i=0;i<longeur;i++){
//     list[i] = Number(prompt("entrer votre nombers : "))
// }
// let target = Number(prompt("entrer votre target : "))
// function linairesearch(list,target){
//    for(let i = 0; i<list.length;i++){
//      if(list[i] === target){
//         return[i]
//     }
//    }
//     return -1;
// }
// let res = linairesearch(list,target);
// if(res !== -1){
//     console.log(`we found ${target} a lindex ${res}`)
// }else{
//     console.log(`${target} do not exist`)
// }
// const prompt = require('prompt-sync')();
// let alpha = ["a","b","c"]
// let target = prompt("entrer votre target : ")
// function recherch(alpha,target){
//     for(i=0;i<alpha.length;i++){
//         if(alpha[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }
// let res = recherch(alpha,target)
// if(res !== -1){
//     console.log(`we found ${target} a ${res}`)
// }else{
//     console.log(`${target} do not exist `)
// }
   if(trajet !== -1 ){
                    console.log(`votre choix est ${trajet.departure} vers ${trajet.destination}`)
                    console.log("depart est  : ",trajet.departure)
                    console.log("destination : ",trajet.destination)
                    console.log("depar_time : ",trajet.departureTime)
                    console.log("arriv_time : ",trajet.arrivalTime)
                    console.log("price est : ",trajet.price)
                    console.log("available_Seats : ",trajet.availableSeats)
                }


                                if(trajet.availableSeats >= 1){
                    trajet.availableSeats - 1
                }else if(trajet !== -1 ){
                    console.log(`votre choix est ${trajet.departure} vers ${trajet.destination}`)
                    console.log("depart est  : ",trajet.departure)
                    console.log("destination : ",trajet.destination)
                    console.log("depar_time : ",trajet.departureTime)
                    console.log("arriv_time : ",trajet.arrivalTime)
                    console.log("price est : ",trajet.price)
                    console.log("available_Seats : ",trajet.availableSeats)
                }
                
                else{
                    console.log("trajet inrouvable:")
                }
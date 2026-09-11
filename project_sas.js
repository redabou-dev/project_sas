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
//    if(trajet !== -1 ){
//                     console.log(`votre choix est ${trajet.departure} vers ${trajet.destination}`)
//                     console.log("depart est  : ",trajet.departure)
//                     console.log("destination : ",trajet.destination)
//                     console.log("depar_time : ",trajet.departureTime)
//                     console.log("arriv_time : ",trajet.arrivalTime)
//                     console.log("price est : ",trajet.price)
//                     console.log("available_Seats : ",trajet.availableSeats)
//                 }


//                                 if(trajet.availableSeats >= 1){
//                     trajet.availableSeats - 1
//                 }else if(trajet !== -1 ){
//                     console.log(`votre choix est ${trajet.departure} vers ${trajet.destination}`)
//                     console.log("depart est  : ",trajet.departure)
//                     console.log("destination : ",trajet.destination)
//                     console.log("depar_time : ",trajet.departureTime)
//                     console.log("arriv_time : ",trajet.arrivalTime)
//                     console.log("price est : ",trajet.price)
//                     console.log("available_Seats : ",trajet.availableSeats)
//                 }
                
//                 else{
//                     console.log("trajet inrouvable:")
//                 }


const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats:50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [
    {
        id: 1,
        passengerName: "Youssef Amrani",
        tripId: 1,
        seatNumber: 1,
        price: 25
    },
    {
        id: 2,
        passengerName: "Sara Benali",
        tripId: 2,
        seatNumber: 1,
        price: 90
    },
    {
        id: 3,
        passengerName: "Omar El Fassi",
        tripId: 3,
        seatNumber: 1,
        price: 140
    },
    {
        id: 4,
        passengerName: "Nour El Houda",
        tripId: 1,
        seatNumber: 2,
        price: 25
    },
    {
        id: 5,
        passengerName: "Adam Alaoui",
        tripId:2,
        seatNumber: 2,
        price: 90
    },
    {
        id: 6,
        passengerName: "Salma Idrissi",
        tripId: 3,
        seatNumber: 2,
        price: 140
    },
    {
        id: 7,
        passengerName: "Mehdi Tazi",
        tripId: 1,
        seatNumber: 3,
        price: 25
    },
    {
        id: 8,
        passengerName: "Imane Chraibi",
        tripId: 2,
        seatNumber:3,
        price: 90
    },
    {
        id: 9,
        passengerName: "Anas Berrada",
        tripId: 3,
        seatNumber: 3,
        price: 140
    },
    {
        id: 10,
        passengerName: "Lina Ouazzani",
        tripId: 1,
        seatNumber: 4,
        price: 25
    },
];

let nextTicketId = 1
for(let i = 0;i<tickets.length;i++){
    if(tickets[i].id >= nextTicketId){
        nextTicketId = tickets[i].id + 1
    }
    }
    for(i=0;i<trips.length;i++){
        let soldseats = 0;
        for(let j = 0;j<tickets.length;j++){
            if(tickets[j].tripId === trips[i].id){
                soldseats ++
            }
        }
        trips[i].availableSeats -= soldseats
    }


function findTripById(tripsList, tripId) {
    for (let i = 0; i < tripsList.length; i++) {
        if (tripsList[i].id === tripId) {
            return tripsList[i];
        }
    }
    return -1;
}

function findTicketsByPassenger(ticketsList, passengerName) {
    let result = [];
    for (let i = 0; i < ticketsList.length; i++) {
        if (ticketsList[i].passengerName.toLowerCase() === passengerName.toLowerCase()) {
            result.push(ticketsList[i]);
        }
    }
    return result;
}
function findAvailableSeat(ticketsList, tripId) {
    let seatNumber = 1;

    while (true) {
        let seatTaken = false;

        for (let i = 0; i < ticketsList.length; i++) {
            if (
                ticketsList[i].tripId === tripId &&
                ticketsList[i].seatNumber === seatNumber
            ) {
                seatTaken = true;
                break;
            }
        }

        if (seatTaken === false) {
            return seatNumber;
        }

        seatNumber++;
    }
}



let userChoice = -1;

while (userChoice !== 0) {
    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. tickets vendus")
    console.log("0. Quitter");

    userChoice = Number(prompt("Votre choix : "));

    switch (userChoice) {

        case 1: {
            console.log("=== TRAJETS DISPONIBLES ===");
            for (let i = 0; i < trips.length; i++) {
                console.log(`#${trips[i].id} ${trips[i].departure} → ${trips[i].destination}`);
                console.log(`Départ : ${trips[i].departureTime}`);
                console.log(`Arrivée : ${trips[i].arrivalTime}`);
                console.log(`Prix : ${trips[i].price} DH`);
                console.log(`Places disponibles : ${trips[i].availableSeats}`);
                console.log("-----------------------------");
            }
            break;
        }

        case 2: {
            let passengerName = prompt("Nom du passager : ");
            let tripId = Number(prompt("Identifiant du trajet : "));

            let selectedTrip = findTripById(trips, tripId);

            if (selectedTrip === -1) {
                console.log("Trajet introuvable.");
                // When user enter 3 function return object of trip 3 with all propriete 
            } else if (selectedTrip.availableSeats === 0) {
                console.log("Train complet.");
            } else {
                let seatNumber = findAvailableSeat(tickets, selectedTrip.id);
                    // newTicket its object when we stock the new ticket
                let newTicket = {
                    // newtTicketId is number of ticket that user buy it if user buy new ticket her number is 1 if buy again number of ticket it well be 2
                    id: nextTicketId,
                    passengerName: passengerName,
                    tripId: selectedTrip.id,
                    seatNumber: seatNumber,
                    price: selectedTrip.price,
                };

                tickets.push(newTicket);
                nextTicketId++;
                selectedTrip.availableSeats = selectedTrip.availableSeats - 1;

                console.log("Ticket acheté avec succès.");
                console.log(`Ticket #${newTicket.id}`);
                console.log(`Passager : ${newTicket.passengerName}`);
                console.log(`Trajet : ${selectedTrip.departure} → ${selectedTrip.destination}`);
                console.log(`Place : ${newTicket.seatNumber}`);
                console.log(`Prix : ${newTicket.price} DH`);
                // console.log(`Places restantes : ${selectedTrip.availableSeats}`);
            }
            break;
        }

        case 3: {
            console.log("=== TICKETS ===");

            if (tickets.length === 0) {
                // if tickets.length === 0 then we have no ticket available 
                console.log("Aucun ticket enregistré.");
            } else {
                for (let i = 0; i < tickets.length; i++) {
                    // currentTicket it has all information about trips if currentTicket = ticket[1] so currentTicket hav all information about ticket in index 1
                    let currentTicket = tickets[i];
                    let relatedTrip = findTripById(trips, currentTicket.tripId);
                        // her it get all information of  tickets like id passager and place and prix and for trajet this information we get it from relatedTrip 
                    console.log(`Ticket #${currentTicket.id}`);
                    console.log(`Passager : ${currentTicket.passengerName}`);
                    console.log(`Trajet : ${relatedTrip.departure} → ${relatedTrip.destination}`);
                    console.log(`Place : ${currentTicket.seatNumber}`);
                    console.log(`Prix : ${currentTicket.price} DH`);
                    console.log("-----------------------------");
                }
            }
            break;
        }

        case 4: {
            let ticketIdCancel = Number(prompt("Identifiant du ticket : "));
            let ticketIndex = -1;

            for (let i = 0; i < tickets.length; i++) {
                if (tickets[i].id === ticketIdCancel) {
                    ticketIndex = i;
                    break;
                }
            }

            if (ticketIndex === -1) {
                console.log("Ticket introuvable.");
            } else {
                let ticketCancel = tickets[ticketIndex];
                // ticketcancel it have all information about ticket
                let relatedTrip = findTripById(trips, ticketCancel.tripId);
                // we use let relatedTrip = findTripById(trips, ticketCancel.tripId); for get available seat because ticketCancel do not hav available seat but when we get tripId we can know info of trip and know available seat
                tickets.splice(ticketIndex, 1);
                // ticketIndex its the place of ticket we said to splice remov ticket in this place nd remov just one
                relatedTrip.availableSeats = relatedTrip.availableSeats + 1;
                            if (ticketCancel.id === nextTicketId - 1) {
                nextTicketId = ticketCancel.id;
            }

                console.log("Ticket annulé avec succès.");
            }
            break;
        }

        case 5: {
            let searchName = prompt("Nom du passager : ");
            let foundTickets = findTicketsByPassenger(tickets, searchName);

            if (foundTickets.length === 0) {
                console.log("Aucun ticket trouvé.");
            }else{
                for (let i = 0; i < foundTickets.length; i++) {
                    let relatedTrip = findTripById(trips, foundTickets[i].tripId);
                    // we use foundTicket for search information of ticket because it have all information about ticket but departure and destination this information its in trip info
                    console.log(`Ticket #${foundTickets[i].id}`);
                    console.log(`Passager : ${foundTickets[i].passengerName}`);
                    console.log(`Trajet : ${relatedTrip.departure} → ${relatedTrip.destination}`);
                    console.log(`Place : ${foundTickets[i].seatNumber}`);
                    console.log(`Prix : ${foundTickets[i].price} DH`);
                    console.log("------------------");
                }
            }
            break;
        }

        case 6: {
            let cityFilter = prompt("Ville de départ : ");
            let filteredTrips = [];

            for (let i = 0; i < trips.length; i++) {
                if (trips[i].departure.toLocaleLowerCase() === cityFilter.toLowerCase()) {
                    filteredTrips.push(trips[i]);
                }
            }

            if (filteredTrips.length === 0) {
                console.log("Aucun trajet trouvé.");
            } else {
                for (let i = 0; i < filteredTrips.length; i++) {
                    // we put console.log() in loop for show avery trip in line and also for avoid scop problem  for i 
                    console.log(`${filteredTrips[i].departure} → ${filteredTrips[i].destination} : ${filteredTrips[i].price} DH`);
                }
            }
            break;
        }

        case 7: {
            let sortedTrips = [...trips];

            for (let i = 0; i < sortedTrips.length - 1; i++) {
                for (let j = i+1; j < sortedTrips.length; j++) {
                    if (sortedTrips[i].price > sortedTrips[j].price) {
                        let temp = sortedTrips[i];
                        sortedTrips[i] = sortedTrips[j];
                        sortedTrips[j] = temp;
                    }
                }
            }

            for (let i = 0; i < sortedTrips.length; i++) {
                console.log(`${sortedTrips[i].departure} → ${sortedTrips[i].destination} : ${sortedTrips[i].price} DH`);
            }
            break;
        }
        case 8:
            let statistique = tickets.length
            console.log(`les tickets vendu est ${statistique}`)
        break

        case 0: {
            console.log("Au revoir.");
            break;
        }

        default: {
            console.log("Choix invalide.");
            break;
        }
    }
}
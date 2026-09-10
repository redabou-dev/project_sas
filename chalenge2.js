const info = {
    nom:"boukrim",
    prenom: "reda",
    note: [14,12,17,20],
}
console.log(`letudient ${info.nom} ${info.prenom}`)
console.log("list des notes est "+ info.note.join(", "))
let somme = 0;
for(let note of info.note){
    somme += note
}
let moyenne = somme/info.note.length;
console.log("la moyenne est : ",moyenne)
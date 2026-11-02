import { groupes , eleves } from "./data.js";

const eleve = document.querySelector("#liste-eleves")
const compteur = document.querySelector("#compteur")

function creerLigne(eleve) {
    let liste = document.createElement("li");
    liste.classList.add("eleve-card");
    liste.textContent = eleve.prenom + " " + eleve.nom;
    return liste;
}

let lignes = eleves.map(function(eleve) {
 return creerLigne(eleve);

});

lignes.forEach(function(ligne) {
    eleve.append(ligne);
});

compteur.textContent = eleves.length + " eleves";
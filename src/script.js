import { groupes , eleves } from "./data.js";

const listeEleves = document.querySelector("#liste-eleves");
const compteur = document.querySelector("#compteur");
const filtreGroupes = document.querySelector("#filtre-groupe");
const rechercher = document.querySelector("#recherche");
const aucunResultat = document.querySelector("#aucun-resultat");


function creerLigne(eleve) {
    let liste = document.createElement("li");
    liste.classList.add("eleve-card");

    let somme = 0;
    for (let i = 0; i < eleve.notes.length; i++) {
        somme = somme + eleve.notes[i];
    }
    let moyenne = "—";

    if (eleve.notes.length > 0) {
        moyenne = (somme / eleve.notes.length).toFixed(2);
        moyenne = moyenne.replace(".", ",");
    }
    let info = document.createElement("div");
    info.classList.add("eleve-info");
    
    let nom = document.createElement("p");
    nom.classList.add("eleve-nom");
    nom.textContent = eleve.prenom + " " + eleve.nom;

    let absences = document.createElement("p");
    absences.classList.add("eleve-absences");
    absences.textContent = eleve.absences + " absence(s)";


    let note = document.createElement("span");
    note.classList.add("eleve-moyenne");

    if (moyenne === "—") {
        note.textContent = "—";
    } else {
        note.textContent = moyenne + " / 20";
    }
    info.append(nom);
    info.append(absences);
    liste.append(info);
    liste.append(note);
    return liste;
}

let lignes = eleves.map(function(eleve) {
 return creerLigne(eleve);

});

lignes.forEach(function(ligne) {
    listeEleves.append(ligne);
});

compteur.textContent = eleves.length + " eleves";


groupes.forEach(function(groupe) {
    let option = document.createElement("option");
    option.textContent = groupe.nom;
    option.value = groupe.id;
    filtreGroupes.append(option);
});

function afficherEleves() {
    let groupeChoisi = filtreGroupes.value;
    let texteRecherche = rechercher.value.trim().toLowerCase();

    let resultat = eleves.filter(function(eleve) {
        let correspondAuGroupe = groupeChoisi === "" || Number(groupeChoisi) === eleve.groupeId;
        let correspondALaRecherche =
            eleve.prenom.toLowerCase().includes(texteRecherche) ||
            eleve.nom.toLowerCase().includes(texteRecherche);

        return correspondAuGroupe && correspondALaRecherche;
    });

    listeEleves.textContent = "";

    resultat.forEach(function(eleve) {
        listeEleves.append(creerLigne(eleve));
    });

    compteur.textContent = resultat.length + (resultat.length > 1 ? " élèves" : " élève");

    if (resultat.length === 0) {
        aucunResultat.hidden = false;
    } else {
        aucunResultat.hidden = true;
    }
}

filtreGroupes.addEventListener("change", function() {
    afficherEleves();
});

rechercher.addEventListener("input", function() {
    afficherEleves();
});

afficherEleves();

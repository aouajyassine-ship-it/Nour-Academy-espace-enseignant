import { groupes, eleves as elevesInitiales } from "./data.js";
let eleves = JSON.parse(localStorage.getItem("eleves")) || elevesInitiales;

const listeEleves = document.querySelector("#liste-eleves");
const compteur = document.querySelector("#compteur");
const filtreGroupes = document.querySelector("#filtre-groupe");
const rechercher = document.querySelector("#recherche");
const aucunResultat = document.querySelector("#aucun-resultat");
const tri = document.querySelector("#tri");

function creerLigne(eleve) {
    let liste = document.createElement("li");
    liste.classList.add("eleve-card");
    liste.dataset.id = eleve.id;

    if (eleve.absences >= 3) {
    liste.classList.add("eleve-alerte");
}
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

    let absent = document.createElement("button");
    absent.textContent = "Absent";
    absent.classList.add("btn-absent");

    let ajouterNote = document.createElement("button");
    ajouterNote.textContent = "Ajouter la note";
    ajouterNote.classList.add("btn-note");

    if (moyenne === "—") {
        note.textContent = "—";
    } else {
        note.textContent = moyenne + " / 20"
    }



    info.append(nom);
    info.append(absences);
    liste.append(info);
    liste.append(note);
    liste.append(absent);
    liste.append(ajouterNote);

    return liste;

}

// Remplir le select des groupes
groupes.forEach(function(groupe) {
    let option = document.createElement("option");
    option.textContent = groupe.nom;
    option.value = groupe.id;
    filtreGroupes.append(option);
});


function calculerMoyenne(eleve) {
    let somme = 0;
    for (let i = 0; i < eleve.notes.length; i++) {
        somme = somme + eleve.notes[i];
    }
    if (eleve.notes.length === 0) {
        return 0;
    }
    return somme / eleve.notes.length;
}

function trierParMoyenne(a, b) {
    return calculerMoyenne(b) - calculerMoyenne(a);
}

// Trier par nom alphabétique
function trierParNom(a, b) {
    return a.nom.localeCompare(b.nom);
}
// Afficher les élèves
function afficherEleves() {
    let groupeChoisi = filtreGroupes.value;
    let texteRecherche = rechercher.value.trim().toLowerCase();
    let resultat = eleves.filter(function(eleve) {
        let correspondAuGroupe =groupeChoisi === "" || Number(groupeChoisi) === eleve.groupeId;
        let correspondALaRecherche = eleve.prenom.toLowerCase().includes(texteRecherche) || eleve.nom.toLowerCase().includes(texteRecherche);
        return correspondAuGroupe && correspondALaRecherche;
    });
    // Créer une copie pour préserver l'ordre original
    resultat = [...resultat];

    if (tri.value === "nom") {
        resultat.sort(trierParNom);
    }
    if (tri.value === "moyenne") {
        resultat.sort(trierParMoyenne);
    }
    listeEleves.textContent = "";
    // Afficher les résultats
    resultat.forEach(function(eleve) {
        listeEleves.append(creerLigne(eleve));
    });
    // Mettre à jour le compteur
    compteur.textContent = resultat.length + " élèves";

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

tri.addEventListener("change", function() {
    afficherEleves();
});

afficherEleves();

listeEleves.addEventListener("click", function(event) {
    let bouton = event.target.closest(".btn-absent");
    if (bouton) {
        let ligne = bouton.closest(".eleve-card");
        let id = Number(ligne.dataset.id);
        let eleve = eleves.find(function(eleve) {
            return eleve.id === id;
        });
        eleve.absences++;
        localStorage.setItem("eleves", JSON.stringify(eleves));
        ligne.replaceWith(creerLigne(eleve));
    }
});
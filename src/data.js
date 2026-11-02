
export { groupes , eleves };
// Liste des groupes
const groupes = [
    {
        id: 1,
        nom: "2ème Bac",
        cours: "Mathématiques"
    },
    {
        id: 2,
        nom: "1ère Bac",
        cours: "Physique"
    },
    {
        id: 3,
        nom: "Tronc Commun",
        cours: "Informatique"
    }
];

// Liste des élèves
const eleves = [
    // Groupe 1 : 2ème Bac
    {
        id: 1,
        prenom: "Sara",
        nom: "Amrani",
        groupeId: 1,
        telephoneParent: "0612345678",
        absences: 1,
        notes: [15, 17, 14]
    },
    {
        id: 2,
        prenom: "Youssef",
        nom: "Alaoui",
        groupeId: 1,
        telephoneParent: "0623456789",
        absences: 3,
        notes: [12, 14, 16]
    },
    {
        id: 3,
        prenom: "Imane",
        nom: "Bennani",
        groupeId: 1,
        telephoneParent: "0634567890",
        absences: 0,
        notes: [18, 17, 19]
    },
    {
        id: 4,
        prenom: "Hamza",
        nom: "Idrissi",
        groupeId: 1,
        telephoneParent: "0645678901",
        absences: 2,
        notes: [10, 13, 12]
    },
    {
        id: 5,
        prenom: "Salma",
        nom: "Fahmi",
        groupeId: 1,
        telephoneParent: "0656789012",
        absences: 4,
        notes: []
    },

    // Groupe 2 : 1ère Bac
    {
        id: 6,
        prenom: "Anas",
        nom: "Karimi",
        groupeId: 2,
        telephoneParent: "0667890123",
        absences: 1,
        notes: [14, 15, 13]
    },
    {
        id: 7,
        prenom: "Meryem",
        nom: "Tazi",
        groupeId: 2,
        telephoneParent: "0678901234",
        absences: 0,
        notes: [16, 18, 17]
    },
    {
        id: 8,
        prenom: "Omar",
        nom: "Bouzidi",
        groupeId: 2,
        telephoneParent: "0689012345",
        absences: 3,
        notes: [11, 12, 14]
    },
    {
        id: 9,
        prenom: "Aya",
        nom: "El Fassi",
        groupeId: 2,
        telephoneParent: "0690123456",
        absences: 2,
        notes: [19, 18, 17]
    },
    {
        id: 10,
        prenom: "Mehdi",
        nom: "Chakir",
        groupeId: 2,
        telephoneParent: "0601234567",
        absences: 1,
        notes: []
    },

    // Groupe 3 : Tronc Commun
    {
        id: 11,
        prenom: "Nour",
        nom: "El Amrani",
        groupeId: 3,
        telephoneParent: "0611122233",
        absences: 0,
        notes: [13, 15, 14]
    },
    {
        id: 12,
        prenom: "Adam",
        nom: "Rami",
        groupeId: 3,
        telephoneParent: "0622233344",
        absences: 2,
        notes: [12, 11, 14]
    },
    {
        id: 13,
        prenom: "Hiba",
        nom: "Mansouri",
        groupeId: 3,
        telephoneParent: "0633344455",
        absences: 3,
        notes: [17, 16, 18]
    },
    {
        id: 14,
        prenom: "Ilyas",
        nom: "Berrada",
        groupeId: 3,
        telephoneParent: "0644455566",
        absences: 1,
        notes: [10, 12, 13]
    },
    {
        id: 15,
        prenom: "Chaimae",
        nom: "Lahlou",
        groupeId: 3,
        telephoneParent: "0655566677",
        absences: 0,
        notes: []
    }
];

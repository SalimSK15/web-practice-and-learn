// function isPalindrom (chaine){
//     const strOrigine = chaine.toLowerCase().replace(/[^a-z0-9àâäèéêëìîïòôöùûüÿç]/g,"");
//     console.log(`origine : ${strOrigine}`);
//     const strInverse = strOrigine.split('').reverse().join('');
//     console.log(`Inverse : ${strInverse}`);

//     return strOrigine === strInverse;
// }
// const strEntree = prompt("Veuillez saisir une chaine");
// console.log(strEntree);


// if(isPalindrom(strEntree))
//     console.log(`${strEntree} -> est un palindrom`);
// else 
//     console.log(`"${strEntree}" -> n'est pas in palindrome`);

/* Exo : les notes  */
// const notesEleves = [
//     {
//         nom: "Alice",
//         matieres: {
//             Mathematiques: 16,
//             Francais: 14,
//             Histoire: 13,
//             Physique: 15,
//             Anglais: 17,
//         },
//     },
//     {
//         nom: "Benjamin",
//         matieres: {
//             Mathematiques: 12,
//             Francais: 15,
//             Histoire: 17,
//             Physique: 10,
//             Anglais: 14,
//         },
//     },
//     {
//         nom: "Chloe",
//         matieres: {
//             Mathematiques: 19,
//             Francais: 18,
//             Histoire: 14,
//             Physique: 16,
//             Anglais: 15,
//         },
//     },
//     {
//         nom: "David",
//         matieres: {
//             Mathematiques: 10,
//             Francais: 11,
//             Histoire: 12,
//             Physique: 14,
//             Anglais: 13,
//         },
//     },
//     {
//         nom: "Emma",
//         matieres: {
//             Mathematiques: 13,
//             Francais: 14,
//             Histoire: 15,
//             Physique: 12,
//             Anglais: 16,
//         },
//     },
// ];
// const students = [
//     {
//         name: 'John',
//         notes: [1, 20, 18, 19, 12]
//     },
//     {
//         name: 'Jane',
//         notes: [17, 18, 20, 13, 15]
//     },
//     {
//         name: 'Sophie',
//         notes: [17, 12, 14, 15, 13]
//     },
//     {
//         name: 'Marc',
//         notes: [2, 2, 5, 18, 9]
//     },
//     {
//         name: 'Manon',
//         notes: [18, 17, 18, 19, 12]
//     }
// ]
// for(const eleve of notesEleves){
//     let somme = 0;
//     for (const note in eleve.matieres){
//         somme=+eleve.matieres[note]
//         console.log(`${note} : ${eleve.matieres[note]}`);
//     }
// }
// calcule de la moyenne pour chaque eleves
// const moyenne = (notes) => {
//     let somme = 0;
//     for (let note of notes) {
//         somme += note;
//     }
//     return somme/notes.length;
// }
// fonction de comparaison
// const compareStudent = (a, b) => { return b.moyenne - a.moyenne; } 
// for (const eleve of students){
//     eleve.moyenne = moyenne(eleve.notes) 
// }

// affichage etudiangt
// function affichageStudent(etudiant){
//     console.log(`${etudiant.notes}`);
//     return ( `${etudiant.name} 
//             | ${etudiant.moyenne} 
//             | Notes (Best: ${Math.max(...(etudiant.notes))} Worst: ${Math.min(...(etudiant.notes))}) `);
// }

// console.log(`${students.name} -> Moyenne : ${students.moyenne}`); 
// console.log(students.sort(compareStudent));
// console.log('les 3 top eleves selon la moyenne'); 
// for (const eleve in students){
//     console.log(`"Top ${eleve*1 + 1}":: ${affichageStudent(students[eleve])} `);
//     if(eleve > 1) break;
// }

/* Exo : occurences des mots */
//     const strOrigine = chaine.toLowerCase().replace(/[^a-z0-9àâäèéêëìîïòôöùûüÿç]/g,"");

// const wordToStr = (word, phrase, D, F) =>{
//     for(let i = D; i < F; i++){
//         if(word === phrase[i])
//             return true;
//     }
//     return false;
// }
// let chaineDebart = prompt("Veuillez saisir une chaine");
// "Le chat, le chien... le chat dort!"
//  chaineDebart = chaineDebart.toLowerCase().replace(/[^a-z0-9\s]/g, ""); // Nettoyage global
// console.log(chaineDebart);
// nettoyage de la chaine
// const nettoye = chaineDebart.toLocaleLowerCase();
// const tabChaine = nettoye.split(" ");
// for(const mot in tabChaine){
//     tabChaine[mot] = tabChaine[mot].replace(/[^a-z0-9]/g,"");    
// }

// let occurrenceMot = [];
// console.log(tabChaine);
// for(word of tabChaine){
//     const motExiste = occurrenceMot.find(({mot}) => mot === word);
    
//     if(motExiste){
//         motExiste.nbOcc++;
//     }else{
//         occurrenceMot.push({mot: word, nbOcc: 1})
//     }
// }
// console.log(occurrenceMot);

// solution chatgpt
// const chaineDebart = prompt("Veuillez saisir une chaîne :");

// Vérification de l'entrée
// if (!chaineDebart.trim()) {
//     console.log("La chaîne est vide !");
// }else {
    // Nettoyage et calcul des occurrences
//     const nettoye01 = chaineDebart.toLowerCase().replace(/[^a-z0-9\s]/g, ""); // Nettoyage global
//     const mots = nettoye01.split(" "); // Diviser en mots
//     const occurrences = {}; // Initialisation de l'objet pour stocker les occurrences
//     console.log(mots);
//     for (const mot of mots) {
//         console.log(occurrences[mot]);
//         console.log((occurrences[mot] || 0) + 1);
//         if (mot.trim()) { // Ignorer les mots vides
//             occurrences[mot] = (occurrences[mot] || 0) + 1;
//         }
//     }

//     console.log(occurrences);
// }




// 1. Déclaration des variables
const input = document.getElementById('taskInput');         // Champ de saisie pour la tâche
const button = document.getElementById('addTaskButton');     // Bouton pour ajouter la tâche
const ul = document.querySelector('ul');                    // Liste des tâches

// 2. Fonction pour ajouter une tâche
function addTask() {
  // Vérifie si l'input n'est pas vide
  if (input.value.trim() !== '') {
    // Crée un élément li pour la nouvelle tâche
    const li = document.createElement('li');

    // Crée un span pour afficher le texte de la tâche
    const span = document.createElement('span');
    span.textContent = input.value;  // Le texte saisi par l'utilisateur

    // Crée un bouton pour supprimer la tâche
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete');  // Ajoute une classe CSS pour le style

    // Ajoute le texte et le bouton au li
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Ajoute le li à la liste ul
    ul.appendChild(li);

    // Réinitialise l'input pour permettre l'ajout d'une nouvelle tâche
    input.value = '';
  }
}

// 3. Fonction pour supprimer une tâche
function deleteTask(e) {
  // Vérifie si l'élément cliqué est un bouton de suppression
  if (e.target && e.target.classList.contains('delete')) {
    // Supprime l'élément li correspondant
    e.target.parentElement.remove();
  }
}

// 4. Fonction pour marquer une tâche comme terminée
function toggleComplete(e) {
  // Vérifie si l'élément cliqué est un span (le texte de la tâche)
  if (e.target && e.target.tagName === 'SPAN') {
    // Ajoute ou enlève la classe "completed" pour barrer la tâche
    e.target.parentElement.classList.toggle('completed');
  }
}

// 5. Ajouter des événements
// Ajouter une tâche au clic sur le bouton "Ajouter"
button.addEventListener('click', addTask);

// Ajouter une tâche en appuyant sur la touche "Entrée"
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Supprimer une tâche si l'utilisateur clique sur le bouton "Supprimer"
ul.addEventListener('click', deleteTask);

// Marquer une tâche comme terminée si l'utilisateur clique sur le texte de la tâche
ul.addEventListener('click', toggleComplete);

/*          ==========================        =====================  */


function isPremier(val){
    let premier=true;
    if(val <= 1){
        console.log(val+" : nest pas un nombre premier");
    }else{
        for(let i = 2; i <= Math.floor(Math.sqrt(val)); i++){
            if(val % i === 0)
                premier = false;
        }
        if(premier)
            console.log(val+" : est un nombre premier ");
        else
            console.log(val +" : n'est pas un nombre premier ");
    }
}

isPremier();



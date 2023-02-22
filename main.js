// création de variable pour cibler le bouton et la liste dans le DOM
var monBouton = document.querySelector('#buttonMenu');
var listMenu = document.querySelector('ul');

// affichage de la variable listMenu dans la console
console.log(listMenu);
// création d'une fonction pour ouvrir le menu
 function MenuOpen(){
    // utilisation de la methode toggle pour ajouter ou supprimer la classe open
    listMenu.classList.toggle('open');
}
// ajout d'un écouteur d'événement sur le bouton pour lancer la fonction MenuOpen
monBouton.addEventListener('click', MenuOpen);

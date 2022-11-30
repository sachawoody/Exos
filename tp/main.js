// tp 19
// let bodySelector = document.querySelector("body");

// Fonction pour changer le backgroud du body:
// function setGradient(color1, color2) {
//   bodySelector.style.background = `linear-gradient(to right, ${color1}, ${color2})`; // to right: pour que ça aille de gauche à droite
// }
// function changeButtonColor(color1, color2) {
//     buttonSelector.style.background = `linear-gradient(to right, ${color1}, ${color2})`; // to right: pour que ça aille de gauche à droite
// }

// Fonction pour générer une couleur aléatoire en HEX:
// function randomColor() {
//   var newColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
//   return newColor; // Return pour récupérer la valeur.
// }

// setGradient(randomColor(), randomColor()); // J'appelle la fonction pour changer le background avec deux couleurs aléatoires.

// tp20
// var imageSelector = document.querySelector("img");
// var buttonSelector = document.querySelector("button");
// var audio = new Audio("rickRoll.mp3");

// initializeVideo(); // Create Rick Roll video if doesn't exist

// imageSelector.addEventListener("click", function (event) {
//   let videoSelector = document.querySelector("#troll");
//   let imageSelector = document.querySelector("img")
//   imageSelector.src = "img/rickRoll.jpg"
//   videoSelector.setAttribute("muted", false);
//   console.log(videoSelector);
//   audio.play();
// });

// function initializeVideo() {
//   let videoSelector = document.querySelector("#troll");
//   if (videoSelector) return; // Cancel if video alredy exist
//   let newVideo = document.createElement("audio");
//   newVideo.src = "rickRoll.mp3";
//   newVideo.setAttribute("muted", true);
//   newVideo.id = "troll";
//   document.body.prepend(newVideo);
// }

// tp 21
// - Créez une fonctions permettant de générer une couleurs aléatoirement.
// - Essayez de faire changer la couleur d’un bouton toutes les 2 secondes à l’aide de setInterval et de
// votre fonction.
// - Créez un lien permettant d’arrêter ce changement de couleur. 

// buttonSelector.addEventListener("mouseover", function(event) {
//     var intervalButton = setInterval(() => {
//         changeButtonColor(randomColor(), randomColor());
//     }, 2000);
//     buttonSelector.addEventListener("click", function(event) {
//         clearInterval(intervalButton)
//         changeButtonColor("#FFFFFF", "#FFFFFF");
//     })
// })



// tp 25 
// - Créez un constructeur de “Stagiaire” avec pour attributs : nom, prénom, age, ville de naissance
// - Ce constructeur aura pour méthode “sePresenter” qui affichera tous les attributs nom, prénom,
// age et le nom de la ville de naissance.
// - Creéz un constructeur de “Ville” avec pour attribut : nom, nombre d’habitants, pays.
// - Créez deux objets de “stagiaire” et créez autant d’objets de “ville” que necessaire pour pouvoir
// assigner ces objets à l’attribut “ville” de naissance”.

// function Stagiaire(nom, prenom, age, ville) {
//     this.nom = nom;
//     this.prenom = prenom
//     this.age = age
//     this.ville = ville
//     this.sePresenter = () => { 
//         console.log(`Bonjour, je suis ${this.prenom} ${this.nom}! J'ai ${this.age} ans et je suis né à ${this.ville.nom}.`)
//     }
// }

// function Ville(nom, population, pays) {
//     this.nom = nom
//     this.population = population
//     this.pays = pays
// }


// let villeAvignon = new Ville("Avignon", "91000", "France")
// let villeMontpellier = new Ville("Montpellier", "307000", "France")

// let stagiaireSacha = new Stagiaire("Woody", "Sacha", "22", villeAvignon)
// let stagiaireLancelot = new Stagiaire("Carrau", "Lancelot", "20", villeMontpellier)

// stagiaireSacha.sePresenter()
// stagiaireLancelot.sePresenter()


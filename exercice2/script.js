// exo 1
//   - Créer une variable pour le nom de la boutique (shopName)
const shopName = "je suis shopp";
// - Créer une variable pour la ville (city)
const city = "Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = true;
// - Créer une variable pour le nombre de produits (productCount)
let productCount = 49;
// - Créer une variable pour le slogan ( slogan)
let slogan = "je suis riche donc je suis shop";
//  Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
console.log("bienvenue tout le monde" + shopName);

// - Afficher le slogan dans la console
// console.log(slogan);
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)
// console.log(slogan);
console.log(isOpen);

// exo 2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let messagedebienvenue = "bienvenue tout le monde";

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
let messagedebienvenue2 = "avec nous aujourdhui";
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
// concatenation
let message1 = ("" + messagedebienvenue + " " + messagedebienvenue2);
// interpolation
let message2 = (` ${messagedebienvenue} ${messagedebienvenue2}`);


// - Calculer la longueur du slogan
let longeur = (slogan.length);
// - Créer une version en majuscules du slogan
let upper = (slogan.toLocaleUpperCase());

// - Créer une version du slogan où un mot est remplacé par un autre
let change = (slogan.replace("shop", "danse"));


//   (indice : il existe une méthode pour remplacer une partie d’un texte)

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console

console.log(message1);
console.log(message2);
console.log(longeur);
console.log(upper);
console.log(change);






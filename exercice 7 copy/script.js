
/*************************************************
 * EXERCICE 5 - Afficher un produit vedette
 * Notions : DOM, createElement, appendChild,
 *           réutilisation des fonctions de prix
 *************************************************/

// const { createElement } = require("react");

/* --- Correction Exercices 1 à 4 --- */

/* Exercice 1 - Variables & infos de base */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

// Mise à jour d'un élément de tagline (si présent dans la page)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si span#year présent)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* Exercice 2 - Chaînes de caractères & messages */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";

let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

// Utilisation du slogan modifié dans un éventuel message de panier
const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* Exercice 3 - Nombres & calculs */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* Exercice 4 - Fonctions de prix */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

// Tests simples
const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Nouveautés Exercice 5 --- */
/* Afficher un produit vedette dans la page (sans objets) */

// 1) Variables du produit vedette
let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "https://images.unsplash.com/photo-1561347981-969c80cf4463?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// 2) Récupération de la section qui accueillera le produit
const productList = document.getElementById("product-list");

// 3) Fonction de création de la carte produit
function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

// 4) Affichage du produit vedette dans la page
productList.innerHTML = "";
const card = createFeaturedProductCard();
productList.appendChild(card);

console.log("Exercice 5 chargé ✅");

// ----------------------------Nouveautés Exercice 6 -----------------------------

// - créer tableau (productNames)
let productNames = ["jean", "jean slim", "jean regular"];
console.log(productNames = ["jean", "jean slim", "jean regular"]);

// - créer tableau (productPricesHT)
let productPricesHT = [35.99, 33.99, 37.99];
console.log(productPricesHT = [35.99, 33.99, 37.99]);

// - afficher dans la console la longueur du tableau (le nombre d'éléments à l'intérieur)
console.log("Nombre de produits :", productNames.length);

// 2) Fonction d'affichage console
function displayProductsInConsole() {
  productNames.forEach((name, index) => {
    const priceHT = productPricesHT[index];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);
    console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
  });
}

displayProductsInConsole();
// -------------------------------------------------------------------------------------------------------
// - 1 Créer un tableau contenant plusieurs produits
//   (chaque produit regroupe ses informations dans une même structure)
//   (indice : utiliser une syntaxe qui permet de stocker plusieurs propriétés ensemble)
let products = [
  {
    id: "1",
    title: "jeans",
    priceHT: 45.99,
    description: "Ce jean est comfortable.",
    imgUrl: "assets/images.jpeg",
  },
  {
    id: " 2",
    title: "Tshirt",
    priceHT: 65.99,
    description: "Ce tshirt est comfortable.",
    imgUrl: "assets/images.jpeg",
  },
  {
    id: "3",
    title: "short",
    priceHT: 25.99,
    description: "Ce short est comfortable",
    imgUrl: "assets/images.jpeg",
  },

];

// 2 - Récupérer la zone du DOM où tous les produits doivent être affichés
const produitList = document.getElementById("product-list");

// 3 - Adapter ou créer une fonction qui :
//     • reçoit un produit en paramètre
function createCard(produit) {
  //     • crée un conteneur pour la carte
}
//     • crée les éléments nécessaires (image, nom, prix TTC, description)
//     • utilise les propriétés du produit pour remplir ces éléments
//     • réutilise les fonctions de calcul et de formatage de prix
//     • renvoie la carte complète
// trouver ou mettre les futur card
// pour chaque produit, 
products.forEach((object) => {
  // creer une card
  const card = document.createElement("article");
  // article.classList.add("product-card")

  const titre = document.createElement("h3");
  card.appendChild(titre);
  console.log(object.title);
  titre.textContent = object.title;

  // s'occuper de l'image
  const image = document.createElement("img");
  card.appendChild(image);
  console.log(object.imgUrl);
  // mettre dans la source l'url
  // image.addEventListener = object.image;
  // console.log(object.image);


  const priceTTC = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");
});



// lui mettre du contenu qui sera le title de la recette
// mettre la card dans le productcard

// 4 - Créer une fonction qui :
//     • vide le contenu de la zone d’affichage des produits
//     • parcourt le tableau de produits
//     • pour chaque produit :
//         - crée une carte à partir de ce produit
//         - ajoute cette carte dans la zone d’affichage

// 5 Appeler cette fonction pour afficher tous les produits dans la page

// ------------------------------------------------ 8

// Créer les variables globales du panier :
// Crée une variable cartItemCount initialisée à 0.

let cartItemCount = 0;
// Crée une variable cartTotal initialisée à 0
let cartTotal = 0;

// Récupérer les éléments du DOM :


// cartCountHeader ← élément avec id "cart-count"
// cartTotalHeader ← élément avec id "cart-total"
// cartCountAside ← élément avec id "cart-count-aside"
// cartTotalAside ← élément avec id "cart-total-aside"
// cartMessage ← élément avec id "cart-message"



// Récupère l’élément du header qui affiche le nombre d’articles (id="cart-count") et stocke-le dans cartCountHeader.
// Récupère l’élément du header qui affiche le total (id="cart-total") et stocke-le dans cartTotalHeader.
// Récupère l’élément de l’aside qui affiche le nombre d’articles (id="cart-count-aside") et stocke-le dans cartCountAside.
// Récupère l’élément de l’aside qui affiche le total (id="cart-total-aside") et stocke-le dans cartTotalAside.
// Récupère l’élément qui affichera le message (id="cart-message") et stocke-le dans cartMessage.
// Créer la fonction getCartMessage(total) :

// Cette fonction prend un paramètre total.
// À l’intérieur, utilise une structure :
// si total est égal à 0, retourne un message du type : “Votre panier est vide.”
// sinon, si total est inférieur à 50, retourne un message du type : “Ajoutez encore des produits…”
// sinon, retourne un message du type : “Livraison offerte 🎉 …”
// Utilise des comparateurs (===, <) et un if / else if / else.
// Créer la fonction updateCartDisplay() :

// À l’intérieur, mets à jour :
// le texte de cartCountHeader avec cartItemCount
// le texte de cartTotalHeader avec cartTotal formaté grâce à formatPrice(cartTotal)
// le texte de cartCountAside avec cartItemCount
// le texte de cartTotalAside avec cartTotal formaté
// le texte de cartMessage avec le résultat de getCartMessage(cartTotal)
// Pense à vérifier que chaque élément du DOM existe avant de modifier son textContent (optionnel mais conseillé).
// Tester plusieurs états du panier (manuellement dans le code) :

// Modifie la valeur de cartItemCount et cartTotal pour simuler un panier vide, un panier sous 50€ et un panier au-dessus de 50€.
// Après chaque modification, appelle updateCartDisplay() pour voir le résultat dans la page.
// Exemple d’ordre de tests :
// cartItemCount = 0; cartTotal = 0;
// cartItemCount = 2; cartTotal = 30;
// cartItemCount = 4; cartTotal = 60;


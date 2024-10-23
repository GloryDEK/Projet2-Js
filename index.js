// Checkpoint2 Js


/* Reverse string

function reverseString(str) {
    return str.split('').reverse().join('');
}

let phrase = reverseString('! ruojnoB');
console.log (phrase);
*/



// Count Characters

/*function countCharacters(str) {
    return str.length;
}
let mots= countCharacters("GoMyCode");
console.log (mots);
*/



/* Capitalisation de premieres lettres

function UpCase(str) {
    let words = str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalise la première lettre
    });
    return words.join(' ');  // Retourne la phrase jointe
}

console.log(UpCase('je rentre a la maison'));  
*/ 



/*Fonction max et min

// Fonction pour trouver le maximum
function trouverMax(arr) {
    return Math.max(...arr);  // Utilisation du spread operator
}

// Fonction pour trouver le minimum
function trouverMin(arr) {
    return Math.min(...arr);  // Utilisation du spread operator
}

// Verification
let tableau = [21,77, 0, 12, 6, 1, 49, 9, 2, 1];

let max = trouverMax(tableau);
let min = trouverMin(tableau);

console.log("La valeur maximale est : " + max);  
console.log("La valeur minimale est : " + min);  /
*/



/* Fonction pour la somme des elements d'un tableau

function sommeTableau(arr) {
    let somme = 0;  
    for (let i = 0; i < arr.length; i++) {
        somme += arr[i];  // utilisation d'une boucle et l'instruction qui permet l'ajout
    }
    return somme;  
}

// Verification 
let tableau = [21 ,77 , 0, 12, 6, 1, 49, 9, 2, 1];
let somme = sommeTableau(tableau);

console.log("La somme de tous les éléments du tableau est : " + somme);  // Affichage
*/



/* Fonction pour filtrer les éléments d'un tableau avec condition < 15

function filtrerTableau(arr) {
    let result = [];  // declaration du tableau qui prendra les éléments filtrés

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 15) {  // Condition
            result.push(arr[i]);  // Ajoute l'élément au tableau "result" si la condition est respecté
        }
    }

    return result;  // Retourne le tableau avec les éléments filtrés
}

// Verification
let tableau = [5, 12, 8, 145, 44, 2, 1, 63];
let result = filtrerTableau(tableau);

console.log("Les éléments inférieurs à 15 sont : " + result);  
*/



/* Fonction Factorielle

function factorielle(n) {
    let resultat = 1;  // Initialiser le résultat à 1 car fact de 1 et 0 = 1

    for (let i = 1; i <= n; i++) {
        resultat *= i;  
    }

    return resultat;  // Retourner la valeur de la factorielle
}

// Verification
let nombre = 7;
console.log("La factorielle de " + nombre + " est : " + factorielle(nombre));
*/



/* Fonction pour vérifier si un nombre est premier
function nbrePremier(n) {
    
    if (n <= 1) return false; // car 1 et tous les nbres < 1 sont pas premiers

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; //si n a un modulo, donc n n'est pas un nombre premier
        }
    }
    
    return true; // n est un nombre premier
}

// Verification
let nombre = 9;
if (nbrePremier(nombre)) {
    console.log(nombre + " est un nombre premier.");
} else {
    console.log(nombre + " n'est pas un nombre premier.");
}
*/



/* Fibonacci Sequence
function fibonacci(n){
    const fib = [0, 1]; // declaration de la variable
    for(let i = 2; i < n; i++){ // boucle et initiation a 2
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;  // retourne la valeur selon application de la suite de fibonacci
}

console.log(fibonacci(4));
console.log(fibonacci(7));
console.log(fibonacci(3));
*/

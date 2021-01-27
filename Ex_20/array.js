//******** Ex 1 *********
/*// 1
let nom = prompt("Quel est votre nom ?");

while (!nom){
    alert("Répondez à la question")
    nom = prompt("Quel est votre nom ?");
}
//2
let chiffre = prompt("un chiffre svp");
while (chiffre < 10){
    alert("chiffre trop petit");
    chiffre = prompt("un chiffre svp");
}


//3
console.log("cet exercice fait une boucle infini, je vais pas la lancer");

//4
let coucou = 7;
let i = 3;
while (i< coucou){
    console.log("voici le chiffre du jour : " + i);
    i++;
}

//5
let hey = parseInt(prompt("un nombre entre 20 et 40, svp"));
i = 0; //la variable i est déclarée plus haut

while (i <= hey){
    console.log(i);
    i += 2;
}
console.log("le nombre choisi était : " + hey);

//******** Ex 2 *********
let legumes = ["carotte", "courgette", "navet", "poireau"];
let caisseLegume = [];
i = legumes.length;

while (i-- > 0){
    console.log(legumes);
    caisseLegume[i]=legumes[i];
    legumes.splice(i, 1);
}
console.log(caisseLegume);


//******** Ex 3 *********
let enigme = prompt("Qu'est ce qui est jaune et qui attend?");

while (enigme != "jonathan"){
    enigme = prompt("Réessayez : Qu'est ce qui est jaune et qui attend?");
}
alert("Bravo, vous avez trouvé la bonne réponse");

//******** Ex 4 *********

enigme = prompt("Qu'est ce qui est jaune et qui attend?");

do {
    enigme = prompt("Réessayez : Qu'est ce qui est jaune et qui attend?");
} while (enigme != "jonathan");

alert("Bravo, vous avez trouvé la bonne réponse");

//******** Ex 5 *********

let année = 2021;


//******** Ex 6 *********
*/
let panier = [];
let answer;

while (panier.length < 4) {
    panier.push(prompt("Quel légume voulez vous ?"));
    console.log(panier);
} // remplir le panier

answer = prompt("voici votre panier : " + panier + " Voulez vous retirer un élément?"); //affichez le panier

if (answer = "oui")
    answer = prompt("Quel légume ? " + panier);
    while (answer == panier[i]){
    }
else {
    alert("bon ap!, voici votre panier " + panier);
}


//vérifier si valeur existe ds tableau (boolean)
    // if true = retire l'élément
    // else bon appp


// Ex 4 Boucle for, Each  & condition
let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];

//1
console.log("\n 1.");

leTableau.forEach(element => {
    console.log(typeof element) 
}); 

//2

console.log("\n 2.");

let lesIntegers = [];
let lesStrings = [];
let lesAutres = [];

leTableau.forEach((element) => {
    switch (typeof element){
        case "number":
            lesIntegers.push(element);
        break;
        case "string":
            lesStrings.push(element);
        break;
        default:
            lesAutres.push(element);
        break;
    }
}); 
console.table(lesStrings);
console.table(lesAutres);
console.table(lesIntegers);

//3

console.log("\n 3.");
let lesGrandsIntegers = [];
let lesPetitsIntegers = [];
let lesPetitsStrings = [];
let lesGrandsStrings = [];

leTableau.forEach((element) => {
    switch (typeof element){
        case "number":
            if (element > 100){
                lesGrandsIntegers.push(element);
            }
            else {
                lesPetitsIntegers.push(element);
            }
        break;
        case "string":
            if (element.length < 6){
                lesPetitsStrings.push(element);
            }
            else {
                lesGrandsStrings.push(element);
            }     
        break;
    }
}); 
console.log("Tableau des petits strings" );
console.table(lesPetitsStrings);
console.log("Tableau des grands strings" );
console.table(lesGrandsStrings);
console.log("Tableau des petits integers" );
console.table(lesPetitsIntegers);
console.log("Tableau des grands integers" );
console.table(lesGrandsIntegers);

//4

console.log("\n 4.");

let random = [];
let premier_pot = [];
let deuxieme_pot =[];

for (let index = 0; index < 12; index++) {
    random[index] = prompt("entrez un chiffre");
        if (random <= 100){
            premier_pot.push(random);
        }
        else if (random > 100){
            deuxieme_pot.push(random);
         }
}
console.log(premier_pot);
console.log(deuxieme_pot);
console.log(random);

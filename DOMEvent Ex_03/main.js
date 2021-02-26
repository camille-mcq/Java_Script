/****Div à modifier****/
let div = document.getElementById("last");


// Background Color
let bouton = document.querySelectorAll("button");
// Bouton blanc
bouton[0].addEventListener("click", () => {
    div.style.backgroundColor = "#cecaca";
});
// Bouton rouge
bouton[1].addEventListener("click", () => {
    div.style.backgroundColor = "red";
});
// Bouton vert
bouton[2].addEventListener("click", () => {
    div.style.backgroundColor = "green";
});
// bouton bleu
bouton[3].addEventListener("click", () => {
    div.style.backgroundColor = "blue";
});

// Border
// Solid
bouton[4].addEventListener("click", () => {
    div.style.border = "solid 5px black";
});
// dotted
bouton[5].addEventListener("click", () => {
    div.style.border = "dotted 4px black";
});
// Thin
bouton[6].addEventListener("click", () => {
    div.style.border = "solid 1px black";
});

//Border Top
// No border
bouton[7].addEventListener("click", () => {
    div.style.borderTop = "none";
});
// Border soft red
bouton[8].addEventListener("click", () => {
    div.style.borderTop = "solid red 1px";
});
// Border bold red
bouton[9].addEventListener("click", () => {
    div.style.borderTop = "solid red 6px";
});

/*****Select your color*****/
// Tous les input
let input = querySelectorAll("input");
input[0].addEventListener("click", () => {
    div.attributes.type = "color";
});

/***Select your border radius *****/
//Rouded
bouton[10].addEventListener("click", () => {
    div.style.borderRadius = "30px 30px 30px 30px";
});
//Top left
bouton[11].addEventListener("click", () => {
    div.style.borderRadius = "30px 0px 0px 0px";
});
//Rouded
bouton[12].addEventListener("click", () => {
    div.style.borderRadius = "0px 30px 0px 0px";
});
//Rouded
bouton[13].addEventListener("click", () => {
    div.style.borderRadius = "0px 0px 30px 0px";
});
//Rouded
bouton[14].addEventListener("click", () => {
    div.style.borderRadius = "0px 0px 0px 30px";
});

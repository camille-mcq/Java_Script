// Exo copy-img
let bouton = document.querySelector("button");
let div = document.getElementById("mignon-container");
let img = document.querySelector("img");
img.setAttribute("id", "copier/coller");

bouton.addEventListener("click", () => {
    let nouv_img = document.createElement("img");
    nouv_img = img.attributes;
    div.appendChild(nouv_img)
    console.log(div.innerHTML)
    
})

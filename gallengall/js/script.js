
console.log('hallo')
var hamburger = document.querySelector("img.hamburger");
var terugTitel = document.querySelector("section.mobile section")
var link = document.querySelector("nav.linkjes");
var knop = document.querySelector("a.meer");
var iconHart = document.querySelectorAll("img.hart");
var winkelwagen = document.querySelector("p.winkelwagen");
var toevoeg = document.querySelectorAll(".flesknop");
var hartNav = document.querySelector("img.switch");
var score = 0;


function navSchuif(){
    var navigatie = document.querySelector("section.mobile")
    navigatie.classList.toggle("zichtbaar");
    navigatie.classList.toggle("hidden");
}



function menuKlap(){
    link.classList.toggle("klein");
    if(link.classList.contains("klein")){
    knop.textContent= "Meer";
    } else{
        knop.textContent= "Minder";
    }
};

function iconSwap(){
    if(iconHart.classList.contains("showing")){
        iconHart.src = "./img/heart-color.png";
        hartNav.src = "./img/heart-color.png";
        iconHart.classList.remove("showing")
    } else{
        iconHart.src = "./img/heart.png";
        hartNav.src = "./img/heart.png";
        iconHart.classList.add("showing")
    }
};

function winkelPlus(){
    var flesPlus = 1;
    score = score + flesPlus;
    winkelwagen.textContent = score;
    winkelwagen.classList.add("positive")

};

function test(){
    console.log("de functie werk!")
}

hamburger.addEventListener("click", navSchuif);

terugTitel.addEventListener("click", navSchuif);

knop.addEventListener('click',menuKlap);

iconHart[0].addEventListener("click", iconSwap);
iconHart[1].addEventListener("click", iconSwap);

toevoeg[0].addEventListener("click",winkelPlus);
toevoeg[1].addEventListener("click",winkelPlus);


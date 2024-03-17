var carousel_box = document.querySelector(".carousel-box");
var card = document.querySelector(".card");

// var width = card.clientWidth;
var width = carousel_box.clientWidth;


var btnNext = document.querySelector("#btnNext");
var btnPrev = document.querySelector("#btnPrev");
btnNext.addEventListener("click", nextCard);
btnPrev.addEventListener("click", prevCard);

function nextCard(){
    carousel_box.scrollLeft = carousel_box.scrollLeft + width;
}

function prevCard(){
    carousel_box.scrollLeft = carousel_box.scrollLeft - width;
}

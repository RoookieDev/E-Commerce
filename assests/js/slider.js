const slides = document.querySelectorAll(".slide_img");


var btnPrev = document.querySelector("#prevBtn");
var btnNext = document.querySelector("#nextBtn");

var counter = 0;



slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`;
}
);





const goPrev =() =>{
    counter --;
    
    console.log(counter);
    if(counter < 0){
        counter = slides.length-1;
    }
    slideImage();
}
const goNext =() =>{
    counter ++;
   
    console.log(counter)
    if(counter >= slides.length){
        counter = 0;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

btnPrev.addEventListener("click", goPrev);
btnNext.addEventListener("click", goNext);

